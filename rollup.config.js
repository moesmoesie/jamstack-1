import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser";


function getRollupConfig(input,output,styleOutput){
    var plugins = [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        process.env.ENV === 'PRODUCTION' && terser()
    ]

    if(styleOutput !== ""){
        plugins.push(
            postcss({
                extract: styleOutput,
                config: {
                    path: "./postcss.config.js"
                },
                minimize: process.env.ENV === 'PRODUCTION'
            })
        )
    }

    

    return {
        input,
        output: {
            dir: output,
            format: 'es'
        },
        plugins
    };
}



module.exports = async function() {
    var bundels = [getRollupConfig("./src/lib/app.js", "_public", "style.css")]
    var pages = ['home']
    pages.forEach((pageName) => {
        const config = getRollupConfig(`./src/lib/pages/${pageName}`, `_public/pages/${pageName}`)
        bundels.push(config)
    })
    return bundels
}
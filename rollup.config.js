import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser";

module.exports = async function() {
    return {
        input: ['./src/lib/app.js'],
        output: {
        dir: '_public',
        format: 'es'
        },
        plugins: [
            postcss({
                extract: "style.css",
                config: {
                    path: "./postcss.config.js"
                },
                minimize: process.env.ENV === 'PRODUCTION'
            }),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs(),
            process.env.ENV === 'PRODUCTION' && terser()
        ]
    };
}
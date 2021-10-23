import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

module.exports = async function() {
    return {
        input: ['./src/lib/app.js'],
        output: {
        dir: '_public',
        format: 'es'
        },
        plugins: [
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
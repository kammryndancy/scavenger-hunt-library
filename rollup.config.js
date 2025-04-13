import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/scavenger-hunt.umd.js',
      format: 'umd',
      name: 'ScavengerHunt',
      sourcemap: true
    },
    {
      file: 'dist/scavenger-hunt.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react']
    })
  ],
  external: ['react', 'react-dom']
};

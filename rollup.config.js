import { createRollupConfigs } from './scripts/base.config.js'
import slug from 'remark-slug'
import { mdsvex } from 'mdsvex'
import autoPreprocess from 'svelte-preprocess'

const production = !process.env.ROLLUP_WATCH;
process.env.NODE_ENV = production ? "production" : "development";

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: cfg => cfg,
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: require('./postcss.config.js'),
      }),
      mdsvex({
        remarkPlugins: [slug],
        layout: {
          blog: 'src/components/Card.svelte'
        },
        extension: 'md'
      })
    ]
    svelte.extensions = ['.svelte', '.md']
    return svelte
  },
  swWrapper: cfg => cfg,
}

const configs = createRollupConfigs(config)

export default configs


/** wrapper example 1 */
// svelteWrapper: (cfg, ctx) => ({
//   ...cfg,
//   preprocess: mdsvex({ extension: '.md' }),
// })

/** wrapper example 2 */
// rollupWrapper: cfg => {
//   cfg.plugins = [...cfg.plugins, myPlugin()]
//   return cfg
// }
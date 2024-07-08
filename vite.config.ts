import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import VitePluginWindicss from "vite-plugin-windicss"
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
                })
            ]
        }
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src')
            }
        ],
    },
    plugins: [vue(), VitePluginWindicss()],
})
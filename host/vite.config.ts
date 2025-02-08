import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'app',
			remotes: {
				remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
			},
			shared: [
				'react',
				'react-dom',
				'@mui/material',
				'@emotion/react',
				'@emotion/styled',
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
	},
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
});

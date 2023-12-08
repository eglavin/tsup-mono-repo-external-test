import {defineConfig} from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm'],
	noExternal: ['remote'],

	dts: true,
	treeshake: true,
  clean: true,
  sourcemap: true,
  splitting: true,
});
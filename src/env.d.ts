/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module "@fontsource-variable/jetbrains-mono";
declare module "@fontsource-variable/jetbrains-mono/*";
declare module "*.css?inline" {
	const css: string;
	export default css;
}

<script lang="ts">
import { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants.ts";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import {
	applyThemeToDocument,
	getStoredTheme,
	setTheme,
} from "@utils/setting-utils.ts";
import { onMount } from "svelte";
import type { LIGHT_DARK_MODE } from "@/types/config.ts";

const seq: LIGHT_DARK_MODE[] = [LIGHT_MODE, DARK_MODE, AUTO_MODE];
let mode: LIGHT_DARK_MODE = AUTO_MODE;
let panelOpen = false;

onMount(() => {
	mode = getStoredTheme();
	const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
	const changeThemeWhenSchemeChanged: Parameters<
		typeof darkModePreference.addEventListener<"change">
	>[1] = (_e) => {
		applyThemeToDocument(mode);
	};
	darkModePreference.addEventListener("change", changeThemeWhenSchemeChanged);
	return () => {
		darkModePreference.removeEventListener(
			"change",
			changeThemeWhenSchemeChanged,
		);
	};
});

function switchScheme(newMode: LIGHT_DARK_MODE) {
	mode = newMode;
	setTheme(newMode);
}

function toggleScheme() {
	let i = 0;
	for (; i < seq.length; i++) {
		if (seq[i] === mode) {
			break;
		}
	}
	switchScheme(seq[(i + 1) % seq.length]);
}

function showPanel() {
	const panel = document.querySelector("#light-dark-panel");
	panel?.classList.remove("float-panel-closed");
	panelOpen = true;
}

function hidePanel() {
	const panel = document.querySelector("#light-dark-panel");
	panel?.classList.add("float-panel-closed");
	panelOpen = false;
}

function handleFocusOut(event: FocusEvent) {
	const currentTarget = event.currentTarget as HTMLElement;
	if (!currentTarget.contains(event.relatedTarget as Node | null)) {
		hidePanel();
	}
}
</script>

<!-- z-50 make the panel higher than other float panels -->
<div class="relative z-50" tabindex="-1" onmouseleave={hidePanel} onfocusin={showPanel} onfocusout={handleFocusOut}>
    <button type="button" aria-label="切换主题模式" aria-haspopup="menu" aria-expanded={panelOpen} aria-controls="light-dark-panel" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="scheme-switch" onclick={toggleScheme} onmouseenter={showPanel}>
        <div class="absolute" class:opacity-0={mode !== LIGHT_MODE}>
            <Icon icon="material-symbols:wb-sunny-outline-rounded" aria-hidden="true" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== DARK_MODE}>
            <Icon icon="material-symbols:dark-mode-outline-rounded" aria-hidden="true" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={mode !== AUTO_MODE}>
            <Icon icon="material-symbols:radio-button-partial-outline" aria-hidden="true" class="text-[1.25rem]"></Icon>
        </div>
    </button>

    <div id="light-dark-panel" role="menu" aria-label="主题模式" aria-hidden={!panelOpen} class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5" >
        <div class="card-base float-panel p-2">
            <button type="button" role="menuitemradio" aria-checked={mode === LIGHT_MODE} class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={mode === LIGHT_MODE}
                    onclick={() => switchScheme(LIGHT_MODE)}
            >
                <Icon icon="material-symbols:wb-sunny-outline-rounded" aria-hidden="true" class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.lightMode)}
            </button>
            <button type="button" role="menuitemradio" aria-checked={mode === DARK_MODE} class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={mode === DARK_MODE}
                    onclick={() => switchScheme(DARK_MODE)}
            >
                <Icon icon="material-symbols:dark-mode-outline-rounded" aria-hidden="true" class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.darkMode)}
            </button>
            <button type="button" role="menuitemradio" aria-checked={mode === AUTO_MODE} class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"
                    class:current-theme-btn={mode === AUTO_MODE}
                    onclick={() => switchScheme(AUTO_MODE)}
            >
                <Icon icon="material-symbols:radio-button-partial-outline" aria-hidden="true" class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.systemMode)}
            </button>
        </div>
    </div>
</div>

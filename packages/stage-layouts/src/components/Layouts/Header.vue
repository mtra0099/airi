<script setup lang="ts">
import { ProfileSwitcherPopover } from '@proj-airi/stage-ui/components'
import { useHud } from '@proj-airi/stage-ui/composables/use-hud'
import { useRouter } from 'vue-router'

import HeaderAvatar from './HeaderAvatar.vue'
import HeaderLink from './HeaderLink.vue'
import ActionAbout from './InteractiveArea/Actions/About.vue'

const router = useRouter()

const { hudVisible } = useHud()

function handleNavigation() {
  router.push('/settings/airi-card')
}
</script>

<template>
  <header mb-1 w-full flex items-center justify-between gap-2>
    <HeaderLink />
    <div flex items-center gap-2>
      <button
        title="Hide HUD"
        class="w-fit flex self-end justify-center border-2 border-neutral-100/60 rounded-xl border-solid bg-neutral-50/70 p-2 backdrop-blur-md md:items-center dark:border-neutral-800/30 dark:bg-neutral-800/70"
        @click="hudVisible = false"
      >
        <div i-solar:eye-closed-outline class="size-5" text="neutral-500 dark:neutral-400" />
      </button>
      <ActionAbout />
      <ProfileSwitcherPopover @manage="handleNavigation" />
      <HeaderAvatar />
    </div>
  </header>
</template>

import { useLocalStorage } from '@vueuse/core'

// Global singleton so the navbar (stage-layouts) and the stage page (stage-web) share it.
const hudVisible = useLocalStorage('settings/hud/visible', true)

export function useHud() {
  return { hudVisible }
}

import { defineStore } from 'pinia'

const store_name = 'main'

const getDefaultSettings = () => ({
  fontSize: 14,
  tabSize: 2,
  zoomLevel: 0,
})

export const useStore = defineStore(store_name, {
  state: () => ({
    settings: getDefaultSettings(),
  }),
  actions: {
    updateSettings(partialSettings) {
      this.settings = {
        ...this.settings,
        ...partialSettings,
      }
    },
  },
})
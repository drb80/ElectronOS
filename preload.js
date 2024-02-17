const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  cpuBrand: () => ipcRenderer.invoke('dialog:cpuBrand')
})

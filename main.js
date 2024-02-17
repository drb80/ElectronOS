const { app, BrowserWindow, ipcMain, dialog } = require('electron/main')
const path = require('node:path')
const si = require('systeminformation')

async function handleFileOpen () {
  const b = await si.cpu()
  return b.brand
}

function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.openDevTools()
}

app.whenReady().then(() => {
  ipcMain.handle('dialog:cpuBrand', handleFileOpen)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

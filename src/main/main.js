"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules to control application life and create native browser window
const electron_1 = require("electron");
const browser_1 = __importDefault(require("./browser"));
class Migu {
    init() {
        this.initApp();
    }
    initApp() {
        // This method will be called when Electron has finished
        // initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        electron_1.app.whenReady().then(() => {
            this.createBrowser();
            electron_1.app.on('activate', () => {
                // On macOS it's common to re-create a window in the app when the
                // dock icon is clicked and there are no other windows open.
                if (electron_1.BrowserWindow.getAllWindows().length === 0) {
                    this.createBrowser();
                }
            });
        });
        // Quit when all windows are closed.
        electron_1.app.on('window-all-closed', function () {
            // On macOS it is common for applications and their menu bar
            // to stay active until the user quits explicitly with Cmd + Q
            if (process.platform !== 'darwin')
                electron_1.app.quit();
        });
        // In this file you can include the rest of your app's specific main process
        // code. You can also put them in separate files and require them here.
        // Open the DevTools.
        // mainWindow.webContents.openDevTools()
    }
    createBrowser() {
        this.browser = new browser_1.default();
    }
}
new Migu().init();
exports.default = Migu;

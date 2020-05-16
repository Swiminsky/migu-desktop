"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const browserConfig = {
    width: 1200,
    height: 700,
    center: true,
    webPreferences: {
        preload: path_1.default.join(__dirname, 'preload.js')
    }
};
class Browser {
    constructor() {
        this.browserWindow = new electron_1.BrowserWindow(browserConfig);
        console.log('browser');
        this.init();
    }
    init() {
        this.browserWindow.loadURL('http://music.migu.cn/v3/music/player/audio');
    }
}
exports.default = Browser;

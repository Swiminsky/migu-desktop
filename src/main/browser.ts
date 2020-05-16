import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import path from "path";

const browserConfig: BrowserWindowConstructorOptions = {
  width: 1200,
  height: 700,
  center: true,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js')
  }
};

class Browser {
  browserWindow: BrowserWindow;
  constructor() {
    this.browserWindow = new BrowserWindow(browserConfig);
    console.log('browser');
    this.init();
  }
  init() {
    this.browserWindow.loadURL('http://music.migu.cn/v3/music/player/audio');
  }
}

export default Browser;

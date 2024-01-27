const {BrowserWindow,app} = require('electron');
require('electron-reload')(__dirname);


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        
        
        
    });
    win.loadFile('bounder-main/build/index.html');
    win.webContents.openDevTools();
    

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
}
);

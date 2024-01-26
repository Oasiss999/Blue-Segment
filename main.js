const {BrowserWindow,app} = require('electron');
require('electron-reload')(__dirname);


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 400,
        frame: false,
        
        
        
    });
    win.loadFile('screens/HomePage.html');
    

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
}
);

const { app, BrowserWindow } = require('electron');

function createWindow () {
  window = new BrowserWindow({
    width: 1000,
    height: 800
  });

  window.loadFile('./html/index.html');

  window.on('closed', () => {
    console.log('closed');
    window = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  console.log('window-all-closed');
  //非 Mac OS X 平台，直接调用 app.quit() 方法退出程序
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//窗口激活后触发 activate 事件
app.on('activate', () => {
  console.log('activate');
  if (win === null) {
    createWindow();
  }
});

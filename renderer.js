const { BrowserWindow } = require("@electron/remote");

// Close app
document.getElementById("close").addEventListener(
  "click",
  () => {
    BrowserWindow.getFocusedWindow().close();
  },
  false
);

// Close app
document.getElementById("devtools").addEventListener(
  "click",
  () => {
    BrowserWindow.getFocusedWindow().openDevTools();
  },
  false
);

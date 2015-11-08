var Menubar = require('menubar');
var Menu = require('menu');
var MenuItem = require('menu-item');
var ipc = require('ipc');
var globalShortcut = require('global-shortcut');

var menubar = Menubar({
  'show-on-all-workspaces': true
});

menubar.on('ready', function() {
  var menuTemplate = [
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Cut',
          accelerator: 'Cmd+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'Cmd+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'Cmd+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'Cmd+A',
          selector: 'selectAll:'
        }
      ]
    }
  ];

  var menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  globalShortcut.register('shift+alt+v', function() {
    menubar.showWindow();
  });
});

ipc.on('close-main-window', function() {
  menubar.app.quit();
});

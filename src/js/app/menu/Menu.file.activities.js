define(
    function() {

    var gui = require('nw.gui');
    var submenu = new gui.Menu();

    submenu.append(
      new gui.MenuItem({
          label: 'Twitter'
      })
    );
    // submenu.append(
    //   new gui.MenuItem({
    //       label: 'PDF'
    //   })
    // );

    return submenu;
});
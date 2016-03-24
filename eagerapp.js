(function(){

  // Set cookieconsent_options using INSTALL_OPTIONS
  window.cookieconsent_options = INSTALL_OPTIONS;

  // This is used by the preview to enable live updating of the app while previewing.
  // Uses update_cookieconsent_options function to customize Cookie Consent "on the fly"
  INSTALL_SCOPE = {
    setOptions: function (opts) {
    	window.update_cookieconsent_options(opts);
    }
  };
})()
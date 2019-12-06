// DataStax load script

require.config({
    paths: {
        "fancybox" : "/webs/jquery.fancybox.min"
        //"jquery.swiftype.search" : "/en/assets/js/jquery.swiftype.search",
        //"jquery.swiftype.autocomplete" : "/en/assets/js/jquery.swiftype.autocomplete",
        //"highlight.pack": "/en/assets/js/highlight.pack",
        //"navlinks" : "/en/assets/js/navlinks",
        //"versionDropdown" : "/en/assets/js/versionDropdown"
    }
});

var modules = [
    "fancybox"
    //"jquery.swiftype.search",
    //"jquery.swiftype.autocomplete",
    //"highlight.pack",
    //"navlinks",
    //"versionDropdown"];

define(modules, function() {
    // initialize the DataStax environment after all required dependcies have loaded
    function dsInit() {
        console.log("dsInit() called: " + jQuery.ui);
    }
    
    // Return the dsInit function so that it can be called from the HTML page
    return {
        dsInit : dsInit
    }

});


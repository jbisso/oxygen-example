// DataStax load script

require.config({
    paths: {
        "fancybox" : "/web/jquery.fancybox.min"
    }
});

var modules = [
    "fancybox"
];

define(modules, function() {
    // initialize the DataStax environment after all required dependcies have loaded
    function dsInit() {
        console.log("dsInit() called");
        findModals();
    }
    // process modal dialog output
    function findModals() {
        console.log("findModals() called");
        $('.legend').each(function() {
            var modalOpen = document.createElement('p');
            var openLink = document.createElement('a');
            openLink.className += " open-modal";
            openLink.setAttribute("href", "#");
            openLink.setAttribute("id", "showLegend");
            openLink.innerHTML = "Show syntax legend";
            modalOpen.appendChild(openLink);
            $(this).before(modalOpen);
            $(this).wrapAll('<div class="modal-legend" />');
        });
        
        // on clicking the trigger the modal dialog will popup with an overlay
        $('.open-modal').click(function(event) {
            $('.modal-legend').dialog("open");
            event.preventDefault();
        });
        
        // on clicking the close element the modal dialog & overlay will disappear
        $('.modal-close').click(function(event) {
            $('.modal-legend, .modal-overlay').hide();
            event.preventDefault();
        });
        
        // make the modal a dialog
        if (document.querySelector(".modal-legend") !== null) {
            try {
                $('.modal-legend').dialog({
                    modal: true,
                    fluid: true,
                    autoOpen: false,
                    minHeight: 400,
                    height: 400,
                    width: 'auto',
                    maxWidth: 700,
                    position: {
                        my: "left top",
                        at: "top",
                        of: "#showLegend"
                    }
                });
            } catch(error) {
                console.error('findModals error: ' + error.message)
            }
        }
    }
    
    // Return the dsInit function so that it can be called from the HTML page
    return {
        dsInit : dsInit
    }

});


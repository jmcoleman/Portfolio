///////////////////////////////////////////
// Variables
///////////////////////////////////////////
var contactRequests = [];

///////////////////////////////////////////
// JavaScript
///////////////////////////////////////////
function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
};

function isEmptyObj(obj) {
    return (obj === undefined || obj == null || Object.keys(obj).length === 0);
};

function ProperCase(txt) {
    return txt.replace(/\w\S*/g, c => c.charAt(0).toUpperCase() + c.substr(1).toLowerCase());
};

///////////////////////////////////////////
// JQuery
///////////////////////////////////////////
$(document).ready (function() {

    // collapsible area
    $('.port-item').click(function () {
        $('.collapse').collapse('hide');
    });
    
    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

    // Lightbox Init
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true
        });
    });

    $("#btn-submit-contact").on("click", function() {
        event.preventDefault();
        console.log("in submit for contact message");

        // retrieve the contact info and message
        var contactName = $("#input-name").val().trim();
        var contactEmail = $("#input-email").val().trim();
        var contactMessage = $("#input-message").val().trim();
        var contactRequest = {};

        //add the contact name
        if (!isEmpty(contactName)) {
            contactName = ProperCase(contactName);
            contactRequest.contactName = contactName;
        }

        //add the contact email
        if (!isEmpty(contactEmail)) { contactRequest.contactEmail = contactEmail; }

        //add the contact name
        if (!isEmpty(contactMessage)) { contactRequest.contactMessage = contactMessage; }
        
        // only add the contact request if something was submitted
        if (!isEmptyObj(contactRequest)) {
            contactRequests.push(contactRequest);
        }

        console.log(contactRequests);

        //clear contact request fields
        $("#input-name").val("");
        $("#input-email").val("");
        $("#input-message").val("");
    });

});

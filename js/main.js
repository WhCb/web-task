var $ = require("jquery");
var app = require("./app.js");
var appLoadItem = require("./appLoadItem.js");
/*-----------------------------------------------------------------------------------------------*/
/* Load the items */
appLoadItem.loadItems();     
/*-----------------------------------------------------------------------------------------------*/
/* Form Submit to add item to the List through Web Server */
$('#add-form').on('submit', app.submitBtnAction);  
/* Complete Button Action - Fade */
$('#list').on('click', '.complete-button', app.completeBtnAction );  
/* Delete Button Action */
$('#list').on('click', '.delete-button', app.deleteBtnAction );
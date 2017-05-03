var $ = require("jquery");
var appLoadItem = require("./appLoadItem.js");
var appUpdateItem = require("./appUpdateItem.js");
var exports = module.exports = {};
/*-----------------------------------------------------------------------------------------------*/
exports.submitBtnAction = function(event) {
  var itemDescription = event.target.itemDescription.value;
  /* Prevent page reload */
  event.preventDefault();
  var creationRequest = $.ajax({
	type: 'POST',
	url: "http://listalous.herokuapp.com/lists/WhCb/items",
	data: { description: itemDescription, completed: false }
  });
  creationRequest.done(function(itemDataFromServer) {
	appUpdateItem.addItemToPage(itemDataFromServer);
	/* Clear input field */
	$('#create').val('');     
  });  
};
/*-----------------------------------------------------------------------------------------------*/  
exports.completeBtnAction = function(event) {  
  var item = $(event.target).parent();
  var isItemCompleted = item.hasClass('completed');
  var itemId = item.attr('data-id');

  var updateRequest = $.ajax({
    type: 'PUT',
    url: "https://listalous.herokuapp.com/lists/WhCb/items/" + itemId,
    data: { completed: !isItemCompleted }
  });

  updateRequest.done(function(itemData) {
    if (itemData.completed) {
      item.addClass('completed');
    } else {
      item.removeClass('completed');
    }
  });
};
/*-----------------------------------------------------------------------------------------------*/
exports.deleteBtnAction = function(event) {
  var item = $(event.target).parent();  
  var itemId = item.attr('data-id');
	
  /* Delete item call of web server */
  var deleteRequest = $.ajax({
    type: 'DELETE',
    url: "https://listalous.herokuapp.com/lists/WhCb/items/" + itemId    
  });
  
  /* Refresh the list */
  deleteRequest.done(function(itemData) {
    appLoadItem.loadItems();
  });
};
/*-----------------------------------------------------------------------------------------------*/
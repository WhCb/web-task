var $ = require("jquery");
var appUpdateItem = require("./appUpdateItem.js");
var exports = module.exports = {};
/*-----------------------------------------------------------------------------------------------*/
/* Call web server to get saved items than use addItemToPage to append them to list*/
exports.loadItems = function() {
	$('#list').empty();
	
	var loadRequest = $.ajax({
	  type: 'GET',
	  url: "https://listalous.herokuapp.com/lists/WhCb/"
	});

	loadRequest.done(function(dataFromServer) {
	  var itemsData = dataFromServer.items;

	  itemsData.forEach(function(itemData) {
		appUpdateItem.addItemToPage(itemData);
	  });
	});
};
/*-----------------------------------------------------------------------------------------------*/
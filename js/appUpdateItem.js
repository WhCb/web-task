var $ = require("jquery");
var exports = module.exports = {};
/*-----------------------------------------------------------------------------------------------*/
/*Append item objects to list */
exports.addItemToPage = function(itemData) {
  var item = $('#templates .item').clone();
  item.attr('data-id',itemData.id);
  item.find('.description').text(itemData.description);
  if(itemData.completed) {
    item.addClass('completed');
  }
  $('#list').append(item);
};
/*-----------------------------------------------------------------------------------------------*/
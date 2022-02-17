var $ = jQuery;
var store_name = [];
$(document).ready(function(){
    var aff_subID = (typeof aff_sub === 'undefined') ? null : aff_sub;
	console.log('Inrdeals Username : ' +subID);
	  $.get("https://cdn.jsdelivr.net/gh/inrdeals/inrdeals-js@latest/data.json", function(data, status){
        store_name = data.keywords;
        checkURL(subID, store_name, aff_subID);
    });
});

function checkURL(subID, store_name, subID1=null)
{
	$('a').click(function (e){
		var param = "https://inr.deals/track?id="+subID+"&subid="+subID1+"&url=";
		var _href = $(this).attr('href');
		var match = _href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
		var host = match[2];
		var number_of_store_items= store_name.length;
		for (store_no = 0; store_no < number_of_store_items; store_no++) {
			var matched_store = store_name[store_no];
			if (host.toLowerCase().indexOf(matched_store) >= 0){
				e.preventDefault();
				window.open(param + encodeURIComponent(decodeURIComponent(_href)),'_blank');
			}
		}
	});
}

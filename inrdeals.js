// fill store names in store_name array
//  var store_name =  ["flipkart", "1mglabs", "agoda", "airtel", "amzer","beardo","bluestone", "bro4u", "cleartrip", "dailyobjects", "etihad", "expedia", "faasos", "firstcry", "flaberry", "floweraura", "freshmenu", "zotezo", "ebay", "amazon", "1mg","abof", "dailyobjects", "infibeam", "jabong", "voonik", "lenskart", "myntra", "paytm", "homeshop18", "shopclues", "tatacliq", "ajio", "aplava", "biba", "adidas", "coolwinks", "clovia", "chumbak", "dominos", "droom", "fabellay", "fabfurnish", "koovs", "netmeds", "zivame", "makemytrip", "zoomcar", "goair", "godaddy", "happilyunmarried", "hopscotch", "housejoy", "hpshopping", "igp", "industrybuying", "wonderchef", "kraftly", "vlccpersonalcare", "voylla", "treebohotels", "ticketgoose", "thyrocare", "thebodyshop", "littleapp", "swiggy", "mobikwik", "montecarlo", "myflowertree", "nearbuy", "nykaa", "pepperfry", "prettysecrets", "printland", "printvenue", "puma", "bigbasket", "fnp", "shoppersstop", "bookmyshow", "bigrock", "pizzahut", "titan", "foodpanda", "aliexpress", "healthkart", "ixigo", "nnnow", "lurap", "stalkbuylove", "jio", "metroshoes", "fabindia", "bata", "wforwoman", "mrvoonik", "croma", "nike", "medlife", "grofers", "yatra", "lifestylestores", "maxfashion", "gadgetsnow", "bewakoof", "jetairways", "paytmmall", "pvrcinemas", "footprint360", "limeroad", "cheapticket", "reliancetrends", "urbanclap", "dunkinindia", "moglix", "printoctopus", "myvishal", "kidzee", "shopping.rediff", "shein", "themeforest", "codecanyon", "videohive", "audiojungle", "graphicriver", "photodune", "3docean", "jockeyindia", "indianterrain", "clarks"];
var $ = jQuery;
var store_name = [];
$(document).ready(function(){
    var aff_subid = (aff_sub === undefined) ? null : aff_sub;
	console.log('Inrdeals Username : ' +subID);
	  $.get("https://cdn.jsdelivr.net/gh/inrdeals/inrdeals-js@latest/data.json", function(data, status){
        store_name = data.keywords;
        checkURL(subID, store_name, aff_subid);
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

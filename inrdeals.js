// fill store names in store_name array
//  var store_name =  ["flipkart", "1mglabs", "agoda", "airtel", "amzer","beardo","bluestone", "bro4u", "cleartrip", "dailyobjects", "etihad", "expedia", "faasos", "firstcry", "flaberry", "floweraura", "freshmenu", "zotezo", "ebay", "amazon", "1mg","abof", "dailyobjects", "infibeam", "jabong", "voonik", "lenskart", "myntra", "paytm", "homeshop18", "shopclues", "tatacliq", "ajio", "aplava", "biba", "adidas", "coolwinks", "clovia", "chumbak", "dominos", "droom", "fabellay", "fabfurnish", "koovs", "netmeds", "zivame", "makemytrip", "zoomcar", "goair", "godaddy", "happilyunmarried", "hopscotch", "housejoy", "hpshopping", "igp", "industrybuying", "wonderchef", "kraftly", "vlccpersonalcare", "voylla", "treebohotels", "ticketgoose", "thyrocare", "thebodyshop", "littleapp", "swiggy", "mobikwik", "montecarlo", "myflowertree", "nearbuy", "nykaa", "pepperfry", "prettysecrets", "printland", "printvenue", "puma", "bigbasket", "fnp", "shoppersstop", "bookmyshow", "bigrock", "pizzahut", "titan", "foodpanda", "aliexpress", "healthkart", "ixigo", "nnnow", "lurap", "stalkbuylove", "jio", "metroshoes", "fabindia", "bata", "wforwoman", "mrvoonik", "croma", "nike", "medlife", "grofers", "yatra", "lifestylestores", "maxfashion", "gadgetsnow", "bewakoof", "jetairways", "paytmmall", "pvrcinemas", "footprint360", "limeroad", "cheapticket", "reliancetrends", "urbanclap", "dunkinindia", "moglix", "printoctopus", "myvishal", "kidzee", "shopping.rediff", "shein", "themeforest", "codecanyon", "videohive", "audiojungle", "graphicriver", "photodune", "3docean", "jockeyindia", "indianterrain", "clarks"];
var store_name = [];
$(document).ready(function(){
    var subID1 = (subID1 === undefined) ? null : subID1;
	console.log('Inrdeals Username : ' +subID);
	  $.get("https://cdn.jsdelivr.net/gh/inrdeals/inrdeals-js@latest/data.json", function(data, status){
        var store_name = data.keywords;
        console.log(store_name);
        checkURL(subID, store_name, subID1);
    });
   
});

function checkURL(subID, store_name, subID1=null)
{
	$('body').find('a').each(function(){
		var param = "https://inr.deals/track?id="+subID+"&subid="+subID1+"&url=";
		var $this = $(this);
		var _href = $this.attr('href');
		var host = new URL(_href);
		console.log(host.host);
		var number_of_store_items= store_name.length;

		for (store_no = 0; store_no < number_of_store_items; store_no++) {
    		var matched_store = store_name[store_no];
    		if (host.host.toLowerCase().indexOf(matched_store) >= 0){
			$this.attr("href", param + encodeURIComponent(decodeURIComponent(_href)));
			}
		}		
	});
}

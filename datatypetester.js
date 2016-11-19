if (typeof window == 'undefined'){var utils = require('suddenutils');}
var datatypetester = function(){
  'use strict';
var _ = new utils();
this.test=function(arrHaystack){
  var arrTypes=[];
  if(arrHaystack.constructor!==Array){ arrHaystack=[arrHaystack]; }
  _.for(arrHaystack,function(v,k){
    if(typeof v=== 'number'){ arrTypes.push(fnTestNumber(v)); }
    if(typeof v=== 'string'){ arrTypes.push(fnTestString(v)); }
  });
  return _.unique(arrTypes);
}
//----====|| DATA TYPE TESTS ||====----\\
    var fnTestNumber = function(arrHaystack){
    	if(arrHaystack.constructor!==Array){ arrHaystack=[arrHaystack]; }
    	var arrTypes=[];
    	var intSampleJSTime=Date.now();
    	var intSampleUnixTime = intSampleJSTime/1000;
    	//test for auto incrementing id
    	var intUnixTime=0;
    	var intJSTime=0;
    	_.for(arrHaystack,function(v,k){
    		//test for unixtimestamp
    		if(v>intSampleUnixTime-86400&&v<intSampleUnixTime){ intUnixTime++; }
			//test for js/micro timestamp
    		if(v>intSampleJSTime-86400000&&v<intSampleJSTime){ intJSTime++; }
    	});
    	if(intUnixTime>intJSTime){arrTypes.push('unixtime');}
    	if(intUnixTime<intJSTime){arrTypes.push('microtime');}
    	return arrTypes;
    };
    var fnTestString = function(strValue){
      //setup the tests
      var objTests={}, arrTypes=[];
      objTests.ip = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
      objTests.email= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
      objTests.url= /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
      objTests.domain=/([a-z0-9])(([a-z0-9-]{1,61})?[a-z0-9]{1})?(\.[a-z0-9](([a-z0-9-]{1,61})?[a-z0-9]{1})?)?(\.[a-zA-Z]{2,4})+$/;
      objTests.image=/\.(jpe?g|png|gif)$/i;
      //objTests.video= /(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*\.(?:avi|wmv|mp4))(?:\?([^#]*))?(?:#(.*))?/;
      objTests.md5= /^[a-f0-9]{32}$/;
      objTests.sha1= /^[0-9a-f]{40}$/;
      objTests.sha256= /^[0-9a-f]{64}$/;
      objTests.country_code = /^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)$/;
      //run each of the tests for each of the values, return the types found
      	var torfTest=false;
        _.forOwn(objTests,function(vv,kk){
      		torfTest=objTests[kk].test(strValue);
      		if(torfTest===true){ arrTypes.push(kk); }
      	});
        return arrTypes;
    };
}
if (typeof module !== 'undefined' && module.exports){module.exports = datatypetester;}
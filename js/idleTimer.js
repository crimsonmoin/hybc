function idler(){
idleTimer = null;
idleState = false;
idleWait = 25000;
(function ($) { 
        $('*').bind('mousemove keydown scroll', function () {
            clearTimeout(idleTimer);            
            idleState = false;
            idleTimer = setTimeout(function () { 
			var str=window.location.href;
			var res = str.split("#");
			//alert(res[1]);
			if(res[1]!="summarypage"&&res[1]!="mainpage"&&res[1]!="connectpage"&&res[1]!=undefined&&res[1]!="undefined"&&res[1]!="screensaverpage")
			{window.location.href="#screensaverpage";}
                idleState = true; }, idleWait);
        });
        $("body").trigger("mousemove");
}) (jQuery)
};
idler();
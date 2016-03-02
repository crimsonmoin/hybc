var uri="http://api2.valleyretail.in/rest/api.php?request=";
var abortWorker;
var longpollerWorker;
var operation="";
var id=0;
var MasterData=[
{'type':'PPT','size':'4mb','op':'upload'},
{'type':'PPT','size':'2mb','op':'upload'},
{'type':'Image','size':'9mb','op':'download'},
{'type':'Image','size':'6mb','op':'download'},
{'type':'Video','size':'3mb','op':'download'},
{'type':'Video','size':'1mb','op':'download'},
{'type':'App','size':'12mb','op':'download'},
{'type':'App','size':'26mb','op':'download'},
{'type':'App','size':'11mb','op':'download'},
{'type':'App','size':'7mb','op':'download'},
{'type':'YouTube','size':'-mb','op':'streaming'},
{'type':'YouTube','size':'-mb','op':'streaming'},
];
var op=0;
$(document).on("pagecreate","#connectpage",function(){
  $("button").on("click",function(){
	  id=$("#txtid").val();
	  if(id==""){alert('Please enter store id.');}
	  else{
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					window.location.href="#mainpage";
				}
				if(xhttp.status == 204){alert('Store id is invalid');}
			}
		xhttp.open("GET", uri+"GetTimer&id="+id, true);
		xhttp.send();
		}
  });    
});
$(document).on("pageshow","#screensaverpage",function(){
	var aud = document.getElementById("myAudio");
	aud.onended = function() {
    aud.play();
	};  
});
$(document).on("pagecreate","#mainpage",function(){
  $("#mainpage").on("click",function(){
    window.location.href="#cpanelpage";
  });    
});
$(document).on("pageshow","#cpanelpage",function(){	
		$(".play").attr('src','img/play-icon.png');
		$(".upload").attr('src','img/upload-icon.png');
		$(".youtube").attr('src','img/youtube-icon.png');
		$(".ripplelink").animate({backgroundColor:'transparent'}, 100).parent().animate({borderColor:'transparent'},100).parent().animate({borderColor:'transparent'},100).animate({borderColor:'transparent'},100);		    
});
$(document).on("pageshow","#uploadpage",function(){	
		$(".ppt").attr('src','img/ppt-icon.png');
		$(".video").attr('src','img/video-icon.png');
		$(".img").attr('src','img/img-icon.png');
		$(".ripplelink").animate({backgroundColor:'transparent'}, 100).parent().animate({borderColor:'transparent'},100).parent().animate({borderColor:'transparent'},100).animate({borderColor:'transparent'},100);		    
});
$(document).on("pagecreate","#downloadspage",function(){
	$(".image").hide();
	$(".video").hide();
	$(".ppt").show();
	$(".icon-11").on("click",function(e){
	  e.preventDefault();
	  $(".icon-21").fadeTo("fast",0.5);
	  $(".icon-31").fadeTo("fast",0.5);
	  $(".icon-11").fadeTo("fast",1);
	  $(".ppt").show();
	  $(".image").hide();
	  $(".video").hide();
	 
  });    
  $(".icon-21").on("click",function(e){
	  console.log('2');
	  e.preventDefault();
	  $(".icon-11").fadeTo("fast",0.5);
	  $(".icon-31").fadeTo("fast",0.5);
	  $(".icon-21").fadeTo("fast",1);
	  $(".image").show();
	  $(".ppt").hide();
	  $(".video").hide();
  });    
  $(".icon-31").on("click",function(e){
	  console.log('3');
	  e.preventDefault();
	  $(".icon-11").fadeTo("fast",0.5);
	  $(".icon-21").fadeTo("fast",0.5);
	  $(".icon-31").fadeTo("fast",1);
	  $(".video").show();
	  $(".ppt").hide();
	  $(".image").hide();
  });
  $(".thumper a").click(function(e){
	  e.preventDefault();
	  op=parseInt($(this).attr("data-op"));
	  operation=$(this).attr("title");
	  window.location.href="#summarypage"; 
	});
});
$(document).on("pagecreate","#youtubepage",function(){
	$(".thumper a").click(function(e){
		e.preventDefault();
	  op=parseInt($(this).attr("data-op"));
	  operation=$(this).attr("title");
	  window.location.href="#summarypage"; 
	});
});
$(document).on("pagecreate","#apppage",function(){
	$(".appdetail a").click(function(e){
	  e.preventDefault();
	  op=parseInt($(this).attr("data-op"));
	  operation=$(this).attr("title");
	  window.location.href="#summarypage"; 
	});
});
$(document).on("pageshow","#summarypage",function(){
	$("#timer3G").timer();
	$("#timer4G").timer();
	$("#timer3G").timer('remove');
	$("#timer4G").timer('remove');
	$("#summarypage h1").html('Test Performed<br/>'+MasterData[op].type+" "+MasterData[op].op+"<br/>"+"File Size : "+MasterData[op].size);
	$(".circle span").hide();
	$('#timer3G').css("color","white");
	$("#timer3G").prev('span').parent().css("background-color","transparent");
	$('#timer4G').css("color","white");
	$("#timer4G").prev('span').parent().css("background-color","transparent");
	var dev1,dev2;
	dev1=dev2=0;
	if(typeof(longpollerWorker)!="undefined"){
		longpollerWorker.terminate();
		longpollerWorker=undefined;
	}
	if(typeof(abortWorker)!="undefined"){
		abortWorker.terminate();
		abortWorker=undefined;
	}
	var myVar;
	$(".summaryback").on("click",function(e){
	//back button aborter
	  e.preventDefault();
	  clearTimeout(myVar);
	  
	  var res=false;
	  if(dev1==0||dev2==0){
	  res=confirm('Do you want to abort the operation ?');
	  }
	  else{
		  window.location.href="#cpanelpage";
	  }
	  // operation abortion code included here
	  if(res){
		if (typeof (Worker) !== "undefined") {
                 //Creating Worker Object
                 abortWorker = new Worker("js/abort.js");
                 //Call Back Function for Success
                 abortWorker.onmessage = workerResultReceiver1;
				 // send message to web worker
                 //Call Back function if some error occurred
                 abortWorker.onerror = workerErrorReceiver1;    
                 function workerResultReceiver1(e) {
                   
					if(e.data==id){
						$('#timer4G').timer('pause');
						$('#timer3G').timer('pause');
							if(typeof(longpollerWorker)!="undefined"){
								longpollerWorker.terminate();
								longpollerWorker=undefined;
							}
							if(typeof(abortWorker)!="undefined"){
								abortWorker.terminate();
								abortWorker=undefined;
							}
							window.location.href="#cpanelpage";
					}
                 }
				 abortWorker.postMessage(id);
                 function workerErrorReceiver1(e) {
                     console.log("there was a problem with the WebWorker within " + e);
                 }
              }
              else {
                  alert("Sorry!!! could not connect");
              }
		}
	});
	function longPoller(){
		if (typeof (Worker) !== "undefined") {
                 //Creating Worker Object
                 longpollerWorker = new Worker("js/longpolling.js");
                 //Call Back Function for Success
                 longpollerWorker.onmessage = workerResultReceiver;
				 // send message to web worker
                 //Call Back function if some error occurred
                 longpollerWorker.onerror = workerErrorReceiver;    
                 function workerResultReceiver(e) {
                     var data=JSON.parse(e.data);
						if(data.device2==1){
							dev2=1;
							$('#timer4G').timer('pause'); 
							$("#timer4G").prev('span').show(500);
							$('#timer4G').css("color","#e90000");
							$("#timer4G").prev('span').parent().css("background-color","white");
							}
						if(data.device1==1){
							dev1=1;
							$('#timer3G').timer('pause');
							$("#timer3G").prev('span').show(500);
							$('#timer3G').css("color","#e90000");
							$("#timer3G").prev('span').parent().css("background-color","white");
						}
						if(data.device1==1&&data.device2==1){							
							longpollerWorker.terminate();
							longpollerWorker=undefined;
							myVar = setTimeout(function () {
							window.location.href="#mainpage";}, 25000);
						}
                 }
				 longpollerWorker.postMessage(id);
                 function workerErrorReceiver(e) {
                     console.log("there was a problem with the WebWorker within " + e);
                 }
              }
              else {
                  alert("Sorry!!! could not connect");
              }
	};
	function clearTimers(){
		/*if(navigator.connection.type==0||navigator.connection.type=='none')
		{
			alert('No internet connection detected');
		}
		else*/
		{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var res=JSON.parse(xhttp.responseText);
			if(res.status=="Success"&&res.device1==0&&res.device2==0){
				$("#timer3G").timer({format: '%M:%S' });
				$("#timer4G").timer({format: '%M:%S' });
				longPoller();
			}
			else{alert('Failed to trigger operation');$(".back").show();}
		}
		if(xhttp.status == 204){alert('Failed to trigger operation');$(".back").show();}
	};
	xhttp.open("GET", uri+"clearTimers&id="+id+"&op="+operation, true);
	xhttp.send();
		}
	};
	clearTimers();	
});
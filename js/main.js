var uri="http://api2.valleyretail.in/rest/api.php?request=";
var abortWorker;
var longpollerWorker;
var operation="";
var id=0;
var ty=0;
var giffer=2000;
var dev1,dev2;
dev1=dev2=0;
var myVar;	
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
	//var video = document.getElementById("myAudio"); 
    //this did the trick
    /*video.loop = false; 
    video.addEventListener('ended', function() { video.currentTime=0.1; video.play(); }, false);
    video.play();
	$(".tapper").on("tap",function(){
		window.location.href="#mainpage"; 
	});*/
});
$(document).on("pagecreate","#mainpage",function(){
	$("#mainpage").on("click",function(){
	  $.mobile.loading('show');
	  setTimeout(function(){  $.mobile.loading('hide');window.location.href="#cpanelpage"; }, giffer);
  });    
});
$(document).on("pageshow","#cpanelpage",function(){	
		$(".ico").parent().css("background-color", "transparent").parent().css("border-color", "white").parent().css("border-color", "transparent");	    
		$(".play").attr('src','img/play-icon.png');
		$(".upload").attr('src','img/upload-icon.png');
		$(".youtube").attr('src','img/youtube-icon.png');		
		$('.play').click(function(){
			$(this).attr('src','img/playh-icon.png');
			$(this).parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500,function(){
				$.mobile.loading('show');
				setTimeout(function(){  $.mobile.loading('hide');window.location.href="#apppage"; }, giffer);	
			});
		});
		$('.upload').click(function(){
			$(this).attr('src','img/uploadh-icon.png');
			$(this).parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500,function(){
				$.mobile.loading('show');
				setTimeout(function(){  $.mobile.loading('hide');window.location.href="#uploadpage"; }, giffer);		
			});
		});
		$('.youtube').click(function(){
			$(this).attr('src','img/youtubeh-icon.png');
			$(this).parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500,function(){
				$.mobile.loading('show');
				setTimeout(function(){  $.mobile.loading('hide');window.location.href="#youtubepage"; }, giffer);	
			});
		});
});
$(document).on("pageshow","#uploadpage",function(){	
		function neutr(){
			$(".icoo").parent().css("background-color", "transparent").parent().css("border-color", "white").parent().css("border-color", "transparent");	    
			$(".ppt").attr('src','img/ppt-icon.png');
			$(".video").attr('src','img/video-icon.png');
			$(".img").attr('src','img/img-icon.png');
		};
		neutr();
		$('.ppt').click(function(){
			neutr();
			$(this).attr('src','img/ppth-icon.png');
			ty=0;
			$(this).parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500,function(){
			$.mobile.loading('show');
			setTimeout(function(){  $.mobile.loading('hide');window.location.href="#downloadspage"; }, giffer);	
			});		
		});
		$('.video').click(function(){
			neutr();
			$(this).attr('src','img/videoh-icon.png');
			ty=2;
			$(this).parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500,function(){
			$.mobile.loading('show');
			setTimeout(function(){  $.mobile.loading('hide');window.location.href="#downloadspage"; }, giffer);	
			});	
		});
		$('.img').click(function(){
			neutr();
			$(this).attr('src','img/imgh-icon.png');
			ty=1;
			$(this).parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500,function(){
			$.mobile.loading('show');
			setTimeout(function(){  $.mobile.loading('hide');window.location.href="#downloadspage"; }, giffer);	
			});	
		});
});
$(document).on("pageshow","#downloadspage",function(){
	function neutrr(){
			$(".icooo").parent().css("background-color", "transparent").css("border-color", "white").parent().css("border-color", "transparent");	    
			$(".pptxx").attr('src','img/ppt-icon.png');
			$(".videox").attr('src','img/video-icon.png');
			$(".imgx").attr('src','img/img-icon.png');
			$(".images").hide();
			$(".vids").hide();
			$(".pptx").hide();
		};
	neutrr();
	var msg;
	function switcher(){
		switch(ty){
			case 0: 
			neutrr();
			msg="Select PPT<br/>to Upload";
			$(".pptxx").attr('src','img/ppth-icon.png');
			$(".pptx").fadeIn("fast");
			$('.pptxx').parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500);
			break;
			case 1: msg="Select Image<br/>to Download";
			neutrr();
			$(".images").fadeIn("fast");
			$(".imgx").attr('src','img/imgh-icon.png');
			$('.imgx').parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500);
			break;
			case 2:msg="Select Video<br/>to Download";
			neutrr();
			$(".vids").fadeIn("fast");
			$(".videox").attr('src','img/videoh-icon.png');
			$('.videox').parent().animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500);
			break;
		}
		$(".msg").html(msg);
	};
	switcher();
	$('.btmcontainer>.col3 a').click(function(e){
		e.preventDefault();
		ty=parseInt($(this).attr('title'));
		switcher();
	});
  $(".thumper a").click(function(e){
	  e.preventDefault();
	  op=parseInt($(this).attr("data-op"));
	  operation=$(this).attr("title");
	  $.mobile.loading('show');
		setTimeout(function(){  $.mobile.loading('hide');window.location.href="#summarypage"; }, giffer);	
	});
});
$(document).on("pagecreate","#youtubepage",function(){
	$(".thumper a").click(function(e){
		e.preventDefault();
	  op=parseInt($(this).attr("data-op"));
	  operation=$(this).attr("title");
	  $.mobile.loading('show');
		setTimeout(function(){  $.mobile.loading('hide');window.location.href="#summarypage"; }, giffer);	
	});
});
$(document).on("pagecreate","#apppage",function(){
	$(".appdetail a").click(function(e){
	  e.preventDefault();
	  op=parseInt($(this).attr("data-op"));
	  operation=$(this).attr("title");
	   $.mobile.loading('show');
	setTimeout(function(){  $.mobile.loading('hide');window.location.href="#summarypage"; }, giffer);	
	});
});
$(document).on("pagecreate","#summarypage",function(){
	$('.summaryback').on('click',function(e){
	//back button aborter
	  e.preventDefault();
	  clearTimeout(myVar);
	  var res=false; 
		alert(dev1);alert(dev2);
	  if(dev1==0||dev2==0){
	  res=confirm('Do you want to abort the operation ?');
	  }
	  else{
		  window.location.href="#cpanelpage";
	  }
	  // operation abortion code included here
	  if(res===true){
		if (typeof (Worker) !== "undefined") {
				if(typeof(abortWorker)=="undefined"){
                 //Creating Worker Object
                 abortWorker = new Worker("js/abort.js");
                 //Call Back Function for Success
                 abortWorker.onmessage = workerResultReceiver1;
				 // send message to web worker
                 //Call Back function if some error occurred
                 abortWorker.onerror = workerErrorReceiver1;    
                 function workerResultReceiver1(e) {
					if(e.data==id){
							if(typeof(abortWorker)!="undefined"){
							abortWorker.terminate();
							abortWorker=undefined;
						}
						$('#timer4G').timer('pause');
						$('#timer3G').timer('pause');
							if(typeof(longpollerWorker)!=="undefined"){
								longpollerWorker.terminate();
								longpollerWorker=undefined;
							}
							
							window.location.href="#cpanelpage";
					}
                 }
				 abortWorker.postMessage(id);
                 function workerErrorReceiver1(e) {
                     console.log("there was a problem with the WebWorker within " + e);
                 }
				}
			}
              else {
                  alert("Sorry!!! could not connect");
              }
		}
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
	
	if(typeof(longpollerWorker)!="undefined"){
		longpollerWorker.terminate();
		longpollerWorker=undefined;
	}
	if(typeof(abortWorker)!="undefined"){
		abortWorker.terminate();
		abortWorker=undefined;
	}
	
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
							$("#timer4G").prev('span').fadeIn(500);
							$('#timer4G').css("color","#e90000");
							$("#timer4G").prev('span').parent().css("background-color","white");
							}
						if(data.device1==1){
							dev1=1;
							$('#timer3G').timer('pause');
							$("#timer3G").prev('span').fadeIn(500);
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
		if(navigator.connection.type==0||navigator.connection.type=='none')
		{
			alert('No internet connection detected');
		}
		else
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
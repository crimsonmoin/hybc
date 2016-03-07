//$(function(){
				
				var ink, d, x, y;
				$(".ripplelink").click(function(e){
				if($(this).find(".ink").length === 0){
					$(this).prepend("<span class='ink'></span>");
				}
					 
				ink = $(this).find(".ink");
				ink.removeClass("animate");
				 
				if(!ink.height() && !ink.width()){
					d = Math.max($(this).outerWidth(), $(this).outerHeight());
					ink.css({height: d, width: d});
				}
				$(".ripplelink").animate({backgroundColor:'transparent'}, 100).parent().animate({borderColor:'transparent'},100).parent().animate({borderColor:'transparent'},100).animate({borderColor:'transparent'},100);
				$(".play").attr('src','img/play-icon.png');
				$(".upload").attr('src','img/upload-icon.png');
				$(".youtube").attr('src','img/youtube-icon.png');
				
				$(".ppt").attr('src','img/ppt-icon.png');
				$(".video").attr('src','img/video-icon.png');
				$(".img").attr('src','img/img-icon.png');
				
				$(this).animate({backgroundColor:'#ffffff'}, 500).parent().animate({borderColor:'#ffffff'},500).parent().animate({borderColor:'#ffffff'},500).animate({borderColor:'transparent'},500);
				
				switch($(this).find('img').attr('title')){
					case "play":$(this).find('img').attr('src','img/playh-icon.png');
					break;
					case "upload":$(this).find('img').attr('src','img/uploadh-icon.png');
					break;
					case "youtube":$(this).find('img').attr('src','img/youtubeh-icon.png');
					break;
					case "ppt":$(this).find('img').attr('src','img/ppth-icon.png');
					break;
					case "img":$(this).find('img').attr('src','img/imgh-icon.png');
					break;
					case "video":$(this).find('img').attr('src','img/videoh-icon.png');
					break;
				}
				x = e.pageX - $(this).offset().left - ink.width()/2;
				y = e.pageY - $(this).offset().top - ink.height()/2;
				ink.css({top: y+'px', left: x+'px'}).addClass("animate");
				 $(this).one("webkitAnimationEnd mozAnimationEnd oanimationend animationend", function() {
						switch($(this).find('img').attr('title')){
							case "play":window.location.href="#apppage";
							break;
							case "upload":window.location.href="#uploadpage";
							break;
							case "youtube":window.location.href="#youtubepage";
							break;
							case "ppt":ty=0;window.location.href="#downloadspage";
							break;
							case "img":ty=1;window.location.href="#downloadspage";
							break;
							case "video":ty=2;window.location.href="#downloadspage";
							break;
						}
				
                    });

				});
//});
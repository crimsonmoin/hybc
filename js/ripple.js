$(function(){
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
				$(".play").attr('src','img/play-icon.png');
				$(".upload").attr('src','img/upload-icon.png');
				$(".youtube").attr('src','img/youtube-icon.png');
				
				$(".ripplelink").animate({backgroundColor:'transparent'}, 100).parent().animate({borderColor:'transparent'},100).parent().animate({borderColor:'transparent'},100).animate({borderColor:'transparent'},100);
				
				$(this).animate({backgroundColor:'#ffffff'}, 200).parent().animate({borderColor:'#ffffff'},300).parent().animate({borderColor:'#ffffff'},300).animate({borderColor:'transparent'},300);
				if($(this).find('img').attr('title')=="play"){
					$(this).find('img').attr('src','img/playh-icon.png');
				}
				else if($(this).find('img').attr('title')=="upload"){
					$(this).find('img').attr('src','img/uploadh-icon.png');
				}
				else if($(this).find('img').attr('title')=="youtube"){
					$(this).find('img').attr('src','img/youtubeh-icon.png');
				}
				x = e.pageX - $(this).offset().left - ink.width()/2;
				y = e.pageY - $(this).offset().top - ink.height()/2;
				ink.css({top: y+'px', left: x+'px'}).addClass("animate");
				 $(this).one("webkitAnimationEnd mozAnimationEnd oanimationend animationend", function() {
						if($(this).find('img').attr('title')=="play"){
							window.location.href="#apppage";
						}
						else if($(this).find('img').attr('title')=="upload"){
							window.location.href="#uploadpage";
						}
						else if($(this).find('img').attr('title')=="youtube"){
							window.location.href="#youtubepage";
						}
                    });

				});
			});
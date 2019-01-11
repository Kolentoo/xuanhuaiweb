function tanchu(n,m)  
                  {  
				  if($("#"+n).css("display")=="none"){
				$(".ip_dt").find("a").removeClass("on");
				$("#"+m).addClass("on");
                   $("#"+n).fadeIn();
				   $("#"+n).find(".tc_k").stop().animate({opacity: 1, top:'50%' });
				  }else{	
				  $(".ip_dt").find("a").removeClass("on");
				     $("#"+n).find(".tc_k").stop().animate({opacity: 0, top:'20%' });			  
					  $("#"+n).fadeOut();						
					  }
                  }

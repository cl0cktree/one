$(function(){
	s_width = $('.slide').width();

	function clock(){
		setTimeout(function(){
			scounout = setInterval(function(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				var day0;
				var hour = date.getHours();
				var hour0;
				var min = date.getMinutes();
				var min0;
				var second = date.getSeconds();
				var second0;
				var intTime=parseInt(hour,[10]);
				var yearcount = this.value;
				var yearcheck1 = year-yearcount;
				var apmt;

				if(month<10){
					month0='0'+month;
				}else{
					month0=month;
				};
				if(day<10){
					day0='0'+day;
				}else{
					day0=day;
				};
				if(hour>12){
					hour0=hour-12;
					apmt=' PM';
					if(hour0<10){
						hour0='0'+hour0;
					};
				}else{
					hour0=hour;
					apmt=' AM';
					if(hour0<10){
						hour0='0'+hour0;
					};
				};

				if(min<10){
					min0='0'+min;
				}else{
					min0=min;
				};

				if(second<10){
					second0='0'+second;
				}else{
					second0=second;
				};
				var today = year+' / '+month0+' / '+day0;
				var nowC=today+' -'+apmt+' '+hour0+' : '+min0+' : '+second0;
				$('.landing-contents-clock').html(nowC);
			},1000)
		}),999}
	clock();
	function stop_clock(){
		clearInterval(scounout);
	};

	function click_snd(){
		var clickSnd = new Audio();
		clickSnd.src = "media/t_btn_click.mp3";
		clickSnd.load();
		clickSnd.play();
	};

	function conh(){
		wh2016 = $('#con-web').children('.y2016').height();
		wh2017 = $('#con-web').children('.y2017').height();
		wh2018 = $('#con-web').children('.y2018').height();
		wh2019 = $('#con-web').children('.y2019').height();
		wconheight = Math.max(wh2016,wh2017,wh2018,wh2019);

		fh2016 = $('#con-flash').children('.y2016').height();
		fh2017 = $('#con-flash').children('.y2017').height();
		fh2018 = $('#con-flash').children('.y2018').height();
		fh2019 = $('#con-flash').children('.y2019').height();
		fconheight = Math.max(fh2016,fh2017,fh2018,fh2019);

		ih2016 = $('#con-img').children('.y2016').height();
		ih2017 = $('#con-img').children('.y2017').height();
		ih2018 = $('#con-img').children('.y2018').height();
		ih2019 = $('#con-img').children('.y2019').height();
		iconheight = Math.max(ih2016,ih2017,ih2018,ih2019);

		mh2016 = $('#con-move').children('.y2016').height();
		mh2017 = $('#con-move').children('.y2017').height();
		mh2018 = $('#con-move').children('.y2018').height();
		mh2019 = $('#con-move').children('.y2019').height();
		mconheight = Math.max(mh2016,mh2017,mh2018,mh2019);

		$('#con-web').css({'height':window.innerHeight})
		$('#con-flash').css({'height':window.innerHeight})
		$('#con-img').css({'height':window.innerHeight})
		$('#con-move').css({'height':window.innerHeight})
	};

	function conhr(){
		$(window).resize(function(){
			msheight = $('.slide img').height();

			wh2016 = $('#con-web').children('.y2016').height();
			wh2017 = $('#con-web').children('.y2017').height();
			wh2018 = $('#con-web').children('.y2018').height();
			wh2019 = $('#con-web').children('.y2019').height();
			wconheight = Math.max(wh2016,wh2017,wh2018,wh2019);

			fh2016 = $('#con-flash').children('.y2016').height();
			fh2017 = $('#con-flash').children('.y2017').height();
			fh2018 = $('#con-flash').children('.y2018').height();
			fh2019 = $('#con-flash').children('.y2019').height();
			fconheight = Math.max(fh2016,fh2017,fh2018,fh2019);

			ih2016 = $('#con-img').children('.y2016').height();
			ih2017 = $('#con-img').children('.y2017').height();
			ih2018 = $('#con-img').children('.y2018').height();
			ih2019 = $('#con-img').children('.y2019').height();
			iconheight = Math.max(ih2016,ih2017,ih2018,ih2019);

			mh2016 = $('#con-move').children('.y2016').height();
			mh2017 = $('#con-move').children('.y2017').height();
			mh2018 = $('#con-move').children('.y2018').height();
			mh2019 = $('#con-move').children('.y2019').height();
			mconheight = Math.max(mh2016,mh2017,mh2018,mh2019);

			$('#con-web').css({'height':window.innerHeight})
			$('#con-flash').css({'height':window.innerHeight})
			$('#con-img').css({'height':window.innerHeight})
			$('#con-move').css({'height':window.innerHeight})
		})
	}

	function cona(){
		wh2016 = $('#con-web').children('.y2016').height();
		wh2017 = $('#con-web').children('.y2017').height();
		wh2018 = $('#con-web').children('.y2018').height();
		wh2019 = $('#con-web').children('.y2019').height();
		wconheight = wh2016+wh2017+wh2018+wh2019;

		fh2016 = $('#con-flash').children('.y2016').height();
		fh2017 = $('#con-flash').children('.y2017').height();
		fh2018 = $('#con-flash').children('.y2018').height();
		fh2019 = $('#con-flash').children('.y2019').height();
		fconheight = fh2016+fh2017+fh2018+fh2019;

		ih2016 = $('#con-img').children('.y2016').height();
		ih2017 = $('#con-img').children('.y2017').height();
		ih2018 = $('#con-img').children('.y2018').height();
		ih2019 = $('#con-img').children('.y2019').height();
		iconheight = ih2016+ih2017+ih2018+ih2019;

		mh2016 = $('#con-move').children('.y2016').height();
		mh2017 = $('#con-move').children('.y2017').height();
		mh2018 = $('#con-move').children('.y2018').height();
		mh2019 = $('#con-move').children('.y2019').height();
		mconheight = mh2016+mh2017+mh2018+mh2019;

		$('#con-web').css({'height':wconheight})
		$('#con-flash').css({'height':fconheight})
		$('#con-img').css({'height':iconheight})
		$('#con-move').css({'height':mconheight})
	};

	function grid2016(){
		conh();
		$('.y2017, .y2018, .y2019').stop().fadeOut(300)
		$('.y2016').stop().fadeIn(300)
		$(window).resize(function(){
			conhr();
		})
	};

	function grid2017(){
		conh();
		$('.y2016, .y2018, .y2019').stop().fadeOut(300)
		$('.y2017').stop().fadeIn(300)
		$(window).resize(function(){
			conhr();
		})
	};

	function grid2018(){
		conh();
		$('.y2016, .y2017, .y2019').stop().fadeOut(300)
		$('.y2018').stop().fadeIn(300)
		$(window).resize(function(){
			conhr();
		})
	};

	function grid2019(){
		conh();
		$('.y2016, .y2017, .y2018').stop().fadeOut(300)
		$('.y2019').stop().fadeIn(300)
		$(window).resize(function(){
			conhr();
		})
	};

	function gridAll(){
		cona();
		$('.y2016, .y2017, .y2018, .y2019').stop().fadeIn(300)
		//$('.no2016, .no2017, .no2018').fadeOut(150)
		$('#box-right-btnwrap input[type=checkbox]').prop('checked',true)
		$('.grid-box-right label ').children('span').html('Play')
	};

	var autospeed=6000;
	var as=autospeed/1000-1;

	var countid=100/as;

	function timein(){

		count = setInterval(function(){
			if (as<1)
			{
				timeout()
				as=autospeed/1000-1;
				$('.countbar1, .countbar2').remove('');
			}else{
				var ai=autospeed/1000-as;
				$('.con-title').append('<span class="countbar1"></span><span class="countbar2"></span>')
				$('.countbar1, .countbar2').stop().animate({'width':countid*ai+'%'},autospeed-autospeed*0.4925)
				as--;
			}
		},1000)
	}

	function timeout(){
		clearInterval(count);
		as=autospeed/1000-1;
		$('.countbar1, .countbar2').remove('');
	}

	timein();

	$(document).ready(function(){
		var msheight = $('.slide img').height();
		$('#slide-wrap').css({'height':msheight});
		$('.body-filter-preloader').hide();
		$('#landing-contents-title, #landing-contents-buttonwrap').stop().animate({'text-indent':'0'},500)
		$('#contents-button-inside').click(function(){
			$('.landingpage-filter').css({'opacity':'0','z-index':'-2'})
			$('.articleall1-content1-grid').animate({'opacity':'1'},400)

			var agent = navigator.userAgent.toLowerCase();
			if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1) || (agent.indexOf("safari") >-1))
			{
				if ((agent.indexOf("safari") >-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
				{
					bubble_background2();
				}else{
					bubble_background1();
				}
			}else{
				bubble_background2();
			}
			stop_clock();
		})
		grid2016();
	})

	setInterval(function(){
		if ($('.intro1').css('display')=='block')
		{
			$('.intro1').fadeOut(1000)

			$('.intro2').fadeIn(3500)
			$('.intro2').css({'display':'block'})

		}else if($('.intro2').css('display')=='block')
		{
			$('.intro1').fadeIn(1000)

			$('.intro2').fadeOut(3500)
		}
	},7000)
	$(window).resize(function(){
		if ($('.mobile-ui').css('display')=='none')
		{
			$('.ham-bar1').css({'top':'0px','margin-top':'0px','margin-left':'0px','left':'0','transform':'rotate(0deg)'})
			$('.ham-bar2').css({'transform':'rotate(0deg)'})
			$('.ham-bar3').css({'bottom':'0','left':'0','margin-left':'0px','margin-bottom':'0px','transform':'rotate(0deg)'})
			$('.bottom-btn-wrap').stop().animate({'left':'100%','opacity':'0'},100)
			if ($(window).scrollTop()>0)
			{
				$('.header-wrap-logo').css({'background-position':'0px -50px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px 0px'})
			}else{
				$('.header-wrap-logo').css({'background-position':'-45px -50px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px -45px'})
			}
		}else{
			if ($(window).scrollTop()>0)
			{
				$('.header-wrap-logo').css({'background-position':'0px -100px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px 0px'})
			}else{
				$('.header-wrap-logo').css({'background-position':'-90px -100px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px -90px'})
			}
		}
	})

	$(window).scroll(function(){
		if ($(window).scrollTop()>0)
		{
			var tm = $('header').height()/3;
			var mw1 = $('.articleall1-content1').height();
			var mw2 = $('.articleall1-content2').height();
			var mw3 = $('.articleall1-content3').height();
			var mw4 = $('.articleall1-content4').height();
			var mw5 = $('.articleall1-content5').height();

			if ($(window).scrollTop()>mw1-tm)
			{
				$('.articleall1-content2-grid').animate({'margin-left':'0','opacity':'1'},400)
				if ($(window).scrollTop()>mw1+mw2-tm)
				{
					$('.articleall1-content3-grid').animate({'margin-left':'0','opacity':'1'},400)
					if ($(window).scrollTop()>mw1+mw2+mw3-tm)
					{
						$('.articleall1-content4-grid').animate({'margin-left':'0','opacity':'1'},400)
						if ($(window).scrollTop()>mw1+mw2+mw3+mw4-tm)
						{
							$('.articleall1-content5-grid').animate({'margin-left':'0','opacity':'1'},400)
						}
					}
				}
			}

			$('.articleall-content').each(function(){
				if ($(window).scrollTop()>=$(this).offset().top-120){
					var scm = $(this).attr('id').substring(18,19);
					$('.menu').css({'height':'50px','border-bottom':'0px solid #bbb'});
					$('#menu'+scm).css({'height':'45px','border-bottom':'5px solid #bbb'});
					$('.menu').children('.menu-underbar').css({'bottom':'0px'});
					$('#menu'+scm).children('.menu-underbar').css({'bottom':'-5px'});
					$('.bottom-btn-img').css({'border':'0px solid #999','border-radius':'','margin-top':'','width':'56px','height':'56px','background-position':''})
					if (scm==1)
					{
						$('#bottom-btn-img1').css({'border':'5px solid #999','border-radius':'100%','margin-top':'22px','width':'50px','height':'50px','background-position':'-361px -346px'})
					}else if (scm==2)
					{
						$('#bottom-btn-img2').css({'border':'5px solid #999','border-radius':'100%','margin-top':'22px','width':'50px','height':'50px','background-position':'-361px -290px'})
					}else if (scm==3)
					{
						$('#bottom-btn-img3').css({'border':'5px solid #999','border-radius':'100%','margin-top':'22px','width':'50px','height':'50px','background-position':'-361px -234px'})
					}else if (scm==4)
					{
						$('#bottom-btn-img4').css({'border':'5px solid #999','border-radius':'100%','margin-top':'22px','width':'50px','height':'50px','background-position':'-361px -178px'})
					}else if (scm==5)
					{
						$('#bottom-btn-img5').css({'border':'5px solid #999','border-radius':'100%','margin-top':'22px','width':'50px','height':'50px','background-position':'-361px -122px'})
					}
				}
			})
			$('.top-btn').css({'display':'block'})
			if ($(window).height()+$(window).scrollTop()>$('.sectionall').height()||$('.ham-bar1').css('top')!=='0px')
			{
				$('.top-btn').css({'bottom':'115px'})

			}else{
				$('.top-btn').css({'bottom':'60px'})
			}

			$('header').css({'background':'rgba(0,0,0,0.6)','color':'#fff'})
			if ($('.mobile-ui').css('display')=='none')
			{
				$('.header-wrap-logo').css({'background-position':'0px -50px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px 0px'})
			}else{
				$('.header-wrap-logo').css({'background-position':'0px -100px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px 0px'})
			}
			$('.menu-underbar').css({'background':'#fff'})
			$('.ham-bar').css({'background':'#fff'})
			$('.phon-btn').css({'background-position':'-270px -45px'})

		}else{
			$('.top-btn').css({'display':'none'})
			$('header').css({'background':'#fff','color':'#000'})
			if ($('.mobile-ui').css('display')=='none')
			{
				$('.header-wrap-logo').css({'background-position':'-45px -50px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px -45px'})
			}else{
				$('.header-wrap-logo').css({'background-position':'-90px -100px'})
				$('.header-wrap-logo img').css({'margin':'1px 0px 0px -90px'})
			}
			$('.menu-underbar').css({'background':'#000'})
			$('.ham-bar').css({'background':'#000'})
			$('.phon-btn').css({'background-position':'-270px 0px'})

			$('.menu').css({'height':'50px','border-bottom':'0px solid #bbb'});
			$('.menu').children('.menu-underbar').css({'bottom':'0px'});
			$('.bottom-btn-img').css({'border':'0px solid #999','border-radius':'','margin-top':'','width':'56px','height':'56px','background-position':''})
		}
	})
	$('.top-btn').on('click keydown',function(e){
		if (e.type=='click')
		{
			$('body, html').animate({scrollTop:$("body").offset().top-101},200);
		}else if (e.type=='keydown')
		{
			if (e.which==13)
			{
				$('body, html').animate({scrollTop:$("body").offset().top-101},200);

			}
		}
	})
	$('header').on('keydown','.header-wrap-logo img',function(e){
		if (e.which==13)
		{
			location.href('index.html')
		}
	})
	var topmh = $('.headerall').height()+19;
	$('header').on('mouseover mouseleave click keydown','.menu',function(event){
		if (event.type=='mouseover')
		{
			$(this).children('.menu-underbar').stop().animate({'width':'50%'},100);
		}
		if (event.type=='mouseleave')
		{
			$(this).children('.menu-underbar').stop().animate({'width':'0%'},100);
		}
		if (event.type=='click')
		{
			$('.menu').css({'height':'50px','border-bottom':'0px solid #bbb'});
			$(this).css({'height':'45px','border-bottom':'5px solid #bbb'});
			$('.menu').children('.menu-underbar').css({'bottom':'0px'});
			$(this).children('.menu-underbar').css({'bottom':'-5px'});

			if ($(this).is('#menu1'))
			{
				$('body, html').animate({scrollTop: $(".articleall1-content1").offset().top-topmh},200);

			}else if ($(this).is('#menu2'))
			{
				$('body, html').animate({scrollTop: $(".articleall1-content2").offset().top-topmh},200);

			}else if ($(this).is('#menu3'))
			{
				$('body, html').animate({scrollTop: $(".articleall1-content3").offset().top-topmh},200);

			}else if ($(this).is('#menu4'))
			{
				$('body, html').animate({scrollTop: $(".articleall1-content4").offset().top-topmh},200);

			}else if ($(this).is('#menu5'))
			{
				$('body, html').animate({scrollTop: $(".articleall1-content5").offset().top-topmh},200);
			}
		}
		if (event.type=='keydown')
		{
			if (event.which==13)
			{

				$('.menu').css({'height':'50px','border-bottom':'0px solid #bbb'});
				$(this).css({'height':'45px','border-bottom':'5px solid #bbb'});
				$('.menu').children('.menu-underbar').css({'bottom':'0px'});
				$(this).children('.menu-underbar').css({'bottom':'-5px'});

				if ($(this).is('#menu1'))
				{
					$('body, html').animate({scrollTop: $(".articleall1-content1").offset().top-topmh},200);
				}else if ($(this).is('#menu2'))
				{
					$('body, html').animate({scrollTop: $(".articleall1-content2").offset().top-topmh},200);
				}else if ($(this).is('#menu3'))
				{
					$('body, html').animate({scrollTop: $(".articleall1-content3").offset().top-topmh},200);
				}else if ($(this).is('#menu4'))
				{
					$('body, html').animate({scrollTop: $(".articleall1-content4").offset().top-topmh},200);
				}else if ($(this).is('#menu5'))
				{
					$('body, html').animate({scrollTop: $(".articleall1-content5").offset().top-topmh},200);
				}

			}
		}
	})
	$('header').on('click keydown','.menu-btn',function(e){

		if (e.type=='click')
		{
			if ($(this).children('.ham-bar1').css('top')=='0px')
			{
				$(this).children('.ham-bar1').css({'top':'50%','left':'50%','margin-left':'-22px','margin-top':'-5px','transform':'rotate(45deg)'})
				$(this).children('.ham-bar2').css({'transform':'rotate(45deg)'})
				$(this).children('.ham-bar3').css({'bottom':'50%','left':'50%','margin-left':'-22px','margin-bottom':'-5px','transform':'rotate(-45deg)'})
				$('.bottom-btn-wrap').stop().animate({'left':'0px','opacity':'1'},100)
				$('.top-btn').css({'bottom':'115px'})
			}else{
				$(this).children('.ham-bar1').css({'top':'0px','margin-top':'0px','margin-left':'0px','left':'0','transform':'rotate(0deg)'})
				$(this).children('.ham-bar2').css({'transform':'rotate(0deg)'})
				$(this).children('.ham-bar3').css({'bottom':'0','left':'0','margin-left':'0px','margin-bottom':'0px','transform':'rotate(0deg)'})
				$('.bottom-btn-wrap').stop().animate({'left':'100%','opacity':'0'},100)
				$('.top-btn').css({'bottom':'60px'})
				if ($(window).height()+$(window).scrollTop()>$('.sectionall').height())
				{
					$('.top-btn').css({'bottom':'115px'})

				}else{
					$('.top-btn').css({'bottom':'60px'})
				}
			}
		}else if (e.type=='keydown')
		{
			if (e.which==13)
			{
				if ($(this).children('.ham-bar1').css('top')=='0px')
				{
					$(this).children('.ham-bar1').css({'top':'50%','left':'50%','margin-left':'-22px','margin-top':'-5px','transform':'rotate(45deg)'})
					$(this).children('.ham-bar2').css({'transform':'rotate(45deg)'})
					$(this).children('.ham-bar3').css({'bottom':'50%','left':'50%','margin-left':'-22px','margin-bottom':'-5px','transform':'rotate(-45deg)'})
					$('.bottom-btn-wrap').stop().animate({'left':'0px','opacity':'1'},100)
					$('.top-btn').css({'bottom':'115px'})
				}else{
					$(this).children('.ham-bar1').css({'top':'0px','margin-top':'0px','margin-left':'0px','left':'0','transform':'rotate(0deg)'})
					$(this).children('.ham-bar2').css({'transform':'rotate(0deg)'})
					$(this).children('.ham-bar3').css({'bottom':'0','left':'0','margin-left':'0px','margin-bottom':'0px','transform':'rotate(0deg)'})
					$('.bottom-btn-wrap').stop().animate({'left':'100%','opacity':'0'},100)
					$('.top-btn').css({'bottom':'60px'})
				}
			}
		}

	})

	$('.bottom-btn-wrap').on('click','.bottom-btn-img',function(){

		if ($(this).is('#bottom-btn-img1'))
		{
			$('body, html').animate({scrollTop: $(".articleall1-content1").offset().top-119},200);
		}else if ($(this).is('#bottom-btn-img2'))
		{
			$('body, html').animate({scrollTop: $(".articleall1-content2").offset().top-119},200);
		}else if ($(this).is('#bottom-btn-img3'))
		{
			$('body, html').animate({scrollTop: $(".articleall1-content3").offset().top-119},200);
		}else if ($(this).is('#bottom-btn-img4'))
		{
			$('body, html').animate({scrollTop: $(".articleall1-content4").offset().top-119},200);
		}else if ($(this).is('#bottom-btn-img5'))
		{
			$('body, html').animate({scrollTop: $(".articleall1-content5").offset().top-119},200);
		}
	})
	$('article').stop().on('mouseover mouseleave click fadeIn','.grid-box-con',function(e){
		if (e.type=='mouseover')
		{
			if ($('.box-filter').length==false)
			{
				$(this).children('.box-con-img').append('<div class="box-filter"><span>Click Here!</span></div>')
			}
			$(this).children('.box-con-img').children('.box-filter').animate({'top':'0','opacity':'1'},200)
			$(this).children('.box-con-img').children('.box-filter').children('span').animate({'top':'50%'},200)
			stop_s();
			timeout();
		}else if (e.type=='mouseleave')
		{
			$(this).children('.box-con-img').children('.box-filter').animate({'top':'-100%','opacity':'0'},200)
			$(this).children('.box-con-img').children('.box-filter').children('span').animate({'top':'250%'},200)
			$('.box-filter').remove()
			if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==true)
			{
				stop_s();
				timeout();
			}else{
				start_s();
				timein();
			}
		}else if (e.type=='click')
		{
			var datasum
			if (this==document.getElementById('wgrid-box-con1'))
			{
				datasum = 'data/data.html #filter-conbox-contents1';
			}else if (this==document.getElementById('wgrid-box-con2'))
			{
				datasum = 'data/data.html #filter-conbox-contents2';
			}else if (this==document.getElementById('wgrid-box-con3'))
			{
				datasum = 'data/data.html #filter-conbox-contents3';
			}else if (this==document.getElementById('wgrid-box-con4'))
			{
				datasum = 'data/data.html #filter-conbox-contents4';
			}else if (this==document.getElementById('wgrid-box-con5'))
			{
				datasum = 'data/data.html #filter-conbox-contents5';
			}else if (this==document.getElementById('wgrid-box-con6'))
			{
				datasum = 'data/data.html #filter-conbox-contents6';
			}else if (this==document.getElementById('wgrid-box-con7'))
			{
				datasum = 'data/data.html #filter-conbox-contents7';
			}else if (this==document.getElementById('wgrid-box-con8'))
			{
				datasum = 'data/data.html #filter-conbox-contents8';
			}else if (this==document.getElementById('wgrid-box-con9'))
			{
				datasum = 'data/data.html #filter-conbox-contents9';
			}else if (this==document.getElementById('wgrid-box-con10'))
			{
				datasum = 'data/data.html #filter-conbox-contents10';
			}else if (this==document.getElementById('wgrid-box-con11'))
			{
				datasum = 'data/data.html #filter-conbox-contents11';
			}else if (this==document.getElementById('wgrid-box-con12'))
			{
				datasum = 'data/data.html #filter-conbox-contents12';
			}else if (this==document.getElementById('wgrid-box-con13'))
			{
				datasum = 'data/data.html #filter-conbox-contents13';
			}else if (this==document.getElementById('wgrid-box-con14'))
			{
				datasum = 'data/data.html #filter-conbox-contents14';
			}else if (this==document.getElementById('wgrid-box-con15'))
			{
				datasum = 'data/data.html #filter-conbox-contents15';
			}else if (this==document.getElementById('wgrid-box-con16'))
			{
				datasum = 'data/data.html #filter-conbox-contents16';
			}else if (this==document.getElementById('wgrid-box-con17'))
			{
				datasum = 'data/data.html #filter-conbox-contents17';
			}else if (this==document.getElementById('wgrid-box-con18'))
			{
				datasum = 'data/data.html #filter-conbox-contents18';
			}else if (this==document.getElementById('wgrid-box-con19'))
			{
				datasum = 'data/data.html #filter-conbox-contents19';
			}else if (this==document.getElementById('wgrid-box-con20'))
			{
				datasum = 'data/data.html #filter-conbox-contents20';
			}else if (this==document.getElementById('wgrid-box-con21'))
			{
				datasum = 'data/data.html #filter-conbox-contents22';
			}else if (this==document.getElementById('wgrid-box-con22'))
			{
				datasum = 'data/data.html #filter-conbox-contents23';
			}else if (this==document.getElementById('wgrid-box-con23'))
			{
				datasum = 'data/data.html #filter-conbox-contents24';
			}

			else if (this==document.getElementById('fgrid-box-con1'))
			{
				datasum = 'data/data-f.html #filter-conbox-contents1';
			}else if (this==document.getElementById('fgrid-box-con2'))
			{
				datasum = 'data/data-f.html #filter-conbox-contents2';
			}else if (this==document.getElementById('fgrid-box-con3'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents4';
			}else if (this==document.getElementById('fgrid-box-con4'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents5';
			}else if (this==document.getElementById('fgrid-box-con5'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents6';
			}

			else if (this==document.getElementById('igrid-box-con1'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents1';
			}else if (this==document.getElementById('igrid-box-con2'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents2';
			}else if (this==document.getElementById('igrid-box-con3'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents3';
			}else if (this==document.getElementById('igrid-box-con4'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents7';
			}else if (this==document.getElementById('igrid-box-con5'))
			{
				datasum = 'data/data-g.html #filter-conbox-contents8';
			}

			else if (this==document.getElementById('mgrid-box-con1'))
			{
				datasum = 'data/data-m.html #filter-conbox-contents1';
			}else if (this==document.getElementById('mgrid-box-con2'))
			{
				datasum = 'data/data-m.html #filter-conbox-contents2';
			}else if (this==document.getElementById('mgrid-box-con3'))
			{
				datasum = 'data/data-m.html #filter-conbox-contents3';
			}

			else{
				datasum = 'data/data-m.html #filter-conbox-contents4';
			}
			$('.click-all-filter').fadeIn('fast',function(){
				$('.filter-conbox-contentswrap').fadeIn('fast').load(datasum,function(){
					$('#click-all-filter-index').hide();
				})
			});
			return false;
		}
	})
	$('.click-all-filter').on('mousedown mouseup click fadeOut','.filter-title-closebtn',function(event){
		if (event.type=='mousedown')
		{
			$('.filter-title-closebtn').children('img').css({'width':'18px','height':'18px','left':'-9px','top':'-9px'})
		}
		if (event.type=='mouseup')
		{
			$('.filter-title-closebtn').children('img').css({'width':'20px','height':'20px','left':'-10px','top':'-10px'})
		}
		if (event.type=='click')
		{
			$('#click-all-filter-index').show();
			$('#filter-conbox-contentswrap').html('');
			$('.click-all-filter').fadeOut('fast')
		}
	})
	$('.phon-btn').on('click keydown',function(e){
		if (e.type=='click')
		{
			if (navigator.userAgent.match(/android/i)) {
				location.href='tel:010-9954-3410','_self';
			} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
				location.href='tel:010-9954-3410','_self';
			}else{
				alert('모바일에서만 가능합니다.');
			}
		}else if (e.type=='keydown')
		{
			if (e.which==13)
			{
				if (navigator.userAgent.match(/android/i)) {
					location.href='tel:010-9954-3410','_self';
				} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
					location.href='tel:010-9954-3410','_self';
				}else{
					alert('모바일에서만 가능합니다.');
				}
			}
		}
	})

	$('.footer-add-num').click(function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='sms:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='sms:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})

		var msheight = $('.slide img').height();
		var mswidth = $('.slide').each(Array).length;/*슬라이드 전체 배열의 갯수만큼의 숫자를 추출*/
		var wrapwidth = mswidth*100;
		var move=0;
		var bi=0;

		$('#slide-wrap').css({'height':msheight});

		$(window).resize(function(){
			var msheight = $('.slide img').height();
			var mswidth = $('.slide').each(Array).length;/*-슬라이드 전체 배열의 갯수만큼의 숫자를 추출-*/
			var wrapwidth = mswidth*100;
			var cal_width = s_width*0.2;

			$('#slide-wrap').css({'height':msheight});
		});

		for (var i=0;i<mswidth;i++)/*.slide의 배열이 늘어나면 알아서 아이디와 레프트값 연산 및 .indicator의 btn도 배열 갯수만큼 append*/
		{
			var t=i+1;
			i=i*100;
			$('#slide'+t).css({'left':i+'%'})
			$('.indicator').append('<span id="bulet'+t+'" class="bulet">●</span>')
			i=i/100;
		};

		$('#prev-btn').on('click mouseover mouseout',function(event){
			if (event.type=='click')
			{
				move=move+100;
				bi=1+move/100*-1;
				if (move<100)
				{
					$('.slide-container').stop().animate({'left':move+'%'},100)
					$('#next-btn').css({'z-index':'4','opacity':'1'})
					$('.bulet').css({'color':'#ccc'})
					$('#bulet'+bi).css({'color':'#000'})

					if (move==-100){
						grid2017();
					}else if(move==-200){
						grid2018();
					}

					if (move==0)
					{
						$(this).css({'z-index':'-5','opacity':'0'});
						grid2016();
					}
				}else{
					move=0;
					$('.slide-container').stop().animate({'left':move+'%'},100);
					$('#next-btn').css({'z-index':'4','opacity':'1'});
					if (move==0)
					{
						$(this).css({'z-index':'-5','opacity':'0'});
						grid2016();
					}
				}
			}
			if (event.type=='mouseover')
			{
				stop_s();
				timeout();
			}else if (event.type=='mouseout')
			{
				if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==true)
				{
					$('.grid-box-right label ').children('span').html('Play')
					stop_s();
					timeout();
				}else{
					$('.grid-box-right label ').children('span').html('Stop')
					start_s();
					timein();
				}
			}
		});

		$('#next-btn').on('click mouseover mouseout',function(event){
			if (event.type=='click')
			{
				move=move-100;
				bi=1+move/100*-1;

				if (move==-100){
					grid2017();
				}else if(move==-200){
					grid2018();
				}

				if (move>-mswidth*100)/*슬라이드 갯수 최대치 자동 연산*/
				{
					$('.slide-container').stop().animate({'left':move+'%'},100)
					$('#prev-btn').css({'z-index':'4','opacity':'1'})
					$('.bulet').css({'color':'#ccc'})
					$('#bulet'+bi).css({'color':'#000'})
					if (move-100==-mswidth*100)
					{
						$(this).css({'z-index':'-5','opacity':'0'})
						grid2019();
					}
				}else{
					move=-mswidth*100+100;
				}
			}
			if (event.type=='mouseover')
			{
				stop_s();
				timeout();
			}else if (event.type=='mouseout')
			{
				if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==true)
				{
					$('.grid-box-right label ').children('span').html('Play')
					stop_s();
					timeout();
				}else{
					$('.grid-box-right label ').children('span').html('Stop')
					start_s();
					timein();
				}
			}
		});

		$('.slide').on('touchstart touchend touchcancle mouseover mouseleave mousedown mouseup',function(event){

			var cal_width = s_width*0.2;
			var cal_height = msheight*0.2;

			if (event.type=='mouseover')
			{
				stop_s();
				timeout();
			}else if (event.type=='mouseleave')
			{
				if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==true)
				{
					$('.grid-box-right label ').children('span').html('Play')
					stop_s();
					timeout();
				}else{
					$('.grid-box-right label ').children('span').html('Stop')
					start_s();
					timein();
				}
			}
			if (event.type=='touchstart')
			{
				event.preventDefault();
				tstart=event.originalEvent.touches[0].pageX;
				ystart=event.originalEvent.touches[0].pageY;
				//stop_s();
			}
			// if (event.type=='touchmove'){
			// 	event.preventDefault();
			// 	event.stopPropagation();
			// 	tmove=event.originalEvent.touches[0].pageX;
			// 	//stop_s();
			// }

			else if (event.type=='touchend'){
				event.preventDefault();
				event.stopPropagation();
				tmove=event.originalEvent.changedTouches[0].pageX;
				ymove=event.originalEvent.changedTouches[0].pageY;

				stop_s();
				var tvalue = tstart-tmove;
				var yvalue = ystart-ymove;

				if (tvalue>cal_width)
				{
					var tvalue = cal_width;

					$('#next-btn').stop().click();
					//alert('1-1 = '+tvalue+'/ 1-2 = '+cal_width);

					//move=move-100;

				}else if (tvalue<-cal_width)
				{
					//move=move+100;
					var tvalue = cal_width;

					$('#prev-btn').stop().click();
					//alert('2-1 = '+tvalue+'/ 2-2 = '+cal_width);

				}else if (tvalue<cal_width){
					$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
				}
				if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==false) {
					start_s();
				}
			}else if (event.type=='touchcancle')
			{
				event.preventDefault();
				event.stopPropagation();
				tmove=event.originalEvent.changedTouches[0].pageX;
				ymove=event.originalEvent.changedTouches[0].pageY;

				stop_s();
				var tvalue = tstart-tmove;
				var yvalue = ystart-ymove;

				if (tvalue>cal_width)
				{
					var tvalue = cal_width;

					$('#next-btn').stop().click();
					//alert('1-1 = '+tvalue+'/ 1-2 = '+cal_width);

					//move=move-100;

				}else if (tvalue<-cal_width)
				{
					//move=move+100;
					var tvalue = cal_width;

					$('#prev-btn').stop().click();
					//alert('2-1 = '+tvalue+'/ 2-2 = '+cal_width);

				}else if (tvalue<cal_width){
					$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
				}
				if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==false) {
					start_s();
				}
			}

			return false;
		});

		var cb;
		var cbm;
		$('.bulet').on('click mouseover mouseleave',function(event){
			if (event.type=='click')
			{
				for (cb = $('.bulet').each(Array).length;cb>=1;cb-- )
				{
					if ($(this).attr('id')=='bulet'+cb)
					{
						$('.bulet').css({'color':'#ccc'})
						$(this).css({'color':'#000'})
						cbm = cb*100;

						if (move-cbm<0)
						{
							if (move-cbm<-100)
							{
								$('.slide-container').stop().animate({'left':-cbm+100+'%'},100)

								if (cb==1)
								{
									$('#prev-btn').css({'z-index':'-5','opacity':'0'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})

									grid2016();

								}else if ((cb==2)&&(cb!==mswidth))
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})

									grid2017();
								}else if ((cb==3)&&(cb!==mswidth))
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})

									grid2018();
								}
								else if (cb==mswidth)
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'-5','opacity':'0'})

									grid2019();
								}

							}else if (move-cbm>-100){
								$('.slide-container').stop().animate({'left':0+'%'},100)
							}else if (move-cbm==-100)
							{

								$('.slide-container').stop().animate({'left':-cbm+100+'%'},100)

								if (cb==1)
								{
									$('#prev-btn').css({'z-index':'-5','opacity':'0'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})

								}else if ((cb!==1)&&(cb!==mswidth))
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})
								}else if (cb==mswidth)
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'-5','opacity':'0'})
								}
							}
						}
					}
				}
				move=-cbm+100;
			}

			if (event.type=='mouseover')
			{
				stop_s();
				timeout();
			}else if (event.type=='mouseleave')
			{
				if ($('#box-right-btnwrap input[type=checkbox]').prop('checked')==true)
				{
					$('.grid-box-right label ').children('span').html('Play')
					stop_s();
					timeout();
				}else{
					$('.grid-box-right label ').children('span').html('Stop')
					start_s();
					timein();
				}
			}
		});

		if ((move==0)||(cb==1))
		{
			$('#prev-btn').css({'z-index':'-5','opacity':'0'})
			$('#next-btn').css({'z-index':'4','opacity':'1'})
			$('.bulet').css({'color':'#ccc'})
			$('#bulet1').css({'color':'#000'})
		}else if ((cb!==1)&&(cb!==mswidth))
		{
			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			$('#next-btn').css({'z-index':'4','opacity':'1'})
		}else if (cb==mswidth)
		{
			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			$('#next-btn').css({'z-index':'-5','opacity':'0'})
		};

		//var autospeed=6000; - 자체분리시 사용.
		function start_s(){
			interval = setInterval(function(){
				msswipe = mswidth*100;
				msminus = mswidth*-100+100;
				var m;

				timeout();
				timein();

				if (move==msminus)
				{
					move=0;
					m=move*-1;
					bi=1+move/100;

				}else{
					move=move-100;
					m=move*-1;
					bi=1+m/100;
				}

				if (move<msswipe)
				{
					$('#prev-btn').css({'z-index':'4','opacity':'1'})
					$('#next-btn').css({'z-index':'4','opacity':'1'})
					$('.bulet').css({'color':'#ccc'})
					$('#bulet'+bi).css({'color':'#000'})
					$('.slide-container').stop().animate({'left':move+'%'},100)

					if (move==-200){
						grid2018();
					}
					if (move==-100)
					{
						grid2017();
					}
					if (move==0)
					{
						$('#prev-btn').css({'z-index':'-5','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})

						grid2016();
					}
					if (move-msminus==0)
					{
						$('#prev-btn').css({'z-index':'4','opacity':'1'})
						$('#next-btn').css({'z-index':'-5','opacity':'0'})

						grid2019();
					}

				}else if (move>msminus){
					$('#prev-btn').css({'z-index':'4','opacity':'1'})
					$('#next-btn').css({'z-index':'-5','opacity':'0'})

					grid2019();
				}
			},autospeed)
		}
		start_s();
		function stop_s(){
			clearInterval(interval)
		}

	$('#all-btn').click(function(){
		for (c=1;c<mswidth;c++){
			$('#prev-btn').stop().click();
		}
		gridAll();
		stop_s();
		timeout();
		click_snd();
	})

	$('#box-right-btnwrap input[type=checkbox]').click(function(){
		click_snd();
		conh();
		if ($(this).prop('checked')==true)
		{
			$('.grid-box-right label ').children('span').html('Play')
			stop_s();
			timeout();
		}else{
			$('.grid-box-right label ').children('span').html('Stop')
			start_s();
			timein();
			grid2016();
		}
	})
	//-------램덤 방울 particle------------------
		function bubble_background1(){
			var b_canbus=document.getElementById('articleall-content1');
			//setInterval(function(){/*처음에 딜레이를 주고 싶으면 이것도 활성화*/
			for (var i=1; i<5; ++i)
			{
				(function(i){
					setTimeout(function(){
						setInterval(function(){/*기본적인 딜레이 조절.처음 부부과 같이 활성화시 처음 시간+기본딜레이 시간 후에 시작 됨.*/
							var pb=Math.floor(Math.random()*60)+15;
							var bl=Math.floor(Math.random()*92)+4;
							var bt=Math.floor(Math.random()*5)+10;
							var hbt=bt/2;
							//var btm=hbt*200;
							var bubble='<span class="bubble" id="bubble'+i+'" style="width:'+pb+'px;height:'+pb+'px;left:'+bl+'%;border:2px solid rgba(0,0,0,0.15);animation:bubble-act '+hbt+'s linear infinite;"></span>';
							var bo=$('#bubble'+i);
							b_canbus.insertAdjacentHTML('beforeend',bubble);
							if (bo)
							{
								bo.remove(b_canbus.bo);
							};
						},2600);
					},i*300);
				})(i);
			}
			//},2600);
		};
		// function bubble_background2(){//es6버전 original version
		// 	const b_canbus=document.getElementById('articleall-content1');
		// 	const circleArray = [];
		// 	let loopCancel;
		// 	const canvas = document.createElement('canvas');
		// 	const context = canvas.getContext('2d');
		// 	b_canbus.appendChild(canvas);

		// 	function toRadian(d) {
		// 		return d * Math.PI / 180;
		// 	}

		// 	class Circle {
		// 		constructor(info) {
		// 			this.index = info.index;
		// 			this.x = info.x;
		// 			this.y = info.y;
		// 			this.speed = info.speed;
		// 			this.radius = info.radius;
		// 			this.startAngle = info.startAngle;
		// 			this.endAngle = info.endAngle;
		// 			this.clockwise = info.clockwise;
		// 			this.draw();
		// 		}

		// 		draw() {
		// 			context.beginPath();
		// 			context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
		// 			context.fillStyle = 'rgba(255, 255, 255, 0)';
		// 			context.fill();
		// 			context.strokeStyle = 'rgba(0, 0, 0, 0.15)';
		// 			context.lineWidth = '2';
		// 			context.stroke();
		// 			context.closePath();
		// 			context.fillStyle = '#fff';
		// 			//context.font = '30px bold sans-serif';
		// 			context.textAlign = "center";
		// 			//context.fillText(this.index, this.x, this.y+10);
		// 		}
		// 	}

		// 	function setLayout() {
		// 		canvas.width = window.innerWidth;
		// 		canvas.height = window.innerHeight;
		// 	}

		// 	function init() {
		// 		setLayout();
		// 		let x;
		// 		let y;
		// 		let speed;
		// 		let circle;

		// 		for (let i = 0; i < 5; i++) {
		// 			x = (Math.random() * window.innerWidth * 0.6)+(Math.random() * window.innerWidth * 0.4);
		// 			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		// 			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.
		// 			speed = Math.random()*3 + 2;
		// 			circle = new Circle({
		// 				index: i,
		// 				x: x,
		// 				y: y,
		// 				speed: speed,
		// 				radius : Math.floor(Math.random()*30)+10,
		// 				startAngle : 360,
		// 				endAngle : 350,
		// 				clockwise : false
		// 			});
		// 			circleArray.push(circle);
		// 		}

		// 		render();
		// 	}


		// 	function render() {
		// 		context.clearRect(0, 0, canvas.width, canvas.height);
		// 		let circle;
		// 		for (let i = 0; i < circleArray.length; i++) {
		// 			circle = circleArray[i];
		// 			circle.y -= circle.speed;
		// 			if (circle.y < -circle.radius) {
		// 				circle.y = canvas.height;
		// 				circle.x = (Math.random() * window.innerWidth * 0.6)+(Math.random() * window.innerWidth * 0.4);
		// 				circle.radius = Math.floor(Math.random()*60)+15;
		// 			}
		// 			circle.draw();
		// 		}
		// 		loopCancel=requestAnimationFrame(render);
		// 	}
		// 	init();
		// 	window.addEventListener('resize', setLayout);
		// }

		function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
		function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function bubble_background2() {
			var b_canbus = document.getElementById('articleall-content1');
			var circleArray = [];
			var loopCancel;
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			b_canbus.appendChild(canvas);
			function toRadian(d) {
				return d * Math.PI / 180;
			}

			var Circle =
			/*#__PURE__*/
			function () {
				function Circle(info) {
				_classCallCheck(this, Circle);

				this.index = info.index;
				this.x = info.x;
				this.y = info.y;
				this.speed = info.speed;
				this.radius = info.radius;
				this.startAngle = info.startAngle;
				this.endAngle = info.endAngle;
				this.clockwise = info.clockwise;
				this.draw();
				}

				_createClass(Circle, [{
				key: "draw",
				value: function draw() {
					context.beginPath();
					context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
					context.fillStyle = 'rgba(255, 255, 255, 0)';
					context.fill();
					context.strokeStyle = 'rgba(0, 0, 0, 0.15)';
					context.lineWidth = '2';
					context.stroke();
					context.closePath();
					context.fillStyle = '#fff';
					//context.font = '30px bold sans-serif';
					context.textAlign = "center";
					//context.fillText(this.index, this.x, this.y+10);
					}
				}]);

			return Circle;
		}();

			function setLayout() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight-80;
			}

			function init() {
				setLayout();
				var x;
				var y;
				var speed;
				var circle;

				for (var i = 0; i < 5; i++) {
				x = Math.random() * window.innerWidth * 0.6 + Math.random() * window.innerWidth * 0.4;
				y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
				//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

				speed = Math.random() * 3 + 2;
				circle = new Circle({
					index: i,
					x: x,
					y: y,
					speed: speed,
					radius: Math.floor(Math.random() * 30) + 10,
					startAngle: 360,
					endAngle: 350,
					clockwise: false
				});
				circleArray.push(circle);
				}

				render();
			}

			function render() {
				context.clearRect(0, 0, canvas.width, canvas.height);
				var circle;

				for (var i = 0; i < circleArray.length; i++) {
				circle = circleArray[i];
				circle.y -= circle.speed;

				if (circle.y < -circle.radius) {
					circle.y = canvas.height;
					circle.x = Math.random() * window.innerWidth * 0.6 + Math.random() * window.innerWidth * 0.4;
					circle.radius = Math.floor(Math.random() * 60) + 15;
				}

				circle.draw();
				}

				loopCancel = requestAnimationFrame(render);
			}

			init();
			window.addEventListener('resize', setLayout);
		};
	//------------------------------------------
	return false;
});

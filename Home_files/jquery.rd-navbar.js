!function(e){var t,s,a={cntClass:"rd-mobilemenu",menuClass:"rd-mobilemenu_ul",submenuClass:"rd-mobilemenu_submenu",panelClass:"rd-mobilepanel",toggleClass:"rd-mobilepanel_toggle",titleClass:"rd-mobilepanel_title"},l=function(t,s){this.options=s,this.$source=e(t)};l.prototype={init:function(){var e=this;e.createDOM(),e.createListeners()},createDOM:function(){var t=this;e("body").append(e("<div/>",{"class":a.cntClass}).append(t.createNavDOM())).append(e("<div/>",{"class":a.panelClass}).append(e("<button/>",{"class":a.toggleClass}).append(e("<span/>"))).append(e("<div/>",{"class":a.titleClass,text:document.title})))},createNavDOM:function(){for(var t=this,s=e("<ul>",{"class":a.menuClass}),l=t.$source.children(),o=0;o<l.length;o++){for(var n=l[o].children,i=null,r=0;r<n.length;r++)if(n[r].tagName)switch(i||(i=document.createElement("li"),i.className=l[o].className.indexOf("active")>-1?"level_1 active":"level_1"),n[r].tagName.toLowerCase()){case"a":var c=n[r].cloneNode(!0);i.appendChild(c);break;case"ul":var u=n[r].cloneNode(!0);u.className=a.submenuClass,e(u).css({display:"none"}),i.appendChild(u),e(i).find("> a").each(function(){$this=e(this),$this.addClass("rd-with-ul").append(e("<span/>",{"class":"rd-submenu-toggle"})).find(".rd-submenu-toggle").on("click",function(t){if(t.preventDefault(),$this=e(this).parent(),$this.hasClass("rd-with-ul")&&!$this.hasClass("active")){e(".rd-with-ul").removeClass("active");var s=$this.addClass("active").parent().find("."+a.submenuClass);s.stop().slideDown(),e("."+a.submenuClass).not(s).stop().slideUp()}else{var s=$this.removeClass("active").parent().find("."+a.submenuClass);s.stop().slideUp()}})})}i&&s.append(i)}return s},createListeners:function(){var e=this;e.createToggleListener(),e.createResizeListener()},
createToggleListener:function(){
	var t,s=this;t=s.isMobile()?"touchstart":"click",
	e("body").delegate("."+a.toggleClass,t,function(){
		var l=e("."+a.cntClass);
			e(this).toggleClass("active"),
			l.hasClass("active")?(e(this).removeClass("active"),
			l.removeClass("active"),
			//e("body").undelegate("*","mousewheel",s.scroll),
			//e("body").undelegate("*","touchmove",s.scroll),
			//e("body").undelegate("*","touchend",s.touchend),
			//e("body").undelegate("*","touchstart",s.close),
			e("body").undelegate("*:not(."+a.toggleClass+" span)","touchstart",s.close)
			):(e(this).addClass("active"),
			l.addClass("active"),
			//e("body").delegate("*","mousewheel",s.scroll),
			//e("body").delegate("*","touchmove",s.scroll),
			//e("body").delegate("*","touchend",s.touchend),
			//e("body").delegate("*","touchstart",{type:t},s.close),
			e("body").delegate("*:not(."+a.toggleClass+" span)","touchstart",{type:t},s.close)
			)
		})
},createResizeListener:function(){var t=this;e(window).on("resize",function(){var s=e("."+a.cntClass);"none"==s.css("display")&&(s.removeClass("active"),e("."+a.toggleClass).removeClass("active"),e("body").undelegate("*","mousewheel",t.scroll),e("body").undelegate("*","touchmove",t.scroll),e("body").undelegate("*","touchend",t.touchend),e("body").undelegate("*","touchstart",t.close),e("body").undelegate("*:not(."+a.toggleClass+" span)","click",t.close))})},scroll:function(l){l.preventDefault();var o=e("."+a.menuClass),n=l.originalEvent.targetTouches?l.originalEvent.targetTouches[0].pageX:l.pageX,i=l.originalEvent.targetTouches?l.originalEvent.targetTouches[0].pageY:l.pageY;if(i>o.offset().top&&i<o.offset().top+o.outerHeight()&&n>o.offset().left&&n<o.offset().left+o.outerWidth()){var r=0;l.originalEvent.targetTouches?(t||(t=i),r=t-i,t=i,s=r>0):r=-50*(l.originalEvent.wheelDelta||-l.originalEvent.detail),o.stop().scrollTop(o.scrollTop()+r)}return!1},touchend:function(){var l=e("."+a.menuClass);l.stop()/*.animate({scrollTop:l.scrollTop()+(s?100:-100)},3e3,"easeOutQuint")*/,t=void 0},close:function(t){if(t.originalEvent){var s=e("."+a.menuClass),l=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,o=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;o>s.offset().top&&o<s.offset().top+s.outerHeight()&&l>s.offset().left&&l<s.offset().left+s.outerWidth()||e("."+a.toggleClass).trigger(t.data.type)}},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},e.fn.rdparallax=function(){var e=this;return e.length&&new l(e[0]).init(),e},window.RDMobilemenu_autoinit=function(e){var t=jQuery(e);t.length&&new l(t[0]).init()}}(jQuery),jQuery(document).ready(function($){
		if($("body").hasClass('mobile') && $(document).width() < 768 && !$("body").hasClass('mobile_mode')){
			RDMobilemenu_autoinit("#icemegamenu");
			$("#icemegamenu").remove();
		}
		
	});
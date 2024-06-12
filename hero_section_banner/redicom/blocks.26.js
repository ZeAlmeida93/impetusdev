var lazy_version = lazy_version || 1;

if (lazy_enable == 1 && lazy_version == 2) {
	/* lozad.js - Bug IE */
	Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function (e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var r = Object(e), t = 1; t < arguments.length; t++) { var n = arguments[t]; if (null != n) { n = Object(n); for (var c = Object.keys(Object(n)), o = 0, a = c.length; o < a; o++) { var b = c[o], i = Object.getOwnPropertyDescriptor(n, b); void 0 !== i && i.enumerable && (r[b] = n[b]) } } } return r } });
}

$(".content_products .productItemBlocos .prod-info-cb").each(function (k, v) {
	if ($(".prod-info-cb-price", this).text() == "") {
		$(".prod-info-cb-price", this).remove();
		$(this).parents(".productItemBlocos").removeClass("info-price");
	}

	if ($(".prod-info-cb-pv-price", this).text() == "") {
		$(".prod-info-cb-pv-price", this).remove();
		$(".prod-info-cb-disc-price", this).remove();
		$(this).parents(".productItemBlocos").removeClass("info-pv-price info-disc-price");
	}

	if ($(".prod-info-cb-disc-price", this).text() == "") {
		$(".prod-info-cb-disc-price", this).remove();
		$(this).parents(".productItemBlocos").removeClass("info-disc-price");
	}
});

function visualPagerDesign_ready(param) {
	$(".rdc-block-fixed-fullscreen").closest(".inner-container-blocks-section").removeClass("container");

	if ($(".container-blocks .cms_frm").length > 0) {
		$(".container-blocks .cms_frm input[name=csrf]").val(JSVars.shop.csrf);
	}

	$(".content_blocks_tabs").find("a").click(function () {
		if ($(this).parent().hasClass("active")) return;

		$(this).parents(".content_blocks_tabs_ul").find(".content_blocks_tabs_li.active").removeClass("active");
		$(this).parent().addClass("active");

		var _index = $(this).parent().index();
		var _display = (isMobileDevice()) ? "block" : "table";
		var _wp = $(this).parents(".wrapper-banner");
		var _tab = $(_wp.find(".content_products .content_tab")[_index]);

		_wp.find(".content_products .content_tab").hide();
		_tab.css({ "display": _display, "width": "100%", "margin-left": 0, "margin-right": 0 });

		ellipsisProductItemBlocks();
		if (lazy_version == 1 && _tab.find(".primary_image.rdc-vpd-lozad").length > 0) {
			visualPagerDesignDataLazy();
		} else {
			if (_wp.find(".blocks_slider_mobile").length > 0 && _tab.find(".section-products").length > 0 && _tab.find(".section-products").is(":visible") && _tab.find(".section-products").hasClass("slick-start-initialized") == false && _tab.find(".section-products .rdc-vpd-lozad").length == 0) {
				blocksProductsSliderMobile(_tab.find(".section-products"));
			} else {
				if (typeof productSlide == "function") { productSlide(); }
			}
		}
	});

	$(".htmlTable.absolute").each(function () {
		if ($(this).height() < $(this).parent().height()) {
			$(this).height($(this).parent().height())
		}
	});

	if ($(".wrapper-banner.blog").length > 0 && typeof _classCallCheck != "undefined") {
		$(".wrapper-banner.blog .item-title").ellipsis({ row: 2, onlyFullWords: true }).addClass("ellipsisActive");
	}

	IE_ajusts();

	printInstagram();

	visualpager_mp4_videos();

	if (isMobileDevice() && $(".columnAutoHeightMobile").length > 0) {
		columnAutoHeightMobile();
	}

	if ($(".bloco38-multiimages-4").length > 0) {
		bloco38MultiImages();
	}

	if ($(".propositions-slider").length > 0 && (isMobileDevice() || ($("body").hasClass("tablet") && $("body").hasClass("rdc-viewport-devicewidth") && window.innerWidth < 1200))) {
		propositionsSlider();
	}

	if ($(".testemunhos-slider").length > 0 && (isMobileDevice() || ($("body").hasClass("tablet") && $("body").hasClass("rdc-viewport-devicewidth") && window.innerWidth < 1200))) {
		testemunhosSlider();
	}

	if ($(".wrapper-banner-maintable .wrapper-banner-product").length > 0) {
		banner58_59_60_product();
	}

	if ($(".wrapper-banner.banner68").length > 0) {
		banner68();
	}

	setTimeout(function () {
		if ($(".wrapper-banner.banner23").length > 0) {
			$(".blocks_slider_mobile .section-products:not(.slick-start-initialized)").each(function () {
				if ($(this).is(":visible") && ($(this).find(".primary_image.rdc-vpd-lozad").length == 0 || lazy_enable == 0)) {
					if ($(this).hasClass("slick-initialized")) { $(this).slick("unslick"); }
					blocksProductsSliderMobile($(this));
				}
			});
			ellipsisProductItemBlocks();
		}

		if ($(".container-slider-blocos").length > 0) {
			$(".container-slider-blocos .sliderBlocos:not(.slick-start-initialized)").each(function () {
				if ($(this).is(":visible") && ($(this).find(".primary_image.rdc-vpd-lozad").length == 0) || lazy_enable == 0) {
					if ($(this).hasClass("slick-initialized")) { $(this).slick("unslick"); }
					createMultiImagesSlider($(this));
				}
			});
		}

		if ($(".brands-banner").length > 0) {
			$(".brands-banner .brands-banner-slider:not(.slick-start-initialized)").each(function () {
				if ($(this).is(":visible") && ($(this).find(".primary_image.rdc-vpd-lozad").length == 0) || lazy_enable == 0) {
					if ($(this).hasClass("slick-initialized")) { $(this).slick("unslick"); }
					bannerBrandsSlider($(this));
				}
			});
		}

		if ($(".shopbylook-banner-slider").length > 0) {
			$(".shopbylook-banner-slider:not(.slick-start-initialized)").each(function () {
				if ($(this).is(":visible") && ($(this).find(".primary_image.rdc-vpd-lozad").length == 0) || lazy_enable == 0) {
					if ($(this).hasClass("slick-initialized")) { $(this).slick("unslick"); }
					bannerShopByLookSlider($(this));
				}
			});
		}

		if ($(".banner63").length > 0) {
			$(".banner63").each(function () {
				if (($(this).find(".primary_image.rdc-vpd-lozad").length == 0) || lazy_enable == 0) {
					createHotspots($(this));
				}
			});
			$("body").on("click", ".hotspot-overlay .hotspot-btn-detail", function (event) {
				if ($('.rdc-platform-b2b').length > 0 && typeof angular.element('[ng-controller="PopupProductController"]').scope() == "object") {
					event.preventDefault();
					angular.element('[ng-controller="PopupProductController"]').scope().updateProduct({ pid: $(this).data('pid') });
				}
			});
		}
	}, 10);

	if (document.documentMode && $(".rdc-block-fixed-fullscreen .primary_image.cover").length > 0) {
		$(".rdc-block-fixed-fullscreen .primary_image.cover").each(function () {
			var src = $(this).attr("src");
			if (src != undefined) $(this).closest("figure").css("background-image", "url('" + src + "')");
		});
	}

	$(".pagers_multiImagens li a").click(function (ev) {
		ev.preventDefault();
		var _parent = $(this).parent();
		var _index = $(this).parent().index();
		var indexSlide = $(this).parents("ul").attr("indexSlide");
		var template = $(this).parents("ul").attr("template");

		$("li.active", $(this).parents(".pagers_multiImagens")).removeClass("active");
		_parent.addClass("active");

		if (typeof window['slider_' + indexSlide + template]) {
			window['slider_' + indexSlide + template].slick("slickGoTo", _index);
		}

	});

	$(".shopbylook-banner-slider .shopbylook-banner-total-products").click(function () {
		if (typeof showProductsRightBar == "function") {
			var shopbylookid = $(this).closest(".shopbylook-banner").attr("shopbylookid"),
				shopbylookunid = $(this).closest(".uni").attr("shopbylookunid"),
				shopbylookqtdP = parseInt($(this).closest(".uni").attr("qtd_prods"));

			if (shopbylookqtdP > 0) {
				showProductsRightBar(shopbylookid, shopbylookunid, $(this).closest('.wrapper-banner'));
			}
		}
	});

	if ($('.banner64').length > 0) {
		$('.banner64 .rdc-credit-simulator-value').on('keypress', function (event) {
			var charCode = (event.which) ? event.which : event.keyCode
			if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57)))
				return false;
		});

		$('.banner64 .rdc-credit-simulator-value').on('keyup', function () {
			var creditValue = $(this).val(), simulator = $(this).data('simulator'), creditBlock = $(this).closest('.banner64');

			if (typeof timerCreditSimulator != "undefined")
				clearTimeout(timerCreditSimulator);

			timerCreditSimulator = setTimeout(function () {
				buildCreditSimulator(creditValue, simulator, creditBlock);
			}, 400);
		});
	}

	/* Videos in mobile - Auto play not working */
	if ($("body").hasClass("tablet") || isMobileDevice()) {
		$(".productColumn.rdc-product-item-enhance-type-3 .video-js").css("opacity", 0);
	}

	/* Acordeão */
	$('body').on('click', '.rdc-vpd-accordion > li > .rdc-vpd-accordion-head', function () {
		var accordionContainer = $(this).closest('.rdc-vpd-accordion');
		if ($(this).parent().hasClass('active')) {
			accordionContainer.children('li').removeClass('active');
			$('.rdc-vpd-accordion-content:visible', accordionContainer).stop(true, true).slideUp('normal');
		} else {
			accordionContainer.children('li').removeClass('active');
			$('.rdc-vpd-accordion-content', accordionContainer).slideUp('normal');
			$(this).parent().addClass('active');
			var accordionContent = $(this).next().length == 0 ? $(this).find('.rdc-vpd-accordion-content').first() : $(this).next();
			accordionContent.stop(true, true).slideDown('normal');
		}
	});

	showProductItemVideo();
	videoListControll();

	setTimeout(function () { IE_ajusts(); }, 500);

	if (param != 'ready') {
		//entriesFunction = false;
		visualPagerDesignDataLazy(param);

		if ($(".structuredTextTable:not(.bottomImage)").length > 0 && $(".structuredTextTable:not(.bottomImage)").first().find(".structuredText").attr("talign") != undefined) {
			positioningStructuredText();
			$(".draggable-positioning .structuredText").css("opacity", 1);
		}
	}
}

$(document).ready(function () {
	visualPagerDesign_ready('ready');
});

function IE_ajusts() {
	if (document.documentMode || window.navigator.userAgent.indexOf("Edge") > -1) {
		setTimeout(function () {
			setTimeout(function () {
				$(".container-video").each(function () {
					$(this).height($(this).parent().height());
				});

				$(".htmlTable").each(function () {
					$(this).css("min-height", $(this).parent().height());
				});

				$(".htmlTable .contentHTML_TEXT").each(function () {
					$(this).css("min-height", $(this).parent().height());
				});

				$(".htmlTable .contentHTML_TEXT_CONTENT").each(function () {
					$(this).css("min-height", $(this).parent().height());
				});

				$(".structuredTextTable").each(function () {
					$(this).css("min-height", $(this).parent().height());
				});

				ajust_blocos();

			}, 500);
		}, 200);

		if (document.documentMode <= 11) {
			$(".wrapper-banner.banner37 table tr td .box-images").each(function () {
				if ($(this).parent().height() > $(this).height())
					$(this).height($(this).parent().height());
			});

			$(".wrapper-banner.banner16 .dis_table .dis_cell .box-images").each(function () {
				$(this).css("height", $(".cover_image", this).height());
			});

			$(".wrapper-banner.banner37 .dis_table .dis_cell table").each(function () {
				$(this).css("height", $(this).parent().height());
			});

			$(".wrapper-banner.banner37 ._frame").each(function () {
				if ($(".cover_image", this).height() != $(this).height())
					$(this).height($(".cover_image", this).height() - 1)

				$(this).parent().height($(this).height())
			});

			$(".wrapper-banner.banner33 .dis_table .dis_cell .box-images").each(function () {
				$(this).css("height", $(this).parent().height());
			});

			ajust_blocos();
		}
	}

	if (/firefox/.test(navigator.userAgent.toLowerCase())) {
		ajust_blocos();
	}
}

function ajust_blocos() {
	var blocosIDs = [6, 7, 20, 33, 34, 35, 36, 37, 38, 39, 44, 45, 46, 47, 48, 49, 50, 51];
	$.each(blocosIDs, function (k, v) {
		$(".wrapper-banner.banner" + v + " .dis_table .dis_cell .box-images").each(function () {
			if ($(this).parent().height() > 50)
				$(this).css("height", $(this).parent().height());
		});

		$(".wrapper-banner.banner" + v + " .dis_table .dis_cell .imageStructuredTextBottom").each(function () {
			if ($(this).parent().height() > 50)
				$(this).css("height", $(this).parent().height());
		});
	});

	if (/firefox/.test(navigator.userAgent.toLowerCase())) {
		if ($(".wrapper-banner.banner2").length > 0) {
			$(".wrapper-banner.banner2").each(function () {
				if ($(this).height() == 0 && ($(this).find(".rdc-vpd-lozad").length == 0 && $(this).find(".rdc-lazy-image").length == 0))
					$(this).css("height", 1);
			});
		}
	}
}

function printInstagram() {
	var el = this;

	el.remoteDataInstagram = function () {
		$(".wrapper-banner.banner28").each(function (k, v) {
			var element = $(this);
			var token = element.attr("hash");
			var Instaimages = element.find(".Instaimage");

			if (element.attr("hash") != "") {
				var num_photos = parseInt(element.attr("num_photos"));

				for (var i = num_photos + 1; i <= 6; i++) {
					element.find(".instaimage_" + i).remove();
				}

				var ajaxURL = 'https://api.instagram.com/v1/users/self/media/recent';
				var ajaxType = 1;

				if (typeof sLocation == "undefined") sLocation = window.location.origin;

				if (token.length > 100) {
					ajaxType = 2;
					ajaxURL = sLocation + '/plugins/visualpager_blocks/includes/instagram_curl.php';

				}

				$.ajax({
					url: ajaxURL,
					//dataType: 'jsonp',
					type: 'GET',
					data: { access_token: token, count: num_photos },
					success: function (data) {

						if (ajaxType == 1) {
							var data = data.data;
							var total = data.length;
						}

						if (!data) return;

						$(".instagramImages", element).css("background", "none");

						var count = 0;
						$.each(data, function (k, v) {
							if (count >= num_photos) return false;

							var data = {
								"id": v.id,
								"link": v.link,
								"media_url": (ajaxType == 1) ? v.images.standard_resolution.url : v.media_url,
								"media_type": (v.media_type == undefined) ? "IMAGE" : v.media_type
							}

							if (data["media_type"] != "IMAGE") {
								if (ajaxType == 1) return;

								if (data["media_type"] == "VIDEO" && v.thumbnail_url != "")
									data["media_url"] = v.thumbnail_url;

								else if (data["media_type"] == "CAROUSEL_ALBUM" && v.media_url != "")
									data["media_url"] = v.media_url;

								else
									return;

							}

							var html = el.getHTMLInstagram(data);

							$(Instaimages[count]).append(html);

							if (count == total - 1) {
								element.attr("hash", "");
							}

							count++;

						});

						if (lazy_enable == 1) {
							el.setInstagramisOnScreen();
						}

					}
				});
			}
		});
	}

	if (lazy_enable == 1) {
		$(window).on("scroll", function () {
			el.setInstagramisOnScreen();
			if (typeof videoBlockControll__productitem == "function") {
				videoBlockControll__productitem();
			}
		});
	}

	el.getHTMLInstagram = function (data) {
		var style = 'style="background-image: url(\'' + data.media_url + '\')"';
		var media_url = '';
		if (lazy_enable == 1) {
			var style = '';
			var media_url = 'media_url="' + data.media_url + '"';
		}
		var HTML = '<a href="' + data.link + '" class="instagramLink" target="_blank">';
		HTML += '	<div class="instagramImageCover" ' + media_url + style + '><img src="' + sysimageLocation + '/1_1.png" class="cover_image" alt="' + data.id + '_cover" /></div>';
		//HTML += '	<img src="" class="primary_image cover" alt="'+data.data[x].id+'" />';
		HTML += '	<div class="icon-instagram"></div>';
		HTML += '</a>';
		return HTML;
	}

	el.setInstagramisOnScreen = function () {
		$(".wrapper-banner .instagramImageCover:not(.newimageloaded)").each(function (k, v) {
			if (typeof $.fn.isOnScreen == "undefined" || (typeof $.fn.isOnScreen == "function" && $(this).isOnScreen() == true)) {
				$(this).addClass("newimageloaded");
				el.setInstagramImage(this);
			}
		});
	}

	el.setInstagramImage = function (element) {
		$(element).css("background-image", "url(" + $(element).attr("media_url") + ")");
	}

	el.remoteDataInstagram();
}

function visualpager_mp4_videos() {
	if ($(".container-video-mp4 .video-js").length == 0) return;

	$(".container-video-mp4 .video-js").each(function () {
		if ($(this).attr("hovercontrols") == 1 && $(this).attr("autoplay") == "autoplay") {
			$(this).attr("controls", "controls");
		}
	});

	$(".container-video-mp4 .video-js").click(function () {
		var linkURL = $(this).data("linkurl");
		if ($(this).prop("autoplay") == true && linkURL != "") {
			location.href = linkURL;
		}
	});

	$(".playpausevideo").click(function () {
		var parent = $(this).parents(".container-video-mp4");
		$videoOBJ = parent.find("video");
		var video = $videoOBJ[0];
		var linkURL = $videoOBJ.data("linkurl");
		if (video.paused) {
			parent.find("video").css("opacity", 1);
			parent.find(".primary_image").remove();
			$(".playpausevideo", parent).addClass("iconPause");
			if (!$(this).hasClass("vd-init")) {
				video.currentTime = 0;
				$(this).addClass("vd-init");
			}
			video.play();

			if ($videoOBJ.attr("hovercontrols") == 1)
				$videoOBJ.attr("controls", "controls");
		}
		else if (!$videoOBJ.prop("controls")) {
			if (linkURL != "") {
				location.href = linkURL;
			} else {
				$(".playpausevideo", parent).removeClass("iconPause");
				video.pause();
			}
		}

	}).on("mouseleave", function () {
		var parent = $(this).parents(".container-video-mp4");
		$videoOBJ = parent.find("video");
		var video = $videoOBJ[0];
		if ($videoOBJ.attr("hovercontrols") == 1 && video.paused == false) {
			$(this).hide();
		}

	});

	if (typeof $.fn.isOnScreen == "function") {
		var controlMP4Video = this;

		$(window).on("scroll", function () {
			controlMP4Video.checkVideoIsOnScreen();
		});

		controlMP4Video.checkVideoIsOnScreen = function () {
			$(".container-video-mp4 .video-js").each(function () {
				if ($(this).isOnScreen()) {
					if ($(this).data("systemScreenControll") == "scroll-pause") {
						this.play();
					}
				} else {
					if (!this.paused) {
						$(this).data("systemScreenControll", "scroll-pause")
						this.pause();
					}
				}
			});
		}

	}
}

function columnAutoHeightMobile() {
	$(".columnAutoHeightMobile").each(function () {

		if ($(".structuredText", this).length > 0)
			var $element = $(".structuredText", this);
		else
			var $element = $(".htmlTable", this);

		if ($(".dis_table", $element).outerHeight(true) > ($(".cover_image", this).height() + 20)) {
			$(this).addClass("textLargerMobile");
		}
	});
}

function bloco38MultiImages() {
	bloco38MultiImagesAjust();
	$(window).resize(bloco38MultiImagesAjust);
}

function bloco38MultiImagesAjust() {
	var _width = $($(".bloco38-image-4")[0]).width();
	$(".bloco38-multiimages-4").width(_width);
}

function propositionsSlider() {
	$(".propositions-slider").each(function () {
		$(".col-tablet-portrait-height-0", this).removeClass("col-tablet-portrait-height-0");
		$(".col-tablet-portrait-overflow-hidden", this).removeClass("col-tablet-portrait-overflow-hidden");
		$(".col-tablet-portrait-width-6", this).removeClass("col-tablet-portrait-width-6");
		$(".col-tablet-portrait-display-none", this).remove();

		$(".col-tablet-landscape-height-0", this).removeClass("col-tablet-landscape-height-0");
		$(".col-tablet-landscape-overflow-hidden", this).removeClass("col-tablet-landscape-overflow-hidden");
		$(".col-tablet-landscape-width-4", this).removeClass("col-tablet-landscape-width-4");
		$(".col-tablet-landscape-display-none", this).remove();

		$(this).addClass("loaded").slick({
			autoplay: isMobileDevice() ? true : false,
			infinite: true,
			variableWidth: false,
			adaptiveHeight: true,
			pauseOnHover: true,
			autoplaySpeed: 4000,
			speed: 400,
			draggable: true,
			arrows: false,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
}

function testemunhosSlider() {
	$(".testemunhos-slider").each(function () {
		$(".col-tablet-portrait-height-0", this).removeClass("col-tablet-portrait-height-0");
		$(".col-tablet-portrait-overflow-hidden", this).removeClass("col-tablet-portrait-overflow-hidden");
		$(".col-tablet-portrait-width-6", this).removeClass("col-tablet-portrait-width-6");
		$(".col-tablet-portrait-display-none", this).remove();

		$(".col-tablet-landscape-height-0", this).removeClass("col-tablet-landscape-height-0");
		$(".col-tablet-landscape-overflow-hidden", this).removeClass("col-tablet-landscape-overflow-hidden");
		$(".col-tablet-landscape-width-4", this).removeClass("col-tablet-landscape-width-4");
		$(".col-tablet-landscape-display-none", this).remove();

		$(this).addClass("loaded").slick({
			autoplay: false,
			infinite: true,
			variableWidth: false,
			adaptiveHeight: true,
			pauseOnHover: true,
			autoplaySpeed: 0,
			speed: 400,
			draggable: true,
			arrows: false,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
}

function banner58_59_60_product() {
	var thisBanner = this;

	thisBanner.setBanner585960isOnScreen = function () {
		$(".wrapper-banner-maintable .wrapper-banner-product:not(.newimageloaded)").each(function () {
			if (typeof $.fn.isOnScreen == "undefined" || (typeof $.fn.isOnScreen == "function" && $(this).isOnScreen() == true)) {
				$(this).closest(".dis_cell").find(".rdc-lazy-placeholder-product-item").remove();
				if ($("figure", this).length == 0) {
					$(this).addClass("newimageloaded");
					return true;
				}
				thisBanner.setBanner585960Image(this);
			}
		});
	}

	thisBanner.setBanner585960Image = function (element) {
		var imageSRC = $(element).attr("img_src");
		var imageHSRC = $(element).attr("img_hover_src");
		var imageALT = $(element).attr("img_alt");

		var HTML = '<img src="' + imageSRC + '" alt="' + imageALT + '" class="rdc-visulpager-product-image"/>';
		if (imageHSRC != "" && isMobileDevice() == false)
			HTML += '<img src="' + imageHSRC + '" alt="' + imageALT + '" class="rdc-visulpager-product-houver-image"/>';

		$("figure", element).html(HTML).removeClass("loader rdc-lazy-placeholder");
		$(element).addClass("newimageloaded");
	}

	if (lazy_enable == 1) {
		thisBanner.setBanner585960isOnScreen();
		$(window).on("scroll", function () {
			thisBanner.setBanner585960isOnScreen();
		});
	} else {
		$(".wrapper-banner-maintable .wrapper-banner-product:not(.newimageloaded)").each(function () {
			if ($("figure", this).length == 0) {
				$(this).addClass("newimageloaded");
				return true;
			}
			thisBanner.setBanner585960Image(this);
		});
	}
}

function blocksProductsSliderMobile(element) {
	element.addClass("slick-start-initialized");

	var totalChildren = element.children().length;
	var slidesToShow = 2;
	var slidesToScroll = 2;
	if (element.hasClass("list_mobile_grid_100")) {
		slidesToShow = 1;
		slidesToScroll = 1;
	}

	element.addClass("blocks-products-total-" + totalChildren);

	const paddingLeft = parseFloat(element.find('.productColumn').eq(0).css('paddingLeft'));
	if (paddingLeft % 2 != 0 && window.innerWidth % 2 == 0) {
		element.addClass('paddingCalculated').css({ 'marginLeft': -parseInt(paddingLeft), 'marginRight': -parseInt(paddingLeft) });
		element.find('.productColumn').css({ 'paddingLeft': parseInt(paddingLeft), 'paddingRight': parseInt(paddingLeft) });
	}

	loadImagesBySection(element);

	if (totalChildren > 1) {
		if (element.is(":visible") == true && element.hasClass("loaded") == false) {
			element.addClass("loaded").slick({
				dots: true,
				variableWidth: false,
				adaptiveHeight: true,
				speed: 400,
				arrows: false,
				slidesToShow: slidesToShow,
				slidesToScroll: slidesToScroll,
				initialSlide: 0
			});
		}
	}

	ellipsisProductItemBlocks();
	if (typeof productSlide == "function") { productSlide(); }
}

function ellipsisProductItemBlocks() {
	if ($(".prod-info-cb .prod-info-cb-name:not(.ellipsisActive)").length > 0 && (isMobileDevice() || ($("body").hasClass("rdc-viewport-devicewidth") && $("body").hasClass("tablet")))) {
		if (typeof $.fn.ellipsis == "undefined") {
			var productItemScript = document.createElement('script');
			productItemScript.src = "/plugins/system/js/jquery.ellipsis/jquery.ellipsis.min.js";
			$("head").append(productItemScript);
			if (typeof $.fn.ellipsis == "undefined") return false;
		}

		$(".prod-info-cb .prod-info-cb-name:not(.ellipsisActive)").each(function () {
			if ($(this).text() != "")
				$(this).ellipsis({ row: 2, onlyFullWords: true, type: 'lines', count: 2 }).addClass("ellipsisActive");
		});
	}

	if (typeof ellipsisProductItem == "function") ellipsisProductItem();
}

function createMultiImagesSlider(element) {
	element.addClass("slick-start-initialized");

	var options = {
		autoplay: true,
		infinite: true,
		variableWidth: false,
		adaptiveHeight: false,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		speed: isMobileDevice() ? 400 : 1300,
		draggable: isMobileDevice() ? true : false,
		dots: true,
		arrows: false,
		height: 200,
		mobileFirst: true
	}

	var template = parseInt(element.attr("template"));
	var autoSlide = parseInt(element.attr("autoSlide"));
	var indexSlide = parseInt(element.attr("indexSlide"));
	var heightSlide = (element.parents(".container-slider-blocos").length > 0 && element.parents(".container-slider-blocos").hasClass("container-slider-auto-height") == false) ? element.parents(".container-slider-blocos").height() : 0;

	if (heightSlide > 0) $(".uni_slider", element).height(heightSlide);

	options.autoplay = (autoSlide == 0) ? false : true;

	loadImagesBySection(element);

	window['slider_' + indexSlide + template] = element.addClass("loaded").slick(options);

	window['slider_' + indexSlide + template].on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var _parent = $(slick.$slider).parents("._frame");

		if ($(".pagers_multiImagens", _parent).length == 0) {
			return false;
		}

		var lis = $(".pagers_multiImagens", _parent).children();
		$(".pagers_multiImagens li.active", _parent).removeClass("active");
		$(lis[nextSlide]).addClass("active");
	});

	IE_ajusts();
}

function bannerBrandsSlider(element) {
	element.addClass("slick-start-initialized");

	var minSlides = 6;
	if (isMobileDevice())
		minSlides = 1;

	loadImagesBySection(element);

	if (element.hasClass(".slick-initialized") == false && $(".uni", element).length > minSlides) {
		var brandsid = $(element).closest(".brands-banner").attr("brandsid");
		window['brandsslider_' + brandsid] = element.addClass("loaded").slick({
			autoplay: true,
			infinite: true,
			slidesToShow: isMobileDevice() ? 1 : 6,
			slidesToScroll: isMobileDevice() ? 1 : 6,
			variableWidth: false,
			adaptiveHeight: true,
			pauseOnHover: true,
			autoplaySpeed: 7000,
			speed: isMobileDevice() ? 400 : 1300,
			draggable: isMobileDevice() ? true : false,
			arrows: false,
			dots: true
		});
	}
}

function bannerShopByLookSlider(element) {
	element.addClass("slick-start-initialized");

	if (element.hasClass(".slick-initialized") == false && $(".uni", element).length > 1) {
		var shopbylookid = $(element).closest(".shopbylook-banner").attr("shopbylookid");
		window['shopbylookslider_' + shopbylookid] = element.addClass("loaded").slick({
			autoplay: false,
			infinite: true,
			slidesToShow: isMobileDevice() ? 1 : 2,
			slidesToScroll: isMobileDevice() ? 1 : 2,
			variableWidth: false,
			adaptiveHeight: true,
			pauseOnHover: true,
			autoplaySpeed: 7000,
			speed: isMobileDevice() ? 400 : 1300,
			draggable: isMobileDevice() ? true : false,
			arrows: false,
			dots: true
		});
	}
}

var cHotspotCountInts = 0;
var cHotspotTimeout54 = '';
function createHotspots(element) {
	cHotspotCountInts++;

	var _ht = {};
	_ht.element = element;
	_ht.elementlist = _ht.element.find(".hotspot-list");

	_ht.templateHTML = function (element, index) {
		var showBrand = element.closest('.hotspot-list').data("show-product-brand") || 0;

		var dataProduct = {
			id: element.data("product-id"),
			title: element.data("product-title"),
			sku_family: element.data("product-sku_family"),
			desc: element.data("product-desc"),
			image: element.data("product-image"),
			url: element.data("product-url"),
			variantsLength: parseInt(element.data("product-variants-length")),
			hide_sale: parseInt(element.data("hide_sale")),
			brand: {
				enabled: (showBrand == 1) ? element.data("brand-enabled") || false : false,
				image: element.data("brand-image") || '',
				name: element.data("brand-name")
			},
			price: {
				rrp: element.data("product-price-rrp"),
				desde: element.data("product-price-desde"),
				old: element.data("product-price-old"),
				discount: element.data("product-price-discount"),
				discount_id: element.data("product-price-discount-id"),
				current: element.data("product-price-current"),
				prefix: element.data("product-price-prefix"),
				sufix: element.data("product-price-sufix")
			},
			promo: element.data("product-promo"),
			vat: element.data("product-vat")
		}

		var exp = {
			39: $('.hotspot-list[exp-39]').first().attr('exp-39'),
			50: $('.hotspot-list[exp-50]').first().attr('exp-50'),
			323: $('.hotspot-list[exp-323]').first().attr('exp-323'),
			420: $('.hotspot-list[exp-420]').first().attr('exp-420'),
			443: $('.hotspot-list[exp-443]').first().attr('exp-443'),
			471: $('.hotspot-list[exp-471]').first().attr('exp-471')
		}

		if (exp[323] == undefined) exp[323] = 'Ver Detalhes';
		if (exp[39] == undefined) exp[39] = 'Adicionar ao carrinho';

		var hotspot_pos = {
			top: parseInt(element.data("top")),
			left: parseInt(element.data("left"))
		}

		var class_top = class_left = '';

		if (!isMobileDevice()) {
			class_top = (hotspot_pos.top < 35) ? 'hotspot-valign-bottom' : 'hotspot-valign-top';
			class_left = 'hotspot-align-center';
			if (hotspot_pos.left < 20) class_left = 'hotspot-align-left';
			else if (hotspot_pos.left > 78) class_left = 'hotspot-align-right';
		}

		if (dataProduct.brand.enabled) {
			if (dataProduct.brand.image != '')
				var logo = '<img src="' + dataProduct.brand.image + '" width="80" height="49" style="max-height: 49px;object-fit: contain;" />';
			else if (dataProduct.brand.name != '')
				var logo = '<p class="paragraph" style="font-weight: 500;">' + dataProduct.brand.name + '</p>';
			else
				dataProduct.brand.enabled = false;
		}

		var HTML = '';

		if (index == undefined || index == 0)
			HTML += '<div class="hotspot-overlay-arrow hidden-xs ' + class_top + '" style="width: 0px;height: 0px;border-left: 9px solid transparent;border-right: 9px solid transparent;border-top: 11px solid white;position: absolute; left: 50%; transform: translateX(-50%); z-index: 200;"></div>';

		if ($('.rdc-platform-b2b').length == 0) {
			HTML += '<div class="hotspot-overlay ' + class_top + ' ' + class_left + '">';
			HTML += '	<div class="hotspot-canvas-overlay"></div>';
			HTML += '	<div class="hotspot-ov" style="display: flex;flex-direction: row;">';
			HTML += '		<div class="hotspot-ov-prodimage"><figure class="productMask" style="cursor:pointer;" onclick="location.href=\'' + dataProduct.url + '\'"><img src="' + dataProduct.image + '" width="176" height="176"></figure></div>';
			HTML += '		<div class="hotspot-ov-content">';
			HTML += '			<div class="product-item" style="flex-grow: 1;">';
			HTML += '				<div class="desc" style="height: 100%;">';
			HTML += '					<div style="display: flex;flex-direction: column;height: 100%;">';
			HTML += '						<p class="base-product-item-name name" style="cursor:pointer;" onclick="location.href=\'' + dataProduct.url + '\'">' + dataProduct.title + '</p>';
			HTML += '						<p class="base-product-item-description description">' + dataProduct.desc + '</p>';

			HTML += '						<div style="display: flex;align-items: center;">';
			HTML += '							<div class="wrap-price">';
			HTML += '								<div class="base-price price dis-table clearfix">';
			if (dataProduct.price.desde != "")
				HTML += '<p class="base-price-desde desde">' + dataProduct.price.desde + '</p>';

			if (dataProduct.price.old != "0")
				HTML += '<p class="base-price-old old">' + dataProduct.price.prefix + dataProduct.price.old + dataProduct.price.sufix + '</p>';

			if (dataProduct.price.discount != '')
				HTML += '<p class="base-price-discount discount">' + dataProduct.price.discount + '</p>';

			HTML += '									<p class="base-price-current current">' + dataProduct.price.prefix + dataProduct.price.current + dataProduct.price.sufix + '</p>';
			HTML += '								</div>';
			HTML += '							</div>';

			//if(dataProduct.brand.enabled && dataProduct.variantsLength == 1 && dataProduct.hide_sale == 0)
			//	HTML+= '<div style="margin-left: auto;">'+logo+'</div>';

			HTML += '						</div>';

			if (dataProduct.price.old != "0" && dataProduct.promo != '')
				HTML += '<div class="wrap-promo" data-promo="' + dataProduct.price.discount_id + '"><p class="base-rdc-promo-date rdc-promo-date">' + dataProduct.promo + '</p></div>';
			HTML += '					</div>';

			HTML += '				</div>';
			HTML += '			</div>';
			HTML += '			<div class="hotspot-ov-actions">';
			HTML += '				<a href="' + dataProduct.url + '" class="hotspot-btn-detail" data-pid="' + dataProduct.id + '">' + exp[323] + '</a>';

			if (dataProduct.variantsLength == 1 && dataProduct.hide_sale == 0)
				HTML += '<a data-pid="' + dataProduct.id + '" class="hotspot-btn-cart" style="text-decoration: none;">' + exp[39] + '</a>';

			if (dataProduct.brand.enabled)
				HTML += '<div class="rdc-hotspot-brand-image" style="margin-left: auto;">' + logo + '</div>';

			HTML += '			</div>';
			HTML += '		</div>';
			HTML += '	</div>';
			HTML += '</div>';
		} else {
			HTML += '<div class="hotspot-overlay ' + class_top + ' ' + class_left + '">';
			HTML += '	<div class="hotspot-canvas-overlay"></div>';
			HTML += '	<div class="hotspot-ov" style="display: flex;flex-direction: row;">';
			HTML += '		<div class="hotspot-ov-prodimage"><figure class="productMask"><img src="' + dataProduct.image + '" width="176" height="176"></figure></div>';
			HTML += '		<div class="hotspot-ov-content">';
			HTML += '			<div class="product-item" style="flex-grow: 1;">';
			HTML += '				<div class="desc" style="height: 100%;">';
			HTML += '					<div style="display: flex;flex-direction: column;height: 100%;">';
			HTML += '						<p class="product-item-title">' + dataProduct.title + '</p>';
			HTML += '						<p class="product-item-label" style="padding-bottom: 10px;">' + exp[50] + ': ' + dataProduct.sku_family + '</p>';
			HTML += '						<p class="product-item-description" style="padding-bottom: 10px;">' + dataProduct.desc + '</p>';
			HTML += '						<div class="rdc-hotspot-product-price rdc-hidden-prices" style="display: flex;grid-gap: 0 11px;align-items: flex-start;flex-wrap: wrap;">';
			if (dataProduct.price.rrp != "0") {
				HTML += '<div class="rdc-hotspot-product-price-column">';
				HTML += '	<p class="product-item-label small price-title" style="padding-bottom: 4px;">' + exp[443] + '</p>';
				HTML += '	<p class="product-item-price small price-value">' + dataProduct.price.prefix + dataProduct.price.rrp + dataProduct.price.sufix + '</p>';
				HTML += '</div>';
			}
			HTML += '<div class="rdc-hotspot-product-price-column rdc-hidden-rrpprices">';
			HTML += '	<div class="rdc-product-final-price rdc-hidden-prices">';
			HTML += '		<p class="product-item-label small price-title" style="padding-bottom: 4px;">';
			if (dataProduct.price.desde != "")
				HTML += dataProduct.price.desde;
			else {
				if (dataProduct.price.old != "0")
					HTML += exp[471];
				else
					HTML += exp[420];
			}
			HTML += '		</p>';
			HTML += '		<p class="small price-value product-item-price">';
			HTML += '			<span class="product-item-price-bold" style="line-height: 0;">' + dataProduct.price.prefix + dataProduct.price.current + dataProduct.price.sufix + '</span>';
			HTML += '		</p>';
			HTML += '	</div>';
			HTML += '</div>';
			HTML += '						</div>';
			if (dataProduct.vat != '') {
				HTML += '<div class="rdc-header-search-product-vat-notice rdc-hidden-prices rdc-hidden-rrpprices" style="padding-top: 2px;">';
				HTML += '	<p class="product-item-label small"><span>' + dataProduct.vat + '</span></p>';
				HTML += '</div>';
			}
			HTML += '					</div>';
			HTML += '				</div>';
			HTML += '			</div>';
			HTML += '			<div class="hotspot-ov-actions">';
			HTML += '				<span class="hotspot-btn-detail link rdc-link-icon" data-pid="' + dataProduct.id + '">' + exp[323] + '<div class="rdc-icon-svg-mask rdc-icon-arrowright"></div></span>';
			if (dataProduct.brand.enabled)
				HTML += '<div class="rdc-hotspot-brand-image" style="margin-left: auto;">' + logo + '</div>';
			HTML += '			</div>';
			HTML += '		</div>';
			HTML += '	</div>';
			HTML += '</div>';
		}

		return HTML;
	}

	_ht.hideHotspots = function () {
		_ht.elementlist.removeClass("hotspot_active");
		$(".hotspot-item.active").attr("title", $(this).data("title")).removeClass("active");
	}

	_ht.elementlist.addClass("hotspot-list-display");

	$(".container-blocks-section").on("mouseenter", ".hotspot-item", function (ev) {
		if (!$(ev.target).hasClass("hotspot-overlay") && $(ev.target).closest(".hotspot-overlay").length == 0) {
			ev.stopPropagation();
			_ht.hideHotspots();

			if ($(this).find(".hotspot-overlay").length == 0) {
				$(this).append(_ht.templateHTML($(this)))
			}

			$(this).data("title", $(this).attr("title"));
			$(this).addClass("active");
			_ht.elementlist.addClass("hotspot_active");
		}
	})
		.on("mouseleave", ".hotspot-item", function (ev) {
			_ht.hideHotspots();
		})
		.on("click", ".hotspot-list", function (ev) {
			if (!$(ev.target).hasClass("hotspot-overlay") && $(ev.target).closest(".hotspot-overlay").length == 0) {
				_ht.hideHotspots();
			}
		});

	if (cHotspotCountInts == 1) {
		$("body").on("click", ".hotspot-btn-cart", function (ev) {
			if ($(this).closest(".hotspot-item").length > 0) _ht.hideHotspots();

			addCartVPDProduct(this);

			if (isMobileDevice()) {
				if (cHotspotTimeout54 != '') clearTimeout(cHotspotTimeout54);
				$('#show_hotspots .success').slideDown(300);
				cHotspotTimeout54 = setTimeout(function () {
					$('#show_hotspots .success:visible').slideUp(300);
					cHotspotTimeout54 = "";
				}, 2000);
			}
		});

		if (typeof window.htmlClosePopup == "undefined") { //global.js
			window.RDC_ICON_SVG_CLOSE = '<div class="rdc-icon-svg rdc-icon-close rdc-icon-circle" style="width: 100%; height: 100%; pointer-events: none;"></div>';
			window.htmlClosePopup = '<div class="mfp-close rdc-mfp-icon-svg a" style="width: 32px !important; height: 32px !important; top: 5px !important; right: 5px !important;">' + RDC_ICON_SVG_CLOSE + '</div>';

			var SVG_CLOSE_CSS = '.rdc-mfp-icon-svg,.rdc-mfp-icon-svg:hover{padding:0!important;min-width:32px;min-height:32px;}.rdc-mfp-icon-svg::before{display:none;}.rdc-icon-close{background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'22\' height=\'22\' viewBox=\'0 0 22 22\'%3E%3Cpolygon points=\'11.961 11 18 17.039 17.039 18 11 11.961 4.961 18 4 17.039 10.039 11 4 4.961 4.961 4 11 10.039 17.039 4 18 4.961\'/%3E%3C/svg%3E"); background-size: 22px; background-color: #F5F5F5;border-radius: 100%;overflow: hidden;text-align: center;padding: 4px;line-height: 0;background-position: center center;background-repeat: no-repeat;}.mfp-close.rdc-mfp-icon-svg{background-image:none;}body.ie .rdc-icon-circle{background-size:100%; width:32px !important; height: 32px !important;}';

			$("body").append('<style type="text/css">' + SVG_CLOSE_CSS + '</style>');
		}

		if (isMobileDevice()) {
			$('.hotspot-fixbutton-viewproducts').magnificPopup({
				removalDelay: 500,
				mainClass: isMobileDevice() ? 'mfp-move-from-bottom' : 'mfp-zoom-in',
				closeMarkup: htmlClosePopup,
				items: { src: '#show_hotspots', type: 'inline' },
				callbacks: {
					beforeOpen: function (ev) {
						var hotspotList = this.st.el.closest(".dis_cell").find(".hotspot-list");
						var HTML = '';
						hotspotList.find(".hotspot-item").each(function (k, v) {
							HTML += _ht.templateHTML($(this), k);
						});
						$("#ht-8764").html(hotspotList.data("hotspots-title"));
						$("#ht-8765").html(hotspotList.data("hotspots-length"));
						$("#rdc-mobile-hotspots").html(HTML);
					}
				}
			});
		}
	}

}

if (typeof wrapperPageOffsetTop == "undefined") window.wrapperPageOffsetTop = 0;
function imageFullScreenHeight() {
	var wrapperPageOffsetTop = ($(".wrapper-page").length > 0) ? $(".wrapper-page").offset().top : $("header").outerHeight(true), rdcVPDtopBarHeight = 0;

	if ($("#inline-notification-bar").is(":visible") || $("body.bannerWelcomeGiftVisible .bannerWelcomeGift").is(":visible")) {
		var rdcVPDtopBarHeight = 0;
		if ($("#inline-notification-bar").is(":visible")) {
			if (typeof loadNotificationBar == "function") rdcVPDtopBarHeight = $("#inline-notification-bar").height();
		}/* else {
			rdcVPDtopBarHeight = $("body.bannerWelcomeGiftVisible .bannerWelcomeGift").outerHeight();
		}*/
		wrapperPageOffsetTop = wrapperPageOffsetTop - rdcVPDtopBarHeight;
	} else {
		$(".container-blocks-section.rdc-container-blocks-index-0 .rdc-block-calculated").css("margin-top", 0);
	}

	if ($("header").css("position") != "relative") {
		$(".blocks-section-full-height.rdc-block-calculated .rdc-block-fixed-height .cover_image, .blocks-section-full-height.rdc-block-calculated .rdc-block-str-fixed-height").height(($(window).height() - wrapperPageOffsetTop));
		$(".blocks-section-fullscreen.rdc-block-calculated .rdc-block-fixed-fullscreen .cover_image, .blocks-section-fullscreen.rdc-block-calculated .rdc-block-str-fullscreen, .blocks-section-fullscreen.rdc-block-calculated .rdc-block-fullheight-content").height(($(window).height() - wrapperPageOffsetTop));
	} else {
		$(".blocks-section-full-height.rdc-block-calculated .rdc-block-fixed-height .cover_image, .blocks-section-full-height.rdc-block-calculated .rdc-block-str-fixed-height").height($(window).height());
		$(".blocks-section-fullscreen.rdc-block-calculated .rdc-block-fixed-fullscreen .cover_image, .blocks-section-fullscreen.rdc-block-calculated .rdc-block-str-fullscreen, .blocks-section-fullscreen.rdc-block-calculated .rdc-block-fullheight-content").height($(window).height());

		$(".container-blocks-section.rdc-container-blocks-index-0 .blocks-section-full-height.rdc-block-calculated .rdc-block-fixed-height .cover_image, .container-blocks-section.rdc-container-blocks-index-0 .blocks-section-full-height.rdc-block-calculated .rdc-block-str-fixed-height").height(($(window).height() - wrapperPageOffsetTop));
		$(".container-blocks-section.rdc-container-blocks-index-0 .blocks-section-fullscreen.rdc-block-calculated .rdc-block-fixed-fullscreen .cover_image, .container-blocks-section.rdc-container-blocks-index-0 .blocks-section-fullscreen.rdc-block-calculated .rdc-block-str-fullscreen").height(($(window).height() - wrapperPageOffsetTop));
	}
}

if (($("#inline-notification-bar").is(":visible") || $("body.bannerWelcomeGiftVisible .bannerWelcomeGift").is(":visible")) && typeof wrapperPageOffsetTop != "undefined") {
	if (wrapperPageOffsetTop != (($(".wrapper-page").length > 0) ? $(".wrapper-page").offset().top : $("header").outerHeight(true)))
		imageFullScreenHeight();
}

if ($(".container-blocks-section.rdc-container-blocks-index-0 .rdc-block-calculated").length > 0) {
	$(".bannerWelcomeGift .close, .rdc-notification-close").click(function () {
		setTimeout(imageFullScreenHeight, 1);
	});
}

/* Youtube Videos */
var YTiframeReady = false;
if ($(".container-blocks .YoutubePlayer").length > 0) {

	/* Youtube Auto Height */
	if ($(".container-video-auto-height").length > 0) {
		var arrYTVideos = $(".container-video-auto-height");
		var countSizesCalc = 0;

		function getYTSize(element) {
			var video_id = $(element).find(".YoutubePlayer").attr("videoID");
			var url = 'https://www.youtube.com/watch?v=' + video_id;
			$.getJSON('https://noembed.com/embed', { format: 'json', url: url }, function (data) {
				$(element).css('padding-bottom', data.height * 100 / (data.width - 2) + '%');
				countSizesCalc++;
				if (countSizesCalc < arrYTVideos.length)
					getYTSize(arrYTVideos[countSizesCalc]);
			});
		}

		getYTSize(arrYTVideos[countSizesCalc]);
	}
	/* Youtube Auto Height */

	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	setTimeout(function () {
		if (!YTiframeReady) { onYouTubeIframeAPIReady(); }
	}, 500);
}

function onYouTubeIframeAPIReady() {
	if (typeof YT == "undefined") {
		return false;
	}

	YTiframeReady = true;

	onYouTubeBLIframeAPIReady();

	if (typeof productYouTubeVideo == "function")
		productYouTubeVideo();
}

function onYouTubeBLIframeAPIReady() {
	$(".container-blocks .YoutubePlayer").each(function () {
		var template = $(this).attr("template");
		var videoID = $(this).attr("videoID");
		var auto_play = $(this).attr("auto_play");
		var auto_repeat = $(this).attr("auto_repeat");

		window['YT_video_' + template] = new YT.Player($(this)[0], {
			height: '100%',
			width: '100%',
			videoId: videoID,
			playerVars: {
				autoplay: auto_play,
				loop: auto_repeat,
				showinfo: 0,
				controls: 1,
				rel: 0,
				modestbranding: 1
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onStateChange
			}
		});
	});
}

function onPlayerReady(state) {
	var auto_play = 1;
	if (state.target.a)
		auto_play = $(state.target.a).attr("auto_play");

	if (auto_play == 1)
		state.target.mute();
}

function onStateChange(state) {
	if (state.data === YT.PlayerState.ENDED) {
		var auto_repeat = 1;
		if (state.target.a)
			auto_repeat = $(state.target.a).attr("auto_repeat");

		if (auto_repeat == 1)
			state.target.playVideo();
	}
}

var entriesFunction = false;
function visualPagerDesignDataLazy(param) {
	if (entriesFunction && (param != 'ready' && $('.rdc-lazy-image').length > 0)) {
		$('.rdc-lazy-image').each(function () {
			$(this).addClass("rdc-vpd-lozad").removeClass("rdc-lazy-image");
			if ($(this).data("src") == undefined && $(this).data("lazy") != undefined) $(this).attr("data-src", $(this).data("lazy")).removeAttr("data-lazy");
			if ($(this).data("srcset") == undefined && $(this).data("lazy-srcset") != undefined) $(this).attr("data-srcset", $(this).data("lazy-srcset")).removeAttr("data-lazy-srcset");
		});
	}

	if (!entriesFunction) {
		// Required
		$('.rdc-lazy-image').each(function () {
			$(this).addClass("rdc-vpd-lozad").removeClass("rdc-lazy-image");
			if ($(this).data("src") == undefined && $(this).data("lazy") != undefined) $(this).attr("data-src", $(this).data("lazy")).removeAttr("data-lazy");
			if ($(this).data("srcset") == undefined && $(this).data("lazy-srcset") != undefined) $(this).attr("data-srcset", $(this).data("lazy-srcset")).removeAttr("data-lazy-srcset");
		});

		$('.rdc-vpd-lozad').each(function () {
			var parentFigure = $(this).closest("figure");
			if (parentFigure.length > 0) {
				parentFigure.addClass('rdc-lazy-placeholder');
				if (parentFigure.hasClass("loader") == false && $(this).attr('data-size') != undefined) {
					var size = $(this).attr('data-size').split('/');
					if (size[0] != undefined && size[1] != undefined) {
						$(this).removeAttr("data-size");
						parentFigure.css('padding-bottom', size[1] * 100 / size[0] + '%').addClass('loader');
					}
				}
			}
		});
	}

	if (lazy_version > 1) {

		const observer = lozad('.container-blocks .rdc-vpd-lozad', {
			loaded: function (el) {
				el.classList.add('rdc-lazy-loaded');

				var elementLoaded = $(el);
				var parentLoaded = elementLoaded.closest("figure");
				parentLoaded.removeClass("rdc-lazy-placeholder");

				visualPagerDesignLazyLoaded(elementLoaded, parentLoaded);

				setTimeout(function () {
					if (typeof stickInParent != "undefined" && typeof stickInParent.update != "undefined") {
						stickInParent.update();
					} else if (typeof fixedFilters != "undefined") {
						if (typeof $.fn.hcSticky == "function") { fixedFilters.hcSticky("refresh"); } else if (typeof $.fn.stick_in_parent == "function") { fixedFilters.trigger("sticky_kit:recalc"); }
					}
				}, 100);

			}
		});
		observer.observe();

	} else {

		if (!entriesFunction) {
			$("video.rdc-vpd-lozad").each(function () {
				$("source", this).attr("src", $("source", this).data("src")).removeAttr("data-src");
				this.load();
			});
		}

		$('img.rdc-vpd-lozad[data-src]').each(function () {
			if (typeof $.fn.isOnScreen == "undefined" || (typeof $.fn.isOnScreen == "function" && $(this).isOnScreen() == true)) {

				var elementLoaded = $(this);
				if (elementLoaded.data("srcset") != undefined) { elementLoaded.attr("srcset", $(this).data("srcset")).removeAttr("data-srcset"); }
				elementLoaded.attr("src", elementLoaded.data("src")).removeAttr("data-src");
				elementLoaded.removeClass("rdc-vpd-lozad");
				var parentLoaded = elementLoaded.closest("figure");
				parentLoaded.removeClass("rdc-lazy-placeholder");

				elementLoaded.on("load", function () {
					setTimeout(function (img) {
						visualPagerDesignLazyLoaded(elementLoaded, parentLoaded);
					}, 200, elementLoaded, parentLoaded);
				});
			}
		});

	}

	entriesFunction = true;
}

function visualPagerDesignLazyLoaded(elementLoaded, parentLoaded) {
	if (elementLoaded.closest(".block23").length == 0) {
		parentLoaded.removeClass("loader").css("padding-bottom", 0);
	}

	if (elementLoaded.closest(".block58").length > 0 || elementLoaded.closest(".block59").length > 0 || elementLoaded.closest(".block60").length > 0) {
		elementLoaded.closest(".container-blocks-section").find("div.rdc-lazy-placeholder").remove();
	}

	if (elementLoaded.closest(".blocks_slider_mobile").length > 0 && elementLoaded.closest(".section-products").length > 0 && elementLoaded.closest(".section-products").is(":visible") && elementLoaded.closest(".section-products").hasClass("slick-start-initialized") == false) {
		blocksProductsSliderMobile(elementLoaded.closest(".section-products"));
	}

	else if (elementLoaded.closest(".sliderBlocos").length > 0 && elementLoaded.closest(".sliderBlocos").is(":visible") && elementLoaded.closest(".sliderBlocos").hasClass("slick-start-initialized") == false) {
		createMultiImagesSlider(elementLoaded.closest(".sliderBlocos"));
	}

	else if (elementLoaded.closest(".brands-banner-slider").length > 0 && elementLoaded.closest(".brands-banner-slider").is(":visible") && elementLoaded.closest(".brands-banner-slider").hasClass("slick-start-initialized") == false) {
		bannerBrandsSlider(elementLoaded.closest(".brands-banner-slider"));
	}

	else if (elementLoaded.closest(".shopbylook-banner-slider").length > 0 && elementLoaded.closest(".shopbylook-banner-slider").is(":visible") && elementLoaded.closest(".shopbylook-banner-slider").hasClass("slick-start-initialized") == false) {
		bannerShopByLookSlider(elementLoaded.closest(".shopbylook-banner-slider"));
	}

	else if (elementLoaded.closest(".banner63").length > 0) {
		createHotspots(elementLoaded.closest(".banner63"));
	}
}

function loadImagesBySection(element) {
	element.find('img.rdc-vpd-lozad[data-src]').each(function () {
		if ($(this).data("loaded") == true) { $(this).removeAttr("data-src"); return; }
		$(this).attr("src", $(this).data("src")).removeAttr("data-src");
		if ($(this).data("srcset") != undefined) { $(this).attr("srcset", $(this).data("srcset")).removeAttr("data-srcset"); }
	});
	element.find(".rdc-vpd-lozad").removeClass("rdc-vpd-lozad");
	element.find(".rdc-lazy-placeholder").removeClass("rdc-lazy-placeholder");
	element.find(".rdc-vpd-lozad").removeClass("rdc-vpd-lozad");
	element.find("figure.loader").css("padding-bottom", 0).removeClass("loader");
}

$(window).on("load", function () {
	IE_ajusts();
});

$(window).resize(function () {
	imageFullScreenHeight();
	if ($(".container-slider-blocos").length > 0) {
		$(".container-slider-blocos .sliderBlocos").each(function (k, v) {
			var heightSlide = ($(this).parents(".container-slider-blocos").length > 0 && $(this).parents(".container-slider-blocos").hasClass("container-slider-auto-height") == false) ? $(this).parents(".container-slider-blocos").height() : 0;
			if (heightSlide > 0) $(".uni_slider", this).height(heightSlide);
		});
	}
	IE_ajusts();
});

function positioningStructuredText() {
	$(".structuredTextTable:not(.bottomImage)").each(function () {
		if ($(this).closest(".wrapper-banner.banner1").length > 0) return;

		var strElement = $(this).find(".structuredText");
		var talign = strElement.attr("talign");
		var tvalign = strElement.attr("tvalign");
		var twidth = strElement.attr("twidth");
		var tdraggcenter = strElement.attr("tdraggcenter");
		var ldraggcenter = strElement.attr("ldraggcenter");
		var tdraggcorner = strElement.attr("tdraggcorner");
		var ldraggcorner = strElement.attr("ldraggcorner");

		if ((talign == undefined || tvalign == undefined) || (tdraggcenter == undefined || ldraggcenter == undefined) || (tdraggcenter == "" || ldraggcenter == "")) {
			strElement.css("opacity", 1);
			return;
		}

		if (!$(".wrapper-blocks").hasClass("wrapper-strtext-drgg-active"))
			$(".wrapper-blocks").addClass("wrapper-strtext-drgg-active");

		$(this).addClass("draggable-positioning");

		/* Problem where exist padding left and right, text line break */
		$(".contentTitles_title, .contentTitles_subtitle, .contentTitles_description, .contentTitles_description2", strElement.find(".structuredText_content")).each(function () {
			$(this).css("display", "inline-block").css("min-width", $(this).outerWidth());
		});
		$(".contentTitles_button").each(function () {
			$(this).parent().css('min-width', $(this).outerWidth(true));
		});

		tdraggcenter = Number(tdraggcenter);
		ldraggcenter = Number(ldraggcenter);

		var strElementCSS = {
			top: tdraggcenter + "%",
			left: ldraggcenter + "%",
			bottom: "auto",
			right: "auto"
		}

		if (strElement.hasClass("absolute") == false) {
			strElementCSS = {
				top: tdraggcorner + "%",
				left: ldraggcorner + "%",
				transform: "translate(0)"
			}
		}

		if (twidth != "" && twidth != 0) {
			strElementCSS.width = twidth + "%";
			strElement.addClass("resizable_active");
		}

		if ($(window).width() < 1440 && ('ontouchstart' in window)) {
			var translateY = "-50%";
			var translateX = translateY;
			var dis_cell = strElement;

			strElement.width("auto").height("auto");
			strElement.find(".dis_table").width("auto").height("auto");

			if (twidth == "" || twidth == 0) { // Default / auto size width
				var textAreaWidth = 0;

				strElement.find(".structuredText_content").children().each(function () {
					var c = $(this).children().first();
					c.css({ "display": "inline", "width": "fit-content" });
					var thisWidth = Math.round(c.outerWidth());
					c.css({ "display": "inline-block", "width": "auto" });

					if (thisWidth > textAreaWidth) textAreaWidth = thisWidth;
				});

				textAreaWidth++;

				strElement.find(".structuredText_content").width(textAreaWidth);

				var dis_cell = strElement.find(".dis_cell");
			}

			strElement.css(strElementCSS); //Required

			var padding_cell = (dis_cell.outerHeight() - dis_cell.height()) / 2;

			//if($(this).closest('.inner-container-blocks-section').hasClass('rdc-block-active-desktop-1')) {
			if (parseInt((((dis_cell.outerHeight() / 2) + padding_cell) * 100) / $(this).height()) > (parseInt(tdraggcenter) - 30)) {
				strElementCSS.top = tdraggcorner + "%"; //0
				strElementCSS.bottom = "auto";
				translateY = "0";
			} else if (((((dis_cell.outerHeight() / 2) + padding_cell) * 100) / $(this).height()) + tdraggcenter >= 99) {
				strElementCSS.top = "auto";
				strElementCSS.bottom = 0;
				translateY = "0";
			}
			//}

			if ((((dis_cell.outerWidth() / 2) + padding_cell) * 100) / $(this).width() > ldraggcenter
				|| ($(this).outerWidth() * ldraggcorner) / 100 < (dis_cell.outerWidth() / 2)) {
				strElementCSS.left = ldraggcorner + "%"; //0
				strElementCSS.right = "auto";
				translateX = "0";
			} else if (((((dis_cell.outerWidth() / 2) + padding_cell) * 100) / $(this).width()) + ldraggcenter >= 99) {
				strElementCSS.left = "auto";
				strElementCSS.right = 0;
				translateX = "0";
			}

			if (tdraggcorner < dis_cell.outerHeight()) {
				translateY = "0";
			}

			strElementCSS.transform = "translate(" + translateX + ", " + translateY + ")";
		}

		strElement.css(strElementCSS);
	});
}

if ($(".structuredTextTable:not(.bottomImage)").length > 0 && $(".structuredTextTable:not(.bottomImage)").first().find(".structuredText").attr("talign") != undefined) {
	positioningStructuredText();
	$(document).ready(function () {
		positioningStructuredText();
		setTimeout(function () {
			positioningStructuredText();
			$(".draggable-positioning .structuredText").css("opacity", 1);
		});
	});
}

function addCartVPDProduct(prod) {
	if ($(prod).hasClass('disabled')) return;

	var pid = $(prod).data('pid');

	if (pid == 0 || pid == undefined) return;

	var qtd = 1;

	$(prod).addClass("loader");

	$.get('/api/api.php/addToBasket/1/0/' + pid + '/1/0').done(function (data) {
		if (typeof data != "object")
			var data = $.parseJSON(data);

		if (typeof trakingsAddCart == "function")
			trakingsAddCart(data, pid, qtd);

		if (angular.element('#controller-cart').scope() != undefined) {
			angular.element('#controller-cart').scope().addMiniBasket(data.response.cart, "AJAX");
		} else {
			addMiniBasketPreviousTemplates(data);
		}

		if (typeof addCartCompleted == "function")
			addCartCompleted(data.response.cart, "<AJAX></AJAX>");

		if (typeof addCartCompletedDetail == "function")
			addCartCompletedDetail(data.response.cart, "<AJAX></AJAX>");

		if (data.response.trackers)
			$(".tagsWrapper").append(atob(data.response.trackers));

		$(prod).removeClass("loader");
	});
}

function buildCreditSimulator(value, simulator, block) {
	$.ajax({
		type: 'GET',
		url: '/api/api.php/getCreditSimulationDetails/' + simulator + '/0/' + value,
		success: function (data) {
			if (typeof data != 'object')
				var data = $.parseJSON(data);

			var creditOption = 0;
			$('.rdc-credit-simulator-options', block).prop('disabled', true).closest('.select').addClass('disabled').find('option:gt(0)').remove();

			if (value.length > 0) {
				if (data.response != undefined && data.response.opcoes != undefined && data.response.opcoes.length > 0) {
					creditOption = data.response.opcoes[0].id;
					$('.rdc-credit-simulator-options', block).prop('disabled', true).closest('.select').addClass('disabled').find('option:gt(0)').remove();
					if (data.response.opcoes.length > 0) {
						var options = '';
						$.each(data.response.opcoes, function (key, value) {
							options += '<option value="' + value.id + '">' + value.nome + '</option>';
						});
						$('.rdc-credit-simulator-options', block).append(options).prop('disabled', false).closest('.select').removeClass('disabled');
					}
					if ($('.rdc-credit-simulator .form-message:visible', block).length > 0)
						$('.rdc-credit-simulator .form-message', block).slideUp(300);
				} else {
					if ($('.rdc-credit-simulator .form-message:visible', block).length == 0)
						$('.rdc-credit-simulator .form-message', block).slideDown(300);
				}
			} else {
				if ($('.rdc-credit-simulator .form-message:visible', block).length > 0)
					$('.rdc-credit-simulator .form-message', block).slideUp(300);
			}

			$('.rdc-credit-simulator-options', block).val(creditOption).trigger('change');
		}
	});
}

function updateCreditSimulator(element) {

	var creditBlock = $(element).closest('.banner64'),
		creditOption = $(element).val(),
		creditRequested = $('.rdc-credit-simulator-value', creditBlock).val(),
		creditCurrency = {
			number_dec: $(element).data('currency-number_dec'),
			separator_dec: $(element).data('currency-separator_dec'),
			separator_mil: $(element).data('currency-separator_mil')
		};

	if (creditOption == 0 || $('.rdc-credit-simulator-value', creditBlock).val() == '' || $('.rdc-credit-simulator-value', creditBlock).val() == 0) {
		$('.rdc-credit-simulator-months, .rdc-credit-simulator-monthly, .rdc-credit-simulator-tan, .rdc-credit-simulator-taeg, .rdc-credit-simulator-cf, .rdc-credit-simulator-total-value', creditBlock).val('').prop('disabled', true);
		return false;
	}

	$.ajax({
		type: 'GET',
		url: '/api/api.php/getCreditInfoDetails/' + creditOption + '/0/' + creditRequested,
		success: function (data) {
			if (typeof data != 'object')
				var data = $.parseJSON(data);
			if (data.response.monthly_payment != undefined && data.response.monthly_payment != '' && data.response.credit_total != undefined && data.response.credit_total != '') {

				if ($('.rdc-credit-simulator .form-message:visible', creditBlock).length > 0)
					$('.rdc-credit-simulator .form-message', creditBlock).slideUp(300);

				if (typeof number_format == 'function') {
					data.response.monthly_payment = number_format(data.response.monthly_payment, creditCurrency.number_dec, creditCurrency.separator_dec, creditCurrency.separator_mil);
					data.response.TAN = number_format(data.response.TAN, creditCurrency.number_dec, creditCurrency.separator_dec, creditCurrency.separator_mil);
					data.response.TAEG = number_format(data.response.TAEG, creditCurrency.number_dec, creditCurrency.separator_dec, creditCurrency.separator_mil);
					data.response.credit_total = number_format(data.response.credit_total, creditCurrency.number_dec, creditCurrency.separator_dec, creditCurrency.separator_mil);
					data.response.cf_value = number_format(data.response.cf_value, creditCurrency.number_dec, creditCurrency.separator_dec, creditCurrency.separator_mil);
				}

				if (data.response.duration != undefined) {
					$('.rdc-credit-simulator-months', creditBlock).val(data.response.duration);
				}

				$('.rdc-credit-simulator-monthly', creditBlock).val(data.response.monthly_payment);
				$('.rdc-credit-simulator-tan', creditBlock).val(data.response.TAN);
				$('.rdc-credit-simulator-taeg', creditBlock).val(data.response.TAEG);

				if (data.response.last_monthly_payment != undefined) {
					$('.rdc-credit-simulator-cf', creditBlock).val(data.response.last_monthly_payment);
				} else {
					$('.rdc-credit-simulator-cf', creditBlock).val(data.response.cf_value);
				}

				$('.rdc-credit-simulator-total-value', creditBlock).val(data.response.credit_total);
			} else {
				$('.rdc-credit-simulator-months, .rdc-credit-simulator-monthly, .rdc-credit-simulator-tan, .rdc-credit-simulator-taeg, .rdc-credit-simulator-cf, .rdc-credit-simulator-total-value', creditBlock).val('').prop('disabled', true);
				if ($('.rdc-credit-simulator .form-message:hidden', creditBlock).length > 0)
					$('.rdc-credit-simulator .form-message', creditBlock).slideDown(300);
			}
		}
	});
}

var bannerCampaignsMA;
(bannerCampaignsMA = function () {
	if ($(".container-blocks .banner65").length == 0) return;
	if (typeof allowedUserAgent == "function" && !allowedUserAgent()) return;

	$elementAppend = $(".container-blocks .banner65 .rdc-vpd-recommendation-campaign");

	$.ajax({
		type: "POST",
		url: "/api/api.php/getRecommendationCampaignBlock",
		data: { num_prods: $(".container-blocks .banner65").first().find(".rdc-vpd-recommendation-campaign").attr("data-productsNumber") },
		success: function (data) {
			if (typeof data != "object") var data = $.parseJSON(data);

			if (data.response.active == 0) {
				$elementAppend.closest(".container-blocks-section").remove();
				return;
			}

			if (typeof $.base64 == "undefined") {
				if (typeof RDC_LOAD_FILE == "function") {
					RDC_LOAD_FILE(["/plugins/system/js/jquery.base64/jquery.base64.js"]);
				} else {
					var productItemScript = document.createElement('script');
					productItemScript.src = "/plugins/system/js/jquery.base64/jquery.base64.js";
					$("#main").prepend(productItemScript);
				}
			}

			var timeControll = (typeof $.base64 == "undefined") ? 1000 : 0;

			setTimeout(function () {
				if (typeof $.base64 == "undefined") return false;

				var html = $.base64.atob(data.response.prods);

				$elementAppend.html(html);
				$elementAppend.find(".related-products .section-products").children("[ng-repeat]").remove();

				if (typeof dataImageSizes == "function") dataImageSizes();

			}, timeControll);

		}
	});
})();

if (typeof videoListControll != "function") {
	function videoListControll() {
		var arrVideos = $(".rdc-product-item-enhance-type-3 .video-js");
		if (arrVideos.length == 0)
			return false;

		arrVideos.each(function () {
			if ($(this).isOnScreen() && $(this)[0].paused == true) {
				$(this)[0].play();
			} else if ($(this).isOnScreen() == false && $(this)[0].paused == false) {
				$(this)[0].pause();
			}
		});
	}
}

if (typeof showProductItemVideo != "function") {
	function showProductItemVideo() {
		if ((isMobileDevice() || $("body").hasClass("tablet")) && $(".wrapper-products .video-js").length > 0) {
			var el = this;

			el.showVideoTag = function () {
				if (!$(".wrapper-products .video-js")[0].paused) {
					clearInterval(interval);
					clearTimeout(timeout);
					$(".wrapper-products .video-js").each(function () {
						$(this).css("opacity", 1);
						$(this).next().css("opacity", 0);
					});
				}
			}

			var interval = setInterval(function () {
				el.showVideoTag();
			}, 50);

			var timeout = setTimeout(function () {
				clearInterval(interval);
			}, 5000);
		}
	}
}

function banner68() {
	if (typeof allowedUserAgent == 'undefined' || allowedUserAgent() && $('.g-recaptcha').length > 0) {
		RDC_LOAD_FILE(['https://www.google.com/recaptcha/api.js']);
	}

	$('.rdc-blockregister-openpass').click(function () {
		const _f = $(this).closest('form');

		if (_f.hasClass('rdc-blockregister-showpassword')) {
			_f.removeClass('rdc-blockregister-showpassword').addClass('rdc-blockregister-hidepassword')
			setTimeout(function () {
				_f.removeClass('rdc-blockregister-hidepassword');
				_f.find('[type=password]').attr('require', 0).prop('disabled', true);
			}, 500);
			return;
		}

		_f.toggleClass('rdc-blockregister-showpassword');
		_f.find('[type=password]').attr('require', 1).prop('disabled', false);
	});

	$('#policy_page_link').magnificPopup({
		removalDelay: 500,
		mainClass: isMobileDevice() ? 'mfp-move-from-bottom' : 'mfp-zoom-in',
		closeMarkup: window.htmlClosePopup,
		callbacks: {
			beforeOpen: function () {
				if (isMobileDevice()) {
					var timeMfpContentElement = setInterval(function () {
						clearTimeout(timeMfpContentElement);
						$(".mfp-content").css({ "background-color": "#FFFFFF", "overflow": "hidden" });
					}, 1);
				}

				$("#show_policy_page iframe").attr("src", $("#policy_page_link").attr("link")).on("load", function () {
					if (isMobileDevice())
						$(".mfp-wrap").height(deviceHeight);
				});
			}
		}
	});

	var timerNumericInput;
	$(".numericInput").focus(function () {
		var _input = $(this);
		timerNumericInput = setInterval(function () {
			vNumber(_input, _input.attr("maxlength"));
		}, 1);
	}).blur(function () {
		clearInterval(timerNumericInput);
	});

	$('.rdc-banner68__formregister').each(function () {
		var arr = $(this).children().toArray();
		var newArray = arr.sort(function (a, b) {
			var aPrefix = $(a).data('phone_prefix');
			var bPrefix = $(b).data('phone_prefix');
			return ((aPrefix < bPrefix) ? -1 : ((aPrefix > bPrefix) ? 1 : 0));
		});
		$(this).html(newArray);
	});

}

function vNumber(elem, limit) {
	elem.val(elem.val().replace(/\D/g, ''));
	if (elem.val().length > limit)
		elem.val(elem.val().substring(0, 10));
}

function validaPassword(key) {
	// containsNumber
	var re = /\d+/;
	if (!re.test(key)) return false;

	// onlyCapitalLetters
	var re = /[SA-Z]/;
	if (!re.test(key)) return false;

	// onlyLowerLetters
	var re = /[a-z]/;
	if (!re.test(key)) return false;

	// length8
	if (key.length < 8) return false;

	return true;
}

function contentblockFormRegister(form) {
	var form = $(form);
	var section = form.closest('.rdc-contentblock-formregister');
	var retornoPW = true;

	if ($("[type=submit]", form).hasClass("loader")) return false;

	if (validarFormulario(form)) {
		if (form.find('[name=password]').prop('disabled') == false) {
			var _pw = form.find('[name=password]').val();

			if (_pw != form.find('[name=rpassword]').val()) {
				retornoPW = false;
				form.find(".form-message .error11").slideDown(300);
			} else if (retornoPW && !validaPassword(_pw)) {
				retornoPW = false;
				form.find(".form-message .error10").slideDown(300);
			}

			if (!retornoPW) {
				form.find('[name=password]').closest(".form-field").addClass("displayError");
				return false;
			}
		}

		if (typeof grecaptcha != 'undefined' && typeof grecaptcha.getResponse == 'function') {
			if (grecaptcha.getResponse().length == 0) {
				form.find(".form-message .error0").slideDown(300);
				return false;
			}
		}

		$("[type=submit]", form).addClass("loader");

		var str = $.param({ email: form.find('[name=email]').val() });

		if (typeof CHECKOUT_VER == 'undefined') CHECKOUT_VER = 'v1';

		var xhr = new XMLHttpRequest();
		var url = `/checkout/${CHECKOUT_VER}/actions_validar_email.php?${str}`;
		xhr.open("GET", url, false);
		xhr.withCredentials = true;
		xhr.send(null);
		var data = $.parseJSON(xhr.response);

		if (data.erro == 1) {
			form.find('[name=email]').closest(".form-field").addClass("displayError");
			form.find(".form-message .error12").slideDown(300);
			$("[type=submit]", form).removeClass("loader");
			return false;
		}

		$.ajax({
			url: '/api/api.php/sendFormLandingPage',
			type: 'POST',
			data: new FormData(form[0]),
			processData: false,
			contentType: false,
			success: function (msg) {
				var resp = $.parseJSON(msg);

				if (resp.response.success != 1) {
					form.find(".form-message .error-default").slideDown(300);
					$("[type=submit]", form).removeClass("loader");
					return;
				}

				section.addClass('rdc-contentblock-formregister_submited');
				$('.rdc-contentblock-formregister_success', section).removeClass('hidden');

				$("[type=submit]", form).removeClass('loader');

				if (resp.response.url != '') {
					section.find('.rdc-contentblock-formregister_success_loading').fadeIn('fast');
					setTimeout(function () {
						location.href = '/' + resp.response.url;
					}, 2000);
				}
			}
		}).fail(function (xhr, status, error) {
			form.find(".form-message .error-default").slideDown(300);
			$("[type=submit]", form).removeClass("loader");
		});
	}
}

function countryChangeBlocks(field) {
	var form = $(field).closest('form');
	var flag = $('option:selected', field).attr('data-code');
	var lg = $('option:selected', field).attr('data-lg');
	$(field).closest('.select').css('background-image', 'url(' + JSVars.shop.CDN + 'plugins/system/sysimgs/flags/' + flag + '.png');
	if (lg != '') $('#lg', form).val(lg);
}

var onloadCallback = function () {
	console.log("grecaptcha is ready!");
	$('.g-recaptcha').removeClass('hidden');
};

/* == Stores (69) == */
function bl_changeCountry(e) {
	const element = $(e);

	const selectedCountry = element.find('option:selected').text();

	var filteredAddresses = JSVarsStores.addresses.filter(address => {
		return address.country_name === selectedCountry && address.image.trim() !== '';
	});

	const sortAddress = (a, b) => {
		const cityA = a.city.toLowerCase();
		const cityB = b.city.toLowerCase();

		if (cityA < cityB) {
			return -1;
		} else if (cityA > cityB) {
			return 1;
		} else {
			return 0;
		}
	}

	filteredAddresses = filteredAddresses.sort(sortAddress);

	selectCity = element.closest('.banner69-wrapper-select').find('select[name=city]');
	selectCity.empty();

	filteredAddresses.forEach((option, index) => {
		selectCity.append(`<option value="${option.id}" ${index == 0 ? 'selected' : ''}>${option.city}</option>`);
	});

	bl69_update(element.closest('.wrapper-banner'), filteredAddresses[0]);
}

function bl_changeZone(e) {
	const element = $(e);

	const elementValue = element.val();

	var filteredAddresses = JSVarsStores.addresses.filter(address => {
		return address.zoneID === elementValue && address.image.trim() !== '';
	});

	const sortAddress = (a, b) => {
		const cityA = a.city.toLowerCase();
		const cityB = b.city.toLowerCase();

		if (cityA < cityB) {
			return -1;
		} else if (cityA > cityB) {
			return 1;
		} else {
			return 0;
		}
	}

	filteredAddresses = filteredAddresses.sort(sortAddress);

	selectCity = element.closest('.banner69-wrapper-select').find('select[name=city]');
	selectCity.empty();

	filteredAddresses.forEach((option, index) => {
		selectCity.append(`<option value="${option.id}" ${index == 0 ? 'selected' : ''}>${option.city}</option>`);
	});

	bl69_update(element.closest('.wrapper-banner'), filteredAddresses[0]);
}

function bl_changeCity(e) {
	const element = $(e);

	const elementValue = element.val();

	var filteredAddresses = JSVarsStores.addresses.filter(address => {
		return address.id === elementValue// && address.image.trim() !== '';
	});

	bl69_update(element.closest('.wrapper-banner'), filteredAddresses[0]);
}

function bl69_update(bloco, addresses) {
	const content = `
		${addresses.address1 != '' ? addresses.address1 : ''}
		<br>
		${addresses.zip != '' ? `${addresses.zip} &nbsp;` : ''}
		${addresses.city != '' ? addresses.city : ''}
		<br>
		${addresses.country_name != '' ? addresses.country_name : ''}
		${addresses.phone != '' ? `<br><br>${addresses.phone}` : ''}
		${addresses.email_address != '' ? `<br><br><span class="paragraph"><a href="mailto:${addresses.email_address}">${addresses.email_address}</a></span>` : ''}
		${addresses.schedule != '' ? `<br><br>${addresses.schedule}` : ''}
	`;

	$(bloco).find('.contentTitles_description2').html(addresses.name);
	$(bloco).find('.contentTitles_description').html(content);
	$(bloco).find('.contentTitles_button').attr('href', `${JSVarsStores.URL_DET}&idst=${addresses.id}`);
	$(bloco).find('.box-images').html(`<figure><img src="${JSVarsStores.CDN + addresses.image}" class="primary_image" alt="${JSVarsStores.name}"></figure>`);
}

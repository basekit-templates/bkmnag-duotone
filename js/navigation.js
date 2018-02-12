// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------

$( document ).ready(function() {
	
	// ------------------------------
	// Change navigation if it matches tablet size.
	// ------------------------------
	
	// Toggles class open to display/hide the whole navigation.

	$('.navigation-toggle').click(function() {
		$('.widget[data-widget-type="extendednavigation"]').toggleClass('open');
	});

	// Toggles class open to display/hide folders.

	$('.navigation-item.folder').each(function() {
		$(this).click(function() {
			$(this).parent('.navigation-item.folder').toggleClass('open');
		});
	});
	
	// ------------------------------
	// Changes to the header when it's not at the top of the page.
	// ------------------------------

	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 100) {
			$('.template__header').addClass('template__header--small');
		} else {
			$('.template__header').removeClass('template__header--small');
		}
	});
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	if ($('.language-selector')) {
	    var languageSelectorHeight = $('.language-selector').outerHeight();
	    var languageSelectorSpaceClass;
	 
	    function languageSelectorSpace(languageSelectorSpaceClass) {
		    var spaceCSS = $(languageSelectorSpaceClass).css('margin-top', languageSelectorHeight+'px');
		    return (spaceCSS);
	    }
	    
	    languageSelectorSpace('.page.page--home');
	    languageSelectorSpace('.template__header');
	}

	// ------------------------------
	// Change the top padding of the content depending on how high
	// the navigation header and footer is.
	// ------------------------------

	var headerHeight;
	var footerHeight;

	function resizeHeaderFooter() {
		if ($(window).width() < 720) {
			headerHeight = $('.template__header').outerHeight()+20;
			footerHeight = $('.template__footer').outerHeight()+30;
		} else {
			headerHeight = $('.template__header').outerHeight()+30;
			footerHeight = $('.template__footer').outerHeight()+60;
		}

		return headerHeight, footerHeight;
	}

	resizeHeaderFooter();
	$('.template__content').css('padding-top', headerHeight +'px');
	$('.default section.page').css('padding-bottom', footerHeight +'px');

	$(window).resize(function() {
		resizeHeaderFooter();
		$('.template__content').css('padding-top', headerHeight +'px');
		$('.default section.page').css('padding-bottom', footerHeight +'px');
	});
	
	// ------------------------------
	// Feature Overlay Corrections
	// The overlay of the feature should be below the header.
	// ------------------------------
	
	var headerHeight = $('.template__header').outerHeight();
	var featureOverlayTopDistance = $('.widget[data-widget-type="feature"] .widget-overlay').attr('style', 'top: ' + headerHeight + 'px');

	$(window).resize(function() {
		var headerHeight = $('.template__header').outerHeight();
		var featureOverlayTopDistance = $('.widget[data-widget-type="feature"] .widget-overlay').attr('style', 'top: ' + headerHeight + 'px');
	});
    
	// ------------------------------
    // Hides other submenus when a main menu point with a submenu is clicked.
	// ------------------------------
    
    $(".navigation-item").click(function(){
        $(this).siblings(".navigation-item").removeClass("folder-open open");
    });
});
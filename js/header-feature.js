// ----------------------------------------
// Duotone: JS > header-feature JS
// ----------------------------------------

// Feature parallax fade effect.

var featureHeight = $(".header-feature").height();
var featurePosition = $(".header-feature").position();
var featureTriggerValue = featureHeight + featurePosition.top;
var window_height = window.innerHeight;
var offsetAmount;

function checkFeatureDimensions() {
    featureHeight = $(".header-feature").height();
    featurePosition = $(".header-feature").position();
    featureTriggerValue = featureHeight + featurePosition.top;
    window_height = window.innerHeight;
}
var scrollEffect = function (elem) {

	// How high the window is

	if ( window.pageYOffset > (featureTriggerValue - window_height)  ) {

		if(featureTriggerValue > window_height) {
			offsetAmount = window.pageYOffset - (featureTriggerValue - window_height);
		}
		else {
			offsetAmount = window.pageYOffset/4;
		}

		// Apply styles as user scrolls
		elem.setAttribute(
			"style", "opacity:" + Math.max(0, parseFloat(1-(2/window_height*offsetAmount)).toFixed(2)) + "; -webkit-transform: translateY(" + offsetAmount + "px)"
		);
	}
};

var elem = document.querySelector('.content-inner-wrap');

window.onscroll = function(e) {
    if (elem) {
        scrollEffect(elem);
    }
};

$( window ).resize(function() {
  checkFeatureDimensions();
});
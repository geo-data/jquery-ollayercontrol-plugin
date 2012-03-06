/**
 * JQuery OpenLayers Layer Control Plugin
 * Copyright (c) 2012 GeoData Institue, http://www.geodata.soton.ac.uk
 * Licensed under the MIT licence.
 * 
 * This plugin creates a layer control for an OpenLayers map. The map
 * object is passed as the first argument to the plugin, optionally
 * followed by an object literal specifying other options to pass to
 * the OpenLayers.Control.LayerSwitcher object that the plugin wraps
 * e.g.
 *
 *   $('#layer-control-div').olLayerControl(map)
 *
 * See `example.html` in the distribution for a complete example.
 */

(function plugin( $ ) {
    $.fn.olLayerControl = function olLayerControl(map, options) {
        // there's no need to do $(this) because "this" is already a
        // jquery object

        // Create defaults, extending them with any options that were
        // provided
        var settings = $.extend( {
            'roundedCorner': false
        }, options);

        // return the jquery object to maintain chainability
        return this.each(function forEach() {
            var control,
                controlOptions = $.extend(settings, {'div': this});
            control = new OpenLayers.Control.LayerSwitcher(controlOptions);
            map.addControl(control);
        });
    };
})( jQuery );

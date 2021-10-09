(function($) {
    $.fn.tusmarker = function( options ) {
        var settings = $.extend({
            text: 0,
            css: '',
            caseSensitive: true,
            inWord: false,
        }, options);

		return this.each( function() {
			var str_filter, css_style, str_content, str_split, str_sensitive;
			var content = $(this).text();
			var tmp = new Array();

		    css_style = settings.css;
		    str_filter = settings.text;
		    str_sensitive = settings.caseSensitive;
		    str_inword = settings.inWord

		    str_content = $(this).html();
			str_split = str_content.split(' ');

			if(str_sensitive === false) {
				str_filter = str_filter.toLowerCase();
			}

	        $(str_split).each(function(key, value) {
	        	if(str_sensitive === false) {
	        		value_filter = value.toLowerCase();
	        	}
	        	else {
	        		value_filter = value;
	        	}

				if(str_filter == value_filter) {
					tmp[key] = "<span class='"+css_style+"'>"+value+"</span>";
				}
				else if(str_inword === true && value_filter.includes(str_filter)) {
					tmp[key] = "<span class='"+css_style+"'>"+value+"</span>";
				}
				else {
					tmp[key] = value;
				}
	        });

	        content = tmp.join(" ");
	        $(this).replaceWith(content);
		});
    }
}(jQuery));
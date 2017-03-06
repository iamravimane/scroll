 jQuery('a').on('click',function (e) {
                   var target = this.hash;
                   var target = jQuery(target);
                   jQuery('html, body').stop().animate({
                   'scrollTop': target.offset().top
                   }, 1100, 'swing');
                   });
                  
                // *only* if we have anchor on the url
                if (window.location.hash) {
                //  alert(JSON.stringify(jQuery(window.location.hash).offset()));
                    // smooth scroll to the anchor id
                    jQuery('html, body').animate({
                        scrollTop: jQuery(window.location.hash).offset().top + 'px'
                    }, 1000, 'swing');
                }

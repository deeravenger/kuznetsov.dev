//======================================//
//========== 1. Easing Plugin ==========//
//======================================//
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */



//===============================//
//========== 2. Appear ==========//
//===============================//
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);

//================================//
//========== 3. MixItUp ==========//
//================================//
/**!
 * MixItUp v3.1.10
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build e6e7a2d0-7eef-4170-a198-9a6a2bd4e53e
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function(window) {
    'use strict';

    var mixitup = null,
        h       = null,
        jq      = null;

    (function() {
        var VENDORS = ['webkit', 'moz', 'o', 'ms'],
            canary  = window.document.createElement('div'),
            i       = -1;

        // window.requestAnimationFrame

        for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
            window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame'];
        }

        // Element.nextElementSibling

        if (typeof canary.nextElementSibling === 'undefined') {
            Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
                get: function() {
                    var el = this.nextSibling;

                    while (el) {
                        if (el.nodeType === 1) {
                            return el;
                        }

                        el = el.nextSibling;
                    }

                    return null;
                }
            });
        }

        // Element.matches

        (function(ElementPrototype) {
            ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.machesSelector ||
                ElementPrototype.mozMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                ElementPrototype.oMatchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                function (selector) {
                    return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                };
        })(window.Element.prototype);

        // Object.keys
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

        if (!Object.keys) {
            Object.keys = (function() {
                var hasOwnProperty      = Object.prototype.hasOwnProperty,
                    hasDontEnumBug      = false,
                    dontEnums           = [],
                    dontEnumsLength     = -1;

                hasDontEnumBug = !({
                    toString: null
                })
                    .propertyIsEnumerable('toString');

                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ];

                dontEnumsLength = dontEnums.length;

                return function(obj) {
                    var result  = [],
                        prop    = '',
                        i       = -1;

                    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                        throw new TypeError('Object.keys called on non-object');
                    }

                    for (prop in obj) {
                        if (hasOwnProperty.call(obj, prop)) {
                            result.push(prop);
                        }
                    }

                    if (hasDontEnumBug) {
                        for (i = 0; i < dontEnumsLength; i++) {
                            if (hasOwnProperty.call(obj, dontEnums[i])) {
                                result.push(dontEnums[i]);
                            }
                        }
                    }

                    return result;
                };
            }());
        }

        // Array.isArray
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        // Object.create
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create

        if (typeof Object.create !== 'function') {
            Object.create = (function(undefined) {
                var Temp = function() {};

                return function (prototype, propertiesObject) {
                    if (prototype !== Object(prototype) && prototype !== null) {
                        throw TypeError('Argument must be an object, or null');
                    }

                    Temp.prototype = prototype || {};

                    var result = new Temp();

                    Temp.prototype = null;

                    if (propertiesObject !== undefined) {
                        Object.defineProperties(result, propertiesObject);
                    }

                    if (prototype === null) {
                        /* jshint ignore:start */
                        result.__proto__ = null;
                        /* jshint ignore:end */
                    }

                    return result;
                };
            })();
        }

        // String.prototyoe.trim

        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        // Array.prototype.indexOf
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(searchElement) {
                var n, k, t, len;

                if (this === null) {
                    throw new TypeError();
                }

                t = Object(this);

                len = t.length >>> 0;

                if (len === 0) {
                    return -1;
                }

                n = 0;

                if (arguments.length > 1) {
                    n = Number(arguments[1]);

                    if (n !== n) {
                        n = 0;
                    } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }

                if (n >= len) {
                    return -1;
                }

                for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k;
                    }
                }

                return -1;
            };
        }

        // Function.prototype.bind
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

        if (!Function.prototype.bind) {
            Function.prototype.bind = function(oThis) {
                var aArgs, self, FNOP, fBound;

                if (typeof this !== 'function') {
                    throw new TypeError();
                }

                aArgs = Array.prototype.slice.call(arguments, 1);

                self = this;

                FNOP = function() {};

                fBound = function() {
                    return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                };

                if (this.prototype) {
                    FNOP.prototype = this.prototype;
                }

                fBound.prototype = new FNOP();

                return fBound;
            };
        }

        // Element.prototype.dispatchEvent

        if (!window.Element.prototype.dispatchEvent) {
            window.Element.prototype.dispatchEvent = function(event) {
                try {
                    return this.fireEvent('on' + event.type, event);
                } catch (err) {}
            };
        }
    })();

    /**
     * The `mixitup()` "factory" function creates and returns individual instances
     * of MixItUp, known as "mixers", on which API methods can be called.
     *
     * When loading MixItUp via a script tag, the factory function is accessed
     * via the global variable `mixitup`. When using a module loading
     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
     * exported into your module when you require the MixItUp library.
     *
     * @example
     * mixitup(container [,config] [,foreignDoc])
     *
     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
     * var containerEl = document.querySelector('.container');
     *
     * var mixer = mixitup(containerEl);
     *
     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 3: Passing a configuration object</caption>
     * var mixer = mixitup(containerEl, {
     *     animation: {
     *         effects: 'fade scale(0.5)'
     *     }
     * });
     *
     * @example <caption>Example 4: Passing an iframe reference</caption>
     * var mixer = mixitup(containerEl, config, foreignDocument);
     *
     * @global
     * @namespace
     * @public
     * @kind        function
     * @since       3.0.0
     * @param       {(Element|string)}  container
     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
     * @param       {object}            [config]
     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
     * @param       {object}            [foreignDoc]
     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
     * @return      {mixitup.Mixer}
     *      A "mixer" object holding the MixItUp instance.
     */

    mixitup = function(container, config, foreignDoc) {
        var el                  = null,
            returnCollection    = false,
            instance            = null,
            facade              = null,
            doc                 = null,
            output              = null,
            instances           = [],
            id                  = '',
            elements            = [],
            i                   = -1;

        doc = foreignDoc || window.document;

        if (returnCollection = arguments[3]) {
            // A non-documented 4th paramater enabling control of multiple instances

            returnCollection = typeof returnCollection === 'boolean';
        }

        if (typeof container === 'string') {
            elements = doc.querySelectorAll(container);
        } else if (container && typeof container === 'object' && h.isElement(container, doc)) {
            elements = [container];
        } else if (container && typeof container === 'object' && container.length) {
            // Although not documented, the container may also be an array-like list of
            // elements such as a NodeList or jQuery collection, is returnCollection is true

            elements = container;
        } else {
            throw new Error(mixitup.messages.errorFactoryInvalidContainer());
        }

        if (elements.length < 1) {
            throw new Error(mixitup.messages.errorFactoryContainerNotFound());
        }

        for (i = 0; el = elements[i]; i++) {
            if (i > 0 && !returnCollection) break;

            if (!el.id) {
                id = 'MixItUp' + h.randomHex();

                el.id = id;
            } else {
                id = el.id;
            }

            if (mixitup.instances[id] instanceof mixitup.Mixer) {
                instance = mixitup.instances[id];

                if (!config || (config && config.debug && config.debug.showWarnings !== false)) {
                    console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                }
            } else {
                instance = new mixitup.Mixer();

                instance.attach(el, doc, id, config);

                mixitup.instances[id] = instance;
            }

            facade = new mixitup.Facade(instance);

            if (config && config.debug && config.debug.enable) {
                instances.push(instance);
            } else {
                instances.push(facade);
            }
        }

        if (returnCollection) {
            output = new mixitup.Collection(instances);
        } else {
            // Return the first instance regardless

            output = instances[0];
        }

        return output;
    };

    /**
     * The `.use()` static method is used to extend the functionality of mixitup with compatible
     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
     *
     * You need only call the `.use()` function once per project, per extension, as module loaders
     * will cache a single reference to MixItUp inclusive of all changes made.
     *
     * @example
     * mixitup.use(extension)
     *
     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
     *
     * import mixitup from 'mixitup';
     * import mixitupPagination from 'mixitup-pagination';
     *
     * mixitup.use(mixitupPagination);
     *
     * // All mixers created by the factory function in all modules will now
     * // have pagination functionality
     *
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 2: Activating the legacy jQuery API</caption>
     *
     * import mixitup from 'mixitup';
     * import $ from 'jquery';
     *
     * mixitup.use($);
     *
     * // MixItUp can now be used as a jQuery plugin, as per the v2 API
     *
     * $('.container').mixitup();
     *
     * @public
     * @name     use
     * @memberof mixitup
     * @kind     function
     * @static
     * @since    3.0.0
     * @param    {*}  extension   A reference to the extension or library to be used.
     * @return   {void}
     */

    mixitup.use = function(extension) {
        mixitup.Base.prototype.callActions.call(mixitup, 'beforeUse', arguments);

        // Call the extension's factory function, passing
        // the mixitup factory as a paramater

        if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
            // Mixitup extension

            if (typeof mixitup.extensions[extension.NAME] === 'undefined') {
                extension(mixitup);

                mixitup.extensions[extension.NAME] = extension;
            }
        } else if (extension.fn && extension.fn.jquery) {
            // jQuery

            mixitup.libraries.$ = extension;

            // Register MixItUp as a jQuery plugin to allow v2 API

            mixitup.registerJqPlugin(extension);
        }

        mixitup.Base.prototype.callActions.call(mixitup, 'afterUse', arguments);
    };

    /**
     * @private
     * @static
     * @since   3.0.0
     * @param   {jQuery} $
     * @return  {void}
     */

    mixitup.registerJqPlugin = function($) {
        $.fn.mixItUp = function() {
            var method  = arguments[0],
                config  = arguments[1],
                args    = Array.prototype.slice.call(arguments, 1),
                outputs = [],
                chain   = [];

            chain = this.each(function() {
                var instance = null,
                    output   = null;

                if (method && typeof method === 'string') {
                    // jQuery-UI method syntax

                    instance = mixitup.instances[this.id];

                    output = instance[method].apply(instance, args);

                    if (typeof output !== 'undefined' && output !== null && typeof output.then !== 'function') outputs.push(output);
                } else {
                    mixitup(this, config);
                }
            });

            if (outputs.length) {
                return outputs.length > 1 ? outputs : outputs[0];
            } else {
                return chain;
            }
        };
    };

    mixitup.instances   = {};
    mixitup.extensions  = {};
    mixitup.libraries   = {};

    /**
     * @private
     */

    h = {

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {boolean}
         */

        hasClass: function(el, cls) {
            return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        addClass: function(el, cls) {
            if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls;
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        removeClass: function(el, cls) {
            if (this.hasClass(el, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');

                el.className = el.className.replace(reg, ' ').trim();
            }
        },

        /**
         * Merges the properties of the source object onto the
         * target object. Alters the target object.
         *
         * @private
         * @param   {object}    destination
         * @param   {object}    source
         * @param   {boolean}   [deep=false]
         * @param   {boolean}   [handleErrors=false]
         * @return  {void}
         */

        extend: function(destination, source, deep, handleErrors) {
            var sourceKeys  = [],
                key         = '',
                i           = -1;

            deep = deep || false;
            handleErrors = handleErrors || false;

            try {
                if (Array.isArray(source)) {
                    for (i = 0; i < source.length; i++) {
                        sourceKeys.push(i);
                    }
                } else if (source) {
                    sourceKeys = Object.keys(source);
                }

                for (i = 0; i < sourceKeys.length; i++) {
                    key = sourceKeys[i];

                    if (!deep || typeof source[key] !== 'object' || this.isElement(source[key])) {
                        // All non-object properties, or all properties if shallow extend

                        destination[key] = source[key];
                    } else if (Array.isArray(source[key])) {
                        // Arrays

                        if (!destination[key]) {
                            destination[key] = [];
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    } else {
                        // Objects

                        if (!destination[key]) {
                            destination[key] = {};
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    }
                }
            } catch(err) {
                if (handleErrors) {
                    this.handleExtendError(err, destination);
                } else {
                    throw err;
                }
            }

            return destination;
        },

        /**
         * @private
         * @param   {Error}  err
         * @param   {object} destination
         * @return  {void}
         */

        handleExtendError: function(err, destination) {
            var re                  = /property "?(\w*)"?[,:] object/i,
                matches             = null,
                erroneous           = '',
                message             = '',
                suggestion          = '',
                probableMatch       = '',
                key                 = '',
                mostMatchingChars   = -1,
                i                   = -1;

            if (err instanceof TypeError && (matches = re.exec(err.message))) {
                erroneous = matches[1];

                for (key in destination) {
                    i = 0;

                    while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
                        i++;
                    }

                    if (i > mostMatchingChars) {
                        mostMatchingChars = i;
                        probableMatch = key;
                    }
                }

                if (mostMatchingChars > 1) {
                    suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: probableMatch
                    });
                }

                message = mixitup.messages.errorConfigInvalidProperty({
                    erroneous: erroneous,
                    suggestion: suggestion
                });

                throw new TypeError(message);
            }

            throw err;
        },

        /**
         * @private
         * @param   {string} str
         * @return  {function}
         */

        template: function(str) {
            var re          = /\${([\w]*)}/g,
                dynamics    = {},
                matches     = null;

            while ((matches = re.exec(str))) {
                dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g');
            }

            return function(data) {
                var key     = '',
                    output  = str;

                data = data || {};

                for (key in dynamics) {
                    output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '');
                }

                return output;
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @param   {boolean}       useCapture
         * @return  {void}
         */

        on: function(el, type, fn, useCapture) {
            if (!el) return;

            if (el.addEventListener) {
                el.addEventListener(type, fn, useCapture);
            } else if (el.attachEvent) {
                el['e' + type + fn] = fn;

                el[type + fn] = function() {
                    el['e' + type + fn](window.event);
                };

                el.attachEvent('on' + type, el[type + fn]);
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @return  {void}
         */

        off: function(el, type, fn) {
            if (!el) return;

            if (el.removeEventListener) {
                el.removeEventListener(type, fn, false);
            } else if (el.detachEvent) {
                el.detachEvent('on' + type, el[type + fn]);
                el[type + fn] = null;
            }
        },

        /**
         * @private
         * @param   {string}      eventType
         * @param   {object}      detail
         * @param   {Document}    [doc]
         * @return  {CustomEvent}
         */

        getCustomEvent: function(eventType, detail, doc) {
            var event = null;

            doc = doc || window.document;

            if (typeof window.CustomEvent === 'function') {
                event = new window.CustomEvent(eventType, {
                    detail: detail,
                    bubbles: true,
                    cancelable: true
                });
            } else if (typeof doc.createEvent === 'function') {
                event = doc.createEvent('CustomEvent');
                event.initCustomEvent(eventType, true, true, detail);
            } else {
                event = doc.createEventObject(),
                event.type = eventType;

                event.returnValue = false;
                event.cancelBubble = false;
                event.detail = detail;
            }

            return event;
        },

        /**
         * @private
         * @param   {Event} e
         * @return  {Event}
         */

        getOriginalEvent: function(e) {
            if (e.touches && e.touches.length) {
                return e.touches[0];
            } else if (e.changedTouches && e.changedTouches.length) {
                return e.changedTouches[0];
            } else {
                return e;
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        selector
         * @return  {Number}
         */

        index: function(el, selector) {
            var i = 0;

            while ((el = el.previousElementSibling) !== null) {
                if (!selector || el.matches(selector)) {
                    ++i;
                }
            }

            return i;
        },

        /**
         * Converts a dash or snake-case string to camel case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        camelCase: function(str) {
            return str.toLowerCase().replace(/([_-][a-z])/g, function($1) {
                return $1.toUpperCase().replace(/[_-]/, '');
            });
        },

        /**
         * Converts a dash or snake-case string to pascal case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        pascalCase: function(str) {
            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Converts a camel or pascal-case string to dash case.
         *
         * @private
         * @param   {string}    str
         * @return  {string}
         */

        dashCase: function(str) {
            return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {boolean}
         */

        isElement: function(el, doc) {
            doc = doc || window.document;

            if (
                window.HTMLElement &&
                el instanceof window.HTMLElement
            ) {
                return true;
            } else if (
                doc.defaultView &&
                doc.defaultView.HTMLElement &&
                el instanceof doc.defaultView.HTMLElement
            ) {
                return true;
            } else {
                return (
                    el !== null &&
                    el.nodeType === 1 &&
                    typeof el.nodeName === 'string'
                );
            }
        },

        /**
         * @private
         * @param   {string}            htmlString
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {DocumentFragment}
         */

        createElement: function(htmlString, doc) {
            var frag = null,
                temp = null;

            doc = doc || window.document;

            frag = doc.createDocumentFragment();
            temp = doc.createElement('div');

            temp.innerHTML = htmlString;

            while (temp.firstChild) {
                frag.appendChild(temp.firstChild);
            }

            return frag;
        },

        /**
         * @private
         * @param   {Node} node
         * @return  {void}
         */

        removeWhitespace: function(node) {
            var deleting;

            while (node && node.nodeName === '#text') {
                deleting = node;

                node = node.previousSibling;

                deleting.parentElement && deleting.parentElement.removeChild(deleting);
            }
        },

        /**
         * @private
         * @param   {Array<*>}  a
         * @param   {Array<*>}  b
         * @return  {boolean}
         */

        isEqualArray: function(a, b) {
            var i = a.length;

            if (i !== b.length) return false;

            while (i--) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {object}  a
         * @param   {object}  b
         * @return  {boolean}
         */

        deepEquals: function(a, b) {
            var key;

            if (typeof a === 'object' && a && typeof b === 'object' && b) {
                if (Object.keys(a).length !== Object.keys(b).length) return false;

                for (key in a) {
                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                }
            } else if (a !== b) {
                return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {Array<*>}  oldArray
         * @return  {Array<*>}
         */

        arrayShuffle: function(oldArray) {
            var newArray    = oldArray.slice(),
                len         = newArray.length,
                i           = len,
                p           = -1,
                t           = [];

            while (i--) {
                p = ~~(Math.random() * len);
                t = newArray[i];

                newArray[i] = newArray[p];
                newArray[p] = t;
            }

            return newArray;
        },

        /**
         * @private
         * @param   {object}    list
         */

        arrayFromList: function(list) {
            var output, i;

            try {
                return Array.prototype.slice.call(list);
            } catch(err) {
                output = [];

                for (i = 0; i < list.length; i++) {
                    output.push(list[i]);
                }

                return output;
            }
        },

        /**
         * @private
         * @param   {function}  func
         * @param   {Number}    wait
         * @param   {boolean}   immediate
         * @return  {function}
         */

        debounce: function(func, wait, immediate) {
            var timeout;

            return function() {
                var self     = this,
                    args     = arguments,
                    callNow  = immediate && !timeout,
                    later    = null;

                later = function() {
                    timeout  = null;

                    if (!immediate) {
                        func.apply(self, args);
                    }
                };

                clearTimeout(timeout);

                timeout = setTimeout(later, wait);

                if (callNow) func.apply(self, args);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   element
         * @return  {object}
         */

        position: function(element) {
            var xPosition       = 0,
                yPosition       = 0,
                offsetParent    = element;

            while (element) {
                xPosition -= element.scrollLeft;
                yPosition -= element.scrollTop;

                if (element === offsetParent) {
                    xPosition += element.offsetLeft;
                    yPosition += element.offsetTop;

                    offsetParent = element.offsetParent;
                }

                element = element.parentElement;
            }

            return {
                x: xPosition,
                y: yPosition
            };
        },

        /**
         * @private
         * @param   {object}    node1
         * @param   {object}    node2
         * @return  {Number}
         */

        getHypotenuse: function(node1, node2) {
            var distanceX = node1.x - node2.x,
                distanceY = node1.y - node2.y;

            distanceX = distanceX < 0 ? distanceX * -1 : distanceX,
            distanceY = distanceY < 0 ? distanceY * -1 : distanceY;

            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        },

        /**
         * Calcuates the area of intersection between two rectangles and expresses it as
         * a ratio in comparison to the area of the first rectangle.
         *
         * @private
         * @param   {Rect}  box1
         * @param   {Rect}  box2
         * @return  {number}
         */

        getIntersectionRatio: function(box1, box2) {
            var controlArea         = box1.width * box1.height,
                intersectionX       = -1,
                intersectionY       = -1,
                intersectionArea    = -1,
                ratio               = -1;

            intersectionX =
                Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));

            intersectionY =
                Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));

            intersectionArea = intersectionY * intersectionX;

            ratio = intersectionArea / controlArea;

            return ratio;
        },

        /**
         * @private
         * @param   {object}            el
         * @param   {string}            selector
         * @param   {boolean}           [includeSelf]
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {Element|null}
         */

        closestParent: function(el, selector, includeSelf, doc) {
            var parent  = el.parentNode;

            doc = doc || window.document;

            if (includeSelf && el.matches(selector)) {
                return el;
            }

            while (parent && parent != doc.body) {
                if (parent.matches && parent.matches(selector)) {
                    return parent;
                } else if (parent.parentNode) {
                    parent = parent.parentNode;
                } else {
                    return null;
                }
            }

            return null;
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {string}            selector
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {NodeList}
         */

        children: function(el, selector, doc) {
            var children    = [],
                tempId      = '';

            doc = doc || window.doc;

            if (el) {
                if (!el.id) {
                    tempId = 'Temp' + this.randomHexKey();

                    el.id = tempId;
                }

                children = doc.querySelectorAll('#' + el.id + ' > ' + selector);

                if (tempId) {
                    el.removeAttribute('id');
                }
            }

            return children;
        },

        /**
         * Creates a clone of a provided array, with any empty strings removed.
         *
         * @private
         * @param   {Array<*>} originalArray
         * @return  {Array<*>}
         */

        clean: function(originalArray) {
            var cleanArray = [],
                i = -1;

            for (i = 0; i < originalArray.length; i++) {
                if (originalArray[i] !== '') {
                    cleanArray.push(originalArray[i]);
                }
            }

            return cleanArray;
        },

        /**
         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
         *
         * @private
         * @param  {object} libraries
         * @return {h.Deferred}
         */

        defer: function(libraries) {
            var deferred       = null,
                promiseWrapper = null,
                $              = null;

            promiseWrapper = new this.Deferred();

            if (mixitup.features.has.promises) {
                // ES6 native promise or polyfill

                promiseWrapper.promise = new Promise(function(resolve, reject) {
                    promiseWrapper.resolve = resolve;
                    promiseWrapper.reject  = reject;
                });
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.Deferred === 'function') {
                // jQuery

                deferred = $.Deferred();

                promiseWrapper.promise = deferred.promise();
                promiseWrapper.resolve = deferred.resolve;
                promiseWrapper.reject  = deferred.reject;
            } else if (window.console) {
                // No implementation

                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return promiseWrapper;
        },

        /**
         * @private
         * @param   {Array<Promise>}    tasks
         * @param   {object}            libraries
         * @return  {Promise<Array>}
         */

        all: function(tasks, libraries) {
            var $ = null;

            if (mixitup.features.has.promises) {
                return Promise.all(tasks);
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.when === 'function') {
                return $.when.apply($, tasks)
                    .done(function() {
                        // jQuery when returns spread arguments rather than an array or resolutions

                        return arguments;
                    });
            }

            // No implementation

            if (window.console) {
                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return [];
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        property
         * @param   {Array<string>} vendors
         * @return  {string}
         */

        getPrefix: function(el, property, vendors) {
            var i       = -1,
                prefix  = '';

            if (h.dashCase(property) in el.style) return '';

            for (i = 0; prefix = vendors[i]; i++) {
                if (prefix + property in el.style) {
                    return prefix.toLowerCase();
                }
            }

            return 'unsupported';
        },

        /**
         * @private
         * @return  {string}
         */

        randomHex: function() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
        },

        /**
         * @private
         * @param   {HTMLDocument}  [doc]
         * @return  {object}
         */

        getDocumentState: function(doc) {
            doc = typeof doc.body === 'object' ? doc : window.document;

            return {
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset,
                docHeight: doc.documentElement.scrollHeight
            };
        },

        /**
         * @private
         * @param   {object}    obj
         * @param   {function}  fn
         * @return  {function}
         */

        bind: function(obj, fn) {
            return function() {
                return fn.apply(obj, arguments);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @return  {boolean}
         */

        isVisible: function(el) {
            var styles = null;

            if (el.offsetParent) return true;

            styles = window.getComputedStyle(el);

            if (
                styles.position === 'fixed' &&
                styles.visibility !== 'hidden' &&
                styles.opacity !== '0'
            ) {
                // Fixed elements report no offsetParent,
                // but may still be invisible

                return true;
            }

            return false;
        },

        /**
         * @private
         * @param   {object}    obj
         */

        seal: function(obj) {
            if (typeof Object.seal === 'function') {
                Object.seal(obj);
            }
        },

        /**
         * @private
         * @param   {object}    obj
         */

        freeze: function(obj) {
            if (typeof Object.freeze === 'function') {
                Object.freeze(obj);
            }
        },

        /**
         * @private
         * @param   {string}    control
         * @param   {string}    specimen
         * @return  {boolean}
         */

        compareVersions: function(control, specimen) {
            var controlParts    = control.split('.'),
                specimenParts   = specimen.split('.'),
                controlPart     = -1,
                specimenPart    = -1,
                i               = -1;

            for (i = 0; i < controlParts.length; i++) {
                controlPart     = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
                specimenPart    = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);

                if (specimenPart < controlPart) {
                    return false;
                } else if (specimenPart > controlPart) {
                    return true;
                }
            }

            return true;
        },

        /**
         * @private
         * @constructor
         */

        Deferred: function() {
            this.promise    = null;
            this.resolve    = null;
            this.reject     = null;
            this.id         = h.randomHex();
        },

        /**
         * @private
         * @param   {object}  obj
         * @return  {boolean}
         */

        isEmptyObject: function(obj) {
            var key = '';

            if (typeof Object.keys === 'function') {
                return Object.keys(obj).length === 0;
            }

            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }

            return true;
        },

        /**
         * @param   {mixitup.Config.ClassNames}   classNames
         * @param   {string}                      elementName
         * @param   {string}                      [modifier]
         * @return  {string}
         */

        getClassname: function(classNames, elementName, modifier) {
            var classname = '';

            classname += classNames.block;

            if (classname.length) {
                classname += classNames.delineatorElement;
            }

            classname += classNames['element' + this.pascalCase(elementName)];

            if (!modifier) return classname;

            if (classname.length) {
                classname += classNames.delineatorModifier;
            }

            classname += modifier;

            return classname;
        },

        /**
         * Returns the value of a property on a given object via its string key.
         *
         * @param   {object}    obj
         * @param   {string}    stringKey
         * @return  {*} value
         */

        getProperty: function(obj, stringKey) {
            var parts           = stringKey.split('.'),
                returnCurrent   = null,
                current         = '',
                i               = 0;

            if (!stringKey) {
                return obj;
            }

            returnCurrent = function(obj) {
                if (!obj) {
                    return null;
                } else {
                    return obj[current];
                }
            };

            while (i < parts.length) {
                current = parts[i];

                obj = returnCurrent(obj);

                i++;
            }

            if (typeof obj !== 'undefined') {
                return obj;
            } else {
                return null;
            }
        }
    };

    mixitup.h = h;

    /**
     * The Base class adds instance methods to all other extensible MixItUp classes,
     * enabling the calling of any registered hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Base = function() {};

    mixitup.Base.prototype = {
        constructor: mixitup.Base,

        /**
         * Calls any registered hooks for the provided action.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    actionName
         * @param       {Array<*>}  args
         * @return      {void}
         */

        callActions: function(actionName, args) {
            var self            = this,
                hooks           = self.constructor.actions[actionName],
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return;

            for (extensionName in hooks) {
                hooks[extensionName].apply(self, args);
            }
        },

        /**
         * Calls any registered hooks for the provided filter.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    filterName
         * @param       {*}         input
         * @param       {Array<*>}  args
         * @return      {*}
         */

        callFilters: function(filterName, input, args) {
            var self            = this,
                hooks           = self.constructor.filters[filterName],
                output          = input,
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return output;

            args = args || [];

            for (extensionName in hooks) {
                args = h.arrayFromList(args);

                args.unshift(output);

                output = hooks[extensionName].apply(self, args);
            }

            return output;
        }
    };

    /**
     * The BaseStatic class holds a set of static methods which are then added to all other
     * extensible MixItUp classes as a means of integrating extensions via the addition of new
     * methods and/or actions and hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.BaseStatic = function() {
        this.actions = {};
        this.filters = {};

        /**
         * Performs a shallow extend on the class's prototype, adding one or more new members to
         * the class in a single operation.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {object} extension
         * @return      {void}
         */

        this.extend = function(extension) {
            h.extend(this.prototype, extension);
        };

        /**
         * Registers a function to be called on the action hook of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerAction = function(hookName, extensionName, func) {
            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
        };

        /**
         * Registers a function to be called on the filter of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerFilter = function(hookName, extensionName, func) {
            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
        };
    };

    /**
     * The `mixitup.Features` class performs all feature and CSS prefix detection
     * neccessary for MixItUp to function correctly, as well as storing various
     * string and array constants. All feature decection is on evaluation of the
     * library and stored in a singleton instance for use by other internal classes.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Features = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.boxSizingPrefix            = '';
        this.transformPrefix            = '';
        this.transitionPrefix           = '';

        this.boxSizingPrefix            = '';
        this.transformProp              = '';
        this.transformRule              = '';
        this.transitionProp             = '';
        this.perspectiveProp            = '';
        this.perspectiveOriginProp      = '';

        this.has                        = new mixitup.Has();

        this.canary                     = null;

        this.BOX_SIZING_PROP            = 'boxSizing';
        this.TRANSITION_PROP            = 'transition';
        this.TRANSFORM_PROP             = 'transform';
        this.PERSPECTIVE_PROP           = 'perspective';
        this.PERSPECTIVE_ORIGIN_PROP    = 'perspectiveOrigin';
        this.VENDORS                    = ['Webkit', 'moz', 'O', 'ms'];

        this.TWEENABLE = [
            'opacity',
            'width', 'height',
            'marginRight', 'marginBottom',
            'x', 'y',
            'scale',
            'translateX', 'translateY', 'translateZ',
            'rotateX', 'rotateY', 'rotateZ'
        ];

        this.callActions('afterConstruct');
    };

    mixitup.BaseStatic.call(mixitup.Features);

    mixitup.Features.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Features.prototype,
    /** @lends mixitup.Features */
    {
        constructor: mixitup.Features,

        /**
         * @private
         * @return  {void}
         */

        init: function() {
            var self = this;

            self.callActions('beforeInit', arguments);

            self.canary = document.createElement('div');

            self.setPrefixes();
            self.runTests();

            self.callActions('beforeInit', arguments);
        },

        /**
         * @private
         * @return  {void}
         */

        runTests: function() {
            var self = this;

            self.callActions('beforeRunTests', arguments);

            self.has.promises       = typeof window.Promise === 'function';
            self.has.transitions    = self.transitionPrefix !== 'unsupported';

            self.callActions('afterRunTests', arguments);

            h.freeze(self.has);
        },

        /**
         * @private
         * @return  {void}
         */

        setPrefixes: function() {
            var self = this;

            self.callActions('beforeSetPrefixes', arguments);

            self.transitionPrefix   = h.getPrefix(self.canary, 'Transition', self.VENDORS);
            self.transformPrefix    = h.getPrefix(self.canary, 'Transform', self.VENDORS);
            self.boxSizingPrefix    = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);

            self.boxSizingProp = self.boxSizingPrefix ?
                self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;

            self.transitionProp = self.transitionPrefix ?
                self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;

            self.transformProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;

            self.transformRule = self.transformPrefix ?
                '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;

            self.perspectiveProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;

            self.perspectiveOriginProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) :
                self.PERSPECTIVE_ORIGIN_PROP;

            self.callActions('afterSetPrefixes', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Has = function() {
        this.transitions    = false;
        this.promises       = false;

        h.seal(this);
    };

    // Assign a singleton instance to `mixitup.features` and initialise:

    mixitup.features = new mixitup.Features();

    mixitup.features.init();

    /**
     * A group of properties defining the mixer's animation and effects settings.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        animation
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigAnimation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
         * If `false`, all operations will occur instantly and syncronously, although callback
         * functions and any returned promises will still be fulfilled.
         *
         * @example <caption>Example: Create a mixer with all animations disabled</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         enable: false
         *     }
         * });
         *
         * @name        enable
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A string of one or more space-seperated properties to which transitions will be
         * applied for all filtering animations.
         *
         * Properties can be listed any order or combination, although they will be applied in a specific
         * predefined order to produce consistent results.
         *
         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
         *
         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
         * // As targets are filtered in and out, they will fade between
         * // opacity 1 and 0 and transform between translateZ(-100px) and
         * // translateZ(0).
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateZ(-100px)'
         *     }
         * });
         *
         * @name        effects
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'fade scale'
         */

        this.effects = 'fade scale';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-in
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsIn: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsIn
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsIn = '';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-out
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsOut: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsOut = '';

        /**
         * An integer dictating the duration of all MixItUp animations in milliseconds, not
         * including any additional delay apllied via the `'stagger'` effect.
         *
         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         duration: 200
         *     }
         * });
         *
         * @name        duration
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     600
         */

        this.duration = 600;

        /**
         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
         *
         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'ease-in-out'
         *     }
         * });
         *
         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
         *     }
         * });
         *
         * @name        easing
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'ease'
         */

        this.easing = 'ease';

        /**
         * A boolean dictating whether or not to apply perspective to the MixItUp container
         * during animations. By default, perspective is always applied and creates the
         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
         * and `rotateY`.
         *
         * You may wish to disable this and define your own perspective settings via CSS.
         *
         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         applyPerspective: false
         *     }
         * });
         *
         * @name        applyPerspective
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {bolean}
         * @default     true
         */

        this.applyPerspective = true;

        /**
         * The perspective distance value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective distance of 2000px</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'rotateY(-25deg)',
         *         perspectiveDistance: '2000px'
         *     }
         * });
         *
         * @name        perspectiveDistance
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '3000px'
         */

        this.perspectiveDistance = '3000px';

        /**
         * The perspective-origin value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'transateZ(-200px)',
         *         perspectiveOrigin: '100% 0'
         *     }
         * });
         *
         * @name        perspectiveOrigin
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '50% 50%'
         */

        this.perspectiveOrigin = '50% 50%';

        /**
         * A boolean dictating whether or not to enable the queuing of operations.
         *
         * If `true` (default), and a control is clicked or an API call is made while another
         * operation is progress, the operation will go into the queue and will be automatically exectuted
         * when the previous operaitons is finished.
         *
         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
         *
         * @example <caption>Example: Disable queuing</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queue: false
         *     }
         * });
         *
         * @name        queue
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.queue = true;

        /**
         * An integer dictacting the maximum number of operations allowed in the queue at
         * any time, when queuing is enabled.
         *
         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queueLimit: 5
         *     }
         * });
         *
         * @name        queueLimit
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     3
         */

        this.queueLimit = 3;

        /**
         * A boolean dictating whether or not to transition the height and width of the
         * container as elements are filtered in and out. If disabled, the container height
         * will change abruptly.
         *
         * It may be desirable to disable this on mobile devices as the CSS `height` and
         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
         *
         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
         *     }
         * });
         *
         * @name        animateResizeContainer
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.animateResizeContainer = true;

        /**
         * A boolean dictating whether or not to transition the height and width of target
         * elements as they change throughout the course of an animation.
         *
         * This is often a must for flex-box grid layouts where the size of target elements may change
         * depending on final their position in relation to their siblings, or for `.changeLayout()`
         * operations where the size of targets change between layouts.
         *
         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
         * properties which may adversely affect performance on slower devices, and is therefore
         * disabled by default.
         *
         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeTargets: true
         *     }
         * });
         *
         * @name        animateResizeTargets
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.animateResizeTargets = false;

        /**
         * A custom function used to manipulate the order in which the stagger delay is
         * incremented when using the ‘stagger’ effect.
         *
         * When using the 'stagger' effect, the delay applied to each target element is incremented
         * based on its index. You may create a custom function to manipulate the order in which the
         * delay is incremented and create engaging non-linear stagger effects.
         *
         * The function receives the index of the target element as a parameter, and must
         * return an integer which serves as the multiplier for the stagger delay.
         *
         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return i % 3;
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
         *         }
         *     }
         * });
         *
         * @name        staggerSequence
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {function}
         * @default     null
         */

        this.staggerSequence = null;

        /**
         * A boolean dictating whether or not to reverse the direction of `translate`
         * and `rotate` transforms for elements being filtered out.
         *
         * It can be used to create carousel-like animations where elements enter and exit
         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
         * being filtered in would become `translateX(100%)` for targets being filtered out.
         *
         * This functionality can also be achieved by providing seperate effects
         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
         *
         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
         * // Elements being filtered in will be translated from '100%' to '0' while
         * // elements being filtered out will be translated from 0 to '-100%'
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateX(100%)',
         *         reverseOut: true,
         *         nudge: false // Disable nudging to create a carousel-like effect
         *     }
         * });
         *
         * @name        reverseOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.reverseOut = false;

        /**
         * A boolean dictating whether or not to "nudge" the animation path of targets
         * when they are being filtered in and out simulatenously.
         *
         * This has been the default behavior of MixItUp since version 1, but it
         * may be desirable to disable this effect when filtering directly from
         * one exclusive set of targets to a different exclusive set of targets,
         * to create a carousel-like effect, or a generally more subtle animation.
         *
         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         nudge: false
         *     }
         * });
         *
         * @name        nudge
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.nudge = true;

        /**
         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * height of the container might affect its vertical positioning in the viewport
         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container height-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampHeight: false
         *     }
         * });
         *
         * @name        clampHeight
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampHeight = true;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigAnimation);

    mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;

    /**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * Each function is analogous to an event of the same name triggered from the
     * container element, and is invoked immediately after it.
     *
     * All callback functions receive the current `state` object as their first
     * argument, as well as other more specific arguments described below.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigCallbacks = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A callback function invoked immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * A second `futureState` argument is passed to the function which represents the final
         * state of the mixer once the requested operation has completed.
         *
         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixStart: function(state, futureState) {
         *              console.log('Starting operation...');
         *         }
         *     }
         * });
         *
         * @name        onMixStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixStart = null;

        /**
         * A callback function invoked when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixBusy: function(state) {
         *              console.log('Mixer busy');
         *         }
         *     }
         * });
         *
         * @name        onMixBusy
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixBusy  = null;

        /**
         * A callback function invoked after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: function(state) {
         *              console.log('Operation complete');
         *         }
         *     }
         * });
         *
         * @name        onMixEnd
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixEnd   = null;

        /**
         * A callback function invoked whenever an operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixFail: function(state) {
         *              console.log('No items could be found matching the requested filter');
         *         }
         *     }
         * });
         *
         * @name        onMixFail
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixFail  = null;

        /**
         * A callback function invoked whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * The clicked element is assigned to the `this` keyword within the function. The original
         * click event is passed to the function as the second argument, which can be useful if
         * using `<a>` tags as controls where the default behavior needs to be prevented.
         *
         * Returning `false` from the callback will prevent the control click from triggering
         * an operation.
         *
         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              console.log('The control "' + this.innerText + '" was clicked');
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Prevent original click event from bubbling up:
         *              originalEvent.stopPropagation();
         *
         *              // Prevent default behavior of clicked element:
         *              originalEvent.preventDefault();
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Perform some conditional check:
         *
         *              if (myApp.isLoading) {
         *                  // By returning false, we can prevent the control click from triggering an operation.
         *
         *                  return false;
         *              }
         *         }
         *     }
         * });
         *
         * @name        onMixClick
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigCallbacks);

    mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;

    /**
     * A group of properties relating to clickable control elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        controls
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigControls = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not controls should be enabled for the mixer instance.
         *
         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
         *
         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
         * via the mixer's API methods.
         *
         * If you do not intend to use the default controls, setting this property to `false` will
         * marginally improve the startup time of your mixer instance, and will also prevent any other active
         * mixer instances in the DOM which are bound to controls from controlling the instance.
         *
         * @example <caption>Example: Disabling controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         enable: false
         *     }
         * });
         *
         * // With the default controls disabled, we can only control
         * // the mixer via its API methods, e.g.:
         *
         * mixer.filter('.cat-1');
         *
         * @name        enable
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A boolean dictating whether or not to use event delegation when binding click events
         * to the default controls.
         *
         * If `false` (default behavior), each control button in the DOM will be found and
         * individually bound when a mixer is instantiated, with their corresponding actions
         * cached for performance.
         *
         * If `true`, a single click handler will be applied to the `window` (or container element - see
         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
         *
         * If you require a user interface where control buttons may be added, removed, or changed during the
         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
         * performance deficit when using live controls, as the value of each control button must be read
         * from the DOM in real time once the click event has propagated.
         *
         * @example <caption>Example: Setting live controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         live: true
         *     }
         * });
         *
         * // Control buttons can now be added, remove and changed without breaking
         * // the mixer's UI
         *
         * @name        live
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.live = false;

        /**
         * A string dictating the "scope" to use when binding or querying the default controls. The available
         * values are `'global'` or `'local'`.
         *
         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
         * to bind, or delegate click events from (see `config.controls.live`).
         *
         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
         * This may be desireable if you require multiple active mixer instances within the same document, with
         * controls that would otherwise intefere with each other if scoped globally.
         *
         * Conversely, if you wish to control multiple instances with a single UI, you would create one
         * set of controls and keep the controls scope of each mixer set to `global`.
         *
         * @example <caption>Example: Setting 'local' scoped controls</caption>
         * var mixerOne = mixitup(containerOne, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * var mixerTwo = mixitup(containerTwo, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * // Both mixers can now exist within the same document with
         * // isolated controls placed within their container elements.
         *
         * @name        scope
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'global'
         */

        this.scope = 'global'; // enum: ['local' ,'global']

        /**
         * A string dictating the type of logic to apply when concatenating the filter selectors of
         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
         *
         * If set to `'or'` (default behavior), selectors will be concatenated together as
         * a comma-seperated list. For example:
         *
         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
         *
         * If set to `'and'`, selectors will be directly concatenated together. For example:
         *
         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
         *
         * @example <caption>Example: Setting "and" toggle logic</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleLogic: 'and'
         *     }
         * });
         *
         * @name        toggleLogic
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'or'
         */

        this.toggleLogic = 'or'; // enum: ['or', 'and']

        /**
         * A string dictating the filter behavior when all toggles are inactive.
         *
         * When set to `'all'` (default behavior), *all* targets will be shown by default
         * when no toggles are active, or at the moment all active toggles are toggled off.
         *
         * When set to `'none'`, no targets will be shown by default when no toggles are
         * active, or at the moment all active toggles are toggled off.
         *
         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'all'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'all'
         *          console.log(state.totalShow); // 12
         *     });
         *
         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'none'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'none'
         *          console.log(state.totalShow); // 0
         *     });
         *
         * @name        toggleDefault
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.toggleDefault = 'all'; // enum: ['all', 'none']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigControls);

    mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;

    /**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * Most commonly, class names are added to controls by MixItUp to indicate that
     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
     *
     * Using a "BEM" like structure, each classname is broken into the three parts:
     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
     * name (e.g. `'active'`) reflecting the state of the element.
     *
     * By default, each part of the classname is concatenated together using single hyphens as
     * delineators, but this can be easily customised to match the naming convention and style of
     * your project.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
         *
         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio'
         *     }
         * });
         *
         * // Active control output: "portfolio-control-active"
         *
         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: ''
         *     }
         * });
         *
         * // Active control output: "control-active"
         *
         * @name        block
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'mixitup'
         */

        this.block = 'mixitup';

        /**
         * The "element" portion of the class name added to container.
         *
         * @name        elementContainer
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'container'
         */

        this.elementContainer = 'container';

        /**
         * The "element" portion of the class name added to filter controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "mixitup-filter-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "portfolio-filter-active"
         *
         * @name        elementFilter
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementFilter = 'control';

        /**
         * The "element" portion of the class name added to sort controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "mixitup-sort-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "portfolio-sort-active"
         *
         * @name        elementSort
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementSort = 'control';

        /**
         * The "element" portion of the class name added to multimix controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementMultimix: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "mixitup-multimix-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "portfolio-multimix-active"
         *
         * @name        elementMultimix
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementMultimix = 'control';

        /**
         * The "element" portion of the class name added to toggle controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "mixitup-toggle-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "portfolio-toggle-active"
         *
         * @name        elementToggle
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementToggle = 'control';

        /**
         * The "modifier" portion of the class name added to active controls.
         * @name        modifierActive
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'active'
         */

        this.modifierActive = 'active';

        /**
         * The "modifier" portion of the class name added to disabled controls.
         *
         * @name        modifierDisabled
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'disabled'
         */

        this.modifierDisabled = 'disabled';

        /**
         * The "modifier" portion of the class name added to the container when in a "failed" state.
         *
         * @name        modifierFailed
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'failed'
         */

        this.modifierFailed = 'failed';

        /**
         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
         *
         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing the delineator to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *     }
         * });
         *
         * // example active control output: "mixitup__control-active"
         *
         * @name        delineatorElement
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorElement = '-';

        /**
         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
         *
         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing both delineators to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *         delineatorModifier: '--'
         *     }
         * });
         *
         * // Active control output: "mixitup__control--active"
         *
         * @name        delineatorModifier
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorModifier = '-';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigClassNames);

    mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;

    /**
     * A group of properties relating to MixItUp's dataset API.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        data
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string specifying the name of the key containing your data model's unique
         * identifier (UID). To use the dataset API, a UID key must be specified and
         * be present and unique on all objects in the dataset you provide to MixItUp.
         *
         * For example, if your dataset is made up of MongoDB documents, the UID
         * key would be `'id'` or `'_id'`.
         *
         * @example <caption>Example: Setting the UID to `'id'`</caption>
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     }
         * });
         *
         * @name        uidKey
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.uidKey = '';

        /**
         * A boolean dictating whether or not MixItUp should "dirty check" each object in
         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
         * for which a change is found.
         *
         * Depending on the complexity of your data model, dirty checking can be expensive
         * and is therefore disabled by default.
         *
         * NB: For changes to be detected, a new immutable instance of the edited model must be
         * provided to mixitup, rather than manipulating properties on the existing instance.
         * If your changes are a result of a DB write and read, you will most likely be calling
         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
         *
         * @example <caption>Example: Enabling dirty checking</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0"
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1"
         *         ...
         *     }
         * ];
         *
         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
         * // function defined
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id',
         *         dirtyCheck: true
         *     },
         *     load: {
         *         dataset: myDataset
         *     },
         *     render: {
         *         target: function() { ... }
         *     }
         * });
         *
         * // For illustration, we will clone and edit the second object in the dataset.
         * // NB: this would typically be done server-side in response to a DB update,
         * and then re-queried via an API.
         *
         * myDataset[1] = Object.assign({}, myDataset[1]);
         *
         * myDataset[1].title = 'Blog Post Title 11';
         *
         * mixer.dataset(myDataset)
         *    .then(function() {
         *        // the target with ID "1", will be re-rendered reflecting its new title
         *    });
         *
         * @name        dirtyCheck
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.dirtyCheck = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigData);

    mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;

    /**
     * A group of properties allowing the toggling of various debug features.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        debug
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigDebug = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not the mixer instance returned by the
         * `mixitup()` factory function should expose private properties and methods.
         *
         * By default, mixer instances only expose their public API, but enabling
         * debug mode will give you access to various mixer internals which may aid
         * in debugging, or the authoring of extensions.
         *
         * @example <caption>Example: Enabling debug mode</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         enable: true
         *     }
         * });
         *
         * // Private properties and methods will now be visible on the mixer instance:
         *
         * console.log(mixer);
         *
         * @name        enable
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.enable = false;

        /**
         * A boolean dictating whether or not warnings should be shown when various
         * common gotchas occur.
         *
         * Warnings are intended to provide insights during development when something
         * occurs that is not a fatal, but may indicate an issue with your integration,
         * and are therefore turned on by default. However, you may wish to disable
         * them in production.
         *
         * @example <caption>Example 1: Disabling warnings</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disabling warnings based on environment</caption>
         *
         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: showWarnings
         *     }
         * });
         *
         * @name        showWarnings
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.showWarnings = true;

        /**
         * Used for server-side testing only.
         *
         * @private
         * @name        fauxAsync
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.fauxAsync = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigDebug);

    mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;

    /**
     * A group of properties relating to the layout of the container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        layout
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not mixitup should query all descendants
         * of the container for targets, or only immediate children.
         *
         * By default, mixitup will query all descendants matching the
         * `selectors.target` selector when indexing targets upon instantiation.
         * This allows for targets to be nested inside a sub-container which is
         * useful when ring-fencing targets from locally scoped controls in your
         * markup (see `controls.scope`).
         *
         * However, if you are building a more complex UI requiring the nesting
         * of mixers within mixers, you will most likely want to limit targets to
         * immediate children of the container by setting this property to `false`.
         *
         * @example <caption>Example: Restricting targets to immediate children</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         allowNestedTargets: false
         *     }
         * });
         *
         * @name        allowNestedTargets
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.allowNestedTargets = true;

        /**
         * A string specifying an optional class name to apply to the container when in
         * its default state.
         *
         * By changing this class name or adding a class name to the container via the
         * `.changeLayout()` API method, the CSS layout of the container can be changed,
         * and MixItUp will attemp to gracefully animate the container and its targets
         * between states.
         *
         * @example <caption>Example 1: Specifying a container class name</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * mixer.changeLayout('list')
         *     .then(function(state) {
         *          console.log(state.activeContainerClass); // "list"
         *     });
         *
         * @name        containerClassName
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.containerClassName = '';

        /**
         * A reference to a non-target sibling element after which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
         *
         * var addButton = containerEl.querySelector('button');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingBefore: addButton
         *     }
         * });
         *
         * @name        siblingBefore
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingBefore = null;

        /**
         * A reference to a non-target sibling element before which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
         *
         * var gap = containerEl.querySelector('.gap');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingAfter: gap
         *     }
         * });
         *
         * @name        siblingAfter
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingAfter = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLayout);

    mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;

    /**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigLoad = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string defining any filtering to be statically applied to the mixer on load.
         * As per the `.filter()` API, this can be any valid selector string, or the
         * values `'all'` or `'none'`.
         *
         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
         *
         * // The mixer will show only those targets matching '.category-a' on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: '.category-a'
         *     }
         * });
         *
         * @example <caption>Example 2: Hiding all targets on load</caption>
         *
         * // The mixer will show hide all targets on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: 'none'
         *     }
         * });
         *
         * @name        filter
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.filter = 'all';

        /**
         * A string defining any sorting to be statically applied to the mixer on load.
         * As per the `.sort()` API, this should be a valid "sort string" made up of
         * an attribute to sort by (or `'default'`) followed by an optional sorting
         * order, or the value `'random'`;
         *
         * @example <caption>Example: Defining sorting to be applied on load</caption>
         *
         * // The mixer will sort the container by the value of the `data-published-date`
         * // attribute, in descending order.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         sort: 'published-date:desc'
         *     }
         * });
         *
         * @name        sort
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'default:asc'
         */

        this.sort = 'default:asc';

        /**
         * An array of objects representing the underlying data of any pre-rendered targets,
         * when using the `.dataset()` API.
         *
         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
         *
         * @example <caption>Example: Defining the initial underyling dataset</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0",
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1",
         *         ...
         *     }
         * ];
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     },
         *     load: {
         *         dataset: myDataset
         *     }
         * });
         *
         * @name        dataset
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLoad);

    mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;

    /**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigSelectors = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A selector string used to query and index target elements within the container.
         *
         * By default, the class selector `'.mix'` is used, but this can be changed to an
         * attribute or element selector to match the style of your project.
         *
         * @example <caption>Example 1: Changing the target selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '.portfolio-item'
         *     }
         * });
         *
         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
         *
         * // The mixer will search for any children with the attribute `data-ref="mix"`
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '[data-ref="mix"]'
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mix'
         */

        this.target = '.mix';

        /**
         * A optional selector string used to add further specificity to the querying of control elements,
         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
         *
         * This can be used if other elements in your document must contain the above attributes
         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
         * an additional `control` selector of your choice allows MixItUp to restrict event handling
         * to only those elements matching the defined selector.
         *
         * @name        control
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     ''
         *
         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         control: '.mixitup-control'
         *     }
         * });
         *
         * // Will not be handled:
         * // <button data-filter=".category-a"></button>
         *
         * // Will be handled:
         * // <button class="mixitup-control" data-filter=".category-a"></button>
         */

        this.control = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigSelectors);

    mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;

    /**
     * A group of optional render functions for creating and updating elements.
     *
     * All render functions receive a data object, and should return a valid HTML string.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigRender = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A function returning an HTML string representing a target element, or a reference to a
         * single DOM element.
         *
         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
         *
         * The function receives the relevant dataset item as its first parameter.
         *
         * @example <caption>Example 1: Using string concatenation</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 '&lt;div class="mix"&gt;' +
         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
         *                 '&lt;/div&gt;'
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an ES2015 template literal</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 `&lt;div class="mix"&gt;
         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
         *                  &lt;/div&gt;`
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using a Handlebars template</caption>
         *
         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: targetTemplate
         *     }
         * });
         *
         * @example <caption>Example 4: Returning a DOM element</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *              // Create a single element using your framework's built-in renderer
         *
         *              var el = ...
         *
         *              return el;
         *         }
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */

        this.target = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigRender);

    mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.ConfigTemplates = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigTemplates);

    mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;

    /**
     * `mixitup.Config` is an interface used for customising the functionality of a
     * mixer instance. It is organised into several semantically distinct sub-objects,
     * each one pertaining to a particular aspect of MixItUp functionality.
     *
     * An object literal containing any or all of the available properies,
     * known as the "configuration object", can be passed as the second parameter to
     * the `mixitup` factory function when creating a mixer instance to customise its
     * functionality as needed.
     *
     * If no configuration object is passed, the mixer instance will take on the default
     * configuration values detailed below.
     *
     * @example <caption>Example 1: Creating and passing the configuration object</caption>
     * // Create a configuration object with desired values
     *
     * var config = {
     *     animation: {
     *         enable: false
     *     },
     *     selectors: {
     *         target: '.item'
     *     }
     * };
     *
     * // Pass the configuration object to the mixitup factory function
     *
     * var mixer = mixitup(containerEl, config);
     *
     * @example <caption>Example 2: Passing the configuration object inline</caption>
     * // Typically, the configuration object is passed inline for brevity.
     *
     * var mixer = mixitup(containerEl, {
     *     controls: {
     *         live: true,
     *         toggleLogic: 'and'
     *     }
     * });
     *
     *
     * @constructor
     * @memberof    mixitup
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.Config = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.animation          = new mixitup.ConfigAnimation();
        this.callbacks          = new mixitup.ConfigCallbacks();
        this.controls           = new mixitup.ConfigControls();
        this.classNames         = new mixitup.ConfigClassNames();
        this.data               = new mixitup.ConfigData();
        this.debug              = new mixitup.ConfigDebug();
        this.layout             = new mixitup.ConfigLayout();
        this.load               = new mixitup.ConfigLoad();
        this.selectors          = new mixitup.ConfigSelectors();
        this.render             = new mixitup.ConfigRender();
        this.templates          = new mixitup.ConfigTemplates();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Config);

    mixitup.Config.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Config.prototype.constructor = mixitup.Config;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.MixerDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.document               = null;
        this.body                   = null;
        this.container              = null;
        this.parent                 = null;
        this.targets                = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.MixerDom);

    mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UiClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.base       = '';
        this.active     = '';
        this.disabled   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UiClassNames);

    mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;

    /**
     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandDataset = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandDataset);

    mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;

    /**
     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandMultimix = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.filter       = null;
        this.sort         = null;
        this.insert       = null;
        this.remove       = null;
        this.changeLayout = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandMultimix);

    mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;

    /**
     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandFilter = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.selector   = '';
        this.collection = null;
        this.action     = 'show'; // enum: ['show', 'hide']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandFilter);

    mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;

    /**
     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandSort = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.sortString = '';
        this.attribute  = '';
        this.order      = 'asc';
        this.collection = null;
        this.next       = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandSort);

    mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;

    /**
     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandInsert = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.index      = 0;
        this.collection = [];
        this.position   = 'before'; // enum: ['before', 'after']
        this.sibling    = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandInsert);

    mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;

    /**
     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandRemove = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.targets    = [];
        this.collection = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandRemove);

    mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;

    /**
     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandChangeLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.containerClassName = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandChangeLayout);

    mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {string}        type
     * @param       {string}        selector
     * @param       {boolean}       [live]
     * @param       {string}        [parent]
     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
     */

    mixitup.ControlDefinition = function(type, selector, live, parent) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.type    = type;
        this.selector  = selector;
        this.live      = live || false;
        this.parent    = parent || '';

        this.callActions('afterConstruct');

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ControlDefinition);

    mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;

    mixitup.controlDefinitions = [];

    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('filter', '[data-filter]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('sort', '[data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('toggle', '[data-toggle]'));

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Control = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el         = null;
        this.selector   = '';
        this.bound      = [];
        this.pending    = -1;
        this.type       = '';
        this.status     = 'inactive'; // enum: ['inactive', 'active', 'disabled', 'live']
        this.filter     = '';
        this.sort       = '';
        this.canDisable = false;
        this.handler    = null;
        this.classNames = new mixitup.UiClassNames();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Control);

    mixitup.Control.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Control.prototype,
    /** @lends mixitup.Control */
    {
        constructor: mixitup.Control,

        /**
         * @private
         * @param {HTMLElement} el
         * @param {string}      type
         * @param {string}      selector
         */

        init: function(el, type, selector) {
            var self = this;

            this.callActions('beforeInit', arguments);

            self.el         = el;
            self.type       = type;
            self.selector   = selector;

            if (self.selector) {
                self.status = 'live';
            } else {
                self.canDisable = typeof self.el.disable === 'boolean';

                switch (self.type) {
                    case 'filter':
                        self.filter = self.el.getAttribute('data-filter');

                        break;
                    case 'toggle':
                        self.filter = self.el.getAttribute('data-toggle');

                        break;
                    case 'sort':
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        self.filter = self.el.getAttribute('data-filter');
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                }
            }

            self.bindClick();

            mixitup.controls.push(self);

            this.callActions('afterInit', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {boolean}
         */

        isBound: function(mixer) {
            var self    = this,
                isBound = false;

            this.callActions('beforeIsBound', arguments);

            isBound = self.bound.indexOf(mixer) > -1;

            return self.callFilters('afterIsBound', isBound, arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        addBinding: function(mixer) {
            var self = this;

            this.callActions('beforeAddBinding', arguments);

            if (!self.isBound()) {
                self.bound.push(mixer);
            }

            this.callActions('afterAddBinding', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        removeBinding: function(mixer) {
            var self        = this,
                removeIndex = -1;

            this.callActions('beforeRemoveBinding', arguments);

            if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
                self.bound.splice(removeIndex, 1);
            }

            if (self.bound.length < 1) {
                // No bindings exist, unbind event click handlers

                self.unbindClick();

                // Remove from `mixitup.controls` list

                removeIndex = mixitup.controls.indexOf(self);

                mixitup.controls.splice(removeIndex, 1);

                if (self.status === 'active') {
                    self.renderStatus(self.el, 'inactive');
                }
            }

            this.callActions('afterRemoveBinding', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        bindClick: function() {
            var self = this;

            this.callActions('beforeBindClick', arguments);

            self.handler = function(e) {
                self.handleClick(e);
            };

            h.on(self.el, 'click', self.handler);

            this.callActions('afterBindClick', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        unbindClick: function() {
            var self = this;

            this.callActions('beforeUnbindClick', arguments);

            h.off(self.el, 'click', self.handler);

            self.handler = null;

            this.callActions('afterUnbindClick', arguments);
        },

        /**
         * @private
         * @param   {MouseEvent} e
         * @return  {void}
         */

        handleClick: function(e) {
            var self        = this,
                button      = null,
                mixer       = null,
                isActive    = false,
                returnValue = void(0),
                command     = {},
                clone       = null,
                commands    = [],
                i           = -1;

            this.callActions('beforeHandleClick', arguments);

            this.pending = 0;

            mixer = self.bound[0];

            if (!self.selector) {
                button = self.el;
            } else {
                button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
            }

            if (!button) {
                self.callActions('afterHandleClick', arguments);

                return;
            }

            switch (self.type) {
                case 'filter':
                    command.filter = self.filter || button.getAttribute('data-filter');

                    break;
                case 'sort':
                    command.sort = self.sort || button.getAttribute('data-sort');

                    break;
                case 'multimix':
                    command.filter  = self.filter || button.getAttribute('data-filter');
                    command.sort    = self.sort || button.getAttribute('data-sort');

                    break;
                case 'toggle':
                    command.filter  = self.filter || button.getAttribute('data-toggle');

                    if (self.status === 'live') {
                        isActive = h.hasClass(button, self.classNames.active);
                    } else {
                        isActive = self.status === 'active';
                    }

                    break;
            }

            for (i = 0; i < self.bound.length; i++) {
                // Create a clone of the command for each bound mixer instance

                clone = new mixitup.CommandMultimix();

                h.extend(clone, command);

                commands.push(clone);
            }

            commands = self.callFilters('commandsHandleClick', commands, arguments);

            self.pending = self.bound.length;

            for (i = 0; mixer = self.bound[i]; i++) {
                command = commands[i];

                if (!command) {
                    // An extension may set a command null to indicate that the click should not be handled

                    continue;
                }

                if (!mixer.lastClicked) {
                    mixer.lastClicked = button;
                }

                mixitup.events.fire('mixClick', mixer.dom.container, {
                    state: mixer.state,
                    instance: mixer,
                    originalEvent: e,
                    control: mixer.lastClicked
                }, mixer.dom.document);

                if (typeof mixer.config.callbacks.onMixClick === 'function') {
                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);

                    if (returnValue === false) {
                        // User has returned `false` from the callback, so do not handle click

                        continue;
                    }
                }

                if (self.type === 'toggle') {
                    isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
                } else {
                    mixer.multimix(command);
                }
            }

            this.callActions('afterHandleClick', arguments);
        },

        /**
         * @param   {object}          command
         * @param   {Array<string>}   toggleArray
         * @return  {void}
         */

        update: function(command, toggleArray) {
            var self    = this,
                actions = new mixitup.CommandMultimix();

            self.callActions('beforeUpdate', arguments);

            self.pending--;

            self.pending = Math.max(0, self.pending);

            if (self.pending > 0) return;

            if (self.status === 'live') {
                // Live control (status unknown)

                self.updateLive(command, toggleArray);
            } else {
                // Static control

                actions.sort    = self.sort;
                actions.filter  = self.filter;

                self.callFilters('actionsUpdate', actions, arguments);

                self.parseStatusChange(self.el, command, actions, toggleArray);
            }

            self.callActions('afterUpdate', arguments);
        },

        /**
         * @param   {mixitup.CommandMultimix} command
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        updateLive: function(command, toggleArray) {
            var self            = this,
                controlButtons  = null,
                actions         = null,
                button          = null,
                i               = -1;

            self.callActions('beforeUpdateLive', arguments);

            if (!self.el) return;

            controlButtons = self.el.querySelectorAll(self.selector);

            for (i = 0; button = controlButtons[i]; i++) {
                actions = new mixitup.CommandMultimix();

                switch (self.type) {
                    case 'filter':
                        actions.filter = button.getAttribute('data-filter');

                        break;
                    case 'sort':
                        actions.sort = button.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        actions.filter  = button.getAttribute('data-filter');
                        actions.sort    = button.getAttribute('data-sort');

                        break;
                    case 'toggle':
                        actions.filter  = button.getAttribute('data-toggle');

                        break;
                }

                actions = self.callFilters('actionsUpdateLive', actions, arguments);

                self.parseStatusChange(button, command, actions, toggleArray);
            }

            self.callActions('afterUpdateLive', arguments);
        },

        /**
         * @param   {HTMLElement}             button
         * @param   {mixitup.CommandMultimix} command
         * @param   {mixitup.CommandMultimix} actions
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        parseStatusChange: function(button, command, actions, toggleArray) {
            var self    = this,
                alias   = '',
                toggle  = '',
                i       = -1;

            self.callActions('beforeParseStatusChange', arguments);

            switch (self.type) {
                case 'filter':
                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'multimix':
                    if (command.sort === actions.sort && command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'sort':
                    if (command.sort.match(/:asc/g)) {
                        alias = command.sort.replace(/:asc/g, '');
                    }

                    if (command.sort === actions.sort || alias === actions.sort) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'toggle':
                    if (toggleArray.length < 1) self.renderStatus(button, 'inactive');

                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    }

                    for (i = 0; i < toggleArray.length; i++) {
                        toggle = toggleArray[i];

                        if (toggle === actions.filter) {
                            // Button matches one active toggle

                            self.renderStatus(button, 'active');

                            break;
                        }

                        self.renderStatus(button, 'inactive');
                    }

                    break;
            }

            self.callActions('afterParseStatusChange', arguments);
        },

        /**
         * @param   {HTMLElement}   button
         * @param   {string}        status
         * @return  {void}
         */

        renderStatus: function(button, status) {
            var self = this;

            self.callActions('beforeRenderStatus', arguments);

            switch (status) {
                case 'active':
                    h.addClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'inactive':
                    h.removeClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'disabled':
                    if (self.canDisable) self.el.disabled = true;

                    h.addClass(button, self.classNames.disabled);
                    h.removeClass(button, self.classNames.active);

                    break;
            }

            if (self.status !== 'live') {
                // Update the control's status propery if not live

                self.status = status;
            }

            self.callActions('afterRenderStatus', arguments);
        }
    });

    mixitup.controls = [];

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.StyleData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.x              = 0;
        this.y              = 0;
        this.top            = 0;
        this.right          = 0;
        this.bottom         = 0;
        this.left           = 0;
        this.width          = 0;
        this.height         = 0;
        this.marginRight    = 0;
        this.marginBottom   = 0;
        this.opacity        = 0;
        this.scale          = new mixitup.TransformData();
        this.translateX     = new mixitup.TransformData();
        this.translateY     = new mixitup.TransformData();
        this.translateZ     = new mixitup.TransformData();
        this.rotateX        = new mixitup.TransformData();
        this.rotateY        = new mixitup.TransformData();
        this.rotateZ        = new mixitup.TransformData();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.StyleData);

    mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.StyleData.prototype.constructor = mixitup.StyleData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.value  = 0;
        this.unit   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformData);

    mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TransformData.prototype.constructor = mixitup.TransformData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformDefaults = function() {
        mixitup.StyleData.apply(this);

        this.callActions('beforeConstruct');

        this.scale.value        = 0.01;
        this.scale.unit         = '';

        this.translateX.value   = 20;
        this.translateX.unit    = 'px';

        this.translateY.value   = 20;
        this.translateY.unit    = 'px';

        this.translateZ.value   = 20;
        this.translateZ.unit    = 'px';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateY.value      = 90;
        this.rotateY.unit       = 'deg';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateZ.value      = 180;
        this.rotateZ.unit       = 'deg';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformDefaults);

    mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);

    mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;

    /**
     * @private
     * @static
     * @since   3.0.0
     * @type    {mixitup.TransformDefaults}
     */

    mixitup.transformDefaults = new mixitup.TransformDefaults();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.EventDetail = function() {
        this.state          = null;
        this.futureState    = null;
        this.instance       = null;
        this.originalEvent  = null;
    };

    /**
     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
     * points within the lifecycle of a mixer operation.
     *
     * Each event is analogous to the callback function of the same name defined in
     * the `callbacks` configuration object, and is triggered immediately before it.
     *
     * Events are always triggered from the container element on which MixItUp is instantiated
     * upon.
     *
     * As with any event, registered event handlers receive the event object as a parameter
     * which includes a `detail` property containting references to the current `state`,
     * the `mixer` instance, and other event-specific properties described below.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Events = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A custom event triggered immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * The `mixStart` event also exposes a `futureState` property via the
         * `event.detail` object, which represents the final state of the mixer once
         * the requested operation has completed.
         *
         * @name        mixStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixStart = null;

        /**
         * A custom event triggered when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @name        mixBusy
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixBusy = null;

        /**
         * A custom event triggered after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @name        mixEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixEnd = null;

        /**
         * A custom event triggered whenever a filter operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @name        mixFail
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixFail = null;

        /**
         * A custom event triggered whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * This event also exposes an `originalEvent` property via the `event.detail`
         * object, which holds a reference to the original click event.
         *
         * @name        mixClick
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Events);

    mixitup.Events.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Events.prototype.constructor = mixitup.Events;

    /**
     * @private
     * @param   {string}      eventType
     * @param   {Element}     el
     * @param   {object}      detail
     * @param   {Document}    [doc]
     */

    mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
        var self        = this,
            event       = null,
            eventDetail = new mixitup.EventDetail();

        self.callActions('beforeFire', arguments);

        if (typeof self[eventType] === 'undefined') {
            throw new Error('Event type "' + eventType + '" not found.');
        }

        eventDetail.state = new mixitup.State();

        h.extend(eventDetail.state, detail.state);

        if (detail.futureState) {
            eventDetail.futureState = new mixitup.State();

            h.extend(eventDetail.futureState, detail.futureState);
        }

        eventDetail.instance = detail.instance;

        if (detail.originalEvent) {
            eventDetail.originalEvent = detail.originalEvent;
        }

        event = h.getCustomEvent(eventType, eventDetail, doc);

        self.callFilters('eventFire', event, arguments);

        el.dispatchEvent(event);
    };

    // Asign a singleton instance to `mixitup.events`:

    mixitup.events = new mixitup.Events();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.QueueItem = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.args           = [];
        this.instruction    = null;
        this.triggerElement = null;
        this.deferred       = null;
        this.isToggling     = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.QueueItem);

    mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);

    mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;

    /**
     * The `mixitup.Mixer` class is used to hold discreet, user-configured
     * instances of MixItUp on a provided container element.
     *
     * Mixer instances are returned whenever the `mixitup()` factory function is called,
     * which expose a range of methods enabling API-based filtering, sorting,
     * insertion, removal and more.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Mixer = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.config            = new mixitup.Config();

        this.id                = '';

        this.isBusy            = false;
        this.isToggling        = false;
        this.incPadding        = true;

        this.controls          = [];
        this.targets           = [];
        this.origOrder         = [];
        this.cache             = {};

        this.toggleArray       = [];

        this.targetsMoved      = 0;
        this.targetsImmovable  = 0;
        this.targetsBound      = 0;
        this.targetsDone       = 0;

        this.staggerDuration   = 0;
        this.effectsIn         = null;
        this.effectsOut        = null;
        this.transformIn       = [];
        this.transformOut      = [];
        this.queue             = [];

        this.state             = null;
        this.lastOperation     = null;
        this.lastClicked       = null;
        this.userCallback      = null;
        this.userDeferred      = null;

        this.dom               = new mixitup.MixerDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Mixer);

    mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Mixer.prototype,
    /** @lends mixitup.Mixer */
    {
        constructor: mixitup.Mixer,

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @param {HTMLElement} container
         * @param {HTMLElement} document
         * @param {string}      id
         * @param {object}      [config]
         */

        attach: function(container, document, id, config) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeAttach', arguments);

            self.id = id;

            if (config) {
                h.extend(self.config, config, true, true);
            }

            self.sanitizeConfig();

            self.cacheDom(container, document);

            if (self.config.layout.containerClassName) {
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            if (!mixitup.features.has.transitions) {
                self.config.animation.enable = false;
            }

            if (typeof window.console === 'undefined') {
                self.config.debug.showWarnings = false;
            }

            if (self.config.data.uidKey) {
                // If the dataset API is in use, force disable controls

                self.config.controls.enable = false;
            }

            self.indexTargets();

            self.state = self.getInitialState();

            for (i = 0; target = self.lastOperation.toHide[i]; i++) {
                target.hide();
            }

            if (self.config.controls.enable) {
                self.initControls();

                self.updateControls({
                    filter: self.state.activeFilter,
                    sort: self.state.activeSort
                });

                self.buildToggleArray(null, self.state);
            }

            self.parseEffects();

            self.callActions('afterAttach', arguments);
        },

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @return {void}
         */

        sanitizeConfig: function() {
            var self = this;

            self.callActions('beforeSanitizeConfig', arguments);

            // Sanitize enum/string config options

            self.config.controls.scope          = self.config.controls.scope.toLowerCase().trim();
            self.config.controls.toggleLogic    = self.config.controls.toggleLogic.toLowerCase().trim();
            self.config.controls.toggleDefault  = self.config.controls.toggleDefault.toLowerCase().trim();

            self.config.animation.effects       = self.config.animation.effects.trim();

            self.callActions('afterSanitizeConfig', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {mixitup.State}
         */

        getInitialState: function() {
            var self        = this,
                state       = new mixitup.State(),
                operation   = new mixitup.Operation();

            self.callActions('beforeGetInitialState', arguments);

            // Map initial values into a mock state object in order to construct an operation

            state.activeContainerClassName = self.config.layout.containerClassName;

            if (self.config.load.dataset) {
                // Dataset API

                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
                    throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                }

                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                operation.show = self.targets.slice();

                state = self.callFilters('stateGetInitialState', state, arguments);
            } else {
                // DOM API

                state.activeFilter              = self.parseFilterArgs([self.config.load.filter]).command;
                state.activeSort                = self.parseSortArgs([self.config.load.sort]).command;
                state.totalTargets              = self.targets.length;

                state = self.callFilters('stateGetInitialState', state, arguments);

                if (
                    state.activeSort.collection || state.activeSort.attribute ||
                    state.activeSort.order === 'random' || state.activeSort.order === 'desc'
                ) {
                    // Sorting on load

                    operation.newSort = state.activeSort;

                    self.sortOperation(operation);

                    self.printSort(false, operation);

                    self.targets = operation.newOrder;
                } else {
                    operation.startOrder = operation.newOrder = self.targets;
                }

                operation.startFilter               = operation.newFilter               = state.activeFilter;
                operation.startSort                 = operation.newSort                 = state.activeSort;
                operation.startContainerClassName   = operation.newContainerClassName   = state.activeContainerClassName;

                if (operation.newFilter.selector === 'all') {
                    operation.newFilter.selector = self.config.selectors.target;
                } else if (operation.newFilter.selector === 'none') {
                    operation.newFilter.selector = '';
                }
            }

            operation = self.callFilters('operationGetInitialState', operation, [state]);

            self.lastOperation = operation;

            if (operation.newFilter) {
                self.filterOperation(operation);
            }

            state = self.buildState(operation);

            return state;
        },

        /**
         * Caches references of DOM elements neccessary for the mixer's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   document
         * @return  {void}
         */

        cacheDom: function(el, document) {
            var self    = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.document  = document;
            self.dom.body      = self.dom.document.querySelector('body');
            self.dom.container = el;
            self.dom.parent    = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * Indexes all child elements of the mixer matching the `selectors.target`
         * selector, instantiating a mixitup.Target for each one.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        indexTargets: function() {
            var self            = this,
                target          = null,
                el              = null,
                dataset         = null,
                i               = -1;

            self.callActions('beforeIndexTargets', arguments);

            self.dom.targets = self.config.layout.allowNestedTargets ?
                self.dom.container.querySelectorAll(self.config.selectors.target) :
                h.children(self.dom.container, self.config.selectors.target, self.dom.document);

            self.dom.targets = h.arrayFromList(self.dom.targets);

            self.targets = [];

            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
                throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
            }

            if (self.dom.targets.length) {
                for (i = 0; el = self.dom.targets[i]; i++) {
                    target = new mixitup.Target();

                    target.init(el, self, dataset ? dataset[i] : void(0));

                    target.isInDom = true;

                    self.targets.push(target);
                }

                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ?
                    self.dom.container :
                    self.dom.targets[0].parentElement;
            }

            self.origOrder = self.targets;

            self.callActions('afterIndexTargets', arguments);
        },

        initControls: function() {
            var self                = this,
                definition          = '',
                controlElements     = null,
                el                  = null,
                parent              = null,
                delagators          = null,
                control             = null,
                i                   = -1,
                j                   = -1;

            self.callActions('beforeInitControls', arguments);

            switch (self.config.controls.scope) {
                case 'local':
                    parent = self.dom.container;

                    break;
                case 'global':
                    parent = self.dom.document;

                    break;
                default:
                    throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
            }

            for (i = 0; definition = mixitup.controlDefinitions[i]; i++) {
                if (self.config.controls.live || definition.live) {
                    if (definition.parent) {
                        delagators = self.dom[definition.parent];

                        if (!delagators || delagators.length < 0) continue;

                        if (typeof delagators.length !== 'number') {
                            delagators = [delagators];
                        }
                    } else {
                        delagators = [parent];
                    }

                    for (j = 0; (el = delagators[j]); j++) {
                        control = self.getControl(el,  definition.type, definition.selector);

                        self.controls.push(control);
                    }
                } else {
                    controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);

                    for (j = 0; (el = controlElements[j]); j++) {
                        control = self.getControl(el, definition.type, '');

                        if (!control) continue;

                        self.controls.push(control);
                    }
                }
            }

            self.callActions('afterInitControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement} el
         * @param   {string}      type
         * @param   {string}      selector
         * @return  {mixitup.Control|null}
         */

        getControl: function(el, type, selector) {
            var self    = this,
                control = null,
                i       = -1;

            self.callActions('beforeGetControl', arguments);

            if (!selector) {
                // Static controls only

                for (i = 0; control = mixitup.controls[i]; i++) {
                    if (control.el === el && control.isBound(self)) {
                        // Control already bound to this mixer (as another type).

                        // NB: This prevents duplicate controls from being registered where a selector
                        // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"

                        return self.callFilters('controlGetControl', null, arguments);
                    } else if (control.el === el && control.type === type && control.selector === selector) {
                        // Another mixer is already using this control, add this mixer as a binding

                        control.addBinding(self);

                        return self.callFilters('controlGetControl', control, arguments);
                    }
                }
            }

            // Create new control

            control = new mixitup.Control();

            control.init(el, type, selector);

            control.classNames.base     = h.getClassname(self.config.classNames, type);
            control.classNames.active   = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);

            // Add a reference to this mixer as a binding

            control.addBinding(self);

            return self.callFilters('controlGetControl', control, arguments);
        },

        /**
         * Creates a compound selector by joining the `toggleArray` value as per the
         * defined toggle logic.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {string}
         */

        getToggleSelector: function() {
            var self            = this,
                delineator      = self.config.controls.toggleLogic === 'or' ? ', ' : '',
                toggleSelector  = '';

            self.callActions('beforeGetToggleSelector', arguments);

            self.toggleArray = h.clean(self.toggleArray);

            toggleSelector = self.toggleArray.join(delineator);

            if (toggleSelector === '') {
                toggleSelector = self.config.controls.toggleDefault;
            }

            return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments);
        },

        /**
         * Breaks compound selector strings in an array of discreet selectors,
         * as per the active `controls.toggleLogic` configuration option. Accepts
         * either a dynamic command object, or a state object.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object}        [command]
         * @param   {mixitup.State} [state]
         * @return  {void}
         */

        buildToggleArray: function(command, state) {
            var self                    = this,
                activeFilterSelector    = '';

            self.callActions('beforeBuildToggleArray', arguments);

            if (command && command.filter) {
                activeFilterSelector = command.filter.selector.replace(/\s/g, '');
            } else if (state) {
                activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '');
            } else {
                return;
            }

            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
                activeFilterSelector = '';
            }

            if (self.config.controls.toggleLogic === 'or') {
                self.toggleArray = activeFilterSelector.split(',');
            } else {
                self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
            }

            self.toggleArray = h.clean(self.toggleArray);

            self.callActions('afterBuildToggleArray', arguments);
        },

        /**
         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
         * and breaks into its individual selectors.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string} compoundSelector
         * @return  {string[]}
         */

        splitCompoundSelector: function(compoundSelector) {
            // Break at a `.` or `[`, capturing the delineator

            var partials    = compoundSelector.split(/([\.\[])/g),
                toggleArray = [],
                selector    = '',
                i           = -1;

            if (partials[0] === '') {
                partials.shift();
            }

            for (i = 0; i < partials.length; i++) {
                if (i % 2 === 0) {
                    selector = '';
                }

                selector += partials[i];

                if (i % 2 !== 0) {
                    toggleArray.push(selector);
                }
            }

            return toggleArray;
        },

        /**
         * Updates controls to their active/inactive state based on the command or
         * current state of the mixer.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object} command
         * @return  {void}
         */

        updateControls: function(command) {
            var self    = this,
                control = null,
                output  = new mixitup.CommandMultimix(),
                i       = -1;

            self.callActions('beforeUpdateControls', arguments);

            // Sanitise to defaults

            if (command.filter) {
                output.filter = command.filter.selector;
            } else {
                output.filter = self.state.activeFilter.selector;
            }

            if (command.sort) {
                output.sort = self.buildSortString(command.sort);
            } else {
                output.sort = self.buildSortString(self.state.activeSort);
            }

            if (output.filter === self.config.selectors.target) {
                output.filter = 'all';
            }

            if (output.filter === '') {
                output.filter = 'none';
            }

            h.freeze(output);

            for (i = 0; control = self.controls[i]; i++) {
                control.update(output, self.toggleArray);
            }

            self.callActions('afterUpdateControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort}   command
         * @return  {string}
         */

        buildSortString: function(command) {
            var self    = this;
            var output  = '';

            output += command.sortString;

            if (command.next) {
                output += ' ' + self.buildSortString(command.next);
            }

            return output;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}        command
         * @param   {Operation}     operation
         * @return  {Promise.<mixitup.State>}
         */

        insertTargets: function(command, operation) {
            var self            = this,
                nextSibling     = null,
                insertionIndex  = -1,
                frag            = null,
                target          = null,
                el              = null,
                i               = -1;

            self.callActions('beforeInsertTargets', arguments);

            if (typeof command.index === 'undefined') command.index = 0;

            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
            frag        = self.dom.document.createDocumentFragment();

            if (nextSibling) {
                insertionIndex = h.index(nextSibling, self.config.selectors.target);
            } else {
                insertionIndex = self.targets.length;
            }

            if (command.collection) {
                for (i = 0; el = command.collection[i]; i++) {
                    if (self.dom.targets.indexOf(el) > -1) {
                        throw new Error(mixitup.messages.errorInsertPreexistingElement());
                    }

                    // Ensure elements are hidden when they are added to the DOM, so they can
                    // be animated in gracefully

                    el.style.display = 'none';

                    frag.appendChild(el);
                    frag.appendChild(self.dom.document.createTextNode(' '));

                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;

                    target = new mixitup.Target();

                    target.init(el, self);

                    target.isInDom = true;

                    self.targets.splice(insertionIndex, 0, target);

                    insertionIndex++;
                }

                self.dom.parent.insertBefore(frag, nextSibling);
            }

            // Since targets have been added, the original order must be updated

            operation.startOrder = self.origOrder = self.targets;

            self.callActions('afterInsertTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Number}      [index]
         * @param   {Element}     [sibling]
         * @param   {string}      [position]
         * @return  {Element}
         */

        getNextSibling: function(index, sibling, position) {
            var self    = this,
                element = null;

            index = Math.max(index, 0);

            if (sibling && position === 'before') {
                // Explicit sibling

                element = sibling;
            } else if (sibling && position === 'after') {
                // Explicit sibling

                element = sibling.nextElementSibling || null;
            } else if (self.targets.length > 0 && typeof index !== 'undefined') {
                // Index and targets exist

                element = (index < self.targets.length || !self.targets.length) ?
                    self.targets[index].dom.el :
                    self.targets[self.targets.length - 1].dom.el.nextElementSibling;
            } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
                // No targets but other siblings

                if (self.config.layout.siblingAfter) {
                    element = self.config.layout.siblingAfter;
                } else if (self.config.layout.siblingBefore) {
                    element = self.config.layout.siblingBefore.nextElementSibling;
                } else {
                    self.dom.parent.children[0];
                }
            } else {
                element === null;
            }

            return self.callFilters('elementGetNextSibling', element, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        filterOperation: function(operation) {
            var self        = this,
                testResult  = false,
                index       = -1,
                action      = '',
                target      = null,
                i           = -1;

            self.callActions('beforeFilterOperation', arguments);

            action = operation.newFilter.action;

            for (i = 0; target = operation.newOrder[i]; i++) {
                if (operation.newFilter.collection) {
                    // show via collection

                    testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
                } else {
                    // show via selector

                    if (operation.newFilter.selector === '') {
                        testResult = false;
                    } else {
                        testResult = target.dom.el.matches(operation.newFilter.selector);
                    }
                }

                self.evaluateHideShow(testResult, target, action, operation);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = operation.show[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        // If any shown targets should be removed, move them into the toHide array

                        operation.show.splice(i, 1);

                        if ((index = operation.toShow.indexOf(target)) > -1) {
                            operation.toShow.splice(index, 1);
                        }

                        operation.toHide.push(target);
                        operation.hide.push(target);

                        i--;
                    }
                }
            }

            operation.matching = operation.show.slice();

            if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
                operation.hasFailed = true;
            }

            self.callActions('afterFilterOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   testResult
         * @param   {Element}   target
         * @param   {string}    action
         * @param   {Operation} operation
         * @return  {void}
         */

        evaluateHideShow: function(testResult, target, action, operation) {
            var self = this;

            self.callActions('beforeEvaluateHideShow', arguments);

            if (testResult === true && action === 'show' || testResult === false && action === 'hide') {
                operation.show.push(target);

                !target.isShown && operation.toShow.push(target);
            } else {
                operation.hide.push(target);

                target.isShown && operation.toHide.push(target);
            }

            self.callActions('afterEvaluateHideShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        sortOperation: function(operation) {
            var self = this;

            self.callActions('beforeSortOperation', arguments);

            operation.startOrder = self.targets;

            if (operation.newSort.collection) {
                // Sort by collection

                operation.newOrder = operation.newSort.collection;
            } else if (operation.newSort.order === 'random') {
                // Sort random

                operation.newOrder = h.arrayShuffle(operation.startOrder);
            } else if (operation.newSort.attribute === '') {
                // Sort by default

                operation.newOrder = self.origOrder.slice();

                if (operation.newSort.order === 'desc') {
                    operation.newOrder.reverse();
                }
            } else {
                // Sort by attribute

                operation.newOrder = operation.startOrder.slice();

                operation.newOrder.sort(function(a, b) {
                    return self.compare(a, b, operation.newSort);
                });
            }

            if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
                operation.willSort = false;
            }

            self.callActions('afterSortOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {mixitup.Target}        a
         * @param   {mixitup.Target}        b
         * @param   {mixitup.CommandSort}   command
         * @return  {Number}
         */

        compare: function(a, b, command) {
            var self        = this,
                order       = command.order,
                attrA       = self.getAttributeValue(a, command.attribute),
                attrB       = self.getAttributeValue(b, command.attribute);

            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                attrA = attrA.toLowerCase();
                attrB = attrB.toLowerCase();
            } else {
                attrA = attrA * 1;
                attrB = attrB * 1;
            }

            if (attrA < attrB) {
                return order === 'asc' ? -1 : 1;
            }

            if (attrA > attrB) {
                return order === 'asc' ? 1 : -1;
            }

            if (attrA === attrB && command.next) {
                return self.compare(a, b, command.next);
            }

            return 0;
        },

        /**
         * Reads the values of any data attributes present the provided target element
         * which match the current sort command.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Target}    target
         * @param   {string}            [attribute]
         * @return  {(String|Number)}
         */

        getAttributeValue: function(target, attribute) {
            var self    = this,
                value   = '';

            value = target.dom.el.getAttribute('data-' + attribute);

            if (value === null) {
                if (self.config.debug.showWarnings) {
                    // Encourage users to assign values to all targets to avoid erroneous sorting
                    // when types are mixed

                    console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                        attribute: 'data-' + attribute
                    }));
                }
            }

            // If an attribute is not present, return 0 as a safety value

            return self.callFilters('valueGetAttributeValue', value || 0, arguments);
        },

        /**
         * Inserts elements into the DOM in the appropriate
         * order using a document fragment for minimal
         * DOM thrashing
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   isResetting
         * @param   {Operation} operation
         * @return  {void}
         */

        printSort: function(isResetting, operation) {
            var self        = this,
                startOrder  = isResetting ? operation.newOrder : operation.startOrder,
                newOrder    = isResetting ? operation.startOrder : operation.newOrder,
                nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null,
                frag        = window.document.createDocumentFragment(),
                whitespace  = null,
                target      = null,
                el          = null,
                i           = -1;

            self.callActions('beforePrintSort', arguments);

            // Empty the container

            for (i = 0; target = startOrder[i]; i++) {
                el = target.dom.el;

                if (el.style.position === 'absolute') continue;

                h.removeWhitespace(el.previousSibling);

                el.parentElement.removeChild(el);
            }

            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;

            if (whitespace && whitespace.nodeName === '#text') {
                h.removeWhitespace(whitespace);
            }

            for (i = 0; target = newOrder[i]; i++) {
                // Add targets into a document fragment

                el = target.dom.el;

                if (h.isElement(frag.lastChild)) {
                    frag.appendChild(window.document.createTextNode(' '));
                }

                frag.appendChild(el);
            }

            // Insert the document fragment into the container
            // before any other non-target elements

            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
                frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0]);
            }

            if (nextSibling) {
                frag.appendChild(window.document.createTextNode(' '));

                self.dom.parent.insertBefore(frag, nextSibling);
            } else {
                self.dom.parent.appendChild(frag);
            }

            self.callActions('afterPrintSort', arguments);
        },

        /**
         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}                sortString
         * @param   {mixitup.CommandSort}   command
         * @return  {mixitup.CommandSort}
         */

        parseSortString: function(sortString, command) {
            var self        = this,
                rules       = sortString.split(' '),
                current     = command,
                rule        = [],
                i           = -1;

            // command.sortString = sortString;

            for (i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');

                current.sortString  = rules[i];
                current.attribute   = h.dashCase(rule[0]);
                current.order       = rule[1] || 'asc';

                switch (current.attribute) {
                    case 'default':
                        // treat "default" as sorting by no attribute

                        current.attribute = '';

                        break;
                    case 'random':
                        // treat "random" as an order not an attribute

                        current.attribute   = '';
                        current.order       = 'random';

                        break;
                }

                if (!current.attribute || current.order === 'random') break;

                if (i < rules.length - 1) {
                    // Embed reference to the next command

                    current.next = new mixitup.CommandSort();

                    h.freeze(current);

                    current = current.next;
                }
            }

            return self.callFilters('commandsParseSort', command, arguments);
        },

        /**
         * Parses all effects out of the user-defined `animation.effects` string into
         * their respective properties and units.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @return  {void}
         */

        parseEffects: function() {
            var self            = this,
                transformName   = '',
                effectsIn       = self.config.animation.effectsIn || self.config.animation.effects,
                effectsOut      = self.config.animation.effectsOut || self.config.animation.effects;

            self.callActions('beforeParseEffects', arguments);

            self.effectsIn      = new mixitup.StyleData();
            self.effectsOut     = new mixitup.StyleData();
            self.transformIn    = [];
            self.transformOut   = [];

            self.effectsIn.opacity = self.effectsOut.opacity = 1;

            self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, true);

            for (transformName in mixitup.transformDefaults) {
                if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) {
                    continue;
                }

                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
            }

            self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, true);

            self.callActions('afterParseEffects', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {string}    effectName
         * @param   {string}    effectString
         * @param   {StyleData} effects
         * @param   {String[]}  transform
         * @param   {boolean}   [isOut]
         */

        parseEffect: function(effectName, effectString, effects, transform, isOut) {
            var self        = this,
                re          = /\(([^)]+)\)/,
                propIndex   = -1,
                str         = '',
                match       = [],
                val         = '',
                units       = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'],
                unit        = '',
                i           = -1;

            self.callActions('beforeParseEffect', arguments);

            if (typeof effectString !== 'string') {
                throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
            }

            if (effectString.indexOf(effectName) < 0) {
                // The effect is not present in the effects string

                if (effectName === 'stagger') {
                    // Reset stagger to 0

                    self.staggerDuration = 0;
                }

                return;
            }

            // The effect is present

            propIndex = effectString.indexOf(effectName + '(');

            if (propIndex > -1) {
                // The effect has a user defined value in parentheses

                // Extract from the first parenthesis to the end of string

                str = effectString.substring(propIndex);

                // Match any number of characters between "(" and ")"

                match = re.exec(str);

                val = match[1];
            }

            switch (effectName) {
                case 'fade':
                    effects.opacity = val ? parseFloat(val) : 0;

                    break;
                case 'stagger':
                    self.staggerDuration = val ? parseFloat(val) : 100;

                    // TODO: Currently stagger must be applied globally, but
                    // if seperate values are specified for in/out, this should
                    // be respected

                    break;
                default:
                    // All other effects are transforms following the same structure

                    if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1;
                    } else {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value);
                    }

                    if (val) {
                        for (i = 0; unit = units[i]; i++) {
                            if (val.indexOf(unit) > -1) {
                                effects[effectName].unit = unit;

                                break;
                            }
                        }
                    } else {
                        effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                    }

                    transform.push(
                        effectName +
                        '(' +
                        effects[effectName].value +
                        effects[effectName].unit +
                        ')'
                    );
            }

            self.callActions('afterParseEffect', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {State}
         */

        buildState: function(operation) {
            var self        = this,
                state       = new mixitup.State(),
                target      = null,
                i           = -1;

            self.callActions('beforeBuildState', arguments);

            // Map target elements into state arrays.
            // the real target objects should never be exposed

            for (i = 0; target = self.targets[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.targets.push(target.dom.el);
                }
            }

            for (i = 0; target = operation.matching[i]; i++) {
                state.matching.push(target.dom.el);
            }

            for (i = 0; target = operation.show[i]; i++) {
                state.show.push(target.dom.el);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.hide.push(target.dom.el);
                }
            }

            state.id                        = self.id;
            state.container                 = self.dom.container;
            state.activeFilter              = operation.newFilter;
            state.activeSort                = operation.newSort;
            state.activeDataset             = operation.newDataset;
            state.activeContainerClassName  = operation.newContainerClassName;
            state.hasFailed                 = operation.hasFailed;
            state.totalTargets              = self.targets.length;
            state.totalShow                 = operation.show.length;
            state.totalHide                 = operation.hide.length;
            state.totalMatching             = operation.matching.length;
            state.triggerElement            = operation.triggerElement;

            return self.callFilters('stateBuildState', state, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   shouldAnimate
         * @param   {Operation} operation
         * @return  {void}
         */

        goMix: function(shouldAnimate, operation) {
            var self        = this,
                deferred    = null;

            self.callActions('beforeGoMix', arguments);

            // If the animation duration is set to 0ms,
            // or no effects specified,
            // or the container is hidden
            // then abort animation

            if (
                !self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)
            ) {
                shouldAnimate = false;
            }

            if (
                !operation.toShow.length &&
                !operation.toHide.length &&
                !operation.willSort &&
                !operation.willChangeLayout
            ) {
                // If nothing to show or hide, and not sorting or
                // changing layout

                shouldAnimate = false;
            }

            if (
                !operation.startState.show.length &&
                !operation.show.length
            ) {
                // If nothing currently shown, nothing to show

                shouldAnimate = false;
            }

            mixitup.events.fire('mixStart', self.dom.container, {
                state: operation.startState,
                futureState: operation.newState,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixStart === 'function') {
                self.config.callbacks.onMixStart.call(
                    self.dom.container,
                    operation.startState,
                    operation.newState,
                    self
                );
            }

            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));

            if (!self.userDeferred) {
                // Queue empty, no pending operations

                deferred = self.userDeferred = h.defer(mixitup.libraries);
            } else {
                // Use existing deferred

                deferred = self.userDeferred;
            }

            self.isBusy = true;

            if (!shouldAnimate || !mixitup.features.has.transitions) {
                // Abort

                if (self.config.debug.fauxAsync) {
                    setTimeout(function() {
                        self.cleanUp(operation);
                    }, self.config.animation.duration);
                } else {
                    self.cleanUp(operation);
                }

                return self.callFilters('promiseGoMix', deferred.promise, arguments);
            }

            // If we should animate and the platform supports transitions, go for it

            if (window.pageYOffset !== operation.docState.scrollTop) {
                window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
            }

            if (self.config.animation.applyPerspective) {
                self.dom.parent.style[mixitup.features.perspectiveProp] =
                    self.config.animation.perspectiveDistance;

                self.dom.parent.style[mixitup.features.perspectiveOriginProp] =
                    self.config.animation.perspectiveOrigin;
            }

            if (self.config.animation.animateResizeContainer || operation.startHeight === operation.newHeight) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (self.config.animation.animateResizeContainer || operation.startWidth === operation.newWidth) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            requestAnimationFrame(function() {
                self.moveTargets(operation);
            });

            return self.callFilters('promiseGoMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getStartMixData: function(operation) {
            var self        = this,
                parentStyle = window.getComputedStyle(self.dom.parent),
                parentRect  = self.dom.parent.getBoundingClientRect(),
                target      = null,
                data        = {},
                i           = -1,
                boxSizing   = parentStyle[mixitup.features.boxSizingProp];

            self.incPadding = (boxSizing === 'border-box');

            self.callActions('beforeGetStartMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                data = target.getPosData();

                operation.showPosData[i] = {
                    startPosData: data
                };
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                data = target.getPosData();

                operation.toHidePosData[i] = {
                    startPosData: data
                };
            }

            operation.startX = parentRect.left;
            operation.startY = parentRect.top;

            operation.startHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.startWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            self.callActions('afterGetStartMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setInter: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetInter', arguments);

            // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height

            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height    = operation.startHeight + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterSetInter', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getInterMixData: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeGetInterMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].interPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].interPosData = target.getPosData();
            }

            self.callActions('afterGetInterMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setFinal: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetFinal', arguments);

            // Remove clamping

            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height    =
                self.dom.parent.style.overflow  = '';
            }

            operation.willSort && self.printSort(false, operation);

            for (i = 0; target = operation.toHide[i]; i++) {
                target.hide();
            }

            self.callActions('afterSetFinal', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getFinalMixData: function(operation) {
            var self        = this,
                parentStyle = null,
                parentRect  = self.dom.parent.getBoundingClientRect(),
                target      = null,
                i           = -1;

            if (!self.incPadding) {
                parentStyle = window.getComputedStyle(self.dom.parent);
            }

            self.callActions('beforeGetFinalMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].finalPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].finalPosData = target.getPosData();
            }

            operation.newX = parentRect.left;
            operation.newY = parentRect.top;

            operation.newHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.newWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            if (operation.willSort) {
                self.printSort(true, operation);
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.hide();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.newContainerClassName);
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            self.callActions('afterGetFinalMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since    3.0.0
         * @param    {Operation}     operation
         */

        getTweenData: function(operation) {
            var self            = this,
                target          = null,
                posData         = null,
                effectNames     = Object.getOwnPropertyNames(self.effectsIn),
                effectName      = '',
                effect          = null,
                widthChange     = -1,
                heightChange    = -1,
                i               = -1,
                j               = -1;

            self.callActions('beforeGetTweenData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                posData             = operation.showPosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                if (target.isShown) {
                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                } else {
                    posData.posIn.x = posData.posIn.y = 0;
                }

                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;

                // Process opacity

                posData.posIn.opacity       = target.isShown ? 1 : self.effectsIn.opacity;
                posData.posOut.opacity      = 1;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Adjust x and y if not nudging

                if (!target.isShown && !self.config.animation.nudge) {
                    posData.posIn.x = posData.posOut.x;
                    posData.posIn.y = posData.posOut.y;
                }

                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width     = posData.startPosData.width;
                    posData.posIn.height    = posData.startPosData.height;

                    // "||" Prevents width/height change from including 0 width/height if hiding or showing

                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;

                    posData.posOut.width    = posData.finalPosData.width;
                    posData.posOut.height   = posData.finalPosData.height;

                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;

                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;

                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;

                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;

                    posData.tweenData.width         = posData.posOut.width - posData.posIn.width;
                    posData.tweenData.height        = posData.posOut.height - posData.posIn.height;
                    posData.tweenData.marginRight   = posData.posOut.marginRight - posData.posIn.marginRight;
                    posData.tweenData.marginBottom  = posData.posOut.marginBottom - posData.posIn.marginBottom;
                }

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsIn[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = effect.value;
                    posData.posOut[effectName].value    = 0;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData             = operation.toHidePosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                posData.posIn.x     = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                posData.posIn.y     = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                posData.posOut.x    = self.config.animation.nudge ? 0 : posData.posIn.x;
                posData.posOut.y    = self.config.animation.nudge ? 0 : posData.posIn.y;
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width         = posData.startPosData.width;
                    posData.posIn.height        = posData.startPosData.height;

                    widthChange = posData.startPosData.width - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = posData.startPosData.height - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                }

                // Process opacity

                posData.posIn.opacity       = 1;
                posData.posOut.opacity      = self.effectsOut.opacity;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsOut[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = 0;
                    posData.posOut[effectName].value    = effect.value;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            self.callActions('afterGetTweenData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        moveTargets: function(operation) {
            var self            = this,
                target          = null,
                moveData        = null,
                posData         = null,
                statusChange    = '',
                willTransition  = false,
                staggerIndex    = -1,
                i               = -1,
                checkProgress   = self.checkProgress.bind(self);

            self.callActions('beforeMoveTargets', arguments);

            // TODO: this is an extra loop in addition to the calcs
            // done in getOperation, could some of this be done there?

            for (i = 0; target = operation.show[i]; i++) {
                moveData    = new mixitup.IMoveData();
                posData     = operation.showPosData[i];

                statusChange = target.isShown ? 'none' : 'show';

                willTransition = self.willTransition(
                    statusChange,
                    operation.hasEffect,
                    posData.posIn,
                    posData.posOut
                );

                if (willTransition) {
                    // Prevent non-transitioning targets from incrementing the staggerIndex

                    staggerIndex++;
                }

                target.show();

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = staggerIndex;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData  = operation.toHidePosData[i];
                moveData = new mixitup.IMoveData();

                statusChange = 'hide';

                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = i;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            if (self.config.animation.animateResizeContainer) {
                self.dom.parent.style[mixitup.features.transitionProp] =
                    'height ' + self.config.animation.duration + 'ms ease, ' +
                    'width ' + self.config.animation.duration + 'ms ease ';

                requestAnimationFrame(function() {
                    self.dom.parent.style.height = operation.newHeight + 'px';
                    self.dom.parent.style.width = operation.newWidth + 'px';
                });
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterMoveTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @return  {boolean}
         */

        hasEffect: function() {
            var self        = this,
                EFFECTABLES = [
                    'scale',
                    'translateX', 'translateY', 'translateZ',
                    'rotateX', 'rotateY', 'rotateZ'
                ],
                effectName  = '',
                effect      = null,
                result      = false,
                value       = -1,
                i           = -1;

            if (self.effectsIn.opacity !== 1) {
                return self.callFilters('resultHasEffect', true, arguments);
            }

            for (i = 0; effectName = EFFECTABLES[i]; i++) {
                effect  = self.effectsIn[effectName];
                value   = (typeof effect && effect.value !== 'undefined') ?
                    effect.value : effect;

                if (value !== 0) {
                    result = true;

                    break;
                }
            }

            return self.callFilters('resultHasEffect', result, arguments);
        },

        /**
         * Determines if a target element will transition in
         * some fasion and therefore requires binding of
         * transitionEnd
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}        statusChange
         * @param   {boolean}       hasEffect
         * @param   {StyleData}     posIn
         * @param   {StyleData}     posOut
         * @return  {boolean}
         */

        willTransition: function(statusChange, hasEffect, posIn, posOut) {
            var self    = this,
                result  = false;

            if (!h.isVisible(self.dom.container)) {
                // If the container is not visible, the transitionEnd
                // event will not occur and MixItUp will hang

                result = false;
            } else if (
                (statusChange !== 'none' && hasEffect) ||
                posIn.x !== posOut.x ||
                posIn.y !== posOut.y
            ) {
                // If opacity and/or translate will change

                result = true;
            } else if (self.config.animation.animateResizeTargets) {
                // Check if width, height or margins will change

                result = (
                    posIn.width !== posOut.width ||
                    posIn.height !== posOut.height ||
                    posIn.marginRight !== posOut.marginRight ||
                    posIn.marginTop !== posOut.marginTop
                );
            } else {
                result = false;
            }

            return self.callFilters('resultWillTransition', result, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        checkProgress: function(operation) {
            var self = this;

            self.targetsDone++;

            if (self.targetsBound === self.targetsDone) {
                self.cleanUp(operation);
            }
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        cleanUp: function(operation) {
            var self                = this,
                target              = null,
                whitespaceBefore    = null,
                whitespaceAfter     = null,
                nextInQueue         = null,
                i                   = -1;

            self.callActions('beforeCleanUp', arguments);

            self.targetsMoved          =
                self.targetsImmovable  =
                self.targetsBound      =
                self.targetsDone       = 0;

            for (i = 0; target = operation.show[i]; i++) {
                target.cleanUp();

                target.show();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.cleanUp();

                target.hide();
            }

            if (operation.willSort) {
                self.printSort(false, operation);
            }

            // Remove any styles applied to the parent container

            self.dom.parent.style[mixitup.features.transitionProp]             =
                self.dom.parent.style.height                                   =
                self.dom.parent.style.width                                    =
                self.dom.parent.style[mixitup.features.perspectiveProp]        =
                self.dom.parent.style[mixitup.features.perspectiveOriginProp]  = '';

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        if (
                            (whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' &&
                            (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text'
                        ) {
                            h.removeWhitespace(whitespaceBefore);
                        }

                        if (!operation.willSort) {
                            // NB: Sorting will remove targets as a bi-product of `printSort()`

                            self.dom.parent.removeChild(target.dom.el);
                        }

                        self.targets.splice(i, 1);

                        target.isInDom = false;

                        i--;
                    }
                }

                // Since targets have been removed, the original order must be updated

                self.origOrder = self.targets;
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            self.state = operation.newState;
            self.lastOperation = operation;

            self.dom.targets = self.state.targets;

            // mixEnd

            mixitup.events.fire('mixEnd', self.dom.container, {
                state: self.state,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixEnd === 'function') {
                self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
            }

            if (operation.hasFailed) {
                // mixFail

                mixitup.events.fire('mixFail', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixFail === 'function') {
                    self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                }

                h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
            }

            // User-defined callback function

            if (typeof self.userCallback === 'function') {
                self.userCallback.call(self.dom.container, self.state, self);
            }

            if (typeof self.userDeferred.resolve === 'function') {
                self.userDeferred.resolve(self.state);
            }

            self.userCallback  = null;
            self.userDeferred  = null;
            self.lastClicked   = null;
            self.isToggling    = false;
            self.isBusy        = false;

            if (self.queue.length) {
                self.callActions('beforeReadQueueCleanUp', arguments);

                nextInQueue = self.queue.shift();

                // Update non-public API properties stored in queue

                self.userDeferred  = nextInQueue.deferred;
                self.isToggling    = nextInQueue.isToggling;
                self.lastClicked   = nextInQueue.triggerElement;

                if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) {
                    self.multimix.apply(self, nextInQueue.args);
                } else {
                    self.dataset.apply(self, nextInQueue.args);
                }
            }

            self.callActions('afterCleanUp', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseMultimixArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandMultimix();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'object') {
                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            // Coerce arbitrary command arguments into typed command objects

            if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) {
                instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command;
            }

            if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) {
                instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command;
            }

            if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) {
                instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command;
            }

            if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) {
                instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command;
            }

            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) {
                instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command;
            }

            instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseFilterArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandFilter();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (typeof arg === 'string') {
                    // Selector

                    instruction.command.selector = arg;
                } else if (arg === null) {
                    instruction.command.collection = [];
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    instruction.command.collection = [arg];
                } else if (typeof arg === 'object' && typeof arg.length !== 'undefined') {
                    // Multiple elements in array, NodeList or jQuery collection

                    instruction.command.collection = h.arrayFromList(arg);
                } else if (typeof arg === 'object') {
                    // Filter command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.selector && instruction.command.collection) {
                throw new Error(mixitup.messages.errorFilterInvalidArguments());
            }

            instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        parseSortArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                sortString  = '',
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandSort();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        // Sort string

                        sortString = arg;

                        break;
                    case 'object':
                        // Array of element references

                        if (arg.length) {
                            instruction.command.collection = h.arrayFromList(arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (sortString) {
                instruction.command = self.parseSortString(sortString, instruction.command);
            }

            instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseInsertArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandInsert();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'number') {
                    // Insert index

                    instruction.command.index = arg;
                } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
                    // 'before'/'after'

                    instruction.command.position = arg;
                } else if (typeof arg === 'string') {
                    // Markup

                    instruction.command.collection =
                        h.arrayFromList(h.createElement(arg).childNodes);
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    !instruction.command.collection.length ?
                        (instruction.command.collection = [arg]) :
                        (instruction.command.sibling = arg);
                } else if (typeof arg === 'object' && arg.length) {
                    // Multiple elements in array or jQuery collection

                    !instruction.command.collection.length ?
                        (instruction.command.collection = arg) :
                        instruction.command.sibling = arg[0];
                } else if (typeof arg === 'object' && arg.childNodes && arg.childNodes.length) {
                    // Document fragment

                    !instruction.command.collection.length ?
                        instruction.command.collection = h.arrayFromList(arg.childNodes) :
                        instruction.command.sibling = arg.childNodes[0];
                } else if (typeof arg === 'object') {
                    // Insert command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.index && instruction.command.sibling) {
                throw new Error(mixitup.messages.errorInsertInvalidArguments());
            }

            if (!instruction.command.collection.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningInsertNoElements());
            }

            instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseRemoveArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                target      = null,
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandRemove();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'number':
                        if (self.targets[arg]) {
                            instruction.command.targets[0] = self.targets[arg];
                        }

                        break;
                    case 'string':
                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));

                        break;
                    case 'object':
                        if (arg && arg.length) {
                            instruction.command.collection = arg;
                        } else if (h.isElement(arg, self.dom.document)) {
                            instruction.command.collection = [arg];
                        } else {
                            // Remove command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (instruction.command.collection.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (instruction.command.collection.indexOf(target.dom.el) > -1) {
                        instruction.command.targets.push(target);
                    }
                }
            }

            if (!instruction.command.targets.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningRemoveNoElements());
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseDatasetArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandDataset();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'object':
                        if (Array.isArray(arg) || typeof arg.length === 'number') {
                            instruction.command.dataset = arg;
                        } else {
                            // Change layout command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseChangeLayoutArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandChangeLayout();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        instruction.command.containerClassName = arg;

                        break;
                    case 'object':
                        // Change layout command

                        h.extend(instruction.command, arg);

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @param       {mixitup.QueueItem}         queueItem
         * @return      {Promise.<mixitup.State>}
         */

        queueMix: function(queueItem) {
            var self            = this,
                deferred        = null,
                toggleSelector  = '';

            self.callActions('beforeQueueMix', arguments);

            deferred = h.defer(mixitup.libraries);

            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                queueItem.deferred = deferred;

                self.queue.push(queueItem);

                // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.

                if (self.config.controls.enable) {
                    if (self.isToggling) {
                        self.buildToggleArray(queueItem.instruction.command);

                        toggleSelector = self.getToggleSelector();

                        self.updateControls({
                            filter: {
                                selector: toggleSelector
                            }
                        });
                    } else {
                        self.updateControls(queueItem.instruction.command);
                    }
                }
            } else {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                }

                deferred.resolve(self.state);

                mixitup.events.fire('mixBusy', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixBusy === 'function') {
                    self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                }
            }

            return self.callFilters('promiseQueueMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array.<object>}    newDataset
         * @return  {Operation}
         */

        getDataOperation: function(newDataset) {
            var self                = this,
                operation           = new mixitup.Operation(),
                startDataset        = [];

            operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);

            if (self.dom.targets.length && !(startDataset = (self.state.activeDataset || [])).length) {
                throw new Error(mixitup.messages.errorDatasetNotSet());
            }

            operation.id            = h.randomHex();
            operation.startState    = self.state;
            operation.startDataset  = startDataset;
            operation.newDataset    = newDataset.slice();

            self.diffDatasets(operation);

            operation.startOrder = self.targets;
            operation.newOrder = operation.show;

            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            self.targets = operation.show.slice();

            operation.newState = self.buildState(operation);

            // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
            // but are added after state is built so that state is accurate

            Array.prototype.push.apply(self.targets, operation.toRemove);

            operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);

            return operation;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */

        diffDatasets: function(operation) {
            var self                = this,
                persistantStartIds  = [],
                persistantNewIds    = [],
                insertedTargets     = [],
                data                = null,
                target              = null,
                el                  = null,
                frag                = null,
                nextEl              = null,
                uids                = {},
                id                  = '',
                i                   = -1;

            self.callActions('beforeDiffDatasets', arguments);

            for (i = 0; data = operation.newDataset[i]; i++) {
                if (typeof (id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: self.config.data.uidKey
                    }));
                }

                if (!uids[id]) {
                    uids[id] = true;
                } else {
                    throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                        uid: id
                    }));
                }

                if ((target = self.cache[id]) instanceof mixitup.Target) {
                    // Already in cache

                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                        // change detected

                        el = target.render(data);

                        target.data = data;

                        if (el !== target.dom.el) {
                            // Update target element reference

                            if (target.isInDom) {
                                target.unbindEvents();

                                self.dom.parent.replaceChild(el, target.dom.el);
                            }

                            if (!target.isShown) {
                                el.style.display = 'none';
                            }

                            target.dom.el = el;

                            if (target.isInDom) {
                                target.bindEvents();
                            }
                        }
                    }

                    el = target.dom.el;
                } else {
                    // New target

                    target = new mixitup.Target();

                    target.init(null, self, data);

                    target.hide();
                }

                if (!target.isInDom) {
                    // Adding to DOM

                    if (!frag) {
                        // Open frag

                        frag = self.dom.document.createDocumentFragment();
                    }

                    if (frag.lastElementChild) {
                        frag.appendChild(self.dom.document.createTextNode(' '));
                    }

                    frag.appendChild(target.dom.el);

                    target.isInDom = true;

                    target.unbindEvents();
                    target.bindEvents();
                    target.hide();

                    operation.toShow.push(target);

                    insertedTargets.push(target);
                } else {
                    // Already in DOM

                    nextEl = target.dom.el.nextElementSibling;

                    persistantNewIds.push(id);

                    if (frag) {
                        // Close and insert previously opened frag

                        if (frag.lastElementChild) {
                            frag.appendChild(self.dom.document.createTextNode(' '));
                        }

                        self.insertDatasetFrag(frag, target.dom.el, self.targets.indexOf(target), insertedTargets);

                        frag = null;
                    }
                }

                operation.show.push(target);
            }

            if (frag) {
                // Unclosed frag remaining

                nextEl = nextEl || self.config.layout.siblingAfter;

                if (nextEl) {
                    frag.appendChild(self.dom.document.createTextNode(' '));
                }

                self.insertDatasetFrag(frag, nextEl, self.dom.targets.length, insertedTargets);
            }

            for (i = 0; data = operation.startDataset[i]; i++) {
                id = data[self.config.data.uidKey];

                target = self.cache[id];

                if (operation.show.indexOf(target) < 0) {
                    // Previously shown but now absent

                    operation.hide.push(target);
                    operation.toHide.push(target);
                    operation.toRemove.push(target);
                } else {
                    persistantStartIds.push(id);
                }
            }

            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
                operation.willSort = true;
            }

            self.callActions('afterDiffDatasets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.1.5
         * @param   {DocumentFragment}          frag
         * @param   {(HTMLElement|null)}        nextEl
         * @param   {number}                    insertionIndex
         * @param   {Array.<mixitup.Target>}    targets
         * @return  {void}
         */

        insertDatasetFrag: function(frag, nextEl, insertionIndex, targets) {
            var self = this;

            self.dom.parent.insertBefore(frag, nextEl);

            while (targets.length) {
                self.targets.splice(insertionIndex, 0, targets.shift());

                insertionIndex++;
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort} sortCommandA
         * @param   {mixitup.CommandSort} sortCommandB
         * @return  {boolean}
         */

        willSort: function(sortCommandA, sortCommandB) {
            var self    = this,
                result  = false;

            if (
                sortCommandA.order       === 'random' ||
                sortCommandA.attribute   !== sortCommandB.attribute ||
                sortCommandA.order       !== sortCommandB.order ||
                sortCommandA.collection  !== sortCommandB.collection ||
                (sortCommandA.next === null && sortCommandB.next) ||
                (sortCommandA.next && sortCommandB.next === null)
            ) {
                result = true;
            } else if (sortCommandA.next && sortCommandB.next) {
                result = self.willSort(sortCommandA.next, sortCommandB.next);
            } else {
                result = false;
            }

            return self.callFilters('resultWillSort', result, arguments);
        },

        /**
         * A shorthand method for `.filter('all')`. Shows all targets in the container.
         *
         * @example
         *
         * .show()
         *
         * @example <caption>Example: Showing all targets</caption>
         *
         * mixer.show()
         *     .then(function(state) {
         *         console.log(state.totalShow === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        show: function() {
            var self = this;

            return self.filter('all');
        },

        /**
         * A shorthand method for `.filter('none')`. Hides all targets in the container.
         *
         * @example
         *
         * .hide()
         *
         * @example <caption>Example: Hiding all targets</caption>
         *
         * mixer.hide()
         *     .then(function(state) {
         *         console.log(state.totalShow === 0); // true
         *         console.log(state.totalHide === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        hide: function() {
            var self = this;

            return self.filter('none');
        },

        /**
         * Returns a boolean indicating whether or not a MixItUp operation is
         * currently in progress.
         *
         * @example
         *
         * .isMixing()
         *
         * @example <caption>Example: Checking the status of a mixer</caption>
         *
         * mixer.sort('random', function() {
         *     console.log(mixer.isMixing()) // false
         * });
         *
         * console.log(mixer.isMixing()) // true
         *
         * @public
         * @instance
         * @since   2.0.0
         * @return  {boolean}
         */

        isMixing: function() {
            var self = this;

            return self.isBusy;
        },

        /**
         * Filters all targets in the container by a provided selector string, or the values `'all'`
         * or `'none'`. Only targets matching the selector will be shown.
         *
         * @example
         *
         * .filter(selector [, animate] [, callback])
         *
         * @example <caption>Example 1: Filtering targets by a class selector</caption>
         *
         * mixer.filter('.category-a')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
         *     });
         *
         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
         *
         * mixer.filter('[data-category~="a"]')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
         *     });
         *
         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
         *
         * // Show only those targets with the classes 'category-a' AND 'category-b'
         *
         * mixer.filter('.category-a.category-c')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
         *     });
         *
         * @example <caption>Example 4: Filtering via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * console.log(collection.length); // 34
         *
         * // Filter the collection manually using Array.prototype.filter
         *
         * var filtered = collection.filter(function(target) {
         *    return parseInt(target.getAttribute('data-price')) > 10;
         * });
         *
         * console.log(filtered.length); // 22
         *
         * // Pass the filtered collection to MixItUp
         *
         * mixer.filter(filtered)
         *    .then(function(state) {
         *        console.log(state.activeFilter.collection.length === 22); // true
         *    });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        filter: function() {
            var self        = this,
                instruction = self.parseFilterArgs(arguments);

            return self.multimix({
                filter: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Adds an additional selector to the currently active filter selector, concatenating
         * as per the logic defined in `controls.toggleLogic`.
         *
         * @example
         *
         * .toggleOn(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling on a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
         *
         * mixer.toggleOn('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOn: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                toggleSelector  = '';

            self.isToggling = true;

            if (self.toggleArray.indexOf(selector) < 0) {
                self.toggleArray.push(selector);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Removes a selector from the active filter selector.
         *
         * @example
         *
         * .toggleOff(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling off a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
         *
         * mixer.toggleOff('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOff: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                toggleSelector  = '';

            self.isToggling = true;

            self.toggleArray.splice(self.toggleArray.indexOf(selector), 1);

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Sorts all targets in the container according to a provided sort string.
         *
         * @example
         *
         * .sort(sortString [, animate] [, callback])
         *
         * @example <caption>Example 1: Sorting by the default DOM order</caption>
         *
         * // Reverse the default order of the targets
         *
         * mixer.sort('default:desc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'default'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *     });
         *
         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute
         *
         * mixer.sort('published-date:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 3: Sorting by multiple attributes</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
         *
         * mixer.sort('published-date:desc data-title:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *
         *         console.log(state.activeSort.next.attribute === 'title'); // true
         *         console.log(state.activeSort.next.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 4: Sorting by random</caption>
         *
         * mixer.sort('random')
         *     .then(function(state) {
         *         console.log(state.activeSort.order === 'random') // true
         *     });
         *
         * @example <caption>Example 5: Sorting via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * // Swap the position of two elements in the collection:
         *
         * var temp = collection[1];
         *
         * collection[1] = collection[0];
         * collection[0] = temp;
         *
         * // Pass the sorted collection to MixItUp
         *
         * mixer.sort(collection)
         *     .then(function(state) {
         *         console.log(state.targets[0] === collection[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|Array.<HTMLElement>)}    sortString
         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        sort: function() {
            var self        = this,
                instruction = self.parseSortArgs(arguments);

            return self.multimix({
                sort: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Changes the layout of the container by adding, removing or updating a
         * layout-specific class name. If `animation.animateResizetargets` is
         * enabled, MixItUp will attempt to gracefully animate the width, height,
         * and position of targets between layout states.
         *
         * @example
         *
         * .changeLayout(containerClassName [, animate] [, callback])
         *
         * @example <caption>Example 1: Adding a new class name to the container</caption>
         *
         * mixer.changeLayout('container-list')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === 'container-list'); // true
         *      });
         *
         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
         *
         * mixer.changeLayout('')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === ''); // true
         *      });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    containerClassName
         *      A layout-specific class name to add to the container.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        changeLayout: function() {
            var self        = this,
                instruction = self.parseChangeLayoutArgs(arguments);

            return self.multimix({
                changeLayout: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Updates the contents and order of the container to reflect the provided dataset,
         * if the dataset API is in use.
         *
         * The dataset API is designed for use in API-driven JavaScript applications, and
         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
         * achieved purely via changes to your data model, without the uglyness of having
         * to interact with or query the DOM directly.
         *
         * @example
         *
         * .dataset(dataset [, animate] [, callback])
         *
         * @example <caption>Example 1: Rendering a dataset</caption>
         *
         * var myDataset = [
         *     {id: 1, ...},
         *     {id: 2, ...},
         *     {id: 3, ...}
         * ];
         *
         * mixer.dataset(myDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 3); // true
         *     });
         *
         * @example <caption>Example 2: Sorting a dataset</caption>
         *
         * // Create a new dataset in reverse order
         *
         * var newDataset = myDataset.slice().reverse();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.activeDataset[0] === myDataset[2]); // true
         *     });
         *
         * @example <caption>Example 3: Removing an item from the dataset</caption>
         *
         * console.log(myDataset.length); // 3
         *
         * // Create a new dataset with the last item removed.
         *
         * var newDataset = myDataset.slice().pop();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {Array.<object>}    dataset
         *      An array of objects, each one representing the underlying data model of a target to be rendered.
         * @param       {boolean}           [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}          [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        dataset: function() {
            var self        = this,
                instruction = self.parseDatasetArgs(arguments),
                operation   = null,
                queueItem   = null,
                animate     = false;

            self.callActions('beforeDataset', arguments);

            if (!self.isBusy) {
                if (instruction.callback) self.userCallback = instruction.callback;

                animate = (instruction.animate ^ self.config.animation.enable) ? instruction.animate : self.config.animation.enable;

                operation = self.getDataOperation(instruction.command.dataset);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args          = arguments;
                queueItem.instruction   = instruction;

                return self.queueMix(queueItem);
            }
        },

        /**
         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
         * operations as requested.
         *
         * @example
         *
         * .multimix(multimixCommand [, animate] [, callback])
         *
         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
         *
         * mixer.multimix({
         *     filter: '.category-b',
         *     sort: 'published-date:desc'
         * })
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector === '.category-b'); // true
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *     });
         *
         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
         *
         * console.log(mixer.getState().totalShow); // 6
         *
         * // NB: When inserting via `multimix()`, an object should be provided as the value
         * // for the `insert` portion of the command, allowing for a collection of elements
         * // and an insertion index to be specified.
         *
         * mixer.multimix({
         *     sort: 'published-date:desc', // Sort the container, including any new elements
         *     insert: {
         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
         *         index: 5
         *     },
         *     remove: existingElementReference // Remove 1 existing element
         * })
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.totalShow === 7); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {object}    multimixCommand
         *      An object containing one or more things to do
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        multimix: function() {
            var self        = this,
                operation   = null,
                animate     = false,
                queueItem   = null,
                instruction = self.parseMultimixArgs(arguments);

            self.callActions('beforeMultimix', arguments);

            if (!self.isBusy) {
                operation = self.getOperation(instruction.command);

                if (self.config.controls.enable) {
                    // Update controls for API calls

                    if (instruction.command.filter && !self.isToggling) {
                        // As we are not toggling, reset the toggle array
                        // so new filter overrides existing toggles

                        self.toggleArray.length = 0;
                        self.buildToggleArray(operation.command);
                    }

                    if (self.queue.length < 1) {
                        self.updateControls(operation.command);
                    }
                }

                if (instruction.callback) self.userCallback = instruction.callback;

                // Always allow the instruction to override the instance setting

                animate = (instruction.animate ^ self.config.animation.enable) ?
                    instruction.animate :
                    self.config.animation.enable;

                self.callFilters('operationMultimix', operation, arguments);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args           = arguments;
                queueItem.instruction    = instruction;
                queueItem.triggerElement = self.lastClicked;
                queueItem.isToggling     = self.isToggling;

                return self.queueMix(queueItem);
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}            multimixCommand
         * @param   {boolean}           [isPreFetch]
         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
         * @return  {Operation|null}
         */

        getOperation: function(multimixCommand) {
            var self                = this,
                sortCommand         = multimixCommand.sort,
                filterCommand       = multimixCommand.filter,
                changeLayoutCommand = multimixCommand.changeLayout,
                removeCommand       = multimixCommand.remove,
                insertCommand       = multimixCommand.insert,
                operation           = new mixitup.Operation();

            operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);

            operation.id                = h.randomHex();
            operation.command           = multimixCommand;
            operation.startState        = self.state;
            operation.triggerElement    = self.lastClicked;

            if (self.isBusy) {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                }

                return null;
            }

            if (insertCommand) {
                self.insertTargets(insertCommand, operation);
            }

            if (removeCommand) {
                operation.toRemove = removeCommand.targets;
            }

            operation.startSort = operation.newSort = operation.startState.activeSort;
            operation.startOrder = operation.newOrder = self.targets;

            if (sortCommand) {
                operation.startSort = operation.startState.activeSort;
                operation.newSort   = sortCommand;

                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);

                if (operation.willSort) {
                    self.sortOperation(operation);
                }
            }

            operation.startFilter = operation.startState.activeFilter;

            if (filterCommand) {
                operation.newFilter = filterCommand;
            } else {
                operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter);
            }

            if (operation.newFilter.selector === 'all') {
                operation.newFilter.selector = self.config.selectors.target;
            } else if (operation.newFilter.selector === 'none') {
                operation.newFilter.selector = '';
            }

            self.filterOperation(operation);

            operation.startContainerClassName = operation.startState.activeContainerClassName;

            if (changeLayoutCommand) {
                operation.newContainerClassName = changeLayoutCommand.containerClassName;

                if (operation.newContainerClassName !== operation.startContainerClassName) {
                    operation.willChangeLayout = true;
                }
            } else {
                operation.newContainerClassName = operation.startContainerClassName;
            }

            if (self.config.animation.enable) {
                // Populate the operation's position data

                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            operation.newState = self.buildState(operation);

            return self.callFilters('operationMappedGetOperation', operation, arguments);
        },

        /**
         * Renders a previously created operation at a specific point in its path, as
         * determined by a multiplier between 0 and 1.
         *
         * @example
         * .tween(operation, multiplier)
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation}     operation
         *      An operation object created via the `getOperation` method
         *
         * @param   {Float}                 multiplier
         *      Any number between 0 and 1 representing the percentage complete of the operation
         * @return  {void}
         */

        tween: function(operation, multiplier) {
            var target          = null,
                posData         = null,
                toHideIndex     = -1,
                i               = -1;

            multiplier = Math.min(multiplier, 1);
            multiplier = Math.max(multiplier, 0);

            for (i = 0; target = operation.show[i]; i++) {
                posData = operation.showPosData[i];

                target.applyTween(posData, multiplier);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (target.isShown) {
                    target.hide();
                }

                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                    posData = operation.toHidePosData[toHideIndex];

                    if (!target.isShown) {
                        target.show();
                    }

                    target.applyTween(posData, multiplier);
                }
            }
        },

        /**
         * Inserts one or more new target elements into the container at a specified
         * index.
         *
         * To be indexed as targets, new elements must match the `selectors.target`
         * selector (`'.mix'` by default).
         *
         * @example
         *
         * .insert(newElements [, index] [, animate], [, callback])
         *
         * @example <caption>Example 1: Inserting a single element via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 0
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insert(newElement)
         *     .then(function(state) {
         *         console.log(state.totalShow === 1); // true
         *     });
         *
         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
         *
         * console.log(mixer.getState().totalShow); // 1
         *
         * // Create a new element via reference
         *
         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
         *
         * // Create and insert the new element at index 1
         *
         * mixer.insert(newElementHtml, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *         console.log(state.show[1].outerHTML === newElementHtml); // true
         *     });
         *
         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * // Create an array of new elements to insert.
         *
         * var newElement1 = document.createElement('div');
         * var newElement2 = document.createElement('div');
         *
         * newElement1.classList.add('mix');
         * newElement2.classList.add('mix');
         *
         * var newElementsCollection = [newElement1, newElement2];
         *
         * // Insert the new elements starting at index 1
         *
         * mixer.insert(newElementsCollection, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 4); // true
         *         console.log(state.show[1] === newElement1); // true
         *         console.log(state.show[2] === newElement2); // true
         *     });
         *
         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
         *
         * console.log(mixer.getState().totalShow); // 4
         *
         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
         *
         * // Insert the new elements starting at index 3
         *
         * mixer.insert(newElementsCollection, 3)
         *     .then(function(state) {
         *         console.log(state.totalShow === 5); // true
         *         console.log(state.show[3] === $newElement[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {number}    index=0
         *      The index at which to insert the new element(s). `0` by default.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insert: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.multimix({
                insert: args.command
            }, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements before a provided reference element.
         *
         * @example
         *
         * .insertBefore(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element before a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertBefore(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 2, before the reference element
         *
         *         console.log(state.show[2] === newElement); // true
         *
         *         // The reference element is now at index 3
         *
         *         console.log(state.show[3] === referenceElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements before.
         *@param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertBefore: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements after a provided reference element.
         *
         * @example
         *
         * .insertAfter(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element after a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertAfter(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 3, after the reference element
         *
         *         console.log(state.show[3] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements after.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertAfter: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container before all existing targets.
         *
         * @example
         *
         * .prepend(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Prepending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.prepend(newElement)
         *     .then(function(state) {
         *         console.log(state.show[0] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        prepend: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(0, args.command.collection, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container after all existing targets.
         *
         * @example
         *
         * .append(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Appending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.append(newElement)
         *     .then(function(state) {
         *         console.log(state.show[state.show.length - 1] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        append: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
        },

        /**
         * Removes one or more existing target elements from the container.
         *
         * @example
         *
         * .remove(elements [, animate] [, callback])
         *
         * @example <caption>Example 1: Removing an element by reference</caption>
         *
         * var elementToRemove = containerEl.firstElementChild;
         *
         * mixer.remove(elementToRemove)
         *      .then(function(state) {
         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
         *      });
         *
         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
         *
         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
         *
         * console.log(elementsToRemove.length) // 3
         *
         * mixer.remove(elementsToRemove)
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 3: Removing one or more elements by selector</caption>
         *
         * mixer.remove('.category-a')
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 4: Removing an element by index</caption>
         *
         * console.log(mixer.getState.totalShow); // 4
         *
         * // Remove the element at index 3
         *
         * mixer.remove(3)
         *      .then(function(state) {
         *          console.log(state.totalShow); // 3
         *          console.log(state.show[3]); // undefined
         *      });
         *
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        remove: function() {
            var self = this,
                args = self.parseRemoveArgs(arguments);

            return self.multimix({
                remove: args.command
            }, args.animate, args.callback);
        },

        /**
         * Retrieves the the value of any property or sub-object within the current
         * mixitup configuration, or the whole configuration object.
         *
         * @example
         *
         * .getConfig([stringKey])
         *
         * @example <caption>Example 1: retrieve the entire configuration object</caption>
         *
         * var config = mixer.getConfig(); // Config { ... }
         *
         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
         *
         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
         *
         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
         *
         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    [stringKey]    A "dot-notation" string key
         * @return      {*}
         */

        getConfig: function(stringKey) {
            var self    = this,
                value   = null;

            if (!stringKey) {
                value = self.config;
            } else {
                value = h.getProperty(self.config, stringKey);
            }

            return self.callFilters('valueGetConfig', value, arguments);
        },

        /**
         * Updates the configuration of the mixer, after it has been instantiated.
         *
         * See the Configuration Object documentation for a full list of avilable
         * configuration options.
         *
         * @example
         *
         * .configure(config)
         *
         * @example <caption>Example 1: Updating animation options</caption>
         *
         * mixer.configure({
         *     animation: {
         *         effects: 'fade translateX(-100%)',
         *         duration: 300
         *     }
         * });
         *
         * @example <caption>Example 2: Removing a callback after it has been set</caption>
         *
         * var mixer;
         *
         * function handleMixEndOnce() {
         *     // Do something ..
         *
         *     // Then nullify the callback
         *
         *     mixer.configure({
         *         callbacks: {
         *             onMixEnd: null
         *         }
         *     });
         * };
         *
         * // Instantiate a mixer with a callback defined
         *
         * mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: handleMixEndOnce
         *     }
         * });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {object}    config
         *      An object containing one of more configuration options.
         * @return      {void}
         */

        configure: function(config) {
            var self = this;

            self.callActions('beforeConfigure', arguments);

            h.extend(self.config, config, true, true);

            self.callActions('afterConfigure', arguments);
        },

        /**
         * Returns an object containing information about the current state of the
         * mixer. See the State Object documentation for more information.
         *
         * NB: State objects are immutable and should therefore be regenerated
         * after any operation.
         *
         * @example
         *
         * .getState();
         *
         * @example <caption>Example: Retrieving a state object</caption>
         *
         * var state = mixer.getState();
         *
         * console.log(state.totalShow + 'targets are currently shown');
         *
         * @public
         * @instance
         * @since       2.0.0
         * @return      {mixitup.State} An object reflecting the current state of the mixer.
         */

        getState: function() {
            var self    = this,
                state   = null;

            state = new mixitup.State();

            h.extend(state, self.state);

            h.freeze(state);

            return self.callFilters('stateGetState', state, arguments);
        },

        /**
         * Forces the re-indexing all targets within the container.
         *
         * This should only be used if some other piece of code in your application
         * has manipulated the contents of your container, which should be avoided.
         *
         * If you need to add or remove target elements from the container, use
         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
         * itself up to date.
         *
         * @example
         *
         * .forceRefresh()
         *
         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * // An element is removed from the container via some external DOM manipulation code:
         *
         * containerEl.removeChild(containerEl.firstElementChild);
         *
         * // The mixer does not know that the number of targets has changed:
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * mixer.forceRefresh();
         *
         * // After forceRefresh, the mixer is in sync again:
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * @public
         * @instance
         * @since 2.1.2
         * @return {void}
         */

        forceRefresh: function() {
            var self = this;

            self.indexTargets();
        },

        /**
         * Removes mixitup functionality from the container, unbinds all control
         * event handlers, and deletes the mixer instance from MixItUp's internal
         * cache.
         *
         * This should be performed whenever a mixer's container is removed from
         * the DOM, such as during a page change in a single page application,
         * or React's `componentWillUnmount()`.
         *
         * @example
         *
         * .destroy([cleanUp])
         *
         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
         *
         * mixer.destroy();
         *
         * containerEl.parentElement.removeChild(containerEl);
         *
         * @public
         * @instance
         * @since   2.0.0
         * @param   {boolean}   [cleanUp=false]
         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
         * @return  {void}
         */

        destroy: function(cleanUp) {
            var self    = this,
                control = null,
                target  = null,
                i       = 0;

            self.callActions('beforeDestroy', arguments);

            for (i = 0; control = self.controls[i]; i++) {
                control.removeBinding(self);
            }

            for (i = 0; target = self.targets[i]; i++) {
                if (cleanUp) {
                    target.show();
                }

                target.unbindEvents();
            }

            if (self.dom.container.id.match(/^MixItUp/)) {
                self.dom.container.removeAttribute('id');
            }

            delete mixitup.instances[self.id];

            self.callActions('afterDestroy', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.IMoveData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.posIn          = null;
        this.posOut         = null;
        this.operation      = null;
        this.callback       = null;
        this.statusChange   = '';
        this.duration       = -1;
        this.staggerIndex   = -1;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.IMoveData);

    mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TargetDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TargetDom);

    mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;

    /**
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Target = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id         = '';
        this.sortString = '';
        this.mixer      = null;
        this.callback   = null;
        this.isShown    = false;
        this.isBound    = false;
        this.isExcluded = false;
        this.isInDom    = false;
        this.handler    = null;
        this.operation  = null;
        this.data       = null;
        this.dom        = new mixitup.TargetDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Target);

    mixitup.Target.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Target.prototype, {
        constructor: mixitup.Target,

        /**
         * Initialises a newly instantiated Target.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {(Element|null)}    el
         * @param   {object}            mixer
         * @param   {object}            [data]
         * @return  {void}
         */

        init: function(el, mixer, data) {
            var self = this,
                id   = '';

            self.callActions('beforeInit', arguments);

            self.mixer = mixer;

            if (!el) {
                // If no element is provided, render it

                el = self.render(data);
            }

            self.cacheDom(el);

            self.bindEvents();

            if (self.dom.el.style.display !== 'none') {
                self.isShown = true;
            }

            if (data && mixer.config.data.uidKey) {
                if (typeof (id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: mixer.config.data.uidKey
                    }));
                }

                self.id     = id;
                self.data   = data;

                mixer.cache[id] = self;
            }

            self.callActions('afterInit', arguments);
        },

        /**
         * Renders the target element using a user-defined renderer function.
         *
         * @private
         * @instance
         * @since   3.1.4
         * @param   {object} data
         * @return  {void}
         */

        render: function(data) {
            var self    = this,
                render  = null,
                el      = null,
                temp    = null,
                output  = '';

            self.callActions('beforeRender', arguments);

            render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);

            if (typeof render !== 'function') {
                throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
            }

            output = render(data);

            if (output && typeof output === 'object' && h.isElement(output)) {
                el = output;
            } else if (typeof output === 'string') {
                temp = document.createElement('div');
                temp.innerHTML = output;

                el = temp.firstElementChild;
            }

            return self.callFilters('elRender', el, arguments);
        },

        /**
         * Caches references of DOM elements neccessary for the target's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Element} el
         * @return  {void}
         */

        cacheDom: function(el) {
            var self = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.el = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    attributeName
         * @return  {void}
         */

        getSortString: function(attributeName) {
            var self    = this,
                value   = self.dom.el.getAttribute('data-' + attributeName) || '';

            self.callActions('beforeGetSortString', arguments);

            value = isNaN(value * 1) ?
                value.toLowerCase() :
                value * 1;

            self.sortString = value;

            self.callActions('afterGetSortString', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        show: function() {
            var self = this;

            self.callActions('beforeShow', arguments);

            if (!self.isShown) {
                self.dom.el.style.display = '';

                self.isShown = true;
            }

            self.callActions('afterShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        hide: function() {
            var self = this;

            self.callActions('beforeHide', arguments);

            if (self.isShown) {
                self.dom.el.style.display = 'none';

                self.isShown = false;
            }

            self.callActions('afterHide', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        move: function(moveData) {
            var self = this;

            self.callActions('beforeMove', arguments);

            if (!self.isExcluded) {
                self.mixer.targetsMoved++;
            }

            self.applyStylesIn(moveData);

            requestAnimationFrame(function() {
                self.applyStylesOut(moveData);
            });

            self.callActions('afterMove', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}    posData
         * @param   {number}    multiplier
         * @return  {void}
         */

        applyTween: function(posData, multiplier) {
            var self                    = this,
                propertyName            = '',
                tweenData               = null,
                posIn                   = posData.posIn,
                currentTransformValues  = [],
                currentValues           = new mixitup.StyleData(),
                i                       = -1;

            self.callActions('beforeApplyTween', arguments);

            currentValues.x     = posIn.x;
            currentValues.y     = posIn.y;

            if (multiplier === 0) {
                self.hide();
            } else if (!self.isShown) {
                self.show();
            }

            for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                tweenData = posData.tweenData[propertyName];

                if (propertyName === 'x') {
                    if (!tweenData) continue;

                    currentValues.x = posIn.x + (tweenData * multiplier);
                } else if (propertyName === 'y') {
                    if (!tweenData) continue;

                    currentValues.y = posIn.y + (tweenData * multiplier);
                } else if (tweenData instanceof mixitup.TransformData) {
                    if (!tweenData.value) continue;

                    currentValues[propertyName].value =
                        posIn[propertyName].value + (tweenData.value * multiplier);

                    currentValues[propertyName].unit  = tweenData.unit;

                    currentTransformValues.push(
                        propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')'
                    );
                } else {
                    if (!tweenData) continue;

                    currentValues[propertyName] = posIn[propertyName] + (tweenData * multiplier);

                    self.dom.el.style[propertyName] = currentValues[propertyName];
                }
            }

            if (currentValues.x || currentValues.y) {
                currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)');
            }

            if (currentTransformValues.length) {
                self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(' ');
            }

            self.callActions('afterApplyTween', arguments);
        },

        /**
         * Applies the initial styling to a target element before any transition
         * is applied.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesIn: function(moveData) {
            var self            = this,
                posIn           = moveData.posIn,
                isFading        = self.mixer.effectsIn.opacity !== 1,
                transformValues = [];

            self.callActions('beforeApplyStylesIn', arguments);

            transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');

            if (self.mixer.config.animation.animateResizeTargets) {
                if (moveData.statusChange !== 'show') {
                    // Don't apply posIn width or height or showing, as will be 0

                    self.dom.el.style.width  = posIn.width + 'px';
                    self.dom.el.style.height = posIn.height + 'px';
                }

                self.dom.el.style.marginRight  = posIn.marginRight + 'px';
                self.dom.el.style.marginBottom = posIn.marginBottom + 'px';
            }

            isFading && (self.dom.el.style.opacity = posIn.opacity);

            if (moveData.statusChange === 'show') {
                transformValues = transformValues.concat(self.mixer.transformIn);
            }

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesIn', arguments);
        },

        /**
         * Applies a transition followed by the final styles for the element to
         * transition towards.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesOut: function(moveData) {
            var self            = this,
                transitionRules = [],
                transformValues = [],
                isResizing      = self.mixer.config.animation.animateResizeTargets,
                isFading        = typeof self.mixer.effectsIn.opacity !== 'undefined';

            self.callActions('beforeApplyStylesOut', arguments);

            // Build the transition rules

            transitionRules.push(self.writeTransitionRule(
                mixitup.features.transformRule,
                moveData.staggerIndex
            ));

            if (moveData.statusChange !== 'none') {
                transitionRules.push(self.writeTransitionRule(
                    'opacity',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            if (isResizing) {
                transitionRules.push(self.writeTransitionRule(
                    'width',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'height',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'margin',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            // If no callback was provided, the element will
            // not transition in any way so tag it as "immovable"

            if (!moveData.callback) {
                self.mixer.targetsImmovable++;

                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
                    // If the total targets moved is equal to the
                    // number of immovable targets, the operation
                    // should be considered finished

                    self.mixer.cleanUp(moveData.operation);
                }

                return;
            }

            // If the target will transition in some fasion,
            // assign a callback function

            self.operation = moveData.operation;
            self.callback = moveData.callback;

            // As long as the target is not excluded, increment
            // the total number of targets bound

            !self.isExcluded && self.mixer.targetsBound++;

            // Tag the target as bound to differentiate from transitionEnd
            // events that may come from stylesheet driven effects

            self.isBound = true;

            // Apply the transition

            self.applyTransition(transitionRules);

            // Apply width, height and margin negation

            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                self.dom.el.style.width        = moveData.posOut.width + 'px';
                self.dom.el.style.height       = moveData.posOut.height + 'px';
                self.dom.el.style.marginRight  = moveData.posOut.marginRight + 'px';
                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px';
            }

            if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
                // If we're not nudging, the translation should be
                // applied before any other transforms to prevent
                // lateral movement

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply fade

            switch (moveData.statusChange) {
                case 'hide':
                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);

                    transformValues = transformValues.concat(self.mixer.transformOut);

                    break;
                case 'show':
                    isFading && (self.dom.el.style.opacity = 1);
            }

            if (
                self.mixer.config.animation.nudge ||
                (!self.mixer.config.animation.nudge && moveData.statusChange !== 'hide')
            ) {
                // Opposite of above - apply translate after
                // other transform

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply transforms

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesOut', arguments);
        },

        /**
         * Combines the name of a CSS property with the appropriate duration and delay
         * values to created a valid transition rule.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    property
         * @param   {number}    staggerIndex
         * @param   {number}    duration
         * @return  {string}
         */

        writeTransitionRule: function(property, staggerIndex, duration) {
            var self  = this,
                delay = self.getDelay(staggerIndex),
                rule  = '';

            rule = property + ' ' +
                (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' +
                delay + 'ms ' +
                (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);

            return self.callFilters('ruleWriteTransitionRule', rule, arguments);
        },

        /**
         * Calculates the transition delay for each target element based on its index, if
         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
         * function can be used to manipulate the order of indices to produce custom
         * stagger effects (e.g. for use in a grid with irregular row lengths).
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {number}    index
         * @return  {number}
         */

        getDelay: function(index) {
            var self    = this,
                delay   = -1;

            if (typeof self.mixer.config.animation.staggerSequence === 'function') {
                index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
            }

            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;

            return self.callFilters('delayGetDelay', delay, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string[]}  rules
         * @return  {void}
         */

        applyTransition: function(rules) {
            var self                = this,
                transitionString    = rules.join(', ');

            self.callActions('beforeApplyTransition', arguments);

            self.dom.el.style[mixitup.features.transitionProp] = transitionString;

            self.callActions('afterApplyTransition', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event} e
         * @return  {void}
         */

        handleTransitionEnd: function(e) {
            var self        = this,
                propName    = e.propertyName,
                canResize   = self.mixer.config.animation.animateResizeTargets;

            self.callActions('beforeHandleTransitionEnd', arguments);

            if (
                self.isBound &&
                e.target.matches(self.mixer.config.selectors.target) &&
                (
                    propName.indexOf('transform') > -1 ||
                    propName.indexOf('opacity') > -1 ||
                    canResize && propName.indexOf('height') > -1 ||
                    canResize && propName.indexOf('width') > -1 ||
                    canResize && propName.indexOf('margin') > -1
                )
            ) {
                self.callback.call(self, self.operation);

                self.isBound = false;
                self.callback = null;
                self.operation = null;
            }

            self.callActions('afterHandleTransitionEnd', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event}     e
         * @return  {void}
         */

        eventBus: function(e) {
            var self = this;

            self.callActions('beforeEventBus', arguments);

            switch (e.type) {
                case 'webkitTransitionEnd':
                case 'transitionend':
                    self.handleTransitionEnd(e);
            }

            self.callActions('afterEventBus', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        unbindEvents: function() {
            var self = this;

            self.callActions('beforeUnbindEvents', arguments);

            h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
            h.off(self.dom.el, 'transitionend', self.handler);

            self.callActions('afterUnbindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        bindEvents: function() {
            var self                = this,
                transitionEndEvent  = '';

            self.callActions('beforeBindEvents', arguments);

            transitionEndEvent = mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';

            self.handler = function(e) {
                return self.eventBus(e);
            };

            h.on(self.dom.el, transitionEndEvent, self.handler);

            self.callActions('afterBindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   [getBox]
         * @return  {PosData}
         */

        getPosData: function(getBox) {
            var self    = this,
                styles  = {},
                rect    = null,
                posData = new mixitup.StyleData();

            self.callActions('beforeGetPosData', arguments);

            posData.x = self.dom.el.offsetLeft;
            posData.y = self.dom.el.offsetTop;

            if (self.mixer.config.animation.animateResizeTargets || getBox) {
                rect = self.dom.el.getBoundingClientRect();

                posData.top     = rect.top;
                posData.right   = rect.right;
                posData.bottom  = rect.bottom;
                posData.left    = rect.left;

                posData.width  = rect.width;
                posData.height = rect.height;
            }

            if (self.mixer.config.animation.animateResizeTargets) {
                styles = window.getComputedStyle(self.dom.el);

                posData.marginBottom = parseFloat(styles.marginBottom);
                posData.marginRight  = parseFloat(styles.marginRight);
            }

            return self.callFilters('posDataGetPosData', posData, arguments);
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @return      {void}
         */

        cleanUp: function() {
            var self = this;

            self.callActions('beforeCleanUp', arguments);

            self.dom.el.style[mixitup.features.transformProp]  = '';
            self.dom.el.style[mixitup.features.transitionProp] = '';
            self.dom.el.style.opacity                          = '';

            if (self.mixer.config.animation.animateResizeTargets) {
                self.dom.el.style.width        = '';
                self.dom.el.style.height       = '';
                self.dom.el.style.marginRight  = '';
                self.dom.el.style.marginBottom = '';
            }

            self.callActions('afterCleanUp', arguments);
        }
    });

    /**
     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
     *
     * @example
     * new mixitup.Collection(instances)
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer[]}   instances
     */

    mixitup.Collection = function(instances) {
        var instance    = null,
            i           = -1;

        this.callActions('beforeConstruct');

        for (i = 0; instance = instances[i]; i++) {
            this[i] = instance;
        }

        this.length = instances.length;

        this.callActions('afterConstruct');

        h.freeze(this);
    };

    mixitup.BaseStatic.call(mixitup.Collection);

    mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Collection.prototype,
    /** @lends mixitup.Collection */
    {
        constructor: mixitup.Collection,

        /**
         * Calls a method on all instances in the collection by passing the method
         * name as a string followed by any applicable parameters to be curried into
         * to the method.
         *
         * @example
         * .mixitup(methodName[,arg1][,arg2..]);
         *
         * @example
         * var collection = new Collection([mixer1, mixer2]);
         *
         * return collection.mixitup('filter', '.category-a')
         *     .then(function(states) {
         *         state.forEach(function(state) {
         *             console.log(state.activeFilter.selector); // .category-a
         *         });
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}  methodName
         * @return      {Promise<Array<mixitup.State>>}
         */

        mixitup: function(methodName) {
            var self        = this,
                instance    = null,
                args        = Array.prototype.slice.call(arguments),
                tasks       = [],
                i           = -1;

            this.callActions('beforeMixitup');

            args.shift();

            for (i = 0; instance = self[i]; i++) {
                tasks.push(instance[methodName].apply(instance, args));
            }

            return self.callFilters('promiseMixitup', h.all(tasks, mixitup.libraries), arguments);
        }
    });

    /**
     * `mixitup.Operation` objects contain all data neccessary to describe the full
     * lifecycle of any MixItUp operation. They can be used to compute and store an
     * operation for use at a later time (e.g. programmatic tweening).
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Operation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id                      = '';

        this.args                    = [];
        this.command                 = null;
        this.showPosData             = [];
        this.toHidePosData           = [];

        this.startState              = null;
        this.newState                = null;
        this.docState                = null;

        this.willSort                = false;
        this.willChangeLayout        = false;
        this.hasEffect               = false;
        this.hasFailed               = false;

        this.triggerElement          = null;

        this.show                    = [];
        this.hide                    = [];
        this.matching                = [];
        this.toShow                  = [];
        this.toHide                  = [];
        this.toMove                  = [];
        this.toRemove                = [];
        this.startOrder              = [];
        this.newOrder                = [];
        this.startSort               = null;
        this.newSort                 = null;
        this.startFilter             = null;
        this.newFilter               = null;
        this.startDataset            = null;
        this.newDataset              = null;
        this.startX                  = 0;
        this.startY                  = 0;
        this.startHeight             = 0;
        this.startWidth              = 0;
        this.newX                    = 0;
        this.newY                    = 0;
        this.newHeight               = 0;
        this.newWidth                = 0;
        this.startContainerClassName = '';
        this.startDisplay            = '';
        this.newContainerClassName   = '';
        this.newDisplay              = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Operation);

    mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Operation.prototype.constructor = mixitup.Operation;

    /**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.State = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The ID of the mixer instance.
         *
         * @name        id
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.id = '';

        /**
         * The currently active filter command as set by a control click or API call.
         *
         * @name        activeFilter
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandFilter}
         * @default     null
         */

        this.activeFilter = null;

        /**
         * The currently active sort command as set by a control click or API call.
         *
         * @name        activeSort
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandSort}
         * @default     null
         */

        this.activeSort = null;

        /**
         * The current layout-specific container class name, if applied.
         *
         * @name        activeContainerClassName
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.activeContainerClassName = '';

        /**
         * A reference to the container element that the mixer is instantiated on.
         *
         * @name        container
         * @memberof    mixitup.State
         * @instance
         * @type        {Element}
         * @default     null
         */

        this.container = null;

        /**
         * An array of all target elements indexed by the mixer.
         *
         * @name        targets
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.targets = [];

        /**
         * An array of all target elements not matching the current filter.
         *
         * @name        hide
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.hide = [];

        /**
         * An array of all target elements matching the current filter and any additional
         * limits applied such as pagination.
         *
         * @name        show
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.show = [];

        /**
         * An array of all target elements matching the current filter irrespective of
         * any additional limits applied such as pagination.
         *
         * @name        matching
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.matching = [];

        /**
         * An integer representing the total number of target elements indexed by the
         * mixer. Equivalent to `state.targets.length`.
         *
         * @name        totalTargets
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalTargets = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter and any additional limits applied such as pagination.
         * Equivalent to `state.show.length`.
         *
         * @name        totalShow
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalShow = -1;

        /**
         * An integer representing the total number of target elements not matching
         * the current filter. Equivalent to `state.hide.length`.
         *
         * @name        totalHide
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalHide = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter irrespective of any other limits applied such as pagination.
         * Equivalent to `state.matching.length`.
         *
         * @name        totalMatching
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalMatching = -1;

        /**
         * A boolean indicating whether the last operation "failed", i.e. no targets
         * could be found matching the filter.
         *
         * @name        hasFailed
         * @memberof    mixitup.State
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.hasFailed = false;

        /**
         * The DOM element that was clicked if the last operation was triggered by the
         * clicking of a control and not an API call.
         *
         * @name        triggerElement
         * @memberof    mixitup.State
         * @instance
         * @type        {Element|null}
         * @default     null
         */

        this.triggerElement = null;

        /**
         * The currently active dataset underlying the rendered targets, if the
         * dataset API is in use.
         *
         * @name        activeDataset
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.activeDataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.State);

    mixitup.State.prototype = Object.create(mixitup.Base.prototype);

    mixitup.State.prototype.constructor = mixitup.State;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UserInstruction = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.command    = {};
        this.animate    = false;
        this.callback   = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UserInstruction);

    mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Messages = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /* Errors
        ----------------------------------------------------------------------------- */

        this.ERROR_FACTORY_INVALID_CONTAINER =
            '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';

        this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
            '[MixItUp] The provided selector yielded no container element';

        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
            '[MixItUp] Invalid value for `animation.effects`';

        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
            '[MixItUp] Invalid value for `controls.scope`';

        this.ERROR_CONFIG_INVALID_PROPERTY =
            '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';

        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
            '. Did you mean "${probableMatch}"?';

        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
            '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';

        this.ERROR_DATASET_INVALID_UID_KEY =
            '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';

        this.ERROR_DATASET_DUPLICATE_UID =
            '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';

        this.ERROR_INSERT_INVALID_ARGUMENTS =
            '[MixItUp] Please provider either an index or a sibling and position to insert, not both';

        this.ERROR_INSERT_PREEXISTING_ELEMENT =
            '[MixItUp] An element to be inserted already exists in the container';

        this.ERROR_FILTER_INVALID_ARGUMENTS =
            '[MixItUp] Please provide either a selector or collection `.filter()`, not both';

        this.ERROR_DATASET_NOT_SET =
            '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';

        this.ERROR_DATASET_PRERENDERED_MISMATCH =
            '[MixItUp] `load.dataset` does not match pre-rendered targets';

        this.ERROR_DATASET_RENDERER_NOT_SET =
            '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';

        /* Warnings
        ----------------------------------------------------------------------------- */

        this.WARNING_FACTORY_PREEXISTING_INSTANCE =
            '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' +
            ' If you wish to perform additional methods on this instance, please create a reference.';

        this.WARNING_INSERT_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.insert()`';

        this.WARNING_REMOVE_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.remove()`';

        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
            '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' +
            'queue is full or queuing is disabled.';

        this.WARNING_GET_OPERATION_INSTANCE_BUSY =
            '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';

        this.WARNING_NO_PROMISE_IMPLEMENTATION =
            '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' +
            ' an ES6 Promise polyfill.';

        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
            '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' +
            ' which may product unexpected sort output';

        this.callActions('afterConstruct');

        this.compileTemplates();

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Messages);

    mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Messages.prototype.constructor = mixitup.Messages;

    /**
     * @return {void}
     */

    mixitup.Messages.prototype.compileTemplates = function() {
        var errorKey        = '';
        var errorMessage    = '';

        for (errorKey in this) {
            if (typeof (errorMessage = this[errorKey]) !== 'string') continue;

            this[h.camelCase(errorKey)] = h.template(errorMessage);
        }
    };

    mixitup.messages = new mixitup.Messages();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer} mixer
     */

    mixitup.Facade = function Mixer(mixer) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct', arguments);

        this.configure          = mixer.configure.bind(mixer);
        this.show               = mixer.show.bind(mixer);
        this.hide               = mixer.hide.bind(mixer);
        this.filter             = mixer.filter.bind(mixer);
        this.toggleOn           = mixer.toggleOn.bind(mixer);
        this.toggleOff          = mixer.toggleOff.bind(mixer);
        this.sort               = mixer.sort.bind(mixer);
        this.changeLayout       = mixer.changeLayout.bind(mixer);
        this.multimix           = mixer.multimix.bind(mixer);
        this.multiMix           = mixer.multimix.bind(mixer);
        this.dataset            = mixer.dataset.bind(mixer);
        this.tween              = mixer.tween.bind(mixer);
        this.insert             = mixer.insert.bind(mixer);
        this.insertBefore       = mixer.insertBefore.bind(mixer);
        this.insertAfter        = mixer.insertAfter.bind(mixer);
        this.prepend            = mixer.prepend.bind(mixer);
        this.append             = mixer.append.bind(mixer);
        this.remove             = mixer.remove.bind(mixer);
        this.destroy            = mixer.destroy.bind(mixer);
        this.forceRefresh       = mixer.forceRefresh.bind(mixer);
        this.isMixing           = mixer.isMixing.bind(mixer);
        this.getOperation       = mixer.getOperation.bind(mixer);
        this.getConfig          = mixer.getConfig.bind(mixer);
        this.getState           = mixer.getState.bind(mixer);

        this.callActions('afterConstruct', arguments);

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Facade);

    mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Facade.prototype.constructor = mixitup.Facade;

    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = mixitup;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return mixitup;
        });
    } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
        window.mixitup = window.mixItUp = mixitup;
    }

    if ((jq = window.$ || window.jQuery) && jq.fn.jquery) {
        mixitup.registerJqPlugin(jq);
    }
    mixitup.BaseStatic.call(mixitup.constructor);

    mixitup.NAME = 'mixitup';
    mixitup.CORE_VERSION = '3.1.10';
})(window);



//=====================================//
//========== 4. Owl Carousel ==========//
//=====================================//
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                'initializing': [ 'busy' ],
                'animating': [ 'busy' ],
                'dragging': [ 'interacting' ]
            }
        };

        $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [ {
        filter: [ 'width', 'settings' ],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };

            !grid && this.$stage.children().css(css);

            cache.css = css;
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];

            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

                cache.items.merge = merge > 1 || cache.items.merge;

                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                // TODO: Should be computed from number of min width items in stage
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';

            repeat /= 2;

            while (repeat--) {
                // Switch to only using appended clones
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();

            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: [ 'items' ],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: [ 'position' ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ 'width', 'position', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                    || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            if (this.settings.center) {
                this.$stage.children('.center').removeClass('center');
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    } ];

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
            .wrap('<div class="' + this.settings.stageOuterClass + '"/>');

        // append stage
        this.$element.append(this.$stage.parent());

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.$element.is(':visible')) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);

        // register event handlers
        this.registerEventHandlers();

        this.leave('initializing');
        this.trigger('initialized');
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        this.trigger('change', { property: { name: 'settings', value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }

        this.trigger('prepared', { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) { return this[p] }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is('valid') && this.enter('valid');
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave('refreshing');
        this.trigger('refreshed');
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.$element.is(':visible')) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');

        this.refresh();

        this.leave('resizing');
        this.trigger('resized');
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
        }

        if (this.settings.touchDrag){
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin :
                    stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));

            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();

            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);

        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();

            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() { return false; });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function(index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                // on a right pull, check on previous index
                // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();

        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function(v, i) { return i });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress([ 'translate', 'translated' ]);

        this.animate(this.coordinates(position));

        this.release([ 'translate', 'translated' ]);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

        if (position === undefined) {
            return $.map(this._clones, function(v, i) { return map(i) });
        }

        return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.$element.is(':visible')) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function(event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);

        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger('add', { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate('items');

        this.trigger('added', { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {

        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();

        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
            item: { count: this._items.length, index: this.current() }
        }, handler = $.camelCase(
            $.grep([ 'on', name, namespace ], function(v) { return v })
                .join('-').toLowerCase()
        ), event = $.Event(
            [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
            $.extend({ relatedTarget: this }, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function(name) {
        $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }

            this._states.current[name]++;
        }, this));
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function(name) {
        $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--;
        }, this));
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
                event.changedTouches[0] : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');

            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);

                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function(i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([ event ]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([ event ]);
                        }
                    }, data));
                });
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return;
        }

        this._visible = this._core.$element.is(':visible');
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(':visible') === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass('owl-hidden', !this._visible);

        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function() {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) { this.load(v) }, this);

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function(index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

            this._core.trigger('load', { element: $element, url: url }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {
            var type = (function() {
                    if (target.attr('data-vimeo-id')) {
                        return 'vimeo';
                    } else if (target.attr('data-vzaar-id')) {
                        return 'vzaar'
                    } else {
                        return 'youtube';
                    }
                })(),
                id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
                width = target.attr('data-width') || this._core.settings.videoWidth,
                height = target.attr('data-height') || this._core.settings.videoHeight,
                url = target.attr('href');

        if (url) {

            /*
                    Parses the id's out of the following urls (and probably more):
                    https://www.youtube.com/watch?v=:id
                    https://youtu.be/:id
                    https://vimeo.com/:id
                    https://vimeo.com/channels/:channel/:id
                    https://vimeo.com/groups/:group/videos/:id
                    https://app.vzaar.com/videos/:id

                    Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
            */

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
                video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="//player.vimeo.com/video/' + video.id +
                '?autoplay=1" width="' + width + '" height="' + height +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === 'vzaar') {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
        }

        $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

        this._playing = item.addClass('owl-video-playing');
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
                document.webkitFullscreenElement;

        return element && $(element).parent().hasClass('owl-video-frame');
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {

        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css( { 'left': left + 'px' } )
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function(e) {
        $(e.target).css( { 'left': '' } )
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout.
         * @type {Timeout}
         */
        this._timeout = null;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = false;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    //console.log('play?', e);
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = false;

        if (this._core.is('rotating')) {
            return;
        }

        this._core.enter('rotating');

        this._setAutoPlayInterval();
    };

    /**
     * Gets a new timeout
     * @private
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     * @return {Timeout}
     */
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if ( this._timeout ) {
            window.clearTimeout(this._timeout);
        }
        return window.setTimeout($.proxy(function() {
            if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }, this), timeout || this._core.settings.autoplayTimeout);
    };

    /**
     * Sets autoplay in motion.
     * @private
     */
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
        if (!this._core.is('rotating')) {
            return;
        }

        window.clearTimeout(this._timeout);
        this._core.leave('rotating');
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
        if (!this._core.is('rotating')) {
            return;
        }

        this._paused = true;
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [ 'prev', 'next' ],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [ 'owl-prev', 'owl-next' ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
            : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [ $('<div>')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML') ];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
            : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute)
                ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, settings.dotsSpeed);
        }, this));

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
        var position, length,
            settings = this._core.settings;

        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);

            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test('transform');
            },
            csstransforms3d: function() {
                return !!test('perspective');
            },
            csstransitions: function() {
                return !!test('transition');
            },
            cssanimations: function() {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[ $.support.transition ];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[ $.support.animation ];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }

})(window.Zepto || window.jQuery, window, document);


//==============================//
//========== 5. GMaps ==========//
//==============================//
"use strict";
(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define(['jquery', 'googlemaps!'], factory);
  }
  else {
    root.GMaps = factory();
  }


}(this, function() {

/*!
 * GMaps.js v0.4.25
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2017, Gustavo Leon
 * Released under the MIT License.
 */

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    if (new_obj[name] !== undefined) {
      obj[name] = new_obj[name];
    }
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      var callback_params = original_callback_params.slice(0);
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};

var getElementsByClassName = function (class_name, context) {
    var element,
        _class = class_name.replace('.', '');

    if ('jQuery' in this && context) {
        element = $("." + _class, context)[0];
    } else {
        element = document.getElementsByClassName(_class)[0];
    }
    return element;

};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in window && context) {
    element = $('#' + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
      var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);

      return [(rect.left - sx), (rect.top - sy)];
  }

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  "use strict";

  var doc = document;
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @class GMaps
   * @constructs
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * * `lat` (number): Latitude of the map's center
   * * `lng` (number): Longitude of the map's center
   * * `el` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  var GMaps = function(options) {

    if (!(typeof window.google === 'object' && window.google.maps)) {
      if (typeof window.console === 'object' && window.console.error) {
        console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
      }

      return function() {};
    }

    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var valueOrDefault = function(value, defaultValue) {
      return value === undefined ? defaultValue : value;
    };

    var self = this,
        i,
        events_that_hide_context_menu = [
          'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
          'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
          'resize', 'tilesloaded', 'zoom_changed'
        ],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        identifier = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = valueOrDefault(options.zoomControl, true),
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = valueOrDefault(options.panControl, true),
        mapTypeControl = valueOrDefault(options.mapTypeControl, true),
        scaleControl = valueOrDefault(options.scaleControl, true),
        streetViewControl = valueOrDefault(options.streetViewControl, true),
        overviewMapControl = valueOrDefault(overviewMapControl, true),
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

      if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
        if (identifier.indexOf("#") > -1) {
            /**
             * Container element
             *
             * @type {HTMLElement}
             */
            this.el = getElementById(identifier, options.context);
        } else {
            this.el = getElementsByClassName.apply(this, [identifier, options.context]);
        }
      } else {
          this.el = identifier;
      }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    /**
     * Collection of custom controls in the map UI
     *
     * @type {array}
     */
    this.controls = [];
    /**
     * Collection of map's overlays
     *
     * @type {array}
     */
    this.overlays = [];
    /**
     * Collection of KML/GeoRSS and FusionTable layers
     *
     * @type {array}
     */
    this.layers = [];
    /**
     * Collection of data layers (See {@link GMaps#addLayer})
     *
     * @type {object}
     */
    this.singleLayers = {};
    /**
     * Collection of map's markers
     *
     * @type {array}
     */
    this.markers = [];
    /**
     * Collection of map's lines
     *
     * @type {array}
     */
    this.polylines = [];
    /**
     * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
     *
     * @type {array}
     */
    this.routes = [];
    /**
     * Collection of map's polygons
     *
     * @type {array}
     */
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    /**
     * Current map's zoom
     *
     * @type {number}
     */
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    /**
     * Google Maps map instance
     *
     * @type {google.maps.Map}
     */
    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      /**
       * Marker Clusterer instance
       *
       * @type {object}
       */
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');

      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      // context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);

        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();

          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      setTimeout(function() {
        context_menu_element.style.display = 'block';
      }, 0);
    };

    /**
     * Add a context menu for a map or a marker.
     *
     * @param {object} options - The `options` object should contain:
     * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
     * * `options` (array): A collection of context menu items:
     *   * `title` (string): Item's title shown in the context menu.
     *   * `name` (string): Item's identifier.
     *   * `action` (function): Function triggered after selecting the context menu item.
     */
    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      if (!getElementById('gmaps_context_menu')) {
        doc.body.appendChild(ul);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    /**
     * Hide the current context menu
     */
    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    /**
     * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
     */
    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    /**
     * Adjust the map zoom to include all the markers added in the map.
     */
    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    /**
     * Adjust the map zoom to include all the coordinates in the `latLngs` array.
     *
     * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
     */
    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;

      for(i = 0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    /**
     * Center the map using the `lat` and `lng` coordinates.
     *
     * @param {number} lat - Latitude of the coordinate.
     * @param {number} lng - Longitude of the coordinate.
     * @param {function} [callback] - Callback that will be executed after the map is centered.
     */
    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    /**
     * Return the HTML element container of the map.
     *
     * @returns {HTMLElement} the element container.
     */
    this.getElement = function() {
      return this.el;
    };

    /**
     * Increase the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed in.
     */
    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    /**
     * Decrease the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed out.
     */
    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i = 0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';

  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.title) {
    control.title = options.title;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    if (typeof options.content === 'string') {
      control.innerHTML = options.content;
    }
    else if (options.content instanceof HTMLElement) {
      control.appendChild(options.content);
    }
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

/**
 * Add a custom control to the map UI.
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);

  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function(control) {
  var position = null,
      i;

  for (i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position];

      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);

        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }

          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);

      GMaps.fire('marker_removed', marker, this);
    }

    if(this.markerClusterer && this.markerClusterer.clearMarkers) {
      this.markerClusterer.clearMarkers();
    }

    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      var index = this.markers.indexOf(collection[i]);

      if (index > -1) {
        var marker = this.markers[index];
        marker.setMap(null);

        if(this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }

        GMaps.fire('marker_removed', marker, this);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      if (marker.getMap() != null) {
        new_markers.push(marker);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.el);
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i = 0, latlng; latlng = points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      routes = [],
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(routes, result, status);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes.length = 0;
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function(options, renderOptions) {
  var self = this,
      panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
      display;

  renderOptions.panel = panel;
  renderOptions = extend_object({
    map: this.map
  }, renderOptions);
  display = new google.maps.DirectionsRenderer(renderOptions);

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    }
  });
};

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes) {
      if (routes.length > 0) {
        var polyline_options = {
          path: routes[routes.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);

        if (options.callback) {
          options.callback(routes[routes.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;

  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              var polyline_options = {
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              };

              if (options.hasOwnProperty("icons")) {
                polyline_options.icons = options.icons;
              }

              self.drawPolyline(polyline_options);
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        var polyline_options = {
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  var polyline_options = {
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  };

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  this.polyline = this.map.drawPolyline(polyline_options).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i = 0; data = markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.prototype.once = function(event_name, handler) {
  return GMaps.once(event_name, this, handler);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.once = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map;
    return google.maps.event.addListenerOnce(object, event_name, handler);
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

if (typeof window.google === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;

      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }

      return bounds;
    };
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function(latLng) {
      // Exclude points outside of bounds as there is no way they are in the poly
      var bounds = this.getBounds();

      if (bounds !== null && !bounds.contains(latLng)) {
        return false;
      }

      // Raycast point in polygon method
      var inPoly = false;

      var numPaths = this.getPaths().getLength();
      for (var p = 0; p < numPaths; p++) {
        var path = this.getPaths().getAt(p);
        var numPoints = path.getLength();
        var j = numPoints - 1;

        for (var i = 0; i < numPoints; i++) {
          var vertex1 = path.getAt(i);
          var vertex2 = path.getAt(j);

          if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
            if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
              inPoly = !inPoly;
            }
          }

          j = i;
        }
      }

      return inPoly;
    };
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function(latLng) {
      if (google.maps.geometry) {
        return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
      }
      else {
        return true;
      }
    };
  }

  google.maps.Rectangle.prototype.containsLatLng = function(latLng) {
    return this.getBounds().contains(latLng);
  };

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function(fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function(fence) {
    this.fences.push(fence);
  };

  google.maps.Marker.prototype.getId = function() {
    return this['__gm_id'];
  };
}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}

return GMaps;
}));

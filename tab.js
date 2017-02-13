/**
 * Created by garfield on 2016/6/8.
 */
(function ( window ){
    var document = window.document;

    function tab (aTabs, aCnts, config){
        return new Tab(aTabs, aCnts, config);
    }

    function noop (){}

    function Tab ( aTabs, aCnts, config ){
        this.aTabs = config.tabs;
        this.aCnts = config.contents;
        this.current = 0;
        this.config = config;
        //  default
        this.config.time = config.time || 1000;
        this.config.autoPlay = config.autoPlay || false;
        this.config.stopElem = config.stopElem || null;
        this.config.fn = config.callback || noop;

        this.init();
    }

    Tab.prototype = {
        constructor : Tab,
        init : function (){
            var _this = this;
            for( var i = 0; i < this.aTabs.length; i++ ){
                (function ( index ){
                    _this.addEvent(_this.aTabs[i], _this.config.event, function (){
                        _this.change( index );
                        _this.current = index;
                    })
                })(i);
            }
            //  is autoplay
            if( this.config.autoPlay ){
                this.autoPlay();
                if( this.config.stopElem ){
                    this.config.stopElem.onmouseover = function (){
                        _this.stopPlay();
                    }
                    this.config.stopElem.onmouseleave = function (){
                        _this.autoPlay();
                    }
                }
            }
        },
        change : function ( index ){
            this.config.fn( index );
            for(var j = 0; j < this.aTabs.length; j++){
                this.removeClass(this.aTabs[j], this.config.tabAfter);
                this.removeClass(this.aCnts[j], this.config.conAfter);
            }
            this.addClass(this.aTabs[index], this.config.tabAfter);
            this.addClass(this.aCnts[index], this.config.conAfter);
        },
        autoPlay : function (){
            var _this = this;
            this.timer = setInterval(function (){
                _this.current++;
                if( _this.current == _this.aTabs.length ){
                    _this.current = 0;
                }
                _this.change( _this.current );
            }, _this.config.time)
        },
        stopPlay : function (){
            clearInterval(this.timer);
        },
        addClass : function (obj, cls){
            if( !this.hasClass(obj, cls) ){
                obj.className += ' ' + cls;
            }
        },
        removeClass : function (obj, cls){
            if( this.hasClass(obj, cls) ){
                obj.className = obj.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
            }
        },
        hasClass : function (obj, cls){
            //  for ie67
            if( obj.className ){
                if( obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')) ){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        addEvent : function ( obj, ev, fn ){
            if( obj.attachEvent ){
                obj.attachEvent('on' + ev, fn);
            } else {
                obj.addEventListener(ev, fn, false);
            }
        }
    }

    window.tab = window._tab = tab;

})( window );

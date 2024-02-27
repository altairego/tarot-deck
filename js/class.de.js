__class("De" , {
        jQde: null,
        sides: {n: 1, e: 3, s: 5, w: 4},
        de_val: 0,
        _rolling: false,

        __construct: function(jQsrc) {
            var __this=this.__this;
            __this.jQde = $(jQsrc);
            __this.jQde.click(function(){
                __this.roll();
            });
            __this.set(1);
            __this._rolling=false;
        },

        val: function _val() {
            return this.de_val;
        },

        face: function _face(val) {
            return this.__static.faces[val];
        },

        set: function _set(new_val) {
            this.de_val = new_val;
            this.jQde.html(this.face(this.de_val));
        },

        swap: function _swap(new_val,_cb) {
            if (new_val === this.de_val){
                if (typeof _cb === "function")
                    _cb.apply(this);
                return;
            }
            var jQ0 = this.jQde.find(".face");
            var jQ1 = $(this.face(new_val));

            this.jQde.prepend(jQ1.css({width:0}));

            jQ1.show().animate({width:'64px'},210);
            var __this = this;
            jQ0.animate({width:0}, 200, function(){
                if (typeof _cb === "function")
                    setTimeout(function(){_cb.apply(__this);}, 25);

                this.remove();
            });

            this.de_val = new_val;
        },

        change: function _change(_cb) {
            this.swap(((this.de_val+parseInt(Math.random()*5))%6)+1,_cb);
        },

        roll: function _roll(){
            if (this._rolling) return;
            this._rolling = true;

            var __this=this.__this;
            __this.jQde.css({opacity: 0.5});

            var nbroll = 5 + parseInt(Math.random()*5);
            var _roll = function(){
                if (nbroll-- > 0){
                    __this.change(_roll); //_roll
                    //setTimeout(_roll, 210);
                } else {
                    __this.jQde.css({opacity: 1});
                    this._rolling = false;
                }
            };
            _roll();
        },

        __static: {
            faces: {
                1: '<div class="face face1" val="1">'
                    +'<div class="facepoint facepointMC">*</div>'
                    +'</div>',
                2: '<div class="face face2" val="2">'
                    +'<div class="facepoint facepointRT">*</div>'
                    +'<div class="facepoint facepointLB">*</div>'
                    +'</div>',
                3: '<div class="face face3" val="3">'
                    +'<div class="facepoint facepointRT">*</div>'
                    +'<div class="facepoint facepointLB">*</div>'
                    +'<div class="facepoint facepointMC">*</div>'
                    +'</div>',
                4: '<div class="face face4" val="4">'
                    +'<div class="facepoint facepointRT">*</div>'
                    +'<div class="facepoint facepointLB">*</div>'
                    +'<div class="facepoint facepointLT">*</div>'
                    +'<div class="facepoint facepointRB">*</div>'
                    +'</div>',
                5: '<div class="face face5" val="5">'
                    +'<div class="facepoint facepointRT">*</div>'
                    +'<div class="facepoint facepointLB">*</div>'
                    +'<div class="facepoint facepointLT">*</div>'
                    +'<div class="facepoint facepointRB">*</div>'
                    +'<div class="facepoint facepointMC">*</div>'
                    +'</div>',
                6: '<div class="face face6" val="6">'
                    +'<div class="facepoint facepointRT">*</div>'
                    +'<div class="facepoint facepointLB">*</div>'
                    +'<div class="facepoint facepointRC">*</div>'
                    +'<div class="facepoint facepointLC">*</div>'
                    +'<div class="facepoint facepointLT">*</div>'
                    +'<div class="facepoint facepointRB">*</div>'
                    +'</div>'
            }
        }
    }
);

__class("Deck" , {
        jQwg: null,
        game: null,
        cards: [],
        de_val: 0,
        _rolling: false,

        __construct: function(jQsrc, _game) {
            this.jQwg = $(jQsrc);
            this.game = _game;
            this.jQwg.click('.card', function(){
                var card = $(this).data('card');
                _game.play(card);
            });
        },

        size: function _val() {
            return this.cards.length;
        },

        set: function _set(_deck) {
            this.cards = _deck.cards;
            this.draw();
        },

        __static: {
            cards: ''
            }
    }
);

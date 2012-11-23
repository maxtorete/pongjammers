ig.module(
	'game.entities.player-human'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayerHuman = ig.Entity.extend({

	size: {x:8, y:16},
	collides: ig.Entity.COLLIDES.FIXED,

	animSheet: new ig.AnimationSheet('lib/game/media/players.png', 8, 16),

	init: function(x, y, settings) {

		this.parent(x, y, settings);

		this.addAnim('idle', 1, [0]);
	},

	update: function() {

		if(ig.input.state('up')) {
			this.vel.y = -75;
		}
		else if(ig.input.state('down')) {
			this.vel.y = 75;
		}
		else {
			this.vel.y = 0;
		}

		this.parent();
	}
});

});
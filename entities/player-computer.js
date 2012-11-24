ig.module(
	'game.entities.player-computer'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayerComputer = ig.Entity.extend({

	size: {x:8, y:16},
	collides: ig.Entity.COLLIDES.FIXED,

	animSheet: new ig.AnimationSheet('lib/game/media/players.png', 8, 16),

	init: function(x, y, settings) {
		
		this.parent(x, y, settings);

		this.addAnim('idle', 1, [1]);
	},
	
	update: function() {

		var puck = ig.game.getEntitiesByType(EntityPuck)[0];

		if (puck.vel.x > 0)  {
			this.vel.y = (puck.pos.y + puck.size.y/2 > this.pos.y + this.size.y/2) ? 75 : -75;
		}
		else {
			this.vel.y = 0;
		}

		this.parent();
	}
});

});
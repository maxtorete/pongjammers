ig.module(
	'game.entities.puck'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPuck = ig.Entity.extend({

	size: {x:8, y:8},
	collides: ig.Entity.COLLIDES.ACTIVE,

	animSheet: new ig.AnimationSheet('lib/game/media/puck.png', 8,8),

	bounciness: 1,

	init: function(x, y, settings) {
		this.parent(x, y, settings);
		this.addAnim('idle', 0.1, [0,1,2,3,4,5,6,7]);
		this.vel.x = -100;
		this.vel.y = 100;
	}
});

});
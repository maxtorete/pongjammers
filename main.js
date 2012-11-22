ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.grassfield'
)
.defines(function(){

MyGame = ig.Game.extend({

	init: function() {
		this.loadLevel(LevelGrassfield);
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

		// Add your own drawing code here
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});

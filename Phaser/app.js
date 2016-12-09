var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png')
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//add sky as background
	game.add.sprite(0,0,'sky');

	//making a group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	//ground
	var ground = platforms.create (0, game.world.height-64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	//ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;


	stars = game.add.group();

	stars.enableBody = true;

	for (var i=0; i<12; i++){

		var star = stars.create(i*70, 0,'star');
		star.body.gravity.y = 500;
		star.body.bounce.y = 0.7+Math.random()*0.3;
	}

	//player sprite
	player = game.add.sprite(32, 400, 'dude');
	//animate
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		//physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	//enemy sprite
	enemy1 = game.add.sprite(760, 20, 'baddie');
		//animate
		enemy1.animations.add('left', [0, 1], 10, true);
		enemy1.animations.add('right', [2, 3], 10, true);
		//physics
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	// keyboard inputs
	cursors = game.input.keyboard.createCursorKeys();

}

function update() {
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(stars, platforms);
	//function "collectStar" will be called whenever the player walks over the stars
	game.physics.arcade.overlap(player, stars, collectStar, null, this);
	player.body.velocity.x = 0;

	if (cursors.left.isDown) {
		player.body.velocity.x= -150;
		player.animations.play("left");
	}else if (cursors.right.isDown) {
		player.body.velocity.x= 150;
		player.animations.play("right");
	}else {
		player.animations.stop();
		player.frame = 4;
		player.animations.play("right");
	}

	if(cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y =  -350;

	}


	if (enemy1.x > 759) {
		enemy1.body.velocity.x = -120;
		enemy1.animations.play("left");
	} else if (enemy1.x <405) {
		enemy1.body.velocity.x = 120;
		enemy1.animations.play("right");
	}

	function collectStar (player,star) {
		//removes the star from the screen
		star.kill();
		//add and update the score



		star=stars.create(Math.floor(Math.random() * 750), 0, 'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 +Math.random() * 0.2;
	}
}



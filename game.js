/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/UcnntFWC
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
  this.game.scale.pageAlignHorizontally = true; this.game.scale.pageAlignVertically = true; this.game.scale.refresh();
  game.stage.backgroundColor = '#0';

    //game.load.baseURL = 'http://examples.phaser.io/assets/';

    game.load.crossOrigin = 'anonymous';

    //game.load.image('player', 'sprites/phaser-dude.png');

    game.load.spritesheet('goccia', 'grafiche/goccia.png', 20,20);
    game.load.spritesheet('danno', 'grafiche/red.png', 1024, 768);
    game.load.spritesheet('vita', 'grafiche/verde.png', 1024, 768);

    game.load.image('schema1', 'grafiche/piatta1.png');
    game.load.image('schema2', 'grafiche/piatta2.png');

    game.load.image('back11', 'grafiche/1.1.png');
    game.load.image('back21', 'grafiche/2.1.png');
    game.load.image('back31', 'grafiche/3.1.png');
    game.load.image('back41', 'grafiche/4.1.png');
    game.load.image('back51', 'grafiche/5.1.png');

    game.load.image('back12', 'grafiche/prova2.png');
    game.load.image('back13', 'grafiche/prova3.png');


    game.load.image('back14', 'grafiche/prova4a.png');
    game.load.image('back24', 'grafiche/prova4b.png');

      game.load.image('back15', 'grafiche/prova5a.png');
      game.load.image('back25', 'grafiche/prova5b.png');

        game.load.image('back16', 'grafiche/prova6a.png');
          game.load.image('back26', 'grafiche/prova6b.png');

    game.load.image('vert1', 'grafiche/vert1.png');
    game.load.image('vert2', 'grafiche/vert2.png');


    game.load.image('tavola', 'grafiche/tavola1.png');


    game.load.image('acqua', 'grafiche/acqua.png');
    game.load.image('platform', 'grafiche/sana1.png');
    game.load.image('tavoletta', 'grafiche/tavolavita.png');
    game.load.image('platformcorta', 'grafiche/traspare.png');
    game.load.image('platformmarcia', 'grafiche/marcia1.png');
    game.load.spritesheet('ostacolo', 'grafiche/coccodrillo.png', 102,88);
    game.load.image('ostacolo1', 'grafiche/sasso1.png');
    game.load.image('ostacolo2', 'grafiche/sasso2.png');
    game.load.image('ostacolo3', 'grafiche/sasso3.png');
    game.load.image('ostacolo4', 'grafiche/sasso4.png');
    game.load.spritesheet('enemy', 'grafiche/bracconiere.png', 45,45);
    game.load.spritesheet('enemy1', 'grafiche/bracconieresparo.png', 45,45);
    game.load.spritesheet('enemy3', 'grafiche/lancia.png', 98,45);
    game.load.spritesheet('bullet', 'grafiche/proiettile.png', 14,14);
    game.load.spritesheet('fire', 'grafiche/fuocone.png', 1150, 768);
    game.load.spritesheet('elefante', 'grafiche/elefante.png', 90,90);
    game.load.image('parete', 'grafiche/troncone.png');
    game.load.image('parete1', 'grafiche/ceppetto.png');
    game.load.image('cuore', 'grafiche/c1.png');
    game.load.image('cuore1', 'grafiche/c2.png');
    game.load.spritesheet('chain', 'grafiche/Liana.png', 16, 26);
    game.load.spritesheet('player', 'grafiche/tarzanfinale.png', 50, 53);
    game.load.spritesheet('elicottero', 'grafiche/elicottero.png', 365, 344);
    game.load.image('morte', 'menu/SCONFITTA.png');
    game.load.image('morteback', 'menu/SCONFITTA2.png');
    game.load.image('menuv', 'menu/HomeVittoria.png');
    game.load.image('menusc', 'menu/HomeSconfitta.png');
    game.load.image('rig', 'menu/RiprovaSconfitta.png')
    game.load.image('vinto', 'menu/VITTORIA.png');
    game.load.image('sfondofinalebene', 'menu/VITTORIA2.png');


    //game.load.spritesheet('player', 'C:/Users/Donato/Desktop/Università/COMPUTER GRAFICA/Prova lcg/grafiche/tarzan.png', 16, 26);


}
var danno;
var verdevita;
var player;
var platforms;
var platforms2;
var cursors;
var jumpButton;
var fireButton;
var weapon1;
var weapon2;
var fire;
var fire1;
var elefante;
var elefante1;
var elefante2;
var elefante3;
var elefante4;
var elefante5;
var parete;
var enemy;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;

var acqua;
var ostacolo;
var locked1 = false;
var locked2= false;
var locked3 = false;
var locked4 = false;
var locked5 = false;
var locked6 = false;
var locked7 = false;
var locked8 = false;
var locked9 = false;
var locked10 = false;
var locked11 = false;
var locked12 = false;
var locked13 = false;
var locked14 = false;


var contacuori=6;
var back11;
var back12;
var back13;
var back14;
var back15;
var back16;
var back21;
var back24;
var back25;
var back26;
var back31;
var back41;
var back51;




var fondo;
var base;
var fine;
var elicottero;
var tavola;





function create() {



  game.world.setBounds(0,0,20000,7000);



    fondo = game.add.physicsGroup();
    fondo1 = fondo.create (0,3750, 'platform');
    fondo2 = fondo.create (8000,3700, 'platform');
    fondo3 = fondo.create (12000,3700, 'platform');
    game.physics.arcade.enable(fondo);
    fondo1.scale.setTo(10000,0.1)
    fondo2.scale.setTo(10000,0.1)
    fondo3.scale.setTo(10000,0.1)


//livello1
    back11 = game.add.sprite(2000,0, 'back11');
    game.physics.arcade.enable(back11);
    back21 = game.add.sprite(6000,0, 'back21');
    game.physics.arcade.enable(back21);
    back31 = game.add.sprite(10000,0, 'back31');
    game.physics.arcade.enable(back31);
    back41 = game.add.sprite(14000,0, 'back41');
    game.physics.arcade.enable(back41);
    back51 = game.add.sprite(18000,0, 'back51');
    game.physics.arcade.enable(back51);

//livello 2
    back12 = game.add.sprite(2000,0, 'back12');
    game.physics.arcade.enable(back12);

    //livello3


    back13 = game.add.sprite(2000,0, 'back13');
    game.physics.arcade.enable(back13);

    vert1 = game.add.sprite(18976,0, 'vert1');
    game.physics.arcade.enable(vert1);
    vert2 = game.add.sprite(18976,0, 'vert2');
    game.physics.arcade.enable(vert1);


//livello4


    back14 = game.add.sprite(0,0, 'back14');
    game.physics.arcade.enable(back14);
    back24 = game.add.sprite(10000,0, 'back24');
    game.physics.arcade.enable(back24);
//livello%










          fire = game.add.sprite(900,3000, 'fire');
          fire.animations.add("flip");
          fire.animations.play("flip", 12, true);
          game.physics.arcade.enable(fire);
          fire.body.collideWorldBounds = true;
          fire.body.setSize(500, 400, 250, 200);

          fire1 = game.add.sprite(19000,4100, 'fire');
          fire1.animations.add("flip");
          fire1.animations.play("flip", 12, true);
          game.physics.arcade.enable(fire1);
          fire1.body.setSize(500, 400, 250, 200);

          fire1.body.collideWorldBounds = true;




    player = game.add.sprite(2224, 3125, 'player');

    player.scale.setTo(1.9,1.9)

    player.animations.add("tavola", [13]);
    player.animations.add("esultanza", [7,2,8,9]);

    player.animations.add("flip", [2,3,4,5,6]);
    player.animations.add("jump", [9]);
    player.animations.add("fermo", [0]);
    player.animations.add("aggrappo", [10]);
    player.animations.add("spider", [11]);


    game.physics.arcade.enable(player);




    goccia = game.add.physicsGroup();
    g1= goccia.create (5890, 3360,'goccia');
    g1.scale.setTo(2,2)

    g2 = goccia.create (11110,3355, 'goccia');
    g2.scale.setTo(2,2)

    g3 = goccia.create (17842,3517, 'goccia');
    g3.scale.setTo(2,2)

    g4 = goccia.create (1993, 2485, 'goccia');
    g4.scale.setTo(2,2)



    g1.animations.add("flip");
    g1.animations.play("flip", 12, true);
    g2.animations.add("flip");
    g2.animations.play("flip", 12, true);
    g3.animations.add("flip");
    g3.animations.play("flip", 12, true);
    g4.animations.add("flip");
    g4.animations.play("flip", 12, true);

    game.physics.arcade.enable(goccia);

 //NEMICI DISARMATI

    enemy = game.add.sprite(6230, 3144, 'enemy');
    enemy.animations.add("flip")
    enemy.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy);
    enemy.body.collideWorldBounds = true;
    enemy.body.gravity.y = 500;

    enemy4 = game.add.sprite(9334, 3446, 'enemy');
    enemy4.animations.add("flip")
    enemy4.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy4);
    enemy4.body.collideWorldBounds = true;
    enemy4.body.gravity.y = 500;

    enemy5 = game.add.sprite(11290, 3280, 'enemy');
    enemy5.animations.add("flip")
    enemy5.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy5);
    enemy5.body.collideWorldBounds = true;
    enemy5.body.gravity.y = 500;

    elefante = game.add.sprite(4204,3260,'elefante');
    elefante.scale.setTo(1.5);
    elefante.animations.add("molla");
    game.physics.arcade.enable(elefante);
    elefante.body.collideWorldBounds = true;
    elefante.body.gravity.y = 500;
    elefante.body.setSize(50, 60, 25, 25)






    player.body.collideWorldBounds = true;




    player.body.gravity.y = 600;




    platforms = game.add.physicsGroup();
    platforms2 = game.add.physicsGroup();



//Inizio parte 1//


platforms.create(2000, 3302, 'platformcorta');
platforms.create(2160, 3302, 'platformcorta');
platforms.create(2320, 3302, 'platformcorta');


    platforms.create(2582, 3440, 'platformcorta');
    platforms.create(2742, 3440, 'platformcorta');
    platforms.create(3015, 3408, 'platformcorta');
    platforms.create(3175, 3408, 'platformcorta');

    platforms.create(3724, 3563, 'platformcorta');
    platforms.create(3884, 3563, 'platformcorta');
    platforms.create(4000, 3563, 'platformcorta');

    platforms.create(4204, 3643, 'platformcorta');

      platforms.create(3785, 3257, 'platformcorta');
      platforms.create(3945, 3257, 'platformcorta');




   platforms2.create(4462, 3392, 'platformmarcia');
   platforms2.create(4622, 3392, 'platformmarcia');
   platforms2.create(4781, 3392, 'platformmarcia');

  platforms2.create(5609, 3563, 'platformmarcia');

  platforms.create(5769, 3563, 'platformcorta');
  platforms.create(5928, 3563, 'platformcorta');
  platforms.create(6088, 3563, 'platformcorta');

  platforms.create(5821, 3409, 'platformcorta');
  platforms.create(5981, 3409, 'platformcorta');

  platforms.create(6272, 3459, 'platformcorta');

  platforms.create(6145, 3255, 'platformcorta');
  platforms.create(5987, 3255, 'platformcorta');
  platforms.create(6285, 3255, 'platformcorta');



  platforms2.create(6617, 3586, 'platformmarcia');
    platforms.create(6765, 3540, 'platformcorta');
    platforms.create(6925, 3540, 'platformcorta');
    platforms.create(7085, 3499, 'platformcorta');

        platforms.create(7280, 3257, 'platformcorta');
        platforms.create(7439, 3257, 'platformcorta');


        platforms.create(7227, 3584, 'platformcorta');
        platforms.create(7387, 3584, 'platformcorta');
        platforms.create(7477, 3584, 'platformcorta');
        platforms.create(7707, 3584, 'platformcorta');



            platforms.create(8372, 3584, 'platformcorta');
            platforms.create(8532, 3584, 'platformcorta');
            platforms.create(8692, 3584, 'platformcorta');

            platforms.create(8469, 3209, 'platformcorta');
            platforms.create(8629, 3209, 'platformcorta');
            platforms.create(8692, 3209, 'platformcorta');

            platforms.create(9009, 3324, 'platformcorta');


            platforms.create(9009, 3551, 'platformcorta');
            platforms.create(9169, 3551, 'platformcorta');
            platforms.create(9329, 3551, 'platformcorta');

              platforms.create(9489, 3610, 'platformcorta');


            platforms.create(10006, 3615, 'platformcorta');
            platforms.create(10166, 3615, 'platformcorta');
            platforms.create(10322, 3615, 'platformcorta');

              platforms.create(10300, 3320, 'platformcorta');

              platforms.create(10596, 3551, 'platformcorta');

              platforms2.create(10536, 3233, 'platformmarcia');
              platforms2.create(10696, 3233, 'platformmarcia');

              platforms.create(11069, 3401, 'platformcorta');
              platforms.create(11229, 3401, 'platformcorta');
              platforms.create(11389, 3401, 'platformcorta');

              platforms.create(10856, 3564, 'platformcorta');
              platforms.create(11016, 3564, 'platformcorta');
              platforms.create(11176, 3564, 'platformcorta');
              platforms.create(11336, 3564, 'platformcorta');
              platforms.create(11496, 3564, 'platformcorta');


              platforms2.create(11690, 3375, 'platformmarcia');
              platforms2.create(11932, 3615, 'platformmarcia');
              platforms2.create(12092, 3615, 'platformmarcia');
              platforms2.create(12252, 3615, 'platformmarcia');

              platforms.create(12410, 3615, 'platformcorta');

                  platforms.create(12092, 3320, 'platformcorta');
                  platforms.create(12252, 3320, 'platformcorta');


                    platforms.create(12728,3324 , 'platformcorta');
                    platforms.create(12888,3324 , 'platformcorta');

                      platforms.create(13084,3524 , 'platformcorta');
                      platforms.create(13244,3524 , 'platformcorta');
                      platforms.create(13404,3524 , 'platformcorta');

                        platforms.create(13404,3524 , 'platformcorta');


























    enemy1 = game.add.sprite(7455, 3160, 'enemy1');
    enemy1.animations.add("flip")
    enemy1.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy1);
    enemy1.body.collideWorldBounds = true;
    enemy1.body.gravity.y = 500;

    weapon1 = game.add.weapon(1, 'bullet')
    weapon1.trackSprite(enemy1, 10, 15)
    weapon1.bulletSpeed = 400;
    weapon1.bulletKillType = Phaser.Weapon.KILL_DISTANCE
    weapon1.bulletKillDistance = 200;
    weapon1.fireRate = 200;
    weapon1.fire()


    enemy2 = game.add.sprite(12250, 3200, 'enemy1');
    enemy2.animations.add("flip")
    enemy2.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy2);
    enemy2.body.collideWorldBounds = true;
    enemy2.body.gravity.y = 500;

    weapon2 = game.add.weapon(10, 'bullet')
    weapon2.trackSprite(enemy2, 10, 15)
    weapon2.bulletSpeed = 400;
    weapon2.bulletKillType = Phaser.Weapon.KILL_DISTANCE
    weapon2.bulletKillDistance = 200;
    weapon2.fireRate = 200;
    weapon2.fire()


//LANCIAFIAMME
    enemy3 = game.add.sprite(7444, 3454, 'enemy3');
    enemy3.animations.add("flip")
    enemy3.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy3);
    enemy3.body.collideWorldBounds = true;
    enemy3.body.gravity.y = 500;

    enemy6 = game.add.sprite(13250, 3200, 'enemy3');
    enemy6.animations.add("flip")
    enemy6.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(enemy6);
    enemy6.body.collideWorldBounds = true;
    enemy6.body.gravity.y = 500;

    elicottero = game.add.sprite(18500, 200, 'elicottero');
    elicottero.animations.add("flip")
    game.physics.arcade.enable(elicottero);






   elefante1 = game.add.sprite(9491,3225,'elefante');
   elefante1.scale.setTo(1.5);
   elefante1.animations.add("molla");
   game.physics.arcade.enable(elefante1);
   elefante1.body.collideWorldBounds = true;
   elefante1.body.gravity.y = 500;
   elefante1.body.setSize(50, 60, 25, 25)


   elefante2 = game.add.sprite(12410,3225,'elefante');
   elefante2.scale.setTo(1.5);
   elefante2.animations.add("molla");
   game.physics.arcade.enable(elefante2);
   elefante2.body.collideWorldBounds = true;
   elefante2.body.gravity.y = 500;
   elefante2.body.setSize(50, 60, 25, 25)


   elefante3 = game.add.sprite(19590,3417,'elefante');
   elefante3.scale.setTo(1.5);
   elefante3.animations.add("molla");
   game.physics.arcade.enable(elefante3);
   elefante3.body.collideWorldBounds = true;
   elefante3.body.gravity.y = 500;
   elefante3.body.setSize(50, 60, 25, 25)


   elefante4 = game.add.sprite(19830,1700,'elefante');
   elefante4.scale.setTo(1.5);
   elefante4.animations.add("molla");
   game.physics.arcade.enable(elefante4);
   elefante4.body.collideWorldBounds = true;
   elefante4.body.gravity.y = 500;
   elefante4.body.setSize(50, 60, 25, 25)


   elefante5 = game.add.sprite(19540,840,'elefante');
   elefante5.scale.setTo(1.5);
   elefante5.animations.add("molla");
   game.physics.arcade.enable(elefante5);
   elefante5.body.collideWorldBounds = true;
   elefante5.body.gravity.y = 500;
   elefante5.body.setSize(50, 80, 25, 15)












    //dopo surf

     base = game.add.sprite(18900,3600,'platformcorta');
     game.physics.arcade.enable(base);
     base.body.immovable = true


      platforms.create(19060, 3600, 'platformcorta');
      platforms.create(19329, 3575, 'platformcorta');
      platforms.create(19569, 3565, 'platformcorta');
      platforms.create(19758, 3239, 'platformcorta');
      platforms.create(19437, 3218, 'platformcorta');
      platforms.create(19277, 3218, 'platformcorta');
      platforms.create(19120, 3218, 'platformcorta');
      platforms.create(18996, 2852, 'platformcorta');

      platforms.create(19437, 2679, 'platformcorta');
      platforms.create(19597, 2679, 'platformcorta');
      platforms.create(19839, 2560, 'platformcorta');
      platforms.create(19540, 2439, 'platformcorta');
      platforms.create(19374, 2371, 'platformcorta');
      platforms.create(19212, 2328, 'platformcorta');


      platforms2.create(19057, 2328, 'platformmarcia');

      platforms.create(19199, 2054, 'platformcorta');

      platforms.create(19687, 1878, 'platformcorta');
      platforms.create(19838, 1878, 'platformcorta');

      platforms.create(19500, 1550, 'platformcorta');

      platforms.create(18988, 1465, 'platformcorta');
      platforms.create(19148, 1465, 'platformcorta');
      platforms.create(19308, 1465, 'platformcorta');

      platforms.create(19214, 936, 'platformcorta');
      platforms.create(19374, 936, 'platformcorta');

      platforms.create(19531, 1015, 'platformcorta');















      fine = game.add.sprite(19800,660,'platformcorta');
      game.physics.arcade.enable(fine);
      fine.body.immovable = true





    //S U R F

 tavola= game.add.sprite(14060,3687,'tavola');
  game.physics.arcade.enable(tavola);
  tavola.body.immovable =  true;



      acqua = game.add.physicsGroup();
      acq = acqua.create(13900,3650,'acqua');
      game.physics.arcade.enable(acqua);
      acqua.setAll('body.immovable', true);



      ostacolo = game.add.physicsGroup();
      os1 = ostacolo.create (13718,3620,'ostacolo1');


      os2 = ostacolo.create (14298,3620,'ostacolo');
      os2.animations.add("flip");
      os2.animations.play("flip", 6, true);

      os3 = ostacolo.create (14791,3620,'ostacolo2');



      os4 = ostacolo.create (15336,3620,'ostacolo');
      os4.animations.add("flip");
      os4.animations.play("flip", 6, true);

      os5 = ostacolo.create (15336,3620,'ostacolo');
      os5.animations.add("flip");
      os5.animations.play("flip", 6, true);

      os6 = ostacolo.create (15443,3620,'ostacolo');
      os6.animations.add("flip");
      os6.animations.play("flip", 6, true);

      os7 = ostacolo.create (15961,3620,'ostacolo3');

      os8 = ostacolo.create (17423,3620,'ostacolo');
      os8.animations.add("flip");
      os8.animations.play("flip", 6, true);

      os9 = ostacolo.create (17795,3620,'ostacolo');
      os9.animations.add("flip");
      os9.animations.play("flip", 6, true);

      os10 = ostacolo.create (17890,3620,'ostacolo');
      os10.animations.add("flip");
      os10.animations.play("flip", 6, true);

          os11 = ostacolo.create (18440,3620,'ostacolo4');

          os12 = ostacolo.create (18831,3620,'ostacolo');
          os12.animations.add("flip");
          os12.animations.play("flip", 6, true);



      game.physics.arcade.enable(ostacolo);
      ostacolo.setAll('body.immovable', true);








//Fine parte 1//

    parete = game.add.physicsGroup();
    pa1 = parete.create (6429,3279,'parete');


    pa2 = parete.create (6617,3045, 'parete');

    pa3 = parete.create (7244,3257, 'parete');

    pa4 = parete.create (7038, 3000, 'parete');

    pa5 = parete.create (8789, 3209, 'parete1');
//CORTA
    pa6 = parete.create (8973, 3324, 'parete');

    pa7 = parete.create (10857, 3233, 'parete1');
    //corta
    pa8 = parete.create (11033, 3111, 'parete');

    pa9 = parete.create (5821, 3071, 'parete');

    pa10 = parete.create (11654, 3375, 'parete');

    pa11 = parete.create (19722, 3239, 'parete');

    pa13 = parete.create (19364, 2760, 'parete');

    pa12 = parete.create (19124, 2883, 'parete');

    pa14 = parete.create (19022, 1990, 'parete');




    pa18 = parete.create (18988, 1114, 'parete');
    pa19 = parete.create (18988, 735, 'parete');
    pa20 = parete.create (19214, 965, 'parete');






    game.physics.arcade.enable(parete);
    parete.setAll('body.immovable', true);






    platforms.setAll('body.immovable', true);




    platforms2.setAll('body.immovable', true);


    danno = game.add.sprite(0,0, 'danno');
    danno.fixedToCamera=true;

    danno.animations.add("flip");

    verdevita = game.add.sprite(0,0, 'vita');
    verdevita.fixedToCamera=true;

    verdevita.animations.add("flip");




        schema1 = game.add.sprite(0,0, 'schema1');
        schema2 = game.add.sprite(10000,0, 'schema2');





    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 1200;
    game.camera.follow(player);









  //  Length, xAnchor, yAnchor
    liana1 = createRope(15, 3456, 3000);
    liana2 = createRope(12, 4246, 3000);
    liana3 = createRope (14, 5063, 3000)
    liana4 = createRope (14, 5291, 3000)
    liana5 = createRope (14, 5527, 3000)
    liana6 = createRope (7, 7951, 3300)
    liana7 = createRope (7, 8139, 3300)
    liana8 = createRope (7, 8309, 3300);
    liana9 = createRope (10, 9800, 3100);
    liana10 = createRope (12, 10090, 3070);
    liana11 = createRope (11, 11946, 3000)
    liana12 = createRope (19, 13657, 3000)
    liana13 = createRope (9, 19213, 2494);
    liana14 = createRope (19, 19455, 1487);



    back15 = game.add.sprite(0,0, 'back15');
    game.physics.arcade.enable(back15);
    back25 = game.add.sprite(10000,0, 'back25');
    game.physics.arcade.enable(back25);




    //livello6


    back16 = game.add.sprite(0,0, 'back16');
    game.physics.arcade.enable(back16);
    back26 = game.add.sprite(10000,0, 'back26');
    game.physics.arcade.enable(back26);

    tavoletta = game.add.sprite(-10,40, 'tavoletta');
    tavoletta.fixedToCamera=true;


    cuore = game.add.sprite(50, 70, 'cuore');
    cuore.fixedToCamera=true;
    cuore1 = game.add.sprite(65, 70, 'cuore1');
    cuore1.fixedToCamera=true;
    cuore2 = game.add.sprite(90, 70, 'cuore');
    cuore2.fixedToCamera=true;
    cuore3 = game.add.sprite(105, 70, 'cuore1');
    cuore3.fixedToCamera=true;
    cuore4 = game.add.sprite(130, 70, 'cuore');
    cuore4.fixedToCamera=true;
    cuore5 = game.add.sprite(145, 70, 'cuore1');
    cuore5.fixedToCamera=true;





}

function createRope(length, xAnchor, yAnchor) {

    var lastRect;
    var height = 20;        //  Height for the physics body - your image height is 8px
    var width = 20;         //  This is the width for the physics body. If too small the rectangles will get scrambled together.
    var maxForce = 100000;   //  The force that holds the rectangles together.

    for (var i = 0; i <= length; i++)
    {
        var x = xAnchor;                    //  All rects are on the same x position
        var y = yAnchor + (i * height);     //  Every new rect is positioned below the last

        if (i % 2 === 0)
        {
            //  Add sprite (and switch frame every 2nd time)
            newRect = game.add.sprite(x, y, 'chain', 0);
        }
        else
        {
            newRect = game.add.sprite(x, y, 'chain', 0);
            lastRect.bringToTop();
        }

        //  Enable physicsbody
        game.physics.p2.enable(newRect, false);

        //  Set custom rectangle
        newRect.body.setRectangle(width, height);

        if (i === 0)
        {
            newRect.body.static = true;
        }
        else
        {
            //  Anchor the first one created
            newRect.body.velocity.x = 200;      //  Give it a push :) just for fun
            newRect.body.mass = length / i;     //  Reduce mass for evey rope element
        }

        //  After the first rectangle is created we can add the constraint
        if (lastRect)
        {
            game.physics.p2.createRevoluteConstraint(newRect, [0, -10], lastRect, [0, 10], maxForce);
        }

        lastRect = newRect;
    }
    return lastRect;
}



var invincible = false
var spider = false
var surf = false;
var enemy_direction = 1
var enemy1_direction = 1
var enemy2_direction = 1
var enemy3_direction = 1
var enemy4_direction = 1
var enemy5_direction = 1
var enemy6_direction = 1



var inizio = true;
var immune=true;
var esulta = false;
function update () {

  if (player.x<18000)
  {
    game.camera.bounds = new  Phaser.Rectangle(2000, 3000, 18975, 768);

  }

  if (player.x>19000)
  {
        game.camera.bounds = new  Phaser.Rectangle(18975, 0, 1024, 3768);
        back12.y = player.y*0.9 ;
        back13.y = player.x*0.45 ;

  }

    if (player.x>2512){
      back12.x = player.x*0.75;
      back13.x = player.x*0.5 ;
    }

    console.log(player.x)
    console.log(player.y)

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, base, stopsurf);

    game.physics.arcade.collide(player,fondo, );
    game.physics.arcade.overlap(player,ostacolo, touch_ostacolo);

    game.physics.arcade.collide(player, acqua, surfata);
    game.physics.arcade.collide(player, platforms2, cadutapiattaforma);
    game.physics.arcade.collide(enemy,  platforms, camminatanemico);
    game.physics.arcade.collide(enemy1, platforms, camminatanemico1);
    game.physics.arcade.collide(enemy2, platforms, camminatanemico2);
    game.physics.arcade.collide(enemy3, platforms, camminatanemico3);
    game.physics.arcade.collide(enemy4, platforms, camminatanemico4);
    game.physics.arcade.collide(enemy5, platforms, camminatanemico5);
    game.physics.arcade.collide(enemy6, platforms, camminatanemico6);

    game.physics.arcade.collide(goccia, platforms);
    game.physics.arcade.collide(player, parete, saltodilato);
    game.physics.arcade.collide(elefante, platforms);
    game.physics.arcade.collide(elefante1, platforms);
    game.physics.arcade.collide(elefante2, platforms);
    game.physics.arcade.collide(elefante3, platforms);
    game.physics.arcade.collide(elefante4, platforms);
    game.physics.arcade.collide(elefante5, platforms);
    game.physics.arcade.collide(player, fine, finalebene);




    game.physics.arcade.overlap(player, weapon1.bullets, hitPlayer);
    game.physics.arcade.overlap(player, weapon2.bullets, hitPlayer);
    game.physics.arcade.overlap(player, elefante, saltoalto);
    game.physics.arcade.overlap(player, elefante1, saltoalto);
      game.physics.arcade.overlap(player, elefante2, saltoalto);
      game.physics.arcade.overlap(player, elefante3, saltoalto);
      game.physics.arcade.overlap(player, elefante4, saltoalto);
      game.physics.arcade.overlap(player, elefante5, saltoalto);


    game.physics.arcade.overlap(player, enemy, touch_enemy);
    game.physics.arcade.collide(player, enemy1, touch_enemy);
    game.physics.arcade.collide(player, enemy2, touch_enemy);
        game.physics.arcade.collide(player, enemy3, touch_enemy);
          game.physics.arcade.collide(player, enemy4, touch_enemy);
                    game.physics.arcade.collide(player, enemy5, touch_enemy);
                      game.physics.arcade.collide(player, enemy6, touch_enemy);
    game.physics.arcade.overlap(player, fire, touch_fire);
    game.physics.arcade.overlap(player, fire1, touch_fire1);
    game.physics.arcade.overlap(player, g1, touch_g1);
        game.physics.arcade.overlap(player, g2, touch_g2);
            game.physics.arcade.overlap(player, g3, touch_g3);
                game.physics.arcade.overlap(player, g4, touch_g4);





    if(Math.abs(liana1.position.x - player.x)  <40 && Math.abs(liana1.position.y - player.y) < 40)
     locked1 = true;

    if(Math.abs(liana2.position.x - player.x)  <40 && Math.abs(liana2.position.y - player.y) < 40)
         locked2 = true;
    if(Math.abs(liana3.position.x - player.x)  <40 && Math.abs(liana3.position.y - player.y) < 40)
         locked3 = true;
    if(Math.abs(liana4.position.x - player.x)  <40 && Math.abs(liana4.position.y - player.y) < 40)
              locked4 = true;
    if(Math.abs(liana5.position.x - player.x)  <40 && Math.abs(liana5.position.y - player.y) < 40)
              locked5 = true;
    if(Math.abs(liana6.position.x - player.x)  <40 && Math.abs(liana6.position.y - player.y) < 40)
              locked6 = true;
    if(Math.abs(liana7.position.x - player.x)  <40 && Math.abs(liana7.position.y - player.y) < 40)
              locked7 = true;
    if(Math.abs(liana8.position.x - player.x)  <40 && Math.abs(liana8.position.y - player.y) < 40)
              locked8 = true;

    if(Math.abs(liana9.position.x - player.x)  <40 && Math.abs(liana9.position.y - player.y) < 40)
                  locked9 = true;

    if(Math.abs(liana10.position.x - player.x)  <40 && Math.abs(liana10.position.y - player.y) < 40)
                  locked10 = true;

    if(Math.abs(liana11.position.x - player.x)  <40 && Math.abs(liana11.position.y - player.y) < 40)
                  locked11 = true;

    if(Math.abs(liana12.position.x - player.x)  <40 && Math.abs(liana12.position.y - player.y) < 40)
                  locked12 = true;


    if(Math.abs(liana13.position.x - player.x)  <40 && Math.abs(liana13.position.y - player.y) < 40)
                  locked13 = true;

    if(Math.abs(liana14.position.x - player.x)  <40 && Math.abs(liana14.position.y - player.y) < 40)
                locked14 = true;




      player.body.velocity.x = 0;




    fire.body.velocity.x =160;

    //VELOCITà NEMICI
    enemy.body.velocity.x = 100 * enemy_direction;
    enemy1.body.velocity.x = 100 * enemy1_direction;
    enemy2.body.velocity.x = 100 * enemy2_direction;
    enemy3.body.velocity.x = 100 * enemy3_direction;
    enemy4.body.velocity.x = 100 * enemy4_direction
    enemy5.body.velocity.x = 100 * enemy5_direction;
    enemy6.body.velocity.x = 100 * enemy6_direction;



    if(contacuori===6)
    {
     cuore.alpha=1;
     cuore1.alpha=1;
     cuore2.alpha=1;
     cuore3.alpha=1;
     cuore4.alpha=1;
     cuore5.alpha=1;

}

    if(contacuori===5)
   {
     cuore.alpha=1;
     cuore1.alpha=1;
     cuore2.alpha=1;
     cuore3.alpha=1;
     cuore4.alpha=1;
     cuore5.alpha=0;
   }

   if(contacuori===4)
  {
    cuore.alpha=1;
    cuore1.alpha=1;
    cuore2.alpha=1;
    cuore3.alpha=1;
    cuore4.alpha=0;
    cuore5.alpha=0;
  }

  if(contacuori===3)
 {
   cuore.alpha=1;
   cuore1.alpha=1;
   cuore2.alpha=1;
   cuore3.alpha=0;
   cuore4.alpha=0;
   cuore5.alpha=0;
 }

 if(contacuori===2)
{
  cuore.alpha=1;
  cuore1.alpha=1;
  cuore2.alpha=0;
  cuore3.alpha=0;
  cuore4.alpha=0;
  cuore5.alpha=0;
}

if(contacuori===1)
{
 cuore.alpha=1;
 cuore1.alpha=0;
 cuore2.alpha=0;
 cuore3.alpha=0;
 cuore4.alpha=0;
 cuore5.alpha=0;
}

 if(contacuori<1)
{
  cuore.alpha=0;
  cuore1.alpha=0;
  cuore2.alpha=0;
  cuore3.alpha=0;
  cuore4.alpha=0;
  cuore5.alpha=0;
  player.kill()
  game.paused = true;


  morteback = game.add.sprite(0,0,'morteback');
  menusc = game.add.sprite(100, 600,'menusc');
  rigioca = game.add.sprite(800, 600,'rig');
  morte = game.add.sprite(0,0,'morte');

  morteback.fixedToCamera=true;
  menusc.fixedToCamera=true;
  rigioca.fixedToCamera=true;
  morte.fixedToCamera=true;
  //  menu.fixedToCamera=true;

  morteback.height = game.height;
  morteback.width = game.width;
  morte.height = game.height;
  morte.width = game.width;
  //  menu.height = game.height;
  //  menu.width = game.width;

  morte.inputEnabled = true;
  morte.events.onInputDown.add(morte_clicked);
  menusc.inputEnabled = true;
  menusc.events.onInputDown.add(menusc_clicked);
  rigioca.inputEnabled = true;
  rigioca.events.onInputDown.add(rigioca_clicked);






}

if(player.x>19000 ){
fire1.body.velocity.y = -100;
fire.kill()
}









    if (cursors.left.isDown)
    {
        player.body.velocity.x = -230;
        player.scale.setTo(-1.9, 1.9)
        player.animations.play("flip", 12, false);
    }

    else if (cursors.right.isDown)
    {
      player.animations.play("flip", 12, false);
       player.scale.setTo(1.9, 1.9)
       player.body.velocity.x = 230;
    }

    if (jumpButton.isDown && player.body.touching.down )
    {
      spider = false;
      player.animations.play("jump", 12, false);
      player.body.velocity.y = -390;
   }

        if (!player.body.touching.down )
        {
         player.animations.play("jump", 12, false);
           }

             if (player.body.touching.down && !cursors.left.isDown && !cursors.right.isDown )
             {
              player.animations.play("fermo", 12, false);
                }





        if (jumpButton.isDown && cursors.right.isDown){
        if(spider){
       player.animations.play("spider", 12, false);
     }
     else {
          player.animations.play("jump", 12, false);
          player.body.velocity.x = 250;}
        }



        if (surf){
           player.animations.play("tavola", 12, true);
            player.body.velocity.x =280;
            player.body.gravity.y = 600;
            player.body.setSize(20, 20, 10, 10);
        }


if(player.x> 18790){
  player.body.setSize(50, 53, 0,0);
}


        if (jumpButton.isDown && cursors.left.isDown){
        if(spider){
       player.animations.play("spider", 12, false);
     }
     else {
          player.animations.play("jump", 12, false);
          player.body.velocity.x = -250;}
        }








//SPARI NEMICI

if (enemy1.body.velocity.x>0){
    weapon1.fireAngle = 0;}
    if(enemy1.body.velocity.x<0){
        weapon1.fireAngle = 180;}

        if (enemy2.body.velocity.x>0){
            weapon2.fireAngle = 0;}
            if(enemy2.body.velocity.x<0){
                weapon2.fireAngle = 180;}

        if(Math.abs(enemy1.x - player.x) < 200)
                  weapon1.fire ();

                  if(Math.abs(enemy2.x - player.x) < 200)
                            weapon2.fire ();




                            if (player.y>3750){
                              if (invincible)  {
                                player.y= player.y-700
                                player.x = player.x+400;
                               }

                               else if(immune){
                                player.y= player.y-700
                                player.x = player.x+10;
                                contacuori--;
                                contacuori--;
                               danno.animations.play("flip", 4, false);
                                immune=false
                                game.time.events.add(1000, function(){immune=true});
                                }

                            }












     if ((locked1 || locked2 || locked3|| locked4 || locked5 || locked6 || locked7|| locked8 || locked9 || locked10 || locked11|| locked12 || locked13|| locked14 ) && jumpButton.isDown){
        locked1 =false
        locked2=false
        locked3=false
        locked4=false
        locked5=false
        locked6=false
        locked7=false
        locked8=false
        locked9=false
        locked10=false
        locked11=false
        locked12=false
        locked13=false
        locked14=false


        player.x=player.x+50
        player.y=player.y-40
      }

    if (locked1){
        player.x = liana1.x-26;
        player.y = liana1.y -8;
        player.body.velocity.y = 0;
        liana1.body.velocity.x = 200;
        liana1.body.velocity.x = player.body.velocity.x;
        player.animations.play("aggrappo", 12, false);
        player.body.setSize(40, 40, -10, 10);
        back12.body.velocity.x = 0

        if(player.body.velocity.x < 0){
          player.x = liana1.x+26;
        }


}

    if (locked2){
        player.x = liana2.x -26;
        player.y = liana2.y -10;
        player.body.velocity.y = 0;
       liana2.body.velocity.x = 200;
        liana2.body.velocity.x = player.body.velocity.x;
          player.animations.play("aggrappo", 12, false);
          back12.body.velocity.x = 0
          if(player.body.velocity.x < 0){
            player.x = liana2.x+26;
          }
        }

     if (locked3){
        player.x = liana3.x -26;
        player.y = liana3.y -10 ;
        player.body.velocity.y = 0;
        liana3.body.velocity.x = 200;
        liana3.body.velocity.x = player.body.velocity.x;
        player.animations.play("aggrappo", 12, false);
            back12.body.velocity.x = 0
            if(player.body.velocity.x < 0){
              player.x = liana3.x+26;
            }
        }

        if (locked4){
           player.x = liana4.x-26;
           player.y = liana4.y -10;
           player.body.velocity.y = 0;
           liana4.body.velocity.x = 200;
           liana4.body.velocity.x = player.body.velocity.x;
           player.animations.play("aggrappo", 12, false);
               back12.body.velocity.x = 0
               if(player.body.velocity.x < 0){
                 player.x = liana4.x+26;
               }
           }

           if (locked5){
              player.x = liana5.x -26;
              player.y = liana5.y -10;
              player.body.velocity.y = 0;
              liana5.body.velocity.x = 200;
              liana5.body.velocity.x = player.body.velocity.x;
              player.animations.play("aggrappo", 12, false);
                  back12.body.velocity.x = 0
                  if(player.body.velocity.x < 0){
                    player.x = liana5.x+26;
                  }
              }


              if (locked6){
                 player.x = liana6.x -26;
                 player.y = liana6.y -10;
                 player.body.velocity.y = 0;
                 liana6.body.velocity.x = 200;
                 liana6.body.velocity.x = player.body.velocity.x;
                 player.animations.play("aggrappo", 12, false);
                     back12.body.velocity.x = 0
                     if(player.body.velocity.x < 0){
                       player.x = liana6.x+26;
                     }
                 }

                 if (locked7){
                    player.x = liana7.x-26 ;
                    player.y = liana7.y -10;
                    player.body.velocity.y = 0;
                    liana7.body.velocity.x = 200;
                    liana7.body.velocity.x = player.body.velocity.x;
                    player.animations.play("aggrappo", 12, false);
                        back12.body.velocity.x = 0
                        if(player.body.velocity.x < 0){
                          player.x = liana7.x+26;
                        }
                    }

                    if (locked8){
                       player.x = liana8.x-26 ;
                       player.y = liana8.y -10;
                       player.body.velocity.y = 0;
                       liana8.body.velocity.x = 200;
                       liana8.body.velocity.x = player.body.velocity.x;
                       player.animations.play("aggrappo", 12, false);
                           back12.body.velocity.x = 0
                           if(player.body.velocity.x < 0){
                             player.x = liana8.x+26;
                           }
                       }

                       if (locked9){
                          player.x = liana9.x-26 ;
                          player.y = liana9.y -10;
                          player.body.velocity.y = 0;
                          liana9.body.velocity.x = 200;
                          liana9.body.velocity.x = player.body.velocity.x;
                          player.animations.play("aggrappo", 12, false);
                          back12.body.velocity.x = 0
                          if(player.body.velocity.x < 0){
                            player.x = liana9.x+26;
                          }
                          }




                             if (locked10){
                                player.x = liana10.x-26 ;
                                player.y = liana10.y -10;
                                player.body.velocity.y = 0;
                                liana10.body.velocity.x = 200;
                                liana10.body.velocity.x = player.body.velocity.x;
                                player.animations.play("aggrappo", 12, false);
                                back12.body.velocity.x = 0
                                if(player.body.velocity.x < 0){
                                  player.x = liana10.x+26;
                                }
                                }

                                if (locked11){
                                   player.x = liana11.x-26 ;
                                   player.y = liana11.y -10;
                                   player.body.velocity.y = 0;
                                   liana11.body.velocity.x = 200;
                                   liana11.body.velocity.x = player.body.velocity.x;
                                   player.animations.play("aggrappo", 12, false);
                                   back12.body.velocity.x = 0
                                   if(player.body.velocity.x < 0){
                                     player.x = liana11.x+26;
                                   }
                                   }

                                   if (locked12){
                                      player.x = liana12.x-26 ;
                                      player.y = liana12.y -10;
                                      player.body.velocity.y = 0;
                                      liana12.body.velocity.x = 200;
                                      liana12.body.velocity.x = player.body.velocity.x;
                                      player.animations.play("aggrappo", 12, false);
                                      back12.body.velocity.x = 0
                                      if(player.body.velocity.x < 0){
                                        player.x = liana12.x+26;
                                      }
                                      }

                                      if (locked13){
                                         player.x = liana13.x-26 ;
                                         player.y = liana13.y -10;
                                         player.body.velocity.y = 0;
                                         liana13.body.velocity.x = 200;
                                         liana13.body.velocity.x = player.body.velocity.x;
                                         player.animations.play("aggrappo", 12, false);
                                         back12.body.velocity.x = 0
                                         if(player.body.velocity.x < 0){
                                           player.x = liana13.x+26;
                                         }
                                         }

                                         if (locked14){
                                            player.x = liana14.x-26 ;
                                            player.y = liana14.y -10;
                                            player.body.velocity.y = 0;
                                            liana14.body.velocity.x = 200;
                                            liana14.body.velocity.x = player.body.velocity.x;
                                            player.animations.play("aggrappo", 12, false);
                                            back12.body.velocity.x = 0
                                            if(player.body.velocity.x < 0){
                                              player.x = liana14.x+26;
                                            }
                                            }







// LIMITI NEMICI

    if(enemy.x > 6444){
        enemy_direction = -1
        enemy.scale.setTo(-1.5, 1.5)}

    if(enemy.x < 5998){
        enemy_direction = 1
        enemy.scale.setTo(1.5, 1.5)}

        if(enemy4.x > 9470){
            enemy4_direction = -1
            enemy4.scale.setTo(-1.5, 1.5)}

        if(enemy4.x < 9029){
            enemy4_direction = 1
            enemy4.scale.setTo(1.5, 1.5)}

            if(enemy5.x > 11520){
                enemy5_direction = -1
                enemy5.scale.setTo(-1.5, 1.5)}

            if(enemy5.x <11100 ){
                enemy5_direction = 1
                enemy5.scale.setTo(1.5, 1.5)}



        if(enemy1.x > 7570){
            enemy1_direction = -1
            enemy1.scale.setTo(-1.5, 1.5)}

        if(enemy1.x < 7350){
            enemy1_direction = 1
            enemy1.scale.setTo(1.5, 1.5)}

            if(enemy2.x > 12406){
                enemy2_direction = -1
                enemy2.scale.setTo(-1.5, 1.5)}

            if(enemy2.x < 12090){
                enemy2_direction = 1
                enemy2.scale.setTo(1.5, 1.5)}

                if(enemy3.x > 7700){
                    enemy3_direction = -1
                    enemy3.scale.setTo(-1.5,1.5)}

                if(enemy3.x < 7425){
                    enemy3_direction = 1
                    enemy3.scale.setTo(1.5, 1.5)}

                    if(enemy6.x > 13400){
                        enemy6_direction = -1
                        enemy6.scale.setTo(-1.5,1.5)}

                    if(enemy6.x < 13170){
                        enemy6_direction = 1
                        enemy6.scale.setTo(1.5, 1.5)}





   if (Math.abs(enemy1.x - player.x) < 100){
     weapon1.fire()
      }

      if (Math.abs(enemy2.x - player.x) < 100){
        weapon2.fire()
         }



    // kill player when on floor



}




function finalebene(player,fine){
  esulta = true
  player.animations.add("esultanza", [7,2,8,9]);
  player.animations.play("esultanza", 6, true);

  elicottero.animations.play("flip", 12, true);

  elicottero.body.velocity.x = 300
  fire1.kill()

if(elicottero.x>19600){
  elicottero.body.velocity.x = 0

player.x=elicottero.x + 100
player.y = elicottero.y+320
player.body.velocity.y = 0;
player.body.gravity.y = 0;

//player.body.velocity.x = elicottero.body.velocity.x;
  }

  game.time.events.add(8500, finalebenebene)

    };

  function finalebenebene(){
    player.kill()
  sfondofinalebene = game.add.sprite(0,0,'sfondofinalebene');
  sfondofinalebene.fixedToCamera = true;
  menuv = game.add.sprite(455, 350,'menuv');
  vinto = game.add.sprite(0,0,'vinto');
  vinto.fixedToCamera = true;

  sfondofinalebene.height = game.height;
  sfondofinalebene.width = game.width;
  vinto.height = game.height;
  vinto.width = game.width;
  //  menu.height = game.height;
  //  menu.width = game.width;

  vinto.inputEnabled = true;
  vinto.events.onInputDown.add(vinto_clicked);



  menuv.fixedToCamera=true;
  menuv.inputEnabled = true;
  menuv.events.onInputDown.add(menuv_clicked);



}


        function vinto_clicked(){
         vinto.kill()}

          function menuv_clicked(){
        window.location.href = "Menu.html"


    }

        function morte_clicked () {

          morte.kill()


        }



        function menusc_clicked () {

        window.location.href = "index.html"

        }

        function rigioca_clicked () {

        window.location.href = "gioco.html"

        }


function touch_enemy(player, enemy) {
    if(invincible)
        enemy.kill()
        else if(immune){
          contacuori--;
            danno.animations.play("flip", 4, false);
          immune=false
          game.time.events.add(1000, function(){immune=true});

        }
}

function touch_enemy(player, enemy1) {
    if(invincible){
        enemy1.kill()
        player.x = player.x - 100;}
        else if(immune){
          contacuori--;
            danno.animations.play("flip", 4, false);
          immune=false
          game.time.events.add(1000, function(){immune=true});
          player.x = player.x - 100;

        }
}


function touch_ostacolo(player,ostacolo) {
    if(invincible)
        ostacolo.kill()
        else if(immune){
          contacuori--;
            danno.animations.play("flip", 4, false);
          immune=false
          game.time.events.add(1000, function(){immune=true});

       }
}


function touch_fire(player, fire) {
  if (invincible)  {
    fire.x = fire.x -400;
  }
  else if(immune){
    contacuori--;
    contacuori--;
      danno.animations.play("flip", 4, false);
    immune=false
    game.time.events.add(1000, function(){immune=true});
    fire.x = fire.x -400;
 }
}

function touch_fire1(player, fire1) {
  if (invincible)  {
    fire1.y = fire1.y + 500;
  }
  else if(immune){
    contacuori--;
    contacuori--;
      danno.animations.play("flip", 4, false);

    immune=false
    game.time.events.add(1000, function(){immune=true});
    fire1.y = fire1.y + 500;
 }
}


function touch_g1(player, g1) {
    g1.kill()
    contacuori = 6;
          verdevita.animations.play("flip", 4, false);
}

function touch_g2(player, g2) {
    g2.kill()
    contacuori = 6;
          verdevita.animations.play("flip", 4, false);
}
function touch_g3(player, g3) {
    g3.kill()
    contacuori = 6;
          verdevita.animations.play("flip", 4, false);
}
function touch_g4(player, g4) {
    g4.kill()
    contacuori = 6;
          verdevita.animations.play("flip", 4, false);
}

function hitPlayer(player, bullet) {
  if (invincible)  {
    bullet.kill()
  }

  else if(immune){
    contacuori--;
      danno.animations.play("flip", 4, false);
    immune=false
    game.time.events.add(1000, function(){immune=true});
    player.x=player.x - 30;

 }
}



function saltoalto(player, elefante) {
    elefante.animations.play("molla", 12, false);
    player.body.velocity.y = -560;
}


function saltodilato(player, parete) {

    player.animations.play("spider", 12, false);
    spider = true
    back12.body.velocity.x = 0


    if (jumpButton.isDown) {
    player.body.velocity.y= -10;
    player.y = player.y - 4
    player.animations.play("spider", 12, false);
    spider = true;

    }

    }



    function cadutapiattaforma (player, platforms2){

     game.time.events.add(400, caduta)
  function caduta(){
     platforms2.body.velocity.y = 180;
    }


}

function camminatanemico(){
enemy.animations.play("flip", 12, false);
}

function camminatanemico1(){
enemy1.animations.play("flip", 12, false);
}

function camminatanemico2(){
enemy2.animations.play("flip", 12, false);
}
function camminatanemico3(){
enemy3.animations.play("flip", 12, false);
}
function camminatanemico4(){
enemy4.animations.play("flip", 12, false);
}

function camminatanemico5(){
enemy5.animations.play("flip", 12, false);
}

function camminatanemico6(){
enemy6.animations.play("flip", 12, false);
}



function surfata(player, acqua){
surf = true
tavola.kill()

}

function stopsurf(){
  surf = false
  player.animations.play("fermo", 12, false);

      player.body.setSize(50, 53, 0, 0);
}













function render () {

}

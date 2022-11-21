class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playercount=player.getcount()
    spritecar1=createSprite(width/2-100,height-100)
    spritecar1.addImage("jogador1",imgcar1)
    spritecar1.scale= 0.05
    spritecar2=createSprite(width/2+100,height+100)
    spritecar2.addImage("jogador2",imgcar2)
    spritecar2.scale= 0.05
    matrixdecarros=[spritecar1,spritecar2]
  }
  getstate(){
    var gamestateref=database.ref("gamestate")
    gamestateref.on("value",function(data){
      gamestate=data.val()
    })
  }
  update(state){
    database.ref("/").update({
      gamestate:state
    })
  }
  play(){
    this.segurarelemento()
    Player.getinfo()
    if(allPlayers!==undefined){
      image(pistaimg,0,-height*5,width,height*6)
      var index= 0
      for(var jogador in allPlayers){
        index= index+1
        var x= allPlayers [jogador].positionX
        var y= height- allPlayers [jogador].positionY
        matrixdecarros[index-1].position.x=x
        matrixdecarros[index-1].position.y=y
      }
      drawSprites()
      this.lidarcomcontroles()
    }
  }
  segurarelemento(){
    form.hide()
    form.titleImg.position(40,50)
    form.titleImg.class("gameTitleAfterEffect")
  }
  lidarcomcontroles(){
    if (keyIsDown(UP_ARROW)){
      player.positionY=player.positionY+10
      player.update()
    }
  }
}

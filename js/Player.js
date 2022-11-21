class Player {
  constructor() {
    this.name=null
    this.index=null
    this.positionX=0
    this.positionY=0
  }
  static getinfo(){
    var playerinforef=database.ref("players")
    playerinforef.on("value",data=>{
      allPlayers=data.val()
    })

  }
  getcount(){
    var playercountref=database.ref("playercount")
    playercountref.on("value",data=>{
      playercount=data.val()
    })
  }
  updatecount(count){
    database.ref("/").update({
      playercount:count
    })
  }
  addplayer(){
    var playerindex="players/player"+this.index
    if(this.index===1){
      this.positionX=width/2-100
    }
    else{
      this.positionX=width/2+100
    }
    database.ref(playerindex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY,
    })
  }
  update(){
    var playerindex="players/player"+this.index
    database.ref(playerindex).update({
      positionX:this.positionX,
      positionY:this.positionY,
    })
  }
  dardistancia(){
    var playerdistanceref=database.ref("players/player")+this.index
    playerdistanceref.on("value",data=>{
      var data= data.val()
      this.positionX=data.positionX
      this.positionY=data.positionY
    })
  }
}

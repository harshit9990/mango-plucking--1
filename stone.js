class Stone {
constructor(x,y,radius){
var option={
isStatic:false,
friction:1,
density:1.2,

}
this.x=x
this.y=y
this.radius=radius

this.stone=Bodies.circle(x,y,radius,option)
this.image=loadImage("images/stone.png")
World.add(world,this.stone)
}
display(){
var m=this.stone.position
push()
translate(m.x,m.y)
imageMode(CENTER)
image(this.image,0,0,this.radius,this.radius)
pop()


}







}
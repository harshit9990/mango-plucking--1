class Rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,pointB:pointB,stiffness:0.04,length:35


}
this.pointB=pointB;
this.rope=Constraint.create(options)
World.add(world,this.rope)

}

attach(body){
    this.rope.bodyA=body 
 }
 fly(){
 this.rope.bodyA=null
 
 }
display(){
push()
    var b=this.rope.bodyA.position;
var c=this.pointB
strokeWeight(7)
line(b.x,b.y,c.x,c.y)
pop()

}
}
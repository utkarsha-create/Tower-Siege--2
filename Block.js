class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
       this.image = loadImage("block.png");
    this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      if(this.body.speed > 3){
        push()
        World.remove(world, this.body)
        this.Visibility = this.Visibility - 15
        tint(255, this.Visibility)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop()
      }  
      else{
        var angle = this.body.angle;
      push()
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop() 
       }
      }
    }
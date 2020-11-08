class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false,
            friction:1.0
        }
        this.width = width;
        this.height = height;
        this.visiblity=255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        

        World.add(world,this.body);

    }
    display()  {

        //console.log(this.body.speed);
        if(this.body.speed < 3.2){
            fill(171,247,247);
            //rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
            //rotate(angle);
        }
        else{
            
            push();

            tint(255,this.visiblity);
            this.visiblity = this.visiblity - 1;
            
            pop();
            
            World.remove(world,this.body);

        }

      
    }
    score() {
        if(this.visiblity<0 && this.visiblity>-105) {
             // score = score+1
              scoregame++;
            
              //console.log(score)
        }
      }

 };

 

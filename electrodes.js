class Electrodes{
  constructor(){
    this.ampere = [];
  }
  
  applyForceTo(electrons){
    //print("volt: " + volt.value());
    for(let e of electrons){
        var force = createVector(volt.value(),0);
        e.applyForce(force);
      }
  }
  
  show(){
    let current = 0;
    let c = color(250, 80, 80, 70);
    
    //check which electrons are ending
    for(let i = 0; i < electrons.length; i++){
      if(electrons[i].pos.x > width/7+500){
        current = current + 6;
        electrons.splice(i, 1);
        c = color(255, 60, 60, 100);
      }
    }
    //print("current: " + current);
    this.ampere.unshift(-current);
    if(this.ampere.length > 80){
      this.ampere.pop();
    }
    noStroke();
    fill(80, 80, 250, 70);
    rect(width/7-100, height/4-35, 65, 350,20);
    fill(c);
    rect(width/7+525, height/4-35, 65, 350,20);
    
    this.showAmpere();
  }
  
  showAmpere(){
    translate(580, 50);
    stroke(250,0,0);
    line(0,0,80,0);
    
    beginShape(LINES);
    noFill();
    //stroke(0);
    for (let i = 0; i < this.ampere.length; i++) {
      vertex(i, this.ampere[i]);
    }
    endShape();
    translate(-580, -50);
  }
  
  charge(n, electrons){
    let max_elec_amount = map(volt.value(), 0, 10, 0, 400);
    if(electrons.length < max_elec_amount){
      for(let i = 0; i < n; i++){
        electrons.push(new Electron(width/7-34, height/2 + random(-100,100)));
      }
    }
  }
}
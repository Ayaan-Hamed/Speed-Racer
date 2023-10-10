class Form {
constructor () {
this.input = createInput ().attribute ("placeholder", "Enter your name")
this.playbtn = createButton ("start")
this.timg = createImg ("title.png", "game title")
this.gm = createElement ("H1")  
 }
 setpos () {
this.timg.position (width / 2 - 850, 150)    
this.input.position (width / 2 - 300, height / 2)
this.playbtn.position (width / 2 - 200, height / 2 + 150)
this.gm.position (width / 2, height / 2)
 }
 setstyle () {
this.timg.class ("timg")
this.input.class ("input")
this.playbtn.class ("playbtn")
this.gm.class ("gm")
 }
 display () {
image (bg, 0, 0, width, height)    
this.setpos ()
this.setstyle ()  
this.pressbtn () 
 }

pressbtn () {
this.playbtn.mousePressed (()=>{
    console.log (25654)
    this.input.hide ()
    this.playbtn.hide ()
    var m = `
    Hello ${this.input.value()}
    </br> wait for another
    </br> player to join ...
     `
     this.gm.html (m)
})

}

  }


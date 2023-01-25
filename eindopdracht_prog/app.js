class App
{
    runApplication()
    {
        console.log("Hello world!")

        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        
        //Kerstkaart
        g.beginPath()
        g.fillStyle = "cyan";
        g.moveTo(10,10)
        g.lineTo(1890,10)
        g.lineTo(1890,890)
        g.lineTo(10,890)
        g.closePath();
        g.stroke();
        g.fill();

        /* Sneeuwmanhoofd */
        this.drawSnowman3(g,"white", 53,820)
        this.drawSnowmaneyes1(g,"black", 48,827)
        this.drawSnowmaneyes1(g,"black", 48,812)
        this.drawSnowmaneyes1(g,"orange", 61,820)
  
        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(10,890)
        g.lineTo(10,800)
        g.lineTo(1890,800)
        g.lineTo(1890,890)
        g.closePath();
        g.stroke();
        g.fill();

        //Achtergrond
        g.beginPath()
        g.fillStyle = "#ffffff"
        g.moveTo(100,100)
        g.lineTo(1790,100)
        g.lineTo(1790,750)
        g.lineTo(100,750)
        g.closePath();
        g.stroke();
        g.fill();
          
        
        //De weg
        g.beginPath()
        g.fillStyle = "gray";
        g.moveTo(200,400)
        g.lineTo(1400,400)
        g.lineTo(1400,700)
        g.lineTo(1300,700)
        g.lineTo(1300,500)
        g.lineTo(200,500)
        g.closePath();
        g.stroke();
        g.fill();
        
        g.stroke();
        console.log(canvas)

        

        /* Huizen 1 */
        this.drawHouse(g,"red", 320, 240);
        this.drawHouse(g,"blue", 320, 440);
        this.drawHouse(g,"red", 320, 640);
        this.drawHouse(g,"blue", 320, 840);
        this.drawHouse(g,"red", 320, 1040);
        this.drawHouse(g,"blue", 320, 1240);
        this.drawHouse(g,"red", 320, 1440);
        this.drawHouse(g,"blue", 500, 1440);

        /* Sneeuwman 3 */
        this.drawSnowman1(g,"white", 590,700)
        this.drawSnowman2(g,"white", 570,700)
        this.drawSnowman3(g,"white", 550,700)
        this.drawSnowmaneyes1(g,"black", 548,706)
        this.drawSnowmaneyes1(g,"black", 548,694)
        this.drawSnowmaneyes1(g,"orange", 560,700)

        /* Sneeuwman 4 */
        this.drawSnowman1(g,"white", 450,530)
        this.drawSnowman2(g,"white", 420,530)
        this.drawSnowman3(g,"white", 400,530)
        this.drawSnowmaneyes1(g,"black", 395,537)
        this.drawSnowmaneyes1(g,"black", 395,522)
        this.drawSnowmaneyes1(g,"orange", 410,530)

        /* Sneeuwman 5 */
        this.drawSnowman1(g,"white", 340,1330)
        this.drawSnowman2(g,"white", 320,1330)
        this.drawSnowman3(g,"white", 300,1330)
        this.drawSnowmaneyes1(g,"black", 295,1337)
        this.drawSnowmaneyes1(g,"black", 295,1322)
        this.drawSnowmaneyes1(g,"orange", 310,1330)

        /* Sneeuwman 6 */
        this.drawSnowman1(g,"white", 450,1630)
        this.drawSnowman2(g,"white", 420,1630)
        this.drawSnowman3(g,"white", 400,1630)
        this.drawSnowmaneyes1(g,"black", 395,1637)
        this.drawSnowmaneyes1(g,"black", 395,1622)
        this.drawSnowmaneyes1(g,"orange", 410,1630)
        
        /* Sneeuwman 7 */
        this.drawSnowman1(g,"white", 250,1030)
        this.drawSnowman2(g,"white", 220,1030)
        this.drawSnowman3(g,"white", 200,1030)
        this.drawSnowmaneyes1(g,"black", 195,1037)
        this.drawSnowmaneyes1(g,"black", 195,1022)
        this.drawSnowmaneyes1(g,"orange", 210,1030)
        
        g.font="40px Comic Sans MS";
        g.fillStyle = "red";
        g.textAlign = "center";
        g.fillText("Merry Christmas and a happy new year!", canvas.width/4.6, canvas.height/14);
    }

    drawblaadjes(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,35, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()
    }

    drawboomstam(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y)
        g.lineTo(x+30,y)
        g.lineTo(x+15,y-70)
        g.stroke()
        g.fill()
    }

    drawboomstamgroteboom(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y)
        g.lineTo(x+50,y)
        g.lineTo(x+25,y-140)
        g.stroke()
        g.fill()
    }

    drawHouse(g, color, y, x){
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y)
        g.lineTo(x+30, y+30)
        g.lineTo(x+30, y+60)
        g.lineTo(x-30, y+60)
        g.lineTo(x-30, y+30)
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawSnowman1(g, color,y,x,r){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,35, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()

    }
    drawSnowman2(g, color,y,x,r){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,30, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()

    }
    drawSnowman3(g, color,y,x,r){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,20, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()

    }

    drawSnowmaneyes1(g, color,y,x,r){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,5, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()
    }

    drawkerstballen(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,8, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()
    }

    drawSnowmanmuts(g, color,y,x,r){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,19, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()
    }
}


let app = new App();
app.runApplication();
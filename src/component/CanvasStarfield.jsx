import React, { useEffect, useRef } from 'react'
import './canvas.css'


const CanvasStarfield = () =>{
//let x=1
//let y=1

    const canvasRef = useRef(null)

    class Circle {

        constructor(x,y,dx,dy,radius){
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
       
        }
        draw = (ctx) =>{
            
            
            ctx.beginPath()
            ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
            ctx.fillStyle = 'rgb(152, 230, 226)'
            ctx.fill()
            ctx.strokeStyle = 'rgb(152, 230, 226)'
            ctx.stroke()
        }
        update = (ctx) => {
            this.x += this.dx
            this.y += this.dy
            this.draw(ctx)

        }
        
    }

    


    useEffect (()=>{

        let circlearry = []
        for (var i = 0; i < 250; i++) {
            let x = Math.random() * window.innerWidth
            let y = Math.random() * window.innerHeight
            let radius = Math.random() * .9
            let dy = Math.random() * -.16
            let dx = Math.random() * .10
            circlearry.push(new Circle(x,y,dx,dy,radius))
    
            }
            console.log(circlearry)

        //let circle = new Circle(700,450,-.2,.07,20)

        const render = () =>{
         
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        //sets canvas size to browser
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0,0,canvas.width, canvas.height)
        for (var i = 0; i < circlearry.length; i++) {
        
            circlearry[i].update(ctx)
        
        }
        
        requestAnimationFrame(render)
    }
       
        render()
    })

    

   
return(

    <canvas id='canvas' ref={canvasRef} />

)
}
export default CanvasStarfield;

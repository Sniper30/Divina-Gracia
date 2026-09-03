'use client'

import { useEffect, useRef, useState } from "react"
class Wave {
    amplitude: number;
    period: number;
    horizontalShift: number;

    constructor(amplitude: number, period: number, HorizontalShift: number) {
        this.amplitude = amplitude;
        this.period = period;
        this.horizontalShift = HorizontalShift;
    }
    generateWave(y: number) {
        return this.amplitude * Math.sin((y / this.period) + this.horizontalShift)
    }
}
export default () => {
    let ref = useRef(null)
    let random = (min: number, max: number) => Math.random() * (max - min) + min
    let waves = useRef<Array<Wave>>([])

      useEffect(()=>{
        let num = []
           for (let i = 0; i < 100; i++) {
            let amplitude = random(0.5,4);
            let period = random(7, random(8,15));
            let HorizontalShift = random(10, random(20,50))
            waves.current.push(new Wave(amplitude,period,HorizontalShift))
        }
    },[])

    useEffect(() => {
        if (!ref.current) return;
        let cv = ref.current as HTMLCanvasElement
        let ctx = cv.getContext('2d');
        const scale = window.devicePixelRatio;
        cv.width    = scale * 1000;
        cv.height = scale*300;
        ctx?.scale(scale,scale)
        cv.style.width = '100%'
        cv.style.height = '100px'
        cv.style.background = '#ede5ce'


        cv.style.position = 'absolute'
        cv.style.top = '0px';
        cv.style.right = '0px';
        function draw(){
            ctx?.beginPath();
            ctx!.fillStyle = 'hsl(39 37.5% 52.9%)';
            ctx?.moveTo(0, -100)
            for (let i = 0; i < cv.width; i++) {
                let y = 0;
                for (let wave of waves.current) {
                    y += wave.generateWave(i)
                }
                ctx?.lineTo(i * 3, y+100);
    
            }
            ctx?.fill();

        }
        let direction = 0.05;
        function update(){
        ctx?.clearRect(0,0,cv.width,cv.height)
        waves.current.forEach((w,index)=>{
            w.horizontalShift +=direction
        })
        draw();
        requestAnimationFrame(update)
        }
        
        update()
    }, [])
    

    return (
        <canvas ref={ref}></canvas>
    )
}
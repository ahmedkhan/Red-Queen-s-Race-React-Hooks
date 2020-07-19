import React,{useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



const AliceRunning = () => {
    const { ref,  getAnimation } = useWebAnimations({
        keyframes: [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }
        ],
        timing: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
        }
    });

    useEffect(() => {
    document.addEventListener("click", () => {     
     const animation = getAnimation();
     animation.updatePlaybackRate(animation.playbackRate += 1);  
     
    })
    
  });

   
   
    return (
        <div id="red-queen_and_alice">
            <img id="red-queen_and_alice_sprite"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
                alt="Alice and the Red Queen running to stay in place." ref={ref} />
                
        </div>
    );
};

export default AliceRunning
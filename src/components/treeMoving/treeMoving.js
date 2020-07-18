import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const TreeMoving=()=>{
    const { ref } = useWebAnimations({
        keyframes: [
          { transform: 'translateX(100%)' },
          { transform: 'translateX(-100%)' }
        ],
        timing: {
          duration :3600,
          iterations : Infinity,
          playbackRate :-2

        }
      });


    return(
        <div className="scenery" id="foreground1" ref={ref}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
    )

}

export default TreeMoving;
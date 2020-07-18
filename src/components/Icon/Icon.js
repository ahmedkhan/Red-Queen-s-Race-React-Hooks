import React from 'react';
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

const Icon =()=>{
    const { ref } = useWebAnimations({ ...heartBeat });
    return(
       <div class="logo" id="logo" ref={ref}>
        <img src="https://media.giphy.com/media/WranowV7N52XcSsnQw/giphy.gif" width="180" height="180" frameBorder="0" alt="" />
      </div>
    )
}

export default Icon;
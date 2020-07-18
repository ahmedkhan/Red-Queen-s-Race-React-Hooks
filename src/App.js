import React from 'react';
import './App.css';
import AliceRunning from './components/alice_running/aliceRunning';
import TreeMoving from './components/treeMoving/treeMoving';
import Icon from './components/Icon/Icon';

function App() {

  return (
    <div class="wrapper">
      <div class="sky"></div>
      <div class="earth">
        <AliceRunning/>
      </div>
      <Icon/>
      <TreeMoving/>
      <div class="scenery" id="foreground2">
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div class="scenery" id="background1">
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
    </div>
  );
}

export default App;

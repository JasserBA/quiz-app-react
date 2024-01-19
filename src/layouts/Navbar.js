import React from 'react'
import logoWhite from '../assests/JASSERBA_logo_W.png'

function Navbar(){
  return (
    <div className="nav">
      <img
        src={logoWhite}
        width={200}
      />
    </div>
  );
}
export default Navbar;

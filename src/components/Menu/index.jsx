import React from 'react';
import MenuItem from "./MenuItem";

import "./index.scss";



const Menu = () => {
   return (
      <nav className="menu" >
         <ul className="menu__items">
            <MenuItem link="/"><span>Characters</span></MenuItem>
            <MenuItem link="/episodes">  <span>Episodes</span> </MenuItem>
            <MenuItem link="/locations"> <span>Locations</span></MenuItem>
            <MenuItem link="/watchlist"><span>Watch List</span> </MenuItem>
         </ul>
      </nav>
   );
}

export default Menu;
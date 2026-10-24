import HeaderMenu from "./HeaderMenu";
import { useState } from 'react';

import { Box } from "@mui/material";
import Search from "./Search";
import Conversations from "./Conversations";
const Menu=()=>{
    const [text, setText] = useState('');

    return(
   <Box>
    <HeaderMenu/>
    <Search setText={setText}/>
    <Conversations text={text}/>
   </Box>
    )
}
 export default Menu;
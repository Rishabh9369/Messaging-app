import { useContext ,useState } from "react";
import { Box ,styled} from "@mui/material";
import {Chat as MessageIcon,} from "@mui/icons-material"
import { AccountContext } from "../../context/AccountProvider";
import HeaderPoint from "./Headerpoint";
import InfoDrawer from "../../Drawer/InfoDrawer";

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;


const HeaderMenu =()=>{
 const[OpenDrawer,setOpenDrawer]=useState(false);

    const {account}=useContext(AccountContext);


    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }
    return(
        <>
           <Header>
              <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>
              <RightContainer>
                <MessageIcon/>
                <HeaderPoint setOpenDrawer={setOpenDrawer}/>
              </RightContainer>
           </Header>
           <InfoDrawer open={OpenDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default HeaderMenu;
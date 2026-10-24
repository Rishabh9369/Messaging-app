import { Dialog,Box,Typography ,ListItem,List,styled} from "@mui/material";
import { qrCodeImage } from "../constant/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { addUser } from "../../Service/addUser";

const Component=styled(Box)`
display:flex;
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
    height: 264,
    width: 264,
    position: 'absolute',
    top: 40, 
    right: 40, 
    marginBottom: 20,
});


const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle={
    marginTop: '12%',
    height: '96%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
};


const LoginDiaog=()=>{
    const {setAccount}=useContext(AccountContext)

    const onLoginSuccess=async(res)=>{
        const decode=jwtDecode(res.credential);
        setAccount(decode);
        await addUser(decode);
    }
    const onLoginFailure=(res)=>{
      console.log('Login failed',res);
    }
    return(
       <Dialog
         open={true}
         PaperProps={{sx:dialogStyle}}
       >
       <Component>
        <Container>
            <Title>To use Varatalap on your computer</Title>
            <StyledList>
            <ListItem>1. Open Varatalap on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select Varatalap Web </ListItem>
            <ListItem>3.Tap on a Link Device</ListItem>
            <ListItem>4. Point your phone to this screen to capture the code</ListItem>
            </StyledList>
        </Container>
        <Box>
          <QRCOde src={qrCodeImage} alt="qrcode"/>
           <Box style={{ top: '50%', transform: 'translateX(25%)'}}>
             <GoogleLogin
                     onSuccess={onLoginSuccess}
                     onError={onLoginFailure}

              />
           </Box>
        </Box>
       </Component>
       </Dialog>


    )
}
export default LoginDiaog; 
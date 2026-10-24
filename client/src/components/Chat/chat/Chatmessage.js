import { Box ,styled} from "@mui/material";
import { useContext,useState ,useEffect} from "react";
import Footer from "./Footer";
import { AccountContext } from "../../context/AccountProvider";
import { newMessages ,getMessages} from "../../../Service/addUser";
import Message from "./Message";


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const ChatMessage=({person,conversation})=>{

    const [incomingMessage, setIncomingMessage] = useState(null);

    const [value,setValue]=useState('');
    const[message,setMessage]=useState([]);
    const {account,socket,newMessageFlag,setNewMessageFlag}=useContext(AccountContext);


    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [socket]);

    
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessage(data);
        }
        conversation._id && getMessageDetails();
    }, [conversation._id, person._id,newMessageFlag]);
    

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessage((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);

  const sendText=async(e)=>{
   console.log(e);
   let code = e.keyCode || e.which;
   if(code === 13) { 
    let message =  {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversation._id,
            type: 'text',
            text: value
        }


        socket.current.emit('sendMessage', message);



        await newMessages(message);

        setValue('');
        setNewMessageFlag(prev=> !prev)
    }
} 

  
    return (
       <Wrapper>
           <Component>
           {
            message && message.map(message=>(
                <Container>
               <Message message={message}/>
               </Container>
            ))
           }
           </Component>
           <Footer
           sendText={sendText}
           setValue={setValue}
           value={value}
           />
       </Wrapper>
    )
    }
export default ChatMessage;
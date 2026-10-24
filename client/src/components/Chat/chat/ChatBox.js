import ChatHeader from "./ChatHeader";
import ChatMessage from "./Chatmessage";
import { Box } from "@mui/material";
import { useContext ,useEffect,useState} from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getConversation } from "../../../Service/addUser";

const ChatBox=()=>{
    const {person,account}=useContext(AccountContext);
    const [conversation, setConversation] = useState({});


    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);

        }
        getConversationDetails();
    }, [person.sub,account.sub]);

    return(
        <Box>
        <ChatHeader person={person}/>
        <ChatMessage person={person} conversation={conversation}/>
        </Box>
    )
}
export default ChatBox;
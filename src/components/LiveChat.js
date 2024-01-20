import React, { useEffect, useState } from 'react'
import ChatMes from './ChatMes';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [LiveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
       const i = setInterval(() =>{

        // API polling
         console.log("API Polling");

         dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20),
         })
         );
        }, 500);


        return () => clearInterval(i);

    }, []);
  return (

    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>

    <div>
    { chatMessages.map((c, i) => <ChatMes key={i}
        name={c.name}
        message={c.message}/>
     )}
     </div>
 </div>

 <form className='w-full p-2 ml-2 border border-black ' onSubmit={(e) => {
    e.preventDefault();
    console.log("ON Form Submit", LiveMessage);

    dispatch(addMessage({

        name: "Akshay Saini",
        message: LiveMessage,
}))

    setLiveMessage("");
 }} >
 <input className=' px-2 w-72' type='text'
    value={LiveMessage} onChange={(e) =>{
    setLiveMessage(e.target.value);
 }}/>
 <button className='px-2 mx-2 bg-green-200'>Send</button>
</form>
</>
  )
}

export default LiveChat;

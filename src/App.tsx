import { useEffect, useRef, useState } from 'react';
import './App.css';
import ChatHelper from './ChatHelper';
import NewMessage from './NewMessage';
import MessageBox from './MessageBox';
import { v4 as uuidv4 } from 'uuid';
import Website from './website';
function App() {
  const ref = useRef<any>(null);
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [newMessages, setNewMessages] = useState(true)
  const [messages, setMessages] = useState([
    {
      from: 0,
      text:
        "Hello, I am ShipMate. I can help with your queries regarding logistics and Shiprocket. How can I help you today",
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (event : Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    const chatId = localStorage.getItem("chat_id")
    if(!chatId){
      const uuid = uuidv4();
      localStorage.setItem("chat_id", uuid)
    }


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    
  }, []); 




  return (
    <div className='' >
      <Website/>
        <div className='fixed bottom-4 right-4 h-20 w-20' ref={ref}>
        <div className='absolute bottom-4 right-4 h-20 w-20 rounded-full bg-[#2C2A4A] text-white flex justify-center items-center text-2xl chat-circle cursor-pointer' onClick={()=>{
          setIsChatOpen(prevState => !prevState)
        }}>
        <i className="fa-solid fa-message"></i>
        </div>
        {
          isChatOpen ? <MessageBox setIsChatOpen={()=>setIsChatOpen(false)} messages={messages} setMessages={setMessages}/> : <ChatHelper/>
        }

        {newMessages && <NewMessage/>}
      </div>
    </div>
  );
}

export default App;

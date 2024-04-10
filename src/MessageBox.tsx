import { useEffect, useRef, useState } from "react";
import environment from "../env.json";
export default function MessageBox(props: any) {
  
  const [isMsgLoading, setIsMsgLoading] = useState(false);

  const [userInput, setUserInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current?.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [props.messages]);

  const ApiCall = async (message: string) => {
    let chat_id = localStorage.getItem("chat_id");
    if (chat_id) {
      const data: any = {
        message: message,
        session_id: chat_id,
      };
      const queryString = Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
      try {
        const apires = await fetch(
          environment.BASE_API_URL + "chat"
        , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        });
        if (apires) return apires.json();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const sendMsg = () => {

//     fetch("http://172.16.3.69:3000/chat", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // body: '{\n    "message": "How do I add buyer details in manual order?",\n    "session_id": "8076837278"\n}',
//   body: JSON.stringify({
//     message: "How do I add buyer details in manual order?",
//     session_id: "8076837278",
//   }),
// })
    if (userInput) {
      const newMsg = { text: userInput, from: 1 };
      props.setMessages((prevState:any) => [...prevState, newMsg]);
      setUserInput("");
      setIsMsgLoading(true); // Show loading indicator
      ApiCall(userInput).then((res) => {
        if (res) {
          props.setMessages((prevState:any) => [
            ...prevState,
            { text: res.data, from: 0 },
          ]);
          setIsMsgLoading(false);
        } else {
          props.setMessages((prevState:any) => [
            ...prevState,
            {
              text:
                "Sorry, I could not process this data right now. Please try again later",
              from: 0,
            },
          ]);
          setIsMsgLoading(false);
        }
      });
    }
  };
  return (
    <>
      <div className="shadow-lg absolute top-0 left-0 chatbox rounded-lg">
        <div className="header flex justify-between bg-[#4F518C] text-white p-3 rounded-md">
          <span className="text-sm">
            <i className="fa-solid fa-robot"></i> ShipMate
          </span>

          <i
            className="fa-solid fa-xmark text-sm cursor-pointer"
            onClick={() => {
              props.setIsChatOpen(false);
            }}
          ></i>
        </div>

        <div
          className="body  max-h-[77%] min-h-[77%] p-3 flex flex-col gap-2 overflow-y-auto"
          ref={bodyRef}
        >
          {props.messages.map((msg:any) => {
            return <Messages msg={msg} />;
          })}

          {isMsgLoading && <MessageLoading />}
        </div>

        <div className="input-field flex gap-2 p-3">
          <input
            className=" border-[1px] border-[#4F518C] rounded-md text-xs p-2"
            style={{
              width: "calc(100% - 40px)",
            }}
            placeholder="Type in your text"
            value={userInput}
            onChange={(e: any) => {
              setUserInput(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMsg();
                setUserInput("");
              }
            }}
          />
          <button
            className="bg-[#4F518C] text-white h-10 w-10 rounded-md text-sm"
            onClick={() => {
              sendMsg();
              setUserInput("");
            }}
          >
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}

const Messages = ({ msg }: any) => {
  return (
    <>
      {msg.from == 0 ? (
        <div className="flex gap-4 items-end">
          <div className=" rounded-full text-base bg-[#2C2A4A] text-white w-10 h-10 flex justify-center items-center">
            {" "}
            <i className="fa-solid fa-robot"></i>{" "}
          </div>

          <div className="flex justify-start max-w-[80%] text-sm p-2 bg-[#DABFFF] relative rounded-md">
            <i className="fa-solid fa-caret-left text-[#DABFFF] absolute left-[3px] translate-x-[-100%] bottom-2 text-xl"></i>
            <span className="msg-box">{msg.text}</span>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <div className="flex flex-end justify-end max-w-[80%] text-sm p-2 bg-[#4F518C] relative rounded-md">
            <span className="text-white  msg-box">{msg.text}</span>

            <i className="fa-solid fa-caret-right text-[#4F518C] absolute right-[-16px] translate-x-[-100%] bottom-0 text-xl"></i>
          </div>
        </div>
      )}
    </>
  );
};
const MessageLoading = () => {
  return (
    <>
      <div className="flex gap-4 items-end">
        <div className=" rounded-full text-base bg-[#2C2A4A] text-white w-10 h-10 flex justify-center items-center">
          {" "}
          <i className="fa-solid fa-robot"></i>{" "}
        </div>

        <div className="flex justify-start max-w-[80%] text-sm p-2 bg-[#DABFFF] relative rounded-md">
          <i className="fa-solid fa-caret-left text-[#DABFFF] absolute left-[3px] translate-x-[-100%] bottom-2 text-xl"></i>
          <span className="msg-box">
            <div className="typing">
              <div className="typing__dot"></div>
              <div className="typing__dot"></div>
              <div className="typing__dot"></div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";

export default function ChatHelper() {
  const [currKey, setCurrKey] = useState(0);
  const classFortext =
    "absolute left-[-40px] top-[10px] bg-[#907AD6] w-auto text-sm p-3 rounded-md translate-x-[-100%] whitespace-nowrap chatbot-helper-text";

  const messages = [
    "Hi I am a chat bot driven by ai",
    "I can help you with ecommerce",
    "Having A doubt?",
    "Let Me help you here"
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrKey((prevValue) => (prevValue < 3 ? prevValue + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {messages.map((item, index) => (
        <div
          key={index}
          className={`${classFortext} ${
            index === currKey ? "" :  "hidden"
          }`}
        >
          {item}
          <i className="fa-solid fa-caret-right text-[#907AD6] absolute right-[3px] translate-x-[100%] top-2"></i>
        </div>
      ))}
    </>
  );
}

import { createContext, useEffect } from "react";
console.log('ContextProvider loaded');
import runChat from "../config/Gemini";
export const Context = createContext();
const ContextProvider = (props)=>{
    const [input, setInput] = useState("");
    const[recentPrompts, setRecentPrompts] = useState("");
    const [prevprompts, setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    Const[resultData,setResultData]=usestate("");


  

     const onSent=async(prompt)=>{
         console.log('Calling runChat with prompt:', prompt);
         const response = await runChat(prompt);
         if (response) {
             console.log('Gemini response:', response);
         } else {
             console.error('No response from Gemini API');
         }
     }
     useEffect(() => {
         console.log('useEffect running in ContextProvider');
         
     }, []);
    const contextValue = {
        prevprompts,
        setPrevPrompts,
        onSent,
        setRecentPrompts,
        recentPrompts,
        showResult,
        loading,
        resultData,
        input,
        setInput

    };
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
} 
export default ContextProvider;
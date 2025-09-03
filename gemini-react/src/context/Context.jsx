import { createContext, useEffect } from "react";
console.log('ContextProvider loaded');
import runChat from "../config/Gemini";
export const Context = createContext();
const ContextProvider = (props)=>{
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
         onSent("what is react js");
     }, []);
    const contextValue = {

    };
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
} 
export default ContextProvider;
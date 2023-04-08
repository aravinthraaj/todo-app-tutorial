import { useState, useEffect } from "react"
const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(()=>{
    try{
      const saved = localStorage.getItem(key)
      if(saved!==null){
        return defaultValue
      } else {
        return JSON.parse(saved)
      }
    } catch {
      return defaultValue
    }
  })
  
  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
}, [value]);

  return [value, setValue]
}

export default useLocalStorage

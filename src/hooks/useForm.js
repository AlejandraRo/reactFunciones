
import { useState } from "react"
export const useForm = (initialForm={}) => {
    
    const [formState, setFormState] = useState({
        username:'',
        email:'',
        password:''
    })

    const {username,email,password}=formState

    const onInputChange=({target})=>{
    
        const {name,value}=target
        
        setFormState({
            ...formState,
            [name]:value
        })
    }
  return {
    ...formState,
    formState,
    onInputChange

    
  }
}

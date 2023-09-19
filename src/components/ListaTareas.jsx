const initialState=[{
    id:1,
    tarea:"Explicar reducer",
    finalizada:false
}]

const nuevaTarea={
    id:2,
    tarea:"Tarea nueva",
    finalizada:false
}
const agregarTarea={
    type:"[TAREAS]Agregar tarea",
    payload:nuevaTarea
}

const tareaReducer=(state=initialState,action={})=>{
    if(action.type==='[TAREAS]Agregar tarea'){
        return [...state,action.payload]
    }
    return state
}

console.log(tareaReducer(initialState,agregarTarea));
export const ListaTareas = () => {
  return (
    <div>ListaTareas</div>
  )
}

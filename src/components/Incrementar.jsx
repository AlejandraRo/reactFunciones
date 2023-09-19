import React from 'react'

export const Incrementar = React.memo(({incrementar}) => {

        console.log('Estoy cambiando')
      return (
        <button onClick={()=>incrementar(100)}>+10</button>
      )
    }
    
)

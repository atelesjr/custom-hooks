import { useState } from 'react'

const useArray = (defaultValue:any[]) => {
  const [ array, setArray ] = useState(defaultValue)

  const push = (element:any) => {
    setArray((state) => [ ...state, element] )
  }

  const filter = (callback: (func:any) => void) => {
    setArray((a) => a.filter(callback))
  }

  const update = (index: number, newElement: any) => {
   setArray(
    arr => [ 
      ...arr.slice(0, index),
      newElement,
      ...arr.slice(index + 1, arr.length - 1 )
    ]

   )
  }

  const remove = (index: number) => {
   setArray( arr => [ 
      ...arr.slice(0, index), 
      ...arr.slice( index + 1, arr.length - 1)
    ])
  }

  const clear = () => {
    setArray([])
   
  }

  return {
    array, set: setArray, push, remove, filter, update, clear
  }


}

export default useArray




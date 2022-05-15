import { useArray } from '../hooks';
import *  as S from './styles'

const UseArrayPage = () => {
  const numbers = [1,2,3,4,5,6]
  const { array, set, push, remove, filter, update, clear } = useArray(numbers)

  return (
    <S.Content>
      <h3>UseArray</h3>
      <div>{ array.join(',') }</div>
      <button onClick={() => push(7) }>Add 7</button>
      <button onClick={() => update(1,9) }>Change Second Element to 9</button>
      <button onClick={() => remove(1) }>Remove second element</button>
      <button onClick={() => filter( (n:any) => n < 3) }>Keep Number Less Than 4</button>
      <button onClick={() => set(numbers) }>Set To 1 to 6</button>
      <button onClick={() => clear() }>Clear</button>
    </S.Content>
  )

}

export default UseArrayPage
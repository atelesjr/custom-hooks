import { useToggle } from '../hooks';
import *  as S from './styles'

const UseTogglePage = () => {
  const [ value, toggleValue ] = useToggle(false)

  return (
    <S.Content>
      <h3>UseToggle</h3>
      <div>{ value?.toString() }</div>
      <button onClick={ toggleValue }>Toggle</button>
      <button onClick={() => toggleValue(true) }>Make true</button>
      <button onClick={() => toggleValue(false) }>Make False</button>
    </S.Content>
  )

}

export default UseTogglePage
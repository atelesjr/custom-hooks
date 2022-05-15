import { useLocalStorage } from '../hooks';
import * as S from './styles'

const UseStoragePage = () => {
  const [ name, setName ] = useLocalStorage('name', '')
  const [ value, setValue ] = useLocalStorage('value', 0)

  return (
    <S.Content>
      <h3>UseLocal Storage</h3>

      <input 
        type="text"  
        value={name}
        onChange={ e => setName(e.target.value)}
      />

      <input 
        type="text"  
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
    </S.Content>
  )

}

export default UseStoragePage
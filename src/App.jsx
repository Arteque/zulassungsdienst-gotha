import Button from "./Components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div>
      <Button url="#">Data</Button>
      
      <Button url="/#" callLight={true}>call action</Button>

      <Button url="/#" callDark={true}>call action</Button>

      <Button url="#" callInline={true}> inline</Button>

      <Button url="#" callIcon={true} icon={<FontAwesomeIcon icon={faHome} />} >Home</Button>
      
    </div>
  )
}

export default App
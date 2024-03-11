import { useState } from "react"

function Nav() {
    const items = [
        {
            label:'Start seite',
            key:'home'
        },
        {
            label: 'Impressum',
            key:'impressum'
        },
        {
            label: 'Kontakt',
            key: 'kontakt'
        }
    ]
    const [current, setCurrent] = useState("home")

    const handleClick = (e) => {
        console.log('click', e)
        setCurrent(e.key)
    }


  return (
    <Menu 
    onClick={handleClick} 
    selectedkeys={[current]} 
    mode="horizontal" 
    items={items}
    />
  )
}

export default Nav
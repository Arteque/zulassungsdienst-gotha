import { useState } from "react"
import { Link } from "react-router-dom"
function Nav() {

    const items = [
        {
            label:'Startseite',
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
    const [clickedItem , setClickedItem] = useState("")
    const handleClick = (item) => {
        setClickedItem(item.key);
    }

  return (
    <ul className="nav-items">
        
        {
            items.map((item, index) => {
              return (
                <li key={index} className={`${clickedItem === item.key ? 'current':''}`}>
                    <Link to={item.key} onClick={() =>{handleClick(item)}}>
                        {item.label}
                    </Link>
                 </li>  
              )
            })
        }
        
    </ul>
  )
}

export default Nav
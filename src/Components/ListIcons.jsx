import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListIcons ({icon}){
    return <>
       <span className="font-icons">
            <FontAwesomeIcon icon={icon}/> 
       </span>
    </>
}

export default ListIcons
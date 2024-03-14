import Button from "./Components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ListIcons from './Components/ListIcons'
import { faPhone, faMobile, faAt, faLocationDot, faBusinessTime  } from "@fortawesome/free-solid-svg-icons";
import HeadingBig from "./Components/HeadingBig";
function AllComponents() {
  return (
    <div>
    <Button url="#">Data</Button>
    
    <Button url="/#" callLight={true}>call action</Button>

    <Button url="/#" callDark={true}>call action</Button>

    <Button url="#" callInline={true}> inline</Button>

    <Button url="#" callIcon={true} icon={<FontAwesomeIcon icon={faHome} />} >Home</Button>
    
    <ul class="">
      <li className="icon-link-item">
        <a href="to:123545677">
          <ListIcons icon={faMobile}/>
          <span className="text">
            0173638 55 4113
          </span>
        </a>
      </li>
      <li>
        <ListIcons icon={faPhone}/>
      </li>
        <ListIcons icon={faAt}/>
      <li>
        <ListIcons icon={faLocationDot}/>
      </li>
      <li className="icon-link-item">
        <span>
          <ListIcons icon={faBusinessTime}/>
          <span className="text">
            Öffnungszeiten: <strong>Mo -Fr von 08:00 Uhr bis 17:00 Uhr</strong>
          </span>
        </span>
      </li>
    </ul>

    <HeadingBig level={1}>Header</HeadingBig>
    <HeadingBig level={2}>Header</HeadingBig>
    <HeadingBig level={3}>Header</HeadingBig>
    <HeadingBig level={4}>Header</HeadingBig>
    <HeadingBig level={5}>Header</HeadingBig>
    <HeadingBig level={6}>Header</HeadingBig>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deleniti, est perspiciatis doloribus illum fugit ut qui corrupti officia cumque sit culpa quo ullam reprehenderit iste perferendis accusantium veniam cupiditate, eum aperiam labore? Animi vero enim sequi ipsum. Repudiandae consequuntur corporis quia alias quas. Expedita harum laboriosam nobis? Magnam non, labore consectetur quaerat totam optio a natus itaque harum corrupti, impedit dolore quo ad nobis, ab deserunt beatae fugit? Quas voluptatum, velit aliquid aperiam modi corporis magnam non eveniet sequi id dolore accusamus quibusdam corrupti ducimus, eum enim quaerat nihil itaque dolor aut, facere tempora? Laborum ex eveniet quas ducimus?
    </p>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
  )
}

export default AllComponents
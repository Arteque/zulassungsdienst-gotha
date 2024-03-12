import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
function Button({url, children, callDark, callLight, callInline, callIcon, icon}) {

    const [classname, setClassname] = useState("");

    useEffect(() => {
        let newClassname = "call";
        if (callDark) {
            newClassname = 'call-dark';
        } else if (callLight) {
            newClassname = 'call-light';
        } else if (callInline) {
            newClassname = 'call-inline';
        } else if (callIcon) {
            newClassname = 'call-icon';
        } 
        setClassname(newClassname);
    }, [callDark, callLight, callInline, callIcon]);

    

  return (
    <Link 
        to={url} 
        className={classname} 
    >
        {
            classname === 'call-icon' 
            && <span className="icon">{icon}</span>
        }
        <span className="text">{children}</span>
    </Link>
  )
}

Button.defaultProps = {
    url: "#",
    callDark:false,
    callLight:false,
    callInline:false,
    callIcon:false,
}

Button.propTypes = {
    url: PropTypes.string,
    children: PropTypes.node.isRequired,
    callDark:PropTypes.bool,
    callLight:PropTypes.bool,
    callInline:PropTypes.bool,
    callIcon:PropTypes.bool,
}

export default Button
function Menu({handleClick, current, items}) {
  return (
    items.map((item,index) => {
      <a>{item}</a>
    })
  )
}

export default Menu
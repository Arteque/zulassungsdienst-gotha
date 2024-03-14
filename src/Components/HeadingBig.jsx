function HeadingBig({level, children}) {
    
    const headerLevel = Math.max(1, Math.min(6, level))
    const HeaderTag = `h${headerLevel}`

    return <HeaderTag className="main-heading">{children}</HeaderTag>

HeadingBig.defaultProps = {
    level: 2
}

}

export default HeadingBig
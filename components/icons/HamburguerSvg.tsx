import React from 'react'

interface Props {
    className?: string
}

const HamburguerSvg : React.FC<Props> = (props) => {
    return (        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={props.className}><circle cx="256" cy="256" r="221.405" fill="#bef2ff"/><g fill="#4f7097"><path d="M256 512C114.619 512 0 397.381 0 256S114.619 0 256 0s256 114.619 256 256c-.152 141.326-114.674 255.848-256 256zm0-442.811C152.825 69.189 69.189 152.825 69.189 256S152.825 442.811 256 442.811 442.811 359.175 442.811 256C442.659 152.894 359.106 69.341 256 69.189z"/><circle cx="257.245" cy="257.245" r="120.251"/></g></svg>)
}

HamburguerSvg.defaultProps = {
    className: 'w-8 h-8 stroke-current'
}

export default HamburguerSvg;
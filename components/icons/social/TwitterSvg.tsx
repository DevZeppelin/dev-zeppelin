import React from 'react'

interface Props {
    className?: string
}

const TwitterSvg : React.FC<Props> = (props) => {
    return (<svg className={props.className} width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C8.956 0 0 8.956 0 20s8.956 20 20 20 20-8.956 20-20S31.044 0 20 0zm9.132 15.594c.009.197.013.395.013.593 0 6.066-4.617 13.061-13.061 13.061-2.593 0-5.005-.76-7.037-2.062.36.043.725.064 1.095.064a9.21 9.21 0 005.702-1.965 4.596 4.596 0 01-4.289-3.189 4.57 4.57 0 002.074-.079 4.592 4.592 0 01-3.683-4.5v-.058a4.56 4.56 0 002.08.574 4.586 4.586 0 01-2.043-3.821c0-.841.227-1.629.621-2.307a13.033 13.033 0 009.463 4.796 4.592 4.592 0 017.823-4.186 9.207 9.207 0 002.914-1.115 4.608 4.608 0 01-2.019 2.54 9.155 9.155 0 002.637-.723 9.329 9.329 0 01-2.29 2.377z" fill="#fff"/></svg>)
}

TwitterSvg.defaultProps = {
    className: 'text-white'
}

export default TwitterSvg;
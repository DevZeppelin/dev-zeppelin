import React from 'react'

interface Props {
    className?: string
}

const FacebookSvg : React.FC<Props> = (props) => {
    return (<svg className={props.className} width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 20C40 8.953 31.047 0 20 0S0 8.953 0 20s8.953 20 20 20c.117 0 .234 0 .352-.008V24.43h-4.297v-5.008h4.297v-3.688c0-4.273 2.609-6.601 6.421-6.601 1.829 0 3.399.133 3.852.195v4.469H28c-2.07 0-2.477.984-2.477 2.43v3.187h4.961l-.648 5.008h-4.313v14.805C33.883 36.828 40 29.133 40 20z" fill="#fff"/></svg>)
}

FacebookSvg.defaultProps = {
    className: 'text-white'
}

export default FacebookSvg;
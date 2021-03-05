import React from 'react'

interface Props {
    className?: string
}

const WhatsappSvg : React.FC<Props> = (props) => {
    return (<svg className={props.className} width="41" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.956 9.18 0 20.5 0S41 8.956 41 20s-9.18 20-20.5 20S0 31.044 0 20zm20.93 11.645h.005c6.761 0 12.266-5.369 12.269-11.967.001-3.197-1.274-6.204-3.59-8.466-2.317-2.261-5.398-3.508-8.68-3.51-6.762 0-12.266 5.369-12.27 11.967 0 2.109.565 4.167 1.639 5.982l-1.741 6.201 6.504-1.664a12.508 12.508 0 005.864 1.457zM10 19.495C10.003 13.709 14.937 9 21.005 9c2.938.001 5.7 1.094 7.776 3.078 2.077 1.984 3.22 4.621 3.219 7.426C31.997 25.29 27.063 30 21 30h-.004c-1.974 0-3.91-.507-5.599-1.463l-.402-.227-4.163 1.042 1.111-3.874-.261-.397A10.123 10.123 0 0110 19.496zm15.243 6.014c.635-.091 1.956-.764 2.232-1.5.275-.738.275-1.37.192-1.501-.066-.106-.222-.178-.452-.284l-.181-.085c-.33-.158-1.956-.921-2.26-1.026-.303-.106-.524-.159-.744.157-.22.316-.854 1.027-1.047 1.238-.193.21-.386.236-.716.079a4.973 4.973 0 00-.22-.095c-.465-.193-1.383-.573-2.44-1.472-.982-.836-1.646-1.87-1.839-2.185-.173-.283-.037-.437.098-.59l.047-.055c.35-.414.716-.868.827-1.079.11-.21.055-.395-.028-.553-.055-.105-.369-.834-.653-1.494-.141-.328-.275-.639-.367-.848-.236-.544-.477-.542-.67-.541l-.073-.001c-.193-.009-.414-.01-.634-.01-.22 0-.579.078-.882.394l-.065.066c-.344.35-1.092 1.112-1.092 2.566 0 1.545 1.172 3.037 1.347 3.26l.003.004.058.079c.396.542 2.49 3.409 5.59 4.686.79.325 1.406.52 1.886.665.792.24 1.513.206 2.083.125z" fill="#fff"/></svg>)
}

WhatsappSvg.defaultProps = {
    className: 'text-mywhite'
}

export default WhatsappSvg;
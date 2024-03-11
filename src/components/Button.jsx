import "../styles/button.css"

const Button = ({text, className}) => {
  return (
    <button className={`bg-blue-600 rounded-lg text-white text-xl font-medium leading-7 tracking-normal text-left ${className}`}>{text}</button>
  )
}

export default Button
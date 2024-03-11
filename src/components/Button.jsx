import "../styles/button.css"

const Button = ({text, className}) => {
  return (
    <button className={`bg-[#3C82F4] rounded-lg text-white text-xl font-medium leading-7 tracking-normal text-left ${className}`}>{text}</button>
  )
}

export default Button
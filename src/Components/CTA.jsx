
const CTA = (props) => {
  const{type,text} = props
  return (
    <>
    <button className="CTA" type={type}>{text}</button>
    </>
)
}

export default CTA
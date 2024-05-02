import './index.css'

const CourseList = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default CourseList

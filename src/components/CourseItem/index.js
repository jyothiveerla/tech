import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {details} = props
  const {name, logoUrl, id} = details
  return (
    <Link to={`/courses/${id}`}>
      <li className="list_container">
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem

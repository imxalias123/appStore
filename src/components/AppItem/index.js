// Write your code here
import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList
  return (
    <li>
      <div className="img-container">
        <img className="img" src={imageUrl} alt="appName" />
        <p>{appName}</p>
      </div>
    </li>
  )
}

export default AppItem

// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveTab, isActive} = props
  const {displayText, tabId} = tabItem
  const onClickTadItem = () => {
    updateActiveTab(tabId)
  }

  const activeTabClass = isActive ? 'active-tab-item' : ''

  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={`btn ${activeTabClass}`}
        onClick={onClickTadItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

import './index.css'

const CounterItem = props => {
  const {details} = props
  const {char} = details

  return (
    <li>
      <p className="text-item">{`${char}: ${char.length}`}</p>
    </li>
  )
}

export default CounterItem

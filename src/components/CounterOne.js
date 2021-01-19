const CounterOne = (props) => {
  return (
    <button onClick={() => props.myFunc()}>Counter1 ({ props.data })</button>
  )
}

export default CounterOne

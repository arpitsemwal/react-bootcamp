import Users from './Users'

function App(state) {
  state = {
    users: [
      {name: 'Arpit', age: 26, id: 1},
      {name: 'Tobi', age: 50, id: 2},
      {name: 'Rama', age: 70, id: 3}
    ]
  }
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Users users={state.users}/>
    </div>
  )
}

export default App

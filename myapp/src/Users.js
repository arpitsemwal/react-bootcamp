function Users(props) {
    const {users} = props
    const userList = users.map(user => {
      return (
        <div className="Users" key={user.id}>
          <div>Name: {user.name}</div>
          <div>Age: {user.age}</div>
        </div>
      )
    })
    return (
      <div className="user-list">
        {userList}
      </div>
    )
  }
  
  export default Users
  
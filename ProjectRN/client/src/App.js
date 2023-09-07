import React, { useEffect, useState } from 'react'

const App = () => {

  const [backenData, setbackenData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => setbackenData(data)
    )
  }, [])


  return (
    <div className='m-3 text text-center'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            (typeof backenData.users === 'undefined') ?
              (<p>Loading .....</p>) :
              (backenData.users.map((user, i) =>
                <tr className='text text-center' key={i}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

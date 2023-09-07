import React from 'react'
import { useUser } from '../hooks/useUser'


const UsersPage = () => {
    
    const { users } = useUser(); 
    
  return (
    <div className='mt-5'>
      <table className='table table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user, i) => (
                    <tr key={i}>
                        <td>{ user.id }</td>
                        <td>{ user.email}</td>
                        <td>{ user.first_name} { user.last_name}</td>
                        <td>
                            <img src={user.avatar} alt='avatar' className='img-thumbail' style={{ width: 50}} />
                        </td>

                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage

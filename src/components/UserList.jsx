import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/features/userSlice'
import { useEffect } from 'react'

export default function UserList() {
 const dispatch = useDispatch();
    const { data = [] } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} | {user.email} | {user.phone} 
          </li>
        ))}
      </ul>
    </div>
  )
}



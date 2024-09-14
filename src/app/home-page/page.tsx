'use client';
import { useState, useEffect } from 'react';


export default function(){
const [user, setUser] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
  const fetchUsers = async () => {
    const URL = 'http://localhost:3000/api/users'
    const info = await fetch(URL).then(res => res.json())
    console.log(info)
  }
  fetchUsers()
}, [])

return (
  <>
    <div>
      User Dasboard
    </div>
  </>
)

}
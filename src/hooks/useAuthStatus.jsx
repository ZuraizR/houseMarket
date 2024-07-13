import React, { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingSatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      }
      setCheckingStatus(false)
    })
  }, [])

  return { loggedIn, checkingSatus }
}

export default useAuthStatus

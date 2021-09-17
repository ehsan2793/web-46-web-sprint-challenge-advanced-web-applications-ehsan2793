import axiosWithAuth from '../helpers/axiosWithAuth'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const LogOut = () => {
    const { push } = useHistory()
    useEffect(() => {

        axiosWithAuth()
            .post('logout')
            .then(res => {
                localStorage.removeItem('token')
                push('/login')

            }
            ).catch(error => console.error(error))
    }, [])


    return (
        <div></div>
    )
}
export default LogOut
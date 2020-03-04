import React , {useEffect} from 'react'
import useCounter from '../hooks/useCounter'

const TimeOnPage = () => {
    const {count, up} = useCounter()
    useEffect(()=>setInterval(up,1000), [])
    return <h2>You've been here for {count} seconds</h2>
}

export default TimeOnPage
import React from 'react'
import useCounter from '../hooks/useCounter'

const AdBanner = () => {
    const {count,up} = useCounter()
    return (count<5) && 
    <img onClick={up} alt='annoying' src='https://www.gstatic.com/images/branding/product/2x/photos_96dp.png'/>
}

export default AdBanner
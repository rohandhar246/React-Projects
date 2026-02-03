import {useState , useEffect } from 'react'

function Currencyinfo(Currency){
    const [data, setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[Currency]))
    },[Currency])
    console.log(data)
    return data
}

export default Currencyinfo;
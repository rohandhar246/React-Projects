import React from 'react'

const InputBox = ({
       label,
       amount,
       onAmountChange,
       onCurrencyChange,
       currencyOptions = [],
       selectCurrency = 'usd',
       amountDisable = false,
       currencyDisable = false,
}) => {
  return (
    <div className='flex justify-between bg-white p-2 rounded-lg max-sm:flex-col'>
      <div className='flex flex-col sm:w-1/2'>
        <label className='p-2'>{label} :</label>
        <input  className='m-2 p-1 bg-white brightness-85 rounded-lg'
         type='number' value={amount} disabled={amountDisable} placeholder='0' onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
      </div>
      <div className='flex flex-col sm:w-1/2'>
        <p className='p-2'>Currency</p>
        <input
          list="currency-list"
          className='m-2 p-1 bg-white brightness-85 rounded-lg w-auto'
          value={selectCurrency}
          disabled={currencyDisable}
          placeholder="Search..."
         //full list intigration
         onFocus={(e) => (e.target.value = "")} 
         onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          // This restores the value if the user clicks away without picking
          onBlur={(e) => (e.target.value = selectCurrency)}
          />
          

        <datalist id="currency-list">
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} />
          ))}
        </datalist>

      </div>
    </div>
  )
}

export default InputBox
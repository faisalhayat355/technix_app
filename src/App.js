import React from 'react'
import HeaderComponent from './component/header'
import GeneralLedger from './component/generalLedger'
import FilterComponent from './component/FilterComponent'
import ListComponent from './component/ListComponent'

const App = () => {
  return (
    <div style={{marginLeft:'3rem',marginTop:'1rem'}}>
      <HeaderComponent/>
      <GeneralLedger/>
      <FilterComponent/>
      <ListComponent/>
    </div>
  )
}

export default App
import React from 'react'

const Header = ( {header = 'Expense Tracker'} ) => {
  return (
    <h2>
      {header}
    </h2>
  )
}

export default Header;

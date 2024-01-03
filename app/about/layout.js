import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
      <nav>
          <ul className='flex gap-6 text-4xl mb-4'>
          
          <li><Link href='/about/mission'>Mission</Link></li>
          <li><Link href='/about/vission'>Vission</Link></li>
        
          </ul>
        </nav>
        <hr />
        {children}
    </div>
  )
}

export default layout
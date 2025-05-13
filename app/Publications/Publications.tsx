import React from 'react'
import PublicationTable from './PublicationTable'
const Publications = () => {
  return (
    <div className='md:ml-15 md:px-10 ml-6 md:mr-6 mr-0 mt-10'>
        <h1 className='heading md:text-4xl text-3xl accent-color'>
            Publications
        </h1>
        <div className='mt-10'>
            <PublicationTable></PublicationTable>
        </div>
    </div>
  )
}

export default Publications
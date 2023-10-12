import React from 'react'

export default function CompA(props) {
  return (
    <>
     <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead >
          <tr >
            <th style={{ borderCollapse: 'collapse', border: '1px solid black' ,color:'red'}}>name</th>
            <th style={{ borderCollapse: 'collapse', border: '1px solid black',color:'red' }}>roll</th>
          </tr>
        </thead>
        <tbody style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
          {props.data.map((e, i) => (
            <tr key={i} >
              <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{e.name}</td>
              <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{e.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}
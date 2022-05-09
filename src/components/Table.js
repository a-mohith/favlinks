import React from 'react'
//import Table from'';

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    let { linkData, removeLink } = props;
    return (
      <table>
           < TableHeader />
            <TableBody linkData= {linkData} removeLink= {removeLink} />
        </table>
      )
      
  }
  

}

export default Table
/* <div>
      {TableHeader()}
      {TableBody(props)}
      </div> */
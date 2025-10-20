import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData=[
        {
            "firstName": "Mihir",
            "lastName": "Kashid",
            "email": "mihir@gmail.com"
        },
        {
            "firstName": "Aarav",
            "lastName": "Mehta",
            "email": "aarav.mehta@example.com"
        },
        {
            "firstName": "Sneha",
            "lastName": "Patil",
            "email": "sneha.patil@example.com"
        },
        {
            "firstName": "Rohan",
            "lastName": "Deshmukh",
            "email": "rohan.deshmukh@example.com"
        },
        {
            "firstName": "Ananya",
            "lastName": "Nair",
            "email": "ananya.nair@example.com"
        }
    ]


  return (
    <div>
        <h2>List of Employees</h2>
        <table>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Firstname</th>
                    <th>Employee Lastname</th>
                    <th>Employee emailId</th>
                </tr>
            </thead>
            <tbody>
                {dummyData.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
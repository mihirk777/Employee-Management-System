import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployee } from '../Services/EmployeeService';

const EmployeeComponent = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");

    const navigator=useNavigate();

    const {id}=useParams();

    const [error,setError]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

    useEffect(()=>{
        if(id){
            getEmployee(id).then(res=>{
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
            }).catch(error=>{
                console.error(error);
            })
        }
        
    },[id])

    function saveEmployee(e){
        e.preventDefault();
        if(validateForm()){
            const employee={firstName,lastName,email};
            console.log(employee);
            createEmployee(employee).then((res)=>{
                console.log(res.data);
                navigator('/employees')
            })
        }
        
    }

    function validateForm(){
        let valid=true;
        const errorsCopy={...error}
        if(firstName.trim()){
            errorsCopy.firstName=''
        }else{
            errorsCopy.firstName='First name is required'
            valid=false
        }

        if(lastName.trim()){
            errorsCopy.lastName=''
        }else{
            errorsCopy.lastName='Last name is required'
            valid=false
        }

        if(email.trim()){
            errorsCopy.email=''
        }else{
            errorsCopy.email='Email address is required'
            valid=false
        }
        setError(errorsCopy);
        return valid;

    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
  return (

    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input 
                                type='text' 
                                placeholder='Enter employee first name' 
                                name='firstName' 
                                value={firstName}
                                className={`form-control ${error.firstName?'is-invalid':''}`}
                                onChange={(e)=>setFirstName(e.target.value)}
                            >
                            </input>
                            {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type='text' 
                                placeholder='Enter employee last name' 
                                name='lastName' 
                                value={lastName}
                                className={`form-control ${error.lastName?'is-invalid':''}`}
                                onChange={(e)=>setLastName(e.target.value)}
                            >
                            </input>
                            {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input 
                                type='email' 
                                placeholder='Enter employee email' 
                                name='email' 
                                value={email}
                                className={`form-control ${error.email?'is-invalid':''}`}
                                onChange={(e)=>setEmail(e.target.value)}
                            >
                            </input>
                            {error.email && <div className='invalid-feedback'>{error.email}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
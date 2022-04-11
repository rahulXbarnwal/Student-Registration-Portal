import React, { useState } from 'react'

const Form  = () => {

    const [form, setForm] = useState({
        name : '',
        email : '',
        website : '',
        img : '',
        java : false, html : false, css : false,
        gender : 'Male'
    });

    const [records, setRecords] = useState([]);

    const onChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.type==='checkbox' ? target.checked : target.value;

        setForm({
            ...form,
            [name] : value
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const newRecord = {...form, id : Math.floor(Math.random() * 1000)}
        setRecords([...records, newRecord]);
    }

    const clear = (e) => {
        setForm ({
            name : '',
            email : '',
            website : '',
            img : '',
            java : false, html : false, css : false,
            gender : 'Male'
        })
    }

  return (
      <>

        <div className='row'> 
            
            <div className="left-container col">

                <form>
                    <div className = 'field'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name = "name" id = "name" onChange = { onChange } value = { form.name } autoComplete='off'/>
                    </div>

                    <div className = 'field'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name = "email" id = "email" onChange = { onChange } value = { form.email } autoComplete='off'/>
                    </div>

                    <div className = 'field'>
                        <label htmlFor="website">Website</label>
                        <input type="text" name = "website" id = "website" onChange = { onChange } value = {form.website} autoComplete='off'/>
                    </div>

                    <div className = 'field'>
                        <label htmlFor="img">Image Link</label>
                        <input type="text" name = "img" id = "img" onChange = { onChange } value = {form.img} autoComplete='off'/>
                    </div>

                    <div className = 'field2' id = 'gender'>
                        <label htmlFor="gender">Gender</label>
                        <input type="radio" name = "gender" id = "male" value = "Male" onChange = {onChange} checked = {form.gender === 'Male'}/>
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" name = "gender" id = "female" value = "Female" onChange = {onChange} checked = {form.gender === 'Female'}/>
                        <label htmlFor="female" >Female</label>
                    </div>

                    <div className='field2' id = 'skills'>
                        <label htmlFor="skills">Skills</label>
                        <input type="checkbox" name = "java" id = "java" checked = {form.java} onChange = {onChange}/>
                        <label htmlFor="java">Java</label>
                        <input type="checkbox" name = "html" id = "html" checked={form.html} onChange = {onChange}/>
                        <label htmlFor="html">HTML</label>
                        <input type="checkbox" name = "css" id = "css" checked = {form.css} onChange = {onChange}/>
                        <label htmlFor="css">CSS</label>
                    </div>

                    <div className='button'>
                        <button type="button" className="btn btn-primary" onClick = {handleSubmit}>Enroll Student</button>
                        <button type="button" className="btn btn-danger" onClick = {clear}>Clear</button>
                    </div>

                </form>
                <div className='vert'>
                    <hr />
                </div>
                
            </div>
            <div className = 'col'>
            <div className="container-fluid mt-4">
                    <div className = "row text-center">
    
                    {
                        records.map((curElem) => {
                            return (
                                <div key = {curElem.id}  className='box my-2'>
                                    <div className="col-10 col-md-4 mt-4">
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src= {curElem.img} className="rounded" width="155" alt=''/> </div>
                                                <div>
                                                    <h5 className="mb-0 mt-0 textLeft">Name : {curElem.name}</h5> <br />
                                                    <span>Gender : {curElem.gender}</span> <br />
                                                    <span>Email : {curElem.email}</span> <br />
                                                    <span>Website : {curElem.website}</span> <br />
                                                    <span>Skills : {curElem.java?'JAVA ':''} {curElem.html? 'HTML ': ''} {curElem.css ? 'CSS ': ''} </span>
                                                </div>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
    
    
                    </div>
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default Form ;
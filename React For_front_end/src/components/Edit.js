import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom'


const Edit = () => {
    let params = useParams('id');


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    // console.log(name);
    // console.log(email);
    // console.log(phone);


  useEffect(() => {
    axios({
          method:'get',
          url: `http://127.0.0.1:8000/api/show/${params.id}`,
      }).then((res) => {
        console.log('we got this data',res.data);
        setName(res.data.name)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        
      }).catch((err) => {
          console.log(err);
      });

    
  },[params.id]);

  

    const nameChangeHandler = e => {
      setName(e.target.value)
    }
    
    const emailChangeHandler = e => {
      setEmail(e.target.value)
      
    }
    
    const phoneChangeHandler = e => {
      setPhone(e.target.value)
    }

    const handelUpdata = (e) => {
      e.preventDefault();
      console.log('form button is clicked');
      axios({
        method:'post',
        url: `http://127.0.0.1:8000/api/show/${params.id}`,
        data: {name:name,email:email, phone:phone}
    }).then((res) => {
      console.log('your data is updataed...', res.data);
      
    }).catch((err) => {
        console.log(err);
    });
    }
    
  return (
   <>
   <div className="alert alert-danger text-center">
        <h2>Edit Your Form</h2>
       </div>
   <div className="container d-flex justify-content-center mt-3">   
   <div className="col-md-5">
      <form onSubmit={handelUpdata}> 
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} name="name" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input type="text" value={email} onChange={emailChangeHandler} name="email" id="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Password</label>
          <input type="text" value={phone} onChange={phoneChangeHandler} name="phone" id="phone" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
   </div>
   </>
  )
}

export default Edit
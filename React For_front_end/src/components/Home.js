import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Home = () => {
const [data, setdata] = useState();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

const nameChangeHandler = e => {
  setName(e.target.value)
}
const emailChangeHandler = e => {
  setEmail(e.target.value)
}
const phoneChangeHandler = e => {
  setPhone(e.target.value)
}

  useEffect(() => {
    axios({
          method:'get',
          url: 'http://127.0.0.1:8000/api',
      }).then((res) => {
        console.log(res.data);
        setdata(res.data)
      }).catch((err) => {
          
      });    
  }, []);

const addData = e => {
  e.preventDefault();
  axios({
    method:'post',
    url: 'http://127.0.0.1:8000/api/create',
    data: {name: name,email: email, phone: phone}
}).then((res) => {
  console.log('data is added');
  setdata(res.data)
}).catch((err) => {
    
});
}

    return (
    <>
    <h2>Home page</h2>
    <hr />
    <div className="container">
  <div className="row">
    <div className="col-md-5">
      <form onSubmit={addData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" onChange={nameChangeHandler} name="name" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input type="text" onChange={emailChangeHandler} name="email" id="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Password</label>
          <input type="text" onChange={phoneChangeHandler} name="phone" id="phone" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
 
<div className="col-md-7">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">edit</th>
    </tr>
  </thead>
  <tbody>
     { 
      // data?.map((item)   if you have add brases [] with useState then  use ?    with to apply map on array to get data.
       data?.map((item) => (
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>
          <Link to={`edit/${item.id}`}>edit</Link>
        </td>
        
      </tr>
      ))
    }
    
  </tbody>
</table>

</div>
</div>
</div>




    </>



    )
}

export default Home
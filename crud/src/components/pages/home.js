
import { useFormik } from "formik";
import React from "react";

import * as yup  from "yup";





// const validate = values =>{
//     var errors={};
//     if (!values.name){
//         errors.name ="Name is required"
//     }
//     return errors;
// }

const Home =()=>{

    
   const formik =useFormik({
       initialValues:{
           name:" ",
           Lastname:"",
           email:"",
           list:"",
          
       },
       validationSchema:yup.object({

    name:yup.string()
                 .min(2,<div className="text-danger">minimum 4 character*</div>)
                .max(12,<div className="text-danger">Maximum 10 character*</div>),
    Lastname:yup.string()
                .min(2,<div className="text-danger">minimum 1 character*</div>)
               .max(2,<div className="text-danger">Maximum 2 character*</div>),
                
    email:yup.string()
       .email(<div className="text-danger">Enter valid Email*</div>)
       .required(),
    list:yup.string()
       .required(<div className="text-danger">List is required*</div>)
       }),
       
       onSubmit:(userInputData)=>{
         debugger;
           console.log(userInputData);
           localStorage.setItem('userInputData',JSON.stringify(userInputData));
       }
   })



    return(
        <div className="container">
       
       <form className="needs-validation mar" novalidate onSubmit={formik.handleSubmit}>
  <div className="form-row">
    <div className="col-md-12 mb-3 mt-10">
      <label for="validationCustom01">FirstName</label>
      <input type="text" className="form-control wid"  onChange={formik.handleChange} value={formik.values.name} 
      name="name" required/>
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
     </div>
     </div>




     <div className="form-row">
    <div className="col-md-12 mb-3">
      <label for="validationCustom01">LastName</label>
      <input type="text" className="form-control wid"  onChange={formik.handleChange} value={formik.values.Lastname} 
      name="Lastname" required/>
      {formik.errors.Lastname ? <div>{formik.errors.Lastname}</div> : null}
     </div>
     </div>










    

     <div className="form-row">
    <div className="col-md-12 mb-3">
      <label for="validationCustom01">Email</label>
      <input type="text" className="form-control wid"  onChange={formik.handleChange} value={formik.values.email} 
      name="email" required/>
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
     </div>
     </div>


    <div className="form-row widd">
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">Gender</label>
      <select class="custom-select" id="validationCustom04" required
      onChange={formik.handleChange} value={formik.values.list} 
      name="list" >
        <option selected disabled value="">---select---</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      {formik.errors.list ? <div>{formik.errors.list}</div> : null}
     
    </div>
    </div>




<div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>




    


  <button className="btn btn-primary" type="submit">Submit</button>
</form>
 </div>
    )
}
export default Home;

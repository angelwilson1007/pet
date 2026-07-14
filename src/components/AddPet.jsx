import React from 'react'



const AddPet = () => {
  return (
    <div>
       

        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">booking id </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">pet name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">pet type</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">breed</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">age</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">weight(kg)</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">vaccination status</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">owner name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">owner phone </label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">owner email</label>
                          <input type="date" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">check-in date</label>
                          <input type="text" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">check-out date</label>
                          <input type="text" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">kennel number</label>
                          <input type="text" className="form-control" />
                    </div>
                    
                    
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPet
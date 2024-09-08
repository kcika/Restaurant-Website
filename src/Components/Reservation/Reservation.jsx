import React from 'react'
import './Reservation.css'
const Reservation = () => {
    return (
        <div>
            <div className="row justify-content-center py-3">
                <div className="col reservation">
                    <p className="h1 mb-3 text-center">Make a Reservation</p>
                    <p className="fs-5 text-center">Call us at (123) 456-7890 or Fill out the Reservation form</p>
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-6">
                            <label htmlFor="" className='fs-5'>Name</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Your Name" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="" className='fs-5'>Phone Number</label>
                            <input type="tel" class="form-control" id="validationCustom02" maxLength={10} placeholder="Phone Number" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label htmlFor="" className='fs-5'>Number of Persons</label>
                            <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                                <option>5 Person</option>
                                <option>6 Person</option>
                                <option>7 Person</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label htmlFor="" className='fs-5'>Date</label>
                            <input type="date" class="form-control" id="validationCustom02" value="Your Email" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label htmlFor="" className='fs-5'>Time</label>
                            <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">12:00 am</option>
                                <option>1:00 pm</option>
                                <option>2:00 pm</option>
                                <option>3:00 pm</option>
                                <option>4:00 pm</option>
                                <option>5:00 pm</option>
                                <option>6:00 pm</option>
                                <option>7:00 pm</option>
                                <option>8:00 pm</option>
                                <option>9:00 pm</option>
                                <option>10:00 pm</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="col-12">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" rows={6} placeholder='Any Message'></textarea>
                        </div>
                        <div class="col-12">
                            <button class="py-3 w-100 fw-semibold bg-golden" type="submit">Book a Table</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reservation

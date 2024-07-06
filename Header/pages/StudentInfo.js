import React from "react";
class StudentInfo extends React.Component
{
    render()
    {
        // (function () {
        //     'use strict'
        //     var forms = document.querySelectorAll('.needs-validation')
        //     Array.prototype.slice.call(forms)
        //       .forEach(function (form) {
        //         form.addEventListener('submit', function (event) {
        //           if (!form.checkValidity()) {
        //             event.preventDefault()
        //             event.stopPropagation()
        //           }
        //           form.classList.add('was-validated')
        //         }, false)
        //       })
        //   })()
        return(
            <div>
                <div className="min-vh-100 d-flex justify-content-center align-items-center mt-5">
                    <form className="shadow-lg p-3 mt-5 mb-5 bg-body rounded pt-4 needs-validation" novalidate>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">First name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="fn" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Last name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="ln" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Moblie Number</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="mn" required />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <div>
                                    <input type="text" className="form-control" id="inputCity" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select" required>
                                    <option value="">--select--</option>
                                    <option value="AP">AP</option>
                                    <option value="MP">MP</option>
                                    <option value="TN">TN</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label  for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" required />
                            </div>
                        </div>
                        <br />
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                            <div className="col-sm-10">
                                <div className="male">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" required />
                                    <label className="form-check-label" for="gridRadios1" id="male">Male</label>
                                </div>
                                <div className="female">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" required />
                                    <label className="form-check-label" for="gridRadios2" id="female">Female</label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="row mb-3">
                            <label for="branch" class="col-sm-2 col-form-label">Branch</label>
                            <div className="col-sm-10">
                                <select id="branch" class="form-select" required>
                                    <option value="">--select--</option>
                                    <option value="CSE">CSE</option>
                                    <option value="MECH">MECH</option>
                                    <option value="EEE">EEE</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="clg" className="col-sm-2 col-form-label">College</label>
                            <div className="col-sm-10">
                                <select id="clg" className="form-select" required>
                                    <option value="">--select--</option>
                                    <option value="AITS-KADAPA">AITS-KADAPA</option>
                                    <option value="AITS-RAJAMPET">AITS-RAJAMPET</option>
                                    <option value="KSRM-KADAPA">KSRM-KADAPA</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default StudentInfo;
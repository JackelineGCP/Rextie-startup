import React from 'react'
import Profile from '../../profile/components/profile'
import BankAccount from '../components/bankAccounts'


import './step.css'

const Step = (props) => {
  return (
    <div className="col-md-10">
      <Profile />
      <div >
        <div className="wizard">
          <div className="wizard-inner">
            <div className="connecting-line"></div>
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
                  <span className="round-tab">
                    1
                  </span>
                </a>
              </li>
              <li role="presentation" className="disabled">
                <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                  <span className="round-tab">
                    2
                  </span>
                </a>
              </li>
              <li role="presentation" className="disabled">
                <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                  <span className="round-tab">
                    3
                  </span>
                </a>
              </li>

              <li role="presentation" className="disabled">
                <a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                  <span className="round-tab">
                    4
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <form role="form">
            <div className="tab-content">
              <div className="tab-pane active" role="tabpanel" id="step1">
                <h3>Step 1</h3>
                <p>This is step 1</p>
                <ul className="list-inline pull-right">
                  <li>
                    <button type="button" className="btn btn-primary next-step">Save and continue</button>
                  </li>
                </ul>
              </div>
              <div className="tab-pane" role="tabpanel" id="step2">
                <BankAccount />
              </div>
              <div className="tab-pane" role="tabpanel" id="step3">
                <h3>Step 3</h3>
                <p>This is step 3</p>
                <ul className="list-inline pull-right">
                  <li>
                    <button type="button" className="btn btn-default prev-step">Previous</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-default next-step">Skip</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-primary btn-info-full next-step">Save and continue</button>
                  </li>
                </ul>
              </div>
              <div className="tab-pane" role="tabpanel" id="complete">
                <h3>Complete</h3>
                <p>You have successfully completed all steps.</p>
              </div>
              <div className="clearfix"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step
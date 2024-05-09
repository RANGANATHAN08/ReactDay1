import React from 'react'

function Card({data}) {
  return  <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
      <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
      <hr></hr>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.plan!=="FREE"?<b>{data.user}</b>:<>{data.user}</>}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.publicProjects}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.access}</li>
        <li className={data.isProjects?"":"text-muted"}><span className="fa-li"><i className={data.isProjects?"fas fa-check":"fas fa-times"}></i></span>{data.projects}</li>
        <li className={data.isPhone?"":"text-muted"}><span className="fa-li"><i className={data.isPhone?"fas fa-check":"fas fa-times"}></i></span>{data.phone}</li>
        <li className={data.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubDomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PRO"?<><b>Unlimited</b> {data.subDomain}</>:<>{data.subDomain}</>}</li>
            <li className={data.isReport?"":"text-muted"}><span className="fa-li"><i className={data.isReport?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card
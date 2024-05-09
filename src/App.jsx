import React from 'react'
import Card from './Components/Card'

function App() {

  let data = [
  {
    plan:"FREE",
    price:0,
    user: "Single User",
    isUser:true,
    storage: "5GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    projects:"Unlimited Private Projects",
    isProjects:false,
    phone:"Dedicated Phone Support",
    isPhone:false,
    subDomain: "Free Subdomain",
    isSubDomain:false,
    reports: "Monthly Status Reports",
    isReport:false


  },
  {
    plan:"PLUS",
    price:9,
    user: "5 Users",
    isUser:true,
    storage: "50GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    projects:"Unlimited Private Projects",
    isProjects:true,
    phone:"Dedicated Phone Support",
    isPhone:true,
    subDomain: "Free Subdomain",
    isSubDomain:true,
    reports: "Monthly Status Reports",
    isReport:false


  },
  {
    plan:"PRO",
    price:150,
    user: "Unlimited Users",
    isUser:true,
    storage: "150GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    projects:"Unlimited Private Projects",
    isProjects:true,
    phone:"Dedicated Phone Support",
    isPhone:true,
    subDomain: "Free Subdomains",
    isSubDomain:true,
    reports: "Monthly Status Reports",
    isReport:true


  }
]
  return <section className="pricing py-5">
  <div className="container">
    <div className="row">
     
     {
      data.map((e,i)=>{
        return <Card data = {e} key = {i}/>
      })
     }
    </div>
  </div>
</section>

}

export default App
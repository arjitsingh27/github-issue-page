import React from 'react'
import {Link} from 'react-router-dom'

function IssueLink({fbIssues}) {

    const handlerClick=()=>{
        fbIssues()
    }


    return (
        <div>
        <button onClick={handlerClick}><Link to="/issues">SHOW ISSUES LIST</Link></button>

        </div>
    )
}

export default IssueLink

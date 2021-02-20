import React from 'react'

function FbissuesList({ issuesList }) {

    return (
        <div className="list">
            
            {
                issuesList.map((item,index) => (
                  
//                         <img className="image" src={item.user.avatar_url} alt="git_img" />
//                         <h5>{item.user.login}</h5>
//                         <h5>{item.user.id}</h5>
                        <h3 key={index}>{item.title}</h3>
                   
                ))
            }
        </div>
    )
}

export default FbissuesList

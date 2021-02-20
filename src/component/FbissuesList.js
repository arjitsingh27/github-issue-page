import React from 'react'

function FbissuesList({ issuesList }) {

    return (
        <ol className="list">
            
            {
                issuesList.map((item) => (
                    <li>
                        <img className="image" src={item.user.avatar_url} alt="git_img" />
                        <h5>{item.user.login}</h5>
                        <h5>{item.user.id}</h5>
                        <p>{item.body}</p>
                    </li>
                ))
            }
        </ol>
    )
}

export default FbissuesList

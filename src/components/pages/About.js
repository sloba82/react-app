import React from 'react'

export default props => {
    return (
        <div>
            <h1 className="display-4"> About contact manager  {props.match.params.id}</h1>
            <p>Simple app to menage contacts</p>
            <p>Version 1.0.0</p>
        </div>
    )
};




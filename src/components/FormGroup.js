import React from 'react';

import 'bootswatch/dist/slate/bootstrap.css'

function FormGroup(props) {
    return (
        <div className="mb-4 form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormGroup
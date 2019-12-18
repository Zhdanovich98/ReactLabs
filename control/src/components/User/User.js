import React from 'react';
let User = (props) => {
    return (
        <div>
            {props.users.map( i => { 
                return i.id;
            })}

        </div>
    )

}
export default User;
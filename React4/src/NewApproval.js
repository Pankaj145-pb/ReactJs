import React from 'react';

const NewApproval = (props) => {
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">{ props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui green button">Approve</div>
                    <div className="ui red button">Reject</div>
                </div>
            </div>
        </div>
    );
};



export default NewApproval;
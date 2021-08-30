import React from 'react';

const Film = ({url, children}) => {
    return (
        <div>
            <a href={url}>{children}</a>
        </div>
    );
};

export default Film
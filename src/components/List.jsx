import React from 'react';

const List = (props) => {
    let LisItems = props.items.map((item) => {
        return (
            <li key = {item.id}>{item.value }</li>
        );
    });
    
    return (
        <ul>{LisItems}</ul>
    );

}

export default List;
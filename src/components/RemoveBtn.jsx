import React from 'react';
import {Button} from "antd";
import './removeBtn.css';

const RemoveButton = ({handleRemoveAllCheckedItems}) => {
    const onRemove = (event) => {
        event.preventDefault();
        handleRemoveAllCheckedItems();
    }
    return (
        <Button danger onClick={onRemove}>
            Remove all checked items
        </Button>
    );
};

export default RemoveButton;
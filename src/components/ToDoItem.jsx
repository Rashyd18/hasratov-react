import React from 'react';
import { Checkbox, Button, Descriptions } from 'antd';
import { title } from 'process';

export const ToDoItem = ({item, handleCheck, handleRemove}) => {
    const { checked, title, description, id } = item;

    const onChangeItem = () => handleCheck(id);

    const onRemoveItem = (event) => {
        event.preventDefault();
        handleRemove(id);
    }

    const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" fill="#000000">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" mix-blend-mode="normal">
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ffffff">
                <path d="M86,14.33333c-12.57146,0 -23.03941,9.39347 -24.79639,21.5h-37.91195c-1.93842,-0.02741 -3.74144,0.99102 -4.71865,2.66532c-0.97721,1.6743 -0.97721,3.74507 0,5.41937c0.97721,1.6743 2.78023,2.69273 4.71865,2.66532h7.65658l9.02832,93.27165c0.98183,10.15158 9.4226,17.81169 19.62435,17.81169h52.79818c10.20175,0 18.63893,-7.6601 19.62435,-17.81169l9.02832,-93.27165h7.65658c1.93842,0.02741 3.74144,-0.99102 4.71865,-2.66532c0.97721,-1.6743 0.97721,-3.74507 0,-5.41937c-0.97721,-1.6743 -2.78023,-2.69273 -4.71865,-2.66532h-37.91195c-1.75697,-12.10653 -12.22493,-21.5 -24.79639,-21.5zM86,25.08333c6.73364,0 12.25775,4.54424 13.83643,10.75h-27.67285c1.57868,-6.20576 7.10278,-10.75 13.83643,-10.75zM69.875,64.5c2.967,0 5.375,2.40442 5.375,5.375v53.75c0,2.97058 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.40442 -5.375,-5.375v-53.75c0,-2.97058 2.408,-5.375 5.375,-5.375zM102.125,64.5c2.967,0 5.375,2.40442 5.375,5.375v53.75c0,2.97058 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.40442 -5.375,-5.375v-53.75c0,-2.97058 2.408,-5.375 5.375,-5.375z"></path>
            </g>
        </g>
    </svg>
    return (
        <li className="todo-item"
            style={{background: item.checked ? 'rgba(89, 194, 131, .3)' : 'rgba(100, 144, 245, .2)',
                    padding: 10,
                    textDecoration: item.checked ? 'line-through' : 'none'}}>
            <Checkbox checked={checked} onChange={onChangeItem}>{title}</Checkbox>
            <span>{description}</span>
            <Button onClick={onRemoveItem} style={{background: 'red', border: '2px solid white'}}>{trashIcon}</Button>
        </li>
    );
}
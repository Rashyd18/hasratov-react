import React from "react";
import { Form, Input, Button, Divider } from "antd";
import RemoveButton from "./RemoveBtn";

export const ToDoForm = (props) => {
    const { handleSubmit, handleRemoveAllCheckedItems } = props;

    const [form] = Form.useForm();

    const descriptionValidation = (description) => description.length >= 3;
    const titleValidation = (title) => title.length >= 3 && title[0] === title[0].toUpperCase() && title[0].match(/[a-z]/i);

    const onFinish = (values) => {
        if (handleSubmit && titleValidation(values.title) && descriptionValidation(values.description)) {
            handleSubmit(values.title, values.description);
        }
        form.resetFields();
    }
    return (
        <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
            <Form.Item name="title" className="todo-form-input">
                <Input placeholder="Enter title..."/>
            </Form.Item>
            <Form.Item name="description" className="todo-form-input">
                <Input placeholder="Enter description..."/>
            </Form.Item>
            <Form.Item className="todo=form-actions">
                <Button htmlType="submit" type="primary">Add</Button>
            </Form.Item>
            <Form.Item>
                <RemoveButton handleRemoveAllCheckedItems={handleRemoveAllCheckedItems}/>
            </Form.Item>
        </Form>
    )
}
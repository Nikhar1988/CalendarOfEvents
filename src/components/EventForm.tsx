import {Select, Button, DatePicker, Form, Input, Row} from 'antd'
import React, { FC } from 'react'
import { IUser } from '../models/IUser'
import { rules } from '../models/rules'

interface EventFormProps {
    guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
    
    return (
        <Form>
            <Form.Item
                    label="Описание события"
                    name="description"
                    rules={[rules.required()]}
                >
                    <Input 
                    />
            </Form.Item>
            <Form.Item
                    label="Установите дату"
                    name="setData"
                    rules={[rules.required()]}
                >
                    <DatePicker />
            </Form.Item> 
                <Form.Item
                        label="Выберите гостя"
                        name="setData"
                        rules={[rules.required()]} >
                <Select >
                    {props.guests.map(guest => 
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>    
                
                <Form.Item>
                    <Row justify="end">
                    <Button type="primary" htmlType="submit">Создать</Button>

                    </Row>
                </Form.Item>
        </Form>
    )
}

export default EventForm

import {Select, Button, DatePicker, Form, Input, Row} from 'antd'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { formatDate } from '../models/data'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { rules } from '../models/rules'

interface EventFormProps {
    guests: IUser[],
    submit:(event:IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent);

    const {user} =useTypedSelector(state => state.authReducer)
    
    const submitForm = () => {
        props.submit({...event, author: user.username})   
    } 

    const selectDate=(date: Moment | null) => {
        if(date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }     
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                    label="Описание события"
                    name="description"
                    rules={[rules.required()]}
                >
                    <Input 
                    onChange ={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                    />
            </Form.Item>
            <Form.Item
                    label="Установите дату"
                    name="setData"
                    rules={[rules.required(), rules.isDateAfter('Нельзя создать событие в прошлом')]}
                >
                    <DatePicker 
                        onChange={(data)=>selectDate(data)}
                        
                    />
            </Form.Item> 
                <Form.Item
                        label="Выберите гостя"
                        name="guest"
                        rules={[rules.required()]} >
                <Select onChange ={(guest:string)=>setEvent({...event, guest})}>
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

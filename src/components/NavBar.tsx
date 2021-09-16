import { Layout, Row, Menu } from 'antd'
import React from 'react'
import { useActions } from '../hooks/useActions'; 
import { useHistory } from 'react-router'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';
 

export const NavBar: React.FC = () => {
     const router = useHistory();
     const {logout} = useActions(); 
     const {isAuth, user} = useTypedSelector(state => state.authReducer )
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>{user.username}</div> 
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            
                            <Menu.Item 
                                onClick={logout} 
                                key={1}> Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                    <Menu.Item
                        onClick={() => router.push(RouteNames.LOGIN)}
                        key={1}
                         
                    >
                        Логин
                    </Menu.Item>
                </Menu>  
                }
                
            </Row>
        </Layout.Header>
    )
}

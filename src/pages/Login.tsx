import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card } from 'antd'
import AuthForm from '../components/AuthForm'
import { useAppDispatch } from '../store/hooks'
import { authActions } from '../store/auth/auth-actions'

const Login: FC = () => {
  const dispatch = useAppDispatch()
  const logIn = (username: string, password: string) => {
    dispatch(authActions.login(username, password))
  }
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AuthForm title="Log In" onSubmit={logIn} />
        </Card>
      </Row>
    </Layout>
  )
}

export default Login

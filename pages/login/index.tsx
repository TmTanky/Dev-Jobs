import { S as Login } from '@/components/Pages/Login'
import Link from 'next/link'
import React, { useState, ChangeEvent } from 'react'

const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin({
      ...login,
      [name]: value
    })
  }

  return (
    <Login.Container>
      <Login.Form>
        <Login.Heading1> Sign in </Login.Heading1>
        <Login.Paragraph> Find jobs easily. </Login.Paragraph>
        <Login.Label htmlFor="Email Address"> Email Address </Login.Label>
        <Login.TextInput
          name="email"
          onChange={handleChange}
          value={login.email}
          placeholder="Email Address"
        />
        <Login.Label htmlFor="Password"> Password </Login.Label>
        <Login.TextInput
          name="password"
          onChange={handleChange}
          value={login.password}
          placeholder="Password"
          type="password"
        />
        <Login.LinkContainer>
          <Link href="/signup"> Don&apos;t have an account sign up here. </Link>{' '}
        </Login.LinkContainer>
        <Login.Button disabled={!login.email || !login.password ? true : false}>
          Sign In
        </Login.Button>
      </Login.Form>
    </Login.Container>
  )
}

export default LoginPage

import { S as Login } from '@/components/Pages/Login'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik'
import Head from 'next/head'

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: () => {
      console.log(formik.values.email, formik.values.password)
    }
  })

  return (
    <Login.Container>
      <Head>
        <title> LoremJobs | Sign In </title>
      </Head>

      <Login.Form onSubmit={formik.handleSubmit}>
        <Login.Heading1> Sign in </Login.Heading1>
        <Login.Paragraph> Find jobs easily. </Login.Paragraph>
        <Login.Label htmlFor="Email Address"> Email Address </Login.Label>
        <Login.TextInput
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
        />
        <Login.Label htmlFor="Password"> Password </Login.Label>
        <Login.TextInput
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
        />
        <Login.LinkContainer>
          <Link href="/signup"> Don&apos;t have an account sign up here. </Link>{' '}
        </Login.LinkContainer>
        <Login.Button
          disabled={
            !formik.values.email || !formik.values.password ? true : false
          }
          type="submit"
        >
          Sign In
        </Login.Button>
      </Login.Form>
    </Login.Container>
  )
}

export default LoginPage

import { S as Login } from '@/components/Pages/SignUp/index'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik'
import Head from 'next/head'

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    },
    onSubmit: () => {
      console.log(
        formik.values.email,
        formik.values.password,
        formik.values.firstName,
        formik.values.lastName
      )
    }
  })

  return (
    <Login.Container>
      <Head>
        <title> LoremJobs | Create an account </title>
      </Head>

      <Login.Form onSubmit={formik.handleSubmit}>
        <Login.Heading1> Sign Up </Login.Heading1>
        <Login.Label htmlFor="Email Address"> First Name </Login.Label>
        <Login.TextInput
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          type="text"
        />
        <Login.Label htmlFor="Email Address"> Last Name </Login.Label>
        <Login.TextInput
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          type="text"
        />
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
          <Link href="/login"> Already have an account? Sign in here. </Link>{' '}
        </Login.LinkContainer>
        <Login.Button
          disabled={
            !formik.values.email ||
            !formik.values.password ||
            !formik.values.firstName ||
            !formik.values.lastName
              ? true
              : false
          }
          type="submit"
        >
          Sign Up
        </Login.Button>
      </Login.Form>
    </Login.Container>
  )
}

export default LoginPage

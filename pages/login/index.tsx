import { TextInput } from '@/components/TextInput/TextInput'
import { Button } from '@/components/Button/Button'
import { Heading } from '@/components/Heading/Heading'
import { S as Login } from '@/components/Pages/Login'

const LoginPage = () => {
  return (
    <Login.Container>
      <Login.Form>
        <Heading label="Welcome to LoremJobs" variation="h2" />
        <TextInput placeholder="Email Address" />
        <TextInput placeholder="Password" />
        <Button
          color="white"
          borderRadius="25px"
          bgColor="#358856"
          name="Login"
        />
      </Login.Form>
    </Login.Container>
  )
}

export default LoginPage

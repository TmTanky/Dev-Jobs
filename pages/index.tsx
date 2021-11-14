import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { First, Second, Container, Third } from '@/components/Pages/index'
import careerImage from '@/public/career.svg'
import resume from '@/public/resume.svg'
import working from '@/public/working.svg'
import interview from '@/public/interview.svg'
import Select from 'react-select'
import { options } from 'utils/selectOptions'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title> DevJobs | Find jobs easily. </title>
      </Head>

      <First.Section>
        <First.InfoContainer>
          <h1> Find your dream job in just one click. </h1>
          <p> Work anytime, anywhere. </p>
          <button> Find now </button>
        </First.InfoContainer>
        <First.ImageContainer>
          <Image
            src={careerImage}
            height="500%"
            width="500%"
            alt="Persion viewing himself in a mirror"
          />
        </First.ImageContainer>
      </First.Section>

      <Second.Section>
        <Second.Box>
          <Image src={resume} height="200%" width="200%" alt="Resume" />
          <p> Build your profile </p>
        </Second.Box>
        <Second.Box>
          <Image src={interview} height="200%" width="200%" alt="Resume" />
          <p> Get an interview </p>
        </Second.Box>
        <Second.Box>
          <Image src={working} height="200%" width="200%" alt="Resume" />
          <p> Get to work </p>
        </Second.Box>
      </Second.Section>

      <Third.Section>
        <h1> Pick your prefered language </h1>
        <Third.SelectContainer>
          <Select
            isClearable={true}
            placeholder="Pick a language"
            options={options}
          />
        </Third.SelectContainer>
      </Third.Section>
    </Container>
  )
}

export default Home

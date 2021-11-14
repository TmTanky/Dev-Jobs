import styled from 'styled-components'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
interface HeadingProps {
  variation: HeadingType
  label: string
}

const H1 = styled.h1`
    margin-bottom: 15px;
  `,
  H2 = styled.h2`
    margin-bottom: 15px;
  `,
  H3 = styled.h2`
    margin-bottom: 15px;
  `,
  H4 = styled.h2`
    margin-bottom: 15px;
  `,
  H5 = styled.h2`
    margin-bottom: 15px;
  `,
  H6 = styled.h2`
    margin-bottom: 15px;
  `

export const Heading = ({ label, variation }: HeadingProps) => {
  switch (variation) {
  case 'h1':
    return <H1> {label} </H1>
  case 'h2':
    return <H2> {label} </H2>
  case 'h3':
    return <H3> {label} </H3>
  case 'h4':
    return <H4> {label} </H4>
  case 'h5':
    return <H5> {label} </H5>
  case 'h6':
    return <H6> {label} </H6>
  default:
    return <H1> {label} </H1>
  }
}

import styled from 'styled-components'

export const S = {
  Container: styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  Form: styled.form`
    border-radius: 10px;
    border: solid 0.5px white;
    display: flex;
    flex-direction: column;
    /* min-width: 40%; */
    width: 400px;
    padding: 2rem;
    height: 400px;
    /* justify-content: center; */
    box-shadow: 0px 7px 10px 0px #dbdbdb;
  `
}

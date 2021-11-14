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
    width: 400px;
    padding: 2rem;
    /* height: 400px; */
    box-shadow: 0px 7px 10px 0px #dbdbdb;
    @media screen and (min-width: 300px) and (max-width: 500px) {
      width: 100%;
      box-shadow: none;
    }
  `,
  Button: styled.button`
    background-color: #358856;
    border-radius: 25px;
    border: none;
    outline: none;
    height: 40px;
    margin-top: 10px;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all;
    transition-duration: 0.5s;

    &:disabled {
      background-color: #0c3823;
    }
  `,
  Label: styled.label``,
  Heading1: styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
  `,
  Paragraph: styled.p`
    margin-bottom: 20px;
  `,
  TextInput: styled.input`
    border-radius: 4px;
    padding: 0.5rem;
    margin: 10px 0;
    border: solid black 0.5px;
    outline: none;
    width: 100%;
  `,
  LinkContainer: styled.div``
}

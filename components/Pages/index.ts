import styled from 'styled-components'

export const Container = styled.main``

export const First = {
  Section: styled.section`
    display: flex;
    min-height: 100vh;
    justify-content: center;
  `,
  InfoContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1,
    p,
    button {
      margin: 0 4rem;
    }
    h1 {
      font-size: 50px;
      margin-bottom: 10px;
    }
    p {
      font-size: 20px;
    }
    button {
      background-color: #358856;
      /* padding: 0.5rem 1rem; */
      height: 45px;
      width: 120px;
      margin-top: 20px;
      border: none;
      outline: none;
      border-radius: 25px;
      color: white;
      cursor: pointer;
      font-weight: 600;
      transition-duration: 1s;
      &:hover {
        background-color: #0c3823;
      }
    }
  `,
  ImageContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
  `
}

export const Second = {
  Section: styled.section`
    display: flex;
    min-height: 100vh;
    justify-content: space-evenly;
    align-items: center;
  `,
  Box: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 25px;
      font-weight: 300;
      color: #0c3823;
    }
  `
}

export const Third = {
  Section: styled.section`
    display: flex;
    min-height: 50vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 4rem;
    h1 {
      font-size: 40px;
      margin-bottom: 20px;
    }
  `,
  SelectContainer: styled.div`
    width: 500px;
  `
}

import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 64px 64px 30px;
`;

export const ContainerE = styled.div`
  background: #99d8d0;
  width: 40%;
  height: 100vh;
  float: left;

  img {
    width: 100%;
    margin-top: 50px;
  }
`

export const ContainerR = styled.div`
  background: #FFFFFF;
  width: 60%;
  height: 100vh;
  float: right;
`
export const Header = styled.div`
  width: 100%;
  height: 50px;
`

export const Text = styled.span`
  color: #333;
  padding: 30px;
  float: right;
`
export const Main = styled.div`
  padding: 120px 60px 0 0;
  width: 100%;
  max-width: 416px;
  min-height: 90%;
  margin: 0 auto;
`

export const MainText = styled.span`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`

export const LoginText = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`

export const Form = styled.form`
  input {
    flex: 1;
    border: 1px solid transparent;
    padding: 10px 15px;
    border-radius: 8px;
    background: #f3f3f4;
    width: 100%;
    height: 40px;
    margin-top: 6px;
    margin-bottom: 12px;

    :hover {
      background: #fff;
      border: 1px solid #eee;
      transition: 0.200s;
    }
  }
`
export const SubmitButtonLogin = styled.button`
  color: #FFF;
  background: #4285f4;
  opacity: 0.95;
  border: 0;
  width: 100%;
  padding: 15px 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 22px;
  margin-top: 26px;

  :hover {
    background: #4285f4;
    opacity: 1;
  }
`

export const SubmitButton = styled.button`
  color: #FFF;
  background: #99d8d0;
  opacity: 0.95;
  border: 0;
  width: 100%;
  padding: 15px 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 22px;

  :hover {
    background: #99d8d0;
    opacity: 1;
  }
`

export const Divider = styled.div`
  overflow: visible;
  padding: 0;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid #e0e0e0;
  color: #6e6d7a;
  text-align: center;

  :after {
    content: 'Ou';
    display: inline-block;
    position: relative;
    top: -7px;
    font: normal 14px/14px Helvetica, Arial, sans-serif;
    padding: 0 16px;
    background: #fff;
  }
`

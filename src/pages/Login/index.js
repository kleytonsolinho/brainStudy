import React from 'react';

import {
  Title,
  ContainerE,
  ContainerR,
  Header,
  Text,
  Main,
  MainText,
  LoginText,
  Form,
  SubmitButtonLogin,
  SubmitButton,
  Divider,
} from './styles';

function Login() {
  return (
    <>
      <ContainerE>
        <Title>Discover the world’s top<br></br> Designers & Creatives.</Title>
        <img src="https://blush.ly/-mbaizsOz/p?bg=99d8d0" alt="Designers e Creatives."></img>
      </ContainerE>

      <ContainerR>
        <Header>
          <Text>Não é cadastrado? Cadastre-se agora!</Text>
        </Header>
        <Main>
          <MainText>Faça parte do BrainStudy</MainText>
          <Form onSubmit={() => { }}>
            <SubmitButtonLogin>
              Cadastre-se agora!
            </SubmitButtonLogin>
          </Form>
          <Divider />
          <Form onSubmit={() => { }}>
            <LoginText>Username or Email Address</LoginText>
            <input type="text" />
            <LoginText>Password</LoginText>
            <input type="text" />

            <SubmitButton>
              Entrar
            </SubmitButton>
          </Form>
        </Main>
      </ContainerR>
    </>
  );
}

export default Login;

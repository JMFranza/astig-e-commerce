import styledComponents from "styled-components";

const Container = styledComponents.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://res.cloudinary.com/djhxvfse9/image/upload/v1648120433/Light_Blue_Black_Grey_Colored_Modern_Minimal_Photography_Portfolio_Website_2_rfuuww.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styledComponents.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styledComponents.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styledComponents.form`
  display: flex;
  flex-direction: column;
`;

const Input = styledComponents.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styledComponents.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: lightsalmon;
  color: white;
  cursor: pointer;
  margin-bottom: 14px;
`;

const Link = styledComponents.a`
  margin: 7px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
<Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>YOU DON'T REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login;
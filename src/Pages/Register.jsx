import styledComponents from "styled-components";

const Container = styledComponents.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
  url("https://res.cloudinary.com/djhxvfse9/image/upload/v1648119489/Light_Blue_Black_Grey_Colored_Modern_Minimal_Photography_Portfolio_Website_1_ggw735.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styledComponents.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styledComponents.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styledComponents.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styledComponents.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styledComponents.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styledComponents.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: lightsalmon;
  color: white;
  cursor: pointer;
`;



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;
import { EmailOutlined, Facebook, Instagram, Phone, Room, Twitter } from "@mui/icons-material";
import styledComponents from "styled-components";

const Container = styledComponents.div`
  display: flex;
`;

const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styledComponents.h1``;

const Desc = styledComponents.p`
    margin: 20px 0px;
`;

const SocialContainer = styledComponents.div`
    display: flex;
`;

const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px; 
`;

const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
`;

const Title = styledComponents.h3`
    margin-bottom: 30px; 
`;

const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styledComponents.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styledComponents.img`
  width: 50%;
`;



const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>ASTIG03 MERCHANDISE.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </Desc>

          <SocialContainer>
            <SocialIcon color="4169e1">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="ffc0cb">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="87cefa">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Kids Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Bags & Shoes</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Dragon 8 Mall Divisor (Second floor) 2f-12 C.M Recto cor. Dagupan St., Divisoria, Manila.
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +63 916 427 3049
          </ContactItem>
          <ContactItem>
            <EmailOutlined style={{marginRight:"10px"}}/> contact@astig03merch.com
          </ContactItem>
          <Payment src="https://res.cloudinary.com/djhxvfse9/image/upload/v1648037664/WAW_va1qyz.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
import React from 'react';
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import styledComponents from 'styled-components';
import { mobile } from "../responsive";


const Container = styledComponents.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styledComponents.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 5px;
  padding: 5px;
`;

const Input = styledComponents.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styledComponents.div`
  flex: 1;
  text-align: center;
`;

const Logo = styledComponents.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; 
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/> 
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>

        <Center>
          <Logo>ASTIG03</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
           <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
           </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
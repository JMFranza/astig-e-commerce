import { Add, Remove } from '@mui/icons-material';
import styledComponents from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
    padding: 20px;
`;

const Title = styledComponents.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styledComponents.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "sandybrown" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styledComponents.div`

`;

const TopText = styledComponents.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styledComponents.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styledComponents.div`
    flex: 3;
`;

const Product = styledComponents.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styledComponents.div`
    flex: 2;
    display: flex;
`;

const Image = styledComponents.img`
    width: 200px;       
`;

const Details = styledComponents.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styledComponents.span``;
const ProductId = styledComponents.span``;

const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styledComponents.span``;

const PricetDetail = styledComponents.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styledComponents.div``;
const ProductAmount = styledComponents.div``;
const ProductPrice = styledComponents.div``;

const Summary = styledComponents.div`
    flex: 1;
`;




const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>

            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
                            <Details>
                                <ProductName><b>Product:</b> DENIM T-SHIRT WOMEN</ProductName>
                                <ProductId><b>ID:</b> 987754700889</ProductId>
                                <ProductColor color="wheat"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PricetDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₱ 580</ProductPrice>
                        </PricetDetail>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>

        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
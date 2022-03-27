import { Add, Remove } from '@mui/icons-material';
import styledComponents from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { mobile } from '../responsive';

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
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
    ${mobile({ display: "none" })}
`;

const TopText = styledComponents.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styledComponents.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styledComponents.div`
    flex: 3;
`;

const Product = styledComponents.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
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

const ProductAmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styledComponents.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styledComponents.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styledComponents.div`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styledComponents.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styledComponents.h1`
    font-weight: 200;
`;

const SummaryItem = styledComponents.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styledComponents.span``;
const SummaryItemPrice = styledComponents.span``;

const Button = styledComponents.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
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
                                <ProductSize><b>Size:</b> Medium</ProductSize>
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

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"/>
                            <Details>
                                <ProductName><b>Product:</b> ECO-FRIENDLY TOTE BAG</ProductName>
                                <ProductId><b>ID:</b> 9007547079881</ProductId>
                                <ProductColor color="limegreen"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PricetDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₱ 600</ProductPrice>
                        </PricetDetail>
                    </Product>
                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₱ 580</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₱ 50</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>₱ -50</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₱ 580</SummaryItemPrice>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>

        </Wrapper>
        <Footer/>
    </Container>
  );
};

export default Cart;
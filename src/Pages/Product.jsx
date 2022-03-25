import { Add, Remove } from "@mui/icons-material";
import styledComponents from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
    padding: 20px;
    display: flex;
`;

const ImgContainer = styledComponents.div`
    flex: 1;
`;

const Image = styledComponents.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styledComponents.h1`
    font-weight: 200;
`;

const Desc = styledComponents.p`
    margin: 20px 0px;
`;

const Price = styledComponents.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styledComponents.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styledComponents.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styledComponents.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styledComponents.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styledComponents.option``;

const AddContainer = styledComponents.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styledComponents.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid lightsalmon;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styledComponents.button`
    padding: 15px;
    border: 2px solid lightsalmon;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #ffefd5;
     }
`;



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>

            <ImgContainer>
            <Image src="https://res.cloudinary.com/djhxvfse9/image/upload/v1648021209/2._daanjj.jpg"/>
            </ImgContainer>

            <InfoContainer>
                <Title>Denim T-Shirt</Title>
                <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi, saepe officia eligendi ullam tenetur eos similique dolore ipsum quo consequatur nesciunt alias enim inventore dolores numquam et in praesentium?
                </Desc>
                <Price>₱ 590</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>COLOR</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkorchid"/>
                        <FilterColor color="hotpink"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>SIZE</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption> 
                            <FilterSizeOption>S</FilterSizeOption> 
                            <FilterSizeOption>M</FilterSizeOption> 
                            <FilterSizeOption>L</FilterSizeOption> 
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
            
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default Product;
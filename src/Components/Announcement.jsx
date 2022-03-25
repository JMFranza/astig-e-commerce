import styledComponents from "styled-components"

const Container = styledComponents.div`
    height: 30px;
    background-color: lightsalmon;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over ₱100
    </Container>
  )
}

export default Announcement
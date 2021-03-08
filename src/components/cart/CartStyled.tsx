import styled from "styled-components";

const CartStyled = styled.section`
    min-height: 420px;

    .title{
        font-family: Heiti SC;
        font-size : 2em;
        color : #333333;
        display: inline-block;
        position: relative;
        transform: translateY(-12px);
        transform: translateY(-25px);
        margin: 0;
        margin-top: 20px;
    }

    .img-product{
        width: 80px;
    }

    .item-cart{
        font-family: Helvetica Neue;
        font-size : 1em;
        color : #707070;
        margin: 0;
        margin-top: 40px;

    }
    

    .button-increment-decrement{
        margin: 10px;
        padding: 4px 11px;
        font-size: 17px;
        color: #707070;
        border: 1px solid #707070;
        border-radius: 4px;
        cursor: pointer;
    }


    .ammount{
        display: inline-block;
        font-family: Helvetica Neue;
        font-size : 30px;
        color : #707070;
    }

    .price{
        display: inline-block;
        font-family: Helvetica Neue;
        font-size : 30px;
        margin: 0;
        color : #707070;
        position: relative;
        transform: translateY(32px);
    }
    .price-total{
        display: inline-block;
        font-family: Helvetica Neue;
        font-size : 30px;
        margin: 0;
        color : #707070;
        position: relative;
        transform: translateY(0px);
        font-weight: bold;
    }

    
   
`;

export default CartStyled;
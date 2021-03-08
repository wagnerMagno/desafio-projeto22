import styled from "styled-components";

const HomeStyled = styled.section`
    .p-cart{
        font-family: Open Sans;
        font-size : 22px;
        color : #07a073;
        display: inline-block;
        position: relative;
        transform: translateY(-12px);

    }

    .title{
        font-family: Heiti SC;
        font-size : 69px;
        color : #333333;
        display: inline-block;
        position: relative;
        transform: translateY(-12px);
        transform: translateY(-25px);
        margin: 0;

    }

    .iconCart{
        width: 42px;
        margin-right: 10px;
        cursor: pointer;
    }

    .btn-add-remove {
        background-color : #07a073;
        color : white;
        text-transform: initial;
        margin-top: 10px;
        width : 95%;

        &:hover{
            background-color : #07a073;
            color : white;
            text-transform: initial;
        }
    }

    .btn-remove{
        background-color : #D55454 !important;

        &:hover{
            background-color : #D55454 !important;
        }
    }

    .title-product{
        font-family: Open Sans;
        font-size : 0.8em;
        color: #333333;
        margin: 10px;
    }

    .card-product{
        margin-bottom : 20px;
    }

    .img-product{
        width: 70%;
        margin-top : 20px;
    }
    .grid-img{
        display: flex;
        justify-content: center;
        min-height: 234px;

    }

    .grid-button{
        display: flex;
        justify-content: center;
    }

    

    .grid-price{
        min-height: 56px;

        p{
            margin: 0;
            font-size: 1em;
            font-family: Open sans-serif;
            margin-top: 5px;
        }
    }

    .span-size{
        border: 1px solid;
        border-radius: 20px;
        padding: 3px 5px;
        margin-right: 5px;
        cursor: pointer;
        width: 20px;
        text-align: center;
        height: 23px;
    }

    .size-unavailable{
        color: #cacaca !important;
        cursor: default !important;
    }

    .size-selected{
        color: white;
        background-color: green;
    }

    .paginacao{
        justify-content: space-between;
        padding: 20px 15%;
        
        button{
            width: 35%;
            height: 40px;
            background-color: #07a073;
            color: white;
        }

        .page{
            border: 1px solid;
            border-radius: 34px;
            font-size: 18px;
            width: 35px;
            height: 30px;
            text-align: center;
            padding-top: 4px;
            margin-top: 2px;
            background-color: #07a073;
            color: white;
        }

        .MuiButton-contained.Mui-disabled {
            background-color: #b2e0d3  !important;
        }
    }
`;

export default HomeStyled;
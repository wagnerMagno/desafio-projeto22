import styled from "styled-components";

const HeaderStyled = styled.section`
    width: 100%;
    .logo{
        width : 80px;
        heigth : 101px;
        cursor: pointer;
    }

    .title{
        color : #07a073;
        display: inline-block;
        font-family: Open Sans;
        font-size : 22px;
        margin : 0px;
        position: relative;
        transform: translateY(-32px);
        margin-left: 17px;
    }

    .btn-login-logout {
        background-color : #07a073;
        color : white;
        text-transform: initial;
        margin-top: 35px;


        &:hover{
            background-color : #07a073;
            color : white;
            text-transform: initial;
        }
    }

    .btn-logout{
        background-color : #D55454 !important;

        &:hover{
            background-color : #D55454 !important;
        }
    }

    .welcome{
        color: #07a073;
        display: inline-block;
        font-family: Open Sans;
        font-size: 18px;
        position: relative;
        transform: translateY(20px);
        margin-right: 20px;

    }

    .login-dropdown{
        .btn-login-logout {
            background-color : #07a073;
            color : white;
            text-transform: initial;
            margin-top: 35px;
    
    
            &:hover{
                background-color : #07a073;
                color : white;
                text-transform: initial;
            }
        }

        .text-field {
            display: block;
        }
    }

    .iconCart{
        width: 42px;
        margin-right: 20px;
        position: relative;
        transform: translateY(35px);
        cursor: pointer;
        
    }

`;

export default HeaderStyled;
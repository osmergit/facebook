import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import facebook from '../assets/facebook.png';
import MenuPuntos from '../assets/Menupuntos.png';
import Messenger from '../assets/MenuMessenger.png';
import Campana from '../assets/Campana.png'
import MenuIcon from '@mui/icons-material/Menu';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Avatar } from '@mui/material';
export const Header = () => {

    return (
        <Container>
            <HeaderLeft>
                <img src={facebook} alt='Logo de Facebook' />
            <InputSearch>
                <SearchIcon />
                <input type = "search" placeholder="Buscar en Facebook" />
            </InputSearch>
            </HeaderLeft>
            <HeaderCenter>
                <IconCenter>
                  <HomeIcon />
                </IconCenter>
                <IconCenter>
                  <StoreIcon />
                </IconCenter>
                <IconCenter>
                  <SupervisedUserCircleIcon />
                </IconCenter>
                <IconCenter>
                  <DashboardCustomizeIcon />
                </IconCenter>
                <IconCenter>
                  <OndemandVideoIcon />
                </IconCenter>
                <IconCenter>
                  <MenuIcon />
                </IconCenter>

                <IconCenterMenu>
                  <MenuIcon />
                </IconCenterMenu>
            </HeaderCenter>

            <HeaderRight>
                <IconRight>
                    <img src= {MenuPuntos} alt = 'Menu de Puntos' />
                </IconRight>

                <IconRight>
                    <img src= {Messenger} alt = 'Menu de Messenger' />
                </IconRight>
                <IconRight>
                    <img src= {Campana} alt = 'Menu de Campana' />
                </IconRight>
                <Avatar />
            </HeaderRight>
        </Container>
    )
}

export default Header
const Container = styled.div `
width: 100%;
background-color: white;
height: 4em;
display: flex;
position: sticky;
top: 0;
left:0;
z-index: 100;
border-bottom: 1px solid #cfcfcf;
`;
const HeaderLeft = styled.div `
display: flex;
flex: 0.25;
padding: 10px 0 10px 15px;
img {
    width: 50px;
    height: 50px;
}
`;
const InputSearch = styled.div `
display: flex;
align-items: center;
margin-left: 10px;
border: 1px solid black;
width: 70%;
border-radius: 25px;
background-color: #cfcfcf;
padding-left: 10px;


input {
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 10px;
    width:80%;
    font-size: 16px;
}
@media (max-width: 1200px) {
    width: 50px;
    height: 50 px;
    input{
        display: none;
    }
}
`;
const HeaderCenter = styled.div `
   display: flex;
   flex: 0.50;
   align-items: center;
   justify-content: space-around;
   padding: 0 15px;

   @media (max-width: 990px){
    justify-content: flex-start;
   }
`;

const IconCenter = styled.div `
flex: 0.20;
display: flex;
justify-content: center;
align-items: center;
height: 100%;

.MuiSvgIcon-root {
    font-size: 40px;
}

:hover {
    border-bottom: 5px solid blue;
    .MuiSvgIcon-root{
        color: blue;
    }
}

@media (max-width: 990px){
    display: none;
}
`;

const IconCenterMenu = styled(IconCenter)`
    display: none;
    @media (max-width: 990px){
        display: flex;
    }
`;

const HeaderRight = styled.div `
flex: 0.25;
display: flex;
align-items: center;
justify-content: flex-end;
padding: 0 20 px;

.MuiAvatar-root {
    width: 50px;
    height: 50px;
}
`;

const IconRight = styled.div `
width: 50px;
height: 50px;
background-color: #cfcfcf;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 15px;
img {
    width: 30px;
    
}

`;
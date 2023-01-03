import { ListItem } from './Listitem';
import styled from 'styled-components';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
export const Sidebar = () => {

    return (
        <Container>
        
        <GroupList>
            <ListItem  avatar 
            img = 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'
            name = 'Usuario1'/>

            <ListItem Icon ={PeopleIcon} name = 'Amigos'/>
            <ListItem Icon ={GroupsIcon} name = 'Grupos'/>
            <ListItem Icon ={StorefrontIcon} name = 'MarketPlace'/>
            <ListItem Icon ={OndemandVideoIcon} name = 'Videos'/>
            <ListItem Icon ={WorkHistoryIcon} name = 'History'/>
            <ListItem Icon ={BookmarkIcon} name = 'Guardados'/>
            <ListItem Icon ={FlagIcon} name = 'Paginas'/>
        </GroupList>

        </Container>

    )

    }

export default Sidebar

const Container = styled.div `
position: sticky;
top: 8vh;
background-color: gray;
left: 0;
height: 100vh;
flex: 0.25;
display: flex;
position: sticky;
top: 0;
left:0;
z-index: 100;
border-bottom: 1px solid #cfcfcf;
`;

const GroupList = styled.div ``;
import styled from 'styled-components'
import Sidebar from './Sidebar';
import Story from './Story'
import imgStory from '../ImageStory';
import {motion} from 'framer-motion';
export const Body = () => {

    return (
        <Container>
         <Sidebar />
        <Feed>
             <Carusel>

                <Stories drag= 'x' dragConstraints={{right: 0, left: -270}}>
                    <Story img = 'https://cdn.pixabay.com/photo/2022/08/23/04/12/vietnamese-woman-7404948_960_720.jpg'
                    bgImage = 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg' user = 'Angelina'/>

                    {
                        imgStory.map((image) => (
                             <Story 
                             img= {image.imgProfile}
                             bgImage = {image.url}
                             user = {image.name}

                             />
                        )
                        )
                    }
                    
                  
                    

                </Stories>
             </Carusel>

        </Feed>


        </Container>

    )

    }

const Container = styled.div `
width: 100%;
background-color: white;
height: 30vh;
display: flex;
position: sticky;
top: 0;
left:0;
z-index: 100;
border-bottom: 1px solid #cfcfcf;
`;

export default Body
const Feed = styled.div`
display: flex;
flex-direction: column;
flex: 0.50;
align-items: center;
`;

const Carusel = styled(motion.div)`
width: 50em;
background-color: white;
height: 30vh;
margin-top: 20px;
border-radius: 10px;
overflow-x: hidden;
`;

const Stories = styled(motion.div) `
display: flex;
height: 100%;
width: 90em;

flex-wrap: wrap;
`;
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Sidebar from './Sidebar';
import Story from './Story'
import imgStory from '../ImageStory';
import {motion} from 'framer-motion';
import NewPost from './NewPost';
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

export const Body = () => {

    const [posts, setposts] = useState([]);
    useEffect( () => {
        const q = query(collection(db, 'posts'), orderBy('timestamp','desc'));
        onSnapshot(q, (snapshot) => {
           // console.log(snapshot.docs.map((doc) => doc.data()));
           setposts(snapshot.docs.map((doc) => doc.data()));
        })
    }, [])
    return (
        <Container>
         <Sidebar />
        <Feed>
             <Carusel>

                <Stories drag= 'x' dragConstraints={{right: 0, left: -270}}>
                   
                    {
                        imgStory.map((image, index) => (
                             <Story 
                             key={index}
                             img= {image.imgProfile}
                             bgImage = {image.url}
                             user = {image.name}
                             />
                        ))
                    }
                                  
                                      
                </Stories>
                
             </Carusel>
             <NewPost />
             {
                posts.map((post, index) => (
                    <Post 
                    key={index}
                    name = {post.name}
                    imgProfile={post.imgProfile}
                    postText = {post.postText}
                    postImage= {post.postImage}
                    />
                ))
             }
             
        </Feed>


        </Container>

    )

    }

const Container = styled.div `
width: 100%;
background-color: gray;
height: 100vh;
display: flex;
position: sticky;
top: 0;
left:0;
z-index : 100;
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
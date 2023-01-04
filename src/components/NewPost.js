import styled from "styled-components";
import React, {useState} from "react";
import { Avatar } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {db} from '../firebase.js';


export const NewPost = () => {
    const [ showInput, setshowInput] = useState(false);
    const [ postText, setpostText] = useState('');
    const [ postImage, setpostImage] = useState('');

    console.log(postText);
   const createPost = async () => {
    try{
        const collectionRef = collection (db, 'posts');
        const docRef = await addDoc(collectionRef, {
     imgProfile: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg',
     name: 'Alejandra',
     postText: postText,
     postImage: postImage,
     timestamp: serverTimestamp()
        } );
        console.log("id del documento",docRef.id);
        setpostText('');
        setpostImage('');
    } catch(error) {
        console.log("Error al agregar documento", error);
         }
   }; 
   


    return ( 
        <Container>
           <InputText>
                <Avatar src='https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg' />
                <input 
                onClick={() => {setshowInput(true)}}
                type='text'
                placeholder="que haces?"
                onChange={(event) => {setpostText(event.target.value)}}
                value= {postText}
                />
           </InputText>
           { showInput &&
                <InputImage>
                    <ImageIcon />
                    <input type= 'text'
                    placeholder="Agregar Imagen"
                    onChange={(event) => {setpostImage(event.target.value)}}
                    value= {postImage}
                    />

                    <ArrowDropUpIcon onClick={() => {setshowInput(false)}} />
                </InputImage>

           }

           
           <BtnSubmit onClick={ createPost }>
                Publicar
           </BtnSubmit>
        </Container>

    )

    }

export default NewPost

const Container = styled.div `
width: 80%;
background-color: white;
margin-top: 20px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 10px;
`;

const InputText = styled.div`
   display: flex;
   width: 100%;
   .MuiAvatar-root {
    width: 50px;
    height: 50 px;
   }
   
   input {
    background-color: #cfcfcf;
    height: 50px;
    width: 90%;
    margin-left: 10px;
    border-radius: 25px;
    font-size: 18px;
    padding: 10px;
    border: none;
    outline: none;
   }
`

const InputImage = styled.div`
width: 100%;
display: flex;
margin-top: 20px;
align-items: center;
justify-content: space-around;

.MuiSvgIcon-root {
    font-size: 30px;
    color: blue;
}

input {
    background-color: #cfcfcf;
    height: 50px;
    width: 75%;
    margin-left: 10px;
    border-radius: 25px;
    font-size: 20px;
    paddind: 10px;
    border: none;
    outline: none;
    font-size: 18px;
}
`;

const BtnSubmit = styled.div`
width: 90%;
margin-top: 20px;
font-size: 20px;
background-color: #1c36ad;
font-weight: 600;
padding: 10px 0;
border: none;
border-radius: 10px;
cursor: pointer;
text-align: center;
:hover {
    background-color: #7587d9
}
`;
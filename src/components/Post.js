import styled from "styled-components";
import menu from '../assets/menu.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import shared from '../assets/shared.jpg'
export const Post = ({name, imgProfile, postText, postImage}) => {

    return (
        <Container>
            <Header>
                <Headeruser>
                    <img src={imgProfile}
                    alt='imagen de usuario' />
                    <h4>{name}</h4>

                </Headeruser>
                <img src={menu} alt='icono del menu' />
            </Header>
        <PostContent>
            <p>{postText}</p>
            <img
             src={postImage}
              alt='imagen de la publicación' />
        </PostContent>
        <Footer>
            <IconFooter>
                <img src={like} alt='Me gusta' />
                <h4> Me Gusta</h4>
            </IconFooter>
            <IconFooter>
                <img src={comment} alt='Comentario' />
                <h4> Comentar</h4>
            </IconFooter>
            <IconFooter>
                <img src={shared} alt='Compartir' />
                <h4> Compartir</h4>
            </IconFooter>
        </Footer>

        </Container>

    )

    }

export default Post;

const Container = styled.div `
width: 80%;
background-color: white;
margin-top: 20px;
display: flex;
flex-direction: column;
border: 1px solid #cfcfcf;
border-radius: 10px;
`;
const Header = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid #cfcfcf;
    img {
        width: 30px;
        height: 25px;
    }
`;

const Headeruser = styled.div `
    display: flex;
    align-items: center;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    h4 {
        margin-left: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #6a6a6a;
    }
`;

const PostContent = styled.div`
    height: 90vh;
    diplay: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        width: 100%;
        height: 90%;
        object-fit: cover;
    }

    p{
        height: 10%;
        padding: 15px 10px;
        font-size: 18px;
        overflow-y: auto;
    }
`;

const Footer= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
border-top: 1px solid #cfcfcf;
`;

const IconFooter = styled.div `
    display: flex;
    align-items: center;
    img {
        width: 25px;
        height: 25px;
    }

    h4{
        margin-left: 10px;
        font-size: 20px;
        font-weigth: 500;
        color: #6b6b6b;
    }
`;
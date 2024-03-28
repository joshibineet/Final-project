import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
}

html{
    font-size: 62.5%;
    overflow-x:hidden;



}

/*h1{
    font-size: 52px;
    font-weight:500;
    line-height:60px;
    letter-spacing:-2%;
}*/

h2{
    font-size: 48px;
    font-weight:500;
    line-height:56px;
    letter-spacing:-2%;
    text-align: center;
}

p{
    font-size: 1.68rem;
    line-height:1.6;
    font-weight:400;

}

a{
    text-decoration:none;
}

li{
    list-style:none;
}

.grid{
    display: grid;
    gap:9rem;
}

.grid-cols-4 {
    grid-template-columns: repeat(4,1fr);
}

.container{
    max-width: 120rem;
    margin: 0 auto;
}
`;

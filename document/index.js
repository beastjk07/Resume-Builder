module.exports = ({ firstName, lastName, address, email, phoneNo }) => {
  return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* reset */

body, html {
    overflow: hidden;
    background: rgb(233, 233, 233);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
}

/* container */

.resume_container {
    width: 1300px;
    background: white;
    box-shadow: 20px 20px 0px 0px #3f3f3f;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    column-gap: 50px;
}

/* column */

.resume_column {
    flex: 1;
}

/* header - infos */

.resume_header {
    display: flex;    
    width: 100%;
    justify-content: flex-start;
    align-items: center;
}

.resume_header .image_cover {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #3f3f3f;
    display: flex;    
    justify-content: center;
    align-items: center;
}

.resume_header .image_cover img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
}

.resume_header .profile_infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2px;
}

.resume_header .profile_infos p {
    font-size: 14px;
    font-weight: bold;
    color: #3f3f3f;
}

/* hello title */

.hello {
    font-size: 24px;
    margin-top: 20px;
    font-weight: 800;
    color: #3f3f3f;
}

/* actual work */

.resume_row {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;    
}

.resume_row h2 {
    font-size: 19px;
    font-weight: bold;
    color: #3f3f3f;
    margin-bottom: 10px;
}

.resume_row p {
    font-size: 13px;
    font-weight: 500;
    color: #9c9c9c;
    word-spacing: -1px;
    width: 85%;
}

/* resume - skills */

.resume_skills {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.resume_skills h2 {
    font-size: 19px;
    font-weight: bold;
    color: #3f3f3f;
    margin-bottom: 20px;
}

.resume_skills .skills {
    width: 60%;
    display: flex;
    row-gap: 8px;
    column-gap: 8px;
    flex-wrap: wrap;
}

.resume_skills .skills p {
    padding: 5px 10px;
    background: #ebebeb;
    color: #3f3f3f;
    font-weight: bold;
    font-size: 11px;
}

/* employment and education */

.resume_column .history_title {
    font-size: 24px;
    margin-top: 20px;
    font-weight: 800;
    color: #3f3f3f;
}

.resume_column .text_bar {
    width: 50px;
    height: 4px;
    background: #3f3f3f;
    margin-bottom: 20px;
}

.header_history {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.header_history h2 {
    font-size: 15px;
    font-weight: bold;
    color: #3f3f3f;
    margin-bottom: 3px;
    width: 70%;
}

.header_history span {
    font-weight: bold;
    font-size: 13px;
    color: #9c9c9c;
}

.date {
    font-size: 13px;
    font-weight: bold;
    color: #808080;
    word-spacing: -1px;
    width: 85%;
    margin-bottom: 10px;
}

.description {
    font-size: 13px;
    font-weight: 500;
    color: #9c9c9c;
    word-spacing: -1px;
    width: 85%;
}

/* height */

@media (max-height: 700px) {
    
    /* reset */
    
    body, html {
        overflow-y: scroll;
        height: auto;
        display: flex;
        align-items: flex-start !important;
    }
    
    /* container */
    
    .resume_container {
        width: 100%;
        margin: 50px 30px;
        flex-direction: column;
        align-items: flex-start;
    }
}

/* 1355 resolution */

@media (max-width: 1355px) {
    
    /* reset */
    
    body, html {
        overflow-y: scroll;
        height: auto;
        display: flex;
        align-items: flex-start !important;
    }
    
    /* container */
    
    .resume_container {
        width: 100%;
        margin: 50px 30px;
        flex-direction: column;
        align-items: flex-start;
    }
    
}

/* 755 resolution */


@media (max-width: 755px) {
    
    
    /* container */
    
    .resume_container {
        padding: 40px;
    }
    
}

/* 575 resolution */


@media (max-width: 575px) {
    
    /* container */
    
    .resume_container {
        padding: 20px;
        box-shadow: 5px 5px 0px 0px #3f3f3f;
        margin: 10px 10px;
    }
    
    /* header - infos */
    
    .resume_header .image_cover {
        max-width: 70px;
        max-height: 70px;
        min-width: 70px;
        min-height: 70px;
        border: 2px solid #3f3f3f;
        margin-right: 10px;
    }
    
    .resume_header .image_cover img {
        width: 60px;
        height: 60px;
    }
    
    .resume_header .profile_infos {
        row-gap: 0px;
    }
    
    .resume_header .profile_infos p {
        font-size: 11px;
    }
    
    /* hello title */
    
    .hello {
        font-size: 18px;
    }
    
    /* actual work */
    
    .resume_row h2 {
        font-size: 15px;
    }
    
    .resume_row p {
        width: 100%;
        font-size: 11px;
    }
    
    /* resume - skills */
    
    .resume_skills h2 {
        font-size: 15px;
    }
    
    .resume_skills .skills {
        width: 90%;
    }
    
    .resume_skills .skills p {
        font-size: 9px;
    }
    
    /* employment and education */
    
    .resume_column .history_title {
        font-size: 18px;
    }
    
    .header_history {
        flex-direction: column;
    }
    
    .header_history h2 {
        width: 100%;
        margin-bottom: 0px;
    }
    
    .header_history span {
        margin-bottom: 10px;
    }
    
    .date {
        font-size: 11px;
    }
    
    .description {
        font-size: 11px;
        width: 100%;
        margin-bottom: 10px;
    }
    
}
    </style>
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    
    <title>Resume</title>
</head>
<body>
    
    <!-- container -->
    <div class="resume_container">

        <!-- column -->
        <div class="resume_column">
            <!-- header - infos -->
            <div class="resume_header">
                <div class="image_cover">
                    <img src="assets/profile.jpg" width="50px">
                </div>
                <div class="profile_infos">
                    <p>📩 ${email}</p>
                    <p>📲 ${phoneNo}</p>
                    <p>📌 ${address}</p>
                </div>
            </div>
            <!-- hello - title -->
            <h1 class="hello">👋 HI, I'M ${firstName}</h1>
            <!-- actual work -->
            <div class="resume_row">
                <h2>💼 Software Engineer at Twitch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reprehenderit itaque sequi est maiores vero, fuga unde iste explicabo, at odio dolor ut! Voluptatibus sed, iusto delectus eius odit beatae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut aperiam. In iste veritatis earum, alias totam consequatur amet, quaerat quis corporis, eaque ipsa ab dolore. Cupiditate accusamus saepe tenetur.</p>
            </div>
            <!-- resume - skills -->
            <div class="resume_skills">
                <h2>🛴 Currently I'm working with some technologies:</h2>
                <div class="skills">
                    <p>PHP</p>
                    <p>LARAVEL</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>ELIXIR</p>
                    <p>MYSQL</p>
                    <p>VUEJS</p>
                    <p>VBA</p>
                    <p>C#</p>
                </div>
            </div>
        </div>
        
        <!-- column -->
        <div class="resume_column">
            <!-- employment -->
            <h1 class="history_title">EMPLOYMENT HISTORY</h1>
            <div class="text_bar"></div>
            <div class="header_history">
                <h2>Intership in Mechanical Engineering, GE - General Electric</h2>
                <span>Porto Alegre</span>
            </div>
            <p class="date">May 2017 -- May 2019</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse illo corrupti corporis repellat enim non libero consequuntur nesciunt quisquam! Maxime mollitia consequuntur rerum nostrum ex perferendis aliquid quibusdam. Veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet accusamus tenetur repellat itaque, reprehenderit autem similique blanditiis voluptate, officia iure iusto dolorum odio! Officiis numquam earum asperiores aliquid consequatur?</p>
            <!-- education -->
            <h1 class="history_title">EDUCATION</h1>
            <div class="text_bar"></div>
            <div class="header_history">
                <h2>Software Engineering at Unisinos</h2>
                <span>Porto Alegre</span>
            </div>
            <p class="date">Jan 2020 -- ?</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse illo corrupti corporis repellat enim non libero consequuntur nesciunt quisquam! Maxime mollitia consequuntur rerum nostrum ex perferendis aliquid quibusdam. Veritatis!</p>
        </div>
        
    </div>

</body>
</html>
  `;
}

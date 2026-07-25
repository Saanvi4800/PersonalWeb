# Personal Website
This is my Personal Website! : https://saanvi4800.github.io/PersonalWeb/




https://github.com/user-attachments/assets/0e380f50-185e-4456-83f8-7f4bb9b96b52



## Features
- Several sections split up in the navbar to the left
- Made for laptop (larger screen) but can scale down to phone
- Page ring that leads to other websites!
- Collabsible project sections so it doesn't feel so overwhelming
- Contact icons and clickable photo

## Setup/Quick Start
install node.js (v18+) and npm or Yarn
  
    git clone <repo>
    cd PersonalWeb
    npm install
    npm run dev


## How it works/was made 
I used the React framework to create this website. This was the first time I used React for a project on my own, and the first time I used javascript, not typescript.
I chose to use javascript because, being new to react, I wanted to understand the code better before I used typescript, which I immediately felt overwhelmed by. I didn't really have a technical reason to use javascript over typescript other than for understanding the code. 
<br>
<br>
I did use html and css files as well for syling, while occationally usng tailwind where it felt best to. The main reason why I used react was because I knew I wanted my navbar to show up on all pages, and so other componets as well, such as the collabspibles. React allowed me to create those components and then use them whereever I needed in the code. I needed the navbar to show up on all pages so I could code the navbar once in the components file and apply it to all of the pages. Even though I used them in one file, it was helpful to have a degree of seperation where i could add and subtact functionality and know exactly where a problem may arise. It is also helpful for using components throughout code, where it does not have to be everywhere - only certain places. That is what I did for my collapsibles. I added them where I needed, while the code dictating what they did and how they acted stayed in one place, where I could edit and change them without worrying to change the code in all the places its in. 

## Issues/problems in building
I didn't have any glaring problems in building the website itself, I found it to move along relatively smoothly, with common roadblocks that I was able to understand and sort out eventually. The biggest problem I had however was deploying the website itself and i broke it several times trying to deploy it. Every time I tried to deploy the website it would show up as the readme or a blank screen. It was so frustrating, however I ended finding out that this is a relatively common problem in deployment. Firstly I needed to deploy from another branch - I had to create a gh-pages branch that the website was to be deployed on. Additionally some of my files were not named/addressed to correctly so when I tried adding base to vite.config.js file it would no longer show me the correct file, and it would be blank, save for my components. Once that was fixed I could finally click on the site and it would show up correctly. There were a lot of issues and undesired results in the deployment of this website, including missing files, photos, and far more than what I just explained. In fact i'm sure just figuring out how to deploy this website took more time than building it itself! I am glad that I pushed through though, because now I have a cool website AND I know that if I want to make something else with react, I can use what I did with this project as a guide to make sure I can deploy the next one! Note: I did use claude for help in the deployment!

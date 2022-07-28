const mainImage=[
  {characterName:'Superman',
    url:'https://i.ibb.co/x16pz1x/super-man.png'
  },
  {characterName:'Captain america',
    url:'/src/assets/cap.png'
  },
  {characterName:'Thor',
    url:'/src/assets/thor.png'
  },
  {characterName:'Venom',
    url:'/src/assets/vemon.png'
  },
  {characterName:'Iron man',
    url:'/src/assets/iron.png'
  }
]
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
const character=mainImage[random(0,4)];
console.log(character)
const name=character.characterName;
const url=character.url;

  const  loadImages=()=>{
    right_container_img.setAttribute('src',"");
    right_container_img.setAttribute('alt',"");
    right_container_name.innerText="";
    logo_img.setAttribute('src','https://i.ibb.co/MMmDPXN/lego.png');
    logo_img.setAttribute('alt',"Logo lego");
    right_container_img.setAttribute('src',url);
    right_container_img.setAttribute('alt',name);
    right_container_name.innerText=name;
    footer_img1.setAttribute('src','https://i.ibb.co/tKWqw8J/spiderman.png');
    footer_img1.setAttribute('alt',"spiderman");
    footer_img2.setAttribute('src','https://i.ibb.co/Xzsdvgg/robin.png');
    footer_img2.setAttribute('alt',"robin");
    footer_img3.setAttribute('src','https://i.ibb.co/M18p91c/batman.webp');
    footer_img3.setAttribute('alt',"batman");
    
}

export default loadImages

 

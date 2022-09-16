
const mainImage=[
  {characterName:'Superman',
    url:'https://i.ibb.co/x16pz1x/super-man.png',
    left:'calc(30%)'
  },
  {characterName:'Captain america',
    url:'https://www.lego.com/cdn/cs/catalog/assets/bltb66fe4b6a4280bb8/1/CaptainAmerica.png?width=320',
    left:'calc(30%)'
  },
  {characterName:'Thor',
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVyCuD5wFascVJyGuJbyMHmcEMO_FtAITuA&usqp=CAU',
    left:'calc(30%)'
  },
  {characterName:'Venom',
    url:'https://www.lego.com/cdn/cs/set/assets/bltb6c692b914d00b2c/76230.png',
    left:'calc(30%)'
  },
  {characterName:'Iron man',
    url:'https://static.wikia.nocookie.net/lego/images/7/73/Iron_Man_76218.png',
    left:'calc(25%)'
  }
]
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
const character=mainImage[random(0,4)];

const name=character.characterName;
const url=character.url;
const leftPossiton=character.left;

  const  loadImages=()=>{
    right_container_img.setAttribute('src',"");
    right_container_img.setAttribute('alt',"");
    right_container_name.innerText="";
    logo_img.setAttribute('src','https://i.ibb.co/MMmDPXN/lego.png');
    logo_img.setAttribute('alt',"Logo lego");
    right_container_img.setAttribute('src',url);
    right_container_img.setAttribute('alt',name);
    right_container_name.innerText=name;
    right_container_img.style.left=leftPossiton;
    footer_img1.setAttribute('src','https://i.ibb.co/tKWqw8J/spiderman.png');
    footer_img1.setAttribute('alt',"spiderman");
    footer_img2.setAttribute('src','https://i.ibb.co/Xzsdvgg/robin.png');
    footer_img2.setAttribute('alt',"robin");
    footer_img3.setAttribute('src','https://i.ibb.co/M18p91c/batman.webp');
    footer_img3.setAttribute('alt',"batman");
    
    
}

export default loadImages

 


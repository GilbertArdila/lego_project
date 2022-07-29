import loadImages from './utils/loadImages.js'
import modalImages from './utils/modalImages.js'

//showing the modal
left_container_div.forEach(div=>{
    div.onclick=()=>{
        //getting the image id
        let id=div.childNodes[0].id;
       
        modal.classList.remove('hidden');
        modal.classList.add('visible');
        
        //loading images according to each main image
        id==='img1'?
        modalImages({
            radio_1_img,
            radio_2_img,
            radio_3_img,
            src1:'https://media.istockphoto.com/photos/civil-war-spiderman-lego-minifigure-picture-id576919122?k=20&m=576919122&s=612x612&w=0&h=P5u1QnJow7PL3Ib3W23zJH0-bPtPWbPK0lNdzLdaEPc=',
            src2:'https://media.istockphoto.com/photos/spiderman-lego-duplo-minifigures-picture-id503017666?k=20&m=503017666&s=612x612&w=0&h=SJw8Fp27Nez-O38JWBMKsZ_c7hQdM0tO_5QA9PjOOcw='
            ,src3:'https://media.istockphoto.com/photos/ultimate-spiderman-minifigure-picture-id494342882?k=20&m=494342882&s=612x612&w=0&h=0yKbQm6__F3LJDPgYIRrF01urmA1-2OYlY9FjZheBUs=',
            nombre:'spiderman'})
            
            :id==='img2'?
            modalImages({
                radio_1_img,
                radio_2_img,
                radio_3_img,
                src1:'https://http2.mlstatic.com/D_NQ_NP_757263-MCO43538225881_092020-O.webp',
                src2: 'https://media.istockphoto.com/photos/robin-lego-minifigure-picture-id503534376?k=20&m=503534376&s=170667a&w=0&h=m8iamWOlBk04_EGBTQXFDTspAGpMPB5WDfERNDTTgWQ='
                ,src3:'https://cdn.toypro.com/media/cache/ks_product_detail_normal/uploads/images/custom/27105-src.jpg',
                nombre:'robin'})
             :
             modalImages({
                radio_1_img,
                radio_2_img,
                radio_3_img,
                src1:'https://w7.pngwing.com/pngs/670/845/png-transparent-batman-lego-action-figure-illustration-lego-batman-3-beyond-gotham-lego-batman-the-videogame-lego-dimensions-lego-batman-2-dc-super-heroes-games-heroes-fictional-character-film.png',
                src2: 'https://w7.pngwing.com/pngs/34/547/png-transparent-lego-batman-toy-batman-two-face-lego-minifigures-batman-heroes-fictional-character-batman-arkham.png'
                ,src3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtJZYZdm44o6AzD8XP-EKllgaaEi4fpBOAIheh1gd_Kq38UbGS4x3vlavZSsp8ibE5Y8&usqp=CAU',
                nombre:'batman'})

                
                



    }
})

//hidding the modal
close.onclick=()=>{
    modal.classList.add('hidden');
    modal.classList.remove('visible');
   
}


//loading images
window.onload=()=>{
   loadImages()
}
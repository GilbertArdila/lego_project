const modalImages=({radio_1_img,radio_2_img,radio_3_img,src1,src2,src3,nombre})=>{
    
    radio_1_img.setAttribute('src',src1)
    radio_1_img.setAttribute('alt',nombre)
   
    radio_2_img.setAttribute('src',src2)
    radio_2_img.setAttribute('alt',nombre)
   
    radio_3_img.setAttribute('src',src3)
    radio_3_img.setAttribute('alt',nombre)
   
}
 export default modalImages

 
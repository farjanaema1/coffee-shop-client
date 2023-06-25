 import photo1 from '../assets/images/Milk-and-Honey-Cold-Brewed-Iced-Coffee-2.jpg';
 import photo2 from '../assets/images/TF_cold mango coffee_141.jpg';
 import photo3 from '../assets/images/how-to-make-cold-brew-coffee-small-5.webp';
 import photo4 from '../assets/images/images (13).jpg';
 import photo5 from '../assets/images/photo-1509042239860-f550ce710b93.jpg';
 import photo6 from '../assets/images/203c873bd138ddc7765a90f7d5467ffc.webp';
 import photo7 from '../assets/images/316541393_1357080004829907_4346967394324430345_n.webp';
 import photo8 from '../assets/images/66e4589e35d378c43e91fa0de796366a.webp';
 import photo9 from '../assets/images/a2f3554c42df983954c89a5d02d0661f-1.webp';
 import photo10 from '../assets/images/102.webp';
 
const Gallery = () => {
    return (
        <div className='grid grid-cols-3 w-4/5 mx-auto gap-4'> 
        <img style={{
            height:400,width:400
        }} src={photo1} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo2} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo3} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo4} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo5} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo6} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo7} alt="" />
      
        <img style={{
            height:400,width:400
        }}  src={photo8} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo9} alt="" />
        <img style={{
            height:400,width:400
        }}  src={photo10} alt="" />
        </div>
        
    )
}
export default Gallery;
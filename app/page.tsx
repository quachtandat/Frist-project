import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div id ='body'>
        
        <div id ='nhom1'>
            <img src = 'https://down-vn.img.susercontent.com/file/9c3bcca596a19b937f569a9d1887f74f' width={200} height={200}></img>
            <img src = 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-r8yag7mgufovb0' width={200} height={200}></img>
            <img src = 'https://down-vn.img.susercontent.com/file/3d18a553b3dcb35f032ff87307564be5' width={200} height={200}></img>
            <div>
                <a href ='/ao'><h2>Áo thun form rộng Paradox tay lỡ - Unisex - In hình - THE REVERIE - Màu đen FREESHIP</h2></a>  
                <h2> 200 K <a href ='/thanhtoan'>MUA</a></h2>
    
            </div>
        </div>
        <div id='nhom2'>
            <img src = 'https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lm32jhqsjkma6f' width={200} height={200}></img>
            <img src = 'https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lm32jhqskz6qed' width={200} height={200}></img>
            <a href ='/quan'><h2>iMaodou Quần jeans Đen Lưng Thun Ống Rộng Phối Dây Rút Có size Lớn Phong Cách Thời Trang Dành Cho Nam Giới FREESHIP</h2></a>  
            <h2> 300 K <a href ='/thanhtoan'>MUA</a></h2>
        
        </div>
        <div id='nhom3'>
            <img src = 'https://down-vn.img.susercontent.com/file/sg-11134201-23030-zf4dqaypuqov14' width={200} height={200}></img>
            <img src = 'https://down-vn.img.susercontent.com/file/sg-11134201-23030-b7woxrypuqov58' width={200} height={200}></img>
            <a href ='/giay'><h2>Renben.versatile student sneakers giày da không thấm nước của nam giới low-top little white shoes giày chạy bộ thông thường FREESHIP</h2></a>  
            <h2>  3.200k <a href ='/thanhtoan'>MUA</a></h2>
        
        </div>
    </div>
  )
}

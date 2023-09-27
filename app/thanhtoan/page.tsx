'use client'

import { useRouter } from 'next/navigation';
const Mota1 =()=>{
    const router = useRouter()
    const handlebtn =() =>{
        alert('CHÚC MỪNG BẠN ĐÃ ĐẶT')
        router.push('/')
        alert('XIN ĐỢI CUỘC GỌI XÁC NHẬN')
    }
    return(
        <div id ='body'>
            <div id ='nhom4'>
                <h1>THANH TOÁN</h1>
            </div>
           <div id ='nhom4'>
                <label >SĐT:</label>
                <input type="text" />
                <label >Số lượng:</label>
                <input type="number" />
                <div>
                    <button onClick={() => handlebtn()}>Xác nhận</button>
                </div>
            </div> 
           
        </div>
    )
}
export default Mota1; 


 
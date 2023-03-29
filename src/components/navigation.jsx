import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'
import { OutlineLogo } from '../assets';

const Navigation = () => {
    return (
        <div className='w-full m-auto flex justify-center'>
            <OutlineLogo width='350' height='150'/>
            <div className='my-auto fixed top-[46px] right-[35px]'>
                <ShoppingCartOutlined className='my-auto' 
                    style={{ fontSize: '33px', color: '#2B2B2B' }}
                />
            </div>
        </div>
    );
}
 
export default Navigation;
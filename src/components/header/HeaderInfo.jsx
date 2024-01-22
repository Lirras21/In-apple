import React from 'react'
import t from '../../locales/ua/header.json';

function HeaderInfo() {
  const styleLink = 'mr-5 relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
  
  return (
    <div className='md:flex text-[14px] justify-center  bg-black text-white h-[37px] hidden' >
        <div className='md:flex text-[14px] justify-between items-center w-[1108px] ml-4 mr-4'>
          <nav>
            <ul>
              <li className='flex'>
                <a href='' className={styleLink}>{t.header.info.delivery}</a>
                <a href='' className={styleLink}>{t.header.info.guarantee}</a>
                <a href='' className={styleLink}>{t.header.info.listCities}</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li className='flex'>
                <a href='' className={styleLink}>{t.header.info.mail}</a>
                <span className='mr-5 text-white cursor-default'>•</span>
                <a href='' className={styleLink}>{t.header.info.number}</a>
                <span className='mr-5 text-white cursor-default'>•</span>
                <a href='' className='relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>{t.header.info.number}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default HeaderInfo

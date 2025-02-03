import React from 'react';
import { aboutServiceData } from '../../data/AboutServiceCard';

const AboutServicesCard = () => {
  return <>
  <section className='my-10 flex items-center justify-center px-3'>
    {/* <div className='w-full flex items-center justify-between lg:justify-center gap-5'>
        {
            aboutServiceData.map((data,i)=>{
                return <div key={i} className='w-[30%] min-h-96 bg-gray-100 rounded-xs p-7 pt-20 flex flex-col justify-start items-start'>
                <h3 className={`text-xl lg:text-2xl ${data.textColor} font-bold mb-5`}>{data.titleName1} <span className='block my-0'>{data.titleName2}</span></h3>
                <p className='text-xs text-gray-600 leading-5'>{data.description}</p>
            </div>

            })

        }
        
    </div> */}
    <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-5">
  {aboutServiceData.map((data, i) => (
    <div
      key={i}
      className="bg-gray-100 rounded-xs py-10 px-5 md:p-7 md:pt-20 flex flex-col justify-start items-start md:min-h-96"
    >
      <h3 className={`text-xl lg:text-2xl ${data.textColor} font-bold mb-5`}>
        {data.titleName1} <span className="block my-0">{data.titleName2}</span>
      </h3>
      <p className="text-xs text-gray-600 leading-5">{data.description}</p>
    </div>
  ))}
</div>

  </section>

  </>
}

export default AboutServicesCard;
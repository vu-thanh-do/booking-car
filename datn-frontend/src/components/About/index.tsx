import { useNavigate } from 'react-router-dom'
import { Button } from '..'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='md:flex-row container relative flex flex-col items-center justify-end mx-auto'>
        <img className='w-full' src='/camera-regular22.svg' alt='' />
        <div className='content md:flex flex-col items-center z-[2] my-10 md:w-[35%] relative md:absolute md:mr-10'>
          <div className='title flex flex-col items-center'>
            <h4 className='sub_title text-[#d3b673]  text-[22px] mb-[5px] font-bold'></h4>
            <h3 className='main_title text-3xl md:text-4xl text-center text-white uppercase font-bold  mb-2'>
            </h3>
            <div className='bg_title'></div>
          </div>
          <div className='description text-center text-[#333333] font-[400] text-sm my-4'>
           <strong className='text-white  font-bold text-xl '>Chúng tôi hiểu</strong> <span className='text-white  font-bold text-xl '>chuyến đi là một phần trong cuộc sống của bạn</span>
          </div>
          <div className='hover:bg-white hover:text-[#d3b673] text-center'>
            {/* <button className="uppercase text-white border border-[#d3b673] bg-[#d3b673] py-2 px-4 text-[16px] hover:bg-white hover:text-[#d3b673]">
              Xem thêm
            </button> */}
            <Button
              onClick={() => navigate('/about')}
              size='medium'
              shape='square'
              style='hover:bg-white hover:text-[#d3b673]'
            >
              Xem thêm
            </Button>
          </div>
        </div>
        <div className='absolute left-0'>
            <img className=''  src="https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1621843595/blog/fhvmnyhgdmibfxpiw3of.webp" alt="inner_image_01.png" />
        </div>
      </div>

      <div className='container mx-auto mt-10  mb-[60px] border-[6px] border-[#d3b673] flex items-center justify-center py-10 md:p-0'>
        <div className='w-[50%] flex flex-col items-center justify-center mx-[10%] mb-10'>
          <div className='title flex flex-col items-center mt-10'>
            <h4 className='text-[#d3b673]  text-[22px] mb-[5px] font-bold'> THƯ VIỆN</h4>
            <h3 className='md:text-xl mb-2 text-2xl font-bold text-black uppercase'>Hình Ảnh của chuyến xe Sử dụng dịch vụ Grooming  Fago Hotel</h3>
            <div className='bg_title'></div>
          </div>
          <div className=' description text-[16px] text-center my-4 '>
            <p>
              Với nhiều năm kinh nghiệm trong lĩnh vực đặt xe thì từ lâu FagoPet đã trở thành một trong những đơn vị được yêu thích tại TPHCM nói riêng và trên cả nước nói chung. Với hệ thống trang thiết bị hiện đại nhất và tốt nhất cùng với đội ngũ nhân viên được đào tạo bài bản thì tại FagoPet đã cung cấp các dịch vụ spa.
            </p>
          </div>
          <div className='btn'>
            {/* <button className="uppercase text-white border border-[#d3b673] bg-[#d3b673] py-2 px-4 text-[16px] hover:bg-white hover:text-[#d3b673]">
              Xem thêm
            </button> */}
            <Button
              onClick={() => navigate('/not-found')}
              size='medium'
              shape='square'
              style='hover:bg-white hover:text-[#d3b673]'
            >
              Xem thêm
            </Button>
          </div>
        </div>
        <div className='hidden  w-[50%] md:flex items-center'>
          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1621843780/blog/cjmcygpctu4bosrvcl6t.webp' className='w-[80%] max-w-[80%]' alt='' />
        </div>
      </div>
    </div>
  )
}

export default About

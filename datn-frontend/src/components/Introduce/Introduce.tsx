import FooterHomePage from '../Footer-HomePage'
import HeaderHomePage from '../Header-HomePage'
import Loader from '../Loader'
import styles from './Introduce.module.scss'

const Introduce = () => {
  return (
    <>
      <Loader />
      <HeaderHomePage />
      <div className={`${styles.page_top_banner}`}>Giới thiệu</div>
      <div className='max-w-[1111px] m-auto px-4 sm:px-6 lg:px-8'>
        <p className={`${styles.page_title} mt-4 sm:mt-[40px] mb-[25px] lg:text-xl`}>Giới Thiệu Về Fagopet</p>
        <p className='mb-4 text-[16px]'>
       Chúng tôi thấu hiểu những nỗi lo lắng của bạn trong quá trình chăm lo cho thú cưng của bạn Fago Pet ra đời với sứ mệnh là người bạn - người đồng hành luôn sát cánh cùng bạn trong quá trình nuôi dưỡng thú cưng

Fago Pet là trang website cung cấp, chia sẻ kiến thức thông tin chính xác nhất liên quan đến lĩnh vực thú cưng, được đúc kết từ những kinh nghiệm và khó khăn khi nuôi dưỡng thú cưng từ kinh nghiệm thực tế

Fago Pet - Người bạn đồng hành cùng bạn trong quá trình chăm sóc thú cưng

Founder là một người đam mê công nghệ, yêu thiên nhiên và động vật. Từ lúc anh bắt đầu nuôi 1 bé Pet là Bun Pháp, anh đã loạn trước các thông tin về cách nuôi dưỡng và các sản phẩm cần mua để chăm sóc. Anh không biết cần cho cún ăn thức ăn gì, khi nào thì xổ giun, khi nào thì tiêm phòng,.. và loạn trước các thông tin trên online.

Hiểu rõ nỗi vất vả đó, anh đã nung nấu ý tưởng phát triển 1 trang thông tin chính thống. chia sẻ về những kiến thức trong quá trình nuôi thú cưng

Thông tin công ty:

Mã số DKKD: 8585234374-001 Cấp tại: Chi cục thuế quận Tân Bình

Trụ sở Tp. Hồ Chí Minh : 26/1 Nguyễn Minh Hoàng, Phường 12, Quận Tân Bình, TPHCM

Trụ sở Hà Nội : 102/51 Phố Hoàng Đạo Thành, Kim Giang, Thanh Xuân,Tp. Hà Nội

Điện thoại: 0929894774

Email: fagopet@gmail.com

2. Các dịch vụ và sản phẩm chính tại Fagopet
2.1 Các dịch vụ chính tại Fagopet:
- Dịch vụ khách sạn chó mèo

- Dịch vụ spa chó mèo

- Dịch vụ huấn luyện chó

- Dịch vụ phối giống chó

- Dịch vụ phối giống cho mèo

2.2 Các sản phẩm chính tại Fagopet:
- Các giống chó cảnh

- Các giống mèo cảnh

Sản phẩm dành cho chó
- Thức ăn cho chó

- Nhà cho chó

- Balo, túi đựng chó

- Dụng cụ vệ sinh cho chó

- Sữa tắm cho chó

- Quần áo cho chó

- Phụ kiện cho chó

- Thuốc cho chó

Sản phẩm dành cho mèo
- Thức ăn cho mèo

- Nhà cho mèo

- Balo cho mèo

- Dụng cụ vệ sinh cho mèo

- Sữa tắm cho mèo

- Lồng sấy mèo

- Quần áo cho mèo

- Phụ kiện cho mèo

- Thuốc cho mèo
        </p>
        <p className='mb-4 text-[16px]'>
         Tầm nhìn và chiến lược
Giúp cho 100.000+ những người đang nuôi thú cưng 1 cách dễ dàng, và thú cưng trở thành 1 người bạn đồng hành cùng con người trong cuộc sống

Sự hài lòng của bạn là động lực để chúng tôi phát triển Fago pet.


        </p>
        <p className='mb-4 text-[16px]'>
        Sứ mệnh của Fago Pet
Hướng đến mục tiêu chăm sóc thú cưng 1 cách đúng đắn và khoa học, giúp thú cưng phát triển khoẻ mạnh và dễ dàng
        </p>
        <p>
          <img
            className='w-[80%] max-w-[80%] mt-[50px] mx-auto'
            src='/khach-san-thu-cung-4.webp'
            alt=''
          />
        </p>
        <p className='mb-[10px]'>
          <img
            className='w-[80%] max-w-[80%] mt-[15px] mx-auto'
            src='/p23gua8jkzxzxsacuftokbf5v1ai_GPKD1.webp'
            alt=''
          />
        </p>
      </div>
      <FooterHomePage />
    </>
  )
}

export default Introduce

import { Drawer } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '~/store/hooks'
import { useGetAllCategoryQuery, useGetAllProductsQuery } from '~/store/services'
import { RootState } from '~/store/store'

const BookingEndUser = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const [option, setOption] = useState<any>()
  const [searchParams] = useSearchParams()
  const idPro = searchParams.get('idPro')
  const onClose = () => {
    setOpen(false)
  }
  const {
    data: dataProducts,
    isLoading: loadingProduct,
    isError: errorProudct
  } = useGetAllProductsQuery({
    _page: 1,
    _limit: 10,
    query: ''
  })
  const navigate = useNavigate()
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [filteredRoutes, setFilteredRoutes] = useState<any[]>(dataProducts?.docs)
  const handleSearch = () => {
    const filtered = dataProducts?.docs?.filter((cate: any) => {
      const result = cate?.category?.name?.split('-')
      const start = result?.[0]?.toLowerCase() || ''
      const end = result?.[1]?.toLowerCase() || ''

      return (
        start.includes(startLocation.toLowerCase()) && end.includes(endLocation.toLowerCase())
        // Bạn có thể thêm điều kiện ngày đi ở đây nếu cần
      )
    })
    setFilteredRoutes(filtered)
  }
  useEffect(() => {
    if (idPro) {
      const handelFetchIdProduct = async () => {
        try {
          const { data } = await axios.get('http://localhost:8000/api/product/' + idPro)
          console.log(data, 'datadata')
          setOption(data?.data)
        } catch (error) {
          //
        }
      }
      handelFetchIdProduct()
    }
  }, [idPro])

  return (
    <div>
      <Drawer title='Đặt xe' onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div className='bg-white shadow-md rounded-lg p-6 flex items-center space-x-6 justify-center'>
        <div className='flex gap-10'>
          <div className='flex items-center space-x-2'>
            <i className='fas fa-map-marker-alt text-gray-500' />
            <div>
              <div className='text-gray-700 font-semibold'>Nơi đi</div>
              <input
                type='text'
                placeholder='Nhập nơi đi'
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className='border-b-2 border-danger text-gray-400 focus:outline-none'
              />
            </div>
          </div>
          <div className='border-l h-12' />
          <div className='flex items-center space-x-2'>
            <i className='fas fa-exchange-alt text-danger' />
            <div>
              <div className='text-gray-700 font-semibold'>Nơi đến</div>
              <input
                type='text'
                placeholder='Nhập nơi đến'
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                className='border-b-2 border-danger text-gray-400 focus:outline-none'
              />
            </div>
          </div>
          <div className='border-l h-12' />
          <div className='flex items-center space-x-2'>
            <i className='fas fa-calendar-alt text-gray-500' />
            <div>
              <div className='text-gray-700 font-semibold'>Ngày đi</div>
              <input
                className='border-b-2 border-danger'
                type='date'
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>
          <button
            className='bg-danger text-white font-semibold py-2 px-4 rounded-full flex items-center space-x-2'
            onClick={handleSearch}
          >
            <i className='fas fa-search' />
            <span>Tìm Chuyến</span>
          </button>
        </div>
      </div>

      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>Lộ trình tham khảo</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Hiển thị kết quả tìm kiếm */}
          {filteredRoutes?.map((cate: any, index) => {
            console.log(cate.category, 'category')
            const result = cate?.category?.name?.split('-')
            const start = result?.[0]
            const end = result?.[1]

            return (
              <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img
                  alt='Interior of a limousine with brown leather seats and a person standing'
                  className='w-full h-48 object-cover'
                  height={400}
                  src={cate?.images?.[0]?.url}
                  width={600}
                />
                <div className='p-4'>
                  <div className='flex items-center mb-2'>
                    <i className='fas fa-dot-circle text-danger mr-2'></i>
                    <span className='font-bold'>{start}</span>
                  </div>
                  <div className='flex items-center mb-2'>
                    <i className='fas fa-exchange-alt text-gray-500 mr-2'></i>
                  </div>
                  <div className='flex items-center mb-2'>
                    <i className='fas fa-dot-circle text-danger mr-2'></i>
                    <span className='font-bold'>{end}</span>
                  </div>
                  <div className='border-t border-dashed border-danger my-2'></div>
                  <div className='flex items-center mb-2'>
                    <span className='bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded'>
                      Limousine {cate?.sizes?.length} chỗ
                    </span>
                    <span className='bg-red-100 text-danger text-sm font-medium px-2 py-1 rounded ml-2'>VIP</span>
                  </div>
                  <div className='flex justify-between'>
                    <button
                      onClick={() => {
                        navigate({
                          search: createSearchParams({
                            idPro: cate._id
                          }).toString()
                        })
                        showDrawer()
                      }}
                      className='bg-danger text-white px-4 py-2 rounded'
                    >
                      Đặt
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BookingEndUser

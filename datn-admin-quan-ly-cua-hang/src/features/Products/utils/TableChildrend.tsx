import { Table } from 'antd'
import { IToppingRefProduct } from '~/types'
import { formatCurrency } from '~/utils'

export default function TableChildrend({ products ,totalPrice }: any) {

  const kindOfRoom = products
  console.log(kindOfRoom,'kindOfRoom')
  const columns = [
    {
      title: 'Tên Xe',
      dataIndex: 'name',
      key: 'name',
      width: 150
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',

      render: (image: any) => (
        <img src={image} className='object-cover w-20 h-20 rounded-lg cursor-pointer mb-1' alt='' />
      )
    },
   
    {
      title: 'Tổng tiền',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (price: number) => formatCurrency(totalPrice)
    },
    {
      dataIndex: 'action',
      key: 'action',
      width: 200
    }
  ]

  const dataPush = products?.map((item: any) => ({
    name: item.name,
    quantity: item.quantity,
    size: item.size,
    topping: item.toppings,
    price: item.price,
    image: item.image
  }))

  return <Table className='my-3' bordered columns={columns} dataSource={dataPush} pagination={false} />
}

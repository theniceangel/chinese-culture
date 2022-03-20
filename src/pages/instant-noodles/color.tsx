import type React from 'react'
import { useState } from 'react'
import VerticalText from 'components/vertical-text'
import RGB from 'components/rgb'
const colors = [
  {
    hex: '#DF2000',
    name: '红烧牛肉红'
  },
  {
    hex: '#0037BB',
    name: '鲜虾鱼板蓝'
  },
  {
    hex: '#700988',
    name: '老坛酸菜紫'
  },
  {
    hex: '#008758',
    name: '香菇炖鸡绿'
  },
  {
    hex: '#F78300',
    name: '香辣牛肉橙'
  },
  {
    hex: '#231916',
    name: '黑胡椒牛排黑'
  },
  {
    hex: '#00B6B1',
    name: '藤椒牛肉蓝'
  },
  {
    hex: '#F2C600',
    name: '金汤肥牛黄'
  },
  {
    hex: '#FF9FA4',
    name: '金汤五花肉粉'
  },
  {
    hex: '#1892DB',
    name: '金汤虾球蓝'
  },
  {
    hex: '#A0CD58',
    name: '日式豚骨绿'
  },
  {
    hex: '#FCC002',
    name: '红烧排骨黄'
  },
  {
    hex: '#FA8593',
    name: '番茄牛腩粉'
  },
  {
    hex: '#DC073C',
    name: '西红柿打卤红'
  }
]
const Color: React.FC = () => {
  const [index, setIndex] = useState(0)
  const guide = '那些年吃过的泡面'
  const { name, hex } = colors[index]
  return (
    <div className="h-full overflow-hidden" style={{ backgroundColor: hex }}>
      <div className="m-24 mx-12 flex font-serif text-instant-noodles-gold">
        <div className="text-sm antialiased">
          <VerticalText text={guide}></VerticalText>
        </div>
        <div className="font-semibold text-4xl">
          <VerticalText text={name}></VerticalText>
        </div>
      </div>
      <div className="flex justify-center items-center text-instant-noodles-gold absolute bottom-28 w-full">
        <RGB hex={hex} />
      </div>
    </div>
  )
}

export default Color

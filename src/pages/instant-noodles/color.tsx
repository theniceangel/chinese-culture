import type React from 'react'
import { useState } from 'react'
import VerticalText from 'components/vertical-text'
import RGB from 'components/rgb'
import IconArrowRight from '~icons/carbon/arrow-right'
import IconArrowLeft from '~icons/carbon/arrow-left'
// instant noodles
import HsCoverUrl from 'assets/instant-noodles/hongshao.png'
import XxCoverUrl from 'assets/instant-noodles/xianxia.png'
import LtCoverUrl from 'assets/instant-noodles/laotansuancai.png'
import XgCoverUrl from 'assets/instant-noodles/xiaojidunmogu.png'
import XlCoverUrl from 'assets/instant-noodles/xianxia.png'
import HhjCoverUrl from 'assets/instant-noodles/heihujiao.png'
import TjCoverUrl from 'assets/instant-noodles/tengjiao.png'
import FnCoverUrl from 'assets/instant-noodles/jintangfeiniu.png'
import WhrCoverUrl from 'assets/instant-noodles/jintangwuhuarou.png'
import XqCoverUrl from 'assets/instant-noodles/jintangxiaqiu.png'
import TgCoverUrl from 'assets/instant-noodles/tungu.png'
import PgCoverUrl from 'assets/instant-noodles/hongshaopaiguhuang.png'
import FqCoverUrl from 'assets/instant-noodles/fanqie.png'
import XhsCoverUrl from 'assets/instant-noodles/xihongshi.png'
const noodles = [
  {
    hex: '#DF2000',
    name: '红烧牛肉红',
    fontColor: '#FFD895',
    coverUrl: HsCoverUrl
  },
  {
    hex: '#0037BB',
    name: '鲜虾鱼板蓝',
    fontColor: '#FFD895',
    coverUrl: XxCoverUrl
  },
  {
    hex: '#700988',
    name: '老坛酸菜紫',
    fontColor: '#FFD895',
    coverUrl: LtCoverUrl
  },
  {
    hex: '#008758',
    name: '香菇炖鸡绿',
    fontColor: '#FFD895',
    coverUrl: XgCoverUrl
  },
  {
    hex: '#F78300',
    name: '香辣牛肉橙',
    fontColor: '#FFD895',
    coverUrl: XlCoverUrl
  },
  {
    hex: '#231916',
    name: '黑胡椒牛排黑',
    fontColor: '#FFD895',
    coverUrl: HhjCoverUrl
  },
  {
    hex: '#00B6B1',
    name: '藤椒牛肉蓝',
    fontColor: '#FFE1BF',
    coverUrl: TjCoverUrl
  },
  {
    hex: '#F2C600',
    name: '金汤肥牛黄',
    fontColor: '#FDF2D6',
    coverUrl: FnCoverUrl
  },
  {
    hex: '#FF9FA4',
    name: '金汤五花肉粉',
    fontColor: '#FDF2D6',
    coverUrl: WhrCoverUrl
  },
  {
    hex: '#1892DB',
    name: '金汤虾球蓝',
    fontColor: '#FDF2D6',
    coverUrl: XqCoverUrl
  },
  {
    hex: '#A0CD58',
    name: '日式豚骨绿',
    fontColor: '#FDF2D6',
    coverUrl: TgCoverUrl
  },
  {
    hex: '#FCC002',
    name: '红烧排骨黄',
    fontColor: '#FDF2D6',
    coverUrl: PgCoverUrl
  },
  {
    hex: '#FA8593',
    name: '番茄牛腩粉',
    fontColor: '#FDF2D6',
    coverUrl: FqCoverUrl
  },
  {
    hex: '#DC073C',
    name: '西红柿打卤红',
    fontColor: '#FFE1BF',
    coverUrl: XhsCoverUrl
  }
]
const length = noodles.length
const Color: React.FC = () => {
  const [index, setIndex] = useState(0)
  const guide = '那些年吃过的泡面'
  const { name, hex, fontColor, coverUrl } = noodles[index]
  const handleClick = (advance: boolean) => {
    if (advance) {
      setIndex(Math.min(index + 1, length - 1))
    } else {
      setIndex(Math.max(index - 1, 0))
    }
    changeFontColor(fontColor)
  }
  // TODO 使用 hooks 更优雅
  const changeFontColor = (hex: string) => {
    const style = window.document.documentElement.style
    style.setProperty('--instant-noodles-text-color', hex)
  }
  return (
    <div
      className="h-full overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: hex }}
    >
      <div className="m-24 mx-12 flex font-serif text-instant-noodles-gold">
        <div className="text-sm antialiased">
          <VerticalText text={guide}></VerticalText>
        </div>
        <div className="font-semibold text-4xl">
          <VerticalText text={name}></VerticalText>
        </div>
        <img className="w-[16rem]" src={coverUrl} alt="" />
      </div>
      <div className="flex justify-center items-center text-instant-noodles-gold absolute bottom-28 w-full">
        <RGB hex={hex} />
      </div>
      <div className="absolute bottom-12 text-center w-full">
        {index > 0 && (
          <IconArrowLeft
            onClick={() => handleClick(false)}
            className="text-instant-noodles-gold mr-4 text-3xl p-1 border-instant-noodles-gold border-1 rounded-full"
          />
        )}

        {index < length - 1 && (
          <IconArrowRight
            onClick={() => handleClick(true)}
            className="text-instant-noodles-gold text-3xl p-1 border-instant-noodles-gold border-1 rounded-full"
          />
        )}
      </div>
    </div>
  )
}

export default Color

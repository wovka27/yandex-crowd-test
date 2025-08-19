import { IListRendererProps } from '@/components/ListRenderer/types'

export default function<T>({ list, ComponentItem }: IListRendererProps<T>){
  return list.map((item, index) => <ComponentItem key={index} data={item} />)
}
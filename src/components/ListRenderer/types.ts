import React from 'react'

export interface IListRendererProps<T> {
  ComponentItem: React.ComponentType<{ data: T }>
  list: T[]
}
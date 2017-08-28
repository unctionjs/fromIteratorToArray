type IteratorType = {
  next: () => {
    value: null | mixed,
    done: boolean,
  },
}

const fromIteratorToArrayIterator = (list: Array<mixed>): Function => (iterator: IteratorType): Array<mixed> => {
  const {value, done} = iterator.next()

  if (done) {
    return list
  }

  return fromIteratorToArrayIterator([...list, value])(iterator)
}

export default function fromIteratorToArray (iterator: IteratorType): Array<mixed> {
  return fromIteratorToArrayIterator([])(iterator)
}

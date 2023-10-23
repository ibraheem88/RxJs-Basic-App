import { combineProps } from 'rx-react-container'
import { Subject, merge, map, scan, startWith, withLatestFrom } from 'rxjs'

export const controller = () => {
    const onAdd = new Subject()
    const onMinus = new Subject()
    const onAddStep = new Subject()
    const onMinusStep = new Subject()

    const step = merge(
        onAddStep.pipe(map(() => +1)),
        onMinusStep.pipe(map(() => -1))
    ).pipe(
        scan((acc, cur) => acc + cur, 0),
        startWith(0)
    )

    const count = merge(
        onAdd.pipe(map(() => +1)),
        onMinus.pipe(map(() => -1))
    ).pipe(
        withLatestFrom(step),
        scan((acc, [a, s]) => acc + a * s, 0),
        startWith(0)
    )

    return combineProps(
        { count, step },
        { onAdd, onMinus, onAddStep, onMinusStep }
    )
}
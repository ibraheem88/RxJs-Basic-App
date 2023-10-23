import { combineProps } from 'rx-react-container'
import { Subject, merge, map, scan, startWith, withLatestFrom, debounce, debounceTime } from 'rxjs'

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

export const directionController = () => {
    const onUp = new Subject()
    const onDown = new Subject()
    const onLeft = new Subject()
    const onRight = new Subject()

    const direction = merge(
        onUp.pipe(map(() => Direction.Up)),
        onDown.pipe(map(() => Direction.Down)),
        onRight.pipe(map(() => Direction.Right)),
        onLeft.pipe(map(() => Direction.Left))
    )

    const direction_reset = direction.pipe(
        debounceTime(2000)
    )

    const current_direction = merge(
        direction,
        direction_reset.pipe(map(() => null))
    ).pipe(
        scan((acc, cur) => {
            if (cur === null) {
                return []
            }
            return acc.concat(cur)
        }, []),
        startWith([])
    )

    return combineProps(
        { current_direction },
        { onUp, onDown, onLeft, onRight }
    )
}
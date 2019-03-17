import {
    MOVE_DISK,
    JUDGE_WINNER,
} from './action'

const initialState = {
    disks: [{ id: 1, position: 0 }, { id: 2, position: 3 }, { id: 3, position: 6 }],
    winner: false
}

function disks(state = initialState, action) {
    switch (action.type) {
        case MOVE_DISK:
            return {
                ...state,
                disks: state.disks.map((diskItem) => {
                    console.log(diskItem)
    
                    if (diskItem.id == action.disk.id) {
                        console.log(action.disk.id)
                        console.log(action.disk.position)
                        return {
                            id: action.disk.id,
                            position: action.disk.position
                        }
                    }
                    // console.log(diskItem)
                    return diskItem
                })
            }


        case JUDGE_WINNER:
            let gameOver = (state.disks[0].position === 2) && (state.disks[1].position === 5) && (state.disks[2].position === 8)
            return {
                ...state,
                winner: gameOver
            }
        default:
            return state
    }
}

export default disks
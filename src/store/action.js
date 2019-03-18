export const MOVE_DISK = 'MOVE_DISK'
export const JUDGE_WINNER = 'JUDGE_WINNER'
export const RECORD_STEP = 'RECORD_STEP'
export const RESET_GAME = 'RESET_GAME'

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export function moveDisk(disk) {
  return { type: MOVE_DISK , disk }
}

export function judgeWinner() {
  return { type: JUDGE_WINNER  }
}

export function recordStep() {
  return { type: RECORD_STEP  }
}

export function resetGame() {
  return { type: RESET_GAME  }
}

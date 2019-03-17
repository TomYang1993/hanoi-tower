export const MOVE_DISK = 'MOVE_DISK'
export const JUDGE_WINNER = 'JUDGE_WINNER'


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

export function judgeWinner(index) {
  return { type: JUDGE_WINNER, index }
}


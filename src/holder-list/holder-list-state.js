import { connect } from 'react-redux'
// import { moveDisk } from '../store/action'
// import Disk from '../disk/disk-component'
import HolderList from './holder-list-component'

const mapStateToProps = state => {
    return {
        state : state}
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onMoveClick: id => {
//             dispatch(moveDisk({ id: ownProps.id, position: 8 }))
//         }
//     }
// }

const HolderListState = connect(
    mapStateToProps,
    // mapDispatchToProps
)(HolderList)

export default HolderListState
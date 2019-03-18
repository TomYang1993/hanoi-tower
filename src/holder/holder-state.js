import { connect } from 'react-redux'
// import { moveDisk } from '../store/action'
// import Disk from '../disk/disk-component'
import Holder from './holder-component'

const mapStateToProps = (state, ownProps) => {
    return {
        state: state,
        position: ownProps.position
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onMoveClick: id => {
//             dispatch(moveDisk({ id: ownProps.id, position: 8 }))
//         }
//     }
// }

const HolderState = connect(
    mapStateToProps,
    // mapDispatchToProps
)(Holder)

export default HolderState
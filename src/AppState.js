import { connect } from 'react-redux'
import { resetGame } from './store/action'
// import Disk from '../disk/disk-component'
import App from './App'

const mapStateToProps = state => {
    return {
        state : state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(resetGame())
        }
    }
}

const AppState = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppState
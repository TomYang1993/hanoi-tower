import React from 'react';
import './holder.css'
import { ItemTypes } from '../constants/draggable';
import { DropTarget } from 'react-dnd';
import { moveDisk, judgeWinner, recordStep } from '../store/action'

const holderTarget = {

    canDrop(props, monitor) {
        let selectedDisk = monitor.getItem();

        for (let disk of props.state.disks) {
            if (disk.position === props.position) {
                return false;
            }
        }

        let droppableContainer = [];
        for (let i = 0; i < 9; i++) {
            droppableContainer.push(i);
        }

        for (let disk of props.state.disks) {
            if (droppableContainer.indexOf(disk.position) >= 0) {
                droppableContainer.splice(droppableContainer.indexOf(disk.position), 1);
            }
        }
        console.log(droppableContainer)

        droppableContainer = droppableContainer.filter(position => {
            if (position < 6) {
                return !checkEmpty(position + 3, props.state.disks)
                    && checkOverlap(position, props.state.disks, selectedDisk)
                    && checkGravity(position, props.state.disks, selectedDisk);
            }
            return true
        })

        if (droppableContainer.indexOf(props.position) >= 0) {
            return true
        } else {
            return false
        }

    },

    drop(props, monitor) {
        let selectedDisk = monitor.getItem();
        // console.log(selectedDisk)
        // console.log(props)
        props.dispatch(moveDisk({ id: selectedDisk.diskId, position: props.position }))
        //   moveKnight(props.x, props.y);
        props.dispatch(judgeWinner())
        props.dispatch(recordStep())
    }
};

function checkEmpty(position, disks) {
    for (let disk of disks) {
        if (disk.position === position) {
            return false;
        }
    }
    return true;
}

function checkOverlap(position, disks, selectedDisk) {
    if (!checkEmpty(position + 3, disks)) {
        if (getIdByPosition(position + 3, disks) < selectedDisk.diskId) {
            return false;
        }
    }
    return true;
}

function getIdByPosition(position, disks) {
    for (let disk of disks) {
        if (disk.position === position) {
            return disk.id;
        }
    }
}

function getPositionById(id, disks) {
    for (let disk of disks) {
        if (disk.id === id) {
            return disk.position;
        }
    }
}

function checkGravity(position, disks, selectedDisk) {
    let currentPosition = getPositionById(selectedDisk.diskId, disks);

    return !(currentPosition - 3 === position);
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

function renderOverlay(color) {
    return (
        <div style={{
            position: 'absolute',
            top: 5,
            left: 0,
            height: 0,
            width: 0,
            zIndex: 2,
            opacity: 0.5,
            borderTop: '30px solid transparent',
            borderBottom: '30px solid transparent',
            borderLeft: '30px solid',
            borderLeftColor: 'linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )'
        }} ></div>
    );
}


function Holder({ children, connectDropTarget, isOver, canDrop, position }) {


    return connectDropTarget(
        <div className="holder">
            <div >
                {children}
            </div>
            {canDrop && renderOverlay('yellow')}
           
        </div>
        );
    }
    
    export default DropTarget(ItemTypes.DISK, holderTarget, collect)(Holder);
    

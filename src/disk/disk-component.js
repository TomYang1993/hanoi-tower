import React from 'react';
// import './disk.css'
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants/draggable';

const diskSource = {
    canDrag(props) {
        if (props.id > 1) {
            let currentDisk = props.state.disks.filter(item => item.id === props.id)
            let currentPosition = currentDisk[0].position;
            return checkEmpty(currentPosition - 3, props.state.disks);
        }
        return true;
    },

    beginDrag(props) {
        return {
            diskId: props.id
        };
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

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function Disk({ id, onMoveClick, connectDragSource, isDragging, state }) {

    let diskStyle;
    switch (id) {
        case 1:
            diskStyle = {
                width: '40%',
                height: '55px',
                backgroundImage: 'linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )',
                margin: 'auto',
                borderRadius: '3px',
                zIndex: 1
            }
            break;
        case 2:
            diskStyle = {
                width: '53%',
                height: '55px',
                backgroundImage: 'linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )',
                margin: 'auto',
                borderRadius: '3px',
                zIndex: 1

            }
            break;
        case 3:
            diskStyle = {
                width: '65%',
                height: '55px',
                backgroundImage: 'linear-gradient( -45deg, #5d5d5d 0%, #3f3f3f 27%, #1c1c1c 87% )',
                margin: 'auto',
                borderRadius: '3px',
                zIndex: 1

            }
            break;
        default:
            break;
    }

    diskStyle.opacity = isDragging ? 0.5 : 1;

    return connectDragSource(
            <div style={diskStyle} onClick={() => onMoveClick(id)}>
            </div>
    );
}


export default DragSource(ItemTypes.DISK, diskSource, collect)(Disk)

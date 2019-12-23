import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h3 onMouseOver={incrementCount}>Hovered {count} times</h3>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter);
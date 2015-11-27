import React from 'react';
import Sidebar from './sidebar';
import Content from './content';

class Main extends React.Component {
    render() {
        return (
            <div className='row'>
                <Sidebar {...this.props} />
                <Content {...this.props} />
            </div>
        );
    }
};

export default Main;

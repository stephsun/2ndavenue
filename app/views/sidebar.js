import React from 'react';

const menuItems = [
    ['#price', 'Price'],
    ['#country', 'Country'],
    ['#', 'Example2'],
    ['#', 'Example3'],
    ['#', 'Example4']
];

class Sidebar extends React.Component {
    render() {
        return (
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                <div id='sidebar'>
                    <h1>Example1</h1>
                    <ul>
                        {menuItems.map((item) => {
                            return (
                                <li key={ menuItems.indexOf(item) }>
                                    <a href={ item[0] }>{ item[1] }</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Sidebar;

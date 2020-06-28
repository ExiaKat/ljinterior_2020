import React, { Component } from 'react';
import Mansonry from './Masonry';
import categories from '../data/columnHelper';

class Projects extends Component {
    render() {
        return categories.map(
            (category, index) => (
                <Mansonry key={category.name} category={category} categoryIndex={index} onClose={this.props.onClick} />
            )
        );
    }

    componentDidMount() {
        this.props.showProjects();
    }
}

export default Projects;
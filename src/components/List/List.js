import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js'

class List extends React.Component{
	static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
	imageSrc: PropTypes.string,
	columns: PropTypes.array,
  }
  
  static defaultProps = {
	children: <p>I can do all the things!!!</p>, 
  }
  
	render(){
		return (
			<section className={styles.component}>
				<Hero titleText={this.props.title} src={this.props.imageSrc}/>
				<div className={styles.description}>
					{this.props.children}
				</div>
				<div className={styles.columns}>
					<Column titleColumn = {this.props.columns[0]}/>
					<Column titleColumn = {this.props.columns[1]}/>
					<Column titleColumn = {this.props.columns[2]}/>
				</div>
			</section>
		)
	}
}

export default List;
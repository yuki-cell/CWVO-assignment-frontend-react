import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Task } from './Types'
import TaskListItem from './TaskListItem'
import App from '../App';


interface TaskListProps {
  app: App
}

class TaskList extends React.Component<TaskListProps, any> {
  constructor(props: TaskListProps) {
    super(props)
  }

  render() {
    return (
      <List>
        { this.props.app.state.filtered_tasks.map( (task: Task) => (
            <TaskListItem  key={task.id}　app={this.props.app} task={task} />
          )) }
       </List>
     )
   }

}

export default TaskList;
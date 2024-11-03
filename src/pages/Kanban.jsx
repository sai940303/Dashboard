// src/components/Kanban.js
/*import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import the HTML5 backend
import { kanbanGrid, kanbanData } from '../data/dummy';
import { Header } from '../Component';

const ItemType = {
  TASK: 'task',
};

const KanbanTask = ({ task, index, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.TASK,
    item: { index, taskId: task.Id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-white p-2 mb-2 rounded-md shadow ${isDragging ? 'opacity-50' : ''}`}
      style={{ backgroundColor: task.Color }}
    >
      <h4>{task.Title}</h4>
      <p>{task.Summary}</p>
    </div>
  );
};

const KanbanColumn = ({ column, tasks, moveTask }) => {
  const [, drop] = useDrop({
    accept: ItemType.TASK,
    drop(item) {
      moveTask(item.index, column.keyField);
    },
  });

  return (
    <div ref={drop} className="bg-gray-200 p-4 rounded-md w-1/4 mr-4">
      <h3 className="font-bold">{column.headerText}</h3>
      {tasks.map((task, index) => (
        <KanbanTask key={task.Id} index={index} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
};

const Kanban = () => {
  const [tasks, setTasks] = useState(kanbanData);

  const getTasksByStatus = (status) => tasks.filter((task) => task.Status === status);

  const moveTask = (fromIndex, toStatus) => {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks.splice(fromIndex, 1)[0]; // Remove task from original position
    taskToMove.Status = toStatus; // Update status
    updatedTasks.push(taskToMove); // Add task to the end
    setTasks(updatedTasks); // Update state
  };

  return (
    <DndProvider backend={HTML5Backend}> 
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="Kanban" />
        <div className="flex">
          {kanbanGrid.map((column) => (
            <KanbanColumn
              key={column.keyField}
              column={column}
              tasks={getTasksByStatus(column.keyField)}
              moveTask={moveTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Kanban;
*/

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {kanbanData} from '../data/dummy'

const ItemType = 'CARD';

// Card Component for individual tasks
const TaskCard = ({ task, index, moveTask, status }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: 16,
        margin: '8px 0',
        backgroundColor: isDragging ? 'lightgreen' : '#fff',
        border: '1px solid #ccc',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <strong>{task.Title}</strong>
      <p>{task.Summary}</p>
    </div>
  );
};

// Column Component for each Kanban column
const Column = ({ column, tasks, moveTask, status }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => {
      if (draggedItem.status !== status) {
        moveTask(draggedItem.index, status, draggedItem.status);
        draggedItem.status = status;
      }
    },
  });

  return (
    <div
      ref={drop}
      style={{
        width: '250px',
        padding: '10px',
        backgroundColor: '#f4f4f4',
        minHeight: '400px',
        margin: '0 20px',
      }}
    >
      <h3>{column.headerText}</h3>
      {tasks.map((task, index) => (
        <TaskCard key={task.Id} task={task} index={index} moveTask={moveTask} status={status} />
      ))}
    </div>
  );
};

// Main KanbanBoard component
const KanbanBoard = () => {
  const [tasks, setTasks] = useState(kanbanData);

  const moveTask = (taskIndex, toStatus, fromStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.Status === fromStatus && tasks.indexOf(task) === taskIndex) {
        return { ...task, Status: toStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const columns = [
    { headerText: 'To Do', keyField: 'Open' },
    { headerText: 'In Progress', keyField: 'InProgress' },
    { headerText: 'Testing', keyField: 'Testing' },
    { headerText: 'Done', keyField: 'Close' },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {columns.map((column) => (
          <Column
            key={column.keyField}
            column={column}
            tasks={tasks.filter((task) => task.Status === column.keyField)}
            moveTask={moveTask}
            status={column.keyField}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;

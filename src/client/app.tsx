// src/client/App.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { TaskManager } from './components/TaskManager';

const App: React.FC = () => {
    return (
        <div>
            <TaskManager />
        </div>
    );
};

// Make sure the app is mounted to the 'root' div in index.html
ReactDOM.render(<App />, document.getElementById('root'));

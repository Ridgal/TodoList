import { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Todolist } from '../components/Todolist';
import { TodoFilter } from '../components/Filter';

import { ITodo } from '../interfaces';

import './App.css';


const App:React.FC = () => {

  const getLocalTodos = () => {
    let tasks = localStorage.getItem('todos');
    if (tasks) {
      return JSON.parse(localStorage.getItem('todos') || "")
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState<ITodo[]>(getLocalTodos());
  const [status, setStatus] = useState<string>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);

  return (
    <Container>
      <div className="App">
        <section className='todoapp'>
          <Header todos={todos} setTodos={setTodos} status={status} />
          <Todolist todos={todos} status={status} setTodos={setTodos}/>
          {!!todos.length ? <TodoFilter status={status} todos={todos} setTodos={setTodos} setStatus={setStatus} /> : null}
        </section>
        <Footer />
      </div>
    </Container>
  );
}

export default App;

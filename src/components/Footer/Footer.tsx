import './Footer.scss';

const Footer:React.FC = () => {
  return ( 
    <footer className="info">
      <p>Created by Ridgal</p>
      <p>Source on <br />
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://github.com/Ridgal/TodoList" >
            Github
        </a>
      </p>
    </footer>
  )
};

export { Footer };
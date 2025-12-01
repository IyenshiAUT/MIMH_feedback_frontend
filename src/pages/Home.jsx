import ProjectSelector from '../components/ProjectSelector/ProjectSelector';

function Home({ selectedProject, onProjectChange }) {
  return (
    <div className="container">
      <ProjectSelector selectedProject={selectedProject} onProjectChange={onProjectChange} />
    </div>
  );
}

export default Home;

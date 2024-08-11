
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputTask from '../components/InputTask';

const Home = () => {
  return (
    <div className="flex justify-center mt-20 h-full">
      <Link to='/login'>
        <Button />
      </Link>
      <InputTask />
    </div>
  );
}

export default Home
import chefLogo from './src/assets/Chef.png';

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt='chef' className='chef-logo' />
      <h1>Chef Claude</h1>
    </header>
  );
}

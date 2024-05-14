import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Yuriy' };

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your accounts and transactions in one place efficiently."
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  );
};

export default Home;

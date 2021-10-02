// import logo from './logo.svg';
import './App.css';
import Section from './Section/Section';
import Title from './Title/Title';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';
import Transaction from './Transactions/Transactions';

import user from '../data/user.json';
import statsData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transArr from '../data/transactions.json';
import { refs } from '../data/refs';

function App() {
  return (
    <>
      <Section>
        <Title title={refs.profileSectionTitle}/>
        <Profile users={user}/>
      </Section>

      <Section>
        <Title title={refs.statsSectionTitle}/>
        <Statistics items={statsData}/>
      </Section>

      <Section>
        <Title title={refs.friendsSectionTitle}/>
        <Friends items={friends}/>
      </Section>

      <Section>
        <Title title={refs.transSectionTitle}/>
        <Transaction items={transArr}/>
      </Section>
    </>
  )
};

export default App;

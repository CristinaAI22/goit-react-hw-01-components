import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />
      <FriendList title="Friends List" friends={friends} />
      <TransactionHistory title="Transactions" items={transactions} />
    </div>
  );
};

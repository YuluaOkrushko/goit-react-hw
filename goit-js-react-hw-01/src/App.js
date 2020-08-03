import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendsList/FriendList";
import Transactions from "./Transaction-history/TransactionHistory";
import statistic from "./Statistics/statistical-data.json";
import user from "./Profile/user.json";
import friends from "./FriendsList/friends.json";
import transactions from "./Transaction-history/transactions.json";

function App() {
  return (
    <div>
      <Profile
        imageUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statistic} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;

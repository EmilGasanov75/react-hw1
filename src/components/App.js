import User from "./User/User";
import user from "./User/user.json";
import Uploads from "./Uploads/Uploads";
import uploads from "./Uploads/uploads.json";
import Friends from "./Friends/Friends";
import friends from "./Friends/friends.json";
import Transactions from "./Transactions/Transactions";
import transactions from "./Transactions/transactions.json";

function App() {
  return (
    <div className="App">
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Uploads
      stats={uploads.stats}
      />
      <Friends
      array={friends}
      />
      <Transactions
        log={transactions}
      />
    </div>
    
  );
}

export default App;

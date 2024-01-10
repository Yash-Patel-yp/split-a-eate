import "./App.css";

const initialFriends = [
  {
    id: 118826,
    name: "Ajay",
    image: "",
    balance: -7,
  },
  {
    id: 933372,
    name: "Prakash",
    image: "",
    balance: 99,
  },
  {
    id: 499476,
    name: "Shreya",
    image: "",
    balance: 44,
  },
];

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div>
      <FriendsList />
      {showAddFriend && <FormAddFriend />}
      <Button onClick={handleShowAddFriend}>Add Friend</Button>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <div>
      <li>{friend.name}</li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}💴
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}💴
        </p>
      )}
      {friend.balance === 0 && <p>you and {Math.abs(friend.name)} are even</p>}

      <Button>Select</Button>
    </div>
  );
}

function FormAddFriend() {
  return (
    <form>
      <label>Friend name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form>
      <h2>Split a bill with</h2>
      <label>BIll Value</label>
      <input type="text" />
      <label>Your Expense</label>
      <input type="text" />
      <label>X' Expense</label>
      <input type="text" disabled />

      <label>who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}

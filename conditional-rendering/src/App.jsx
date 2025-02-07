import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Igor"/>
      <UserGreeting isLoggedIn={true} />
    </>
  );
}
 
export default App

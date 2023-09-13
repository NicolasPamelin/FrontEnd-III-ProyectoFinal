import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/global.context";

const Home = () => {
  const { themeState, apiState } = useDentistStates();

  return (
    <main className={themeState.theme ? "App" : "dark"}>
      <h1>Home</h1>
      <div className="card-grid">
        {apiState.dentistList.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

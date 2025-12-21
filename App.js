import { migrateDbIfNeeded } from "./database/initDatabase";
import { SQLiteProvider } from "expo-sqlite";
import Navigation from "./navigation/StackNavigator";

export default function App() {
  return (
    <SQLiteProvider databaseName="maDB.db" onInit={migrateDbIfNeeded} >
      <Navigation />
    </SQLiteProvider>
  );
}

export async function migrateDbIfNeeded(db) {
  const DATABASE_VERSION = 1;
  console.log("Database démarrer cool");

  //  lire la version actuelle
  const result = await db.getFirstAsync("PRAGMA user_version");
  const currentVersion = result.user_version;

  //  si déjà à jour → rien à faire
  if (currentVersion >= DATABASE_VERSION) {
    return;
  }

  //  première création de la DB
  if (currentVersion === 0) {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);
  }

  //  mettre à jour la version
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

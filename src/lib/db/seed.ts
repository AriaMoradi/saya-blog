// Run 'node src/lib/db/seed.js'
import openDb from '@/lib/db/db';

async function setup() {
    // Open SQLite connection
    const db = await openDb();

    // Define table schema
    await db.exec(`
    CREATE TABLE posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  
      title TEXT,
      content TEXT  
    );
  `);

    // Close connection
    await db.close();
}

setup().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.message);
});

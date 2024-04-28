import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open SQLite database connection
export default async function openDb() {
    return open({
        filename: './db.sqlite3',
        driver: sqlite3.Database,
    });
}

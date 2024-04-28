import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function openDb() {
    return open({
        filename: './db.sqlite3',
        driver: sqlite3.Database,
    });
}

async function setup() {
    const db = await openDb();

    const sql = fs.readFileSync(__dirname + '/database.sql').toString()
    await db.exec(sql);

    await db.close();
}

setup().catch((err) => {
    console.error(err.message);
});

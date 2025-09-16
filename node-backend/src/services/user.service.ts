import { pool } from "../config/db";
import { User } from "../models/user.models";

const getUser = async (table: string): Promise<User[]> => {
  const rows = await pool.query(`Select * from ${table}`);
  return rows["rows"];
};
const getUserById = async (id: number, table: string): Promise<User | null> => {
  const { rows } = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
  const user = (rows as User[])[0];
  return user || null;
};

const createUser = async (
  user: Omit<User, "id">,
  table: string
): Promise<void> => {
  await pool.query(`INSERT INTO ${table} (name, email) VALUES ($1, $2)`, [
    user.name,
    user.email,
  ]);
};

const UpdateUser = async (
  id: number,
  user: Omit<User, "id">,
  table: string
): Promise<void> => {
  await pool.query(`UPDATE ${table} SET name = $1, email = $2 WHERE id = $3`, [
    user.name,
    user.email,
    id,
  ]);
};

const DeleteUser = async (id: number, table: string): Promise<void> => {
  await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
};

const userService = {
  getUser,
  getUserById,
  createUser,
  UpdateUser,
  DeleteUser,
};
export default userService;

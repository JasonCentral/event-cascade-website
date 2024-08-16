import { atom } from "nanostores";

type Interval = "monthly" | "yearly";
const $intervalStore = atom<Interval>("monthly");

export { $intervalStore };

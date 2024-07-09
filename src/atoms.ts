import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark", // unique
    default: true,
});

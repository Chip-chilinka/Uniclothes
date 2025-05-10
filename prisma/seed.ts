/** @format */

import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "email@gmail.com",
        password: hashSync("123123", 10),
        role: "USER",
        verified: new Date(),
      },
      {
        fullName: "Admin",
        email: "email2@gmail.com",
        password: hashSync("1231232", 10),
        role: "ADMIN",
        verified: new Date(),
      },
    ],
  });
}

async function down() {}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

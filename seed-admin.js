const bcrypt = require("bcryptjs");

async function main() {
    const password = "Velora@123";
    const hash = await bcrypt.hash(password, 10);

    console.log("Senha original:", password);
    console.log("Hash gerado:", hash);
}

main();

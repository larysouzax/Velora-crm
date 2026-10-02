import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export type TokenPayload = {
    userId: string;
    email: string;
    role: string;
};

export async function creatToken(payload: TokenPayload) {
    return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("7d") /*login expira em 7 dias*/
    .sign(secret);
}

export async function verifyToken(token: string) {
    const { payload } = await jwtVerify(token, secret);

    return payload as TokenPayload;
}

"use client"
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

export default function Providers({ session, children }: { session: Session | null, children: React.ReactNode }) {
    return (
        // @ts-expect-error - Known issue with Auth.js v5 + React 19 type definitions
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
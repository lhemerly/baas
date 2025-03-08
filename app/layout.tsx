import { getSession } from "@/utils/GetSession"
import Providers from "@/components/auth/Provider"
import "./globals.css"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getSession()

    return (
        <html lang="en">
            <body>
                <Providers session={session}>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
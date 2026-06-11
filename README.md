# Portfolio Multi-Page Website

## 🚀 Setup & Installation
1. **Initialize Project:** Run `npx create-next-app@latest my-portfolio-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
2. **Install Icons:** Run `npm install lucide-react`
3. **Copy Files:** Replace the generated `src` folder with the code provided in this package.
4. **Run Dev Server:** Execute `npm run dev` and navigate to `http://localhost:3000`.

## 🛡️ Security Implementations (Level-100)
- **XSS Protection:** Implemented via `middleware.ts` setting Content-Security-Policy (CSP) headers. React DOM automatically escapes variables rendered in JSX (e.g., in the Contact form).
- **CSRF Protection:** Next.js handles cross-site request forgery natively in API routes and Server Actions. Our middleware restricts cross-origin framing.
- **Session Management:** Though a static mock app, real implementation would use NextAuth.js configured with HTTP-only, Secure, SameSite=Lax cookies.
import { signIn } from 'next-auth/react'

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('credentials')}>Sign in</button>
    </div>
  )
}

export default LoginPage

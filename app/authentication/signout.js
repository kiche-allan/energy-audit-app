import { signIn } from 'next-auth/react'

function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => signIn('credentials')}>Register</button>
    </div>
  )
}

export default RegisterPage

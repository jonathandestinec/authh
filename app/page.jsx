'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p className=' font-mono text-blue-500'>{user.email ? user.email : "You signed in with a provider that does not give direct access to your email"}</p>
        <p className=' mt-10'>With these information, we can look for the user in the database and return personalized results</p>
        
        <p className=' mt-10'>For example, if you signed in with github, and we can't find your email in the db, we'll just return a message telling you that this user does not exist in our db. So,, you have to set up this new profile.</p>

        <p className=' mt-10'>You just basically signed up, and this time, your email has not been set by default (because of the provider you used). <br /> So you have to manually add an email to your account</p>
        <br />
        <a className=' font-mono underline text-red-500' href="/api/auth/logout">Signout</a>
      </div>
    ) : (
      <div>
        <p>Oops, bruhh. You gotta login first to view this page</p>
        <a className=' font-mono underline text-green-500' href="/api/auth/login">Signin</a>
      </div>
    )
  );
}
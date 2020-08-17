import React, { FC } from 'react';
import SocialCard from './components/social-card';

const dummyUser: User = {
  id: '90a031ae-0a3d-4a6b-9035-bb808623ce06',
  name: 'Kris Maini-Thorsen',
  avatarUrl:
    'https://media-exp1.licdn.com/dms/image/C4E03AQEYUre8Y3_GCA/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=Ve8ndY5Qz_YoyNWtsYavbsiSCqtwhLXd1w-aOK7loH8',
  roles: [
    'Frontend developer',
    'App developer',
    'Fullstack javascript developer',
  ],
  phoneNumber: '+4528414527',
  displayName: 'Kris',
  email: 'mainikris@gmail.com',
};

const App: FC = () => {
  return (
    <div>
      <h1>Dixa code challenge</h1>
      <SocialCard user={dummyUser} />
    </div>
  );
};

export default App;

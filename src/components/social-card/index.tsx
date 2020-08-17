import React, { FC } from 'react';
import Avatar from '../avatar';

interface Props {
  user: Optional<User>;
}

const SocialCard: FC<Props> = (props) => {
  const {
    user,
    ...otherProps
  } = props;

  return (
    <div {...otherProps}>
      <Avatar user={user} />
    </div>
  );
};

export default SocialCard;

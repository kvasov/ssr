import React from 'react';
import classNames from 'classnames';

import Image from 'core/components/Image';
import TextBox from 'core/components/TextBox';
import Price from 'core/components/Price';

import './style.scss';

function ProductCard(props) {
  return (
    <div className={classNames(props.className, 'product-card')}>
      <Image src={props.data.imageUrl} width={200} height={200} />
      <TextBox text={props.data.title} />
      <Price price={props.data.price} />
    </div>
  );
}

export default ProductCard;

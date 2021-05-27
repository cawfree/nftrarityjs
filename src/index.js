import '@babel/polyfill';

import axios from 'axios';
import {parse} from 'node-html-parser';

// Returns the rank of a token from nftrarity.net.
export const nftRarityDotNet = async (collectionName, nftId) => {
  const g = collectionName.toLowerCase().replace(' ', '-');
  const url = `https://nftrarity.net/${g}?q=${nftId}`;
  const {data} = await axios({
    method: 'get',
    url,
  });
  const $ = parse(data);
  const x = $.querySelector('#collection-table');
  const y = x.querySelector('tbody');
  const [rank] = y.childNodes[1].innerText.trim().split(/(\s+)/);
  return `${rank}`;
};

# nftrarityjs
⚡🧸⚡ A collection of tools for comparing the 1337ness of an NFT.

### `nftrarity.net`

To fetch the rank of an NFT from `nftrarity.net`, just specify the `collectionName` and `nftId`:

```javascript
import {nftRarityDotNet} from 'nftrarityjs';

(async () => {
  const rank = await nftRarityDotNet('Arabian Camels', '7380');
  console.log(`This beautiful little fella is ranked #${rank}.`);
})();

```

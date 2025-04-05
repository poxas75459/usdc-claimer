/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "VGWs4etfLjoH2uCVf1TMsWgxUfWtY9Z47yY9xNrJ6rhE7ppQCZw9rffJWN3Pv4zFqcoXjkaejVWi1n4bWRN3ZdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "292MA3RiyGtWhyQ3RLrTTyJFu8ccorZEp6e8CCS4KEhaF4RTrdh1YqrhTtWq1GgVwcQ6hWNNPQwZUeeXgnHu8ere",
  "key1": "2JtKTNEPxC9T5gWS8AySHTrefZUmt7JhfmzVs8SbuppCmR2sFgzTsYE8NDM45d9ff6m6PNR41onWgja2iZXjbZH",
  "key2": "3NVxkZDqHu2TSvRueHLx3YTP9XbX1EDCe5iMd3LNmXFsUfRRx1i12xLkj4VyoctCdTRTr3bHUXU9TLZBjUJ5jefe",
  "key3": "bdJZWRcS1T2akd2SPiqRBL7HLpeqKPsJx9ZprDwR6J3r8nKa8o1V56rwKBdWyTqbntwfaRHwFP2LTkdjsArjY1f",
  "key4": "4aZEJiG4tVDtU4JoyGhCXfaojjCC5pZuLgSev5mtmUg7S9Aftvfya4RnrAeAEbPNeLmxQi7pJkgYVGo1XMRxaKAJ",
  "key5": "2D3eSQY8s6tthrawWkfY966vXE4K6wU8WH3iAd6a4zsaqU2FyxdXfNB8zuPCqhgdr1DaWJgn1VmBVGoVbSdBhJDe",
  "key6": "xrKWjkfWHvTt5o7FcCyLdsjophjN2kUzwKBBWmirwwdQqrBqw3iASnhqHDzUWKEkc4vHmmQHzbAbz6XyLDAoq7x",
  "key7": "4ubwuapE5c6Cvmd5nsDZMTuYsmzEBH4QUkXyLVJY3AnS1GmwY6ZFiHLFP76LK5PpLr2W9H87LryqyG8CkkGHbDiR",
  "key8": "wgcimTg8Qv1uviU7ZeHrX5zwgeyaMr1gFaLidx3Joj7MfXsLiWcbLr48GHor5o4LMUP1rsSUCde2iNBBL4ZPWNk",
  "key9": "gLa3fsvusJFrWWbb45NyYvMFEvZibjDDrtyLGbBtyR6Lw6quYym7VrSdfn9CZauJGzJEVMWyT8wwZrwttE5WdFT",
  "key10": "3kom9fE86n9Be2nB6tF9432AUpzVzseyBB1uUj4d5PDGpeKusSteMYqM2LGhvRCxEeYEaz4hGZKEDUNtP2DcKcCn",
  "key11": "42QJgzUeAJgQn1aNf98H2gkWdcFE7UJEAeTxU2nagvXZ27jkLKWWBpck7UxwXRJHoaAD6HfehXAdF9KzSAUjy6xX",
  "key12": "2Hb4j1XMtNJ5TGRtcDSG9SwR3MMhRiCHfmbVvmaTxjzcz8w5h9GXh2YXQAMHZaWVzS7aYGBa7LKg8jZ1oUbB8Daj",
  "key13": "4C3YfpnUnLeWjkYEhtXVKs7GcTLvWWJXrAG2DETJV9xchupH1gD6HoFnUD9pb4umm4MU33wTWQVagQrPBzhKjJa",
  "key14": "4Xit26sEK9U7miYvdf9G6se7X458PjJVVHzBCtkuc7vMnqmWyT4sofFme7YUUiM4fKYgZHaciGrCF3WXkypDJ4e9",
  "key15": "5b6uDUvgNyWZefXX1vMQDL9Ut2ewG1taMThJ5udYDeeCBwKexRrWjky5nA35jUPV7snUhPXjAMbFqLaeDmKr1bae",
  "key16": "43jbHNMXBh4kYe6YuLcvJndsKJagrLx6vQcvV1UX8oQNRUoHGuvSasFfVi1D1nazdqmodYmYSGpyzLnnaJhvWrvn",
  "key17": "Tu9yeEQYajPjkCAjy7BgGNTwFaPvmBZzVduRC5TZvpzFmv9Mca4FiUCAMsofkhS3feYJ4YpecuWjbhhWNQYhVhg",
  "key18": "2HwCq5DU8cXMQTAxcXYaE51yg7EmxKUSFCzJi6V2LhNZd17rwJY3n49XWHjWxVCre9HNEthx8wz3DXLb4y68dd6J",
  "key19": "LvrqfiLSJxuEtkqwQTNm7KcDozmgXzj2iwTyekkrfPxLCSXWPeewnz9wF5iCUjnkxt4NtzKQ4curTP6EhTgp4YA",
  "key20": "9Dvj2FNVK859jmzekKhuHGBnARg6CGvpP842S7BcAjp65ywUrenwoZQaqnaCSfTyvDvfi63g8aEV5xTjNwC1Tgx",
  "key21": "62BsWYgcXd2Vxs8uqgy1h1VNDukiWJM2o4WRwid61GVRdEBzhdAw9ojohvcHwVwAoN8t4ce1adqzTuWXNRftuz7Z",
  "key22": "3CatZVfZuoLCnDphQbP6GGuLQ31Fk3W8vDJpMnjkNMzkurn8PiR4WQNzorKn3TDFnyFBCJcmyT9DHQ7t7w1vABQP",
  "key23": "cQ47KgksygdWMob55Pr9xRW2rNLZMG1x3yc3PWh2S8Wc36tsSJMt6YBrc9HFbrmbqcKMogwkLwNU6K65mrpBFze",
  "key24": "2bYkpcdzoU7xMpbweHStoQkzfqueqyVCTDr1F5rz6a8bs1KNSg46pGj7btMMkxafM2nE8UQX8LQ9YYEWcgTXjzg7",
  "key25": "3Kesb7oRJYQLNtP6FTpNzjzKthVuMyQn4Y1J6SXukNCtY4ZGhzuRM9M2ydzP9WiuS2Lk59MYEZFDCzHWUgxxq1to",
  "key26": "5ezNqgpFxeyZfxThbzq4SEsgyhrd53GqJGvNGJAPGHi7saBXW27Lf5rbXR9iu1E3Shi3kxkvxBsRPuVB83Y7gLYu",
  "key27": "2PJzvo6YpRrEefiDDLLb97wXdnc9FW4MnAZ3RLVPVKxRUL3dMcyuGNP7bezfHVGVm7QRKjTkQjxbpSWdLP1AgTQz",
  "key28": "MAitrHzPFgFy2co96dYUvcFx1Rt7LcRFBTwMubhyfU3YV5ctLYGST1EwH8gmaNPePqEthPQyPzod9j8rAXbC5U6",
  "key29": "fUvH1k3Bho48g2hCuxA2jK74JGDqqktCV7NVrP9ZjfLH7Qb4jjWJWLpBSMbXALobqSk8wnLcKSTRM7nPCXZGWo9",
  "key30": "5bUsrcfyayjtQ876yxSYrhF4tktegPXfHCdevJWD5ykUvWZz8tkEzoFRWutXq7kovhwQDbV2sBwRi93RvfynAXpw",
  "key31": "2kB6cakFZUSXu8wsx4w7H2MCHzkM7Gw2trDD64wWXYeYo2eCTm6jBjbYHmE3pCrgLigtSko9XzoSxbskZm2LVAR4",
  "key32": "2zJpyqSHtt6Nc5nXpkquqyTX1w3jEbnWGPW7AVMszgxRSJAabKNDEp7f9k87qV5tWFnRyynZ7v3aAMLeryxnzYY7",
  "key33": "3XKP54ZdvAuVJSTMFqDDcsmdhvzERVXgXhwzL7WMwJAveymDqMF7GZGZXHr6zoa5Wr7gMERsMhCkJhoYEADvgGVz",
  "key34": "xwxVaKbaTmNbCUJtcki6QfEoT1CJ2vUbhS2zUtWQT47udRpGGs77HZ1KBQkBzq6dtZZ4haACwZaoSxmW5p59vf2",
  "key35": "5tJtBP45GZTqYUZV4gHrVYPLQ19H6xGQfyFHtAeXxdR5e4DXKm5Jk2AR4tsivPhxKVhnDQPpy87PNTaUhcJLChX7",
  "key36": "3nshejXvUhonMAZ8jBhg9rsH5Kdy1LnYyLjZHS7wA4pCD7kbSk9YHQfg7qeaypCeoTTEatYzi3TwU5CCFhUMDg1h",
  "key37": "5MNJjyWF9HzwQobfRNtRsfdK7CLGiNfmtcKGWkE3JQs8HUdVihfosinhaYKQinDjxw9mpvTWdHWWg14EDbgdQgQH",
  "key38": "4RVHEr3QyYMGDdaRmfNFgVvz7gnypY6yBSCxs3RFUN6c4jRT2tS5Da3Gf2dHe3aqu39BjBJhDjbvzhxgZiEtJGay",
  "key39": "4ip6QWoTCBPTqhGsFyTD6kggHid5v6VwdYvgcGj2U39fitS68JSukGuVHZdEgMXscSHF8s19hBzoEif6Gb7MZrXZ",
  "key40": "3rAWvqkv3ruQ9TAJmZ1vH7DwqibMLFm4LcChPoyUS7aEkznCo9JqPAcWeZYEuuYhPJdixLffUC2zzMYfz38gJK15",
  "key41": "2idfAJxLHNJ872RoqWsZBQ9ywTQa2HoBAjSwYkFornWAaJ6fE2JXPx9ZUJYHx3vbNsKMrS9JmNudnhbPdy2o3Gf6",
  "key42": "3i8bLarvfk1TipvdCDZHFqWTYMJgPJQbZnWy9gFdqwp9RvwUc8VuK8wUzEGERHVQd8bkYRiN7aorvM2x2isFBBpN",
  "key43": "3EWLXyTxi9pnAyLRPakhWwCfT2cv45AxcZpkV3kdxLuy3qHks1fHo8BmtyR23fEaJtUTVkzedX9pMBoWdNQFuLZv",
  "key44": "tDNDAKv91CTbYzUXEKRwADTYWd61AgpvpBzsffVvQS14zXSXPp6o1j5J5yiceMsXiEnALat6bZSmW6FqM2Bw1uj",
  "key45": "2A6928SbtefyzLR9aZ73tQ9ZN5bMiqZx4rrZVpQqwgKZJR3CuPJwcaf9d5XffPdeZgzpZnzVGix5mZs9qhjpJz75",
  "key46": "3Um7SDVpuU9Krx2JidjZgjNHY249RjEAg6SAWwfEMVYptfKeit5A3QkoY9fF691R8PMQqsMDZhRaUzTw1TPCMndu",
  "key47": "3RUxkpwfMkvrJYRAGKCp8NDHz6wRjeS21j9oUqpEv5CtJJ588LYckw5ZGmDnFjUVt5LBXJKmVTiWwQaoj2dQbS96",
  "key48": "9WKsM88L4GXznF5es8BWYQWXfcKwNtt4gDp7Z2NXP8Zr1wAoCsF2UbswTNgYkEwiC8iGFEeZYZgXnEqrWJ4XttR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

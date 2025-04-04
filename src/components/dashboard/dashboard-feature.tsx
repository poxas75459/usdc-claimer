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
    "3s3Fv3uicgxBAnh6ALtgsT98g5KDpYcZoeGswE97ibdx49ShF4bN5myzpyx7Jnix3utqLL6d3p7keXRzWAWNRdMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gr9PxaYocCnV6CWZuLtXGfUJvHAPTSrGsh89vbALedqoEUQTo3AnK8xv2UPb4T4Y8B6b7g3yeswHNx39HjLBHQk",
  "key1": "67RNj3jeg6c8thNs5amHagdMGpd2GPmUFSG5EmMVQfABfdpz19jM7cy5w3mTbLxY71j4k7UqD3Xo4Fkg27YNeAeF",
  "key2": "3e9cZ14wsndai2a3Cm5oZy7S5ksRE8dtPd5cMwQh6nB8JVfDWbZmziSTTwFjVdojHLn9pbRQKfpNmAt6aPBwejZC",
  "key3": "33nVMnsXuDZPtXyMm7hVLKVn1BYkS9Enasg2WqzZoJeMGUC7S24j5DT8U15x5uGjEtybRivqMPnCsaWcVT4v87ky",
  "key4": "4r6pNwFKW1dCTrcLL5mw4key3791M2afx5HdfMWnRjUGAibaTsKAfwbpuFD3EwQxteVoCTbebmYL9jXS7rTjKdvx",
  "key5": "2vfHKHv99mvME4oRowMvigfPhefz9U9NMPYnZ2fbDpz4WnFayZEj3VMbWBjXmHeBeRRyVVs4stRjpfzGEJMvxmZV",
  "key6": "pqd8xYYtAPg416nRyGnuJcRYFDUjRWrSuPoboaMrwZvvt5ZA9BDJCsLdeSu6SfcLxu5dAYdojDJLgr33got1PHQ",
  "key7": "hyQv8k54Q51SJPZ9Ygpina5ALemh9JavimDcpdhbmfbZwpD8bLwFTZUFJTTYeA4gT7TzgZwiRi4ivgxCWB2NZa3",
  "key8": "46jyMJsEyMwjCE7zBqTtzHcoS8nHcz6LgKfjsY37yNtQK5SZHHT3v5kpzc9NU188Z2KjetHx7NmLcDLa55dGqwqZ",
  "key9": "2ooD1yf9vi8W9GnH71LYvtm4facbe4k2aLFWWwYc7CwmVkjSCgzcyFumJ8AHKbMfsc1RP3T4sU9dvuS43sD1Z6sN",
  "key10": "4v7KwDicmtLpNHsKgtjEGEvh6G9NxgJcmqhkqJLwbr79mGAju3sj2e42ATA5FgxMQPnjgum3Pu4zPh5Hki4BnmWz",
  "key11": "4VsaJgEXDaEJdukuoRovU3N9aE6DBn8Hj8PPSYC7ezSnSEfpD1Yx61XonmS6eyBcgPZPR8f44js3BFsC8WYwvLtz",
  "key12": "3FSWFaCsyswRWc6hHMeX6gNTTnW8Eq43m2orgsF2FbVFUrWynZ7oZjAGx5kj3FcFYaz5w3ujwnzB1XyEhVJvba2v",
  "key13": "61AQdBCKbgP7SqzvvzkwRLoAKhtXewiJZ539rak9N2DKDM7sxYGyjJxqvKnhuktuQ6Cg3iHUTnMeTqVG2KqYkyF7",
  "key14": "3CwDfJDZJW2PFXoL65g4UEed54s8SZZPMMipzyX4wc2LMhiULhXsi6md553wS5wfogt6KuajPrVja9xbrVGxAFjo",
  "key15": "3GBewLiix9dbL4wMRnLca8HohyDeWR4CMTzod9rRu9npiPPjMSAFTFpo79bpTeNv9YssnLXn74r2eyi5yswWVpMD",
  "key16": "5JBoBKUd3TwwkXvmMLoPs4jqr9vW2z5doX9kr1cfHVj2S7kLNBv47G9kqyyPrTggp1dySBLZDPib5qAVD9X3LAdD",
  "key17": "4MdqABDwHfLXUQYyktxWHHTtcybisLxYhCNzoUjDZLEnLvpzfY9pH8zVFZghj7K1uQ4G3627NAsb6bH1Z2KSy7Xo",
  "key18": "f7azrBsXtRXG7RQfxCUoKfabZAJmqyWNtB5RvCKpDc9Nx7ZxxRV3x1QGnM38W13oD4oJL41Pjou8wnSpCUTym6S",
  "key19": "2G3oLXyaBNzXkjZSPu8mC7XgAd5HUhB9d2wpkDXbSAPEh2jzrR8cxJABJ2pscycpAdVQD4YPEyJk9Dr99UCR8hVE",
  "key20": "gSdJXdtHmN88CobPU79LXacDLVaHmcE9eMiq99EoB829AXPaLUQaaQJUKNdN3adFPxQLW8UpU2MMMLDWvHcNBzQ",
  "key21": "5XQjmAc9pxEdBALxkFKsFygVZhrUbKpapz8ihN6MwSCYyRqcz2tw9ABcp6GjdZZwf5cEKxqestWy39LcDfyvGdjd",
  "key22": "21jyMCBZyeXEzwEGqeWkHA6q5VZs6sVDCfspDgpxjkwvuDiouPR63XnRMgFYg1jXr5qdp11XpyftpAoiMJGK3goP",
  "key23": "47iiNxANVCuNGP2wNRyHPi9sjT7QkPg6hXBxQ3uTh3t39UvcxKZokLZRww9zAqT5asMv7gKNJ3YzjnQo3M9AALqd",
  "key24": "PgHc74vU9YPexMMHfQ42ih9bX999ypKPvVL8VH9brdXfUB8i3ECr9R6RDhmUy5vyLYDp9FQgseCvsDWxxvR8aPb",
  "key25": "2gz9UQyBKC5Dg5zfsC3wnKvtmK1sFEqE8F9zdTEjuVciUN2Mh26x4RJbXAvY6XQncCKeA41zzntBUwCYfTHGF9cA",
  "key26": "4QZGbfJLPW5We5vYg4oLQ6PY4C4CxQbmp87WTjAX8wASFZLodAfqVyCHaANpVz7owGYfkah2gt3oMx8jpKZ7CNh8",
  "key27": "2RQ5WCXvyjL7LrJedK6KXGyfSoJJFHDqp5TvDZssKpG1aZDE1XirqLdyrkLDie2QLB9Am39wVY8pCG3HpQJpYGqz",
  "key28": "qA73sKfTy5XsLDMeTJxZd2kMbj4cwz7fgWEQmBiBSK2Vju4ndSfXvsVA8uJAJd3Do9gFjJxvbJ3deB9ds5F7GyZ",
  "key29": "3nx19p1fQUM964JV16UxwJdrsTNnzXrTFxG6TmTXSphp45pYASmPj81fxrfP4YhP1xAVesk2k6K6yF4sqpaQgn8C",
  "key30": "5nravhUNimpvrPLvs3swsFQtRNYtTJy1VpRPyP9GZgACPnZT5t3GbzMxkuqEeuMqapKDkyP2Dsxzf8uStQtMy7Jd",
  "key31": "5om519ANb61SPHHYhWxXQMW4rrxNaUBriKGqGXoLAHoLcfQqT5xt131PQQCzoHu2hnTvk2B9CQBmSBQjcxuX7D2a",
  "key32": "4taQJ3RFpbaQxWuRBB1AtNnU3kexUX2FuZTau2zKdvfbAn49z6MyVGZ89tSVzHdSqcxptD2r2aLNL9NvBPhVCQ7G",
  "key33": "3wsTN3wLMANSpnFCnpYSVoygoKV2GFjFWRn4khFo2kkpYTbLte36V4dA39sgsoBq5B2GhLacWRmhrEM7eRoKuoQq",
  "key34": "F9GpGTmbEeKXVvPpW7mVgBaeyq6rUfjvNfouaMJHZGX6Cxf2EhHeEUyRaMJurdUkab12Wi6SVhFtC8xgQiUeVwJ",
  "key35": "uxjcmBdU7KW3qHa4NvPdCcRxS5D5PNaycxG7esq18P2tC52JnevAt2V8oP4Cx4wUJarDqNCBjTrjRYiV1yaWoWS",
  "key36": "5DFQDY3xdtJTvQiViNJw1xvKT4gzTgZL96wLRp2GUkoJJX1drkHwxpqZKdmRxx56RFSfNVYwntPGHQtAT9xdTGQa",
  "key37": "26v9RJeA1xrgen1YSxUMvccYzDehyZB6ConGWQPzuVG1UcKQxC67SmKA4sfdHyK8EyfVwzYymNjhP5EfCr9RgNaE",
  "key38": "3XkJXU2TWacJ29KaBhEdUPxjxz21siqLJBDozB6Qrxki5Av8qZjDax7cFahhYxZTjgsT5JuFcjYHzweyecuCLm51",
  "key39": "3DXw96B4vCKKEeTFH5n5wZy1atkqiutXzFKvwxkmJQ4oLPg4qLRQHbNAEvB4ECNGDoHvJ2a1m1TzHR8tKY9YGs7o",
  "key40": "fdsUEPPTHSVXN237MByHBoLiPArSGTRhbJMcNnpJRFxnLrsUmdzPoC52ZpspBn8v59huKoCZChJDcjXwg8x9353",
  "key41": "5zVd6Zd8YH59fRL17h6EqBi1gAEqwoPb5cZz7p8sUjAWz6xBT8upkqUzM52N2KHXQE9chZsehDefRveUX9pJYQEA",
  "key42": "3G5Lsnqhnoi9dpt7wRJQRLPQx8DB8VzXsK6Uw1QUoSGwPmeVbCmmB6ePWo6R1xjmkYqqcRUJeBxthb9t6BmuAjX4"
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

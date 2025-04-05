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
    "2FH399fFParvVX5y5tfDo1dinj9WKK6UWqK9WUNegrs6yGFZUy47F63F56266P3GMcwZySE7tZphdsmi1UeMsx3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwDaY95UauAyWi2vhJkjBpbPAuM4bWqhdnCJ3ZoUbtf4Rsu9JhLZRPqLMqvbetBzeJg7dMBQaaaLXTZ1c3ysecu",
  "key1": "AqbmFXuTq2a2QuR3Hki97Eovox2m9aGYmW7DTjn4iFyQJqpY9Gz3SpG2U2RsHwQpMJZsTBQadatckbfC98nLZGc",
  "key2": "iNtma7bTLCHC8HVqBrGbHHNJju7WDhZKLkA5F6djFcD6MUQX4RnTQMFvBpGkshTLP74n191zAKakZvjprpyaU5a",
  "key3": "4qeuGep5tk9LmDx4ETuYtuiMMaApwVva2vBX2qWA8HcYmxSfk2kF1UggJo4uASEojEzbFPZiAP1fJgb6Nb4vpgv7",
  "key4": "3Thfo7Q14TZPY6xPkjhgF6qy9Q3FhHF5dZXUZgzBYMadnnmearCmxpQFBb6xWKbRyVZWgWoHsEozL3QKxskeSEp1",
  "key5": "38E21wd92DmTiHdh6J6wxspzxy7dw3tPJu4iFwoY5g6eeFZDG9wGHnVKqhXG2CThQneWGEigUtRtis3S9ZqUMtxY",
  "key6": "Se67aHFTQErKCVRa72zJdEMMqEu3petYdZsdgtTn1WM9V1RwZNqDJHnBYCaaLVgQdGk4kMDej9w2ss2t3HdNkwT",
  "key7": "4KL9ZbFE4zppgqdAoTXXkUSisMJ1R6F4Wyz3Z2Fe5hLdwbnepjfMbhS3qupvu4N2YVYQn3iDz1nXcd4kXXebkgS8",
  "key8": "4UuDjGHxESHFfRWb9aSZz2UQ4fm9Z4qtoNzWmQvmKKAveDj7E3pWKzJJW7Txz7RjsaQFSPcXGKJMXBw49jwr43Bh",
  "key9": "ibVJAc9Aa5RnSnPYbGHGVxQQCgq5nLb62DykeMgYohwBBpUueLSTLatufJXE6USLmNBwRVdforPR5rikbV9fUGy",
  "key10": "5qYNBnoEJc66Y3KU8jY8r2kqTEfTrNd3mua4PoZvn2UkwPCG6PKc1PKnoA7qzT78WKM5SvEDfwCgQhNyYNCbXt5P",
  "key11": "2pMgog4pNBKdpZuZbUehZLWYYtSirKG8reQtgjoufHuYGdBsfrDhLrUDirndUfhJWjzfqnGoUHj2M8gh9qN6aMSy",
  "key12": "3QXKpvWYy6PoVk6se3DZ9dvvZJCU8xhnFnD6byvEsGhGnay1NcXEo6dCh8sjyArgCaXotYWBqd4K9u5NegG1SEAE",
  "key13": "67KFP2nS4rK9d3dAr8SYiCK72QNrrANZBd9eXuykmsTE1F7MNvoP3TdBSkCfa2W9PnYk4D5RSCaQwZDRM4jd6xcs",
  "key14": "2L2ESSkj9JoLYmBQJ64W2SnFPnmejWhsgezumadadPqzphWi52akTtznArcbfi9mNa8DrToFJ6XcSFettoVVt6LG",
  "key15": "2wZnBztqv12qKnweT1xuVR9zsDb9iz1KeA4Zqek2YuuJmkjypGnzV5r7YZoBQ52jyZk53iJHss7BrvnhEgwEDPEB",
  "key16": "3girRUiscevWXWa6CEXKR8CsbetSLiNtn14ABxjBYHBtzgWwPpKsio9K2Xzh3cohbkZMHvEK8vaA6TXFsgqfPwgo",
  "key17": "39kz4WETqj5q1s1rL1FQod59paMitcFgWoFZQiWU3rNK8Fiwk2SF11KPPGLhuAgtPNjqLxiSo6DVMqQZrFzqhwg6",
  "key18": "4218wkMBBWrvKhWsfYhpbcB3Jps8kxNfp7snDvPqWZYnHXvkCBRv5w1o5vdLSDqi5yBB6YM8SBayUhL128vCZ3oo",
  "key19": "656eMpeurSvg1hZ63UixB3PStYX4jTApZVZcYTDu8dwA53R58ryX8MQ3Reaa6CqaTJb47XDL3oepQRd2DW9vj9JL",
  "key20": "hb1y8zuREBq6nt9TK7Gw4A9FSGSmd49izSK4mNLUuhNnjKTnooumSKxAfsuWCr5x7jiVVEAZStdPXSS74p3Mh6d",
  "key21": "4t7vPkJjgJSDpPc6zgJRkff1J2wypEtyq3ff1b9MS4Tit8NJ2NqYFcsWf1CabY7UXBuhh7TS2KinZBLciP7aekKh",
  "key22": "H2VLjtMjPYb7jMWmyfF5vC2hmUVfC8huec3VEn5DL9HRN9Eaty2xuVttrMK3NxZXxzNGEEBBqwQyh3HgkSC3TTr",
  "key23": "2H8htFA6VGwXsKirK1HVMLJ2eaZxD8yZs7wTFYzynFr8FnqP2mKg3HptsfSvhg1D8bfJJjcCU8gDLiAVSpCuDiB9",
  "key24": "zDRY1uGqZsceigbmJCEoUpFA3SJRjYEGEYJskuyEssUG1CZTE9CTgq4bJkS2Bf8q8nRSyr4pzL5KPxFK95S5de2",
  "key25": "3kES2KgdewxuTV6GMqApzkiEgA5rbyownmoDT6gJZ1CjvALfZdnVqvF4R9yDSCe25FfHGKLVCXkHe5zD1mhZGqjF",
  "key26": "5KT5yt11hcS5wfbxjvhBCjrXvYuJCYBbULY9Um9E1CbQtwj21c889PQMzxx5BSPfh41xxypQj13k6PZFgHzVK84Z",
  "key27": "4xhHiXyznBPKUWhrnJLvXoF64USpMJuRPFJKe7XtdVSHe1JLHjcs8WNYhHnoVyrZXxyDtxXd5yv9jFhmUBmXYeW2",
  "key28": "5T5ezg232A7UYQrdxwyL9JBF7Xg333AEjtkU5pxbxvEQC1zUktMVc6qxydCjvb6PcS6LuYZUEZN4mMerA9VK9WgD",
  "key29": "2K7PYrpFWg9mf1vpmKKAkc5DN1F9WS9FengRXM18yRP8MGUE3mvTw3S9nTfV8jQTf4k369AkDM2VEKLc6MGyzazV",
  "key30": "3ahk2VPTkZ9kxPrdCwBfpg13iAZr3hMy37tCPv9vUjyf6P1geF6gQ3oCp9zNEnoBZVp1P9hj4Jyu1boJgiSu4pwk",
  "key31": "5iHkCgY23egLYvMe39Y4VRh11Jruv7C8RYwg7wGJN5ry3iHmhu7LhzEg8v33aPNu3Nj7nf2YuUqc8T2LurB9ht1e",
  "key32": "57RJKesT7poWUExymVy7wpsf38485WBJBbdRYyzpaDzwZDaciH4GXM1i6n9jxxaTEFVkWHVwJdhz8pbh3ApkYhBY",
  "key33": "4AN5PGJNGvu7wVjFRf1Xo5qhrGWcSBty82LpP9Ss7trZjo6aDviNEa4DEw17FjBhYjuvCCv8x1CiBH6zbK5DQrw3",
  "key34": "24qmtcbmqTxatCVXTmAR9EHrottqV9FG8HmhCypfugCCqdM3N7Wmcwv8J6298Vd3pxjj7GfoUsqFteH691o8vhM4",
  "key35": "i42Xe2CgU2CRqfGuFsJpoVNPzKYoFksR3XzPnKdW9ULexsDt9FNxQcKbBKcicKUcEDjDa55ejJk77M9sxFpn1Z9",
  "key36": "4keAgYUKfgxc2hyqJzm9mtpnWFSn6nbUD8zvWfBMZvvu9syuntULPJY6SYWUdhMETYnHEEBBESMkwzqkRnnn5w82",
  "key37": "5Br5KFqKUhP98JGEqPoy2fSGphLctXYZqiwcCmQ9u4zYbLeH2D8YwiRbouD9TmwPPrwiPNWH9sAJaxmhXGQk3zzk",
  "key38": "2sjHSLjV5NWhHpPWbxSaYVumQWPa23X5BfnR1DAA5LMppmL3brmGF9KDZBxsuf4jmuwAeAZ52NwXGu7YVAHRFtN2",
  "key39": "2RTPELi5NkzVacxSsj19BYHioAJQJ6wUppE6WEqB6eH6BnJkXZp2yFZsg7RLkzMfpAybT6tAi5dFbKXXyNnVJ7uH"
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

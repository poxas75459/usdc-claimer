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
    "nixZehwQYskW77JJomP36aeQrLwQRtn6qmvZb1PF4gXtY6kNjyMGDiT3jhYBVp96iFypU1g69YgarKurQ4Czmqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38iwmk9iwkzigWRVpYkJTHmMGNBMdSgWH8beFWqmWc2cGBQ71L292fEs5piaCQ92F14KvRybDL6SwpoxyC6qbisS",
  "key1": "Ymc2DBvYE6sfP7ph3CU1JWJ4jseg78cSuSiCj4Bg3dGpRQxQxUKyVCB34G3Sy1YSC9m3PhvPC3BBTSDSiaJd8cw",
  "key2": "2ZPGq7r9eHKccWeHtySv1vYnMq1jFZJkiU71xV4eEcsiiQvoGwQfmdpPZboRXbL9GZ7J2NwTTHBHEKVLdq1yAGp7",
  "key3": "5UooHLYFUmYFsaBwphna5gukSNnHHdtULVUQ9uyqPbsMxgYxMt9fqCNY5Nigrzyk1AJbLy5ua6BReBCzARgbEWdw",
  "key4": "5nZScEsNkcN2iWfWce7dvsJW8HvEAjYKvorpP8ViXL8AQY9aJNFQKmYJ1VUECJctzDd9PXq7ZkgPRd9LGui22hAb",
  "key5": "33iR1gQayo3yoz2bc5CuMFyHmcWzz1zkUvX9PtKRTUGaot5MSzMJTz3thLsx5NdhwKhXt1y8hTjnZfkKovAYjYkW",
  "key6": "3nQs3yFM4bxmw6MeDatFQHMf9eWhoAtYjuxkTXoZETAo32KftLbwuUVatBJXNxJXiV9kMSmhavCXJU7sDxemhJjh",
  "key7": "4wACzdB471g4mKrEAZV9pYJJeanZzfBiZtCaA18jZJwwqATpAUcLZEiXdp9x4jDzhzMQ9pvqVpUN2JSXHtJBa5af",
  "key8": "2xs7ZAJ7zk4dG29mmFZbRcfaaaDHXi9F18AF2J9R4XTjiPeXoe4jRxT2GCwkf3Zpd1NSBMTdkhFaTkRNcxSQSeEc",
  "key9": "3FPhNfUtpHVQaz1Mm94tjXHU1TqMHnyu7Cf7ETzCJH5Ys6vTYm3ppYYiifTcEQyx34sqe77bC2uv2KQxwpJc6orM",
  "key10": "5uUendxTUBTwzhrHh5C8gBuRmDCBkiwf5Qm9yFogiNiaWdvXA3QkfirYAseTQmvHMJyLfEUGboFX1QfHBKDyfZvN",
  "key11": "2tepr3Jik4poVEHwdzS3ehGSswFXJYtcStrEEzFWG1JYcG2xVtQ2NU4KuPQjnaw4Y1tVLNcVFZx68iEJFxCvBpn4",
  "key12": "4EB9Mp1HLruLjqzRG6dh285Vdb15eiunEypioBReP5qy1HoyXz8rUNgZHa5KraR9wAYxuWkmisgGHKksziEzPkAi",
  "key13": "37Zs4wKsA3wJ2LrTNiKiHz4XrynoBK7XGaEsnsDzc7YoHpW87Y9UTjdAnYNGnE4kkGcKwPiHEiRvXYdVn2Fyn8p4",
  "key14": "5FeYodxfvTRkDD92eMY9GLsBNAPY949VSoaBjcNi3o56e7kVErjUm7KHnjvuc5VNcDwNTmRVydGawxBQh9MtdReo",
  "key15": "52UMBxUwwD5tqEww355wuF7u9pxsfvEXPxE5D8UtCarohJMA7VRWLdm3GqZUZUUtzUEpUZiVK4BWBjLPAaCDGHCU",
  "key16": "5HL95GHQpt1NKMJcYZvngFfQvAme1JWUhXmPMKW1annBwcvoMuow3X7jHboyuztpG8GCamLTLADxWXXG4Tge2FmS",
  "key17": "1Jr8hof1k2rh4MAggpKuRTcCGR1sp7MENJ7mgtTga2ggpsgWaBf5BPqZuUsbXTLrcKHwhDdpcU5nEvToa72kbX3",
  "key18": "5AD4hVWCX8a5m8ZsUEEXbro3giXDUukYVPupYaz4sV1UtBdr6oJ8TwdmhPtF7138dRNTynvQXiCmk2pCgxDFkc8g",
  "key19": "5uWazNgPaV2aVNpzatFKRHKypCUKfTHmQJ4hCpGC6pv41u3aBjLAYTbWBmPPMENhPjJSdNfRWTokQ1rUhTKwKdNB",
  "key20": "4tdiLXizcU6RchVii9o1TBsrdHtLvr3xrK2t1KbAxFvPyq63vhFUskqYbwNKLkcgRik8LPzeWkckvLDdmPoV2zu5",
  "key21": "5KqyoZGSK8tsgD53snpVzWmYKn7DeFfRPPfc4zfteAgMVbK4JGosTq5tcCegYqSfn8p7DWQQegLajQ9PGeXvJQDR",
  "key22": "3qzqH9GrPyXVApSq6ckT7F9oLife9QmZ4PbKxC8UC1ZUZwMhPRwdSS9v1PUg8t1jY8LXvnRRZKiZGcFQT6AcE7K9",
  "key23": "2KayXYw95scKzmkTToXUXcUGbBciBYXX7h5jHZ3VLNnk6NuV5oKWMB3FLKp2scfks5mJoNB4LobqpERpZkNDBnjR",
  "key24": "3gZm5Nt1Tym3kDUUTzL56f2wzu8JmA1Nbusy4iDZYWi7yZKGKk374tvDzU3jNFvFyQzTTkkEAfqnL6x8r97zQdfR",
  "key25": "4dFd2cL5X5g3pe7FZ28gdouwvEyhGxZ5XusmEMpwrFLmsK21G37168yoGq3SdYy9vy4jau6rv3NQyHkNtDu5Ev8H",
  "key26": "4yY6Vyom1u1ovH3j7jzgQGH58KLBWUbp26xMjLboPRqQDqesTq9pVDqXwedsdCfAEMYvR8CtqKVCYvXv7Tjfhj5S",
  "key27": "5hJRhjGHrjwZDkVXbVV1ujpt541akhmsQitBWg2CUDb5dMsrRWsHrRqzPdY1tt1ZZ9U81FLeAdJ5PnPCDA3JMwW6",
  "key28": "3Nvzgr7HL3uvPwwkL5JE2miHBPohh3LJFkeSQGNJpYsNbgGJRrAVTi7PThKiqZc72Vk2jA8Vdu1hP6QQNsFyDgPL",
  "key29": "2rCru9k4ZzD6qjFLPM73fJpLN6ynZcYbrNNeNQ3nGLBisWsFvKnY152NyJpGSDrx8pN38C8Vydbn4P84xEr4Bjtg",
  "key30": "5mxGNJwvKo1ywVH5wRjFYtHgoZgokMUdvoxKXK1jUYm2WxUYBWUAZTZb1KXDLANnUuQHBfdTL3yktM1sWT77KE6A",
  "key31": "2b7EMbGCRxKqvnnbN9Ch72R6GjzSm48P7de1LvazdnX3STGY5ZDPx7hx1wBtT2LeAovyy4mMFLRm9iAVoD8V3fsc",
  "key32": "4cnm33PeTvfPebmgBwdMj7caZuiEDf2oPunWqzuBt5wgu7Pi8gKofDnU3rZ2VKfM1zrkGW4ZbcSyHHhcYL565ZqS",
  "key33": "5RZPLiHoKXz1Z9BNdHd6NiW3qT9oRce9MHwVgs1RBktnAazUmkAFCLW3Vymy9kWqN9qCxFei7QPi6YdWseSZNvhw",
  "key34": "2AQnKkFh5A3kdj8UaB7nNzJdKBasTYuXqh8stDCDe8NctzWB98jbVcuWNVvNJNJHGTei9Lejv75DN9Ya5Nzwctcy",
  "key35": "21kcnohhjKPxMETJgCB7SfHkDrxaykMifgiPrQSBnAGg9quVKVuzc6H3z1tQ2Vqg1JtMY7GPyrM6DQDDwqpkQ8Ed",
  "key36": "5hHHXKJdtdsijSEVtVR5YnUYEgxQQKfYTs9iUaDQ2JriJ6HtyeVh2qcD3QQYjJtMCUxzg7jB6JQV4NcMYkRMRE6h",
  "key37": "573JyKwZyK53U62vzJ3sWLrapQKYxyXC6f9WnThcd2mgatYa6vGoA6PWNuYSHF3XiQck8ziUtjJH2zpNsdaQVe8K",
  "key38": "3Vs8vHsQSSvwz6TL4tjpU9xYWUXJ2pjSWRRuzTvHekezAAdAUijt8nLo1GUmziAqQzumF26f2RenN7hGLt78YYun",
  "key39": "2qwiZA8y4cgN6YmSUdnHDPU4nqwKn71wgkGvszCDWfrdtkgtAiZYxoJ41fnc2Fe5yyKZS2QzemBCWvsBiFPC8APS"
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

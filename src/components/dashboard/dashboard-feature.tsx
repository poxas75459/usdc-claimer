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
    "2e282BmVMCYryDBdWBiuK96ya2A339dC5asPguS6otorqTP5Cph1Hu45bJyKu4NAhtV6Q8AjHuRtmnt5jp6VrQzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UG7QiJwo34LLTNNujGpUKaCnDQM5z48zk8bE3spbdA88UWDn5N34fLnUW1XZgM8pd44hCVmNhTnjfuRQAqCQ7nn",
  "key1": "BTgq6Z7foLXnVUYyTxSDzmhNx4w3UTkFvcgPpCQb7JWNbFM6An2geNTZMt9r5674h3qTimEu1KSLYk8Ykusv8YL",
  "key2": "4LM1eSisaJWozvG89YYwRRwYbMqfmY4grz3WeSp8GdGR3dhx5MAiMdnfg96eHcP97QTJmWbvh25h3F2UyAHF9bJH",
  "key3": "Uoi5BNQJ8nfXKCi3C7CaT6W5iWYKNn1XN9csHHwaTe3A34JMESsTEeGm6qwyJ4LuikrYjpQfsEBhvYY7f3MeEi4",
  "key4": "3scu787Vji97Z12gJQnWzpLQcUCt86UbKZzJCyfUB74dj793dvEZmEdkUwewQU6AxPCZf1us7EoW3q2Z3BrhuTza",
  "key5": "4iWwezwSHSoPgaD1MofcSN3kw2RWYWXnVLEr1hoVAMzj5cHx3Pmq76Uz7X1pWV4JUhFoVxFLW1mhez5BqhY1i5jq",
  "key6": "wCDYnDyPY9fxEQmubuH3xbeLN3WZhsNkYgFKBVGPuwEEEHaXFui9Dy2UHoSpnR36pdZy6rpVNhbvpJEDqqjpAxX",
  "key7": "4TzABDLAKxRei3NGNnAEJFrUa5TzNvHaYPYhmbdRvVAYUoqyUvFWaDX7fhmnWytxUTb5moc8nA6m31mh3A2VeXEg",
  "key8": "2wEzp4GxauQ3kxsbChoGYRcVwro8D6yFmsZjTA1L4mryMJKutekqYQt5jLtYMQEAFeabqn2eUB8rkqgijNuNHU2i",
  "key9": "wmQrKZy9onXKhjT1g45mJ4xf9GrDGFCfXFWjWfVvUU2q5DdbdL3LEKdmxP3BqqFJYokCRhtbZJ7toB9NHb28Rfz",
  "key10": "4XC8eJ7XN6sL3xVoZrFrBCjjn153M9KjvBSzzyt38Zs6mx1Ykdc7RXz6fK29Z2P6UWHMJLhQaGLeX5mMML81XgGQ",
  "key11": "4jtCV62jXrpXndwY8vWpZrqefPLNnHcNZhnRVFzCvx1doEfRbzBWg6iZHJqLrjgawUBKBDiEi58ScnS1n32Bfxjo",
  "key12": "5v6svFdRaTChKUKnMeUZPRM5C7otAq6HMjDCECPAV9q1K5h4YZuFdLfd3RR6v67EGsW63NZD9EUpzVicE6KmQiqe",
  "key13": "WffS7HxnYnut5GWriTe4vPH8KNskHgT5DAraK6cybcCToE93A8CVHCx1UHgz4aVDyVa1BeTmkjXea4XNdqMYfZL",
  "key14": "HnD2NhLhCEsAQvwonXbUPCJA2ZTcBe35Qcwcb6G8BchuLdPxzAtpZ7vmDz9uKYaC3G6DRv6rHXd7oAHn5dFqw4T",
  "key15": "3yMHaqXfiir4vZUuvafvucRUQkjuZPcAa6987u8QKCN6wk97v6UtAkmY8JYWB952LM3U1hNUfQBUPRpDi9RgJpeS",
  "key16": "e7ceBKC6KX5ym3tHTMAZ4RpyVSfRwUcoPST4X2PWCnJDaFckbLWnmLgeWe6hPxmNYu3XfaP8sfbfJ4gqoGj5UEc",
  "key17": "2X6EXk9RB9cDgT61f4JTkAsJ4GArw6sh3uT9RKZVF8cCHVB3XdGCMMDN2e269gYdmN2b5wLvqVrm1WBWWXS4k3ZB",
  "key18": "nSTMPZfppjHQxopm5QghGoKpAsXShBMA1scJqWnnH1TgrrTSoXRfpxEhM8fdFmEhYU62LL9TUEdDqBha6Bd5nco",
  "key19": "9JEKcWDCuCgSr18PkXNjmhXabLJtCg4d2MLvVfyLTFzUwydfiNRNPTmsUUYUdoQoi5tWGB6niJVSutZrqeZdAQv",
  "key20": "5qAUfojx3CukLUu3pfk77PDHEXVwtorPFg3tjiawkp7rZ74JrMQ32DhY3vDGibhaQFiiFW4SG327QfCTdQxwxRW5",
  "key21": "27kFfj5yHyPXgtLHbdQ1BSQM93LGsXDVXoDzxFP4gi4hRT3r36A6Y7n3ZWisJFcn78NVuPvcD3HDDC7JFeNSdc3T",
  "key22": "4jz9W3GWA9QMYrvdLGGQWDt4k9PjExuDGYXAgV88QsVJViTZCWmgmXeg2CanpxuKqoEdJ3JvmLxnNWka7Gpu4XRc",
  "key23": "4HUKbjc6zPU7YrNN1WTbeHb7zykvxKyEhXmkYbXk8VXrrqTY4yo39Lrbw6ArfcFXZC5Lizc2tVx66CryEgKpvPXE",
  "key24": "2uFjDCizGHZNKVZvn48tkProtw457xBdAJ3tmo817uM3zG7JvJMnsEkStrThJYJoxnzD6BUuibCVE8f5pYGbpD8t",
  "key25": "45Sdg2ng1KdirUqK6hxkzTG4tZauSaru1puCHrg8UuRxe6pUvZ5M1oQfWvoPayzBHLeQK3sXhkGr5RuZ36sfSfe7",
  "key26": "4DxU93YEQGwqJXLQ9jspLaJq7Y84u3AxxsKZyXmuGV5XyUQKofAUPYhKNxy9L9xkKJ6cPhbWGUafgHEjRq3sEcjB",
  "key27": "54nsttDz49gM8yKWLkSWcm4NUBNFGQ5oY8tpvqdVv6L5UZ51SKcRuXmCWdsAtRAGedDJA72ZrHFbRr4GPAgPcp2B",
  "key28": "E5s9kNFhv64HuUJzrCy6FyB5Yakkkprnmjfk9oRZwQD5fxe13rH4aVvNXjkNFnC3kcWfs6Hxmd7oEouJiwVL4Hd",
  "key29": "VF9tPzP2wkd73KeQZVn7PFjmETKqPPC5doAk9rnxKEWWZyg476VaxEiDip5CYe3NLbaw82yWJe1qtmvqEXwSci8",
  "key30": "2muvEnfFBZwzxMhFVLt8QWHvic34CsWmQgSb2DwmSEDxFLuWF2Sx8KxgEUqfcPjdyfKmgfv256kZLxYKms2gGVBJ",
  "key31": "473nwwaP2JuHS22Yt18Hffqp2URM2X1AfCy55xGyy7QXEVGaSC78sL9izE4fjTbxSRS7ihuebAUqu9F9C7unMiJd",
  "key32": "3v7Jk5h7DPS7Kj2ipKLobtcPX8EMMv5SNDCeoyxFvPZha65HqersrYxykFhh3ckHQJZni7gV7D1qAmcLKWENPsGw",
  "key33": "NgFTT6FykhiLL4w5ABmKRZZ5Q8meCfSueaRRYdCqRmLXX8D9ifSNjmGfrgxaj4x2rGG9Jyq5NQ8abguQFZbD9py",
  "key34": "3N9zEH221nuB4mSHN2XtHuxFZPHdj4inXoMcSLh4Xwr3jSfZWXbjTDbMxUT3FCrfqzbccjsaDPgfUkp4mHr1nL2E",
  "key35": "5ozTh57e8zucD9dsKQXKZcSoD7QWX4U3CVUzVKtBi7B1MogzjCug2UzwLkWsXGoC9cUgDKBPRb1dn8QwmqBPWCXj",
  "key36": "4TKv93auVxndpaigQUxEGfZnLrsC5vUW2vyFTEBYRJ2dkHeA1DJSuFzRS59CH27NbByqfkkqDZVxBmxSi9YUAYnS",
  "key37": "zijS1c17U9LyHWqA8dy9nhFH8hydTy3nD7xeVkK9pnGzYhhybuE5v1DD3THRTHrhg76aiD9AYbmxoWubgCumT4v",
  "key38": "4KaZfQ5HY9RmYDeHYP3znYkcnHoenTJXEyQYQj9CiUuVd6ttDzxefRueh9EhGiRPfJBWqp8YMdNdQVJDdiAQeKkP",
  "key39": "5TxwTishHJdaT6haeaeSvpHegHnaGCBet31LUkzWv4vmW4U4ruByXmTEMnE3vWUQrjp5tuLKQ9KQDyWp7hxohDCp",
  "key40": "4YG2t7XcLjnQEW7JdTQRBJBRuizeA1FsRJrK7LJXA9CzvoGWkyugAtTw88ph2cFvyYkzeuhEd8e7QpkPxXqrg4nF",
  "key41": "4yQgTpdLj7gVM3dVGZSW8n4fCaEiepfwizSSLCQJmdkr1DSkZEPJX3TJCsqpV4bAxUMeTCvrHztE8FqPY3pVk8Mj",
  "key42": "6597aFeDwtpMstGABW5mgBxWXkzPj1vEpvocsfiCXd7p3oFfB6DhRed6nPKRQrPqyGk2MhGW1eVqw49BcrMYyPGq",
  "key43": "4MHrsN7CPAAjN8nEAkoHRCarESEvmgGP5jjpXNhDqtosR6kunGFBLqosSjU6vZaPAQbCm1kkxeiLbUUZ3GXhs28y",
  "key44": "61yzCQfZUnwLj7poDNVepYq3Erjaw1UhYyRBiZxrVxU9GpsPTRTyEMzCdRUJScHywREZDLRVhHfGjPKDzTTQ4XkF",
  "key45": "53JajvneDhJLaP8XhkuYKgMyA2TdHBwrYV73nAwjEwopFkFHnT1dcso6mxKjSsds4FAs1mFZ562WcrA2x4esQwTA",
  "key46": "4v8EvaNZozRo1aQMH95ZyFvqKTVEznPAGsuh9TCjL1kWgTTnMMZsRoWVshPBMTsiDhGXeZ1qdc5WYt89qfPqH3fG"
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

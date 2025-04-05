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
    "5X1nX91WiVR4YJjxZBkmZwj6xFrhDTyYArxQz4TC5YAFNM4JiUNFK52jbQNMV5wHbmthy9kCNXxSq486bN8mNRFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLnWjF4wv8unveXZoRKxMB4E3zNWKLMq612gZEn5pTVyLGtHoiSkamWU8haQEYwBLQdc6CAbhfrUJzQcCu1FUbF",
  "key1": "5Pb2pSWSxYvqpAuA3w8UrkzjJYaepUyvQQAqb9urJBWKRYH5LaV8EoSpdZ8xVE7uEtdnWjueFyWq5NCB9o6n6B3b",
  "key2": "28Byp1QcUNxdAi6rwwNTGa6rdKKV96H1pXjwgcNJEzR2Sz3M4Y7JJrrUz7JbeKdpvvULbwNzPoxkcapKzGnyFmmo",
  "key3": "4f3ndpAxSUAzvKawcsdJf2DHq6sh9SHXeftdD32T26zPY6wUvFhJEhQ4viakAjiToHm19DNaWPhJkcJDWYnD8acv",
  "key4": "5kw2YEdtgfVEqTgAenKqemxVz8fxM1Z7S5LCPCK8eQZzqEnQcjBoeju5EFUekGqSdwdrbnFrfgceBoLVeQHSCmj1",
  "key5": "5dWMUW31s68dVssUVMw4agNsB7m6cWFD2R3RhsP1UTbgWPAfUFhMPAvkKGUxksLrfAHga7vhvsePLZVhpDoLq4eV",
  "key6": "3kdG9rDLo9sdURTNaGw8P99aPK2xdTeKZueS2Nomrd3aHRQLZAGrZXHziZGq5Tm6T45Y2Uw1737pKQ3c9QPXEJHf",
  "key7": "5nVQSMWLWQrcMwxbry6fkMh6VbAACj7vjGxAytVAXMANVTDUKnnFqc2qbzWdH5DVZ9t4iUwT8Xc5X1TUdo1BXtdd",
  "key8": "3cCZZVMTWiE8VGkZc9bgmnZJT7bmNmVWWcZfkzxHCmbmf9kLdyvPFfnBVPdgNRbCoTtZUB44p2MQSzYFtMfXUSDr",
  "key9": "kxZ5JHvpUqyx9TemTJJ3FWYrj9fAmc3ijBJPELCMzuDR49uNQ99yNAxjfBDrVyi2JN5pDxeKSdMcwfpQXQ9u9B4",
  "key10": "qjzELW5ALryQbEnuQGiFWXDngL826iYmLL9TtsnrgawPTX1ctQ1n21FJ1nEe25Wj7UPzBjFkFHdT2cyvnahWeVc",
  "key11": "aBGq6VSW6JF8aPpRauWGgcFZgpG5xSbf1ZF7dh6cNGvS2ARDAsEnQQeGFeWGc4BtVUzo1fLHof2rL94ZMrByirx",
  "key12": "5soScvz2WMdNZdRzEAH5nvD4UemvBF28enDv5aXjQvR443Dd8fQMMkVXVthRWVWAnmKt9ZiUBF3R6kYkp8zAe1Fo",
  "key13": "dTzjcJsRcSSpK7V2zSWmQThdPEXcCGP33rWRH9uWMPwg3TkPt5nCau6tq3roo3cbWdtoi1m3kVwVf48TWTzwaBb",
  "key14": "5MizsGm2vHpZBJZ7e3fqsWFC3Zsmj6XjYEmDK1GZSZ3aiYL2syFNCcxC6WqWG7ahSnYgWsksZ43ShjRYsmgQ29qb",
  "key15": "7JxQPd9qQpzA7tMhtaNv14o8pNGC3H7VJuYQAAy9hxHArbsZMDKEZaowfSzKLpSLcogw93ZSNcRSQj8Y6aqHjpe",
  "key16": "4nj3A1fDjHoy3FAHSkxiHmJSxai1pASvm5EcBt5JHaE4JPbGDhuT76T9rYbiNL9AcEiA7zLB2QzQJK5JQtrAExhd",
  "key17": "Vs3S6YTvVcFrSzrRqn3v76RpXfXCKz2Su36iTvrnQ58oJzrtVKkPBCH2jZvAn1vEtfwAnQWXDYYxzmnBcKmP6kM",
  "key18": "2jDeNDxHK59Gk1x46aJs4oVcUqUPBYMsxMaMqo1g8zcvbr3hLPC2qKwnLe45EgQzeB45S51XEKwSHQGNMLSEFs2K",
  "key19": "Z3sUp6APgwK76urV8TyWo4MyWyCRs4kb4uBsKj85ZrwVG5BMFaAcwJbGJef6mDLLxLjEWDw7PV7zp1qWtdNMLxA",
  "key20": "PL565PUWmPQT2Zc6xaT6KuQA3TTZtzL71t1rriVCB5VTnk6R3iobadbtuvCUuuTTQNeHgoYtQGNuHMmC4WQQd5j",
  "key21": "5HJ4Cqpvi2u7yYo1ZUBCoLiLsBb9kpCpNKGpUC1cb6HgE9aYQnsJsYojjFxVpdzquGg4yPgBjraCnJFVnz4rZfFo",
  "key22": "NojfrEZWFECTeZkZ544Esk2YRMSTnBp3uqc4RdypMVs5uctHLaB4FbpAwaaFZLb4pr5qUFBfGPLuCuy2oUtkTpC",
  "key23": "2APeN6ZWmr54mZdu92nghCNiMnG9gJjxgav7hANpFk7DRkDJWfCxHHj7YjHp9CGneSu5BkFxZ1gE5NDktBH5fDZE",
  "key24": "2Ah9Q8fYQXTynYz2gaeJJ6Krv3GHNjUC3jXof1pnjAsRXpiEsmVfc1AR1otR5gd6G2KYvxkTc79FQ4KS4Rxv62FY",
  "key25": "5Z5L1NnhXwLfw5zWPXSy6DVosYpHzU18sZq3keZK46TuSn1GW8LTdGrVCN2qpdFfiNnVDNfsNJ1EWuuFb1r1g1vg",
  "key26": "4By6CTMNy5gDKr16pf84Ts3koFAiUWxLFMwqaEPCtAft8JDFomhEW2XhVUszUQdh4n8e5k1ejoL4wE2Hj1JCrhF4",
  "key27": "4rfVTGJxkPVUFkmkjNazLFMvufnEvR2zkJnZ5YiUeYK9i1sfSPoFa3hJwRkSEZgAvSMkrXHqWo4gi6KC7YsZ31CH",
  "key28": "Lv68hRRbYWrwCz9gJEgJsCu4eMAg81jZREMZe5eGLP5Q23Rd9B8BMFyqAQdosHQu8wwXp2Kn3WYLtF6taUgEPAG",
  "key29": "346T5yjk7yrwYkzWPik66MjkXgvYt5Xoh31armySSCi9YQBKbVftQY9YawQcr1XFcs2WtmwWjbEHedMFsaSRhkP1",
  "key30": "4E8B5g6aNQVnwMypeWC35PHEvyAZpEhxjbN8B6SNZKhBRsUsxK9B7HHQiSnC2SyAHkbbpZSWAdMJzxEQqGHj1Aqp",
  "key31": "4jx7wKcHRtyZiShdbcQgP568f3TKsbuniR7XAwuH1DngpgCcA4TTZEoKgMwKfk1mq6vfdMKQUPWqFzdsRacr2naC",
  "key32": "3vWHguKgtwe6tEZSwVG9VecV95gpjGJnrrgswfdVHZXS4VM5FftScq6uVtTmgy8PNRVuC7UBvnqFCfr2szkPAT8K",
  "key33": "3Ep7x2xcZU5ZktZZwuqUdvWzJJnLkpisDAB1jq3jp1zgDdrV2cZnJcUNqa6icmvGcXmNMhjK3bxvNNX9wN7TYHc5",
  "key34": "2CEo7Ui5inunrJL55FLXhMW8i1Gdqx92xL7ybXFrKkEtNSs3QteZm6mU5hSumnuGvAzodw2msqMSuQG9y8JECDYh",
  "key35": "xswH61GaeJoTPFeYprNLFaT13eCCvLKREVge3L7h2iu1G5eV6YSJsd8pVUBYEKHCdL5QJC1CMqLjiY6k5sCotLY",
  "key36": "59Zb8inK3N8iH3xBMFg5C2LR1cKRdtxfuNauM4LwEVQeaNXxfpSw77WnK46Ush4iR5n7eYp3uvnK1meHntjrcsFc",
  "key37": "3aZRtb7T5LvxG4hwUS6rLQPU9fbcPLhgzubTvy3pJNaQW93z2XZc3dBz8d6oyRyzbVYRmKdEq8kYYuGxLewSkKv3",
  "key38": "4PGWgw3rwtvdGZUMJKqMe8WaK44HSes9cgXYrK5hkZDkNs37xPpXhMNudPQLbHumKN8WDySbC5q3ySAdT9efzf3i",
  "key39": "3uogbgqeUsctwnbSx8t7Y6oZLVtNNkM3hdAfoxVRzTRFde91LNNi3aPEXtXPikSTKcpjgVcNSBQPUU8aNQnduVry",
  "key40": "2JYRhtJcwwi5MmYzppgNMjcUdQ9EygTkBvMzToP6DA5tcwKFzfgTc2V6UDQcn1bCymapENFxtJkMV8sqBRjdRVKz",
  "key41": "95zcRnsv4iE8AEEBv6HNCdXzkoiw69r4Be6LSEHH49ywPs2Yov6aTb5puUbK8wsznBEg5kke5T6RCishPrjvPbd",
  "key42": "4m6ytHm6mwSKUtW9cZz5aBNxymVzqNsb3jZkF8dCrjpBeoQtBnz2heKmAGBwPqsxDr2DwoWvah7st4xHGDsuhAQ7",
  "key43": "4GwwVwAGr4p4d2K2ZGXKge1FMZW22RHTgTdJWaszfJAYU8L4BiF1Y5R1jmJLoq3FqygWTcSeGXo9qYNo3DvzNwf2",
  "key44": "8db2NkhGLMEgLvxcztYoP2u7NtPceyWYweP2zyMwqYT584DD3edek2hZyAxHVuZW2bSeduPnvHBwZFXUMRVi5RQ"
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

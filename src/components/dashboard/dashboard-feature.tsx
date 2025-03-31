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
    "46V5PtjZfAicNYY47VmQ9vhFkLbgQNnbjyMPjwzPoG8bf8ZFvKGTsPNsKTEy7oTHXDttdA9kmYmXMcEfjwdyQJrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3YfyUeYgHHFWvzzP81SLbaeoVx9q1zV3gJnh97q3M6V3ZG8sZ8piFeXf3FvXEcB95qfwGp38tz6Y8LCK1Sr2Vt",
  "key1": "4YjeM3CNQn3BifXApWx5AEEH8CEeZTYLafQcW9jZEBBoK7QNHgUhkPejmVYpv7FvDCAEaofPwga2a2ANgfNzr9Js",
  "key2": "3x9LEm4KKPK6PDitdpp8vWcBxvFchS4hEG84qHmKGQv35MtqJX9FAq2PrXZH3RBkX2yQSFVhohuhcmnT45F52ajH",
  "key3": "3kgArywR8fp15xZaZq586o277RxZ8ghKggm5y33yTLwi5jiVCkGdJiGJaoGktngkWFmDFxVG6oZF9ryQJ2GMz6dq",
  "key4": "5frKxd316efPfc14TUKSWZawf4GVgjn3uKXa6TYeseQp8b193TzsV9Z5FqRFSJ21PakjzdakUwqpTVMbPqY8wjh2",
  "key5": "4W4DSqq9RZdb5EqyxtLptEGVNLVx2T827b9wyZGc8YVHWjFKmhedv8zZGzTTk3yTDYqRoLD8w7aMNaMKwMgNo9kC",
  "key6": "49yTJZmatoj9K9hq7WUerTgkXWL3ij43ErPxwe947unQjCuiuaLFZ8kE6qkCruR95y1Ys6Yn14oVchAKaDvx54L",
  "key7": "sV3aQFn4Mmyy3Uh2X5X18rnCh6sLTA8NizFe22tLgpGHSvZnLB78eKvhPjbWTSG1pr5F8jM3fWssoHCCvLaFP2i",
  "key8": "2rnFoWpF41prYnH6Qvsni1VmtHdPFgst7j6anJFbjWAwfS3xoKdpX9BCYnCq7QTRHm77faBCtEKeLLn5TRxPs8TU",
  "key9": "5m16FLkyN6GQUU3JaPvxAon94wYXGfKEhXESYSqm1M6UNvHsyQ2Y317ttfk1TpZA9mEXtC6DHcPWnWx2u4PEzgPh",
  "key10": "Jx2Z5pbeiW3aMMMHKgMiBFMeUZinQmzqxhdWhAoKN1UZe6vgsXjgt67ruNz8SF97dVSvdQgMEiHJrgivtNMQduM",
  "key11": "3XwNDLjAqDGkgrKuFSCxk32Yisut4QZ6yuDRpwJq7626AJzkxGcPtL9tR9xYsA8ZbF7k3D2PU8kZVXCcA8WmitJF",
  "key12": "3biki5viazbAcX1c4UnfVBuzaLij9sPH1co6rniJybwsmoTgbeh8CTALvZtkRbwauJhn2uGfwaGrnj6hnscRuft",
  "key13": "4HJypdeGaLY6FhDtfNFb5wYfxxA9iuAmJwwhr8Jq4jBHusTNXA9sh8UwfWcMyhvbwYwFxssJLN5xuEhNai4dZjC7",
  "key14": "5SmwcbHFvMQdPtaVHiRt7JYfvyu7gPa1PQuQRxdoa5d9wiQTJ7vBzrTnKrbzghuLG4rw5Fxpq5DVgsLZ5kx9fmPH",
  "key15": "48gfX7JFyJTFVyvzhcvVj36n5TUKoJrBVjTsGS1LLXcr16nZGF5qB3b6iLxZQM6dcfZ5zmhXQ7YTW1hzX1H8x4k9",
  "key16": "4UQm9oAagYqHhcxM19EY65LZXW1ht8ztQtCubebjftoj9oKGF2qPUaxpDNYWbWydUp55RFFFevN7MVFvdHvXSaxW",
  "key17": "uyKdNCxgKLNkipPhMsuBhoFbFx8uRbon7GdWypzRQP9S4Q1SdLmajmqu3zaicKwyj7aHjzvu5tdLsUmJGuwsSYL",
  "key18": "5XNkCx5a1KHFiVbQVm9s1CQExXPzonQ3kQ1gSvHfJfiCzVWkaXweLu5MbU1f243Kbx5NqoU8RRSVWHhG7xKRNCDP",
  "key19": "626sXc5RXsJUFU5bdaYUw5dDg8bXM6St7vsVoW8eUCVVJo4qibvQEWCvvSpuojvueMRZAGzJav2W7s8xfbhiVXGT",
  "key20": "53NUGqU9Fx8J9go5NsT3kJfpdoMiMCz1sJ46W2Ar8CnVxupR7pPV6bmNLH73u2uwjRqjhvbjXprant9KGewUy4q7",
  "key21": "59MfcxNyqW2Ni5wGBMGnN4kg8TbtCDkPs5s7dwj7FM6smYiTAx2c41uCPQDHz9SSSxHyZPmoCMsM4B2eUsDLhvbu",
  "key22": "5zq8ehhA3VnGApg4XvSZ4vexG9aRvUUoJfngjjgCgWj3Gdv8GuiA1adKB5ZqddDKCrfVrdv7tsZyQEzXEqAQBic9",
  "key23": "2K9Q1i4KNMq3TY61L9HsEagop96LKtESH42scg1fnsAxhEFNZTKcnzh3r7t3nWSFRtCyPKhQ8yGC6J3GvU8CmgWz",
  "key24": "3MJARWQpHAsiYnxpLFjE7T3r8mogqPRboAeyQCbFaPrQwR4HS8PzLSujSa5AFaK18xSC2D7UkKrv9J6ixEoY2wT7",
  "key25": "4NQVi3ACYb2Yp2Y9W6EiJ1MGscvTxuJ1FfS2pwsFAWZgfJ8V77SZekpnZQGWYh7duPXKGLKENqopsGCpecTt44zk",
  "key26": "2rwuXKvr44N8LyKUtqtWN9x7JreWGhNTju2Hw8PZ7wfErNxnc7WLA1DrFfEy3cRhCJurQHzrkbD72nGor1WhVdYp",
  "key27": "4mxss9T3rVrqtPXj2mLgwKbhUEXZEfxifez8CZEtKCoBpQrvR1xK2omYK2t2NpvQZw51qBkerpiNDBjYPtt9huZv",
  "key28": "4a4BGKrUpzoEgs1EprBydUp3r75dAu7dhanrgH4y8iu1qGMQEjD66XMqP2jXLRSVciPboB8BgnLzRfB1LWrKR3pV",
  "key29": "2V3rrKH3YH9qrLoPrXVfKGh379B7sCesDvkTDAo7dERSqetveRyj6MFjbZFtakHaUazSjxwJaQazPwRZAwKrtQ6j",
  "key30": "3veuT913LTH85R6pcu97QV9fSVNBxprj2FXSmFPGzinRceY2LopZzFftBt5MRmAgzzHGjWUbXSo1vxh8yJkGRNYG",
  "key31": "oCgSj8CTB8UHKzLYo6wHKcqFD22BzpBfhQqELdnBGWFnkmA6RWRZJsYH7v3GuqcAimuazTC29tyJCP56Gebrw8W",
  "key32": "4Ke8xx6LwT6YgbCWic4HtcgPfcDw3bqr9ncoy8vWkvZbGA6tG8p24W2uo7UwABqr7v81jYDqM9eD8P1xdyLwCXB4",
  "key33": "CUy9RTikUNaZhbck7615ypMDWCMwsh9RjttB7bxsn2oXTn5oHXJ2zVi8tJPYHZTPmTjHmA7WVW8y9q7A9K8kCMA",
  "key34": "22ihsPq3v8ywYDdEvTLayiAAGEKjH3woYZqmYY5oX4GKdeLAsYAx4W5uZs9PKzAjajZBziagU3r3cs5G1DiXHgbo",
  "key35": "tE1nrr4LFHw9w8JZoDp2eaHbxtKBRkfTNTBixnp2Fk3Xk5hipiKU3XKasqrYAoC327q2Ut6ewMfgqwAVnAMicPq",
  "key36": "5ezvgAkPWWXV9NoKsgPBRcFWEqwuneikiSk92uUp3DVRLGUQu5j7sn1mDu3qcDkFyw15EScvC6Vsshv7kYRs3obw",
  "key37": "4uXAHsTE3ukw64rNp53zmEcxyC5Mni8jBzHcTSBjbU8RR9eNeZZTkAeDJUQTz3mFRyY8EgZT49dUbVyCouQcZSvr",
  "key38": "22p8uuiDYV7tBHhTB6e3WtRt85DvPJnYrzgjyw4P5jtasgheVQz8Kit95viL8CbsGMwdBMJenX7hiiQqBpJz51LP",
  "key39": "2vz178pBjqUD6UCU3Ng1ibfckfYpzhtbQ2BKohJHnkp3xaXNvfT74sKFHqoNebe3bAmSjPxh8M7AdXX1KPVbgk9S",
  "key40": "5dYaYmUJ3dzLH5Y9GZLibZS3TtgQMi9XMTzAeU912N26gGHWwa2mhdB2334maL5mysHuxLhGJrVvKAr13XbtR2ZU",
  "key41": "2wouk1pXoz1xk4hLdZCZrJyoGC33X7FFDVugcop3s4ByGAM4oXKpy3Qjzzx21z8zpj38cFwjiWUyK2ERHZhNB9BL",
  "key42": "3NSh48agKA1HHxeKX6hY9q81MtqQXaomAKRgCt9C6FYLy6Qw9sehnGmcbgF7mWhoBiDgPHyETUYmcG2bMkSvBhJm",
  "key43": "45zU8S3XjeBeicBDWNU8Gdaj88KJ21v5EJzzArBeMqGnnjjZfy3BvBBuGWxzBQqCoKtcX2KKWYgiL4fsHgM4VBrJ",
  "key44": "66EWfbDLkg3UTqXAYqGtzvvoSiAAQHgrSVcs43h6st3FEKcUa4dWVUUG6NYToXs9DM6oDkRSZmciMRNsxx8cGM9k",
  "key45": "5p2wQUNo2NGVnFoPdP92tgxrPYekraPy2qcjvdNDbTnxpLC9F9uDXFDiPHjgxZaHs2QYUYhkYgrBXxSL6pQUVamb",
  "key46": "4Fm911rF5BFGHEE8pSUumJsS7gp3KAxmP1svnZuV4ccsLgcHyMWaBVzJzoDobPwJtcVyQDem2JUuVP496JY36tvN",
  "key47": "2mhEPMrbRgCHZGWcvPKLYRyF7rAAT7zy2zWmixsmtofoGcm7uEtUhzkkyEmjMtTqJC1jnmBwt15nzu9Fm8o2eEn1",
  "key48": "42Lxeo3FCMCZhwhBmgNQfrEEydZNBpBid9TTKnbvijf9rE5nah8R9tD32YcVw3C3UdAL8mTRJQQtsvn4tXLsjjwT",
  "key49": "4CXqSop61U2PFwrbLPbAzgpfcpwG5XsqYroHmZ8uwi1eZUqQtRJdx7C4fu7MyFrDn4T5qeHbikLrHf9FcaCp912d"
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

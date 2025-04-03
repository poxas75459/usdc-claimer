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
    "2uHJo5CjeqcaAHGKfRABbiceND9Hm41j4WzYvQNYtRAiU4Gm2AxBdmWu7G5eY7d3K2XYYiwKdzPNVETA4aC6W6zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNRg8ymFo3Cax6Ctgk6tt94z8WUfXAnqBbKgnFVCwq9qzP6pNcxJFcaXqA5pLQA8YntWeAqrFpQQDeJyHzsb2t6",
  "key1": "5XA826qq1BRCCnWyED9AgLWrgitXosjcfRentQP2BUUqmRH6HQKKPhDo2rN4s8KQe7afS1J79n2EDndfRjW1ThPn",
  "key2": "3vvM4Q5m496ckoqs54tNa5dL6wLKVcNp4YxT5DuKzV8XRZg4ys7W7pfutYp6dv7SFboswTJCPYNzh4AmPK5QPHAB",
  "key3": "4B5BZyLuMmR9YDsw3MhP8tioczSkWEgDzp6dwZZLJMRqbGyecysYcbf4ecngRm1XrhUcoGseBfiovsE2JtLmMjBC",
  "key4": "EjmwARwyVPo77W4BaByp4jWDEUXz3QWnDh6S7KvB3cNTTGsuWp9KcPfR6r6juAyZFf9poBzRKpLxWi6djtziCFf",
  "key5": "43uMbJv8aQzu9hyirHwwaZxvy7mB8dbVYmzb71PYuPrsuggPkdPUAiFzSQGYF1BzFdG19WczkqNJepfGib6UiwMs",
  "key6": "p9fFqq8NFyGetZFZx8bxqr9udqp27q7bgDXTTvqVCHZeBJeBUFyNarzdfMY226QDd549T1KrKmS71BctynojxTz",
  "key7": "5CQBmJk2rbitkTR2LGdsCB9Ggks3vreW4zU4fMdCs2JTuL87Zcd5Jy5Pp4gaCdoqXV6i72siNrpytrdsuv4FzNRt",
  "key8": "5Zh14jffLy1mGscnLrwSRzV3XbXShVuwGsu4AgGYEC7oPAm9B8zAAQvjEqMeJ46uH8BYZi4PVQBEpQkAd1tMAhsQ",
  "key9": "87Sh7zmciyjNKXN9Ah8vntXVXGeyior71ETXhvwt5CsAZxMR3wnM3vZxuBfETXgurScnydeVycoi3TSmF18ixXR",
  "key10": "4ZURt6z5gGqtzVV4TUW4QLjkzwrMEbxWvqeAXybigTb7QjtQs1TT9zGAFe3EFXWzQxxzYY3j5qhgG4rRivyX6vFQ",
  "key11": "dSsYhNXf2uEn4we5LHXbv97TEKXgb2erDr9bJF2agXoMdLJZKAviXHfKJHXQ7oBnhN8Xxn6FdqWvTTL2P2XtstM",
  "key12": "y1gE9KLPUNwZfPYipVN7aefBZV5D4Wk7tpwGqb4E5NgpW9LRNMK1gmAQhHJHex16o16zTY3WR4hQFHYSaycgjE3",
  "key13": "674ARNdFNT6FL7U9PJcukHQb2o6sqQAfn2jCFGvfvfWjK23amC3a7xGG89XfBK5t3bPr3hdVJeUxkLbDxRyQ8jPW",
  "key14": "3tJo6kHbA2L3RFC9Pgvi8QzacqwUJcXPFWnw1qJt4N6ehR3M2xitwygaRK6sjpPQKDWzi5hHuAJy8uijwSm7Sreg",
  "key15": "4r66hmmm59zheKinwGe8U1rUppFPYRkweJ6MKgzWQBofKsZ5fWVwgUkeHHLsK1rAzgc9kWfSScEJG9Gj8K9MEZMu",
  "key16": "3e9FAFK6aR5vdf3LdRKTHw4SrsZFePZ1LzcZiC7Jc41uLs9RNjTkibisAiA2CapimEZ48nL49CHPcoRYG924zVx4",
  "key17": "3q96MXwuaaNuCtKAiGuPkkCACX16NFTesGZu1m7ED3v4hsvUpGwehrLXFytYmKckFGuYSSdyAEF1orx29mbT16DA",
  "key18": "2wYmdpA8Tioffu4fdb5TSRoMchEnn1VfSq4cS8eeNyjYwAANh1rriF8UYuQzPRKwnPjreagTwnv64DpXBL5cZTGk",
  "key19": "2xwqvnp7Zjs4Vn99iiTUtn45wM8w5CPm6e5vL7yspjJg5zKoeVzy6ziDQF9jnY4LTNEVotcRu2ejauHM9QVkxqRe",
  "key20": "5Gn4ysfVJ2uhMjNq5Niae95DNgKDnFDjnurbFtWotcNpq3CC6PFHrGnZ38C4AU4qj3HJPgbG6dieap1TmSa5VLgi",
  "key21": "64mRfstqSXUtNXefj2hE5nQW1SFX4KmeDSx7mGhiFQP8hF3pidKSXQshPF8SAUM2GhQ3V4NbD1ab44xHfm7itc3r",
  "key22": "3tc25cv54yhAm7SPg3Ydo2YHYFgT9G6aVv5hS1JjtHAqMUc5BkygPozQzPkxsm6k6eN8QrJTSwDh2h6m8jfg7i5y",
  "key23": "5m2UehfoKkGgatNvQUFCruskgk5FF2vfP6T3w6mjPMVpUEs6tcQMt5Mf2QUHN3L19aKgz27XYkCRKKntKZJSt64N",
  "key24": "4FPAB9cjbAB4LbwTVMTgHfZSxLVywt9iTHeySpL1MLU6aB6pWCtomuG8W2xxwvk7JBeyRnd2qc5PQ3hHsZv3XAqE",
  "key25": "5W5ZWpw9Qk887UN9ybnfLiyC8iPvk6Z9JxAGXmynAUPr1LwmJPGBTP7mBXBW57NpkAx5vk23dcfKhXWmSqJPEV2W",
  "key26": "2E8Jf5CJ6ehA24q3TeespsHZHFwg7gfbThG24oeXBE2X2escthHkqqbtoFEFzFPvnvuDSE6Yj3UmRHKzrzoucyP1",
  "key27": "3Zh6a4zw2EyfmCTU5wjCCLtNKhRm5gab6K3G8XdFuxEnadk6RGoCGJuD7a1eUqieAvhqugQWxEKkBBNg6ixEeT7g",
  "key28": "2j3vp3pzqpTMhWWXbWAxQGWZUbtoMNgAtPtYVYBmDqiuGJZnf8Bj7EM8wWHDQHKAwGQZJdUHZiAK2hTYcqXUEaSF",
  "key29": "5Gzo6wbkSoQtFhTTKTdGYikoyTpYZjM8WZ1pr6c6C4DmFdXTCWMjXPAktXefwxXDBc1iGSVUWfu5cL8KeQHBNR1W",
  "key30": "5nbpRDNy5HND8uYvBiRczHbgtmBwxg2TS2CXkRcWvdSU72EJEubVMWCR2TNd6Lhq6A4tRr3mgEBAb3NApAZLkCfP",
  "key31": "3DQQnfEwFRjzfdzHDmXKtDEDW4JhzNRSDJUq43bDpUacg5JJkbWY7cmg4WPp6q4HYpaXFbpNfHSwgXbpV53eCV6n",
  "key32": "2foPoFnYGUHemhZhhpDbeC1aXWQqAFTkVj68gcJywnvHSJQmhVcEEohUSvwyNAs5x6rnShn6M4hbq1TnJpesyrJv",
  "key33": "dhHkd5uAE882QfeYXqgnwUnZBVGSeyR9EmeiQdkwwSffqhDqB9wHnXZ4HoWLzHznJqqWKZCA83AhiRerxLGBZgC",
  "key34": "34h4sb5zQcnQkrbFWCbDeJGL95tRhV9xTp1LH9RCAnyxj61PSrcKtukSXX5oRdBRuNkZAqxMRUmdAP7P87uzsg3c",
  "key35": "37K2cQh1umQVUGLqp7TVVjaKSARfro93Zywz4EySBxd4a3tBAMU3W8BDZ6LFTDAW2tiM9g77UdZVPSnrUH7oz9gL",
  "key36": "5NjB8tF82ytoqcgqr9KmpU8NJgfoXLLkfC4FHjUwjcGwdoFkodLik4Pyzg3hzQ4M3dgjn3eiGZewXZrkhv3womcp",
  "key37": "43NUmcLFpqfnHL8UhWzy5caVAUCcWrUTVznkVhUdRvgmmBAXaW2UM9kexPf3d1e5vDKZkYWWy8bHTgZLep7ZCpbs",
  "key38": "2vaypCE2rssck6FdpbentFevqZuxQqdfrQvxCD6rducj1M2625hGSbrRkmJNT5NGkycKV8dzEeA6YmnfjDDm9jP",
  "key39": "4s5mzTUpur5oMJYcRjeeA8YP5Yzyt2Q8g8dgLQRo4dbsdU4gzwtQpaBqLem6FE78inVr55CE5teSTCi56FTsahky"
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

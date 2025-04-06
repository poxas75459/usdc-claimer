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
    "57J8yutJAySDMMUmyHLzZAxMZMzfxSqrrLwmU3cJDfcX8UsDxwmwVYWEASvkyfWNPtLsz9U8tEK72nMeR7kAPK8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDt4mxtTokH19HwnZYyw1enq5BHKTBTTu7558G6ojhHrD2TjToo6oJbDYn3suPQZwpzZGeq9YYajwwBrwWxivtz",
  "key1": "5CYcmBAW77rTfa6VQg7EWAHGP7cejUvfe7PYjfrzmNj3XzWzS4Gg4cd3XttdL86coAUABhZnvGrLXh2v7XCNKWkU",
  "key2": "x6KoxGy3dTVsrXwvMnqyVakpg9j8XJ7mBLbcG9wocdEZsVCWVwo7DADSPVZbmP56TWutPG1Yiyc7KuHDsBrz76X",
  "key3": "3oPnDGFqWUtBBA8uqLoafGAikgMQtjEZot8QEiAdb93DBuPjooQhzfLffpA8zPmwesbhtetJi7iPXLSCqjFJ7bVf",
  "key4": "4bU1CBf1jFx8ZS5SXWHiCm9fvQQiCQuftR24TSfzqHZbmH7D2gGPxFiSA39jkv6uAVZ9pFQFA1s8t84kUNkrSMUZ",
  "key5": "3u5nAgmozrJAtKM6XnNdAuBE2LQ5Q4c17TdewwdSLfJifdn3m1CgQ8vTdnexWY8tGbfSakm6HS79aujaDJi7Z4Gz",
  "key6": "4Wq1G7oRpXUXDQVt1LoaxYiXHwSXP7Ce9UNJWfHfg7k3uk6YaBNekvg6WTTb7somakStGBA7utLWxpS76UvR5S2y",
  "key7": "5EXtGVtSiKKvJLNisEzCDMVd74tQpJxvzqoyt1rmWmBaXW2heh9FCHbW4bexSyR9FBWExT8NeZKe9sG14TwoD33b",
  "key8": "cxcFBbf9Tthfb8Pbfgt5tFpBA5LVFjwJQXshvrW4ZBeT7dVFE8hDvFigGcQXADYhb9s1twRPPB1pZBP2cye6RgY",
  "key9": "3JqztcCJknLF2XPyLowVJ79WFRDXwxahNQysChsWZQAn9bMKGvUKswFz51JD8vYVAkCNzws8RQBH4EMSfjB9oNnV",
  "key10": "yryoP8yQwCGTaENtCGL2joADZS7YSJWaQw3yTTXKhjQjGizWyocWEEpJYSryXNPGx5y3ei3wKdB5wQM2z1PvTWY",
  "key11": "5tGFH5J5ehtcwYLqajwPihWzMqTvqqMS7SjxdVgmT8jacEyZvRaNgzomDTSDj6MBd4YN6hvcFCai75sbXUAeBd3f",
  "key12": "bcrWUT6neXhoiefGGr2TWbgJ1y4yqbAAT8szBMDwgq2ovJaQXwNSVpBp6guVDYQVsYWQ4Bfjb3jEijZwEkEv5Vo",
  "key13": "2ZQe6upsW8vwAktHhQZ4ZHWj24Q7aU1rxWKAeXz651wcSmeLGEd6vdFbyN1PbiHPxRoNRgRUDHjqcjt4kVj7453X",
  "key14": "5ysW3owAH1xuspVa6D4f6zWjLv7iRSU8Zk9KdBsUWREWU1xhgRZu4jfdqm7scev5h8xi8tE4Dm7eDL7GSHG1jugC",
  "key15": "2URnKPNAeUi8aKMknYx8zAoyX8oQCYyKToExnKNwDki6dv1jgiQU5ZXb2XMzDnz6AJzUtz2wNkwwhxbjjsjpGnJ9",
  "key16": "4oQ9ZhihJTPAt5D23CsdAknubKjQeE6assH32zo6aXWH1dAuZFGGsAcJXiwoVjqtmESpN8F7rbhwWpn2zjP5mpi4",
  "key17": "eSKt7JeuamWCTpc79cTit3zkZHg9c2aHNd19qvhmJd6yQTzHMFAFFUHdj1FxiEQcesLfFt55DUnWxsZe7cQwNV2",
  "key18": "4CXHkG46ruYwiEjfWnuynbtSjAykPNLngP717Z8fGEgaaBjBYEAdgvfx5rf2ngXY1XAEdCzC5xh3Kr1FtuWJ8S9K",
  "key19": "5VbMjBoUMbsHniRccaajGeHmhhLuNsNSimEybSnQE1oAog6FDfMnwHz4aECtDH48TUu7Psgbkv89HiHkUGAKH9TD",
  "key20": "5jQ9aQvDLKaxaEjLzbdSp8gkguyFiEotcBAnRv35V5emKHqFDDs5ZKxkXXoHqqYfL7yA8dkbZkoXbMjxUyy9gzsi",
  "key21": "66iMGcH9XCE1AAxoDsho2gX4mq2TEoZ8HMNCkVbBowTyv7wnCjihDCRikGmM6GgdEwYmDHjnLWDfL4hYKj1LinfM",
  "key22": "5L1hvwF7KXogotBtZr3hJpVF8NpAWUKWRBQQ436pwqbCg7hRRjuDj7kfQ3KNgHbvdQrW3AVXwot2xENcszE1rZrR",
  "key23": "8pkrUWjfaDDFw5bd6bDV7aZFYXNbfs6PykR7TsbF6p5WnSqWyXXcYkKBNxzzvDZjdRN6qC8zsRQFWkAbnWD67Dd",
  "key24": "38dePGdAnDcvxkgwGjHsf89s35gKQVMJCkj6fiCWi86j26deH6zKjqZqcrXRsFMkwhmuJYYHQi9MWkfEKobt6uie",
  "key25": "5gTTvKyTCTYQR9QNdPLQFVwSU3o8bcZ53x45atNu6GMBAy4qFV4hiSRvEkSiQCFvYoyyjPgmNvmxkmE7weZgKqkG",
  "key26": "4w74wUz3Uvscp8ZCEadaG8UCAEb2yCLGWbpVcZiawaYV8uJGPPh3VfEPif2Sm7o63PXSGCoXyicAX6ZEAvo1sbiU",
  "key27": "3ZiioEuYvzu7YSWywGfsFJPakGjZCprjUY5teCqiZCnu9zMXQWHxhxxt6EXTAhv3MjjbPRkZYCvxcsRvRzGQSBPr",
  "key28": "4xWRXWShWRfYBgfg5MRsTtdwfqEtKfe3ayyvua7UjpFs5ikFz7u78x5nKuxc64DA2RGabX3FmELLjME8G4PSAiFC",
  "key29": "JtGhBPmzWxtbQE2r6Hr7BzPF1k2jx8nSGuhxs2AjBighJKJSHMLmHdHpSgegnWV8JJZMe8FaebeXZgFhB8hHRuE",
  "key30": "4jwBNUnLk3EXyt66vuACGfZWr7wuTiQ6XNZqsM6h7cyu4WtoM96zHiTiCaCvKfBzi3ZcSFeBxgXqJyqU6cCSqqmk",
  "key31": "2CrtfFBGJ2ZzJcpXFrjsFbmXX6SwyZa9694GHzi5asV2rGJuEDbS5RQANbjvrVFj583XoL8fnpx451PBKnyPz7RG",
  "key32": "23cydLkAzZF5Nn7edtsYF4A3ep3N2WAq3VH7bz2ZNphX1nQjVAyKMwPoBhqJjRmWd3S9eAt1EvSgerUvfPmar7oi",
  "key33": "3RDUtogK2zL5zSNDEDXT8Hu7mC48iw7VodP6vmeR4FJsinKZZwULCQENy44nnpKMPThVhSogcWiEgUEVHbJXCAHi",
  "key34": "4PgC66hwNNRhzzwAZkZnxLMXztNDoM4cXsP5aGjYZ9NeTfJXnqGNoakPbzRGpcK5yVffvhsPUsLp2s3WybFxYKZc",
  "key35": "4vrFvKhdcaq94kRsPnGdWbGEFoLNPW2QEnjuVYmtmAVSdJTCJ69V9LUCJEAtsUfu6tKXvJ8pWaFFiDUeMAxNCEp5",
  "key36": "34sGG2S9jix7pEpq5Qw3SByRkP5gzXPYR3ybT9cG64N4oFBuXVoxN1qbAq1kGd31PDhg25P5x4z3XwQqv8TJzkvz",
  "key37": "hrEjoDXEV3bvPt2ZtdHGCAnEKUWgA1DEjpstdNvNZMNa8G9nZrYzcNziAJnXBgkdAT3eGRv8effwYYijvzpLqFx",
  "key38": "wXuB9daW4Snfx1hN97BxQGvYNYbNHMwn4HrtyK6a76vNumRbntxBNL7wGLZDJs4eSkpkzBgRLLvDjhzgJmEugNz",
  "key39": "41aRg5pfziied1dYp9DKYPsKaw68wKDt4CuPhrpk3XqEHDXQZ1dnfyjT37VpWKYWbi6UVzKETwnMkz3NfwT61aA6",
  "key40": "4vQEgzkw1AZAtMgd3QP6J8ErS5zRwRMsGg3dFuVzDYgiuDyAF8qWMruUy4SkXgEcYq6cqMQDYGKHp2yDyRDRbtyL",
  "key41": "3s1WvzYLJjGHgV7EAvumgbkbQMjr8BN8ndX2TuJbvYnRJELdMmtRp5TAdAuvPYwzQ2JjWVzXKrF3oQEEg8MRBoTV",
  "key42": "fR2KCEQeAW12WuoUqEjP6Reej21nX2WZZA9fk4Rj16n3yfVNnZRFrPDc9hxK1DBuhYL445s3W3YSvCuiqYmAgX3",
  "key43": "zk36jTFuEcHF8XAxkAvCEN8C91fZxGfg2rZ94Q4P75hmZuFhvaLwszMVWfnA1VYCqPztiZvZrT15CRQeQpAbp5d",
  "key44": "4AAGdZgGEzGNDG5QiZmpKCZoXqFjSzrKw7GKpMTz2QkpSiWjUKzNkoMaV1TFNBBk4tC9EHhEAD4r1HwU2uUokSdt",
  "key45": "5qAYCLdBEa9EPuW2w4wMHiVzPFTaPCqqm2oCY2kLfWB165W2aHy6ZqydgoeGZkPUUQnULvek9yPutJqYDTq1Y4cP",
  "key46": "PQk5Z5W6gxqPYshu7ByMKTbqoj2VQAZbrPi6tQG2CWUHQCStnhQrs6w55fq6wfJtaRuRziVVPtY3vU6FpFpoh2v",
  "key47": "1QTBToQmpanYbbPh6xKbRpdy6JE9Vpn2H4gCYx8JJQPPwQqzjQuyz6ZoMEydQx25mAXTZEP4grSVDrdg8U6vd6r"
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

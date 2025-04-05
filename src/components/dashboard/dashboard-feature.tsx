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
    "5npUzqnALWdak54GhPW6JHYLMh2actL7dMj6HzSLW6ThA16X6n8B7swfwPQ7DFFTs4GofqCbqiDr4rzXBnJvHCLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uE5iP2nhYrAd3YYqTqordBn5HHpZHNYmNkT47WrzLtXQuE1R1352RFWScvUzbpbLkz6VJ5KTXuBxnW2zR9ha3AC",
  "key1": "59CxNFsrnbCs6FDBZTXaVykrYvhrCKcryzt7ohVhnPFq2gxADECTuK7VkfeAC8KZKcVhNxU9YQfJ2tmwbL2pfWgn",
  "key2": "3JkRBYuTKV64CJ8NTkC68mnr32qXv6UYzwUvaqT8QJzhEPVUXPaH3wSLtLKMGB5N85Q8pRdfvA1NBdFnzoTT1EpZ",
  "key3": "4y3kvRQCaA4hfU7zL7XXjqWK6N14BED6sU4yux3U5Q7xrFh8MzLmUUxQoJ47pV16M9tbG2KbozxyZpH8oHcExpXK",
  "key4": "21HZs9wLvSKJ4z1Lxfhbmo31smsu1NHwi41b25eSxvVXuyKYTrgJ2c7UCVQ3i8g6w8Ft7NfnV3mWotFy7GAiTAHx",
  "key5": "3JuWaAEtH6aJzZPy3rm5WoUc28BikJEn1cpEHWEGz3D3FvF6Zh36jYqXeFAVSYbrmj3HbjWRTAtAf7CBT6fSe5T5",
  "key6": "5BLerqq8hToaexz2tsB8aEfGK5m59MYmBEQeD8bccvBpovmPKVVqPcZu9Pk89LEVDJAXUYiiUSao7JjKgJophcb4",
  "key7": "YmvSWFE7EqBeo84sv8FLUBfC4ttRyt9vvmJs4QrNwVrFQ7rFCag3zxs3yLuMqiJRHhJLYDjDp6rGj3ez7wpN1Qd",
  "key8": "5f2RgGM4ic7WHhXVp7MhUMi3FAomr3FUnswLgLVzn9LKu4hWJnQomGWJvChLLxUWUmWSAaHZpgikY1AA2mK1uGoj",
  "key9": "5EPTRiq9yEJYKc9CfxuGs5JYgArXAA8TqceBq79pYXu58kR2E4PXZQJjBrvSRkZcreDVGYTG279DzYNLod7x91Rh",
  "key10": "AmFiejDdJG2Jht7uH7h9GHsZcn3eNr4QwBdCw3WMAC9W4BqpUM55VZkD26a9Chq1XGycKjTK8eMKaFJMWJdWHUD",
  "key11": "64Y4xoUnapGsq9eqpvamBdGjMQXA5ohQdjsUtk3B1sLQksbEpLoP1zGo1K9s9RQgQp2mKB3XjB3wJQ1NKxcY1sW5",
  "key12": "3wByAmxNZLCZtCtcTS5vWfuU57RoHi1NM43ZpzfHyjQuXaj2S2m79mZkmMV2oTdhfyWM2NUfRPu9vaoCJvmsEqg3",
  "key13": "3mSdhJ5mFHBnRkUvhipvVyhi7AfS34VnA5AsQ9qaigTKZXv1LM6ZDzpqRcDkxNe4u6yRdY4t7XdA7CidnUz6nboP",
  "key14": "2Vv5VBvS8tce9DD29yJvn6D1ZwUwUU3kMQmycsAAftEzEefMiz6detcKrDZ5Ne9659v1NQ5jmWk84vAotuw6PJXx",
  "key15": "2VsoLg78jPU7B91zhFL5ro2tV4GagwwLQu6iLJ9Cu6QE53qbSZ1N2M5cM7XB1AQiNDcBZKteAAz3zpN68arGJub6",
  "key16": "56kbp5UsYkPx9B7FAvC1YpKhsdBcQEp5HiMr4jfNhg8p4hv62c9c9fnMRcLcSfAPy81xfPri3mRdSKBWwcxQR1yn",
  "key17": "5wzE56SwQWH4gyik4cJiho4qyPvgdNRiXRucro7GhJyGfNDEn3xHKnbPyGDKp24VR89bzBvMkAuV9HTUDpwGz6mh",
  "key18": "2fmzHjb5M7kraoqeLs4sF5KT2FqoHncMnSQ1K2b371AERAbU2H9oYaUH3w5K7yVVtE4dxBSet5Ho3cogdTRbbv2T",
  "key19": "vAtGurfs1gEJL2D7LjiKKA55TBnLEtqQE8v7PReJA7WCXm8kN99DPX6LzWvpkyaigG3AtHQp5eJ5VsasNgDdHu2",
  "key20": "3KvpLuR2bkTsEPMbHhPQapAbFnMBkuTvZRNPS5F4mERcay3x9EiWaN5JNCwUEFpdki2SLFB482Kfa7xQhdbprKgr",
  "key21": "5Ur3NFgbU1BzDnqzziNUyDXRFrcR5oh8tiFCQMxQsh7ggTgJmoL6ASjFxpoEwAwTHZLVjK79aKn67stniLiQoqsE",
  "key22": "4fVjD4bZpBEiN97J9EWqg1FqYGQePR2nEWuqw3E4hbDJPTqm4M4jeWGQ6MApvNDQ88e1iMsQAxSUKgBx77KXDrzn",
  "key23": "uTV1hCgdMQjTo4zXBQdqvKSPTidVe6J1wY5CLoTNDjaeRpFAevuAbqgRhFGb2wRmPVZgwC4ZuuAPDXmKhH1npfQ",
  "key24": "5qxkCjWMBzzKqPqYmLY71GRnySRsxJBXDUSV2K5NhAy6BhkMVsYhzAkTUtKUXe6JJz9S2hEyv1gsfji6H8KHhM5c",
  "key25": "3tc6T8qiQbwQ4bT9srSSrURamuJoNhkP9ubpV23LBtLJuXpZ71uT6UQZcD4oDWKuT7T3fvfdbtVVLL3ERbdS4a1t",
  "key26": "4SaMTPixU8YGy7voVNisn9R3H25vrHZgDQbSP3NmCzojCTuChxFjDkzhznZ8cFy5tREZVpA6S7S6LT9ivAL61CNU",
  "key27": "2iJgakcgLHdn8G35oRNisVs8BwW1aEBGFoCdbeBUhMwYsJt6mDUMExqKPxnwo7u5KEWTWHnuMo4WHiN9PHKBgSdy",
  "key28": "2hoG2d1KVJSWpXtJWoHxd1kboXL31uM9dS4FyGi2jBmTX5xWLSVEV1D79hEpSjvroYcAgwTTKoJqNBqwG5Lzi32D",
  "key29": "CFNcXpmtK9vhLh9MMtBbABvZybnEzGxoT7LUAR1Cko5CgWm6UQG8Y45Q4mnL8B2dGL1zMxCJGuxhWsXCQNewPps",
  "key30": "4xjkUd7zge7kg6aZ2KABRGPo93PYkWrStt49MMvvkLzVzJgGzbarxAnhEnNiPs9xHPpA912ZakfDK5LYkCm61bvC",
  "key31": "4f3KdsZkL8tEUqsmzcXjYT88Dp1eBYDNdffeJ4qqD9NCNaPwn7FZnxeyJXLsqa3syb7vS2RsjM64R54YLnHPZcTg",
  "key32": "46C7B17sJL5ivZJuMp8oo9uA1FV9kPr1nEFMxovUCidPAeYz5VQJujwtJPCJr1gxQMh8aMuBbEyhDwUoxK5rBWch",
  "key33": "AsqqCrcVqPaBL8uKymAP6FgScwTJxHbYKFPfm9zcg6KcudhkriAn7QVuE3EE2G6sq3Yd5m857VSf44yF43J7J4t",
  "key34": "5nw4vZAdwnkhyNLprwYGWQ5gTBjzjSnEEE7iXyKfevvbKB4yt2o1DrrdkDmhAhrA15bmXTwELDYGLC9dgNMAHZUc",
  "key35": "4nyMNavhKMs5rrChXAawC7JomjxwDdK7CEruGZ2EGsGoYsUyku8d796HZoEfo1xamhmr1vVC3eYCFzYopjHH9uQ",
  "key36": "5ofssYJbRzzKMB6Ynfxs9eJRH47WnqES9sqNB6KMpjqm1hYVbGjgQctuRkj6unD2g5nJ3cZoqfBYLa8KDGQsM3xK",
  "key37": "5p2yaGJLtZ6povqsPiWp5WLbXbhn9yNFUxXrvj4Qh8c2y4EBE3N4u2VJBQYNAyNBooLRza4BDbehDe2fVZB7jrDv",
  "key38": "5SqLmCfu4FAgwwMEu5DRF52gu64Ju7yXmy6Wx95VAPwjr1DNmH8nvQLWaBZdYGr6S7x9Cw6LnvrvLxUpX3ugLpDY",
  "key39": "3mCjyiktZiLjQLEqrYvNd7Brrdob3Sd1CGfgxXbgZSyjYhtDSrgkBNW8BhMWpW5C7LSzpu7LctvrSQ9baQKK6RWP",
  "key40": "3Rk8ZN4UL5j6evYE7VEe5du7AAA7ESTMwGxGP8mEN3sXrVNqp87qKSwVywWvpp3ak4Y9pV1pTKt9FPQYqWc8iQ7z",
  "key41": "3JSgxWgBVTRm11r94zitX7Jgdmddogedv8sqxQQdrpeBBqppNeFytxDwg28LpQJdBjVnyY5CSze8oFkMhT34FhaC",
  "key42": "4eN2P987RezcLsBXQC2XcvGJB7tHsn7estFJhi96PYXTd3VrLnUKkVLyryUTDkxih2idh1BgsoipUxFwad4r8K84",
  "key43": "4UeUCN5nJp9QbA1FSwkbxwjbbz1dLgegv9L3dhVddrESfNbX2sJVpQrnWkRmUj3Uev3ZEtZTVaADcG6BjLa2wpFZ",
  "key44": "35RnLAQ3WLksAe6zFy69DnbSG1NN62SR17bPEPhNXahbM31BB7eyNyj9NendQG6V1mitzWPh7Mvcmoq4MgcRv2gx",
  "key45": "34kKAJLtBxXmwaGkjb4iebTyUXoDg89of2N5xmFLXzkUnY7aiUrmifKRXV931YUYJqkQnEhmjpYeHjYPXkysEqiy",
  "key46": "4AzdKWqgApiyXutCMh8fYSb8XXM6j3bJzBcZhcbdZXkneQXe9DaP3ddE39VywUAnp4nYwuQwzbDjWGHHQ1fwDJiX"
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

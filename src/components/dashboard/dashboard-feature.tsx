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
    "aU3xddfoiWuyZNzodQHD1LA1hD4UB9PTdUCbSMQaTtBV8RGA32XZwwJu4C2XjH3FDYQwTmdzCQUspzTzFyavjsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NvAoCUd2h7qPdDh9hddEUzX9s69hzExnXVvGpm7WFjyoVXfk5cEucWaWUMWKmzSJDdUKFsiJazpZF5u2gzB8cY",
  "key1": "2YahcX9ExTixZ8EjgUVub8fooQVGM2g7GzChS9gECv6zgZPhJNXhVqqdhCR8faz4duHEUYLvBwvvVCBhxXgSZWXN",
  "key2": "yNdCaJHbLGzbQxCTYRqM4fgbRXN947j8LbYX1qYsg4GUoPwcT1jYc47sFqAViyTXwzUQq3Ycq5a1PwnpefNS6N6",
  "key3": "5RsB1imUySCyp5Ev1TvgmsJbRQR6qoWzaiVYuApvkVvExSS8LMzeLcHoY56HzWcM2r7pUc39j3onCiLsGS133YCb",
  "key4": "3ZhnyjBAGVCvJxtFsP6D2jXoBmxHNV4R7pSPSKVSowPzFP1qzNkRrDT6KJMgaYRz7XNTwE61mLNTkxG8xH5FJ85M",
  "key5": "5eKgqddCW59WWz1KC6wNFfKzV5HSxbsENXj5o7o7u9vzpYg2fwsx1uF325Fq2uHYUuyp7JUhbAqAdj2kesEMgFx5",
  "key6": "Dtzmk4LVXojcGTZcqCmUqT2T4S7LJEMzEdy7hBjhXhiM3eD2ZuVe6qfHBPLPg4QYxAyGTuLZnE5Db2BxWr4qazk",
  "key7": "3mfs4vBpwYkzzi4WdfCkQswdVSwnkxpEXpQ82fy7vroApw2wP6N72wxq9i4hZxGe5P8kVRDfeyyfSX6YswZACjEy",
  "key8": "4qzavRgpZuDZpKeKJ16ZxyZJawJWk3DVrUbHDYogxA2rc5QVFA7nNWSKSHWD6F4QyErEttsHtFrSjsC9J1w47sgC",
  "key9": "TVTTdNhN8Zk6vUSKeYvP7dBvCYLsZr1NvARoXqP4PsxeFvLZ5RDiQRhCqqk3Ubr5ndrNWuStXKkWafxj3yjLTkf",
  "key10": "3uqmVokGQzeLcXRNde9VsDCc4UeFisAdGLGKEaa4d81UzNLS4uZN1S76Ts5hHjNq6SqbvUgdA5uxHgUxyD3VXqgo",
  "key11": "5PAgsHMeZufK5W3XUkpKVRYFQmLFQyZEJVCVjgqKVrzNTQH2WUz2MuTeeic1rQsrkLTkCJqvPeyjHTjzLvnucrDG",
  "key12": "fu2boXQTLuJLYb3nwve5naN4wx17vSbMmNXwFBbLgGYFRQUCRtir55QFb52huNvMjzQcoCzKrywrPqptf4r1L1X",
  "key13": "2zKFoY2UNtYVpheUDo2XAYAVqZtdj63U25wJ5SpNYaJ97Q6GTgjz8DK3q1Qv7yDnHy6a2hRPqDrhTQDnHD4xe2ZS",
  "key14": "5RMTy2r47mMQrAs9raTKGNSyxnmguEzKUt3cmV5avQeKkipav8QmWe9xqygb1KBfaChuQmzdXc57EDwchq4uFe5Y",
  "key15": "19hTafN4jvQsWpQv4ddJQQtMNmtyHcKgyxxQgqQKkpfEYXrcm2rMnge59CYVq6XcGdNwbGYS62HgN11faoMaqR2",
  "key16": "3VLxaYy2wxYcWjLYbYsds2mLhduAGhE8VU4pJnpnhqAJuw82sRDyCX5vJcZVj7C3kxgihDzHYEHBkeLxBAbjUioK",
  "key17": "5NoNkYCqvK6opQwTuii3HSTwfFG9jcd1N1XNmMBBSDFvWgR3u3WNL36FNwfQV43qPTTU1yDy7AFojbxFREjjBzJL",
  "key18": "3CUoh6aJ4zpEQKxsjDbg95CmS9dyEqjNqrifgffCcTj51XzFSpf65UbBySZtvrzSjVZ8nwLAkakqztLnR2PBxAYr",
  "key19": "26aE5yTKPpajMUDTJi6M1WDP4hP72mj5TkzGuXfmmQRvQQr6bHM1FBjo4sBimauXupFzkcNYcLuJ1UiWBt8JisM1",
  "key20": "95tf3wqxjEQgmgM3UErBMYMj8wzhHcQB1SZgXM5PsMw4st5En631MC4oPrad492tTQ2mtG2U2W5bVoWM8KQwUbb",
  "key21": "5ui5Ab1QGBQbvbobvcnAxwjBgeh2s9F8DWNaxAG7o2o6kyzvqCZGoLrsa9pSY2iwsShaYbrApxyCtkXmLnvzvDsc",
  "key22": "JPy68Wk323uunSKD9iheVyKRQ3pwa5nyvBawxcsm5Wc8Sr5ee3wdx78dTscJxCDY35XTFAvk5t13fvx6gSbKUMW",
  "key23": "5HeRAw7ZJtWH9BbiVT5t7UFpGcx3j1xFoGc7pzcFishMj6W8JNnDd6BABvdLgqLUgCq8HpehKvifDRDpmCFi3E6",
  "key24": "jPoHpXikshb7EboERHzuxuR1fHEKUMsYrnfhxjLKQQ9Ghp5b1rBQdAa3x3YJKu48g54uKS55sxybNvy1vegiAvX",
  "key25": "2Gar4rxc8NQu4NJKoxgCqwKd4FvPKnhRyq98u7heNMJyJqkoZnsmDJRKgYzXxrjt8QedENPrWXypxhJ7zBZdecCv",
  "key26": "pmaK3Lyd23CzynRVEQHrzTVS7ae38QVvtZzF1pEDw2HsjqkNR5oH7CfrfmaFh8SBpvvxJdZaYFCUCxU4LVVvTLa",
  "key27": "3hyzhiErdfRx3nFkexy4hfuSJ41UGyMQRS1rgEHjU1YMEV2AW81h5XWvcpev9y6j2hB9bkJkV2wy9JFohp1cDY3k",
  "key28": "5MK8Kxeedk9awebts68HFHVz5Wp2yr3wd1hh4nQ5wyRap8AVHSNdBTRrqnSBEdgqnj1MyCoZ4KBCPk7yJ2GXmEwE",
  "key29": "WnFwFAzkwbnjogi6Uyfj8q446hh3oZWM1htP69LfPSqYjKTWsR4vppveXscsbEgPSKVfJ3BPr4i69GSL1jXP26w",
  "key30": "58uQGkSqhFNpuyVh7vXewe6PMnK81rthPVycMz6dBkpRv35QKPrde62Rrv1m1Qh7Pgd9jv5GcaZErwUKShdozJsA",
  "key31": "acJQnNBRGpCHATqZFy8djF86uuxXV1nZAYzdJoH8f5FkMzvu6CtccYuxjtQDDD9GXtT648GpJsP5pgzRTkKdwm7",
  "key32": "2FqprAkQcFxgHwjTLWuzjr7YAtsH4biysFBoPMTC15aDZFHTon585UJjK8CtUJ6rAR8fHBzank6HPKa5R8C3ionT",
  "key33": "4QjZGeAeNXG6KLPhkoBWWmFhz6xaWNdhtEqhrTnNCqwFMkz2otju1ja3oDVqaXMW7rzsoRzLpsWpPGKtQAYqi9u8",
  "key34": "3QKT9XvDVo3CFaX4pE9JADqzuv78RoF4BLuvFhCX4Z5o8ZnBHwsehz9sQhLFT3uL72CtypnWVEa3spiAux41aSA9",
  "key35": "AHvxKUtQo3ZY8pkVqgzEiSGSkd9wzv6otw1YDwQbn5KyW6MC9DQmLdsU3X75ntnNguxBMpD6yergi22bMWdk7t7",
  "key36": "5ff7ByXHM53ZpEoZk4GtkmACU5Ug3GPzCZw1NMiBaU18s6jM8h1jdL9XDBosLA2nAPZTxWdJ5tqytnFSoXKbmvsc"
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

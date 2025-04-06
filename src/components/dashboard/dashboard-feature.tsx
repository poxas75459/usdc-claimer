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
    "2N8sLLda2fAUEFx9nV5RG1A79GConk9gX2E5GAxFY8cN14Y1HWF9YFfckA8bQ4aCVQ8ZkAa9axonr8F27ESqtRJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5p9XiZbuzQP4VqVVnYymiWVP6acQ52c7jicB4XFXvCHjGMPh129Hh4QvZkhiZ6sJEygYiw1q3i5nMqzHamfqMj",
  "key1": "3oynHtUFqFabLURTvHyf9yYoP7bgzATCgNnzqCwMtVnzKojRLACjR5uDqST7GtL5ueRktVUpCpLgbbkbvbJt2g8g",
  "key2": "senamdVuJtyTqUhFBmRtmo87PZhze2A9MQWMFys7R6GyjdRkRLWt329S8u5k2QP1mRHGGqQeTRnMU8LPbeAFseP",
  "key3": "4VbMxNHHiQihN4zbWALy8iNU1YwWkyK6SD7rzMAF5XuBkr5wSfvbH9GdV7iTsnXvgwcy8qZc1mebKk67nTmyjSsK",
  "key4": "2qUAbzmrwdwzdbpmFfQ3PS1HEWaDrX2ZUjZQARGdQtDWLt4JQd3fBMzUCG1Df4oZXpEs1BbVfXZkEfcj3YUA7KAu",
  "key5": "esfQJ2cfhHCVBfSogoALZY6uGn4ein77pto6p8Yhr5yd6XMCeQLqqiWfog8yt82sX9WYkhP2FUB5qCHHAkxiiXj",
  "key6": "5qEWvLHMGfH1Yad4hSNqoFgWTJTvqzy87Y7hRoi2ycqMr6unxbgYGgxsWXtTM1jXoDgStN9mfT9mCxdkDpkDwa77",
  "key7": "2Df3yjr5vwMzwrGKYR5D5h3a3zqxZZJEfQJCS5HrvdFXTGDFDgk5Kjz3eSa3r8wTmxRTnsye22bqjSnpKppM7M5i",
  "key8": "2VBXqNd3sX2hWXkAcUBdss5AKt3Ah4EaicjTJJMenHCgehyXrGaAAGVUVR1ocJiq8vA99FAANRT9vbCdXHBDSimq",
  "key9": "XXLnPkuiJo8TK2fimFy6NPyXhE8FujCb3AS3Vmbgiph1qeHsJndYpW9RnE8qyLnLzM94BBsmVAFv6RmPz2zEz7a",
  "key10": "3hECJcsdkQTMwGy4fJ8VyJQvXhQdrUu4dagEZRCbTNfjT4QbDrVE7gko2DqBSFVr5r5gjyy7P9v9Kh9Ad81y9s5Y",
  "key11": "5ALaDpUCr3CatgoyXoKciGSBnycY2dz67BkR4pQ5aPEqRkN7j7E73eTndGzGxXmkdNAX5LvN6AjpRJG2zbFFYeQw",
  "key12": "3vQoFrwwucFd3bZsMaKYnryCijD3xrW16QoV3CK9q9HGyNyPtiV3ugu5qBVGya76nmPijWUUvvnphPtHmwxn34AF",
  "key13": "46jzAN5ZX518jaQpqcduM2zGwpNnLXhPLcWTjzb6qh81YCxUpaPW2oSThnMfHGiCbCWxTmAMLsroE7Bt8Y13V5Dm",
  "key14": "dVs6kY4ScGFHBShkJdadovwDFH3hmvJ5BGFuynpo2VvSPkhbEs9eYnk2u9st3KtyUVCc4YRXYm4Z8dcMKUppgFh",
  "key15": "5rGGq4UYmJvmFJJUgaq3yFRwdbLTxshHKCcwMXCvkHhMbyAQWbX8mP6Q5b1nLSmgJaNkHaT3WDXCbjECxs2UZK3y",
  "key16": "BffY6vqw7QVDo8wNBcf65ujec2pm5ciZGhaVkNSALmBDDDvdNEkr3gPuBzesYc2oVEEqbmGdGhKfKRxztpNuzgN",
  "key17": "5veqy6xVaiN6p1ruMzCpSBgRE67jyRCZV8jFXR9jb9pjMmpZHJh2kjpJK7RNa2WvPt3tcKH9UanmDqk15szsrRAU",
  "key18": "4EGY4w1shdh96AfRwDLgdBY4DczHbbVteg5h4mAWWGgRn7iocsqqXT4ecrsrrsC5ozw48fELvtrG8qEdKwPH3dc2",
  "key19": "3WHknDntJeCuz3DiG5RiWXK59HrmHGX4WGHjRkhXK8wjxqE31brkeobLwdJD3hHXR6d4hnQTuW1jBC5cotRHHk6n",
  "key20": "5D4kaRyxtGJ9MGVi3atLwMa4yruvyQvgfo1edafYcTEdepuZVP7zp3hmbha2eu4DQYf5ZsugoaB8qL3eV9mgZQdN",
  "key21": "431ZyaBwaWBuAZWB8obuRpboeMu3sW951qwUjrz3r9KrVaseA1SKY3AFs7NEXMup5dFCHUjVw1AWA2rbtEGd1k4f",
  "key22": "4rFTEDeW6ggvNdFSveKQpSUxqSS3EGVUqcswfSjp5JYHyDfaVJ5EzSVdULUpYTA1oMFSKSTzu5GbQvZ3Xc3RVzo5",
  "key23": "4BGqUikXqtda887SpQWzWXBq4KHxGLoPQ9vuA2Yyg2t7Uf6Nyt4nCUhw7F8Gw4LLeVvhfcHwcjutbFk1xP22KkkR",
  "key24": "5PwerTQpweqmYKKCe8xU9W12bAQ1aXrv8675v9LqQa3qznLsSHvVMB3zDVYudTUUV7pepJNUmU5wEz5jfHkTviWx",
  "key25": "UZjAp3RUGSkZeDySHnNnuGsAhxgFYAkB6eGPBtgvExNHwRxBhjhHNo86RFpeZHRZ3ZwQVgVytcgSeCgCY154bBL",
  "key26": "2c26ureozJwxC6cVPnokX441K57rrXYKAHujW3Mt3C36hoQ9mMAh8a88RSGyoNzAHkf3CGzcGwFPmthTrocURRA8",
  "key27": "4s8pWUWe42WSaNpPtHTKS1R3DyWoptALiAWJNn81Wxn5UnBCf4eQHF6acF37XtyMg698jgkEg83x2WyvkPbfbYFh",
  "key28": "4TGg2NynWH4cBU53zxTeEuX7eGVvTBwVhr7S4J6ZU2ysaLRJ2QaJfPp1uaPN1CQhQT5fXeg87EwrqTteH8LEZiDT",
  "key29": "3NpxpHwCGU1ntmtvwNe6ZPy2vVife9w4iVgUCRQLKRuKFCmSrfEqndiKJs12n6ztwc26U9T3oKzeWJzFbgQBCpBY",
  "key30": "2g8vLZ2hh99WK1ghAAEHmCRNmc9N4d5p6d3gfxg3zHtPbNkrqMpb7uec7ZNfHMYYMxv83vimVPge2bLWSh3D6W4h",
  "key31": "o4gf1GALxrUpdaMfSXHqULMhVgyrXsGkNMy6KWf6HcLuGcLcQcW9zxD9Tz6gLovGVgniaooJwM91EZR9etsLfht",
  "key32": "4nawNWCsATg8G4KqKDKBj34z29hJKE1SBuMakeTNKg6ty9SPo1EhYFFkB7oVorgpdJmR6nzJLUWG7sv9pBjMLF3w",
  "key33": "5RJecxWyCGpvcMmYKA6MFyKri1V1b4fEizwDdeD9edBqJbZMFHj4DDQDVQPE2Y8vyMKBoM9KNiqP9qf1SjPAVSRE",
  "key34": "4ucVMA5ZkAkJbxCXKmp8wZrCiQ1kNY5ZUvvFkWqqeGysNKrEFmn8ivun2XQr4pvAwhAqMt6sRkaZHna8DeFShan5",
  "key35": "22WRzLKmeiDzNBS8LLPSL2tYFiiSNvoeVssuZbQbfSKYbW5agAD5HERo1Km12sjdts99pnTXtpuCgggYdjtfCSZK"
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

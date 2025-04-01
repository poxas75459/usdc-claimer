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
    "kMxUhmZ135it2n7mCkyLHxq2rrfyN1VKdLrfWv5wDyJq1BvexT8vauEzrBUtAJXjrPLCqMVDkmUuAFyMX2RH6Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTbpLPmWKbsaYkdYiYT7jaChaU74uFfpHszqXDXsb52K6rP3Vcj9fwo8uvCUo3eRMhd5ME96jRJbhj2D9jrfppB",
  "key1": "2ty8kPXEsMuFMrWbYED6jAeintSnKbQSirnDP9MWYWKRgkXqQ4r4rUteA1qHa3UaocKF2UXyz8uvMKutfKWzTXua",
  "key2": "5eZHdUo3GNrRPdq8wzbPCaNzMhaNiA2EXXWXpZq5adP7Xq5q4wBbCkYLmr9Bjk3bf2LXLdYBGtRTynwn6b23jD6i",
  "key3": "2cYRM4nqgrwt2FGsq7w1ShpUSu82t5CkXYVQ823e1Qd7wDMUmBMafszzKnfnLLwBSr3AgXL6xxMSo3s8RU6LeXPa",
  "key4": "mbHHTsgafRXcXUcgHEX8fb5J7ff1xkJiPaKjA3HhRM9b6f7jBpnEncb9DGbgm5WFpQPDbbp5gUNHYia1JP7GopV",
  "key5": "66iSFYudjejFYyBPevaLxf2jXTHEzrrLvJHDNRSY8XZFG2fReBsewL9ZSgG6kK7fUXUxreV8BavW3uzPPTwX6vw5",
  "key6": "5ozzMViZkUW4Ni67UuG58AhoL7epoWcWaF7ZMbLHDa4MFpBGn8KTFn5kK686iaayhH5APgrtHVJhNVRus2QHPh4a",
  "key7": "yFF4dFkoMJEAd14orxFMuhT637pYLWmvag86ENqx9g9WJYkdKKEVBTwx6mN1XxNu2Hq3xqobGKqzYK6sSXUcMbm",
  "key8": "2R3heSzxfPQA5Lzt7vqSsT4ZMAm4jzUDwkDMr34gdYmALpXvGJRuFvVDo3kKypPMvkeNy9vWs1V8JJXfAvtTTchr",
  "key9": "56REkqdb9dXavtXvLF4XZkn5nk9P7NnYmxxh82YSkcdj9zA7K8gp5dUM2ZpA2DW44phkRgjCx522wj329k3UjoHd",
  "key10": "CUsJWMzA4bztrqTv3qH598Sty9W8ktGTQUC2R6g4ksotEs4JqoFDgUD3vHnL6enmMwA3u47yhUTv5Up9nyYHaeo",
  "key11": "5iJ5NMLQfWBnbtFMGuEHJCwtdJZ5qK7isFdPGnfWH4eKXQseX7jsDdShB9SqwZRQfi6GS6qT6gSknuej5QQjZMrC",
  "key12": "2k7cqpsDM5LK48LEqswZNQRvoMwBoXB3oxKqZtH7vu3z8wYpuiAzcXP3YwYbNfAKwi2nxeX9zTR2AwyMwKTqTttW",
  "key13": "58yb3HU1RT1hc81X7Uj9vtjhnFgPHia7cRzu6QPMrFgbvChbMTeCvYNovYDrUHn1fXCPmGB3Q2mELHu2G5cRihSn",
  "key14": "5XzigY3aZvsXMhjL4YEhZ2xa4csBe9wWn6RXWfv5ge9aMS4hkU4JzQgxku5ivzMiAe5rdSNX9Px9RFUoorJRUNuu",
  "key15": "5okKAmqPzkA9FdBvDtBQJ9oRnMQiZXeCZQYUoGxUDw3q1HBctoUdjP66yxkSRrn8mgVocZjcQVcJWcMt2LGxp43G",
  "key16": "4LK93txzNTTUFmVxtZvPktVDZSirozgxJze5Gch68ToZbVQgUzo6cnH5UkzsUxKwAZ1vPsaUy64wVaTn9FxUZZ7t",
  "key17": "4cAzZoajyD5FPDFKWdxYCX7u1N2gy6bMeo3VKQFUJ12dbq6kHJMLSR1JNfXfQhB6mVgw1xs8Bb1BpEzPksxH7UJQ",
  "key18": "5D6qoiSJhqBPX4EfAij6QK15TVVcc1dsPg3BgaV1JfMKkR4e5towkb4T157BjHMfYB5vdutnWSchz7HTyzHTy7RP",
  "key19": "4vWZSPtLvyjEJuL5SWhKBxCv532nLu1pe4eka3whn2Xys9NVGb4i1dXiyNnMmyxo5VxAQwrP5mmQeSYzhsgj3nFH",
  "key20": "48Ct9YQJvTxxh1U8oGK27vucokV34y9j6dgfeHiZmRmtzp8APZrtATpWpvPJqpU4SWtaiH94Rh4csedseTFNzYut",
  "key21": "5CGZPuqj31eo7X1BPuzhPriy9oNybqhu3ub5SC1cFdWsXjJf3a99mP9LMtT2QreVdcTrjpSaLx3xRpaaBCxFnGcF",
  "key22": "QJDEAzrHnxhzd6RyvPTMPawbNzVAd6sQZo9atzNJjgfVLL5SeF5LQ2Q1QvK88rJ88Xu1yupwmJbUoM5A3bV6YLQ",
  "key23": "3cebj9j4smEJTcv9mMRZbz4y22as76ASa3iKwBhjCiPPz6y6wfdSPgQeF5MGfVa95kwuaSLWV6o4ui8rakhFCysK",
  "key24": "Nj2coHX5mYryFEFAVimkwctjHFaFxrmMDHXoXf24Qp9tj3s9rH465t5A6xdqfQRMK3GxAJYJoWNcEqe7T6xdXom",
  "key25": "5kkHadXBiNscUQe51dGntBexiutqy7HhyiSKj4w4GRLhRNfxQkD1xPoHy9WH9GqyZWzbfv8QwV4HqquvwAX3C71k",
  "key26": "q1QQrKGgsiWaWBx4qKa3ij1HFvenpkQp6dXKubqrH4a3Y7Xz5buwmZfWEy8QPhgu7fML2C13iH4gfgXAvfs2vPJ",
  "key27": "4HngM9tVBGajmVPzweAH1mL4r6q8CGGbcCYqEE4SLyaSJCoxwL4S7GoXQipkLfqfuFuGfG7KZ1KmPk53qaSfQ4EX",
  "key28": "2VdxodYLcybnH4UNrZ7zJU9nrwSswhjxEEyUhu2UXwKLWDLHZJYjehDTDdMUcyZtbP63zN9AZJU2fMy4K68XPZr",
  "key29": "cJmsnscH8xQy3AuBp5VSEY6xzLfZgS5uFzH4L5kf76fvviHKL1sGHLHU9aRxtANZC3K4CyhH68UozcMZ7GMU62L",
  "key30": "25JzxqTbEwaiuM9q74SZcN9Smwxy924v3jpVCPCSngSG4uThqiRvemmJN5hQF6SBVh2utASUKE8eyZg9T6cvGpx8",
  "key31": "4e4VMMfz43jdunKMC6tV3PT4mY6QWDSoRP67wXrKzv4pUp2oe7ToHrL19BJTqLCdKhiJkVs92CW9nUbpjSg5Z5Z9",
  "key32": "4QNrypBu5njZm1nYxStE46K87dKepqigViCetaeMcdSnjBdsnDV6oyAFWf25poa8inYM2rjJBC8sEnDVeqZbdPcR",
  "key33": "512jybLmpnmqtC5oqo6WgDczyNDvrUPdzuSgF7gNpPvzscbM6DfWtWqvBoxkJ8FazHrQaEp1Cb8P19ZWFbV3NfnD",
  "key34": "3j67NfezJTr68WwgbJTjBjzETjUEmkWRyLQV9G7TQiHoFQdTDKKqfCxGZ6guWendQg34hdS1uddpv7RSRU4ym3k4"
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

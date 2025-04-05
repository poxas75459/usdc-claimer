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
    "2C34m7RukUnVtysbbSKMi67MhX4g9xBbJnDzCeBbopSUgyt6uyjSciGfuhv9xvuyskY5eW4q2KfHmeKX1styYMqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFp9V5zKsmKsrXXajwoGrWXL6AxK4LJRZMFkCFGWF1PtG2pZFnS7DD9J3GBxugsDT6QQuLN3ddRqhG7W1fbhhiD",
  "key1": "3F6QMFEmjeNjoffeYHCJXdyjw2cxbYDnGYfp4Cdr9iLgMd4G5HHWZw3JhNNw8RvTMZiehz4HADbgEgQuJ2irsp8g",
  "key2": "4CcWnefeAfA14J5KcShATxYAjzYwgX18K1h18P8Kp6gmjTBHRF8hk2TzU1HeKksYWND26Gkt1CuJCdRMS6YGmQ9b",
  "key3": "2KF7ydR2nnnbugBZT4xzLcifhex7aB6yPpgaEu3vfTE8T8wxwiAV7b1CyMgfqAvSR62gpH5Qn8c3RJuZZUNhKWiJ",
  "key4": "3AkHYgCe7yTw997TWDn7rwJAmWNQg55gKu34fEPd17yxaRGkXcef3WECHpgfqHeDHeXiZKTorA62hFTo9gscTFxa",
  "key5": "4d9YP44m7YsTPaAsQhqnLJjWdxRxZs39noQzuUzxLyTZD2jMEu7N7JAdPMQVRUcAWS9qLY3wWGranj9Zy7HVNzpS",
  "key6": "2inYHRkHHjirf7YDkttyaefF6oGXwhNJhf8zVptZcrrBXPhmGTZcRaFDhbV7DqRZBm8HjGayaV8ALtFsGPKnfF8T",
  "key7": "iGDFfnPN6dGCZWdeT9nUqYjqo1giTYN4fSkXYftfnfdiLADEStfkXw6FrpMJgUsMFL8mUjCEavwRLN2tHNpq45y",
  "key8": "27h5RUkrLjwsL5Tv3YKJGWvnzAULosBW3pt93ERcZHEaj8JTtsozUePaWKmy52xWqVyRsxH9cgoP3hp73GfpFSTp",
  "key9": "DsH8FeboRfjUduZfA6s8oZtLYch88YMTJSSd87f8gynp6hjJaqdhZptKHZ6xMJrPkW3xMWQ7VxnfYnwLYdpGk1m",
  "key10": "4gmnnAgvNgyHZuQJK8QcafbN87iaKBYXVuFvBD8Tu9cFWFc357dYcSeBnBBeyTXNVUTNjJcjEmViXWd6up4xrgLv",
  "key11": "Z5idkpw8eDCGmCs2mt9arkNX7ch8p2j759amu8hLu5gReiKi1QPfyG7w7bC9Snevf9CbdmA3UzTMsZJ5MaFYG4r",
  "key12": "3hxkqYQoskfZwXtaHuD9LNVDFDxEF8SurozLZVXtpYninrrS3Zstg8QkatFTWUXFvkPxfpmb4Cjtr6AzLt6rdEAC",
  "key13": "2pzgVR7Do1nnjTUG2Z7DzprsprF94PSmD6HQVzjT6XLvCuiPF84TmSRnVPAKCkNyd1Y3zFmeyyDqTi2uinsa1cC3",
  "key14": "3MamWNcPuFjhMudWy6geDwHyMKN4YqR7EQv7ZRCBdAUdo4BXPSE9HRhpTKWnka3NvoS9mP42PkXpYY4wX2o7tB4M",
  "key15": "5QgfottqwyDP5KeXFH5G87yptNftVn64g2Ab6vKiHE5zS2jjrUpTCqwAf1RQ34p8VNG3pfozEnrb58oi8DK7qV54",
  "key16": "BHtcSWibZcWUiucczt8RkbBD6p6PdRnkfWZWCD61p2yEFaBGttdF3Tjwgha5eymNHaLY7QD8sXxJhs7hEfLzJvG",
  "key17": "2tevabSxXt9QWn6HmafEbKbH3WZfzKJVbeaC5qChWEMoef9U4RcLzeo2oNKx9B3cB9EY52dATkHWeZUE8s3zVv7c",
  "key18": "67MJdUuFWXMFgJdV2PSvc7sgg6V9b4SATFit3ipHQApwDVowfLtfJpVUiPwRPQ3XMG2ppccnhhRuoqeGT29HoSYt",
  "key19": "XotoPWNJ2MXoCSBKrrwophS2ByGMj2TGYQeYb8zquGrQXMpAj6KgJCp8vzH8A1EMbr4RXyJ3AFpwC6CFhPEGrHJ",
  "key20": "5ZSQhgtKLk4HmiNxfqmKMPiWU7MXWNijS6pFrrUvXZNbLqHna2xxcy4NEjrNNMPosRqQNEPaq4xEg2yDAPoYHFic",
  "key21": "33t2hGHbkPJrpHcenAAZS6xsV4LrCjhqSPhx8Xozc3u5SJHn2KBiPpSDEUs43g5vy3AYRypffyiTShMdwTy2KHb1",
  "key22": "2jfYNYT4ZCuMH3UZGVU4kfz8YoyRd1YN2YqrdWuwHR4TrFLBkUkNhMbucsyxVXR5EFMPMwZSdNzZY2gZCo7WEXE9",
  "key23": "2hxzMiJwS5dbZJ7Kv8qNbSq76h8PwdXNE6KhbE1UkeoaRN19ZF2kJgeDVyL7nzpQBNc6AZBDHssmueQJT1egqeN6",
  "key24": "5R5VnAZqUeRG1QYsYbDVivoe1DiQzXCBSNJK2fpNUCrHvRvjgxjKyB6xUqHrxmVai58kYiH613Tb1VDSFzWbzrew",
  "key25": "56mQ9XdyaPkiaj3NjkapCU26jsny1q7TYTWgXoLVfFGSaEk5CtQcDLXyeJcuxGFhsLZ6ZLX6oXrSXqBYkpMTzTy6",
  "key26": "3KiJhkWqCnBvnAsKdyUMm51UdT84iuwR3evGKChpKfSNdu1mBReBHbC9He16cRq2UnhgchPzjGvNgmuCKtwsBPQD",
  "key27": "55UR1ByCxuW5L9hYyyV2bzXSacuwoBuGTk79Fy6fa32kznyGA7fdoh1heMHvXu5oRxqmkrTLyHpwuwm3BV6odkAE",
  "key28": "4EDnzpE9iU7Wz1UgCJBRtneBvXuFQYxfjAhJmf57QfqhXBm1LcwNrJmcmVrf5Ak9Ss1TrU6m1HFtEUuZ6BQCnKGx",
  "key29": "4qFwepG6s1H3vwEn7X36FdiksEUZh98b5KerzcwJzjrCS31tvhgbzYpQQ5VhXkWwfbncvJCbrNjcyQ7vEqtLLZyT",
  "key30": "3s5XxVo78Vt5Sx6NAwjkyiVepqL9wQWmaWB6uErWLQYhhdEWbExrR5wGuf7bu7nckf6y4ZcMmWGv3mEEvk3343ZB",
  "key31": "2WBN2veR1SNgQEEt3uxDiN78eqsvhpLL4TqguURCBsRFJJ55JxRjofsrcENYLNePL9anYiLovroU7T125W9WWzHE",
  "key32": "Kcn2zqXrmVLGiUmgBb8WyFB3gKMbQvmN5dvLN5QitxEpELqfgxCWwm6aULiCeWxN9iqVcuoE4v53V9yKY63YzLX",
  "key33": "3GRBbnjcv1Kkw2sZVGvb4aUTsCMpS6kEgpE1wkKWSxDeS2cg2PHTH3NNM3adi8ZhDVNtEHzSocBj92AKDCbTyoZu",
  "key34": "5EFNcxMRoXGBrPqEEDc9HBbaQYYWBv9Mcc1wX4LJonxh5ggVog9v5GngH3tsjb4fVmWHc99BvcznjXmVhuoWVw8g",
  "key35": "2JkQmP7YrYPRGRCQ5jcWrWUjd55JBJVitjmCahe88CyqUyKWif7qj84V8Z9D42gSyj7uBExJBQwDB8kevy8Y6JU7",
  "key36": "qErSzpPpR4gaq7BUJ2DoX6JSop4WqdH1QRNsKTvNvrt6HrXGA1aDegFABQfDTr8sdJ1HRAgDkryNPynr398vqBi",
  "key37": "4zw33HKCBHa4n8nAgH7qB6z1STdLLwSC3JM2jnadaiqmRx6VjYBdz8oZHnYdtpTjCyyp5YYGRtYLntXM7fYi6j8X",
  "key38": "2WZM3S7U6vHQGPZGKFVmEqQj9gnjZ2ju9XHsv5EAJqrAYXTnpvyYv3i3yNsdnKYJa2tnQiVkUgVnRymQ11Q952CG",
  "key39": "LjrxBRTyHSuGM3RxsDN1yXK84r5wsufkRKndUUTSFSZqnUni7tZU7GwVirmQJiDF8Yh7245v2FVG8DESZqUdpj1",
  "key40": "ExExyHZ9VsVVbiHK9jAXuTgKTizDxSS6NtT1EQPikp2W3vaXezKGyYLFuDiUQt4XpvGyEpDyeQrCzjE9AdJNKeP",
  "key41": "42AgkJJQhcULJ6MDCQTX3CM8Q18ZBq2bij72CmmfvPw4GFfMZ7dyBwCrQG6u5bUWYRQdRVegvdu5z6shL6w51ASz",
  "key42": "5PirjbvjoCMmKXRKdteq34aQyCJ2vwTLjQZ3mCkxrjdRZWwWe22MLpgoz26XqsNZitUMvC1t38BaDAGD7FHuhEee"
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

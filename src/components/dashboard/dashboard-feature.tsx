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
    "3foccPyPTZcpn5yuHhJFroN9SmmvumC2Tg3xv3tU9pt2sWenPz27yyGQeDevFq8SeHwEoyVQ4zp8v1NVb1pzPrHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a22QT6rEWUpt4Qynp3qYFHBssAj3ABBiWK4Vn4Z4iYAVrin3evPerYMSdhafZtaci3XAaAot9ZeBtPJHEUfCRoE",
  "key1": "4Zb52WajFxWF3847wJMU48sr7pDhtRXE2dsgvk4gXNF2tixc9b9iiXxEhrSkEtsULjPJ9ZW8PA4LigtKqJWkEm1G",
  "key2": "5aEaWKRYPPAxyGUVRQJJG7ZaDxUdRy4VV84VKGh5GaBoTqC8KM1kRdLmyVuDWzrMDFzxoBTjze2sRuDBjjx7sRZF",
  "key3": "3noyLDdZ9Wvi3Uix9mhmBTMG8CHRBHFzWABoGv1Xcqv43j4Jvc4RxPTi7g4BMkApsWv9foMoGEDWRaWujkqi4H2b",
  "key4": "2PAYvVyf7ErLFiv68GCSpPUmBwqgzXhkCGGGaW26Gor8uBXJdy2JhiXgWY2hRFJn1RDx3m4C45i1uoeB3qGiW1LS",
  "key5": "pPCFwDpBkudqMcZjrbYJmPx9owPK46SE5w2jjmh1k3E3Um7TmpVwNY3HE3qn1nKbJdiJorwziYEzwotnqHBuZLC",
  "key6": "44KdyVB4nFkHUVQgSwMBkGciQ4CFNFshXNhCYhpkBBNktc3GapcGX5g4bZndaoYnzSSeszBpWw2xg5oZFULxmtAn",
  "key7": "4qJB6tVsZJ32ov9tDnXrvDx1HJLtFi5GKznEJKLLCmSWpuoHjgcRTHM7k1CLWAMWpR8KYgUp4tW6K6DoKHakxttW",
  "key8": "3V9KebwfY7kgNFf7xPEyeFgME4Xv8v8crPYMM7vZMEt9FPBEtHdsnVAmYLC6AHw2uKvziezPvJrXd1q9ZNn1pYXb",
  "key9": "3mq993rbTxBFoNJQhb9ST7iXRDtpK1QqcRinfuDqbcZfJPQHahqf5XX6kNrRcgzyzpvZw9UTB2y4SqXFEw8Nqsuk",
  "key10": "YXgFa6S6CiBj9suJBvLrxAMzsCW82xzZ75TYtTyzPbtuoTzfeNEwm2Tyh8grqJNZNngYc5Wq3HvTzT6qn54sDZE",
  "key11": "3eGU4rnfn8L3HJFb1kwetar1ubRcDu1jhTKpF6qCiuYpbuwAhVgN2yxraGQrUBGKE5WnqiaoLecmJxtqad49dytD",
  "key12": "2tT25VuwLecYqGZVpFjnZF2mxfoNMQKrEnitoXxUzms3KSUua8vLqwFF54kF56ZnVZiCETjUVWfb6t2TzHdy2VVQ",
  "key13": "3RyJpiSgwe3CjR3ghP3rwUJR4a2wF9yYhZUr5BserUDJMUqbniA2RVQKpMb2z9mBx3Wa88hNHuE9Qbwk6mCT3uZp",
  "key14": "zJK2T8reVt3ScpGxqq198WFzUS4KHAhtfzRc9YGb761LFt16va6kY5kfgMYdFcZZcXMY1eedgBwH747FZTg6efV",
  "key15": "5RcD2v6xgy3CrmAHCgP94D8ynskAg2BVDvg42spr5WRfzxVXy9XJQhBzdHyHpStjV355BPmDc2bBcgmZGzF6NBk4",
  "key16": "2RauxYnkjBZrTiYS8J2SKFfSXLLz2xhopA76TQmp8usAETv8fUxd8Huhdvfi4fHQyf8exgCVfwhZesWKoGKnRQd4",
  "key17": "3JvuP85L9qtgiCgJget5kPjyVYPtjKeAipkNL92ycaAj6Fze9gc4LAcguEDux9hXeu39kQAJeB8eWZkr8q8q44N3",
  "key18": "2eySksqLfQZXQChfmJvPQURGD9oj78fQxdB7h8WqDRjgXPH12eof5qmxWGPB87fKPqmaVAbyUxvT2jcfkQs8AStq",
  "key19": "46iN59dm5EuqbdSEcw8HkEfb9ZB7qhsbEYcVvQEBxzBFHGWKGEwzjHJaHYtQCJn8X1np9xuya2PdSzmHJjznGJkG",
  "key20": "45vUjTvG8w8xhhRq36bG4eSfnrR4MgBZkmfnrXzfr4WqjtHrAVyh7vRiQN4M6smgXWBLgpq7E8mhHGBRBjAxbycV",
  "key21": "3KoPm1w8FKLryAie6NWAwq29e19W3wgswmaQQxK1AyHYhWdvvo2M59whau4zX69hfWoUi4CFEawNfXEXYby738fm",
  "key22": "2HtYN6G8TWVsHqdXLSjB4nVoYdmnPhwG9XocpJwRyZNqF5LwD8J8uLLG1LphpfLe8T88wYXernCXanaU8CzLbasY",
  "key23": "2oJhuawvr6qT7Up1f4xhYwBaudQd1M8U7oTRpFCHuvc53hyHK5AXJ2jbAzM17yFtihPAH2hYkQVR92igi6BN3ZoK",
  "key24": "omKZFTAFdwrZxyhsZp7WaUiJbbXKxPHRyaBgTbjYV9ofMvvzxXEHzX3C2UAXHtAn1jCYrLw1CcdcDm1M3h1jTLq",
  "key25": "3XGfUoPSD363JiWDxradZsqTKeFr954FzwtYGfSmFhmyE2u2AbvE5eY8iw4UQL6U9xYLYtWtiw5iNJizRXNJ8qTU",
  "key26": "L5Kaz36r3uzgXZLRzXkvrYneB9Sdgs9qgsgndh5qr9bm3Tm1mY9SeZZg6YuZmfiLg6LFgeCRADMK6oPNHHg3cwJ",
  "key27": "Mu2j3PyWTZEDwf1XLwXEyHR3dvy2QjcHVKpVDTTpYbzAnakmPK5whUyQW7T6nAL8bevntoGoNXrojJoYcAew1LS",
  "key28": "3vsPazFToasDQbGgRNC3u1Nc6FT6adsyJD1HJRczRP8XRcr8RvuiGwEv2YRkECf4cbH4BZSE75NLAgut2RRuHMCR",
  "key29": "3VxnRCFdo5Fj9yUZ1nDcTE4AeghDHrmW4x2Ldahcsrngg76pk5PYLY9x3PsGg59SVsJjSPAyYHVp9WXPinNZ19ki",
  "key30": "GpBajroZMapyoAnvH4QGtJBpLFLRX5CAzUJGTvRLz3yJYuy6VTMm77e7ak6JuzmTX9e79ihrxWSiDsSpmxkMsko",
  "key31": "4fv24PkHdrPazPGYn5g66opeYySYkFYDCQAR87ATpaRR413uvmRpkhVmbPi7tGeAienRwenvnMTXCSuRKH3okp5v",
  "key32": "CiG951t6zB99sPzjzXABQbbDEaFRXrBCCL8wSAmDHkDsRLjN4VCJ9xabhaSAWB1hUWTA4YYhJ1XGT7MRvWUEMpw",
  "key33": "Ni4Q65QKCyqQ75A8i7VYgAJXxXDFeGMrJyM43U1yk7rATX6bu6qJsaekoDW4dhS7wiWxvGXSr81VEJDshWmRV3Y",
  "key34": "2EN8FMtsGVrF6FKpvQGfBT8NfMQWGSmiDqiq3dgNWLkZ7ph3HJEVRVEPwS4fKwxSxPwNv8TeMCCqQoq16pyHKRe4",
  "key35": "5hUuXC8YE1V3WC2azWpfA3Vj4Zjft2CujrKzdLQbjgMTKJNgBcUFVsp8SnLTUMfxrF1ttNzufSDB4ber2QbS9unU",
  "key36": "3aWSmvURCX82DvqQZ7fiKNK55R5RVmy9e2iJT9DwGQAJJmwJNLg2JcbNLMx6eCC7A533kNzq2QnLZfRH3MhErHzU",
  "key37": "2Gm6BTVsX71XhZKRmDELsSuEf6NmgxJsKduQNteP3sQvx3E4hzrd3YE95JP11o8x2Cvibxycyq6Ps73iNA9fqvBo",
  "key38": "3LcWVpzqAkPPg3in1eSgsvMU2LPBvZ4oei62Wsa4N2JrLnofV2oGPHfvfJQ3S5ZeRJFHrJp7WnYqpn4cjPJBf2KJ",
  "key39": "5jhdukLBDX6MW18qRcswqBKRiSec3TEeCuAJLmoc2BCBktAHDb4ybxYg1MAm7KckAqwZptZ2LmixKvMw8Ci818dq",
  "key40": "4iiSWxDpVdWUMgPDcYcm4AZAzzvJp1dDRpXPpXKMVh1tyet1LvQG4idcaiXpGFJnStWZxGTn6Gjxx3uQZipa92r3",
  "key41": "wErPb9mKRVuKAvcUCWkFziDKc497AsE2VZLKFcyyEPSnnxDQ6QTyYsXMUVXUerUxBsjsf3t95ET61JTbPvyk8He",
  "key42": "5SiemKugovsfZYy416ZoTezNT6rkuzSN6ApKSvz3Hue76BGDhmJhrTqBQaHQbD2QQnCkbzYYCCDBd5E77fXFkJ7y",
  "key43": "57mKRc3sSymrVaovtm9XNJ8319znsrUNWWGytaPJjSapaa2mwb8NwjktCnyDZtxf3r4XsWLJ42vnHy856BPLCiJx",
  "key44": "3vTLn4UjCTcquJondhpBuKGgMv4pa19kNs61r83sGQvsiD8WUoh7abg6PxW5u7QBn8qJjH7d4GQExnFXkwr2X6aP",
  "key45": "3HyNujNiQmWKLXG4X4UCnATcoLarWmbBhRKWkmFW4u8YJtRnZSW1BzyjzPvxyk9zbiCTEWT33XXBjcmBpn5ywypm",
  "key46": "24QnbFonQeF5j9WU13tvtapfb4neFpxZ6eY9uAkFhHL8874FDduNsfwwaw33b55YdZSgHBrkX8PCBN9KQGeKG6PM",
  "key47": "3pFUUv3YkEiZukQdZcwhdNjmoaXGmN6kNGKBNndLokNgD6ghYBySMqfJnLQYGXRcqfrEcVxPRZDW6fHwA7qkWi3m",
  "key48": "35kJrkjzDDxU4YNx1vAN6ghx6J87TGYUCqo23xUxqfFzpcLnL7xK6K8ebu4jPBawytBBD4mMrRAZtjpbVh5PYfb1",
  "key49": "tPJ6YuCbAtn5fgSAUD8KyJsBYWFZptnWE6YAL5BcLXLk3gM6S5xdfqfyWuokJuZDdu1DMRXz43RxmYGTgoPVCPH"
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

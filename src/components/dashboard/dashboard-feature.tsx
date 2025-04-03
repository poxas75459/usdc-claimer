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
    "5imRr14d16PGayhEZxbEymU58FfiV7TEMy8jPfPwEn5FznxcFygMmDMfKpD2MEf4QXTq12p3e5GKZ6FJfn2xfgaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1nvk1P9iX25F7yMjLFDpAQ3HRpRcC4PyGLHMzL3iTQzREPLigXoiGc9Q4PpAhXz4HfzqR9UGE2QhGqYvXbFeW5",
  "key1": "Q2CRHq4Hb99WxhLp8pZ55ujkGXWweXLBD1KfqTG1KZLCYUg6wPg2hjcMJ9huPSB1yQRkk9YKyDdB7rwwLrS6Vfc",
  "key2": "5bMN2m4jB7h9Xyb9e5ib5WxAVPnCivDZ7WqbD9J9eLY4f663wuu45RRHvxU6cDc4FEGzDssEZJPMcg9N37enUpHS",
  "key3": "2eoyeGVhjNdYXDcpAEitAdC5HPkni21dQcUXhgb5R9f4i93egbm44o9geZazp3N6tj4A2vw2DjhsiEzw4Nk3Dhvn",
  "key4": "3fRszXNp2Ly7fNaZV4rLBfmStgNuyv6uDFRHUERYen8p38MpEN8RcsPoYwQQcxB7dSw8rAwqTkP5iKcZPXgH9SCH",
  "key5": "9s31FLm4k2yZ67ZwC9UVppDBACtnKQCAG1Fi3vpVK4ExB3aTy8EfxDrSqRrUrAowpXm7kxREihSLfm1PrX5XMDx",
  "key6": "3ht1zY7k8T6ffJX4byWTgjpMxU6s6ztbeHhgoGqsqBF7Ekea3Pz5MEYu1WbbWwnfZmBZDk1rrXB31cHFja6i5vhN",
  "key7": "4ktgFqk4seH5AHtuW2NrtnnTJPUSpGcjsPU8pL13wfJN1hcYJvUJxmbwAkQuux5tgB9TSM8urmi8QHiXzYmahPaH",
  "key8": "2txSfmqrZZnFERRo6WrnVE9NfPsyxJT5VtxwX63JprHkgujooUm1GF58zGs7rmHE3iZ8F7vPBXt91NB4ZKupq8wW",
  "key9": "2jyYSVYkbh4M4s6onvxaW4qz3rqfWGVbFaxASqshL1W9ArFMe5HrM92ftWuNpfZbiqKzePsF2LDjhF7xvmQ5rBdE",
  "key10": "3pCe8SCUSKFvmwje8HdimfSVvdtnyFwKJF2na5VmQvPA9N6kKWWXRWb4Pqk7nErsgR2ph3QShASvD7bfmG47iQJ9",
  "key11": "2C4jjt3KTqjY6w7tfcwqhv2X7EKJvazrrWJQAjSxAci2GLSMicCNAq4Uhk8LUVbuF2FNcMWCLnAXv8pYHghjZLF9",
  "key12": "2CbFb8zv6FLq5dcR6pfnSiB4NnHzK9QNY6LGFzuYGoqQzuMNVhJPW3Qgnib3922ggVSjtGvMUULDDmn7pZn2dra2",
  "key13": "kuhch7PyCD5toLwe88CGvuQCyWQShQiVzLNnWJv2CdECHbSaT75Zu4siZ9YqgyszHzfkqJsygfZqfWXWRPYxCVG",
  "key14": "4UR1un21GycytA8kYkDAtuVdZtfsee8e3jcBxxUigLbk34NsfFPj6BcWY7FVF9rFdxX9sJMxLyAMHFPkiGEb3S6q",
  "key15": "aMuLj2uegZs8NZ1W6RUayPPg23SqYAoADXUVpz3xEnpytY3hBq7g6hRQ1pBSkdg2GpUodT73BobKEz5qY2mM7nd",
  "key16": "25xXYBUZCBZXhDNpcxkvRSgbFiCWWi9TyCneggPoLARoShNMQtyCG2tTueC1BBTxn8JH4rLDpXV61X5ALLoRSwnp",
  "key17": "46s6iXq1EeTDSxAHVkz6vNofATAVcnysbfcLzsysk7uvQBQCaUkNQBZfNC9gVj7wKSyQNdX5vEW8oxsniEaB6g7U",
  "key18": "5CcRpaqaE9v4W8xPsgRzM12uEzMTJVmpKstgbrpManiH5CmTsncwND5MNfemHM2KVnaPGTGk3nq7bkL8vW69Ykms",
  "key19": "2s5CNZ5dJwjkB8prjHF2qfxXfePJpX4CicJ2Y9LeeuUnz9g17z3B7ztzS3nNTBEfDefMKEcidaZ7aTwbJkoVmUFi",
  "key20": "45KPnW8vtDa6aMQJRxNjA1KGogTNXjJ8ha3HdgoMmKcoTY7LvX6oVV9cp5x79k4sCWWzZjxtBa8JyePMEMEgnNHt",
  "key21": "5F63mtkt14zJh43tgBtcASUBbooyjW6nLk6bMHNrwrcne1Qjdrce7K2jLbAzaSeQALkvVt934PgPyPA6i5v3NXdq",
  "key22": "3ENtG9ZEGHiji79BxNdn1395T5k5j9yJs8Fvm498esQDchS4XBtdnAg1ySRB4YgtZs9qTWN7urfAxvCTNo2Y2B5M",
  "key23": "2b6H7nXCjyXjMZFG3KqfqiHm3uhrDFfFQafBmQEbskfX6RnY2uVriuRALxJTWBwLiUY2cU1YBY8wQrsTCZtAmKB3",
  "key24": "5ZsFrTAmxEeVepamKXhKYvXxR2fcuoRcXZ2iGD2tmw9jBPD2Nun32HTQ5iyqJZT2WTndNzSa7ZHGTciVoSJybiYW",
  "key25": "4U99wvxxP4CTLziKGVhJAx6b59eGEiWNm4BGyLzZTid4ZB1bSJJBdN9SzeFWxkTrQs4yTTTQARr8HRKZoouhXPuQ",
  "key26": "5xgeBNC9RUWpQqb9GeiHZSyyVRMP6YEeh9xT8ZRGDuRTXxDwtFYpeqA5xZGNn6KAieUY11oFEDZtmFVEp1jVZcwC",
  "key27": "4Dmn9QRLr93oNuFhK11Ep1QBp72Mra6D84zDBFiDnApTF3LJ1MManeUkkpRZGq4EzHqGUeaRjnv1yDXfEsW3BoWf",
  "key28": "q5mCiyiqSPmL3Y6p117nGmp4a6N8rR33R4vyixEPvbdQwqwFbTP8bNqxuB9C3eNU7tUDJRsajJ6mvV3w3zTwpQK",
  "key29": "3B663CCKpVhvfSv9hZjadE4tbcTi5gDXzCxiKMWAPoKhgicfPpRzMq3vq2eYXtKyLx7eZkKbjaYVqkaAv52ycQDw",
  "key30": "3hUHUTNkBbNKFk9Ho8Ujqj65mUs96x7SGPuS1W84ziBL1hiyQqwdP5p1fHWmJY6YpFpnDqs92gBzgx9yUNFSf4zi",
  "key31": "3QnHx8Cnf3dZsjuQZRARS79LE5AmqejZPeknjWVzMK5VxFLD4As1uqhFhbN54FP39EKUWVnovqanv839QFc9crBz",
  "key32": "3BjtjdLqYwrLaQMcaYqHVQdR4ZyqKi2xCjMM3jvUrMHvnNmQnJC6whNvD2WJS8EtughhK5PspRUbfpFr93ofvYhk",
  "key33": "4LDd27PeuiE2hpmRhJ9MqDRkoBzSWsha45ae5XfNXkLKcWa6kcUfR95VwZuGCPvt7wYJLWx2nDUoDwmUjqYvswcz",
  "key34": "5Vs2VaEMfghAx4F4BF1hrGMBMTx46F1oPDPiPDASBzD5yMNvNMn2yojL4WzDsamZRcuwvBc1x8hKvdjQPoAdWAqq",
  "key35": "38qJ2LuAYk8uum3FWwD6yytL1bnZtj3TtoekLcq1CMCb3LJSLSEREWmYQfw2x3o62MSWhvvXPMAGVxqFcVGBrEqZ",
  "key36": "2JP6Ttv5HCMLVixrCvfLwAQFmE7jnZMBEssRZR2qhKGw83wmXX5hAuZoDEUqsqFxWfFq2g5enbngtd7unsriRsJw",
  "key37": "XZApeRGBebNzNe9FLo19abapXV5BWaobkwbDuLquxLphWk2BV4sux7D3SncH43TRjMQsTNYmXqigzLzwYY1azjh",
  "key38": "49Ekv5jPQka53HxELTi2bYvfCXWx7xqnkiPnWScBieSzC9MUNduEyC6jDLEhHccKcWzQZeg2VrN1wxj6Hah2QD3i",
  "key39": "2ZjmMNvvbCEk8L5oMLoPbGCqi8YNKFVDvGKJbWnyUpnvU5uwSNPni1jnhX7W8wLVmFYFBUmVUhvwG2iLY98K3CM1",
  "key40": "2z9Zm758iQej9WPPQbZV7aTaHn79SzUpJSew1wnieh4vQB7M7KEXje39nUXh3fsdF9whbRCWZRarxzVHnUZGsJnb",
  "key41": "485NdNar8Kd27SrKKbxqtwhN99a3jZmGLr88UXJ3e7D4Wg5dLCTytvVn8HntRPNphwBEW9n61Yxegy6QEYJ58vV1",
  "key42": "2iwFWm5tfKG17rzGDniwEq4wtWSYgPoZkWsJiXXP79pYy8NWQ2A42JSpUMWtxT9d2i9WiSnPHgeDfjS4qDWaqco9"
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

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
    "5NmSkg6K7zdEqZntT7qtaDtqMM5HBy6nXRjUHVzwC6L2KYEVjGRRSsRNjo3evGbqEZTeqQ7jwCdn1FRE7i91RCy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAMchWVScxnZL3DTMoeBtSqQPB3Ffa94VkF8hBhbijXW7Na5y6vvfVgKfuXAmPvHBFGcTtAgHuJhH5Qe7th4LeH",
  "key1": "4cSpjQmuaT9Binh6iAkKR5xVNf7PvozAuqDhZ2P56mn2DLEErCawDE7Y8u3tcGJ1j2s6mkWg9BczFYRSaj84zDSY",
  "key2": "YNATy3aRwhafqMRRdvRGCicKirUYPwsUHtGknh4PZSBcRQTC3hKdV1Axk6XR2eXGvqRYSuqpNYQUYuAW1EQX15k",
  "key3": "3NpYENTjooh3D9KMRpKaHJwyegXUjiNMPmoXPXpEjQNPeCjsC9ZbsWkHqiUwxpVcnd385BUgswepkqiL17LaeFr6",
  "key4": "qDBBGJW4Ej4L7ywukw8YzAZQdfmCNc8J6enZ8RC23zyEFHKDac9w1JiqMvzjwuTbAmedakvTwRzw3N1rUuQYHM1",
  "key5": "2Lrr7qgzm8akzNQGsmZA5vJQSBBgjvviTj3sXrrBnK6mkXgvbmYBKB1hzgvaohfDokDvVG3UrE9iAwoAhuAUgAUJ",
  "key6": "474kUaJdprL3RE8QpdarnGXdVARNoVuuB9AhQAeyZw5hWvqvjCddYkGeM2mDCrxfAVHHzB4Hn2Jrmn3nnU9FtqqM",
  "key7": "H7aFX1v16Wte2xnFmddtyRU3ZYJDcy1zFB3TousHgrueHZKxokkdVriyTVbDExpWLWRz3kr9nqikqJ4qsJ268f3",
  "key8": "LXwK8NTnTXh4LaGoEdBAu8sgjxGw2dwMpfzjN6TaxgD3zEH7MyoDFaW5B39GN9Q41ShAhJm4tH3uUDEA8UV7hBw",
  "key9": "4mbFngQEhXBeWc186J6W49Rpr9HqdR9nbiANLWR8yEtVRgVhre3cZxzKF9PipbsGdKoan5w5sVLXBU5dhGU4hJgy",
  "key10": "55pDowk4nzXGBc1BmGk8qdNcrQSwtWuJ2oniKRAy45thAJoLJttq92Vy5YeVezxrQTnnwd7t5HYgeVbTrQP3jYxU",
  "key11": "4AHySrwu959UGPDmhxyKH9Z9N24GPNLC4h2xDxPZ73BkjusgsMpexCC5CdPKuc38xYmws7dJ1ZRyHaFK2gHTzNba",
  "key12": "28jFCX9JA87vwyLbxmFw1t5KrLiw66Q82A2cq5f1UyeoCakx1oyVqaKkY85z8eqELuK3ZaQhc1h1ZAxJx26EWc2H",
  "key13": "zngBDruXtYUqPNWdZo7PkQ5bYFqtmUqSeQhZqV6Zt2pv4YwtfJoY22B8V8nktXKQHZ5go5owkpDgBVNgV4UQK6j",
  "key14": "32wNyiwRiBcUdGfDTESAYQnACsXp2aYwcQECtSYXA6jFWZBtEvWDknnRZPoSDS44dxjdYvD4QkqUL8n5JNng76U1",
  "key15": "2X2sAaZ166cM5kyZe2zS5Fn75ohUxjPQ62cdKNrCZH8noeBEeFJHUBh3yTzx7ipNg6SQfC32krd4tSHwKTL5J6VT",
  "key16": "BiG4W419f7mYk7dV5aUk925oCSEXo2fEvE8YQmNHjeKeYMz1MN9WUFWyoe3i2VTBkAou74oCK12VQ2quMvwExvv",
  "key17": "sz4UFWPDi9xZ2mmRLpic3XrK6iTTwdLYFCcPGaTqXouhASeoq2Dxgf6Meq4m5tfXZt2Djpd1igmryYoFiNKL5dB",
  "key18": "3vp7MyeEGeYxRgQA3XH9qw6SwC1neps4q7JzsEBsapWhSMnGKxUayTnMZPnYVDbHQWRAd1QqqNqiDBMB5ntMLPCB",
  "key19": "2kWqNFrjRed1Rh4gHHzMzcRMEMQBzq8r456XtEcYkajZ2C1ifQR1QBFFBMNtcvfpbZQ3vWGm3cmx6NxZ2CjbZFsm",
  "key20": "4VZ55kcwFCxBJ7aXeRPXSD2ot7mSGXH2dXC1De5eFYJwA2eh6ZpenTDu6uC6X6taSTnevo4NLqmkzQu58dE9Etbm",
  "key21": "2PRwugwYtT5TQGGrE9XjZ1g8z4DKvaxV9WyrF9RTiSV9cRk2eohDc9TXkVkmofBd5goERUdnAmkaWp5DopsiVbj5",
  "key22": "3oYXTZiZ3WzEr6JrwNW84G3KRCkcSHgJddWbYZM9KrbBW2ESxqL3Q75HNiMamo3ndSs6VKFk7sPXm1Zz8nDGW3HD",
  "key23": "BFfsmbP8mAHPGfQbXgiyBEuWbXojmfZNynNBqTWQTTEwfJTcfdAx1XtLaSi1fgzeDKxXgdh56661nC1MFSCN5XN",
  "key24": "Ada3kYMt8CKDFuhsNNMwtFLiACCahrpv83tgejXi5nZrMkjiY28gRVfxu3shA4Gx735DRK2dkAMCxAvvaRhe381",
  "key25": "3DGRHu4DX9r4BdL8x1PCCLbEh81TaVE9x1eZBRShz4t3TYipjAXroR743J5oiWzbJKCM5LCRUdRm1Bjxfhn986Bx",
  "key26": "4iEyXRr64DVUDwQqVop2mvaGzrnxShaXmSi5JchoRGaDyG33UpzMfgwB1Xi2tptPTem1yk6pqYzZixoxVbSusfnE",
  "key27": "skuUowgLr7ZuNyhyWxXuGNbaS16fewVzRj5T2DVLXDyosKbnzbCrGNrUoH62ArnmbaCQqm5HQdq8uTrY3oYDhyN",
  "key28": "3KJJVXqe2mPtQtVEnXUSPz5Uc6PnGzCzVdDiCr9jPRZxHEvRa2wPf3eczRnxVquFgzwY2kgprRZtHxz8mE5bkkKt",
  "key29": "5M5J9VgH2TCgBXHcx51WsoQ5CP2WrhrVRZmrfoGaeXmdEN1jNCLyQzLLXsBgpfoauJT5hUofTHrN8ef543849iCj",
  "key30": "3row9fem2WmMR7tcSxb3xQughjxceHRqcrJ6deDia1ZRwcGqYbXtAZdfAkmZBHhWGutt15Eac3JEudDYwzyTv53n",
  "key31": "3JFCaCfpXW664UMUxuxXzbjwN2NkKHvnQkbBScpicAo8ZgNLYCCi31A5uxpyfCSdV14gz9ryJ6amQRpTg3vve7B2",
  "key32": "3pwBKLqXC4KNgcT5axJbWSxjUmjrtmSHjMSVnKb43Ytx5JMzesFwFWeiXhHSzB1253kL99TgALktYFLsG3drWf5B",
  "key33": "4aZhKzpa9F8R95Jm7AP4ft4hUdhWnPVNXQPRmKqp3hoUKFPa33y6QVcyU87XEZZm9CoMYyS5ZE5UcFhrVf9hnxam",
  "key34": "3csWU3ynW9Psrqnn7En6AhCgF4b2wnfmV7dTGq4v3JNPv3eqFAp6Ui4WJaML1EXvy4JaUQNbhLxjjQ6vdfSEJDvP",
  "key35": "2iLNqfxTSv9Xjfyx1yuwfjeL9g1z68DTc4iodFF8Z7PxYa8uWPBa8bGoC5R7PV6pCXyw4E3HSqK1teu3haYG8XhG",
  "key36": "3TXG5z4dGExDnQYyMiAfSyoGgWafRLzeNP2MDWnSJ7VhEqar7juF9gCpXRFkzHAtuTLSPX7WgCHdyDVUhNrrs2pC",
  "key37": "5NeryybU8qC4qvv1mgBmvZXdmmBCzXth7j55uUrqEw6h4uqCN9xZ6pDFcBLQ7EX1K2mzkHqw1GVsVGLHYXtuDm6c",
  "key38": "2jtbBb9qSE9AMDb9T1nTVDG2QFphrWbNemSBV8n5fWwgGjfwNA8mcvVXQRjfJwwwzWQeNVJpmbxCdqGr3K2n9TC9",
  "key39": "3wRpCnGXJEX67oTrPX1mFt3dxPGUgNfs2dAuqoAXa7BvTGtkMNrnQDziG9zUK4Cf5rmdrDvSPFCQNS8uB5ALvoGd",
  "key40": "4CvF2dKwjGfJJnTvznudJqJmz1VVmZ25wPC3FD4Qj6kF76TRGjsL3PrCyGG94BWVZsGk2YRnRXaoQegv6maxfzHe"
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

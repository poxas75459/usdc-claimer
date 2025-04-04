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
    "4RPDTaWKMuZPiogDrjp7CKjbGoFb4L4Yk6BCrRxA3Uw5ecAPcv4kcYEhrF99iuGqpSjN1rZNcnvvUFA3s3pjkdnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33C6QW3seWTcqZzWaf3h1keKZKAKDqEPPV18QYZquat5fHRYCjJjznEYaX2zTnU3tPDn4hw3SoZy9Y1Ugh2nytqs",
  "key1": "4LaSbNPiSjF31yhCGmwBYQWbkJafVvxmhoepSfgrGjguhsMqxtQ7HN5LYj7JaD1XqsNn1w7Y3w3rtd1HokBcADuh",
  "key2": "4jRqMPK6mRApGux7MTNgEEgrwDRCAt82hEiX3y57PNg3Xka9WWBzFP7yXGchije8zv3HAa4mLuNNSPptVvMy1JWR",
  "key3": "4Wc8u1j3Qhtnnr8WaVKbsotjRuWA9DPhnupMAJckh7Ai15LRUfJhvkb5iEgmySfYZskQqDqbeLPmRZ8KpX2GbxW6",
  "key4": "54KJdeznSLS9WsG1cB4YfY9Azcup1UM3ZRKUoH6Du72EvhYerpcLQAw4kQ5aQj5cnYp6h5cqjZEZVVM3AAermK59",
  "key5": "5SFXd3NvA1uyGpGRTbRcDJaBAuLDhvKu2UkDJYERWSzpFDUnkLGLGRHBxUtsUu7oKPccNWMPWEisU3ZM7sndENBK",
  "key6": "HptoVA1UKwbE7c8fPYcjgCDVnCaNiViaexAA7QP39zGvgFAwrEtUZcjd8oDHewRdNwbxWQsCTLg6YpGcVTGtqdR",
  "key7": "4WWW7qTkJrg74qpEK9wh94qw3GFJE2jW8Hsrn7M2D1bidVBBx46gfPiEbTZsdoKT3Z6CiL4pxFapdLNQ6VkTuAAm",
  "key8": "3Ly38CVqeNLcm561MrmeZxLniQjaoQbKDhEPGwDqvAjtxGy3Y7PG6qT7yf32CwGQuFXhfw8U6idHNPUKMuNbMzD3",
  "key9": "gXcnnwPnoAcErYDDn7ioqJhcgFknptKdkazyLoB43Esn2aeUFgxyUku95m2SUaqKaPb5KQ2Fjm5AXwhcpS2jL8V",
  "key10": "3sKXPLGS2YuX316MFofBuDhpYfdsUTbtiiz4cRnmX7JZYab1NEQByZAM3yNLSZjXaEVEhGhPZCwpddEm9j5fEtJh",
  "key11": "31pFHGq5R4LwauBkezTHLAwtzgZ8uzJx735NbChMtDfFKrzAVzwNpQbr2qubAMKanmvkFdzbPCLzKUw1PZ4DwWTc",
  "key12": "4i5mKJiw9WiRMnYj2r3bBmsdAFwo9xv5VBxSLddNjgFPz47C8fGNJ78Xnvf4tSzQXQwQDDzacjYb935QMW4gPdW9",
  "key13": "61geA5res6765Fmgm1PytCx6BGL3jbrkzaDbwVK2upTCXh87e5y3ovpyRGj7GgwDPQeNxL2xd2WjAXTf6pewMwK",
  "key14": "4v89F7CeBtxz39aN2fTy71xka3wjbdT8TqF5eGvC7yeSDtd2dYcWwqCHHLh92MFnpB8nC2fw6XoofcL3g9YU9kzF",
  "key15": "5xb99MrJF2J44qFgCoemwoMNDkHTbUZ6NquVxvrfWb26enYGugVT6Lyd9JMNY6DChtTLLwF75UYX9aL1QprCvbR8",
  "key16": "2LqXSfQramYFiBK9Tbg8VBc4aW2XbFbaxeqnkBkADqmNdZP3bRZsKCxiR31d43xNbKmo8ZSUNFNxSJmEMAhGH2qe",
  "key17": "ubbPVxYAZ91Bkepq57r6CFvm1Rn7LCZxmug882wMjYmSW43kY7rwi5X7A4kDrrHbvuwjBfMaccKWHeaYc6RNE3r",
  "key18": "2HiCywXbPeKAXSEi3x5WdoeuALpWKRfe18kJyfnuN4FYFZi7tS8P95ZcdRtGoHBRofXVGVPwRD5fYVCiPvG6fVtg",
  "key19": "WPpCDKucip9zBzjZD5SNDiXpdwFX29NvcCJpWE3TCMb5agWFZvsGJgaU7w9Dt7XUcvGpsyRZwDnF3Meqxq5d91L",
  "key20": "3dHLAKqRADduNf8b6qAtb3zi6PZ1MrAaWQjDTA6F6Wbah7a7FHBfL6HYgHqFN3x93F2t3BdLs67GgDoQG1UHS9gS",
  "key21": "8FkKvBn9Hd6AdnjvLp33WwB2BfCwGi7t9HdPMQ52xhr5nn5taeThBSGftT4wNznZbYqsrZtPSxMhGWqn4yvC7gN",
  "key22": "63u4j7wx5M9Mv8rQLW969xcpvUAhXAEJUHzeKCpr1MUvqsu8om32U4cvywn8M6APiQvMKFqRwN4NNxt8fP32bKdy",
  "key23": "U1ztGrcQ8Ert9rZgHHpaJyT427C28BonT8vt297t2wrcMEPJrg1tR2z2otH6YRbSJ2irLad7oK9nP7PE2GQTMeV",
  "key24": "26X2xBiKopwFmb5AyVe12gpAncG3r7D7oFbwUbxyEc2z8bFuGWQS8HNaZ9gtuVXz8uA9VZikoFxc4ZyYcvVPzBiW",
  "key25": "4RwLHcccVcBBsPbFFarvKUbNve4749jvwDzo5arq4MCPGmBEmMbL98DzaRsyumupMbnMRhk6wBh9TKAGeFDnHcpk",
  "key26": "228gnyrzFeDC89BLEqMu5k62nNDZq8HvnrN6SqHoDQFbEHHCQsTxdDL7QCMK1Zr5BP3TS5NEiVWosfCgXWjVvMnb",
  "key27": "3PorK95QvCFTnPrpgePtZZwHzpK7xJK2VHUZm3zNTzyT6HBcQzSn2b3Sv5cAqXR5pajKLeKcxM81QHnkNbkYyeob",
  "key28": "4snCStm7cyybcYfeGjkhDnamrw5xNPZkDChDNd4umeSmx7J4dvKfn3fsXpQCxSxHkMURyYdRa3HDXg62CNF64opd",
  "key29": "4fc4uLafjgD7DV8K6rHgczX7Z7i5pcuLWy6qaYKJRV5QDiaRwRJYQzRfbRNn9YnvaMFMp6AWL4fJhwbA8kyBRaC",
  "key30": "22ZSPJ3HHZw6gV1haReFWjZuZxeRaqwmEqS1ZhV4LSmq16gd78Qwo1TaAVdRK7gdcxV1S5qKqG3WvfML35bD9uLS",
  "key31": "VycgHwYzR5Zx7uUs96ZhjctmJd8otV5GTXxNhRNTs6PH62iP6uXdTc5kM6cFfHmSUijhRrUKrod9y4tVqLXXPjT",
  "key32": "25xnRbCFFgCvGe217nFvCogjZi8yvYWV5sL8mAmMiN47qWQbczhSxfeqWJzNNd9xC3H9ED5aKuYmkPCRtUiRciKs",
  "key33": "36F8jwsMaBBJnNbAhZgHVkVyLHCS7Qbd5z2FYDa8dvWEcadcq2uDHsydWtAAJBQfTSqb1eCWkhsc49xHCz9tq4sB",
  "key34": "3T3SkgEeUg8G8VHnsGa6j8wHQQgc2DUWAU4MnTN8Rtz8zBXovTGbTkki7Yyu1Z4vUCS48v4tBVRxqzEF8r2nAq7a"
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

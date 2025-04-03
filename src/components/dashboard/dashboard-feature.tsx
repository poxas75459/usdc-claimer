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
    "2dhDnNyHjTAMtt23ct6UwjcwahDUAFF9zbesNSZgTjESanGzFNvfoTJUYEuU9CXr38kJxhiwHL2TF2Cbyb4SNEvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ydUsarzfcMjs3Pqcc7Sqe2uQgfT2Fo3wNb2w7eozizajnBFYZXdAJvXCEN5qbkfxoNL8Sw7ShSXF9vPbHzE7pB",
  "key1": "3XkTkw8p3pv2ox1k4FR1vK6nkbViSQ9jaYyV4Fz4R9L8vDVxN5A9aCHqX4E1iWyT9L1CLyZeR9WWKg9jHXYQ1t5H",
  "key2": "2mm3dWCh5fDGUHXPdTFY38H3XcKG8kn9PhbNb8c4oaHiwg3oUoJd6QiUCoWEZpUBLYTUo2eFr6xj6jgtEYQxLKSv",
  "key3": "3hsbRK7SUmrVy96iR964EHA1XnM3EvjShGMM94W5VaTVQ9gHXcij2YYGK7EUdAxpHn52PpjNDTYk3eA4YoGagcHR",
  "key4": "3tdYe2gGEapzhyouTdE85DtwHLCcFvzrw8nWzmmo917EstHhzkMuMk1GddhX7reDQQoswCBvxUQidDUTYRqnm7PY",
  "key5": "yigV9jyDEX4RJEmRA4J2U9Zoo7mnrNvGdNfreTUcCEY5UqwRfPrArg2edDHpFunbB5gaZYJF3WLhZbBbYk1vknj",
  "key6": "4CzPKupNAGLEawekeaHBX4s1fT2hXb31Yxa9ZTr6FtvjmGntZxKfGVnqhkLALTF2xAbqTubCRjGLfAXH2NZoy7KY",
  "key7": "4XtLewPKV2gugUnCXYnVNC4Gmx57bbxBqBLYXtcjQMEMSZ72wEr3dwptpxpCQkfw3pbUxU4vk5YHZm59qhEJ12qP",
  "key8": "MGaVFrZTxmWicUHBQ3SjZ13ao3NjXSVELnUnEVZ9VHJJk2rWsT4NtmRB1fo5mGGvzFPVHaHEuoA4qc76YgmDNuf",
  "key9": "4boon1Vd7q4LBHZ1bSULjYfAqtXCeTm6efHcQYjvUsvaLPdedcYaR5wzrnELsGyh78cQ3TTQ4RjtQpj7z2zhPDzP",
  "key10": "2ibAc8nHy9ECYeqSJ5G7QunbJA8Xf4ydG7FkV9U65S96CTxfSyuingb7ai54zRJPSbDEeyYByS2BhrTs5hf64XwU",
  "key11": "37vXzpqcBzeWkeYkiqZy1HfrX99Q3RrFnjzjjbiYNtaUGebM32UJQqoYHTVzXtPLfdbBvW8YSzvszfxBqdSDpDMX",
  "key12": "3oUmJ2PyQUYP1TECdBs9BgiHTpJiPBSL8e5qxXnwE9pa7sfhYPQbDDtNncqU9dzUsbRJ8D1BriDdSCvwehWc54nW",
  "key13": "5FqnzRRR9rACLGcymnVdPvwbNSEDhRqzqgJLzGj5BQE1QpFmJZoxWydtiYKtZ1efrf5s2EbqFrffRHBmQn6Qar1T",
  "key14": "2aXmpjsZf96BJkF4LSFjuLb7BZdFkvVjx7EYgy3Mnn3tpwFYBYGh4hrQhb49Sk5RMfZnA6NLvk2zEjYsCJaw1ZUQ",
  "key15": "2zQCmgvczPtZYaBN4rYQgTCxWWbPZL84t8sLUhW1BV1pjj75LWcsc7r9X8Rq6qJwngRQZ2hF3mp2oikUTAj9Mshb",
  "key16": "x8M6ZcnrvVdYsJU9Zk7JFCZfTfewVgR35bfoWnbZqxCisBtLmbX8MdLWgSZsffZefFvtvWBdPdY38z9rQbuX5mp",
  "key17": "3azzcEsQNBnn8P2MJRqHKbPJTrDTc2sXA2U2YMd8zbwvKPccetC7fYp6viqKw6bUwgc5Lt5v4CFt32VZC8sBCTF7",
  "key18": "xP7yiFBYj1w7CyvkZP1V1EnxyRPPgzsosJ8yD5Ev72qor9yijVH2SnKsmpeWsAVozdMspsy1jR3R2BZ2YeC6qDt",
  "key19": "4vSWau4HaCp8QzWApBkw849E47ZXWsoo6XM2LBFVbSr4hEXi6Y1VgS9nhiKxbxkn7cDcakte6mpo5GdfhRjJhNcZ",
  "key20": "5FHJmaPTajugjcqaFNhTR1aCHK48fHfgaC9mXoHJwcEE6F2Xsyqd5QewT6igr4N5cDgQhqKuxvwbUu6aLNRyENer",
  "key21": "4GddqMZD4xu66nXVViYaU8LFCuiray6brKESkCm9Pj54PLPVmjxVE3eJJxCaPtfXKvzQG1dwk59ViZ6Che9JuGjR",
  "key22": "2X1NGYWfQvEWsTLA8ZgVUrPBwmTTA3unmvw4zCmureqsz8o7fwgjaSZ8YUz3YLAK2siWNmCoqYFzEaaHAnEZLSzP",
  "key23": "aZRGd9tK3Ro1HWf6FqaRR4EN39Ucijs8NWWBLdLafxyo9Sowe3PenABQkSAsugVwBWu37wnMg9HD8nJA56EMjNm",
  "key24": "5nJKrZAajakN1zi9E3hxP3sBiD3kn78NF4xUqdtHFmJ3cC1KykWX5HpbQ9E4AdMomCb8EYdsFkjX4r1YwXPTRnt1",
  "key25": "3Y3Rkt8X9rvdmniZtAeMPyqGUL2XoG7fahZH7GDgKxwXXF1V7c9BZCfQAFzSZtQKypQsZb3YefWHdkZVQKZDPLHy",
  "key26": "3ecKa4qfbbBEprbobYGebjghSpiwtWvi6DK4t7yQX3XEun7BkNsxPczvhzpPuTz8oXBdo9TkivXazqTN2dykzS7i",
  "key27": "2NUPMCZNuTSqpqCFXKBUkjVjQGqLvSH8kHgNfXcmKJZYcxrihd3uhzrQr88JNzWMSMatjiwukd67RnxmguyPPSeE",
  "key28": "mLDTzYWDCqw4WyWHw2yoehCCKb3CesV9c25fNHRauVDx2zkguaugwosiKEtn7dzuanT6juhFZEgMRLVnp86586Y",
  "key29": "3okNPFpYKpTZTZs5ePjyCVB7aah5jLRsS4NKfQDL7NxM12ms7bdd6gQM4QArhJ7eEz5sS5mrJnPXRLkJ5NUX9z2k",
  "key30": "Q9SoFCE5Z8wXAx5dKxtutNqFCCxoyvC1uPCybvCoUi5MTKWSDVX5mNx1x9MzvxrQLuafRj8fe3ojTnWoLbj7UQK",
  "key31": "2Cf9o2ANndRyT4hUTJhVrA18J1H91NossWgBKRdhN4J4hsnBA62MQkVksQdE5uL7eqamJbK7KdZBKfomeVuTEgpE",
  "key32": "3e1BUhnjJE8tjg86DXm7FLFNk4SnQauMQNkEdBBmhT4a6c9tdyyczvrnjwa4fNkBf8mKSrHnWmyemTVX24k3keE9",
  "key33": "3M1mqq1cZoyrTFkrfppEsraot9SuymX9vwP4CNU2MmVXoH8paB8VGE8Qu73R3PHurySXe2ZAS19imEBdByF2kNHG",
  "key34": "2KzhJBS4rkeqUWEGdoMg1J9expjP4b2G2fYFK46wbwsvZcw3o6izSJZQR83MhyyP2pPXqdbquTx9zfVQaE3xSqs7",
  "key35": "3phVzZaokehnQXvX2RBSabeSUXGWJAtDKbTXvLHVqMv7eVovwupe2qzcCSJfvvym8a5Wgf5xQRcKawXVM9HT1Kv6",
  "key36": "4MNZ4C3HUo4BjudNTk7WfUNwg8deDTRW8kPLVwzfxPV41X24UkCRC2Hao9DqJxSFsVHB6THDCxAhSV3mW6fuMdRw",
  "key37": "3FyCoxJB6FvVutqVg6jMVSFzoWLQvadb1tdzLbif6mPg22bn7rGjR9guVwGGB74o9d3MzzLhj1HtHqmdkQ8cSsN",
  "key38": "3eZDNBGG5NVVeMoXHAzMZyMp29jPpAQN7crCXQiQcHyTgsTutPAxfmgPsbptUzvT8eo4zmHnoD8rN1vHhiLynYjY",
  "key39": "5WBGHw9bcdt1KQ8eQhCJP9aqHfx7s6c9ot3nMNWr7FjxtPvgmxcArrrR9fYstdgUALC7UBjfAxcjzT9AZefetuj",
  "key40": "2G3A5UhaXBDVFEZdYU5s4scRPpbQwFBg1y5D5DoesCjLPuwXxa7z9BTo4ri7SYJj4WcKwrY5Xjq7DHqZtdTMHAZn",
  "key41": "2NmzASs6sU3zZXZ9Z9TzbHLZht8jxQZMQJsqr8pYh2yeMMkpNEtpp4ZfrhjURWq4hK6iAYL6fh8gyk7JKfAng55J",
  "key42": "2y1gVjub8hjXvBthxCEAJAu8CTgbqxuhKS7QnqhFTkoQncPFDqzPJxARRGGcP2725papDCJANfZj43mC3f4v7azi"
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

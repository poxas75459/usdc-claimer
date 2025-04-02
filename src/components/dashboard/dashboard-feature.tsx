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
    "3NRagacBTHPLe3cWPyJ9Tw45bn6m5fp4srM4A7Xc23t4UyaCWVM3iDmgpuApRiR4dRJsrWXyGn2ryfSvpHaXLtAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ozqdkE8VfpEspXVCYyrGTkwC2P9EWCppB5BLXJiYsdsVBNrm7MTY2vJUpstbCcifqBtJNpRgtng9e8ezggC61V",
  "key1": "5dLcnrdApFgN5L6ogr2DHS8cE3is4GWMhrHxgJQ3bBMcKBZT5pVzzTQt3YhrZFfKmefhnFXEVKFNynwc9ZJ8uqhP",
  "key2": "49xZ9AyK38DVdoo9hFTEjS5K6iPra8bvKCs19vGc2KL3GMJktCdyAzJnYtwmTUwv33Yj9M2dm8P6HY8DAbgJ4EZP",
  "key3": "21Dkd3ag8sU5GyX4xfuVm6PhVXfAQkRuLp8fnxrMPrAtxwQNtaBQKnaFfzXkxsTknUyqMFAXZ2tHfb2fPBF9SYKd",
  "key4": "2TDsRLXE65jRsKe5P7dyCFbrmLoFKEMddjjNhx61nvpnhYgRqVvRkY28voNz3yd1A3USdidpNBMna2jF75CKgkeg",
  "key5": "26PfZeZ1tcNzeuHJ8BGKJhCo4KvEpBjmxjYWhoXgGwBKnDvydD6jVPRMubHXv9vxQ2xx2mZ1Z8baKwGSrR4TLNuF",
  "key6": "2QBj85QJbU13Ta1snLBmQZtFWQguF8JsubHrM78RKkrbAf3vzRR9i9fH4bqGz2jfK7wumpTEys9xrDvNjCBviqGN",
  "key7": "3VXGXhZvdRrVYdHfWmeK8oY4TQM8vaQD1sVyFDTQpfYNoBs9eLbayBeF2BqKNb8mqzhmmjq1v4tHRoz6jjgi7nF",
  "key8": "9b39CQkMU26CsjiKyj74dnZyBPDa295T15qfuog8UGxReK2uAMS4PXSHNqHkzDnnZ49Bwp9vQwvRnwnMms4uX1n",
  "key9": "5y93nSUgS4d9HU58DBnF1MtCFEhPNRdDr4kftZeVAwhhtHYBbeBmBxMHYxmCkP9z82WDpSNpeXriikmf5CVDMU8x",
  "key10": "5E197ysoSPK4F6sTiLjMJ5n1bQgDLsHqo2t7LZpeAKiseKMspKGEhajn1cAVyrgxSGKGGodvWzkdKAHKUTJwBUkB",
  "key11": "5RQzVooAzsv15ghc2HoWspEL9VgFun89rWVcFEvdd3QFFPFeUyRUGENxxWAn7ckvUzm9hPSxQUyJ9pD2vUWTLdV5",
  "key12": "2N6TTQHp9gYwJT6PrAkEqJpPZk1Y1dS9acc6QfnmB1D6qyFWEFtvwsinBJ1XMD9ggits8dmw5EXRzQ2nmvDc2dYx",
  "key13": "2y8Xb7XXStvx98RTeeygQmtdYVbcL5UWesbNjA8HZqtHKysdUMuNUC2BDCNiAYz5WwpxMPZzGTu6cnD3EwE4ePy7",
  "key14": "4Q7jUqku2G8uChScGMSXqd1tZTpmu5N45szHZfLykrD5PApECbGvb4Pr2RsgZM538X3SS1XpvhcDY5hskmKiAVQX",
  "key15": "583LeTVwtHoeYVca2tEe2CVaeLW6itVsFDsTbaWg74JKG1BSBdqMmyL4tXEDREgy6HMJx8Ykr9ziQt49NrSefa8S",
  "key16": "4oUL93EaCDv5y333DsCViJ9XVMjcpnE2WsDuCP6xFdaGo1G5wn4vHcuTrJFVe7PkMvjh3fABCKsPCjHRfG9NmfX6",
  "key17": "3R9YxhEF5TFaNXD6mzye8GUSC5qn9rkP9kyCtZkRaYizCavYshdLPtTeyMHxWf36FtZUuuHzq8ygj75k4bDPsidb",
  "key18": "WBSrCknVCEX9EaWQi2D7y1yDkYkrs2ZiqXvZ48mzmvs3MCthbXsqGbjPfRKtiumcb4aBMmzTfLDYFhgTZ87o66u",
  "key19": "2SfqBYSmxRc97HZQKi1YDFgnRfd1R9aPJXjP5kxxzKEfLzhgFsjEm4EnrUDeReQoDvfNbLUWstVtSvt7QQxcwSfn",
  "key20": "xTiQyMuRhhw6wvRpJJR4nyFe4gB5R6q9fWEdwaf35NqKaKuiT7QS4dqfVConHrGqfLXvk1ivKDN8ZcTSPz8MTx1",
  "key21": "4h52HMXxbwJRrejfnPyGw4Tm7jQwSMjdKpXveSfqU5hbjjhERE622pi7YYdE2LRqTtdR5zLV4KfX84huYhT7ni6C",
  "key22": "2aty8YJoLktq8FXiwRqYvyrhNWtiykKJYuyF2DhYHhk2rjEm3eszyXRXJs7AGnZLL14c21cS71MVi7KH9F3iqyEz",
  "key23": "5XL8XegGuc4NEntomcdpMJxpXRLbbWrGThAchPGQUUgHSbCx2sRbuDeMwJsMEweCyLayGPsxhFDHt1da2K2jPEy7",
  "key24": "ndnNt35v8u7CcbvHS3d2H7NMHmRMRfATKPTxpi9rSD6SpRoMmFvAQyYQ7ZgLQfiY5h3RHJZ9WKWFr2gmgCPdoCa",
  "key25": "BYZi9Qawp1Tfd5j5jjxcjeJjJYmDCaurVmBxCxeGRKgSJRC6HXMT9BBusueY6jNC5PuSiE4nGmV2Pt1Xf5vPU7q",
  "key26": "2Mw14cXUcMoFtxsygxViUene4S11VSzpRhYiFUZ47iZSYkCzNmG3yodthQAeUMrtKSJMVZXxkCvyHzmUF9X1q2mA",
  "key27": "4V9hcoUjPWB4aodYhTZn3RCkKZ4MKvu6p11cj8U5RJwuQNmfoaFrXMgYocgAF3VvsxnGQWtMsvTQKWsmDgpg3EZE",
  "key28": "4qfz9ANwJ2FJqUz8Wwu7NnbpB321kAFWGgqrsJdZrmbUhbbEZF8xVB8NCwARxRW2a5RBxSsUc9ncoTnsB78z9zVz",
  "key29": "3ZYwqJQXZQ8kTYjwqNZdxnuDkeQFgTghxFJobWhy93Phvg21zT4zsGs7iLxv8yWWcPZ7J1gp5bzMU4J1hjL4w4gc",
  "key30": "51BK3kM3GPJrDjSjSMHJJ6BSyHfdPSFDMCWMSjprfXzo9nkjoTeUyXSnYYQNMkegJkCaem1udpV6V8V6DSGAdYYL",
  "key31": "hVkUUxNCfYt6JTzgJo8YNfn3fAWTqFrxwmHwAsw5jYV9W2G7Ru6AkZtX9i6xwdHHnNst15pSMyfyf1ft7GnNGTS",
  "key32": "2S8qHEEt4tVsPn4TBJAVv4WLwQJyai4fvqp24jRxHMwDKtyFnMQgmATBB2pss92o3ZmZKEhgwMcWsoiuouQZF4bT",
  "key33": "2vmqCYWV8Hj42RKa3V7g8Y722QvvQn2Eq4MeRfhLHq5esssKfScgtiQpvrzjfKKdkvAmQcmSvU4xhxuu5EKBcpip",
  "key34": "4o2XQe5jct4zAGyoCQw8oVHmkCpE1kQou5GRuGsvMfnaqjmxvpiEAFq8iwPagPWYxK124Kbmty1QrFwpvYX1rccb",
  "key35": "4m89q45g2hyma1zFAmsQafoCwr6VNQDpmvLrxkzGQYjK7S9aWmd2a4DgKuZJ9Vrp9EHHzg9cxaGeH9FQBKehhYY7",
  "key36": "4EcbMeys55TreaMfgvftbxQWwyJpVYviJtkAnv9w3hLEYCiGbyGn8tHoD1bmi3j3pHn7NkCy84pcL6HKZNGxUoQh"
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

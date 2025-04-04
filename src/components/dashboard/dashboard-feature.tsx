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
    "2u2wK3roVE6GhZ4JoJ2XzqGzby2Mi5q69fdJn7PS9eJkao47HdPZuEEBq6yHu9n3mr9bzLbLAjyj89Y9yFUANz2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMWND1Z3gZMYFV9aeEZLTgUzNU3F7bGpt5pApmdpriUYmuuPnDRR6L8QdYiL6EX4Ms13xmWBkMQbWuskPH3z5nK",
  "key1": "4dHCuCwb3zCQeyLdQUJXnMxLSN2UpXKR1uuBiYC5pAc1DNT8NdryRpdwWzAh9vGqYRETRhA2ozX6ooJGdTacw23c",
  "key2": "2X3L6dqXCHm8wk2Muvo3CWkvzejR3ha8yc6dtkm5neZFV4D7m97mx4Zc2TH8U2NdfnQuuVcDt64yPRiQ7q6Lo1FP",
  "key3": "BAgrxMFHbM2weSWqzzQ7WA6PkF1tovS1UmSQgS887PAWjZMgvkGajgcWXt7jFPq2VeyByaPV6EPUEybKdmVWCmD",
  "key4": "45t2Hx66nmcpqqajiKiGqwo5opYiXD48Wnz9VQTRU6WFAMPZ4oUa7YAiT6njrt2QYomEd8nqWpViEHgELBazr5cr",
  "key5": "2vWaiYvGqRJVSvwppxFjxG43Na3cc2nxUSZ4jxsXPASwiacbPxnSn9XxLEfae3z7Q4kFzkhbGFFi3QvztsEBNygM",
  "key6": "64wXY1nDEgmuPnxUTSRbNqXRtWBaHPVK1UjiczzvLEw4KZuWJD4boobshJRZS1Y5cGkTDcuN3qjT4fhBnYs1r13E",
  "key7": "5DWdVzSBUzaSkTXzqDmQVXt2o5AEKtQ4ACW6HAFfXxLHiEM1n97retdE2yao7Nv39htCh9yGJch6gkLtHmQPTHkF",
  "key8": "4Atr86jVYXtDgkQzjkBh2UnDmrraL7RqFSCKbnNMyGLVx2PdBFqqJNMKbpbmc6VYkAXV51pPvnp24p9VAy9kEbW9",
  "key9": "5t9bdYxHAUhag95QXMWLv3pW3NjmjyS8iLKXxCSxXSS4ZCWhyStReE4HhReQW51RQ46MjLBXvFxdgEtpjb6yrvQi",
  "key10": "4Mz3enr9kjfjcEQRGTkTCcjPQVj6aHkZai9GpsF3xEQurjwJTeTeVLVDDK4nSZMZgjPC2CAgXeTt1mnMg3xU5d7c",
  "key11": "5DSs7HKbzvv1Ucfc8yaNtrmEfkpwMasjrBourBmGALsmSMHKobDagK3SPP3wpxeADik9JBXpjXhFmP3ZsqXGSpHN",
  "key12": "eKH1EQN8FuLLXfpEuvToit6rFyrLo96iJnkjRFw9p7NY1nvk1T5dw31iYbvEuWBwdggXGXT4h46BGXe7r3NFVsv",
  "key13": "4JBSEmB5WWtWdXnxYeCjvunaKJdZj3jYso77V3SGeZqBgQ7i6LDYo4nQZ5aZKv6YopMEWMB9j9q7qMVsKw5e3Qv6",
  "key14": "3k6XXAJAWBTjfvTZgdYCMCtVx8iSgyPkVyr7TRvAWtmZG56sMLRtzd4CXHkdmoM2aE45Nes4h2XGuX3Koz37kzer",
  "key15": "4nivPiVEvWKsuHqNjP4VSHR4BFrSf5CDAByrS8UNcMfvpkcdj3CfnEDmUxvuUD8ZYEHQSgofxRYWtP9pyeMSNpYj",
  "key16": "3phyrcrceqJa22VSfqBsa3hhKgerPUqa5YAGYcdUKvuLdBnPPa16AwMZi3NBwJNpJb2nBsL7ZVdRnUZY2V6sg8ff",
  "key17": "5ooTDRubpdMm5po6bhPLjNof6gqRATDMisujwJLcGPydfPbtduc6L1zCqJsxo2MMxLe7CufbfrnJgWftXdkmhsP7",
  "key18": "4GMhW193vrnQLarg51n6S5EkMQW9tcQb9PuvhhV54ifT1YQGMDz2AdqZq6CQtHgCMzE2L4Z2Cdo45Q5CJV81UeR7",
  "key19": "49X67ZiwCbWcjREwQ3PFsmATP6FS3PpX7mPdDnLVFvkCKRHkg3ma3cAuYX2FbwNzt17UbdyryGbDdJ2oZZHPrEhq",
  "key20": "4uqvYDuWtorB2ZyvEsvaY9MR75BZwn48eBeUrhF3Jrc8TNxBnKCB8WVYhKuEia7EjYuC55uoarFRL2VfdnKSMbX2",
  "key21": "2qnahc6AFSJB29xoi7bmwdvXMZp48CVAqaGyAzi4EZk2yRBuTaU2Ub919NrEXBY65Y4Z5Uhz9M5vXL2pVbq8Neg6",
  "key22": "xxbjKe1HVzbwC8PcS4EBf3Zu9BkNjAccgxA2Rp3LuPSc7GNG4e7EmQSburJNYm5iHg1GGUEbcs8ABghvgvG6hJV",
  "key23": "2fLM3FeSFiNdpC7FbX8DUdfHRUuwrXgW6LPqVtaWdEj6cUhCwLVRX4tJfvsZf9KCbXswaWnNCDikehhChzRwP9zY",
  "key24": "2uD4j3hQyusX6BxUFBJHMB1LFjqbd8jbcaN8WQM4jEiK1S5FXTJaN24K9zbpZqkymeQxyQFbCtoBoYoH24RfMSnN",
  "key25": "4GVFHeuB5xv5eJCnfNCtTUXNDzuATH8cwFG7Cb8rq2Bmk8CTAKwLqfrNLnBaCfMLcnvZzjPgXvfN9GKMYVyhSaCH",
  "key26": "5k6keZ2BPJ4RbThamiQ1QLnGzFPrjRSnRCDJKHMLdrPjKQb7cLyDKedZPSQXdgBoTEYnHncdJMnGsonWMCpMUSW2",
  "key27": "5M7WhxWfjCt3Vvob71wjco7vo3xoRBxmPSNUBRsgihf5njTbDLXmMjw2WZYTrNG6aCxPguuWvNF9vZ262pZjtiqS",
  "key28": "jjbUD7rL5dW3ZgwSypoPmh7NJwWigd5HjC28byH9Ld2XHWPdyBhYaUNDVCNiDHoDiCTwfoFXxhmZwYb9NSnpLML",
  "key29": "4XViZKrq6cy2ePcyyzjZrM3YP4xBXT9dSWya4sKvg1S43q3kuELSCxAqkYpfxucjxMYm9rprP2CVzWGd4Sgyq5pk",
  "key30": "2ihPc6goVGGvnBW5abst8tLEU8gSMDcWJshEMyMuGQJ5MXvHtVEAzjNPtH2Lz6yFddjFAN9f4YNE7S5ACwoDgU3W",
  "key31": "3AnCZgr4CTgcwMg5YQwXM5PqCQ5EZASkyJQdTFKz7hS4Fi2AshRBep87y1fX44QHPg6MEmJuNzY7CsaUZT4ctoA6",
  "key32": "5VURXby7WkXrXvb9Cr8xbArmt4PffGELfANe7gY9jBVa2e22Q6h55fUfbAbqi9RCccfErRuM969fFn8Kz1pRJ5x4",
  "key33": "3JZdA8DYZzcipJ1w9LX6fpt7TvUxqTz127XFLateutWWERWJsPEGYWv2kWrnavkrUW9HUTQuyeLsj67QxtjbcQUs",
  "key34": "R5pmfTuhKAUbPRZjVEoBTK8odw1XaF1K37BWptE7LTbpaa42nbiEUa8Krc9GQqDCCbQzdC4jxPtrdWzPC9jPDij"
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

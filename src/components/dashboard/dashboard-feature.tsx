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
    "58Pok3qy2G7P2yCD89Xbrd9MYUQkGu6d2SoKdNYq2RBpzXxJezcm6y9L9zU9L9aFZTGwUbnHogJSx1kAZRKSq3qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrehBDYYYSEsPg7mZT21U261xppDWEiQrmMBG3EY18MNF3uSmJxp3h99qnaNtrxGGJoedNF4ootMvkvVR1i5W1U",
  "key1": "2BCeFS7mhBSPvigiK7MxWfu1ngVvVsz21L48Hr8weo42kdBV93MbdE1EKmh3PvsBcAKS3XQBUGrEc6MHVHKC3rrA",
  "key2": "37MMrJqaM5hywkc52o1sEWEPeTqqCYMBcvB9CbsQobcdPsXmxWcECAwcPHTMt7Rj3UkCahY1aTdJrUUpJDR7mNRB",
  "key3": "5TSqjtxDjATP7jGxaSfZjTeuF2FUrcKpLaC8f9mouHdigMzeGzmgDuJv24eCJQXU5BHiD8eqg7Z9W71wirgMs7GP",
  "key4": "5NbrCWT9oHfA4YyVMkDAyaBQSbJSCzYVkFae65rhuRTTLCcmybu89mTVHwz1RXo1eRLYqnyykXsGQCpYHVrPGmJT",
  "key5": "2EczSLDcaPLfCqVXqs8DC4BSDSq2YUfoB5dMJ8HkJg6x77EBJPEatt1ge9ySTcGZxCYT7FCirdA1m4k4Yn6xdToj",
  "key6": "3vQnEKWasHcTzfHUUzSVhxxE9PvaYxN7s1VjdVuggPHun3t6mKVenuUnaoyMJ3qmqbn9xLEJX6pxXJpVvsgU8te5",
  "key7": "2gp5GdrczSVebNhVBE8jJATycxXinimZvJiNanXttCdSgECUunF5Maqo4DQ2A6C2hJP6U483XNawVpEuYLXkvJHe",
  "key8": "5R7BNwAauXr6gvu9pCbmoSQEcKQ3QSm9ojXERMGbQzoNCwKSwr8zQMZo4mQ2sRpjZzz6SpbejoAAwToR3jSUwuhY",
  "key9": "Qbf2cNW2RwSyVB3XuwvNBoA7CDcmK2hqZAZY13RczwMW2xDeZUxMT39nUqTPbXmmrbATpas8bhNSUgTdXun9DTQ",
  "key10": "48hd6weYRsqGwW7Pbd2bWTc8vKr98Lq9pYoEQorYSU7Sf4FtPTJkSXxUjcKSR77A7jpg9T7A7FhzVhMw8CmvRoVG",
  "key11": "5Fbn2DvfncKVnkEFzQQwqSwvvSVzHfDpGYMvF27D92CZZPbMnjQrBXHDAeVQttkdcBGcvHihyxVsUs2DaEp5pNVZ",
  "key12": "3WnrVZTiPcYcq4pokBSaT2gB1bC5bQG63nLy7BAdMBjPzhoDy2FEXJ4TXQbS4pFv2n9XABycjfaLKdSz8vXRSuAS",
  "key13": "3T9T2a3AGTmBmq6uwnkCah19HrCrjpWLtuBgk2ZEm64g5NMyX3KtNGBQ7F6AyuKEQUCJijxeEV6PrsM13ntLtg2s",
  "key14": "4JrBmh76Dv76ziN6eruRTZ9oJ5hQTpyamVVQPkRns2NpuAZKGVA2ELbgPobPYc6d8humgLKZCSfDvztPoTwWWc42",
  "key15": "54mF3AG5SZDkGd41uUgTuS3EriAaGcS1pbdP5vF9vA3c3gUt9zfcyJTSiAZznrUNBNNqzGmkkV1cU5NBJiddaD7k",
  "key16": "5MnoxB8pZ5yw9aEjRpcRmh6fso72Vmc6qcuvGbrXZxLuobZZf1pjDv98ogbcoNJm9SFTEqyv5eTxgY93fgV4YxSk",
  "key17": "5m9VkEFCZ4dLPb9HuFrBEYjywCBbm8An6T52tfiveC3S44KEeyVwGLvaSvJg9jgUXXtzuZ2ySKHTYuqt7WfgNF3b",
  "key18": "5ibUbKzr3RPJei4sPqgp1WMKavFfRYscvAtaSqCsWnQ6dxvT7kwWro7BmLtdvZzGUAxRm97mn3PMiJuCLbxVn1a7",
  "key19": "dgTWXT3S5T3nu9kk3wMNHtP74sV4Lf7wZS8dohSE8nRR3AJXDHV212FpbXuHk9w6oAi4PQFbASBtXUZ9AGzNmEa",
  "key20": "2xmPsqeUcNbHofn6hwrUyugKSagkfxscrXsyT6ymsysuHABojKqrmqngKq3RsRsYE3HoA78TomXDZpSmfwYwUAjt",
  "key21": "3M3yUu9nUXZ6WTXs3SjiDnsbwjrXJb1dW83LV9HfSLATjWqoD6BkZPw5yKy14GFXJK91B3gMYNrZRUQrQETEHNyz",
  "key22": "5bcjkdfeNRLed3aGhBbR7cSwvPcz9L6wDuSEHgUYQEi7eaeJyTidVLBkpN356BqEMEFatWWm62m1qokoiPDhhe1e",
  "key23": "ut6qreJQZi633q5r6Vay9mkPNfDEE4dW2a8cEzDtaTbGWoNYJLbcFimF4Qz45rQy3hJcWk9VUpQ9gfWZMpTj71b",
  "key24": "5idC5raWSJXqUfzauF9CYdHmCpsVHRzgkBRfV9yvckjVoYyzvhYKDtEVRqCPBB36cq2G5aWFkeRF38t7sWZKTzeC",
  "key25": "2rAaEDJ7E6VFn8JaGNhj3SG95bTjijmEJx3bxHAEnWCpUamkWGxDSbeCYFBSJ5r9ebvVBP47jrJKw8M1eMT7QEoc",
  "key26": "62BbTnKUtwZMcZM53ujBU2NbdZHzoVP3oLGczKzTgbBryiXCmmACcRhn6V1ErzdeUWHsS5aACXquQf3pVkg6ffq8",
  "key27": "2XamjEP1CCa4DKEHqsn3EHpjZJkDL6nbr3ea6EjBHCHVc1MUVL8LKTxPWcj4EfqJfEtLTwrAaS2N6zp3zegtk6gx",
  "key28": "4UM1nbdKCmoHmCofWQtATrJJX4gsFhWpitdEFGEyN1nkQFBEjv93uenCew5r6jo634WKMabY4k3hAHjCxoxu8K7T",
  "key29": "5AVzjBbArUnAxnf2gGYEvmxGbuNZN4CXoeFf4JJr8pUALzubFH2Y7ms3pv6qKPBuXo8xG9aQxgFQRxoLj8Xhi2rn",
  "key30": "5hvpJ8FoaWNDaPQ8PzQki71MuB2xV5LPtF6vsRu7tbLjJGDuzvNHAsLEQp1syKJuoraaNVi8MjCHBdLgpFxgNXoN",
  "key31": "cPwnP8j6hNsu6GD5YMB3r4mzd3CPa2q65jfcGt9YiZggLNRXUeWX4ypMp2YVMNAdKdn6n5GtiuhZAP9dDdd12GY",
  "key32": "446RNFcMRRji1JVEotSxEqNM3qgj8ZwmdpGfp1peBtnfTpYh2ndRQ87o9jkYt2PrDSHn69XjtNyTHSdEm3errT7N",
  "key33": "BBeyxTmP4ySPZnM4koqC357XuMPS5CVw7huyC9N6u99wTukXSsQCrcTft4KDrXKwhy4zQ9S8Wr1yX2Jcdfde4tF",
  "key34": "4U3dMVZmVqapzKwatodqh8F1pA4yXB6LV9WFZVHHkL6NaodKxy6kY6zLRQv4DSequDy3ScRvdpSJ1cyN7wmznmD",
  "key35": "4xiNH9gssPD4vmcGLY1Psj7p2mDcnBSTW2W2tn4qNrVcg3u4znVj8WqN4yKX9UqUWqTqSDHow3uLbeQw4ADBBjB1"
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

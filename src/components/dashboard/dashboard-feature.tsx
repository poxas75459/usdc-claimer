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
    "27ghsBsqdLk8s9XJNwLb88FCHL1jNwgSga7c8vzaJQesz8pStniy1uWmrtnya3BSLjJFMKA5kWgu4CkxXv5cywiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32cF9xcynYHJawPcDzaH2eoqh3kiNkVqWCtTqP2xi3QCK6fT8upuX6jK4zX4ec6u2hajjCVu4nVvEjaRw4gau9CJ",
  "key1": "4bhXBcS1TSeczGUeabX9Y4ztaB357pgG43hUhjC7SbtJtfQV5TYBRbfh2q8hPs56z8Gi4ywQXufKd2AMGKDxALYV",
  "key2": "57o2U9Ry52hS8mNhAknYeGEpuWDD7GJzp9xGLBgKw6jJSFZG9jvmJ82fLpHHiroJ3y8W4wPn7gAQ8vCtamja6iJ1",
  "key3": "669rxpusehsNcvMUrLcu8fJymAiR5uNSMjPvGvBZpF4qTiFw5nuQ3uCnLZzEh6kEa4pJCy3iH5K5NNJohCgbdDt8",
  "key4": "PDTrvcCTpHm3daXDSqnnrfcFw2CWpuUYurTWPuZRxDnFpVGfYG8Say4KMKMDZCiGNDjgj2d8pjekMtBtCk1HAuo",
  "key5": "2oCYzT1VoA7vzftuqVu8dqEZ5K6Gi7uU87bPBofjfsjnSVJLuaJ8akhNNLYd4er8dhYUCp2vex9mEVjwLyCmeoRs",
  "key6": "2Z874sUxWZL3qKeK8x1a6amQPaHQSzMPNdw2y3AB1c3SUChGLW6CAbpizpXdC2pyrSd1LoPA5mvYMZsxn1r4H38f",
  "key7": "3bUEzaPerD9bu13hT1T25uMVBLiEk89r7PsfKWdUHfz4fxB3Qa813boBYiTdTo1TVB17ssjVEuwmHXphPt7HtgZh",
  "key8": "5DWE4F3Z3seZ1XZRGmCpyj1VRXVtZktMCQih8YBoyjQRfr4oL5VmuWiw78caB6TasvHhsdbVrFFuuqyrTWnyTGMX",
  "key9": "2PMe7Y3x3eS1GDEHrrUDaF7CWXz9757qamenGpuZsNW7LJ91pp7FN1Tr6rEXYjN6h2gYYUowcK1wwAVULrfBNZUJ",
  "key10": "29FFsJP33QFZxkBFsAWXbUKxb1EMTLNxcXCMtxqmru1zG3WtSvTQ3E5sFkZCQHx8DMj1TQdZwCKccCeyG5dD7fYK",
  "key11": "21ijtL4ku9pK7t2fT6PckPi6VyH5D61zg3oMTuPus62YnmxjwuxgAW5TQjyQQN5eWEG95xPsVkjKt4fDt2GrYER7",
  "key12": "3o5N4xy9FXv4xiLmWzx7FQXKmfm9YcNvscwBENgSM7kiXueonUCuxC8adPJgc7HLLzPbHWHgcKJXpgVBhe9TiYe3",
  "key13": "3kkbGAThCa7ju1jvWoi33SvXdEJFPB9r4S8fkLTvHRee6V6xhp6NujzawGcK5roUB3Ad3YsKvLioF4TvJqv46bLq",
  "key14": "4yJzdwZGW5WxCnrNsdJAoebHvcBHgpGgmmso6y5bGGwZzRTLhQbcgRAjdPy5e8K9jEnengZJBdrbSyQdzemz2UnS",
  "key15": "4FuF4RSyCBZvagpHSi6egL5oNrNLed6ozH45yibTTMqFVKW8xCfoWHaZS4ytND1b8M9ZYohUGAFTtmBakWBixzEi",
  "key16": "5yBxy12TN5xrP1oNC3sAFqrCyor8WZ4s2TwsBTTEg1QodEkHfG1gzXKYPr8kkkLT4Qirz3rdkTbRqSq8RpYRDkod",
  "key17": "5octr3Kxz6d1JyDjDx3bPuUcjsM4ShY4UT6fzqsB1op3TxnkuwEvNCyVbBFSfyq6xyz9VF48wqfhaGYw4pzyvWjc",
  "key18": "5A5qUts54xLBkzTPQnri3rCrrvd4RSLNmvY21Xi8Y8VAjTw47VsZocJmxm8FBZLNNAgrKFHEYAh22jrRToSZ56YP",
  "key19": "128qFQXpvfDHxKf3PdXpTNXtyZaMfdjHWz7vGuCpuFBTCc4FmHqoB8TSMMHwwyKWa9qsKosyQk94Y5xPkAC4kwkR",
  "key20": "4thj8pQjsgmDQKCw343mhfAQPbjBxhLXpN76BEQ9sC3uuuGNWZjZkUg1zcDeBJJ4JX8yk8qnh2anEEuqT2f3tma9",
  "key21": "xrptuPbQZUn7jHBEK25mwKDeiGPEQzBUQv92Ho2yvao5UpQQHJEW1pPs1ozHbepUV5RFD9nNYMYiBZtZd6zCpiN",
  "key22": "3rKAphkRqoYEAy3AufKUXqnJmiAdZDvD6BX45VRxJoDg2kery4mEsXqKFdMBMz8sP62fbjxFHsNJfxYphtiWwrMP",
  "key23": "2hBpRt78XRBUmYmAzHnMvchpbKho3JGBphc2P8RjeeuQTpohdF3xb33vuFpccZPyJuptZo2pncC4CxucynNc8tE3",
  "key24": "3aD53agjM1Ek5ghG3AT6TYg3XDsANBvmE6r8RhmNi1aNsZHdFtmAaXHYiMwRD51P856Sho6o28BWQ4ZXrhVPUAFR",
  "key25": "5X8ZEkymg4a8rtwDGpdM657AB45FSTTGiA1drRuNKWQPgrFDYm2ZCDU2g5EkNctXQVwqVbpkiSBrH4BdmCLi52MU",
  "key26": "KGH9bTxFqUUBK8VjSHTA2Wx3XQHbRxKSbgF9gMi2pvhGqDrnvgXpi7H6x3S17k4PxDdTuMxSaJFbDouR5PqQiCS",
  "key27": "457H8iVeR1BAHepoRLSJsgNrHLEEpKYgh8fV96tVggXkSz8f5JtHz1o1KcjctrDg3tuxvYqv4BxdUQ9FziG8kxfb",
  "key28": "eJZZgc6KxBmAyRcAK2UzKxS5URuG9iBAeDdr7zL8hXDf8MprPnGAcFEJoTHzfBYzhJqM6jJ1yL55cMDNjxA7Jd5",
  "key29": "4uJBDiXrrFKhHBjgzoaubdw5zpNkJknnNrhsUaZUPCNcw6V9fHxHyom8kovgjA55WQP92SLgYYrGGtj7L1haJH6D",
  "key30": "5SwHVrxG3KUoYkU6jbnkacV2p61RmrGvCqMqCasdaUkbeNXfAx8eJmyGkx85m17jFPrrwpXrxJ2fd7HAqnDnKuHD"
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

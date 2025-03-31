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
    "ANVvQxLjo4tTxscCsb2dNdF9GCSwMnwFTnoFU5zSkaTKYvDJY8h8mxN6BVmuJEMRUFH1wAC3sWCewEGc35JaFXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmDP3YBWuJYFLqzmBWqoPvZTRdUziDjwikxH28um4zEmG3bnXb5RnxYmtfb8kMdaNcNE7Kye3Ye8Rr2vNAnDUit",
  "key1": "3EwR1SNKwGVMk9ZVzS2UwgqSq4evFKzW3WBWZ5ZM9zPdQdP6Mg1iSibmBvZagaPyb7MioiDgAC9vMa1MbSMJ6FMR",
  "key2": "2TZrA4e6aztnidSfosos4rEPaamyJftekKQejnMLmhkzNMeZfB6GFdkcSUTJU1V5zspcd9Nz6QnQnkSV2nKLmZeU",
  "key3": "5bbSkYawKk7Mw3amTb7cLfysCzBuPn2iEoUwzsH4pD7iNYDkFqsebDCvRQUcqX3j7mJhHrbD3nTqKnEBX7UVvbQf",
  "key4": "4desGHooVaAGpauJ2ivLDfNji9P94EaGVUY5TkQFVNu22GzZJAPsH9CcGWfj5bEnDEB4PLzuLPocNpMMAHnYchz",
  "key5": "59JhQuRkbjcKCAd7APhMCFK1cxc8FQEGENEvoQAp7JeCQeJJ3thqcwrbVrxXdfU61jLNoc4LEUZKEoM8npts9EAJ",
  "key6": "zxzBe5budUngp8Lqq3JGQthNvYpBty729WceuVw36ruhUZPLPZokJBWZiSNAfwEjNBGJGCZAAf6UaL5Vb27cvVS",
  "key7": "RSjBSFr5V5Qoz14Yy9Hph3if22NUAtgD5nbvWfMsVn9gg2WSgZcVijX9GLLLMPnPBiTw3sGsKJwV7gBLRiKxFko",
  "key8": "366MsfVqK5nLFb8Mth5xTg6fX6TFmAKxFyb9yPAy275rsoreE6YKi9Un3q1MudjwBAcftKHhghwtjKijLgKFwHEG",
  "key9": "gmHhRrpRJEgWrAgmVfyM5zLFJjSwujEXsbvgNrWaXP88A3DN5848yTKQTettK47pAgDvdT3qrkv7Fwn4tHm2evu",
  "key10": "371of5tthJrixgBkJrer7h7ipb65Do95PKCSuZ4nM6qV9cxuWzZvr9mQy6ruwhc6aqXZExnV9wzUH75fXyCo3TTr",
  "key11": "33EysotAVo5hwZLNCxmUuJAXqQQ2GATQU3zgYFy9ZQC4QcMowo398wk9bygvn1svuar3fJhg3nckj8FJ9YCgqbsb",
  "key12": "2jB2YMCVdjsYbnVWTE23nck3nWfhu8H7FKtL5g5yFNrHRsad7iMtyuGEcwmcMMZm3kpmv3X9M1jESbN7LceoXWPa",
  "key13": "4pPfZ2r37LQW7tWNjaq1frUw8qbkiseRT1BTxvjn8Uq7dFdtMipKRZtXKepqQJbBcBLtwpSgw7nhANNhYBgTwn9L",
  "key14": "dvYFbY2BxdzSet8jGbT7JQnJ9FTT7y4m6b9vp8vQa9skB6F4W4ancXMj78tzNNzFd8XY1ALHnm8VQpoHxzLYGA8",
  "key15": "2smDz7BcmT8HQaxX6FTxBVHSj13KuWTL3RefHjJPVtaMmx5AJgM3KogTraicxUHFdgiLhpFdrpBAU1FSjhijNRrj",
  "key16": "2cxo7R5bguMVgVkWCyiBBZresNGPvqfe92pmvkQmZnzxK3BQLdN7m2PsTRBxqbE67cyCi3EB5cVWdbstd9BG6GBW",
  "key17": "mY4LShhqAZzXEgY7hYkgVwGBxRcnxViQiJt9f73Pb66cvP1kP2g11sPg8Ff7zaVAZvZEShaBfjz44HMox8Znzmh",
  "key18": "56uqKWPwt9xkejrzJMwpRw774Kk66T5HYKPbxJZGjpuMamEM9KChoLAbgzXMbKFddQ6f8Hqqd6Wa4wCa2nrd1z3k",
  "key19": "4XChucKuEVQeRz4je5MQxu2yszjBoLkhtPqYwtRiNysqMCQHx66FbXRTRmPvvBd2bzvZe7ASvkQUJ8MEAKNbqrok",
  "key20": "MitMt5CJocrCUTHY7MmvfrA1WswVPXa8hxHHYTSnXGsAcBpZsX4oXNgV1XXt6At5T8Gd66Cn1ZgsMTijawUQLZ5",
  "key21": "3b3QYv1YLxeGWLr4pZqj272fQhXEvQpbVYpq2hoXGovA2Mv5ugHiNBnbbMmuMqMN7rgQMxsMN1sRWqDGYo6MBVc3",
  "key22": "56QghMn1q3bw98pGdcUSah1FnArx76ord5ay5wimzAgSm8dj8PCVA6VEWAFkj7yaYwtqpwfqXikzk63upaqgjMev",
  "key23": "4Q82GVpyGGXm5ThLejSuysoDg4PrVPgkBVq7ho77PKEWFVAT2ZqSQHEYSxvx8w5jCHvX4Y49996HD8qkwGm4t1AM",
  "key24": "2pxgQWjCKmcJXwVGwJ1QrZe7b13LhmmeSgVRBSNbMSKYtVvBeAV2rx8bZVdvJzzbQmyXmnRT1LGREYSqFXdp9Xda",
  "key25": "2CFvvzHk2f5k9zHxErpovAgGLyUNpLBH6qj6GA1aDRSj9xk6RSnqgP6wd1U2d4XMJ4rwLY7XGmwSmpBoiLY1EjVe",
  "key26": "UVP57X1jeyF5F3G5vpAio6D27483ER4JCiQjiq2bg6xmnMTe2yDe9u19bPA3xYZuDjcHCriFmFsczmT47iyvbES"
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

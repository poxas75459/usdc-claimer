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
    "3CXzVgN7Zhp9vnJK9EoxvXsoYiiefrRTDt9eoD5PQFE1a7NxHtMqDMd558B4qjRkxusT6NJGJXwhiMaLut6moxb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5PVvnphAqgL1PcGuzHfsqg2jj5gqBZT9qUejGBpyHYJ4amjGZUpRzY57MzeC2gKLRH8JxBR6FmkpAiPDbcZjur",
  "key1": "3Bz1WSqZRyEPHpuHfrLKicVyyVH72xSn842xHo1N3kQ6C7yh1WfAbijqktseqTNXfWFNZhmmC7MFVKyzvR3PTTyw",
  "key2": "5LbG9Ri2Y4rGf4xn8pGTGbX2AVuaD573kZK8gy2q6zr3rM2rcF2ZMycT6V5QpiJrD9ynGkeW1uM1RsRbZeStwDnu",
  "key3": "2DkCzBLdJaMoNATtNi489qXpX9FLjGF7UT2RJSGwKUj5sbCL7zTfFKEpzSagGfpH4ecci9ByViRZdQDtQmeoCX9q",
  "key4": "5MJY6f6jhHAkXjqBSUdHs36haXr7AqqkECbFhp5MsecE62maJqo4nrW4E4L9Y2yC267QNuQPiQ9uXWLUwXZmYkNe",
  "key5": "55z9qfoLWnWE2XfS1YZioxfCTGEah6Q9AQY2MXTQReEoivVj2pUU3rFNiMEVT6jv7CcEbLPb9FYAngjXHjMrb9NK",
  "key6": "5r2FAtQ3nodeRerSWuADauJ9ujh5stSKMmjhp8G97KL4MQysCWUBev8KRN7178mZHJRBpRejQKCHEux1RaPdiDGZ",
  "key7": "66Ksp15J9LidFUooYa6fwRgu25CAAXtb7BfhcjnsF9XHtPMg4XJ37w8pizjmz4XYdm78ECwYbbdFHNjAPPuM6JUT",
  "key8": "ie6FYnFWtQyNVxp4SEjVfkGAQAm54E2SJEaEz7bgSAB92iAY5o4o4Pi85HVi8sNQKB1JDyvFE6Xr8QuthXQFRfN",
  "key9": "4Wm5uZrxiMndLeAwFaUWw269GADk8r9wNevTb8gTZQMVe49AEWcPWGnbi7qfeKGrSd6vKT6YSH6mTHkLd2rX6ew7",
  "key10": "54FxbpRTq3rqTLSDT2vcsNiXG2wxqEV49Zb8C1yaYNUPVgAfRyun24XQRz9EGLSCBE8uoPcW9CYNMxSDunU3i2uU",
  "key11": "PQDRFoAXavtiZUMGi1tUGa76NwU4yPM9jBmxgZVayiQeprykTiE9SbexYM56M4CDThnQCYnVjKp7ogUBYshYPjA",
  "key12": "2nKt4tMvVUYncdXhVtXPeBEtswvhgjRrvqjYjPoDts4W8P9f5itpPTFH7mFuUud9b8mjKL6oLrUzXKm4usd2nQ9p",
  "key13": "3E9H9XbAubxDyNFGQUureURGZ7ruB9K2cqecFVjd1Gv2oDpqfM2Df3PYdGMEzwTLRzAVkWEpT6nxCLWQSc7nXhUm",
  "key14": "5yxfMCW8LisxJr3A4GTKvZ6Xi48faXvdubdqdf31KiTSaYH4JgtAEY7Y7XcaVr9kaGMTw1yPdbSWoNEmw8nNAAHb",
  "key15": "3HaXqGpfWYgagQ5XyZhUV6WLKvhHq5yArxjofBTXJ3T6ZtNySc3PM7GputabqXSoygVZg5UhvZ6naLpDsKvDF9v6",
  "key16": "5c9hSG22iV6TsYYTc5iKCXDtrxVv23zh9dLjdj6wANVa8QR3Ku4hM8MEGwoX5MWZ68odZcfNXCBRmKBWo4HwvUwf",
  "key17": "2Z3gaS6qiurS5b9YhDQDdsAUvs9gkkyCPFWEwsZpgMaV1gZaNa79X2MNUekXgzbM75pwNfCAUPAGwE5VhHqSrke6",
  "key18": "4ngDZGUmTBDBoEs4hj234zsDwBxLneTMJjneysXJdvzMHtH9i6GviqUgzW6KFgkK1A8jSjYo25cDuFgxQNJiVBoQ",
  "key19": "2fzTNbfzpHk9D3PkskVwFcZRRkdHetC8E7KgpTEduLEdZEMnKiik2BrMbMnGvxwSXZeuDJf5ifZgCGiX7bTaxJaa",
  "key20": "4hUx3qYt3wuf78AMrK73C3ic9MKSgrJkRWX85QoXaVjS8Kk2MWAmitDtR5SysMiVcQPKhfGnPMUfRtoHssRUCd2e",
  "key21": "47a2QaKaQWUEx3ijKyn7sGxiV9zmgco5ha9YvhNmGZSLD3LSTsXvS3kiQmZDcbLFYxpQ6xJt3nbZKy8BzEWqNKDc",
  "key22": "4m8ye2tUv8STsP1BYzLExwXxGkCo8ieDyi4LB3sCeY6x6UQ9vCEtxUiBFaxEBD6HzmUsfbBUir7xWb1i2xEi2CuE",
  "key23": "5pNnSe52qjjByuXcR4nS54u6xnD8mGkG2juBF2RqP25CorpGhg1Bmq7rVkxdSubok5srVxTzzgiSgu5u3BhVH2Ri",
  "key24": "La9FriH5eStrt3ANbRoxLboxQGrUtnYWMon7LoF7aTJD9WGBB19xvFH2FaFPLvszieQMMYpqJR6KdBiDyQ6Hgtn",
  "key25": "35HLvABxviBiQtv8MaE2KcH7ykAXt7Z4qEg9y2D2Kka9qDrCPPxTrTepVGSjZzYFVNqYyR4oLwYN35ybdQpmQF8X",
  "key26": "4W6ny6zAcwgT4YGbxtZHPBdH5aUoAM8irpLQUWD5xqmCyxCFLaSFqKBziot6GpDgrnvxcPoQnyeBLBVGwiaR8hLr",
  "key27": "51aTLTZXpnf5urjUct48ZWAykGadppLxT4ci75X5Gd2ziP2ttqnJCwwtR3x4RvpyUG47qyo8GpumXtAujmVBqSQL"
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

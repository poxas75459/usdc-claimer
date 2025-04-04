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
    "2nf8U4jBju36cKqZXy2kaiYa4sCmAzZwJ85a18WEdVxf5ANi4CjrGQ6WWd9eXwRYD7BSx1RzRF4woKnxVVEm9Ax3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xef3uzaP94YEXAEZqVePiTFnbeRhQHnnMiBeUokWrFUBdoMe3kAvjDszXoaL4bFTpK42UgcV16hZAyGjKCD9CcD",
  "key1": "j4ptTR21URxgTz3ahsRLaLw6DKvp8Nb2gW1gJyaShPkWpii5ndULm7wyPEUoLCGwanwRZ1tFZoXnL43NoScQar1",
  "key2": "3RadJEjAeyq2paYFd2BL89FJ5EJfQ87FvVFAYDgKNXdJQAicfsZtc1ZKEGCAuUXisDTVBnSB4cGxcCnZwWhL6P7x",
  "key3": "5iAEiXsDqvLp7L6yzQm2CvGXhwYQHcvzrvprFP4jvrr2NkY7w5or4AX2i2JJ4Q3VsKWWzX48XxVeTacJb3Wdksih",
  "key4": "3JHoziMSwwN1EUKcM4Zxgqy5ZyhUE9Z5wSW4V36jfs7do1XcGTosCm8uKERxfsxQXy9myfTGhTCtujcYwTb8BLTE",
  "key5": "5TqusezpdSWDXCfsidRmkBbYH4FjSiALV7BxrruDnqUVTypTVe3RzX223WeqXCyrh1wkQXg7P3kXRb24CvVJQqBB",
  "key6": "3pSwrYpxNckCoiCDZd78WTdjC7Yi2tvwfTXipy3aYd3TKyMJvCrVq5R45uvMyxCmFBMw2oj6dNJG26jB5QXHBrKc",
  "key7": "2uomzPyj5wha9z64cZV6Sx97qqFND51SL7ZJjgnBNLfZV77zn94SpEyoHtwMvh726THMDsDYvMB7bS23hScCbQb7",
  "key8": "21woBvKdjVmLGkns1ZbsQaWLqmcvDcQYgmjjrzzgy8RHqHSPjSQj6JoTvThAQhSPF7zhzBjXi8zVoNDjLhqtUamM",
  "key9": "2eoqJvtNr1XYU9yYL1Ao1QB3s3WHLGYCFZSjNzZ5LvYKX6arFhXTuwiT4GBas2Lcm5DGuRABK2o7h7YcrEY3HTLa",
  "key10": "3Lai3RAnXukjwqXpvonXtyZtxvbC2JZcUDgAvsqmXmEEwzeVo5J7HC25Mb4jigv25mf79t9S8JzrYNgcZbbCghuZ",
  "key11": "3xMJciQxnWuxWLpqeW1bQVqAGSgv2KGU8hGL7fmRvbQJQJmsrC2rADE9sxPnEbAr1J5ta2AtucAoDd9gJ7KfHwFN",
  "key12": "2vzfRt3yv9wU6M2dVqqxbCTktzCM3xk9mZQ6QqLKcEMD6Lxeofyt8p1fuKVD7Nzr65tNbquRTaesomuvfVepeMCQ",
  "key13": "3PjG6WnTpwrRwbpPNkzSp66XyJGEDXtcEKvNqPaobU4vMPwcfvAHH155heUe8Vf9Lo34NYeNTxB2YwPj1a5KCtFr",
  "key14": "2gkwK3QYGqijR6EnrRPBkPvJEDcNQarVLwTKYhWEyHdj86cEz2gMkLsnqZV9tqy2swLkNNmUaSuhVvp2FrkygfX2",
  "key15": "2Gzq2zifdk61RZaoTMQhAMUPb2szVMuSRL2jSqwuD73Uhkqg2YP68ThSo7pfSA69PeVMQ8muDqZoVELhmu5L7sLp",
  "key16": "4gopprAFL2RoxAZSt5mBf3J2MxnD6E7CQwDfyCDQEwMuiGqf2jBRUkMEStqDedSiZx7C7cxmMvAGCfbMmGJzfR8B",
  "key17": "8pcEoSnCPeuVRTMrhbJ5qL7JDfgjMTzQSAUUBQphcXyMnJ6c666s1zyD7xpwWqZgsRPNUSsL58AMG8yWazEBB7d",
  "key18": "ziX3PRveKvDWRNEp7oNFLYTcBHdWuVcgrCzNJCrKTuMeqKvZeXmovgxFuaZ7Yj8msdjqyHi1J1TmWFa5bKU69Ro",
  "key19": "121scH6qBUczSCPdxx1nMEyrQKqoWBk6ugXdNDTbMD9NHCEAsVHSMgdCmdFNVbhfWug35qc6Z31tDYVQ2rCwL53W",
  "key20": "5Eak26kEyF8yqNHmXYSLCDj8yrVtaLPBnh7tsurwdRdzvaxWPn1GffeRo4k4tdLduT9Nam7tCjKeePVPVJP5aLzo",
  "key21": "4v4HXHuD6qm83KY3n49ARwiNEokKYPyuURnoWcoaQn1hHSkvfNnVeFfeLCutH8DdTqSvGiqNaJoyg98pjxkS7d4g",
  "key22": "2biJ8KFocg2hgvKPv2hvHFccr39vur3QJGP5iakmy5eDhG27FfFcjGARST9zmKBXkAGpegJwXMFRfF6RTX98VB5S",
  "key23": "2wwSAdAe68QVaE28R9rtT55RjkbEC7NW1CzxGZvhn2vuJjX3yEGFfnRU9AbajdbkqvzCqVX4SkPGzm6mqGUE9B2p",
  "key24": "yhQTjCfVoG2NnJSp5dp5TDjZTkrCTtvn6AP1GydBZB3XzXkeea8LykejtSMnknHbcgJgXs9ZqNGbBdzRUHb8vSB",
  "key25": "45YApBBx2oLEESeFBpyzjrCVnoTyGKa9UGxkPs96Bkxun8Nn2Rc5rh2PWkqJx48hocRkLpiwUzcJVZP8dxSFzCbF",
  "key26": "2sozZTqWjDLGFHS5VyxSAG1iucH1d7Q4ZM7HtYDLLo7oG417qjoE4qyQEDrejDqsBNX2LyVES11TmbVdbjdQwYUN"
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

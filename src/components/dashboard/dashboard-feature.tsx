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
    "2cfoKaJdjYyDFAZ2quhGi46Y2qS4ePorXnpXbWNJnTrSmNtHtyDTs4ixCNM8bwWj36tA67b8dMTKpgKxB8DUJgbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34caM5gw6S6sqnftLh8yZJa69DAva4CBi6vuhBwC7dMJ3ZvzMJmhqyYhp1LayW4y68xphmNBKJJsY6bq9ZVpdPkZ",
  "key1": "BC7EkNHR2yNBTfvgwvT7yMo7AQmZcVmo1cocqvLJuRsSDtaLMd5Yvq8qtyDojCXL5aDxJdMctZqG6dNzP5QWBRj",
  "key2": "KCcHWcWtVuZvfsdgAsNhV49VMRWyh585b4YkcDknhCe7rtkkbrDRVJoPkWAjsdCqwwd4DeyJnAMtqyjMD9uiDa9",
  "key3": "9D5u6u4iJUi8dgNcSG5D5UNSMy7qupkBmk6en5Q9eLuiEXD88P1Q57DLQKBV9stdYBbeWPujWsvZbdW45szoos1",
  "key4": "3PPHqpYJKrKJG7QhBWDepHWuFnAHMLuvykD4p6PYHcw85mSLEvp7qwoFk9qYeYsZoQB3fBUco7d4851H55MrSDbv",
  "key5": "3gPoMxsHpwyvuJuFtM9T6d6u2aYA9DcGVdetJJzUXnZnCo8VoGXPApYsWJmD6QmCGxQ1E7Hc1Ew1w2oDcG4HEs2H",
  "key6": "4XM719uTXqgdkw8aibkeDhktREqMyoaSm6GxTc7T138sER3t2Vkc7qSqNwEafLwfVzdkfKDQbJJRtKPju6KZEZYd",
  "key7": "qzHu4mTtEy9zKw7WAgvqKPUJwQr8v96HSSsCftk76d4LdxhJUSEGLkiK5xQiBLF4DuXxvL42nGHUz7WK29A39gj",
  "key8": "3uC2BYZz2p3xqY3GpbmErFHcKmud1xpxLGABfUkUD6ocQiSHyyBnmSoTvMX4VP2Dc6u7koqD3ZbgychAegpzQ3QK",
  "key9": "5HWBuPAYHbaQNQx3V18YyWfxSm72pcvo9TdKkEHmCRoYRm7VokrVJC3CieSqWWnFRYw85wBZA6UMxGHeMuzCHZZR",
  "key10": "2R2eLpLjJgL9GpJepmLHE497VVDxYrgjXgSx6AdvUcw3sngXpiymHsrCmxSKg9TLXkrYp7fD2pgGeZrWJ35Z8CMw",
  "key11": "5X3M4FfALXfMM4kPLJJzKTkkhP2Dc6wKhevaphGaEv6hmLhxsC9CgcFXDDitM7tP7fdQBNzUDttg93XVhUQQ43ZY",
  "key12": "7Vc2yccHubPWq2uBXiEMEsr2XmfmkbAFwaPFy89Y9syHnYHu6gVMrVFFhKPXnTn6pU58CxXZCSmTDdFEU28i3fA",
  "key13": "3W2juLtxxgyqMSV5i3duNe7XRTnUrd5wtixDsx9MLjpXYhnyW4azkgmT5nNXTkuRjto8PF2mnXHofvNFLXKC8c8g",
  "key14": "3hayxG79GMy4Ef2kEb42ibzophyhQuSVGimBwxicS3T7NiLB74mbMuqNu12mdJU9WdWGSKS8TcB4pEzHJQohpywX",
  "key15": "62NGyA8biNbEBDFusm1E9vUpKLmW4iY3aTxEg5Y4JSw7u5ey1gapqRUrJ6uNYFwAbZCsWEnFnYjzNb4KW8J7iUeS",
  "key16": "3mBFGRQGKAMqqBvPYbDJzTirzgHFubSchfxp58vagzXFoGEbzD68i1SDHAAQxg8oCWXXCMF567X4tEtTTZ4YDVYY",
  "key17": "5jegW1gLDWCH6DforLqDNQ2dz5JLbNCZJGzyajgNvQf7RfTdno41AAkhUEMzFvQviKR9cN2hyX4YN69xgZFgNp8K",
  "key18": "7rFAkoe4Q6MqvfokNZ2XfJhtQ8LgRaL7X3z9rTDP5AWNhSMs4Lnvnai98gBstSKCmcaQUz5uiCtRTUtapxJosry",
  "key19": "3t713JaW3nDHzpp1T84y5tVKmkfDG7JLXrLiyzKHHawuCtx1gbFo7y5qTfcwJREp5FT854K9GxR4pJvpjYGW8fYH",
  "key20": "27HFUZ5VZ7cHk2hiGq8RQhfi6bhzYZyZuFmrY61LgMd6NKjALZyA9w5xyTbRW4PqdW5qAi1JVXYzCDGgT2LehTr2",
  "key21": "58Ht9pJefBfjWu9FpsLCQE1xX5LgQXiJmtgDbhjM5GB6bMDXx379VWP585y8u2akbF8Ucy9tZiczfvPker473Caz",
  "key22": "4a2xzWhw72Xotq6S4WBfXgWC2J7XqcAZ5hBk8i5mfMvwWCKNmYwFWSGLNzkrYEKocxoBp2VQkeXsU1J4ZCm23Q2x",
  "key23": "QSYJR8ZCnPoEMDEToUCBDd3HdRFv3diWw7uCkvhEHuYcz63QrcbtV57rEHRyw1zTTBQKuDA1GBepNCb7etyAma1",
  "key24": "3DJ3nLwLAbQ1tvDhKxf3tpqXc43161R7LyfTBfzsHNdNpY13dHbKt78sfJUn8EXrEsWBBFn4E8GYNSwHbQcnWmvn",
  "key25": "5isp9havCr9rCSpTdqVJ1z3ugU4gH78LGYTSbVx5p9MqKjteuSh4dZ9V2mdHhFv3Sr6uc6Gv1w4DYjvW1qynvqJ9",
  "key26": "374ZhmDh5khfTfBjn9SYT6ufzXQwynmdCfE8SpFg5EUFd5ZViQCnPsfvzmcBvzjZSZzf4eXSqyUPgF9kNM4LhJbu"
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

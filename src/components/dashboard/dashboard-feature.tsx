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
    "YbamCnGdbxuduMFYNmRp1BtupCq23SD76m9kgBFAemG1NoFF4W5fXpqsLnZVaJTd8Guzyrtn8svko9A1ZdjrYyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7ZXYYJVX7BVL4nHdxL4wpdDzQR4AnvnjebfiJb3BxrCzLYAW6wNgAzgFat1wJVi1u6r35kNumrA4HDrBnZsUkM",
  "key1": "5uXr8xfkj3qdYzbRqzYDNoS7qcf21ezn55UgEeapjJUGLbLmPCBkjnod4YWDENaNp5nykXNaokX9pKxudLvFrXB",
  "key2": "3MaB8Kd942nikCN63nGKh1jhMAWtG9gfq7SyQ4fQWX3DJcM3Lk5LY7H95X5U9nrhB9ijkAG8E5iAmWvM6Mc24289",
  "key3": "rawgvzTwbDTxkB9Vk4uvMt49CuL6HmQDKak12PYT5hYoCgSgK7Pf7Bdrommx2CWAxBq4BCCdQ9TdtwuTwiVrNfK",
  "key4": "3WR3WYHmjFfbnjjuocvDvvCgkEpVLGUnnpcZTRUPap2bpeFWEaxbmmzRow6SD7gCBkuPVfLDvpo4W454ta184QKt",
  "key5": "2agnvDVWNXq8MRgEJwMvJKdjJRFz612erm3DcNcKSuh1FjHKx8jGQAx7xgiyon44yX1YcmW3VZhiTMoJJy5U4iSG",
  "key6": "5WKUQkBgL7RQAwzU2VKmRJAjejiAZCyMRdZGRiPDuw3o6Usy2CqV4xDFVxxxMhPSq4SNG8bGNUCS59zrrzeenMVe",
  "key7": "3HZWHTPnpL9UCEde5UgpN4sY3Bq3FfoV5dumVKFdWUmp581d9LmtTZj3Qd17TrEE1ByWcbyToa8PFG9BZiATmA3M",
  "key8": "2cD7AGUm8XyFm8mdKeCFPUJJq1AsNiiX4tqdJFx9wZDY8LDhRSbmwKYyz97SadQWSGh8qwRqLAaGzXjXK38QYyWN",
  "key9": "5AZR8my68dEgKsWjtuXpQxFbMDn5zVkhTaQrXutXg9Zb2Q8pDrB2VBStnxprF9hVFYUFApC56GKZ2NzFq36xKJif",
  "key10": "2rzM12vwDH8LhqNR3zK6jJ4HovXqeGwQvXLJQwqDZ34XTuvnW9TJ23J72KYRqxn7ZapTahmKYMqZDp6ZiAaxQb4q",
  "key11": "4LHZonkuCrDMkVqKzvRfrb5EP8iSZ84qfo7swLoX5vyZ8HQZTVWDxWui3dj22ysHK4Bye7E4qT5tysBPhzZdETD4",
  "key12": "2BqYciZqGAdMaWPjz4m3iBadjCU7NkfFWVMdTCzyMfX5dYM7CWEJKMMw5LnVDgCgXb2CLW5DiUjZspiwJfaergsu",
  "key13": "QW2QiubnXLBXMRRqtfowLC49QXS3BfrX1DChevhUceDqHn9bA5sX1LazDtL5ZRNWNVodJ6zrVEmEaysir1Nx3Mj",
  "key14": "3xAZQYhQTj8SDPN6Z3b93tHT5Mv6W5UAmUrT8jdyoc9uSXPuuPw1SSHcd1wMVbGNU1FfDjuMzzer6yQM79y2RQG5",
  "key15": "5UNxLbwhMReuTUqr1NKWRM9boxU8B9BfFvmoAXTEButZYVfMxWKH6T7dUgbhVDRwDoxaSpH4wAethu5t1HC96erh",
  "key16": "4Vn7QwqBtmjqqF31HDMnHggoWCrDPmZmtoikbKukQ5QD2MmidWwtFiDq7DkGKHxwyEde8ZquFgijZtJK6CzkD6yj",
  "key17": "znVVNbbnFasENBsA9H3VDJ2LosvfrEvm7tApvpoQ66bVVsLRwSpQeWtYMF4iMkuVzAYCZ4aKp1JspDj9amu2ir2",
  "key18": "5S9uMTbVyEsuMePjbXaaXGu4JC5STM2fgp7iXptA6Lcn2DWj9dfJMKmXfwGnBBju9kG1rsd8AENkk1gBc6BaxTM6",
  "key19": "4nuKxHWLJw6iXYLdZ7JK8EurxtHNNVhJrnEYSuFyXSysFDtdvyZuKBYiLid1sS1K5YXuzw3dWcbsN5G1RSEXLfig",
  "key20": "3XnZMQZiBrG3bPDtvQLTxH3BbuRuTGGvZ2BAQ7yk2nySeMmijhEwvh7jNVsRgDGPjavkKLhAryByEkBi9X7JjgQt",
  "key21": "3rm6fCZcW6K4F9Azi66Wg2FaW4ahFWFYRrnZ12C6WGVVk4QxZmr2GQ8Vig6rNC8WDcXYKzyJqFB4DM2n6wCFTFpr",
  "key22": "3zc1D8e8tf8PbvRwhhB5ds3aCtusmahMvZtuUzCvPmV9kRks19vq6jVJLPRH993J26NQ2rrKV3tN6KxYP3mSiZ7o",
  "key23": "4x9dS4HREZMPje6HLh1ZRW6Qk2vpEggcJjbtmMk2QpPv52ce185ynAjJev43et1QptXtsuLeszo2HYuFwCxwsiA4",
  "key24": "4UBX5QYFjQFZPutUwZ9SaxRdg3oabp8W9EvH6fzAMJz1EL3J6yPAZAx3wkQdQv7284t89juuNGNH3EzdcxV6UQ3y",
  "key25": "4g24BZxfbcrrmBg9EQbvDgWHeLU2RUGkZSxiT6kgEwk9xuz2xjqTDuQN5ZcfSjvNwVZj7ewBXJVFfgNBsSRN2H8j",
  "key26": "3yBqKZPCdv5yPJHJmAz5Dr8RJkGs4wPXXvpJo2wRXPrcUEPGrEsbbjrpLaT1ptCXDLyVdEPj9aD7kUhGhokQgHxb",
  "key27": "mTVT9jn6vesFuEAYFW1sYWPG8gKn6guZFvb5fCjQREFkwz1hpZSXYpVS7FYJZuKNLyAjPL2MH5g7HU5JAWTLfVZ",
  "key28": "58DbakLLrRNKTCUdKLkWfgbGEC15wva16BrLFLzprnvfvrN4tR5sHos3vq5QJWRtL9zv4iJoNyeWtCJxHdefteYC"
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

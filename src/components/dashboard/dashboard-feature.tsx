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
    "5MZpWHnnGq1zToq7yjBNXqodg7kdxYq7uGrTqce59Yfv2T7B5HL2DERWXUv7JHmR8zAuqbXYLtrNfBrdJUW6RAms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnadbebGeAR9EkjgtJJzjXeszhcG3YwL7rdrf7Y6gccyZnKsqM3PY2n1ZFqeDLJvtWhxvP4ZWspinLVVyThtNXb",
  "key1": "5rofTSbrRwpHRbEJo9wn44FpEmx3YXbCj51R9L8duhUWwsC3XBAmWNeTSTqA78GJVm41K5XpkrMmj5AchyatJybJ",
  "key2": "2BkJdtGQ9sRNPKhjKyxWYDW9u4QBDK1Z5TxzZCE2xyPnSgE7or2WRS6pMEyNzEws9JDf2ZZNz12Jp58oNAyvHtx8",
  "key3": "2xBVs6cetRj5btVwbaeGkejEfaoPkJKv5ELcxfVd8PM5aCfbeg19XujbHC7cFKp4ybuDe5LKAsPKQ61GH1ke1MDB",
  "key4": "37g1bcZmbdp5dYrPAHjF2AE6TZ7JwvFmyeKjRiLmzJkC5abvBdxXFq1qkqs8NrrJUH7xKchWhxiXKBwzHUr6Fbin",
  "key5": "4fRmo6uAijMc65jqD3GjjdTmvmkUsLczFXh7qNeUEyUgSoztoJjd1hAGrUds4xWxUbrRbeHG6QGWjgB9Bp6q9Vt8",
  "key6": "22Qq61PRfzuss2zc755kmRKi8dFJeH23BZCuzdEbzw9Ytu4Tv5fY9HnYd7pyF7E3Wk6x25FPT6ny8x3aYQPsM8JD",
  "key7": "2726zQdvA77K5gpX5GmBnDdAuqqy2epp3yUeHCrr5M8CGMBn9MsXHricFUxjCwwC7uNMj93jNaKsFMqD39JkwdB8",
  "key8": "2qHhx94gmTG1NQ3Cd6TVjHm2LZuioGn7BEA1bU19YhxE5LYYc5vqpGHybkYQwSuqAM65Akq4NtWohfvs7xiXhi4C",
  "key9": "5LKpuCC2oE3xrcr1iVn63W1QwfW2RtRBNj3qnHZf4k4cA3xPpMosBVByomX2tPWrikUzPvixGxE3SdDviswe48b2",
  "key10": "mZGPG7y6yPpuGxvmu853QsJEw6GCj4jwRiQYqzRgc2yCyGHfTfcGce4wKJkqVYFvQbm3Adk7fWuQvxKFmar7gxd",
  "key11": "5iqankqGgcCeJWm4gewrX6Pr4Zkafdt3sjPqiuJXLJwdDMz4teatmzsjWwjymqSXVnW8FzXbfwXEoyZem2r4uo7r",
  "key12": "4VQAgQV9kjXe4eBqA59p3NpM78ueqBDCtY4N7CcbN93zCcqYvEYYTgujsN5iDfaHSfmqcu66sZLTS52S6Jn3hLBA",
  "key13": "43iMZHvLGQQXfEhwXi3jSRDZJM7T8c7UpW8aTxCEFwG9YZYjYaZ5eTUHC5ARZuKMscHhTciTFkmkRnnRvpyHqiPD",
  "key14": "42cXMyANutug6RVGXgS6gaPWS7tA1cS4jWjPwCnQCPsYp9gGCr9Xks6pMVJZEQi1Qp8oNoVWwPdteNKcB8BNUbw7",
  "key15": "ZxtoAJCxw8xs9vBv432MSM2q9bNpzS4ppc1wJgkNj6NC46kFJEC4LdtimbnD3kxejLDEVBBKEjQL5Tq2puXHaqe",
  "key16": "Q8gAZynu7HNjcy4j3Vn67YpdNNLwJe2jHHAjW1AcajratfH8YMR1y66BjYoC74dmrnxpPTq9F55F3DxPTVD82KW",
  "key17": "4JprBDZp7QHMybmyMgZ3AZiXnQGy9XQ6VAaxtnmvZEdQqdjzSoPVr38EiMCrh5PyT9CxZ1kPppTF6EViG9PBnmLP",
  "key18": "qypYeTdSrbKKhWS22RCmU4nKwqhhaQkVshpjhxRC8PLCTrovCS2ioePg84c98mrJf8W9dXadvRX38cCiCRuQnEd",
  "key19": "3e3Y8iCCnW6Jr2JAVKioiDU6JRshvc7wotRhyKmq6jggC7TDQzVBWKgzKFc8MagMSmCBcBpA7WMJowMZNToNEMEE",
  "key20": "26PfkSJYacAvd733Z75GsD488nBoQHGswso6bhW8RKV7K6KFsXJPWQTWaEvY6AmsVDYjRUgfqL7aFLamwwj7mzzH",
  "key21": "2G7W5SMwrt4EuoL6NQ8EdkQJgiDevjpk6c1fQXNA7WPoJcTBYkXf6xBJBx6zPK6LyMNBXttqoJ17ALkNK2wwxtD9",
  "key22": "nYApJ68hnXQaLitE93rjpbJp8WHJUNti7djhrgbYfFB75nMFaVCXdMGEW5EcEFXZEpL93C6nC1pHbskQedVf9Ua",
  "key23": "5EbuXh9My4vXH4A2cZPB6fyqJSjQazziskPMYQiUS59a5RqVAAi9YvcSpo2YT52AaSrm6UBLgSda3UKjsJpMo2DM",
  "key24": "3rAPFCrvP1938t6vCbS4HTHxg59daaaBKMx1BM5ahQwCdkrcpWkQPd8tuzXtpxMjUaDBuB9iKwoNv1hiaGNSU7Qk",
  "key25": "yNSDMwZngjZMjtxRBZKV7YuCtfGRWuuU7UTnw5EQWk8unJKduLBasYsJ8SMwLRJK7Nmz52Tq3BdX2MB1BiGgu3m",
  "key26": "28EfRppPbzqTizEcmc2V8FtiWZo4SpgehdNdkJxLgDRHDWAV8MXG6K4SfP6zo2obPKVQoJ8oHRuMxy3WntNcbZ1a",
  "key27": "3ENJsxt5C6PRiJx9SsW9ecFrnbvseygCgohpsSiFbCXiV24SxSGgjSo86Xuhp44WgPU3masWLuZhASWnnB7hrBC7",
  "key28": "2HU7nu1UPxKiH7nwqW6yjQ7RYHx3BB8R9YbY5uK6UT2ysPNfd8qkoCAXcGxzv1u68drv8sL8qBdLH7TGaEpR2CFr",
  "key29": "2KjDC4gQFFcnENDQT6hd7bAQp4Xjz7Leqr7Nej1sEAEe2awzPjBNUaearxJcrjREaaEUbQTKPD4W1pKJPjbSJWZ2",
  "key30": "jDdF9Z5CCpPKW8KS1gR7EAqYStHtT6SMpV4X4Wy1NsB4pUQJRsHFKPMCLyj64U4U4UbpPw1KVUT8eZsRnoQUUX5"
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

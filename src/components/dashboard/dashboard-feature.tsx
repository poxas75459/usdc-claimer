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
    "2u9CTpqs7YF4cUN9NWBKyMs8qyTgfLgCsgGT4HbntwDSiDJ4T2yJidRYFmiqPK6ZoDKeuKvbKqvzpENBjT8QrRZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQh1NzJEiA7KdiG33NsCHNKxovProgyBNPu1LXxfYuSSFCSq7DBpTgFTzyeuk8QNpbwS4NNYqJKJZcpxdo3Z1Ex",
  "key1": "2kdaCi7y8SQ28tJX8jALmHf5ZZjF3HTcNBhyLLfTS25QB6N2jmkSU4eYbziifx4hLJhwJnvePYFM1CXwTp3Dzcko",
  "key2": "4GVPvUnFLkNCXEG73JPy2yQEUQ8yrA7cDXHYnpwppWZqomaKXDS9NNga5augAvDFPGjagWYaVsV6odcc5ETdgA3X",
  "key3": "2gF9s5mn2vcq16ienZgbk8foEhAe3K1GZwySVwnSTZpST77ftUjWv3sKJ3sADUmzaJ7VqpZ4jwaQd1YZkXSKL6ZA",
  "key4": "2Tj2bVNTcSLfAA7qWoKc8QXSzhnQuufDcXT6rP53nsd2Z3KGfVJ26cjKsc322zx5VasmoY6bVvDuwRiNTMePk9AN",
  "key5": "4vapfKooLjqgB5zJkqcx3p7cjL4X4L843Ay5LBirV5iR9LCpDaGQ1rc1f2RyEN992LF6b5AqLEAURvRwyZKDWdAz",
  "key6": "2usgEGge5bfXTxNSZ8uQ8xWL1nLFYBcWiuGceWmyB6bnjUhwVtNMcBn5m1Ch9TnTfehYVdUrAo7rDUHwx9Lufq7b",
  "key7": "5TBnUU3Tvrqf7eDoM9yZELnBnWmHZYhWLJ9roTiRdWsxigMaLwquKY3f7UpEWZ9fSEFdofJgqMkHo1cVSM6pF59X",
  "key8": "2Cs9b6sAU5ArBSAQonYaC7mrPD7FTVxuyttWPhx4CsShtxCa5KgAqQ3jSgKnSCBMsEJEu61Nww5PFSxmKcYUeAXK",
  "key9": "4FWsyeyvZMPXerTyoxJJYzvZip46QuusikBqMquE5Pp23aS6MSaZBjWgP1uwiBhiqA5S6amZbsDB5i1UTQuDv2UD",
  "key10": "4WTH5mMrH1YidyqHppwqnrV9K6kdcLLMJYw7CpozDsX4YJnjNtn132trNUdw8DKv3K9yuzRe1Q4AYJguMnS31uG6",
  "key11": "4fu1hxdJWM8ijofyZzwCnBvfWKQa3sK1iXEsMLNK22qkiPmpAhQbB4SJ6FqqKPgToc17tSxLHzQHJ7xHLBJqFxrN",
  "key12": "3Da3qiheKw551ieEeaoKC96X3h3WbQ1JS5DCMwbaMDxzcTPVQVWYVisrYH3H4rVCkqL4vy1JxWy4XJfPKxeisv24",
  "key13": "35AyuQWuEBqeTBZKPPmWHySaHUmP5uy7mnxptocsfF8zzD2KejRwuBax1gTQcLAo516Xa2sX1Pxvv9b7dCbv95Cg",
  "key14": "SK5KuxW1gtYB9JU1Th3WQEfH4uf8LNxeoxMR8CRQtij3YDm4HVedjJSSCMeSYXmkCfE7THGsesktCg76hAm4Z9H",
  "key15": "2hiPbVkDks4fRfGCn3wh9N4MXEoYUPxuUJptmNJY9v6tDydcpgV98r7Xx7Y3QYWRLLtXazYCuuuYxCdP5J4t1BTW",
  "key16": "5n1E5RFvUXyMwtHBry75BhV6i8249CRpWnhv8fqqCZMDPzHAVGAfNnqsCBdz8m4RGCWjHc2Fjj8Mj6ofehCCsJ6T",
  "key17": "LGhWcPv1oDX2SmSLPhEpYESwe8cqAknRPG2Xv9YCRWkQe6wBkkbotbu8NBi5Pf6KZsa6YK36QGa9s4nB6PWwnVM",
  "key18": "5BfEXA7385TEwjzbrXRU5cxS3E2hUPiYARmqAn7gHWeTDDrRNGonDW4277aycgahzc4nPqtoVWYDQEqrwbEozwdS",
  "key19": "5TNmzjy5W5JJHe8WKqyMc5f4fKH3XcScByfygwaJ9rJrtwaeDL14qAg9hueVRub3XmNoZvRmqFZ5rg2gQEcrEpaB",
  "key20": "8Qo8wDLQ5fiF6JTLqWcKZxcczQP58yhqLqcDAbQXSNNqxAcqo7kFa3t4qDRw1EA6DTEhJnMnu8AcbQmR3EVmZb5",
  "key21": "3WRK61jJw6vjLDtn3pd88BSPhtrXJYLkHm61Fa3V4kDsf9bLQqFnCwkQbxqfS4WfdCXXF8RzDtB7CJscLEpcLrSj",
  "key22": "36DMnj6pbqzNdJSpVfQc88SJ11zN35p3EnQDDRr2EjuywvXWimq8AZH1p4Xdww6sY8Ua2z8sHeyqksLMrZvWDXoa",
  "key23": "3QD872niKhrNKY9gZKdeBZoELvuJjWi9WY5WdrDU8Xp2e5QRgX5W7dVByYXkrGUiW2nTTPJCTUcQBab8PU9ccBYg",
  "key24": "2NzABdkvF7JCV2GNhr4pTK8QA8a39R9zW62R838vK6PhvVQGGD5arGZHkwCtcDGzPrPAocA5yszNbyT9R5rDrXfg",
  "key25": "5nhz85u9R7giYzC6ffUnkwGZnr2AYNUxaDz3cJfUx145NaMi26syjgithQB7bw49ektLFcUinL5s8HuAcVLBXP8V",
  "key26": "iMSCudd11MCntcKzMz4DuMFAgYozxUyorBnikSATBZZHydu367qob1GX2qjcoDpi4sjPLM7hsmjq7LzTLd9QrhV"
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

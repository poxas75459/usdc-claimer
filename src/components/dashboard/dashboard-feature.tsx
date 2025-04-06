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
    "2djnE6scNWAs5t9vFdgmJ4AnaaGd62JnnMd2YQCiUk9SNBsPdZ2tJe54cSzSU7RUiuHwZUpZyRZ6iaxCM2XRUgzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5emnZcG4U5vv3a5SN5oHHNwYHxCAAeaWoqcBpW1tbgFQW1o6pVocouQMFZVh48h9MXHvdMiLb13mECNEkqnvbe",
  "key1": "59C6qyX8dELY6ZCe9FA1oVVruPMMLZkuDQCDn96vV57XY2sAzHcBLyT88dAW8QmxDLZfdq3Hu31Jh9qkfvnUQU1W",
  "key2": "JhbBaptBy4DirthVqwJ5kAjvbwhcYT6xibjeSaEZ54efJJcCFALdqkCyH6qaBR1T1X2d5rcYPaTsXVKLGcAwNNE",
  "key3": "rZEkewRvm9SYuBhYvfx96S9TWWSfuRgU3Dv7iCWU82oM7yKn44qF1A32wJx4JUVUJStMH6SgG5Bnh5or13L4oHj",
  "key4": "638cfrBsaCFhR2sUe8GrVjc8hvv9mJYzfDjVFGXDzBvGdVfFVYBkiggBNmZcdYFAtq1Pq53qxjUEfa1JMJ2cc6bQ",
  "key5": "2Pr5DyMF9KSr5xXQU4xshxj5G1eCL9p9QwWwE3M7KPcriqbFGMtthusKwyfbr1zgTZL6Ecc8iFDS5ZzVQwQDESKJ",
  "key6": "55D7UbQ6j5jRXomKUxwfF3YNCRKEYCMXg3AWg2xvNdS824YnBV4niEySPS9v6J5RmSUuadEP7GuQuvcv1Pn4cu3y",
  "key7": "43pDCWyRE9ZXRkLR4AweT7YPqrVjwXvYeRYivW5KJZVQvph7HQ2MoxPQrb9TFqwuGARPGgKBfjwxjWaPW5xMQBpA",
  "key8": "2cVUq2pq392wg3emLzoFg3XhMyyaUi5ovLNtVKir9RJ9m47m7t3Sz7N8tzwzV4shorc7hxpES16rTKpGPuPcMdQt",
  "key9": "2AnCwoUkDT7Dof2rxYixV7xMyuTpCgkmUsqHJQnGuFEfHfZtUi4BhLdSHZb3V9Z2dnHZCw1P2U2A8rAD8TLoa56C",
  "key10": "4PniyREe6N9pr5YKMqSG4X5o8S1vgCYz8CbQY2TxYynNZJqc9aFQztSyJKVmMjXeBBWRg2YDsqGyb8oqX8PzzGXx",
  "key11": "3YdN6ZjvaGZLPYw14WMWfmkiUnjSGNMZBSLRNhr5xSQZx2nPb1mNDM1gpKgSEMsZNJPn2dLkDRERTEPqZTVnphXi",
  "key12": "45xeyiGK1Jcv9s7AYhp2M91gdAQFkFJDs8DcGaT9omaPipK7dQrKkX13oTVr8Xzhx3NucbtFe3Uoi3H9QjcSZ33U",
  "key13": "3rJjSWt2DBLhRwyhCmcH6K1Tugx7ZmJgGGnnPvvScPZdiZQcAaiiuu4VPj3rr5a3Bm8hZsG5SpMGA1JaC81cRAvB",
  "key14": "4MHrWk3GFZJPyu6qFvDmtRYp9Re6FSbMjYK1BJ7nmwuxVHrG7x4L68fjE3o2nEDktNDQxmmBiFevZi7kErgDMzc",
  "key15": "3E1BnXRjPdSbJ6cvM2DnEG7WgXeHvkDNHvMHQXUJUccBCVhHmb1n9ZXTf9CjpANN1KVxTKSCmY3CeqvsPkfHrdXk",
  "key16": "48J72PC7HwUaxsqZk3zAEvJzoaV6hhgojgRF3CKc3ZbGEd4bzUJ2eR7Pcuj3jm6d3tqHf4K8c1ksLqGHVxRjWjJD",
  "key17": "29ibWys6Wrm3ys2ecvUqr3na6GSnGnBM4P6UFzo6wz6tpQGTcY4oe3i6PnKhhT5QW46M43ZxRC58sZGhFVdjecmn",
  "key18": "2T59YqiBwssUrL2Z1Xxt8yb9nbj4mbw2GxSXDCrCQRSfL6Gtut7hb8f2r8DWdZbG8yjMp1UmgrPT6PPpcfuUD7Wj",
  "key19": "4M9mbzVFMr3LKGJEzBHZRVrhHGho1Ji3X65GbFXjdm9czHTRc3akdCnh9HeWLuEwMn2rvmf4ygdoPDU4mRrJdsiQ",
  "key20": "4DLARrEP7Wt6Ywz7yxoPydT5jNbEE7HzxQ5PwpRETVknFqbjTBf5p6kmovifZtNaQ1qUEAsGDE832ACgctXjBXb4",
  "key21": "4W91FRLBptXRcHg5g7Qp9dTqhgVRfDE9GYkpMFjjfg4TQc9j42DgkpxN2BT81btMgMJpQn4VzEyof4KpKbJ22evT",
  "key22": "L5aZctCJcMgVfLeM5UncVbk1fzqQd3iHo4WhrDQLGZbBgczAH1K7jQVau8YviTkFJ3YTX1S1dM3KUUX4T6r9VUZ",
  "key23": "2XRJpFSYs6cioJiY2dJ5EwXYBUUcvoaCggaMk1MTgD3bdzm16e3rZTuKbLqtnGppWEogPwezLDrAqE1q8Kh6pk6K",
  "key24": "4LQis9wY2fosHJQAM2hXvTYfVnp9TLKL87f87BcssbsxG46o3bfLbvoLQ33tRPeMrYpVRCJ8gkbNPL226q8hVogB",
  "key25": "39eBDW9Vyvfry6QdSsup9U9VQTfvJVAH8SArGAKgKLuXF2LGCS9VH8bVBG8MmRG2vKkX54t57gfgfHPXVTWkEkPZ",
  "key26": "qBdZksbz3mZvFRE97xEWufM2LkAjdoYezUAYrJjsEcF4eeZhSYtgitrR3JhWxEdYhAuLSEESWnfuqGPt9pjutET",
  "key27": "2ukVXtDV4YfvkQetNf9DvjHSHiHqMmKrSfKCmwa7bTFYkfzPgwp2v95MmZSUQRF3K7Wg2VwTgeWP5vkdrcRHgadG",
  "key28": "321Dz2kzBB9aJ9nRux1mUCUX9WFBdfPdrnfnmPBw3TCMQqyCxhTzh3RfWV5LgJnnkuqRhMysir3AbpsuWYT24qa8"
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

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
    "58tzTvZfwxALsScYT2Gc9XgCUPUHuh6sp7V8uYjWnu5RrxnrUh1rnfKe4vJeDXpnL2fArfsNGSojri5hQBPQrnzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXoniMR9cDBG2HkjsPxQTC2kCnRxkg3pjPeFTgcPAvY7iEchfhJKDt1C6iLoyoRii13LGcwBA4gQ4gXWapvo2fn",
  "key1": "3vDqBxq5MaN781wECSmV5vPcZ8ih3EeEF7CG8Xno8fjEyuzYpqpSM3yFvGwMyM5xN925a7opXWqdvHjmqWt5S44u",
  "key2": "2NkmYBi5JManjALwRVmTGTnr4uJ7d3pm1D9SULtxxp4T3XbqGMXAgy945xbvfaEm128FS1rebHBJAvLWfpyU4cCX",
  "key3": "5XmxTpjaedz8ghUdWgWQht8znWv49ATKkYXC6JEVBHqoQbWVaEmN7CEVFuK8RiRiBXkf1GwfwkEfJVaF5ug2u1HX",
  "key4": "534755YQgPXV6YZxtiAiWUeu26JC6f4PynRtzNoFguX4LSrayfNbRusTrXWfK7MXHfeyoWDLZy4eCjkHZzJQtxjE",
  "key5": "5Nt6oTY614gh7uJjo8NwDPRUDTmu2AtpDxSHQBo4Wrd2mddYY8d1XksTQj6rk3ijGns5aq9qTu25HCJz4UmjyrZY",
  "key6": "46zHMEgnhRvBqXND7kEJSpJBtLAw8tZ8dopYr7wKTfcsooUJ9GKaN4rRMLuimKRpCpyuVRjrWmPxnQP9JMC24auG",
  "key7": "2Ba3f8fqJvN2asTDsAGwree4DLJJjkAaWiJcph58C8BMqsbTNeG36hmuX84mgskWooxEzju6VWMKBaqEPMUmteKs",
  "key8": "CirjLYWUYffdieogrmxhyYevVXBfaG2k3RwfQuMperJ7hffeeXp6Zb6dhVuQGnJjVXp9Ryvgq9i9FwANbQ2gtQd",
  "key9": "3nBar4T1vxUyPqBwAQL8r8m8z4Mx1tmgH6vJiBFMzbVHCVcPPLxJc1k4uHe1nQXm3N3nqGKDNhjBkrLiDcTFFPMj",
  "key10": "2iGEfUob6hwbgNqLBUxja162jkKq3fxKxcndnBSHbqiHNmfDZ7Be1wek7cjK4eCNTdHXv72vFW5741QP65KHtQ7K",
  "key11": "4pEUozj9Tr73BNkmUy4YwW9Dg58rjGxDLUhWKg6YvLxSHuWBq5eXzTWypxv9agZkPT6itXVbJm1GqCWnB14K1hzo",
  "key12": "3EjrRzPeRTd5CuLfKx4kAGrLAFvLT1x8VKmRhVpVpLDFCaDcWu1RpSKqSTrVbWGdCSftGkuDKKm5aNGxDjsqHySD",
  "key13": "4xebsVTg31GvXS1tva3scCefsXghcWSFUrr82nGoUzckQ2itn4brnbz2gfKfA1E7Pn9huV2JpU4cAT1irw2adWCc",
  "key14": "3knjQpuEzar7KsoBZAFHeYtymng1VfaV3Gv3EsZpxbYL5sMG6mwSsGDHtC42j1B4oKuHk1VYNYqAYD9fhCSCkMiw",
  "key15": "4xid6gqWW6vAZYg3MxR4vBx7FyS63HqATFqDDh7GUjkCYzz54x4evxs15v4Lgscb8FvQaCP958VEyJAfF1dvDGL5",
  "key16": "2A7u7LrcyjSWB6EsMZS6fdS9s5ZXYyYRah5b64YXUjGospkypi9PXipyxPHwvRf7TiDU5ijFzfJnrA11qMQSjnhy",
  "key17": "5qZw3Rhxag6cg9Gt2c2T7EV79o3Qz7YiAd9iiySNYPvUXgF3gvXJzfJo5wXye1tpjeJznMayysK6RgWxcDTBM7BM",
  "key18": "22gxGF5AkzHeGBCAbtQGCrz99uKXqYmQtjcJWiu8BFynuTurR3XmhtqyHcXHo872cP1Xj1NhP6b75UWkfrSbg3j9",
  "key19": "4Q2DULrU4auS37GdQYf6NDcBeZFdWmiuq2GgTMLcRLacPKaSSa5nci6iN2EenxugsVYymCnJ8tPSgXsn6RDLDBt7",
  "key20": "2CorvViG9CqFegFKq95NRCVcDJB4JSySnEHuXLoTMbd4d9SfQXkSwvTJaJwGnZ3ScudKCXqh4KXUBgsQB4or226Y",
  "key21": "5s2TrsJrcrULuAwnxnUVfAfmpSrxyZwDZa7DTw62HBGMi4BzMDrqT1tp4ci8bs4j3sRwr5wnaSWasuhfKPsMg1sV",
  "key22": "4Wb8QnfSeNeModWro4uZxmCiZ15sP4bEq3EuDnmpaQkE8Rqgs5WuC4WvJ6ovDqhhtEYbr1WpJ259yDhPYbb4tv5H",
  "key23": "2AsdkE8KtdSwRMfVmBHSiK6r1KJ4RzV6uUS5wx7ASCjiLMj5zqHq4LjMnS3vqQRo3GBQZGL2cJMaNqFUpW1kjFQe",
  "key24": "47p9h2DEwWkzhZuKrun9gEZeBr1e9pKZQgrwEaz2RFDScAvVfTxfqBECZpsvP4ZnLQZD3MGk1DvCnhRqFScJmcA",
  "key25": "3Ck73bYRkH2aMQmr7hBncETBVVUT9mHj4bR3174QtHYtvLsgfrggNxko5tqdQv7hacwuaxcHa88t7CVFLC32AkDu",
  "key26": "3NxVszxZLYkoqqsNYrYzyHvbrDNfynsmfiqHYSMhyyrkkKg3CXDutp1cQabax2ncXySuEVPQVVDiQEvWtV7uMyAQ",
  "key27": "4czNKdjSk5YsB2cYiNpQUw85FZDCybSP7awMaZkMEuUCFZQVKtLMYb6ywmZXVfYYgsVNgMZ3iF3y3VqNaHiQ1V38",
  "key28": "2pFBb9K3s5ag9tfSnxryTi95Mrg5Zdi89MNuQDfp5YdMDLo5o3fCXH3Ame3LAnq5ugmK95LjwCNuaeQi9LgpMpAS",
  "key29": "4dJJyPeooa7s5ocvPv2PZyBwhpNUibgefyDugDSQDuPorWy9SnVhxLAaTaFhVN7Hak7rCf2utNq7ckRRsm9ugPpQ",
  "key30": "yhSpeH4xZtaVXNuzqTtT4gnB6mhrLGChFCEY7mkDg1zLSSyDg4QGkhjnoQBeSfhftDgQtREnaqN5d4tufNyF1hm"
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

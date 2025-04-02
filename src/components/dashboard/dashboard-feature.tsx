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
    "HNz6gDjC5TNiHo8txsk9me2fpfB2Z6Yik8sVNeN6zC8FwpjYZknX7M1nzx7RbADmiGowpJQ2qgVxfjdMrQq7znN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcVK7UX9vZ9BrUHWRbFAgKwcYtsatLNwotoeoJXk2LszJ7UCYWBf2ycxKkCcWq5KLUB74VdC4Krzv9w2fdAFPG6",
  "key1": "4A8Dk5QDgdukhizyyyBs5htr8PQVE9z1ZYknu7AeAhs25gXHHZSgjuKxzuVbeXYGjFkaJTox4u8Q2cNEAncATvao",
  "key2": "5iaYDABC8yiKzWnEQLU5PWyzN57ph3PirSyAgcDLSiYWhc2UNV2YHyaxpCZ4Nf2xJq1bjNRoCbBwA9fnH3A7tLUu",
  "key3": "4D6AyY9a82QWyMkS4cQzmcMrQzDYoXbNTmmtP6jELGv4SecMxcS4q4Cs1oRybbo2jDh7AnaETF1yzxcRXGA3L1De",
  "key4": "65AhnAXNmMNbUATHVCBMAkmiGBHqnPZmTgqsfUn6wkHMUU4CCAn9cM6xLpBZny94VShWY7vySxgqqLsKfrrwovjX",
  "key5": "31urBvN9E8ntPRJ7a3Me4VvXi9V7ebkBSGtYSMYyz5khdgrxsYLty26TXKnsovB87MqhJvtZGMLPQvfzhMk3tzxZ",
  "key6": "5KuuEzquPDYCfk5a575RNK4wpaJBmFVDpHTjzrNv4SYcPCB2CJWQsLjbLxXqmAaBrKsAmGjK55u8NFGWLcFijPW2",
  "key7": "2vFZfQX4NpeY39J7QEKbwKWTnQdhk2agzrwLbTqt7fnUbPR4cg6uQd3bA12R3BnU47v1qRMprfdEGz14z4PTMEjz",
  "key8": "2pJvF3puX11sHZTajwSGmHLtbTAnZwcxrAxgiVTyP6k1m3tHmzamSMw625vAn7GVjN4JMctpJnb9sKUfidrbKuTV",
  "key9": "3yr4P71CfXKAYkumH7LgHRi3sxASzoYFZzJzPWCrnqwJ3ZFRkr4ofow7TZgeEd9MypQkfdvXH4fVurVNoLkRGs3g",
  "key10": "49RFttjJc4kzi6hCKUTUYQ4wSTeqHXXCQC2Dymjbbj4tPnotdUtAwd1oV6W38sGK6TUjitnwcG3MbjX5uvU5qgjk",
  "key11": "3CbaCGweU126PXtodfSH3yMT5oRDPvyQcow6oAaGaw7EEw46xgFm36PAauZH23hzdR5MmtmufDSMz9ayASbtFVvf",
  "key12": "ji7efEaMCDMZButqdDd34PDwzLSrmsCi3ZWix4PVi6B1uqXfb9mSLDBn99vz3qFHLb2FGqfVc2bq9cqhoPhBVqr",
  "key13": "npkbDouYDfgtGaKy3tvLrv3L6Kd9A2yz5qWiyukRieBghD25UvwZQAgvEzxqY8BwqtDFJxpDsQevphxixq8wLd4",
  "key14": "2yUeztoLEivgAbTtmJrEjiQLTcwarp2kjjZUVdkVV1ahFQpFvkskUcqmyfhRkettNB5k1YFgZGgQcrkcR6d5o4fS",
  "key15": "5HpoUQwwqkzpGXwNgfRW9RqvwdKLxDvkgKnvptKwAgXw2ppLFXop5kyFuKXidrp9M6Ab33ekcLa7NFY1PAJ2uyJJ",
  "key16": "5Lmw4CvMoCB5j4tpKyp9wBWi2kXhr56HpvQsshspdPTgPQMXAtCCzMNQHW1qypkPKxEe276F7icDhyHBbSCi4aTQ",
  "key17": "5RHfSnmXECSnUw5pJQvZC9V2W19o25z1z7iqu6FcvVGG9ntAqYx6GwHqtYece3e7krpQowCbZAHdfsqN4tBGZqBN",
  "key18": "4m3gzevXZgiSRE46gEUHpksyRPe1Md3LqC837vuPZDkSC8Hb3iihUrN2kxEWHz4ta6m5eSfPWSX36n57zo51jNni",
  "key19": "3wozrWtu5FSNDVzveGK8FAYwQtALWWFrLiSTRuEzFHc2msx13pL6Y8rYqiBUrqLJcT7ASqKuZaqS9torLqtbfPc9",
  "key20": "2eQUDSjzQCoFLgkDidaTMixvKVtQpYQ9c61qK4bssFiiittdxWqjePqrqmMij4D81zik4mCUvMUYjBmGX55BaK9U",
  "key21": "56DFEcxDV8RfE8H75cNSmo9jAEnBJd6FGb3YiZQkFmLQXY15sWZz1J8g4dRQp2Fk6BmZNjLAbv7HPhJUG7ZEBLU1",
  "key22": "3TBcHXLJNLNpSMHM72x7afZ2GJRphvbYCTfEvbRuE1yceoi3zu7ZoBt2cx4LQhAwZitu9Hu2MoVNHMQZQJgbzbxf",
  "key23": "2ZuCCYAEe6oc6zYL86rkGNbcwiy4GM4Pau86kHqCziiwXjrSGZLaoCM6FzaiR8ibzacBZ1EgfgGnRAuZjsFpPoeR",
  "key24": "4CDvqLoaT2RkX1JKQwWkyXHcDFSShasBWLyCqpe7xFPa1J1NxENaJt2dJpSrUBaQpkjxWcjfhrxs4CCWB1ojZBRn",
  "key25": "67dv1pTm9VJBSn4nX1fJEojqAXNMa4e4G6FRyVeZxzZdB8f91ufozmTSmczPsA12keszAr4hCYHcx5r1Uh5VzSm1",
  "key26": "28p3P3LEDmaZKTWTUaQE7QABqvNvxWJ7vVBqeCqu16NfgjiBYM6mQ4DoKpgRUuoKufAtCbVwAxuJTJPQ5jpDwaEr",
  "key27": "4Wp4cuR3JSo2WyE4tL6GSUaC7TAM3nRYnnmtHFbjtHzxBBaC3Qz8ZeriiLxUJtx9Ho8xaqXfSFp7mFJkF326abmE"
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

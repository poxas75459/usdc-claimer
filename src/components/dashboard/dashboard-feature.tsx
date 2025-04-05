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
    "DmLpJ8Q3tG7aP663hyqoU5TKYzDzd1T49mz8bpa9UdXfVaXbRp7aPnQ8WaCWfAq487BcaXfAQgQQuaHoG6hKzFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTje3QvfTzgJEm3uogr1bhT4PvGvVqK4e66zdRX2KqK2GUnHtHgFYjotyEBkeCFvviue1BkAPFwXSZLSwzFDVus",
  "key1": "4vw7hWXewJeaqnCm5hyjxWtzuexX6T44Z41r4h1Gsa22a8GaFCuR8y7xwR4AeV45jsXiQgQZcvdn4c8euWx3mZCW",
  "key2": "67NH3xe7Z1vq8iRwtmVtGeZxurkd4bMed5x23vLKLE81Reqkt5xiPQRXLhgyYu57katko7J4GPjA6f9Y4BaAEMbB",
  "key3": "36bNf6Sz2C36KHkiPBhjjr53pfYrnoCczsBKWUjnDJrHp7pKBFBwd3ZwXWh3SCg5QbfQWyPyFpdrkTY2ExusF2yw",
  "key4": "2wbFDGaK2RY4ih6kD1n71zB6bomwtE24tmCVWkFetoj12nk6wWaTpYjrKocvcuFAyFiMs77QiUDpygpgaSJoJzz6",
  "key5": "2ATPkYsVwDvnumyXkh23ZLZN5nNHcbY4fAs6EX93pJGpZyZKQKvK9jUeHnFBKgjcmFt1YChfsdgmWuUbCMqDuVB6",
  "key6": "2NiKG5nf4JtmUF9h3djYL5avmjz93cezMwd7iHZnceFi7oQf9rVaLHN1iwjetkSnRoA1aMcpt3V4vq7KfRcA3cYJ",
  "key7": "3SZ7FCrVNiKdmBpXCQv3i2rce9kHiuLgmpYN1zFJEUh1YAThVpwx9232bqY2hn656D6HeUq7WvC2hcSkK69WiLPz",
  "key8": "5SZxUjJYfjVHZHVEz5wQ9ifNxUr5vRMYd3qVRc9rW8yuB9DQb2RwJVAqc8LuxYjb6X9ponq2mKdxPiNXNva4TKLc",
  "key9": "2hocd4in7wF6MNY23kYWSoxcb3xyx5hd4hXP3BtdL5QFwQrwrw86zWqwaZSgwpUoDFgSZcN2vUSpFBDK97porjdX",
  "key10": "55L8VwvXpxgKL3GnkngshP9C5k5qYrYXjDxS5HjeiHgCFxjgDcwxxfcj9MmhNkroGnXmMyDbXvWtcERxB8cNwfUB",
  "key11": "3YQj2kuA7f7JKpGvmKg6wr37t76Xzkdcks8GjtM9PyJyU5yuXjPTfGyaN1DR2HHYEF3CMZPX583bt12LdUpXNRiJ",
  "key12": "3BnSM8GTRurZhLaANnj9yQXgRUB9J7Z1YreD2x9ttdLv4ZLg7UnpetGHMFjQkTstVp2zFcjvENjBMjffDECz7jYj",
  "key13": "5Lu1xmeSeRewNqBr4aTNpzaaC2sCCitTD6SNV6SR1dxiC2L67uRTPbNoQZL2K81aybbGdx9eUvAgKnEw6dCTeUsq",
  "key14": "61zfEkndkj5kEYkDx1f48WmcsGm9jtHtCjMNURWVjqDGN6zay3xeXkTe7FfS2bgytwKTAXuFam31eFoUEjTn9f9R",
  "key15": "4xZiS5Tnm5H57ctiwGa9UnE9115eTNqEU9TMHCYFbmKWGEdFVYCGTk79Cj1Nvpip26qhSVAjm4EHL8vrnQpa6NKx",
  "key16": "5tQLjWNeZi44vFm4XvM9jQQCA1kcgERcSEU6LHsR36GEKhRkAP9iwYQ9yN1X2uL4mZoP3CtXghScEvam94jnqm3h",
  "key17": "4gu1Wpvrs6GcdUZrJfEzCmbXiQ86BBWJ15wyawjhpqDQmNDbJBgCF5Q1J3FJMQwEpuTDJ3brwP4rkjMf18K4Cdx9",
  "key18": "2Hq6txFoA68j36din7svPB91FfvCPEXAD1Qh8J2HbGiRxMsNgtSeiwrJnrsHXtP4wt21k4oQb3dQKNTakmvzGEZo",
  "key19": "4KHRsz1QqUJkRcMLYXrNQC3ExUMvUKXv4uDrvtxonNbuh91pNNgyZnN4iorygRbGn83ojLeKgtTqhvAt7uvvjqSK",
  "key20": "5MuAJzP47v5oCN6MbHYjAbLQtAsAFo7LyaYrFUA7EbnipAX8ofPCGCk8qxCeei1RBCqakLTt5gKUUeKk9aavdCay",
  "key21": "47F5jZSoBkRiNBwfyNJMxMjBNKPedor5fbNdf77p89kEKNjDa1n3oB4Je969LWMbPRntiZxCqkNT67sBpzQUda4r",
  "key22": "3zFCLvZGfN4zsYF9iEqDfufAR194E5PgXynkCYyoGVtwPyJdZZcWKKzWawuUHvNg36msefhsXjpWebb1nniJBqzq",
  "key23": "5TfZ6PKApdsXAdhU2B5PFDSqsgzS4jqxSuAHkx4SoHzJ5iM4wKiC69ZyXCdN7KmWiz1Zrv7inYhzEKsjfJP9E5M9",
  "key24": "4MovjBz1H9kGFMs3g35WxMAXUJBJRZjkKsrbP3CRmqThPXH9zHCHQQ12D3knzGJk9HWkcDkT8j5UPYPhWgNrQ2PX",
  "key25": "2BeogJUfsCcGjKGaaK9Pjrk49yzqMq3VLMz2vKL2QMTZ2ckByUbzcr5GZaCWPrJvi8w1tUmL8NLzVfH1QpbKanZW",
  "key26": "5WxgcU8WZx7x2QLVirt3UiqRQ1wUe7VuhEcRWd4F9Uu1VyBgbVULEH7ev4TiW4oY8Fb3FEUJco9yXgBcTRoG4TxY",
  "key27": "5RgmNXmCTe1tnbRenhfEjW1zBFTDvH8FqfK7nGfT3HAkbqMZ9tpP5TJZePvsERkLnotkN7roeyeQuXaEZ3JFMcYX",
  "key28": "5xb8i8kNTfQMEeBj48UaaxbsdUVFTfiWJWerYcv6zQ3NvyfkJvz137kEEyaxLHoHnJUNKbAU2ihTKzK9vUAk3iUS",
  "key29": "253gCKDcCRR9RRxW99P1LskYVxpvAQdvgpKMHsaChgdzYPsn4GD32PQ2tVffoF3Q4M2dJSk1aKZZRbx1fGjFHqky",
  "key30": "56smp6SKDLBts8MeWDonhV6788qMy4qv2nSegzTakGbXrTsBTxMRb8ApHg35fNyUZmSgztZs8oXXiZVrZ7rNuamM",
  "key31": "59aXK9AS1Y4CkDgZ6E47BSqUesGQn5dtZcixRUdRnhDzj7ZsntD6KznH7U1NRbAHX8Hbb4hsYkAyo8eJWhuVXZrP",
  "key32": "5oYPp6ZudkZnq9XuP95qj2oCWrtuAx2Q6Mj9wQdGkB7BV2muKrrWqiRgyvD2opUFxWqqX5Am9G9eep6nfBfkV1Ka"
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

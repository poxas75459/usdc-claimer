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
    "H8kr6Qa6iq9LF9FCbkqerN8HxCvxPbWSdUoYVkPBK1Xc7eUkrHijH7LtKLV7ZNUNVsQhRCjDpG377FbejYCoxda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aRmBf2eqct96h38r3vAgi93hVe1WLTW1KrXJVowSphmdLsUJHtD8fmDWzADZm89mAfL3GhnYMg8h57CnnHSFZC8",
  "key1": "4LVDzkWN8NRibdmX6sqYCXtFCCtV8GWGU32HZ8t6Nx8R81mQzohx4LSkiyBH5oXugxxra6yUY3FPKBxgf7zMPyU9",
  "key2": "naodLNuQWDqdoLD4dSfVp3ybM1Lxkj43ngAhrdFU29jRQJYgkc29zQVHCqj74dugE76DB496t8eqqbCMRu7Rmqv",
  "key3": "2fqyBKoorfEtT72U3cJES8cCaZtfhfHbPPGoMY4yREXZbgK4Z8woLHADpXrtyFfj8Uuq4yy7MaQfCbdytZjx4CVs",
  "key4": "QHDjryWxQeET9b4uNznUXXxb57EjUNSFWCq9SzVffLaMzyPg8UTeZtBPcpn2JuHZ1hg5gAzeZsmC6qqJq8JRkQe",
  "key5": "2VYFUBtc8oXDUKP87Tkv1Z3hApn4xvQDEeBGHhextCu7qeZPRafsMPfagPH3gcS1GiQRtD5BL2sxECLiWRTTPgrh",
  "key6": "5np4eVMXgEg1qio1DfmrXRewURcz2CU9aKSqaPvVGrBM1j8CHYmD8be8DyBiEVviLi1hEZHLtCyC27fCaKECL1bE",
  "key7": "xRrxKKrX23a4nuZ1upEKBvvvxbhKQKRcuuh4qDWFDSPrgveMzABjssWxjS5d5bgdi3XSVEfR8ttpXvnQjWo14Ri",
  "key8": "3WVkmFDyhe9PnFwss5c7WtKoqvxxCvFcPd4wvxppQrsuRoTKhj89bmf9nAkfMXW75fF8gq3YiR9CqnH3PqLbGdhA",
  "key9": "753Xvuk1mnqGPXiVkRMoGqDKjvUhyaGiwWxcj2QKiVK45sr5UvGQkJqdb3ydFWSGjmhTusYnE8gNf27xh5a2VqX",
  "key10": "4dZY6xem7U9uH92dmMka3ose9pEvWnWYPePJhqQp4xT8dgGzm1noAKnVFFKacagSbqBM5ZwkS4s5Wua8MgyXh7Jz",
  "key11": "511UWN3HbNVeE8UGnNp45oPjUmXqSEsyPABMmoEwS27K3zeRKAQTSQiFzAyyUvUheNcRMKftkcPkXJowU6T2MJyw",
  "key12": "4vEuPL44Fv6fhojotTkYTJJtbfFRccqLWQTVP7gTwp86X16sRNKy2ve8Dk2X9LG1GEe8ZeVJctfmMLFaQLPNwrJh",
  "key13": "2xZVMS9SnYTg4i97ygqBBzBbPrL5yun81GTjqiJ5fN2jCVmszhAXXn9tfDj2HCd4HjwZ24r8cibzPYKrNViCRMmm",
  "key14": "5QFnb9gpcJ1o3yUmBgtnVqKadKgDpDU896Qz7uyk7eJssDem2Fxjq2hdNCskJR444bw9wVodQq4gsJiLfiWxWpLb",
  "key15": "2tHYPNvRrmJpcDTD1iycuGdXadEqdvqeen3nZ9hdqT3z9VVQvxDKpNVXkiGKbtknvtpdLMdoTvs85uoZtRndFHdJ",
  "key16": "4yJjrBprFQjJS7XsLV4fxHnFwuzZjLn51rSsDfzreYqTzMZLrEHNtPAMxodwK8JCh2x2rLYKdPDVUxuApjnbERTg",
  "key17": "62RY2WbDaa4ob8voL5TkVcNUK1Sg21DaZuTk7iyBhbqpxnvgqhBCq5iLFmgvs2zUid91FrDnoUp7YqeBVDLFDTQf",
  "key18": "3ovGfHJekXDxRxu2FPWCf9nBHhvW1n5xN3ncMnnH3qQWJJor3HfUbJZSJXR4x5cjaP8r8FzZn5eKuDU6mWopjyUq",
  "key19": "4UyCQQ1ae98rYjNADjc7ynxz3aCMVpTxxadF9zhRkzJbsrtRTVrudTCZGXWf1r3oWs2CgQTxcyZ3XKDE3vJNJHQw",
  "key20": "2v97dWsWfZWdFn7fz5VfnuB6A4dxuhE4fZKuoVG2D5tTtihbpMbVNkgNCJ8kevuRuZbr1MyWPKDR1D3yBfD32Xdt",
  "key21": "53fyWy8QT6MnVCVyr2aTQwM5edbHyUuL28jJFJsgpFTfyAjXtLSaNtEdrNwxdYhVo69qBi8WJN94B3AJuwY7ybzn",
  "key22": "eQE7W78wDV2SD82yBWCrFmcZX6LhVTqWyULVfJ9Be95DB8D9nAEo9N18VdTir22G9aicnYAxifBgE1XfbX4Kbq8",
  "key23": "54PQTvqGAmXyQfLojWfNhWFSbem6DCpFDHUuSNH9N82bkphGu6gZEP4jhUXzFGoCv5DgvxDZT93d8fa5UGunCTZT",
  "key24": "45PLdezHDfQC4qZhrTMkhADX2ATLikUW49qacKkxNT1CQzdaLKuAdZXSbvZm8c3WFSStLXfw65G4nEYBBSJdv1Hv",
  "key25": "2gQnfQYaNkEGYuNyfFhwhWQ5hCZNo3x7Dzh1WgUyvi8NGPqvHgioM82RqK9ci9asNErp1h8kwayb9KYcq7Sj1e4t",
  "key26": "3T1qTDcgMBGYBX9woa1KcDEtjKnhPWnuCdCgdyXMqh7pC3WEy3NKotdHUAXSBCAfZLkVb1mga5UDAqPqgrBhQSNa",
  "key27": "5iKFWVs23B6vrV8qNtyN5vXqhtAdmjZipFfZVLwJNiaoNWuig7oMEDFkYnTjEmUzsFg1QjKEbGZ4rQc7GELbYSe6",
  "key28": "2uu6YvupuYKddKM8vSRBe5vCjaZmabS1nZRTW2yABzmjkcjMXcXPB1EbyZjqtwHK12DLvBbsUXx6vUEGN9FDxX7R",
  "key29": "3WmPThq2iJnVEyTVzTtVFRN6e9Cnuotxb3GtqRU9y1hoeNvBxV6bG6nb71nZbeDuMQJJsC3NUXGNkAqdqbnseGVG",
  "key30": "3xaJSR3qBoBKNt97XL1ecFbFH27b3nH4fuebAX5hPiB6EDwi6yb9nVu7hkcnbgARAAL4Bzb9fgwBpmhL14oxuzEs",
  "key31": "3U3QCfB1o8kY7usL4AyjEAYFCJEUUv6WivKBzp8pR9wjMb3n8ZQapniATkfRZGfEsFZa5yvk9JwparzN7KvMZWrx",
  "key32": "34FGcDxbXNiLX3wDN9m4zcaChWNwrJ4uKqg6zGLeSVWEea4Anwkqo3Y9scyXuU9AWF5KNZcKcw6gS6vwMwDFzfVw",
  "key33": "2Y3MaVhybcchQGtyNJtapSvwKbDg2AKR8FYzRr4FhEaLUa9L5W5eE1FiqvygMJWhwvnKXhuzsZj8gxf4To9N87Pd",
  "key34": "64PjumrTAkyvyNs9dgiESetdW2bgEQFxaYhbaCFr8N6CstD9MrKHErKAWqmpkCSufz4QKZTx9q5Z1UbF8RTSqjJF",
  "key35": "2Hc4ZSfhHvU3Up1akMCnLXJPxkxzX4Nqeg1vwf2BeGyLjyu6ugQzZ9QvAt6EsE9XE9nzYESUyzwBgoHvC4jViqvk",
  "key36": "5AQrC1s7CydjDAjzLUoHwyVW9SvJah6MSaKVzFoMNhN7xJcEMxRDiy8Q3AihkjUmkccrKM7EFqQcGqZyiZYSQkJK",
  "key37": "w7uFAhUAQRyj77ozMHWFQdb7hExn9AJBvLyedwXSQKDyQfDNZEKer8s11PtDYLVbELYUTKpMeTC1Qc2m6iUmKTb",
  "key38": "5jYB98ypkqPjRzyTuy3DWRaJQtAzUZenqteja5QXEVRfVyQTLv9kZkbDtzcJmg72W5uzvJHfBwX9FyZnWeVTMBMq",
  "key39": "1YHr1nHtwQvNXkcedYBhfymBJCKLGP6fybLWcDhp9bHBAsw53bNijMC2VVrwEJnwbyrTWVRu3HmRoQ4s6GKdoXi",
  "key40": "5EniqkxiEFHdwrxaV2DFFsFhg6mFc5ArTZYo9Vwb8QSJWYyX49hsa8A29Ar9pGgWEpjQBkUz2GLEAYNZrVfywANU",
  "key41": "hcZPuGAZq7XHcPbghGkwv96dVjHbhdogwJkqABm3V64vC9e4TfqzTEczTAGoFjwMuudjrsfmZFaBE4t7GrVCeLC",
  "key42": "2AeZR4zD6PB2sERv9QZLts9AE24YwRY5du6ES5VCPovjxBoyCpzirAon6n6SGy6AjkT8PdaEfLbGQtSZv3EkEP3Y"
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

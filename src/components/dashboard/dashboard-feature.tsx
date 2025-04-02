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
    "3KTdfqWQnTzDatNjk1PKUv7qGT63jY7964fv26rYSbfHmLyLNvYw9LiYXNmSFyqcN5Pt8GELWf1V8g5g9ES1iiUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgETYKLG6XSxqL6sDy82iZqagYYfnCkJLLzjh95pbL4usvxq7FrGjj1po7UJ3DJ91sX4C9kmPTNtmzEKRpkXNjx",
  "key1": "5L1FbH9iAaknxNdxxWNQC2BnWED22jfpvhFw7yvaxPny5ZYw4VhGJhXoZznAVNJAeRppxvBzYiHMxhSguovCi4WG",
  "key2": "5gN7wAeLaexEF5xvEHrQmm1UuptnfXUr8QToMYAZY7Di8dK6eEYo2NegAxkY6fXFn9iKop2vvk8Rnj7MYDPrBSjg",
  "key3": "32912NmXnY3JCf67475RpUmvkE3exVQiQRVQeUqBp78Be6axJGCu9ea5mjgLSmu6x3oioTiHxbkTkugRAv6TiB7G",
  "key4": "2Gqx3QP6HjuUKZUko7er3YauiK5oRncVpxpuGThTA9FNQwXs7JbE1vHeQiA9fHj6gDqWrHu9NpoF6VgH2KNdh8ua",
  "key5": "LA4aRoJCQaPiNYP9X7XzXkfQWgvrFSD7PVGqU658EB6cLS8qipRNgtzvsMeHbP8Q3zS7QCDHwNWPVe1ujnmKwPn",
  "key6": "3EUhKj8LARQ5bz4bbeEsXZchybxagbZ1eUBxUC4BbvL2ojXUDCBbTM5bvzhdp7rKM3gUNR1ZrjLfaLo8VQ4bVZi4",
  "key7": "3DtR95dUkuLKVGbgfuMQbpzEpf8SrVndfnJCHwy2tZhKgSeJ4EapttJUojSv9pf71qNyGHuZdChnXvazBYncS59S",
  "key8": "3V8jatthENBiEKY9ByvYSBWXKiTCHZYfKa7s3P8VPDcEEnQVdNz7n86jwZeeDTLps2tFcLEkv1d7XYcTnsNRdd16",
  "key9": "3dXTLW6fmt4FhAjFjmRVN6KYq2qhjTCFJufzs5dqudaLtVrPHHwDXLrcirpHM1JomyGrf7Z9G9zqyMxpP8DK1Z8Y",
  "key10": "2dnepCwbq1PqPdTof8M2xiZmPSvmzG4mEBH8WtjZpwzsjgqb7kcDX6VDpFTWnhWyyDe5ST8qhyUnXZe73pdP56oX",
  "key11": "4AFjsE8ondUKYNwFBzgqF8Pip2dYbeuvUCGLJgj2jAGegNL9HrDAWa3PfaoHyCcoBUNyC6VkiN8ctW5DUQNsun6J",
  "key12": "Y83GB56nQLpo6UaEEUwr5SivJwEKpKmL46gSRUTeEfP9w6pgi4JgtA5LfB2Uq5nbjNjnCCUSh8kgsQBHmhQ22Y5",
  "key13": "2BfKKPJgkTwnQ8xY4yLX2esXVLxf8BcrDr1z1pmzyibVTzU2xfx5K8eQY4x3zsK6FwuZYxs9UuNTcR4d1p3go1wo",
  "key14": "2iBA7LyCmVwXn5W8FCGNRHsV4Ref2mb8KeVAmqGHJSAyoibCGoVrg15NUeaXLLgeRDFVQQsxyKV6VfmKaosKe6kN",
  "key15": "ijbHJbLcTfiddpNwEs4dJHXNT3jjQ9zcLFswy5N4toRECo46YiMuDLRP64km6LBuyi3jJowPPdk2UkQ4UN5yYX9",
  "key16": "2FqNMzRsortbCWjySj963wssg86Uc41S86k7zfxPPh4tip8AN3pcuY8LscUYy9xt6nhK5sHGsmhvdmTh8FpN61dZ",
  "key17": "3HKhzaKzUuut6vjvNGwuMA18jzyBX91QcpEnX25inLcTF4pE7cUdZdSKb5t2a3KExu71TKv4mdnqjRTZscwgd6rx",
  "key18": "3uKqisSDwkrjpsVV5SBm4LWfNf9m4U4pjHkF2Ww7daV7PMxmqnhsGMeUJL9Tbif4Nt2szFVYD3hKMkDoswVsVWXF",
  "key19": "2catBx2tFw84BAooiBtxHyVBv3h1iA21tKHAqDKiJkxMbsJtqQf1Dd3twCFYn9qqV1nuiVRPEYz6G2GvGoPj7BgN",
  "key20": "fiZzi6UBhEaxUHwwXYhK3RNg2CsNgn1gEbU3vecyiBy9L2audcvuZkniTYLamq51ZK8ZvgSje9RyiehKDWcGGFU",
  "key21": "5SmFUKP7aXsLnzLjmXeHVDLEBEnJG1F55KxYY5WtjtjFhEzcgwYfWuzQRo1bF9dLB5TW2WUQzTf3Haez3p8wZoWE",
  "key22": "2C8aG69MzU3p7dmXFzQ4EWoVZ83CMULe13aLvKXMsKJpwFpyGmBJdBuaxqKbrHUZR1AogdfHeUMHpikkoafozye1",
  "key23": "2r595r2wAZ8ZTVMSHJWVFXcYBL4TzNawFiAH3oJaMJrzzMgrmahAXw4JQQdG87jLq3cWQG9d3ErFz9NjT43oSgaz",
  "key24": "YZed8PY3isEj4RGMB6C51gB7ej5kxYSPLdCXD9UxxQZtTLEm2xrreo84KRZsacSs3tP7Da4o99KJZD2hKdBX8rq",
  "key25": "5tSZ3TgDGZoyU9kpkSH1wo6ogjvLFZiiAMUbuKV1bgch7WW8i6jP8jX94r1ezn4HvNbJqNPAsJGyrwFyS67s5JKh",
  "key26": "4EuwAgBKoQmosnajvXUrYqcr4J6ePCTPwBQUmPwnVheQQ58hzcvH1MS9EmsFQbjF6U57aTTcxfncsaQZD93SYxRT",
  "key27": "4UaEhc3cnnCjorGbMUK33tWiScrZwMdr9eBZ3rcvX8pc76wgAHJYH6gN62uaYVGCq6XyBna2dvN9bpfeDyMMhEdq",
  "key28": "5y1h8HHo5VYiBhEC56AZb1fXV11BRhzG7sjpmUuvZfNJq1gEoj9hhucLP5KwqBv4f1aVGXi3SsSxqCohCaocntbn",
  "key29": "WozjxAytxW3WSG6JCrC5rTmwtAsXzrLRJsVVnC8ygafWVVWEoXo3UsgCfMrdR4SnfPUcgME5eN6w3oZC9mCKUBD",
  "key30": "35x3Rp5snqMxGtqPwK5521yTNAUbxdfVzVfUw6pxNtb7HtwiJG6KMjbmfxmyWQeZi5qZp8NwSipgywXQqw8XuBmB",
  "key31": "5nm33UeDNjk9PTQxR6HEsbeinRfxPFp3kRswYU6WeZ9pXx3VP958gUJWowF15xwWCgHk5bajX9C7j8hZYEtkjvW4",
  "key32": "2F1uga7YFm3228VMGWb7FHhRSwDu86He3Mb9T2uemTHWnP5gHVPjM99qzbV8ip6Hu1mgL54p7KaDyvuHcNf14jkY"
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

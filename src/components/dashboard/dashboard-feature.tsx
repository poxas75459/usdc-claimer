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
    "5yddaRiYB5iZB7byjX1c8gcujrwPaAmKCxFcmowW6Fyce6xt8wEZZEfjkgPB7qj9DndD8bNHEQpVYiBKwkxzuzq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHprdQvUED7bqtzyTQwz4v242xfStYWv6zBZjamJKhkhLdX8jM9367BKCjj5FZkbBg9oH6nHiKHp3RhJDAQgNDo",
  "key1": "4pnxyBbEz3ypJCeFYwqwfbHeQEsJgw7fgFMnMUoWJSZm5jUPiG4fjJDLS6oon55dRSifBqLgDrXgzKycchMDYmYe",
  "key2": "3miJo3rWRXk9Nz9KqvyMmbXPiyk6UhUyqWYeJLSAUHzhkJM36bkdECw7aqsxDGaazpUro59pfyPygabaapYeMVyH",
  "key3": "4qLBPfhrizWZtyLa7DPvpGJSE6tXVV5GWv1L8QFPLeiGtnuirQrdVSVCDN3AAFTKeuWgNqDzxaCtiFsakd22Ss3R",
  "key4": "29EFH3ucDNtU4pvGnHXMr5hxXa9v1MCXvVjrfwE26DMqJmxaCScrdTuheEDxjbfqATC2wV3U6YtknGFh6bWzLCsq",
  "key5": "2H6qLXavSvqUpPEXDKWCrRpL9snQzLWPjK4UniqfXo3Azeic1HqTURbs9f9x9b2TYVXQKzWzcSuW2NbBVFYUHJCg",
  "key6": "ifRusU79Yhrsa3BkxxztXyM7kCMYdQRRe2tqogMUtkqPU4mRVqSZjQuaJ8kBNcd2LLnbW5AX5CxN5B8JU6p1Jwt",
  "key7": "48UKdiEt48G1PXfaGF7UpRtjXRbYZ7JWGHQf5oKqPBg59S6wT5GC5f2xXrLj24sVHhMUNnGRpzBGgVTqAGQByufg",
  "key8": "2fXmoEPjqmJRkBhjxwwaTPVg2ED2oevXSWs7uT5riZQ1bwB7iT7wrBTwEPLwKzdfoaXTNjnffxSSCVhQsFxT1q3J",
  "key9": "31rYRfWbtzvH3JhvwXnZWMm1ysKYJExZVHNadP5CCLBpKZWah943kYZRaFZqcUcGp9PduHRkVFSwyA39tgXmQXgK",
  "key10": "5cwjweuQExCi1abkpyvZvJ2qSG6Xf3wWdedVBYq5n4wB8pWW2q64CjLk9wPabL7TFtYjRmAwAA9fnVubWUD9dm5G",
  "key11": "3RUaAWKPPfDx84ZidBKMphg8Nmqdbv5v3TuibAufEwNvsaqURCMMRrLsg3giccVhoexc7JmQCppqjSfW4fh3oSTb",
  "key12": "FPjSPd9BwqmmYXPzR4DkMkejHkpokDiQPPPnzArFshsstqANLJ9uMAAS4vaXHSh2yuJrbe1tdRBHZTLdtB2FkGR",
  "key13": "3SAgC2cE38kkvHPWyydBpPZhxFXFcED9QZpYLrU4WF3LF5xFeh7dTYdZHxF6f612dseyEbNvAJ9uQuEqscMkWbo7",
  "key14": "2pzWsh3q1orcVNJhRoXkaZRt2XqYAGsVR6sK2XcEAU6PqQatgnM746CLwERaDHWGPvTB1Sbe7ZjzGADoEjouqWuW",
  "key15": "2p8cGtqGT95LxdQJwhcPNSL34Gd471qvM6qCiKDCu8zeYEnSpaEfFwWeoi6sqgKznU6NeRYvasXLY8Bq1n975dVD",
  "key16": "pbmBUdFoTM1GiM8y67vu2nVRWgSzXQ8oUSsTZxoyLBNvbKHxthy2P3PU1YNybQPTTiswwLDnWYW2M5qGF29XAq1",
  "key17": "4KX6tzkZiNLfRN48RJ79a8PLts9WoVN3qJAeoLRYxB1txZhJAY39bGCY6441TYVoKAQ6tGccV7sYwrSfTfFXJF6c",
  "key18": "4bSiCQcA5AMiRPstbXLW4UYFgknBgVEqqYUDPnBahG8NUbVSs1AyZvv4ZqZcrQrq96mqQU49z1dVcXAUtLiY1cza",
  "key19": "2vCDHpyLwozGNMZQYwJzphzgkJEHKML14AjbPqtcLnavM9rFq2UJ34hpi9tqyBW3fhauFSgeGicy6mUJpdzi8vjB",
  "key20": "37ihWGw83wSfZpfo2qnesnbtxNLBgaM347gBeM86cKfApnpZmrjZQZFydzEQwXZ4cXJgGuL4rLzXqYSY1Ni6Q6z8",
  "key21": "61kbdak97m5P8prLCBsom1wbaH9TT7Z2VzTQMUCLB6Tt6BENQTaXZfryTsWdwrZ3QEFpxq9Xo87rBHKzyoqCsjxP",
  "key22": "22fE8kz6VpAL1NwSsPgK6d8Xs8NpXAYnxXTb54gB5YnRZyZBbTaLtYy1b398eWG8tU4Fe8nvAZVFPpmo4Pc8krjV",
  "key23": "2WwLYQjQ1JwjdRTEaQBvrAf5YBYsSoHq5M1dxFxiUkXN6yEyVisqcsqfEkXj8WaQ3kZftqsTWAXp1BHh5NxsMc9R",
  "key24": "3BgPjcG9pMFniZ1trBDcWTJ3A3hp6CBU5cyTSxrgMCSUaM4419wJaDdkfFihYJeHQ3bGxRUnMqa4RC1dpfuzaUU6",
  "key25": "61r2ynaQYTBs6xajnuZDboDjPutWUGhS2Zog7fbVgduufWw1PiuNCRAQWtwjWH9w1ad6xtyJchiHecvVUor699kY",
  "key26": "VkQnvD1ZNMzz2eBoEy9K76zui2pKWzVtuutGvSQwL8WoCXgCiw9k2AfLDanEiu9ZSAiE2j26U5VE2q7dVrt7JMn",
  "key27": "usZ4gCbuV7kxCbMEMZwSsABqFJ6vHKoUkY4oCLP5AbfSxQGT7XLFVehrvMXoGtqu2qhzkredUM2VN2hhFtUU2yU",
  "key28": "62cMQgYzFjJWKVwyJxiLaHArUk6TZUE3HKXm9M6Se8wkqBZf4xYxagQ2bgFxXS3P6DHRD5vpa8dfYWB8AYsXtdM4",
  "key29": "STgjKEa5FW2CyHzzwLdKKzj6CBoL7v2KUN32GxneWU4SmD5mCFAVv2p5PitJDGZoyMP74ZKAE1pALmpmmHFQgLP",
  "key30": "5US9Btiz2yvk7MSUi6ujWV155Vey2kHPHhfx2V7xFGx5BMfsa1y4jYX2NMerqeThPERdtBDfaWWaUWYLy8fZr9Wk",
  "key31": "4vETFN4ugPbgarV34o85M6VCrWxcaXCJgs5gofUpvwLKS68MTAk3ZEYd2WXmEYCFFHd4Zz9N9kWrRR74bW3wpVvs",
  "key32": "3y1E3c1UnVroHRQd73tNqxK3Ns2tDGAPacVfXXdTRokHEe8SgHVRmKzGUAUoEYqsNSEm6kmekDRJFD7mpqPeTWdQ",
  "key33": "67DVdLeKvcXfZj7hwcVeSWLaJSEGFfVJJb86vnrGhSPPFAHbFxRHi39x2ALPyHQFGcj6yFQQFBoo4AuKXXM7BmkY",
  "key34": "4X4fH2Lo7wxPn4hz3sGQu4qhDGjUMeo1qHPRYGtQPB14zattTEHGkdX7K5wDYkoa5nWHTW6f6XBEgfXH41Girmvn",
  "key35": "3wND6mBqktMUVrnriXNtYX6aj4nNsrq7e3vSeb2FLd3tq6sbsLnSCwcTypZDWMMzHUsk2hhZXX5MBiEysj3jiUcj",
  "key36": "35vLcTpAF6pjFeEE7nDyDXQMrZ575yUv1TjHYWYzeSt2wBdcCXmJrfh3vVrXeknwXQFMb2ZRNoszJXgehecUVdaK",
  "key37": "2NeGsqXGMBxExTPAQC8SBsq7gqxD3pAr2BSxMJWrLibv2eseQSXDfK6MQyjNs7buizc5VUd9JkK2HQ64ucCgeqnr",
  "key38": "3Kf9esbzkgjX41wfFBLLJ9eZvCx75hxeodpH7sXdACuZVy3LHa1vKtKfe4S8U3Rxicdg94XqEE2SVjxK8pQsrfx3",
  "key39": "2QwhdXngR7CZZNaswqoXDxMvr7zUFF52bBV94paLJWsJGaXvwM9BnxjU8yKzJxxCzkudorr9baAKWL62LtJf8T9T",
  "key40": "5HTqu8JPsBXVcwBDdsmMKm5bXxMRVv2Let4e1PGzmTXS63BYaz6zpq3qEYujfsKwm5Uj4UmGUsEAaXyWHyPPE3Wj"
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

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
    "LjM9zV3eHx3L947BhTTrEFGKWr41zSUzQPnjeJwnVvrQczaupnKBA3EKwfSfP3DxuqyhUaL1J6d8yrYiYY6EQve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RxhgedkUiu9DxZSzknG4bVxzNS2Lr7nHyQZWAZVp1X48YQVoQuK2KQpdnq8pENpTLyabSGz3RavQ52WZUXYcDdE",
  "key1": "4BbpA7gRN4FJ8V1YqtgbWzh8uKCimybu2zTPwaMhRE6xXtL22yH9kNfCqwAQLDecpFpYhVeVTzeQ6VjNvN99BmdG",
  "key2": "5CF8LyyUkLf7DHLhtFGTvfo8ymdTcDSWpmH3toSG2CCaXgTAAFG5sFkSBUt4kxqM3hUsrvuMLTpXYqdDcVBaJeah",
  "key3": "RhKcA2cDs9PrSrDEyf9pJU9pQM1Sxc8N6RAsFup7LKiUih5QeEbf5ZscMG5XX7TRCWsYj1nTPLZcJeYJXgCVWSu",
  "key4": "2z4rYvr7yERRasW7j7QKo7VgVTkcQTYJ9vhKwRdRppfKtRNR1WP6DqXmszNKzo85PxRm8DpMEiZiW1YbqAMuATgj",
  "key5": "3YeMAXQYw6tYfmiNEDK3NbRvUxaae15WfXGVsTgRyevoMaLiWGkd9Ys1uFLgTofqNqrURKyk4w99YiyVV2CbiVPL",
  "key6": "2qQffVEXfFPeGEu3DZZaCt7nxXL7AKCa53feuPzv7F4gXbTyMQ2BdFQy89nobNs5g1eaKN8GfY6AEe72h91hvb2i",
  "key7": "4SU95rdZnFBtJtELfFxc7VoyeRJQeDAcz482AKH87t4tKMmb5JkYTwZtNfagmFaBirZ7uJpRmwL6fhUaqWvf8J1z",
  "key8": "4jyA6mMy5GGJssJD2RRW5ZCGuPtxsuc7oaXiS9GppxaKSkLNrdEkeXeb9dDeG9bkv46YZodzZTgL7hqZHaCCAhd9",
  "key9": "2QmzJKEknaER8WbNcfbU49XFhTuGPEpdD7LQJFH89NELNb7onR3cyaNFZ8a3GKiubdpWntZk9ZAuQ7uFmExJU5r",
  "key10": "2i46jZJtV97YfxajqHoC9XDrERxPZCnmY2RdPHqkFA8o6esABEpmYeUSfPGVrJb9FXHTi4okrEZDqFRBhF7FCp1N",
  "key11": "oAYd9sBzm6zVdBYv2uiAvMQPohX35tNuMappLJ8uoWYrDR4YcuzSMaNcK4wRKXxMPFygv6SwXxeRHteqKaoBZ2s",
  "key12": "no6XBtsnQCANtruynxMzqHT3KRX4CooUcQTb2g1wKBJNH7ZMUpC4rZvzkcbpRuon2M9xN5q8gQtzLYU1EFiRkWo",
  "key13": "4ghqJRjJhBz4mziZPouSK1Kts8Cok1YZw3c7D5ZPZvuenpDvMvpF4Qysjc8YwpRh5LHisGRwdcV1ZbrCQrS4VYwh",
  "key14": "3vnxQWCoAyMauJf7U6u9z35Y6rG4soLrzKFJ61UmBUrvubJ3cA3qJ67xKgzRyTjFQseoXnPdPkHpkkAbB8Cub4sT",
  "key15": "WJVGkB2PLjiNk6DFWva7YDXzPzR3drMnDbHD2z2GKXAH347ijyiXRsTYdtn785k3ECtf1gTCGrtYNvQ9ZskQHYA",
  "key16": "58JgtJ271ygLqXhHRXixsHJ2V9oQ3w7UpZFE6reePeA4D2LiHQb75gXr3EynNG7LmavQF5e5P1MvP4jQQMefXmeA",
  "key17": "4iiqs2rFn9Lpa48n9x9VgSqGWWns9VNLgEaTDVA8UuSiWQQSVjGJcS7tmcBVyNwxBLKnp69T6JRjqMTZQNkJ7q7F",
  "key18": "5bLUvrVuc59sprLP6rjrS3bFbbkLHNoJAZWLPDb24WoQ4eGcsv89LDgndVezTSyihWUAkuL3ajKT92jhrVfYY3MC",
  "key19": "4VyqMmZFfvMdBkXmFpHAnXoikmo8sK1vTgkAs1geasvvtEv7bH4heU36Wog1zfenaSwec87F65SwvqVPsCRMYMhG",
  "key20": "2duYku9N2asUUmMiuuiwkChrCY6wiFcvpUFN4fxjsPivHmk1xFVjdZyJFnkNCpkysJwzRje1zgu8bi3TNMqBGitN",
  "key21": "YPHanc3LKC8zVwiKtdPs5nnGKPP5QtBK7RAAQXjUkM5mgLbBU4uqAN6kqXDuNhZGAwdWEgXskMfh4dvJLXwrNbq",
  "key22": "Mcb8iJgsThWyT6piJM76dKeHagJWw5ggKNJ7eQwcYtVJe5qfpVQxsYpEDDDADR45hG9VEHH1H7o7Vnadw5zkFH7",
  "key23": "33HocSMx2LZ1LWhXZk5GmFr1Atxp2vM5EatxoBq3sQZXDd3tdzRu3vzY5pVyzRSK9ZSu6ae17oS2xnm72yg1yLZi",
  "key24": "63a1oCCRp33dmBru3pvr9SskMd9tcdH3NDGFuRw1akjXKijYfXydrx8SxhELpZCYaVGS2EdqNxqmCENjut66JAFY",
  "key25": "d9Wz6rWTAogsKbpKZ5krVtv5KhBP6NDa6LkLpaDyYZbFkCJphYLZ7p1w4mCrxdVopq1dpv76jb1Xktf8sCZGJ1E",
  "key26": "4LRNSaFne4oFhfSDjbB23rBQ5g2vyhBb1Y5iikPJfD5z2SH7bJbrWnqW284bbB6rpNUGvYMnGNtuZF7hvfbu7Hff",
  "key27": "7igwmVMPY2bndwTb74HaJhYcqnJMFXniB3kJj7rYRArcfEe7tELfCYcmpSoQPji8eSTLMEvbK1kEW3ioUbos6Lr",
  "key28": "65zX9cPuFtdw9F2aDuQmaDhJuVJSJLURQFePWrke8BHzCaGFNcbYBVYYqZXDW6BsnwFzPk7drigj47cfbiPFMbu6",
  "key29": "5CMBDMA8cqAE3ChbGyLkiB2haKib6hHGath8rWtwEwrpqwgvK2RTwGmQXMzn8kMUvssRQu2wYhkQR1NYMCJoPrQN",
  "key30": "5Bj9r3cVHaq9r45BtztUV97LVbgL5P7tqjNezKHdVUiWCWPi2kB1yACy1bf2LgAF5V2fBwG4FF7X1AhJQK16TbUi"
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

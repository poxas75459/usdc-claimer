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
    "5V2pijMb2ekZ1q4YCQqgfAVvVJz9HwvUAXAVwbGJQyXvBWX95c4sUQpeeZD3kCSKcxntKCeSjqyh7YDvCCSgyzwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aiGr9mTmgchWokzKcuUVZyPAyhdsYdMpVrTt4HmxvjNoDXJLb4NgKdBZaYCB9kbu5S3gSvLa56hMDfcFLKM3edQ",
  "key1": "3JiN8goC3iHFY371mHwQZCQ1X79urx3tNLmrQ4ZErfPJpBVHLyxHsGBWb233rUs1wnREzk7GeGijBcE3n4MjSEno",
  "key2": "5D1fPgis7YtmKUeqqh8PKBZyayVdma6orzXoeyeodqzC2zjXJPqVKvXZFNHkZWxb6NCgZh3N3FbCuSUhM34tQLwj",
  "key3": "V6QBuyAXBCWMe9BE5QfkBFaEyy6BfgJe1AXaqWVeBtcGrBEftXoqXED4Tn9cgGidpx1TTAcmBp5k53EiGuRgYqo",
  "key4": "3cfK9eV8EKVuD3QertV59azfR9gznXZ86yLmXkzdU1K86QVjruMGbeLmNVGr7uS11smVJMtwwVGFjuRZx3hcVgDL",
  "key5": "4qD7m3ZQwmMZEzuVBthF5DJ9pEEkq61xSEQVXTqaMZQBTsf8ttGZZctTQG4gp9HLs79LDTAC7zZbJAqkipyGxA7u",
  "key6": "3EVJcd5aQqfU2C6YMnqfuWTYpYmSe1aFmofowUWcy7dhKjtDUNjzrXg9PpWTPFu5HryeVzVKjuYTYCEfLjCGnkL2",
  "key7": "4vX3BS2aMVVUL3pvxFdskAUukobb7nzEaRZB2YDZmLh5WoEhWshVRSUm4NHg1VqwXAae2xBXso3T4Qqnf9XXNe8J",
  "key8": "5tYd6UBYdFqxj4GjR9gXTJcNrv3LUZHNVvx7wsuhc8CHzj68VYLpj4cwLegsgHxQNVesWB23EYd8oh5udhhPhJAW",
  "key9": "5Djt3GZhDKFgEHvrwcGBwWmsN1RgHY9ujsHe7ggcHnDvnpX66smakyRcEMNrovAZmXhTvxoBYsiScLWMGPXohTvX",
  "key10": "2uKYjDHuspuX452oqQFyrdzak4p6kyXFEk9D4uU6SYgjAbFwAWcyqi9BgXwgQNxRPCP3KuDwgSB3HBH5DftxX7yQ",
  "key11": "4E8fVWxjHp5oi1QB4X7zARZ5jP9KAVduYsmkZEJ2FJFK2ukLbeEH2Xzw3QrUYwrj2U24K7ktSNfZv6rUJcYDA9LE",
  "key12": "3kxqS3QSEzhWCmjGqYwTxyozqQReAADMYQcG4odnCGozQneQDXuUUPRNsFeUm5pZV7bHj1GYJp7gzNvy6e6GLAdh",
  "key13": "pXLfK9Gf9E97EpKns5bbHqhbW9zY65xcVxKuTLdw9ATKPpV1hHBVH2uP9aPCkQhQ1U5Wm4i1jqthVdPfos3zxGG",
  "key14": "5MAsZLkCbxtWPbrYbDFbB1JRSoGFTyxRs2LocwTmWp2oVtbZzB1bNhuWqk9r9y2wcCfy9LkzozQUkVfFEGFhBZUH",
  "key15": "2Yfak1SRZ9HCiw9X2axVp5KpBFark545JBx9TgJGbzNUDF4wd1dYobMbg51Bo6CU8MktLuzbfQXQrPYsEVJFdjZw",
  "key16": "3aVY1ppYsn8UEZw1KAqzfYnyyEEqhDmNzZMxczQoRv5urjfmnqMEt88RimisRbwpjTKSgMTJ3HVjg9geZxVsu3Jq",
  "key17": "2WrS47RHzzPBP1qqzN8GJhnULEqHCpTW3ouXUvEJZb4fg9xbsA8aLRUmo3f7f7FeEy8rG8wv5f7fXYyLQo7opn5g",
  "key18": "2wF84SX5Ai35y4CLhUMrnx1TdfNxuxjq4HBxTMvrjWaBsB8Sc1nsZBtmGZ2hhf27rRqanVyYpi9PYYPcRB3SVaem",
  "key19": "5Vqk3p2aPgR8vi8SpC7tuwQkwoQYfB9BEGZTUocJzdi1g31HdgVpzA9jQ8pjrHPrWRUxzZEtJ2kaQCzLavPSnkms",
  "key20": "4foJQiBLx5tDmcnN9sMXcbwrgT9mdNRQmSiBhUkHdMwtGoWXj95FQTgWrWFqF2m7ZNmcMH4ULDWGQoCDVGuEY2cn",
  "key21": "51fBKiM6MvohrqXzmLW8CcPZrYoF2QoAVk4GGGqrJfPzFG2DkK37jpznMEmWmy4tcXoJtkxwg3KsX5iea5W1bJ7H",
  "key22": "5f1EScQKJ25DHrW6HxNyLh89azEM8hRoy9q3htTh2WkiMsNKLrFd5Cpn124ntUvrBQv1F69QBdwX3oJhA9tmvuGu",
  "key23": "38P22n3sCNyBkU2CFWALjtVRwbDg8CYeAUpWs8AMQpTf8VpzThCXrA4PfykKctbDD7YaghadqbnzGefs3yXzVpdz",
  "key24": "vEYgNMsBdLB27ZMwR5BWL3fdF8SsDWTQpFVM9z95M4Zpz3Vxrw46xByYZAdYsYycYF6qqCf3TZHpVAnQSisFCLZ",
  "key25": "5AvjaLP5BAmjb4SBBR12kFbLDNRiQigvXg7Fz9F1wpnPU8jtKLiYc4Qr1gtkbTg7smAGyyF5R4ZKAXZapfPcJh3k",
  "key26": "5y4kHUrP5vMFBemhoe9vGg753nk3Mzg4hqAgKUqiHnNcmVw4JwdfprrmDWKFYcRKcwfeaZoLku18bn4voZ7qZxat",
  "key27": "3ZVgepTZHvWdJHzFqYpez4Ft9HF1hoA48Es2e4PwK8bsdVxZWkgboPTHLxHnfKdE5axqBMoo87R1uHXYRa5LyNU5",
  "key28": "4wqwo5hXG8fmgy9KkqR1wJQmU71KcApJjd31diMxHkNvY8G76A13a3hP2wJzLWXEUbNqDYBipPxyZRQ5WedkrQ3w",
  "key29": "3tnGSKJHokMj12C7iA2twoqJddBM2ySVSXNwvhvyfU9RhfsGapjfXPiyNc74apFzkkX9NFcCLEjbvNjk5FPLDo9E",
  "key30": "1GChzwXgVMJyBP3bZA2oXYRsjXKjpbVGhpz3YuChEeATParYknoMtPKjq8k1StJtQPHgBbnynVXQQwGQ3WxpHdc",
  "key31": "3QJru4hD9MjRa1rSyQGDPa95Ym5NdEypQCU2fFpPEmAgm48t2xCrU3Xfp7Qmto94rcQUaaYyAQzngRkoNrfZVumS",
  "key32": "2un56eusdS3PEKEJgGDM5xp3S6uhC85FTtsuT6Xrfpbj3YzdEwrtD1S8T4vosRs14AD9GW7oZAyFKpMJYbdw2kG2",
  "key33": "4fufEmJSFTsrRJxD5ECo2tjL62uQyaHA9uVDJwFcD26V1uuHs86S88A3YtehqPmjYf3aVtv8pv9YbGK5hBZuDZry",
  "key34": "3bLpzxfFzfv3imFh9RCy1HXKjo9nXBBT7uatoiqBHnFCcLp5qMji72Pa5RZRU7KDP1x7d1rJikMpmvsHyws8tehj",
  "key35": "598wH7KtyDLnLS6wnpn55c1ZYX3p8gKFZC8dgsbSqpk8twxHEs1GPWaiJwA34K4Sv4PxxFyfNyK5cFkSm2x15xTq"
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

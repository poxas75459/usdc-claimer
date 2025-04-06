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
    "2RuSqmGVZ7PVazn3qSbevipTvuyTDhcbmxEadzb9tffJ7oobgdzcbYgCB3vqmReCK6A37Dk1kds286H2HCSbnsXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228UpXqCv8Sx1KnKuibYK2GHkQ8wubMFo6JBBX8uzxCQTPNT55pF27qJ42iLWWQm3AhTsxWryMWM1KCZgf5m3H6r",
  "key1": "3okYE6rw5ZVxtFW53DQ3xu4sHb2FBMytWTDx9xB5NZ2JBNNbG6RJXSLH8bwoS9DeZ4GNgiu9SaNupyvEsaKdaEBd",
  "key2": "5pM1Rhv7z8yt1bd3cGqRe9rjTSDczknuR9SksLs2yg3dnS5nPAq548ZvJrEn4TkpfDqbKTGZG9GcHnfReJFjSgQt",
  "key3": "3PedN9bwdhF5tMhuSBkiCWrFUcjTeMBdakENEFB6pUjSgwHJogvzPFA4YxmsyPqvXkMd2HNXv19hoJQ8z7ewrDWU",
  "key4": "31GbCGJ7sEdWK82oHRhxyVNyC8LpNe6XNNEnEZpzaJjq2MHUGczdySRh6K3Fv4GJfGHvo9s88NCPvexyzTvBUKPo",
  "key5": "5YbhZfjPk22MnS5h4W6UoXt7xxfp85m4SFHWjoiU4yZNaJKwzqwhaQx6oUo6BVXi212xTXZKHViQz2ggqfr7NVD4",
  "key6": "4XBZ8CgVGhfQh5eGLqY5MExS6YXtJ3B22tzCYFoykNH3eZZM2m4pazQGmZc1QeQhi411dLVPoto7b3UrZy7Q5pko",
  "key7": "28onaG6xxANxe54Qk2gjwdiAorPfKYWQAdm14T3HLZcCWNeSEsG51DrfMfzU8sRAhDyJfufcRw4iuRy7FpwW8AJj",
  "key8": "4H5f2TZKoGW2cU7o9mJsgLzBgzEkEuUt5KmSJQuojAgeYhDSnTZH4dXvfK7UTNxYFPWNGUMFwBLdt7hmQjVPPYdC",
  "key9": "54KLGXvWtUz3R1vRNWh1XSTsZZyuPFxFxZ8XKcxzYWAihZaUPibDs9BXRwMQD2zc3NX5nK5qqsckWKEKH8u1EYNR",
  "key10": "4Y4dwUivHcCAeSZvAcpHSQmyXeXxFFW82sHmVzG9auT7ZkuxamVh734V3Y2jEgPJGkBVDvEvW4gk7dVpfbSaqymF",
  "key11": "GrQcKuKeLr9VnNUaCmG75MEJMjv9VpsFiMMyyqnRW39DMExeK8EmWY6Rb6BvTPz5CDzvcstSuZBXk6CYjsbwLth",
  "key12": "CWTSis5fhuZkkABg4m5xd1LCs2ukxhCNSPQS7X8DcQa6zEGqRNQRmyn4Yhrf8ry7x4gk2YH88DMFM3EUJkYdZTd",
  "key13": "4nRJTwc8mEBKag9kM4boZHGPQbjTxVwUnY6U9j3HqvvuJ787kDkuVK6QjXF4tkwNyBhWcgAtMHP37TvmQBHaMKF",
  "key14": "wmyjTvsRNHo69Aubnj9ZCy6JV48mbS9LBJ1Z6bFHcC15XFkytxqASgd58EfmcCFJB3r5WKfibC99uZzZ21PiTPn",
  "key15": "4M7vd2r5vwgP4PQA3S8NdXbXXweJBXpiv3n8fz1zZpqGMHVkHNXQVJZ2P6FegL5dozr5ps8fThG3moBPYbKh2aJw",
  "key16": "mTLMhjLbfB2n7viiZX6YSCqk5wa3vz66i6dLrksQX2cTh1qMN1kY9Qw4GHLZ33vxgkwGpTyKSvb4H1TxMTDGXAD",
  "key17": "3WLwjWTEcmYr8DYHPUNkqXcqebZzqq4Ws4UoiNCisKDWyQej5t1vvgJcZgKzDLagzEZqefN3nyitdhaSBSjgaUXh",
  "key18": "3NPGivAy9651YdBBVVgZZSkb3e4rqNoYLEVHW5XrGKBnSScWza1tDbPX1K6Tbt7NZ9jy7uhG1QgwKQTCLCtDhruh",
  "key19": "2H9U1XpbkMaMHHcEcvXqG4e3X8Ktm4akow7h6u8RJqf2pn71jz24pVd41eHhNqSy6hQFZ6vxHxwebmhMAUwZn49i",
  "key20": "3GuwL1XkpqXpqNLD96w5M4t1mDWuy1Ytat7KD5aG4EwFJ691AiyQZff7aNdFcqbV8SshDvaH3zYQAvPaiiohBGFM",
  "key21": "5yM1oYRje6yfUrcF1oe53ADZtdBnTuNKRhJLQuYT9zeY71uCznzbvy19Z26zizqfcgGMx4vmysYHT9k1bwZUcxVq",
  "key22": "5S4X9z45gRTBJgAkguBgaDsuoJMiX5ZDDPefoPpi43BQUfZJYkGZdGLRtaFT9gzapLdnYwfJn78k4F53FZZRmP8B",
  "key23": "3S7fC9ygvRtiUZtxB2tzLcnBuqARGbcVD4rHXWYjWq9a91UTAaCBfJTHSuQ8MH4QyUcU14bPMueBwfj51vv6ofCa",
  "key24": "5NUgCZbApmHQdSBAcAyrakjc2f8HttvD7DWdGLxoysyGzrBCBRnrrJVhunCjudt1MQKvUwywjUWME9v7s2MDqAhA",
  "key25": "3dRz339YmiRr8kJzPYxxpGjnyjXWTp3JfZTcukJiaR3BhNdr5RhpVkocz1YqfYRe112QcLueFYgrFwDvnkcSCS5C",
  "key26": "4x4cz4256UsfxJEwgmicQcirGJzqBkUz1kJVQd4mvMV9HidHqcoNQFugydmMGMUWUqMEv4hAQPj9jQZYbhPscR4m"
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

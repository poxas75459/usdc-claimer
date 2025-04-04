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
    "4YGVLqMB3YTsd914ZCctzqEyuDbdPzN4tTxPUe8MrKFw8gNbgV9SyP9gZYSYwf6P2FfvAKeRBH9rpnsksk1eH41e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44xvjfSzTDc7ednFmPAXPZ8eyVHkFvGV5E8KrYo6ufGq3Zu1gcyrQBCiTNRQFsisHUj4ee3wpUfu2SpcH6ftTRaQ",
  "key1": "58e1NEaiZQKrCfmxDw8QU9moSsMdJLWgwgDZAXAMBLA2CrtQfdxgTwt8aA2s7GRcBvtH1kcGbvizY9bNhGvBDBLB",
  "key2": "64pzdhpzG5dAEPGS4WK7mH8o1p9RgaPDm6YtQ39j6skbYThNyfYr2cLGDoAHGW9V5TV2dyQ84gzLY2mx6Dcroq52",
  "key3": "3NF3M6m9XXgPcxFHmJEuxv77xZ4VP2J95DJiCPMXpXNSB4dV7oKbXU7Pqv2pCik1Ps7btvDjwjpZtjc1yYyZSWX9",
  "key4": "2sAFmg64KtspjA7cMtYSRtR4YpHN5MJEZu93VwGmSQXR4QZxpjLcLC14mcGsvyhcmNn4So1JceEi83g9j8xCa5uq",
  "key5": "5iyHKwW9Di9wQdhpbZpqY8uQ72wc5VMSL69j9hW7r8ZvF9f96aU66q9o7PoVWaijtXmRmSexCaSBS76YPkNwJQfj",
  "key6": "4cBFEpqaSSkzZhdXgYUGkiWHy7io2G9kHrrbASfq5SXyL6P38iJpBzeNfi5Dhztg8cT4BYiUoH2VMp5UxBxFD7oM",
  "key7": "4YeEWpA2Zc7c6ZihUjErAcDWMq86To6WMr2dR7an8huLFVkJQksW2CW7vxixakh6rDXAM7BHiJjWiYf4jsKzVsN8",
  "key8": "4cqagyFUcLkYbMu5YsU8fdKrVVwynutyDpHGnoMTNv4ydUTiJ3JLctr7UErBhgBtCpzVJ6xHw7RQDA8A8LNMBgRr",
  "key9": "2WSp2zRcHSq2N45n7KRZjH3VxqUu7Wq6Mv9LZG1Ngmba6UrocMcXcYwo1QNkbXCYzTjUdBYxUvNk5idgRNuQnedS",
  "key10": "65ZZDCUwDaqz8gjBuD7A9SQXx5QcTPxvkVwLyQR5kUpS7BNeWypy9ySZzuUPgWRWki27NNt2FMt7rVRySyRdrQhP",
  "key11": "52ricmPywsWsfP5ydJnVs1CcQJ2NcP9ZtdxPRwTAtS3gFdKYAMyhANgoDT7EZdKBdksdnQ85DiWa4nVpN2mJzgMT",
  "key12": "5dgeWHAYXxErAk7BJWkwRk9PffxT6gqubQFsMUe4Nh22K4vTsZzyyZEHvG6HQT5zBw2Hkg8mAo72jaCqYUSsqWXL",
  "key13": "3XxNQdaj2S4TTYF1YGecDxpCzT9VHJ8S9Y5ksvmv2bHJnELw23DgD6JvdWJ6ipKb8QBTZv5GUmte8X7qgMzWH9ZQ",
  "key14": "4A969Z3hxTu2DK5ekpvXhLKD9rpH8tFbptjA3VbJtwpKEdFeYH8rSgwdajhzFGyocvpTXsxUm8L3jcPpPv1uKc6S",
  "key15": "3JLatjehqf3gM9ErJhWKiC5H6Yt64NpWoA8YnUdc6qSX4VVXjaiR7jysGMG22XcRk2khF3dr4kLnmW973nVQwEXe",
  "key16": "2iQQyZ61x5AViaZFDoA7QZTBeYFVurDPXa9LnHwjetMYtSt4hTkomS4KnPxzngsKMNNWyjJZkcNyk1EGQUxC3bcN",
  "key17": "4n9Kc9ktJsMkhhThRaJXzVAWouQ8Zhv2UD773FLNXoWaqgJM5GFZeutaSuro5WxBNHKfCpP4reCq2CaBYJW1DKBv",
  "key18": "37T8ZiDYAZndAPZhNu9RxSTybLMRAotc5Y23a8HdSkjDzegdFfDPbxYXRjVo9YMEFjR4rAgTGiSuRyouKsJr3vxt",
  "key19": "4m2hHBJw6uWzY1hXtD9o3A854EoBKQZaTZAESufzsurcdx2C1i7Vj1z1Dw2G5bxdMpFuYvVAXkX7ZhEG8H1RanAG",
  "key20": "3noeat37vNZYyHuBBPFtJ3u4XU9dYrt5Krn5aRCTEaNfHvi1EaTNQR9UKN5F13uMVC9nXLTiAGZ9mcgz1mc1o8Cf",
  "key21": "5QeL23bG2ykYLW9yM1hsaP7HU1N1QKvKQbAVmw7PVoNbkeiY7gvM5yyuozakxCSgNaAzAWPhAQVWdewEHXB9ZhyR",
  "key22": "5hHhpVZxyiu43yMZbcrFYk6oTbpn8KZdhQ1vEWce7Hp9QjDFb6ZgzYMTKhJgs3a2eSxDNQtSno6VQgh1zZ4KVqgs",
  "key23": "3qoR9j4A4BdVou4VKsB4kd1J7XwSFqp9ucoNHC7KGVgMBaMMnDVsgPxdbxG5eRdvwTevPRH4TVyLriBRnMiWFZXu",
  "key24": "2Y99eGFskMATSm2DP1Ubi8wjwdhq3gLZkCYGpiHJwxLH45WbhJ6i9tPmiu2jx5973L5e2VUv1gZUF2BqNK2pkHLr",
  "key25": "4NdNzwpdWvGUfyMgtXTquH36iPiff4SsDtKqxttAt8XnV4FKAFsM5oUrNo7wNsq9T12exPnvcwKdJ36XHvqAAyuW",
  "key26": "45AiS9jeRcowLLkrjwMry52Vg1Dk71gS8SbwoE9wHSDYCAFmzWYUQaH97ZPjFY4BQ183kmqjLgHXhsRgaP9s3ycr"
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

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
    "4wxrLMCZ2HCXprW3ZMpT6mMU9ps4gjkHpLNh5dH8uCjMhBXFF1oaQtpKZpzrS3yMh1woe5zY4rZ2L8MmgfJNcnog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACPuPwLRHn3wAcUbEC3db5HAneiqhyEGJxk5mnjyp7c9uu2f4iyeeEM6fLSgtMQUbt1voNFHakwT37ah7T193Hh",
  "key1": "3L1hgtgCUJNDLA7881HQVZwzTES7GnhLV6Snqn7xYhp1e9yZLJ4WA4DGw49gQ5AarPhAn9Awrw2RzshnFoUcQ2cA",
  "key2": "5bC6U5QEmMayynyFrRrb29DUxYAwhQTzt9pioQo4ELC6GehJfY1JsjKmXscLx2xQLskomwZj1RGtKjqFN35bPKH4",
  "key3": "5NV6fKqJjmW84769h5CMNUZTDBcD1Qh5SFbvRtpC6sD4EoMsjifbBU2JcUZfLckVpamj7JYMUYZFCajYLV5iWx29",
  "key4": "2jX24pmxVHuVZ4xxg48xRZj6vTytgZovoCGnnDdvYXVYoaom1ssTMZGYpbxVLYBunyj2ALtrgN5oChmytbudexab",
  "key5": "4NaQxX3DkgvHJLZpQgsYA9WG4zN9nLVJYeW8cJtw3GMwm3eGgBVn85Pcd5q9gMv8PaEVkeQtL3QQSYm69orLJgz1",
  "key6": "3zUKZjNv55H9rybF1s3mxNJa2rA5doo5Tuz1zt3NJ8wvmL67ahbnAC2shskcxD2achzbSqLgQTS54DD5wZfkUjrY",
  "key7": "2Cfs6TKiBYuVzREFEMyEfQVcDi73gYiua6Mi2p8ZFr2ZPCjzVB1CEUz79UUfQN3qr9rnmKQLAkPokkGLGy5fKCBQ",
  "key8": "jtuPq3DfGpWVSQLUFa147csjSpB1iByHyCpPvT2J29x9AEsJ4UvBhXMc68QDc1udcbdsWFR8yEpKex5sNZR5e6f",
  "key9": "4ZGqPpkdHSf8d3jH1bpoJGzJh17VCy4jZAqC7j5Ue8SjYPEcX2gDH89mqGqR8Cdmr3fYeAPFYADhMd47LgMqoQtz",
  "key10": "2LPQMPZjr9VbyVbzeF3REQYLvBXAHK4itVseNtGUfRU2YKcNAhAkWPGXKHYq75umZB5HHrKWsVqLaRAmASuz3U1n",
  "key11": "3ZnyxioBXPZVyGr1gbrpvKDKoNiDPzYVRg85jgmgf9ZD915REUE6HqRvQQztajxDWT5yx9okFBXv4r7JFEYmaLHN",
  "key12": "4hzHEkdr3UGJ9QUVdkGuqEAoC1ZFvQ8cvkdRzhGWYPQCRZk4XuvNx1RdckZkNbELQwVPbT7qiai3kLfQGctJ9QzA",
  "key13": "wx8UyW7SVXoymZWLY31BYmMnxTeDSPyRdA3ieG1jANBoTuoKLDqzePSWwDp2KFxWDauh95suGtC9XskhrVf26FZ",
  "key14": "QhJVYvUd7HbbFsTwdUt3NHn3x3WzUAwfiCAkUVXprCU9AA3nHSLeFnYNQfEZqaqcAtBjkBpBVQPY89VCpdpGHoX",
  "key15": "2sadxwDFUGz7gnowdcdcvP67qX9BPQycZ3576eq33Fd5es6y7T5YgqwwMg7rhq34CJ3W3kNrQu3Veq8nZ8AFQD5A",
  "key16": "2BSdc6YE463WfFtVV774d9ZToCg6uzEotzZALvRxnUHUWF7jxhkKSHMR7fRmKSSFjdEGPjtsedWh3wcRKqEEL9BF",
  "key17": "5cd1zPrmikArPf8D75pPDDKBfrF7qkVTCLf4qMdsSau8pL2hoeW3FsQ8q4jUMu6AkJHQVeH3jBMR5afgLjM6417E",
  "key18": "4oLC8XndDxYNXPUwUVU27HSk9W9j9k6gKmsUEP8ZP1GN6XaCnizXfMnbreE68qkC13ruVrgJE5jHnKW2nfmNch8a",
  "key19": "3eiT8LUGWsYUJmBEXQbqqepA9cxdtRSAFoCoJrCmo3cb7FN48oxBgqGVg8DGarK9w2Q2kAFNJCSaJ55zaeKQHCyb",
  "key20": "5FohSUgSv1xBvat464oAoLZLVUW16mpTWKLa5xKRmjuXa5QQtQBKoceaxX8yvminhbNtrY1d22BbvZAxGV7W1z2Q",
  "key21": "3Qqf4HBKXBPthK1E7G7JU5aqUsJhgfFmq5F583mVpxhwxfduj2oZ1Q7AN2V6c7ZgHyjzQ2JNfWZcDi4ZQkz5WD1K",
  "key22": "2Sp1zH5w6KR74ZZxKWUpY9uxFx2KM1cvNvCjSUqWYxfeBcD1585tS8fgPNCFAYwGUw5tFongh7ezNECTHFGeGTwM",
  "key23": "5Ji6WXkzf4R3ZjWeyYUuwsgpKwKvJX2pGu8xtnKJ21MiZjdpLsJHZQ7g2gCosVWxaKF5kZrE5KD39XzsWa4LSjBY",
  "key24": "5NciAtUVJZ3FUrYqsRBwBujbhvRxferuZL4SLYtcTDDMUw4s4iiyLjCx9poQrcLWAUWe9LqyrB67KGn3gEokDNza",
  "key25": "68xBkC7Sh2Pj1EhSHC2oTqgAhS6zy5aG3ffvCBYacdoy3UF1gtXzbcauc64uKSdBZoXBL2GnmfavaQopoBuwMrh",
  "key26": "4h6kAkzNUSdWNvdtv1EmUHLhM5gZM33yZdeqV4xSpgWzHVF9cjSsL7PhbQzsWQGEfxmJXFx9tCE1rsv7xK7AMybb",
  "key27": "4jHEvoNo9LtD5zx8ikwgiyARVvWcg3Shzuavs4wJZpJWb5GZYtC8BNQzn13DbVc1Nzb818QhCSKcYbLi5LPNyVQ9",
  "key28": "65Vq6TPKMCzWGuAFqPqAccQVhJS1Hff7cZK3V3SyDxyR1khrpUZwCrZpAkf4TqBEzCpXUh8zcWfNqN7QSciMyrG5",
  "key29": "3VauC4hvFmdg4STn5aS3cvtX6NsFjQGswxd5ffbncWQLSpn91NMvb6hsXhEAjxQcrsszvr8va9WW88HuQPa4VZNY",
  "key30": "2TgzAReV9nctbu55DZ3JZCaC11FozHhcM6B1WorRhNr45NLdQPmSNQNLwGfiuePoiqAAXcQTKKyvZ8H1XHfacj45",
  "key31": "VXchGBwgEnYR9Wvh2uSxQHkKV2DyXJGaDXLKxg4zH57UwsXGjsqfHUuAyzx6L9JeAKd3rNpJJbuyuEdPoD3HQLm",
  "key32": "iTu38WiYNAm16kmBTQV8NBu6B8dw4tNnAqEuguBFHwmAz9KhnxuuEvg7DauVVWQC2ngUFBAvKoe171G876GCqnL",
  "key33": "5EWmXeFDo83uJpRbqhSt5eSxDscQFji5uaE7J3j1uMbXefU4MeRkZoxeFHinXkPJGcitLX2dNqTZ9zRKKp85PtJJ",
  "key34": "xzqNMUH2QGjmf9esXZSQrm18hB49fpJAkh6ebmU3gtjLr7nb4KuNbNd3jnrzhkU5tpsDnwPFpdqg7bkzmbG8AJq",
  "key35": "5wdF8c1SZ85r96ry74WS7N5nnGKZsiCuGXPZumTPEoTPwEfaotPfwpZC4QZJYXPusyC6xKyH14mhgipvM6ZTeWPc",
  "key36": "62ocCEJPYFNQ3BoLoNwUwZtXFqqdkAMDF8nLJp9pn2bWY1XoPnYcfyrajvs9tdssA86f8KsBVmBBG5hzktFyK8v8",
  "key37": "4VqyQJr7HNkoQZk4jmFC3LRsvaVNi9QqMPcdYC1QrxUjswaqnoznWnBumpfYSRcpxA8a96FA9hk4yLSdGrku5yQF",
  "key38": "SBp6eMkhKQfmBsSnfTYonfguxFa374RbdY5xQazFNYLCvdkLcZsHvnaztMQm5fFnjUiXttbTqSHiZq7xBdTGVES",
  "key39": "KGfEMYFVwwdMKU27kBW5XmMQoqNFqmcArAup8nhwmHUWv2SeQDfDB5KZVawWAVeURpd3tK2TFRqqsjtd4qYjEyX",
  "key40": "5Vomek5V2cwgRcGrJvECNy5VMy5qsiojTxj84Ddq7hbQ6iryqfzomFXNxNMn6GcJ3t8CgL5eoyT1uLesU1Ms9icc"
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

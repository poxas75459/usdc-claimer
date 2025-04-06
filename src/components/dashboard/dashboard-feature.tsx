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
    "4L9C4AVDrsS8cX5gQd1QtSc69qR8ZYViNAa9QMsZqWuha2Tqk4yCUomGwrVbQAQN9SSSzFLxHjKV6MmDN2wKzohu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQPMaABEQV6QC9oZ1ZRVeZcKSEpVneB9xwqzMp5ouWF9s9r7pc98Ww9wn8ccDFaybkHnLnt9qD7WcxCVPhqafp2",
  "key1": "4FDwZEqneSCAHYH347f26DKh7muHT866CmB7nnUjkP7kshS8G4MP6WvEA91Kd4sFnMET7r6STFRXNiEBG5Rcog8p",
  "key2": "5ANpkKYi2WyrCpNgmwRgFNZM8j26BmmJ9i3V6dp4jCgawP78AUDxTkiJ64mSUfHvXWP29QLrho2cb6XRZGPp4aVG",
  "key3": "4uy5xADWX2nSRzURiPdu7JeMWfLyDFiWymVcWtGKxAzZSvjksDXTZz8Uc8hXPEJxvhcwGUcjz5LUT2maN5y2BSsu",
  "key4": "4rB4mnqByxoHMzrsMUmaXUDKNJftQoaBkkAirQaz3hJwSkruYpcoR7XQBDoiqAESJJErMFm45cuvetQuZCTCw3go",
  "key5": "1qdRj5zTvNt44VVKqUHmqySpjuyqkQUcoYsfiayddpDXs9LCAz31vcdzqW4yzLwmNWx5DVtbKs3nCQh8U58zZDF",
  "key6": "3Q5YXewsH62u6v49KXoFvTCbAZq16MJoq8xsUHSJTqMH5XMBES1epSZRxaVDiaam86LA61Lw2nTVHFd5gdHbjCXs",
  "key7": "tA1FDofXxMQ8pVVcM5rkRVUbJpBBTET9VkF6GRuoHNzg9rCHpNrC52MmWaqNta83JHv75nidpAMNweaFohatmgP",
  "key8": "5xAZYBBYCFxqopMBxXXSAhPD228opVZGLg86otDLZoiRC2ejhBtVwxTiW3fMwfmR3pw2xpVNWPG6RUjn3JwWaYVG",
  "key9": "2CZw9cvGfuhApU9oe6mPF3whRLwkjDNriT4xUsRU2Y6BNLfJPodwo8TTn6MnWhGZpgB67dr65Ucp26nFRUaYNecJ",
  "key10": "3fAKi1evvcN2Scn29Qjq1ZADk9At5o6XprW1FDK1CK83HqDcFU4MmG1u6ayMo4beEJvB8rcN3Lz5vM5HfgM4GHnJ",
  "key11": "5t4J61r11eqw792zj2xfnEfGEBoYdsJQpyV8Kr3s3HEM8px5SoHYqQsz9rLC9r9arrsq5F72FjGgjarBGied8gmi",
  "key12": "S3RH9a6EgWVBZpPDNsv4KKxuJKGKxBTGNsmkccpRH2eKn9ugrjqYGVdXV7HAFaKFfsDrXzRanK7Mn9dWMzWga36",
  "key13": "JGeF9FVU4NqWx9aURLsmzvNBR5zEysqvx5M2uHMGHQdQALbfkXa6BQ4TUsFdaeaybfUaWWppfoKfh5VtrjDyxXT",
  "key14": "4mZmPspqx7o1NAbHmPor1nDPiKjsdTAD82LaaezR9aibkrtc3fmfySEksLTTbRAyQaMV1M5WLprJTxPK4V4ferKs",
  "key15": "4dEaZ8GZUKkbkbNEBWS2VkJ79znXt676iXAB6Xko8nDr5vCboVA7JoJfYbc18M9NUVwJYkDwkxT5rsaZXFVp2kXh",
  "key16": "2QC3ZXs7qBTa4Q32SoNLAJwRMWtX2Gtd8X2sCSKTpuutsR9UxfEYzft8yg6pfdC2HUDzReCKLPPrthP5Va7JGeqj",
  "key17": "4CDaGUSp6Ws3iMdxbhG15jp54P2VJzGdwGLU78mr72irb8rufKVgsXyNyrMuobqGtXcdaoZiTXyrUWVzz9q4pbf",
  "key18": "4FqEyydZJ1ELWgcQVeF1ipDm9J6zC7T639ubA7FFVk81bHiZAKMYaCyzcFT8RajsSycNXhAJuGJNvkf4bMCNXxdd",
  "key19": "x4drgqo48MybCzp3AarxiXyLWR5E9KZzMq9HTJBjsunJpehqYeoNSNwheGBTgqRY6uuvo1ipw6TiAfJMtV42pKS",
  "key20": "454wwTosMcm5PrT1AP1oepLuHuRYN2XrhPJgbJ8qYVN2aAsrQo7ncdTAfu8jjJnqvVSE8tq8tzSUM8zhbcj5EQgD",
  "key21": "4Lu5FQFDyqpLuDb5w6qnCoZPKp3sVBDvZKWjbzihw75JTgAuPmgb1j1eQpCLSYSzVaJxFjQShdi8kfWrMSKTz8eY",
  "key22": "5mp7Pr7LVwBRgAGRrdifNdZvJhpE8ZEGRdhcSJSCN19n9SpeH8h1keGtS5V4vYzyfSj8ttbwivYttki9k2V3bUTV",
  "key23": "zM51cFRKrz3fL42zPWWtsY5SJ9Vsw3rhVmtma46mbXTjFR6gsMH31R6eZ9n7tEC9aSroqkz6EDuFiunvDoAFZKc",
  "key24": "Sx86iSED52ddraGDHYju9zhd7KhjDoxCd5JYumtx8dxoVYq1Y52zZVVdqijyBBqW6Bcw672xgBmDFabFGgfMqwc",
  "key25": "4SQnZwd91qh8LP3czSinpBLw7179SwX9iyq8xGKQW3ki7oU6fmzSv1uKBbQ4s4NX7edDJsmX8TFmbrEy5oTgGhNT",
  "key26": "4i85o5M2aBdrCVHZEAZxpw2VKJKmcByGW7mzMLK7bPxtTpf3QF9D3GtXqLnrrb6MDwjLRFKYiTBAhMznmgdgwn7k",
  "key27": "4WeETbMEW1TQ24LRvHJ17wdmWe5hxh3AT2GyTuK3DMdxLA2hZ6gHcCRh7DZeFWZS9LhJTW1JbAwLykgZHWzKFdMg",
  "key28": "5Wcq2vtqWvLBhkU4hS8KPur95jyVUoK4S64TJXL24Fv8ZoFHpo3v1E9rgTASqqqZV1bcmAxAQZge54Pn3QgVsSgA"
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

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
    "LfAtgsebe4SnBULiyz4xzYez5BCvfdruSBAPCTnvGXcNDeHMy7ppdqk9aEhu181h52nPE31XFuf4Mo6CHShUBVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bavi3KPxhspHJPm3uh3iUdjuL46v38wjhBbEYg7QTNWF3pUwKVqv9k1ZCkFu25wuqkKKHwKgNGp6zx6QbLnx88M",
  "key1": "4ziKMi6vK3zHtsZctxo5yo1AdyCmg5yfpzN29X3EMeKtYa9FnxGJBLp7HZ1uU2g5apLsjSpgsyzL2LNPCViPueLJ",
  "key2": "62b4mkiQX2dHKqG1TsJiKMR1hk3k9ZHxffiuNAtqAy8z4vTPNUGUANZWm7PUdZLP6qeW6fJfuQp4SX3vKMxN321k",
  "key3": "5srdYdnnanEu56NTJV2mLwdbG8ccvVnaW2yx4aq1eCdoM9w3u1NvBRiuuvCmqx4k6UGMTn4uPBLDyiTMbBgWG1j5",
  "key4": "2VkiwwyLZnGUx27Bs4xFD7b65rMu9PbFyg8p4ZdQpCZTFocKPLFca71SKKC1HV3rBsEs5MawAERdwbo1qsRoUk6F",
  "key5": "hTEzurMgu4112BdwsSxXLKoGNMe8LyTv4vVkyfqLggJHwAhTHDAHG93CV6oNBTZ1wPZ9aPYtZpUvypd5cxLpqwF",
  "key6": "5L9fbMf7ybAvPMnvPFeDQDj67qRk1T7wmfFudueRcZzDB49dg6h9LokCWq9rX1fUn4VxCjfGrruXRs7x2zCf1Ep8",
  "key7": "TiU1Epomxdcx4gxN9Td3DSCvTaeLYH5NKtGaiWZF5nk5M18z8BCZ6maWErW1WjJ1Em1SmC66NH5dHzx7pRvkT3N",
  "key8": "nmCNDHn7s6PXPKczJb8kKpWobcSXXqHPBY3JK3YWUoc6XkvnQ9WjimhCQiqhhwKac1SDs19mCvL5YJqzXCC643i",
  "key9": "4r2uPHw8ThFLF6HDCtfCHuZqfiq729SJk7DAgkuq8MkdY9V87ZahhYbkfEHznddVf3jaAPBJVouPy5R3ypZ1ivK7",
  "key10": "Z34mQVUm6LUttawHunjiyLHrUyc89kiZk7SdpQyMFHKNerhBhWGxeVzyiSgvjJ3Cs9AP87jVxs3LQA7eodWpBCE",
  "key11": "XEZNKJmfRPqQWcxgiMPLWZDzWvFmtNyBmGKTjVpYXN6gHC6sg7JZEat2fcQsgtgqt9uS8YMB32zYVTyvKY2uHZW",
  "key12": "2JgcV9WGi3KHmshytgLMY7ttS64Na2KR6x9kE1LeckmCXhx5YmU7LKwCpVXMkJMRiquq3xwVzud1XdK49uDeUoAQ",
  "key13": "3oX18o5w4W1bDbBr7TKf94U3Cm1vwLXRmXu6RzZUt6K3kbHpyBF28cjmmM8bZR8qJyeamCm64K52i3sqypvDP9fX",
  "key14": "DrEm7yDw6NqrC5weFfyhQSGH4XjdskGiVvx8KirApaDY5L2n2YEB6JakABEprdfibZ9vbCfR3teP5YckMMb2Hyi",
  "key15": "5CKT9HjdwPpPsQFLa8N6sGPHrRsDVMhGUz9cKRRnVUCqDD7t6KqUvrPEeGHemDrrXFD732PCK5QLXYhxVmSbDydA",
  "key16": "FubQnnibaEHkL5jJz9Mukr7gp6RypbGY8HZQN7t4mrYbDQnhTgrGci64eHQG7jDbrnyvPztV4xkg9YdSdCgYCLu",
  "key17": "sXtxqpUpqoUuhCa8nqP16vBHgEgNJ3JdxsaeqtFvDmiMWDhrjyksWNT3Xb1nYrAyJfYMeaeWRFrhBKTBi5XoZH2",
  "key18": "2eeSXtnnRkqVTxwCceyrpV3LTvLVt6x3CY4VDaEeHqhPrE9h5fzESr8kmWXsdRghwFYBJm3cwbRTFGvdKcTZpTQ9",
  "key19": "5q8C4FRf36TV8XyxL3ZjExQ3ZEjKrmrqAuu9UF5JwAb9BMzye9keaEUEh9caG4rGgPXyk7F9dE2aHyznFG6m8uQ2",
  "key20": "2ghycVBgcB2DUkQyY4r52595G2BurdCwAzz7VVZr7smjZdETQZe7QLAiUMs57ngDksR9SvN4rJQtdShySbshHWGP",
  "key21": "3SQKyALfodfSNXWtvQcyH1fcjb8gLtXCjZKEiC3Xtuedpifofjo4XrdKFRG6EHAxtpiaMxW112esrMcDwrBm2PNP",
  "key22": "3AR8Ti6LwDiMXqTWvEFYpekT8kjaNVEGHEoYfujPbUCNaJpR3jSZw2ZsBJMfcEgb5va6fUm19yJ1dc2KNqS2odjg",
  "key23": "d73NqGuy6bUwbHFcPWr2WH3Gb4xzMtAq95mmjQ7272zxdNqAmLJFmWWCqAhwLyYMLrPfKQGDziCLEsGEsWwgYhs",
  "key24": "AdQphpLWAL2LkPNA9YB8ke3oK9DRDz5nzJiMpnNnCfuEDnCk1HdTa5EHzF4weJqYPMqcC8KWichAg8zKmFs6qQd",
  "key25": "387Nm8Tq7aMapYuiZcq5WQGBimG9cimD2GJaebUAsyUqzemU3rf8pAtG1fUhkfu7s4nayiZUeDGAJX5NXG9Swao9",
  "key26": "3Tn1NoYRQ5VynGu9dQypCPqMnvpjFMzUEeAh8VhvFUXq2K6mK7jkFjpBCZSoawG55LqX4SXvGfvHrKvhWMTz68Wa",
  "key27": "3dQNjsyWFREZ4psjz6y4m1WyRnD6ze1qBNkGgp1B4JVX7daAEg3eQtzTYUfkiffQiVmLoJHPiTUgwQ7m7vWfL2h5",
  "key28": "3CjgTU6wdg96kgkcGpHbFRZDRgeuC1v7ABNTNesaf2yLC2sds4pK6dX1zYyd52wEsRK8MM41qZpfhkMeMc62tZH4",
  "key29": "4mJjRTTLfrWq93LgtXFQaAGJdQfW3BXnTSKAf2fAS543RKLVgbeDjTTh6KytA618XcNYxqSznivbg2me4b4DdtBn",
  "key30": "3XLFS9QtdAv3oSBKiCS7xyJMMg8xwkZYNhv6PAiYKVFhdgk6S69paDN2VmAqvVR5BmGLnV8hLT4HuW1TGXqhunsK",
  "key31": "3nn2y8CT8UhR3S8rrkRU7niFQWqwUYM8zFVLqjcAmzxuHCM27mkz1napm5Eqp4cXJgtMHHgsPH6rE1V8aNHtXu7v",
  "key32": "25CQ4WNLHLo6EsThoeBxDqvKLfW18hL4FwgG5mhkb82DUcJ1uzsnqkzsC7zi9pLVzAbHimkXzipTdDMTx5CGLFX3",
  "key33": "4CMeKSdx9rQpPb1JkpccUbpkdSBC1eEog7k9ciM2qQzjcPYxQDPHgwaFcSvuiNzveaGDcQ3WWDpZoeBdDkqqqTrq",
  "key34": "4Xpfm5yNXJ5E8yVoFPoYSo8ADfamR5oqCJBw16gTpfGiUVD6r5jzvWaCxhVBD1iwy5BKN3vKnBG9trf8ya1Kk7ME",
  "key35": "Q3cP5Fd2PCFYzSWw6guowWzWyZe8jXdif42JrVDWpgWe6JooSXKGPpp2kCkrb4SFxrDeU7TL8ExKY6XHGMXr5Lb"
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

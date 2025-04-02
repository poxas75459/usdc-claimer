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
    "4bD6QGVNTMQ12tUV85SZRG7QXeyyXZHu2LVKGcykpvMgtyYW8kHpX5bUKD6Q2reCksQkV61zezmwdYGxZKHuXVkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSYpAtUTcUxF5WCsr4ahh4e7oups1GodKATewmvXFi9pQqfJRXxD8dj7WnKFA53VasHBPe78bciMrfHUhD8RgvV",
  "key1": "2QFL56Di8gQoJ1HrCfAT7DdtZvjZyc6w5ZgBrJzQdHdJVMxsZTFf1ptMtTP2m8Kpst4RLf57AYBXvCQbMUEt3Rxi",
  "key2": "H5BDk5fD4zuXdtTGRXmTyJYHfgqogDv9Gd6Mrz2HFwD3A84PNxdRk8yzzgqJ5aXoJXyRfHFpJaXNKvw1TPvmjrf",
  "key3": "2ta7NwMsqzC3NrHuVxz6UqLecLWoeEd7kXrGkecKuT7MbnghHBhjUAgoajCXWs3GEf949iBj5v8Jhxzins21J4nj",
  "key4": "3Ei3ZAfR8YMn1e4z9BUjxw8Pv66ochiQ5h9zWa9xCCmaZUtHQW8nKYnLf5crGvyEm4zt9aNMxVkTiNHFXaBHTLv8",
  "key5": "66MLhmGCprGfVd7vXJzYrbJ7QFDjaYSPsqY2XRiY6WVLRBSKzithxxiBxk51WVJ9gfpNZRqdnvEzTTTqaPLRfSg",
  "key6": "4jL6WPgM8FHjTqFjMZahMzAVSTMcEte5Vno3AGPyjfqtsVBzA1MTRGRmD942tp7pMJEReZnGJ27R9ToG35BVyZLc",
  "key7": "57LBDKqNHXwPwd6iJCdsA9AVy7LW8WkdAwJr1wL2xdfo7nVB92cQkLjZa3VwEeR3EkLJswtWzCFbdoG8CnWZEu1T",
  "key8": "BLxtbkZ79rUq3AVb2s7F47iaMJxZLrgAb37vurm911e7wWut2MrnUSywdSuXiTe5F1dXRbNkJdT13pmwuweYJS9",
  "key9": "4QeNKCzVxTovaBQ9bm61oKxnxeEGeAKHqhgb5XUHjtiT1g9MXa2vqzeBJGE81jPDXJJj5sj1WgSuEUThM9xgQJ7n",
  "key10": "623yFyFgA5tiTsophG3uXWBNPE8oBSoPGp3pWc54ymarpEk8qQ7HdrmZYKJtdmcEPbqtdtAzGKqyXfT8cmtHZc8q",
  "key11": "2k9bgXgd4UMYacuMgkwa4hwPFyPopU2aSmsuEWfDX8YrGebzPuQeRhDV34gpkX2jU5VCR25LHfMfakfQgABrFumd",
  "key12": "5PKSMhsF6VWn646GbL7KKpABBF49jENsgJPGfatWcgrMDndA7JFhjGjj6LeFgqcJV4wjffPk3cig2TSNSTsB2Bit",
  "key13": "bn8BQayxFxn4mS14t5p3w6ovHCSmqpvVNFS4MTJrLNKBmFXqRTCWV3KbVmx5Hy6BpHK9L7Db8YTGYPavoimxioP",
  "key14": "2LJh1ze8AKY53trjPV2mQ3HfBogPLBHraJRZyfuBP1aiCEaoK5ZtVp26aJwdufhrzcJaz1cQcnrnNMuDXn7KoDiP",
  "key15": "34CTvfjHdwqEsgAinsQeohbcxAjgYmb7UjS2KqYYqEJBWKrYZWW8fx1MQYjuGjQSTMeZVzChTjEy1cwFd9gmq5iP",
  "key16": "5gVsmdwSh7FPd2d9D4Hn8cKWL6Z954x7Ak7LDFhB9jQYxrNFbGt4AKhYwwcaDC7rqxqQLXhGa5t64bN4CbN2wr9w",
  "key17": "5arDsFZLR8aZoSzvy15eYYnrU237fSH11kRMvBfFrgCMnqdGjk5bWDQw6E51FAydjHth1y2T4ezpTZ3vALPQPKiR",
  "key18": "2Fhtgere6hcWwiowsQEUwrnujDvhYf97vsaiFaGDENYfnKhTBLFVJxNczdYxL4Lz7yUkJoeLmDUz1znuWgujRXct",
  "key19": "3Jg9WEFtTawA292pQpF5MpGHAxgYdya9YGYbqbi5BfbWXYdxML2QF2i9ke7Cy5UMzMr5iJMaFeH5zTq9fhFwuZQp",
  "key20": "2k5dRPjRqADndiALsPDwpcsLp7WbiHRQAFwrS91WLg3vuFX2TSbFvtegKNpp45a64YCQVWBNhJPyyg9yZg6GUDcy",
  "key21": "gUGASc52STbc4GQL9EwosgkAv87qZgYwg2QJWemPYu5Mo4L6TTGPUDs3x3KCBULnzq85L8rAD9xZtHdZ4Eb4tcu",
  "key22": "3YC6gWjpH33VuS3tVt1XwxAfXBm6KPX8qUbYouCtsYgRycd63qKK36L1tNhZEr8g7XnTdMVXMC4fAPPrw6wq9f4H",
  "key23": "21m2UsZUyc4JqjwuyyWCuCEvh87eHcF4bQrJjpAwCvNGP91ivaJc1XYaaHTJZzE6hQrxyU2tm6p3D1bm139fgwGT",
  "key24": "4zcFkYbsm1bYirpurRxnKDfHugLcKTMXZEgk6h1PsLoatfLHH1WWRHTkq5D2XnubGTCmQt6rp8zw2qDmWsNSLupW",
  "key25": "4u1BMcrBVVepeTZFAdMYf1tXFjQFCMZX4TTT4z2fgmrN9fyWwq5eCe4uLxNKApmC4RckEWy7579mvLiGYSbBYsmB",
  "key26": "3vgPLGD1XgNxwJMEWWvA1dBrZ5muW5e2CnkSAvSZ5GvfepVHGFTh6BM32gJqHEx2iAhVLeCfxBat3EJWeKsMrz8V",
  "key27": "2jJ77w5CTms63t1Vgf2Camfg4djGwHbYQv7aCtL7T99etH83wy8H8Q5X8P9NP5Q3AcD3eE6px7XrGgoeatN3STn6",
  "key28": "61JpFnQjCuXTAKT287ZJd8LQbW7ziY2UHWaUZDeQAdsnuJjaznP1M3Q2kDQptbQwaApY2xWRzviVBCnA33d1iVp5",
  "key29": "38h9q2eCvQVZu7HwmFV5vgrckizRosEkuEnZehL2KDbwcfUebvpKir8nw1jUFRpihGmCCasBwGzXGC6bJCq2BtDM",
  "key30": "CjTwZQ5pCnJZWqT9Sz6jgb6zEp1RiXmQJWAcBFm1uFahP1cQN1u15FTMT4vHg2G6ZcavNcYUSjPHRu33ajp77Hr",
  "key31": "1fWfjAn5BbvDx3tyC3oj9jVQGeT18Qauw9iQY3sU3HaJZdKBUDjDhEa2kNnjecUHU5ctJcfFAmEcZtDo3Z3QJZW",
  "key32": "5kWnK87gqDdzKmxv5Sp5atCzPTjvg3uo6DnxWCTr9bBTKrck2KUSoz3a56WkKySJjGhTnoZKXfoq1f5q6hSom3Xk"
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

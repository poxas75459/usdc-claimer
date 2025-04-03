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
    "53H391sWhSSaXDLGeWaDyshRbFx436MBxhGbEqxPz66MZwGyNAEYCAwYevgrdd2dehiKBJhhBNamuReNL58H78kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmSNup4ZiGt2QTvEqVykup4YYgBtq8mCjX9mpDyZy2RP8nneSHmAFXwSxaVn5kooUpz5nNByTmSJdo4S2NDPFCk",
  "key1": "62u6QLJ8FxQoCMYhV86Ldhi3y8KQLFxZN3g9akcby8EurwrsxPWeW4Amf2GGsXLzLhovDJC9PSLggLAQFCSnJU9n",
  "key2": "5WekKdYyW2hiwskgBr4ZF2zR7ByUQVXpp2Qostvfno2TRqwzgEghPeyDMMErXHQt1iYC2WQS3RWQ5TaKRHxTFoER",
  "key3": "4hEHtS48VkWmrpbrHzqAh1LanqHd8WbNJYBLFd7BT22AiQKngu8fEnF3qS5cV6Z6BuKtUVZaBFyvoJMZjG4SHTA1",
  "key4": "s5ASSCG6VjbtzRcLxCS1ciahuHf6D8hU25XPeLxLPmgB84CToEsEHwPFzMRNNYZm7TGUqDvYDhxNkpCX3553XPh",
  "key5": "259BrfX87DsRnRSDrdfDCpSTS7GyckeYiQkRnGgSdesGEUCEMCEy9akQK4oTUXWeAw6xDoLpe3Xucyd1gxiNPbbE",
  "key6": "23o6LW9eLodRDueLGP2veYHpGPYepLUegbfEHtHFybYbULhZepnxULMgrws6YZxzNunBKFJLXwNB7XhaNa3G6qBa",
  "key7": "2kNdKXDtoqk1AGGNix7PG6GEGpFTxXjSFLerxHQXvVS1EMNyb2B78FjqcjjhzhiYc63RGnEyBRZv967SKaY2p4gW",
  "key8": "2Q2BeMLzFmjbdNx2tzdWPzFUBBWdyiWRpFKT3eymTFyPYyFSGKTZWNxHVoiH7JWBFP2bHhbZKZnjupL8XqWq84q4",
  "key9": "4fJyTErvm51g42j86w1GM849wzMAz8ugw9DMz9v2hBQLkqdiBFfeKZVNXs9K6RcYV1p21FsqV5pE2nU2WTHmvc7F",
  "key10": "4pXZp5LXuUXus6KynV6gdL312aatKHj5xT2SEpu6LbijHotW396k7aLAugbR8PpzcyJXji6y6YoRLkHeA7Q4rBcv",
  "key11": "51moyp5nqXhbgvr1pzYy36KAHetKBYg6LDanu4s1ZJsaWBNwGgMiq6eAU39PMxYMsNTsEyVjZsTmgqbihSUeJofk",
  "key12": "421efPmqWjWDcUFdr3F8GUMpGh8o7DuowV8yfRuC7yVSLYQ7Nga1KWrnFjQ8cRMzzoWxG6VwCCYL7tcdy6Q3KGFa",
  "key13": "A1a1UvfQ3UHcZKihLYkTy5Jg2qVRBZSefKsJGRu4dpqhfpMDrFNjQSphmqDeCefSaPodZY2oWHBqppR3TjbWDU9",
  "key14": "buBDxwgR6PPbaKgCuZMKAfcfyy5RSrzvvB9fihQRGj1aR7nMVBMUuB1EENBjcsRR2AYqt7Y6BfTxePHcvuTbu5W",
  "key15": "28auphT3MeNGeZ4Cp8WfhotBxGLguxAYEBGS4aYutzNM8n6ZYssPCL4hnHP61dbmQhnvo1mnZPQH5oEukkkvUDV3",
  "key16": "5q2ayBbWog4nJpSqeYBGp1Hqa2eVkedqJJspo1N447hpUDEbRiwEFrZhC9TKDoNiNtvin4Tp5ue4UuafxhpKSJp8",
  "key17": "fhdBXQh6J9wYyeMdgPBLeJHDRvwp8n3ELwdE1PCmKjEbRRTN5asWTgP7tTyChaq63BnVddQGfwoEmNLKbq9Mp68",
  "key18": "vJBs1H2UkBLH7ViSMrVyPd31Cm8afnSmHsnPxr47Cohzyw4M1yREkAnwEMrD5DzVoPkiGn76QGzGtwTeTBjfbFB",
  "key19": "3LMTko3u2sWgYYWZh78oC1cZ5LyV9SYAh8DuDFDpcDeizwCqbrpSd3dDkJuCdCpVUhiF324ReXJ6H7CURgT8kirG",
  "key20": "4qVgVgGuUXzRmLqSuJMV9KPc81pWNwb24aBjStuCNUZPeMedgaPSjAL4ZHDfnJ6PX6a8Nkk7ZZQAQkH24np65hW6",
  "key21": "4v64z7WCKQMKbf8Proj6WdPByuJFTwGuCLiBEhV4nN7r8cQQRSRKQBELKQRu6m2aqRyvQY5pBHYQHTbMtCDH7Huz",
  "key22": "3t2xQe67VkmcgByCpBAC7GWbyFHEm7LYVUftywa3uMdTsTtAhx8qzHsQsRGBAe5BYxckt8LN3C77ZFj4nBmrD5xD",
  "key23": "2ERa56apENPoz2XxTTAxXxJWdRsiX9kjrdGvGKJeGJGts3VGVBxLiMa6T4h271AjgnvVEagQ7ZKsHsJXzoxTG6n1",
  "key24": "2QnxB7UL7Wgwt6fXS7CnM1YV8FPQb3iPHeEzSFay2DpPGqnUCCy1zp8j5KJ4iUUDN6m7bFBSuYXN3Lj1SEdcoBAp",
  "key25": "QTPiBKWJEnFrRXCJnfyWxFcHDmDZ9ZZ6QqCXLAnUxA8Wwmpa6MBZQPqDstKseidkon3YG7oMCL7utnMiEQy3ChG",
  "key26": "3uAxviWun8aiuH7QDUahotw9CibzYYcuPfo12moUeGvK5xD72Vzj6ExRFX3cQkUBaPmgismrYUv9XgsqMcd8poGy",
  "key27": "2bQNsHaENY1F27Sfejpm5RV3UhjZXKWkTdYZZLPNT8xo6YfsQFzfvkoMAtB73Hj5gzWSz9mmYdDHRFMaA26yNDoG",
  "key28": "2tXUxGr58n64PjgDy4wdxpBiv8PXKxybSzUESGRRYX27QXkG6ziVDCjkXKLvn2ikhqQE8pLKTE8sJ71hDaoGRW7X",
  "key29": "33GrTuPbos43g5K3hNHrV1BrozhukHuUyBstJmDwE4yvso5CAv1mi2B3UZPviVajbRxf3uRZqa61jGA3BR9cPjCC",
  "key30": "37eY6VDvUBQ193852WY3L7uuLehJ3Ag4Atdj46ALYtE463Cezw1xpS3iKGPkvBUV23gVPMpWZEyxdBMZfZ9cvn5R"
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

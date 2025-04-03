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
    "4WDnpciWMsUcMrtSv764WdW5E2eBfrrhTEhx6QxxTXkjTN6rPZsspJESFQaYNQFAfeXvr2o2vBJ9YNrEUeUoXRyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDDYfxk2qoU5LvUjxgsd7e9FsqcSS56yNXux6nJNtMKyEnTstpHN6EbCERXC9mF64cUei8DFYz7Z83f9bGa428m",
  "key1": "3Zzxnc1kfi1NUxizWxcWsrZo7orauRtXPR8v725p3msV5DeAMzDud8NvJF8zLGih7NUaSax784YWQhSLKzbcgymn",
  "key2": "3X7qifDKq5j8C1Aqh4YeVu2S5NoEMUipNXNXSBZuYGuWuc8HyW1hEPVdCLkxeVdmx7uJjABZERCM2sw1KsQorvKR",
  "key3": "3sHzUNLb8jgZKbbrgG6KecZFE3G8mEacE5zEuzhZxuhtSxqZwHB38kaeNX6DpVXcMdHEZUPDegApFfMTb4TrNHJQ",
  "key4": "3ovM8W66if8QYUPeyNMR9V4XsYoVAAZui32iJYLjxjWUUqZvBpZip2yvaAX2jDRuJgFnXFLbtzdHnJzV27XsuCci",
  "key5": "3AnqCMkVjez4Uj9irLYnX7HgyyoxeSyRgE3bnX3D5yKn9XhYR3R9zP5ncKowSrPieoJrfL2LkcWEdRDvgSE4AVfb",
  "key6": "5YjA2nBTFPKvrZBDQqu76ppAsd7LfazjQN41DMfoNzjY7vHPvoZnB7PgpuPiDUNbfRKU4x3pZ215aWJoE5m17pmW",
  "key7": "o5bdn2mimoXsJKXq5cqRduojuBkrt1Gqt1y1roTRwce6f85zp8R3aLEwpNx3qLagMxFhruzwpJwKkKsnXgwswQX",
  "key8": "3Lz7NiXWJ7tNmv3XkMRHNVyidffKMreCiqF4cf11s73631tqsySi9rBBykb8Fzcqf5pWc3Nbo4FG841VyceTqQRR",
  "key9": "2rJrq38qp2XYFWvP2RY7VjkTKkxZKBpGHwAzdLsqtVAn58PyzushxbbL6EjUZr57VaasYgMsWQKX1ShKKsg9UkJB",
  "key10": "527APKoqyqx7F3yEpY5AjKZMwnUUkufV27vYzzuSKydiFGvXafhDaQdC9U5VGHzZ1tumPZFP9C3DH3qfF4hTq571",
  "key11": "JzGwP8CWzFtkPYirxJCvHmfnBNiGM6hL7GoRPjhPe8LsuG5xoqXM7aedmz4pgwStBKGqHcRBFULYZebDqK3WiFV",
  "key12": "3PihdqxyrUm7PtaHCWT949tApcHGrWNnur15XhTRq2Q8mJDM6KcKmDRrJCS7zoNyrM9SeZUf55APcK6BDEQ5tNGA",
  "key13": "5nKCSLBrEX6BGyzy2SrYaMxhw7EEYYT4VU4s7B1ys4pZma25hPXxk8rUjEjzP7dHpS74o9AJUrgL6ocL418YUY96",
  "key14": "4GFLbFNXdxtLtEUFtAvkSWXbsaoCSZPRgNAJuA4aY91jVLcpgnQJmHZA63Crcmd8oJJJpeiJG1smUY8kv8qPv4Yk",
  "key15": "63NePBYi1ff4SSyyQDB4HZ44y6CMRgvgKBqj6f7B84ou6UfqXtNqFzNoYK1Q6NqRjU4J261tm22nQM3WuacZeT2H",
  "key16": "5H9JjpwgSQUHvXP9YLQGaqoqMZGt8BDy5TxekrdwFHJoL9JLEhWq87JhmMFekGWGpZHGeAPnbmMb9enyVB8SFTA9",
  "key17": "5wV7yQn7VEbXyexaKYo66wfNnhoSaDLfvH9pWyYkZ62BsTwvfzzbSogKpR127pK4ZdDn7KGoXhNAhVJ3S5tivyZD",
  "key18": "5yTeQeaANSXLiCszTnR4Uz7bQvfrYSg9yr4gN4KZzsistk6WeVNrLVRZgU6P7U2phJLxLiPGoWzUqHAEiXYJp2Xo",
  "key19": "28FpHfrb3FU2axgKGXGeY8rygRHVFmQ57HhFAb2wL9LnL3RiMf5sCB8hJugeoNm64sDgnseR1T18zUqYTbUto7Mu",
  "key20": "49XbK3ssUaqMMTEDj5vhWnufEo7pBWmEQrPe4cvViuk7ioauGtGdmEHQ4cTeaG5WExyXUcvhzP1Q3sCnD25irmje",
  "key21": "38AV1YXdnr8DGP8c7QQECr6QMYpKnKffWeD89sAtEqFsW6R4znoR7Wkw7P1z23qBVndaRh8DcLMmtGKvqSgRPCxU",
  "key22": "4FwX29bUrNmPq1Hp1Pkg7JfPL853AZdaEMjMJqd3uAb1AVhxQSCJ5Qzgh3T9HJCxXeVmVURU6TgGLxxQ6dkV3SuP",
  "key23": "4Zq9ZBGSieNkT2wMQxrfs2ERESCZGE5Qvyze5XYd9qqvPS6BGGdGez8qe2wqrLzhRnMFRqgnAq7KqNE7LTk7tFAZ",
  "key24": "2CugVC5CbqZsmRLmZoDcJPxEV8rDzebKaJR6nawv1kHcUj24CKvMf4f28sBStX5soNE5StRinf3qKyKqKLDPooZX",
  "key25": "23LFJfr2ozSopFLoADcACmrnXzU1CXd38ZYuLfvJeN4MeeEfeFzxvR1gMLWPAk2oR5YcK8ZGvzAMEW2BsEkiq5zN",
  "key26": "5GGWS2ExgXLLHeMWucdvK9jK6LnxnRn4ed5tEusDSo65JqQ78NHjy92orCk3ZeZCXiXrSrUzz2YisETvvVbG3stM",
  "key27": "4QnuQCot8oKwTR6MsxNqnGYz1LhN8YK2sagdLM6eKMQK3GqmNka68YwoFTjjW16wAUoeMiHmz7W7cHb3MCvj9vZt",
  "key28": "9vRdeEM3HUWUYg5nPGQ31S4TQ6uPnAXJaaSjqTDUysxN412g6Ye5cdyYFRA3Ru6iptmyPjVjQ2McsJTfSXmESEZ",
  "key29": "4EPWwygfwLqRsYZp7HdR8HjRKdjsNSXXW33dD2rxR4S3iETsxC6tPQdbfnh9WwKkGRyieyfFkMQTuBLmpYnf24th",
  "key30": "24zSKx9bJYaVtvivWPCMKdMrb6UX8DV1xcUGSFCbtQXw4DAo5ba3AQy4KNM7bAtbBN7dRhy3An6QuZfN9Tq2o5XW",
  "key31": "5dMXxnz26hPeBTtKQ62n9Lcmv6qhxbpSNHHDgXupinBpqWLWZdbxG7zmF4j4RnkctZdyEM25cqoVpb5Wa4ReboUS"
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

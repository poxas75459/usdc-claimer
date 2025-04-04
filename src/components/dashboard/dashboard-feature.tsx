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
    "3qMnnSQowRwgpZFGAha1721eJ9fgcQAKKkunAAxK9uxZRf93sXUYB3DHQXoM1ahrLUw725EK36jA5QHeGpV44NFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDU6iv7aL8RUVUoecTnDKfLBR6gznkj3NoKmiK7Hv5hXpXjMftzDwArxMKWtgvqTpDKwUTFESQsQKBzQEAY3w72",
  "key1": "64GovaGYWzG6Xq75oe1ryMHEGf3rgq41uMcteQFENrUwKrZpHZ3ntpL4gFSyvdtMmHBu5ddNPPZEJ83JDYSHXxXf",
  "key2": "3i7Mx18yWNfX6z4J9juCmsiskpeHLF7JEJpvNmwpbozcJkZ9qYpA48zG9uqj71nY2NExzbyRxaUW8nV9mzt4HBHq",
  "key3": "5n6ZhyBWLLZNcWu1kRwzzteVeLAz3H4qtM9hJEE8Nuh6Mwk1iQ8SCa8yac3EhQMQNFw1M8tvLLXtyZwY4xVYmSU6",
  "key4": "4M4HUvcxoVRiLdSxqwyqc2kiUXq8H8Bsfyj3dQ46PfsmmPQFDpmVsZhdKhpSqaSFwBqVLf3rbotGkC3RzZim7hve",
  "key5": "3bN9roFhPYT66yxFz1C4jwpbh9WjBkXw9C55pp1foN5XgCbocdJKADSiCN8YYi2M6jrFvZPk1AVoQiMUdsSaq1tK",
  "key6": "4X8ruLch1kFdaEJ4zagThJFxVycHLU79wq15oNbKaVGdRv2Y85uEB66hwnH9LmREwSfYVqQhVeGw7CJcfkB7D9HN",
  "key7": "228GFrH84dz5yz6n2pRSTtgXF2JizPnDxDmgndQ6mbr14raAgxD7uc2uYFizjgTCHoYNz6FGAmeDa6W2aSgKEgmk",
  "key8": "5bQQSC8dyCZ34NFWuPkrTis69yPDaJk5fnajtFUCW2Wpa5wZrYieHGeT9ATac7cDRjJxDnSW76kGE2ENpPF7x26J",
  "key9": "2UxKx596Rs1ZXyEFhXwePYcxZDqgKMVwZTbMC4i9GMFk4J79fyf1oJxkAKjvU6k4zsCwdacMitGYYw294x1iBDtt",
  "key10": "4CXhoTY4BLQi7tFuUFC9cibeGNMBgQ53b3WTV7jKjkjLg6F2B9ggnGJGmqdh8wS8rHSeFakiDxxg5umAMJKLEzhM",
  "key11": "5otV95BaQ3gDX7gr3Wc5SL9fiyLZ5S4TkStwrrLWqYnvHyDvEEjw9u28in1kG5vDXu7sKULd1qVZM8FpnTVwT9DJ",
  "key12": "vUfwq5stot7fKZHW5DC9e97DSWqFy7guubL1V6cCLsExrVMYfaQ8tJkd5nShjLUkzd5F6Rq7BzqL2Sf6pP23RLu",
  "key13": "21JVc8fURBKtHqHzgRmCDjCgTAZGmSqvx4vDa28NCZGxSeTdFRT8hu9bASCoKWA7rUhSd6Tr1WLRRDgz8jdP4sk2",
  "key14": "2YNawD4Tg3772RjCbWy5qqihGCDMZQ3GfHsydCuhAng1EBrqsfDd9qTJjBkvKTK9wc46wXsw4Hi9w811MBSQPHsM",
  "key15": "3WuByt5o3Cf97KScTjdXWrtQeN7V34aa3p75vR45MUpm2M1NX7UCPnsLjBorbe1jNg4AHco93QBjXggxZ9srgt65",
  "key16": "438RHHhSWMEeuym3pkwnDjomah98fqLZC5GfGtokgraBu9DjJnThLc8TkHnFUKqANmT8hgafpgx27LcYLvq1YVF3",
  "key17": "53c9AKLrxZsy8NcSoZKHxKeMtxPAjnoNz5FwKodJEqA7WwKGuHV3sbfr6mGnnDnJMGhDKtckcKjRhZjzd6GohFrj",
  "key18": "5jJCvKDYbnFN3AtND6BySBWQ7TUdABvNu1m7LWZKrQCWYDnGEAN4hrWB69efLoRbGX5ceFGCK3EaTJLbcR1QDfXn",
  "key19": "4vuqjXYWxubG19DwFabFjHapr4U6TQGUB53STUeYZHDGys9ha991X69Z53Y8nYofaQypYwGVsr22wBhnGQHe8EXi",
  "key20": "4CYTpDTJup7EffihW8oEBRxbfp1KULvdfkCPznKE3F5Y5WUgqwK3iNg9n5TaRbHanFhDSQXVtKAXxBE5ueB526zq",
  "key21": "54fsL3ku4xGmxz2bhNe2NaV4jMSWvGH4JJjK2UQpschS8kkGgWSifXGmEjnQ8E26h2vZzp2AE7Ty2naRKMWfp3bu",
  "key22": "5LnivAxNAGhuDqgGWhXGt172isyjGQ76tLTuNXbxY2yhmFu8zuyLMNFoCHXaKh4t4kKJZZ2iwM7TJcqvhEskpwV2",
  "key23": "64mTifQUwZztoAYkqz66ehZzwBmQhFnmtCs4ttuXQbVD23a7Kdm3gqz5PnGRXgcSLt3jbrYEW8KDNiiKeXz1SbpR",
  "key24": "5DLVxUTgshYtMAS3rtHkx1umKYZJ1wrxFLc1veZUxVfhANrWWi1rndtd87MVvbuayEA19fMhbZKRREdRrXNmAhT8",
  "key25": "5sBqFbdnugq8MWwpwxcgzREiqMgrqokFmyDyohrgdToMk9eNjzNfXXDfwDjnNenKCGhpUTSbGeWnN171p6UWpBX4",
  "key26": "4QobgRzAgedwfzeFWQGmULCc2tC1TLNTm3PtNY5Z93TfpXKHpY1PLfPaUCGV92ac25xtjM4j3rz4SDqczE9XaMEm",
  "key27": "3RiWFwF9dDnYHaQmKRvmAZn9ZRz2b2K5qvq9qfM6XVpyhvHGT98z3S8jyDBEU5yubjL8whtaKsnLgv7tB1FiTCuQ",
  "key28": "4imBrNDcY8xFciiELQ6mFvFNEQCmZksKkchYMLYiTN9CE6iHXeP7qkgA1X1Sh5ZzbPuhiscrmSsL2CuoMHVdXN8k"
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

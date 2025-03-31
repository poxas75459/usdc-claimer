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
    "xgSocum19fTJXRvM8wKAVK1cNchP3k1DFsHBXAK6NEFNVAdzJLwFst1TCynetLCsb5re5RmNJSmTzg9ZWFBLYwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J352AMwtBEynMJaHnHVgZbugBCyvWjhUtCYxopCB8yGrJWoZfrfRPhaEXX2VvHYKut522qrXUznVXK5sGwdm6xN",
  "key1": "3tjhHovtS8S7hHqPy7o4sR9F9xbJZbLYk6TcptsS7MuYDdk7YPKDtF2kqEn2D8KvnSByeS7kEQN2dYKqxwtdqkRa",
  "key2": "4pVA2AQAAT616i3RTA7R5gpvViMLqKBWpqGwdFAcyL1mmNtTi5xeKC1M8WU6DrS1LqUWxnfr2ncTLACiJWEuqqVG",
  "key3": "A6juicbgBQiNd7LHLnDFHoxWJ3k2qa2fGveQD4JaRibSYYWzb3skQtDYzDZVqBejNPgDGCcuGGG4cqeCpaKqpXv",
  "key4": "4tNsQWF1cg8yHRLpsRMPuDn6Z7w6C5UMeR2vsEkdpsMesupuQV5HEM1iJT99AE5A5cpyNSVnkdrmeVtLeZcVwnBM",
  "key5": "v1wLBDyefccHs2Wt9XvwVk8pDz8QRpeyzvwumwBhifHn7Sv7Roe9UkWBHH5twWXC7pDFJKa2EBrbcZteiwBpJcy",
  "key6": "2WEBtaxj7h6rfj9BH1JwGBAVEMbMnEk2jCNLJNii3Fjjb5ArKRaxJ24QuGCJnoaZJgyXdvo9cerdRbmF5BdqwHWL",
  "key7": "fi5ZsgaEwQ4Kcv98GEmz2Gi9YcjpUtCae5G8gpQXiKhXiShKPu7LAvHQAdq8s9QbAqja32RTcE7pvozHGmFx5dH",
  "key8": "3cns9DmWGWsJNDUV8vED6NvGBprLwZcDxZvcj6JeCb6jGZRKRk65Lh7FrzS2oLf3SgyQSGrWmjbopwUa9t1hGRZ6",
  "key9": "3aUj6zXdPa7yVk8SahPNWSDttjSsDWyvFrG9aS6q2vQ526rnz2WUu8om2NNaTRfy9T4S7JUnwd667RaPWNyZ8qXr",
  "key10": "45Ukhf7Te3wrdo77Pv1QVHJxKeCGneED3X1fcJb9VFaVi9a2wvWi9orPWyXCVgs168HjT8Mrow76Xbho4VVs4Jxh",
  "key11": "5pf2Rcm5HQrNprrNUA1TKfX27eR31C3mhWLTmZmj3NtxU7ydsBkjtnFVk5fqEeBaVtqx7Hh1Z2KaEufpx6kxUuac",
  "key12": "5HoUdSc2PD7AEEakFdd7LKDAMzqg6jAcfVfgEV7c5ZHpxTiR81ZKkiCFU1sD98qBDrCZvDE8VkBGHc7JevcHdGzJ",
  "key13": "4V23XNfjMpY2TnS4urJsjgb5F2s4ynf7sziWA4TG81z6QaZSLvsnaxg7ZkSc1H1QUJJVbgHtoF5Rdo5nj93ADM9B",
  "key14": "XRLApdHDpHzBDvyzJxqDJKj92RyGuyeqNH17ap4BJiKgiirrRrQJff3xbqjzricAZKmMFnVUtDEgZktsFvQmjaP",
  "key15": "4p4geFfDdVvpL8dj8ALGcVQw5vospJaLJextxqWMoTc9Q6rXWUdhLaLYRuJuXew2yqwWCv9LEVe6zZuX82qKv6iL",
  "key16": "5ByykMQjGfG6YZ8c7Lrp9mpU3dAfU1WfkXX8gVo3fqCL31WwFavYAfBWbAmSq1b9METb4kee7ewhG6PhevKcE45e",
  "key17": "3L2Vjq9bTWHFQ865anKPWqVAeH94P6TaJv4wUgtnGWbutiUfdSAk1auhRpExCKVBo9h2gjVTYPD8UUwxvAVu4rfP",
  "key18": "2bSabRbRhCULRU3GNxdxb3JnNfzaZnUsUpBt9PZi1VkaU7twDTBBSEsCHyLZoxhZKPm3Wj2SVsMb4F9FwD4V7Rar",
  "key19": "3WgFKoFD1DZa8WQqz9zpv8nSaXtggvDvPPgEbHfWcLneQMLn29F4RtxP5gHhZaNBsfL1ZvxMLPUqZBaNx4QUhLMr",
  "key20": "5Qv1bZ3AnVvt4k3kJtLqvSQymb7pEZ8HyuPgd22GoZg1taqELkTe4qMFZ8TaNR1ezpJ6qA1YDEdNZ3zsDhA6axK9",
  "key21": "3pcQmKnRVY3rWWkcisjusfnFWarrVwqyckQ9HCKUfTFVbvgLzutqT9Vw5uqsxMmojNNnSLshrqtKVeWLRzBnD2NY",
  "key22": "3n1vzrrwCo2mwA6aD3uk1EGpmtr9FnHrVkCpyG867YNVuZyeAmiTu3apVhuoRwdhsjLAydGYSQMxMc8wBK5u27DS",
  "key23": "42kKXm9TKYCAUeEByKwsJHCPduboVdDvbTqQ3UnziCmcmeMrdcT1HYk5a9NakUfq6G3qQ3rPVRMzK7JofyygdZAo",
  "key24": "64T7NdFC9EK9op2RHh4M79yXs4hL6nkuqruQT1CsreWWQaYh7ovt7c5EwABx4HXm6KiCZHABSbGpjYbshWSeaj99",
  "key25": "5HtfAK5ktXP14FtuCn7vGeE7uSwHN4ZAunf53maPxpEGtA4LSFQUiNDN4QYBpFoK2odjvGNkC3aX2mfNpHcVPWZC",
  "key26": "3AvNVRnXUACaN2jugWyKgwKS297mj1iWG5GLHkmLQJ4MWFvh6u5HUzVWqYxFr7DyRyhLcBZrakvfXXPvgCh7upAX",
  "key27": "5nBLYerZdPSYBn6UKYXXckMGXxbeCa4sSrc5nNmbzMCKHqg2dkNnDxip3q5zwdhLnJrczcdST6PBLJ2LRayVgKj1"
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

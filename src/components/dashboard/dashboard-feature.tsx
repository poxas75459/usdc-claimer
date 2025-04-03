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
    "38ThtRN7kYhgZ4kXFENyrmvH7J8ioVgZ24ACX2EaT4DSs4kc7ELQtaMcnkjrBFNqwrMe1ebZvyyESUjtojpdNsQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJuFq2o9Zji1FStbN2ymvhP1jU6Cdoi1zR3tExK6GrAQMsRo4AfE4d5k1AB6WjCF7YHdCzy2dYtCfUUbo3xZnQ3",
  "key1": "RsJF1Sj5iC96iPvBNJSyH7oFHF557A2gjPazQaXYecy4GdYkS46ujAJ4ZnNMnN2fRVWyXkqmzyoezfBpGd9VG22",
  "key2": "4Z8ERtZKmN1VtJKUaJMmbRLGYgMZghPrkqprhSCCTfhxE3D2sAv9FBuMCEWmEWcTytAspmL2CPNzPV2TzccDuVRD",
  "key3": "4r2odZs2zCCBgUqeoUXnSBL1DsNRDvsWYg5heq8jdFreaJoe5RW6XaHFfAKk1prHvpXZBy6gJ73ZZKYhWAuWyLjK",
  "key4": "RHJUqk32XNFKtCzdoDby4rBdjwo4xSCu9yyhPs6VQjRcjvh95hWrXFeEc2Xr7FjVBDcYzQzHQjFAiYjesFBZB7R",
  "key5": "49QvBwpL5idm34BKj3tdV7Wjv5P8VN9mQ8djMLUCoTbVCUzCbxsfG92HvohvdqyodAeoYe2Na2Ktnxygk7Dvh4c5",
  "key6": "3ZCFxcDwrZ1NDTawWhHEFVkse8LAiFM56uyoc5rXFLCwDE4GEqKx8yMiPmwYN84p2V5XGuFSYSffK2WafpA392hE",
  "key7": "5t5nJ2sFpHAcWzP6CQNyGskf6vsXsUbqbsYg5p8Ymf5gxMR1jCGBQPhDmXZn59GPDRkNDpHBJDEP69SauEhWzw6",
  "key8": "3AhQ9pQqifFDPmsUVbFRwCqg6FSKN53ZUbYzHiFxQ66ALMv5gsd3L6vd7ecSJyRdCmBXzaVN54WQNnpQWpbuQpxC",
  "key9": "4UPpUC31g6GZTR5LYhSjks2wDz8jEbaf4Um28ZbwNzTMzWP2D1xvTtCMMvPQViTBdn68fYtgYpJsqvsx13jW79QP",
  "key10": "5Hgs3C1KDfFRE46213B2SXaZaDUVunAEnfn6Ff5it3uXhXKGZwWBo2ifZVTroG4s8KbTJDi89G1AJ2bYRZANdkBM",
  "key11": "2sTEf3FsKT4HTH7f5VfQ3cuDke3qVq2bQ7dHbvCPyUcxDhfgzAFxC6qTGcR7qchWtoeftu5fPxSNVijQjiVsKUvn",
  "key12": "3XCnVAmMzfGV2qMJWXuNHmZzsqsrwEr5TW4TC3KHfWLu8PE6HUd5ejLjzwpLb55fnQxVWj6jPsYcCp4hBZz7dcT7",
  "key13": "5PSqdrBTVKHp6SMEVo9txkanFAs3JMMog7hvL3kT2Zbp6iBANAk7FSiMCkJbH4jNNjs5xwxuwcpnMG17kJGKJhZk",
  "key14": "4qwrkGxW1GxuQuqag2rrXdtKZ1tQsQN1yf2aJ7Uu8REWixAFmV2KxQ5t7zjMdPPXxUvz6iEynQMq5qQe5JeAX1dt",
  "key15": "2eycxR5rvCH2nmWfBF45rYGdJe7Pz6axVeVu3V9zBQsvjisXaLifxnYoqCE4koCnnaYYESvCZP8Fr8o6ButhtHVG",
  "key16": "fneNSrt6qzPNCWHU6S8CHrTV7ueHXcpkjFECTrzgM8wiVTkaWXzNvF3AMkWn2Kaz5kVmAo5B4bKW72y7YHJeYRC",
  "key17": "3swLesxfm8kJmzKwDG5DvZHKKndRz9ks7NGFxKYGPST4RgzsinLnVTPYLGKAxmCopsoNtmCDCxdNLxuPg1C7ma8w",
  "key18": "26G6P9faXYMqUueSs6TEbVdFDi3cxqbFzvBA6R3URwcdnGxqYvfy8eDR56xcKwTBEwCQBijDFYSWgWw4Py5WXwqy",
  "key19": "2MGs62rEGxfzs1R4J2dnvaZUdTxLBtXKsvff5jKsuvFz6EoBCeZ6CG7oWpLpXENbg6HNXDyEhwaBh6V7S8SUiJXR",
  "key20": "3tca7wD14ENUu3Mh8JRwL3GRZChThuUzpnY3HVbK4AgVc94cwefidAhpFb4wQcfbyLzXsBVDCtyLPCt7PSeMqEzn",
  "key21": "4NecZZD9GWCkTSC6NsPrz7QRXGB7Kdjzsu7yiqRHGFtCE9VSQRPBGXH8q1TFCtWuKaqAdqTB3uVw8yCEwTfVkEsv",
  "key22": "4hRoTkViVuLgQT4AjnaBELhfGjXSP59wd8hhXjfrSw9wbwcZGNz3Nw7u5T6JjN1Koj78KWcvYk22dsorakD6GrCr",
  "key23": "fFkW7ZNqbw1wGCyy6nm4r9hjTkpyoM4JcpNZjcjDQTKM3ZMuDFNCz2LFWZ2miNHahwMPTEAHq8yGZGD5sjEH1JV",
  "key24": "4i1CXXhSCSaKqm1AqaU6zq8CxdhMoNCnvV3YXEkruPcVgM1NtYnVh2vy3B59WmcJB3XhLr1M1H7ZpcKeu6rfBYEC",
  "key25": "4i3ZwBK3iKekHNJNGBWnXjrFqnYQ4tLBd9viS2uGtR5aPSMmhjYJUXD5mhZE9H8LWn12yNzCY574NUjGLHd5J9io",
  "key26": "4cQYf9UAsVonXvAKnWM93AW5KKVsG9PpLnejXuQEgWNHvfqhyktWW1oKamVMXF31oKyz7rd7Rz87p7fBj7DBT8Gz",
  "key27": "5k7877nzfn2wQ1ejnfWQv2LFy7TzJk3BoMKX7RLFR7Sxv9kH2xUKLY3G3x2Wa2QKMj4NdWwdSuDnmT8obdWfef5Q"
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

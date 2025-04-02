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
    "4x7BCWZQFVKbcM2d2YSEwBwzeNctRYcpZMYwxwHGLoGLYrpx3jh9m62Q4MyzdjYPvjLavLAYEg5CWESjdtUCxztD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtbqmTQKyYvyVjuTyq6B3bd8v5eSqoovoAxjAjhmzx8oviBFhJppMRwTe6tWTzx6ZdCtXLJPZWzhUUoUX5o8D1M",
  "key1": "5PKf6EtN9mGcBz4dw4HPhjf3Ldi6YtLdXJfXWQzN83VNLgeSTRNgKuG3Pe6bfdt2i2J3JMsCLpPLDDAy1pMz8xo3",
  "key2": "4t8b4S9wtSNNphc6ToDn5gUtBU9GhzXMpTaKU5jyrgZto28fJtJREteecmRxpTGzwpSUu28PaQbGgMdHX1nh3tR3",
  "key3": "YTdGBJjqysXi1qqYkW8eytar8spdP5MTX4AFBRPH5i4iWP4gtcYBUVkJYR6CncB7Z2b1GdauQFFTszqboeb4GJm",
  "key4": "44pGWJRC5pp49ayiZWHB1axJDPqB8jsNaJvQ7NXbfJDCxAVqPaJ7YyYEGzs3onBt65qNT2MNWUdGRi8LPCLRTrAZ",
  "key5": "ixjjFPMwDo2jDmDLqeYLcpiqWrMTWbQCT4Ynrxor66vZMwn2e1SP6gi3ZTm2bSXJzDZgHnu1annghWLqjWJuu96",
  "key6": "3GJDV6Cdt6jJk96giZocbmuNTc115cKV3KCHDT4wkGW2Hh7xftKMhhfT2ezFZYFcDHQ8qB8zX9xi3icsuUWc3hMG",
  "key7": "21R2XcCeZ2XnTTB9SaJ5uhPQXbQW1QhsMPubpMioS74iMJpuVD18jnV6Z2vuhMUv4rYyvAZJDNaEG7PiJAAiWbB4",
  "key8": "aVT8UAk2GafpADYdG6kbgiBQee9SBj78pMvHtT9HmQv89BhW96QeRmdfETfTDqykHtprS3kduorzgAUFFCZngJm",
  "key9": "4zTkwWqXUQRzkmCWpFKyuS4ZbZZM2ZnazxepapjFryEu8istbdM7SS5LMS9pMH9ZTcTG5Esf8DS8htbYKrez8WeH",
  "key10": "27ejVYMSZwsfNQH3NTCxKddMvEMPyjSpgQQxr6WCaNdrwWW8ZSAhygwucSRDghcQXf24FVQ1PmrkcnCSxgJZtcjp",
  "key11": "r41UW3RCaqtMguzP5sc4aompJ86rsZEny125htu8qdCxvmAHuSrV8fzvtbdyryERv7nmEvWz6EforqPctQ7rnme",
  "key12": "kiQ4Wgsi3qHVGtetH76yStZFVbSTDmpdtfMVUpUq6b1wnNyjyjkw53uKDH6tgEamRBPtp3ZFk4faLwQycM1BjDR",
  "key13": "rUuomJJpgSN1f9cBekDrKELLTS8T9GgqYtyoGa2VEqW1JoY8Qob8DL3GTbT12HixN4d9r84q3P4G6LW328n85vC",
  "key14": "25wg2ikjZkCWaME15Epr15aLtiKV8SsUyEt5BexG1CU6aKBPcH26R3KeMFVvBS22FG7aL9H4HkQstfhpSLcgTTnk",
  "key15": "P63PFd4HcDKfFK6j1Um29YLvD4fr45ws9jXuQaJAbjqPQLmVCGFGfqJ3qruZ27qDrvw2hQVJi6pRmezufEaun2V",
  "key16": "gRtFPfmXQhjjya7gpXW2LNvizD3bHfebdgStAidyvjgvorM55Rdv5bGuHXivK9mVnd3u5mRW8RexQAJG4yFrdBP",
  "key17": "3ihUgnNodWKewgECZP7XwzFW8WPWpzHVNPi64rwryrLBsRHMgKUJiAHYKriSzVvUJyzZdeCBQUYfvvoE7AAWdMiM",
  "key18": "5zqPKYcuchd9aXVQ6hTZFaY1X8w8MotEV2PcEwEEi1NF44ExqANpD7tiiWQkgwYjG3thxShJGhsF5t1BuFTcX5kz",
  "key19": "553oNXtWeN29hQYed6konYtFhdVArwoJKX7fjFWYuvph36WMrMfWkANJNKmDMW6xMigdhdpooeBQakYtazscc6MF",
  "key20": "4ZxfhvmFTfJCbDQfNeg6htg3W7tNqhKDrVhaBei1rf8H4PwhLf8CrSusT9ekUvVrVEhrePR4rRWmNggVn8jzdm2b",
  "key21": "2rZrTTgtuVau7SVkq4Jbsa5hxXQG4vR7vusFMMvXeuCWjXYafz7WTffJwH6EpRCskVSANDH8JcXEC654zXsmCse3",
  "key22": "5uKMvhqZxatCgzUnrxqG52pTPFvW1zPx3Ddw34WUH17PhqH5pR1CrNuYc2TSYdd3Dahc9Vijtq2FxpkABXVZfcn4",
  "key23": "5s3dZgVJarHZzXfUgoRL5AkxCkWiX7yqyYq4XokVDNuSZrndKZN3HBbe8PBrmWu3mN1kgXcAjk59C1pGQccfvnrP",
  "key24": "4vABUdv2b4K8hwDqDVc5CuALxnCRgMgukZD5s9ixJffUzjcyrFQqjoLLUfp4m4ua6stng1hquAfw2FP4wczDv4xh",
  "key25": "4x1P1Gs48EYpwqG7h5bU8mPP1LoDMjXirSFbXtQmsQYaVGSodqisBEpgmVdpyQkKLryBMoqFGhiZJo2eUyytUAig",
  "key26": "2jbyfmcA2xfcyFNiahs4iM9NTwF8C7MrJDNHu7WRzfb84N1k8xrrLK7MA8ftVRiiBcL4yx79TPT37fjqMsfB7eyG",
  "key27": "2CuEB5W8hY4xALsVREMJyTcinwsMCGsWvKCqe4ge2FRKQAt3JX1Sp76vxNUzfQNCeqZyQWDc47PLmhLMPcLeesHi",
  "key28": "5PEZEmtQkqaDD8HrFrtpZPqCFWqKiw1Bc3LcqwrbExDjUfp2ET75tsRt8tuXJH5VjqD98sSgJkY2u9jfGLEe7yFz",
  "key29": "4frsHSnHUtcjMEYER8tYJQzMYJfTtK5zjZxHDGsyaCB42cYVHLzykGHqPEk92jiSEpJdg6TrQCA2H7GAtkxZvtJb",
  "key30": "3dHJ4stESg4diQtmV4xjErQaHNnSSPE5xVesPP54G7M9STtwoQHsNNb5d3S4Jb3wyhC9e4aygsaE5HbA6qGsiHbs"
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

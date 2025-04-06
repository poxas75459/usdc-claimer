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
    "2kTbLm4SFCVoCSpQH8YeexB3x9fQLc4cg1CnQxsrLGprph5Zm1eRWGqfMxdssgWdjVXX6KgZt1K5pNiihYXvvce7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x32Q4zxDv9sz3nEiKbgZXKp8D6mEmxC4iJrpFbfpuv7G5LzsHCrmL57wUj9syyqQkVjoDrb4R8Do2aEi1YRFyQm",
  "key1": "3CXMcsRtsWJefywTWaph4AMP6hyPRDNFF4iX8EwUoRVaR1V6RfCrD2MxiYpVmWreJXCHNbDp3wXbRtLhfC3jEJ24",
  "key2": "5egnLME7dZAL9YvK1ANjvytTivw4FTR9MWmZQwXFQErYcfAUrKZoQQNEa4iSy3dDDHeFKC9g5gDKCAzxzq8j33eZ",
  "key3": "rpk7KB48sMBjKgGLRfFkT7Bi4Nvc4HUsVrUKkfeKmBEZvk92Jk5mF2vZWySJSp5R5USeYKAzLBsxZoWVQGoQa8H",
  "key4": "53oBuX4xxLTVLAkhxd2Xpi1RvtgZ6fLpPYYM9MzSYYDCCX18QCE8P9KnJBAaV916KSUPqPADr2MgaUJiidaPSwfP",
  "key5": "sh5VfxF3R891sFwb35t3M9UTaCzLTCCYCJQJKfv3HkFeEb9G9EDVF46oxznZsRBR2AocAEiE8MHrKzehRTy6v4q",
  "key6": "4gVkg3skPuDbaqzWEBTTVUG5No5syeh3fGout7wVupDrmdUxyY2Av8y1byhgnRXxPdwrMMG9WHj9y4iSPSSNMwVC",
  "key7": "mUCrvi1o9DFnURX5S8APBKohCHWiBG3H8cR84eAAyXyvVop887EpRkbi1mJMjvNrMEfMizQ2641CT6mQrkW51gA",
  "key8": "25NewEotHdqDEtVRFnEaj8m732FijzYL6DajfowWAGow5xnx9Sw7im1yqAcsbnnGiJe4di9xgaCuYZmHSHgiTqJD",
  "key9": "4KFNtuKYrnc2x3rtVVDMbMXysTThd1m8UxfEcoqcNWNPfCYdfz6hsUXmeUD2mcTRfiseTSxD3WZSzeUZBFWBuc5X",
  "key10": "23RSexSRj3BfY7jjKDQrf51fLCjNA69UDWfcU4dcZZ5RaR6nCywpFUKPyKG29BbqRJ98JadkMdxjQDAUQpwp87uw",
  "key11": "4MfiBNTuZ8FPumv3eM4LWmA9HmBKjq5oWS7TumfCQHegTmQVSD6PLWrRXzdEtjZunkDwKUSnuuwyPkdNKJxESiCp",
  "key12": "5F1c7N1EHx1t27Kwe7f4YCwRVfgQp8HkyBTLaVDJykmH3SrqcQ4VEPp8S3aTHc22RsGKUesKjhruqcgf5QW9hwKV",
  "key13": "4GUaQPJQML1VNYbSRfMt1XFBvJhJSqpVTfCuHx6haLcy9P4UnrysJACehQamQK85aNsBGTjp81tZap1xsoxHjDwE",
  "key14": "SJDi3KYfG2ZeRMHncynSLxZ4FmM2911hVDRwpZesqoNKmj77rits2nmUi1cpSJegxdi4yLjJ597fNBDfK3BRwxB",
  "key15": "3WWA1eSjziafSJWxG9fJGqTBxvJq7amT7BnBAMzcTb5V9SNfcbQtHcpvpLrMKjgTJLWxWYERWcHwiht3Bnm7E6ZX",
  "key16": "BBQDG4n7B6dDHZuzwdft42FjNwqNGJnKRnJx1Q23zxy4RJHg6XuPXfJZahCuuXNKtoSLxud8mbrRKCNHGSLZ6Em",
  "key17": "4oU3UVRTVHiWXGPNPhamohFkKXe7y1z6WkLaskzbGcpMEbCFSjYyPR7YBg1ZgpQEFficiyNhbnPJ5W63yLP7Sz2n",
  "key18": "5edyH5am1MG47s6hJkuFNZLvZ3fgrfxpuDhD3zYdgoFhyzSJGwcfuVPQSARCNUTp3g6E7DzXu5SL5kPyzaG9e7Zo",
  "key19": "5G3d21mqCx8S4cE66WF9rwjXf9FTkDpRLrcGS3bqcAjGWJz2iFUq2qNRTYEcYn7NqnowsdNkeDzVTxFJe4f3Wj4A",
  "key20": "46yUAhZx8FsX2DYpxPxMnwUiEqsUiX8oewiHgaHT2Std9LZnanb8GEjtkPdopDF5TR2Bs5fDbnac8kyEBxVvmJyX",
  "key21": "3dfEM6f3RcFBR3beU9FNRY8YcKyzQFi6LTAHMLH9aAviFeE8e7P9o9ASHMQR551vZm7LT9FSeEcmoFq5iMhYAxiN",
  "key22": "Am4Xbp23sjGDZjwdVQDa1WJKyTfFkUS1aeVNBWeWxpZUaUuBmJKHhDeDbNjsbNdkG4zVzjLKknQNMUA6CjkAH6v",
  "key23": "5w8NnsGHEBJrUsubmXyyhgnWaCAKtfu4YdfTbokh4QuhX2PaZXvPk9Xua2tGTBPoNBz6Snzzte99idFUuP2LorzD",
  "key24": "4Uo8WFYfkyRPpBsxLiW5aGf3QuzAbPtuy52maNxzGCvSJcvN4BVvizVDxPqyjGmYWwkkmuZaEH6m6914UFbMYAh7",
  "key25": "Xc2TrUECmFuAME7rxNJ2AfZnKfRvE6W4rc3RUR3nech8SCkYx8GVsZHxUcVLKfXDn9WC4wUF7jbbStGBxbjjw8y",
  "key26": "3hGa4kq2spDg1ZbEJ32qDnf37tfAdXwHhmvYQmst3E9G8jgdHvjckyoMD6GbEL5nSZsjFWBXboyzuFSgDigeH6NU",
  "key27": "4jDdLKrN3W8zq7ZAV7kyZw3Lv3BDdCnzBDtFetDSQUbMMk31BQ6ZX6QYBEELfxBmHjZF9Fdxs75F9fTpJaoKojdC",
  "key28": "2FHaaAeWjTtJ1rxmM36LyYNN3upg2uWhMVSkQWUzLbw8nf89NJzRjpJqQ8LRizzVhdwkWcqK5rK4rG8CJZ6Zvv6y",
  "key29": "3Ai8tUzwVPBkttNkPTwCw9AHg6SbDAyoBARf8ACQe8WQRirBH8LUi664oWDjmJXfMt4vGo4sp6XBKLStSUbXNRgm",
  "key30": "3SgPDVDPYb71YKjWcukTsVzpUCgCTSHbVkFdqXkjsnmE8fNTQ5fskkff2o5qTMyym6v9NXS5kRYLKavBddNxgQgv",
  "key31": "3kU6EQvaTJ2uHyXzmMCpWTdZbBESCzUJQefM78E4KYY5sSf1Up9cG9tjSqnZjiYyefngytKvhBK6bzYzeZefGTi7",
  "key32": "qhkL8JJuk5iV6owqzKHs8XVZ9cWYfq9YdzRCj2fyFkDhbwUUYTuDVgPtbfz9AbgqqWuk7jPRANkzmahz4YEKM8D",
  "key33": "1FgBvwSY6b8UE82XqyTMfAnRpHEkUAKF7qLN8DWw6hbTV54voGVoqDnBKS6yxr5F3jSqVPWGv7enAgQto2szxEZ",
  "key34": "2gq37CSyntX9Dmm3Mp8s3EkoaWfccvHKUSz8uUAra2Dt8FZxCxcHqGPXA1yAYu7YcgEFvqfNw4VKhbVGw3LYNt8b",
  "key35": "2fFYxUg6Uurd5DWuA7iFV3cDkkBwqQiLGotdpz1Ws8QAuLcCq4ZJMfVHt8iXSDPRbFm5KcsjwJqxiysqDUUM4nRY",
  "key36": "pqBDxN8v7d5A5uHGVCWvupQhp6DUEmYZWzCShukD9ABJDJHvcVUga9w1uLTES8vkAAn9KFgFFRX78fqja2P2xUd",
  "key37": "59GGyUHmcejXMehu4PY49UE1uV8hf8Hn5bsncmoe1njrW9VjBeunt9Wb3wTzCgiKBXZcKLJ1wB9KidoFu2yGT5yp",
  "key38": "28M9opShztFkrpSAGPuPrFf3iTXux1DUwnpfc7SeGcQT5LTxpx2LDW3D3V5zgNsCqR51bHE96wCAvmPDs9cMaNPB",
  "key39": "45bDwibMcTLahHiWxDLLopXjnk7XaTMLqrdUKDq1CJVcfVnvJG9DXqKzRZRRFu2ugmy9ozs9q4u7AFUTQW2vmPGR",
  "key40": "46ZSVGK4b9WSYew4ue4L16ovniRUFw9sBcB93YVEF2H3VXsFNTyKYa1txKBmYQjwG3oKnNPYfewrnHWwy7tznErf"
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

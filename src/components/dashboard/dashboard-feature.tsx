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
    "3QLxipEh1eXSoKqw8k6p4ThsUTGNavu7NZt1WfYAfVri9YRkwYTZP1Nd66JJKVPFJy4TFbwSsdDjBz8THRLeYYCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kEtHyKWkgxa4Wd5t2HxZbdrge1pMse9G2qU9DJ379Yr372wtUFpzYsioYFyMyu73hox45PSawsb7mQy5SMWH1R",
  "key1": "5HRw1LLRBK9Rwu5h6TWwdAdCXqBzLeUEr2H3hCEh3yk7bNRbRL2DHVe5zvdDW4rMtoRw9VhQT7PKxqiSEvnAhVsQ",
  "key2": "5DBmrVXMq3iqtFfjQ7nwMrsDpHudKoEZGEF2yuxc3QPgLADGyhrKq2ukQZeaH2wQTUhsTwXWwtSDWX4SNnxK6qJW",
  "key3": "4iRN9ygAvRq185wQ7CbekHTsWpnmSKD9VqmDVnxdx7DJFCBvxr6VbuYpuHLMPyNFKTM7cQ7RpRi5fZSNShm2mZcC",
  "key4": "Y2y2od2C5ZuiepwecKn9GHwkXvVc3nHirHDime6rKSp4nuQEbUynbyqpBYSbbroQZQxrVxEHN1T4nq6E9hESFPq",
  "key5": "4HhdbDt5mKxjd7vcVBjrPKXHTB9cfoQFHMSEHe7UhE4AMM4aKpneDCZhqB2bkjscVHuHFUPnoDeqt1D4e3puD35o",
  "key6": "2DNp3riP8AybN8gGi6hJWGXvBktVdzV8GNVeLQfxEWPkePzdaieGEqFNRdGrZdPPAje3op5Yu9qrQ67PvyC4V86e",
  "key7": "3LAz4GYZHCMZu8mvRywUDRNvLn7XXiq31mBbD5exz3mDe7tPJSPHHEc2F1DjQ9Eh3ji1oK8AY5bpbaNZjyhErAam",
  "key8": "27VNNBrEBRquQyBsAA9fgGdzjnJzxnPz9XYL6zYJC6ndopGDMrpFJbbnj85iKwNs87eVXFnhBSMVKhPYSmmo1VqS",
  "key9": "3vFUErKQHjkoPPa6Bjrr2bddCAiZhopXtnumFAUx7aswPqNSd676P33axkKThsYVM2drPFPyVMmgpy8BYqEaEibz",
  "key10": "5buuwA7ofaJxst4EGQfPyXsZEF1NXjTyH11KaVxkr4HQzj3KLmrBrwCwjreY8Pdn2wu1UN35vB4WqPWfSAHMZYsB",
  "key11": "4R1JoN65Rkhrg2uCrBGMpRvynMuoaXXo7Qh9GuCoa5EzR3PekytP6yVNJbP1fE6FCJozzL3kwnjUxFcHQJTA443h",
  "key12": "4C3VvDNE7paLiGgFbf1So5b6KuKQDKBpvVBeKDNBnRgaKasTWzJySmE5DjpfkT5cYuShWY5q5UP8uYzHv3ntLgxS",
  "key13": "3AtZPqbuMETRXDZddcY6kJmAX8YDgUuzVK2t7tCjfZdLYB9gunFjt4C2voxGNFgEBZ1Cw7UdHVDTETnQPLARfCkA",
  "key14": "QkANAkwz5KiGjqrANr1Z16EzdX47w7fn4RGsDP5NN6i6gMgEpRiMkTewPvPYMTvYBCPsyZhQorjEacGYsb6Kho1",
  "key15": "4r1rEUNqpKXJF8LfxADVffnbSkmFyAc4AoHMwM9StVg9ZkqrR2XQ9zusULVor4JLKzR1xK6mC6LAjw2c28rrYgEv",
  "key16": "WFKL1jUNSWtm7XqECW3KEYdaHCEwAWJwHqLsyJQuMR6qv2FvCzHS8dfFx2zKQmwte8idsmgDmx3Ls7BvUt6qehC",
  "key17": "4La4c4cLVZizrKk7Xwm31e6rzai6t4WeT7uxWoSWNAwQcmryBWxGeDfX455PSGn2UDVCz1wjYfZfXLGVBw4TxtD1",
  "key18": "2ekU7V2VGPCw8iHek3UfaPfZxVmrRT8LPyawY3NfCq3WNz9YP3zH9N5pj6eJbqrUnsHfcDf3JqqdacmBeRFppLNL",
  "key19": "s9NQSLZpNwN7duy6itU24vFJHFBK4xpmVfbg4N7sc7fD1KL7mfruahoF9VbVcM7aouZccgRHY6eD81NEBVyQyv2",
  "key20": "5NHrPFnwoMihxf93DNiAKSp27pE9w5mGWea49X3wXvFZJLFAx9CubXDPSrQXZX9fTFBn43SkESSW9ucyA2Kzkp7n",
  "key21": "511Eq1cMyjQnUgB5obq2kNidd2WsD16nh5ruDm229wctxb3g6bMfWQeAXPQZczxVviVGY6HtqeXWVs7WNAJwcHDx",
  "key22": "2GoB33yHdd1gEXC7qJcMFnZa4323Z8JPaHzJ7G8TcrkkP5X5evTRSc6JM8bWy5sUf9zxrLpmRA17wgvo814mXnpV",
  "key23": "2bhg4fKU3y6Xb9gQWADeanbk9MLB5shY1Vd1vm1yyLZJxk8gmf1Ff4CneMJDxw6o8Yx8v3pRqCkuWfwD2KjBfZaN",
  "key24": "3hfJDBRNAFiN5ZU2RGrVat1F6e39fpGtUBwm1u23fnuamWmt2pmDasuC4mcpy3hGkSdUwRzk9SHByxWedFqYRMag",
  "key25": "4vrTu4kpzgdspsJzSSuf6DWzMLB3cYjG81M5LEapFp5uXdEiZuESvKgtFanYGCooRXXiepwqf2qhMcsRBofJ2pd9"
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

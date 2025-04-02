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
    "2HbnUWeYh7EnxLerfkBXQNCKFnuvhzFqsqx4APQgvW5XGFX8Pn6w7oWizUftuYLpPyvKw8jLr9wDA5MmqmMDR8zA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inoiHSqZHvs8nFHTjumwDuoG4QJ1FjPezEev1hbptPAPRtzRSgnPv6sQEnmnqWUyHWnwv734nEqMydwsGZP98no",
  "key1": "4YSAHiosnqaDbTZbWt7gSvi7ooWUuzGp7bseEzGkyDipJb6nabxSwK8pzicodCwUQYDbaVPmrhGReVM68zBfrBP9",
  "key2": "5AC97k7J3SSUanSC7XxrH9yehFS6zWfc3X8SbTQ5ib4ou52ML9NFsLFrVszNpjNNnBSdd257gVBZQPDwmnpztLrz",
  "key3": "3bk1qGvWTuaqBPPQfuE7NhiEWnSZ9bHfmWQtoLwAJf7w13X9hNQ4bccEV8g9xRBF1VZ2qBckDkiTAiyQmZKNZSm3",
  "key4": "KFMna2EFrSqCy8SfFWGpcoCenK87Q8UyoGzCkaMGEHX326ZeP5gSio2AXLuYCQrr3akVmzx1Zpr8FuC13hE7tqv",
  "key5": "HpGPs66CzecPjaRv3L47WRMgdbMWQ4BqMRj9g21XKyvhFxJfQNSHhDYeWHerpjkV76y1YJ4XFCR6Nv67K91xt3h",
  "key6": "2jYRqdDAY4ehwuPk1U4sjtkGitEpcKTKCbm9DjWHKAUKXQ3WHqjhE7HB6F57u6ARiDsBMm4RMdZ3Hp5kDAaAqC69",
  "key7": "4mDipTh8jR2QdZeuQj3eTsq2YrGxHfAcM3KzBDJtCcPhwh1bjUar6Snefd9UPHsc7twmaRki9dWYg7MkeYSjUXjQ",
  "key8": "3Y67g5NMhCfRvyPwrFK7Z1ZyP6BLcS53yQWcZX2RPLAPZEwrKcSUaP9G16CCCSJZ2W3D653u3BWvQ5gw4pjY3nJD",
  "key9": "59FEdxYYi4wxswyxLaiQS3hZHFrBFjyBLbYkanynRaBHXnyPp61XhY1cBV2bSComYNSfVPu9MJm7AosZcwauDtUD",
  "key10": "6JznfCSawwHEiwm8WRifGuYoY5vpCMDjfNsNpjZBCmDNznv4DKoTr6m4WWiATBk5p934aezdmGwu1Zfc9xC95EZ",
  "key11": "xzDqAWeyPH3RYkdxoa9YRwK1EBhyQ1ELZeQnejpQG3xyavke7B1Xj7VVbhKwtd4mYstzw15YDJVi1SRJYZX5dD1",
  "key12": "3oYDT4oMgNTZhUiJchGxzJ8VLqbLExtio5CayiXc8qSNNUHT7WSL3pySqXExw89oNqRYXSdc5uBNDeTAcNfGqgGs",
  "key13": "4krdwYsxToBmjzHX95ALaY1TrrNV9TeVfnSzmus41mnToaA2taZvSVDsGUd74AVDptsGtRqwoYRbsGjm5bMDxZ3k",
  "key14": "3AArYfccQqUFkiMuggfXDox5Nq6LoFqo5AWA3dcaotu3pMnLdicgMB6jWnarAQpZFmPRHWZ8zk7BvF8LB1SdfzzN",
  "key15": "2hNhcvyD4SE5q8Q3XrHW2kLnvkFH79AXYor2GH9y2s8Taq2KwQL7RjnB3LAqDPEKfvDjXGVPNi7SqKSjxAqE2Fib",
  "key16": "HVEuAh73mh1kgpt779wgRCrS88yMHYceNTwbBQzN31VrYmPPSZq9Nw7bwVwtCj7jhz6jr9jyD8aRBWHLK1aXFb9",
  "key17": "4SvrhHucsGirATuGuq6LWxWcKBF71onbCCXULSqQtDBRYQtLWVVsZnxvDeoUVm3kyRJTT8Gorydmzyqg5RJ2nnUs",
  "key18": "2RBFzKNCtchhgR1UKrqof4nPRHCV1H3wDuLPcTwdi41ho8MTegfJHVxtuQtz9FE9hpH72rQpLyXXhq35eb4LRYT1",
  "key19": "2n83Caa3PG4WBiQiuYtVhShBg7LUgxXbF3o5RtSJVkLGY59T94NuLsPcSuXp2kJFEBw3F1vSheCmSDAdJUfjrddY",
  "key20": "4dv95Xgv6AGJnhyscpDCMut3wTnhkFUQ2BfKHDPs4a7ENMwdfp44YN9cLxRo8LLCufEPbxPmYi8FmBT1iSwR59iX",
  "key21": "3v25qgKJ8xH3KGSWjcLN4556isTmKpAZqHuWvZUoEDACVhjm7NbjXTcB3fMB2iXGw9KczAziWk4VdYKXhgUQ2Gth",
  "key22": "5tuQeFPPA8eiGPaqZVmzePNCXgwFNXjkwbUKYkFoa9jL9mJnFS4YUdQCJcZbPpTNjjr9XNcXeFr2aouaWvEKqxBF",
  "key23": "2LGZTc7W5hL7rAX7ejn1D79DsVLFDb1JRjKQAiZLPGmkXQRtqN9c2RcWu4DteFNfjAfTkaWYoKANzjryhdYnDSef",
  "key24": "31gz4nFDYVwsFF3AXxj1sH5aHcKCi5MYageBYKeF8zNUP7GD2pG3teg2De4Ye6pEJSdK1GVia5KxaqzDGwiaEC4s",
  "key25": "pJ4ba14gFznySHoThXsE7gbpL6QJsZ94U1s5WhSP6PN2E7APsmHLAuxqMevFpAEXcGNjzidXGHN5aAWiWykF921",
  "key26": "xmzoZ1Bxhd7qK8JXY3jseerQtzr42UkH2tSSQVGch6hb2beG5DjcNpdUQnnfa77CzhrVQy3XpUJzwi9DmsxeJYu",
  "key27": "2oWQf3UEqn1iPuN7JWj88HzhCvAGTGyUXkQnZTVg1BH47s4cknnNBTvoHyCUZ5BhATj4WbX6bVgwVGL3kF94ajD8",
  "key28": "4dQdsG1py61DKJFy8RZUFjTvb1f1uhtdxYJvejB1SPuRrxfc2pE3GMdN3XrUU1cmaSFF63efsMfJYcVjKCqCsRQB"
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

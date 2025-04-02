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
    "zmobs9Kw3tX85pvTGJrCR8b1P2o1YDvGvKesR2ASPWAjLrrFaohQ5uebFAGW6KAUdegu1ComKRqo141Q86tiqkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fPVoLqSsp45RscDjfpUagwXxnYZZKyEDi4zTHkLDy3phBWLt4hMnmYG6cSGMhPxwQpXn6Xi9jCX9aYPhrgp4RbM",
  "key1": "3orivNY6tprwtn1p6kLfaBbFUEWCdCS4ZXiAQpQZdYutY9kDP7UA1KiNgKfvwWmAAiyPdMFnTdPNg2hKALJUw1Eq",
  "key2": "3XP3uKG5TTpmXJzaq5Gew3whPR1QrBHDBpSFTGLqNqzPb644w3Pgur9kMM28uzLrp3hknvU45uwgeKUQm1p8uGS",
  "key3": "3pWzvmScnxUyHBksx6sZ8RAyyYjsTWCDvMPujwnEPZaCXifK7NU8AXEKfwRZPQNSChygFGhK4ymESiV4wA6Sq2o9",
  "key4": "4F6WnDSskLD1YPtGSqDRx7QGKC72J1U8CycbNKM2jAjb2PDCw3PNMKvMBXWEguhJpSmvkVCMZ71kZaofJmULzFXK",
  "key5": "4h37eGNf8WS3WeVEsCCnmZiPRDbmVmE72muFayVCUt1B2tWkG4WBRDKMmVgAbb3nzNMSsVVezhyrnL66FovZgtES",
  "key6": "UVJ5C2VwyPdAZ5zdrDQM397pARerRivWS19KYyPRSBG81hwxETgWsoKihdgnNSu1NbdB17zt7Ktcx7EeL98UZtE",
  "key7": "4njCN5YT8gPcnucTwFDDF6be75EkgokK1v82m6LUPzEni9ENLj1LRBHL42EKBfhe7zfc5rvmuF8XuFSz55nGGu5a",
  "key8": "3YpWHtTCyMBiEvu4wQNUfyGHnQGVQfi73cHWzpXpruGewAk7hnwGodgg5CAc1USQXN3Qq1hxAk8gd18V2eC8gVJL",
  "key9": "fKzADKJGA458iEUcLDLKsGzt6XcPVD7LA3qnkPprHSsdsmySN2526vv7TkRvJCqnZWax38BdCNXmfiagEESAoQc",
  "key10": "gCVAgTdyvqL241iGMCRe3QYnvoPwWFNDfwKwMabTobCsDikmuZ6Dx9L1S8fLAgJVN6izjZv7gRjGCQhSetrMrE6",
  "key11": "amNCmRVCw4SJyWX3j6JAf5LrZxamHMhDy4rttiscABpWXbdLViCJyJnLx8dGe7whZrvRmMUfT8gHwo6Qg96EvW7",
  "key12": "5yq1wCyycotAmmFrzV3wH1CLG1HHNeiMPSckphCz19yu1S8PPvyHNKSqa6JPFEaLZvFw4nTDGnhXmxKN8ZELPqjU",
  "key13": "5DyBf4KQmKkQJi6uZGiv81vR7p75DcBWMbenqWb9Xq8BahAZpmnq3i6q9bzQa2fNfZaYz1hUKfMpXbvJqgXemhyp",
  "key14": "4kq1XiwMdkni8H86NTHDQPWZsxcrbTmF2Z7YcdivWqcJcDiS8aUjnCiFoRpTuApwNKo6DQqCKXvmorUEGdEG9Zi4",
  "key15": "3zqJaqvbtnJiVHmrgdvkacA9GE4w8MBTFVWhR5pwTrCnqnsL8GtSkov6B6FM88KTq4Pb1pJmkCCQLMvnYTcMNtU2",
  "key16": "4ceywqLC7aeabERqr78fHN7BDbZzZrpMG8mM3aJDPDoRetWavJrgNZTdozRUJ5rqjrjTFoDNi4jJyx3eN1sCLY9f",
  "key17": "Nj5feWC8S2meXDnzzPkRgDPGfTEwbjdt7qDhchKFqo1gPcWbd4YpDVJ53dUqN7ukPF5iMswkkmRTjDcNtSYr7Xo",
  "key18": "3qMeFbgzRxBgtHbpMm8JiKt1CCMH4tL3nmD6Ln7VKjA1q69YmcphJiwXLMnLoSnAHiWS1thduMbDN9Rn9xhNvVQw",
  "key19": "5NtcbSmPST8ZWHatX4PckG4hpNqtAsVARA4q18cd1f7e2JJNrw9bkmQQBPKytqsMMqkrdyeCVhVQ85Jdoxbhs8H4",
  "key20": "4wzai66vfPKUjb4FSKFoXjmomspPjzBvpq5vpedmcdiYd5KjqDQ3om87bk6GcnzvtBPYZWb7CuLqLZPLgB126GwK",
  "key21": "2UACCx6uYhifcwmsK4FvwPTmvf7jSZGaGKWxosSzYAYWbrn8p1Qvi8BSACdSsgmEvMgKRLENVE2ju1twFrsx6Civ",
  "key22": "2YJc3d8C64mWSTN2rHXfUw46piHL6jMFBzoBqVNU7PTPPppQUuZKRGP5CAfueW9CXn2VSFvEy5KwQi52FpX8ZEA",
  "key23": "5bFAaDjwE16eF7Bhmg56BfzXqPtduoKo5PcAWbjvA1b9VfLia7b7BqjKLdyjzYhUGLzfxuC2kqbSWMnavyT68ZXC",
  "key24": "4H82JLtWYcCzFQ7mNMst6bAzi236jEaaGUdXRwWmqUR4o3VEBQ1pbWBP7A2UgFKBFkERfd4mm5ptzu19SLgryB2g",
  "key25": "4KoSMQ7ocAGmkKovTxyDppeqZ624mV6LV4UdJwtcRAgpyWfu7wuYC5p7UvXK7A4Nzq5Khvrm6oSWAWgYSpqbkZG6",
  "key26": "5bH3jMjFvHTPH18fYyoKj2XTqVqwgM9cCqye5GuLcwNabrzxYKf1q8XjJzcXSwMSTLtNitq7s2EwSQzbKDMqg9Gz"
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

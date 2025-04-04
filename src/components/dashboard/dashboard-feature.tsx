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
    "28kCVf78QNuiQV2eB84vFrJER9KSqNcwC2sbXtNknfgn6cXtx5M8WkQSYPRj3obuuMRKxdU9Khsvahm5U37E3eAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cNedbKNSYuFioWs7ei6mmPu4EG1j8kQccQNhMwXqevAHFFZi6TBZRt4UGMr7i6juqcYRkRRVj63tCZN1mXHBTtU",
  "key1": "43tNnzEuF9gkNcKorkJMCRiYtJx1bHiXLtMJ3YAog7uvLW9fFELLC655UCHFhcsi1A5q39F8etXDqrxuUieRes2o",
  "key2": "65icsXsXEq8eCpPeF6NzDtcHQsjuxPUAVfm27xDbmwZQSVgGkZNvV3mRVowqM41Q9jbFGc4oXgoEujKEf9nV9Jia",
  "key3": "3JwyMYACLNseLYGBNSNDArZty6G3J9rQRRx9TRgQVZa8voTnnVpCJEYNMWk37rZ9M3EphSuAj8qiVzxFp858eYy",
  "key4": "4LfBeiTgGjgwyeHe2zq3RiFJTJ11hCa13T2F3VQBjTc8BZmQ6xVLnt8LqukK8vpjTAuM5FEHbiSschnCvCXV6cGR",
  "key5": "5R3EiYbyT96gXoEccVCC215SXGzDfSxRJjHD81JXoejGeczbiAMgzSmJsvkEb5Mz5E1FxA6LicDypM6RQ4Y5XcBi",
  "key6": "5Ji1qfRE8BP2EMdVRcftt7rvAScFvTdb3JDKq4t95j2HRtKYDEUqWbej2vtesPm9H4AvjHohk56SDx2BVypfSNHo",
  "key7": "h3m7jMr78uaoshuRusNEeQvLocaWP2cVkLn8c2jRDMWtcgHN4QXiHde7nvFb8tMLbX3ZAzUtyjHvsB7ywiuLape",
  "key8": "kXcnCmkhLNrRaVfh1kFTahoK6i81gcNN9eCF6NxHsZfpRcy4L7bpsbRyifAB1bt15XY4M3rz6v8ohNGizHS8aYA",
  "key9": "51csuNiPxfafipk2c267CFZjAjLwDH2hNGkeLXVFreTwGBchJ3ZoHragFLNNpnvtdmxt26iH7JvC3wsvVtq7McsS",
  "key10": "5JAqmoZg4TjYHxc3CCxoxNjZyPrFXrd9vrH4J8LJeDVZfFNJHgN9fkTGLPu7ra5JC8SDFnj6emMqm5ATWY54r9At",
  "key11": "5Gp5R5z7u3PhWH4uUCy1FP2xzZLQCUR3GW43VxPSR5dumKLhaMGHzum9xGkv1KsA5JTSGWGpCZjEntnkvfF4w3y6",
  "key12": "2v4pXyx9cXQ6UbzUjLdNUvWXUQqDCHEDkmGPD6MiQbWyBBm6PrDRtSFigFfjkPaCX3HJQnYy8EPhzSQFpeCN2znR",
  "key13": "48UQ7UZSSHiP3tvWe3f5s6vjsfVPihwXPcBv2D9B8Jj6nD7tzkwbzZ72mB8qEG5JkvqTfpmXJvAuEHonnvDXMwpg",
  "key14": "AFQ1VXgsxuFVax9nDoHWMXqNgKi4DXtdcGmn4JHupj5QPjynGN5BwyVyCm4cBnJn52kUZzJKNEMPyHCRtfmQH6o",
  "key15": "4Q7UZPPyE9Jm7io6L8XHxk5i31maHXQhJkGAnswtPAy9mF7dE3kyCEaZrBvdiHqCbgjwBHyv25Psx1tdSuSRE91Y",
  "key16": "4eyjfsptZkS9FpTCvuYsSmkVUp7xzEMZamPtQsenxSwxyNDqRgBXpuf43Q3KCPRiz8SDP9h5umW7EdEe5Uatgdh6",
  "key17": "SsumPguGijwGCJgeUq2i5xVTy5xhvfQwtYk1brqdhwUK3H2n5Zk7VUZGDffEtQsFnuaAzmhf4CTbGNoLdFtaJym",
  "key18": "3i8GaPEwBKoFd8eEvFD9SMwDZtdNNZvS45Rk8qmqpq7sE3hA8jKdFArUTDoZVF1dthK46yCmT3ZgTMBmzLiNxesb",
  "key19": "33pyf2yLk4wFRcW5u1Bmp2Rcoh5ZKkAMJVXDacEN3RQu7JNrqUfjUzU8i6Muu6MUuJQ2ZWAnvJyiWpLZubn2jhpU",
  "key20": "58F2EkRbF9vkcLrXXShyTU5B7YoiP4bSy9qf9FnxDbog59pDyf33kD2NTfU9EdQmXP4xwMLJ8Vxt26Gjs8fLVRwg",
  "key21": "5y4QCKQgtoKizjQ6vcCk2BQmrGomoXaaXc6LnVxQAc4VJf7AsMQLUaADGFgpwsYNsnvvRAPH7sy7aDBsJaUVmpbo",
  "key22": "4u9ET1gqhXbMqszh7xBYyDT5Z7yqPMxdGxXJqH3qdTc2AJuByLiGofY16aK56ugTDjz4JRtcXtNTfjE9tYyGFG9q",
  "key23": "52kw16Nq45beHHmzwiv5jLoTpVbHYnXetcS8QsMXWFpyQxLX4DtLmqsh7qjsYNR7gE3akF6upkFiJgPXDaz5dK2g",
  "key24": "4AXUPXwrK4VifQHZkteUpi95Myyt2WJp2gtjK5JmxNXbSUzExhUWEt7cNJes8xUoprqqugjCTQduvVoTMXEbkp6v",
  "key25": "4Gbqo9eKPYohoGZbH6kNxHfqkbmponX82oGcaBbFi6288iiGxwdCuU7uYRwCqwFD7Pdxin8Nfbb5qTPHiFqsjUfz",
  "key26": "3oXbvxBozwX2wtqw1RUCbrdLQ18Vu8DjisBCymj1BYrSHdJLmqwnwxFi5vTwWh357hW7maBz1NyMmist24HzSN99",
  "key27": "4xLgXDV8vc3CykYC6JRpYZguJ2eHmeeXW5mWddoVUehc9Pbj2x74ZBiJ3oPHhuz5hjmCCiqLsVt39iALgUJ2aoo9",
  "key28": "2cTntp64SGK23QRhb3VadaPNeRVqk8YkWxfZT2rvyv7w3gg7pJ1tob4Q2spYpiqcMhYuNVE34DWEm9osM5RZmajV",
  "key29": "2tQ6zPYwENQciGsZwoWURiPT3vgpL6qn1KUkY1Wn5LbDEbbLwDRpcvDbfM6YA6VFs5GjvQkLjBjSt4cBJjX8vs2n",
  "key30": "5yJ4oqt9qU6SZ2eXKFbdA9hLnKkURRFnYo2SEjGaR4wbT3nGdFjWJBPF9CF1wAhW6pzTcWgVhzkVE7bf9t7ej4aN",
  "key31": "2qHLf8C7EKVY9sWPCySNY3rX6TvZd2pn7XxworDmHQNiui1sip6XpHAcj8QdTdVamdLP39UKwDmWwJE5vUanCVPE"
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

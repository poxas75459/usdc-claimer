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
    "55TwDzsYF5JDUbSFHihZ6jGyQLNFnF3wiAk3pxFyziGkxbrwYmrsKq6eFYK3cQSgMbJcGXMi4nveebYNhhyUvbC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yH34Cci9TbYcQnQpJMS93TdZL2qu9BwCk1KPt47WRzGyFcSg1rDEhPk9GCxFERzfg78TpPxYWC8QsZxiZzLqzjt",
  "key1": "3AfCt8ppf25baRbFYp5yfcP71VLsofc4tqmB4L2UTDgP6jVKCHTLKLFaTDP22gC9RdRWtzLvw8Lm1KmLB8Vbv1rR",
  "key2": "3sS2UrZzf7F4vnuLxhjksJ5oe1jh6TTp6Z9y18vFYNYGsjaxQvHDvRuXbUX5JWPaSGrowUn7qvUNBy2YwzZs5gFH",
  "key3": "wFzQj8oKtsD6Pk34QHX9AF88pfCnvG6SgUxvSF1mFtWfLuCXj33Cou9eRC98VvwcZXBSubMQCWZ96ho7QDYRASo",
  "key4": "7pjA2qiExo1ZePauhqdQApiLh2CSuNdMS6n4JK7RiDuAMqskNXxLpEwswWvQfqSAD6pQ4FJni3PtN3JiPyJ83Vp",
  "key5": "4EeTtYpvCV4UvMgHCMFCvoddJqsJaw1iaCihuvNw5NRqjBd5LHEsDjbro8157XZzuSZKe8gRtaPoUPxDJF3dj8NB",
  "key6": "2SDDjBfSgWgAxLWbcBoWuAVhjoVsHubU7vQPK3HqLtBEurcLsESTvHLyYL1c3s1ARjQZJM2QQgTvUYTGN8xqRiQu",
  "key7": "2DmAd3WvczxmtRsQt97TwBK2poNQrGXVP9zu6rs6UCK3Hfb3RBG6Q9mcLeVVR7S8Ch2PG6xM7YUJKER2B2zPm41b",
  "key8": "5mFG4vWJwKa6CyNT2VuUuNCCEP9yDKpuV8HCmYbzNtfe9mwH3fdUsSXuseUPLjjmgywjhzCqBahhkfQYEGPhiZuX",
  "key9": "1Aaso3LhD4kTpKDkwPSBrEYMFynW7fd2vHQMCWzSBqRHFfNZaNgvb2Gz3PK5zxZ89PxBkbb2ca58zTahURasZ5e",
  "key10": "3hcC6zn8TQ7VkjM1dAcN7X1xoPbSqtmr2mqr8JPdJk5CEnuT5fgkYNEu2KZy9t6g1akq8WKx6Jev7P8dq7A9PPRV",
  "key11": "3uWTGLF2kfdtcUL5mX8hszAKnpaWCQoKtJ8XNR1egPQyWiQXQoArw2C4Hv8LXBgEkcHtce84ewGj7yWxdXaXJ63K",
  "key12": "56DHo2HkjgDWeNjPMzvGS4LjzQ91ELWKVyGDiUvhb4LVWzWrdKGk8zLU61zq8yydceHLdsj9Rt3ZJyHytXZr1sC3",
  "key13": "4bnTCCJbqeAYrxBtLG1XVULCmYkXKA5Na1hzSicaHmNuHMvf6av4KpVK88Gh3eXDYiDEAj1EQaFSAvBtETCKnNqj",
  "key14": "2MxXKvMP3vwt9hpwh6BnVeNxFvE1n5qQj2aPw7y162kAXY8RBCp7Y6BW2NfcmMVb2Yi7TEHZ1jMfC3qVcryn39SU",
  "key15": "5wJfbdsVBMwN8ug4d7BfKc3KyyaPykUGSWi5rs6n7djXyfh5tVuYzjiT6rnLqCzkvHkLwheZMaTskTjbzVVM1HTe",
  "key16": "hoCH7PD7fbmpSTE5EsDdcjmKCyDPtpuQjZCWBxg1otCYLd7u1tbRs3Nb3a6wtUxUPVcDaoh9WQUEPnt2nykVKrC",
  "key17": "Q5TuvftGewgXcoPxH3QNoFdxDAbHR7YMMXfVDNYZfkDEkxwREimB1hGEAKAtJMHvpMCAxJrWY3oB7JeS7UWykwN",
  "key18": "12XNmYgwQT1ptudX8ZZMqA6cLuNzB7YqrL94zZEjbu6DfKXHYGJnq8qHwZeWVdruFVaAb2w3mqTLHbYRRU6m6KF",
  "key19": "4VRPgzpKDs8hRCz5ucrfnd9mswe8QcdK2aseRbPh53pDuyRxAMhhsZ7NAHfhb5qTFDMx9F4xZheV8do6vaMSHCUT",
  "key20": "Lqt2v8PNmkgKHCUu2eqf6maxo8UYHuaTzoBUNhdnauyuTK5fT4Aayt7ZShgsgwitXaG1wZ64sWYG247fvDxyxux",
  "key21": "3bJS5h3uZFYKpM71N7GCkUdSbwPY1g7P2YC8eRhV1kNDf1Qvz5JghbLHEKWdcLeKUkoW8MhnGVWs8RPE1t1UC8EW",
  "key22": "5xvRks4jLGqDkyfP4TvhCemdz4S2R32YGzPVBA1TZCK6u8qabpBhtjdpFEVGomVfKwQYQeppJN8VN7hDpHg4swfz",
  "key23": "5f8d7fjbQRTgcHhis2sEmRA4uLTCCVUzJkqkQeA2bXR3pHjLMEzCw9W92XgqzDkQAxfCshvNgMroguYSFKNFvZb4",
  "key24": "hawvxr3GNenxwQL4gUpX1Vkp6uxpH9GVDiTCtW3gYXjYC7jdqHBhEPCXaZ54uGEGJ1Fxx63wju5Kpx295cvxfsZ",
  "key25": "2qQZQXuazXAtVW8jVooCXC8QgqQJWSEhoGDyR9wX9FWx1kgpJBXaJNgAmQBMCMSRpvzm3hCeGVjcpk857obXF3ST",
  "key26": "4WgYQ9yGqz5qETVSckXQznWxKLEZRa3ZC52HYGrk73Buixk3VEp6fCyFt4iLPkU9bVEqiiXss63hCvA5GLhitsbG",
  "key27": "4E42ukaFGPMSJoFinYohda3TV5mzruyS3wzEkEckmEQ9d5PSHcANjFgSaJJ5zqpnc5M6FPFJwPH5amXJdKe1wsMD",
  "key28": "3BuSgZJbEqcJXXBqNYBScYYPAtw5cwvwNdJUvHVophqVSrXd2eVU8cEJv9ZYEuvweKYS48hvKrKRzLMpdiYm3M1z",
  "key29": "3GLfMSbnukpKKTVJQNup9DhP1EX2Z7oZkjwnjWBDGWDqVh6JWdc8MYqPfrDY2PtMUZmdPXKRfu3KMaHzezKLWYhm",
  "key30": "5yoW4eC1b7SvwrotKKCeM68cxmFqxcMUwybKW23ha2bFLYsh2yGDiwsEsaT3p86Z4ASozSvTofinrVhUpS3C65nt",
  "key31": "5v7cESWLhhzKZy49XjkhTWNQxfgHtDrm83WbuEhYyYHGNx82TvtnTiEvCQZ5rd56kZeggaTX8LEv7LAFCa4F5FRb",
  "key32": "3Px1veNhwaG1t1GtfREoVkSZh4QzwTTEnLwnEhga3W9dXg6YThSgQQFksCSUU6sK71HadMPmYpPaDKtyhpH1RXWU",
  "key33": "5TqU7d4JpkCyhRNQe5ttNLmhGhhTKUTFZtLLpc3qwkbEaPVXPiT8z3D6E6hsJQZmdYuDLDcYzzme18smxycFb7f7",
  "key34": "3TRwkzftivnm6BHED1e1wRuXK9eo5P9m7vRD8x2V4F1GdEk7mNHgEwZsd7puVUM67udsracqwK1tzV9ju7FPtCno",
  "key35": "5tubthuWyDV9Aow6Q1CtcXFMaE9DbE3s48zyZyA1nBoFEhAwzbiiEjz5ZUYq5HaTdVbPjxfnj2N8qpmJRe2sXa61",
  "key36": "9tefVq6B58DpBfeytPRYCSYuKjasJzpH73NvHuW9kGm893NPqGEE1UHVp8kfrrqGBKrwgboaVKuAKeAYU1g7YBp",
  "key37": "2xrFDQa54CFvjp2H3uDauWWduDJA5mTRKTcwC9bRJx6nvwe2eHcBP5GsuT3MKo1w3uwVzTagEuDm7Y8DR8kEnwiH",
  "key38": "2DJpHnUZeL38LHzQ1Pnu3RMR6vrWkTTDF7JgYwTvxHtVsMUumGuJZ537zxJ3NmwjwvpkQCdSz2eXh3CV1gJEjnJj"
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

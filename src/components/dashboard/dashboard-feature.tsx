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
    "3c1kxDrsdfpou9iTygEgM2UaeV3RdNAes7tmS3VpBQakDsgTht98ZXzeyneH96a9yRM9XLq4iRYpL51P4wwMGRyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uu9ZdmPwDMpC2QTG9NaaUKhUDYrWYCqmAH7CmQcyca6cFH4b4KqtvJT733MyHtCpEMAHriEuE3HwosNp5j4Fz9",
  "key1": "CxEp23xJ9A8Puf3cWHSLGb817zP121pg1k2aWtHZqSMwVcLJCDxgDm7JhLZiJZK4JBwVg2hksftA4kSSLGLcQWc",
  "key2": "5pVAyEPQN8AfLEhm7CfisXEhihWaumWnLmxfjY5ZsJ4j3MzNMHnCHubNL1EtxHu5eDN6Z4SRHDg6FG7d5g2bBAvX",
  "key3": "669s41tSbuBTPujUKe1f2xCNXLUDkrc5jWtYEynvUE4xXYXAxymtUDjmov8XtPRqDiLrAHkm6xTNFoxc79zrSDGf",
  "key4": "4S2i1RB3ZrMkgCCcwEBS1zGZkPG5TFEPR8qVbW1Jvt2vudP2ycYAtxs666fHrf8yJqiXtMH7jJAnka99bw8y1DMT",
  "key5": "5XzGfBD7HKagjqGysQsnm33u4QHhsWnguLkLbhyaFSNLBRXBpy3wwhEJYGDMasYNKERSdySnvVpQFfcgxBX7mAQt",
  "key6": "3MVoovtpdH7rGH2uUnid69cL3w5PMKF2eRtYbgXkh8CibkfXijNt9JSpVHAgn6NUJfg6STdZoFwspfa9Q3e3rpoq",
  "key7": "2jF1f1pcnKXDwHpFhwidmteFk97Y9rj6mMZG2ZNi8ZmSBvskQ47V6FKTuEwwhJVdZxr8fFtfEtFBmpT6ec3ydJzw",
  "key8": "26KP8qUJN2MoizB3MzSS7a6bD799F5HWiB7bKNjuh9ZGdubSZrSu8bmYoVX19QdPRbHQBn4J5zrv8KConH2NR76k",
  "key9": "5EeRPpTstyQt6jMQtg33yV63Zt8mT2fQyXdZKLnE8nLDbmfsV7xyqgZaj5QPR2SLyifssgnnA2aaWqGyxhQiB22v",
  "key10": "4oEbqRs8c85BQ3jv54yjbj3E3MGqU4LCNfuVv7bcW1fQxszA5Q5H74yoTvSwX36jWSMr8B9YmH6cMuVaXqX6wSUf",
  "key11": "3mbW37y7V1CAgBj7EhAVTooQGZ6Yf6C8zAPSFSNKFFz2w6hxVrJa1SmyTZQvJg9sxRHL5NRABQqWdeUdRXJwfLFy",
  "key12": "5XMEPPtNpumY4N2EtF6XETKpeP1LPBJ6CMv4i7Si8qRc2veEuX8b9r6iVYQsXGh6zKMJD3GfvFtxZhaihzvQKiRD",
  "key13": "5gziRpABrJ7TX7xyW4Hmx3EHPDPxwGFXK2xqSKs5BN78mci5fEPJtFTAsjX2pYJNGXkMBFaPUJgP6qnhcF4sP9JM",
  "key14": "3uDRwKNvhXX3zXELZnVqo26ECWvvEKRP7Fjjt8H4dhZqBUfdHngjZwQH5xbHS3xw5ue41FbGDzZkUFs8FtXAnAaq",
  "key15": "2FGzogRaQiL3wukG4tAMXz46aopo9JteFWbZgbhGe2TSLLj3fZ3JRioR2BZaRrGNJR7X9qbRVEQko6PDSLQPevjk",
  "key16": "4uSnEGf9xBqsLybPkhoC6Nmrvb5ACn1pSFidyciAZewoQR1aMRyq1vH5arJz6qigYWax6mVhsXT72WZD3HkJaJc",
  "key17": "5GnXeeGSuKCcopVfwBFxKLaYiRvjE1GaLjozLoj25TSco9A8q7dvjhiWzzi3hTTkL5xEZGTjbLq6EDKfzdskxaGr",
  "key18": "5ZgYv5xu9t1KmKXHvM7gcNZ4Maz5CthfD48mucKuG3W6xZbAPiUQXPZZkUL8dqebHbH6gyu82pLgmNWdwP9PkzuP",
  "key19": "RqZNMysMssTsaXa7N4srAttx6JwitJocV8iv8gJDEz47ZWPr7sEVjeBfSnbfftso6ChntoX7U27P5PJkmSDsy6g",
  "key20": "8ie1GHGGGt1SqWYH2kxdry88t8GbPxBLRFhq84JvAFSra4WDSaFEyGaZttBfPCmjpzVbgRufF33gER4pBpYiXUp",
  "key21": "NMbfGNhV7ZRx4emdsESMjPcagcDX2erDm83h3fBt3xuzbYHm3B3LEZz2q5rx6MgC35p8FdRXAibEyUtpKUxHLsF",
  "key22": "3ZRJRdRmp8qd9bwc8urmDsFhegN7CZ2RtbeqodEa5mwvLwVNKYWRufJ2g2ToX9vQU17PqnttqfwZs6yMQdh1iMjD",
  "key23": "3E8LBDdMLk3SNNHpzJvs23jQvEodWRKdM3kPQCAaJYnkHwAtYQkKj34b5qGm6gbc1AwZaK5eNDAMSaSXYUXxRTee",
  "key24": "2i9MxCW99QXcDXwmib4VhWz2REWSdQprDakSd2AGC9eScDCwSCTc9PesMTX3A2cxtFykhtR5FgUyKKCvQbdjmJsW",
  "key25": "5pVgbf4cKNtuw6rAWmXhJVWdexwXm1c4VaiH2YE4s5cwL1WXQtKBHWyebr6g1wpcUTbLtPLg4mwyjWTaBqTNUbLj",
  "key26": "nmzK47DEW4RTYGZHfdBcoX728ngzqF25K6wAkJAcP859wjqRUeT7dyJBHB7j9xhcn8RFcfAy9v2oFwqrok5PbdP",
  "key27": "2QDmFL8o89Zr5CAPBcxQZhwHApEx8ZNxxLtjJw4oxUFWYD5dWkWHgcS4GMMVRU5y7pS2KdyCYJxccWEcioo3wqKy",
  "key28": "4uuByBb5uPmeZ76jQTF6tiYqdX8X9jBgtcmhz9yWnzyjD8tvcyexqHDQ5AKuyecHWMcv19WMurNcVg2yzp5sHEA5",
  "key29": "2CjtGVH3K9cjoMyZM6RnqqTB1Y2hLiXnxRDAQbNQSSxT1hMSq47KAZbDYCLrusdGs84RDip1tBJbQoMFn5KXXDnJ",
  "key30": "AZN3myY95WXCgmYaxxEyZ7ScNKTZhNyyi3UdTpAZfyvGreRkUCwMrVs8ua6PbsAPVbDkzaQ9VTiihhuccLi9obC"
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

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
    "2xryGzJeLrdR493fiercf6ScH2cpkezx5tmpG8CkcoLyXQXYfFKFFkUAcQaUZ2sh4BW5QRoqe6BWYj2U3ro9C5tQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaDDRi2VY2M4kt5A9bvSexKRsmnKXYLpYVvjaRyhGC5aDzrndqxVMJQv5Fa4YVboVHpw8zxcAjagTwMj8pbStrw",
  "key1": "4Jp3EADvL47b3gdzdn6zbVt69ijqEqxEpPgAGv33zGpBBCmeNXNwZ9SJPbdPANFWnXyMp1Rj9QhZbd1w6Ek3ML8X",
  "key2": "2HpMRNSyGwDXfbHebFuDGcnJLSRbNq2XTDKeNEbGEo9K4Z9r2d5BuFb5DVEUmP8HhrjnHn8Ax61jjy53m6fQ2Mk",
  "key3": "Rdnsi2uuZEgPfm9SzCoYoTGnzvmmtcdJcPTrg6i9rQNpYTktR37Q9YDSShiLTdnYYdqwBW9jbH6D5KmgjATYS2v",
  "key4": "2gMyTCu1Wf1NDvxbEyMHRoeBZfw47vrGuiCKPTq3oiaKCbXaDqsgC1J6ss8oWVcQSUhMQ8iBhfzVi3jSNJ57Ys26",
  "key5": "2uW37a5uTDZvX1JydxUghUQKGkmq4mZJTiDEnRBaXkuT6LR2BZvcrUwjVAm1CNQg5CbKt88bRd2M9RipfLS9JE94",
  "key6": "37pMytJwdFToz3FhfeTjC6ZUWQd2Rt3HdEj3KUAu3cMvMRLXEk2UGkgjfTDHeni37pFse2EJq7bvGY9oHryLhyYw",
  "key7": "37wp8kApu1tjqcQ2ynghiJrREX7AdKFVxL6pHxEMF83HsT3vg3PXZhsUNfEozb6FzQjv9khCGFMvgxpHgNTvwckD",
  "key8": "4bzweyJVUwox9kuG4X7itoR5sTTmSfmSp9BWAFUWMhdxpaXc8XxoviTXfXpH3APCKhQXX9HqJEMNLMmrMgRrBo1e",
  "key9": "cvnQpv9ddvhe8rFAek3vQJBuwD2dqtoDwdrReJv8hczCRY1bsGXURPzLAzTyH679EWbZvcxApQkJLq3oAdch3Dd",
  "key10": "4Zkdz6E7WRYK4oEU1AKERnyCwAYpSXiUaZSpSkCYafcG5M2EXUYrCNpJzhuFiqphABNwYFXCMvjTwNyWC1kH4nit",
  "key11": "3RJhsCm4etAAuJNV27XU64JzXptLdoSDefAYkEAv2BTvgEes8Siv8gfQuo4qUcz5rdZzB6eTXmCdtSNqtPBNWwdJ",
  "key12": "56AzVnxJR66NvQBZZkTSsiLiknqYrmUmdFKF8uxfdiW22GKxyWPY4WiK6EbNjrcfp4Yk2rBqa5UXgSd75gjUoqbc",
  "key13": "jwEtmXKaowzqBVmijt2Qu4V2JthC61p6qAdxLqKfKW9HK4L5Gpd8quJWp2E7aMVbNBSagk259gScNdp2xn8LSQi",
  "key14": "3afQz2ChakZ8FKhgCRAag8J3S3HHWzcVFWKSAtD462eQjcyHt7MP1fbHoFP8SyeWTa5Ric3GyQc3ErT37RDWK2DK",
  "key15": "4dvfHCR6vfcMyew1w5XvbYQ5eJGd1x5VjtGY9Ztvew24HjRswDTCDVnHsChoDeh51QwfQfkATyjpEJiEpRUprExv",
  "key16": "3rweTxQrc8TFzYfFs56Lo9Zc71D1Uutu3BbY9NVWoBPb3xWLgh5g8VEYw1q7ecCXzN1NJh7qJ49mGe5gTKjiwtJX",
  "key17": "4AY71BTfckdtAo1Dk4Mwu2x5PCqJ57tFLXgJXmKtcNYK4JmYVsZEHwWf2E984PBMyPPmpCYfKRRtnYFVrJPMY1g",
  "key18": "4QNQAz2YBNzVNXpqsWexF5Fa145fMmtYdggaKfsNJPeUZKeMhjwDGW6SWxr5DiaWxfNqFypkyU5kNQVRYbpqqBai",
  "key19": "27dnpb8fLZYSEhstPwvCjcPVqgCtA6mPBigrei68nRjttDJTQHr5hJwrWALLYWGVYWmPdc49K1dqHC3feDjw9wGz",
  "key20": "3j1S6dB4e4DbL6D8TGeVoxQUNEK9ozrXSAHmy1A5PjXo4wMD9bDdDGSvyBYquANg4iC17p5cQctLpsPBcCDaKkjk",
  "key21": "9tbPRPLRobnVjq14e3iMaMXHFTsH1LB6AqRZinydwqsf2PVMQ9U9mgaUYbVo7cLfycA4nvfUPVx3YCEuRnS9J3v",
  "key22": "4mkwfr7oH3XguvBCdcLh1ih4swaTX6tnVABmy6TrpzEtcXgFf44GHwvUUH1mLtbGpwrQJ2pPTwPHvUyQRBsSRNMA",
  "key23": "6mEJx82tjL53EgPBQxEDjZMSjtGGe8vRq8yAJzoK6zA778aKRvUWuTJKoDjwV4TMqLKVno2roiKHhnwv6xxCeku",
  "key24": "2FKpC9YiqeSZGiz91HSRMGjfYPKir9emKAafX2uKcC2QEbLaDnKxsHs4Dv1KvCfsSD9qzBPDPUxa2WGqFNpXPkEx",
  "key25": "KRzH9UK7EYpnPk4dN5Un5uCSiA3QrdRh3xUMyJmykmJu4gJYDTaVkes2dHLCcYE4aGciLR5MgB7gPD9PK24eYty",
  "key26": "wPBjNqrrCNegYTkh3WMBTc6RWGwRufjyAYTDgtajsAqF3RkD88o4qpEkt8kfUrriugxgzvjzzMx8BphD1S63kfo",
  "key27": "2iyb37XkFygby87iMcUHkPhfLx9kobQpwcJjxxyWy9KV9NQquawGJNJZFsupekWzJkSfXudKMDgzgrYcTYgEk1F2",
  "key28": "4JiP32wZUmczaUSMgjfUnT6T38pDmX4zaN9Qho56MaEYRsMVvLWeW9vKCWSmJunuUvwKjXqbhXhFZmRcp5DKnMUe",
  "key29": "5D4zt5Fm14nxW2uUP2VMDGXuMhzeNX9cVcha8cRk2HsJKacJNrjjFVhdTMnmG3aRPAdNw1wzVofJpnQH5NrsT54M",
  "key30": "3uodw6HfuKcUKfDKqJEp25F8EW3hwAnKucEBUzFSuW2p6fgqRd9VdqNdcTFfe45YuJbBQxyckdecv6FG7B1L8CnC",
  "key31": "4NsQHcCmhMM3uWcNzxEuxqvaF8yxmbVxrqpNbLFpZ5b2rhPYACiEYAGUEsMPJPbvpp3f3qwYPquqiGNLvtopQNLu",
  "key32": "ms3aqvu8FQMBiu77LgGRP4M1qgZD4Ca41zxisZ6CAso6UcDpiCPwUmUfC1einjyd6jLFMKj9M9AiwFTYVLzd22D",
  "key33": "674gaNLjBEDAU25ckQtVWJSAG9jFFrJ5tDExkmVsiRyP8eBYTpEUuNGVbfQnyiqFmLmyrQDXNEE3ust9ne9UkNpB",
  "key34": "3wU4wY2k1JCkpoi4s2HBt5mXvmaxRGda9zSD2BK1ALjNc9sGN1iynYeKQjDeA9mkHTxR4is1dbU6C5fRZLKsHqqn",
  "key35": "4hRzejj2xHuSCRey4vEWqp772N3cis2XmVfvWdbJLuQfwUFyRKQsM6AEEvvEQT5HqgL6QNQMgWxhSuw9GzMTeHha",
  "key36": "64KBCBbvyPdQLL35rnqnMTHLWJkCVAm1ADRSqS7Q9VXP6RSM31a8TLnxKySguLLuqnDHGpooJMaQEFjUvQ7qsfg2",
  "key37": "4b1eQfuDcz8D73MiizEcjutxh9HxCg73qMYUA3c8sRYgsPnzpzB6fRkhEPnkEZnCeHeRTHa9QNK7VHEjmf82zUH6",
  "key38": "shBx7Uo8SarqB4kCrEXfuEMZUa5SNnrqddRpMCtLkA2UrEKPCyDmNCmti6Fq1NP532PUbfejaK9va2AqZmj8UCB",
  "key39": "5W9e82hujETp6dmHSaBaAeHUWquMW4ToJ9VeQsiPxvH1S7cm9dsMsBxB2ea2oxVsTvfnWJAPD9TTKW3Tm4PGYXX3"
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

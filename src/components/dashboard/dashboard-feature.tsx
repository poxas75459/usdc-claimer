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
    "4XjBNrjkF516ijwpFCyt4dQKMkF8LEkxTEkyevA29anb85TDaUDgJFYLs37Dxct5oStPuoXe6SemrJYdEVj6Ni76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZmUoa8TUHRa5dwTmxKTAomPSisV89yNZDtNFH2H7ef7bjbUfW8kX2qCyP1XKWMQ73MzFBmpP6FBpJYiuhRXN8V",
  "key1": "Bom2avdZbeBfkFubGTS78iTjumuHNbgfyKWvKptCkMubaGU78xDRMQEeJScWs3EG9cEGkSVFcDmzJKBBpdyFTZd",
  "key2": "24MWzBp8drMvVjRFhQdma4cFh8258gva9GGgeBYE7X39zgcKNzSY1VSRWvSXMZcuhuc5WjD9EW4ffD1MxUr28nxQ",
  "key3": "5PYt3j4nYgpKdR2UJNnKT8y8s7NQASTXx8f5MsZSUYbTE9hziBM1M6u7LGmJ3mqToXsmQ8vhLLAahWZpQu71Lb8Q",
  "key4": "5gp7zkXvypnxoofuT8aKwu2PPJUzXTy8xAN6irMZQMTftRuLFB4Z4aqdCm1wazu8DxYFuq6gNWYUEaTTCukWrJen",
  "key5": "3M7yotikiHmx2hXysTwBPH1wWUUCroz6KZKCAN3kVbo8Y58WKhq1HfG3TuATiBm6Z6MZeZMi9rDMDuajrrCNxSHZ",
  "key6": "5fFHGkipfD7Sugf3aADzh66PQfHSTB1vXdWjW12a6KepsPJSgsPH5QHwZnk88WK135rG4m6N91qsBY9WTJXNjNrN",
  "key7": "2Atr22ufDEa4fY7WQZJwTpqS3NcCSjyR4uxjQJCFxCAFys8ncq9RA4m88tinTxkEssFxZqsDPiqVgqdvQzu6aySq",
  "key8": "5gPFCCZbaBDVKowkZBLWLnuBH8C73qJ1K5qom6sxdC3VhfnmEcFeG6opxyu1wy2wk3qwGpvHeKR24RbcVQZhMwYu",
  "key9": "65pGUKCfdqqfLAhkcauBbepjMgSsj15nMgKnARzhXH1YT4noxwQN1d7XJsLsdFPMegWvXtJDeV7hEHLKfJ5DWoJt",
  "key10": "531B5wWFWB7ypm19LP8uFCDz67w1pRXrbZ9z2AWxnQFunATs2XbnJtdhhMiBaGrxea6oHEWoXXZ7u1ck8r2SoTk3",
  "key11": "4Jm6LT46UdPPkbzu141eZBw3X2665MG9MaL5rZF9oSuzVcWuT4eLSo3RJJZtC3qVMkRcb46spDMXRpaPCcHgXz63",
  "key12": "5TadoWnjPm3dDu4DPEcDs3wucYv6J6P9zgfuF13pfHp1zHr8PsFKKiFhDLqUFzkYQZQ2tadV4U6TYXdLPDrqMTqn",
  "key13": "toBFQ5eLb88VgAFSUfC4KMQkd5cr2vQk2NAhpyZoCRMdXwed92kV2YUeYL5xNQM5X1QpmzEXiGo3eNFP2g3b38t",
  "key14": "ZsV2CEwuSRE3pxVXX1FfpMHs9Jw6BtqCbu9ev1zB6TcRSNEH8gaefWATU3F8NpHEoqs7xUcRnjAzzrQEVp2K5cV",
  "key15": "5fozSLQ6z4EoRUzxGp1tAgbAtUrYthGBPmqdvyEQ4Sk4YZKbqBBsAsnseoUgZfmiVvNMKbkh7LDrPvWdRZi2vgs5",
  "key16": "T2JHGWDVLZrg56nA7e7ZWRCMUhLfJzNm3yxJ7RcYP5cxF9rKhvxgMv1vZUJDQzLgJJEpFPLoXCU1YozBkL6t5fK",
  "key17": "2PUxNukhjHJKnamgCpPjwksjhFAHgr9EiQhPCfoS7b8BVQs39fCHUeqJWZCFV5C9JpVrBUU5tuw9iaA3UEBpivwM",
  "key18": "5uvihnD7MH229wLMD4nnM8cxMHrw52KqvRpN3pzG99PtJpdSqbgnN2NofoETXnSvB5vtnGmTr9gNYk2JCdhjBYmF",
  "key19": "5qG32L4sQS47jgE8Nkdu98wTuuhnxLXUsr5xUi33aF4SfMsLFejxq9ZXbFzJ4X9CbSWvBa6r2zaYFFwyFwgm8jPD",
  "key20": "4bDatCHi4L9gR4t7RBrszEDfTnECLQpLBvYqA3cJjrXZYBe9UeBUQCsGGXbgT9AYgZqgx9EzAUtQduK5M3WTzbbG",
  "key21": "XFYSUW3mymUJRfHJ2MMy2ZUzERDLFxNBM3PzatYTfd4wYGaWJ9SZrEoBDvjb5ePrYSbFL3ZY85KRWGV1BPwsm5q",
  "key22": "RaHqnDWhd942J9HsqkyLrY9Vz26phtSu3eF9krrTfZpqYotNVbza4ECSuT8dNscFrYG6EKEV7MvPrp3X24UaADa",
  "key23": "4sT4xpvWBZmD9K9NrkBCkGvDAmvEjfYjFug8nE3m7cazBdB7cCTTdGdMBvPrPMEyfYJDMAtnMS2hfSW7xrQkUvuv",
  "key24": "31PdGqJc6DjKEgQikXrPP3zT3ASB2hRmT5Uu6uzequWeyBhzySkCGeS21WS39DJ2xS64PW3MMY1fNd18gU2faLVc",
  "key25": "5aLTmU68swYaHHMG1RGzxsdpCXDgcn4p8sKedJQvfqo8HNLS1rq8XHBrosjARtvzr54e7ptTLSDZbNCuTXKRrBSy"
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

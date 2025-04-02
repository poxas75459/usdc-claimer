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
    "5xyauyzoXw1XHKWQYfskcz2uYAMtTnnuKDdu3fjJXMB7NX94fZV55diJRMSCMgoHHfqrRRqmLA8wZ2VwQKuMgB4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mz7k3JPp5qqyqk1ozG5AqxGbaHVVToNCsF6kwVRDkfi7aJqzMtdZJQcUSBkPXPaZrJFUxvjTfJw3Adtyd2YvuFP",
  "key1": "65uwH1MvXsF8McLUmeSr4dctNoAat6iBmEaJ4TeniByJEnAiNCNtzmupkuQvnma1rjitr4ViQqd9aWkFCfKdTQq5",
  "key2": "5MkdRMqo1c67siBYXM6uPvYvn3Khm6NiSEJGMJAABbRa4QbBNAM73Y37jRJs6bBhBMwcenkqnRQXJ4HUwSQp4Jmm",
  "key3": "5maYRiidp3ksMD2NnJPXP75KP2mo7yE785uomBFuv8rUWJHWQd7Z2rPQ9Ye4tHXaycUzAD8fLvaKf1gfz7JggcHA",
  "key4": "3npNF7g7rPWRQp724nzBDahwaa2V2jrfFd46xuqtxG5jRcUyMLsnQvcy6XNSNXyBt2EhqrJLhB1tMKVSMr8Qaxs7",
  "key5": "iBWbTJd9VnN9E6f2mEBDiBYiiyyVZprBsddkYk9C1wfPMwZgQqB439sbwCmChr9VKq8QWtavwkiz5xjpwAwM6j2",
  "key6": "2GtUPqeyEfcKLGcNyoVNfiZu7hoXEk1roJhNYipX3P42saBrEimVTdMrhCP5owKkGPtzBs8akgPR5R7GZ3wYiHMX",
  "key7": "4QnPLzWoiJDStVLsGiCDccXyTCFRxowmBgWQTSXaSFGELzu9XaQV4uFQ5LjgfPaHAwxKjaRLUHBJYsCr9MDh9d1F",
  "key8": "4Q17JiAXfzvuWbRxGSY2XvUk8RHxY4NmCzJxGBFaYMex3CNQtNDq6sYeb9J51yP9znMkBe9Y7Q99orAeT2FuTQxg",
  "key9": "4rvsCHZK3zywR4S6zr71h6bzTzrM5hYSFoYPMC6ptj8nmMrgbfrXWU1g2jtecwcoTz2ccJgzMRLtLzQQhzYeKzuV",
  "key10": "CS2NDVV4sAHeZcJDzXWechNpzS6HKH5bKeWA5P9vLuGCJJsDF3eb5jLgfia9m2d9hCJ2hp4dAnKCLiskoBp95Nm",
  "key11": "nEZSaeuzLrNaVfpuNy3zjG41waE7onfNvwfbhdZvLq6mGmHxbRmcyDNZpgQXGmPcaEi1m7mVQ8hzTy6QaTUTGjs",
  "key12": "5Nz7dZrkV8WAS7AxytMWLajvhGeQ9fTGt45TQ9vwDdztVCpBCPzGt6kEjghbkHjm3xivH2BGFmEM45a8ovypNBUe",
  "key13": "4QUq1vFX2YG9VsFrHqozCgCPhQaQDqqhsGivefXNvwNorbcE3qaZ8NRt2qxGuPjN8kTvJLSxQBUbSK8SePy8ENaC",
  "key14": "3cYAp11otQi9FCJgr8P7k3Zb6d1eQ5kib9M4o1xhyWtsvAMPDytxAe3a42LfBZiktLP3iXZt9eU4LaQSWFJz46MB",
  "key15": "66PG7dopG2koW9yzQnJhtvir4LfCLBqTvyCLJyTCRM2QhDiQcjZaRxuMzXbxokaPhv3v9kTH5FoZ3PmxsSYovoWz",
  "key16": "oqVxhQt9VYagJDH1Y8v9Rhpqos1J5v1y3HsjsUBn8gFpjsob1XYiGkiXWcjQQ3AkhvZg3dBoU7k9C13qjfLFiX5",
  "key17": "3hn5rSC4btSK59bDwSu4K9kwsXhUxL2Ptb3tG1g5aC3B1z3vpRsZQfupDh11FYNFDNC23u2GVu2mzNkxVa4Qte9s",
  "key18": "yYV8jyzDSDFqjDxWDCYLgDohQcG3QJ6cBYoGBRhNjThwmv9fBQ2UNA15YjvJDveo5DuDwtxyvxbWAn84oB7Jut2",
  "key19": "udtYU5q7ciqC36bgQitKKpuo4eMMVnz7YQ2BZ8CdeaQLHavikibU1rCw27XTSqdgwmB4jFhgYwoJ9SmNAxdLXZz",
  "key20": "588vSjNJsn19tgMc5mSYvWxRJV8BM5yedMFLhu5QwrXnbc6v6dD1ProQc4isJfnZ9JKiJhtxaVe3dJM8xTiFNhzK",
  "key21": "3abdedSPn4VegmTyxVRZNBD94iLkEyKeVsaXR4wN5UPwDoyZz8nof1v2ofQLPRAJ42NpLomcLb3EgwDai4b44AZx",
  "key22": "39BSkQDJAG7w97Cio9iwarss99NHKeoXP66o6gA6TkUgsJsfWyJQzwceqaFQrWJvwFqqZ7raSmDVSAoHQKEg9Af6",
  "key23": "F9KSDPo8rHnfZxxBahks8VhqyrSXF8AqPHpdFVS6T8Y2uXNSqYvBSsemQHmQi8TySW7VNVuhsttfrVTWqBff9Vu",
  "key24": "5y6Mnx3J1UsZNme441bGLYrXe5v49t5rvRvUf39uxLSrSsot9BqkMbaU7fR2eJ4RpnvEk39L2fJV8NDJcPfcnRhV",
  "key25": "3Ta3M7Y9Y7pzBn2Dqu1gexwaXnb7gifmP6DntP1GHNFKT2QPFatFwVVWD9vcj12EDhmZtaMmPL9ytdfhbTepq9ND",
  "key26": "27XueeP1nW4yJzMwK5t54X3bVCbGU1YPHhvrm9JRfXGxy7HM4r22QJ7x6iQmfyNA9rmR3Sxh6Rt1e4ZTDRrD5A1H",
  "key27": "2DfSVjDdQKnR9EFBEkBhgcZnMDNiPCeAhvvkYCruNhk12uTjY6JZzwi27UacaB82tqrotZWR7UhXbosRkrdHkMx4",
  "key28": "5q7MN5uyTkBwm5iqky14H1nDebp2fyq8AW3Aj5G4uvEMaHud3JQcj39rQxHaT5ZBnSte86vx2S7oqHzJ6CteCkC4",
  "key29": "2fSNJDqcVru83rvRBTnv9HeZpa4jA8A5zM78RDfiEHiKfBKiWjLfkSxgkWWJstRQ63tGbM8XfNNZSexJh9xsy2oz",
  "key30": "4fiGwav7DWByqoqmGXVTP11NCy6QBVF4R7kewmQMdczPoAnEk9Z6b1ZChhqCKrMoJBecBdEFPEiisrHpgr3kKysT",
  "key31": "2EFiyQSa4af5zyoWEi71mqSEBLQ3wvuypVA5NCsv3sa8nYinDatN2Xnzq67p5bQdTEt4oko2nZDCcRxb5qYzngyr",
  "key32": "3ET6oLQhep3y4eDQrbie5vwx21bR6prFUsrdjhCAHUxd73WNduwfBnkzViGncVzrwgsp3XqVBkBSTJknGsHehANn",
  "key33": "44k9wNhU1QZYAAR98LNvRxrdYbcrByRbE2SSFW3PJagVCmoZZ4DpvZCihdWTCE8VdrLaRZqe3qky12TQvXoQ8Lbs",
  "key34": "4rXpoxASPo93yDjheqsD5uYmit9vkwjE7QTpQd3auMukfrQ8fBU7Pe23iBFzq7A7csv2YiCxFFR72JNBEVsAAim1"
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

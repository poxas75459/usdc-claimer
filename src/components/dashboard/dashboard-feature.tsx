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
    "2Aik2o9vr7r8cVEEqY4anbmR58gJtze7kS5kg79T6dqA5SamT8w2bNfihoQanEc5S2Xbc1uWRzx6WeAQdjJC2jQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvDJTnPyHfhiNtDBg2k5wjJJWwRX57sSxmfFhcERZqfvpqnbSbGrbkHh9s3ur7YvQQxW6bRMQhMmB2TS96wmrms",
  "key1": "27fzjg8HzXJw7DqhRGcBMisUN9VciQ9Kd48jEYU9EqWBFPDvC2YpKr9Cbf3qPpqPnv6g6tfrEGa2ft5qLw7GKMNk",
  "key2": "2vcS2fPmUaXQZrMd2TXr32xsALcqs1JWJ3VtvFwS6sjQJG9pQT3XMnFW313K9ukjEcVgdugE7dfVAuAMsdzNfZAg",
  "key3": "2EV6p9HhoyaD7BxrR56MSo1L2Xq8nAx1HueFQWBdGWrvkoB4hAGwUGs3ga3unJhgVVtHLcrrmP3C3QTMXoQxcarj",
  "key4": "2vEBc5ptBekgtXg9ZVPVyZmLFWsavVxA8eiheiEsVmGkExq3g38BQRPVsWR6WEGCnqpnfUwNYnN7DNxxECUW1Mw8",
  "key5": "3v7p9TAvVQgbVmPf9V6ooK4ntsrMjcS1XiR1nrudJVH424C2m1b4nY4AxqQA5bWK9GhjkkDtbHWefH4KGWNLNPUg",
  "key6": "59oFbjtW9UEZdpQEZ9BJrXFKn5MdSEYNQK48TN5KdswEkeJov9Hxmnw7KLKJ5dP1iJxLxGwzJoeUVHpyamDNDRud",
  "key7": "33TGGmPntLUoeGdeXFgbjG2KFDtAJu93nUJhYoAWN92YBAaiwp2rEsTp2dcws5ddu1k62Fto5AcfL1opQjFBmH5g",
  "key8": "5hHhQ9FxpGudQASG3Fz4LY2wctMyH7WhiqF4Hv4gnpPYKRfUuGrNuHikFGKKg4GcnCUmrPwbaxnfWGSJG3eC7SCG",
  "key9": "4bvvEK2Tbt8HRtZh9XBxajNurKFLVrw1FpFmBVVQnbwLqs9w38UxjACFYJdZQtTu8CRjQAcshFJhmYKNvKWE94YX",
  "key10": "4FtT94uc1kQH5BLphX5Drh3mGHKwv7Jjmy6DD4eY2mPcAyy4CPn1iR6Qk6Gvkje12ALBtcRLGHj9gGA2s4rbDo2S",
  "key11": "2iyodgYWmTMVzLqVBFNy12PwzqMAEDPi5Sw1sWDnJrJBUhg62N9dbApa85ebVxHL6vRwizFQpnRHNTH3R1jtdAg7",
  "key12": "EXs5dkfpjTtTovV5HXPXbi1mHRqdzAzZZqufqWBs6hKQyuRZHCAiiFG1cVnbrBcmddHYZMv6oZSQC8af7B7Uy29",
  "key13": "4CK9UbBzE6gqbwv9XgqRtZJqGnEZFkUHYwspyzcBwispwuvJLQEixBDhK5RRcE5gcx4Egcw6tw4UPERHjKN72KH",
  "key14": "3VJtdoMyMWsyQZUzjXnzyPxPbQmaPBmehA8wHmRYVznQtnGKxNHWy32uRr59QQz8oprUGZQrJd5Ruf6gdrTbPrFD",
  "key15": "2BzwXbWUDFqRhP6dwQbowK2fKD7LBFpNTeqXSg6dnQCJqVBAzVnJRbXmnkkNZjdVpLCScm2h5ymBw159JF34o7tY",
  "key16": "4LD2t7M9Kaqy9QVcR7YfHvkC9WsZXZ8L1n3p9FnsKy5yfCh8FwLCARtiY6NT3VbbHQZnYFHJZTDp1SkfXJeVxpsf",
  "key17": "gcFReUzHg4ARFvg2w1whtvccE6abHgk9v77Zp4UqvngK6kALaYayXJAkBxMWYoUeKdGfqs7UeEryPK2CaA3Kjcf",
  "key18": "36sXs4o6GMgCDdU8w9PgEvDC7H1doqC1WMiGm1jow5X6QwX6ESHuqAkbSLxrLz83QpA4i6mGMEyZ9rPPht6NhQnb",
  "key19": "4ffc1o7xAGFSfgHArGphLxpCmXQ737iFo8Ptd6vBg1689hRDxtK4DXpbHb3FgzijtyNiXeFew7iPt4Wrq58FBc1p",
  "key20": "C82usfcZFyQN23mt8u2tUzDXZwVJvnn932P2hcanv9DSCHibRLh3mTgjB7Zy8NXTVn4pWCp37ugVN5kYEvuq7gj",
  "key21": "56FVmzqfKmBosuuckjMqUhoSu2L7YpqLcyZjkxDy4WBLKYk5GPBwek4mDHyhBsKjhFftHDb8WFcZ4fgVnzkyep9c",
  "key22": "4NDRXpV4DDNAtJCVexnKVSrLpUDw5WXEP2kncCpPw4Jxk8PMfLSijQPziZxAor5Ab4bazeDMv9WqsfeZzR3xtNaT",
  "key23": "24vvDimq757LVDVsTca6NKVvuTUwszAVbDnQyZXSZadVvLmHB42yY8KpXMYYFwkycNhcvtAtiYJok8vMr8tqvZsZ",
  "key24": "2Yd1Hsji57c6AABdqzEBLvwKDLbjS58F2AM1rpWwTcUyC13qjsxaYEkStMDxJDYSZNm1hJWzkGKtNFMcyBvJ7JqP",
  "key25": "5ttTJpDAgMasd1QGjZoYd3daKjWFWum553Jc1FdK3sEZFCMwhFFuxnUhnjQrRKrJws8FvM9EMMc2psMoDnPg7Ta1",
  "key26": "34wm5W5HhpZaSZCWfC5AGGibBJPCk58eaJVoNs4DEpdDtAYkn4yN67hALXxyFt8BodykqGFsWo9pEp94iQuJCr6q",
  "key27": "3UMuothtjLwrVbwFMNm78gV8ZoEQoq2nMPWqPEPf4Ca1g6pXXmvMNaiZCa9UgH9Jv4ejQeKx5bkHk1SYwvAq3J9M",
  "key28": "5BLxowMYwvzUxVsFatJBB5pXEPZthtRFczoo4TBXbtaErcb4KiBDMkwz1yX9BML3doxv75Psuw2eDnez5qocGvjh",
  "key29": "5ZUL574Trw4QLcQYczopwumGFnFDgJdszoqpwikzVBdRtRhzN2Mcq36BhRysCvEUyWYSgCxwjWtf8oAuD2Q9ZSoF",
  "key30": "4gpud6hKJPYFYEfNDmqDYzyCrFooU58hcbspG5tWTSEpYFCyKBhb48CYHMq53AcKyQuU8eGGTUiR7r6fGM2J6YuC",
  "key31": "57XcHwBq8xwCz58GSCdnkTsAJAvN4QsBwAynvBSeouZvaFhJXJaxVghKm2HaGti786FgEGPH4MvUEBW45V9AKeyg",
  "key32": "39gSUtvrSUTgonmcUFL8HbCP3NBMFqwQt8BN5QAiMMF9WWecUYouM99gp2uDYtRxeVc6B9iXjitTvWAfJcx553QD",
  "key33": "h5xhyaxgD5mCXucM66Dw19B9AhzGMeg2J3jqB4Fdi4bFNgrqXXrLTRrPsiGqvxrb7Za7NrsTpCS5VTA1HfL6VTL",
  "key34": "311CLrbH22xTFb6jPimbif41tXQXjuGJBVpPpmYY7e62iiGvr2JJSitN8gJS91JnizBWS5ZQNvTjJjwCXmnvvpGR",
  "key35": "qiMrAuzrmFNd5y5CoLUd9cG1eaqBsRTqmtcRJbFFx1oURgs16YLSLrs2Nh56hM8q4dSak4zFmcNCWxQyTMfrAx2",
  "key36": "5sByvM7LUPfa7jD8yZQM18paWd3zxKB5gJgJ9CJAyaAWb1Yiww9tcjzYLxUJFMkSwkstBksXm6aJmVFGou79k3K4",
  "key37": "4NyqkVNaPfQWjZehg6DH6hwBuxJvLTVCQJPSoPjZjHT3wzGtUXesj9habyeozV6ARGgBtpFVuQDTW4qvacgkpzgF",
  "key38": "2cw1Ggv8MMFCnbGm59co2G6wRQ2C2Dy32UWDX8hmyGCt57zYyN64DPqWqmumJhZPyirCjbhbnoUhB4YJvGTGPraU",
  "key39": "2z2c8AenqnKddUGhMVBeKZ3VmKhqdYT7jAgCB8CfiT44djLkgQEAG8csLzLrr7Ky5MT5CYUnkkVVepxzVQ9JXtuD",
  "key40": "mSpY4gHi7JYQTFQ7RMbyTzzRVGoqapz6LwqbayhXqPqNtK2WRr4WB8X9xeLXLKYDjr9KGSnmvnP9zKLFa7ubCKF",
  "key41": "3LUDuh8qJnUEEps51LgdFfTweGmdCoSc1HN9FkWonH9E2VWR4NyYhKRxPcyG875PgY844D3h9j262QpvnB4u32Q1",
  "key42": "2mmTnodhKobqsn8uECXaFrhryPDQWWm1fMrbQXNKfotnq1KGYXd4viJ8njAopSJUMZ4jRTUYDQfFuy3LuucqqhLK",
  "key43": "5f4nk6PK7KgE7EQ1h5Bw9UaShrPJSd9maTYqGQGUAA6jtieZdjs91reRxEQ571RFAAAd31mqDXNHuSz99gikZW3N",
  "key44": "36ytHhNKEhDAiqLfznEShqMssqw7BB4qV6NhWYL7eRT4GwcDTE5rByMFGV59zS6A9J2bLKzHDuNnYvY5ft53C29Q"
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

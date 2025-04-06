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
    "j5FzrkzAUNJoehsUCy5NAwciDUKrXqN17eAnN2sHFzRswcKArhkAnMaSXvuKeJ4DJegrd8rriMPg8pAKynHJgch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "266EWu6bhpatWmLyRiD46FEyLPfo5YCDkKjY85bQ5mJq1x4b2myZLMxwcqNoFyNdpsDXURKCfQEH7YTw5hqfM4PJ",
  "key1": "44rVTHEpfssnQmyg379YW2ypEeh2bybWPb2aFDKKUyDmfhmtqMjRnr8hYktWFWt4h3nGuL9HUS5WF9ZbGsohFZ8C",
  "key2": "5L9BDgURk61eLZWiXoUQUCN691qwZXK6xv68VNF1wmivz1rebC7rMPMmz8xEHW3ez9VMGWXRyfzLbCLmWFPHohEf",
  "key3": "4pER5bm6q4gu3wewKiJDMTUhCuJ2uKx37fuZvLhfuhoLv4XQ5QLtv2FfHinwMxB25KrxnWE5oMDAKLBrmveZYPGx",
  "key4": "sE4tBnP4NnZpkzjWzay1DxHNejjbBDPSxYRfmytbvSmr4C7CjMTbE7qj4nXKg8Yo5BNcjgSHerKnnjiY16Sj14j",
  "key5": "5JoQiHAPKaSnDQrm5pPcEJV12LDic2CmJk7Ar3ihSjtmkzHGFQvKtLPsLFnV7MSdbJEwwp8hTTja8jAciQuMFPxm",
  "key6": "3nyugDoguNgkQJxcydunHtBkFAmHLHd1yHA8UTGshVjuJgxTBSwXGPWcH5okYSFFioQi1eFFYvgELsS9gdtGRv3G",
  "key7": "5EWvxc4ooqkJkxhtKfFJpajTMMh2bKcf9jp2DuvzFfYcR36Pz35aRtMcpcAHJNxUkbsCGeJa1SPCxVczQ5esB6qW",
  "key8": "5KY1sMFZb791kdZAftrQpiDrkRvdKRN3xnYMHRdyB8qxCb6A3tEvFjvQxfaaGFDxf638sJ8EPLHkRs3bkB6bvKuj",
  "key9": "a8UThBQ311WMyVvMkbu53Bh1mwG9S76eQcry3VuUKG3mAMJFpwPWs3Wxae5nxaqRkCdAC4Ff6hvAkvGqhHUERNk",
  "key10": "44TN7DWCcm8ivkWkQ82wyqFzSjp19kGzDjHtLEZgq53Jdxz4DG8cJVftyJoYMUWbKtgsALqzF2EcvY273Yk9ZGYp",
  "key11": "3FZjn92QTtXe8xwefPaRsRVBmYyocAuEucsxgdm6f6Meof6qPHpDWHgeZ7GZFgawp47pGxFd4FXiKCTgvVDFmwQh",
  "key12": "2xreR2dELqnZW7nrAxgu2YNnUuQDQPzrtf4Fnp2KbgJwTQQ6rwirbStr1XfN3TJKxTaLkbXn4GqGZjVN5FE2LJgD",
  "key13": "2HtK31T68M8phLW1ceTbPz216TpVVU99zt4pJTnFKZCShXcabFJCYqj6wH8cnBd8Zs8bkRpumUpPGKxb8W9o8ymk",
  "key14": "4X2vT5t14qmhSge6vhtt1tsifP7XFaivnFpPVZx5F8awW1eNiqr2JWCzZU1mKn5MbM5xPkr3PzXdsL8J2DSL74is",
  "key15": "9w8whYrw8283LhTso9c1uFGX4Yf16Ge1kppSQQvKtMu5fKg5YuPwCVHKMaeFUJSehRsUgcPEd7ARQJVzggdtPZ1",
  "key16": "4ZYEy4wbYnvwgvbtrFs9ffU8j3dqnqoPDujto9zDmMUdPckmXJ6zK1En9jQ9Vr5AsjtLxPb7ERJA3MTRXjnTEASw",
  "key17": "3KbEBzyp7LPSRN9TJnmQNSvg9eneCFCXcMcdu4CKrv3Ncv31qvaQo2YL99q4gzFSN3wWHr51AELRaBzm9MYLRFsK",
  "key18": "4Yx5K5v4GDepYxNBTzThvAHj4YVzxBB7tAxYFrKBoWrswvb7KeSYVWrX1AeB6Ar7vXsgHzRR338whNLowF8zTJUp",
  "key19": "3noM5kFD3xzGQTQUxJHtcDkx8x8tQoeAN3pyUjAaNPyxnuRx6grv9FyimNmrXCm1JoUZGvsK5Ef7RccQcXUZfnRq",
  "key20": "4nhbDXNSvrPamArJ4N4fFBy6Q56u6BNyomRottAyHG8xDa2P6Leeeo93CggWxWWZHnp8J4shb1gySSHGtDcCr4Ah",
  "key21": "5DcSqnhPmCEQuKeNkj61gtKwHqfmNN3ghEF5fS1a8jZQA69z8cf8NphEJuBBjxS4kasP2GJoBavd1eY8muf1r4Sx",
  "key22": "5zG974JdtqQs2uT8gSDKrGZgvEq496Y8kASBCGQADUwbde5KDFF5VfLEyg8a11mHEGh2QZKT3z768TX4eJg7mLNa",
  "key23": "4JCmFtuAf5XTCZ1ZSknccKFsSSaeR9Z7KUQRzZ3CKWgoErWqyLA537u87kwC5VhhRooHFvir1LVWbWjj4466aEra",
  "key24": "GpnM5VA2EujYqLR2cspPvL1CmUCBxkAkkskXWPQDSdauVXg9BN2ii4Asuxp7FJJBLSQUAw2noAcuCpzWb6HXmWD",
  "key25": "625fMDxUDpXEeVDKWLo4MifK8q4VNyzRHU1PZFNeUYUmKBZyUW65YeduqmzseuYRAoDRcw5gAS6Bakqv3bjqK7fx",
  "key26": "2cVdhUKVBZJM4K8pgqzhHzBovh6GkChnKzFihaTbDKy2ny3HbrfRMq323f1U7J9gL9U1o7Wbhbg5V18J5dC1DF61",
  "key27": "4zA3qvj199S5mRpcY17BTkn15WJTW2yzo4B71HT5Q6hebyeCjcFpheZJE2sDiQbekem6s2J1W8M9NfgJNQ3u4GYi",
  "key28": "3yguuqJiAdWYVMKE6URTzdpokL1CVpTD5PoyQtaqeHr1zPjV3tfD9pgyqNJgv4fEpPc4GUZg1gZRik724avErPZX",
  "key29": "cfhk47dPSRodv2yTNVjwLWBurmiqcKawYrirBzA3bqoNqfuoyWsyrzt1fhLuKb2YS24kq5sS7H8SXCxi6TtMyAX",
  "key30": "ifBNJjP3CEoozjHkP8sFxTnsfF6GM1JMLZ6F9hxfq3YDU6f5pMfpqsVsx8PUk3KeZqggmZ6oj8i95cM8FRioN92",
  "key31": "4MYBEMrBdVCCuS5pBKmChZJ5ugCQYe6N3LSU8U5rtdqhp9TMyCKjaqRcqhwqZxx2cp6HGsvzbATgKyoe6oeZsLMX",
  "key32": "2Tt4joQKW83hu5yWoGaENMRr56L7TpVJWVW9q5j7RHyTU53YS3AN85s5mQAvc2ktHYAXLgySzeL6YA9TrMB41ni",
  "key33": "mKgt6F3pUrXhMHFyv1QcDR5BVpSMhqDJ8454Xu8nt2zXNNnJLSTx8fWcL2wEVHseFAN1meytuX3ZraG6YA87UDB",
  "key34": "5BXZ52C2S3GiSTYtgwCL2UoSJvCRPpNcQXHjWijMQcNPqogBLFPNriykbNbL7hRVYnBqBLEMsmP3knQtxBJMbVAB",
  "key35": "NMA7WCnEJT4rX8fn6AjUcfNmG3gG9RXHrxRrheZnyz9etbAEeXTiKEZVELoFknEd2otZW8GtxzSmYF4Hnis4XZF"
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

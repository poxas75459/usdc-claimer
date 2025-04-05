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
    "5HnnSB81khSdGAwcvhrhjkSV9qgqseL1DbzFxzk5HPodzox8nJBRsNf4kihjfAGSU4JGbpSBHH4WG5EtAzpCjrub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXAXWM6J1VsA3z872ebVWBt8BfRNwBjbT6p18jMFRhLt2WiNYr6NENadmXdneETR3gpJncX8WCh5woR3ojSr7mo",
  "key1": "bBz97SVNf6auYpeQnY14hyQadbWYNtajHt5kYvCqDAmo2Hv8LLBD2voMypryuq3bZ2mqeGapJcpsRbBsGR8Ee87",
  "key2": "5Y8MbgqCqVvxXatEExSyKpJ2zFTDKQJXhSwVthLjpshSTso8ZbyzbXbRf4U1URgVDr7vjG3fihDZjyDJBZW7LSvk",
  "key3": "2fHMewG4E6R2HHCoTL13S4uev6qDr4Y1YyA2AXe7Duhmnz7dnh9FXMStzB6AT83dkHA5hftGvCAgd8Q3FXF3uU11",
  "key4": "3KZH1XbRg2ei8HJqGp5gQ6919xXdgYW58xFQTcAtbpFWZoNoMt7Zc1JyLwUJC1K36G2pZTwEZumeC8kji1hExVL5",
  "key5": "3k6qGEcJGWLymMbHW2Eg3wRNYQiJFhSBFXeqYbcYMAyqAyUwbCLJibBHmhA71zsToDvev2ohZ3tH4WaDPHPajUZn",
  "key6": "3cgpMA7Tz4eowsD6YWcbF5jEtjXQqewwht2jbrpxkhTNXGTA7nRjVGTwNoUTJo3jnLxwvfmMvB9Rphjkzgo8deWa",
  "key7": "jLE7JH7gS8zRfd843V5atTEjFhJ6W73GxdsQBtdcVZhqWcxp5ft4bg3ZhSgyGWSjUG8m8mq4rRGm2HNpaEajwRE",
  "key8": "4tJY5TYFjVApLXXij7Vtd57zD48FUDatDi29jsz1CS88pSKVwmsSSraSdVptMnmRT1XP5Pj65Y2PaAwUyNHrtqq5",
  "key9": "4dUhL1FLQNPDDYqP1iYkyFTtQVBgrRdShv9gAt9rZKkzsHCJApb7EkhpoWBLYvz49pmEVrHfEpvhNoPHANMBTLu6",
  "key10": "64iQYaqvYMC3PF3u2aGVrcNyzho3Y2eC3ZyysXPwNJk3Vt8Y1PSTwWRwWW9k2FAQZNAVKrd7ixxfFyYj3hMJzapA",
  "key11": "3oQ7FPb9BT6TjmF6Px2XaCtfi6QjPzTbxPC58XJGZyqdTKZYJfoag3anAVtphWPbLunVM1zn6hvmWzqWW8uss4ng",
  "key12": "4AyWLMo2kUoxC28gMj5K9jtzGRdyEgQymzdvnm2r6cKko3wjeWpJ3H2BeDYyosoFTMMzfMmw48XgRDJMUpZAScHm",
  "key13": "LbdjwbaAm2Zfpo2Rn51V9Eqbvq54nRn3RQ64Ki68xPa9ejtBL9iwtESpvx49aYUy2hZ1yrxahYDn8dgNvDxwLkf",
  "key14": "2qEvz8gpG8hwoFHeHVPm1PbeZxND4mLCFQCphBf3NNg6Fm8g89UMyXqQszPPkjvWWAqz4LQYEhMBrRdq1PWX8uxj",
  "key15": "4oMNVynBub9J5QJf7UjBeYqRBuFSfKdF5KH21wj5k7VM113vgMcRtNhiKQ1dLammwC5UXQddNAogtMc7Cbmiq75m",
  "key16": "5zmWBSu78XDRqSAhCC5P5rVr2xFBqx9z1NJt49nTJTSJvgMPTpY77ExXTo5Usmwxeud8jUGaoLVaSts5SSLbEsbE",
  "key17": "3rSrNsjFZ54GDJqykpP2Zw4kujFQDx9iicq2TSXfpoFC9FS3Pr2ta99wRKf31MUwrbg1KUBphhsLfCa5dceRhEoX",
  "key18": "5gcNRS6bN6Beq1eiGnjnwJcUENcdzZHAT6ngVLA3thg9VDPgQzrfjM9gZgFTfbk7aUX7Dg9v7av1nGFZpkY143H5",
  "key19": "2jMfDPGLT7JnuroJdwyT9MfwWmo4e4ZsHTT6kEFpXHcdkZjPPj8Y2D9q5YszyKxLhPvhGUUrvq8bWm8kMz5NorZv",
  "key20": "5ReLnKMLgHbR267f9sDgT4tXaS5BgKjj2ZwbT4gmWSKLf2TFZZRSEoGb8jXhTyBtVE3FAvVhmsJuehTo6H1M7Gpt",
  "key21": "5ucWJ8UnMAWmNmVQB2uLarLxU955MHm4b91UMoeNofQ5EUrAqWrfZkja1SXrNcB747otJNM1R3nySpKo6nzFWAJc",
  "key22": "213Z7yJnkXjFUHDUwYAyMuipQERAMGCTQf5WjaqEh21Qu2BuAkpp4i9FgfiDHvvZCmEi3jEibQQwmCvuJrVAdmTu",
  "key23": "2vQvbZafULtw4MNs6Yvf1X9119m92CCWcSVviJwwgtXtKHzrFnTMMMQeTexqTG2eUThWhdwRtWAXMn3EYPgaVU3Y",
  "key24": "2sd7stn7nzZTJzcqUnp2kWdar33atHXbD1gjGjxMLRTLsbX5biVXY5DuR4WHr4MnDrtU7E3se5kvsysQHR6H5fX7",
  "key25": "VSCS1DGLC8UJ1LRSMcCLxefxJGgj58318stJKQrSL3mRQvrsmYicpHePHLPzVu6d8fEJf7YbAokYC4u5cC3DqqH",
  "key26": "345LrQvyouA1wYAUp5msDPory38vAKG4seAZAorkQHZC4kSRgTP8C9qYTFfqpdcpECXEYpQHw1rMcbG9QB2Vzf85",
  "key27": "3qti2qtnfkNM9fLdkzGUi4dKKGnknHLFRdfhcBK2DpzEphqZ3iZi9LvXPdcNR2f4PKWf8YyQzqMWqb2jv8JWpRUt",
  "key28": "246kcdjbLCL4MtCAaUmoGVBWZGa5xCueAqs8QnggLcbWVgQpdzpWFBKKNNFUqFMpMYnurWdkaHFXmfz9yW8Ciave",
  "key29": "5xzQVHxww4nfuF1jM7Bn32ZqkXuaAjpfHWKAEPUpe1bNSjHKKRy8zcEB4md3neEopF2VxECSM6qX9fE81Gv1Ni3J",
  "key30": "2dcUiNr6FfDZAaBbJTRf2caZx5mLsfbax8GjHWfkgUbETSwi5RjqLMfL4Hkchj6ywNLKYaCtjNnbqrC6daFFpTx",
  "key31": "jFhcmozWeLegKuYPz2rCCu8fCShJCXnZReuk9jUDnjWfYRabZZ7Fs87UsbZoWf5qdRxnEfVM3XhYALwuxwqywxx",
  "key32": "4QskPKwtoYhHaVhiMsXpggj666QYi7a22LnVvQLh1xmVmGEMTRgXmhi7MJJuxoCT4XTmYGWcbHqB9VJkF9RaF1M3",
  "key33": "4egFFMD5aFXc4cHNL1Y7oMDC7vbh5DNQWxhKBDbeWgJYoBrzvsRWZoV1yqodPUWDQ9WHETCWMRGsXB9UaKRLpUDa",
  "key34": "2iLStgycUZrwwhqh1wmJEsBy5acXv5FvHjpoZr43DCpjfzkjiwmJ6ovwSyh1k99GzhpHiTB7paLhYp8Ac1Gey6W7",
  "key35": "3hSUFMrr5vPM6Et3sRQfQYya95JUD8om5ygbhgG6hm25aaa4MGXmpGS7cNhS4DkNRsM5sDtD8VkCjybrfMGvK3vD",
  "key36": "3m8eyyu5DeHMuVmq1smoU9teriwruURxRbjfBScBJTJzrCapt2Hj5pw6qXZzfJheasXzJFpBBx6DXTzcTpYyMQDD",
  "key37": "3D6tFjwncmQDXSipDJyGGAQ7QSroEFPus65sKiTMM38QmmLc1aCvaYvkMnzMEy7eCnN1m6C4gdYUB2VhfMzeQFbU",
  "key38": "5xcvBUGjcBDAAHerAAjrosk3j9ZAXPUNnxCAujv9fNXE1RcHvqcu9597VWv46JMeZHGYeJnppfRrkKFWvijDht6L",
  "key39": "3KY7tbG5H9bNuFhFvJTGo68KnPKrYtjELmw58qBKaHwgMRDbsUGpF4fsmhupajHWv8mYQn8MWTAqFCwnmLvjher8",
  "key40": "24qS2EihkpDSUqMEgb3xnYLpWRjDJCYZvaKzi7XZXHFi1WdEneTMx7rLFXQjNCNJg63VMHnEVB2TgpTAiV8DYeQh",
  "key41": "2fmZ6HDdD69TYQ2cEx3K7vUoCEv1Uz5Den2C1iMYM2vNi4Ef1nnM8F1dWPByMpjVCsKa7xWTm8wp8hNuihMwwztv",
  "key42": "42CBsEUNbTr69ubQNVa3dwwcL27JziGLaZYoeQy6dNniocXn947GHEHqBaxrg9LNug5jUgBvRowdYpqczGYckvVz",
  "key43": "3nySDiU3YhvfMuXS9yqRuEv7zD26Cipj8DT3WoK3cF8BPuL9mDedpibjQjfTrNn6dG5r5ji7aX71pJDbmA3MEeVp",
  "key44": "3rs9mLHJY1F1S8YkWB4tNq1uG2aXCv5NwjH7etT2gtFVNWqGQvAQieh5wde34Py5KJE34fKJoNHNfKF8RqgDFf13",
  "key45": "3MfDggd8h5KjFBibdGHgscihBz8XSjT7Zd9KMNAzfsTeUb4jS71PRM59dwoSSsemYtkZ3xCUWAZSp1oiPVgCvmNH"
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

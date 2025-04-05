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
    "4hFbpMcZNdttCheN7emd3dMKGNqwmnadpnLjTTZvunzgbYzGot9BcSvReWKwuupa6iJtAkfNe97Mhhukf6q9AUVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3djFNwRq7gzKUA8yMsbBG2kkjuGMfjHueeJxaHud5LbP8pVDrxwXHKnWe85hhTKCB7BCzVwvFAqYaQxbVf4PopPh",
  "key1": "rQaaScUxc64d54YZj1zt1QJD4ntjkLVPsCaU3JD4E6mgiRhYFrnLLaJsLXABFUnkHrytGCqZoK1anFLZhvk7sUP",
  "key2": "SE4VwfsiAeDStqcFpCbHBkAvthG2Fc1gqgWsmC13VXKRS8zZ6DTVjM4nWqmPKy5WJPwptRrjagUmPWcoDLF8tQZ",
  "key3": "ZVkvvyFU3CoSJCDBwVKe2y8z1dPLoaEcm8FJPinHXijkBBuaZHRz6d3Nk5bHJNbJRJfYkXnxc1o5qbcEejmBN9D",
  "key4": "5PTUneWbrqwfPdjkaGfVg35LkoBaeFAGNWNjoDLEXxWLgjahSU5Ycrh3dyD8imrgyjJsciRrNib92CY7tJKctrR7",
  "key5": "4TunASLEBUetX4YRJjh1mUPQ9Lb22TrpP4YaC4VokpAmESg2Lf1pVjwRj4ZnGiKFxiaSCvWioi4gaVsZZfoSrVfm",
  "key6": "5EQ3HpSsKvnvyQrfuBHxuC63e656fieuxQURBVPUAqZ7fMEg7qiCyzhQLSWcsjx2cbc2Ft9JtJyt28prbEkxysjV",
  "key7": "HKrG79TubPNMxQ3eS8XJZzMZMaNXuWrULchRDtH3mrm66UvwXGDLNaR7ZGjznRi4dfggmw3sMg1pTXNq781PNmo",
  "key8": "5wv35WAyBkRWjK92B57QkQtYXn2GUXhTMwU4DB3f9fGskT9NRtv2dMsi2sR327AcF6Wy1CTNtu98TdZe5CFzABFq",
  "key9": "ggB8uYZ91dVNZ6SbCnE6PJuTeqQrc8yLjhFYmAtmd9fM3Vz2WGprAboKdZB1oBG1FpAUz5AMWN5hWQKeAbUtVur",
  "key10": "AjVAYmT6R8RMrqNKnm7U63GAPLZxnXjxB3Fs9kyQJ7NFknnwNUZavpRK7v1p62VrYDXuDiFo89XHXe2wGDSeBRV",
  "key11": "55TXrhnvUANcMSfbkNgmPGTJGesPUKVRcpBeRXkAijSbSmogbQLLCWG2vYHExnRgy5eExPTSMpmVdqZHBNoAE8pj",
  "key12": "3zbC8sQ663bhDRES6ktzppycyYxNwxUf6tFiV3rk8Dqf51XjBCSy3Hb538tZceAVZnJQGHzqjEGgBJdQt2CZAZiP",
  "key13": "fonUGwWEWZgJosPLeU8DjxDL2A9duFw8Z8fcL87YW2KBAXnG7vNA654ekt8gS3PcjmhaE8GVyXELLua3qGFWWE4",
  "key14": "5DUfNytvoaxDR58mY1nHzgAhhrW46WSCgpSSTDN53BVsXyTDAmZi44T7xrYwYk4MbmH5bN3tmvGHRWNYNCJFhHLb",
  "key15": "57c1533w2j9L8ysoEuG6pP85t7KkNcJJXmYd8efFvJA2iemk9KxA6RWirJJ3mJBFVuFfrpvG8TZD9SUWRNFYq2t",
  "key16": "3LH41X2KqBKhxzqYDsNV1pVYj5R6D6TqWybLNgnAVAbgTysCBRb9avXWD8CP3YzhDh63xJQakezDJGeMu9fbSWjK",
  "key17": "4G2K5gKzX4NsDpcNxDGbXFWw13VLoTBSMyXwpzQ3Eine8Mp6QVvdxrsYWAn7ucmeyxEecYCM6sAMPTekL4kuRJ6P",
  "key18": "4TmG6vyU6rBfLPGo43UA1omKF6qaaHYpwKUVx4ux5915xsgJdkiMjbuTUoFYfAPWnjxuVGSGg8o3ywA4ncs6EpeU",
  "key19": "3xavnq1b9dBg7pd6N2ZtBvxcUViq48m3nAR6kiaw5qgji48d8mbNG6wLU6y1sBB1Q1HMumhXnCBvraMps4jfCLbn",
  "key20": "2jQoQB1p5T7qd9MV2CKQTBe14qCXvRZJkUtNYy1xq97nsTBcBzrTPadNyAc9woMA5vVockyuaZZy5SwCzv7G8PPi",
  "key21": "4Tas27FvA4FGShnYAnCmvaVHoNYUj3djnHVejWa4555WH77gTe2ZnNNjVEaYSynd5fA9XFuB5H8vvd8yfEsUyfVS",
  "key22": "5vLNBnoRcDH3fYAF76ZYhsfugKnGPbsRshnUAnwPMrZ2QDfEcppmqCS43FkHiLYiEw8S6NZAEWHCms713irAdk7k",
  "key23": "3yaE7aiGpuG456JYtHr3ou4M8FXwABBuksit3y6pQ4hWWJgDgB4VLhsXHtcFx9s1fkmD45yyAjnQm5PjWxTvJ4YZ",
  "key24": "QVYBes8bzUQ3VKT4eLKqopHMcinFpd9NAH8NNNMctiL3a76Zrebuz4ti2bnhMNZd6a7W4EznQekQwBMHvCQZmeL",
  "key25": "4tLcaZY1Re5tFeD22ahTLrghB4rkV7kCPWJHkJxQY6b2yWR8fttCVdrWnvheptbRWDRVb3Z61LU975PnA4jWbv4s",
  "key26": "64UWCVJi4uySGxTgzVXaRPUzmRmpNaaLQRLUnjHaUfSsEKf72HsnS3wEjmRY9MXYzSsdCt3cSi5d4XNksiV987Ey",
  "key27": "4hVkkmFNatjLF6F3tfGRdNveuV1vqXbcTbqrBYgSGuhaJNa8erbcxfqyhVN2VcqLAQ4WywHXV5Cj5WPt1hKs6zum",
  "key28": "4SJ36sVeuGXYWJXHr6w38tikBu7qeNu72CE7doesK1NkNQQU7Axq3H1zGQGs3thb5PjoVBrwoCpXJo4pjFebcziM",
  "key29": "dpYEiKWgKg5foiSqWoCADENFm11i6FgeRAkuKC5WEUfvMCe8fvPXJJNMKm1zaoALVymyBA8DQ499bQdeWb4V4pu",
  "key30": "54wPNxWKAQxFyayQ4t8uG7k43mvoCpo2pEoGLo5oidchMSrDVFGGfSUv9YDFo717EkCuYDnsYVvecQ3K9DHKfzkR",
  "key31": "2uzjYbXeAmcx9Bhi6MeMJUGx1s6MfYykBsP4Sh3RtDFh2r8r6MsKUrEtsox7ZnsFPFJmsxaeh7PShTzEG7JCkdzn",
  "key32": "3wB3sAVjS8qyEZsuPHRo6g9FDxbsmtneDyDYhUfBBhpK9d5yWcgZ3xHEm35z4yFL253AiadVrXM2f9aDWF72suvQ",
  "key33": "4DmGGM7BfarM4qEfJk4wtViMeD6FmFmoMgrbGeN75iNEwdoAGUi6S1mH8crEZBbtyRSmgnSsNBXewTTgZbkrG9qy",
  "key34": "4XtwMoMjRiMHjde1xgKS1Lk3VGQE4TxcVYPUxvgrzvxCmViMtA2hbhSGafJ4MFGmS52Zk4pvFjBuSUbW3Vs8b3cd",
  "key35": "4bk1yFZAuaAxWjxF6mVCb6bwoNYgMHidZMX3FSqaCMYppyJ9xnL266vXYahYc1cwEuso443cHKymxZpp4PeqTfvQ",
  "key36": "66y2UxLZ3vtsFtT25oArr2dKaSxyZ4d8UntfuJ7Wbhgi1xqDXW1TF8aEuwnhmiWVhLmCMsv8JYp5iS5q5p62N4nW",
  "key37": "uSvTwS9pr2bAiUKDzPtd2dGp8HePbXZCfPXGeda15CtsnZXq5mJKdBLSVbn3iH5sghjwE9AB3GYfGYHMfg81ryo",
  "key38": "2UuXLwteY1F6GhJKN2vdS1TF7XKyHUu58zFjV4RYV3om9xtz9AmeTLPuBccDXmxqvupxVJoLm641J2NRsKDBsXDo",
  "key39": "4hSVavsGX561T6SfBHhvdSsA5ZjCrMsWGyCcJcTm1c5WBp3KecHt6gn2wqbKBGigV25KsvNtc6VDFZgxbr5kucqZ",
  "key40": "4y7R8dHjomwGUej4BB3wioKcBBCeg7Y5qP4V7buxn4SCeYyUo49tTUsQMVsRNYw9DkxpHbegnAT8NTpUSTd7pAFQ",
  "key41": "2hoRQmna2CP58LKmuAT3b8mW9mLs4CR4ZgLzdTxqeeTGpRkzvbzk2hka8ytW2AfHwH6Lu5wom5b5XNXy3uV6SQqz"
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

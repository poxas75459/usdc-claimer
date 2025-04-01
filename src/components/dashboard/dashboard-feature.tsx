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
    "5J82xPYZZHGCwVP8eH3rbKpPPzahtCqx1zi6HQ7Dv7S8i1f8bnqDTHHcL98PJpf2aW3KGNHdj8pGpWKrJxaLAvde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSMu1BmrJGhuomsBVdoDMdM89AGvFAsBAffiZd6HYf2HYbJANNRuoZHQFBTw1GfRiLYUdxVg1CLVHV5T8E3Tam1",
  "key1": "272EJ1VXoGdhfejeAVNNbH3jpzN5KVgsEFEvWvjDdXzvP6CXVyJ8PMuXEfhh4SMCaLVb8HeHXoytAMtErwt1RmFE",
  "key2": "2RBVVQwAGUuhRYPxehDULcKQAbSAoJ4KLzo5HtKkRniEXh1U9osBnSdbW4JDWYAKiDLG9uUWiY8JUHNZvffhsxNd",
  "key3": "4CUYB4sxeuxEhS7vsYqFTobbEPLQmoBKGz87NNchfB1NWsatfpFuXWsShgA9C8m8rmH1cEkvR2aGLyrkVvM5StDf",
  "key4": "7rrwSaoyjtkpuGxe66sF1e5umzRXkUiNST2vFZaP2p6TapwpukhKxjrzdJqhXStPJpQVkh3Qq372KNweo8hwwt4",
  "key5": "5MSbmDYzy6bFVifDJE6iEqe3r1fan18pHtYrfeA51x98sW2gNC8hRoaRWvYPK363XXix6BxYJ2hJvZ6MHuWde8Q",
  "key6": "2kakZ7JFnuKH5synhY5PN1cYfUKqNPw1yeXd9rW5vQKCgsSJRRZa2rYkdWowzR6M9HebZb5pJGCQMZTjGqEZF5j2",
  "key7": "8mQ7DN41mHAeNYrUQHtJ1mXmHUzZDX7iEHeCZYBvjAgMLU184QCpYxnkTjucT3bzD4AQ36mFESM8QFJ9yXEyot2",
  "key8": "2RACeEAvZNfAMwdLo2CGFZLKe1565UmBYnptHAKZYwrQJQZRVxHrnAueuC8gPVWr78CkTQZauQFd4u3HEfBVJj8c",
  "key9": "395P7tar2Djs7AuicZ17GrXGXjvo8RZkysjqUBHKSAsHN35BpVYT2JRpEyXa1AS2m8CByVjXAUkAgiC2teQJ5mDT",
  "key10": "Pw51JWCPotBuVShWCnCAYNthD9zxFak7MJMM6Y3BJxrEyEaQi92UNwmn4sHQBPZDgJAMYwmDc2V7byM8aBJ7QNL",
  "key11": "4aqmTEXC3D45abS24z1yW4UbViyRpmPtb4CJBdK7zT8mvJH3RoqGuzoLyC9pJM7URQd735EUhboRqAfTZEeeuxmy",
  "key12": "uWAq5rA8vyvvQ6G15oopyw85M4nkXidGQfxQ3gTDyfCa4MW9TP999EVJQrLGcmskVrHb2DxypDPgSYMQkX44Mb7",
  "key13": "4mbSLc2HSWLSgZby2mbRt7qCs4tnXqqQWLGzP65hiHxsa1hSK7RzTLNmExq949M5upm2qABHn3KTU6YknCY2tQXW",
  "key14": "3GfByMu2Qx8aXsE4yddrDVjnWK9FUr8v9Za7DwzRXqxmtN3HdtwafKHD88ssT5Qms1tCotPQ7CJRQR9upmb9J5q2",
  "key15": "3Pgzbtn9WV4XYHM1RDszmQYq3PAb51mLV9NyjGJCtLbGTqwdmcpF7jkUwAeDneAWDPFZUXqS3n1k9hre4Yc7VAEY",
  "key16": "2vKADHRwKRzQvsqCb4GJKiML6h2yFpdBq5vsZiCssHjy3k4bXEqsR5p4QgCGm9UhXKnBx8Ynd1jsNsVMoB1pvNJE",
  "key17": "2iVpmqn3VLY9yPmY42d7FxPqug3Jrwcn5VCAGJp53fMt5aaCqDCQuYMBUpmxMHeBnoUZW3Mxz4VCLdMZzkF5YCuJ",
  "key18": "45m64uWnzok4mb5hHXc6k9xLyydWqSZYNSQDwYD7BtqPodN1SzLhfUPb8dFVNMwzHP3bx2VNJV1Ker86KQU9mJ8C",
  "key19": "V5Ybx42MwWBu5UXUTZfGUcJFJN2jLe1ZeKx2E655PHgpfTYQM5WS1cSr6BZWE6r8ppv8qcT61BkGzqXjZKLjgju",
  "key20": "4nrRipy9wTjnr68r4CL2ayGJLV1BXdJg1SyKqSJM1cTGBw3vzUmNrR9LCaKkpKQYYaWhzmPpW3ixNJjTAWy2U9Wk",
  "key21": "2d3CfEC5eAvhYjo1rtJBXKqU3y5E1ACzx6kkw6hxVdBRsiJdVW391Vyt9f9ywpXj1ebw4AUU8os8k5AkatuQF98Q",
  "key22": "4WPivJWefvkQPwBLJqKQNSohaAdtV2CFN7M41akjN5k4skzjzShL2kz5ji7qXhqCxgztYdxe6S2tcKzvafCCbCpU",
  "key23": "Z1SAKqyMoBfGz9h6961ohsi8gcL4b1rihCrzJTX9JNcm13nb8EDVkCmLff2cJLxov32afCHHpYSPXtFBcFMyuFm",
  "key24": "3UjiZY21cvaEM7oGEi61KXg1NVtUrTQp6H2DCyyJjsta5b7UsUC8E5SikYCgU14PaTU7hZX6So9oBM97MDV6dNxk",
  "key25": "55eDJnyNeqSE1UpYBV82ZXeyY1n7AuyN2Z9SMWsfn7fTPMMSaYpEdfEXo2yptg51bckcxEJ3YcqWjJK9ZY9AKUbM",
  "key26": "36QgzcBLWf8bg2cRYnpzdRqy536bPimgzdd2ura8gYBeYgmd5DN7QBHBNqnPjvQShdpt1AGwBuP7kb9stwgeMngu",
  "key27": "3SPSTzqDn3ziiMFnS3LAdbrgdLravi66RRavbibfcQrf4Cny6PehxQeNk5cR2mCnTcaPD5VXjedWr5ACnJYcHVbM",
  "key28": "46A74mxegxNc4uWTfsj1jU361wqXMXLrMQRuDfVVgf3ghKmzx5aZEsvPR14NioXdqGVGuWT63WWTt4mZ7ywytKfG",
  "key29": "S7eJY8U5XxP5rNakpsGGr36Z5UnP2jUKQGiR7jpD82z3W1PiWNU7JB99mgmF6cZmDVDQpL1fxEgA8hyBtTfMQAu",
  "key30": "3jrRuXmpBE3QaXdUtARPUT9x9uwcENcawtg7x6usdFdxR8aPFGi2LYM9hU7Mw49f482udtScZ3XUsNGGizpqH7tL",
  "key31": "5pPnWxm8m52udyqtpVbWCk3hbQaipj8XZ3R3zH2STvZSfaVG26BqdyqGz3QiXhu3TCHt2o6iyMBw9uFpSfwne3YJ",
  "key32": "3Bg5bpi91qPX8zueXCdXpGdeY6mWqD4ME6a3g97Dr9CKV1BSsCxSMTHaMYBgawUR5zZoFJjqVabMGdWrCVdUg5Un",
  "key33": "21LUXr6mRwtGzGEV1gFfF2MjDU2U7ezNETzxnoSZ4Qf2dPXTHEt7A8fZPp6eCvE6LpjoVDtLMr5QWyLCGqWTUGDv",
  "key34": "3bfA5wNDTbAYfxBi4pgRPrcDJuvKGNBxi6FHxqZRtLaVjhR7v1m6WqYSxwSksqso5D7B3TropwkfMAXztpvsnuS8",
  "key35": "313H7VCeCyNJ8CbTnvJH2PZgXDQUyvX2eWGfMChZnG98NZZq2tv3i8XzSrcaU8Wa4TKyVdGaLcuBuCyf2Z3z3wjV",
  "key36": "4rWCSkg543SDafeUidKTVrcBKaLR6eWy53LQ3TGUx7X7pb1KcDHts8BtW4sUmb2GyJw8bxyEGEGPWnNPjBW6ZbR1",
  "key37": "5uqcYztFZKx5yKfxHDPJRFV9v8gsSK4pcuSnUcrYJpAo8BCXryWPrDNgR8ZeyZ1q2LXkg9cE7SBH8p3G64acMAbZ",
  "key38": "5DDwzz43m6soheoVhwGSu1CFcF6Cn4yYh6FSNUJwn4vNpqAPXDYJbt4XtAuQC3Y9JKQsSWcmDYtztPKkQ4ikcKC4",
  "key39": "4MZpLuAcnXJKSYiTYRQB34s7QXoGrop4QaDMVAYCX5kuRTCjquLepQSqVSRJwyQV9d1gbj7hKYcczifiSsccqxqh",
  "key40": "3TaA8qvuc23cBJGbHPHboNTU1uwMvKsJW1Tvn3AJj91Af5cj47DmwvuK8uixJVZ53K1viS3YkKp4jL2PTXUtGccF",
  "key41": "3VFQQvqKVoUCwFu8ptA3gbSYXqBojfP6JQA9QDyEDdke66qcKREtfA89YcUxjMXzxux2kDCrsvwwj8SkXEqVz4PF",
  "key42": "3CYyVkwBi2t6mJuAmv7Apx7Ly428DXTkndNGcd1SWp4mtPqCzBPdEwWLi9D7UkKGK9dgM8QupfryS5rTo8KvYPKm",
  "key43": "qL2Spx4B2cRwJupXwDVm2N6T12WPuF6SQiDPaEdxBzsqsv2fGU5uUTc1LS3qnw8ubZkpS4PSxh7Q3oV7icr5pjk",
  "key44": "52R7Uor6Hzpecp5MJNfsR2fyFtg2w5kNG3zJ8XYua77gSzQ4yFcuJ35gyuUUE8HE25Tk178nDBZHnxMybNWMA4ik",
  "key45": "61RpVF2bQpE5uwzm2FAwPYnFTbMWrHKYnRM7LFTtbrcgSim2aahypbYRsGjMEEX2rjJh7ji3JLCMAP33U2xqMx5X",
  "key46": "4o7wL1vnzEJ2WZ3PTV5V1tAKkmYCASMkU54GKgpVv5R2q5bP4KEAWUPMkFKb2ZVjVRUEtQz3NauoYruSq3LVspS8",
  "key47": "2TZBXUSohMJKWRihj4awjEvPMaTxS16NbZhB146UsbUapABhrw14J85nXUmzNXTfAAzqVDkCsB4Ahmy97qfo1Akj",
  "key48": "3RVmojanGDeR86rV9TGzdtDxhcH5Pj6ZtQ4NVqXyn17FyV7Ry824YUtdZ22A8EFKhMi474HPwQeMMTh9jEmSpzu",
  "key49": "2JMSpD6QotfWXRov2LwAUju6d715UuZEq31gYmizDfZJKM75RE8aDi5jtScTGHNbkBRWctUAU1pDJoFV16x6azqq"
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

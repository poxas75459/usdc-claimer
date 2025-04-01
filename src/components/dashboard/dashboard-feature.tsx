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
    "TM79Yb7sCpGcr6tqng9NSQzzCVuRTZBG5yvJxnFPJWrXUduwHAE3w3FqXeTBDzjyrmU26iCuwVX5cGpsEbagZHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvgVnzw3mdYzESep4dFvzstj7kcc8W1vmEjQN2VA97wGLTHsgBvpnpVX9ZrT5n4LzCb1RoBYdv9599xFELFRMkx",
  "key1": "2w2mRzRBirSSe6xdswjYjEGETjAvTNR6i9EeuzfCmMFj8HdrZu7PzevMgeGHVTGSmg8mVsCXcM8me8Hj5SvHTVdf",
  "key2": "3CypKAFHjP1XJQ2tPHh2vGp7aD72QMiLZ2V75SCZUgnRC4PcuHx3KzPKrVAPUrSkWgvyKcbdvDyRtzKNENubBw9N",
  "key3": "E1hQJFn1wzFyNpzkU4NcW6ttoYY9yzxZ5vnY5qLztLkiZvYXsUgcXyurpagxsDXT5p4p7Hg7bJHnoguhuCULSNu",
  "key4": "kyXBUCpVdazBCkYsZMTFm7SY8369sWoTuHEYoD9t1yj1TydnM4YayHJfebhfUUb1dtuGQJ7FBex1rui8oqc4UR6",
  "key5": "23R9fGS2pqh2wdd9sBoY8BGHpZa27XCYAFWNXBLyCe8APWwHMrneGpkCnebBDovmFDaiKzvPoVWSjCwTB4nZemXP",
  "key6": "66LnqJ5d3byQ1fAMQaiWVTDLAu7q5m1cVaHWKxaLwGTrNJDRnU2nSioivGRQqmczZpNpNiNpjeJPjB5Gd9ioTm7C",
  "key7": "U79b4yuaPZBU6T8P1LxCty8LTK67R9tUgejpby4m1FnBrVc1TSzUmGYFSrwYRkNRgmGnDZW6WJtdpAJaQdN9hQZ",
  "key8": "3AdQdRjBUaXoNkL2NcXVuEEPsUPYBzurbEPpXzfmejd86xU3814Tx3EN5o2nHVpYUy69YAzi2eysaoBC6AnbmNgG",
  "key9": "NKsvUXqaqvht9xb2rWRxQJsZEuQTyeXdS6kdqM6amYNLwnFghs9s6meanwpiwuyVQ4QdE2F83FyAC3JpUEdPfbv",
  "key10": "4TysVVPxv2Np6cibCx9GBKerAgMDLKvLK3VKcxSFiDwaVeLmTpcKc629L4kaWAyhfx3XvRtudhEGeQd1mW99MyeA",
  "key11": "3TNhuSQc4M8UXmrGJwRp8P6uVtT1gwmL3rfvsKXwLQAVybfrk1psuBaQKwHuvas7Ja6AVQvY8BtjuZbnJ6ZvmMJj",
  "key12": "xUanuBYzdpmWkNAp5Jj1XeUfNSi3A8j9MFNSDHo5tdmy3NNLhENx5db4563zoXu2RbkM3xwQa4X6tceiZ7yhKpY",
  "key13": "3Doi4X21UsHG2kwK2pqxL8F7hamCZNubp4SHAJQAQmDMcruAHqh4RJoyEeW3s9zRK9yr4SHkxnvCUHSBq8TX6VK1",
  "key14": "3VubUmzkB8ewdrj8ukFUuUFjZdDDZyBEQuKbXrYn7BbyjCuD3tM1BTa1JJFy1XvbMoDSQRGzxnsyb5i7vzQLxYsH",
  "key15": "46UYVFnWBk4AHk5ZnkqqH46dv3ojuMic4URAAqRaxDCkmNhjUxNBPyYuk7EJhUAJcH2cQyc16RB1qSH7VYqmuayF",
  "key16": "4SscNM9iXCNqHnB89Pbo4wiiLVCtTFTXhfsoJmBYVSbtL7vv9Ny8NyFXKvBxZn5MMedrWme9AsrP8oj11XBYD39",
  "key17": "4qmqwapCS85QHZAbaHA6oLQzNHTYohBPme3whL9nUpMEEMncP7xP9St8UN8UwVSyrdxEaDQ12uJ99L7RbhTSb2TQ",
  "key18": "64FKtrszpfPBSSxnCoDrKKZM8FLSxy5efgF2dW2kME6w3a9f5UJrxaxLm12aurnB8vJo2su7Zx1bJxBrmYxjEfQ2",
  "key19": "oa1GDV3Xn69rXQ1F6NAkoy5DTthRUVCN1XDYTu8S3nP8EtNugKZ4amqaNdEGo4xf5q57LKC2nSExVF5LQFdbQLA",
  "key20": "2mW6uUpnJ3RsiAeh2LzGz4gUWXnstXZPAdTM7YeFFHjBZp2kGYEWHP3ufbubpHDBSeyeyCX64yugPFnvREtsjgKB",
  "key21": "MVPLzjqAhHpCynwiywT98vew1mBTkyDqkFJf6ht5Su3Jtrjdw3qdwGrL6HptZkjLYh38UBMPi6Hkygz2Y74YYXy",
  "key22": "5fQt7MgcKvFwLZWD6SWDaAJBV21QyMVv53yjgyzC6kaAGU6LT7GDH2V1TrewBNiwhjf7VpvgKubuZNDr2GhHM47f",
  "key23": "Jgt44bFCCygJsZm9VaV6QoHKKGArn6pmxM2qP9SZpPs1JgWUXprvdkdK1fQD6fbn6BV7qMGMfFTNPU38GWecB9m",
  "key24": "4yijb626wtiNi4szPq9Auewhg1BqXbR28QcDmh1jnUXLtgLJWMxKEWbYUAJcSBVWjcDokCAstMD6H9sXESp6DfGa",
  "key25": "5wrDpSXFnHWs7gFb9aopoJGJTb6Yye2uV86iCm5NtcgoeF4PJFiSU4GF1UzYeVQAgzBvZfh5WMc5ofTCUv9BhrWE",
  "key26": "3yfHPiVoiJ9b1pnP7kpRknwrZQBQPYFbynk6XkdSNbC9cYmqzQ4rSfyAcGRzisxHChQyHWXB6Rcu8AwGMD5Egs8m",
  "key27": "642RhDZZuJYBzaRZod5cKQ7UScjqG4NQQ3AwuXY7ZSpPnnU7cioVqQmrimN73iBMXN8qxraugih74BLMfxdmEJma",
  "key28": "AadFqaeiYkVYSZss8Pu3A7z1stDeT8m5WK9fXnidny9j3dvSKvqZkLFZuHvpefBre5KSJ7sej9HXzk3jpUScPrF",
  "key29": "5SmCbjBDoupQWcN7UsZdKWoc4J3zqoAUQU2bc9XnBMePyy1D1jHsKy18dJZRQCGmRvwZxij5jLSs6f3rwTecj5BJ",
  "key30": "29w3zypXjStupjyovRANdZ1k4gLgXqaf1EPibeULbAReo53x63sARhygNEoayg2zLYA6maZX3nG4LqkE1uQZJenM",
  "key31": "55hnAm7vmNd7pqs9nTx1ktcUZNJKpPvx5x6HvPBoC1mEweE9YY5bjyNDv7wwJpaa8XrfE9cFij7gXWtW4Y34MNcQ",
  "key32": "6532XHPonuGaCcRaDUaaMLb7fh5WbM4fRRzQbvPH4cCwWF9kzicow3DCnv9B83MHKYX9MK8DFMizpxY6vfkmDiBp",
  "key33": "27vjyMUBDBL7TRWS1DiMKdZshsSYHR4dStJmEjzUi8FUHoPcEL9unftaGfYdCAjbeTs1HZMa6EjrTePZA2ad55AB",
  "key34": "3NQ34QegoTEGwDbpfEFgvQenusi8Xt1EtQBUc8fA8MLgAE1kSRZvJuAg81uyjmZ6brnAak9Nb8DeqebHdvKREpAG",
  "key35": "3WBQvQ3D16EZELCoUTU2P6cA4zoywwLbiiFAvPXcxEFkvMjp9MJSLRMeCUDZY3HVWdLYuGpmHLSQNKSmqcQvbHhm",
  "key36": "3rCcZKP4b4sGHYL6qem9yRSXhv1LG4h2akqXH9LTaBKBLrGiDs7Ds9nuauwWojREoEskPDEHTFJCt5s1gSBsGjYp",
  "key37": "7SW66bSsrX1wwx7dMD8sYoZovE2vnw127nbeSbrkdqQ7xdYA3eFPFWzEF4mMBykri4t8hzLr5psYZ5nCqKehD4d",
  "key38": "XwBsaLD8nKbbWYQmBdco9oWg1irDsh7wfV9w4kFrwonCt73VqaAJERSzMo7K44uMkWcSmc24KJfEWodiPMLK4JL",
  "key39": "sreTtNY6Rb4MEwaXWfxtaFay7dxvr3J6VVfZzo1buviZdqR6ZUXYG8nKCn33D53znqDK92MejM8AvYDk4469hU1",
  "key40": "pno6YcTkDkPHiPSsA4pzBLcWZ99AWErnYrYF23tGXENPjBKrK5ka5cHL6rdhUNpePyBrasUSfb5g6u1dMyfyWc1",
  "key41": "2miog8cSefaJnRi11tzskFCqNuMyRYt1uZmbACaPkE1BLW5jfGXNtREopLwYpgcViMQ1gxd7ptj1bnTTcm5DEW3y",
  "key42": "4Muwq6hYWdU9YaBPf9dm839TuKDLBWrBxWjyKPthSwod9Ndg4AGqt7WvMq9Bap62PEcCwxPcvZxu3P24RR2LhE8a",
  "key43": "MsCTuWCpVFKSPXxz1sddU4Hh24p571kZuPgH6ZToHHGcAKTTLibE96PDnx65ktgzfTL5raqAB3VuPAMUeBofJ9V",
  "key44": "39zsEFi2JLepZbaJmgV4BGm4jBef7teZMGoMGRqPFTUMmSad2GrnDecMGpKxQH66uz2nob2hbgD4He1nJ4nLPzjJ",
  "key45": "djcvRnv2m1Y4BaEniFkg8YdM8bo5Kov5pVu25UhJBi3Z1vcn6wcqKEr7413Q92qv1PKDb27g3sM2M2zNG7WmVZn",
  "key46": "ZMrBSKPY5tKSZRubUuHSfyYr1zY2VmwPYiRBhMaWpC2YK7XAdyS7UkubhW1QF5EASHTs7pqC6YeC7wwVQ243ABc",
  "key47": "5op66sP21Vpjzgj7Aexij6F3spQm7LBrTMJABdPWiTiE7THsosGqzoKF8PZjRBBmEUWXaHpQuXWu5gc129x9X2t8",
  "key48": "4cEyFyRLY4t8rnPXs8zk9QrGgWWpmeKB8m338iGktyKvsPLC75B58SaQJTvKUE5KCHasKX5stZ6nvt4ZT9k96q4y",
  "key49": "4y3Lb4tjr6sQD9Y66REPmBoc2vdqpRhHfL7nx2GdUuPtjdguQACmxasjn2rhr23wkHNDERRYVWPZseTUNUe9rTDS"
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

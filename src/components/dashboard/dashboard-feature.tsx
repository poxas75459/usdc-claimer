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
    "mP3uWWh6kvT2JMnyW32SfsFTqAaaAVh9zSAxYJT4grvtKDivy13HvoZCcgfJEBHKjfyAZJ6HCoFjCkDbmhzL3ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i94FRPPU9bEUG1WZ81C4MNgNMnv3bUPBDpp6eRaWLRoH594JV5QMujHDKWDTf2uHx4A5Jn22Ap7SscQrFJ56wUp",
  "key1": "2deGdkMxC9KVP2kF8dAH8JqZUnzmvtxWb4Gw83CkQuqBcRDLBiUbrirEsdKKRBxGz4fet7upo1cF3nhaiHw6KVey",
  "key2": "5c25N1Grm7LZJpcbQt5zPZEULXhYiopSKU9oBmKwxxqPXd8ioJe7Mmx1JRb2LET1KwpkXm1BHqJjQvj5sFBj7fHs",
  "key3": "3q7rdFdaoSeVhqvEtwiychoS6hPho9xBuyJb66fAsWky8WhNpAi1XSqPm56Arbrs492azzzdeqZc6EbU9FbWT58i",
  "key4": "3nHE1CNdsydxHcg7YT7eDgTrRPMgLrpxFWnioXm4Yhyvz2CH98nY8K2fW8SAZYo3JwwyKQkgznUrWsv2KUgKrKRo",
  "key5": "4oaLpkJZWxKpYwUaVdhwaHPoQqsEsmGJrytsf1PfdzByzegisXMyv4hGCJFiJ5Me4kDmnPbK4AHqfs7totXYNiKR",
  "key6": "3iXDPRrC6pvYATsRX5e3y6JqxaKrsWaw6915HrAAcmWSjjcVSwQhTz1amuxSnGgd5WgqdKwbGP4hmKMC4j6doaDL",
  "key7": "5DNLGVjSccwRK5kJPKjMB4P38uy9VLadhAhK5pJsgyHvAayixeak3CUrT3ziggMWD7mTNgB6P6An9z35LKgQrdhU",
  "key8": "49DWk9sqnQsF6pXv4ADRQcxJYEUSN8h8LGASdytBHUdmVgybFxv1dzbBavj9Em3DENv7RqynNRajyTdVE645eSwT",
  "key9": "4g1uX92x8aqhDu4ZzQk8ZWk7TAY8PZoEPJnJSBSzpcfhokXXLn9mYoYKyevDYRz9dpVDn7Q5UbtUbSZLhcVbWVka",
  "key10": "4oR478NbsSDPtTnTjgu7KooGvaAa3Nyx7dQjJYR3pUd7VYoBk7NU5xF4REH64UTz95khqZXYBq22bgg2iap62vtg",
  "key11": "4MrDbq6dFqmgTohtHSuX51S2Tgz1VS9fWih8rKeTmUmnK8drtAoTa1zppAa4H54omww625ViDX7MtjhbaJ4itDne",
  "key12": "THEjvCEdhJU9FuP7r4pPnFFZQRpC3YGfbreWRjrrqcNyxoRUc8dwLrFPU1pYpmV3e6x4RvqumesbL5ZWH5HvCpv",
  "key13": "3fR33Rr79EEMm5mojM91Dg8JgbqXCKoABpwAT9SkycnHH31be4kPnJEhNAMKWHZvaEmkLy2dgXgW5Nthe2gjxrbP",
  "key14": "4MDw3H5TzPoxow77AuaEMrwRBUFj936XhbKZK8VzKUg3c5eeopGBEASZkGrpmrJrpsza46ufAdany7PAhJiWa7Kd",
  "key15": "33fBViSK7c5DSi5DiPmmUNCCjB49Sqtcbe2X8p7Nn8tzKHadXNwvP5WxcA5qAqHeazEPQZoCQSDT51iKAPPJRJVY",
  "key16": "48KNyY8T3H9mxA6vsvoDxjQ6dvpYxLuPed6TkyxVZQYcPmVuyLCziQHGiz7azSRMJLtY7cruHwHr8ktuQdUU75uF",
  "key17": "2KnMrTyjqwVjQEk6o1p6TewMRNHMS6M9AqQ3WVdApupNXvzWtNK84WgFkEvoudoy4u7WMatL8kpuf1iHZZDNXvgW",
  "key18": "4Z6EiR7pdRWyuUYYaoStsXjvTpuDQ63yxUnQwoFyEdVoTqM9FrmEthHCRpHdxgjkwfpp9BSb1mDmqCNLYe5tyv3H",
  "key19": "5gFgDPLw56ceNEux6ZsnyQYB6WMhYBSmdFurh56ANLViezKVr7EBkDFzPfZG4g5qxr2NcFdVAex14Ymi7oUu6Hzq",
  "key20": "2nnx49enEJoMp1w5H5dYiZDoJtWAgZNBhUEMUQrpmCW4XXRUqBeoa2TridhgKwLfGxv2WcLEUCfALiDoNtm2WCVs",
  "key21": "2LbMuFoTdSEtJp2KrAtaQiQbDsD7DLHEx1wdCiU9uE6tG7cYqGpdqGa6Pf3eVbNtc8zZxkMnut881zaejydnYzZ9",
  "key22": "5GgtfgzWDrgLKewWLUmyzGtShRnZeTnyaz3bUc6gRgsSy56eswExLMrG8hRJXJLFMp3x9h2P5XA7xUV7VzJNDRKY",
  "key23": "2sRWaSDSfvxVfd1Ab8EsJyGwbKQDBX5Ps1yGXZBT9gZxLCtV3YJXJuWGwK5Lr7Zc618x4XXBhHDsN4EH9bPUGFLn",
  "key24": "NZoLUXng81wwhXTq59dC9psVCB61eocUWATFr8mgz6ywzWpQmVMkERUCPNseNtTccfqon5TQioyBThs1YnaQmMF",
  "key25": "4ERiJC41EsJzSgx7BxNn79dk9ndCFKdqki2zaEpkSfCW5ec5GnyZ72p33f3xs2D92Byj5iHQEjtdykTTxvohrvpR",
  "key26": "4UZ4B21HcNi4LqRkjQKdueLKBr4MNqNyzsQ3RUYsF2nnUgiBLK7bqhLYjugz6bMG34em1enNQteLoaYGsJuzECmr",
  "key27": "4atQfP5oXx5FvCsKcVPJ58Jv598QXt26EtKAWvMbLuzHwyoWdmgKBxFReVEBMJ8UHVg9YWxgHvUbkPVS6xJWJC6x",
  "key28": "C8xunv2mmQhS5wLxFTwvpeoAXrkUYXurQ81NTW88Wah34EsRg8jcU5HezPXHoVxdqDs9aCd93wyRu9ezxuVxZUW",
  "key29": "2T65gQC8AoTSMBziUtjGuJXypHem7RhScHFk3FVMf7Bst7KpuJjVTxrwvf38gCMGs6szRjVZuzhkQkTrQ3R7wkx1",
  "key30": "4xftoCKteMTMLMa4tXD1gB5SfFJ1vKjXrhzNzfne7iRuoFzVmHcRc9kDrz9m4mVUxNiFqYyHTTgz92adn3BwhEbZ",
  "key31": "ASaVCHrcoxtr9tM5RfZUQsGzqwxjPLdXbwpJ5honbKm1b8SEi1nWjNY3iGZaNAHpopZsTK5uei6k5hBovHU7qEy",
  "key32": "RSNiwbefxdietnQA86rtk2xbbjYS5J81nRaFbPe5p7BgB2KCZxSwaMbN896JQGDdhgPiFVCicU7iTjECcGtnawY",
  "key33": "5oJ3QQsJkQv7TDvxUAj7EL5a5xFgWrUoDAHqnBCprWn3c5QHpweeyvvZNxxQVXPYpx8YFSE2JgMYGyRGhU91YV6h",
  "key34": "2gV5QGCknZCFGoSPAZU5vVMGixHSEs7S6XuCDT58W3KMreTesX9V2Qm6NzuyvQwCdUtpgjQt2hQTgDn9YG9JueBF",
  "key35": "4GwZKsSAmdFaVFqjseDrfqFkJM2F6w6s1MuJSA9gZrqjZKfFBFRAyCbs3z6jstEYV7Ccjdu4NxYdVHBmxVzc6tLF",
  "key36": "2GkjTMDP2mgawQbAmTdNuQpoo688QP4WpJ1i5kaFGN3i2h73m5NVPTiWCUB1SFxDMUkqo1G7iA4XSpxbXDy27txA",
  "key37": "3zAzUSoiQTwqV9314xAdSXsCiymkXaR67qWZH9JzTS4TtK6DViW72FTLSXejemB1Mc6fdJNeb72ibfbCHx6LfF4z",
  "key38": "4dNmh41KPg8e5MzDMqNsfQCiWoGc3T8kDBMtGZwQTECRbMTpSq2aiioBjiQFSz8J9CAYCGcwM51hRHKP9SCu3KLP",
  "key39": "5YqV8MrDuxx5fzszwRJ1X9Rc3m3m9jsNrdRpARxjViKz1Ac3Hx6dkvLwXH2szuE7XR5SnQETVNHoVx3NK2wgfHeA",
  "key40": "2TCzQstM256puAKPg8WwPQhTkWftrtLcVXupTSkeEizdkqgrytqNf7o9mgwf3uibC2B3zuH5SbNVAufvRPHhzgkn",
  "key41": "3NULuYFAE6AoqSzLLSmz1t2kHwXchaQm5ygW3MFAXUcrieGwbsDZtjMkA5qoPUjiZdSkZAhkZNQYJXKDTRYTaVa7"
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

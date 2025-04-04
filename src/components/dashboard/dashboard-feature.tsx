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
    "5pEjGsjcpZK1syBrJuTKZn6x2btM2dX8BX9wBgKPrpdWqZzJP1sGiE1zTkmdqgtjSezt4v9udTkjyaPzWmmTx6nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJuvcjzGrNk2HSXPhknW9GR573oAGdv4zd2SU5u63Xd45G6BAU6hcuamu7SKZSpCiSwdkwUFB9QZZ4ubpNvZKM9",
  "key1": "qfeKtPsqNPgyi9M4F2NKxR6nPuK2CYmzVH1oz3NyNrnyGAqdGjfRVSLPrhv43JL8ug9gvdDVeGeZ6hr6E4HqoED",
  "key2": "3F1crHLMmdWkGwUi5xuyZXJ3UpHaScQJKbo7HRZ6B8MmoDuko5jtRTpj9Cq1GsMSFLGCFyZ4dJ9uKYX6wqDCKWNR",
  "key3": "2MjfZer5jHPTx5ST83ep3YrHxHaLnnvHurXRtkEdGZKxCzNqLC2rRe78mybEwnPbQVebbf18CekGYmAmjMfTendL",
  "key4": "oP8t5FBGpjuT4Q4FP6aZK9uTHLKgQgEFrGLgRcg31bLrhxcwo5j7juQdDBdKk5jZNEvB3H2YyPcCSP4Y7r7Ezvq",
  "key5": "5ptNKVcCXp2R2EQ9QYMjUN8GNvFshmSnSGHmfyeUKjLZrZ1rSyqbtqp5sQDsxmyAwELrQaEo7EPqeXYVzZrdbtsC",
  "key6": "275S7G3ugkc6qF2pdC6C1JtctwKBm1HZhpckesGP1jLwPy9hRVg19ePwyzbtGW65G3EUGWseQHzEKPb4Gv28eQBb",
  "key7": "4vkAUR3e3gMc6cSvCE9DXxsfiekjkANjrcicTZExMQoUxNNqSpzEu6mVTHzaKHmzM2UNy1ptDnAjwAxHC2S6rsqC",
  "key8": "4aQMznXCZJHDAqLUsKLD52PTST4wgqbWLV9YvCfYvPvy1yvkLj54rfyvQ6VCu8hB1mMDMzrSVEbu56jCx1TPyPqe",
  "key9": "5oqbm1msah6LFTnTC9nnmkfJxZsHpKXmTuS6YE4pLSryYRrjjNZKBXXhT9CpBX6JLryA97ZeZk6hG89JYX7pSJmE",
  "key10": "37HpvD5V2wA1AnaBJaDwKUCHopaQ9Tp2kCRg9A89rfptxikwTuRqaWKkVo9FMxUUXYGKpd3TycMJm8EsuB15VNLH",
  "key11": "2ZtcvSFM3sgzUZm2gxUdVVkSPG1rxAVsnVtTdaguuRTeejZkJNuoahSCCvF6mepY14cGfprywWacS69YwGihV37f",
  "key12": "5brZ2wETrh1P6gTQYc8oKBzmqXKVWq1heTLBkVvMn56jUAcpgSfmXWs39D1rD3qRGscuTy8358XChvUgoGy6dXy3",
  "key13": "3niAM8UB6zyHSSk7uSkuuEwpbb8STTXHF2zibxEkribjtbQBdsiW15VdqyJAKoupN33vPpvJyy89sQsNetFvgqZJ",
  "key14": "3ZSiHCzeCtXsFeXAxqVH2z8f1k6yfLK1jSQpMu5ddqnB1gf64zsVb1VTuX2Z1zouFvnxESdF9wi3WetJSg1fAbZp",
  "key15": "5hW4QPxmK2w3cHzXn587zron45c7CXQwZpcZSc8zQqcArg74yfRxyjXfxNx7jMv61K2PZaiWXykBa6UBpGsBaJPi",
  "key16": "4RNNFmEUzxKqXxR2zMQe1d37jxtobkVFtMTxyiUPJLGPei7bsXzYMtYn82hcpAB7gECr8ccSsYX4UKFy87SWvK45",
  "key17": "62kXKb8Xyj5aXRktTKUKsaBKijTS7F1eW2tZfaUh74TmDfDX4rGSG5h2VVdhP2tswMcCC9Mdy5a3QGcM8ErqZCc8",
  "key18": "6RSqyARa7iqdjzfEWwQzM8mHRXXhc69aXKSEfKDFx9mCoHTR3o9P2VkVeFnWuBN5D7bhRfgE5My5B1m7vQYbzmM",
  "key19": "3Uk76MEgDaw5fWLnBjJMVZcow9jZ5W191YgUroX7PvDcP9x8DUCti43VcZMwHa5EwqWm7gY3gYr6d8sqna9CTpf7",
  "key20": "hfJ8ThhY8Q6FDkW33p7aPd8znMeMbJEwPwzDEQnp5dxQz1Zx1cu6Q9zDg1WGVZh8k61YAQhFbTaujSmzRuHQY2T",
  "key21": "QicWL8V9qyALPv3Tph6Ph9vVCUvtRndbyMNckreWkQa33pxbS8NoJe2EtTTfyJtDLtusXuFfRfgb3ndGT6MPt11",
  "key22": "2rTtfGTBxqtUhqj2M3vTprLfUYoexZKe8WNMtRWqjymTySc4YkpF9qi786HunzccbLseRo2cgYgZhqiTKqrmz5fe",
  "key23": "4DEQLbps2p1zRTag8tME4NhizBw7LfEQdwJj432nbt2RmMmC5SJ2ktJaiEv5aFd92BYzWVVzdEL5XAA1j2AKKxfM",
  "key24": "3DF1WRsDnCBP3D7BAWXSLS5aY8Zm3Cyq4Fb6uFUn7ngKeSbD7fDUbif9jVMj42NRM2BiSSgLWHHxmZzQyWUwLEuf",
  "key25": "BSMGvSGqA5CxXzt3SmTwtEGYoYWTQtA6CvhXH58wJUqcLUZnuA2BgGkMppvYtjC8p2ZE3uwR4WG1QRWFUW7P3oL",
  "key26": "3ZG5Gi2qgKx6WnoFGJgaJPQhrwaZrM4Vx4Y4AJ14V3ZrrPGX1M35XtLMTHHKAiKECbgBodnaGPREb3B8oGRmTZhj",
  "key27": "2e9K3WVikLEVgeaArC2dAZHiF7FWRQpoEiNFEff9dnKL84qPWc4BXNjsvwn6dFLj3Bfg4r7bSnZP9qSL8HyxW38b",
  "key28": "4Yp1jVSemeg2XWWLnW9QtZuWdb6uNJyReigPRySTPzC51vPuFn4q1RRmpdW88mAEDbF1RSW5tf3FR5PmFLpcpsWM",
  "key29": "4nRKsnjGsJ2CAMfx7zUTufor5PmYArLwjPNg8c5dNeRMe5FewMEtvTPcWgBEo3B1hZkbennwUeNNJbZ757m996zW",
  "key30": "3T6fGxaTEnVdYY6sF5xmUmX8kieEDCMzkjTHMb2djVFjssxpTjqyaEQ3ZFsjWAyqajM45tR8UG7tAgm2ZVK8Sjcu",
  "key31": "5myiVXYgmjeTp7oZ1X71R8ndL3Eedm9WcWSwmocnSN8cGzsVYEP97GVi4pouYAWmYqFWj6zZ5ctgN9scFHhYiBjy",
  "key32": "WKXymhiGmxAd75CiyeHzRfJv4WVWPQXAn6h8pGVFj4nVFxAhqcdq8JHSXzr3x55hvnP2hv2B2RzbTerrdsuSrie",
  "key33": "4CwrfJNaokpxpmC46xJrCi5c1eCee6ZpCMjAYgzinx7vAdDtdKRBWWnpMKFi2ZC893SYopsRVooMvWKojz2LsGoN",
  "key34": "xyV4YRYtnQWKdEioeEXH4628yrVhCStgsLAoTjHQ6vs1oKrG5Uqyek1fKNGBjNNjDqQXed1Z1MBGVWSGV4zbFJB",
  "key35": "4vuiAenxqk8MBA8eQSsySY1APTEdt7BWYsn7hypBGSNcdxX9HFWcrEunoPHX7WLyCpeXKY9tnaWKDWDQf5pxBz7i",
  "key36": "LQ8tzEdYQKpwqXX3C1eXs4gNhj8G4ojVv7CY9Zbovaj9kFqyypqEDEbKtTusb6wxJ4NVeAdWivvepKBzU5f2K1z",
  "key37": "acKBDB3o47R2XxGrjP1FnQZhxd2RDHj3LwP1wAyjoeEPTX3bdP4tbQBbcQHfhAKkEkc5MuTcmLfZ6RZqHUpiHRY",
  "key38": "jMxHSeBourA7xCKMFgyugZ5CtLcv38mEukTN1RjXV2B1nyAc2qKGL9pKKWLvXuc3HqUdwz6JNfvky9sHPKYeMT7",
  "key39": "4wSEhw7xhAj9tNtMRS4Q7ui2bGCTkUuhk629zfJYjCtjVQrS7XCrERJpdayyU3obRLZo1tw1gySZKSKGwLGeZky3",
  "key40": "3GyVh7kYLuMwMkMoRxfUhdXVizcXqKFDxAtvhvi1HHXp2ibGvCTJW4yNhasGLZxYaAPAFwYnyDzEkacLo7BJg8hs",
  "key41": "5JkeV6KgZ162Jiz1AEhmxujyrRKUfN3FRLt6C1HXiTiGEhx8C2GBXWEXWRDf1qT6bPoM2N8vpvWyFZ9tnwCQsJfm",
  "key42": "4egrjUWydmuNQ4FCnwqsrLcjrkMUgy633QsDu3aoejcKZb2LyyFyp4pxMMJSGm8Rz7GR5iUSxfz9d59FNQVhVsMy",
  "key43": "5g8D6q6B2TCARNdrT7ksqKWqoTAXaJucqnmNwu6Md3sdyvHEx2SBckT3XP4NYMad2yyUCWWwD8Sque1LiE8W6PcL",
  "key44": "3UvMHphfq3dweVJuaDiHopSeNs98Nm1hbjxb3SYbp9uBdbZBz5arc2F5pyrtFaJMeX5yhHPPuK6LdgFxu58yLvKA",
  "key45": "5dwPgJ7rDdLsrtaPZUaZCcY4kHbfvv8jmRh6pawjE3QAuAhJc49z41FSMCYctUDEBVqc8ehtDJ1HFpPPc5u7SPsG",
  "key46": "25kQrqY3mp27ZX7K9scyvs9ZQiLh75aea9rwoZrmxbLs3hkq1y3wQ82cbNrBMPuFprQMSuRwp6ReShc2VrBexteX",
  "key47": "48HBWhYLVrutneigifkMuCCgNxWxRJo4oV4tV7zKMComyHdA9tUzJnyiRbMEirxVMP5QcrAevwKxWL8X58x8kFf8"
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

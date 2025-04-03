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
    "3kB9hFVbufvpv45fxrVsE8oA7PYEsDbEQfQXmhtWWdzXtVjZiTuuiizSoeUJYHgtB9U5f1S1UDBP2YdZHabtS8ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VR3oMfxo8AcSRifYggAhimmdKsfGZtzF8Dv9aeEoqBsDcYw7UG9mWtysGMVeYhFYeKHV1Bp7mAno6AnaEQqP7Hb",
  "key1": "2EwfYydSo2vadvfLc7ktUnHGwQt6vNKNhyULtAYKtaJRxEG7xmYm1bUvPwwV46mz5d3hXjnJbqB7UXrd39k3jxx1",
  "key2": "3FPU5vJCah9jL5ZeQCQ4hg4ZakdTDTgMq8dCTXhJMHfem4GYz8AcWrC5Z9ocfVaRs5cFApAbU5AvP1XQbhQRDpaF",
  "key3": "qMoniavMY8ANtbWCjyRFPqvgMRPSCW2GQPadpWhx4Xdn42aPkJRPwBqwEomLUDmnYyGaDhYWKSmHDvS1shcLmFs",
  "key4": "4hvuXxMhGvRNh5QKLiXZa7W7oCWTE4g2QztGCc5ufnVxDgmgfsDo81SHrAzzTP2kimevaRc8aihHcvfVH2dYBwGs",
  "key5": "4kFvNgQyKhYuyKRK3NsXpLCH3xJtHjBnNVzZvfPKVn36D2Qp8WrubGJmda4iE7dKDRAGWiTYA4k9yJUGstqoLbG6",
  "key6": "4asERMxsqrxEYoHEedtGiGiVxiu9FBfryY8z63kf1xFaGnKttA8swEqHQKdi1YrJvgjRePKrDTuhAW9kgNNRQmFB",
  "key7": "2zk9FV4TpifawV8PD4D9fhEHtrNZJQ6kuK6uYg4mVyBVP1pHExaeeTw5143DKKpYTKPTs6aYPZQvesTWVmbUuV4d",
  "key8": "5Dbo5CP9VpHKZRBEHmSpvXthUSexfNX596cuVo34VB2GMs8798hYAqeBrrLEY5VggM3USEjmxJba3m23LDD9f7K2",
  "key9": "KHMBYTciDRLX66FU2XMRWVDBmxx1BwHwighGxWMPa5dtwC2uu1XuwDEbKM1yZSj7GiLUgZa6Txy1NGaRTVk3UzX",
  "key10": "5VxrRSZr5KC9vHkvgUyT5HE6Yx2MEyBDjmAWMdYBW233qAKkDAFvATeMqzvkHtzYEhBMTryaEAJgnTZz4cmVQMFd",
  "key11": "fEJVnQkMKePLVgpUNDBeJW8ihuab8exH5EBtetoSeVyv5NukDpVfpxfSmkacRFJjJgUPFSQNdSskS5xH5DXDHfH",
  "key12": "3fuDp2VCWuU7M8xKkbz3LQi7rUSciJE3DHx6vZgfXNXV33kAr4mYfC2pe6mDWSF1h88VqjxVvLpedKFUPnbqrATE",
  "key13": "5JNmp1bubRABU7c3CDeDmXbKex8LkbLP2ghE2yPwP7ybqYtUyiht9KUUC16GdZDNeRN5Xb4cQAt7GEkL5379T4gC",
  "key14": "2ugDbVp9c6ZazqqgVF9E515U4Kk5GVn1hGLWD9WZhR4z4ShQoyeiAgzgZ6pbHitbfJAnG6Zcjbks8FLhworaahCH",
  "key15": "2sCtBQtpgCM8MxiiXvrBX6kFNc9hycVYXC3utzKMMU7obNJvqiw86WhzmjEG9yLRvSQAhcQmzBSUTn1MyoEBf9YC",
  "key16": "33hTaKSaM2ge1VNzLPX6wwYUd6ZM3dwAyzkFDmwWugGSE5PVKJXEpzBs6vbgeAPHMfRfpKmcf1s7J8xeH2XCu6oZ",
  "key17": "3qdZMnQSWhVfdTp2M7AfniBhyNrwVCBh8KWgFCwBKUAQ6sGCy1nVPSt5t2gv49aMzkYHLZzwQH2bXngFR4Niw6Jk",
  "key18": "GL5vJzTUEEjWioZxaewSV2YLb6Un3RjprKGo5u23yMj48SqnTJBgBTX1iC1ZHMn4eTRx5GounY3cALkPBbzi1F5",
  "key19": "AqAWakc6E5HxcYgtcLEyDDJgK9zyC2s7q6Rhjt9i9apvVbnM9YoeDa2BCX3PfqftzGieGDMWpd3bFtGp4qCG2Pq",
  "key20": "5cJ11nRedWzpshb7jXDViyfsax8ZTk2CyZtGoehk1pUVDEetLaRsVEV2As8zN8xdVMKjqcHJ9S3pExVJZboadetw",
  "key21": "4tJskQH8WWDDG9Bepaq8pnDERNepe4U7BgpabZwJBSt3LFyaNUGPSxB1LFHeK3cV7khLcC2XYuwUgwLc1XHG26Ec",
  "key22": "38vqiZU571rzZjcak2XGGJwJtMDKsxhMAm7LMNVPJMUNPkZ4ehtmXy7DJ3vn5aSEzYTh1TT52PqJPQ7SwKXb3aU8",
  "key23": "2PtxsNBjBNraKmsufdMoxoS4ke3kJvmBKEW31CFVBsw1oKmh9pQixtJYSj3xSEzb7zLpnFuTV67SvkCjxtSkgs4F",
  "key24": "4Sp67np6JLejGkqS6gT26LeVwF66rV3wXfT8oQuUQW3pZcQmdYwbHCb6a4kZ8jZuzCqKvN6sgqL7HTyZBZe6tpLD",
  "key25": "65iu17TYdJbAhmv8w974iVbH3swWi3fB2LjCumuNxwkKfR5BboChmQ1kqXFDZWLArvDLGTb5yBVvnLwYZtjQWSqJ",
  "key26": "v1KWJ5VHBPFJw81X3Q4YgpB7SySHHgkYDHjy4Z9VixnuXRoJ4AQ8kJYppeX8j1bpEYL9TvhQWuGbHnx1vwL6SP6",
  "key27": "2g1RLNPiWSnGcnUYPVDvfBgK18xcbj79k7vZ389MPJvJKuy3FFikq8JxscP89pRfYceSJCuD7bzafz2iZr85iWpE",
  "key28": "2SPPtDgB71DWT8oikkLuFnunchE82Ee7YZ5DewWtrPPr9WTyxPBsZCzDoREprFuDzwiDLD7x9fGzRcdJyzfVC4dB",
  "key29": "5DFr9piZurSvcbdyCGhES1VztyhjPVDiy2fBSeZUbnJwYsiC1qAngiw6SLt2o1xg1sn8Bd8m37wzUHfAqxuiRHrx",
  "key30": "3eSak1GdGNMBGcsgw7oEHmK4X8LnBXWyrxzkKkKSZsZAzpxVvkqn1V9ZGYJ46FzF2KZmJQFguuN5ZuVLPQCKhDxL",
  "key31": "2xEfNhGevszcRNRL6S8MPxYoGJKDuMmegXJu8MQ6J5xUyDWpxntGkd9uvSdbeTc1xJyvmznDMVdew8pBLBdiwrxi",
  "key32": "4iC1AHaUTmLShM6wVFrT8oFJmL8URj7apWR6s7qe5Y7tT8yXzi9EbrwgUz4aHWUh4PeNcpQXGnWxdciysrhxn31r",
  "key33": "2ja1N1UJabDusQEDHPyZ5i2mY6LniXJQm1ajWeqsQ7kRZ2ymGG3Zzhn54CrmBiAZUta1W2dgxACXZXsvnK5sQYXW",
  "key34": "3Y9gEE7fz1EYTr8vQKUFcCbvKhihvsctC7XTNfkKUpGXhvptJUKMwZyqCqg9zKdgeYw77TZ1VjG2Zu8rreMLdwav",
  "key35": "5CXdDvezSGwt9PzypPfkDDypy5jW1HvA1gDvsrAE6KBkyLRWxxZzkvK75QSA47H46SJbEFkEw97Qyk7QgpVSKDHa",
  "key36": "5JqS1MF5mnro3uVsgbRCVUVz72jgrSzfgLDnHbMDGEaKyctrv77jPaFaWVBnca1cA9JDzEjdPwRqBRUrwSR39vUy",
  "key37": "Db8CqQxGJ5YJoka4Leb5TaBjhKb94zAeVSerRC8mcBSyToYuYhVBeChpxdHrLRQ1BXWis6dWXxTYUVkgT9ye9o3",
  "key38": "2fvhhokorRDtzrc6iwyoR4iiSbXDy8325niWzF6f1jsUobmkkZsF4t8c6Nm8dcwKTiG2RVyFcjBrjNndgCZFts8E",
  "key39": "3Wv4XgTsscYuroNoEwDiXD8XGWqZ45cmSCyhFrzuuzCt5c3Z8NaCc94m6dPvYizooHyzJpMoGqpu3dwwNdiEdVEF",
  "key40": "2qDMhva3XTqop1WS29RYXBbJ2GHu9nM6MrRxosXVeajdczxjgG3EcaSW5xoQmMqD2Ej9WPB8KKX78pR3risiUSs",
  "key41": "487Gyz18CGY2fwtCNdonXCuf8kzuaXCs5ofdn7RzdcnS5iaPHSDo1rZG29eqe6dkGJdG8drB7ceNC7W6ktQTbcPH",
  "key42": "64h8xgd7e26ywevPW5Ed3BXHheQ8Tc2YnUr4jh3KFX1dudjFBb2ndQJubTraTcLvQcRtRSqZYrFdk82CRSewBWv7",
  "key43": "26uZeais3BnrP4LPjWaJYvCSS3NcTEsULFfhEbtLb5Uoq2JAZWfuVj1bS68qc6UzF1p9RBnWqfKijmPFsumPQuRW",
  "key44": "3s78GZjPri1CHmACxXgZ9724gCsiUUTiMyeb1uMLxKGCN9Uf1ydf7n7mV1Pzqpxe3MKT7F7V8ospPvn8kkYttNhP",
  "key45": "u1VAXXBFMdNFKS5G6A9L4rBiNnGXLE1ULsPvC1R85U5CYJnpE4BerTV1todKbgJKJ8TRGP3TZuFqmFGy5Sgdc6k",
  "key46": "5bwi19yDXqZLgia1Lvxe24N3qe6kHBJFXwDBsgKKeAtZnkNBAHvozYDf2DYK8EDzAUdUjBzRreoH4yC6ajx3ForG",
  "key47": "43JBEQxURyXWqDrv3FcF1YhzKBvtBhELxTqvXUWAFq6ad34JahzksPQgnfTG4FGdgptKaCyhCNo5rFvSoDUCJNkY"
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

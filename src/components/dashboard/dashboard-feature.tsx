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
    "3HGBFpRtSSKbdRTmyNASXs1vWVdPY4oMXhEdLX4eFgm29HjCXDXqCauTxHAwPBPxxThGTe4doENJkHyJAdyhQPcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26mYy1PhXrCTG9Yiz6m61fzXrq4Jz3w7iznjVU1K9pQTsotNaSRk7AobhRUEjNQ5wQRMkPXWr4tVsGw5fpgrQARj",
  "key1": "3CzadDdtbrgQwu9p86sw3pEp4FTwdMSZg589cBJB2gunsGJoawJJg7U3qKF5MazmjmFRgRnC8tYUBJNg5v955RMy",
  "key2": "vZRuxpsUnv3FQ9NmfjrdJdmfwXGx7RPo5N4qcfA9wkviWDzSFh8AQFwezcrMHe4Pr6Qucok8wcghDWtVjTnqQ5B",
  "key3": "4ohX7RtKR1T2Fy3dSq4e92Aj1hS8MJ2PZNwQTHVypBXoBtuDW5ckCqU9TrMBqDPhpER4xn6tN1dyCV1cQ2Zuu2Xx",
  "key4": "3UqspcHmYiaTS9sjugM9xaHXBb6CEwoXevm4VfZLg79Biehmfo8vNDJTdcq9LducE9AvzY2dZeefxLcQYLy9TcYF",
  "key5": "4c14iQahvuR3ZBG1umsHKvNRqueSfoxxbF97RiQmBdHYZAwrMVHbmGMjymZMDvvvcPS94AfrHNZcoGmDvqhtBeHy",
  "key6": "3a9L8oph3QFfoGcUDrTBG5YzTgvYgFnscXEjxycBQsKkmq7UfsjySESnvgseaJiWUguUWYfbPBJX5c1t9kabRKoZ",
  "key7": "5LB99JATsj9KMMFCKhoRRmWbUKrgNf3bzwBLYFY9y1ZEbHVVYYD4U4tF539tDjgA3TXgti72UUYVs9RvytgC2FMG",
  "key8": "3VofVXpYYg2zZanZ8VA8A4hv832A5cgcqjht79eKuu5UztGb6MBdiXuLhp6ByByPsC1GBH9ohVw9aAhKPgpYPB9z",
  "key9": "2jqzDDnuP2rN92a6CPsJf5hNG8a9wqzUPQTbwng7wmtLrJS91yUzRiu45YmjeWKq4cRL5YQ5Tnx9u9agESP2Mex4",
  "key10": "28EVfYXiuMZHnKVdEEpCVww9xXRRR7Dxy6yiRwjjTcfnBfQ7LvLBsQCMPrGhUfW7ALubowXiSr18jNF72ptgvsje",
  "key11": "4wE6bDxqRUXGWmZopcmHRCzC8tN5DyBXCNiKMVN3qYMoJQYrzxsagpWhMTcA8YWaAE5BuKjqSuaz74N4kudmbusy",
  "key12": "2gmZ4Pgy6oxtfJSgDB1FXkzXi6Fgx5pzapuSjDYVzFF1TmgvdMSXYmkzFfR2mbWWCnkfvzpT8opJ5njCrBf7322p",
  "key13": "3WbfM9Ligpnpir6gutbKyEeScDg6yv3GesLbKtji15yzBVTzEZMEfBrwBnrmzyvZctZyqGtCD4XxtTJDhTE6z1HZ",
  "key14": "5zpi7kTXgc3Q8LDwchz8GFECRjrJhjMsZerDu4M6W9LQdsyLYgzuBGc9VE4U7wJdCfXENvYPuJzKe6Uba56XggZT",
  "key15": "5KFK8fFA3VsHZigvu9ytCk9HqdqXqVc8XHrtQK9qMqr76HxqsnMkgVPkrRBLhAmzCZUAzvTmEiuSigCufRripLKC",
  "key16": "3XMtgp38vgM1n9i5hTScQfEXGdxV3wSJX4dw9G2H6rPb3CkQMpoWJEFU4MDL4CzhDMTqwBk8DFWjtLGrXdHGWg8w",
  "key17": "4TVYuBzVuWAzDjUgrUxpXkvAoFa3EUVnvNVCqs1mgtK77aM8mjqoUHREZbs2BhCtwjPsb3dEKq2gSi8owR9P7L1s",
  "key18": "5Xkum7UM4BpNSMLT9zZaguyefper9oMSrQfBFNE7zNEbU1tQMH2L74UN66CZdJQN2feFZp87kv55mfgp66wfy4Pk",
  "key19": "3UK3mppiDsFuRHq8itHEyjGRubHMsrnBEKrt82BatboTRFzZdb8KYQ1845mNgz6uPk6nXXSg5Hv7maZL9GHc2EoB",
  "key20": "2Z6C1TFsDNe4bHniUxQJgi998dhAGeeBhnLAWKzYXYDdwwbytLCJe7dBbCQgQ7wdaQtxLhheqLffEPfB2g987ghR",
  "key21": "4PWeY5Xv9vySQvoBBVGwFSP4o57LbgwcWdqY22pGFuxbW9Nt4h6z11o3vyL3s2RPs5fkiDi5bx1pdxQYb6gGR8LD",
  "key22": "32uWjW9XHCWUTgUgnihVxQp6tihsEzA6QgscK9F8ZH22HNFC2W2uxwGbhxuYWrs17EMRMjBfssnyYPsgwBX2T3cR",
  "key23": "5F5bC5CYs2Tfqeus1Qku3EaTXdgZNXzdbznxeezvD6xbJ1PbBmVAgkG9LDedaZRVKoaExWH8v13pHRf3tbV97sQ2",
  "key24": "2zyEcms4tv8LP7C8pU6gjY4MgGo4oUBFBQVgxYnUBhoVBAWHXqZfDZqstQpm9FHTJ2WWhAX8cyQF7QPPsVPwmGAv",
  "key25": "igWvLtWb4TZFhrWQKFiHtNptLMUk2dPeu9VhV8YeGZ66PEWa5aBQeWpEX3ELhrCFJv1zSwEDYdX9fBbEtLzqPkS",
  "key26": "34xhVChGNzTgCApghHqeiBJo8UNwR6pscmTBBVqp5MXFd6p54GfaGWmZLQgJJjsj4NA4Y9JimNFXqwY6QLyCXy5j",
  "key27": "5StbJTxVqLTtHnR7ZHssbsZfe3cNKEKmM9CaHGCkJ3BxfHbdhJAAasn1DUbePVjC2vD3PkkgmyrSiETPgRzQ9Sgf",
  "key28": "FvxFLY5v5HeoEjEA7BSZuN3Bvx6u63KC3bmzduB3gYwXJToQf77q6czr2Eq5pQagaA85cW2eEVX1z6m8pCAWC6c",
  "key29": "5QmpM3QNYmnNBMbgquECW7hDywEjmkpBxwJHkGSEqYVKH9Bnp7eEXgNj8LXSdbjdXLgfR66AwVT8EyLYa1gRo1Kw",
  "key30": "61gPnVeD8Z5dncgqN9HQ9vGLgfgh8bG77pXbofadYsyaf6KhNxa1psPWyaQmTpfGMGPvPhhtKN5G311PYEF5geAs",
  "key31": "2FcVaVBZ6LM9aC74MxXmUjwriS5TUTFtrCb1onjVkLfCgw9YhybU45YurhDbrWfnHiUbvEVGcumHqFsBZ28CwJ1V"
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

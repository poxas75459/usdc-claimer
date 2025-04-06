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
    "2aYcRTWM4PtvjsdyAhqHv9Y8toJAPCdzeQ84qFHNhfJ4KMmhPcKqv8AwkFBPs83mEVBnbNx4APHZ9ntJHgnb9gbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cTBrmnHqVH7TTnNGmLF572aXUp4Uv5dswuPwrCL2Xm4sSx1YzNZYfXf5NchG6nWRuiBLjGrnygMcMNxb9QUqrf",
  "key1": "3StbtiPH5AvUmczcdqTtvApE5sM56hjWx8TsLCaUcabxzuAYJTB92Pout5mQtiFyKxUXrdTgYYwvsyEkCZXy7ZsJ",
  "key2": "39PT247MDxWTVpZ1v8PBR4Ku3APJoYVrF3nfxLNXiKsfPWii9pndiPyA6Sino8dTKQE9Xr3NDSrvhnmX4a1agAjU",
  "key3": "T1DRAQAThfNqeobPDPH9skU4mknV7ojVQVj6ZAhEBHaETjG22mufcG1TE9fAoMJYCwURL1DGPwBa6q4CcZZ2kFV",
  "key4": "3Z38LLfpkhqHy6wnf3evEKiJcpn42Kn3rWuaX6U7J1D6EzqYpZRVDkrwUw5KyxMk4bAZCg3fp1be5mMiXCysYYJj",
  "key5": "3NSsxhhJeLJxh5bDqVncP5jKPcrBd6hMcunEmoQ8M6y5rHWFD47H7zGmbZJN1ZpXULr27qjeA7htTBcAeHqfizrc",
  "key6": "2onmN9E1BxMeWaxpd123i62GsJKhopFAYUZaN2mwesGMXMTiVUB8WJe3gQhfBmBYZxTAjaJboQjA1QJLRLmKzR8f",
  "key7": "5XfwkgVTWuEz2T9pWgYHyNKHoq2FpXthckzQMeQJSsBmESCYfn5QBPyHDCRbqBSAX5QoT1tJYxVo34gZPyMDZWNY",
  "key8": "6q3EVSsuhAzGj6BfrpidkvYTSRBbbTCajvwpEjy6qKRVuazZPF3QXHHMj5s6umD6CFLm3rdGZJ4PRt3y6ZGTxEj",
  "key9": "4u58SGp6JUYUmb3e7rD6Syt1RYn51eBJMxhoCehsS3wdKKBNPWToZEno3YJ8QfYcfpoPiHMFc2jbnDPpVVdLgEcd",
  "key10": "5ha6dFkjLPQ8ZPuzPFn5BdZwMJLX1FT9r521mSjWtExuYNsYUBaSh8gN9uvdwYLY7r9oZXvkL3ygMxwM9mfSq6vo",
  "key11": "j4LFTiCm23BxPnDiZ6o5pmvn7MMY8dWfWcTCawPTvZaBvQDjW3y6Z3Ru2X42mfUNcC3NPFrndM9tGE6NSnqhsus",
  "key12": "4icuUYN94rfyCd37MUfdvZ4cy3TBzH9ZLR1BtsH7dCpAM8efNPSAhMokLkgLCi5xfaVwdB1yoJEZgywUMweTt3hh",
  "key13": "5mjdZD1uh9L6ow2XLm7DC2UkGzeMyeAHTexq8kwKeg3SkVrNuPcUJyVQug4qip6aPqM6QRL1iq8JsekZHX3Jbupu",
  "key14": "5toUJtpDKEKGWf2Xj9WVm1fW8hpqq82Dd5AJFu8CYrz6FZHg7tWSMVJGH4T6jRHuDT6EAw7HGSTb5pxjJPd2ZDPb",
  "key15": "21MBfzzCQThrz6LH5wTrAEpuVyyXcJn2hdQnBEjn41rWzMEieuNpo2tX7k93HQzSQ6Nbn2A44N3ptwG3ZecSbQTN",
  "key16": "2SvFY5gfjiUUcUyoZTLLNDRse3Wpo5Nb5FSP92FT6LMjBPzY5WsUzjkeUzZ1aVeYB1WtRNmPihSSfzCUMv8dZqp5",
  "key17": "4YPAwwp8T7qMEfXgPLYe5ukFJm2qfX7iZCQLZSSkaGBavtRvaKh1UocYhJaLUhV9kd1pEgxBv7vY1jgyguN3jFxV",
  "key18": "5Re5K2Rxp2A9xZcdETVMTX1EbBDWKpSkRjUSf6ubRrni8ZJKCZsP1Fdd2iTHbiqD9ADC9CYFXRQ4L8jcbvkur9pQ",
  "key19": "3vD2BQjaT5EXx5S3MLVwdE4LFHUciVc514VWJYdtQdi3PG6nk3CYsxAVLHo65qc4uBCSwju2ZhwR7Cg4iAt5RnWv",
  "key20": "4oSqyjUaJ5KeqcbwpzacijixZZnGVA2aJTU4Lh9aB95tRvzu7d3BaSFe667oZXzFPvG38P1HxbVYytPVWpM7Kpoj",
  "key21": "66phqespeknijZaMxtEjK3fhVwMSF27wxXzz7NZwgZjvTEYqoJoGN6ydYu5UvoFHg4MrrBPwS7rvbSXKpjugef59",
  "key22": "2gqdfCkQqCqEMhHmu49JGTACe3mqhnLgWCBkjqjDa9HUePhhkrs3nuBHuNf778ocrVZK12E4p7foEW1v23mVuFqH",
  "key23": "381S3Hvzz8umtcB3atzcY2PMrwYGwTwq65DZVYYcXecs6uCrnpu3pxz5PUQ1qXWcJFKWce1qdc1W6HQpRrmmu1Xq",
  "key24": "3nwunxMQ1tpazYNkBG5DEPHyJhSrJ8wwnZBUF59Ka72YcBbATcUCNjqWQbUoWyP4Gv9gZrgjEkLgL6PCjS3CuGE9",
  "key25": "E14HbH8ntbCUbfSr6gF9a2bJk88Kedt5MTdKeN62YC8j8Rq1QxGRHsWHo3WDmd9hhirM5itb3hTJWsCyqAiDSa4",
  "key26": "37FH4Yrb2v1FWf5caSHRBacTjtwiszqMAwyuFhRPqJGx1kVCNGiAsHtdT6Xe8bcm3ARqn9sk5SpwjVgSe5VvU2j1",
  "key27": "55EyudEEapM6RY4n5vUur6s5SGeEn2BRkTnkaSjkf7WYKUHrCXhHTd2UkFCWARA6xyDgRECqj5TXUB1tC8qqGiQ",
  "key28": "2AR8Vo9krsA21KAfAoUkLHHbKC9pz6e4yegg2TY93TFAi7NGLdLntJMPC2Q4WrtX1Nf6uLrBus8Z66DM5qSVfmDU",
  "key29": "5bcgWDr2TkSD1iid5AXbTGXT1ksFP6LXzRjthvKwEtavmUpGGEkTbhh5zfYZracPWFgSA7jmsc1fNg3Kyd2mh1M2",
  "key30": "3KSr3um2NoQoKF4Eo7bmbAdTY2rexyDD7Y8sf5a7UWXUpTz6yfMKzfzZYE4akvoyFWruHUoTQiSqEn2gRWcVcR1S",
  "key31": "MFJdFXcnFPeBBaQUNgXsg6EtSkNgpfqdq82RgUcS8u3DmFGas4z6EcSW5hnGXjiSnNFo3uYmtFVyT8jLcVjdRs8",
  "key32": "3KfizALRvfE3crzLK3JkGgrTNC1C2AxCPGGUQA2vyJkoBFRjPzsvtEmex63riQfFbUDdnq5d5V7V5GzXFMY2RDuv",
  "key33": "2JBgPnnFHvTsSnmv8DjDwMo9pXQogJ6cubQNb1LPTJnBbh4mBk4XhvDdezX4KTsQDLQ9WtvXp4LLZDUYMiWKfBWC"
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

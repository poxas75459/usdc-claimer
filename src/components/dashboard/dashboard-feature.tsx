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
    "iawG6Eos4CkHkwYiKdcvXYJGT5ixVfdJENkokex8mYu2M9qzAP31XSRNvf3AxbDpzodvdHXvZYxNC31nkzR7ogC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywZ1WvycFD7WSKxB2oCTDY7HTx8AnikcT7hZ8vc7h1kzy5Hg1uCWnaxYYdSgBvXPVJfvSaDqgLsgAp8Pvo8Fcqn",
  "key1": "3mie86oU2RB73zmZg7JXo8qiF9b4hVEKX5p8bPLFyYLR2FLeqD9ucpe3XWgAzFaevDidLDfUq3rDivCdMsNQRYJb",
  "key2": "4cH415vg8V8RDkJZnZ2mf7RQBxsH97MaqooEgsQyGb2f9WDs9vqjGLah7VAqS4ugjkGcSjGjmEuT4cjriaebXwm1",
  "key3": "29hrvoPXjL8f1g3YYwmPQixciieRfPJZeZaSj2txvMQvDp2QG9K22vBvuHhwcopEQf1GxHb69FMykBgayv7Z6rhF",
  "key4": "5o7HnE9y46dfwNRVRMPgQ9byXYJvUQcsP7zA3xUoZDBYe4VfWSmvq1e4u6vtiHP7MycmXizPnaCxVB4fYfzvsqwZ",
  "key5": "4ooMNqzvWt7KPx8gs18X3uDaxYFc6pvm9A8iswfQBuMvPS3yjEayY4rxQFEKqvirZv1zkfwX3syZ6yRBvPGngXZ8",
  "key6": "5sjVCkBpx3kAhSiX1hmG5kWWmXQ9DYjGHMx3bqTPSGnSeNsKbM3YS9Kq5USsZU74mjZd4vZqV3ANJTCiB78ns1qc",
  "key7": "54JeA4Gxff8PrDdcJ5u9szSZ9Evf8HCAzRHMAGtg3hkSJznayabhhSLucuNt4NrPYtzjn6pDksyHGZoTt3C68GwL",
  "key8": "2gHWuCh7JEwzifsmgUzwxQ737HJvAy426RuVD4H6sJgXHPBNVoGsvpmhgjraUN83WpDZwURz9Zr1dty6ussA5e91",
  "key9": "5mz915acqh5SmNMzHokHG4osTHdsiYrqcPgotyht37WHimNeDfPjZ3N7KLUQbsPVhEq1HtE5uKPRKw43767nxU7f",
  "key10": "63UWtxw2wPRKAguMP21Mg23VNfRftsgaZFaSTmSYWvfzxdFXjbohTu5SvpVbQCeLDvEzM6shADzWnRcieymmDtek",
  "key11": "2vyMhE2wknuwAzHHkf4eYWyeSkHqQ1qAJQv1fLYLEZmsW6rZsqTzp9Xht3xejGQjhFiWwo7ouHBLMZCCnPzhZsCh",
  "key12": "3Rv22u92id9t8NMDJbfW58zbS5eTBfHJB5K6sKatVjnc1LHqyrNHd4yDg9iJTr4PaTCPu1vRQVDiPfGFGepSvdmV",
  "key13": "2qvqG1vLzhJ88Qc3Gvxd1evqD3ig4Z39sEVvWYn4kEgHNTyQgGu6vkQ2K7CxwK1MrvekU3qDHrnyXv7dRLPZnD8T",
  "key14": "4hjFWTjUA9gpgHUTSAKEsRvN8AHJ6UVauoP1m2WzcXVTbTr5RUiK8MrE9JTHRRvfJUkJav6yjJZ5YjyuMaxwQC5t",
  "key15": "4FweUcupQ7EaiMFvUDCZJ4L5Tj5RFgZ1Kw5E2EAYq6rfeL8wxSvEFis9Vrb7iECGVXzAVgsrN5regRqAW9deDgTj",
  "key16": "2rrPcYrVep641ZsHmdRwwxpsNxqfhB7gD79RdXLDtbfyJZrKigv3vJ3wqpXoYfxgtef9RtaTH148jmCeyKGTUUz4",
  "key17": "5sQZXmn4Dg6izZQxW3Dcm7tupW8scUa2pJEmuVxXfe2eCe8fjZXxMNb7djz6L56CeYgpaFEaPC9jj8VKH7m7VKBY",
  "key18": "64YbmScJKvPfUVaEsr2baGmRkEXZVcmRLYVW2ad36MA3cwL23jJAknd2nrpjwzKtCEzDQujyJYosRqsMRYaMQjHi",
  "key19": "53zLQYaMxFsunwLPGgtuRtt1993ihXa3SMoQVNtLkA6Dt8994MzHT67gi5e8MeVgAotutCUuBeBk1nbC3XE8wnNR",
  "key20": "47rUG2iDUfkXJKrp8jPpENMz6A2KFXJ3tyYemChLs6hbMZKCz7cDSSxb4kLrAEX1R1abED1FhheYNLKeQ6rJC57L",
  "key21": "2gNXSdHE367vcGFFJHbjGp5H5NEYtQvzqkoydyGEye8vpsjWB6cQc6KSaB4qceZGhMfCenjNLr3WaWbRj1i2W5tM",
  "key22": "3PvmcoBMhSaXKrjwA4CadwQK3rtq5ur5e1Mpn2JAY5SAqE9HD2PqmQKWnzwgEza1v2S262ppReqwRo39rN4j7gRE",
  "key23": "4BbEM6KsmBH9kjayF6CqiioXao1ehg8xkQaNFTh1yhNzdpYjGBXTFVZ1yYj7cieHAsSwVSE1siTEUBPLEs1wFBwm",
  "key24": "4i1WaokPbDaz2h5PctK8p77jwrAxP9NurAKc7vXUQSyRdTPAvtxDwpBfkS5xPvk5Er2fzQiANhJHuxWSyRDQxd49",
  "key25": "3Ctg5ihtE1mjMTphwDiR6xD35ueDBH1cRcqH89Vj7Dk4RGMwMrgHwKuhAgGtagPazYSMH6tpXVq9D1nMyd9mCysM",
  "key26": "5TPfXi54mYsLDuBZV8zzv2X1vzaaXaVpdrcUptVj4TAArqjKzUpm8aJvD5SQJ9SL5Cq2dvmLioBNWU6fRGxdNdfV",
  "key27": "24A4uo15F2Bj8Fxq6qFKBdEZ6aT1ajvsz1ffGPgcTXp85WcRVmK634mcdHWCjzhLUJ9tsnzpUMMhomQZpHxHQUgk",
  "key28": "WNtDZwkNzifZK6mJDjQ8ZX5pwz3iN1n2qgjXhHRJrHdNMNTj5AMeZGshi5aZdgm96C4VUfrAxV3GpG1gwN8vXKi",
  "key29": "5j3b3fbQ8Djfs6YZGSmwNa78MaERHGrXAuM7Qfu2t22YbP5zTtw6dxappgsq58tfa5S18MkCffeLU2Xe7bBaJ85t",
  "key30": "4KPyruZ4Fd1Q9bKmWyhtiK31pEwc4aPsetCroFJyyKCCd5w6WGvdP3hxJFoXZyyYvkmKBJyNTdMhbPJmvmiHdoj",
  "key31": "2BiGXZHLyAUgKjPCvJ3RuBXqJLw7c2NiB14MNcP2qQ6StKoN87ewaUBLXQpjyk8ffroNXsErukC5VyuBBUzKKVbC",
  "key32": "5KnboHyUFPtbBqEZkrKoiGVjfqwBcRb3REaqznFtUXz4bpvjiiiinsPCjwsHQvkCPZ5UBosugLCdcYDdcVrCcyts",
  "key33": "dhwcVrB3WPyBUSQ8XR7c5Z77Pw83jahXp6dugPfTYNEhKtbNtWQebsxJQTxkRNoPQZW8qu94KZD2quwTMTTasBj",
  "key34": "4gEcTaNm63bhPEgeTh9Tk4hF95PnZraikcDyrgKYEFxRCqKoiaLEmjkpZ2aEjW8Xh2uYS9Ex8Zs6BobhxQ7RpjQn",
  "key35": "2ebvWjgPWUeJcDUFNy6VAvsvoJxB291evQWaWkDi5DBQ7eBRq24Nm3r99iCUzFhwQdMweiGXH1NAuW4trQBfnGie",
  "key36": "4HAEk46RZgraXGSMYfnwE5oc1bW7GcBqZB3QpfAqPiKYcYd2fhTVhXVhvr62oGw4F5Ngvhsa7Cd5pdFwRxVcLtbU",
  "key37": "rhtVxGSwMUGBwVzLF1LNVZVj7G7dxj3MvYNaptRtkPpTC3WAR1cUuBs3BNBi2Xr7zrp7gNEdspqNC9quMqoagUm",
  "key38": "3aCJcx7VicnMx9x7SaZuMzJx8NssXXkehVq1eUhRF4WidshxutK3oNXyJ8c11Sr5DMoZqNUDG8fpDkhLqES3fmHe",
  "key39": "3xw45JjpeTpkyZrH1x9MpUruL1MsfGVqTnpT6QmYu9GBKqRv9LL9xJ8mvnf8bxToXeExN8f1aJiZMtr3pVucfogJ",
  "key40": "ZDbkGZZZfkQ5uSz6tdgH4HS9nh1EqAysQMwUFkLnXnvFhXCwYPgwfFYpf1Vf4owq8vpkYaanyykBZNs9A4nj3Zj",
  "key41": "wGPtJ4GJje9dfoVUxbLTeUchGC4Zc73oind77Nsf9aS7En9xYiLfQmLnctvp7r4fLTVnMN2sGCbppyzKX6vGhqA",
  "key42": "5z6Goh3xqTrQubKjJpTnomNNzwwETeJBjCUc8PsyyTthpAGwupNPp76hv6XQPwpABtEyiLjsPCxvJ4Rr1vFjK4Az",
  "key43": "4rCdTbGv27dSCa6auqXSYFSw9YPB44rJzE5gg7tEgA7VFVdkoHXetUxE1Vx4Y1YSryPPj5xaWHE6nhJ8ceV8VZUS",
  "key44": "Q9c6gjkU8Srx9eZH9VWNGNngavGhGConhCDtKiBkiLQLAW9perPTNRfAL6hkfPKKMAJTHt1Af22zHnFN9yKms1t",
  "key45": "5y2JkgjvfnMAamajt8Um6oq9UtmUq6PjuFYdE3yQL6Mk2W9p9HWrdccJWwNYfG7emiSVjFQiZP4AVtiMRNRTrTjR",
  "key46": "YWQpyXRp4eacm6j8V6V1LMst8Gdqi39NzinRHCFMbRUGUwKKTEtJuqtLfDyiqXyVpqaGJBWQhEqBVLBCF2j1rwx",
  "key47": "5eiTfxVcZzfbXxPb5sEzdXstsS8d4v4UZ6fyP9ks35F9Bxx8x26L2M6Zwjjtj2ByymKXTbrnQSdyrmT3nPuFtMHz"
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

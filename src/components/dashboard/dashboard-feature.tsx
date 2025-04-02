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
    "4i1kLFwX5CbcFek1fqdLHSWG9eW2UddKV1rPgkUHzxtb3jzRo7ce9nhnExmKAbT6TfSGKraVeZKLpSDXi2BsV5NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JBaPyKpExinRCyGR9XEqsqFR6JzY5JV7bjdL8HGLk5fPz3bwxwa77yJSyKhNDL1DWt5mnC86hkf82oynd6qwcx",
  "key1": "4QAXZigxJpgxzuHp9p7o1izmpBH62MzSqXq6xYfWPmmVWjxWEU7mJsTg98988aW9GuxCwuPcV8dFVAj7VWGWvHnF",
  "key2": "3vgSCgFDCsRb2KdPSJiPinAy2SAu9gSDWRLdFGUmeD8qsZpRB27jci9dVdUrETBJoUzGWU7jQaLWqa5QbUAzWPhU",
  "key3": "4hNR1teQGg3Au6T6sNeUhogBnxR13NpuSDSqwZgYvQmnRo6uRNSAorEmmXeJgRT1wH42xweEcoVBzWvM2KQmVLqw",
  "key4": "5eqQvvWcpHUnFzvVCoaSwufYHThK9NTen282i6dnhdK4gzYTeaoEwkqSwZbhA13pqijH8KM8DUwZC2Tm81f97ioa",
  "key5": "38mHu27g3BbPv7qRkvhcYBCH6k7WRCnsMNCMTpSBdTFcBygq96BPfYbSQTWKVQmhW4eyCmwHBFhBETEKEFQjxjM6",
  "key6": "4qbH7rgso9A5eExeTm9F5Fwm1PRrbfq1Ubu1BnKHLBFfUJUEcyo3kaL9UjZp9jX2iqU8JDsTLDnzhRYbUvEfE8Ht",
  "key7": "4nnefdr2KwnMMoyXJCiwZpt5GTAhDUgAEiPBapjdoEtJg4YUjZAyhQdA4tGDUW4YH5WbV5NJjRkjnkRPd9Jwx61B",
  "key8": "8tUTp58fZCad9ZRhbRkWASW86LeLQhrkSmEDJQqVe2TcYCAo1Eu65kV4GXSgYSTqC2vojvqWQYcEHeqV96JhQCS",
  "key9": "2dWDXxgdihmCyxE129wntaebsFWA6Ry8SfQ162UUeaiPkZoMr3NqnbcqsfP4oiUnTzBkrwjjm7LhMLofsjUpVrBn",
  "key10": "zpAbCiiCFLPL8JwN2xZbn2aMVKwmHSnKXyyLz256wqha6JFnJ7VdZ8D7UHxd5s5EUK8x1Yu8kc7Gi2ojxhDYDZD",
  "key11": "4Ej9s42bZHCtfREBHjVf7XyRkFimQKB5RSwBFZaKC2QJaeTMzHWxS9XFpzLkjaH9uYBFqmnP8YT6n5tajHLzhxki",
  "key12": "3weWG9qWCQh1bDTGsDWoYhRxKD3ccvwWoT2PJmaHbnBsCKTuE3nVuyHurWM92bjYz5yPzRwd4uAigxf1gbcBNTfZ",
  "key13": "5Vi9vSwxy81rWZ93yDDdVZbyE3eGeRMYtaiswVTU9ezE6PMDMkkvqoD32UQeL9efYEipqVibmFQLE1QLVQZNNEJh",
  "key14": "4hoZxh1PUiZW9ryMmzp6inzW8AxsgYNewcPnL34PLzVZ6SULgB7PWLobCVU8RHNgU6PZHJY8nYqqMNCa9EEeb3Rw",
  "key15": "3khRQ4k87dte9NiouJf4FvgRnTMpc7jzWbhQq57H6jHJguVSVM4HK8PA1k77T7L2b6QFBa1LSCqTFjNJCaJpt5Tz",
  "key16": "2CSYGRMmzZGJiq71HzkjYCtzSzLQQsxXsciYJuc6VXjFC5BSEP6eR5wYP43vYBaNdkUddWLdQkkurrUMx7hsyWUP",
  "key17": "zVUbTmczx1ccfNHgcYKavRbPYS1SZ7AAxuHe5qSpJ7PKSboVAkjco47qWUBps6bunjHs5dUQmQCVXUgiWJnXdwG",
  "key18": "3LqyhmLLezS7yvLm9EzEJuJNUm1SKwDV2LKwaSEixmURqhQjfn9xtmCubbKX6ia3aFvn945D6gFs8z8hpkJVxU9F",
  "key19": "3zKvruwEWPaZyHorsHpeAm4TUFkSJ1tzXFCpLyTag87uFDVkZ9qW3DN1sUD7zj2jEbLQyoLskwaPT15Dr6hr5P5k",
  "key20": "2vDygVwfJrUa9Kd8NvMvrxxH59rKUTxiTY7k7Z7UGwckDgBXAUnZeiF8j1XbTo2kRyLe5AKkvEzTjagjfqpE6ki1",
  "key21": "2fRge9stkjer2MGSCpdxRTwviYhoqGY3CkQqqA83HYz9eGe9hJgKYkgpY9mnupeDjtReyHuH9ez6v6yP3h7VU4n7",
  "key22": "3sPRW4SwfMcHhnk88TH2Vr219hgdzpmQx9MyRRHcdahCbfptJjhGFg7gMejqLMBHRe5xY4v4dNR13GfJCA8KsAYK",
  "key23": "4rD6ZGJVRWLz2QHx1UtowD4rQ2X6WTEQa84jwvHZQHvhyum44xuzmwgLFLcYsjh5VEmSYmKTLMxNzKyxqYbNHwYi",
  "key24": "2UnLrn48UW2drVzRYxLa6Va1Yrq2UDfdSUmYTXJcpEpyAQtQNY4bqsK6YsEhPFb68EaBup3K4fByRPJ7zx4NqHFW",
  "key25": "56Q2zgN4aYeZfhDGgUDAc9QgjTefWRcMZeGiQwuUDnHZwBosJMZppvjTbTMoeMuuyWsxUEsYpBkVTDwQJgWnSTts",
  "key26": "4zAGEipDiVyqwuac9cmyn65z3xBkPWiGR2cDAPjushmM8JACZyeP9mz6cQYQR9u1txfAHngEY978Lva8NTpnQPhV",
  "key27": "2ngpCYXQpGv7V6bhV9CRfAz4YKf1gxZoRTLETXSxTnU6BiTchqvfv7VxE83FUvrX5RJyd1CKh89d1W4YCagcrbr",
  "key28": "5UeHpbM4GyJL8KbwnpUs2gRXD68MraCFoyLK2inwCJkeaNHvaCmeNEotRRE7SB4FrXdbXVYuGLUrg7XD4tXLZKL9",
  "key29": "S32csQzqtRGBwjfBLft7EzWvbcrLFd1jknmbJ3BqK11fbpkx2d9fASsatHMHPbnVfeTASoY2U4x6kHGexnnF5vd",
  "key30": "3vWPqPXhLLvHutJjerBhpNzTD5VF85YAL2V3UbRySnbDWCt15WGxtKn28YfspWK118BzCmSrKeMPWga9DFu7nDMt",
  "key31": "3cDg1GKCynJkU7ZbwGuJ62jLFjcybHmKR54ad7bXKDNQsXkhtECSWLii3ziB4FScmxirshBDALuHW5jtLwso8xoK",
  "key32": "2FoctJfamrGri9k9uGHnoMR9Lc1qSA22VouSBDBphRpUwcnf4cxtoNK9onWZe99foDrsZJ7xAKsXTuFFQBd7nbX",
  "key33": "GfDvJVF4UwsPB1h6bowTd2XMFAWuHufLdjfy72wijsZsYEhbNDytfwHYVvoZTTuyvDKiEug9o1hsTrnnzYKUs2F",
  "key34": "3rafv3C3AUevfb3PXUsRZ37MqMaFZtqDd81XRfX1ZdsuH2smwPAhBRFofHupLdJLfVQTZaqXH4NgPTZNtsXKTXsK",
  "key35": "S8s3NvkQrMpsnynhiQ4uAGbzCkGfqJtDaH1NMh1nALnKn1raqLZmmGHjC3BBMBm3JHqhcAbTk8GaGLgwEDxQkCh",
  "key36": "65qca1TjvgJaeEAUTj6q1o141V5W97YWb5vAft533E5cQtudSEWrTYnh4ctnJVEhR7d8ZED9a8L7b8xadELwTB4Z",
  "key37": "2UuQ4ATukwA8GsKPGJbXqsiTzb6Lw12jCNqKrxmFuKmVm2bHhYBLAUL28kSGKSSnkdzFbPdSwMuDf7vK9jE2PDo1",
  "key38": "4ZyVSacXTsKeXez5cZqsk2RfDb68AxZtzHRFyFyiLuJzKnuPDqZf6wvv6JzzY5ARab5mB78az2ve1JMGQbxmKmAk",
  "key39": "2TBdqtKFMZrwvQ2MM7eDn581ybyEemZ93bnFVCGQKa9p2eAMSKRCJHGqitJGCAf8wWKNU279Ty5yf7MqC9tnJbgN",
  "key40": "3BfnwLVQhiQr6XDTABxnBsZwpZhwgMp8sUuu8TaDLg1kSuH4BrF6ZCtxVU5hJgKvKrX9GPBPSqaw1oXquyt85YTG",
  "key41": "3FhFGAeZmvzdr9xkmZbMAPFVrnTjQS99c6XZeXTt4C36hhSydX6NigtHh4pM4NpKKaXu4gLcQnqPAyEY5jhtuCuz",
  "key42": "2n3QQ7RoQsaHndTBP3ztrLq5XBNpbn8KpWHqPzJ4xXsY5oZ7iB5EFiXjSqz9Pstdr3qFmf9WZfkwi91GmramtNRN",
  "key43": "3z4Qy9EcnFQitKqSjERjfaeAyK6XKFhfj9h7wdS6rgjLq4BZFT7zWdmg2BdAuDDjS9qs6WopBDNyQMEBtHkRyG1H",
  "key44": "hkrQvnpTCJNbiWT9kgaTsRWyA5HjvcDX4CLKLRbvjeKPypCsLvmSmD1vmucnBUAwwABtkQ6Etf5QjLr7SxKitG7",
  "key45": "4rmfbzQPNBiK6d5fsGz1dPshQV8jKm36NLy18Lby3uKU5caWsmb2j9Jo4G8haPY5j4MMWfoKKwoiSsarmj2psmnB",
  "key46": "3oiHjnQtfHmhnfSiqfS3ELp7mqtWZdjAvmV1FMKvhTdFQcuYZsspAs6qRTaCere66MGMeEPcpgVdEnkF6B5wmbP2",
  "key47": "2aUE7djkddPaLj7LFYpJ3uPR5y64tyHURCFc9N1ikqX4GMFiMugLousRVYSWL4cvRR4XvegspitzBA6nNUX3KhPt"
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

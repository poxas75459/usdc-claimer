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
    "VoBSS4xapSaMajcgriwN9SD34xLtT5x7APJuCR2asi3tgaXWf8NaULsefvct8aC2ordyHm4kr1JBLax8rSpVwL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54GWPsXekLm2spBuALNw5qXb2axmy4bAHS5Jy2buiGN6YSdC4Y4r9uDr1GocPmF8Y4xzfhvXGvhgtwidJH6tmKBz",
  "key1": "knA8FWGTu9syWLxBPRH4SjRY21b4svtr8nWBQ6aZAHsvNxqVybxrYXhdAX4hv2FjKW1pu8kXxugJDxTbNvRRkAe",
  "key2": "4unXLvFVAoQ8ZarUcAaF6cBJEZtVW46YEyTuTA6tJrXqjamH8j4h1PAhjSWScSNNgx1sioLGg6KMM4SszJPuSUjJ",
  "key3": "4HBxrFr4ttsVD9KMHwrXTwfd3WqpCvFifaFPqvD8CtpkQnRXSmuEo71Yv4oa4mZxUUZ7niQLB3DAohCUEHHeLf9n",
  "key4": "5TuFta3xHhgPJZPHY2eiHJ7JZ97FWy11i5uGRSXK4PsQPnA6ryCNxWk1CXowuFe43Voh3FC4yurQpKfLXEck4jtS",
  "key5": "56gxg39iq1BUgT8eE3XXsc3trHMXPKiSv4m6AiZge2KLQbKREEZDqSq1oP6AK2G2nTc4YR1oYByLCVfxLrwZu746",
  "key6": "3dz2QLZjtP6FmW1QseQMU1KV8sycCMFHCoBLMWSAuGV4WKx3A6XHzz3wpvjXLPoxqPpZjnVo8oPjj6eeQrton11t",
  "key7": "2axNiD5ZdPKNAMrzuUGRAc3RVEDVEgzfYDfYERY8Cvibn9Dq6KQCvDULfj6dNPaq15qsP5RhSEV5uHjBqsSpuqE9",
  "key8": "5QyR9L8RVcbfjVoS2B1EVD8oNGSkQcSTiZiszH7K4zfwnWbDKQzBXZdpp8mwsvoouGg24gSYcamg61e7TKoVYVTy",
  "key9": "2bn6bUz2JXWcyRT9Kpatwa5HpqHZC8FyMdfE1rV88UHVFfzJ2chD5ocRTDyRQJSJHwA4kqGFy2mc5xc5KgtsrdhW",
  "key10": "3VAa9uaPDZuL4A4QcruNogqzpWaNjC6Q26N9qKcehPZWJ7L5zWZ1HoRCj8X7kPCdnPC5ahwNaZnJkR1nY7HXN5YA",
  "key11": "3WenraKfH3Nr2xxy3TzEkCbcuaYNKAxjyTyAp73hd9YJrtYmJ6PjzJRyEQx45QKbaRHmEnYL3V3a5jSyDcV55c6X",
  "key12": "KHxcysLEn8uqT9PCVU3vxBFZZvmCpLM9AJLeoNAbsReugo4QP3HKrh6MEgFPgRfQHTzWEMoZS9pcgmC8bUcPrew",
  "key13": "2MRPDHyRNdvJQeLC2RzdSVZLmZpd4RDrws2SE5L1ua9x78i4TgctUqcNKafWBLexvAwNSfcTd1AvfCLJDPQTJj9j",
  "key14": "2fjWNM9DnXjkz7AuGeFVgBLhhzd8MzspMMe62FzJkqmgMduQ8Vtp9pzTio1WErYva9Xq9upqGPZzPpJMwURsDmFS",
  "key15": "of2cu3NzAQESADtJNKsjkYugCwWrUuwdeRYbJohvBvyd9Ah5N3dXXNwGnsN4F3FDMFmQBYsTd86fYQ6CAgFYArd",
  "key16": "5QM5AdXnVW21Fbe3vds9d2w7YvoxM5JwU9VCxj6Ty6CwoGtaAG3CvTHt7swMCBPpC7jXMo3wAyqaQvbGrKf6wyGP",
  "key17": "4zJvvkH3hvdDe1NuhXduqyH7a69ezp6kKbAYBPvFJnX5pJ5XgA1P9RvrL9NKAaynWPPhSPMsK7b3ySsMkGStB5WR",
  "key18": "5YPRf1fa1xVXCmKjq3Z9G5VmNCkt5zyihZTNkph1Y51p7QR9scvsrYmA2DnxcHoxYPqZbQbk2GFxg8eKkwMktCqb",
  "key19": "4nVojv5BBAeFJboPEBKbUxCDsJTQLTHRC7tBkiPKZwBKqGWUbDXFCvEJwuqVoGcRhBhy1PVN7viaaTWiDgt9qyvw",
  "key20": "2EN4cSV9gfXuqe9ogXamv2UnFjZWUMhFJ9R9qr9SzGUaXYBMYXokV3f3ostigAbQ2hoWh4V1ZkFCc8QJk45aXLEo",
  "key21": "vYASCsjw1w1zQ8UYjKiwWuv4qP3AwtXPMeng1PUD6HnBmS16r1v1thR83BF6aLUEofUhHZcweBWcNkxyoY6wNwG",
  "key22": "HwmRZqAJno6ZbRJSbr3FpYDVyJnSPjmXJWVqkZyLMJ6mNMPgEC9RbKctgsu7CT1HTfHMbxjjz4BqDDHruV4diS7",
  "key23": "gPk9kFyFfd5UakxLWNgHwsbfzNKRdUbqEfyheoz3dDGowqPi4E4RiWLJBZk5EzJXcTcmD3kU7TwzzRijDhzXbZo",
  "key24": "4xumm7WUF41iHgGAgxz3hZmPYaApiDmbqbML9fVjxiW95dJFSZ5jp4YkNwtXNuMg78PwToYNmW9TUTXpVxBz5ARv",
  "key25": "2jjoYtPUXRxSsa6FBcpEcyqZ7N9i84U2te2jnPmatfkTnTCihHKnUf1on1HxN8cdAxg88ZLSdZqGNSHGbuBFr9pD",
  "key26": "64gkjwgJ3ETkAwQwZNMqYPLNxGdxGnmuMb514CkaeXjsNsxPjEBizVKscDnw32ysW5a17p4nXgMcowqqo27HE1xJ",
  "key27": "4EHrW59pzXWfp3E6oJQrmi82jbXaDQEc5NsUwJ68FueSRZjaa489hXTYCijXdEakg9ETrjpXpo3gi9THEKuhJuqf",
  "key28": "Ai7RzScihdbLQKPnnDYGmvzptDTo6CEPXq8wFyxg7pWp8CcZhHctHFJQ3XTmDaRVYpSgf28nkgZeN6hwo16zDSV",
  "key29": "47paMGFuPmPWeaEyC36fP7GNGdJHyN9CVvpaxmZGAMMvXwMwL4vLUxyoXHrE9XdfWwd9swM2c2oawWnXDMToiaWM",
  "key30": "2ssSciUNsGwsqUixTMbn3SSrLkNMqTkPeasxK5yJxxar4Ug7y2eGexmrYJrv1z4iEWNWz6vaioCPX6KDsYKpf85v",
  "key31": "2MoWKm1zHz5o95NEJYgfuTrVTaH9fp1oMS7sjVGGAkJT9rUNGJF6j8akVvr2NLC6cUzCNJJp6GY5vmS3vfjVGRZ5",
  "key32": "2rPoNcmF7JSbcwV8e9zF5tNv9KNdJgkbaU3v1ZfseRDYfb5uC9vnsBzRUbCrTcbrTNdj6HVaTYp9g5ZZwENAmM15",
  "key33": "3LwwJDxMsVpGvC1xpzNJSkcpfLvY2fVovxub8dQLHXUq3fqacNNkbN6KbSm93dPRcUuEMrkoXbP4AyTzzygHWhho",
  "key34": "2DqqekBHT1DaH1eDdggBA4UE3SP8nR4sWvv9vQriXd4foPMQCF7yhpBgtx5FBvGEmipqsFaCrpVPJKRHir4sDkR8",
  "key35": "4XQZphk1YXoHxH84B445PUnbq8rQet259SKLyBdhdMTfNEtjCf43oLvnTyyekY6mU1ByQDrccauGyLC6o5uFco4n",
  "key36": "2mYkb2GiVWFt8c4fF1wRNVy6WebMAeq2RcChdi2Rx355QiVZpCeCRYD2A3U8CcS8nzLpBcAu6oBTtG3seweQYFqA",
  "key37": "2gzJq1Smstv2Sk24VVnQPJKh1e5RjTpgmwjco2MMgykqNLBTW9GmLS8qtMY9dEagpzTE2h5xbvhKpFMj8UMvJe8Y",
  "key38": "2sRFGwK6cwoJHhzmEAZ67uaCi4zprDrDff9Q2H9fivt8qs3K7vhQHyjjxNMNvaDjP8A7zaVBk2BhYGwnDhhAheoN",
  "key39": "3RXEM7iMGJNdxcy7GNP54eCGTkCCpGYZYdsoDsBkG7N3gKZuankoaCPbj6u4D5yK2CATWfRHw8nYXxDUByDuPbS7",
  "key40": "23y5jLyf89CgXdWrx1BeKyQrwtXmbJJepx6edRnQN2rGiVVLA9YmszsFhdiAUEcfzvfT9iSq8SMQRpt4S5gzJLdH",
  "key41": "eNW2zEMUtv2HKpin5db3Zj1D1TUNPTW3d93SDppWRkkw4U5g8bhL88BNJfQHurvszaFCYNWcAoARctThys4PhW4",
  "key42": "jevduMeK7DpjVuJMmBCeisPhjDiQ6Dggv7WFJTiM5ge4rkTuAPrbWpZLnbLRB3S35KE3zAu4owC3RjfQhfP76GB",
  "key43": "29gee7bE4aiGFUkoJcKuDBS9GABELZxJPzehcSmk89mnhrUCfguEqjiCTS52pqFPSujNaqf5D1Sjp1tmgkBWgWPW",
  "key44": "5AfS6Franey8NhfzEPB9oyVBm6oifRafrSRnfaw1UE5iou9LYUEgyEX3UdHSRMHnLwqWh7BUAHwhunnjLgu7CqiX",
  "key45": "5YHWzPsb4xzqWmgYUKA8MA1pToCUMo2P288WLW1h7v4w1AvhMu3MF5PG7NLM9hfaXUyBzG4kYkjcfabR6LXeuHrd",
  "key46": "5priRZmo6QPX64Dz4Ftt2UU9Zq9qp3rUpdJSK7hNgsGMeckPpx9eTPpCk6vQ43FfyCSUVHcFchTtVf5YA8x5Pkkt"
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

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
    "2ocoT1MeGyb5PJm4QDgkDy7GytBhec2NuTc35rUpMpXSSRb7KLUkWzaGY46Us46hm1wmrS5Vu6Mzf34wshNvk2kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wB1EFXuqLjo5VT54hy9S8AD4T34C7Zxgh7nG27zUT2JPoEBMtd5KwdDeEzwcmivpQ1fn4tcsQa2qdM7mFqCumEE",
  "key1": "3e7vVdTP85xDx9Htp3AzhmNdw37sxDfxvzE8BqbrQMrH7S5VptAJs9yPdQwLd1GQHXsN5hcav9hugxWafQXsSt8o",
  "key2": "2ApM2sY8ffqVmgbmvjVsUeYyVTTfpKVWSz5eCRZQE4i1DCnpUTTE5yiaCdjhwG4iHKXsDuZ3sJbedzBgSWYFPA8r",
  "key3": "5DfcP8Gq8YShsTzSaUkwGTLTXeubL7czYGfqjx4ewFqmixNEC3QeDBx3V8WPxXrL27BCMXngQhGLxpYYEiLwUHsz",
  "key4": "43Z8wbLoF99c4gxvSdWTDmZSJR4gdhx8BMmzo4vi1QLxrCw4mTuUX3FdKr6ySi1g3mXGco7YjqD4PfMBEwxTB4RN",
  "key5": "25Qrs3UorQFoe8BsJUAaMKT1cS331umEzgbRnt8xxTjAaRukF7UXPUADD9aBZQXcUGYA56mrL6NoqkPVD2qFaVMw",
  "key6": "JoPysWj5CBS7hjYoyFsP2YvJe8NADsrGdRiXWofognMwhNuBdP2cAWjznW5yuquBE6j3ookxKwueZfrNVJs7HH9",
  "key7": "5REFL5grsTMrRxHKxhSovoHEKu6em7SMEPfCoFq7j2PFs4xBgSFdEoCgqFGwZcNt14nrBWvBqqEAEMwbTJBhC4R4",
  "key8": "3LD8mGc6EH5zP13sJbeahiJb9xssgtSQJu5PjMr4dt1PYP8uYHv2yFTgWQTesFcXrNLoMJWDd36gwCdSFqgMUFgT",
  "key9": "PmafC6ihZZLZA4ZbHReQtDwMajrF41RtU1vQvWxgdPNvTdJJoThrVL4ycCg4XZJnAjbpCjMr79gLJs2iTo3T4J6",
  "key10": "gP82d7yYN1i8H2mr75UucgJFAZWTPRbHn3LiH1ncVYT6X26Atb1eST65K3LemmwfqhLFKrMn8ShU8gue2khpJBZ",
  "key11": "3NKUjNiLaN4Ga2uznsuKgRZcV3QgoSVaFdjAhoTmmSFBFt8ERXLQRXvvMABbKvejWZkSzquuXip5eUzXiVvaRm5s",
  "key12": "26Po6CvBbGyWeRoMNC3NMWSLW9BqKzZb9BVMdqBa34gWH4ntWxdYsRrTzJ9EUoQtowi6btPPdEjpZEG55dXmQv1c",
  "key13": "7PDqwmr1Qte7K66VkDAoWTccuq6ApFQhmoQy7aaSc1YYoo9napvjzDXprk13QUieXWuY6Y44yd3zyMcn3cpU3Eg",
  "key14": "2Ymz3nAtd5DqsuLD737WYit5a2oCnmET54qUYDMed1CpHSpgh5rz1spQnQjcDNnksfnXueTKXPiYaAZH4QN7j7pd",
  "key15": "2uHuiJCMvFWKWPMZJzYjpba9q8eSuMCRB2bqXpXqi49ph77qX6fR9vc6bT6VJHaszSLRbTsVAC6XBaDLUdAtYm1k",
  "key16": "8rqFXnAMRq2TGHPT7kYB7iK3zPkguQEGePx1KsNs3obkGtJNLoF3kgVZcNy1sKdBRrro3AErybD4EsvhFTB3MW5",
  "key17": "3Y6S5AyTMsKcDtsDCxQfcizZj7AP9kF58GGwKy6VFJzE9CVfqxypTQsJH6ZBNsqAi4tesD62GVZbTTfi3af92cVs",
  "key18": "3V47GT8a2uA7VwxrpEgLdwKCoC8Jyb5KEsjVVLZdcARRRgg5gcqs9tjqLzN58fAPD8TmsXiCSVXNqqeq53SZk361",
  "key19": "2rBhEuK8Tf9KkKqDQxH75xWF1oMTT5K2Jtixu4mrsYZ994H1BDcjuBfz3v1y8SRz63UMs6NPcwgPMNPm4y1gJJXf",
  "key20": "3N36zTrMCqipRSswWYti3mAGmJcWccDJQGwVgjYWD1s4wohqpeQab74BRagJZiWc9jmU6aiWp3PuTDYhwa5RR4j8",
  "key21": "4ummVrT16PFwYjpwqJAaq5p6P6nxm5o1xP5LLKixVpKVVajRtCy5hXB7zAYrKMSVz4KBuhnQPVFbDK85DLhvZo9Q",
  "key22": "2RzEJLmbPZVLX2cs3aTmPmrZkGjeFj94zDYR9Q5DKbm6cwKz8m3wiT1RzUXmNHfr2C4BAFGqzyQbVKzPUBuEUZsK",
  "key23": "56svGhfovKS4xRGQFLVpdvBueBo1u3sAUMwbGCMXkxEuXcCkKF7BK2G77ktGDQCRnFqo8zzGqrH41pedy9XAN2h9",
  "key24": "JrgBaFhnvVVjrG56TpJLNH4aV5J934QDQjPdSbdgf5crCptSiVeAcLeq6din4TsmH7sSo1391spDpYERqvUvmsD",
  "key25": "4WAXKMRUPvgM3Nc2W5x14a3LB88iwRme2PRXo3CDh4H1ifSP6Py8RzULaAAmeYyEKoFRgcoX5CajaQbdYEEznACs",
  "key26": "KLP9jAT7vGKJrAa6CoiQXDB8FuEsdDfRPAebFqYoEiCpaLTcEU5z1D6o26t2HsLsBSACQDGDyVZpbR2wwoskPUq",
  "key27": "35WmJo9j5svDmQiJc5LLjMKTgWrXr55FLvfyRcB2Eo4CScc6iPJ27U8FbDELrhb7KQKqPrSjcmAACcjB9ZvKayZd",
  "key28": "4LSVkopgRKPPqmHZiXKExk56ZqYbPzE1hsJ4SVQ3JAu4jrsPz4LaiFahB2mYVLYJ2C1g3L8o28Z3HxhHJ2oeat6",
  "key29": "WsGgGNLWhWz1cPz24JBteCv6Kfmsp345uQwFjzzKMqiBzJBJbyxMxhpiDpeE9Y42qQvLAmQ39M9qqrHgpSXbexe",
  "key30": "2nrr6U6zSLgeG3DpjPNbphFzHwk89KJVTSAL5Ak8SNh9y9xGLEdjQVrHxBaV6WGSmNXWVyrJaUbptqK9qHyKY9U",
  "key31": "622c6EEhrjH3bpWCuWB9iBbuSvd2Z9YCXyWTF73RMAt1FnAVBpg5HhRALQXDBwxRjnPkiHN7XYBVAUfCEoxVxkqq",
  "key32": "4oDACBNp6VGmS46GmUTPrx5BZtGiiVbyLMuqWC2ePa73Lg5ZYq6GrEfxXGfHWcnTsQTZ9nB6da1DzxWnznAqViJR",
  "key33": "4VPJ7W4X8U7twCPHbbjnNFEnN8RY1tFLR8z1PUDKQS74Vt85ZeSsrLFTD1XFExHmijxxWmRzm1UQxKGAbBnT1xZi",
  "key34": "DB4sdZEoAkF7FPzWfFiUHoDVsDqgYFVZoEJ6Z5w7pK784FnYHDSbkSS9Nd76e2epL6S9S6YNwgwLEdFVe9Yq9Qk",
  "key35": "PaohtY8scPUjqwowE8JRcXN7M6jhkdjFE28xho4PkPhDKkNTcmZrEhwfyCZunzSFZkfXHbARhDb1vrMftWvNKt6",
  "key36": "4gJBkUYTwwUqTm7jdruNZY4z4LLmHsEX7tTSbnoJgCPHeBHac4oY8MNYzYZdtApn17euY97z2thMajK7spu3z9wH",
  "key37": "3g9ta8EQm5JVoxAcBjuC8o44WqHg9AqytdpRc4mk3d2E8sq3GkNqC5kngqZWkrnUrWNHLCAa8cMfg9yvSqJpmcRF",
  "key38": "2BcpdG8yDEMxbHp6HGNzBgcA1duZdmDFYoLjUNjGdYpAAf8AY5nDDunjWWay2cAMtLLtL2iwCsYxf75GBF9RmaTx",
  "key39": "67BWgFYKN2cwSWfks3EFibWrNzUB45g8jRw78uEsQVY673VCZ3FnVU1BbtQXirVgafQ97G7ABTmbtv1qgwfi3Fey",
  "key40": "3wZfiBqp4pJQ2PAtY1beEtoPLFa6V9FYysU7p9ZNiuzSun23rQMPCxk9ttq9TWvyaow5k1C3X2o3p6yeqF8B3799",
  "key41": "8K8PibjNKFivQLqHFci3wV5ahHJybaxe6VrcHMvGvxuZmVNjijH9aNQT9QGU81zHhnKzTky6jMf6vvj4kBXbQBC",
  "key42": "B8LWC4sfm1RmL9Lv7Bx8GF7s8DGsn6dLof4W4bFNMpzrhpLHqDWzcu28M7nd5G5FUky2GAnj6f8ipjoN3kQWkgN",
  "key43": "2WwksiJNCputFiVfiioijnXdbEYxL8ueFscJxYHU3D7LHBTY4AiSVHffe6JBteuMRbCAsUkK7Swn1ELsofPBbY3i",
  "key44": "nDnSTdAfNtHVmZCP8GQekdMBKEUZBeizuv1YvcA8dFAn1QnBtyMjE68b967pJrmc8T89xStPyce73mYqUtJndfd",
  "key45": "3oFcujtKmLhnuMzt98zqrrx8bpqHiEVhQg2y3tzzn1JcLTJeeRs8XuZnNBEfUWgacjxEE7mpDTE1tSvEDfRvPmwo",
  "key46": "5C4v53DwaNabDMUSzHofHC9H6roxKdsZ13gaPBSFUAnzUkT4weHWJ1o8741hyUGzeTFTBY2wRpNNaHtCxNqPvvKY",
  "key47": "4suu2uRLXqDVoZ5atNCSu2BdQjqAyP3Ev1w59jXWYyFdN3Yy3PXaGmt6pKo8ML4BPm7bm9jFpE3oY7WktYyB2wjz"
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

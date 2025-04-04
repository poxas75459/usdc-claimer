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
    "5gCXmvvGF3ZGRL8o7mkbauoHBV2uH8QcwP5wA9gJ9ToPdH8VZTaKygc4WKR9gUhjeiPqmBAXTSEggec8Kmv4tiZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jruekpqqc6aGZTe9dmMxm9Mu6WGo4h1KUjqTNpyc8EcsbxgnkAZg86VM7R4eHifkNgjmbMQsbobXGEQJSAfuKge",
  "key1": "3bukrDJUUtq7sxGr63uRY1zkb15KeZE6Z3i76EMsNfsieEBTdmWRbqPrmN1gtsTo78Tdjz49xsuAPjwNepPKGcQS",
  "key2": "4H8DbYDD4jexsuW9zr7irjNr6zVuyaG81x2XQrVN1g4Zi7HAgUyx28gL1uTqMnh991KDC8JRacTmYEVYyKTLPxEs",
  "key3": "2wk9v2ziZSjQ7T4EfthnpKzjDCKjr7e8jJbQpucNLLrCxTJoePZkyPK9ocXCaNtSULKAM2YVa2bTbP6H5nzv4cMu",
  "key4": "2zoo113bkwsRtr3NzcbMU1GmUrVLpywtKtKieozdYhrXkaJQm2Hw76Fu9ggha6Go8eyrcWW59zM29YeS5kT4gmPe",
  "key5": "2PB1ZGKAzfVvEnP99rUqQu5YD2aiuDv5XWuCivZenMD4XZAhpATabCwNxJcSEnU3N9dnPwV8RbB8mVLBzftVUHt1",
  "key6": "qj8zmGgDmDLbopBAfzJHMGZeJvX4t3HyH6hQbj9wpxP2EsRo7M8kNw8cKXfYwudLf6ySmodjd6WrZiPyopEmFjt",
  "key7": "5M4eLnNDzqrdFReDsi4eaRTkF9v2QAknp3eDzdP1pZ2KF96B2RrSa7tJLMig69F7d5uiSZYtJhoHbawsCoUXAuRa",
  "key8": "3Ybj61J5Gzoz7f9ygSzcw243sBFh9myvFXysomRf8Ron2etZxLVai3gTaRGkaqoYxhyaQV8tpowEiP7DTVyAjomZ",
  "key9": "2QwMpS1Nxn6ZKXpkxHnSpv1aoXsN3BPcnYiiaJJSCenpWqLspuqVBeXqcxD3HJ5ZVUzuPUfgbvJyQDNe2q8cngtn",
  "key10": "2NwrBSo9qZmD8xTmKJ2n6z83sUwRFuqpDb67By4eXxi1MhaiSkUTUzLWfcDrGVtRTGUVe9qfgiYDvdThdVLVEZre",
  "key11": "3Mr1YdPtGAnANMRmV6NZAhAfvYA4PVwUiwim6cDRtdEyFmkiwRDf8npCg6nbdsgciPTKPysxQZPVzSvSK7W9BoRc",
  "key12": "5MtkS3SQPmHojqzGoUpFrjmEVGNbFy6uUwVaS98gKiVJj99pHHFPwwXQ3ecJjMNeAEdihDwy1HmXcYo9uCNg66Kg",
  "key13": "2JkcN87Xi9pzxWDiwpmVsUcXP6w9b1N7Y9qSdYEF2Nk4yRon2UVa5hSwLHm3jc76fFLUiyzQ6NXFGVocfkEqnTqw",
  "key14": "4HNHmgXVyX7qCBb6SLDzRpDzTXQm742VvUT85PzVz2r1rgKVTiJb5mgYFQhm4J1bd3NSXjyKudfxweVDgs5exi8Q",
  "key15": "AbvHUU9Hk7jfTLTzemE5iVEeYqbBdKdvNUVYbhQz1wuh64ksKrvANGowj9hykDoCmfMdoP6jzYethi9dpD44F1M",
  "key16": "4HUrahcDgxk7yRz6r7HG1xy5gMDRJ6jJRS9jVgsLPFdExRq19kmwPptEmUj99SEMieDvBzvHF8XkVmgxBJsidiEg",
  "key17": "YVAHXd2j6q6tKYmm6xkjQWv1GMtafUyivNxcL4mwENxzWnVyYJZ7Wr8EnZh7BTfrTMYqqCJB67twFWUoJaFCV4c",
  "key18": "3XyS7Zo8KfdG3C2vtgJFgDDQ8E3Dn2BA4pG8pr7ndJhu4nWbaN31QFnK4oZ1k1b3yvBuWK824gKzsA4KJQichKCX",
  "key19": "5EVzQKXq7u61CdbekGKeXKiieR5UM4NzuvSpxDPBjkd4hj2ZmjuGFVVuzV9Zfwo7sJEpmiDad9ypxGwmg6Eaaodm",
  "key20": "4xX9EKgpRGbCnTbK4FJEKLm3V4tfSzuN7BCjn7siU7shYpsW5WjVzBUY5dod7x4RSvpPbrwpiNisPAmgRjLt73TQ",
  "key21": "3QPHsHSpfEwk5zR3YzrdXH5BK14t1veCAHanyZrvxTsZ1dnYZ2q7Hncpp1pCStHppKWRu9bcGmQRNmAEb1ZRZgr7",
  "key22": "HcS9h9XqHJ3ebNwSNzNH8Nzmzb7MNxTwTWLC8qwdwXuKBW443wab5BuBuacJDh9QoRGPG8e27EsGFXeVCpDYcFj",
  "key23": "2nSC87Q2TxwjrLMaY6RTNPxMUZdWJY19S3kGsdC4tKDBBXiMqCLjuDEyyZiw29HNfGe7SmTfPssNCjGhYneBSWuy",
  "key24": "23Rm7JXcqcPEhxjufmqxp6hvsBDHgZyzj9JdUgeLurRAgfLY6xipke2Y2pS9daWrTpeqKG4gaMoQ9ZWxx3c3Um1J",
  "key25": "5y1jVJJZpSRmRNbiKXu3e3Punh1oXS8cbx3gWRxEe2rjzS546uZwzry4jNw16gbYe4XaayzfsgDvq8JLwPDisM8Z",
  "key26": "2WgX5yE8wtXQJQaANmmhTuRVVZH9ePedf2QdTfKBNstYU9qWZVVA7yWNwF1tfSv5eNPdz1TbSNvtL9fDzi2g3wnK",
  "key27": "4FumNNpouvS55X8KojT5nvGSfVurr3EJ7XJFG8TQixkE8o7gHnExET9i9FYCRnc7GMiRyxzWCsggC1XfG9FpgMyk",
  "key28": "NC3q6cZAePTXZzKr3T1VKYSkwqggJ7KYUmMPxbhbmh7JdLyRkspKvw6bT8x8LgA5DoWFY1RzEXxYTwwFwchrEjd",
  "key29": "5nnFMGdB1YkUxuMgPTwj3uYLpmYNjJocXTfGtcLoTxgvWFCagNmB2DkQ3FQzJt98AFfUTQJcWvZZFwz229a4NJJa",
  "key30": "3LcX1XzF3p547B4f2uF6o6k3LJrarW9pBaxjZpqh5vJ1Gq4uqbwjeLMwbkeBLDFEvTUxiMp1qgSMPBAn8EHWivPx",
  "key31": "22Hfm7SmkA7ijdCbbyWn6BUt92NYeatvfgyrCY2Su6AfAj5FHoZNaBEx99u22hxZeU7dfFhf4YB8gFjup4noXUiw",
  "key32": "AjvFfHzcX1VVc333ZZrUcomoNfyRo72gnmg7H5E1tkLtxR6h5spKN6yXv96G1QE81N8XN1W96un1qVRmmbf31wF",
  "key33": "2WiJonvoNiAmqDtNikeAVcfP3rLQHuTncjbtHbRxqgbG3rCiE4LH2Ma5VRxutvfr56ybxnEJAZsbeugyZQu5AxtR",
  "key34": "GY3n5a1xq9RNgxbUb7Cb8yAymeuuSpBXiMqvbbx8AWseW7gfJcPSMBGEczvovNy8KynTHMSpv3nkq2oQPydbAM1",
  "key35": "MVQUx7t7PiabeTSeCtZRriACLWp2xgy8tce1bZGV1zwmYqnDbuqDYuLoMoork46FmAi43bW8GsTS65rgs354dsc",
  "key36": "3uBpK268FfummjKw7JLVEkPtRaB3Ebx5QxicoBT2JRT3see7XvPdNuAt38eEBRNsD8NVEm1WCM58KAYdMX8yhbRM",
  "key37": "2Gbqj5MGD7Z6FfeiVTqKbGmbaTHbiQkPHekXGiFAhKoweEw7C8xVVtJeS77vdPBNwdEAKx8kmc9bKFr5VJoujdKP",
  "key38": "2oZckWrygMpJ5CUbweUXGbwSycZz6yqSrrwhNijAfocoywuhbbt7BwCXHwXEksgRACtnub9D1Gykj1HT1wJrZEbC",
  "key39": "Ubgdfkkokd4aKN4USp2pvQTBedpVcTWv1aFYf5HCByj9BdhLxi2rhJ2ioNHgvxTK7cc4sZuEsmYJTuFgSP9dRrf",
  "key40": "bCnj7jw5wnKFkSTcjpDRMSogkQ2eZwfRPjJsYMrnDuJnuSEkzkE5J7xYJvy4bnzsZYYev3nS4VmgyvNRVA1RveS"
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

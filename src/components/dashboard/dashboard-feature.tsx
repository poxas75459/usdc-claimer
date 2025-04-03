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
    "64MzBCPTD693tzyiKzMPsk5UdE3hQvx375pTGN6Gm8Pcqd88cUta3mLkdAhnwDMdViDrRR52vpmCJjXPEVp5ZzEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3ZWj6VBbsBLGteKjiGAWwNvrHxE2U9NV42ZPc2jp7zvSRWH4LZybPKMQgNifn1Vxg3FHPEf1o1rxCq6z8sPJ8g",
  "key1": "22fZwDsn2XRyiz2AHWfDCgngFzG6CphWTVhfLHNFdPECpwL9YXPttysGXZfup3KY4rnwrHoWyBsP2mea8pjyGjP1",
  "key2": "45nRtRF6zcAbBcr1UUxRkQppbH4W5jksd2HWjBJVRoGiukxFBP7UpT8ighaasgMzWdEeztouJ12UMcigz5iZ5Xu9",
  "key3": "4hr9c5ySfTqpG6Q4wtiGmd14ceK1jRqfnj5XfhsqJkTemm1j8FNoGkh1kjFVpUim4Xte1QGHELL9mtztxBpZDN8B",
  "key4": "4JKhMGJUyJZAGrGJcWB8oUqCGFYj6rP4CQ3teEQzjewsqJB7zWNctd9SAfVyKjbPqeMcvvt4Gh4F2rrm6XpP1HQs",
  "key5": "3157VLrrjxSHwi3SQ5HxP8rmjyLPbhnZhmyy1Tqke6Z4GBLKLPRwSN2jrps5tSL5Ma8V1KKikmAUH4CoBkucUZQV",
  "key6": "2KC12pxcNrE9WQaoPwh384RGvQY5AJkZMFxYtqXnExteoXqBNhpxodxoKCFVPBN9cfd9PbwLhJuW5E51h2djeZvq",
  "key7": "3RWer5rqcX3GuLTGEWymhQCkQwyyyvp3fcL6xgxFPvQ8xRzBifhi1R2WPyMhKp35RXeG1kw4uGmVKTQusvszV5my",
  "key8": "2hWLJz3T6Acb2UC4qBoVNEcVFvHKJZ5tuMoaw1GP1m7ECf7Jzn3WtYHkGyFZwmQGb72RLd4LRe12qNibz2tYkEcJ",
  "key9": "5VsRCMmLuFikPsCvU4nDwDjBmhwFnyzN5V5pcE1iKQ4SUayQ4JXh1JUN6LAjhmpYqEscpsPR3e5GebQUAwpgaHCV",
  "key10": "3rwG8C3PCkVqQwtyAYjVrEn9uA5fi2NvKubLcKKiK79yEKwU22bRM1Fnhx6AEFgoLQM8pgq3Y6EDfHZ1DsSoijAZ",
  "key11": "2DoWT4rhNxM9pgZBqNbuZsjHQTWot7xuZGrzecT7Xr3sCrUAxVofD3mq2SzikUbvddPo3SjLzRAC9LNrk8tSe9Tn",
  "key12": "3AW1Jxpo6ut14T5MqWhJ1eTqjpUW9QVt2XVni6aDi7JJAz1hEtk15N6FNVEB64esoQP6uamTcYHHSuaxbDQ2hKCg",
  "key13": "wfP1j43KJL1X4aUo4pmCDq1vXsqtMNg7Fe6yqRmfDzdsUMeLGaTXpiuv7u63PLQqsvFeM55BWYkD5yPqPZLyr6P",
  "key14": "5FycDYaNA56EMzALwMmdBMCpXCsvAr7RpDg6YEpE6N7PcKFSCUuA2r7FqKrY4a7XCwgGydyTYLHc9473XpSBBCHc",
  "key15": "2jBin9kTCCYEn2DiWM7t5YheXWitWF8utV8uqJb6eB8G1ty3CvAHFFf9wthHqkZ8Xdyf3ZsVPVh7Maiortrog6NG",
  "key16": "4mGSyjKHLk4DSj3YaVGdBa1JqxqvTff8FGZBQ9wXex1wrMAte6xo3pepXeUnBRKWTJxsReUBmCJmDEsKMzXJjLvD",
  "key17": "k9pjeofvXj35eian2N16BDat5EPorYRBLvMNPvg42QbFET6UpQo5gkRi7BhCZh81BLxYtw8zhFyC3ZXSwjA3CSm",
  "key18": "FqSKS1X8nQRzwzwW2tDkJvYa3nyV2FPJgxD9NNsQFqnswsN6TAgZXFjyZM8pyZZZKro1AbAyXgGYoymdyGWA2ca",
  "key19": "hzDVKU5P1kojo5xCpZqB3ruVCi5zwpXaKBvTY8QRJotnbDXJjz7yKJbtxUrBqCY8khd2TgwB5BiKgHeZSSWnEpp",
  "key20": "2gGWtWP6Fm2syA1mLoKVwuGZuhcez9tw87VA5N6HYmN692sxCXC9urpCXNPdkgu5RdjQTxpiFuyuMU4T7DYqZzRQ",
  "key21": "FwEF5xUEAi8nfUteumXzhL9RGLKepKGnmmm1noJbhwpXfK1nxptaCyNSmMVvoA9MBPBMCgoso4NjpaY38Bryn9N",
  "key22": "2VUEnp99JPoXr4XB7d73bD6UCJgoxBEEfP2uPxjLNGmyNtgn29GTvwz3wwnKE8RUdDhkLCLVdZ4b75g11eo42uf2",
  "key23": "iWumJ7GDbNfrfBoym7RHtTWsgPbxLGraY1xScrfKJAGbDJFHQYm1xT24kKuj3YnwQzWqFbuXxCJLEikMJ4VBPDJ",
  "key24": "49mp6dVuQJeaJSdBLV7dL9QAxekEHiPGWQQhEzKpRhUsuLScyUJNdMNKfhavWuMVMue4W8napxiQNUyBTZVdeEvP",
  "key25": "4yZ2pusvLnHQYXMoonqHKViCqAZVmQVssE3zbmhxr6mLMiiheorJZMyRRdy3YgGdqxzH9sagpcLUuxK9nVdHoVKm",
  "key26": "2pvJ6jTjUPLfyhqc8VhoXWzRJs2LPPQZkcWcpsJK5UEdfpdKGXRshSpwdPmoCrXkL5Jj9eiCSjL1r6pXvmfDDGG2",
  "key27": "5if3YxPm28Q3KpHTvetA7XHFzyNv59kQWh5q6MWUTahf33wdK5QU9ucjj7rEoTYygubPptgd2jYaxqzvXAxY1Xc6",
  "key28": "VzViUweC7dAo2daucSZ2CQmVStTmtxYR5SD7pHnbJpqu8VF16Rab55eFpfpwybaT3o7dpbsLWydV5QQZJBBe2MA",
  "key29": "4JPV3fwBBuEZnNWkKauLKJELCNFgqHex5xcjNkCQpW8rCNW4SiF4oLek6RMdPurp5BmCtgf3CgiUNgPi1gnqEu5e",
  "key30": "5UksFNUPoCZTVkjYsAUFzQm1hr8tFGtXhyFhiesEVmqcrpLi6Vf1itPVJcLSxkaQ6X8QC6ujXf9wu1JA9TNrmePM",
  "key31": "5L2AqAthEYsTpAyx72zh1nybiEDFXb28shFXAufTpX2LLyKsP3yJW8vEWy4rPKZocLbnXk1xYUkn2L9UDN9arXaA",
  "key32": "3vgwufkY82F9adkBa29FMu5C8XYZ9nW6qXHc8173G5gkrVsvUc9iGftwhvzsNeit4AqjJXuvi4BSTf9Wmc86rXyh",
  "key33": "2fMuU22r8WQzSh3mZjv3mfbCFH1frn8yzJwq7Mfvr1UgJDdNxneXKDxnpL4GW7PGmtxLkVNJ8fiSHbosnQq3NAYw",
  "key34": "3RpGB1yFV2oBbqr5f3BEonxre7jFfvA7eGEPSHkUtL3gKVYnVoS7CX6v8kZWJpX8XYdZ3f7CTsGeBRTEKKCwdTHu",
  "key35": "3NXdSckbMHNiyfzHAYmmJKHKEjfi9wyWRSSpYkQuGHWBeh2hc7cA9qGnQtxqe7mwtWHWvgadiJDUzfFnYrEGnoXe",
  "key36": "5KwMktYYdjUpePfPgXu8LaCbMKGLmLN8vQZtibWeWDHerPdWN2AZ2JYitZzL86Fen9EdDbc9UTZ3JKxWNfazEfq1",
  "key37": "5syy7pHsSaKHFP64tWhG3Tto5kisw7SsbAPQfu8YnmVo9k2hPrQVwc4K5qFUeRWmhLWfCjs4cPEGTb6JtFszRSTh",
  "key38": "d7rzkEAHkqEHPriT8kGX1sVRxwy9ht6oGb7ZgVEkcxq31R4Rv8bzasCX1Ln5eYNeU6oXz1qAtjuYuNHohUSg5PQ",
  "key39": "35QM5MsxfnLcNVwogYytehi7bnx2ArLbxkuAtZXw5ugKJZXu6p5TdJpGFEnuFqnMfYJGXDSHCKic8FZABPcoSNJB",
  "key40": "3gwpSYv1dfKLU79h9JAmyNo4qsUpLNfH33qrqMCcZvVQ5kUrGHfqq3Dtv3K4mQbzT27ryogu4TgS4p3ZxAQ3JA1R",
  "key41": "rY1NfLGakmcFyVy9dQMFSCTWWNT417x289JaLamW8iKQdJLRwSBWxgvsUknhkADJkv4ucG6776miGrjn6g28tAn",
  "key42": "42kgEhZEqQTE6ZxSDfLDhq5eyoB7VRAtzNcVi8oEseYAfkEn5taAKquZGbHB9GH6YRnxUhscSa9Q6LDsaAs9jaeJ",
  "key43": "4f5WBb64n9gEn67QcJRdei6bMHexR32NdqLFWv6cukzVz7e1h8YG2utt6NeZaN1orUzFiayMmR5MbrHf8Ei9EekY",
  "key44": "59TizijzDQh67kMJ5AWr2FqtcDXpbLkxUmo5CosdPGdk1NdcSHggvqrWTVjH9kcNEnAufHQZmWWH93sQgmJQR83E",
  "key45": "4AUWVGrZpV6FwC2AUfFb1GNF5YJv9ZyTmLwtzutUEEPgvf1hc2eTixKrrcob8BKpWRY44no4EucTbQCBuL9r2aQ4",
  "key46": "5YxXA39aZtgFYDx8prFww4GX1U7iYTHcWipDk5DKQtB52S7KZpbaAqN7LxbcZYqMrYRbCXMrfrXQPYbMMYsfwyre",
  "key47": "5rXpgXAA83AVCxzxTEApdiDnUS8jJG55G14mzjQ6ewG2eeWqaEqdRzuNYWnT2iDFTH7EYrKKrFJCnTaZ43rpFKeo",
  "key48": "oUut64k7Eoc5GXV2HNHi7y3rrP3w7Tn4Pxu6i9DLEbc2yLXSAwnRFje8yJTfsCxHjTHU8gVEbxxV91tS69WrNc1"
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

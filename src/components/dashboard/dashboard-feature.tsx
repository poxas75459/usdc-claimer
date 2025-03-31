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
    "4DM7Zg26HJTEXX3GRQPG97Ht5Xb52G3JEiJsJqasFtn4a9CjnthRyTABMH2Rzx1SwLyN3xCs68ZFQfr2kauLnbTt"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5TsdtwvZF5TcjvwLkQogFVgybS3Zh1W2YZHiuPxmG8SLM87L6tPTab82mwqLUuAuNXHj9VkEQKnNLneZHkighFyP",
  "decoyKey1": "2eiSGT2je3tkyfHQWJkD1x5eHJioyNR611Pd6BXjrJ7i195pboRGY5MCymiRZEmYAqGKpLLkZgEZ6Uer7dHpa97b",
  "decoyKey2": "4Y3bnLzgDYj9N4xwQhZuPn1Fz3GZECsmV9cL1ihEdKtBde39bMdFHKzVPwi8yfUnapiX8Y5MBcMXBrCqoqhuszKe",
  "decoyKey3": "2MC3VVLCjeyM5gPVPM7qP3G4cdJ36s3y25kt6QfbzczFQT5kbSyNdsYpGCWBH7vySdfV2xP9yseuoB86c6Bkh44w",
  "decoyKey4": "2B5KNTnzZ19uWqp3BGJQm6cpqZr4H5zHuVDhM9PtEWo8v5ZFRx6vn32a2AdbHdjFrbu9yXHNhcBsshWfyFzBsdFJ",
  "decoyKey5": "5wC8SLijBWBdPff9vPPsrK6AR2RUUR4GuVaL6Y8Q2sqsLJsFzP8WFGxHEuNqA7UVFrYAvfPRQA42q2xR1rpmRaiR",
  "decoyKey6": "4TTAPHnu55ZyiZFQyuvMPwkZWcvV2o38QtY8uwvLanftoqHkueqTKVAfxug1d27yNqvQvUCuoKLHRdyEEeofmScC",
  "decoyKey7": "572wrfiLRbLLHShGD7AXiokMibnquiKfuBZmfn3H2wCq1THVZYgAFxe4xXCAwZnwECQR1t81aTmmLnSt6X51n1jd",
  "decoyKey8": "3dQQJcNAQmLueFqt38qznAZACYM5DFuJe1kKxFSWBdcKV5rAW9U3KJTkKJnCmMLgdgXSemPrRQgPm3A2RoSLCetA",
  "decoyKey9": "jVTeR4j7WkRGcWqS8dHpBEaukueyP6rGfUT2Fp7jP8px9PghXdsooMXHY2z9ut3bzDrp6avMDWw6Cn8c4yp5fCw",
  "decoyKey10": "cJ2jLR9wUQLghL2tabP94VafA6PEobnh6KT9Uoag1Lt5zCBXghHGSNHRwSaqFcv4m8moGBotFCJPnY932znMYAV",
  "decoyKey11": "4fUDDtrzxSjVzzKDZ2kgdURh7GJAtvW3y2skhkbGyobacWLnZGEJj1xC9gemMgVGh7m5fTnNsf8v6VpBud5zQrmR",
  "decoyKey12": "51Zd9zxDU5rLidpS3rTGoJ2gaejDecLfeKcqoLA29Heg7Zu1EjN9BocH5nr5DAtKPVwWQ8Z2uLrVuzDK8bd9Urea",
  "decoyKey13": "61mNdh8oyRhj9RMJfVt9G9Rx2jbqVwwy5zZz2PAe7sRLc6XHU48WtKkioi9obY3cwemDDe4TRtUjKtzTw53dcyRn",
  "decoyKey14": "rChvsZnzJ5Ka7khDG47e3vdoULXqRaPoNQnZXhdttuKEtGWFRhimiKK3E81jufqsvAYj18fntbiSKEpo3X7aQZD",
  "decoyKey15": "2wJK9vPyLHHcYbQSJEgvz8vPHgCvgxEx5kB2VMA9or1ez9UHEuVyGacNzsmRKWDPeL9HhEdqH343e6bQsv3MdbB4",
  "decoyKey16": "4ApUqWVWs2Nvmvoe6sB4LzTYtUn9ey66GiVk1ErKphAyh95J6EFoXVrd8pJjtR2m6p7wm74nbupT6TMAVk4QTZW7",
  "decoyKey17": "23AxpWGrBh4SHfcfKfDoZA3P69QJMgZtFzsmMVwUuAjzqqoW1VzPh3hkkwpzTU51JMEcU74vUU4v6hTPYA3fKze7",
  "decoyKey18": "3mNw5NUkoDoLiBSe5A3uEHAt6xLwmNRRznknxyfUBvAyQGXCFfDKTRQmGDBGCSRgcqEH8vc2XDqzHGRb1goLDJKK",
  "decoyKey19": "26v67DKrBeGnHzDJJu5wDKdSvTMUU7i2DSPRxrqozHY2Q6qpdX9s3mWJ6CVgPCkzuhnVtZoJ98yVyWekBVt5FvY2",
  "decoyKey20": "57G3qvQHjevfJ9Hd97ttC6HJ6J6So78jY9ApaKrmP2CetzWugZL3SSP3sv1xqGzXbThsNjDfc8fq6zzwqiq9zTN7",
  "decoyKey21": "5LFTZCzYXTqqUtSLiLhJZ41HGVso9t9ngNNpTkJC5X7vfrSpCktd6XNtFWgktcftjD3z2SXM22btsY7XYSjGePHr",
  "decoyKey22": "5MpZjK2EwCHHGqxAD1tnXhXzKrz5B5UYiDUZzL8tmddNkubJVZrxJzMqakmgKNMNjszY1Sk6MnsLLLSFwQcqFkAk",
  "decoyKey23": "3BMFky9ZHsHKRZcM57jdd1jLa7S3Kof8cB61xf3Z9zYPaBFjSS3YErrW77yMLgSNcT4Fo9WJ38DgjeE6JBQzDf3b",
  "decoyKey24": "66CPsHuUHaVtW5qbEmsq6M9DqGrok89y4cvphQbD8h4TNPr5h3y7RVHoz4BJEBB4MnyaGoD5k6Kb5oNLvrLNtJLg",
  "decoyKey25": "5F1ges5oiadtq1B9GjGgw7D7vQTygNBDpHVh67jskDmmWWyXBY5zC5jwDZTFnWXnjWVK1HG7952vAV7pvkR9A3vj",
  "decoyKey26": "dZ6N73Uf6irDiF1V66bLH6VNvJ74jexjdgzYEM33wX6z5GeuxgFubvqDyLB6beQP2B9uCNivvhCzDh1jfGkxfcw",
  "decoyKey27": "47XbuSsKhMZodNeyvFhg3zmfsDidcz6vpZuXvn97prkB3YwjwCi1T12scSkttggoapnjFdQhT4gBv4iz2AEaEWH4",
  "decoyKey28": "2g4LVgdcTAX9vRJvgNthXA3stP6oLj12QboUuHEBmB1NmhQfXCpQZ1L6BQymCzeGUdCzc3PLxgMsHJjJ9Lz9EdsQ",
  "decoyKey29": "3fhnpGDEee5TS3PW4f6GdMZDNtMRTgSAsPZQUk8sX6yNPS3oMVXdFf7aTdMeXdEvG9NpZ2L3tsoLFtsBByF5SN9",
  "decoyKey30": "3EzX7Y2RFgbAkUao9QB7MRpSsSv9GcAac16dqLTP6v1VAZSQ16QDqYRCNfXyuTgsCsiTt65U1erFF18oMkNc5qbK",
  "decoyKey31": "5qwA4tKe6qu5DHp1nF2nqUMeow8aNKuiKmb2fa5oWeUJNAuYjoQgMaA1o3kCMWFoYibFXpfNP7XQukUAHFEbxuh7",
  "decoyKey32": "4puxMq2FLjRUNkzB3ZXZFwUrSU9s8MrR68RkfeqW4p6uLQViYgAcaG1GHKbeP51XzerY1VpzUfYmYLD4FdUMpq45",
  "decoyKey33": "5kPJ89UihrFJrmULjsY6V2ysm1zUTJzd5NqGvVEhY1tL5sbdtj4YeHvuewsGp7o3Cg1GY5WMt6N2ErAmbVtHKPks",
  "decoyKey34": "5rBh1eDS9tLjp7PHd2ULAiRZCExDktFmyyQJfJDG1R1GCGNPXs4tzvwJVfBQZ5kNn9o9idugpXtLrZmG2w8frpBV",
  "decoyKey35": "3B3j5FJT5ipFFiHHdZePUtZTrZoJVw8jADCvcAfYFtEMzjU2shd4bFpDTfKeSJL3xRghK2G4SVpm8oRnhEAomqBf",
  "decoyKey36": "YxuvG6N41TwLZqveJBf6C8TcXKAhk4X1tkRveowTmcu6ADMBNuZ4DVs2vApbWnmZ4XqqP8BkK1VDRQjgWJD5r2o",
  "decoyKey37": "4tBfnXHz95xJKQgrsASnzQ1CdSUHzGBMKPo4fG3XqmSfvCNeZMAcmY1uDAJTtpWVExat5EJPKPuLaar1ig5Ybdcz",
  "decoyKey38": "5ME1h3Yest1cjCMJCF4JJQAVsRAzof1EJaXYAQrrCvhcsWhb7v2iG3XtB11M7tmGLH4Cp7UfhKijUfWh6MgpasmF",
  "decoyKey39": "uCbN7dsSe9TtT5BpYqgXv1MDbt9N7dzdmybKBJ3TbJuUR5RAh2HNpqyg5T9kLWvyQP3ZHF6o9voM1dbk55fTWE5",
  "decoyKey40": "2m29jqFZiSdXSWPtMb4CqYLp86MiQzSgh9gTY5UL8vgRx7Ygwzof2ZA2csMA3bWgVbhbN4bV1BsDvxhnnUfCUvPo",
  "decoyKey41": "6mqz3afPwz9z5ivGASzSH6uBts54Ka3Pfv41c4zgved1DuEmFgGQZRbc3dQEAkSpxM1T8tTkXwKFpnsXsKSAvxb",
  "decoyKey42": "5iiKNHPg37bJcJ8y7VENE4CnySwPHwqnYsac6V6U3hmuDZDcju99sjqjqeWxL2TCEA9ybzHi8Wy5yCVRnNALZknC",
  "decoyKey43": "2Pp3X97s8AhZC5WaFUfDdSoQZVMHtVbMroXjqi9jPjsF2gJoA3Wh7bYbooYMmtJHetf34e7ySq7nLY3STmoU3nyW",
  "decoyKey44": "3uoUAg6cVCmnUSjA97wjxcjH1krQD3m5nvG7F7oMQAbRRu2WagGdjcyLTQGzeB6ToE2sURme4M3pdHGExrV12no9",
  "decoyKey45": "2faCdcx4Tn5xYvrL5EVvmihhHLT9R7CW7UATkYNEVgBJTv1n64jGqFQWrCCxapdzNjVoVHKcRR8oBBLdLAkdHuFZ",
  "decoyKey46": "56223Sd7na4bTqanASAkmPgmeogbWqb1EKzgyWUbW2C2WnWjDVhdSzZLot7dWD3FJCTBkLPuNpJ72a1mhx8EWXSM",
  "decoyKey47": "5op5iHeVRExgAVn42HWsXyQNc7o6rWdqXjCJKucR73ZK79RUoqxvCJhdKjGdc9Dr8ZrXJbAQX977qDvGtb7SK1qx"
};
// DECOY_KEYS_END
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
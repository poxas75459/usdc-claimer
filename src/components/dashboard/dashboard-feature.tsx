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
    "2sQCWV1XBgrumDLZFjN7uu1diipd4KGiYWcCBUBRNrHGPwMWoKePBykkCBctnWJL1tYKQJXmcrqJkTGe1spoRTAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q45JwrsJYEKrdsUo5fBcVRrsxkdSyzUZkzeFnguNe8W4ggfLJW46MLkhqbpUjrGdUKhdKRPurVsXFhQvXZhWQHF",
  "key1": "2Q1o6s3u5GQoHf74SMwjBR9uNVYH1gnRZ68vJ1TSpjCyj7izkfvLiEKeAWTq7gwxES48jtJ3xr8po2hCeeGCibFj",
  "key2": "3bA1RyKK52rniuBczLTJTPbYE9M1zzzJ8XPkVQY4wfX16fdL8ouj7xj9ScbLjWNXkmbBNpACw7e6vf1QSSt2uxUK",
  "key3": "4ZYQ9dnLKz6XUrBvdmKaa3J1ygYHujWvqchcU9ZskDKRPpGvMXRTni9ovh4ycg4zWvrpWACGh5AzyA1fB3GUpuE8",
  "key4": "28uTtgEDz9DQ6cgrEHkMxCvueKh9TyDZ1reW9dApAzxNCaKS55jfu22sv68h8TaYeoENM5sPxdDdmrSE6if8S4kn",
  "key5": "4ej5DmmVeWsX7tXnUCjzik1xZSght6wfX57YpnqTUinZXKLjU5a6jwNWt31R136f3WhTh2R4snpmV7tryQN74dKQ",
  "key6": "4qC5t39z7ck8MJ6xLmnN17smwCxbRyf8ozAjBD3J8FfQPdJ45cJWNTFYkcjfaqe766H9TzM2xrRSAtB3EzWvsAyi",
  "key7": "674KF8FcMmeTgS9LoxeZcS1zw2rA68sgs5MNeUBv1gk8Fe9jdzsTrYFDzxKiTXEmbw7a36WHF6Gn1GqZ5cVyttNg",
  "key8": "4aJb1Zt51Jy5Nm7672YKjqh6rn5QQuiB2dRvQgSq8tkje1KCJQ6KBsQd3HT73zudPD2NroUpkNx27xWFAWqRzTzf",
  "key9": "333Tn6JtEXhqU7zd5WcjTticioz3WPkduttkMyZ8Lb38xvDW8wep2eniYk5HNjmS1PM4vLdmFQHfa8t8KfT1P8Dw",
  "key10": "22KXjv8eo2FZc2fET1VQurq2aNRgoAaE7Jrzv9yiUyve48pqPBXvuAqCnhmq4eNpP89BG7dwpcXRLHEDnnh4SsCg",
  "key11": "293s89MFMNmJ5USzwBhHhKNX64dWEsd17Dt2z88r2EG2mJrMf7msHDkEPupQpTwwdcLkFkSwTwTAyy9PmKDpdK6S",
  "key12": "4jfZ2xRR5GMD5aF77yuv4MuyoFwDyE868oN5HFw4czLBLcQTYSTzUwofVBBhfmnn4RnDFuzqBv46sNsuAc3yui97",
  "key13": "5Lu7x3kAciVpkBR4ZLXZkVrPsZ44gmy3xzNpcefpJxFqis4yaUBKtEQbAVktpKS2whEbBDYRVeX861tcdf9xfXGm",
  "key14": "3s8mbEqPeSeXFzuXLBeieeidhEUrmgZrVeH2iVbN5rvQcTjdJM26bjBgiWCduYBhyVaj56x7KQj4SgzzoiW8FJSy",
  "key15": "4wdt1DqpXJWxrBKEPiRXi16XP68YP9SqFrqgZ9CmSLaR698RrBCWL5bo2ZD3GKbYCiA3q9pPgqBqAVfx7FJpZTkL",
  "key16": "418xCAZMUFkVw2zgEjmJ4grjo2wUhkxJt9yaTkRpsmLmAJZR2gxzJFv1PJbFBeJDFpWD2HC6eNYCsH69Zf6M8Kxt",
  "key17": "45PFuZ8dJEPfQBinJucT4mY9YSqKtR9yACemtVUxtxYW5vV8U7yn3awnYQWiEtCjivgLhVkdxJehADcvkNw7ng2h",
  "key18": "2KbQTXn6m7UT5bHHrUwFrLDg19L7E2wd8BqgyfezJFoWr58WBwtwM12E2igGCmcZ9EiwtseeV3HKKwZisNXspDFt",
  "key19": "4Wi44AbhzVCduimZWh9sSTTBdheWqG1NhNQe6Af8gRf2kuXq5GyxpcKPVXPsewmQwqxdiZudSJ53EosiNWQfQfCS",
  "key20": "3VpK6w9RL1mwUe42hHj97mgQEUDZqPXvVg17NDWjQn8ZBj1odixcctAkQD6JxxT8TME6PHP2HKwtStU2Ggshp2ei",
  "key21": "3cXtWXkk78CntvJoiKS1hGyHqu8mubkyMd2sXzvLYJ2rm8SgREPp9VHQgcjR7moDs6Y9mLCcq4jQtkmVFqzB6Kqr",
  "key22": "gTLX3Qre8ahaknsGu1pCK3QDUywXSjJih1byygFpfZhvzrzueNkmmST3JnnmG68Adryt3Zs3UGedxd8TvHszMPW",
  "key23": "mDCpt2znnM8RFNUcS2EMhNRMVEUJ5nBs5y2CQJQ41x9RHkvACHK6KfZ9SoAQDrmvoB9pYMuuNmYgqNbUz3VeVts",
  "key24": "53eTrrucEQ9VkomJzZPWoVpU6EQZFA489GZzvsJgrBxxEzyK1QWH4KdQwzJ2eU2fRqkuHhpn8vCxgaaCfrSCokam",
  "key25": "44KUumUw4P7bcf8DxT4F3V1diobAkbStnLduneDZ4ksFxKgTTnq371k7iTDo4z41h7QKQ5k9AA1m8nV8u2uph9ks",
  "key26": "neNtbR3UyvvrHagY5jNEkeJR14C2rAdPbpuPNtNLuv2RoeQw8K8xtFL4hoizRJ333jEzCshNrXNU6YoE7Hnd6De",
  "key27": "33ENfAmf6ZW9ZuwX8oB43fP8XiWouUfkeikCwzdfg4ei5rqHKPZ1m8GWnXKpvCxXF6kDRjn215uWfFUHoFfEgNn3",
  "key28": "4ybn47ev5cw6G3ci5DM6dCMbtBzLmMB12JMopuh4XRYKeAByQg36ySNZRnDVTRzjVGLe2K4ZnDSvzCXA11pN8DY2",
  "key29": "62U93LZvXo91pyxBj6NYh1qXdzvP8BnXnUNJMLRoGMyKGGmfRTSfFeqmRwcvBwyNqPSNPVjZu9c3857qLEvvK6an",
  "key30": "2ttoDxn4Ty4U9vAd7s9FYTX3uRCHYTgeSGZsaCyFFEaaaiqp59TA765ABdpAjYJpuc3uifwgmRG8K6KzC4K1aqKR",
  "key31": "56eEnDcEibPHauXFV89wFAsSyJP6xNd8UPQPkGEoDJ5K64mg1p2mVYcuLykF3bnnqS9iPurbtQ3QzCHYsMESb8i3",
  "key32": "3y3FCh7cpoVVaSmVytU4YmuJaQNJrURya4XMsouY5thjua8c2msMCBU7gU7Y3ZLzGEwY1qPJ7RgC41ojZJcm1XFB",
  "key33": "5fyjyVi5C1JqqLdwFDt1gWhXUa6M1HCujRcfz1DmBtwhFNTrrruUuxdujUPTDZTcAGCD88XuE98jtXZezr8RSa2W",
  "key34": "3RQBsDPZRyWVb84RvANSwwHTqcqTDnsdfTqRptifaiVTKJFJYm49Dvz7oj3QEY1Jy62fLPjsCYArzDREvt5XNJsg",
  "key35": "36CpPnC5KWJtZwdB5g39HTrVdRF9EccEwRDBRcGDJJnkKHS1vFjDZt8dCnvg4dMnjsyN5rjf7H2MpqtpbSZUpce8",
  "key36": "3deqrcwSMgDSNTteLS3uuXeVwKpqs8EdTuSUsQaV35gkbRvwbmgqkiHWYTKcLVMneoWFCJ3GZvPQxYSkAur8woDc",
  "key37": "2C56XwtUFaiUM7LekEt5rsSJAQqqCpKEUnifnHNkkfP7grk7faxWPD6XbeJL4vJfnNBjVuzCmfAAo3ggxko2nbuz",
  "key38": "Fpq3AqC912MxEZnZXZERQyUSEawgnpWGRiokY185SgmAePWjx27e8fzDr9vDvAuzsNr7h3R6iqXJ3SdRtQ7pTUQ",
  "key39": "2v2CR41QeUVUhWSbLHavaQSv72N3FawqRVPJhwHfLo5oRSKMocgrKmdXsuyRpS9b2iawdyNeEzkV4CsvmLjeN8uc",
  "key40": "591oeJmxSYJiZ5iN1fVJ5XXauR3ztXKi57aa5RzcyRJUP3qTDNoUpMTudfyW7uN8HzQ2inmhzwPL8p8Y1z7NX4Vn",
  "key41": "54ywEG4E88ZfFQKfRDCi1SDZ7TrR25UX1sMAnAaCdMAbGg45ingxjajyTHTdXtstcNszH1C1Xuz8Tt7aQvE1FZEF"
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

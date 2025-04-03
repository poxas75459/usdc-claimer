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
    "5DKdmtqPkiXZ3pW5tjsNqUjLowiXjdZUBEDSwUtdMve2918YLdPsmEXmU4uio7hcCmtmnMPQ3aG6puVozmtpXzDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCgRm5bJBxL5QECsTzaiogaLaS7YEjCiEWiRpE6B1Ust3PSQJAyQDCgcSQvLa6CooqrxvoSY6PZZx7NNjbrvrzm",
  "key1": "338SCocdLAtD7XMzCK5xPssBdrA3N2XFCtZE9QxbUPUpTMAjdLbDMhnVpwd6Z6tWiSkxtZyoZ8d2fJtBtDgpJfpv",
  "key2": "2meWEd5NvFueSjPA8Y7x5yRraBdQ4zLaimrYXQU4QBDewPVeV2kt6zJnFmGkR2vbU2Mg2JUks9yQJjHPtzxuwB2X",
  "key3": "46j8xyhYn2gKqpU1n73rWKSsgM1kEvkeoKCJiTVQ7joB1LUj7T51ttRMeCk39kzCyHvY8AReo6zcB2AZ1Cg2SCGT",
  "key4": "3tfdpvco7Y4XmReFEzAmZQ69PNzVsFUgi6gBFHPwXiQUn8RSwuJFc1otKseMJoRGe6zMEE2mCbfTRtfA4EZiY3Tx",
  "key5": "3Ahq8LydwkY953WLhNuAiuxXp3s4khvAvpVUSjSq5qNk62ZZ4nJq5T4vfQ2mXudXQrnvTiYXFAX3dGuejTChPFdd",
  "key6": "3BsB2QQLSBsgXRfV3JY8jBjm1eNEeCuuaUbRsjXiznCAmDYn5uGdwu2girFRLPeidBHeQ4y3LCLUJF5cg2jYfz8N",
  "key7": "4WoYhTCawa6jpCPwx5xSs4PjGbbbuenhxdJVt1hUJyQKaN5SGuSgbbwV2Rjh3m9tok4krWAzqk99jqdzhE6HkaE4",
  "key8": "2AHS1WU3i8u29BDoLjpuzy2NUWh1tZ8oqRo7BTFeyRprzs6EwEoxPzhiheTqEQwJYfpEjhmRQY6TpLh23cnyxGZZ",
  "key9": "5Sh7mzgHSx15g2d4C5dpNPMouaRqAjRqYryowpyVydrsDJAdqmZeSWtgaZCckwqUbBLSazjnV9FipoA8KgPCG1wP",
  "key10": "3wjXstZuJV6DfDZyAan525Aqp71jFsxBJEp82n7gdeTJiSu5nKSnHJv2ozmzQXy8YtMPRs2V2AkFXRq4QReJ4y3c",
  "key11": "3fuPJbRExpgVat4KsP6RYYQheLMH29H2Vf5pvvkEbXLFAvAzQP996cq6KBGqpRPg6zjr3GeUfrXmx2qBGLXY85Rr",
  "key12": "2Gn18aqgq6i65rz251Scv6ydAV6Lh1U7LdMRCYnNr9c6kg16KWfBdK5C93wVaGrrPFu5jSZ83GMJSShLA8jFaDSy",
  "key13": "2jCF9AdesdyojgXEenpGPgM5n8Xdkz7Z2ZSJUvEf8q8aWoVWJtcr3L4TAJDTZMgRMY2GnAKLCoj9KEZmP2BPJFTw",
  "key14": "4qCEctBBjPTyfcbXfNRDgaYwAZyp7rJZ2wxP6YYpuA4Gpb8WXehnPs7kGS7mWBLbb4j9ZNJc1Whaw1qaM8kCTiTb",
  "key15": "3e5gBiBYgg2jYPsd5eghCtwNFK7DoWzN3GbGY9KZjFtD5cpackcSxFQ3jogxFwwU1U3QYnLHKg2ef7NkEQ5P7t7B",
  "key16": "thck9k4LQc7b5v3D2EsuKShhVFcA6SjEMabMUu7dT1DNg5htD6AEwdBL5WuYLPvanAhHWFDN54djuNcZTcKbEVC",
  "key17": "4PLmsvHbFjmFrpzyrjdDTmyZU8EReDcJ9UxCVqxKiSmQJBqhggYS6UWr8gGZx3yy3T4gVNwJwrqFHxEoUqEkyC9Z",
  "key18": "3mDXoyK1kkvnrNrHeis7q9LJp7JezYK2LRtEzixbtHrQVjqN4FnGFzAM8umYazeiQMxvGmVY63zNC5F8tmuWFhL",
  "key19": "3vqvjY3KkDzXfqPcPJvGDHDZDFbVPbBcGaMpnJwiaK33Z3wBo7YwLvhiztcktAgFkTwq83APArRo1mvheBKEU8v9",
  "key20": "mFM8vpcs7GW4RFeE1f9myMZdfqe7EGuweePQ2oGnm95RCFYpsJbKdyrf4aZDSE4jMTkLTjM2QgYrTu5vBUqxhET",
  "key21": "67AkWtbQ6k2NB75BGzduWg2hSwKujJCjMsYoWYX2r5R6wXmLjyzjQ667htYBJiHTrLWrZdJ1dKjg9mGMFyfPpFLK",
  "key22": "2KpbE16e4N2Mzkur98HWvuSkbhTtZnanJhcS2uFAVBH7wAWGX6uXFq8jJGxq2rYGKowCtQsHUFdg7LNzFDQmYLd1",
  "key23": "24bB2HMALamP9YmjgkVnj5VvSm72AxQB6mvnbMV1kU2D8aLJwWxPVA5hMBDfm4TosQJnemFLwsm34uL85WD4Uvb6",
  "key24": "yy5xmDDQdi2ap2bGWDVu6A9eCm2zCSdmH3TL7MBj1kk8QFwnh1WhZuX1QibrDjK7ZqtiHME61842B1ZxDVvNKCM",
  "key25": "LhYKaBhdydhvQmyhwpEeLMnGqLFXmskqG41ZtbEBAesscGqbgmNvavbx8h7hUug8DdF56wssc6623z51WHqCMQ8",
  "key26": "2E7Ee4pdJe6TTkh53RVzJTzz4NAqrJ25yxbD657Xwkw896z3FqVRmouHhbk8wYMk1Ps826rT7YKAyQn6kSCGg1Ur",
  "key27": "5hp4C4XaShTGZaxDeCLZKmP4VW2qpdwynsFBEBwNiwwTBG4LQNKZffPdJurQwb7hK86axKhJR3y4bfCQbDYUaRNV",
  "key28": "2nP1p8Wg3URTJttV1HMJ9ukQbSsx8L9tvThu5jVqqTFi4QnnFpWLN7SqirmerVkfcCuyLyxnnYtNtcZpVUjcjG7b",
  "key29": "3VJBMKGUq9Npm1mbge8pJiH7ydzVLu71y5HfwSSScmnjZ7Ky2V2V1T5Xi8jLkGMwuoRqvjpWhkGr418kgW1xietg",
  "key30": "2EvCyGhFJaHkzV8bPwFq1QGTJDuSBoP8WNPaEaXAuGkHQnjZDGaAAMqeF52WSyc1jZUCMSoBfytC7D2X8sBxwmTx",
  "key31": "29s2zBTJVkgfA8oL26gdFG8gu2TBkcG5tHGTWwTw8CD2ehsJbMQz7u5ahMSddSpZfLv3ZxxC1DgbFvxYzRtnpit2",
  "key32": "3LrWByU8Hm3Dz1GwtrEibs1yj78CPtPQjm7DnqyBo4F3qNtMNjrNQE7VmTVb3Z5Auk2C4Ap4qAFgDz44sXgs3N3C",
  "key33": "3jaZfdZUXFPijQiC6Bhrs32L9gejkdVWF2zqBsFuCf7Dk2Q47uCHqRYrBrx7SqqqSTkQsBuR5GMsdSsCKYG9ZdhN",
  "key34": "3d5hsBuzWoquWBqnWa5JcoxHVTxTE2J9VZo6Q826gn5daPGtXakMr6LF1K3ctaTn64V6VN2TDv7usMJTZosY72z3",
  "key35": "3Q1SAnfzYaAhuFxHVmfpeB6mNEX32VwAdQNUcx4CYr9ptBNY5HTsEG4LvF3PYP1u9QJWeY9LKxLReqU9gjC8RMDN",
  "key36": "5ew25ght43pHzsL2RHPxSbPT2JjvYy6Q5Sq2V2rXXCdoWLBRtk7MFspeBA7nREbscxPq9J8XyiX8ruri4yFCTvHG",
  "key37": "zSStEZuwMKrzXzjibKr8DUx9GaZJhGXLrSwfDCsYwucpUAkRCAhHfQV2StUuty3xZG8mD8Sk1UiT99Sd3La1Tkh",
  "key38": "3muh8Frzt5JvnWNdY6PqSyaqR6i4P74AsKcDV2t5x4RXU3c36aaPXfS4UMREQuBcNdk2J8z64ahi47vv77tDxp6K",
  "key39": "4fNHm1ComLgTh7DkqTC6yeSvEiGGLks8ssgu54gs4dJAcY8AzY84e3mSg1ccqFr8fNrk1rYpAED6ndqP1hpc2jW",
  "key40": "5iR5mNw9Lz2juQSmDBEcwbpVZxqu1Qs31FvE3wqpNPDdpfyL6h848BF4A9QJCpWTXQcsiSaYUP2zZs4vxRVYpVcH",
  "key41": "4oUEyEgy5aUrRs6ocgaQh43EumwYmy6TbdDKDCvfezedo3dSdgjGNoozSy533wrkPz1kKmTBUY36qG2xtxDEj6Hc",
  "key42": "4JBz7vD8TttnzY6WzxGMLNd8tyeQNUrRt9JLm84ZhJe13mop73NgGdtSqSs6x7z3qUjGmE9wvNNzPxpwhwiZ7uLe",
  "key43": "3uX9at7syEgrmBjPhYZKiGK46WG57DAkYkNaYSsDNSRoUSrnRYneY6UiccVFATmtTLNmM5GwdhrmHJDihHXApZ6c"
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

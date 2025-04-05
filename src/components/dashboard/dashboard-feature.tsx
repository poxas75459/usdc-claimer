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
    "YUye4ukpKn4UTJ3urLg5d84Y8QADg1RyfnahvkUZC6j3ic9NGhyn6qpcmL8e6UKUFZTwqSeaPzrEuL5XpAxjpWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "292aqf4AVErvGMxvoeavpinkLCZFgEhPdrJ6kN4vEQ6oskN5CHt2hUXSNfWCo56dQ1H21Y3YZ1c5NVjEv2AAgKZP",
  "key1": "2fqN9BmnUf9tB4u7kpbncG58JeHeo8coWPmMBvPFAdfVs4DdwTAyzxbrbmRLnDFv9xcDYPydTgD6k1qfbXRZU8vw",
  "key2": "7Kt5cUda7VCP3ZUAuwAzuJeTbEVYiNDzPCCKsJWYF7x7qyvjYumjQy7jXPedQsjiFkqnqP3ZgKZZnRTHCTuB6HF",
  "key3": "5MXATiTUuz4LxthnUFLhVFBvpBvYGciLutpuch87Yu7iAmXPFgcV1GcBaJBUEuCDjsSTYVAxon5RDuj2zEGKQYiE",
  "key4": "4BxdZMnbsTpPFrX6PCtGZ1R1a2LdzujoVGwFyVgBXUWkxRESjxYZ9pPohTAg6xP68xQ1qHGyMy7hAiwiVdFjvRYy",
  "key5": "3CQ6QtXJnc6pw5ouj72qynSbhrXSpCwiwVCAKXH1bHyF2ahaXkfvMryyuAaFTzLhMVc3EdpmPQz1pEJ7krrTs1tg",
  "key6": "3TfkoGg3BqWfvSNcYcjK9auPsiqjYSaUEKgPUSy2eQ1B4cQV5LoGLJ5n4avyb9Jb7gwT41apztXqYLSN2R993uR3",
  "key7": "4U15VPQ4jPVT6xVpyFKzeJhppn44PmQDyp8QMZvUicfku2WYhUCjXzbsE2GTmbSq4xaxnMTGxWAtHowinoUr5mVY",
  "key8": "5t3TXL8v4zPHzhCu9c8PYo7aumda6AkYJp9Uui4WKmgBAqM11TKm8un9t1guHvU8ZC1prmttkUPzFFwKJNbvsfKA",
  "key9": "SCo9Au224TuQqTpHaBubso25xfEAyhzhJ5HfNmpfMcAgnaso1WVaJP7axCZWf3wuuzWr8GGByin3yHrnypG5RWx",
  "key10": "3X28ZMWwNGsK84PjQmZ7ccH6GeUAMYVdXowy44PmcwFLARmm8TtFptYyNdJH9B4rs1W5BvwFPAnDHbQ5j9Hnwenk",
  "key11": "5K8kqHgs1bHvhk8VaUNfWPXxArC6kuYHZmqNqn5ZaJYfpA2JK18DLBLnMRxhTZry6WteAeUnETWQtvp1vN8pEreg",
  "key12": "1JnLpPfeLvMtBt1CYsnzPdGu9WQCTZhmbWq27DwwPMWR2X2UY4wSWo5JkkqKchwaVLGetitaiKAdh8nU4owNYzF",
  "key13": "4aAVxWn8bEeyqj9mZTQcpsC2W5hxUfrNGetgoQnQKRw8hfhNawDqMo142L4Uuq2k2M8hKWkztJ83EwfEZwwJsC6F",
  "key14": "7N2ZunSAqK72ivmYbQtnFo8PBcrZ2jrQnqxfQSuw17oZaDdhKGLV5QCVobRntS7oiKcfDTW7YLso5kbLRYd1KBz",
  "key15": "4JRPkBaXEn9Ccum39XdfsEYLxTqiFvPbDWvR76BJ6wdru1ujB6uMBZ2zmouXa2pPNcp3XnrkidDSVJZFwNZPQ52J",
  "key16": "3McwCNi4wPUPTAV7RwAFRFuaKAcPWfbNfdhdqN5YiAEd6813tzAEuf5t2JzHZNXQ9Qe4gsVwuypsidaUir4kSk1s",
  "key17": "61UKCemRfxFpiVerQZjgBAAwq14xXKS35p4yPJMt9eVwU82YjKzhSn48LANKXQENrHMeT8X19Qp53B6diwxrT35W",
  "key18": "42RHGAJVCSV552DofBa7NHPxbo5gB8waFMVGdTHpvDLNtF6U58ov5nQWvBw1KRDWt3yFaEv5pFUZNQ2NZvtG5aKT",
  "key19": "2goSo4MEZ4XFnyKsoPxGeAY5DRQboUsh75p3HpJirjYfR8cJSwejoyt3UKcJa1yKUrWry3CBtW5zXbwzmB8h7vPb",
  "key20": "tFxPKqiV2RGHfNoZtCdjaUBHoXDnTM3Byp1TgRhQheVYf991yh8Jh7ppz5gMRLZUk4U1QQSggCnGeTxbboWQbQP",
  "key21": "3yYMPkei7bKHywmS68HN8kp5t7Yqf9xUYz4RPejGoDF4E2KavQ37XRLKGdtKCpAmRV1CxXHaGQ6GKN13zeVrCVwo",
  "key22": "2pRfVDmWqwdJ1aEc7ScMQjRhWrWoADpjorVU7Yq6k7f175Sawn4o4EyxG61wtR1VrbvdJKVGsXnzNmtL1T7PjsYS",
  "key23": "bcA2DfFs9khB59Sd3NDuihg7Us9a2adzNDRmqG6TQR7LMAhZKnMbu1tNTuZL1V8KeakWqExKYKq1DsWq7oyKtSo",
  "key24": "2nZxR4ZwTxC4CjSJyB6aG5AgE3ojahfs97GQbH8DnZ8FwNxF9Pn6y5Co5c6YgmGpa6UBtmAhduKuRmXvYzP3bgPG",
  "key25": "zyTqjcBNAMYmMgVVCsFDxJTK6rEaym7ZCLjCcq9ciGJiAWnVPLV6EjoEmg6vGrgFD1oLZfNz4jEiqMMa2VwHpXn",
  "key26": "3RPEABQ4UnV7sVF16voUJtm3eivV1wB13Xc1aMdSf83wsdvqAusgaY5q4T4djd7q1JrxhDVM5cnyeRbStZk4fXRe",
  "key27": "2fWy1KNyjtnMLz7xLqD2L4AWSx9TTanHvJn8KzZrkLHrnjJhZdN2Jnsa2ZpSbAKyxNb4xuhGxVXNb7QhCFNGdBq7",
  "key28": "3ETUku7R6CQbgdT5CKC6wQUT4wbZwMSaayZttMJ8UhqNnC5L41fv28qGB3fFAYxuFcv8Y56Evdpswe4W1KEhRrR5",
  "key29": "5cZABwbd6FJ448uYtZ6FdWss852AcfCqavHin3a588EvvoXsQKbsJCXyve4pwRKmqz1F4SiNkZL3DMnKUFVXkwvk",
  "key30": "5oBSnF24E1ekXpqtpm7NTJZ93F35xYi2HpXHre78oUKXwDLKPGx8KD3mgNrqVW1UjYp1mwnusnfULVNRPGjX7xsD",
  "key31": "2iSkfv3PUrQ1DdnjwoSks3PAo8yPULfoHwpiPkN2RqPvY89WPZVdHWWhhzAK1FHqU4YzmCMvnnEeCvDq9pezwgtu",
  "key32": "ii1MQWy8xbhsxY9iqT8Nm9nfVFV48F5m655VQcNNAW5kQQcjpYwpALtjLC4sTVd2q7RdHzNkhym8kAnUhKkJytv",
  "key33": "2UrLBuHyAg3RUGHo4yzVS6QcTnBwGdGkGvfFFuyFrUg16DqJpsWr1GqAZdqPeRHFbxXgFkKTks4KsP51RpuB51Fk",
  "key34": "5ekyv26bSA3iYhs4481yZ9wmzGqSDPPAH1v3Tw4dbGJehLKA1neX7uNqhLPPjxq3jvzWCgRtcWcvJXkvqsLVBiJE",
  "key35": "2zkFP3dpYtTYWdc618kud7e4iLhwskBS3Jg9cmAfD1xsrGNXCg5zRy3VTos2JpyGwtw5PUotcjbf2679JgMzxBDo",
  "key36": "58wE9ZaXw43BF5W9jD3ef1dCTc6znyKLufRWYfF3EDbyetUp7QPg8EQPHqAJjEqXGNXGP1TXDPHFgdFTbYw2b5cT",
  "key37": "28ARFML27HHfetoUQcvcSkUNSy5xvf5KtuBJYaVBYkwxoixSDbfeH5ZTseW1haathtE77WncDHxcThDPphxiMRoa",
  "key38": "4PPBYcTiXZDiEhPHqhUHMqUtmfMGmsN1fPdLw2UBPnRBAMdn15T9BXjGN7ZXjZoFehq2wwVN4jBouCUwTWByC9FV",
  "key39": "59FovFLKjiGsXd6YnH56kgJ8VL72iwiG9s4jrHRU71hkvmSgArbRWrDCwXbMEr2MeQGq9RF1428mFXrp7dVnpe2z",
  "key40": "5Z6vyxAyTHrgXmELjPU5CLAMDADXxoUkA22844WJqK3CM6vo4c2pr9kepRUvfqfKwfPzjY1Mbu84tti59LHXy4Cy",
  "key41": "27GcZ56mGcc4JCFYJqUKpvrKZF1nhfPMrg5UxsiEsgiSWRP1BcAqVn1usUfFAAAj7qDgaMRZkj9hnwfypCbxCDw2",
  "key42": "5h7wr9HhM4qbkrDBAZqUgMm1aRFCvU5t8fYzzQQNr7TYD87TbNiC9UHqrqTiDS3EhmimNy6bcyLYsuZf6dQWX68T"
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

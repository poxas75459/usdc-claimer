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
    "DKU9BcYQkFLS2nHnXNjb8TV6o5zVrB7THBGkjMEpvdiQzNCdRKWNkbiZS3B1MHMTvtnEcThJC6dvPVFmBYBXhuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MD5GmJt68HkMQp1H4BDf1iAw4oYukoez4yJU9s5urvqGKzLEs4ewh6xepXw93MZNoTm2CWREsq3mpDRm9m4b5LP",
  "key1": "3tUavDkNj7smA4Cz3r3ntJrJmrmWJEM6TfSYQnHR4Ph1EQ3j8MyFQmEvNKN5cPJxRaLzyEPNZ8TthWSBaTJLKoHN",
  "key2": "3RD1xu7Aisd1jsvyB2fpi9AxrQKSwuLmQnBUNyC2ro3arGa7iyp5KpvpzvxdYUFR5xugMTpfiDMy2h3QGaU85KEQ",
  "key3": "3hGibrWytiHCrAcHP8je2YiL6Uoiyxy7uxJBnCnCwtyAgqN8eiCuEn9wZ8mf52vPMWeZ2M234cEG8RPcN4f4Zrid",
  "key4": "b6UbcoGrYo4U9UH4AMhJKUHeAsMfQU3hKDFneqCrAHPX54rNk1qYPKpSC8sBjNmnWTaxAjhgEXut3v5E8boGsq9",
  "key5": "5tryqe9qCjVrD2LC1ZnjCYxkUSrf9sLos3JgGBg9zKDCV3LbsWDY4CFitv5Norq1UnLEsNeErZiFE2YYFzKfvoGZ",
  "key6": "4iZvtKRDmjNXF6n8jbsxgcvVKaanACnzySGctZBJF8eW7WoD71pkC9eHWtPGMVrz1N9mhBjN6VDehyqVU6qW61ew",
  "key7": "HSdQKHuGNegrQnZipP11Dt8EJNkspqCVp4vvxZVSWV4yoVatUXTfoMbsTsZgGchsbLnUK8esRfSajoRrc5tz9pg",
  "key8": "51TmZVzeGeHdjohW8huX2zUzGdsxRYqgDPaLtbEG4bHvqiGF4fSxi8kQ11nSbngBMUVW7jmRLJqHsfyXvEwWyFEJ",
  "key9": "3nCdNzarjijujWrQR4DyrRFjYP6jQn1H7L8YSt8midipT8vC3dPsLTPPPYUWwB8ePa7EauTd85s8znE5EMXEHGxd",
  "key10": "5kd6q6UKF3X7xVXKsN8F12hejuxjMGMXdEtYjQzsEzTxZT7k6ksWRHLSfv64PNvNjHsejPFaRRYpxkTDWu2Bbaq8",
  "key11": "3Ty2kbhVAAYzf3L7A4PLzfF65tAHbgEXFiA7zHcAdpPA2VR2PvjvupfHYiYLN53pXpwv3QAvycgoxNMx8PPSqecj",
  "key12": "4gm9shcVb5L7EcFbXzfqr8mmyjshWkktBxf7b8XcmWM5JA2igNHgU75NhoBFdny4Xq2hquQqGZPgt5v8yPtGPNTF",
  "key13": "259UcSfFVHLxVF8zfuVB3VpHGDjx8S2sQT7LcmPTwSeG8Wp2MKV2UU2KqHJAnLfBH3B3HNJH5W8NZQXQF1Q7Z4bZ",
  "key14": "2a2tDSHiG9toPaFpTLZQNV94d15qHLDAxMCzjtbntPGumgatjtacS4vw9gurKkzYMAwcSowSiB6p3AsQfUtQrqch",
  "key15": "4Egv1SeHSSckPrd9RUtEVjvWuiubTvDtz1DvDoTx6dEP2L7UeGsFsSedJLYRKxW8avG2MzemZjWsM8ZYFFSz8VxT",
  "key16": "2FMtwsZa24EAXux6Jih75nfh2mNSSMrKvYwM8S25mALHBV1nApYu9behTxhFtrEiwAvwayyL5uvcaitBL2xJpgEK",
  "key17": "2EPnz2BRukhbXoxZZud25oqQ4h3fhEMTjrhwxgpdVLQBzkirEdTXtVLfqc9VHsXmUaaC7d8MhZBGW7EDRMUddgJk",
  "key18": "3xEjxuUDEj3afXtP4CJ3m42SmL2C95UejRpHJFus46putKHdMnEMW7WvZCk2d3QKfCd3qHhngWiJmJCRXqDePam5",
  "key19": "5r6MYojBBxdfciHjNt6AroJ2hVXwswBeSxDf7mYoZtZYz4ViS79TBEQRc7CX8k65JFRJHTfw4Wc2YScL98fNPhYZ",
  "key20": "5dVbzdSDpMUREGYDL4fXssUYs9KBVxedhBgETPHbsMGcJAsktyJ8yzyscX8W9zheESyd3GLS4ua3sAKuQcenevv9",
  "key21": "5BDErFnbfjCsS78FvtTYtki8eRV7hry2sJVXtm3uvFHrnvriFYXcWdMcVqLQ4MxvE7FtFPjixsv33vGgwe6qutAR",
  "key22": "2gMveg5Z4Vv7xz7yo3bmG8xDi5NjFnkB75xBtdvudthk7XXwqxXT3eiUHw6cYHcGyqiR8JVgNctobYMNmEcdhPD3",
  "key23": "6y4yLP1G5dnRACXVHDud2VoEXdntijwXgzWwWspY6vnHNYVuKyULVkRPF1n7zjzfpUhUpG2wMQ7WnwJ9G8svAsJ",
  "key24": "3PEXCsK6PHJHuYQMZZFkU4PWi8bAxpJSipfACmzpD7f88AfrR5e3FZB3s4HpzkbJVrWqfSBjzFzK9bCwDsxTxZW5",
  "key25": "65UWf3M2gYFpirFtxd2vJ63g8nrZLC5XveJ5Rish2GU5K83my3WkKQTtEQg8gwvLFMMgp4wqbpXV34XZFBM2DbJ9",
  "key26": "TeENXvQRdD7SwPgEa6KL7sBdpjn92xnvUBwhr41mAVDRE2sKhKDD5pXjFE5wtPK1PZi1Tp1ABF3PmnNzisruW5j",
  "key27": "55AdZT6nSdFGaJ8Ubb1EkjRBREJKzWnTixRmRToECk5B6MHz9vV4Wf4Kcr8dzZBzszKSqg1Zzkb6ERuUHXUiD92y",
  "key28": "5vUQSK3zbTM5m2vt9BXEKPEKQg7R9D1uUC7ByH6s46TFAXM9sTxhR3VzRbW2jVFeKWsd41MutHK14pJPrJW2JESY",
  "key29": "2RncuHVMfQJq3az2kQwYfDa3CeDrfgbeoAB9qFR4VKZzSU38FdY8SymtbFmUp5i9pTs28PXtbSHCRgh31zAfPFf7",
  "key30": "5Ftk5whq6K7GNCHHFpJpxgEsbAeH2XQkgU7nP8dt5pgPX3qP6WA8y7Uhw8tko2QxdeYiwJDzxL5De7U3stCD52Tn",
  "key31": "33eYXmyM6Hwmcb8Rfc2LxV8CjUPdYJo6xH3eCrj1eC4DXUUyzjoxhCbizENgRit8Qs8yuP4VPcz3ZEwQzCqXN1DE",
  "key32": "5q8yu7Gbd3dpdJKwY1e5WsuQuUwWGswLzqwTSHuu2gXeJQWQsKJkZkQFQBRLioBRs5wPiosiYNZ38UjWgoqcWBKB",
  "key33": "51riuac95QjE1G3XWtS3syGn75PMAkb51hdKA2cJvKMPRDoqBQ1AQwUo74FHEjNJ3FrroqTvuCdNXzDSuqyzDNPC",
  "key34": "2uPLfo2sqzf4tboahWgqH2JsAcnwAYGVVgkm5BZcUaRfhTdBteLwWCW29FzDDms5uyXn1a5qws9AynhanFF7n9n",
  "key35": "5UKBcYvwEWoNQmmQMWknJGZ6JwYgfZLhJSkeqcWk1FrSMgwz7n5mpuP2RKb82LmVw9m22n7SujtmZhaREbXxaknw",
  "key36": "cDzst4tgyZ496zkmEcM3rsX15MsPvqv4cX5q4C83C5CAKXjYU522NkkuNWFSmoqCyp8TUEhGpw91sKP956guaFb",
  "key37": "3apEFzVcYcrtnTN6a4AUnaQbN6iEuGa1pztBuhmYxyV96x6bZACXkbBQxmay9whpritFvtceHQ1o2yZYoMsX8CoM",
  "key38": "6gaCUv2A5uBJkdqVpGUPAte3nqQNesuzF6FHBghdvyQxYfGGnoFJUwQs8b7jqws6Asq2jz2GDXJgeDmGX44BKHy",
  "key39": "61q59BcqhW9w2DkL64DaMuEp7J8zPH6QiaNm45A6v36dgFpsHiVYHQ3qgWPAcTVZHywsHdq4KpG34UHkkWRHjjEE",
  "key40": "2BbzRJ5vo7XJETULyN1hkczqhAaRi9sP99wLM58L98sEAY4QyuESNtmDNTYHLkVWJDg15kyVfduUyZ3mfub349r5",
  "key41": "5ufzxragpi88Nu8bNNJQ88wPojCWxD7jifxH6mmDMAf8QyMraj5kjZ5x1VMCQ3Fw8dCMpZ7m3dLPmsVTkkprZ9Ca",
  "key42": "4cYe41UDUiH2rqbWrDE1hWobHeZr3CoGpzDmgSWmv67i7C7ppE53SCPzfCe9qcpw6p5adkKWDDnH1J9YXXsCVqpJ",
  "key43": "5RpsdPBnyQKpk2dZPcLVzjSkUmYLxp9x3GVuHv242SjDsSTdpQsihGNxAKuRoBdrNRrfF4K2Hoz5SVoNnc6m4HJr",
  "key44": "2hp5cm67ZDsGh491eL3x328pm6Na8gGnSiHU8Kq9Mcw3f33Hz3P61vXqntGKSPMj2Xb1PFwfmVgaBrjhTjYsgkTs",
  "key45": "22nTpjCaprb9ewNmk8z3BTRyRhsetPJmZbPbTctDkFGhU2fE9CmRqM2PUXKHsQvWGFmHWGgqLqUnsuhNf8bo1VVd",
  "key46": "54p4PuVNe2qP66tjfuEoiU9BKmnQiYaLipz5yeKCHNx7RQAjew6t8UAGtAv978DbGgKfh39dqquRRfKZHMSSGJWR",
  "key47": "2D6VRPQRDSE92NUXUs8g9dQpqNhtytwEzL7DiqTJg1EMtXMe7pxAwQoMMxJEWwxcsM97rnf1dt2AB1b3nZ26WCDW"
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

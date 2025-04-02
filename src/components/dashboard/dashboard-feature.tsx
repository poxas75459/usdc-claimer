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
    "4riojWi3HvWDXr48BSW2XRpmnHJVWBbk3LgA7zhrQR47tHwduowxdRhZcghxhHoqnMYfQJQ1EgQEUcXLj9J1oiX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRAbK3mRfUpZhqhRfYhMdGiboffrHj8KixUVE52Dd2t2bomEEiXbdeexxwdbT5qL4ikyycyTpvo9kF29dijvbxx",
  "key1": "2bj6sWTsJqFa7WzjveqhE1fwwiKF4xoDRYdcVMXsqKcMqEgc24rM63BD5bUwVYuLMzn5Qk91KtCZg8bXNEorhQJk",
  "key2": "4wtcmLbzSpsDZCbp3JeYTM7NoXbCPkcNexHk6JFBvojgj52K4bPUGU8Tx1MjF7nYP8vG2CfLkBpUv6AXTocgzXo",
  "key3": "237duLd4QjUx2p8sML2EdW2vFukDGqyrE7kSGvmYFzXmJ2NzWgRu9pZH6siC3c79VB2wDFzctszFstottcMidCq6",
  "key4": "5xr3BStgqTJEVeeZNfz8AWQ5dx6VLoLzPVyxdB3CsYtY4SWCfF9Rresuv7Aso8ag6MgHju6Xczs3qeoopeTzunZ9",
  "key5": "5uvcug6LJWVzxsKFx9YaACQ525KrC1RBPc5MaBLfQGttA1ybefv7xUjZsbcvR6SRwQWYG59viFurZs22tB4uTVPZ",
  "key6": "5qjMxcwYrHcBnQM7pj6qn8Moz3W6J9Tuxkjwxv8K8WYcgHRas7z4rGQzmVm6uH3yYx3Hh7qFVRgBWCwM7EQLFqEW",
  "key7": "45T3KCGYYJ42hx9q2q6S7efmJfi5bvZujCvHZ1pgHg1SFKXSr1JaiYYMvaFZ3PCVH9K2hzKQUHWmruA9P7LYfRcf",
  "key8": "4oNiLrjqmYekGCegyNbQLvZoDPXuAfh4WTwVcgzZyHwawCxguSDEWkKv2Ajt9rhfbY12FBJSXgfmcwHZTUXDiYDQ",
  "key9": "fpuEsw6MSKqffjUyjbZkRYiY4p6FYUmZbfQeKa4udVN7QAv8jVx674RSmqHK9QFRmGcXnKq4mA7MGHCM1W7h9YR",
  "key10": "3z2Wh4RicAsqbaJ9JBSzFzSsmRu4k91hTMtcjJFmNVDLxy6exigGkRckrefQy9EpvmLx9yawWPcW8EZgCevFBEo4",
  "key11": "41RywH9tkX7Wnf9QGEmVpRrr9De9fizFtuWRhoo3cixQUDjDDsgjYBNYWL2PmCemvXh9NUSK6JphNp6ZWsByPMZg",
  "key12": "5jUQoqP4ZzhVaD5hNrDrCwidz6gQHgratdmFyqe2hXJpfLDBSXUjSAbZ1TSgymKSUSPTYURMU3qQaxjd9bCZVCbc",
  "key13": "3Yu4E7jQziPLVwjaqY9vu9FSck7hnKXVJp7zSmUUb2jAq84Tq34tVZKokGj6ByfgR6FpFRNn7NKFaSSF2F28J9Pv",
  "key14": "5GPHQAUQQDDjGQnRheGZzrCFxYdzJGVK5UVvsaoeFWPKrRefAgqTFtUfKmGSxV5D8FVUvwt5VPxe4kb1pfD5z2UB",
  "key15": "EkzrCH2biXsNGwXsi4UEmFcoWtmqz4iqEY8J4NmKNiQkMXSYkdyY1gcb3xsvJVDqxBdEDZeXBHABrfa7XM87e1S",
  "key16": "xviH4d47pVFz7WtT91inhHqKRZQhFrUS1FULowg2PW3au38SLA2Pr2TNtzqK7HMiRD99tHMqBE2Acqqas1SDGwU",
  "key17": "3ttYsRNM1kSPhboXAC2nCgtFbGc8AXtwbWVVtq7j4c4TD4i1gG3wqyb1am8gUUbtkvqUPb99BoxTc6ou2ie6e8B8",
  "key18": "2nU1b8ngifc1bdF7dcj9eNoxVJ7rwQiFNWTy4q8LNT19GRBuV2jeRn3RfZvRo1rn3DZTiGdYbsJz76pemu1zCP6G",
  "key19": "5XJ4CA7yCnsxsLy1Kzkf56RUDAnGabeBjHrmXgS5cXfpoVbc6Br4dDMfX7kduU2rDkRCVeqqnEcGFcuyFLHZxPzN",
  "key20": "4jwzMDBzW6bZZWUo3jTbTP3hawUsQH9sZ8fFdt3e6sceMtMbotUv3NLbag1diyQz62VLc6rRBJME54HdSr5yFyf2",
  "key21": "32nFA3n6AsCyU6dpibG3aLEhgGypMqp85uqwcBebnbH8sXTMF1EwHkUrGTCL39vmC1zZ7Q5Mxn4inhENaCis6a2n",
  "key22": "yS2Py2iTChHHG6dMutFVEJ9Ltn26WEau7wHGknRz6K9GzRf739hAbtqCqoB4EF2XH6FhDS4Lbn6D9PW5CZpnmwy",
  "key23": "2sekmQX4ogVfezWMByzDcvgM4hZXrEaurCjHeCFCBx3RVybV2SS1f9Ep3KLJaEexmo3a4fJGipXVQt8u8aRCCTBH",
  "key24": "8bx3G16NdDyM76zn6DTawUTg9BYQmxyTdbdiF7mWii4smPHyv7ZnvzGFoUBJCvZkYtSZWBRuHsEVjMRGMPTzQyZ",
  "key25": "eh22ZPEadSkcU9DZdJwSSvvxSF3okzCW9ahuYnuirJ4fSq7cZgkb9KuFzbE8irkAzeKwrySukJxFRfv4zfQ84et",
  "key26": "3AFxkANrbtFGQV8RM5KCSZpNoFtvwC2qPDkCoEAw53mGsN8bHvtnkTMDFyeG69xuDdSf6T7TBKq1ypUrpXtWYMBU",
  "key27": "2prAccARjRBnSgvLuaLwFv3EjYepD2ZCjPbGder7BKctsjChVTAvsfbFzy57pjuDLj1JnixTmyDb7kXe94UixfRr",
  "key28": "XeiXVgmyE7cSqpdmzvg7QNQ27h1s5fCFZn4PRXpALWp2LT5PyvvbmyNb3dtkm5aYLdqd6NFihzYckSQvDKzqTyK",
  "key29": "2qiEGoJ83DomrXt6KC1czBWe5r95WoyLHd3macGgszR1Kn7u6jiSmr5Zz2my6JUc81kie15SdBvBfF7zTxMbVPM4",
  "key30": "2ArZBAEqwoQQVBTsH8coiHAbBuxYpKLESdAnko7RDMbwdvu1wf66WhGk6p3vXDW5ZX3j66t1yAaoeVfHHkBiEB4G",
  "key31": "4CPLGvZmD1Hw4MbUNzmLZYEYp8ysrdtS7dkSgPqXUpiaE6d9YRo3zrXw1T2CQrPP1Nx1xyV3VErFkU1iHNPvoVCa",
  "key32": "4H4XBt57XLhG6pXcQZ4cmhemcdBWQr7hbndjCNLRL5f1vbyjog5fC8F4jUnmaHUaq29Up851RbF4q1RFdFV8NBd9",
  "key33": "3dQFcjmRzRGjoxycpSj3ksf17i1qpUrHA17iYwnsRfMQUuZALUNP4RJeVTjgao8vNJAaJvFoGFR1cUpeqJTRgLv6",
  "key34": "2brYXyM2syBqSjWJFkQHKLP7Uoze1JFBqaDZ3iwtzNwtwE5WTzdts6PBJu8M5p49sSMWMDWbyfRVWGgdyxHTbAiP",
  "key35": "4ye26t6kVbpamJSTLkzhqLezgKgv1zAa4Spokhq78YynoHTyt2zx2taRMQMytXUSxsJ8smX5peC7qBaFJXoLoG2J",
  "key36": "oQcGGMkuzTJ5yQ7zBsZHXTizjxvkU3xr4477SoWXf5sqh11tmAkar7y9kCwYrRGDP2wfEBLvVuwftvhQLApD1RJ",
  "key37": "4iQtF5GvTgUuGqie5chQsqZz3HVMugMK6NFZ5fLkFe1bD1mEtcHW3EkpS4i8k6z1s7ZhmoRJh5Dyp3EQc7m4Npbt",
  "key38": "8QxAnwD2X2g1BXLrLXKyTayi7SGN5nChUpYVg5uADTWv6NtULSKrZ7kHNyhy8Wv9Nf7PTe2jh4zwEF7p2wVdqYW",
  "key39": "2nhnAwghfVGLqJSxPP4mWd92Raef9ygULkipgJ1NwxjiqvaGD5aVxHUhqD4eN4wG4Pu9N6D8ayvJ9EAzpVbkDkJh",
  "key40": "jc4Cc9KZBxGt3Mdh1dnZ1H9Qw84qfPJeCcJ5FQ91pKyRHwU8NA1MCPEdXuj1J9RZwPZVYU9KUieqTACqMgVruCe",
  "key41": "45ev3HfHSU57gLqsicMo5xPobgi2z9LeDKUrofFBovLLHqw4ZqkZt9DhCgA5vLvxFpcbsBikEPRjbfFznm68Uwto",
  "key42": "3WJMwmU7A3bQN5dneJ9fWmY1bUvte8HrzmQEfK1ZXgG4mrZVqcbU4B7nDPkga8CBcUMBPCNaPFeeEfXPKweu4uLM",
  "key43": "2Wjofig45j6mJP1VPQi4ZxacQAuHkd4JjC5hqy6K43pAgNfsPmvLbarawuRik2D8MCHq5u8Ee1TkXCb1JaSUSLod",
  "key44": "3bkbDQFfnfPYpohxAxpcviyCHjFyerJtP5Wtxcn2JQAudG7gX3xJYXwe3q53v3GPePnTYMvodyDcX5g1nvZ2v2bj",
  "key45": "566LpjQXTPQc3A5uULB59KFz9jKFackon1F9wm7qunSfRbY3iUKvCzYcFrvF6cxygn69ZuWWBA4YvZhoRdH4NHqG",
  "key46": "DyX1GKy39QMnusgP1enrqq4bDjjbP18Z9KDLF4Zs8VB48pTngS6TqVyzjpgJ6WfNitkbV1SFHbTU1y2EHdyhCLm"
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

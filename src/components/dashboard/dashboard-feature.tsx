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
    "34Aqijg59fLAEv3jbQM68WpBk5zU6fVLtPQvjmiCBUEidnrtfmjA13gTKktXnYEEBCC1WPbmQGS9L1GgKo2Pjrcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BgN464T7eszqjJvX5hfYtRFWc4BGubs5Tvex4Z7nUPfLZCZ8UkupfjE5mW9v98nk5PuNQbkVX1tNGXmv4Pmto1a",
  "key1": "CByxX8R36v4S8G84WxZsfSHCzpLT3dQPsv9xUDVkhhrqwKgoTzyxLqK58bhztM2bs8B24kAeEVadUupQsLkYFop",
  "key2": "3uKKr9mZrLE5CK9KVEedQybEPwzagSbDdjDDP78b6Aq3NF38bkPB5vDu2YymJW7yncg2AwaWivVKpaaMM49DjXYY",
  "key3": "4tGaMaSUqKuTHGCTbebfLiAW2yRsX5k5TmSKyyq2z8v227wt3t1ywxx7xUnMU3jJ1gSLiJnKGZTMSCcCzhoKKo9r",
  "key4": "45CaWUNottS4USPq71tybFixoTxnnHw8sQepQzAbHXJZbXeKYDiGu2xpFRMXaqoYAyPAPaeU1BcZh5BWYmETid35",
  "key5": "3i5Ed4gU5NfZchxpEhc3MKvyrrnEXwNY4DsD4AxZVNrpN3gz86ZdtU2PywWZNkBQTu5qoCQaznqgh5gMm4GDbMSZ",
  "key6": "2MUBjChKE6AR9WbS9jZqTi8p36tKgRJ7tHZrC7paHKzKZHHXdTQVAqnzTmZuCaqVVkgF4Rnzg5Wm7kYwcddJvwnF",
  "key7": "3YJWKHswGW9ZX9im1HmYp3Feo8NdNKsexcgsnGMvjGAezhpRQhf9ugrQ187udpMNRvJLzSKm3Kvwd6zzzVwPS1fC",
  "key8": "wzGJUMoSyh6ADH114TUdPDnaS5qkNwLhtApdibuf6uP89jo4QyUTBPzxXqTWdAxXB4VjZkCNeRSiTxo6jJbdAeX",
  "key9": "469pNJBJgYmDsWkbgadZcKR3Y61GWVZJfhxV3ZHC3yvjhoXoBJbt2AB9cNe3qMmnNNMrx4mfqUzjzjR9tszCwdMv",
  "key10": "463JwXgqifBB8d8xKrphqz3oNB4DD5HhQANpbCHELqafDCNQVbEVUzibPptZtsfHZzQUceoJ5mpeFDEwteR6CDKR",
  "key11": "5MijG5uj2tEEMbo1NTwGyiR6W5uW3NPgR1Xk7cc1FNL9XYLWSXFqswb2kRqndTRf4yTUzHu1bCKeJyBEyddQTbCe",
  "key12": "5n29YvgFASm54ZtnC2HXHdjg914MtznZ1SQCGPHCQLbxnRJcMEDwDVHYPVQQouSu3jYD8M8tnpAnEsctiWKfDnx4",
  "key13": "5sRUzUvqz31r6yhhGjnHMA573C3aSh53LA77GpoB3VWz9VvYxzGVJDT9yQmhWvGVaBKdr3h5MEUgTWVDavz7vcyM",
  "key14": "DHkDUNKfFoyag5vvzQ7c94dT8sACbVsPp2rfx57fgxwn8kxdqRyqtfiLwmCG7ffGWFTK9tzPTq6iGPLfFYgJHU9",
  "key15": "3HbD7MCZjPnH8P5fZsgor5vwDRoddutBtGMGrEqjaQ2cfZPu1G796eYNnq9yUh9Kc887gYgLfuoo4wEB7ZndPdSq",
  "key16": "6LaUPncaQ6m7KcQCvgzD42GsHt3hFyzhDYrLYEpsDK6Vw4H2jZnFbvEpPrVNzig37MMExYFs75pCgPrzwjNa4ew",
  "key17": "2rXmva5zoN4CB9oMnFeu7hzgALHdiGPstzVffSjdkVYB6aC8nfGgXDCNgKUX5yh9iFw8ho6bKmvDA3jdvctaUhPk",
  "key18": "34D9XApHA8jgxggkfbq5aH7fd4jpEdrPG9RHatsM5pWJEW6vHRyY1PZRVBpUcSZSSe3szukComLiUtANkow5iNy8",
  "key19": "2xStMW6CAGCstsxrjVJ5DSw6qof13GuduJAdfGKHkrqPgk8RFJzT1FUuW1cZBm8hoWgYguM3sQRZt2gf9D2dTdJH",
  "key20": "LQV4nCQUYQHzd6RGTC9BmfBJbHfdsJBQBggLmYE8naQJXMDgNm6mTy79iN5GvBCAS3RvRuKBBjjutqT4nnKbUik",
  "key21": "5DrWanPTFGnKoaFBUwmdg39jpGC81HCR1pB4iCyBxwPkBFjrhpqhYg1EvvNw68jtFe3YdYT81g5M73YoQGLVsfTX",
  "key22": "PgDYycKzERbdeR7aAi4CCkX78VFskyevaViCnpXzWwFt821SAKqDWaL6wMkgnJTvB7ShamJ9SCwVdDm4jKYGwcs",
  "key23": "2oMgNdKFZ5zEqsw7MGXur3gykUxLtXpgsnLFprykpfgBGQRVMBZmY9Z2zUabS3jdQCt9bwAAiC6B9SPocrrYSaw",
  "key24": "2s8N3XXErzPUqCPknaWWTvyDwKypjCvTSaigrnxmkpF52Gnc5WPnAMmPsi32i6MguoDjWgSLAaQu2h7eQH7yDQSc",
  "key25": "BgtzMXLvMXEeFhugEue2MD77yFJJ4EMqGRgmN5W6MzwDc3NTff6DDmKwBrBCQ4FphtoQrsuEt57Vj3paSFCMnaP",
  "key26": "3mVfcXADk5PPHUnwnMZ3ryU9oYoPQrXyDWkPguojDzhVZkaZ9XfmrDmR7i1ARZs89QBazFVZriWZhp73jioEWVqo",
  "key27": "4DR7soodqSKeLrBQsysjtMgj97QZTABhumkRwR49PA4ZjBTMBxSQTnS8UefQRBTRpKZRMFKVbvbYtYoJ6r6bp5Bd",
  "key28": "5L7QpXWhZy5V5j3HhJuXDqEhHjPKF5izvsEgPC8KRnU4dGp7uitqgDkqwSPLZ1XPWeTmSqpZMXujCeNJfnF2sFdC",
  "key29": "CP7DATTANKZ518LBqxAQnuKpiByJjogHdkvXgYFaReydHi3CGnXrAN9SrsKbFsKkFvXaSJr42gPJiunX5MKEuxq",
  "key30": "4528Xpea6odRds1Ap8X4aLsUuwYUessJf23c3utVTM2B1hArDYuxLKuogrRHqtzpnmk21hgyR3pX75X9J1g5RePv",
  "key31": "gSZDCj5ZG2DtbTSpp49Y6FvQw4RoDuRxfvToGXCrv61Ems2KZSGNXThHaKqyX4RVyW1KLPzLHeTJcZFLgULkCTq",
  "key32": "HgaWUxKugMBKD7bSMpUa4JcxgVTmJcdniRKLKqqifSnUhqiPbTn5CfZYte9Ck2aymkUXEXTMmSet7uoKh5gLxyz",
  "key33": "PeUjQ5hP8XV9G8XPVLHzf3YtYEV95LnSA2PWTboBJdi7mwHuqHEDGWGynkuRYiQ6DYaRE7W3R1soyKAmMDjbXRq",
  "key34": "4NX1QSy2eB743Sg81N2KjLYrmfgrecY6XtGsNSuuFL8wUHcJFPmYFrRYgVYMAcfbaAepq3pnWG9EuPPQWebPeLfE",
  "key35": "csEmdzkfjuZFgpLTTWfwVSsAH6nxzicLKvvCHc1eXWC7HB5SJQ5NVMNHtZPzXqaE38evNKZxQMnd3yzA7ccpz2r",
  "key36": "4eBw3Uigq4RoZ8iZBf3kXb44jgs8C2oi5u39AcCHvLuWaAPYBXo4V7oYgUiamsK4g5UhojgbJck61bAQp87Ji9zP",
  "key37": "2Wnr2o7ZW1c3FcRH6Mco9UAQnoSu7Uz2oSC3f9iLQ1A8jWCjGHJ1X3GgNbw4HujH3rQNEyHXbNBKnZuxFsFzEvLf",
  "key38": "3q3WXgLEKuSXzSAueajZmgdFie97Sgj3QSuboPjHTtEPtA7Emtx3io1d9Enn29ZF4wepfrCwP2VhrrXJz8FAEFKE",
  "key39": "2RysJmM8V5xApK7oAqtCYU3uC2z4Ed7h5JKHZU3EfBWja7XmkirN9kv598PJZk6TM27YajCkc3EmSMutuqt8Pr3P",
  "key40": "2khAAbJkp9ZoC2XzRDmNUweU49cXsQtMWLtPpd7p4J6JKm36sgaJM9mzj9GjZ7ZwjHvPCebybPg4VjMKdnjGyCd6",
  "key41": "3Vf6McrxGLus6ZCjtwWf6cYfuWmNp16sB17X4XsJQZSe9eJjjVt6tp4BhhSBhTy56SBgBjLo1AaCxJbdsHoZBb62",
  "key42": "vNgM4whacfxNcLNJMZQsEqdXxQgrt65RLYp4Up4qzo1raEaALMgFkg3RrnV6tdaqtb1c7xCX5cXV9Hvtrew5cbd",
  "key43": "5Uv5uzMRxocNR9BMtE2Pp79dfKGWvXAXYywCAQvCCTAJVNqpx9VAaiiL2YdYAj6z2RRCZc9gpfLMohbNXz7USQhP",
  "key44": "4FGUCQBnPV4qnizpqQSCNNh3LUutVpHkUwsVxxiFcaEWt42thi4kWFKhcTjJWzH3SWdprGfZpqTH86zsf8hc5BAW",
  "key45": "5WN5TuapdpzQZ27oSvT9FPMtp753B4FTdfFxHYiS4uZBRKZBgqeHSocx8uXEav5iAdNXpgkpTvqFZy5uUz6fUL4B",
  "key46": "4edJB6n9rbdjyajZLhVohZYionPV5gv8AHawXicQadLjBNb9h4SSnRzXDrPxkqTNfMnEzh6hWbAKHgqnEBebigds",
  "key47": "4M881Kb9FsB9xgBwzZMrNmB6mFcCmXHyBsbsS2PLpynDxMbLcv5SA9qD4kmTGRSZ7s6EMcTyJPJho6DDQaD6bUsK"
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

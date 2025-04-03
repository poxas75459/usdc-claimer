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
    "3poUYXbczisr2NdgtPcvPMH8YwmoN9DSbZPjqV2J6GeL2vpuz3k7rnAyPambcBMCG3yfe1d4NscvHZuqRSKaxQ4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jk4W9nUbHEDQcW1igLh2LsrKBtEgmu4L9awsJ4ma1rRkS9D2t5LShHvjDQo3aCNVyogXvTykuJD4JT9efRCq3CJ",
  "key1": "2kgY4RCpBMDBSeZdDW5aLPzYUKs2Q1Zz6AZ6hm9HBdb1Z76PP26X8JRfem1z1oP9s8tzrDx1aCn5tRsM1ri4hw1Z",
  "key2": "4xeuQvSHikXk8CKhBVeTapHvxFb3nS2rCKFVM7ZrNFFjGy2nZ7LB8sH3yuDTgJJiJMcunxK35QAAd9uWYtLPeRR3",
  "key3": "5JNRfipWjFBF13XKA8croVMdpxowFuNA6umXXtd4XQMu2j2Fy1enhMKXrxcHb4VeDBXCLzvH5tQrr6hvemUzCLLw",
  "key4": "2UYhoop251KYaQDUxAQeC2oMhSLqBaCrrvcvdAkABiARU3Dc8sLQUu287oCuL3dT9655QJ5gZMtGj1uCKbN9R3W4",
  "key5": "5b2bzdwL9SvmUSFWvs3WoyXe6ekYYkkBr3S9zskqzzZPrafVZFLr7sF37Bwi8NiKWfhooE1mNotWfLS7MRm4wq4J",
  "key6": "3TmbLwfrw862H5FWBVxT5fS18kQ6f74XeNZxMHLEv1rtqDuEEbTkokPbtQjeNnr4gK3VrrdCLNt4zSTmH5u6WxqJ",
  "key7": "3Rur4iLYr4pnGfVWVopTo4hcdUHMSjm9gkRGMzjECMzheS1mrokYDt2ZcYy38Nwddo2fc6REPypYvzBb34GjpSxf",
  "key8": "46V9TWaGUdhTViWVE5kEnrqEAYeUX7ag4r2HzWwpdsQW85rMxwD3wHDdhNwKmv8iMRWYfNEVrBsKWV2jAZERqDm2",
  "key9": "4xdXYxxwqxuXNkiEAH2jBkiunGqd4SXPZxswGxDZUqjaQYM2L5Q3ncHD8peVh61QGd2ueGYLfohnQ4ScEEVUcFWg",
  "key10": "5TNswGJW8AtUTpdDRcCDmAA4SazaoAWESX9qxxMSr9dsojtPmJMFU3WeNNK249VEqdDB8rsAoPy9Wwe2JdEMFAU2",
  "key11": "2tMLWL35CSvFjN1Kvf7DihGBjsHjEdmRNSHwVEmk1UPDaKZqr6JWHkFSzrRL5UV5ZWauh66ip9wuidNPGMFsPdUs",
  "key12": "63mH5EQtpeuQC79mJwhW72iUvXFYrRqySzdhWcjpBnXcHYXcc7GZyFG3BUpcMhNqJdBioB2CHzm3Fv6MoFxqhwY2",
  "key13": "2RMYzGjrQKPBLoqTSUfB8Ycsx2rcEwoGcHNZkSXNJs6jgEWgMHiTnDQSShfB2EdafrGH2K8xTtCRsYB33sYLvFjg",
  "key14": "G5XWvGT1QuTnsunAw2NhSz1YeawfUcTzBAQ4E4G5UZkmGjLosD5EhXPJM6zkp3ugGMD6r9aMhcX11WKVpkkPsuX",
  "key15": "3nwYE7xkzm1h1KGnGybSJEffyZ4pr75Qpi251ghz9Xndp3EjJnNQ9UtWwRuUbEd4pzAgw145c2VYrhwjVQd8heMa",
  "key16": "3TTrfByTXHc2RfBqPGhD2RLjfPUXoebRghmniR3hEHLFhvBgd1cG1PafnDDmWoTedetPaNgsDNEeetcBMhTT98dd",
  "key17": "3v5AndWMCFxo2Lt7nRp7zRwYGNx18yistDnwYBCo2Tybw2E1jz2qwR5z8oLrSJ2gX9cEGssbvhrk1pocrrENq9Kf",
  "key18": "b9TF8PpAL2KxzkyJnKQ571Ke2QTYHmmq1Ud7gtEZi4AzDPMRbYidJFaqRxvS3hBTM7om6WTVSxsiNW5AUFTGpZ1",
  "key19": "2L26FDMmNcrmwMZh23VknWS6bEiQ6yQ3rgNaUjTb6P4zUuR16drpPAXqsqjcJZGY3jVESwv4C89BaayKEpsS8qsj",
  "key20": "661PoBS4amB2ncggNH2qLfjmVr7spu5PNuJsVa9nHvtFiahnrDRp4gzeTRM1z3LQY1TRx2Kc767crDRkkYMhSFmC",
  "key21": "63DqqFbRxvJA2QF2N46zBNBUNyiaqRgRZJJaUYgCcUJgeX9iRZBXN4vkZvMhvcEXukYKf2GNyHawwwEWKfeNgqrm",
  "key22": "4Tw6NirS1Hd2JjjhKctVB4mi4unWRytEaCD9s3zM49DqsjiFgd1bdGJoHfZQb3emJ5jNmBRaECYc2i1upvWCwbgi",
  "key23": "sG4Yyw3BVeKzxExQvA8BWw9rqnJpccCbeLuXjev5yyw4UEZfv811anY7uM3tyU7faUaxGambU27VYmuACt7BDrD",
  "key24": "2jbUTf4heksZhr6DRCkCP8feETEky9U3VM8vWeznKfcKGJkUAYpFfWsXkLz5GXoWrxQ2u2QrKaP8AVPvW6zmZXSj",
  "key25": "2B5tKrp4jcVBguBiEKaKQ3jV3W33hwQvz9WQMhgy8Cekynbsy6axPQQggLGP1k6aD932UN7yWtikBxL5h4veg7ZZ",
  "key26": "2C86W6wd88MLrLFUYQWdXJhNVrjqzckjh6adCmPoLmbDfTjffEx1dywGjysEnEM4Te4XPBQKb6P9ToxHKSo1isK6",
  "key27": "5T3yHuRGKS2EKB5yLVDvmrSERpf62NR6RdeYdWDGsSKRgFERtZ7FYwTLevsXeq6qKg5iHEw8bpkVEH5i7pFpTe9m",
  "key28": "4WFaum8LXjowPZc4bMk6bU8zCmzgcaTWJXtJ4xZoyxRSrsqRSkS2mhfhkEcv8xSvzWQBsULdRJ5C4qCcwYPyqJA5",
  "key29": "51xSHR1K6fJtVN9K7DT3kp7mY2cZPWgMbKYaC1AXdtiTCnYRFXtnFVkmYkkYzspzWB4iu2Nqs6DydCbG9GKdAYXq",
  "key30": "2duGbaJPhwtEJtHW8K5DHoWAGyijbVnx41AuLdcrTv57GyTX9sTrbBbUyShfWzn2egwB3V5gbRaXnZDvbztDTWhd",
  "key31": "FKuMa4m6yiQKYQ97AiZjiFXTjbBYTJD2DVjZmWNRn47dzwAmV3gy3CUg9yfLoQ8ogk4Mke7DnFJ22iQQxN1vhxP",
  "key32": "5dk3oLAHLZPuPL49MqDBQ4JgKonvyjyyMppTGW6edRem8vFJTFunu9GjbLTr9hu6Zr2PdUrfMtewUrbsd9LSnxUi",
  "key33": "7QM6yzixhhZFgBcim7D6ed4FBATjUWf2CGoUUmG8bUVrckSvKQNH5rjk54UiLaY4fGnri7kmHughXzSnX6kiRMW",
  "key34": "2iDEZBLWVsVDB4WZXEDuciD1NB5NqcKDkhaUGXS6zQU7xnyE5EX1DaaSxJLhUGfMwUPpbJVgvNKBkMfaBSmHEENj",
  "key35": "4BA6uLvJqJMMfukMg18KRwykLYoDoQcyE8b7stC7VqABFgR1FEyve9EgqvNoJdF6DZMNyWnWBaousSnsdX5w7WGM"
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

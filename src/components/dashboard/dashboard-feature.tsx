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
    "2F2ZgjEKUe3B5RzztguvgZ2LdXRUJLTyfJGSYVMpU7Pt4CbF51Jj17k4YC6LhfAht2xsG6HfbM1Fmbv61TWmqctj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNUV2BxhXVNtQDZAesEzNsYKsQPFh3soMgBDJvrczt6pTiq33Xz2HZqz3c62sBingRxayRHF1TnHxiiVgfymHYi",
  "key1": "2bxdHTiN2QYJjVrW154GDncsptGDA82ey1t4HBQGoizRZuLeh9PEnAyG97YRnmt3kimk9c9qiZKnJ4b1mBZGD6tE",
  "key2": "4vyWR5NH2Q2yQUHMiafRcTM8QXjufyuwc3j4whyBWQLx5v8JLoLZYynfehFVLyNvX9MgzGo2Mmw7FEhYAZp1iCdp",
  "key3": "5o8SKNoD3BPv2cDdZjs7RZLqRcjEjpmcCdi3JU6hgAw4pw566MCT7JcwzbApnhu5uGdehA58wRxHAAdtJAdia8aR",
  "key4": "3ooSwxp767XKJ6FGsbjHZAgjp5J5U15vJcbWWyv18D1MczfKz5CoMd39pbGgYAhNWk9cVtQfh6cwJNJVbD4iwYKs",
  "key5": "4C1ycEXK81m8z5kKNd1Bg7SpMTUdBVL5UbKp7ZuZyU6YRX5WkGwkKfNYvuxWN58zi9aGKXCPrSrLaRiEUDcEmswp",
  "key6": "4UXtGZnWy6E3du7KMcMadyCB7MQGnfxrD9oL6Tkq44ycCJY4ft67CDuzVyC17Y281vMU1rPhDBtNcdfRKNDsmmBm",
  "key7": "4nhKTd5rf8p2ThbcLX7z6AEu1BZSqYNepeJZAhDckc7Mf2cMmgkGBtzfghJsXGbmwDrgvdhMdZCYWP1moP5k95dt",
  "key8": "5bsJoF7tGcskVtczstW7RQqUAiR8KCzGwcWFZEs5J8B8j84Lp3ap4en8KNHdUzdDqptfuvTLN55wSnSnL1huWqa8",
  "key9": "ttY5j1XZHufuRRL6VL5gpZFF8bi6SRVzRTaGqNAkD8BqfGHHMHzZv4jZ2Uq2SJP4WEZnBWwKvrUui5A2ToXZy7q",
  "key10": "3q8rBvXPTv5AnLcL7remPA3EMaP4dVNRXbwL5k8PGCLoW2aYCNKLZLYpqfkYbr7sciyzi8UzdEbQsR7nLyR8wt6Y",
  "key11": "EVuoquSt6W8ZqEAo4pLUca9xwanSxyNTXQeBTxbxq9pT9MWZ3uzbi6zeAXmrXphujQpkPnYecbvHCvmaBBkPUh6",
  "key12": "2S6WufmXgD28cAJLcsdSNhx64b562kudANUiruiG4x7qss9QeGG6mAMztQd4tijRkwUNTdnMJXCAUKYy8HUpV1Uq",
  "key13": "4xFhK2Mpmzf447DNKorrQfGp29HYkY957K8NFsvVJ6ovCJUyL2xP32oDmmESq9Q55RAuRyoj1Afgfx4TjopSRS6F",
  "key14": "5KnEPuSxS9QemzJBUEe1oZm4iyDsfDCx6H4gTV4RSt9c9y5eM33LFEun2vZHEEU6cBUDbR49gdhkaPFQqyHwtnyU",
  "key15": "2CPr9oK8XUEQou7XL9xoASC5L1s9GdZQxRNvPsWNZP4ZueTRcaPiV7gNe49Bgs3dyHnAiBYv89BqWto7KyrdnVoY",
  "key16": "2sfY19u23VDAvBEXGYoP8D8tNPbBdqTvD9ZJFFYx7H3CUwo3uU6Cef8QbSTdXHCFA7tYkeaHmzGmT1vgPpKdk7zg",
  "key17": "2DWYpqBFo791PEU97PeNNToxXk6PBZHxXkG7bZjFUkceZ53iigAFeay5W6MTvBUwJMHrZAoozACU5iJA7yRxvXM4",
  "key18": "66TiJ5gcTcxsmG69g3BVyDoJtBd4JDxLnYWjWXZas35Gh5RApjgNeiwPdHdvDkwbijWs9PnFSEfES8SyU5Fa6EMJ",
  "key19": "22ymUe545EZ8KUJJCJRq3oKW2yFL7BkweTc4jGKGMLVcUGH4KwRtPks6Zif7tHJ9xMB2KmjawRjK72kPEKJejcrc",
  "key20": "3EDgTaXv2k6fsEBabg6XN5pjfKCDETASVSsm9yQ8EheFJRhsbDXnTzzJ2PS8LBaWByvH5vqM4duhG9EumQcdyqQD",
  "key21": "5kRZf9oKtAVdXZwoTMwCSYEmojuJPXCVeGJh81YNtmgmkr7GvUKc1wL2dEWHUHsHKx8jiJqptHfXFQqM6sDRDyAq",
  "key22": "nQbs8fHHRvEt4GRAg5AB1sJcHuohJWdGNuYPApZUW8rfJkGaXj4zR3TzrmT3n2Ja3VJehGa275ZQq1uBW2qM7x1",
  "key23": "5ZVLiGfvV3c179Wb7Bv4Bo93teNyCUh7N8bE77XLbd6YemzUmKqe9ABrBhdxftsZZHczpnoMM4cNZzPv21se1Azh",
  "key24": "1FhBS8bcGJvjudJZNfSpAoGJZVe3MkPtkFYfeSU7RSDPSckwpsw7Kkuo48SYc9Yde6tfMaBF1PnEn6XaWZeK3mv",
  "key25": "2erKgMWFYJ5wZzigG5MBeedz41K7s5V9CqP2PCWfdX5mhh3WaHr6SereA3E7FTm6wzvUABukxB3W4412BMPWcBWN",
  "key26": "5aA4STAKVFkmapiJhuTBSDxuSyHJMWbpg8tdjrVQoUmYMGgymkjmCciKXgpruz1zLSfe3iU3CNyDLJZTeQJSeyGa",
  "key27": "4RBvAB6m2Sy8ukFWXjFcHX3997xHBoLGeKjbCQn3RNXFLo5vPF5YwphcAnod5qbhnDQwYyA62cv5f4GYAJVF7J1h",
  "key28": "45gbwhVsZ3PCR6diuN7vCMcjH5TbrH1yLxW5TbByARWeyuwacpXuQKEq7t8CvcxC8fZmksK1eBZb7Nm2Ucz6jnKh",
  "key29": "2aq6fgrRn8XXBgo1QYaH5H7mfxxvN8cN7Bz7ovB8UCVfMKDG9aTDZ7uzKjpXiYnQr7SFozH7Sc3dcs8nCxUhHJJx",
  "key30": "FaMyc9dVn3yQLJ2PYMTunLXPfouUndkdCzRZBHZRV5dZVFrnc4bCkGAU8s6aUXYukvatkBEbZZKvpDmDo5cWitx",
  "key31": "59kgTNb5aSdBNKFn1UVw4cnBrGzt2PjC7tRnTXgrR92WCmHSFBrjyNaoewy6ias22btwetyNdvUrVAweEiXzbU1g",
  "key32": "44QTvstBXRjhSTKQJoLrSZcpCx1Z4dV4yBxCGcaGCMNtDhoR6V5Hr1WshCtsubBpBCEdEnYdAxErthmKMDYj4RCK",
  "key33": "4R58tqgXZUmwehBqshNUyUtjnxEhUVGFU8CW3saUpEyE2uVqRk3Yh8ZxhPFKAT44Quv3nHUPsRtnzWbMgZvRoVNa",
  "key34": "3gM9Wn1fhDFh9q84nJrLjWdFmFzuuZHtvGp6yx38dhfVHAkUn94iJagTSMVBavWgSuUGmTCA5hB9smu4VaJW2nJG",
  "key35": "5VSEtN1GvAiSmboojtencCqRqYm2qSbVRFnGrvEMQX5FHs6LrWCrqy4p88Tw94C6m7cERo9uHQknTzQE4Q6nyicV",
  "key36": "3as3Seat1JVAXHNbBMUQ9zNKFhPrP67wDNivXqRdNwredFqmuEVEjWWR2s4Ar9QuV9yxkZ8dh7zogaSMqHbBKxSs",
  "key37": "5pdebxQYRH49LrJ7BpHUSYEHhEVR4xDAXFMQ2JW1gYsagQPRW5YfJML7K53UWZjjfi1w2Vc8F6gJg21kfRvrH4QK",
  "key38": "PdE8rdSgTb1FgYXDye3zXDHo8wcwmL4i73vixpS6a72xTGcooYarfNbUqrwYeL6RcbF4nUvoknyTpMqT8kpiTQw",
  "key39": "2nQLgF7o5TD5nvfLJHMXb3kabxxEcgfUhx8uLVyxjZj6A7are9URj84yaW2BBobRBSQk1p12H7TGUZCwoTBE4aYm",
  "key40": "4Z451fbFbdxBr7vwcCGAbrNbpCq9h6qvCLNerDQSU8LVxGLnubCLwA6xeiqcatopbDWawdYDySda3iaFCvibs1Mb",
  "key41": "3cDrBkRSWe7uDeEcdYwFdYXCRkf71WCCJPdbZKPhzkYQrE8yePZqBcEM69vBQgcerF3zSnr57QTD18acFcxUuuKD",
  "key42": "4ReAwxC5KWFDNSQBTBBAWTFE95j85nd11ciFcfMjPSr3A2RTaozShC8KBjEs796KiZWYqn8XHCrBqfZkRTM73SBa",
  "key43": "31uaqe6GSdduvRycPzn1Wrr236NpnbN28vwsYADC3in42pscbL8cn6AjpAuVtaCr79LFDjzCWG5QG8SDgBbHo63n",
  "key44": "3EoBp4ARor3dKM5jC41tuwDfWXbeZtLihhzBjDyUPKfn9eq7YHBRmD6DhBSLMMWhEXy9xSE6jvXyfD7EYcQgPzbs",
  "key45": "3W2FcRE7NRu4UVsvWkmSKvYfEKhpVVduVoFt4erymesDRKRDFKh8z2s4f8CU6Xd5AVM75wXQGGQv5nJHaTkMvdNa",
  "key46": "5qeweaoBPKFQz4V6sAyxitPQC1QthTWPqtgMJJDpTKu68US4jUXE2HSgzCWYVoquiwMHNwmhDXQdtPfC8jeMJFqc"
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

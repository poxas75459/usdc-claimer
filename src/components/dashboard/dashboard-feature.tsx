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
    "2PsamBRD3WYoKqiu5m9CHWaRK1jKaydgwMuoDo8Bk1a8kdtpogdqsM93dy4F56Kbej2gEiAySCM9smJvu7b5YHCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545fc6u2tdgUg8i8DGxKgK2zfrUULnxKYPG7RN4SkePpL4yoT2AUxvSoY6MfQie6N5TNV9DJxbpR4R9ziKFmLVr",
  "key1": "3GMqf7ie7Y72m6eBwi6i7yKfABG5m25T5NurLvNy9ipaRPLLUscRNXfE8rzT68Yz4uX4Esqp31YnP5bUpHdrUDzM",
  "key2": "2qPBt1HcYFfTeso77gvqa8yrDrZ5mXkgkAAawb3YU3ebmmawHXYZyV7rVw9qYYHjXBcyJUzSH9JCLWkn3ENR9K61",
  "key3": "GyxNZngTDQD8mGWuy2QXUxgabB6UYK5Fscw5iE3MB4MYEnsgLAWZSzCfVeaXDAMVfEznijV5xgM3n1rWNJCpMRK",
  "key4": "4hjs5FhLzz3kYF4mnNqrGpXYATfkp6HqtZuUnnVPbbpt9NCdVcTTRJtAopkX5RxkBfUVisACsn5TB3ejD6GBeg8o",
  "key5": "5TGMJ3nG5wsz3jPQC3LBvN9JbLurZA2srGRx9ec6Jhb4pVLL7wzNpu14Nt89nF4Vik4e3qxU4r619H9JTrmoAEF2",
  "key6": "2rZnd2msj6p51LmRAsDhUi2w1knv4xWmPsVVaCDSCz2xvw8hwGHdPFnR3aD9Fm6C6HLyeG5dWt6wwvv7jTwJn7qX",
  "key7": "3TpDYWpiDYxmsKXccVxxGGU7JGvCGKQb3qYLckxhaicyuAQ1apEbSKdmbEkw4vrT5czL83ajhE94RS1MohDXwKRc",
  "key8": "2YsP3V7sBmTXccVNnD2FvF5kjgHTRQWHk3q8cGbkJMuMc46uiW8zmDo4WB4yoyTghokRcAETea7iavBQ3x71yk8M",
  "key9": "3Gs5w9EtUkQaKevy8rZyqiZRRPz1eoys3hvsDM6U9VzAEwbeAReza1JhFpX1LHwMzQRsFJRgtkaoKMhFZRqexxBU",
  "key10": "4mxYPwqhqs3Z2stq3TwgXdswHeiuXTD8nYdEoj39MoRWgh1eGYz1MUrKtdw5CgerPtM7XeQ3i6bYw9of9gWLJGeE",
  "key11": "CyugrAeNrNvsmaV8Dtytou1zM7rY89QWwpRvWFKJMJwi6vjhWVEeraGk1RwyDqGw6S1G9Nm79BdiEhzgbXN5q5f",
  "key12": "5hWWvd95Z2Ncdbm4vu7z1bZFQ8M9GHjw7mp6DbBbV2LwY8b5QDTPELGwXki2VbKMKWNrScGAeQGyqer7hDXeobaA",
  "key13": "4rpF1M6Tav3yL39NXZPMQyPJqWNFV7U1GirVrYTdiTPLHUac3AbCDiXZ1L9LepYRmnGheEtUnECVQ2ubPqN4b6a7",
  "key14": "2CYzArsYtymECFv4juaAgcwD8TSn4rZuyF9x48J7eBRkrQ1jKNi7CkMM4DtWCndBwpY1Pc58gYH4TQZGh9PUDdkT",
  "key15": "3A2psPtDjjuiKYuzTf2YdbASabfa6S766XKYJxKBtaZBovceBGXDu3R5sFLbdBe3YZCoDeXvvVTdj73P3UVstXdY",
  "key16": "3ZmbUszcdZ6ZRFHWv8mCqfg7C679GtdJSmt8CCVGorjmNHNyo6MwcVrwaAxZ9dQtPVA3rdpisWawUw2GrxxQLiNj",
  "key17": "5QkHXfJSHHJzz5ujQ9EbjYJ3QfXcvYWqAGQVfwtcbvcBpNDzqhUk8kxuuVYYYiGgNpeXoYXU4VFiae2ctgKyTmrw",
  "key18": "zCqog8TmUopXHud5oDtGtaeNNzG3nTRkQGQUXi9C6RxDAKKqPgLc7rzxJVo946kw1vxjESCQhECSs4CVKV7E4TW",
  "key19": "2NikruMHYUjwQMGqzBvccfhVAzBSJjWEGkRrrxKoEXzdY6UKfGqjqMeYiGRTtbsQfzgNG8HFZYrPyoa9LSsaJzaT",
  "key20": "2NoyjJ9MLTS9Qe8ZfriyC6SroyCJpnR28pYnSurXGssGbERggfxtEgANvT3jCBMqSKBKJn6EA3b9nJe7mmgK43pk",
  "key21": "52mRG2kbrYxk8sKgqQVMpBp1ToGyRrkY5527RLqztaoYRcLGmVEeRYYrMrVonb7GuboCuZXSUzgAmYs5xUETmGcP",
  "key22": "5w3ttEGxU7ycEFgHFHcrg4FJxHDu8akZDVZUsjwEjZYDnoDh5redoqP1sgaPeGmgG86GQMLyKnZYmNj8EgKwdCPj",
  "key23": "4cH33cCu6ndNodqqskpZeihVr4zvUx4L6YWURZSXJFTyX8AdpUKHXL26Q7bUAT4CUNR8A8XB8yxBqfTcZwtyxqf9",
  "key24": "3shhzD3b9AAEBjw2MD6HdnhhpFxhLmbz828XaFSQB6aRqLy6YGVMG7Qtx5iBJav11c6E7egeLQfJmc8SHshU5PTp",
  "key25": "4ghZyBBG72ySjFM9HmvvNRZBehzzmqMpBCqWtP2tffYBvtjo5bJsJj1qGSqFU1LYHf9DiKMqaUmt24oApnn1pH4m",
  "key26": "jnstT8wuZyKaZwJ7r6c3hJLvtePSaoUUWobRhEJoGbfPpf8u4ssyRqXFhYeh7P893EANVGsnPRMDV3QakzHESL4",
  "key27": "EAfqHCqKcdT7cRZXRRWbKzUBkxFVJTYxUegT5G6E1RoeRG3TBv7remcpLPKfXn2Nir1q29cV1zriTeN2KKSuRBX",
  "key28": "3tiuNgwJnENMrpfda7Znjt3xrhpxUgsovnB2Xy1V1DGMcxhGSt2rWR1Ck3EPcEczo7epVzVyHgh3goFcD3Kbef5v",
  "key29": "5B1L7tHpReALeaXPC8rgmiysRTf9PnXnJ1Ewgp4FCmvzu8eDKAs7mJgw868JyFQLCD2PTEy2yTYFSExzoE9MBcwf",
  "key30": "2D3zFXAz4fz5xSVSmhEEGMKA1e3EJ4gXVHwQ72GDHCVoxNbfSyXUC55rPoL5ffecArGd4xuMSpJw2iHX1ceNx4XZ",
  "key31": "5JDBriD3pyLVMu1dWpUyyR6kLpdm8eH212CiuXRXeZr25Y4D5jw8ac3moRyDc3Z4kaiJSpXTqyMiVm2NrPanZpWz",
  "key32": "fjyvoUrYMf9PezA7EBLiFQ1fm2efpQcLG1CSXv3BxMXwhHgaD1fmfeGEt6YN6p8gmyuuCsgcYq6eFe13nU4SJQi",
  "key33": "21uSRc6EqBXq4QUVuz8AwiJg4Lpj2KvkZc9zAXGVuQvqyyow1qsx6VR5459itEXzf2F6qRut77pSz8EwxcH371Bx",
  "key34": "4wRkcT5xe1KfFiAsz7sqZH34FepUUDJ9FW5yD1PkJis36VzChnqaiWMWWiecPeWMu1NGc67Fond7umZhLduLJ6QE",
  "key35": "4vrDY22xEkfLzPmcYaG34GCCgtxNpXpY9ZT5hDETorVg6xtUboSn9RUpWCbQLNc7gortVqrY2xrRkhdcsb6SYo5a",
  "key36": "5agCN7qegyVvf5b6EpJAkaUHYT6q1Y55Pxi3uoDmmmzirC4mx5aDVupoLZWgdwmAQbfqjEWgVxQup8BsfMMoPUqh",
  "key37": "56kgK1Ha1PdFkTa7W4GzYAJke5Z37x5bfUvy1cGJq8wd6WgnZbFzSJ8TQv1szN8dkM2tzSGjdt6efvBk4J1USFMD",
  "key38": "DyamzASauzg5LHecZC8CJXqomj12W6RnyHRnEtv2nsuVr2mE42R6Tp911wmQLUSQRpAbrQyZeQRqMLTSpKGXytv",
  "key39": "3K9S3KJfCjub7mqNMAdgUQHxEjAsKTSaZ9PxURAAeiE29yG15QcAykEzyQtc5bF5cGVTcpNSGRK8zxZ3XrRzyo2p"
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

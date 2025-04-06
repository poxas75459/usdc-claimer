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
    "3iCHz5DEPDKxQqX3n7ytiu56qGD67FS6s83EhkZw8JYSJQ9FiKF2iWq52xur9ZdZuQKNhY8tLtD12NRDLxdWnYeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaMqbgRPpcPy4RMd6FhA6UDc1X2dYd1Uf6DX9CVffPe2LAk7WV8GSj8AFEKetFUr3N6UYR9rHNgzfN3yqE2JbPD",
  "key1": "3qhmAajQrj9kF5nR3YGiqHk6aSHz1UTbvHGjTsVx9kSDvKdJVH4ssz5WZpicViSpr6HRRBv4Ubzr93CQSJGQ2SKk",
  "key2": "5hFn8cWdJRUy3d1wf5VtqfqZycSQ3g8TuCiVU2F5cnbUUUp2R9vDnkVn3L2RHoQX1TMcnKMNT37W9K9Btk9d9DPR",
  "key3": "5GBRcZtF6smB2DHF3cfioV8PSVYnC7qaZ2x34vLU6aBH4XGrnA7Z75bcxCeJmve5csgkJWQSFToN86q3123Uyuaj",
  "key4": "5txFzTaaHiLe4B4EJ7MLzUwU3spAJ9XbjAiZt2xQBEorwu4jgW2aZqotjZZbq7eSQuE8FMC3ndiu46KR53tnf3fg",
  "key5": "47NPwjt3cEhpFewamJZJNY8nY8KzSCKeSqJpgUKtzcQxytXHx21yoTLTEt7BHYGhLSsKDXLi7bBoj9iEz8XkSg85",
  "key6": "GZN4DhxLfLmipG5NRUS9WWCL7YBeAV2P2pHDfRJAdbBrQYUXCfvCSuXFVB9czTaNZYav8ZDEPbTaT5RnZDUJxhv",
  "key7": "pYH4SuoHvoR8D69Y3b3TB6EJwqHBtbWCKHtkKsrBFqAco3vjt34Vm8nNMtntcQ4ueX8wgbd2mgEyuxawtjqAzcN",
  "key8": "3TqLWopKo4iU1ibuCriy5EtJMbcwSRVo5dkn3cXY776SGajJ1tMnYKZZ8qeC3Cpitbw1CBANQZaJ3nSBydWeUBw3",
  "key9": "5bD3LwCJEAFm9JjicWpQdHWR4rcxXN3hHazNz9ndedoRjA3TeZDvyVrPF58hGFdnH7kJjCmtphA7dfSsvGN4x7Hu",
  "key10": "3ja2cKfy3YR8Jh3oj2ksfBoJTPHEGw4783Rjtyn3HjZ8ychsSbb4GS43kfK7TotBpj64m71wiebfwkUFwNuf87wG",
  "key11": "2kuvcjdn19UJSV4YfkscpdifhUP15id7UuXBJcHJssn9GVYgRaCsFRDWtbYrjfZhBC6m36xX5CfRDUuUKyEAYjc1",
  "key12": "4X8aW7SdRjf7M2y2UHn9WD14gV58FbUW7fedNzQ71AU5K1NPjsMYiWqA1aPPsLrReiNWwKM1atMqgDLJDAZwznTS",
  "key13": "ToiR7tFxpiNvqSHPXNySVGfVodrPvMy4o2b2XEe9cP6gfvh4VXNT4uMCuPy6HCdCnDLFr7DJZ4fMgcTdJwkZTLo",
  "key14": "9fcqNXuGMYVwP4nP6CUPHJQwnes8e3rjD5aGoNxTA4GWyYiZViqDUNyRQ8aBegBrbY84VH9pNy5fmywouugUCcL",
  "key15": "3Rr3kT1KcFNmErjfA1EapHmMVvQK3RdiE3tbHVvoHV2f3WVKbyDZiJfEJUCmrQzbEZTdyYZQvUo8wxdowryNKcsB",
  "key16": "4qAbiGKZUgtcwi6jEYJqR9vnP5JvAkuLaQrhi4azm6ZoTWfuqAC63E5VacJ7X2Gvy5ELb1diBj1XsW5u79LneSL4",
  "key17": "29ZmkaLDFJLKxUy3Bk6UV7v6esdQrc1s9eT8cePDR9bojpmcaHMFZDnqUy13k7j6LXar2veH2jgBj3a64RcL3AZg",
  "key18": "4SRJ96J6ftphwHF2YTqQtYuNbWqFRkMbBYgqwtS2UpCQsPbXu8SJSKGGBon6BEbSDerTySJZdbtZxaqsEXLXUAUb",
  "key19": "6183mTqxS6kqpJ3mJ4ZJnFfn4AiEFmdoRbdaFjgQEztbLKqYyTLGTkdYjMW1cNPyijs9obTkV9pyQgGyGfQnQV2S",
  "key20": "2zwpcP5Qk6mnfaZEdxXEbWjiEpWZXQTZAC9StEKFMjsJebvF7ZRQBKxy4AyL3dL2vXCvGEtZYGTFi1DroXbq5XGi",
  "key21": "23aqzjN3dmtmbmrKymMBrFsL2rmSMFXekR76pCHpiJsTWJxRoUZu7QxKUqBMEjHsXZVtGcEKbtWhxuQ7StsVs3nh",
  "key22": "3CKbmVeMFpZnLzB2oWXvaHaxmZoGfhKyEFekgmoMoAFyoESnqKDGQ37juVa632eYeTbxLjtHqmwqYXmNJ6xEdXHY",
  "key23": "3f3H2sYf4vw3VAdFMYj7p9QRrKwdjUDaXamBpRqaomWhBhDqDVBtBvZEp2FCsjdccQqYBpuZ9qjKiH3fez5J7uKg",
  "key24": "2wDdzHFbtQ2YbiP3nGkgmCXLLgNYpKPGyFxz7hJb2fbApRdaHDBhwiGTUxcsTiZSMeAfWjNLcHBJjoQHL8VUbBJa",
  "key25": "3gxzHdaJD6aSdTAd25czH7jwvNrh2hQZF8MVGLwrcwydshp5LZZ12XtBK4m4S9eZ8nvUBzVMAuojc4Dff2zehpub",
  "key26": "5A6qrjnQXPefqfaHUUrSppr8nzF6rbg3JtSL3E93BMXFtWmJM4HtoK1m9zwyX6DLXxW3JKfSn7f8F8SNCs6mRt95",
  "key27": "5pjDsfiSXYiGMDLYbjGQ9gBVKWUZM2qPuup4JEAx3QaXYZ4L2E5ptbHzxYyXi2fHVZkf78co6KT457MDXu2VFUMj",
  "key28": "5wfYZ5iz5CiftzA3X3w3kJ98oiwctVjwM4zEYZppevFaWww2nueQYtHzTjSXUcYVwsGLwMbpoEd6wHrkPM6Zzpoc",
  "key29": "2Q2vbcrQCYKYVEiHcVZZ4adJUHMPYKr8NZ3GdLvh7LpJyqDwsjLSzEZFNynExH4RCAdRvoNPnuSpYA1GWo7KZJ7M",
  "key30": "32pD7DkNF6pgLUmnjDq3jtneRk2gZhS9ha8ov56m1dE2Fuv87LXR3Uwc6rv9Y41JMmdNjZQ5NFBuGgvKn3f1oD1t",
  "key31": "2pYVmW5c8qLpKwtkRL2K6j5mZvtjC6XfFfpBmevVtC47GfXgjmWQAii5RErf6u698NMCCTeNY66AouA15pqbLwq5",
  "key32": "5kqbYQDzN2kAd1tFy1R266yJL5uWpPo5zF9PMVU52GCYDwn2y7vYo9WMTtJ9SfXiGwai4QTSXHW75vvH8DVjSjkf",
  "key33": "D1D4TjSTNtC2xhNvcBce8frpeNaqCTthiVu2cdJyH1ARNgo47fEEZ6v8xuAbAXunpiPvyfPgykfPE46V1YMdyVy",
  "key34": "3GpQH5CYPRhgdDwMvKF7NKQhEDzn4Hef2NMgrHYCRNBEo27FP2N52aCw7Cu75uHvmq776ZVe9S5mgDMq1c9SEHBv",
  "key35": "4kGBKACAm3Bx2rBA5AKZ6M39b2G332VYxYEaEojw4AAjfY6LMmioNU7Nxy6tnX88Y3sKDnu25mudGG5RjxvazY4h"
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

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
    "36qM1A9JwMen5aWJrMHrSNnYVb3xpiF7yF619z2oNCQcmEwJek9yAAFcx75a7tcGcrR5yNjcHaK6brg1Z6YYL4Qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YQt7ZAjQyMVKK3jhwufYdkk55zZEzuxYVJiE1JGhze8WJfkaiZsSXAiF1Qnrwi5YqDubzYU9td5e6Cq829axwt",
  "key1": "3apdEwTAz5ypiEF576kBpWaCnLh7t8SShKMnUnRB7SoPEg3WfJjke5hcwE3UDW8oubhseHCVpuqCPKks9GT8HdJU",
  "key2": "Yv5AX37b4ComKwC54Wz9h4wXEoJKVUzgD5qEDqy26rHdcuEqohMDuS4Fj7kkUFJEkVh5JKJJRwnXgd1URJ9fW1X",
  "key3": "2meUx44rtKkmu4WnyiVWhTGoRmabUrbXcupXNaKnTK3AGdkzck371xGM3paYpmBSkBd6ssbdCzsr4YFhwjbKXnWR",
  "key4": "5SL2t9T4GxFojBh6z3HWWBcrMzaKf2iEB9BwY2m1vx5ywDk4e8hp9vEy8orabGuPzXhMJpBVG3U2L9RQf1bTdsVy",
  "key5": "3tGbHfYB18nrBszpHkBXnacoLMBYSEDG9DLEB9PNRUYoHhJjrwreQ2A7kEuHqevy81uExki91ZBXeiAmSuYggsYX",
  "key6": "2PzNSyVkAtdGB9Rfd9yHM8mir8XvrJPopnRuPomgu2iLYFg4bXTuSPC2drjmV1h5dmenqpP5MiGjwon5Cjud69Ai",
  "key7": "3CsbyS9LsVxgW8EUbpaAB12HrNY4mLhGitRhAvYiYGHGt9DcebKe8P7fwf4Lo6WCiM2sDxfBaPbE31v9TPnBQwQ",
  "key8": "27fueGdYsa6y6nRL2WjQyegUMpwJVyPbaURahABeHsp1Wk6GU4o73NuTfSZYm7ssyvNMRGddedwgzA7K3ygWcf1L",
  "key9": "uHKJG1HjZJB8d1vc8DD4svnGpZSCjXnR7L8mGGtoq7J2gaatgaZjDszPESFPwURXcE6Ey1XDT1u6WDqBu9HcXTK",
  "key10": "PDdTHP7ErMrtmv8DfwMYqWd2znEqmmTBSen4GjH3Upre1uGRTVY3W6KzPibMh4WFpPrKxtzBHyt61DSpPUoz7FS",
  "key11": "41ZanCPDZko67PhykjaxeWNoupEXWf7QTpcaQhwHMXz7d4gEvYvuMLwPMjjpnJbvS3SNvTngxqH7PFN7BYV7MpHq",
  "key12": "4rrWhKxBdYBkJ7gUbdj216ZtQ9ZZDV2hAydQPYiehm9SUpwJqa3mKmH3u3aTqczmM3pohEQeo6mEsVhArUvhh1Le",
  "key13": "5uQZiavhmTp8gByiXo6j96odW8r2hMdK8bo6JtP3KjGwwD39R7ySsLFqS9vkyHZAbizv5kDuknHje1AUY8wXkFiX",
  "key14": "4SCvEQwHcpK2DCdRRQEyKabzznRJQMJYZ4yAcWX3R9BxKeL9o3s2Xtm5hhCsd2imox1JUmsBBQmoWj4PJiUwyLno",
  "key15": "2hcybdrgvX3N78VkuwYcQ7b9dQ4VGfoXvphiosxt5GX3K63qqb6k1LA3kx735UuWne9nu6EoLZL3Y6w4NZuk4CNM",
  "key16": "3U9rAVGa4kBRrMgqno3qh8WGWe2HkXUQnvVuQu6rYqZxdfuf5Yb5gxn8UUQWMdFALYJxNEqpjicNnFfMbACixmAS",
  "key17": "CNvjsUNKadUv2Vwxce3GRd9CHukikCuhZ1SjDicsbio6JmHWLUeUvAyeQzYEtriU8tnVdRxedgjUTBfDTuyaxqi",
  "key18": "63aNjnukArm6vYDbNWkNKKkaS1AC9osT4eomitKUb2vpfA3j1zGDQXQAbEwhZRq6oeo8Kp4CvMJD1uTpNyjfMSMh",
  "key19": "4Dn7u9VZtNheTAX2dVDkKdTv6Fx7KQ1eVXsGV5iKcdupWp5ofsgT4QSggPGen6iT4XwxBTbHcU2xRTErPftE72r1",
  "key20": "62cyoHNDCjmGTfDtxbPS7cjVJBGsg4Jzyg2XjsL5NjxKrNZnquCQ2NDGbokrRyMAcRwKDs8bhkAhpRpjyQ8Mp698",
  "key21": "64cvB9fjcGtpUhTkJptkcAyZ9JEe7dovxXcM6xF1E3h7SgpEuEsVAUACYTL7arJrdH12i8J86nis5Mkp5YeVuDsR",
  "key22": "4uisSh2bhoUybUaTRNjdHNzjcH7wdrfbdE185NQGqLr9fJL7q6ZxdmaMPTNpE2UAhocRUjb8qXdwNfNTM3n2PQbX",
  "key23": "5uV4So6FoLjnMuh2D7E7Bddotd1kVkoRCLKuNmKStcXkMVeZEj9AygYFUTnW8i9Sqs9RAGNCQvRGA4YnYkWDMUj1",
  "key24": "2Y1AfcQVdTGxTzyhUWXSSt2WAT8CqqSaZF5TtYumokEfK1eApbFv6bi7EBY9PtSGmmeWyB3LoUz4Yg48beXr4AfW",
  "key25": "5Uw2V4ajEwjfA7UoxstfuhPjDRoBUc68w2w8dG9JtPB9uo8WJuK8cXay9kt5ZAcWVS8FtuNahzDvniad5rzazcp4",
  "key26": "5NpRdzPM5VXBxwhvJoER3KFUTkGbxx2s8o4zVCR6S1pFnKGv6FBLQYeq16Ebjpm87ZZcZMFEqW1L3zad7Jkvxy6B",
  "key27": "5c4rRKa8B9EShVrNGcv32U55hgzfq43nk37SbLC6Qt2w9Nyq5KTuGaHCXM3ipyDDcL3nuxh2yEh4aJVwnjTQHayX",
  "key28": "3sFwoWHSav6RsZVQ6WnMx4nZzcWejnJGHLeing8EMWTdeqCerDCPR3Eb1C2af2BV9sWXNNUkwu88HJmqVQE5fmaA",
  "key29": "2t93shC29DA2TjLo8Ck1ypTecjqsE8Nmb3SWF9NGAgG6fwUDJtrKBwsaD52V7F1Tq2MbtPCqP7Ra878x1WET5aZW",
  "key30": "txgTXsrpmDvEDucJU4AQoC2HHeZbkES6xpEWNU9M3z2Ac69SBgxLg7hLrHH8AUpYATZB66Kmrd6WYDFb6FNtH19",
  "key31": "39yZmuFVLDGAReb2jAanva6btBERWTpbm8xcKRRj2CiMpfQmC8sFgyCSsfPd7WMN2nf1jfEqBCeKsk8aNPV4Ecvo",
  "key32": "4BHzgiiAAZoyZ3BN981vJzUbfUeBKhhVQXt2mfJypurUxQh7Q1VRDocuA9o3m4zva7qabNNLCP7LN1mb9netwmvN",
  "key33": "3JB9iJMVMp8xuN17agQGfvwyKcaUXqx7hAWWw41k6AL7ktRn3aM14ehQECmr5EScoo6dv8hMyYNqAaY7vixAccGu",
  "key34": "21EH6Wf3heQsCtkWmrQnGizWitmCUE8jDtuLvdWqHJgxCPrvrNb3UJpXGcAyqhMt1VhcWckd473Uafjocy3oH55x",
  "key35": "3HKn9bhCYEMCV324spFm75jFEDm5NrdbsXAqn87U5TgEGmiao7gb8o6uV2zzVseiqvwkVGTxakPfC7mkETZZHcWu",
  "key36": "2bhbapNaKac3sfiPtpmUzXyeajFS7dQkQEucNkUMhriNw3mcxxru7y7dPAN4fNBXcvYf3TWXsw8Y3r91g8KY8s3c",
  "key37": "mMLFvJpx5Px41iS5jTmusjaRwafyk2KLmipGNE47bmGbu9wt1GwGk974512pQKVLuJvNqHmwxdsFCJmTa1kREAg",
  "key38": "4bKMdiuT4Y1oLA1nmjZZGek7jFG5Ev7esywL3hSqwhdfTtUbYDh7bnv8GEZkLvDrDzV3Pet8jXerQ7M3giC8wqnr",
  "key39": "3TCyshSai3qXwM8KVPYthL5Gfm8E8ap4qsQvvc6R15TTuMLX97m19c9AnwiNm91a9omFf4wCQGnH68Noa2Y9arQV",
  "key40": "79njxmVc5KKx9iuHsbWdKn1dzwaJWJDQxFLu8mT99rF5p3E2RZhXi9yQMXdzGKeQT4izMMRhb5ZKKTCfiKALRaC"
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

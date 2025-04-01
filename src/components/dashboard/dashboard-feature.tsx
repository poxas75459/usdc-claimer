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
    "37i8FS4x4Wi5GDq8UFtRBEtviRJ3qMQB7VkGHPzifN4LT3svjkkcP3jQtj85W6YmYt7DiDCiZHPQDoW8CTvWYTWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hD6EjhBa7crYyR5z4PH9a9jciCQS9ic3gGxGt6H1mEZfNSAnjz2FezyYkNDKW7y1jMhNqLCCfAicMUWP9N7EqWb",
  "key1": "2QJi9BqJmmRrp4L4ACi2HC1PEm31oHHw9GSZasHrpRvZ4koPxd5jcGcCBkGGir35AALMiNDTLM8W7Dq2GFTAKeK1",
  "key2": "649zZVXX7MJzTiicBYC22kA3AQiRx7MPQUjvsPAPw94CoPPffP3DirxJyHiSFQ9cUZtST5QFAqJe1hfU4MjUFMAh",
  "key3": "4L6Wq3guwdmML58GMYuQQ7R8LNX6WFrJuLAb1jQ7MZGbGPeT1UM1tieAXRYz3EEfPNuJPLdy3gb5YHmSAPrQawnL",
  "key4": "38ntWvaN92ZgVT7YQ5Nkk7wcj5oXgUxfgprb71Lk49tcCvQV3Ex4DbrgxzAQZYDjKu31wtXHxEQyfXadCAAThmBA",
  "key5": "4P5Fjf4KmKCTrcfW2ekdCubifvse5cgqz8FpttwCFamZAUFKhDNL2d7KNWCtQNh8NtGk8Bj84EP5PXnmMj39byPf",
  "key6": "4Hmhbz2JAfUxzaBJg9GewYG4f4CBUPNqaBk14yPRhuMkuaJifF8rwdVb4NwcgjSPwCN2PKx5wF1EJ5YskVp2cUDm",
  "key7": "2J6APdUVYRnMpCgmA4K6zpCNfBK9vjF6H8MrKALxLuunCzRfwhiTUAkszyEcWWNDnjggur13ctpPEFhuHSGgxZE7",
  "key8": "2c9evJPnbU3DSW1zBgTR4tRZZCWzXvphSu9DH8Qu5c6pPsmuxpxU2urTYv2Ri4ZPf8gE8F4Hw4yqeQ3goTnx97vt",
  "key9": "4oDaTGYpDaxGmkJgid11XTCWp6dfNSTAnvNwDxHAeD1sZPkKnBUjfCreMf99rzqKh5xq3fx468JF3wJXvkKGLBMa",
  "key10": "5LTHDpzyHkRM8HAbrtxFx5b2DQNxRHAK3V11tFjxXCEthsWhwmBUpuefg1pjUQUwscW5qtKgcN3Fvvkg6jNvnvLj",
  "key11": "5shptrLoe9As84EHLxNuKkcVcWXRUYspHReFyXiaUrbGubDQtE2imFpXLWNcohtT5f2Aw8rAgp4tFT24Dj8xTqLL",
  "key12": "4ktHEKd2oqZtf33hFTGx4BNKaXiF9doiuwZLURQSRdUTtrYAg3GJysUeU68w7RYDGif671tjJfKJhG8NyS38fxGw",
  "key13": "2NzR4k2awCSWAEZP62S8aXmoKVoZPoRupRo2mGmEPUmW2p74A8nXce8TP6k6FhRzfhXZUBkiAwtaYKuxfZ3wtLuo",
  "key14": "2cpsKU2v2X7dQ9ZgoD7baHWCv5f4aErmhNQzRwrC3zDW1XCLLLWBpyyTu1GUjc8ufvpV33Dyjorkb8Y8ZfaEoKqx",
  "key15": "oV3JQ88f2x3g8hEhBMUqfBEMZi1B5AWLetu411dm5Q2JNSMgnq1JUMj7noHgMQqU5YtdBKyAJe3LqMCmqzioz41",
  "key16": "544hNa4kobbtJXMCcYhhwWzdp7upaKWBaZYUpGj8hXKmwsK64hdhLzFZDN7ed9PU7E6HwBvat1GscaYi7EmA5jE",
  "key17": "28SwkgFVxhXrJootSDuds9b81GCpbPJNwKwQZ4PKo3DQ5AzMC3FrE5dzBodQ4vM2VUuLeJUgQ3S9mbbyaKxkkci4",
  "key18": "5KRQ4sMu6bDD9sJnXqfpDTVtecUk68Xr8MCaPUjnGfFQXsCqjhDHEGvFxsQUh31E4iQzSdFkqLpoctDw1M1rdt5B",
  "key19": "2CUH4var2eD4oQ557Cu3wFRWXHoDZJ9HEJVk1juVDYXzaRHnyE5duMNhsNaksFA9mTm3ZSNiaYQgf7h5u5AwK1Bp",
  "key20": "4QZsXgG8qCS3VMEKDBippTg5n1sLv1DfN9Y7Y8uQ9fpbmnCH3GgshoKgLjhS7cK6TyD6UXFu2j6gqb2enNZgr6GR",
  "key21": "WtErnaWXXmCtAFjSQQ4dW1Rt4YDXYq4vcmVxh82frDUZD8F5ZFgoqiPwjAW4N4kdEj1j488KYbHEnVJU68tRQB6",
  "key22": "3BNqGpeJuyuimdkSDi1iLXk55Z9rZvyEvq6Zvw88WA3W6SsVmMoFZwUNzAyynV5dZt8ZiSXGqW24TBC8hkp3wW3V",
  "key23": "5pbWwYdHq6jSjSXKZkMevr6844kGaNQKRPsmkr2bSXWxid91EVpuyz39CScrqj3hEEvCRrN3q1Ki7JXPcsvgXyQe",
  "key24": "4jRVxFszpGoYieGLWkMD7E6e3Mfaowr7h65GzyanasPejPVyVEjpD6NAYZYVFLxDMJjyHUXnT12Xuy3yX6U9G98N",
  "key25": "5Aiqvs5ziNAnRtD9jSoboiEhbedKzPAdXn4kd3R79kXedmfVybk1apTvK2V8jvL2chn76vvSC14KJr3jgSVRLfDe",
  "key26": "abeDRbc9bLEop9GdWommddtnTtruDtVF9Fquq4wcuhJvVFZzUBAY3oemw4NZEYzRAN2wCKtUWtnYEs1G2zTeF43",
  "key27": "4P9YsxrN6yKpr3Rq229QpebXQkLmvun1bsfUUGVKYFeLk4JFUCMkaq4uigWLbQXj3NKubWyS2QMeq4eQt9pc3WbR",
  "key28": "4gtwPPpGvB8enEx3MLX5okne452oFdgXJ5hevQihFiHdXTpMzebxqYb4TRHaoE9fDPSG2DWvnREU7ZfpuP1kdNvm",
  "key29": "5ay7YGuAANuigQm9cu6oe2GEMvHBDhNqgWfudJpK381D6oMUL1PnSztCP1qu9dh5TCgtKykUZxmw8LpBditjj84o",
  "key30": "2CqsHdnWwC4MoQHpYDR7Wvw3rr9dqW8rLqd8p3pR7RtYRdrDxh4vXHT9VMEaGZcxH7K9JsgdDGxgGDYErrQgahB8",
  "key31": "ToxVd6HptpKvPzDVX2JCZXZ1seEVJWQ1erEfYFSHM4TFgEhkqtB9MxstVeA86dEfNC7NawVTMcgJwn5QGp5K7Ax",
  "key32": "2U4XzKHqxkU8abZnmj5JHaYixsu9TQT2YGsrgwCiB5XhzjsLa1cPkMYdCe67mC78Dss3NsigDy5yZejTcqMf5p9u",
  "key33": "3y6YvXAuwEkWwhHakt32KKqmxJhZrm6sL2mXXJngGwsC42hHc6ojvPoCrbw2iGco7kbhmNcg3WoAri3enoFZoKAa",
  "key34": "2wHAg9EiebR5k1CcjChDrh6KCAUwdTuPJ5mrEztrspEAerDvwRcCCkK9GngG8f7aY3qbGGpsUoXRDMmHHTCKjmRe",
  "key35": "4CpVjc9EJqV3KepHUJnW8p1Wgffbqz67h9mk7MfU9wC42cGsSbPh1DFGybUjp2yzPvLGDzWaEyPWJyBZfYvhUHiG",
  "key36": "fKuTiTNcyHriBMMgcZE14wf4QoCe9Ynbr23iqTQxTDFAhEdqF3UswsENHLD6TH8nvK2rLNexyV5143JapkFbiDo",
  "key37": "3Q44nNKvNG6etcHtHCrSdGVd9LnjbRSAMZza3JLkgt2CmZsSYZEK8Sf3X2cvEry2YziuTHND5rteK4rHo94ULgoC",
  "key38": "ucHR8sLiLSSWQdE4fUtjjsp4zmv8ofj8eXtEAeSnk5szQxVorMYewNtJjuMtyyiWvVYG56dnMHVRAGfJXEVtvQ5",
  "key39": "2Y3LXZsGtaF11PFSPv9xb6b8CA3h1Ds5qB1feCynSYnUGtzvRgkRpJByRzHhyv4WL8QBFvbHLhpPW5hWnikDPdZQ",
  "key40": "31nPJiAQvHo6yKnHpMMr4jPZksDJghwLJ9EuefuJeGyKEbZsifvcMvydWZYJ2JNYmcmVMvmQDmWZQ4XVbT7wmGTH",
  "key41": "zax5vTk2oQhKhmt5dT6b6rmbfMXdZ8NjFFjvX61D85JqZpgyV736xxzFMtQ67MjaHLVTtPpLdMP7bm6mHNcg9JA",
  "key42": "4z7FwoaSjhXTLPx1A8wMpZVXhbxHp3RCERTqzxqEAE718kcncBLNxusTGNRx3t8f6CdfeuvNDskMbXyUXwf8Xsmn",
  "key43": "4BksnsUBAMpecphEqnxY1WvvBkEhLLghLo7ig3UYbUdXne5AVYCmjjE2GusHRptcUBEdZWroHZ49dzb4NFLNP7Bd",
  "key44": "4yNcsQ44jojWdWc7zwSiEgs69NHusviNde4fG7CAJidkY1ewDPimYR6CN5UpjAWQJ8tC3SGg8PCej6yiRGp9mbeP",
  "key45": "63oD2ivpR2cdK9G7HNi4LbyxACpcRhJPbW6FAkhGcFDeLPt6Q91etHD8QgqPjtQSB4zhnYNtn5LcRHhtQ6otgMiK",
  "key46": "4rxMNRXJmcZyYERdcwP2xH7gRCTwwjm8MQx2cZBbNfzLLVYYEkt6P8hWqv3PMPPxToYDQYYe3o3BrU1wMVbtK8Z9"
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

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
    "3FfE1ByFvja6DU7MrMCRaBJoZF9aH9C618md992LAU1hDR5MGPCnv9n17kXcDH5Zd99uBMB6tj1WVzus9Yk5L9Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMVBGW7vt49A267NFGJbqvjcmqoRqJo67oV6mrNGU8S4hSpFEG46QoGmr7qzMYgrp7Xq3ciCyps9tGFm3AmhyJc",
  "key1": "4KiEfXnFE9apE11MHubCLv4sbqyBVJVVoBjkuu7zMxL7zEH3GP8TqVfR4PxWBp4KiTipJhfvkSKAY2U2EccjGjj8",
  "key2": "3MhSBBTxmNPqbh73HBV5qHC8uB1sm3n7deeqXdu2u5uDJxjeqSrsLPmyb8Nx6U7eAppvhBHCqaDnLjLH4zxaCVs",
  "key3": "3H2xdM92fnAWN9x9GEgi87wrM3MiR9xVdRhs1xoLoTC63DDaB9mhpwVn5aotDk5sG5UvEaVmvvzm37tgvyZZj5zx",
  "key4": "4DjYjLnfWNHSdXPyes1TbKKsNt3Cjf8yvMt5VHDgUqqj3DsaQtTp34uZCXL6XTwmLAiAAenvTnVGxh1W6LChyAVD",
  "key5": "51HDP4VD63G7LAR49MuxJe39rxZ8ghb698ZdP4C71iPaxSRdSmEA2QFFmHVefzW7LMV3fDiM9QeE6rSbVM9Bbyue",
  "key6": "4iHE6iAp8Pj5zzchiyzNoR1odwJ1zDD5gzG8YLUZjfarGfqpbyDnHDrpG3E178dgjarm4WL3n5BBbMBDk5VhCNSW",
  "key7": "AWaKuvohGiHW71m5i1zkb23UvufbKPF5PvbQrUVHpHMdjLeXezfLq3RL5MrUy3bU3sX7U7bUoZSxFyswwZLyZda",
  "key8": "3h4Sk68g3L3UAQyURWjk6iUC4rvb2UK4qHrirqPhZT6yCcqFBjBgxuYuK8cw8AJG8J48RP3ZcK4ixfohffQaajBv",
  "key9": "3SPbxhamRGADM6Jvv7z7jWHC1ggCDMaq7hTFMbpAWCvyZCERq7n94ioVZtcBp9XkUjCcumNfu47QLyFLZ99oybWz",
  "key10": "3gu7kscVHfzM7vCrz1zA1mGB7pH8A5K8ZZFLUoebitRzmfVyFTaFGgYjox5TZfbcwGA1jsKWgWDvNLaznsrwb9qd",
  "key11": "3fLspAPpw3SvnL4ia4dffqZ3HQy7ET1wMVPi3k9gNuHXHbnDfEsXecM3LbmDnkTmsSuwgoBZxH8B6Dx4QZ968uDB",
  "key12": "3A1Z3kAVPTwvTZ3YxTXppSk3acRRSthKPFfpbp9Zz9hRtpSQvTC2Xofy9S3sh1rR3S7Lprh4A3DuTvfW3apZN65R",
  "key13": "Eo8CXjkq179T6rkJojQK7MjmG9gpBYf4qhf7qRZ9QVeNqTon55wpKkPyMjcoiiUktuvHQ7z2wwPFqjNiqRikAQn",
  "key14": "63PknkW766BJcQNdkHW8t3tcdi14o4RB3EooS364Lce6467GXLpJsMStkFAx7LY8CVw88SRyjwy85a7EcvgiggnT",
  "key15": "447RrzueTNKHANW7bgWC8uuSHDdGLeGkFbGfhKPGtCSVJw8KVtpMg7KZtaW46Vs1mds21zz3kpPrS7jXYfNUcgnC",
  "key16": "2FgTbozFEp9EyzNc34xz2ppotRDARSZyYwBzxXuK3KSsYSnGeo4F2osvH6DG6kw8XWvn8imNWqM62NNBdVVy7Zhr",
  "key17": "558t63G6JJLivCZqBaYyhSM3b3AAjydcDLmPHwpZUzsL84Ho6UxacAXkuQS79u11JiFZC9mzzEiW8SAKL6W9WdhX",
  "key18": "okFxvv1WHka5MvLvEUjoM1ycFXfAEUf3e6ju1EWPGiczwGvGZT1sWhhcc7RwNJRbyRH8UBXM1UUdHDFc8ActPeA",
  "key19": "nHWN29vpkJyQxz2kcoH9gpGYHFrgbxWA6xDr9dB5kXmcaiG9fGWFNymDDPKNoDei5c6k2dMj3HPsjyYNnFby4YN",
  "key20": "MdLWaLfPiAgS1wzu7E6xFWYifGZPfgwMUYxzg4Xc8fWngzDgK3Z9cJCaVmiYMQZwyhYuwdKS9ESHPrEvuPpNtr6",
  "key21": "rm7Psem7zfM1C1vaf7n5zQTzVEDXsrQkCDzDfbBJQTzKdaDFJvMMFFp7Krtknhr7Do8BUwoJXZKLpPcUK9kqGG4",
  "key22": "2mzszLXstJDZ6by3pus7kJ4QtEUG6dUhMWgqBRbE1qfFJyxgFMvZRWr9it2cWRbhXRyue6d1bfkcZin1s3MxsxgD",
  "key23": "2TtexF894F45BA1WvLfkF6Gax5A3W9ZX3Li5fvqXPhnFtqtRYFQaDmN3KHB8aUcpjounFupBc8W5ogkYe2d9UMdA",
  "key24": "rUUeswYcmTwJu7gxnYHiwqjFp3sT7M3cjAfBXtLiARwwP8TMnFsbk12icn7v1wKQR9pe3SSKFS5gj3FwtveK86b",
  "key25": "1mVApRZ7padJrxp1pb8H1EjmhQm7xE2cB5ddUZXeGWjtL4zokg8YBDw3p8yLJLsq8HLu5DTTv41XszdVKxMGLWk",
  "key26": "59kLyvvrgXDiRpHoCAtdj8YCgqT1gREPAXCR4ACmCgwm3EENFp3cLMTzmnUhHhottPLAWjHspNwzQkqWzBNc8dmb",
  "key27": "5zSobCQaChta1KPPz6wPPDddQjcx1XzvaxoKWup8BFZbhWLWpFidfD8DSodWxpiGK3iYiWBPRQe39m3Dan1cnEsG",
  "key28": "4MqsrUh13bLZWTe8KJFPstvL9mXfxNMGavyzgTYZYqL7uCYL4kHr4HNXDwVaPsGPNtyEho2Msb7XrZ2N6bLQGNSV",
  "key29": "m33AfvyXvvwWULUQqDCVWx3uvWSwhcZfjYHYtKruYecso5bGyDWXJvomfPSzjuyA9nAdmrFnsCZYo22MD4AYm37",
  "key30": "48Ss7exxhz9qEDmyJjPReBRi4d4xv8ieUDkGQM4t36hjhHK8iA8aYmauPy3PKuQ6mWywdrpiF4mEh3L2MSZrZLe4",
  "key31": "3VQMoBLHHkN9ysyRLmr6zne969n9dCDERuc9STd1FmABUnPgufBuvrpQWZstZvX4VwHV6TvH73xEUBVQZx7ZVPJE",
  "key32": "4GJx9ydoNoDBoA2KLGZPNZU4RbR4vTS4hv4uY2AKdYct2dmLg2uktqjeG7fQgvkkGa6VQKYHY5mDC49BDrcZUuSG",
  "key33": "3cdYVuQKi8tkScDyfzQvEpXy1Gm9a2PzHcq3S5HLTNwbdSvCwr7ggZxrHZH5zutHqEAEGwmwT9G6sdEHoPUwpxa3",
  "key34": "WkFeWSaXavAH9HqdeijoLStnW85LpERT6UAXckFxprh1gzHTWhMVZh8Jcetx9V5dA56CU7TVRysPvezckfK83rF",
  "key35": "54Vh88kr4KSYAXhRsrUTx6gsEKN9qMkPooDFAf2jH3eEa48FsjXeVgSnUrcGPBFAQ156rJ9DBhPYTEbLzjS6vziA",
  "key36": "3GC5uNBzPE8k93EWnCMLsU8R1NCbswhq5RHtknssg56YdVEBBoJQnPh2P3mECLuwc15tdEpWpy46Ya5nC2fqGUU8",
  "key37": "4vhZfsJgFeygHLW8duh1XM7GPfckLhY2j3Zsd86ajBiubAqm1Eab3efaHQC9H5hwzM8QJU6gcZQAWHRD3Xja7sUy",
  "key38": "36CtA54cdSg15PFVEoTAV8HjoNwN6yKw9tKSkJ4QY3MQ2f4nQbuXZEjMDRnsDLRMYCnFDNRFEUBggLJKhxWkVyxM",
  "key39": "4WG4pPVv4WiySpXhkGBeTjTk1jpimaHC4minct8oAEnKCFp8zSegNc6wW2JyUugKCSadLuXLY8TApswSzE62EaNR"
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

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
    "4TnKWCTXE9V6xz8FLjxcdFsthowDHr4TH2kL5UXXHBphH6xMaPUHAT1N6od9L4JYeFM4fZpBAwkX1o3PXxcAfRDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vq5MF2sWJuRTNkCr84Uv4zTijM9r7Ep7GUJv8xjYiyTmJWGPMvgSVwvSmhkfcVxdVTvJQfasSLdwGekPCYgxr5N",
  "key1": "5XCKPsVrdJxAAV53TEHyCvcconBdedorfkcgdGzbt4Ljfp2B8FrMBLaeedHbVduwiKmfZaqyUMHMsGteziC16F6S",
  "key2": "2wFP7aWh89LFjAyco6Na9zREPerSqZkb8FoBMWeyrkcPGD3KGDx9EWuRDHuoaQ9uF6S4RYR5aJuzkToVAjJUBP5",
  "key3": "42nzakrmtwhXCjixNpK5VvJbrVx8ueksoiRNRHztE9uhyNoN7cnyANyF7x45vJnSQNUTnjHK22t4Zdj37sQJBQC",
  "key4": "3G1PArREajvWF63zurkKFvq1itSu1hMpg9zwHEHtGjvn8EgMNF4VfmS3SaAXJU6jtvEC1CuhYbC3RaYdCSVNkoqn",
  "key5": "pA3AFaEoXNxrUvECWsniPNS1zqDyAqbAsBNmf9iQKZVmNa177z1VVKEwGxRtnDDMzghZtXV9Wu6r688HkcehvG5",
  "key6": "5FL3UKWgryhkuSBxqRXgNQBwfx1tbYxCPKKFcq2zLttoczRba7hg48mPpzgMNLuhtiKwAAgJazFmvwib3x8k51to",
  "key7": "33z1XZMnZDLCdgjkgfDLCrnyZ7YCCbL221CUvvLW4xRmwDMwJW9u4y2v184ApvygJ1DUViT5kEV7WBSRtdh5dHAV",
  "key8": "sbggPkoSqp6H86ZyStr9u1GtbUQmLziUCgg7M7eqwo6nYGc91rgoXzK9PMer32hJEUek491Ci1ifsY785WA8fYi",
  "key9": "v8RK7j7sEog83hxoB5gwo8ZZj2ExyayHHMvFxpdMvTgTsuxVTRctcjKhuoHQcVEQjdfMpRGCKT7n6yRfsnLpbN2",
  "key10": "2AhAMPYPxVNQnjGUj8kdTRy2sbcVoqat3xZ5GTMCt9sLYsm6fwR1wNwMBqLm6peyJvG3XRCe41rhABE8ZjNQUWsq",
  "key11": "4nV5C8THRFz3VxWDTaLasvDwKTxt5k43GrR7LKdBwLvjUKqg7KJ8XKNKFqM545S49qL6NotTTBAjb6BMAvQMRQWZ",
  "key12": "4JQmH3Ew1NTCEd19RzxVF84tpX27gS8iBu8DQwpawnC7AhuNY5Bvgfrorw8ZEECFthQbkmS7TUBRCoGJBgbaZfGh",
  "key13": "4UqxhM8xCLu2sDYZqvNquQ1hSKB91mxACUoykJEjw7co2TAhrCpyrXPYVLWgnb7Xx1bbNxbE54Jc6eUUGSerMZtm",
  "key14": "4SpBviuDeFhkCDqjNQs9uPiHQzetY1ym8qTXVZ6wPWhCkaoSQRQEHVupuQReQfWPEN9esMRumgvW5SyUymcAJxvN",
  "key15": "RavmXEJz8fhQYT718rqCaujPMdDasBxbY9ibxJbPDUKLdzzUTieyZCcVURDmZMT5SBHdz4FBUhnctUBGQfk8Yjj",
  "key16": "2BA6vrqDW6gnTzL4To38WfG1JmhSgybwYLBCD7WShaYm6Agu572Ferhez3bWX1ARKqGeJMEzB686YdaV1anE6X3Z",
  "key17": "4uB8Z9xLZ8qA3Vg5BiFF1trJ5Z2FuDQcusKjSYYeCDaKBjfMRUPFvHH4ayPBhE5yp6urMbH3pfxG9uYTK48fNHEu",
  "key18": "49hMEhCnVCWjhKvhzf2JmN7eY1MNWVUpradW2vYMSDaTcArXwY4TVPqXySHijDjL49Pp6Z9BWFaEFnraE27MT7X9",
  "key19": "HaDpFLjQKRv9yKzyHUEe9BhLHg9hVDvtXiNnwqzuew19EyvJRgbyRTLusJmyiNPScG9y3kDSKd5qF2634RhtJRj",
  "key20": "2T5kHkEjf3YHkvczeyZ4xKZApnKjmjB5mA84MPZJh1fb2epvHKEpJSPQcxnusDxEG6y6zB8b9VqEVbsSYvSREKcA",
  "key21": "4BNxkdJN7dfBBb1MFH2ybz2yQu8VXqWNmMHSj3SZfMKiWprGK5uVTFdzwjoeymSQYesvNWGjcHax99r5Vu98k7B6",
  "key22": "23Xiq4hwP1sm1GTua5cR22n3CUBAorAkLHaCDwSQWmE3sLaGZ8HRHZGTukYvye4oUFY7C7NJTGQjaRK7Mg66s99h",
  "key23": "5oRgeiW8LLKHbFWk41ynFr2J3Rfx3CSZSzv7dxFqsPbE5xo5BvFvjajtRdiJTdzMjyy36y15Ho4AQ7SFocTBVxsZ",
  "key24": "4MCPzaDWu6vuqiU2Td14FDevZZVfV87hdPDobWsyQbrD5baKWhBWTuXhotaz59oeXHMgD3rCZuMjGGT77MqkkfuQ",
  "key25": "sqZ4oKSochLEoSdcym5zHtKsKWcFb3sviE1Jp79VUVqagb5Mbg9m6FTENmiuFWXQBBk3k9pvEoDms3i7jbeDawf",
  "key26": "2kDi7pjcRi7kUqkx4ww9bcFNYKLuCf63b5UJsSbsYQn8VJuxEGxjgHRz3YJKALBS4Ja4gxVexM7xJJqPpLmZroAi",
  "key27": "2asbCU6iDW2CJpCHcCeHRjDotXi9oiyGpUw8CTcco9LBJBfbjXSPTL5cWTH2rvGJv8s2dqCcd8YEDdRJQo2cguHs",
  "key28": "5CNsz5hTRJuePHrEbRSWrD5Hgyte3H7qUXUAFU9faaDbRaMcmNZmLqDukBV7GjnSM5DnzLyqpccKvZYPKDgcs2j8",
  "key29": "5sSwZ8QUYUCKtnJmPHtZrcqUezCMHsYVdKTynoqXghQzwXCxke3UGFSFVveuWf1Y3WuZenP83HJaSJ8QxMYGdWgc",
  "key30": "5XrpUG2SQoqYxMP9wa7pvGFJsaHnPArhXbpYueRt2Nh8nXmgdTQMMaJPWxhzs16aND5o2UV95APxDUFVp41ysNLV",
  "key31": "5zCnrATTUjdrjcar5rJWrdpYQwPVpJGdNqc49ueaL8un8qBTbAYwWBvn6Rc7Dsx2FMC1HmGhPestFoC12ByRgbR9",
  "key32": "nzZ5kB4BLeWW97BRaHLdEgoGeBY2ifQxdwSGk7WNRZwfCGyrwjRVhodwrfUY5wPMSHo3VTDFo3K1tAkDQNBXmcS",
  "key33": "48Xn8XXQuj1yS73Ba8MAZC9b7Pefu8MdjjVwEpgFhNXNCmeEjBxQkanWHVZ6KwJi76ePTvnZ45K6imyRiSqQZK4M",
  "key34": "344GTKgjJdRdEQYnEhgUZSy6oCuQ4V7cS9DUusu22wnCoQY5qjzsYhZn1eetJuw5gKzMKvo97yZfQZTzeiRYvKw7",
  "key35": "cdPaYWzCtCSsbXid7LMH4XexJnZCN2qVHmUJUc1p1DMfgdveE7PshMqHseh3NYjehqmZxE6p4DdLbZgFin35ScB"
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

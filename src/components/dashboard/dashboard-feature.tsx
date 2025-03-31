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
    "4cNuAi8QA5NQZKASwThm65pXvvJGv2duCv2wfnR7F3F6zrDsQ83qvcH22urTDpGQk4zFphkj3siZZMWFafbi4AjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdZHaPB7VRVGMXZ9tS7SMkyQoBmAoCFUK3FeKPE8aAzBdrdqBmmybZPXxjQFSskDRirPN8BaTxuSS98UJDy65RM",
  "key1": "5aiKTTaLiH7cAyNDKGfbKcBZUt8d1rEccRnKsz7cZpwvCoqfx29pgx5xwkMxaRcHKDXinK5N7aTiLNyVAaahvtqW",
  "key2": "5L7MacRbcudrVyfjD1SNGDkVMhp62NcgRccgHLi28LduNW74kGpz838cUxanm3LnV262S5fv5ZwfVeof7JSmwBMp",
  "key3": "4ZkZ8CKU9eyJWkCJfhN7HZpM6fqzf5kY19yU2wnoKBA6YLXfUdonc29n4S2njuiBaKVQuhqsVng1Achqn6i69wF3",
  "key4": "5g3qbEZkqBHrjZ1eWYkL6kws2NZ8nVAaC6832r7rK7pv1fngk439NCcyhprroccn4zEp7iHJXz8iLkQ3b6Q49CvK",
  "key5": "4VdjfSKA3XqbEGv8DHYCKZ3TTcNEt5fEHujpfwHea8uhq81CawCTkuSnTcG2YRBk75QagzB89yLx5FDtYAVvUsa6",
  "key6": "5Jy96DjVa5HMR7D38pwf2oY9vYwsqXuzLKhhowBjtyqd81u6orWt1oa5SrEmwFMzvE52RyjamrKgczdEgLWYSn1x",
  "key7": "4WrfzrAcrxq9TW1rZShQHcD1dX1e7f5S97wTc8SuKTmtmBmmWpdo1kHRpojDgVkoTHkVBibQPcbUm7W5fNK4RD65",
  "key8": "7qcevxZVerYhgy4p8GFVLZCtMYeyn7TWiYXAFb8RvhZcov7vnWeNQqn1vz8DyZHhxFxzfmGrYJvtu7MXxpvRndc",
  "key9": "4n1ujVqRARAqydFVxhxi7sMb94DC6n4i1WHWbBCTPn2znhz6w5DVBTmnYdjzGAHjGVK8ApPZ7r2dTECHUDGqV1bG",
  "key10": "471J54kCfkBgPHx9EBSNL3HMwQTqLfrTo9gcfVfRnb7dojwhfCX6cybv1Hn9g1XhD7ci1rnyiWVKYHGmRhWNMUKx",
  "key11": "2rCZV6XjNg8Hdk9YBnkjz1qD63Ns7b6PhcvDNtdtRDP7oiQEgL6um2pqEoUnRVG7M18nfSQKp7hnSBPwpCkepgsi",
  "key12": "3CcGmo523TQ3oPskuJv8Y1fCRYGfAW6BxvN2FY8issEw8LqUv1meMb8PP5JBdnthavm1rUGUrcHeeMWULHeEkZQa",
  "key13": "2qnV177EZKa35BRzGUayfkLXNQV9GFEgkNWHK4x6qyHdQpibUw9KNGVAPepsXcG2qfumQHxomucCXdqqRWXttcjw",
  "key14": "FeMeTi4Pfbhr9mypf1eVjCcXNCvHQgbhNyx8dR4Eg3VGYqUM1st4JLt3kURq7tPrRvcF4G5UysRhhs6agtyuk4w",
  "key15": "4vRXJvSXiT7GKxqbvVRKytw6i3SiUNnMSgVZ7AQGcaZ6T3up5btkMoehYF61vg32Qnjsx1ymtqKpEC9eio6z1ibn",
  "key16": "PQRMvYLdgW7bNGDrGnYSyHa1Yv8aEKwauGe4kyFVGSuNL1bbe8MzTpkoegjaoEQyG5AHmjHyU4vta1xcynUtgR8",
  "key17": "4QtSgCvPCPz4R3r5iCWXNzWvortzaAfaz6dtESmo5gRoJ6WahrnBdKELX5jQnXKYiapwGQmkxyhYWHqUuRHSMjqe",
  "key18": "4Yqwz5wiyvDwEunTBseKWdv1sZPoPMrDKstoYpbixN1GULjgx2DTmmf356kpQMmw1PtBwq9hVRbjLC8v5LpZTPRr",
  "key19": "LXxA6mFfWygWwAXC9FAPhsckbJCi9zGhTPnpjhMzVCpghSzU6diVJjbTfeH1sR6FACSrVsVW613ji88wsRDgHMx",
  "key20": "5FABJ8NmyxCB9YHKSm35a1Tc2ukCxBrEXKrCNtHX5B1Vcnnn7rxaSWMVfLsPvLYRMy9M4E8rKhXpxgA4E5gyAADD",
  "key21": "5BVdwKZXPvaB3XbcwbWs4wQjJBik1qNvcJXcgGT9PkQ812KG6LQCPJUVJ3FuJSzBUy5Kqv9x8N1p9fgtTDsCYduu",
  "key22": "eJrLBsyDe534b91GoQHk9xWUDReto8PuCumvchmcdYgqwxwJFvnSvBVqvSAaEv2RyRhHZzMVeywkb9JwJRhdhKo",
  "key23": "4eKTghR3sp7kq8E1SDnCcyKZvdUze6mKs76HwwdcnmKBkiPwhNXFcoaCTyNpTgmjWuRYJ8gNxJSH6Us7Kk9kbZ7H",
  "key24": "5aJaxZWa1nwFw83A8yTywZTgoL4nCbRVaexeP1Hv32aFSGnrNxmggav9tHAvhpdmngktRykY7S7rab5b2wEAf1zW",
  "key25": "3F4UUnnktjykd1RTWxpXJ1V6foidprq3j9vsKMQWzJaFTYUC2bRmxQXbACWa2WD42SKzco3E8HA6LucGScWUNdtr",
  "key26": "2G6qrjHcmRyu9tYU4KA8hbm3gSCNCMvxNdh9ueAcQAgWKygAwsMpXrwkLe6kzwQCJRry3uE7m7opfWQUrbhpxZYY",
  "key27": "DeXZsq6XeAqa6HbRQcsj46X8E6JuSNPpL9BTGNzkuTbTDpAgcY4pbRxw7wbQxXzmKMD2R7iwSShGdKiy4YSXc8Q",
  "key28": "5ZWrQKDHtsxztDk5KVyabss9sexSq5VZZvKWbgDNk8wmYAi5ZbJVibYVyR8fZvdHLgmTa4kzkdwssoJPpw3DksHc",
  "key29": "d2Z3ZzUkWYgeJM7STKXVbTAiswRC6h2bhu2giWvPQMiYGw498pyYQRJMaWE592NWiPoWkMwkAjAuNaWRevPjF5d",
  "key30": "3WVuYgqoaZBDbFMZN2qVgfmQL23ZeLTv15JwxtmTcy7uLAhZd7pxJa1kgMWSAwfE3zosPkESbkNwvd7hYQz8zRGm",
  "key31": "3m6NknJrSHcoTP1D2K87gDT6jh8YbvyAm1gEvQTySJhU7pKjFCvscQthCxHMQcEY4E7xquUz7zLVhJ1mBBGPjEPM",
  "key32": "3FBvo4EjHebte9Fe4EvZMa8HP1cGDdR5TMxrKWAmcAmyZJZ71eEzbERriQS1mJvVmPnwaGzuUYrq7SVmhbs24BF1",
  "key33": "4ad7wppZuMAb4tXEaiSvneaBnhC2dcQ3N43s8V9PG1pDALa9mo6AYuVH7XorVPtXuzbbKU9e58sFffP5NmRbf9xx",
  "key34": "5DUxZBaDXmpj7XMupyGBLffMyBaGxoKoNboVGUS4JuDLc9e5ND6efQyoXVNVxkS9PoHdaYCykiLawsHjAgJtx5ro",
  "key35": "28GGNpVJZVfMcT7MQ9sj13ZRh8Bi5RufpcZJo4pQiEJqVfzHXAYwr3ZpwUruELqkDcDGJM6DqH3k32ruBcmQYoZ6",
  "key36": "3htCA3PaoGiE4tBrFgxdzXfGHoY3cCgqrr65g7GjcvFWGPP2bcDGZSNdDPjKakKwMFwhvTgDrBvbgdxEoCj6paKH",
  "key37": "4jKghf7EvTJeGMtfKiyHimoAHrGfXd3LqdJtCkqXuEAAqQhXQnNHRWeeg2JuaKUnYu1CoVMZdao8zkom36M1uAa1",
  "key38": "Dw85jWLxuVhfEPYs8uZ44qU4fjF1e2UmBGiZZdxYaVVio6EfS7vrPSGeaS8hNJ4VwDipV9Rib1UP6VmD3BLWCKB",
  "key39": "5jBfpsTJGXEChn4QVGXMKouFttFWCR93hPnwywp5RH4EJh8wLcMLfeJPJzYkrygnrd11oFQCpipEa1FCneq2wH2u",
  "key40": "4RmKumDYFi5z4NdsUoVU5NJR9MBnZ1KcB4Woby6ifgdAK1uW3QnmYiMDeV3vtWLNfwmqgHSAAAtHNL1WBkAQjXhg",
  "key41": "5Wv1BcnQVA9ftLn7xGov8g9auQAMjRmKG8TX2fRSKhdj9amgg64hhT8XxnpyJjtutaqWNuAQz11Jay8JcjD18SH9",
  "key42": "RhtEXGJfBvKrFcdxqa6rxSHPNCGk8GCAN9TgegSXQGj8zrzwjUM7YssCHvfyiL4hhZNXgUbCvV1sR2rnoMg11Sc",
  "key43": "2EQMK8wcAJXP88YPpB26qQfkFvo9LT84GwbTPcfCFmy9888v9pHxAdnwMYLd3Hz6bahm6NDavgNJJhshTTywUkcm",
  "key44": "48iwV3JKqApBRVfhUDhbanFcY2hLRtB4LhA479AWMn9UynV9XcSPwqw3K5QuQjAQRJBNpVu3ps9FwUucWQ1p9RmM",
  "key45": "3J9Qy7FohmWd1iZ5D6YncGK5UyiVCL95yM5HL8gpFoh2qqzaZ8YB3ioB5R3mN3NWJchSMGLaM7JvU8ix7Ta7mcqX",
  "key46": "2958nU3KXGH9eGyMcnCGr9A2Vpe7TUerT9GinYZfAgRnuCA3MhVP4JB4Caq6bmhQ97PBeAkWiDgJxNQyhP3cQmYM",
  "key47": "2eZ7giS3gvp769ZYiRBok9bcsV5RB6NtLSgkkpJYvDgr1Z6LUxQXaUyMvwkdcxM7uM4Ba5EhANLXQ3AGcEWoE7JH",
  "key48": "5amh7N5i4EwRJRAgZYtqxA7yaXKDuLKN6ZRYJ24631nwN1F6a67ic78ekaStSWJ9QWwUKru3Rgi3S9sieZkyLNeM",
  "key49": "47PAhkwj5HMxPB5Ys7QMuqvhRY3RTntdPJzzuWDG32w1Hrr5G5m1FtkVb9hUbanpSBoAZnKV3qKcE4pR1YAViVEB"
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

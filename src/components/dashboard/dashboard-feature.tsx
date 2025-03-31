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
    "5u8fyDN4vqty69KLAUgUcyWdQu2WxophFQwGEHVHdGStcNmFsMGj9CaR5NBFbnkAGsJr3Q2M5dxTHAPkBy5R8SYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJ9Spqnm43DQSmvKBgepk9pMDfnw4qTEfBp7y7ibbKzGwL7xuHthZ3DTv4uPHJMpht6VtkxsoaQzD1LdjiFTqmm",
  "key1": "2cVHU6GsSyKeGTY8mgqJMAECsJdRfLJBdacswGfKuV8VT6FoPTz2hSpXU5dXbhpnFtK4KXG9i9Rd1vkQtdSHpKkv",
  "key2": "2WBFA7GoTtFymFxmmeAgbJ6yyiXqqYCH3Xjyf8Sb3XJ8G54Si1TzspGmNQTAC48uMrqA9p8kdAZodY8fdvTCkwwn",
  "key3": "2YFDfBrd2mkfnLTvqMyUkt4iSASuN7RfiJJYpfju3otgPbkDhTZk1ZVSHoF8s1wzffXUYctJSXKFz5brv4vG41Ud",
  "key4": "2Gf3tBrhyBDYS3Ntqn7PfwUQujJRoaCSxJGuGgP2m7gYXKNYE56rskhUuEGosvJcooy11eQ1TeEM7VgcV8ztF4EQ",
  "key5": "3kNwMLU3qeuqKojdABKv9AXPa2FnazGNjPWfA9uK3Yd9bAaywN82utVsLeMJvzy6tZcWNU4RvRhXYvF8buHAaTBg",
  "key6": "39nMQGkyohxMbaw2G6Pjuozz7ANTCC1dKg5YqZ7xEu6Nhf8mxpQ3ZBzJjfHmyKP81fFyzMGbHXjXVZ4fRtrBPpQQ",
  "key7": "2UemanQ7D1GsAqKcEmU5E7ka7zGd6PSfMN1gTxxuMxhhe5EUdJR6JieBP9ybKJQETzN8VYaC4RhKB8JnNL6h2DEz",
  "key8": "2Zt4msyJ9fjCZUJT6uhAfuDJJmmjqbXTJwXegRyYeFxKTkz2ErXWkQV247pyrYPyyGwrZsrp5te3JxJjcgXzdKam",
  "key9": "2L3b74hNwcgjvqAGu9CdFecWFhSPexWyzHC7yzR74prhiKQMaU9qHcvmibZwUHKuY2frjpq6zGChzqji8UZCrzoB",
  "key10": "5TfGLzHDMVcuUDF5NZ8EQ4j1wW4gQkaZyDGzCpQXJapU3VLDUJdvKXM9n9Y4cxi5iRqA7Fk8RtAQCKowQyUUf5kB",
  "key11": "HcY3KPTCmfDWFGzXK28bG7PWAuQFifN1pkFSe2MQbem9ZTUwhRk612q8DTGDD3r1U5ASWPHf8ekSHvmKQk5h6i3",
  "key12": "2RJ97vvEuZjciSRAmhZf2BG9mv3iZH9YF5enyjpmr7eR76sUrBYxKQWTMT7n1XsxRQebiC85WD9L8iFK4DBw5AH8",
  "key13": "36nU138UzNZJkmS98FWdHaGr2WwhGmFwCQucPaiQPFFMnCq9GDWevanRMT97iyKtEt3yKsruaiJ2SCDsehK1R8cq",
  "key14": "yJS3YyucmtMmeRMTgf4ush7vFvDCi9Fg18BEwCUfinHuQpFUpFZVYC2B3FCEX3QU8VFh4ip5xJtGcYsRQ1W9Tux",
  "key15": "4fMdm4569qqpcsKUiM9DEnbAfcE1TAHmKa55chxX7hWobBo66FNzc5JgYxFYExthew2BC7ZFVnCXfjAqzmfDDdPn",
  "key16": "4YKXyWKL9KgQp2r7KcDiJmqbozN5ngD5znGDw8PMk4ZsAaEmrwrmc5CKTZiyXBdPaPT2zticfR9QPCtacQMoDXc2",
  "key17": "3NHwduKwH3dKx9TZP5Z7FkAYw4FP7vxpqVdnpGqt8nbNiyBVU3zP4kQoUz2ZggENj1gucFHaodeR2THrPkWeD1kn",
  "key18": "337jg1jUJnybk8TSuW3YVd74HGGJB5jddbm8iQoqqhepmentnJsX1Eq1T3X5AxFdbFuZzwoupPtuX7eakrhYkeKG",
  "key19": "3TEzk8Y9mqs252iEXh9Q2UvWeJ1a2eNTPogXQ35yuwobSUkLpAdxGwsYLPMZZ6GPEj3omwNTvDM6f1VoxnNXiYV9",
  "key20": "4kWeUvvW77NuxR3UP3eV4L1hDiz3QSJRXRMwz7H8brGgRVMx78WPK8PcXH7mWLDr1hcqZ1YeBqirF3C97DmR8PMP",
  "key21": "5kXUJYNmaAJgjZYvTp9E99cyp5yLwrTfdCft3s2wJ23pyP5BJ9b5F4yYhuWQ4ojjitg9hKJ9m5fFiqPdGkLCzy7i",
  "key22": "2SDqLCQZyELn9P3dc25FrqmXJeKNQgHAgmJ2tfbYcJcar9rU48hsL98EVrykjJd1EMhWoKh1R3ksEep6NMs619a1",
  "key23": "4BZVJbsucPYGQMepYfQzxGKWNWPoq1KyqfErPtHFs1J4r9y9TGykxGtDNTkfqhPY9rSEgrq1MQgzfpDR1SUhbZSe",
  "key24": "G1N7Cu171pYUqsLhYmHe2doUR4i6pWZmRwQZnqumESC7PR8LtQj4ddPMgkEpoZn8oxizitcjqMnSahrbyrR4aMP",
  "key25": "VPt9mgzzea3q4x4jp4d7VwS7mo5anXspdf8Gnt8RGPR1bEBLnhgw7bdmMtd3FvX4MCskqfeRiGV6TEu1jiykv9o",
  "key26": "5JU1mEthiDKXAV6xzd57rTB5gXC3X9ohiTvkK3iqemp1UbY6xR3VcR4j6s3YQME3TPZxn3Hik8SNqLqjdE9SP4ih",
  "key27": "2o4BC359n9WZDMs1d6YZTm3FBw7FkdFLbeLDu4YgfPqHgkiaqT8651Qxj2qDnQQ7AWHvNTVqBf37QVtLPV3Q1SNk",
  "key28": "4jJBDpULmEiBkgubRK2WxwsWpnSjcJznPafmpLoQhEanMaZTuS5F63sStLxqiJyHCXwXrxbu6YcoRoaTXVCcFceg",
  "key29": "3ePJWE1ruK2rouB9HmMgVSdueSRoyEEbwexAFjWo4jpUHgzuTqioJ6N4iuvBj1ZCj7tCdd5JmpqUkLrqY4QKLoUK",
  "key30": "3umxFypSapcrTEKnbuezGSfWjNNjwnDQPBxcB1BMD5DkwJYFEsA9PZ7GLq5Asvs3S5Vma8narTMp6RRqBZVkEEoi",
  "key31": "51xnWkfu6CTkYDaZov34nacZJXZrzS7NY6o1cq6K7WT36afySzWGC6m7S4yUy49kBBxxdhfeoVu9Bn1qaodK6gpw",
  "key32": "2TLw12wAFTwTtFBUzsLiH8a8SUg6JDZfCKbRnL1DxsbR8PKSTWabV5CnQEc7MCEPDDN5Ax6cwPJHTWbMTnnCdv3A"
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

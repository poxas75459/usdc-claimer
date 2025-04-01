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
    "3ByTCJ4PEY33hosrceWGJ6XuRwVKRyknJyowykD1YENDbeLN6S1DKUCP1v5G3khfGoB9hrjtymrzHph3M53d6VXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6241cpriUL4v8hJPJdnntFeS6MPxn9StVa7cDBF9H712wDNkDSSPbSsUV54j5U5jQo35VZ6UYgBDZFSMCKRUef7M",
  "key1": "3GqmJHTM4bnjT9srrZriUtE8kMRTtjBY7ZkirgUmH1y6qCJN5TVnVwx4mQCgKmNKFPvyt7xRtgDUG9TqBRKTypim",
  "key2": "4Sqx8byi8iWw4XEBZPqpwv1ZWfDzGrX6XygV4eKfWzPnREtw4oAywEfoEGna6otZdYmeSnBxpqtnjjADTDGKbGnj",
  "key3": "4tKmVqLNrxbup19jYQUenGiCQB7rLgmPRPUnNt9GfAoUcrE7Q2FFhCTdPfw1f2NqKUAaEnpaMfPcbQX8Xr5BxA6j",
  "key4": "2qymGSQFJxXNcAZtwa7wNoJ4NgSLtGBgEMBirJkyXhqdfsqnccWbyGB5kJePJD5FZx8oHraQPRYsAd71c8wyCQYj",
  "key5": "GVM774oRad3pBmkhUNo4zRbPxq5r1Mhze9gpdtHaY8PhMxkZXgLRiX8gmb3esx3vHPkwKkaYDH8JEWSEJrVLhcS",
  "key6": "pXzUMDFE8RYUTszdFpyx9RRmk7EyGpUpXN9eG1Efd5ZagW2M7b7iPDTTwa4QCnFbEs6zADthJSt3JiiUT8VKqbG",
  "key7": "43wy9uf6DDQ4ZPmHZdGcYme9198tKsXRpVXRCRuth5cURKvFh7WZp5MnBertQiTzXnbJc3EtP1fXfDmAGvWmdsLn",
  "key8": "4vbsj9gdkJHjMpk8F7papNgQsG2fbFEEXwf4PnbVCi4uDd9najUCogBN7Jy1QdjCvkvErxBjM9MqiS1ppjE5ibRm",
  "key9": "4RuHKDV3uJ1fkHowGTnegDv2yVQETypa9K2bTbTmS6RVNdTHmmcWoD8F1awEWhvXi7zDmEcuGKBvBEEP587HBQVZ",
  "key10": "5nt4LoZBjz1DKwdHutc5VwZqNjE5QVNcDhS772V1nWv8uMNcpQdSNZknMmXhu7v4kCJtzAhir6Aeo39CUU8pAXjP",
  "key11": "3pZLcj69MJMRhY7HWrHFXTau6Vsd4E1az6gB6BcLGhoAsTRVcVUWjd2bDLoy8vcZGmCnxZ7WEowwU2AP8kQJcfif",
  "key12": "4H7yqTMwA6XumMMVyTzcSndZ1MtDS3FZ1UJAwq1F4iritWbtbhRkC6iKEZmEoLWnyPQnHBkJgXanhptUcXdZq77j",
  "key13": "Tf2BKMNcfZvx9hCavL2AtVWNHqxeEfcKwDeXaiXAzSu1cpf1yPAEVCA6G2aVxMoCKqiVRc56Ac7vH5Vo52HpQj5",
  "key14": "4oGhM1oJHDZSS6R3gZQwLeBVQQ4v9NL2pxHNwHYkS1TeQU6eYQ4f2uEpYGJ9eeUr2wCDcxHa9aPz2djRyhjcEy6Q",
  "key15": "42ngop86crQVRDfVGBpYFJ7Xkb11bpgktnXAb9sJsaAHGP3rXFQZQAtCSq4bGyK2kggYjosK5jcKNw6W867UhwNL",
  "key16": "2iGyWqEc1kTzMNDETA4Zs8uHXop2QgUirnBrbx3xoasJGgoT68WkCCz5mRLjkpe1nRmxrKNxS2PQV88ivScR7Ly4",
  "key17": "2Xv2UojYJAqSk2PCP8ktM3C7MCtTFxgK9qKHPqG6Mcyue8T7LE1i6MA8oEex7CMKmViKqKs3JQ96wrRCoaXRNCq6",
  "key18": "2RU1xQav1wn7ggdPVhUiCPGvYQEd3Lga9pXqyjkrVj5G2eQqbe7CWg1HMwW4qAS2xugE8Lqb7usP19bjAbHyQ1a9",
  "key19": "3AubdqWEoNHVp2eCPJ27L3XydfaJZesujCLEhekjyeXgpVnd72j68EP9YqzHe8pDu9JRD8CCoEi6wVx4SRPjo2jW",
  "key20": "77hcrzdsFVFfLVdPCZaXQgtvtuTDm2qKjCoH8sUwUXv2DD3GJ4Rt8eV3U2JjYZ3VLthX6iBarHUBpd7yvKWbKvB",
  "key21": "5PFkS5RPXqyuEsgxz8iGfjsoeYaRF4dG5jpL3gYwE1H1eUiEhgTcjXFRvpxzSwNxbyEW4o97kzQKsaDw9ygZsiaj",
  "key22": "2XsH5H3qXovYiNBir5aa5CRRcrkcsJCRcvX2RWKfj63Zj9FT4nUWyh6UP41NDJqurhgwkRUQ4hHy4uvL2CeVLxiA",
  "key23": "5qRWAdeqpQVuQ6UrUQLMtuYUH3j3qZgqrdp2AWvSzsqzpDvccoy3s3DGUnhcQzLwgWRDwfqxFyoUmXdQhbd971A1",
  "key24": "a9QKyVaFcXczbWCPZihUHWu42kRMRBUoFjiuerh5g69Rs1TvhVbHKAwXTAPRKLyk8Tz59Tqtcf9rzR7Dg6AfCZ5",
  "key25": "2DHobZG6S1DJT3tYXR78FuCRY1rS4qGwkBS2LcDk5nd8wwTe8rijtbWrwnWYGAjisBPpKkkHjHqvT2uJQcpVmWr5",
  "key26": "fjDErh4ft1AyCN8ZxoHrNEDZodEQf3BJ7YEFH4qLUDDjEJvwQ4qyyRcFBpQZYNaneDWAGBEbAESqvKwt7SoPeqP",
  "key27": "25eyRdeYfMJuWQJVFXAaVrdxyDjdhPA6oLGsx6HaeyYr9AAtpkfgxY4HZ936sEUaL5EXLs4kTG7dCiaiy3qZBWTD",
  "key28": "5kkfhU4CdyC5Jnj1nh8C19XWhy7xJmmEgbE8TSLhA5HsLKAh9wQdUzWcj1btCecsJeZx89Vqi5EsPVXJZN7KftCS",
  "key29": "38BfXqc5aaKx3K8ccMyhLAHtTU8yLU1W4YANMPF4egiwVP9qm2iZ3e1A1GpxLBP62xRVomDBF4evQGYRhr1QGo67",
  "key30": "38VdoZEh8ZgGQA7EucirRGskunZ2vgHFXP52fi2AtqxQPPL8S3BV5bHzU8a8eCUbC247EPjjnB92EpSph99ufpZe",
  "key31": "3LmYAWsGo2ne38M2xzSd1sCpVBYtUwTUSyvqiUe8DNoj336CQbJjB2wYkY7ikoV5pF6m9P9y2BMyAK3yDShRpWC",
  "key32": "5SZov4J72WYYJQYDjAjCxYmUyHXHqZV4g6y9vJoPSJ4r3P3WroZdxRJ5E2ZJmrWkCJmoWesdJ4Wup9qn6JbWZpKC",
  "key33": "EZe4amsjqNA4fBhm4oSMRJnURo9gqxJqKAms8kaJLgHgiw9G9Wa26CsfU92mEGe7iG8ZYgVbX9JdE48EaEJAEZG",
  "key34": "5NbV4C8ZyrTvF8YQCNtx4auK5LmoQaK7NnGYnKdwNJZ7wYuJcbLoLZkeSBCEAJh9dVZTMtnSt2RLpCdXjorDgbBG",
  "key35": "2EqmcsAXfJSYzasRSSJu2tvUb5MTPuLfW2cjLq3hQNjNMWhi3wkJbaFdMoijgsD5CctgX6pyw8Z9j9DpwM9FMDR",
  "key36": "5kDXjWVeX1vvU2nnJ7DNA7Kxf43eGVcAToqcNpuVobg8xgPkLq6Dt7n46miVN5ywPqRLCUNYRALPhXnWsqfAZDNM",
  "key37": "5mAvz9JX3uTdtJLP7rEG1vmoC4Vy4c2YjFPao9kkteyBA75uRcL3hyd4w1LssFT2gYKYmiarhUYAqan7sHCZ3znp",
  "key38": "2JRbLvjWeJFSJQQmYVhqc7haywsaJoYKQLcB5BY6VDeqMVveiQgSF3QBSYT9Ca8aaLReq71LxRRKiXDWqGZGr15w",
  "key39": "5dNPK1UWJqgkcRZgViXBh9k5RMbsXs6oHZMQDtdbg6RsxZ3BzgTHhaboCPQWYj9pYoeR5PkxZqtrLL51HSyQ3CJP"
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

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
    "4uCXMmagJpPP2pwQ7VMJb9pVhXyMEPNDP19bVzEj3iLxRj3PSP2dTTgppCBxoFHec6EM7E3sB4L5nHWCbQ4HgiLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43G1TuDfi4JFHLB9hzsjngUJDYtA96RejhUmW7m5g2SjqGi6KGQKS66CcTyxGcqVXgxaimkT1ypjqigPeF4eoCPq",
  "key1": "NGaVDxRbyCuvTTcnmVffxYaPphBDFsmkKbxAWGTkjrJpw6bDxLXTWiLKx2JH4jxLF1dfr6PcRr7eoU75PWyMEMb",
  "key2": "4negREMC6eZNdZViUUgJmR48qGFYA8suhYoEoP6Nynvxv3VxGvdvwEykXGGoLxySgKpFztpWmh5KDDaR27EXpxWo",
  "key3": "5abp7wUYhVjEaCMVfYPibgk9gExgnPQM7nEpDXRw2P9QkHk5Yng7BpmNUox2Epncu3jNcwMYCCtVmzfbvwN6FcAw",
  "key4": "5fF5tF9VnSWxXk9tVvxrT812X4GEpbYCYbY6EkswPvVgnQnCaYY9iVa8sACp3jRkpNbkYGDj8WB96cnG2Lh57WM4",
  "key5": "3FDM1XgSRCYNWDzPL69s59c7VKEhwUTsYxfNpN6gzvJUQK1sb8bvNwFnfcG1f54t8zKcrAEyxzjJxwLhNVnhtE5H",
  "key6": "EMyUfGSsSuHAUmHRCrbj7whV4o7Ly7SWLAcafehfSrJcaJtJLwPPG1ADmmvLP5p4sssZxotYmV8pi3KA6VYJmzz",
  "key7": "4zgtjfSLzT8XJNudzbbDrk3MLZ4iMMDndynWQrXh4qW2WDKjNyWbcJBVcTxstyGZ9JUEiiMgvmpDbiCPCY8NEGEu",
  "key8": "3Rf71AYb9QpbPMXQaDhCzHhDGfRSpyxJ1GXon3icUhhoLJWhkypudVX7v7Fy8yLZ9vPs3PxcyeaeDvtNChjGQx8P",
  "key9": "Rbhja78zZbF5vFXT59PdxQpVVfHVz4pqVC6aGwhm4CUeyLR5dm9FgekQsCjAQpDEuZUGRbDfyUnSf97af9FimXp",
  "key10": "5AWdwoBnPh1s5G7Bj5a5K7tAjXsBaQ8WLqYtCtkFjbPKv7ZpPn9JV1G474RBCFgJwfRZaoUpYvNY4m75P2zo8B9W",
  "key11": "QYLqctyY1p17QBMCrfLbmcWCZVB2Ld6mdbXfz6iYAN1WB9AJhM9EXp3TmpQwwyBCBH12xGftXEqLhu87Nm5cGXx",
  "key12": "3EavN7xdMJGaDLk8N9i4FJyKEksLbPP2ZrnVogKwNUsTsEtgLQPwQkGBoMBCfnEJr1mu9LQxd9mceT1BDrjQ6TLP",
  "key13": "23vgcJ7ynwZXVPzm1q6iSLzs989qtNaJUR3WYrS7Hn7QjMqc1KDStwzgRfLa8oPkZWv9GfkYroiMfid5Rd1Dy8AN",
  "key14": "5Esa7Q65uUUZPAiGUX8sLeiXBcFjrKuVqDsiGGdBS53FffZgtusWnnykYmG2kSRrwWNHmkmFEzPRijJ2QUhFH6iV",
  "key15": "QLqw3X8SZypraQ5AhKxy2HrdZSVjrGkwtHKq4RpBZ7wA46M5zXtXrkv7TNSQV1G3PWjcMPDgGcRQix6HViZNJa7",
  "key16": "4mwpurP4VtcAEv1QjoKjVBpCCEaYAxQ4CNSpaJGSv5o8t8u2mUkDLcJWkxufHTqe1DWbHsauL4XxwNo7EKXVx1FB",
  "key17": "3H5MgxWVw4F1mGkD73up7LZ7k4jjnSz3iWi7aDjuJxJTZWnnantGHh2JcTEYPwHgz7XCQsMBxRzVL5beHVp6fRCG",
  "key18": "4RdzDbJ3LdfJatzCaMeP7eWyB8ivNhgcnkBoQWs29Yrc9Gywjjqevk1KXDYnsrcNAip3NAoz3q5DVWLG9ifqGT54",
  "key19": "55fzLQh3tQnB3LoPyxxiKSJSCnmVgUPNwAEz7SNfa1rGkBHJpovY2cCpLQ3GMgmzpHyHAvw5qED5nSEnqpb7xXnc",
  "key20": "5Q5zduesXPcKtjACRoJtkxqovwMoLfWDhMA2AxVndUZHpzY9ddRNSrZVskg4psoUAkZ7fSZPpZ38BnH7DALNv8bn",
  "key21": "YzVNt31XbZhE5MiS5dSFr3noJpfpUwUUNzay68QgaHw5y1aN3McZJqFeuMrKv6n8xuy4icc6qpfPs1TU4uxGfVY",
  "key22": "3MtWZcNYSHsDDDE8uJvZcmT9gv1mmVTVSqdy7gorPEcF2MrjXby3Nx9fCKGXmq851zWPHa4hzscBronTDdHmCf55",
  "key23": "3D4ZX7zCaaBBaih4jmG6w3pjtdS7Pj6DPLdbUQDJLc1ExwCgJa8RM2aubkdtmuNJLmYx49mb2fpW2kS58Kh987oh",
  "key24": "5DFEjp4sYJcFiA1VKHgrFwgmiXTZzm2ua2WhiZ3y4uMCWhFPvoWpRSV7A4M21v5vkrDo9HTAbAdKyPF3WYo3cRjq",
  "key25": "2scFvo3A3jqZTAkeR7iBgKgUUxcW2SAh2466bjEpwff1ng6g2F4HihULNZDUCUhXpbR2oEHQyka7ZyoPLEKkY9qD",
  "key26": "2pCNgTpTYiJbyuUEcjtNvXraP42gHe5jUgSiwTF7qPPGSpeZK6WMjWt4fM33kE4vBRZnrHt3FvtDAagQc4A6wiKQ",
  "key27": "3z8R9Jh1mHEsQVXNxjXjgS2SW241e5w5BVinnBtXJwCS54r3DEGVemxyHSF39eK2tQVw7LNxCz16UPo2cAZDCU4V",
  "key28": "3det7STfX37YUFnxXBS5oJW6zmLjF5cU4CW68zHU4H3KCrWZqPasAaJs5hAUvo8AHw4SVhFA56xqA9AJQ5kFEqwf",
  "key29": "3qYA16dsJV7sPksvW5YU3bq9fgVybExrMXdC5pSUhgD9NbuacFm3Cv6Ntyhk8oCX9cwGx4vG8deUoFv8s3pA6DGF",
  "key30": "ZTs7CtUQMsMWwUQ6qLL7FvmJtyBKWBmmvpGoMUDJ9LaEYsYoupySuia1KFFAsnzbF6pWhKjYcGuHkbDU7C6W87o",
  "key31": "4t5ChzHmBqTjCzDnLjC2JaWuv9zpKmqRE9icAyuXKomAE4hiyZR9mfCUz6oEtAySb8W6hyxs2yzo7SXuRqvThzBK",
  "key32": "4XKSownGEuns6A1cMce9wukKYpQuc5kzEjSbSxtV1esYB3aP4XAfymCfL4MyPGuoNjtrakzDFNmHxqnHTCTr3cy2",
  "key33": "uw4pawEbhBqeg5J3ujqm429yvpWEkHs5SN6cfKRJedXin35babLJhwpHrqMT6TsBzWgH1T3XHE4zsUbKhNXhJS9",
  "key34": "2at2fmtGMdKhsmJP5X38unbjtfXdATHff7hLnLG7GAA8MS1wBr8adkiehpz5ahP2Ggpr6XtJNA2SfvQ73MG6VdCu",
  "key35": "5AJrRZiFbTPt7PEW1NpDFTYir4qtY2pYYpfNFDHRUTzWdEkMqk8L3VLh4JcDMYHfpa5wzWRy6oP2LP4WkNRhT6mQ",
  "key36": "2XDozfdojdfz21UDRnSB71yvaUaJjqtXAkMqcioeQxQi1Ra7FwQ2iXHTt6EA3rxvcy4j2BbhvrTSbJhk9LHfz95D",
  "key37": "2vTqNfmCDAM9hTnwqtiMJW3Um8yVQW1EHDLxuLiDa8YGGoRqG9RZDJdT2q1PA8VCLtSLijokGWCbqJr68BGWFAy1"
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

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
    "3xMmbKmbpZXxcEjit3x8rbsrhSFr8qb9k4UZAo8rAxfJSXsEHMNQpMFGDXo8SQ3xgzUHgVzndHSei97kr6VwNLaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQCfyrPVvxS6gT7ekN5N95aU7yFxs7KLTwVEjbx3E7JfPK1zYqrQGC1KgEqWYcBvhAoqbWjxzNCRbqdZjGvDvSW",
  "key1": "3SgMt6MyKnGyGR2GmnH4GPRtdX65e6k1G1JfjBNddwYTUP3THanaq9hfUk8fJL7Qp2xxmM6ZJAEP2hSYRKxRq73R",
  "key2": "4WbR18U72m16UPG4TN7Vdp4zAuoiLDQeVghxpsk2N77ZViREUeetyhpxCbL2jdh7ZhGEg2P8CcqySUnCddH7uNTr",
  "key3": "2FKjnAi7TKTSminEYsfxkhkwPLWH3mWtfhchoACqdkyfvAFkdx8WziX42whTVe9bja1LDtwbiFoLcuAomAxFsFHd",
  "key4": "3n6vQZBZ6sGHVYr5zPjcd5pboSMLwJuS6sSsJdo82R7ubqBFwqB7CKYZJNcAuYEk4Gs88Dp19i5kw6B4Yu37qLKT",
  "key5": "3x8EWuLLbWP9RnMKzpuq2u97f7LvwwptyFBCgc6tnATC5T165mX9nRWXtDwXRjAxuVaS7bVu5L4p4sWEDxJhqiyG",
  "key6": "2qD8TTJu7F7gL3GLr2hSxxbZXWArkQxZDHbkxAa8Lw1FqwWsTzwsuh7jgJUFKPFNs3ihd3Gjm9RSj1KmfsLNVDaa",
  "key7": "5J5YnJGZD3RFdbEtbkR4mADqQW6zqXyEerzAXv8PLTD3jhz84WhQdEiocfmuo2zqFm4oJBWnUvpc7C1QG5BMxBfL",
  "key8": "3vqaiRkWJMHnqgDHUhktKsN6ArjrTKXXtoate2UeL58ZPL16BnDbzrQdepMEmaWggQvjvc2vHDDJwwDidGaUC1vw",
  "key9": "n1bXBhoSUjHpreFLg2sv7vxu2EGxsRb7zFHQWnRUrsn1kS4Gr54cj4t3C8dfbgNrY4Xj5iFUqHK1JDyjhUVJWRh",
  "key10": "3iQbuYMbQ4aKM6Ei9PE1ChAmPC2yLCEttmDrKnettXAQwngZtJw17RwN4vaeQsUfSab8iuLBWMTXhPg2XqHxkzzu",
  "key11": "3RFWX73CHKJgRwxRJmzGcZbX5y22AM2BbRz8w8SSu3REPpLQkqjerQ2po5hYLPsEUKZPm3k2Mpzw6bL6ABn1kJ2X",
  "key12": "55M41DrJwbQwMoQ2TwAcFxUnaMXtJfTqWFEbZPXBTocD4UDeY9WHmxUB14QuWy9gP4kEP3Aq8q4rY86EaGpAWPTn",
  "key13": "25ePL7NjM2z7XWLG86PNaHnnVqQ2khV1sNDdDaXHf7uKkjE6gfrFdvEPaZXvxQnKQEnwPpgzoKDSkuoBbYk81uzd",
  "key14": "4odHV21zpUgZDbJS8qKMv3QMA5ufZmTcrHKiuumLqXcczYNaUGRPoSRuGxRZQJEWL4imB3fLqMc33KMRF2YoHUpg",
  "key15": "5RZMqKfF4cNKc9LLdw4eBWFhqJUWfFSUfhPnDyXcdEhsQ5wwzYR2yyDLqfi1X2PNDY4CdSirit5Z4kZhq2WoAHVM",
  "key16": "4VQdAhcKQGFrj8worH3DHGjdwkBuSQfEZmKpgMhghMgYwheBCNc5hNfCJuZmUso8k3B2HpCYpREVktdXcEZxhv3",
  "key17": "4mJozp49UurZbxaR217RxDP8BUieUdeJhi2soKa6sL4jDoR1uZWeeRySEDKJkCGY2dMFzCgAqhbfMz9qkNsdWXh7",
  "key18": "GcyfCZebZfhMWoq5CB9HsxHRNfaaBojfqq1BrWD5pdy3GNSVnKyWJyNDZ3fom3FDWxQHtpYAXHkzDPpbEA7Ww2K",
  "key19": "4BazJeTqZ8jPjGuEMzzxPZtWE8eRhisXNV5ghzYg2BPyUXqgzATPTohx2g9EeiyGGrKh9dUUag5TTtj9UmsuQcZR",
  "key20": "4fHwRSf8CfezwyWawqSvUbz3Vn2c8XhoFYCE3S6UR68hnMDJuta4qc5oHU84SNZ9nWNR4GdWRfVLe9TknZKcKG21",
  "key21": "3o3ANRZNYuqq7WL2ubLGjSNbRYt7nvLYdfiTzN2UdAG4k4iv9AnYYa7rQb5Vr6VGu12XEHkKqJVaP62dVMYJ416U",
  "key22": "45qfqtgWL6BYv8jFJ8c7uVh8V8XsFciofQNfd6BbLoCq13nnvJ8JvUcAzeyX1REcGcW8CEEpAnnd3TnUA31DUxpU",
  "key23": "2xgXeBWQ419HkPHffZyF87u8tCVHcCgNPipZLHUDyaSzP8yDEN6k86UCXEFdBSFXQcj8366J5hSrmnA9qDhDPV19",
  "key24": "3dAA3bUdCYmM1FK6Xo5gwBGjif4nxcJF2hradXb5ZyenFEkU4XFE21M9Xyexh1nfJgoZPc8Vx5Ck6GFjrxNBZH8G",
  "key25": "3iuSneVcKALYLoHVY4gYvxCNhLV8g1APE5xkvJk3cags1k9e7SA3NwFgoQGZhMJhVF4m2pBWmt9821XFbfXyZXkf",
  "key26": "5hb5ZBEsg2k43f5o7cWFNaod1x3dHq53Z1HFFiC2SxjwVSP6LeA6iZwbHfmj1zysRQdUAbiE7YRZbwDG3FT6iUKU",
  "key27": "4Sk6hrMNuy8pW7VtvSu5fWqbu626bhvt59Rbux5kPbv7Uv8ydj1gMDsEHAPkuRPp7mMPBQYbn2ZcSUzoAcXLM5FF",
  "key28": "4iQKiEcUEHXa4eDFez4EsdmjyvrbY9NjRUYJH4715NXG67ogjCp4BEv6RJc9xes7iW7wvPQhW4Cz9PcazMFEuWYn",
  "key29": "2X3qnEWRoZLHS4HXdvseQkGtScNYz7kJAknJ7tCx7RnK4kDxinygo4okVoR58USEZaVUcW7Vdwp2gGMzz9PoQgYr",
  "key30": "4vVmcigaCZX7yA85yn9JAse6muVF7ZgwFs2MbDc7ybmNk5gX1WjwdSFWirqBRrhDEsHSYNTUqrRAQw1ZCo4DZWhL",
  "key31": "3gJiBoyTEp6UL4X5PSDjV8iZYHNA9yMS17GiKkvJgSKAa6AyJ699dKaGDW5frUBmejRmK31wqg7JrCBzRswgf8zo",
  "key32": "4baFiURMK2w777UtfAF8UfcmZkvYwQxMnDLPeXZ3CyyXD4wAKKyLvMsvfGJnDDqZYZjgXuGmbDwzCg8mrRVtGPS2",
  "key33": "4X8uPBdBMjM12hNcTK3XoG3ngqn1j54KbQjTFBKJro7HEDWGTaozpgSsffepGo24CgVJ35DCkSJKTUbsdqdGrz9",
  "key34": "2UEN7aVGCsUSb3Wdc2BnqJ1NQwCgEsL6kcJ1wDF3qb2pkDHSN8GsANAzyja5DJCKdwSLWLyAxq8vupQA1UfVQJdy",
  "key35": "4Bb8XTdKtjbEarEGP13kut8vQBGRQ5bFccQay7A7GJwGFt9o2YVne8RbvnLvYbKuGShsmNKcoLmHUWfVicKtbuJG",
  "key36": "uchhiBxPFtAn2iw3iT8KB6GtbTkXWkXrzFREEqNgVQYtNzb6a4XfvcRBoM786DnKQNcy5M9pkg6Y4smyjE8ytxb",
  "key37": "4NZ8hrLq3kNWnbtK594WS6XKy7WRTaUYYj5rXMfpPkJcFeWzNYBbmYwfDq96B4aEPniAMU1pqQ8ujKhL2uQ7xWJE",
  "key38": "5K4uQSF9qG71qRWaRnsQVAuT13eCGRg9icwxwNectoZp5L16gDLovyE8A2TzdK7mLjWq8DAvDDifeJFyKQDXQcnw"
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

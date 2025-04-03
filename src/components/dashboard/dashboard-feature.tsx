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
    "4t6j7G7PoEfjQPuWumMn4J6p5sh2xyfWx6DDfDDPQUb7Ftr1bHxqaBpWVvx5pHGnUvzKoE7Ex45V3xfJifvDNerR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLhPsyVpWog3py1wr4yBb75CST8GtAjkw3LX65Nsim6Ej3C4K3fSqUWJJK4wvaRba8UwL1Cxcfk6GpVNj9bwXXH",
  "key1": "4k8NZysZMN63VcpDmk5LMEzCKRZMFLFndNrrJYXt5ZWwkRJHZyNeiXiSqqBAp2WH46MZnJPxWp1yG6Hm3mCgJzEC",
  "key2": "2KfWqUL6DmrQg7bvN7bMRevoWanREEdFFBaLfxSTRcQFc9zR56osDL9F2BRJVkLVnh2C5fsCHqiYGdP8hBFreVpG",
  "key3": "5xuXeRp6wAC9eQ8c1oYZCAJaH8Z8UGxkeHoK2iuAEC293qx7a7Hmnv6Hh5v4UzD6BH7ceAKkZN6KNogCUPzYCJ6i",
  "key4": "62pk9AJaEZvGhJ45PbK229bBqC26DYkYF5rqtLxJVoraDJYKuQLirAjQRyS4iyUtFUVUQP131bNqKT9m1jaQtyHP",
  "key5": "24NwXbFnky6JQsmWUcTP8xY1aid9yiaZXpAdrQeVfhC8KRyZ37sL3k6Hs12TxxaFhUtoxJKb42T6ircxXKc9rsBA",
  "key6": "5kmUJzRQX5MAxb9nh18JkrL8iqNYd5pTjnnTNEezLo9Jb8PCk8Pf6yViZSeWy9Fgf4KQNexUtWMyoAmq5FGp49q8",
  "key7": "4umoCPfKTY8yUJ1nRrnXrzR5vd2cHE5h2T7uoqLRBa5tpEnWJgKDgeqCL7qRfPjcpySFQnLySSr2AASj64LPWT9Y",
  "key8": "4D4okN3uopiX7W28aVcToKJSah6QJF1Tsr3RLyjhQZXtnJQym4t6H4WhYec7Th2DeTWfTPir5Bbh9Ub6DvdT8ib3",
  "key9": "5bCe5jemm3UDZwp7KD1D2k2jMnKZgK8FoXyWSAYvc1nkrgjhxLpmfpn4vtFyaCUHn9MqQ4rtX4neFhU9JCXRSnjr",
  "key10": "4XNLVqFoPFjcnpcaMbWpynQ532kGYWDirSp1JHS4gFiHWEM5uKyVNJ8UaX82TBNg62viYhdUj39WUE58tFabnp4h",
  "key11": "2sd8njAFVx7Psiq3VxrBeQCXFFhidqmTa1SQKekT82GWizf35yJjdEB1JGTgaEZo3xv3PAc9Fst59x6fyAYNcnss",
  "key12": "38WRVSwZ4DxqHJsRRMMKAYmtMpxr56RJhmfvPcXvARwTsH3Svtz585kBzZtaaCzSRLAwECaQiyrTme3QE6EV1bMT",
  "key13": "BSfuwFqxKfmixxc57WQbPFeYBsDRJ9yHg4Ejdid3ErjeHwvii7LxhGgsbWyWteRJdaopjfe4Xn1Jd5bW2sMBBxh",
  "key14": "Z8thkGWmDM4B58Lt51mK3NtckevXVZyi5RG1tKPvqUBRMt7uEz5afniiwoAPMrvfyEAWGKJr7adC1mRppm7Sj5j",
  "key15": "2PXHEBA9KVCHMhdjpkbhxrs9zC65VC6UkfdpdfcjAU5sPUwPQ5ZL4eHvb2747mHqz5D7VjzhsW4Sm16V6MyBm8jR",
  "key16": "2Qtjq5TYEpx93Kz4ypzRqf5czMLT63DrwqbXDUnP6pLmx1edyE55qtGxiEFru1L5caLsZMVEFwrisEoS7XFc1j53",
  "key17": "4bH6CScoxdKVUJN4qPdox5wFMdfcdK2E5Mv9EM2MnXQQRBZd3GLzVbfwpPuHP1YXmifvC5rpapfFrxgmvhXduZ5n",
  "key18": "5VSZxmLcawdtDiSWNJb3ymrQZRCMURb7EDdfacNpy6yrvi4NQftQcZbKcYYQwk9HSvuX4gvwK7KRrfQP4DWvHKN1",
  "key19": "5qrjHAMCArP15yAxEPDpWfWw9PFAFQWTDxQsbjnuZZmfwxqtRkAymV7EH4ptCPxiUMAhRDFkhj4B6CYFWiCRnwh4",
  "key20": "3JUDhBd3aPWARYMMofiPTPtLtQD2Tb9S5TCDhWSHTQwSNwWLBaGSSExfi4AVANYX7aPD3LxUA3bvGcs7xHx1BRVy",
  "key21": "2SeYQt7RD229XeZfSuqHFCvxqiuox8wmNQgaGicfKNKGcQQnHYQbVvR7Nx2syuk51fDdAiKXcVAJg2GVuvtUEzd9",
  "key22": "2xFadCwmqk7ginCJF33kgpMj2VRntM2u6eniHaKhmuZ82Uhfg1Wts9Gi6XYDXBtewHN9TvZGUmBmSPoAXtTybr9y",
  "key23": "5sLRLUkAxPjqdHVHQSWXsLLZHHP3rL86su2ur9oYX4hzr7khMVxZPf4yAL82WW5KmRvWojCjWKjuwryKYmUN4tpn",
  "key24": "pQdAUpwBZHb4aiDF6ZkEoMsLZU463omJHm2qLvrNjEVQZCtPTkxffEzqk1UEksEePs3nk5UXiu6ABtgZitWiL72",
  "key25": "3fHQjiffaWJHB3z6NwMpSg2yzfxw8Z9LygUQd4uCk1D7ERG6NTpHHQDDmatvrtp5svFA93nPPVpkhAPSCB4YKodS",
  "key26": "4h6CNU1Xw2ipFS46gHLVqasFT1Xku85vkd4U6kd4ycC1tAgHLSMeHgn3Ft5HExrexjqUwpGBMHCAmteFBpz4dpmt",
  "key27": "2dNjNqdHBhiMJTWv6fh8AWNa87ZZAwNUaZiWd45uiwwq4RWvbdSbXVJFN7qARC667NhbRYDiTopGUm55Bshceq4D",
  "key28": "5Zo3ZQqxPXBT4pD2dikWvCk4Wu3qu47kd89XUQiXXrdJcaSmsJeTBJBkKKUG2GMMB7c4KndLpp61NXec7xTrHTgL",
  "key29": "5N5h9JoZLF6wXEtDrL6TAFFE83Nj6SoiFyLZGiGGXznGuaZ7NnEBk7soL9raShZT3uc3TLR1SrmKUp46NoUo5Gj9",
  "key30": "4mYHyTvmScZQQjRRsXg7HwXCAywjVVXyRQt6PJQnQTnBxNqNsfwXbe7F6YjB7PTqi6pDL1k1giByCrzzBzUNze9L",
  "key31": "4g9MfnP2PSXRURdVJFjhx1dcShyEjpQVfbtTFhxNoHoVwgR6mnh6SdtW3uiHBpEZUkyQ3fvnHNQEzGVSZed1JET6",
  "key32": "FJkG6wQbVUdzNzrreVDv1aq6bKnXkCrtbLqG7DfQzBfwLKi2MMvYVDRMK7VFN1PvjftHVryYXW5uVrmvjAjF5ds",
  "key33": "21F8o9QneDXQvqGJbQWgRoiDd2YXBkaN9A2w2KuSbS7NsjkoUTwbk6GzZygRUaHEQ4i8JXVa45aea8vKSH3sR2D5",
  "key34": "2odpeAGjGUziF5MoVNMLx2kde5Tp9JrZHFEpVpdnWw4WKkvmKYj4yxMS79wiAzgKFVA6GcWPxpqVC8sHN2fNuexH",
  "key35": "2o2cNXYmtLhMozsRbuAQBhQnnd5SrKB4259oUGZbiiYKWiE5HpABvTasZGkfxKTaf4T38LqpUoc73NYiUENcb6MR",
  "key36": "4eYWhketm6C9qzjFFqRc5G4fEQ74HpLSa2KRcU4cGVcDAF92nXhG95axzwf7ocApPx86rdwDvDs5dy818fwJUhtW",
  "key37": "3QZWo9y94ZcwmuRwsKsdzj8yh8wiEUwEW2rHy1pKb8mkn47XCguEqEZ4pQbLaM8JbtZE1gyLbNtAVech6HLzkbS9",
  "key38": "31iHmxbemM2j5W4iqrE4HhC8RsCihsDWVKh42rTfm7GTANiWvETTYKEXcPmyrPw4d15qft21maQiweRUw7n7QZde",
  "key39": "3Q3rRL1cfJVRbBKN9z8u2Dz6buXuEtWc1vgz23yixWsiPVZ5KtFmRvp1JE1hrSvaUuFwEmqEYD9WveGJejwz97hp",
  "key40": "2L5Jbh2Zyjzgx78fqw2vUXCgLpDfofgFuvec4k5t5eFohE79LoyEyaMHrH32jxU99LUxRMPyvH5jdNKz7xZC9bCu",
  "key41": "3Az4Z3ooGakt89mYM2SEq8fRebTCGfpavPzUZsmse5fHLGT4mGW6xm48sX65ZRXfguWQga2Si8E3RMzTRb2YkEK3",
  "key42": "629czn6GTR4XZDzhKvcP4hkrjpTjPKNTLwyk3s5qja388FVP9tUnjHM4QivQctq42N2KPz9shmLn4z6HimwWiPxm",
  "key43": "2uoUEDdERRD3kazgz6SosJUajug51tVtA4fiX6XDndSQZEJ1pvTMpAaVwPabNLSPKdEwyud7YjhPYWX1giVDUvgs",
  "key44": "5bXj85VBWrmn34Vnk3fTw7mwdNSGjspyG3SX9DE4AasDLD5nAzwZbcdpJFxb7pHqKFzYyQ62qvUMPR7JLAMReMgX"
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

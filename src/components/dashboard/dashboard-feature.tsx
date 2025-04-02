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
    "2ig6BHF2WZQ7vbSeZ7v2rtaSRnNBn3MBzaFUcUFB13wKoWRxJ8ZaLD96Roq53Mw4CPPXxEerCsyoXHdUM3u54vKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1XUEETXUyRgvmseZusJjES24FUcWF4iBbEakKFgiRr1buLGH5LEdJDHScVamUHmf8FZy97oGbXZptmJsA4p82p",
  "key1": "58PxuHzkkLS88a4DfgrQnafmMXPLyZBDWb2G757tJgQLebqTQ59vvpAA8TMjUrw6xtQmes58qgPKhc1wQ2YnFkTS",
  "key2": "4JUZerEk2oMYFRgmDCVzKuHnKiUtfgCYpJAamaGKe2zSNuRZbaZ5BBtfGtQAeAh3kP5nKebHDn6nFUCf8FVmWiaj",
  "key3": "5FhErgoY5PyYQomj5SuC7BnP2zWqz5MZZf8PVYwUEHU4usV5ySR589tBdCxmEEAEYP5tRG5JTNoXZ7eVbb7wVRkb",
  "key4": "5AzUQjaFzhuk9Ft9X3FEx66C11J6K8BpbD4TJQfWyeKY9HkUwPa3wiRizvreBVU74uQWEuoZ95eYaMjxJkjdLStZ",
  "key5": "65zFXiyaXhWbfnVmjELAgvfnHqunQzZuQi61XDT6W86GbULGyuUFvaa1FEZETsyZJt43VWP8E6BxMLrUsYpPkB8x",
  "key6": "3xASkinkAeVAmrf8AkDqkYWo2PgcYCZ5rm8kYDfotW4rWrX8ZeqA7QhEaSvi6Xty7VLYp6WY5zKJcyjGLP2DrZ5m",
  "key7": "5d9sZVyBxSCF1R8Zp8E6b2fpSCRwQy8bwCxtpFBvLZDdNQWEe7nTBjQzTj7kvsiXR5FKVxHrVers8oymyDKkGCvW",
  "key8": "36F8UxSkjquJXxdhFjzzLZ1imxAHqhW6fngF27FnaA3QhaTWujaxhsECrXvofCFpNArYNvjdqc7gpKxB1kLuopbf",
  "key9": "2ukzrcsgbCUEB3qrdzNDQ8jXWaCmS6SyoQMjqsWYMtUZfcTe7WsGVXtCvAPY45JN69pkKkH6swHHWE3mrG8RoDWC",
  "key10": "37e5zD6m3MZ2JWmaDHgUy1vS62nSjgLC1osaQzDSh4nsL76EsdWnQLKiUZ9BXRXtSD8QLvRKixVNMLGDfUwvcEqs",
  "key11": "4Z6hYMgY2wrv8wFtDcKekgBY6Cdri2A43ju9id8hbvakPkMtPGcxDLqYqrnMuB7nw3iQmkbQRSXGa2WtmAeCxNLq",
  "key12": "3NsV8dk4pgjpsTPKPn2vtCcyY64oSQUM2QrgDHaZEVLhpjopyKxXrEFfQPAnqkfpxErLfW45c9K5nTFB8Fc42AWD",
  "key13": "4KibQvWKUjihaS83ddWQ69ZLqi3kMhnKtxxmHE5cQSsFQjGmqTi4V7nDKiLvwkq3TRgTG8hzJACjA2JFiYk6jYrJ",
  "key14": "2DkxEwbnx4ktwMY4JAaQSWFnpSC4FQsh98MGz2oGC6MnVwBJmiM4aS6oz6ivkPWa81YGiuRQxLq7eWcgDhjgTjhW",
  "key15": "4W5rDsZMSPHffQpbemMGsE59sHAa2B9ZB4DZte2NbBNa6yeA45zBCPg4QXx9v3p3bz9SR4xiwpx6fZMBSN6268Xn",
  "key16": "28gZSMC63PPoDX4xyX62rBHTEV52FcBdN2F7GL115n9uHFAmppsbqRGx8K6R4aqbAh99ivp6W9b39LYxpvRpY3tH",
  "key17": "55HS87WoxXYqQiwD6dypfNpf7STfv5z26BUF3nogFDkbKXASJd5ajuhebYV1NoncGNoYUR7qAcc3n8k8sU3VDkqK",
  "key18": "2ngCmSkXXbiStdQtmEywpEhbUkEo9LeRC4nSJHxdEdNPuvfwXy9Lyryg3G5M5WHKurVCYdPidKvXQsA65QqLi97q",
  "key19": "5dWFx5QKJC5pWLkRLD3QMx79FdBPgfKw6vtTNpFoZCb38oLFJqKndmZk5vW2ZxvJpA45sdpfDxw4aYh77FE5BMba",
  "key20": "2SuiRuSLKbuQoNmcwFdaFKRu13EpDqE5MCVgbLTMAAo16q7KN3nYtghzxePuQV7XEyKksbwfkfRqswPTWqMLrexj",
  "key21": "tubAznzZMe9FSVcrZSEdnSU1rS6Tb7bmeJgn2FBo9oKFVk4idhFJ37SR9mzWCvWt2DJcVC6JnfmDDQ2KX6LA55L",
  "key22": "2nNbvm5Gw3YPFRfh8SQ6svez1qujv9QxPGzWA2RPtqREDXQ1WDGVALFiEekKwFZDAKtrB9WmGPHqJKC9Hi9PyafZ",
  "key23": "4YgupuSiFYWD5b9mLMnZdzA1f1aEyzFvpKB9fShf6Bqd7MwGD2BF9AUmi5SzU6T1JGvfwc2LYGUt3JgHrBZ1mUJw",
  "key24": "5NpbqNM2U1spvndzAq6wdJDF4Woo3nKniE8gNSqJ9KADTt9akdQS2SNEMCM1N6CMAZRqXd7XosCUKzCsNcHZN4Kr",
  "key25": "2JrWPGoL658BMwjjAecsm84W4bt8zhN95vhNXnnTa5SSfRpL8V7W224eXK8TTYbxzMqt83TZKXFoCxRwVaifeXEd",
  "key26": "3BDkvbu9nPybDK7BbFja2iSmi1M2Hf8oSsFryrEAorNCtiam86LXy69QP1UQxeaXLro4cLfYuR316kP4yr937uoq",
  "key27": "614fFoEBoejRPSrr6QhXzmotejHokxbyQGFLJMsZVE3ukjsaMPmFwYmeT3CrJd7FKyQFR3XArphUapt3nm4E9Y1h",
  "key28": "4U2wqsFXCb2tvD2SWj9xJTUVkrG8RebbTFdHEuaSNvsSYTuFAQvNrUQnFhvyqVhdNB7Yu1FLtqpisfHuvfc78V7s",
  "key29": "4rrHdPgyrwNBB9t5nit8PiFAQYAn1wRG5aNBXU1bXFi1nYwsnNXeAQnPpXmT79bsii7BXRKjwFrxm9MXJ5wZTZj",
  "key30": "2zWZrezviLRxXXGwYF5hS9fsYA35yPx51BNvu2w513WD83BGu1Dof896gzRytP14h6VqufptdnwdAfZRNqmjP4e7",
  "key31": "3TRZGL7HXR2TxHMkLgbvxeZw4v4Z61WZGbXSRGCsaeeoKgzQYriyyFsFoPMU1SrNQiMxphJd73FYgChDpXb885Xm",
  "key32": "XiCbqwfT5D2dG726WzSaqGp6r1Y23qhSu3vpcFZ7vbMc3ERh2QNTm7NiG4wxvpu5LyfaShogDF83dHeo1H2TiMX",
  "key33": "3GZojHdLVPLfiSwA13zAGQAmdVUJ2mDwPSgPRjxv52WPL42UgKCdavWP7CHFUQYH3XR1kREf2zcEsfH6PG7fXpqo",
  "key34": "3SEMJ7nD2cVbFwA9xGGJfFUz2AFuRiQWiKdbEoxbzUrfhrCg33iX78TggcpyuRmsu5gxDArv3DdnhUYAq1J7hD5X",
  "key35": "3KDqH5EfpSH2e9N3gXXe9wppxmZbpycECk1WFz1qPJemJPMNx6APEXKEELzjSE2LcamKyVBjzdRX5bBr1D9ZdjP8",
  "key36": "2y6oFJksV1qrwGVd5iaxBtniAu5r8S4hZ3Kw2VZBuNc8tEtsBY9HjtUNArwsakLo9wDw5btvqQdhQZ5XETz8VNLM",
  "key37": "5dAchuieSr7D3XbZhMmCjuGUcnWDk73jEWvSrXHddUmk2XxPi7cRZgGdYKZSDsonKwPkGoXa9crA6AtkcR77QWCL",
  "key38": "smSnwfHKMzy8eqQgcyMSNNwSTF99fawRCahrsR9oxQ5HzbTFvBRzYwUxpyVLwohGtHvheKCDp3un1kbBnYdPaXj",
  "key39": "42h38mfJFuLtSGkYZT2X2V6Wet6kv8fybWcBtCQ2SQ4DQbw8j5LNGbnp1kLHDUreVBQmqBRz9rMgaKqVipxXW5z1",
  "key40": "4XWhGnWhaqBUyS6j8c4wJmHA8JwSGio1K3XsPH2BjB3W1tntRpJ5yp1zoQ9mAiyNiSyq68KTBHmzjcwtjhC8aumm",
  "key41": "5T6JdsWXndtr9xgKDfBMKwTVt3EZT46RhM8rF8Q2bhBejDKYe35n5w9zZkbfSGrPfDLqrgsEH53BqgJ3CmjnDJy4"
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

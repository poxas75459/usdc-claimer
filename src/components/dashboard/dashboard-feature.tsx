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
    "4ZEm5ZcDL1eJtgVbQ2qeVocetgzxzXzRnPAX8MuqcecpTEVv2LnbRmoih47Dct4kYbpPSFr46AcrnzmmN16i3YSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UcxMSVmkJ4ziBAWapryEQRPwhTRQSYaGPhQDC1Nw2cSKKKAc5H8aiNk57ybGtzwAf4ENfRxLgRWGd2NuoyVdJPu",
  "key1": "3yquAruSyBuboDYG4hrp5h9vAu8jirgmAKcfMCfhyd75CoNKyqorMFeigQWtoD7TrRHxWqqsPXNsWn26BF87DQCu",
  "key2": "61jnF7SzKdmba1MBTeSCdBwawoAEDDjL8tcJBcJ182xGhJSHw2Wi7sNmkzyqYaddCp7iVY1K9yzpD4nh5dWfAxY6",
  "key3": "2BhZr8fa9Tuysd8k2cWZxYhRSeZfYBLxnBGijBUKm737GFV3Cm2YMKU51MxHgN2AwhzTyGhPiJmTEQM3JzH8kMZP",
  "key4": "5cWLTZNHaQ7C8aMT45bkfN7W9LETcJKDEo2WV2zF7tLkPnSjXo8w65ENHo9MCh8meTp8H4BRfNJTxDqi3yeVsGiK",
  "key5": "2BrBRsor8EVE7xb2CTccQq99DstEcWvkMdPya4SY6FmZPtMRNaTgGGxJz3sV2FGuUkk7ETvcsP2z1D2ahS1z18iV",
  "key6": "4VPDYaMdFM8qTeL3ybu64JeqkKw82pEjfiHKVv1kPLouvCD4EcgBwr6v2SXkj8eRCe8nimcBPXyPmC2aajkAotgk",
  "key7": "4PqqELDxhTwRG139whXDJbwpqb8h9ixWJbc6NFrcAjrX9CmCgxGSeg2GXU4untCg5WwtiuvSEaoDGHKe1p5YND81",
  "key8": "4UbyJ41CbZPbzaNRbSxhkj2y9fRPrYHdbZCRWVuCX8Y7CxcodYGQ43UqWyDc7Vaq8WnELu4N7EgR3VxpvcCNj4mF",
  "key9": "22zC2UqKCjkNUmxYJ2XcrxYJttyHQ2u5AHXhD61NzxVA477oZqMJsUvLSs5dcyMpDXmkhKjzGDQV5eUcPvZnw2rw",
  "key10": "3efAUWnKKMyPjnQT18wS44rUxoQADs2YBAFDt7TCrimbVj1x2cPMQGg7jJB2NH4budjydhfxtMLaReJwC6DVXgwb",
  "key11": "4E39LxyiJ777JDv4d7qLSDW7J9sEuq9TPSsnST2xEiTZ3V8p1Xoufaa3GBFBnTTipe8cvXNxKHZeMa1Xz5aoUUG1",
  "key12": "3Yfe5m4QTLgSfMqVPdsJasHN3DidfpoW9eksPwpd5U25TE31SZXbesHyXqKj9NtC2kqYo7c6X2kYCNbkaxfPZRTm",
  "key13": "4dj9xKcEcoLvhLB9QTiBJR4usu3KNN2WpDhbTixdDH9Fx3GJgL3VsKPtmVY9Cww6c8x213WBAX8xUqUdX4ADd1wz",
  "key14": "VLdhQB7n8PqtKwVxQSdn6Xoqa5WAdfsrJa8i95yXXLpbdBdoABBcn31HkX3T8bnAGVrhDZc2wBwvmTXhHeBMZQs",
  "key15": "2kMWTdLkwA3RhSNi9k4hNLnGM1SwHYhr9hQAtYe2bEjzi2nutWGtgecH7Fmb2SSsoBiSUi31gVBofwXHFzJodzCQ",
  "key16": "31BZ7Bj8xbSexHUR8MM8jYbsDWpmEyox4iZoBihLVdy6enKzwiTWFSpbgw6EmraYFxcbSLTzLJ6mrhYc9KSMvLfL",
  "key17": "4Vkb35eb9192CtUjWhG6H2VMLG81smgPpySNnkYCf5YCDQSpbGytrC66enLTT9kuBxwxeuCiypwDgNCLpcVqnAB2",
  "key18": "JS4NceyBwdsTz5YQxAGeoZspMGKKbVLZNY88wqNWwvpZLMh9RrAJMoz1jvwJdB2NHx4AXxwksXc5HikiHuPAWng",
  "key19": "5yR2CbQSLkw3up2E3u282G2j8bYSajWkXVvthoqs8rBDXoxxSy1geS9kaGdKsV3NzeoMgrSKugYeztsNx2g7mDxg",
  "key20": "vaKgqMfQVnEwDzpgfnXp6bNBX77HwUcjBJ8YoQGnwM4ohB3XVvoJDWRdYkNygPeBahfKGGRu8RxW2AUhCnAYEt9",
  "key21": "3NxNvSScRahpHn1VHZsRPGVEuY1mU3tNsN4jLihwo6T6N24UC9jqnkbQ1p8RM6sMXnQ7VvKSKoeyyNENWY43ZJmx",
  "key22": "Dsw6Cia78YB2VPRmkdPswvKcerz23kGpv4p6QZ9Cms97t33taogFLz9Nw8LZP78FsdZRDpsBu1k1mqmnsg4RmrY",
  "key23": "4ub4fsuDpKVvfCfdh1YmKQx4Z4gA2AedoHMiunfstFksjYdszC9Q5S32ub4fP1Ww4SFMwdTL61dCqNfbnFWLnLVk",
  "key24": "2ZZ3X3U8eL5cwWpdbqq4rKXYGDRLpn2RuX3onApeySpeEgDxiTXUxRK6dMavu2FES6xu6ERWqSMaMvUfzN7fjEJj",
  "key25": "WKyhMhWEtH36BpMWPtEenENWFUVKBahYod9aHwvM3ZBwbmb6z1TxYDmETWrTkFpsVF79BvNXbFY6DAPiS1xLUuu",
  "key26": "34XvCUretjVM8ijvMqahqVSevf3GPymR6rJsn2YbaySQEuhRaq73pe6VHnjp2QXowFNjerwrnLiwNXBEBmYEkopU",
  "key27": "rNsF3YgjPDd1aMvrPWrBTAPc78ZD2eLm5CFpczJ7SXe7g7o4Fq2vwiVcAisfhf1HFLDkwbvfcFszj7V8FTSubyu",
  "key28": "4QXzWMpzqdK11ithKaCiNW6SKyDmDrJF5vxtMbxC6a4joQnL1eaWrEcFU26a9hd99nMKtrdFvuveoi1akgaa71qG",
  "key29": "4fajCFAYovsQc1LxdzSq7V4YykisEY2nWfajZKZCUzjscvhzUzm5sFbaHuvBiEc3QVjCre5yZnSnqJH69rhY1pd",
  "key30": "ZqjsPaABCKdxZxHm4vnsj8o7kwZxHSk2znLT3zed1bUpbFKjeEqdFqFWf9LGqS663DMEnmCnXoVtrqurf623efs",
  "key31": "3AFXRJN4JZjLKrwHUvjq8T81afHBwQg18Hzhsu995GAbgSH95jbyMrwPiTVh4NcNKMdmxDfVk3tVE4ozkbk77C3H",
  "key32": "oCiSKVMHcCFxFK1AoXG834LdjDzPUP8uCKL4r1qJnkDEB7efB6EZEwkwqS8MzABYJmLXqtKQzhmy8S2JZrSqCYh",
  "key33": "2fQXwUkik5LGByyhq7ENJTJ5quZEJ3jJywi94RT2SFkgEtUQcr3haikQkqqZaiyqVMJRsFo1LBB3EM4XfVUm9Gyb"
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

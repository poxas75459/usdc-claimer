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
    "4ECjFUaw7t4dC3uz8ZT9t1KNkGrCpPfAtzDTQyk6YJdV6fA1oF47kTeTemvkoyU7kbjLUwbR3cDCxrpCE9jwAPA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3voyQ8xqBajSYkNmeo198btdmHN2yuEFhkrKqLmu9qHqqFZkmrUSW4v9TQ63Z6kFnJVKNEyuMAFcGZ6ingQua8nd",
  "key1": "5YogJp45Ye75qfP9UrrhusirqW23cmpsRNQW99SThtxysYXUtkbqXt6BojZQ433QCuzkuHM8mzpsPSerHqhSamSf",
  "key2": "4xM9d2JkmfejkCKUgZJa7pYwPG7ovXwa9dTQYGei469CMVLhPT2t5X5QnKRP6N5z2TrF4Hfg1zSgsCN17jLWKCXJ",
  "key3": "BERHtE582WscUN5Wax2vfuU27PKS9kdHxX1ZFe76obBm9eH6ykmGQ84NFkgLeVVwAtG938oaYAWVX7EnGEkkhnn",
  "key4": "FFvLYXZUbLF2ajenbmzaYPuefDELYUzig3L2yCaE6X6cZocEDr3QyxKGPPvYNX9LSAHJ8Z5w3idCzqWJdSj31Av",
  "key5": "2qXftDDc9fR3UXr7iGmNe3PvaeDW5kG9i9FFnzSxsNUwGmqhJTVk7qfkfpYCn4ScMVxZm3m5t36KqUGEqfBPtLdR",
  "key6": "4iRApBDxEwkbWw6MJhKfKFh7au7RJ8fiuVEUf4L1rWA2UvSBcxtitJdYfFia9wd4pQuKmRgxshSiEDN45ypLLgGt",
  "key7": "3jP14th8WwXuvMUMJoHwUixZfzcWJUzk48AauRjPg4f1GfeJDnwfa5kzF8oN1pmCs5w9s7twPxYVbuequktLA3UX",
  "key8": "2cRnKswAV4DbZHkwd76vf3M4zDRVR1i6rsHzqzMmXB6beDNxBw6UL6KZDSG2tLx7qPZasoJ95gEHeNQPphrNL7dW",
  "key9": "5QyjcMeCbmVB9G222i2ykeChcS75SvgdFkBwEQ4N9W8zaG4WiUQU8z5R8jNe8kgv8po5xYeen2CGs1f3oenJizYp",
  "key10": "42gaahLGN8nCzbzJ6rU42Fyg7W51cyUYHeAYgXd2wNyjA65UxYLtuJTz1BcN8TxQBLS1sAkTEC6NkyRSU1Skwri5",
  "key11": "2J5j8gQft9Ec2bfgKmHM4UUfxQrEpJfGyYmjf56coabkcdvrQTc1iPv75Zv6hw9JcoXVdxfSphzaubj5rBSEEhxj",
  "key12": "2ypcMBWbyxrBLFuYpgimYfiQXzivtMr6hbPQaVP6i3gK1ujWXpG4WraxKX3J1GHodEuxQU7VmZRZrjkMEC6vghte",
  "key13": "34Sj7y8D31H8vWdqunVtbX1SnrSaQ6FVCAsQ23akdnoVxdhNmevxk189SHCXogmzoLeqVPvzGnqyyC1xDayCX8AQ",
  "key14": "67msQDNpbmHjwLJKpp3mFffAqqzzP9n681qEioQoNeJeY4J46r8hfVnSXbWH6xga5fja5QmjYmUJaRCmNa4Svnwz",
  "key15": "3TSmXLyYPbPLxriedCRKouRmLjWdL5VTTPW87LKXgqWoHeW7sAUjMLojdp315Wqd4csSnq25pmEfnRVD647MtD9q",
  "key16": "45QB6Rvid7sN79W59sXH93rpivGXyEUJWmrVtzVNWdMokaQirVWYiGBxVYpV6mY6DVPwq5iFnXufpm5VU6ahF5zb",
  "key17": "rsgjUKFgzJrqp88cTYfrD1F3LLaXvqCjeaFikY19giBDgVmMHZ98ozJfMwAwvJkggbEKkeDu7kdjcHLe17fbWTS",
  "key18": "AUhUaKBuC9FUcMZtDFi7TCyAqQzYDa32bKnLdLzpNDPavJViKmzVNYoz7nWzWU3ULd3kPiSJpT7tXBYUHVp2AkX",
  "key19": "3Em1vrfPyERa63v7k77uxjXMLXA2LPyNb6AJhhHnNmtSU9tUzziHf5z62ej8bSyYisJCZRHxkSfNXCC8ZFSpBnSc",
  "key20": "4vw5awDoQiJHSazCSDWi7he4UKwncx52jRoxdLFN8DAD7E7vHaNste4CPs923s9k3EfaipkNoUJg8DnHSApNXYKV",
  "key21": "3cre6ZpoBd1CxhdPDqGVnLhjzNwy52NcmgPsWKwd5zmK4QVM3iGL6otZRWphDQGuNfbgdZ1cHp6sZFT92aB819A9",
  "key22": "5nraATSx3x6XPdscLpFUyFRLnLxVMi9ucmU64U12dTw2KMz8RgZQTfqNu1ehHqu3L6yT5jSEQ9ei9SxKTeP9ozHE",
  "key23": "2soPPHM8itLBXocQ1gsvXxtYHzr6NfGtwyyaBSPJbVz5WzFEu9RzQ7VB6HEEyDFEtihmeTUVqPJxX7pA96TAFpYr",
  "key24": "iBTqThMrD4RgJ4XyVKigkTJts7rP68i9dYfUix7uraGaMRxSiUzJRvWAvA936fR5EaymGr4UftfKJEVapzg1DQN",
  "key25": "22gWfusbAq1LttKVNNiDGuDDTmsVS6GQPogX3s6jMkDgMnWXPoRsuVaMV6ZsWXM7beHCfNN84Zdc7rTCcHZQytRR",
  "key26": "4PD4p2s9wZZAXTkDGZQvdxTLJjFAzmqdVeh555WUEcsmEN7hkwNhcHVJFx4sDga81omiXRCnJLoYwpBq1mL2MXw3",
  "key27": "4XfXCMDAoqzZXcCNdRcM7VwaCUyMmfHp8LFwFHZ3tbzWdgdwnsrmm1xgLPTppzPV5G6GEn48UmsqLhPuYLji8pfG",
  "key28": "4TqBAMHJaM57EGCKiLFCWYffZZSqbjHRVC84Qi6xihzji6qPTkfLNgNyUP6DmF9qsSBExHPrP7Ze8eFtN3CyAMWa"
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

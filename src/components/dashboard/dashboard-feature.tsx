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
    "2hgAoxMH9ieKdJ4sKhAmZY2J9Uph1WbrYcW3pWDZDfcxgWcyuAju4Jxbf2g64Wo2BmGHxjqeu8kA72gTaRV8Hkr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gEmYaZtw6YPWpxFvso7eKsXCPmNtXD4Mt4pUyDgmMvDhoy6uQqt9m6J8y6Q8i4tvhRYTnsKWaPsTcobwwKVyDj",
  "key1": "26kEHNaWHngS8Mn46g4TzWM2TBx7qWYc1yu4i7KXh9KypXHiuhFBfcfhH5MHuQ8iGQigPkR9i6W9Fu9XG4ATxrSH",
  "key2": "51oLg4UZTGRJ6auNG6cAq2sLcUfUgTwM8FAurTU3ZRcJjFM1VMA3rxj6ZvswuE11pwWVf9XEByqpyCSvp62ee3cx",
  "key3": "4dWAVrsUYNUKwK1oCTUaaYJhtVhJmPrzBBrWooPoSaeqsgpYkrgDXR2FgWSkyaymm8P9VbMqAxAFw8fTdVzRLTt6",
  "key4": "4eHnQsPyyz3f6vXJ2meVL4C6EYQnAvzt6Gr8DDL6ruYwsAkbqcSiRsZkwXg9ZxyFgbFNtWmqsvXb6w2imR2HhTBz",
  "key5": "3AWbtWiEySH39dtFh3S3ngPnFTcWgUQZ9bMfSKkzBj8iCoQgUCAUbix6Ddqv6GCbkgstDoQE9HS3bzk9ZuUXFLMo",
  "key6": "2dkiUMkjb7AjthTHqMPxdYTvRst1YmieMnadM1LoWvSA5vXs6yMsSGKNXcUE84TQX4J1PYjUW56ie28zL6fa5eW3",
  "key7": "4YJmvPNcSRr6VBh8uCANKKzBBYcZNYrgFuwJMRNCJUiiZL6MebhYYv47bQjnE8bKJPGhhUxJQLZQtzLLnKkeZHe5",
  "key8": "jacZAjCiwg8WnNbsUvgm7qqCQai1Gp4R5a1yg2Z8yJBbL9LJGaWKgxPGprxhVvG59xCN9akd1TniSyRGHt8JUUJ",
  "key9": "238fxrrm9WKir98KLzCLZeprTNFyRejq8JuD8eEknjcZneifMEcs2PWBWsBXYcHTALLbTBhgswPWoRJo11vWbwAJ",
  "key10": "3yYgiBDRhCc92vqVT9VNrCvqYjivfWP1M4r1EGvxxNHaQ25Exto97kVPDFXEAxnQ1EUDJRqZA1eTuL99KLmRcUwa",
  "key11": "LytM5w6kSSKEk66MVaT4aQnSv979nWTLFDxagLvWPDHMSzHTAV2kR6QT1swvEkR9AEKSavGBAt35BctzpL73PZL",
  "key12": "4u1TkocQruJacv7nKcdznfxtbmbDYGoDtbZi6Rmy3VdAvhd1drkoBvxR19jMihdg8u79xyTAS1RQ4bgPWmjLHxdu",
  "key13": "4UReXQJpweed8Gpg6aGDLvGdyZDMd1K6Sp4PhhcXUsgPSZRipr4PLfYP97gNEJ7Bv3X2Yy5TE2PPi2czc1xKZHhW",
  "key14": "3RReXUg1S28JLmDZDib5bwPjFFZ33SYnP23BEGa7zSqMofoB6cC5zm4wTTgXqLFxhUeQjoLNSsfQZahunY1C8hwA",
  "key15": "5d9dtGpRz8b6MvJakAojBnK92suv7xXUE11RHePN45zWoCE6U8XLF4KHgKzhJeEvixCKab4WGZSxX6nHRvyAkZcd",
  "key16": "yPaq1pqxLf6g5Szt8KzYQDPPY4ERfUHPxxcizJBEkSkqGuo3AvsFW3DGVwDEipvNm9G9At1CiunT7zcQ4bCaESH",
  "key17": "5bH8Hq1WmExshvNwv43UZz7bqv2gKcAWpDAzCgoojqkxanLhKroyRoK1Jv9Ed6R3Xx5eQGFnHv8P1Dz5QGevk8GL",
  "key18": "xskQy4F9EZrsupPY8YqeiroqfPwTLSSbQQ9U57zmKvskxE8Bbm8UuaXiMkizJi7QauSQNcAuTp4UYJoSzFE8Ftp",
  "key19": "AakJB7v2PPNyJMiYnLYS3HUTrRRMX2kwXQ3WsaRCWZLCc9Nm1tmkKReAWu2wTrATNPhz7LMU8DHnEZLLd7ELzXL",
  "key20": "DzeCskzxhUJ1RHe8t1JdtmKLf9a6ejzSm63SAUNsPAaFW2Vh6C26cxHAyuAeRLUDJ6RdTXS8rNs9R9VrJGcn6e7",
  "key21": "4XbnoxT6GjqU4dhyWdnan7vVBrEVmSCTzqV3j6A9UigNSAZ1Dk6JwabLh9HWFjs3LC2giGAzvpxNWwwEwUb5H24X",
  "key22": "5EzfqteB9chwFxK1dQCvC5uW19Y1ztwq9w1apNTii7s8ERVyHjThGJ5quSUWwVD7ZDF9jZGNvbXG1KxGbPdohAMw",
  "key23": "3mAUdc4pJ61wbv6DwFUAVe9vrofuKXBC8BZXaTPebqc1rywygYhXyBsPjAaqTHXAgjSSvJ2PseeTiNnmNbYcqyCD",
  "key24": "4cGdRy1rSqqibht9KvL5JqPm2C45es5tB1svEzyKBiFoHJpnAXmZJ9r4XiT4s22aLUqxGmdntwiahNTRVZa2jo3h",
  "key25": "3jnjCgQftHWpKV3a3679chtRVEsnniHaogfpqH5ET7pDyS4mYrpMF8WduXKEpCfMcWSqASjQA7HMYNzeEMUvPh2m",
  "key26": "R9oDswGGH4FQY4tnebkjKR9LEtH4qdNC22mKabB2mUJarUJdhHgQFgPPwKbNEyvQx2jkTCBFc96RKdjRvzDRa5T",
  "key27": "3MnPrej8JrPLiTnSFA72J8PSynEqhEHuG7u9nyB2WNbJ4C1GiUx4eSHYE7YSUezQVbrpmPahtEXYpxtMV3FAV7s8",
  "key28": "4AKnmx7ZAkvQs5mvFzTac287rqdYHtPW8y9KAEgYWBKZsDSuY3b9zotRDgaVAaSQfqzXk6HZcpBy1tgXWPnyCk3L",
  "key29": "2jcgz2ai8RusJbhK5SrYz6qPK9b6HRi6FFyHYGM2FiRz6bWQgKGunsbTnoQQFztLpw9ogEvhB1An7MmcyCdM11g9"
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

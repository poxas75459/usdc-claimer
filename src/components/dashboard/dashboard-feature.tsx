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
    "NL9zZEJygPMEepHihAKXhdcmn5nWVcjS5M4zSaqaSawa4gCD1GPgK33AUp2zKXWbQmjDR1raatAv83Cwd6VEfGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaGr2J7DCNSXCmcJ2gbzLr5uwN3PG5rWdB4ftG8dJ1iaDgYorjnUc2VMXfEK6aAiiPipvjdL1o6ziz1tizbMy6Y",
  "key1": "33Wa47De5d7jxwkBBgkyXQSHtjCHiVrERFE4r7cFkiyCpkLdre8detQPKW4ZMyWBahnuZVKokTgg9S1rRxJzfdKR",
  "key2": "2vTUuXZ3ZPfiQBL72LyfT3twiRDVZBCqnNRdRuZb3Es78Mh5Y6XUJbZHZwNEEHUym5miRU3nSKDVYczEu2ZT5v2N",
  "key3": "3E9pCSti4GYxuSojP73hT6oQFmEraQKGcCAySAst8Kwo1nqdqvfNYaK4Z172N3oGxQjYTAwso2oSu1nAdZ7mGBRr",
  "key4": "5k7NhQovXTDwkqGEDrVkxdRdcTRXywpqRRHTPW75PSzYh2dhhgxpP3tktY9ZRoqoDNxzBoFMSFfxy3vMneFya4LZ",
  "key5": "4vsNYUnGrjj2Bfz52C8WehuV2BJrmm47mDrxht6SYjL5iZdzTyawG3C2P9Uq3L67vor81eGSxiTMTXsF38fyqBGe",
  "key6": "62sM86cXXRwGR4T3KEtQnmRaKMZDAbTGsn4CgmcBgREuBcTHNrSESQAsbqbwnWkmatKbshjAXqBWUehxC4rArh4G",
  "key7": "43o4JE4D1ZwAT48nYYmmre1Dw746QaVwnED5QifptzcTYgY89Ri6zRUtJH6JQBRkj1VvgKCqEVzLTcpDcxU5QfPJ",
  "key8": "5mZbocmFkpY38RsqaD33U8Tgng5un6FQsbjThHwMaKA9vgxB6rgUEBLyxsDFZjyEQinAEmF7o1j9xQzT3LhkXrFL",
  "key9": "35wTCxN7NE6vn6Kh6hw2Xnzmfo1ULPtyNrSHqixkvY7ECa3DTBk3TkdxBxKDV5CmZNhQqmBgBihuhZNvPbPh5X7h",
  "key10": "3X1V6jPagKBmqPZHmFRRftPmBeDdxivcEvK87XKFE3DWN1CejPgT7yusFQvWwDhyLLeDFDKe84JjQHQD4MFZ2dtT",
  "key11": "7dqywZeUe2kypr2mD2um5S6Gm1hjHToqDV8eVBcfzZNfSNWJE2qpJN1krdwY87a663bwKZi2Z75RdiNTmcqy39G",
  "key12": "4rfN1e3BtBuyz5SKabrCDpXSAj8JhCKJoZQyCsM22XsnvhtB1TRg1qUtXj743nCRdbLPGZTdkaUi4Utjpvd74gar",
  "key13": "596juixLY2CVY5e7nATDxvV4FBXNxKM4ZPagmybVErZtRzASUoMEWJaEycQuJ2QbGmkBKq5Xo6b7mmVpex4fD5YG",
  "key14": "3BXyFZXpmrgqKo7tDkiKBXC9n8bbNmJCEpiL7qoATCc9io8L3k84ct5dB8BDiLrXMVjTHt51QMg7ehR7bHRxrbuX",
  "key15": "4uxpzxxsAe2mQArn5TYWfDQi5qxFQK5GJzsCBMHZNjWhobYJ5D3T8TXiDChWUvCC558zpVDLyGYxQFfDoybW8yw5",
  "key16": "2gQnAMXiwYV3ZNkRjKZPyPe84GHNJwY9vAfdfF6D31xoXVbrRaqVkPjWCU1a5TD4G6a1dcaf3qQCEkXZKQzRABpC",
  "key17": "Q6koF7esRp9pEJLmZRD6WctdQ7Dimnp2bHbjB3R9YVvjaD4K4Gxecu9eMZoLRiEFUaZQDXSUxLH51MUtjZcHFEK",
  "key18": "4WdPLGCH46VZxSdPyjFyQNWTR1F5G6CEt5Pxui93LnmhR1BKBMVzCGsCGrgdAMsnotJeYpUyBmDYQrs612nQiULc",
  "key19": "64hFGNmodPPSV3orG5hiwohMmm1mcMEW1hQWy6xMhvrp18ADeFs1fNwQPbYYRZdrCGpZFDSFDfsCLMVEGcuAZd7h",
  "key20": "5cHxeXQWeYqVqhv1r9s65RRimud6gmUHoGdAPxM1g53qUMbZxyhnwVDGwF54MHrPxRf3PBQheRceFWpWQms8MhEV",
  "key21": "2v1ozTvGQgdNkLkDCL4xD6qtcPuy9EvYnpGVhMRocEkEh3DQ7tE4AsEaHDXBFQC4KBJzgkKSRELs1Y2Njm6nkiqi",
  "key22": "4sGQm2YfChyYpGSHnr4H9muoBxajiyt4L1SomjxZRmwFMd2cnsxECanPyCGPx4HDuC7pwvres3TrRCHf5UhRwRNs",
  "key23": "33CuMF4u5FiCAfUWWfp8H3Zb3zkq7KTYNScCfbcuAWF18ZPaYkoaVTeRzYGveHRdaw8bt6Zd9YFd9WFeXeNXK5rL",
  "key24": "2U4k5FSqBme9VMGb7Qv9h1sZaLKgS1fA5SCxwqvgZrM5EjKLbKoPConUFnNAGmgw7R3xgQyN9vwff1JqL6wwgxgn",
  "key25": "4zM3ZTAyMjtymevPBzuVjcvE8fTcuVuBmrXwWD8Uwg6qHe4YRb3mUyriDZ22HSTdx8MgD4E94cpmTHgUNsgwvyjm",
  "key26": "2NYJzncQFthdkFz3QGmcpCXiEHuqh5wLqMZUKbYHqmcuPtcQWaXWfKYN7K7rK8QC9qPymjCctSfz4myePxJPfV5p",
  "key27": "WGiydagwQ4TZKKHHtoVqgRfcKYxyAYzXqVo61wtd7XXwSc3ZRzMpgyqRBVxRZLzFZBjeAWukuN1fweSJPdh5zgR",
  "key28": "2s68N7HxMj1A98m1jUFm2ansZWkhow8N6QwTKvBhzf12pKnUZ4F762HetcAhwLoLjQEywKo5eREwJzx9DhzDFrr1",
  "key29": "WSkcrHdGXihh3apo952oE2NJsVEtJQACqMo3eFkMyGd6iseY1C5fTjJnHQc6K5xUwLQ8RnBjSSmfNoXy2Kfp5SX",
  "key30": "5abMXv3BJqyN2qTgnBg4bjQuj3BzbACJZciEEoQZQVcrhvKA1YEAsEgydro9TjtJwmY72744MDNDsQgz8TzmtLXy",
  "key31": "592fCFJKufZzJN1B6Q4YibvocxxirwvKLKq9z3UUgp9kgkDLDM6CokbaSvk7nLcWCokmou9oaTdakkaWcmyU5Eyx",
  "key32": "2thTdyrYdNvtUa5CD96SGFbHctenHcsrXKevxWDgNjstEf2HHYG6wwR6eFaW7Yr2EDybXbh72cYWMQS1pzMrj7ns",
  "key33": "5BxkPcimYDD5oAJ2rCF8WjhpE5WuMs6YSQ3KCiHqoSTMqxvWBQdkFJ6DHyKnNbfa5eDSpcgtey3nrfZFF8pRWC6k",
  "key34": "5uGRzVoSBPx5bX2in52fRepuwpRaSmK3g91Vgt2nVFouvRKqhUyX1L9aUYWtyHpqrbot33RTciBPUcNS4qXmAXup",
  "key35": "rHvxAcqbqYkRmfN7oEQXZzcmjbhfQ3gxHzTb4szE6p23MWSqS1vJYDz5CBDCFUsR2u4W2Gb6YpZa2SZHR3KJZdX",
  "key36": "4JHJU9SCLSqDvyaaXtcKTbGqR2mwho71kcNvmwDZQJAv8a2DYQJR6fsV4Fq8dK4TU7SQ5afZwhwLU3SzjpCaqN47",
  "key37": "5kDsETEocEaTGYyNHjzhypXqikchLv7oaASjm1NdYuA6stLkgSvxTTzRSNvKVfyx2eagw678rZHnuL6LY65ToAJL",
  "key38": "3FtDASXuT9JuLwaV42mKhvNEFCRaizgj8EaLyd27moJC4gFpZJ1GYgiEVPjb1NDRN3AjriDFBRaxvUob1HStEoGs",
  "key39": "4Pd8rQN7aDohkgERPH2AMPp9AGstEZwp5ZQND34aeojz7dpiDNfDVmJzKq8qmmc5D3a7MfvW3NqrR4eJ4syLJpZD"
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

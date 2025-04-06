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
    "4TsgxLthaJpyHedZkEdUuxTUxCrUhFce6xqAu1crewhvr8wPfwoVbeBDAey1QoPw89G3j5REiVfTv1BnpVjUgkJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wNDg5zKHopu8gfQQucQsZBWsva8nzpw7iC4SxmMjLumFPWpLq6oUuNeYd2AmFA9Rzenm92uGVUXiQihfKxBP8Bb",
  "key1": "5NjBvzasQeThRRBzwEPjD9qT8x7LJKyUzsM9r8QuMrEdLzUi3ZbdECwxzM6a21iHVNaYgzpmkimSetKHZQdBDjJS",
  "key2": "64qovcqM5mjkXBYrVQwApT9dYxRm1C4HQ4tTDHqhRuuH1v4ApdPeQhgvq4V6ukRMLTXocBn5HAUULj3b7QNzidyJ",
  "key3": "8c1wMrdQ3eFPNMijuBjEpkEjp7heSR3zBVXdXoHsehLqz3QvMgysM99A7TzoW19mNeWoowpAZir9vNV4izVEs8k",
  "key4": "Ce5qnYSxDtaZqrGgEm8Lnfxy88mcxG674ubA3E91B5Cc6DYg537PAQjj3YkanxZhc9cBBQS2Q5mCBMMT9P872Z4",
  "key5": "2iUiqVDd9SkcmN7wqqzSQuqZWmt35zywi1M1W21DrEAjvEAbSBjEpc8AV8d1XD9Akke4i9tN7i7e4KrpHLRPkZkp",
  "key6": "2rMyvpzwJghX3Zs4Qn93EZBhYo6DQDHuEgxXYKQ8LbDc4GAg5cQUCvbMQBRDG2aCeJ2Xuv2w1HmjUBEqWWQmpyxe",
  "key7": "3trFGs4feVppiyPmChPhRkHsZcgwsfbtkYwb3eD84tQooFs5d4xitC8a9X87M49KU3QPacMppEP2yeyKTMvuTAT",
  "key8": "7T36WsEE5NKrucgqaDhtMtv634SRCdfkW78CudvKzs3dbdMJfuK1w4SU6XQgcUsPqZPprqECkTuzJcvCXtHV7z7",
  "key9": "49zdHJEr5YAjvgBHJ1Wtu39Z8UurDN4h1DJFnLKRMUoJHNvp4hY2WmTG15rnY8AVLfgNcW8RAhjrZRXjYCF5EvA1",
  "key10": "3akCvbJwxfCA1i86ZUuKgXk28WKFpp2Nc9dekUJRtp3dfYyuRK2ujNgWBnnGDzZKvk2amc924ogeMbV9SctYifq",
  "key11": "2S5sUG1UMDdYb5n34uwDR3wX1AK3gczGmcMjJ3dAZxs8NdCHn2F8t6r1xo3V5XwAq6CEzhNNH2b2v7nBG38EKeHK",
  "key12": "6P3vEaCHe1SYvhCmWA6NqgNRpDJeUjeK1pXzCewgQpUGfj2hRiLoKPmWJCpS2ctVDDKBg8bj6iqDTfAiJPFsjr5",
  "key13": "5cAzpTP6xT7aDwsEBKYNCaCyFS6QJUHGixfiPdTwvaajCjZKakEnJGKmvXh6iQ2zwmkUS8DPQQUMUtFvMAmoyEhq",
  "key14": "3Z9kZu87MVzW82kAe12yzWvNfVB5SoMm8RXyTPNJRCvsV4kcUQegbjo8rgH5DQQeiSJDkp96spbNWoXPXocyEPD5",
  "key15": "3sWkuj6jX2fMqtvW3TdVHRfbbV5PqZ9DbA4UgCBKqfD2yqK1VFBmydjUygswVd4cyKbZGF1r4UJurzQ8w76UHyAu",
  "key16": "3BLetAweTzBgQCHMHh1Zq1SW9XUgbWzxJCJ8mupvuBP3wA58y8nZ8cAE4HWVW75agzBdVnnGpmAGajjkoSpEKP44",
  "key17": "2ShNegdHhtnh9kjvzGDG7w9QGcu4BxEfTXZBiKenx9SUob7JPt9MGS3MSpeYNMbwrq3utEQHvdeuD7NK6QSjRVYt",
  "key18": "3xf7VEQ3xzZzu9BPBgJNSE45q9V4ENgT5hANCdNbqxv5oZMddhSnSVRZFVizsiJi4sP7gsbYiuJDJFQqk6C3pcZQ",
  "key19": "4xVADMC2bPMNJfcQCSembTx2jLTU8JUeKTb97hiF3vQMmNAuG1qADKsMp5SynCm3VynxCQRSSQz5YfE8boHNwfY5",
  "key20": "62RBYkyRmYdXC2VumFZDEAypHEYFmqUmQ7J2W6Sqnz6BgB9sx3VSm88C5HpUi3SfX9hY29Su67DEeuhr9g49h7Xr",
  "key21": "3w4moGTAy1xvpf8u4EWoz8zPT4GcQQyqB46TtKN7SxkiyQ9mKrbePWyMkQu1FtBgJtr9FrJ4Nh2jzCUfpZDX3x5M",
  "key22": "4uE6RNAaWkZwcZDXet6xFs8P4DcaGS7V4sXkhgMx3euTRMDcLRzbUDb5XrsVHX3VVQuLv1A2dn22saFEpH4rTdqk",
  "key23": "2ooU91uafWpbQY13UEsqGdg9edLpe4j8DKfkdNfWyu2uDMYSCzADh8nu35KWXBRhmdNN5S1mQJxtmKTyiwQnVdZR",
  "key24": "2burCzJzhUJ99YVzN9wqRwrfWbytq67gtXSAE4VwB83RAiNDmf5gni9fzB4xamcLN6pUdMoUxbDoptBdDvxbNvYB",
  "key25": "W8f8SoAN1dLuAfBuuSpV9T1Nq1ExBrkXuMHEHAsRnuMyroqAZCXCsGCxBvyy3TnXpToh4zGy1j6dzRY1vFphsUK",
  "key26": "5kRtmjo32XP7FcaAKVBWQ5XjH5WsbCB4eHLJ21DwD3VymcVXVGbRn1szhFZ6LfK1C5GqmzGvTAg4588zvRZPZZkK",
  "key27": "4j8eMUs1Ky8q68yrPyZhrjbTDMGoJkyCfxoUHf4B5ERfvB3YTcettxhXSNf6NttKyhk2uq3r8zPuzneZqQGicwup",
  "key28": "4Au3ECx5qACUH8txjHiPjGb75dDRLEbL3Eg5B49G1qdr596dTiM8itQ1VEgiucdDLuZs2DaKFpUfAXbxif2cTjc7",
  "key29": "4vimXpmTFL7AC8ni17jGgYkweed9Gwni7caQ6xrxuNniap9yZ5HJhKHB8k6AHku1Vr2XswXomBFNFBCSW2uSsLWz",
  "key30": "3TwMJzmfDf1UHHBYeofXk73CaSqLBnj6hS4Z8pHKmGqzqF9GhsUMAjWm25XbQueBBcAeRJgCKAzukdVPBwa995Qv",
  "key31": "649QZeWSXD7NtpjZyd3uYX3Bpc6iU37ZUyyptHK81TpFQbbKXAnSxr8q591DBCqpDzPQnbgbTfjKiT6An8JpFJRh",
  "key32": "32ApBbYS6k15MopcRrmagFH4AhR78WooXDgzWyHLgfaiWbe3a4KMxRjMSVcqyfcVnsWTnAt8WjzekTTwCQzHc7BM",
  "key33": "5m9ma4oyz1kxFLPBDA6ShoaKtVjZaEqKHDXuJDxDGPsjgAK1GrNYNmob6CLjyzR3RFb3tmxeqwh73rnp9L7hQo1J",
  "key34": "5EvSkzAu8qHk5SbpXXTzjG2YUVwasZwyS2gxdq1kFi1gJnS2Cn47Bk9Egaz1QSDb5m1YQvNx5Bx38xENHLyFbnLH",
  "key35": "RaFhXTjpdtscopeewC24ihuR2k9p3sYZs2KeFXnBCyMG3K1tGeCabPobCMMUsuUjRZcJxJQkECE7D4AgNrFKWKF",
  "key36": "27jPRSeJRsxZsTcXEowfySasSmeCgdyYvK7C3pTBrzxneCJAwGZRwHfKfA2QcfGYoxtcDkKJc2dkGxBpZa4evuCG",
  "key37": "2NkAtbPqb4dcKH77A23RuEEe15gqHnAsQbKsXK7WiJgPYtf47tsNK4egJBwG5KiyvNVgnygN8pa6ZRZW8Zsqfyj6",
  "key38": "443EVnumniQYzTWFyCYvRuS5xyCFU3gc3pgcR6kgvv8nSX4VCCt8gPzLhPJAihyuaJheBZr7ZhXhJwRXsu3iz9cc"
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

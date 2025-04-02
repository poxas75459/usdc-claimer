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
    "R4kx49XBkUzSygQKSfZFMqcXupBcM7pF23QnFtVKzC5j3icQY1WE1o4b7n22DpXErTCmGeD37KdCf9SbAww8hCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5My86kCMWJgJUo1DHt4d5CtCNf6noZ7WymDdb8LmvnPZpJwJdoEdFycrg2iVuTzf1WoUKeJooQc6s4uUXKajg4",
  "key1": "mayR6W8fwJ89mVD6ttvyrQjDwR8VU3PSNZtdHPeCnpERH2FAqzSTRyhRdymUqFMthAcWzccQLFMNLDzdREqjDCR",
  "key2": "37todV963ay1RsrGzRfVs12RGPuQcEA4Aae9DJfvS6C8rJbrVTrRXSX1iwr9p9w6C4J8b4nYfTWpS2vb7yLXbTTW",
  "key3": "4974AgFNrXRe1P7VvWb9BegCmwG1tC37Xb2s6SHFC2FsqStCHk1V2M6UNwhzY1fXq8yXqGU7QQDLq4DDG99CdNZk",
  "key4": "5UshUrN5f9ENJvJx8REbQiPbdCUmHiP4R1P4fwGd2aS7mT8Jo9yditGPEpPhhUzLF5CFERQ2ATmpBBFV49djGXt7",
  "key5": "63NY9vg8kYeWXT87jCGtd1ToymyypECaRZCDCP8c6Z8jdHonyTGiauVYv52pLG7sKX1iwFsQs28WnhyupjQimcFv",
  "key6": "4BZBmELrZm5V1bE2P5r8UEXvMjR7DCGPjedRohgAZ9x4NUf4zhGyjmFr5uPxmgKeHawJFkgkhUHv6fT7zQzoBkjc",
  "key7": "2AL4D2CMKqNQ2uJaYVn5UN98w9Jdw8f76qg63Mw7DYmkoHLzdGRqc7G3BAgdUzuZQbEgvuL6WnN6oki9mq4D9bqz",
  "key8": "5Ky7vQK2BpUCXA2MTanA5bHj61av6HCwNUUMD5nLURY4JNJ25jTuTrzdhrhQuRpgZ8KbVEhfr9d1HG9oo6MYdmKw",
  "key9": "39HGTQTMQwkFHRrfwVarWxUVAGuH3dqQGTpTf96g77wMpdW72MqWpf3bzmEG4F8Hn4PSYKi9jGdwy67aBkjVTt2s",
  "key10": "2T9XxfaNy46ekWEF6tYkfDJVZ2oKvKTDQ2i23f5hxjXz4f6DXG7oW16f9e4Wgjx9whwLaTiZRHkVjut1NGBUCqQP",
  "key11": "273KoLL1bmLS3y8a1YVUuGvCdjfAmFxsF2NRwtc6Uaa8iGBjkZcWZHiWEs2qp9YRLdn83hnUXroYwxP33oJrfmKz",
  "key12": "MWvyTvxiuv4mqQxYn4K3jQvwyPXaFkYKSA7PvpLHSmWw5NByJqYkTN4awrJVEer6JVGxFq7MPYYYYK2sdRvQBN3",
  "key13": "JpEenNQUCGMGh2NHg9vK24XZhyvcGGxTh2EDzBkvkf5UxaHx4wZcKubsZ4nJfX9imkTbCbJHfVQrJ5hwtaCyY8i",
  "key14": "34gS3GqwAJyEeBqDd5aY1U8QuHZDBZepKvuRh4q4TEFbvgoS6d3NEFQ8pcNdru78xGHgqD3HfK3bFS1TDgiWF96D",
  "key15": "5zc6bjiAMKYK86zFwRavWnaztf4m9m3eNpFaEcQXaxSfvrZci1YWie6F9Sskhw2ADJkBrFmDXbjkrSDNfRHn4e6P",
  "key16": "4w3PMF1Nb4b6oUHvnqJmBWcbAVFkyZG48AfMGBbQfgmRDGRQMqHBZrqH8reVJNvxYg4x1KVH8oqasvMdym2Uc2G7",
  "key17": "56JNhDLTudVTsK3Ei1oeoSoVYZbkuKg5GpvqhGk1ZoorX7bsRz6CYuoqbqGye27hX7LAc97FE8EvzgyyGCYTzP19",
  "key18": "2SLuBngqr6sgscmcohQ3wSYnFxyUxYvMycivaphCVC76vFVoeuaVkQxhQE7vKVtJfmwAYc1VFhmBALyFip4ceBVf",
  "key19": "2XGLkApK7ACL93Auf4SdanRKXqdqorgsXz8ou78jm2JPbiVe3WJMyq4unLYyV7Nwkkf7nJGcvK1vTQErJYKTZR3N",
  "key20": "2XT6Mpg2PX6VcqEbWZ4own7k5CkSQfeRRqn9UtcbkQxoVtnNU79UNV3SjN4gbh3jQsSntvvFpHW6nSVDLMSeHMKX",
  "key21": "28BYyFm7MwQyeXYCYeCZ8jTZeXpFzin9r7CxRho2RKJG9qyBV5bEQhNB7TVtgkNMq68UUxFfjZ8jGDBy4LHseLC1",
  "key22": "5uUQ9mscNDgeE7DCH6dNQsK85FwdmxY6zMCq5Qc5BHJe9DMUE4ndeKLP3mYp492kFRnMV13L5cQhWMQe1QKhzW8L",
  "key23": "b26EVCXwjBEZ2ALbDFLuLXKVKoXgBU24Tw7MgrvWxnjDafuNMXV9ttFHZuqqb8Et2Pj83dMGsm61ajHTLppkm3v",
  "key24": "5dt8FRBSkzPi5UPptmYaVsBV3wX6Ljm9EcxCBudsnPn9Ltwsx7ps7tAoeNp1NTNHWFTmyifoyHVZa5nBeMR1PJKb",
  "key25": "5wrH7Ypm5Lpr9W1qt2DG2F2WgdoZd3WWjniW6iDrmWFKL9uwQiCz38NtyjUWVCmrLqQxVwBTnvSULEeabzSBckiX",
  "key26": "65AYPiKcSwbAAjq2tYfJo8NL9km1w84YR5yJFyhEaDkhf3jN45SZXSufbfP3u3SoXCdacN4VZpEwKr7QwwDW7Ri4",
  "key27": "2VY4njJ5oHFBNYBVVgRCk9Y3akkL3Kyj34cDbdUmLH1KCYHzzj5WxbCWauErbXrvYcJMnagWYmbczLFAuEhVXYCo",
  "key28": "Tv6EWB1GuiDnVmLwMHywfDSZ6YtfPRzvWx2oTVV2FkxRCy4jCvLgimRfnDrKPtAdcwopnxKo6n1pYvTigrJ8Az7",
  "key29": "p4VJzTcdKVDnPm57U53uGBBTt7TxWTwmScpTX8Q3zXiweT5eYqRRCeeksGJdbDT753685Y827ufuPpjaWeyfeTE",
  "key30": "63zbPg6rxVQhM4fDzvezKQTvXUeqxvLqFKtdXcqzj4Txrfp8PUBr47L7wESVbEhL8XnqjmPj88v4F9kc6hsUoA12",
  "key31": "3Vmmc8bB7e9hJ1noDh4dDgj5YirLkADpFvV6a8ZJ2Wy2Lpz8LEDrNGaNf9VYzLip8XCMLLngBM3WJgML64iQAo7e",
  "key32": "5teLHEYSxbDQmrSb9Yjaoy2YhzEa5k2iof3CnVWWqHghRFFo6Y8pCnLvLzsXYs49mRPayWbKN5xSYoUbhQu2jF8g",
  "key33": "65bZyonsJ1uYQwjwRPFYMPMaBskxuF9CT9rso9GPrGMFLnU6PSWpqbZyUq8qUX7t3LhvVEqXnLN2QCWus1Xpa6CG",
  "key34": "62ncg5set1yv41JjiAn7m29RpyZctrTdcWJzqyE1ijmPgh9mDBrr4fhAjmggyWAswocF71Gd9d95vauvpTRad1QN",
  "key35": "3jxpzGthUqm45GdcR7ULQNdmtaLcQeNaaunVFE2g1egDGfT86xb5ufoxQu3b3Ej2pZPzAC3WPZR1nRHk19NUoiQY"
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

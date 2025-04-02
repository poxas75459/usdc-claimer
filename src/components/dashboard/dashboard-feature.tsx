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
    "3dF3rQU8LjXFFUxxe9Rk969eTSJWrG2dbaQNwNAdSmAFbuaJtCAjryL6hc6n1KPysJUPx8PjrpixtEdcB1mthGvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HyfuLWbi19grtAH2XkjxGbZZMkm6482qNRJkix8aLndnreqAvo21iHGKzqoXVrtmah5QtYDoVXKB8XRQXWvArke",
  "key1": "5wkHZvTayWVMsQFE6Z3kPqnn6iCtFsuTHJDbwLWGsnfVcxgmhQAQVvqeQS1Q7iCoTiamMbpD1zfp49svQfMy883b",
  "key2": "5s1S466b8BBEF3JrjruuQsn5aBMVyNUR5NPxAcJ6r1FLEXT2X9cK9jSDEqy3qaDWoh6nssPyhwHLGu7axdV5PHUY",
  "key3": "3CUup2z77pFuQwHDS9NvCSpV496RwDvsTimnheSQqMWfm8BBsKJDpgPhcVMqjmkWqKCpSv9dn7Sj4hsEwD6fPhj5",
  "key4": "2rudSxbeUjUqkXusGo4rp1vAPL9Tfe1JMs998Gtj1nArAAcR3eaJb45T5891BziSFtdBHSDP41xei6p4XqtpmdAu",
  "key5": "3prJw5mRbJvrpZCdsbYx24uEwuygsxATw8x7JJBTsUZNjqkNgSZw9TVqd6pzzGuRQA8KV4gZh6mJH2vGgVCaJDpM",
  "key6": "25mxAuc31vhGdJJxgdWucuo8bQXed9fC2hWN624CyLPzVUprUKby6gN6MTBePtYyj23mgwfyXizd5tzUeCDPxoiB",
  "key7": "4nULf1J1n8p6wX3EUWuZm7ZoCDh2aFqi7Mq3VnNKJHJwwBA3ozSiUHFz7zCnR1QBJaZhLjqXURyeKW2nkDKbc9JE",
  "key8": "2FrtVb45SukgeMFowffWTar1kz2GbKmEnx3yrtNje7LwCvo3wwVbpTvbFhNZo5BTtf79Cfnv8BBoSeXCZAzoaUos",
  "key9": "4ym29z5zoosXKVicUbessPXA2pQmDBorPWXmhg6Nwtt7guHzkcQdfWY887GkY751MmkGJBLvyPDn9DZiQVYWVVLY",
  "key10": "512Q63VvS4xQPFVmCY7Vi1JNYy4RC8nHtYFP9YidFcBSiygrH67YVhhEmKmALYSy8y5fwCLhbxscrf6Q11om7M7g",
  "key11": "2S7NEtAvQjLRzCdLUK4daKXRVKasoYQ3z6vGhfDqdKjXZmXjcu3MoFe3tY9HvCMNGfwh8RDjw42Fit7vdYri67Bx",
  "key12": "4a7NCUMZJDs8px5xQMTBApF1UYVBN1BAGdg6Tp1p6DgzFwkxHftJ9pbU7bdUBUuGnfdZGoCf5dfv75yfA91MwJyu",
  "key13": "8TEE7n99nrvLEYZBG5AA4yXLG4kZYhFVL6RFKgqscyYtThCYkU2L2naGofs8gR7ZRoQyZ7pnSe769XD1ZfJMFj3",
  "key14": "2yg1bgPdEVYxScduoDWPYhWn1JVH5otfnefDXfgijzYTzhr5sHt6ywQdC18s6CYV7EJsn5VJbpSfoy28YSAhTPQQ",
  "key15": "4k2BordLoTDERhzcpZq8tJM9iQxeqprndqCqvHrxx7pacpuPBZcuDwRFdMQLofXzyftAwhXdgFAFNveuQtNrNVgA",
  "key16": "3ZgaXfkGVP3H6FdXTabL84ZiFNsSunLHq3E3uzhyeQ7k1RtVqp2LxaDBZXcyctcnprhcNABTG4yghTsaMTRmemqy",
  "key17": "5ZDQ49SZPDGnM9VdTW4xmWkL1GSU3DKE4K73YBzcFy5QSnbjTYiLcNBpxR1r2kL4rpW3qrGYbGf1QqS2dLK2un7o",
  "key18": "vKUYKB3CbcG9T2KgSfbrAtkF9Mz9nEjhPdtH7dkUGsWhtRwrAU2LHXdLETCKdKTCUnUsjYWZ5VgXznQ537Vwn22",
  "key19": "2mN4mrPD7AQYhVMbBwSEEwzPEPPHr6ysvkzBqijX9qWjm6CBCiJ7VLyURrnFeVrfPDDM7o8LhbniZzS2dM8L8Fzd",
  "key20": "2sXAg4x12Q9k6cLNCEGSTZNGaRMXqBTqBMLu5uHRg41zW66iZTSv1bmWsSvGstxZkbuLJQuQy9DYToJpGGLTvbaY",
  "key21": "589hBmK8WQh6RxNzFfWP4czDej71Sd1AoMhSRpyYxH7w7gsH6fNmtLdLYRP2C6593N7Q4SRPLLJvHTrcgxzPYhoR",
  "key22": "2gUD1vCMmPEwiTVNPVSM9CYV85JGziXtF9eKHHENe59hJi552rXoxnKMhGC3VAwQ1sEdK2cjyRMFNY2tsYaBr2XD",
  "key23": "24mZH7W2DZmhu2f5Nfhn85ayKUzFXcSWRxHh9jVLZW3U5Q43xWi4gQtVWbZqEeNb5ioLundLshv2Zf7Qo8vdvbqu",
  "key24": "2VKSFDHMDGm9np56VeFvQGLBJiV7jPvdiJkjsDcUoHAudE5PRnrcSCAqst5ARs6QjrYQHtXeAXiDg1WnjuX2as1H",
  "key25": "3p9Sg4dHYYAjZa9DmBCJyckKHfZMzjaxYR4nASEn12Z3qEwoJGrKqgQZYVrNhxPeHy1Nm1Sp4nYdHESo6bCowtza",
  "key26": "3WndHi891JHyWiCXeKMPif3rDMWiNH5pgfRSNXUpR4ST3iZfLtZD4UJok4pEAt6PAHR5sSrWfCam7bcMu7yzCAgH",
  "key27": "4QufZRys4yDBKfQGg8Rn17sXkmrrifhG9WyLhzBDYmzPLVqVZnrfWWTupeFRYHou1augVoeyBsWhGNbviotx5nyS",
  "key28": "3H3FwNi2BaFZGtBvfESjweyxb3iF9XfJLZxxo4qtPTR84LAb5cCnF6UZe9KbvC9fC1TyL2cmEWQHNNg9MMVUUSLm",
  "key29": "4CxYM2fn7yWgBKbJZCXkEX7NtzxjbMqi9j7NKh5ZejVCHYVYRdtrBnmvSUkgrC5USrvcroGP67DKBhUSjDM3S21G",
  "key30": "34q4uhnXLmnzg51xpqVnaGWsaQKKDaT7bskJ2JY6cU1Ffr5GJSUX947QcuUfab7Ax5ZPiL5JPKXxnnT5nUrGL6aY",
  "key31": "4W76jhvaUGLGPQEtZUAJV6XziJ4u478NxkW9BFruQHbZK59inGTxXn4GuvU92ZCDHkmLf8EqXPvPP29tskfwzzPx",
  "key32": "3g2Cpij5pKL8SVRkARy1UG36PWZwiHrvF1xQ2n9Wn28VfSEvSj7dpUrrXrFXagoxnxAhvnrDXQmW1pbLvUnGa1GK",
  "key33": "5qNVPUApp7qWtRysUqAvmhAwGmSWYpopYhaq3BTHRQTCaYX84yVA9UVWfZFMExx8JrYu7bHikoC1q7LUxWKTcTb6",
  "key34": "2MKkaBBbYcoxmsqkDbwFS9GTYQfYbBw9Y936z32ytrsAuJTpSFpFn7BM73NWyBSTBw7YU8gAnUuhXGSU9oaw9CZL",
  "key35": "YM9rva6VZURWGiJ63iLWXWRSN1m1L6tgzosmvqACciHse3gqK5jBBSbsa1SSxbhnEHWcDvCcoMTFuHuW4qHLqG2",
  "key36": "hjymp3LDscdzKUe57MXo8V5krdBKcck7L5gyt9sGuQbpqx5Qz7tozynYXVG5xU1QRsSMuA3oP3FANQfX7bDQrwe",
  "key37": "5uNYAg8Acwsc7gweVjbgjyAuJp6qatXHcPeRewDGtLd5biHGvrfdxpfkeHVSA5FwkJH4yJVrsqG7rjt3QZaCKo4G",
  "key38": "2vzS6VtEbbpUTVuTSS1DxqYBNzWzcQwtyXj32b14LUaHgBodvBExjA7DUzoTb3BwRC6rLnNt8xKkD4nkTUbtqTyD",
  "key39": "2ZCdgXFW2oN6e5xDpeDWEMyjhmNqkdVLHPcMYM6ke4vMpJrQUqTHWyUZGJLdaQYq4VLYJCd4KavBP89vAicCyU4n",
  "key40": "5CSLLiEHyKPQmnsRPHyfRpSC98K2iwTUARt9ifUTXd6LV7FVKWmeyY62CtSGA4pYf2y9298iqgDt2ec5PJnztBfQ",
  "key41": "3S68Ta1dZGGPSbisrHuuKdJLWZqoiRKr8xNqjJBzQQPudnLbPw7w3a2opJhwQYmsEGVcktU476J7yVynV29xu7Fx",
  "key42": "2Eo1ijbUf9RQTjsKN9mGAo8BBcoQc22kCctrtY6wSQxky6ufzit2uYX3qPdXY1Mw84SChECo8n1epUA1WAJL3GBE",
  "key43": "3jvJDshibDp5D9zYzpDtthhqg5TmA9VnK4kabPPWHTAvgZMQkyB4qN3jJPQXcwkiz2Qpz5G1eHnoT5diwyxvvzVb",
  "key44": "6595cBgnXsZqVhSkCdTJtm42Agg6zSrZeidi7uTcdiAqS2zCJDNHz297fVTQB6reCTCgJPXB7PeSbaeiT2LkdfYi",
  "key45": "5YKYZHG9HJZnywT8dXurrzEyZHUfhRhauzTKtqMDLGxCiFKsbx6WcrqMz5fFyKouW3HXmbW72vDwLkJQmAjZYAZ2",
  "key46": "2umedPQG9afwhpewefdR6JnBj955sZysvMX6hmcXnN6sypiY5o1NUmS5HXekcFmsjHmpWtDNdQeGi93shmzREtgC",
  "key47": "6wmAggVJet4NPCe7whyegRh39eZQmeD7ksE8mtMczgTzmyQNkqZFNwf8FtdvPY1zCvtW4xbvAmbbyUPgetrG6am",
  "key48": "64kpTE3hhypSM42tMQc2ou12FM1Z9DK1V9TAHUu98DB4tdxavZpHivHsYgeBTWqo44EMW89PcKf3Yzbrfj4mVH6D"
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

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
    "2JyQdC6wQhRNeSuuR2NCqzRZRmYuznWL5TBG94az8ar5bktqGFYriWZZ9KV7ZSL2QAnLED3xQ3BDNRvtbFvKi7Ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sng48Efh685pNswkffzZnBohmCBrG9Xv3mANRjkhjUUwEspj9hNmWP3ULDS1usjmfboL3wMpg5e3v6R3at1wW6M",
  "key1": "3JhB1ydqhPaBbuGds6K8gSpTzsuQbSnxJ4Fvi6o9gaYA4jmJqEReXBoSA4iCH4LHQBar8RE4ibM4u5TLKhn7cdiU",
  "key2": "BWx8ZGL3bbQftSjd3m3QKTfCst8drei9UbAY1wUq15mLdk9kVyJp2Asi8iiUmMzsy8KjsmAanhAkDYmpKSU4njY",
  "key3": "2R54PcyRCAjQbFsu8dZrqJ8JXhqotgfMsE6WgydNUeGgepJskwQTPWWipYVy8MXXXmY2mJ2M17xbV37VUkNvYbK1",
  "key4": "65pxA2x98W7iCUgodS271gn76dRLPATEcqViCQUwEBqYmuPunwyaTfkKgjXer1ogupRoZxbKxaK2rpwxMGVSL6CK",
  "key5": "2inqgFaZY3QURGXJqrDjmFU9d5DkPj5RiQatfw9sCGPeWbF3zjpy2aXm2G8FqPdA7AH5wULhVGoWWahrSnWorUhj",
  "key6": "sAxyT9kvGE8vnnu2V4xrTCmuLHCmgGT4e1cEJfJ9S5sDV32W5CUd8LYjS2xAwqvyNhsy3CzLgJBc6YDRfRxsZhj",
  "key7": "4h2JN1uvQkBt6zQ7Zdx1npwyogUf1hsDzx8JFWrkK8RAxDLK7LE4qrALvfVS3UKDwkyxbhwHQ8dLeRrixDyBfnWw",
  "key8": "KR8Y4Ap1ZSWAzgVVCgVGE5h4iaRBw7gxu7dmknZpdn9cFHjjzn4Fev6sq3L8iqgXAPUZmUEpEExv3vzWxfk1v2Z",
  "key9": "2T6ESqRfnbEnxLffmDQq2P2yJQP7tn1YR4N72XrN2QrFUxFYJg3322WTWqwmcdmsWz9VJHoWY9zLDqXHb6j4SZVE",
  "key10": "TY2VrTLScy1T1PGNxt9xN9oHPudJZSowHWJu9r2CiHiHyZpuWiBG36dJu19ysDfohDTr2MEzFwLcMvuRrh7aSeE",
  "key11": "4EyJnGBZZ9QW565Dqkq8xJdERc1bKA8x9E3vi5bevH7TTNN2z5wWnxHsNAiQG9TBbwUWXsxYg6ZYWeixgvURBB65",
  "key12": "5pzEbZ9MDuCbDbtRaqhnqsUD1v9Cq11VNa67QdQmLQ4Tme45D6ezQsquPST5Ds979WAdyw9PDHqq3Nio99UuiJV6",
  "key13": "KzYy6A4PnmBDvFfLnvNLCpXS6VXx1uvBTwWRo7XN238VYGPxwxgv1ActqF7nQRVAfFwu6wzAC1sHHwp2mAbrXTH",
  "key14": "5ZmEEMV8AxfWVzkNACBZ8DbnJodCN6vfJSu1TnYXag84kKkjA45gEdciuzmCPZLXDSuXPZAjsv8bxDZiKSLuisjB",
  "key15": "3fMhnn2DWQXugghdsMGPVzrgU1HfJKihLbpaEVmk9mU9MRSg1hN33J2uZAFQqTQ4PMV3jSFfgDNyKRVLg2SK52fy",
  "key16": "52jYb27ppRGsaTuTURspbb3LTQDEmFVuF2cH8remfHFArqHTTHkWgvUQhzw6XRWvCG1Z5pVCiL4wiVKDSbJmS4p",
  "key17": "22ADogszQQvVPM4ZepSpvMHTqr4L5fkRAAnUjEaNbhA3wwR695EehqK3rzN4gkQkiuiV9pcZG3HJkfurx5heyhv2",
  "key18": "25QMeUhPkwrv2zd3FxHMzuohjPU9bJ6WVEwphoFVxkPXMpwHPCteBgwna4nvPtJ1gPXA3z782wPc8oUTPdP3FBS7",
  "key19": "5Q3no1HbskpvbpWPu23nEHfDjaZpe45EyASpxh1xsXGURZyFcWVuoL6rnHnrng4USwXqS6NY8gtUSxM5epYmfHfq",
  "key20": "286j3Phd2yu2bUrAZn4ChmrN1N5gai7W3VEQez4gcqbN5kcNXyU1Gqahyjjm6tNGJYnot6iwGpPcUbBZm5rhh9Mc",
  "key21": "3quWzWpKZ6oaVE57YaLHy4kN9hbVcAAixn5LiTZQVA9eZ9hQx2xspsnkUrBjV5EQuakZ59ypCpXGpdZm2vozusyj",
  "key22": "4v3rdZzC7inaXMsJmtuhn5acJ69K7i67pmRgFRh7QCxxpDCCukGXyCT9HUM84Zof7cJF37BTjvmUBDabdKwcvMpK",
  "key23": "5HFodfyi6kxNxVw5PgqMX5MfoCreM5N1MapENJzuqSKHepcrrg9GWfwNhviEzuRPwoWzWNDosNsAFQdahxximkGZ",
  "key24": "3JXQPsu2wckoD8FALt8REAT6EzZB8MnErt77TmYGDujwkDvLmZcyfsXYc8qkC2uMKz5W9GeZv8GwFJEXh4SLNriB",
  "key25": "2ToRCdVrfz21rCXGTYDAhQ2879sTBxzX3awUFuHYDMPAvioonbbDTnWQa9y7uLPbmrVQr5GRnR17uba8c3cULGax",
  "key26": "488EKoCTx3aPkGgjg9Vrngb5yhVAwBA383bq9unvsyHMxrqSUGzbJ8uoY7Scfbb2swAm4ZcMyoYBNapo3GiLT7uL",
  "key27": "3kZ6E97DA8eqciYehAkwQJjkbhyWjPiikiDpbLu2nHNcK9ytW58tKfdEpm19tRzJ7obQFXZMbNe6wHAJf7pv4f9X",
  "key28": "64ixr6LfFAzNbJDMnUrQqiReWmwx2tQs1tubkGt8VQjBezXN62xB24rB7wif5MuJJvBXcF8z2H2vZAtuawmZUwc2",
  "key29": "G3RjTKX11aBeNU3eYEJkTeDrCPMwn6ah67uqQP1qiPbJB2fLDZjjCCHsE4VFtSBNNSuHMjBEhmhfeSdMUmXQEsb",
  "key30": "5SLA3GGZx6u7jY1JRWhd9qPgQiaWA8HYU5YFpDTgnKovjNpUbdgnqrJFXkdBLMMY2wytsGSoQnWgxcJLWLgNEN84",
  "key31": "3TSTrcnupqeNzx7CUpvdz3kNGwJAvdZ9LBn4M2hU3FYXxf2oLuuFLYWrQbQAp8dJ4pUpdsh7fxdcM7NQv55BfRbm",
  "key32": "48nZdvnVXkWEANFQWLeN8PQsw5tHcANpg37Sr21wc9LsKrQ9qsthJmHQqPoJBsBxt5Uk2Yv13qAQXSrRvPZVEaiR",
  "key33": "3nVksacsiKyKjRADP8ujakdjGQAnEHjeAeDZuEz3fLSR94WZiXzEsiH3o5ZWSro88rWGFAXmWzQwTYaz3odZjzZX",
  "key34": "2QZ618Ha8SyURvhQ5ggYAEJNkSXs6GPBTgbqrPHLEXCGo4irBFJoJYzNUxu4sJtvQPGijdJpK4NHR3TaBkCzsuLV",
  "key35": "2psMEPoftgVBAGkoTFbyHofJ3qeH7kbjUMvs9Hjn1iHfQdxLMfmo27hVKdFuxa4yZy3KR6fya3MWnqc83X9hEMj8",
  "key36": "67kAqV9qAfZehhq2oW9VUZec9jhxNFGg9yuazJ6RwoPBvxBBD1sFDZH4KxjEjqu8AQbbb6LmAVYMjzWcSdAo3qhB",
  "key37": "663UeMDeQKmx2qwvVoEZ3d95G6GfV2nTDxeSLrxeiLzpjdK3nHVXY397srD67vYaNVHtGkPQR5Z2CjRuYSDsxeeQ",
  "key38": "3h1oyghx2hKWSbqyxdexKMEDBWr69gcVW6GQG2TY9j2JANUrLxcSegVDcu8ojiGCFU2BpodTEqtZp3McvkeSaZ4M",
  "key39": "55pkRkBcYZ8GUL7ooD9N5JCzbJCqub17Kp3WkfjNL8ZSZC2sR4rrWrFNrDTejosyMCGRNqV3E6uBQ9tfxjEQGFgd",
  "key40": "4j3EJpG4Fes5LxJJsRkE1R7zH64fuPGdq54h68RoToboRPuTNSasZJ2XYPdTv96vTR6yCrtJ1Ei5KH33CunRG5gq",
  "key41": "5RE9fgpwwbLpfQq1KueKdCdAN8v8jBYyWxTcY73HLwzwE2hvqUvFPaAbmcsUCaoX5tvkgkmdszt2p9r59tN2MuWw",
  "key42": "5jPi7YBk8GXJ2RXD5TgDww159ikuwDFFbFzt6ESd83pevGWRPcXMhXaJasSqJKVkRWm8y6PzZf8TpgiVR697mxBx",
  "key43": "2nEojbJqoiHWcW3Nvuiq9R79RHK5h35pYAUqiCny8feFozcc4JX2xVJSH4Zd5Jf5GcDjHoF6KmyAJzvF5fKGVdmK"
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

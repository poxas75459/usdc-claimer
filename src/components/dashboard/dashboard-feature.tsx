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
    "2Q5h1j1qbJor3ATUYz1DcF1mvehb7RYMiLrTkQTLKQxSrySmhbHkC67CetzKSir2PDU2zzgYqDbcpbfg8LqmpaH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHchpb2HPRQRxW92dc4ZuK4nyL1dd9DLGwLFJzCtcP8v6VmD5vGi4cx444Cc2yYKjLCd5gcuJu5WHYRocmSRDxa",
  "key1": "3NKtG29hAjQBndbUnfLF1RCu9Uu7gyQtjJbZqc92jdZEMwvefe5bFubYwYHR4M2yvhZ88i3yNEn6BY3NMhcyUrae",
  "key2": "44xiLMtmoTvSE5R1CtHRSXqtU7TwmrNNe671Stwu8Hamm1gumvhCHPGGzpY22wfpgXHVTVCc7k322dpX3DnsVJqW",
  "key3": "SScnMMJ22pPhKSizy7zFiYN4YayA4qH8Cj4rbwXav457F56hfAxHFZXhKVoTrFtwSYVTqWrqxMXEs8aW6pFHV9J",
  "key4": "3aLrLvcnmauFs5Qe29tkYXxaibGskpxJRFXxcMe1wR4QdhE5Xmb2fZqsc6HhUn4BbeX3KGndqdPMkTE9hemkpAcK",
  "key5": "cMfNfzvVj2YNZpy8x7Rhc6tgEu2sv4yaoipLoLnFh4eApywDT5jBsk788kMXddhn36vri71WnYeJWkVwHRNSXUi",
  "key6": "3gXW4i2bWzi4RJEEb64iiQeMxERABBYdFRcUtbkoiycuvCgnJS3bAFyxoDStbgHdjNMghU3GzgY4WgQWLX63ruMW",
  "key7": "yN7zseBxRnGCt7JeefbBxW1mvFaEM459rHiQjeQuh6qv4YtH1CRfXchqaWtfY5qg3Tyn9Zrc3ensKD4WJBunZ9G",
  "key8": "4UvS87Fqv34dkrL8VWbAUMpJhn4sEWycuUHheg241iU8Zp9ox8ao4Tjz9BKToEwP8uv2HpzWNDjzwpj9h7Ujh5qC",
  "key9": "4Ao5QeFe6s1YDRNkPoogJ8rK9Spnpf4EuDDLJaDtbkV2s3W9xMshn9yeiTCmC7wqfb5cPF2zwzEfTKcBdCz1NZZz",
  "key10": "3j5jFzfqAoTyn3bBBp7WuWMdPGjuQRyqMFjHY8348sdXMdmfyARrSMUZz6Urm3CkkiuFvzMtL7dAUzgMvvR46X1X",
  "key11": "4mnKHCmRSWzSnnwdn4QNs3xRaG7b7Cak1MCZv46fneksYyE2UVUXfpfSfRiC4hKhKqfVcWqd4y5ikgPauTCoJpHf",
  "key12": "3fxyKssQokEXoFjut3mQ6gpZYnSTwSsHYdsmT13iHCvbE4afNSwcW9BYS2JSmYgvSDDknsd5WKFjUBxGkxzHus6h",
  "key13": "4Pbei9XLG1gdt8eeKkygMsqjzQt624M2GZsJFMqEzsJRxW9iRsYYUWSdFBjQfCifWnSwp1DVfYEJnVHkvQsWS48z",
  "key14": "3aV66RX9VddqjXqXE7xuBK9chi66xhXto2qneDGU18Z96WXGVZw51uXMZJ4CYTHDRq9GLT5GPpbbUGbKwXUwULuK",
  "key15": "3maz5qXTHjiApCUfZh2io78biXvnSs9EmrgS7xCMDbbdyTeqHY5go2JEJbnQVrFWXpViCUwc5LsoW3wBtmVcZroi",
  "key16": "u5ViCL1davdczsDNbJFHit8HZ3SRHF4TszDG1UErEG8n1L5r2e2WFuQGa833MXSPEGgjAW7wBtNzeWop1MWRgTV",
  "key17": "jCr4ambjgXcTpcykXQ9zKnPn626PtbEmK44oVR5Hm8EB7gPoHVF58mrmHgf63449XqL7VUMpxuvkopQCNE7L91a",
  "key18": "28qcP3HrHkQyC3pD2L18MSeoedcXjWeDK6oRCMQx3LjyAKGdTSVY2R1zReWDQryrs5wDjDv1RN1etwqr4S8fDDdb",
  "key19": "3w4cvb5geDVF6pt6JsKfEcimenSocRtRdp76iHZWwVQmnbHPJ5Brzch1KYAR3x7gQcXEjeoodMqUoahrYGWF77Xx",
  "key20": "5mjhD8r2A2vr6yMdoUZbeTpbixghotNb1KSUDb4GRfjnG4G3HzGa1BCAb7uwmpo7DgRYHMcBZWtGeLENU5H3PGZs",
  "key21": "5Q2NV9mPtNk5pGoi94vZ6SRqTEuPEeBPYBGtUicjgkpgeqSTHnxMsTtmQh2Z6AgBAhWPwWxyceKqjQwQL6A97NBR",
  "key22": "yzZTipXzDRNJsczfXrxs6f5u8DcakPzgFwmekZnMq4KqJcmMBRcD54r7VLfLt3Rjhf6Y4Tb1ooRT1mZrWqfirGV",
  "key23": "3hCgg9HczAyjaygvoGCoY3dRC8M8g5buNhd6uuoSBHVzHdVxJDKT6cz7pGWd446jN9FUNi5BuCaF364tbGKfbFfg",
  "key24": "3waC9i5ErXX81STJqTBvFcrJuiUfnY9hhy1c4kJKjb671qySDcdDzCjKPmU6Q9SAfnceVCX5yTNgK9opgW6zxByG",
  "key25": "2dpmGasGKkQekF58YArunrYa2byFgCco22wUz4ZsziU26gvV6jmaQ4WnxGJm1HUAoTZeJ5PU494YCFwn33xsGTuL",
  "key26": "jFH4K9S3y3o6ezqwvnKAnDfUmUwuC7CJmft7V513bEcgcssJYnPYDK4Dc63Fu7QEgufzj9nkd49QiXrmMSycVrb",
  "key27": "4Tu446i6CKXMbEoZ56dB5jMyKzaVhEWoqqZG3sZCSWVtqp9NAT6ePn1CBfypZDt4np316hbyrBkcdzSnUwN1Rppz",
  "key28": "4MEw5MPp2bXSeBAoS96brhw6VqFjWWwsAoHb2TPrxX1zdBcd89Wm8bUT1KFLLD6vbFJTt9sWZm3nvYJUphMFfZUX",
  "key29": "49PHEhHCfyEAjvPsXvqfQX3Y9MXP9QqpzZ7fS5Wow6Ywgqru6cogJtokwkBuNkuZS6C21faevqkTa7Kig9rPd4wK",
  "key30": "Utgaph2rE48Mz16FP16A3CVkNWzhktKu9Vc24apUoCBi3B8Q4uL4BixG2Vzor2c3oao9yNRd3xbU4D3922Pkwqc",
  "key31": "4kgG3pTa3jhGjA7gWgtQ8ME56NWt2Co25wtgYFwGS2wCFBJKwkmshAD5okdaWhsrQZ3XayFy8ehJE5h6foTMps5R",
  "key32": "3jzmUprnPUNWdY5fLebKhDGXuPY8zfGDqMnZgRaovd5FkJsBuR7J573Nz7teGunosV93DvZZCKhWcn53uC8WmTd5",
  "key33": "2LunUt4mUJFLWXKac5c7YZVhXbcCAgqpUzRxPnvjYbLeswm7wNbYDgCYJUoCmUmcFxAzNdh5BydgFC2uqZ9Xjhiv",
  "key34": "5NsumxdBhVp49XZMixH4d9KHYXraHxAeAD9G3K4Ast2BMtjnDqQv8h1tPYsTjtft6v7aWBiB8pn5wh99KrefZ3mf",
  "key35": "2qWzsFtmeandKZMgJJdCwyQtQRgXmv1pY1Lo71oxWV28dR13ZJHJkLBfBh3tRr4VuEs8iHBxbgeKK2f4Pg7kB58P",
  "key36": "2gg4rMe6Wt2zNKFzhjtoFNo2yNmEaz6C962BQBVuJx6ufM9RiPYRnFT6uh2mJzbkNu2NxFVxgPYpKVCMRy8PHj4Y",
  "key37": "25cJ7nevPoXrNLnpAnuyE1XwSkdPE9DMmhvrWw7t5DzRMyEJWcX4eXbdWmU6EYVvwLxhmh6mGzt6UpRZhNqybCds",
  "key38": "4cJucy7zN9zmozPUNJERKegFa2crVdnCwLD6FcUkjUYw7owSrGzxC8PpoQBZbJnDFZprjgHAG7ewANJENMMfaQnt",
  "key39": "4vEx5iA4PY2qJ1fz7DfTGwA4tm5mqasqhAxGP62VkJLbM8hHMqoDypXgwdiuVtH9BYWozSQD3PtNCcDonTufZs2H",
  "key40": "4XD7tCvtwtTqj5s6E9AuYkNiw9vUN7zXPGgzcnBsn4VJhs8aa239d2EB9we45EwXBRezPw6mdeTVFAaW4JxjgTkC",
  "key41": "2AFSM1V35A31eiPwKMDuHJfZT54TbPfUn5kXssCwpWMXr4guAUZtZUxywwt2wrC41eQp3kCiS8DV1hYNS21VEZDd",
  "key42": "4L71mn4cCGqkEZruChGRVZK6oTrLc2kKBsPEeCYjVCikG4rS9DqfEeonrYakhqsGnTq12Z8QDYGjT885JEg764o",
  "key43": "65BGEZrkcT5XcGtJopse23BM3C51XusvkCu1CwudMYbq8qcFxrGJciK2CdLXWFV9UoWxsDdNxt9sfP1hjYFsXnz3"
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

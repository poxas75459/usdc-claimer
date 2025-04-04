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
    "5VdAA8Si4SaZzb2C7qguVDfjEtnS7KBWF3BdQpqSfjc8zJd6Av3uSinYNTk3Xsf7ym54UNpmLSnsgbPbk8JnMSDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55i6jj6dYHbJjY7MjihAdccSZFh1xor6Xowv4RCxdW1GCsDptsR6She6TFWi1WbVcJPJKE92ZkDfwKgAUXfoMSKb",
  "key1": "2bJ3KG2G8Yo3iYr4eEiWs7WGatnDnDN5if2eFkwDEAqDa2Y2bH72C7WekhhXCez9oG5Q4xC3JUw5DaCsttP39ryX",
  "key2": "2sJuxnFTRDo9mRSRLLt2YxvpLDxGTdVEWis3PStazBu3qVQ4pqm9DcN2Vb6BSxdtwNYWV5XxS9curQgkGEe8fZXb",
  "key3": "5iW42N6CX3MsAijLkYnVuwbkSMAC9QLdCVjpt7syCAGYa7xuCrFmaTBQV93CZ5KMiAPUvMJUfLELgvzURhwX31SE",
  "key4": "2Cf5E3n1TCWiJBVfz6TGvvUcLu56EDmPwKDF6x3pu1fY5pSE6m6KQrGHfQuYuVbUeEpoUyiTL2mgd8ijAdXFMwYg",
  "key5": "7Xjn2B1JskrKxWCXiGFUo5p4vyD4vGViKgRMcBL72kihL5DrpoWSKgxrTNZTvjLausfJJvxwdFnTa3mVUGetdxT",
  "key6": "5iFjsxyoTDvv8mZqDb2Fk8WQEkX8S6GrLXQZGh13kGeQqhB8qxLo8hBD2gxVeiKBEjq9c5mJUasE1uZMdiRWQjqR",
  "key7": "4mUFrsaDbyAs28PhxGhUcVbef6EaCztscM1kzm6F7YdhJkb8u4MkMKvUAKmX6aYUMyhg3qwVaAgXNkzpR4MEeSAm",
  "key8": "irYtYYeD1ZFxesnGnH41BwhdjFeYciMBvUk885yWmPS2Zhs2HdZnQokhed9cjQHYzF1UrUWgynuGNasetKxZrSE",
  "key9": "3xpx74J11w421Z32jZZ6RdS7YwtTRustUBgMgoDdeuTQdT9sZedGnqzoY3YKN9ZE15LJE4fCvfNgR184AH53RvmC",
  "key10": "4pfXEaGACuTZhxXEU7Mm4mdXpqfVBAenqJpsUJtDJFh6V7rfi8RPu9wc2GgYVsXrgoEVhAEBZiC36x4Qh2C9wNSM",
  "key11": "EFGrZjAC7NrhEiYvYKZVLqTSB5CnRC9gH7f1sNZ6QQTSgJ7edQqVNZay4mjw5P31atB8wKj317cxwFHm2jNbjrj",
  "key12": "54WDJzASwUGHQx54VMS7soM9Kj2y7z6ZxLQp4v5mbhKfMqVzP2CpZms5inpTsLpj6BWHX16gmW8hcWfMzcGA5cUj",
  "key13": "2nFkxpkpD9SYtcf2WavuTz5sJP2zKc9EBhombvqBsbMP7DiCMJykN5cvC3yU7TG1iJPDhM9JwxHsaDyu8xNbkek1",
  "key14": "62DMZ5NGTZF93vTHokqFZQBMt7yBkgbPBvz8yZH5F8quaew6Kn87gL9jMMDqV7jquisdwmZrmU5ThUyBw46Z3Gow",
  "key15": "5jCpP3YkaLkzZQSDhptPQVX4ycGyZvXjtsGXbFLq8AwdZxeGLHTjxYBHjkPcD5ZNHq4gzJTjNidLWcvTfNwHw8ai",
  "key16": "31r5pwkmdY21Vowe2VeoHf4CxenHZXuwkJMNxnirYkCJ4i3dgZA5heieWrcrhf1JxAPNoPKtovEj8CgjE5HkfSG5",
  "key17": "ZRUcYc4PCi4VKwBcKReGqsRUBuPPJ6qFTLE7yrS3WaS14yDe2gJea5dmromDv2qUWhZrNQP5gmxUY6ckpH6F1y8",
  "key18": "3Ni22EhEoZCQNeKECP6RLcqDmBHUHUc7jjPcwm1yvWhrFyVdAtMqkEBFYhQCJ9QEPt2DQY5A2JzYak4zSei1fdYU",
  "key19": "8aMpPv7zFVtZbkQstJ5hegoQmqkM7HhdvHB7jmykGg9wBqVx6CcSaVhFfms3vhs6hnvqZPhNQRj4FwR4r9xbEaH",
  "key20": "3CSUpdTWxtmj7UyqHuvkXARytNWRZ9UoUbuB5y7wd2Z4fZLyiFxW4Ep8sdT4MJVYu3THXT1XoP34vTTpR9aruEFC",
  "key21": "2xWZieFMw69dK9J9pVCBkavULfhb6xTqeEQizQats6hiWRLChVzkKj77k1tLkMQSneJMpf1BRPPhKtJofTb8zr5V",
  "key22": "5XSk1w2TZGwLKRxjPcBbdw8wZHxvp8KpxYp6jUwDM9CcLtW735CoseRUrQqugKbvN68W8x1s8KyrCmd9W9x3fkCn",
  "key23": "231bdG1F2eRQkQPU928zm5GWN7uyDope2kywS36xYsvxWDh4RkgvUUbB3Ra8XsmA1onyJ1vJwgutY6sgxGmdeaTf",
  "key24": "3jSdDW9aAekNGcMw3Uv1J6MJ79WV1H9GpsZkzJ7udz7Zf7bzreJuQZAXc2Rz3hZYoeFexNApPSsraSAF8S8NsY97",
  "key25": "ywHReyqULSwwiaWB7YfskS3P7qnqQJHw7py9rt4XuEa9LzS9Abzws6zABQNUJU9aaQRchkXxZRcZ4j2VxE9vtCC",
  "key26": "RXp6Gnx31qyWxWdaLTEjKuZyDtkEM8ZRG8EH8j7zbtiVVmd1gfWecD9UAZpArPWmSRngNE6FTStjHnQgvkxHCN6",
  "key27": "2mtbEWEMMn8rpc1CBcy9A8MiK253gSuVguQFJNEQiRntARngBYiApBxhU59JGbzzq3EczxAB4pwX1Cw3p42bfJCW",
  "key28": "27QgXuUsppmALGN5mzZeGQtCZzuUZxnBT7mz7GZBo8xW2v7aLZBEKREybCPpUMX17eNY6oU5DqRE2YbzsjE3KWoS",
  "key29": "ha4F1fbcUYNpA8Txfv2rXephfiSz3WvYaccgsS3Eo6R9c6cW1xiCwr1FWPt8qx5rSjpaRXXLpqoYUCqfP6E2K6t",
  "key30": "4JiFhbeVzLPv3kW2CJ2GCmgvaZkSqrV3oDt4KmWKgwzzHL5SFeL4FjWRRiiANVcePFo6sCro7AwzRBRYUG5NeWXt",
  "key31": "4JukQ2Me7Vu7qThrwjNxJZzeXHGgQ4TntsgZe5aALh2SLayxbAxvEvgioZjzTtwa77RNBSYwbUCtVYJeo1ZDzT83",
  "key32": "5AyVgZKEkmbp7Tnwe96iW8NGB9BqMAJonooYBBiyk8HeeozgZ78oYRBvXzZLymJ2QekquFWYJy1DbXi7qNHPjNP6",
  "key33": "5ZfGZRfBWB8DaDm6GDPTpCGcF5sxB5PB7pqdui6v6DZ67QkhfT6JAX6oPE8gq8ByVK3mkDGhvQWEiP2e6kJuf58u",
  "key34": "U46C8CYRK4K1hNRou7PSAV7aS4xaVLZymBCAZKExnMtfR3BEgW9BefaKan7xmHfiK3xqJzCVy9g9XVG1MYi8jEF",
  "key35": "5fqcifktRb69pD6pKqRGfQh3BseAb4Gncr8PfrsFXHEZApxmFSnt6WFBSgukN612rgMrv4vhVQ11BWBPPuCBCUAz",
  "key36": "3Jr7xSjHV7XKgXmd1JBUbCxXXjUhHJme1hQ3qsNbQhKNcAaS4BFCWWE9qTUeNcJqBAFxHBqZFuGGxdiVBga6F7VT",
  "key37": "4T2MPE56HyYRekgmnBfaK1xh16qyjGz5kKLx8vbcY4xJ6jf5XZrfTkkYL3gh3M2U8ZVFG6nWtCUFa1r1p8CgSFAN",
  "key38": "4hXYVuGVQUvvZ4vnKY6zC31Znhf82ZSyyXc4MP5NoHyGYYvd9ikGzf3VsBnQDeEkg5EwETzbctb7V27SxKhNNMph",
  "key39": "5sa6aLdC3jzJzys67Nk3mEaTiF7Cx1PXrEbLyCLUSuQA1NALXgzcR4pXvA9qfgEYuKcsjqczBc27B2y9wRnuLRiL",
  "key40": "4KGKCpkLnSo3YKavTnb4igJCaJvwMnbcmvtufNLCwrxpoupU3nFuyD2JRQFwLDbAzMdbS6HkzQygMWStbhdgT9Pn"
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

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
    "2ht7x1pWFaZsrsqymedaEeMoS7yqaW2vvH6Mf1XUEt8TyBDLLkdFCP2iJcbwfLFGpPjuzagCCTVkncBmxtUXi7pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muhkCDPVgwp8yaqNrCYutQ7P2vJzaV1s5nnqqRRXYvjbABs5W1cyoBjnTNJKHY9n6SgAcEfEui1mAdzkgf7q64t",
  "key1": "ocWQsrLZLZqmg1UqcJfhCkjBjjbW3fSgfBTTrqwx1X2AxH1sNcFCDq7itcLqHGRQqf22a4XUTTGttLpWsE7vMoB",
  "key2": "248AJkYcEghiwJzHkK6PWNysuXAtJYgG5nXrhc9EwLu4QFd6HqYZZaT3QQJNo98dJZ2TW6SYHRhD29x2AgFHNYaJ",
  "key3": "5kJSv4rp7qn76AwqJv116Wuh1p2qgkugLZBSCrc553oyxAYqMFbqVfPuCA8WMf8umZknFYTd5cTKyjonGRAS2Jgb",
  "key4": "oi2UTCuPHvxpUkDiTKktUPDrcDHpL3mFSgYNMYxKJCxvXzdAJFEtGqYmANugsggotxcsu7sQQt7eKEK12BJp92W",
  "key5": "5A33mVrYkXa4mEMFmrXxMbCDmUudQEy2SEA8ZSDQzJHMuTzWKmxZ1PehgXRiSmN87BoMpjJD38U5M89N5Q91mRoT",
  "key6": "4WeZ65XjBCVc6NetoKc7FCMzxLtB9w2gQjMERsUwY1HBD6MeVt9f5cYuyc5c6nHNL8iMbdTMkJFQSCiteXfTjDm",
  "key7": "4JAwnF73RzSrHnS4behbaSyxSvj6ymv6Japz6uBakgYpx9NRfaXRgUJbvsvNowG7AyQpowNvf6vSxM5CT3cJHiX8",
  "key8": "4Hwnxp4JDq3QWfhrdDTeWGd66o7F6Lds7ZeD15UujPYZK6WjnsT89AzTTBUpPJiHXYAcGvfJkmMuj8KrrMxVwxGy",
  "key9": "3EZg3NEJhHtDWmsqyt7dnLtF3aA2jcc5FES1JaqoGCDnq5ZDYL6NLxESX9FgwxsmwJktFzRfreUqRuWZQgqJ8ucD",
  "key10": "2gZaHUso6HAAswktPna2pVLGHnjiL99qKJ74kCW6TvYXgag9CLc25Gg6WdmjCP1ja4EK4hYf8czVZxboTWniwLMu",
  "key11": "2dWu54KygG6LuU7HQwwMDXuSgW1q1guojxB44eFFmzBiYrCoTzC6PERzr4VgcZw58kMU6262wP2qf8GBfuKFKtRh",
  "key12": "5VmtrH8oBGnGiynwpTBViouVWQxRwgKCKTFiFsLTStMKiEm1km2bSe76xCLVwRwrFjYcnbwrN1zSDehb2WDuko6e",
  "key13": "5TeGRdwaHD5XMcaQxSW8xVyYstrhuDsur7K23LBVmKQLudf7dBsPJQNtEjP6Jr3kK6qsb5u9yiQEag5zzbhZmaZe",
  "key14": "2MTH9FgtRc14aLu8ZKG2vQT3ivsAaWiN5JdDDEgqzg14ESJ2RYVrHqP2TesWUwoZjZGCYmz4xPRGugEgC7MbmUFU",
  "key15": "4o7jipbZSv8oQYPaa1fooWzBytu2KfvMogjhBdpZ5YwvJtty8fMsA5BBYxq9zCEs91fmdDzhNxVCfQ41h5HcC8z7",
  "key16": "636gVe9Y1ku7bNhKs7D8R8EfAYYotNMwQrRTCm6Swb6P321sr1Dy6cgf8a3BBkRdfEmHjn4HXP4W2njdfsPBsWg4",
  "key17": "3VWvCFgibvEij6GbEPa5QhrZ8BBrAim2YfJHPXo7vcMzEiK3wFnVBtdJYpPFoerVKLmSDGmxCQFBP3KzuQsEWvz4",
  "key18": "4Jeq66eSBqxFnEywT6SAzuo7FMNSdc5Yv8DWnopUe7dRAqnz6gfgpx2Z16oeJoNM57Zf4zU9z8bpEJHEc7PGRQgc",
  "key19": "5ZvWeBwSLpVcpGSRovgnTpRAncyTpiZrj4pDmQ22K8o5RUyr5BNZGxD5Y5p8gJ7qVDFJd7cd5vhSXGQNMs51vMgH",
  "key20": "3i74ubbP6dydHisuGDJ7wNUWwA5g6UiZodNjHixfdmoGE6KCt3afJrnA5SwDKAtyND8yiFzy9WiHU6rP41h5yJ3c",
  "key21": "2c6GGQnXmA5omE5b7oLb7koKhxyBm4itfCPgLZGgQ9fKXUSkNJbTdA2g5mTtdzcQSd1Qyshy2kB1SvwKrRLRAPzm",
  "key22": "5EryxBQGyBFRFCJfLcFRUNCAqHHmJV5f5DS2hJBSbB4VPbYirkNK14UkJwE2yshv2cMnjuvgfQbiWQQKcG3tZwkq",
  "key23": "3dgyQnN3UmfZs1oGMTqDPB43mn2pC5pfxRWgbugbtuNfpHG878YgKAsg6zTRVzTvzqnK8jX35v5sLagCMZvXBRZ9",
  "key24": "xXzUAuSaBTBrZGrBmatXSTFu1zkKkZ6t7S2RbrHe7cWWajSjgjtoZc6DUk66DAedy6eKYkQ4JgU4kVdgkeUQ85G",
  "key25": "5LHJMm9ksXA3fBJLK3DCY2u29jA24hVpayhyoRZUNtiPH7Ntw8DevUoAKeGFQZkpeo1GVgKoojmKe5SSv1nS4cmY",
  "key26": "WkrHxq7rSc9h2gMxLsyJeu94cwz186KMMpCq4P8ugDSQHRhWrK5dDa5yAYsXhgxgRUJHiQQASCJoDBs7F5mptLk",
  "key27": "63tytziUbDk6q1tsLgefVBeHELnuz95TdbNf3si2Dexbox8zLghxxZv8XLqWrEo5XsWZfbFfyre4oRebioFPyStL",
  "key28": "2Esu7ute1sd7EpK8DNZA1gwaqjDGrePbYEZ8QDjXyhStXc8BqgqrjL9o1JpUF2FgwV8zCeVCYse3HT681TRyFcxG",
  "key29": "67Vz7f1NtZn5WGGpd5saLrdyqcYiEz8e3sEp52sEG95kPunCSvHdtThLb8xyABVMXzXBUUk5P5MSStaXkn6rGnt7",
  "key30": "2esSXtcSCaEwizMP3FncvwFdMMTNtCSCoG12mpNXrrNJBZ4JnXz6mLpB8FKtziFuv1zXmqQ7yveBUQn2LYQCjjff",
  "key31": "3VzM4NLyhyECoPRL72NaGwgbB8AFivDtixZu8umbNZZnMZimZZAzKPv2Q7H1Zkj4FfGuJkHdvsXXWgawGtrBZv7n"
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

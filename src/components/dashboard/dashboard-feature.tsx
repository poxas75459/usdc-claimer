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
    "3V2NR7ckh1jrjY69bFic9HDETWvRhvaUvjhDy46RTYGy8swZqvkGLrmCyJCnsATwU391rTWrGknbtFiq5khFUxsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfXSS2fgLArhRh1B1GPMdTKewFvUzYCTsvS5YApfMAYmLWFU7NjrYPhfpoKyyymoypJKAqqBvmiD6JYHt3ok2jW",
  "key1": "2r9e4rx9QJPkhrK55S19PwZkVYqjFnZpaZmMKEuUL2GZswVX2m7tKkWoTp4pbYeAbAaXPWbyywBxAjboQJMSWv5U",
  "key2": "4Jd9uqnLwvC5MW3qTDhcorxKyJ5w2Z4h2kV1q7KzoRx9zJoUukpY3di964Au2m5db1orJPtjWcEFRZ5gqyjr9mzG",
  "key3": "5BtjLfDqr5fTtueF8Qg5EnVLinpFvFm9qy8zBCX9juFMgza62qxwb3i2nD5KV7FdhVgyB23H2MJaDnq5h7LX6Wup",
  "key4": "27VTAWFW2hfnYMv17H25oHzt8oMS5b5JZry9hfyWwoqi5JS7kBX5oZrpu5kUvVz3jyE9hhhe8whMaCu3VPsPwBpb",
  "key5": "F2WmQxvNzAa5zECDSro7zG1ALVGY9k6vp9Wz7KV71peKdH9Erp2vpwQNCfTihm6jsygkURKY2YcVtmtPgxNcPQJ",
  "key6": "R6owYsFDkJW2Mmw1SHE8c9uKikr8iJPcpiZM2jrhj8mQpVCrYd4r6XWJy1TxMT44QeuGxsTSUHtdnwUwQ5TdHfo",
  "key7": "53J1QHnKzAZmREGQCHYefNfuSi3myQ97W8W3V6s8KYh2wmGKLs67qSboDdBTvJw9ZN4xpRzdtjX9ngsJRgtw9tXq",
  "key8": "4UeN5cugb8bomKv8KwkdpACeV2TQdSKNtfHHCq2xY6qLBJgPrsaCHCx3dQVnB3Dnpe7p2Hn6g1kFoYeT1hVvnhTA",
  "key9": "aeBGiodR2PQno1wu6cVayqs96poTFf6sWbuUSw1LReUYRyWhdNWdpiP3otL1DgjMer3JqjuxrNUmphLPpqrikS6",
  "key10": "5w9v94eMEZWc5965eFQ9zwa2dAu1dnFikSjisdcGsizDCHk7PGz1zvDLx6kS8Zz4j6VNh1SExUrVwSuoRNCjibJp",
  "key11": "4dJ5pHpcPLTYfiuEGkCdGGjUsAvted7sV9EwyCVZJB9KfGxo58SqrvYjoULFYXzA5YSq3SnNxTt2NtZmPbzHFVhT",
  "key12": "wWJBpYjkenuHbogiD5e5dPuEdtimzoYqWmj3HR29c47GByoZLgr7xAAXKehiPnqpHKt7ZPGNK1Ym64t78uWuEXx",
  "key13": "eDxRtb6Sff9R9G4596RNuWWFTycaMtsDJHMqspVraGhbYRLxWYyfDMgktsw5tLab84werYEzPFKQKiRqgNDJuN4",
  "key14": "31sShS6JVP7JbZmpJwDNCq1UFWCxTTzpeJBJhhhGKfS26YM2n2oCzqsysFViBC35fRPSgMb6QMQrZpPzYBiVFoth",
  "key15": "2EySuRRDfBPzB8WaVjYDasxvxyNd9QjRf6uaXCwiCQ4DQ1C7qDA2mLT9ANtzGbdXMX3dBCpoUozxToXwqBYSUt8w",
  "key16": "3sythkjFGRvWtsJQLw6XNNSZLC9mv8HyrtKDmTcJ5qfpcKUBurquUNnB8dNht5tXfLSBySetEzUu9Rv3CJ4e6HHi",
  "key17": "4XBHjR9PAN3gqPszDWs7KLfExaYzcUZNt8PGyc238ChecKVBTiNskG8SxVkDF54NnJXW232CuMyxBm4BLEgHVkoB",
  "key18": "Dro4AEf2XH41numENF4wjd7C3fY5V9f3W43oLo5UB7E8GsGwgHhMb61yP7XYcUsrEo38cEqzqPqukQ9jg49zwUd",
  "key19": "4fCRECvS9tyQzvGrdDuorEc4j7ioddECqX616Dwtkui6YQLdp1hbWUyUdT3UNVLMYpjRCMSzmU18RupSoQQWWzLg",
  "key20": "2hYkFw1TtiprAQvSdDphQhW4Vczjj22WDozve1aVhNjw4JfAGkokZBmrfAX9oLig5ACShkA5jgvEWh9iVZffx9Jz",
  "key21": "MTxhJgMCfMqzgAoYsuXY8FkiAz2APioZA53Y3Ldhurd79RiQ8aM1j9V6KSdgYiYZxWyugTNQRUsQuK6dpAVeqNp",
  "key22": "5cXedCw5dcARL5L1SrAHTwk4A6RVuowkThekPAWaywzSosnoPKFDEQ1JD6Fhjo7DmVFuzTzJdvueHpzc8X6tsBTP",
  "key23": "4MWKMCPELNXfPfUzvQwfPiTWVxikv4DqJ9EvyyBS5GkJSadqa611vQKT78MksynRNUwJz3Tpx96KJkRfM6ZGGjFG",
  "key24": "5kiMZHVGxuWeJm5zgT7YUNA15mQFDGa1Mcf97qbbktyJSu9uaZaCdfLwr66HhQSRUb9MqjEcN45ka45sMyXj6dvd",
  "key25": "5pUyUev3WH1gynjAMmjeo9cmKJL9xWnNyZXCg5Lf7NnsZtSMK9wJuQiEJSRQFcTqnFy7j5fS2aPAZ7LCcfoDti4d",
  "key26": "2JxYpRUpWu61So5DADLu2hqJK1C1GPA4nLzqp85dujbB1qeB6qPr2PKpAAUMQSzzMzDuv3Cbi1a3GYrfFuaJ1jiV",
  "key27": "5MAiYEVPgcqG6avMcGKhQgm8NVtXSdq7GtDne4N6XNseNkd5p7GSpBRLmy9hRXrH4vDYGXunmCKXMaHcM1EFtsRa"
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

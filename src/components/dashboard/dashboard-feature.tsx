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
    "4nVSWCxb7ipkmfmQyBhmyx9NgmCCLm6c3S9FpTnyeLYTjzvNxe3D5eJuVxuLuVnmpc93VWmvYZTon4rAd3vHRjrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3McNics1ZpT5Z3eWd1VhEqiAqFx83LTDWz7kh8ZgvZSJixYdsPwcp5WisQ14Kcj8JTC5nHCLYSCeQ7Ak3DBDk5kG",
  "key1": "4mQrBE6VKfiGo6i48gVedhs6CtLix4dAjGAsVQPuysnUavVGh2QXUvqJgNfZXNfVvpsgauKv4TY7hoBWU8z3UPGE",
  "key2": "4dUuKgWfXr5hxaWYpuYVSgcwoANi2HLb5wD5o7XEQGdH94TyUSWbSJtrnnKmGgEu8hVVSTVs7qXPSS2YnYPYxQ8f",
  "key3": "2rAGx9a9VnQbNE8Z8U3K9waoM9Z5AMG6NY4jZqKbSHQoE85vzjYzJXiCLa3Psb6213rW2YqFBVj2aFRvWw9vADD7",
  "key4": "KnxuEC2cSUiwd946oK1BRhhQ8MCUiCoKLcwCyxyLQTn9eYQUbanVN5RpGnLH8GzqrLStwFnw64fnedA1ni4BtVp",
  "key5": "4VKPKFwacZ5DziA7WyaPVJxeoZg72jtwWx1NNJ1ZG6mBf7qw5PjQuz6hKo1LC7ipvTV7Y5ivV2WLis27bg45G4CR",
  "key6": "RsqVNsq4swv4UB9f74obevMYJLqXPbY5chknpJmUw5s8VVM8dgjknmsA1J56RCxWSUDP9ZYciuCHmq7Qiig3Rou",
  "key7": "uaPSwGwzLHE1ifCgQZsKCmk4kcdHmMR4ajcJ5KcZEBMyHBsVSS64AWR69VYLsfUS67nvEqzkJbqktDDB9F6DdLD",
  "key8": "4DXMewQc4u4WhrJvztDhWJPETiXC58gDXBjr6d3Lp19dUvh8WAGupxuU9FwMn8DfaekYR12FJCNvxU4WyfhHh6kq",
  "key9": "25BeijvmrZzfYKogq4WqsNtPwYK6QEVtLmSE6akdMcvp1zq5khtNrUoyrkByC6hALbwXY79oNnAJyGJC3KiYMbsN",
  "key10": "62o42Kze62NvdHA5xRrJyEx1grNZdbdo6wfyQ9abUHZA1P9TbE2NW1m2Epcxe1AgMZkZvGVorT35KgURpqE9qmNf",
  "key11": "4nT88SA3hBZN7s6cC5b3jBrrh3KWUrbu6vsRHYui9VZVSr9RcT5vtzGc4aqRa1ARqm9MSjoWkFko4hxhi481RBxq",
  "key12": "2t4fgiLK2ZPhohobErhi7qPYf5NDLE9XjSNrbjVoDUmZkP3FwbPXHT4NWn9dM9QZK9ZsAsovogo3CVDf6oj41Na",
  "key13": "K6uT9HW8YBFXPDSkvQwfJZjRERLeHDidyLg8TrcdBBVszV3BHUTWN8jSHn7y6oJACj3DY6kBPdtkDYKcp679UCs",
  "key14": "636ekp8eLwPMmfu8ihJuVgrkigjy7dUNRgXHBwzNZurtePH1Q82CRxLWhcbsrm3B7PgBMUc2d9HC51zDMN1g3XcF",
  "key15": "2dZYzajgx2qa5CRgWqwwyaLzWkfhQTtkiSBM9jNeYAYFjBXkJn3VLjoYkRmqUb82BJ6ThMwUfeU6AYztTNgFiCft",
  "key16": "44Fh2fXcTxoPQdtEPYXnBSKFhzXtGmJ9kxvUwGecRw2btAvGDYtLZW83qxu6auewpGiFzZKKook9HvCdqYXmmoRQ",
  "key17": "KvyHkMEq7QPdWto2U39Qu3NRMu586163NinQktKMs9xKRoySVmU7RAvhneNsbawiRgkdY91SNrLWQjzp954ewAH",
  "key18": "5QwxyzhAkSg8yBTfHB1xXcjSo2fx5cLn9wHKgeyzPxo1KikgYRrTGPx7uWY3srjKv4HJgrYqd65NzbvtwxU9C9y7",
  "key19": "4rLupg5dbh3ZrmSwwbsLJ4Vw8CW24Lb1ATfEgPnwfxdEizg3DuBe4K29voPZ4C7hj87uDNiEdqLaAQZHizVKgBhN",
  "key20": "5CzUiWTnNBSD27WSJ5DpLVsK2EenAU9Cbmo8nGs2e1aGnG2PXTs3xU3Qri9FTkLU35w7UBatbv6Akt51hEfyghji",
  "key21": "4XTvR1Wrig23VQdrnNiJHsKrVYrM1CCZNoX96xBiWGi12atHBAAFBb6PRoUSSYi9wW56p3na9c9rGhLpwE8w7S5q",
  "key22": "48acdHSsXFueQdFpMLUMMmDYtm244z9gRNyZyGJgUF6JhZFtMycfGq3RjSs9cvabziTFWdFTDhqC43ywwLZqeY5v",
  "key23": "33y6jvNJ5P7iaUujXk2wXZpCWTnkt6F1yuV5XEubLF7mAhmycSjkUCVyVkwdBmZffH5ErtSVW5VgvquKLSZco22R",
  "key24": "2crE6LzfqeY9pNsnPauGUJoS4DsDM4F4DHzDTnQNwSQus2tJuPmUGEW44iSn1doXiMsQcWCWrJvQdo5xNNUjzUhK",
  "key25": "qQP52kEEsea1XrvUXvQAmcUS3qGxbZccJ4WM1jfhbZ6a788P1VwUdCqqwUupaFPVL2TNiipktwzWPtZQmYsZ8Er",
  "key26": "5b6vqejvx78SL4eRaLyhQzcFMBcNFqYvvjx6yBm17TfpkpvFEPefyRwBYDuyYqxWS7fP2zQMUZ3vXo8otA4dPAd8",
  "key27": "3a7rBoqT8DDt6AZwtkPMR6Dgh1fCbTU5RrKs4SBh2nYryQevGNkvhL7WprmP6TJvQcWDS8jgin1EjNgB9d8XcUm7",
  "key28": "4gyo9tb3BnvSYmDomXvE2mqmAkdXm9f138KDEyj9ieg3BxXmVhMY2Xn72wTfRrVd4C8Jt9QHmHzya2eVNhL5X5k8",
  "key29": "4A3kg5nwLQdeawF1vX8pZjHqxYVncrAJTsSmE3zumTZFqUFvo1oaVkbJwv8TsxuUzpH6BBKaXW75vHH7wjYUqzcj",
  "key30": "53D5VUrwXAbApx2FaUwh5CDgWteurY4wRLzK8m948TXBd634a43SnHe8r2zmrMMarKyuMhJA3sgvyxXQdExcwogU",
  "key31": "6JmL1Ma9xcxNPADtYz6V3ENkojPcpKLtUyN32zi1oFSSe24dfCiUWgCKjDhRrD2N225vC5zjDk9SsizvFDHMKRL",
  "key32": "3RYqgsu8D8yLii1YsRa5wDsGTCvUpvc1gmhaswqDJBB6m1FErKQriNx45fMhayoBwKT2hMpn2naHV9fryb1yiJpA",
  "key33": "3E1YD8ur41meCRVUT8VSEqhRrixKg9KJ5sBtC2pfJDFAJH7eZ6LfJ3MvmKB6LE7KPpMVmi4a7DvQ9zgRhW2jviD8",
  "key34": "3yVN19huNbotd53fYHzbjpdWnSK5WsLbKFMMr9LCYL654NQep4mb47HGBys9pCqQzLSN21nvz3XiQGq4zEVpbe9z",
  "key35": "25KYq76QtUusRWF1upG2Cbzn5ddyMXSZ4PDDYYwQeevW6QaE6QLAgSKVxN78rmY7qZBRcsARwwmoi2ScmNWo34sD",
  "key36": "4bwaJa7Hc5najCRJsxWBXYZNT5P5U6V4kKGuyQB41c3HvxhJVQtzyFZXciEKRU4k1oLXDq9iTaS9DbfYezybxxPb",
  "key37": "3kNMiKHQkxMLiTKrJsfTDLJ93s2fPJ1CEySUntqHJg8DAa2DhSbi2Ne1Po9HtqoDybRoogmb5uyr2m6UYj5apgZG",
  "key38": "5Hs7wcgA4FjJoSMWEcDnD3bNpAjw1KDgFtveUfTpS9o7Ygry5riYkNnq7GTaNHwudXbM4RTtxzMaWmCmxAGSQQAY",
  "key39": "272MJ5iK8cTHGbJoXHcfViZskqoafkH7ErWSzGRZWQVia3xcS1DcEe9UFMCcGd13rTCXd2WhVqUTHdkuJWkinr15",
  "key40": "4uQQh78C6LEPSpS3rxYzbsudWb2GJPjuorfo2ApDEQiVTViGMeFGA1nKxnx53GXczMjS9Bdzr23JPm75qVdxpjr",
  "key41": "3MwTZutKHGNndFHUgcsf8zergL3An8L7WHsYTnx6eUuupimzxjueFhCGZSTCYfwq1tgVnvw2L1SHUFeibKtjLGg2",
  "key42": "2CqbqsVqb3jPhMuBhJU3gVdwo5z2gvH8ZV8tKVZkickPFVYupkHQfXhzRRXoG2xcVn8S3XovMicUHWYhaUbUX3zY",
  "key43": "3X4EvT3m9NP72J78m3NeEu59Q3qyrXgDmn9vFYtV9btGYLpayk1AEDqoxtyMsUS1nBFZdveWKgoac7ppdUapmSP9"
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

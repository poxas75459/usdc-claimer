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
    "3K7d6dD6fPPjoumyuxsSsjXzRSdttoqrMbrMfJKGStqV6EVnuyon62cGX48MQLuhUCDTaBm1rkJDX8ye7g1DXMqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haCE5zJ5rqmgNrbTXFDr6fAGBiGS1b3xwZMt7vUwptecNdAFKgr4sPgfBHZW6HA7pjLtTB1tNL3TXP7A9p7USFT",
  "key1": "WdNjUpP8dhJ5hLxiSGLEWKJBxYAukxGnGgGobrX1fgZmKHzjqdgdV8ALNnmWHFPHMUNx2QNiCYrcdSaTMJu1VpV",
  "key2": "UEMW27zffj4VtneuuTfvaL4B7xsXHxDhgbxCmvmzwa8cxgZirWkJhFc4yA61nK3qmjiMXcTHSoWHueenbr1oEbj",
  "key3": "25AiU5pSrnC1BY675uKRKafNd7nguUJtjC4FPxAcTPuju9i1MsaNQD21b7YpJibgoR8Axs68JdNVEsz9Xr6q97yi",
  "key4": "4cjwsFsro98zSUNn6ugKZJH4XiLYFfJw6aXjwCAkiTa2yJjEkoCJqe8MGHs18mBSN4MwVdjeTwjkb1z2zwyMX69r",
  "key5": "UNZKev8P6yoJVm4BfXUny8FgMo7M2GvoVxtEZTxz93kZEdmdJ852dKnsVQiG9moC4Gte9ZGQyny5cgqZ8UHmwoL",
  "key6": "2JRGzPxX8QZ4koLEqGns4oXphBk5acHti68tHtCchGh6CQBgYqc8RaYEenfR5VDfEvLaxWAUY42Xpxrnky8ypNeJ",
  "key7": "4zH5shG25oT5K13wmVU5jNMPpYvKrNuh9UKsHfrfPL1frU6PsZGykcagwWgGHJcGkdPdwQfV87p4TeTLfxoSo9ce",
  "key8": "67K2Uhb77XdRejT3x1fkjffvdn4PrS3c8ay2ujKY84AXR8ob2xD4jGAQCAqJXVjhbPrNagvfoy2CvZFUa7bATTD4",
  "key9": "58ZKsSGLDmdN1ahAojwgPL68rgAJMrQ7GJkcVu1rpg8wzLjJ44ZPtHLhWREentaFYJiw3tdJhcf1pusUFG7fCMwB",
  "key10": "3zSYpJZMAdFqbHfW37cY9KMHpV2Z7ozSERZ5DLvn6n8nsNnxZgZMf1cR7ZCF2vtB4ScSKzRQBpseNHgxTsB8Fe4U",
  "key11": "57Q4JhMYTGkZvmwTHnU6MXjUuyatPFXT93ppsAZKgLw8avkz8956ykKjWmUrY32PH7ynRQNjF7p5GFxhGCxduBqi",
  "key12": "3sy2CacX9651sqFRpGQNnDQBCf9idABK661QdBNBR1sAEDKnUaoiwTWffQJJ6BcoZPrtary29CNEi92x5gigZjBB",
  "key13": "2pikjZqKduu6KYRXNHjyBBC3EG2A5NwJwWeB4xoVoEjJkVh56fN9tMdF7VddNj2aikfKF5Rwgq2wL97tbSerMC8V",
  "key14": "57pPcTmTKs3hL3H79WynnMH4GQJcs1i3r8EXiAA2a88ggfRQGsr9GSxwozQRuQVA8TqjKNjBdDZittGNjXv9P3n5",
  "key15": "4dyFSugR6X3okc94vYRzyGs2G42Dmb9UYk1EY3fb6u2eYvedvjosM6BFAS4eaDjLr7zCmQujh56zzeRPAAwvaJbg",
  "key16": "4DQcAkP6omUNjP3xfycn3tzvka5atLRGzSzZcKWMVJMA17bBNYnc3477fdZfVURhZPjPpyyEwCBzYoXS55HYKjXx",
  "key17": "4bfDtdEJvyjstJHaC6282kB8p8QbSdsdftXJdwGpU9bSEawjp26W9vehSmDpW1xSnzZPaLUKE355K5JLFimdKjmj",
  "key18": "XN3hbNVRzAKMsVe8AcT2xVmVkyPDrgU5F3J35Aun3qzaWsYPUfNxjBiqijSL4Hcs5tPuuHBcp2BVZuznZBCqJ4R",
  "key19": "3QKVteBqRZRJRpLRJ62wQY8pTg3Rund2En6Hn9ZDBEkUfrNNxBNbyxdH5NPyvThax5ZdyGGUYw8573minv5bWAwp",
  "key20": "2kyWFBrFt9un3nqhMRpBVRnP2g61DUUHf2A8U6QCA41xFqd4hkPJVZVCsK2G9ZsHczxksKc7BWjdjvXjNfPNPYNw",
  "key21": "dhq17PVC7qjpAdaHUakoiCnhugkoV5XdBBWJhTbwkik8DzwmnA9QKbtLb6L67oUxyDGtuouhWKXrkLEpmZdM8YA",
  "key22": "5oxLiQouzRST5xroQmsakNzRTS7MJHXqYmqeakFPcduj9nHMZ8aBUQzUWXtQGk3XUA2NTi98y8EpZVeCpYovDPhs",
  "key23": "2r3Gi99rhBZ2GtNK2RN2MKkaEgtS8mudPU8NrCobNcenCgpt4kjGdx8CZm65rzfNTdWMxGNfmFUKe9PMZZ4h2uLh",
  "key24": "5QHhE4iMY4K1m2kUVxMa5wpssjbqBEdmCHStYHRoZWBR2uzcPVpTAstXZJkbhmDJE5VY17PFK98VnYMsEc7UbyKr",
  "key25": "2ENb3xN6yXQARAjzaLrKWx7KgqNrPK6PuDiCb11etAGfs5uLsgfSNQaBvL8HDrtyea3472eRQRHCHvFkPCUALGH1",
  "key26": "3mkNsfkCzk9J44R4vaJmMF8He5eMqWFKzriwoTHF7otuTaUiRGX7MfeevBAQVgpYq6Pm434VPf7ZxuayUAWdySe5",
  "key27": "ySchHopBzU9aH7tiq9cTPUew7Y2nx1DbDoxULZd4mjbzAFP5V3y7iSFZHY899HQ1RyuRcHqEBgv3mQLtPqvwzvw",
  "key28": "4LdcS8KRCUr4gzKbJ7nwVj3oYaJZHk3qb9U5SfszVYCJ4cF4WGNYLw23byEmTpMBVppmh6GeFS3adwfkNCRSjLFk",
  "key29": "d5pCsvLobb8AsfAgii41yA34w5Ck2YTzgXtrWrR7yuAjxskPVdZTcRzfd9yD7McHbpToU48RGgZWahiAAmiTU2N",
  "key30": "2idU6g7oVqimk7fmwmkB75Hz7EMJKXYCrtaR96WQBxiH7YwRGds1q449GXwEfwtjoE6K1kWuqsMWJqM1dBSxjWq1",
  "key31": "4doJC5yf5T5xdxwuuq241Zpk36mypWjsQSfsu2wJTNXLQReoZhN76FoYMKHuyfN6K4FnRmRgbRYDCmcRpULhJb4G",
  "key32": "3QC64KujDfEK5mEprydomhSQgvuRZQm2i1yWFF6maF3ZWfeDrs7q6rbb1jvBqxZoyehcpubs5GvnWqskhsTp8k2A",
  "key33": "Mh9srPuZWNkMYreHBRXcGbnL6bNGjNXSXgSay4fRwKqdyAeaQX42wjdLK4ZYcA3fJZcEuGq7cb6MjmQEjcMJgSB",
  "key34": "5YFZ2cyLWftuWo2o7wZAt87GW4D3a8dtmSbtqkBbC5P3CA4oEpt8ENpNiSZEbHi6Qyb3yx4nxkVD2wUGu3HMFCtY",
  "key35": "4K8f3hEmTpmx58f5gRx6gLZ76KAMDe1A2dqYyT7cbpF3moy5NtBaPQX8ynJeZGc8BhzyrVmWsFGng9oXJj8wRmXK",
  "key36": "4y8Tqj33EiZqhKQnfVjDkSE8s6L6c5DKeAo1i22Wmym5QnJaNpUu828Q7xLVBKtiJMF4jW6LLRBHe2kbc2RR4GkS",
  "key37": "4DxCFGSxW3hpJyysv57bpvSfK4FZsq9RqWGp4Qrdop2B3JiRUdvLF3CVbHPfrp4aD9wou9jo6MqsPzQhwVyKsgR7",
  "key38": "tyL4hN2UiWmrAVj9cD2yzjFqqHoWqZ7UZcUTSyXuqvrMRVXp2T7Ev9qNUZi65ByfuxayoGpuvciuJwQXWpFiu4g",
  "key39": "2ZJyene1JsiTPTzG9DXQtNoyHasvNbKUG4JAC8SNdkzqLys7bQbfKoYZsj4c76JkRx9cRQPvzTdHZNxRXP8q8kku",
  "key40": "4N4kBqFj3c7e9cGuKkdjydaSryQVCqnuM1e56pbFsUCijdBnyVMUGaCZtSaZsFq5xvTe4fqSrK36sYtmogcfNrSR",
  "key41": "2FYNje6Yrjq5PEHVgiYXvm8DMpwDQJoBHgQmy7jLVFFCd3wLNxx65rVHQD1VhRkctxV1S59SgeoAWHiSXTwCnfj7",
  "key42": "u5naP83yU4gAnKvmz7gxR7QT9vNGakRmtcSFKNGhNsZ4HeQzuQKdq3oXtfszjun19gNvFJH3t2hC9UC5EFjdydK",
  "key43": "3uU4Mc77ymnmnStjV46dCCoco8CzLmyiLHHD9T8x552fgUUwwKsXSoDShhqCZcNEsZg1jv1ZjGbQtTi3M9WyToAB",
  "key44": "4KmEUsXKPCE1v6NtVw2dQ5XQTdLGp94u8BgxLJF5JCUgsySSA5GS1z3NeUfgcwTrH3fGSpXzEcmtLwxx7sL3HybF",
  "key45": "3qAgnqXooAUzd9bw2JESfQcEVccJ6NTQyMQAWUAsqhBptqGdvjS2JgqcnhVYBxqNo87eWKBGYmkDzgubXAMwjRQy",
  "key46": "5hvjadSpzqPbSP7ghaRnJRjpivX9DGoXwbwQZDFbeveH37mXoXjhvxheW5pdcGVAaorsfSoxn5nBzoSEEqsxR9pu",
  "key47": "Zoignom3ASvAq4Wq7NSY7KEgGbnQHBT2h91qPdRgmBvnDnckyfzY4qsLEuEz7mhPZztZxi7q3Mb8kigrAxLBtk9",
  "key48": "5XB4gaTabE1HdfNeTssHGCrnkwfhXGWRgCUdikc2LX1V9TF8VrkSRVmVzKggZPJ7dwZY5Unz7Z3fP7QHemRESpoQ",
  "key49": "2oMSub4DmDzcqRX5G4H3C4fgGqsiH2nVMQfGFugw9VJXvyqNWBrwjTvmJjg3TXHamjwHHF4xUvWCdi8LGgaGf5cG"
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

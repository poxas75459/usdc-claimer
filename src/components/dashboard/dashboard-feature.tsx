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
    "XR2vJzJDNQiuFxUMk8CgP4dSt6BAvb2XNCyPX72qDHv1cHeVv9Lit9DY8vsWP7xNZcMepAWCtnHHY4NpNQ3noQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38abGkzPjVok2Y8ht6YXvNVmWxxqCzcKsDesgoQE9qetabbuDoTD6MYmBgokazj11ULKT5ZcMjDUHaaVB5X1GU31",
  "key1": "5yXN4Zw2kj2wrf6HfMkJGcPMh7CHRLVWcwc6kJAZomFcA74Pzmjn3apNkuHE6DtB318zVmp1agXc6JGyp9a4zeSe",
  "key2": "2xYc6eNRUXByJPndgTfuSKgKgGsQd5fg1fbZLbxtG2Wzq4yj72z59ZwrfCDxhHWhhSmREsLfwpQrpmGhdXWmKpoQ",
  "key3": "4dg8wgJBKL5B2kWkpnX4SAQHxuP5evR5QjqsQSB4p7jwtddARi5XuH4vf1GzgcX19eVnbi4igr6xfuC4ZnziT5kM",
  "key4": "2ZcNUF58LZMZv3J3axpFJiQtPSfUowqabgHdDd9HmJBZWU2efGkxG1DLvLvycnWwdQoHmDHWX87LHMoJQKKPpCUC",
  "key5": "TDZso8B6g4VqrC3e8PQe6Ci25wZ8GG33kyrwByv2gontinCxbf6tyAZJbmeoAXD4GHv8ZYXWHkMikyw7s7q4jsJ",
  "key6": "2RVTrHXPiDgBESbrkWbPLcNfVjZqn6XBkZMGcpFkVZSQWKbL5hrW3wFJz6QFNLufm8uwDHM47qfQ9t4WjuhZLQC4",
  "key7": "2qvXEUdVkddD1TLhEE9F6M8ervpzznfaTS2v9VWBxvkVVzhLHR8otZbAmHEGVEZf7U5z5JPsHsYtumGt1PNeS1pn",
  "key8": "HoXZ2ZyfcxZdfNi1RvrgSVgtHXdh9PUBcSZG9tG2r5r4YVWeNV554fyJ7EFny681FkiGnABYfme7ib2EC4WTPmH",
  "key9": "rTXWvB6A5388asGEMEcuMnZrhC33M2jFgQ58ExWZPypBCLBP36nnjm8MUKJr1RqYejVbz9uPEVa3LAR8Jbs6a27",
  "key10": "3WCZ22xtzxmfhCC7WGr37XaSAPwKprYnsDAg6hvVbmakcapTrYxCLmn4duobhGqoPoje9KWoG6LEWTxE6mhAhY9b",
  "key11": "3hvH6CWcnnw6w6KxPjxm8Pdtx7TVuMrvazu51cvFVQ5uFdnDxQwjVRr1k4A7ErAyNdttufe3SxuW1djZY8gD2u3H",
  "key12": "35dK1Tsn47AqjnQAvJq7v2dpFC7bgEKe4waiVQ2k4yQ59YAE2P5NfiMnEmCdiPXF8EeqbCkkxezZzJWQ6KZbvtZT",
  "key13": "W9ZTn9NLXwee9TMA8DXPxV1AA6tNFH1HFDwBipVBgPV18B8nC35KenWDLXxrMG8a6PSBikidaV8g849sxeHLnbw",
  "key14": "5cpykmyzyzksqCsgckkzjvxqXdTtzudDWWicUPu2k4nKTR3da3kVDmdEzi4PfZAYGdq154icm9dvW7rjyv3xwjbd",
  "key15": "3uuN2mnzWMawUWTtcbxnE16F9Mfco5EZZKAk7LqzvCQTkacBejnZhYxvfyToMTQVKsqGbT8bP5VNvHaRNmiPpkQc",
  "key16": "4vxQAQ954R12A4VsLEwwXg2Bbj7fh8bQdh6ogUxBABQqrxuR8W8ioWMAZbWcVMV9hgvwJwqUAHmxct7Qm4jgCray",
  "key17": "2F67EYeuuHa82QV13wYURFrzU7dBz9JSdTkEs5hFvxHAUZtBgs7PkzDFX9zCi4f125AaksuPsz71KRmCgu6KgErA",
  "key18": "qxhnmiedscCdBCo8UMupRGF5hWwGGRwxqkF9kD1o4ytq6ubTBCkqBh1Lr1yM5xiVsCcSXQPjAFc9ryJTepoFf1v",
  "key19": "2gwEmcYZFDEpXKuCCLgQqxZM3fPS3qF6iV9A3yD2zTd2s1B1W7AbDw1UUn9WyFrhZJMAvz8vFXcV9afYd8DAUAyz",
  "key20": "4AhCHDRKM3RPwzK7DnUvG2XPaUdKqQLHrDNK8acRmwChAScfycj984iGjxhjbjeJ6if7XaNwpK7vyoxwgwvecJFX",
  "key21": "35knp3jStrUKb3KRfFEQiGzwB8QcUZLr9bcUVfKpYuSjEfqKfVGAZViaGe5kpscaj6hQwfkzBwZtjmL8iXyP7VVR",
  "key22": "3KDgN23rCaTnrMj9jxHEJB3D1G3Ffa4qribJw3X4jEDcuFHyUkb8QM49dKK3iaGBBdFvTq899ysPYHqdyrK7ZsFc",
  "key23": "3vao4RttHZVM9d1AkHnV6JMWomVs2Wt3mzJWmFRpJzaBUZvX9XS8k3iWaFEyeBrMn3Y36aSP3mtzfRNYj4MK9wVS",
  "key24": "4poYbmkwL89bttNxDhHSPytfMi87kE9RqC2UGNUKPiDAazrVwsxzMUvCVRvteUtQR5nJocrEsE9amQAefu8iuFGB",
  "key25": "c5bYUZZ5KbnmME1GnhRPnvEJumgrmqz8Sur1qsYMBMphC6XSjp8JU9MVwbfUB3gjwhSsJXTPj5aCFktPakt1i6C",
  "key26": "3MTXwriH6xcz3vdgAXVLGadfRhQV4obJdGw4TH9QZtSrFyWhULmHhKHeZqbPpM6NsGXjq4nYBHS5dPHwwK5AjHE7",
  "key27": "4vuHcsJShpnKSeNv8rSSjZd52bmwLShxDPPngwxWRgGvDBAv64BvgSb23E8r3XzizDpdrScLhrEJXmATH6a5CDUY",
  "key28": "2H41324tCKebeQSHoc9sfQfBBkmmBhqUX5CEBFrU2h2pCfEJAdk2qV14nr2zs2mUTsAWLLXNhAaNK8nRjVDzQpPn",
  "key29": "3hiVvLg4YfXAp5Q8umfQ3i7MUu4YvnY7gJzH3Dxt9jXvDN7jHzsCoaZY2W3MWg7fcwp4aoYU1rq5jTYtf1aMPszi",
  "key30": "4MY39oG2zV1SRsyrDBvnw78ZuzK3AfvCQ9tkGCef6FM9TXqNCaWWfTHiXFB3LcYNxx3t6czLdZZsF3nUwxSKWWGJ",
  "key31": "4qrZsfE1D38fMPnqT6GJYnYGYYr37Yb2hRA7JLdJMuuchPQej9QYtZLfg8cmrDVpuusNgQEFwtMb4wVxxjvBqVER",
  "key32": "5m8BtXtjyjexz4NoBsvAU9tmrVRF4fmKwA2eAvcjhgSqHPCFTyaovocciFH86ZaQMks5bV1Z69bAg1ngWeKf3rqg",
  "key33": "vTk6UmVPUvBX4Ab7bJRHPEmiZ7QLebLdoKbHkG1NJV9uT3Kw6fpdZygKwCvYA7fX4jfENt3iU8mrs7eSxEwWTwE",
  "key34": "2A45ZBdMecYHJAD3bq5auP71fYb2xvsq3QY4nJh6BGALkzozqz3a2s4UU9D6Hd5f1ZdqopGRX931DXXnSFmVEqad",
  "key35": "5tzLbTPS6KY4LWevjtynErY5jVsBJXyh1o7ywKLbn73JqufqC2Exay4hRpAHEJA9his3XAXDauR6t5AuqhVRgYfs",
  "key36": "5CqgDZnxRPpruxvk8ZQfsJpPpaqRWSXgmuQNtxVMKTHe6GRJzDRWeFmMqfoAr2NWqJvC5U1FoYoCwZ9VGHrNKaBk",
  "key37": "4angviH15sgKc1vv4bXSuZyCp2pzqCdcoHgWZtC36hB8A6sS4MShmKb6u5mWYnehPQj634VxrTrr5maJwkpPgCYT",
  "key38": "4XAZVv4AzEasNDQvHYC9BYgZT5jH9ZyiBoNqkK93vdVPGcwjdgZhaDZ33SmPcck2eVXJURnTzJLz1GaXfkUC7jtz",
  "key39": "2gB6U26XV8AkJaN7onPRgLLdEtUZTBr2RcsZyqa2Yy62a8FAmvSf8N6hJq31vJCFrwgLi3Pnxh6qQQGcd4L7Lq5Z",
  "key40": "2PCEb4HYq8mgr4zs8e4ZtXrX12JX9ZPvUn3r98PBfSgUGr3wtLPA3Fh26Zu23q2LvsnmySAvsx2W7fuH7zdMgHap",
  "key41": "4A1kbhaQTgPqD6i8ShF6DfqvWS5dkfKLC9oAtJhzUHZDCEAmnSYD13KZCaKMQNQGBt92vn5hLCvdJKkn9A4a1rGt",
  "key42": "3caDzQfXzzsAu9LvzNV9XLXxRjYSVZNbtYTLgWGKnGdparDchcWd3PdpdMuxBgShcSPs1tV4BfQJCJVtzjMHT7xH",
  "key43": "2tS8yLF1jsUXBGzKKi37YeNRoiJx3tYsQHw777y7TZEZMmS2FCos8ZpiLXuPsu32DNekcChXfRC6YW3Z7HpFVFsi",
  "key44": "5V6NZXLS5eZWRFwFc9yY3VEd8Z2wxa3DP4FoeTCyCB6B6M1pAsaeSLRVgG7Yxb8NxBjJLaKbMGjfPoR3mbwhqWWG",
  "key45": "6vhipSYzrYgmyNEtBDC8MyRqnD8Kwa7v1LShPDL77uauStqznWagQ2ZCZ3WicjERgYzykJcaSVnYyJh5JPsn6YY",
  "key46": "4G1MWKLVZko2z8aDDn8nPq4ZaqyvEVNEzwtE7kkg2xJCioFP2PjBvCCGAx7PvQAETyRC7sdDbZ6TPpaTrKWHMacy"
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

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
    "3sjRrpPq45EC8Sv1kJ1pfvcTjevaWLCoafQUiA44VcWCYytZUyaJLko1MRYMzyG7G8HgEtQxUefVzTEMzcejKcPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSTFiyTompKj6TMDTtmXYUEFj18cb4dquhJkEfW35toy8Yc1k7ReJEPLHrXm3753XE5wSFqRDDcUFftaPJJxMGJ",
  "key1": "4wbJBa28aqQEmSddWmvqg3pRVQzuEXQx2AuBsw94XL1WHRSojmwnTPwhBBtyqx9zkMJ4zANkRnC4GCUpq9ws3jKR",
  "key2": "4QHd6wCXv1fpYvM8oZtk4sh5H6Jgqam3ggoCQo3AttkZmYGN81P2B5yCZU1D3dEPLWcg3ENWfhAuxWiMziGfFvn7",
  "key3": "5kaf7Q2UKJVppBQ476uzahFQQCcnwaiEKwD8y1NAjC7VJn9xdSXEgDsx1Xcyr4MZZfZdcECK7tegfdSuChH4zvxF",
  "key4": "5nJ459MAmFEPfo2YvzQmvhLE9hDnPuMvzYkLvN4bL15FA4Uiqyqi1SqSAXnEQZCxwR2MtR6SU4bCnrTD79LNkKEz",
  "key5": "3pXTYqkCHoTKwzQVwBcuP8Br9xEBbyxvHnSkqcSh3ij1oqSsefG38iTgg8jifh2Jw1b5Xe8YMwWJeYDa8Eu1wrn2",
  "key6": "4N3KsocW5zyWnnNhzM9rhtVHRc3gFe58pg4SEzCWtJ4Qb2CMSDn2prcvD6Hhq7nK2Xc2pJFvF2FZv8TndVv4pzow",
  "key7": "4FVTTVi9zpL6mvqyhRcnQKiA3uWvAZwCdd1PmxRZ3FnPHsTfi6FbnTqSqRQPhuP4BpstwvZLSeJ27cuPzGgcz89b",
  "key8": "5Y5w4nnNaXBKbXAzpjKEJVkEwrzq2H5845wwR4yoLSZbxNULCwTv7LtE2w7F5xQdH8tii77nmCSpmZqHB2wrLoBt",
  "key9": "4u4hKRxZ1XQvrxkSPV1L7mMVWLkZM8bqNMiAF8Y79mArKnGbFkMqnrxQQcG3Wh2C8K3QQrQhB84eS4uWnHG3U6hC",
  "key10": "2UjmB9VzQtXKpdgQifcrgw8EDFSLYyyfzV6Bthx2GyejHWvnQqVHSjAiLMuzJSE27JrtPsGDsUZb2DJ7unWytMWY",
  "key11": "56oj35ijureZiGp7Z8237K25BrtQvDiC8FrAhwL2sfMDSNffXsxokHwtndofj6Q19YydvEwFo5SwUKcaXsyRxuiC",
  "key12": "Cprn4krafCbb5WtbDJwAEaDowp366YGjVDhwW12BbE4WM1LswXRrpMB9ron3A7PrGC5JCfZzUJpZRrrAH4F5CbV",
  "key13": "63KKZB3TfmfRAqPWLAZSEBXf77RYq3JhxrUybqUzf9xSNnKoovedjahqHzYZWAmA1JSkShPqKPA8cm51b52aSJwi",
  "key14": "3jE28aj3BR76CNxYgbRQYnYd5jPVkj9VcTp8rHsrevUYBL1faAR7dnTnEtYN8kToJzLYqfc9BvXm3SRpPMA86muA",
  "key15": "4oANgWZM4P6u6fzc7asx23Xpsc4G5byuVrWS5PodeJKkhvcXbUneemMDCuPffcpSJj6eUQYvGE9Qq8zuFhQWqfrt",
  "key16": "5ap4Rj63frKmQxTrmG1VzuSB1kKz5aHamkR7pqFhSibCLdMvDXVXGNDsYSv94EnswdHm1PfrsGfaQKGMHQLtEZ7x",
  "key17": "2gWXxaY27nGVgkie64JBb1HyE4hXhaJTa5XUAxxXfUjuheLx4yE6aDhz7qBEmWAaWoDxnqRBdxChpTw8fRy6RrN7",
  "key18": "EK7QsiAydnGxu22ftYC8cLVNKD8YAeYGukqCBqKoLTyxjdVDZxY9GAfKSMXUPeVQs1zZW3CUZaPefvxLfN3iugN",
  "key19": "4tmKpeTetUU9Wfe5AFuWabvTggK8T4XTXSdNaqqdNGMdakBVVqqMnkRwVQw3kwmadEoXyiL26sh2Wz3ip2yyu5U7",
  "key20": "3FTuKqgxCt8YiaNKKE7HsNCH6mdSh5DZn54r69FsUGywHcVBxbqH5K7F5n1VLW8WfjgtJprqRQhnX94ygTo8DLor",
  "key21": "fEeJQbeHuWcsd3tEmeoeg88STynTebLXaCkbirAFmFJaNhGeqAcx66peGCK6dU4rZhgBiDZDKz3TLrXVz3s86ki",
  "key22": "3S45JGGyqFkshRzoncnBcbKXiNGtTytfet2XrnUjr3wyvSc3xWcAi1ynnsi21BaBaEDmqMUPdpEg1cpuB63rNMiX",
  "key23": "4zg2r5kzNZzLCxbRsybPdnTEZUd3sy372xi6zjzD3fpTdv2YJdEbKn4aQwA6cJ7bgxtysdE4HeXMPvKyaCtH8bZj",
  "key24": "AE61LtAvt3VSVvvJPXKUgP3XS4hF7PdcEy9ZuqmWpPHrKeJTMUifqN3Xw28MhH5qPTRPjysFfSkGUQ1Ew158dP9",
  "key25": "3yC1n5FTHLGG6BxR3q2Sbs3U7Fxds2fgW3jrKPuTqXPdccEoFBesKP7R3LpX7wuacUejcUSi2LGzCkri1Cwm6UxB",
  "key26": "5zVgUM3uT5LRssvMph6XniTNGgeSeS8JcQqhBXxzqpRMt4kxG1WnoPB8XdpWdB8HBLgUiFpFET7oSg86f3i82uZF",
  "key27": "t3b7wppoXtwsbFKT3kmJitNciQuA4QQbKVhDFA2m3TisrPDV7zHKkHAbS9XxhbgDeJBW2EdzMfSZonCH7KshKrr",
  "key28": "2Wv2ihmmM9c8jXqt8LJu37UDucfZzJE7f9szeV9ZuXg5uv3hpFqz1A3za4nSVvTysvwG1sCMbLVNgKjbDzHsnkwN",
  "key29": "4MhsDejjavCHWKMtzKvbLrAbvhKd6pzNHj5AcYV5knZ13baMCgAdrZ23yTfkG2etiYwTsRVtMVkFVMa8XumtMC16",
  "key30": "2Nz2T6SVUUi7r7iWymdWjio6EUCP8DdFfHH6ZnL94z1XXvssN1xYXfZ6wxutzJguyQrmdyKLG3e5h9ZdLAeUwzSV",
  "key31": "5DeDhu8E3ik8QpZkWnZafAzEf6tM9tnJTwzFXUL3Hvwh4oziGvQ49QoD4fJMG96kJzKbCJcdK2npXFW2YsR7UGJL"
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

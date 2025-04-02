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
    "1hJMDq5jYU2nayjm5CZCDD9224CDpr9deekF5AWUZFiaB9oMFh5jYiXsegf45d75kSvPZvMjSmRboh43it3RkTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "323Qjv4fcPVu7pMPeuR13aAoBrJ7n8F9YSyvAZ7imjBcTZ3gEUcxzRo2YYVqso4bzWNswAiy4UBEyqU5JUdac1jJ",
  "key1": "5Gt5kvhrwPC6J3xRwhbgb6fe4Xe6uXqaXQ4wg6oDWWknuTWzbXkhqNQyUZ9uPhaKieLryNG1bsNhH64KuXAKTR8m",
  "key2": "3b2aKr1kgRcm53mMoNizrteAGjdTsjkVEnBNbH7Kn4Sqvxa4WfkmWECw3V2VLgapot35JbsFRc58Zt5hH9aCU1yN",
  "key3": "27C1bj6t6cZeZbQAYDwouJcGErZy4uD6ctZj1HSNK1KswE3iXG2RhZgK2GPNTgxeWQJxLg4o3SEzNk9W3kq6T2Wz",
  "key4": "a98hm1XpGFDbfK4csXNfJakfe375oJHGn36jC74fsgfCEZ4KpwiP88euDBm5YsSv5PHuPGGpzzTpDp4JAz1V7of",
  "key5": "2WR8XjXS5tHWs46HwbzZbHsHYy7k3bQqBX3Xv1gff1Q1LsKgSTP94L725X1v9k251e7hhRR7KtpjwSSa5N2GYayo",
  "key6": "5TEcofUJo7hwJysbaYZgKv4gW3e41tKmzeW7SCKqXNpz9WbqyCCuTLu3Y3kNDUL1oNF9ynjgN92Bk2CrzgUioSic",
  "key7": "2F7h2EPTPKBRFTYf2okKu7CKcd3waTKcndRzFG3uS9ubwWkUGGNsnkTWWZdMHzJrcZdvPgVEXLRfgNd8FEcaikX9",
  "key8": "5LNJq2XZvUNwCX9mqqRevvkiPE8is6VfAdiqvP3wLSp8ZpDTxG9jAFV4bGp5jJnduYHDsv3XHAFotRmFrvh1hzaG",
  "key9": "25xnoWb1HFsmSeRiUT67Sv8VjadqLCgZWVGDfsZDLvufXic3YqqAX3tr9vvecozPxFiEyaJpVGp3JdFRUs1GoStS",
  "key10": "4LRWUaeo3qLbYgtb8dWCYvmRdc5dgvzD2MX78yWJqD56G7rSHhsnkZstwCuawMBcmhXdaCFM9HUzwTt2EKrM2jWu",
  "key11": "gSTrVVH4Wt9WrQAVe8gFYyewgFKFW8BLGj6a18AptKKpjV4bLosYQSRUkCDcgMTwDGEwWDBXyYQWALzjBVs9wCK",
  "key12": "4Ej3tgEnvTB3siujBuJkpLthTsR5YgbXJopqJsDUtCLqwUfqP9UjX8ySumvrXAurFicJQskReFmDSRjFHEoBajak",
  "key13": "2CVj4CyfWqVPgtcXggs7md8M8spZyr4mKsFXJ14Bcw2b1cXZeqrXXrU5B6oomMDiGvxxuguCPawTQtTK8cBdoK9W",
  "key14": "4vGmJS5Rh56NpPYfiDyzVvUok3gGxtv6SuonjrYcT6F8GdfFXQcvALCPFcPJeJAXsx4k5HFr7XvmxFHS21R36asz",
  "key15": "61zsrPVCpysA7J68TkwnoXXQ28L9Sg7Q8X1aMe6XDT7zAbYGgqdYuyGh9G372YBZ2PDpQraZfknvaEfuhx4S5qKD",
  "key16": "avAw4cwymGPZHYtiLZCi1X2qxXNN8bGT9e9NzUtHxFD8GKv6YvMR7WaCKswcVePyZwJ53SJAKSkvJQXggYgyaoa",
  "key17": "3fe3pYZR66EhmRtdKWxuv2MHsbjEWzKAAvnwL9MVHDpqANANHEgYYbVtacBmL7z89W7NtrtviycxZ2M9SnxqDKU7",
  "key18": "3VmVdHiMLThk8zeAEo88Vhth4uvE8RNbE6AMSihGBSuKwL7gkha1vedr9DBHGPWov6ZNNAfipKeWaAQngCLuTBib",
  "key19": "4qYRhe3NHhKdE1tPjZBmYPq8GCt7HomgQ7brJtuzhzoChbQvboDup3PDLNjpKoKtNxLqh4idmGpu6i28uiiB1kn7",
  "key20": "41MJjWG3LebV3g9i9sLDsCd6gR8XdQpPMwSskoPjS4b88BudZpBMGF39dAr6n37GkGUUiVRnFy4BqHuPxaRFbCZK",
  "key21": "3KL7MnQHmG8jFmL3RgFT2R7FfZnqAaEhpDoa56apKxGTNxjXCG3JmH8t54SSnZK3SdAVHyTMZJVkyt5FTMwNqeSQ",
  "key22": "4iPVGfdygBrxuPcZftWHybDrhSak4F4SkjkwGxSLCEkykShacxgadnX7CmPhn87rDG3HCAFzzDxFq4U2cUwA4T1G",
  "key23": "QzAmDoymZxEnKXPB33VsJFcJTivrQ4edUJc9ZsFzhua7QPWPVPk8UHAUty3i4frVLRJ1V3VqmRAYmhhBEqxWev6",
  "key24": "4TgeKTDooV8yKVGVkHV4q6XzNUC9eKZhQxDgXamWtE9nBgmgsFHj2jStxwtTDUbTA9puC3ZYPpU2sbBJmG9wn8J5",
  "key25": "5bqSoKfpHnRGGtWQ1cY5imk9p1DHDFh8PeTPTCsFXdRJnZe4LCwb7QXYFiVewJVAenv7Uizwk3j7cwHXvtkUjBXJ",
  "key26": "GEaHSgoHPR8wwmAzfz28PN2u5tcSsGQBReZagAkrLxbZQL6M2Yrc2vMwPc24AMU8SuzSxXbnTApZXRjQGCdyCSs",
  "key27": "3pZW2N6EKXdqqkmMdydEJ2jrBjywtEfJgLXYcyQGYcN1EuK3jiTSEQHW3nbSMCn3Zz73A88hADukd6vtFtsaj5Ga",
  "key28": "F6hL6E1NfzLve9TnJzFG8JnQt66y8XickCLkAxWJm2yPWX7rbLxjepDXyGpdfgPpeEKx11LA1tLFRm172w8gbir",
  "key29": "4yZny3CRZ7tdrXatehP31j4Wo9rmihdmbdKZCPMZCzQQ2rit5CTyWxf1tGnyG2vmNSP9DVSsUNYxnf6P8qtfRyBC",
  "key30": "E1Jgjn4pxTmtHTYFWo7VL9yv2kx96nsBBXmzBaS6CBzw87gYSgQEppvswpA1KsCcVW3gjrtHLCzYJbXfwUCXnbk"
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

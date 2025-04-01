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
    "4Koi9XQMHZeyTjf7L1nScxZtPWLWkyW5HkHZjNtixqwjqSXUXEo2kFCKVZNfDoXxBJopDopLSLqRry3ny9CesPJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnxDhiDPnL6dgQJTv77vugamQwsXESmQSaeFoRMrnYswqwUMsMfVDoAF2qfVq3xBfXHhX18AVTnWkCPdSFyuu8Z",
  "key1": "3VHK8Pr8eNiNX78VnjSKtfhfXSqt5oW1QZW7EvCYcbTFYxepb9T1B1QYsowaVRghEho3jhKHT5ZXRi6z1BMxc1kB",
  "key2": "34o36r94m8g2P7NkQiYh5bmPoaayJADCCLuUkyNPmJqbhduu8YAozc72NVfks3BQ9BFoG65Rc2ihg9ze7GgNxJGk",
  "key3": "UWx1U1RUPC1Vh2DJ4PabScHhJFVm2ssM343kdr4Nhh5q3iTEEb6yiqomZiQubSniB7vtXmpZajgDrhuMtyf39yh",
  "key4": "5KsW8UcdMi1EnMoAZHZPfo8C9ygyVzVDjtH9T3TLARC9B5Vf3462zDapZ47ioCoroB6gLaCya6BtFTPC8BvVUCMs",
  "key5": "3UutHkWRUeSpnzCyurS4Zh97F4DCLVKbtQdRg9VPv9vBK3MmorR8Fu7kfneLAS3g6ny1zYHxiQVCsyNqWxYXVSvX",
  "key6": "3Awi1JfG55uASUzJAMXU7yxYeVmK8u2MXxhdyboW6sjSiXq42Q8k57muHGccUCc1s3K8xGQxSehX8RCVHr4J8Ski",
  "key7": "27NKtRgDbqyMLs2XZAwzQit61ZH7GU5JMjKqjiWuU6Wsy8abYCVMWLkB3akPNnTZRazE7MGvW1RSymJxVJ1D6nPp",
  "key8": "45akP5Vasrq1XnutkhPyaoSueXnadyv7AbLGQySjkhhBNmQ5RdbjMixUJKW34q6TJ1YFUZwcezL13e8B6aZyEft4",
  "key9": "5gqoMtjxgsVAnoF1pbvMp5A3Bp1zGZVfB7pCYnLYDupcggXyCFgXQJ3v1THiteWFMAUcc1KagS5TDdyuPaM6qHJE",
  "key10": "YJCwd466Kf3qtuKdCfLVSvCZrWz3guVLUB561ZHEcHLppVUxpaidDkTpE2bhAs6EFX2HcgAjSMs2f9PATFuozrt",
  "key11": "2aQWeuC7jswozwxep6knzg867RX4Lv7g8frDnV737KiKcRY21V4svBLDcq2udvnmGoHk1vurXTZZgCGYKbCEzR4e",
  "key12": "5XaoC4kCpsydTbvbhTbCnZWoyqp8xwthGbR75HLNwyuSJxWj8Jr6azAetJrDCwxDtoNM2aaHcmmBnm13T6JmDgPU",
  "key13": "4nvAvUCAB6Ds6LFNwMmHhAFKo5usaiP1fde8EL33BMwuShFbnuWcptA5SaGbXqNJEv8YKSmurA8BGwu628yK6Ng2",
  "key14": "5RdBtcDpopeHyFDF1XSJTGAsFeWM6fNfzuTFhAD6ZV72xhk7KDe5kNMUEJi5txbui1nHK5UXxK5JWBk8MKoo4dqA",
  "key15": "2Jqev2D7vpRJCmy9u7XgZSvMRKY8tJFMmn31dtB4scWr5vhAro42bb2AzjFvg6e3bkcxBFTFL8wZEP8LiUQ7am4u",
  "key16": "Tsfy26SFriycNwYWe9Qn2WRUXNMuY6JGTm4rrr79oNmSpCZm637G3q8gApzrdvW8dJ5jzFzEDt8b9UYWKJYDM8D",
  "key17": "4wDeVtPo9LVhiSmvxzQHqoUxmdiAxTYdGpmbN54oF1bZ7mk6RFS7jXEE9VBTwhVHmQXo7JEfmvqEgZUuA8QTL3gq",
  "key18": "3rhxQEw8bUEJVA1mnzcgi8rYL5NTPWjicXx2ribjXWXPb8HpHbVxxRNkUdDCD1p2dqjLeBHf8N5aK9yYhwMTo89E",
  "key19": "44s6vMmn5tJtmNZazr7GTWwYPdMjf5iFtDKnmsBq2pZFLKC8gHry73JHdimsqRkMEjp8Q4SXjdTS3qfCHsmhuBiv",
  "key20": "MfkdfhWMAZnruDdXHD6oos8Kj3WuzxRUAPrGSGsubz4H96YhMkPR29Jx8yzpNbkwWKUYdqXS2TaJQrwr7X2HRAk",
  "key21": "2GmvXmW1Ha8pYQmxk568i7hKJ6SZZv9k2nSosshWSEdZszvfwAStsNff8nPXAw72EsofQXd5eL1tknZzJaAauceZ",
  "key22": "3B8TYjAtpBAAWUDNeatTx69S3VzU3XUUgYZfNTrzyT3PbwyNDgs2N8N2VPXuY4kuVHDPGXmVaGJsXeSK5KSrCxLx",
  "key23": "23enmbVhpT53JQ7Seoa3JRqGWC4zYh7gx8jw5cL3hssWb7uxWTM8BA7HaUcMmBS2sV2YwHsftgYuzHzkFS24pcbq",
  "key24": "3NCFawPdcwwH9Ky7XrnxbSM7ma1v3C7usnLvSatmSDy44APkNg6XLPZ5ykqpwKvCS4vDg5oytKZHs9yF5j94bizt",
  "key25": "sQ1xQcgVd5VDWXav83koS5cScpG3BM6cik5Z65BWqHaKWvJu9P9wLW7UgcmfU9S7ngdwNchetygMKVP4aLsUZ2S",
  "key26": "gmcdAq7a7iNb6DQb41neQ2cy547iqcFzjFGTcGY1upn1u5Hjefmbm7M15i81JHZRhZSw7yA6yy2DwjFNikefcLb",
  "key27": "48crbCV2DHbHHcsoYfBJYwhWCC5VpzeS3v8VjhXkwXMJov1KpqWt52x2nyQCsXX4BFb4dji6egzA9G585yL9TsuR",
  "key28": "4TcHxFcSzeWxJRnhQLjKc1GK3rGNKXd2X8sLuwc1jBRDNDYL8zSB4xuMc4MYNfQBAPjS6P6YJc2q1dem1TvgsUA2"
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

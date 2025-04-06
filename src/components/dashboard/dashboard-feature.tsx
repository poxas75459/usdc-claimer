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
    "5zxY1V1MRFZisKK9AcDVzXLFp7SC2zvPG6eSSNvEaw7FFhz3kAL9T6vnrro1xLXA8Ycpqiazr33jXTZ8fN7bLhuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWfC5C1veqjiQV1pUe1gD2MJkFyeTtPRGjHQLfnB7HDNPxQmuLDgBshVLxbUa41jdxagTE9KJMNUteV8ByDfwX1",
  "key1": "3LDb7mtzoGFn25VefHXzk2bkSBqPgjNELaasJwDVD818M3Tz9DTvfXBYeWEG2ufJ5PpSoGutUffvdKBasDUmWFkR",
  "key2": "4HnTDTd8PhiGV3T9daJWDdcUYW11xkmGxtum34CKErwfmYJhALnXKihVtAmwV6VwcpVXYWc6kNZZnJjb2doQDTnc",
  "key3": "37sTaN72cZkjGoi1CDa8j4XseXbTVnUHuRKeWLP8WagmqLfnTREVnKGG9dnPAnExEgNmWGkXo57bo8xJPgheatvR",
  "key4": "3zDdjWJHVJGCzNwR8Y1sUqygXCn4fAWvkyvceeePSSSQsTt5eMT83CK5X3ip6mHtqsuKDk3A7DY1YhJjxqywzWQ4",
  "key5": "A4st3qfPpgNMr3fLSgUwiNrMkaVGtkgqQF4BuuEFXjDo2t4adRJ2sC4Dx1CNzodpChHtfm3ZgFG3AUT9wQjr2na",
  "key6": "3JkGBshgsE9oAMqoqP9PbKd1kkQKdBHYz21EyNb8Tq1rcQoULtFMtZSDyBF9jaaqqWzvSKmqWNYmXSLskuXWkJzL",
  "key7": "WoCQu1to5np1usvKfhcDDRbFpsyg2T3sprj45zWe7zG6reiqVPeuMSnKgRYQKu2qfQKTb27U2oFxWnnDseDUa37",
  "key8": "4qwiYqGEVRsGSDU8mxhbQtfZmX4PJo1edjotpiR97knEZqULqQN9QhWZxgGresgkLgpDCJGvfbpPVqRkJi2MJrEK",
  "key9": "3hfA92WzHvjQj5EkYqdL3xA4WaTq6pWX8aK4excndb653YYLuawCFwuPmyuM1ST9VmueeBz66bdLhJLHSPh2MeHe",
  "key10": "4mSoy3mFkag6zkLHX6X8WWpDi8US3eYnkVq5TxCVkeVURDMEVQrVMMDawdHgyyRPqsAMEB2CyvoheGUgUKnKjiti",
  "key11": "2yHYRJyG95Fov6cQBTaLziwzW1nLsQULcJrFZkcdNzaTK9wkJPTZ5LKWZivVmxQo3yHpGu1SHNvkUNfKpBXysGY1",
  "key12": "3ErXfLhkYsjMXUwv62ePeLwVTE9kNch9hiM7Y5bZXzW9cE2WG1oXATx9TRpUnT66jjYe2LM5rkz4rbbSSnwn48qB",
  "key13": "44M8kY92g9UsYxKQcRLAQsKvDV7axScfz8A4NjxiXUgJG24RZEPb8ZjSRZ3BQspdjqHhs4Lqo5xQZoGzEvLSjaTQ",
  "key14": "WCsofgPdZt34WChj2KvGUPiJj1FLYqo1y8BjmrqvApVmn1ZzkybGtP9MUfHWY7gSJxsUZmeaqzAXCen6LMaFEBq",
  "key15": "5vYUKQa4jVSUZZuwSvXMQ1bUhRr4e5bktHVfv7aR8UMzbkPbHiYdcFVSZgrL1M9xRwFR7X3nYoZmLjy1S7ZiYLzu",
  "key16": "4pKjuER5eBoqrNv1NhfvoigFhkgBYN3xZrR5fespXWBNLXTCD3Rr6P1rLdiwEJEUdnQvyEoXbVdbCWKNQYdDX9f4",
  "key17": "44nKrnYaQDui5sM3CKgWuYpHaigeSmtvXo9swg7oarQCtmpHQfsgBSRrFmNG6P94coPVi9Wd1X2VwwKU5d7BNMXH",
  "key18": "DzrwegbXY52UCmwQSJEmznbJnkh6T1MVeH1sqzirPfADAwX4AqzpKgCMKsZ59m733FN43T8pWJNYn84G6YMd3Dj",
  "key19": "BWxPMUcQ8gy7jmS8jJyErapnLavQWejjKxWeQPE2yu3ZXouR8yWTfmR77U2hK8SLQcEwpDCaGBaoR1Jtxhgtsjx",
  "key20": "U36D3hwnbWUF2J8SXJQmwL41Tv2bmZVF1kvtKoAGg4mQaF8fPusjVA9ctuaPdcuzCm3USZCFk2i39zWS9we938W",
  "key21": "5bdQyc8L1TSTVDb5LcEUPE1YS4T5MSXTrCZhDDG1nLDzMYYfumwFm4gRWD334ZkUqRijFvYG47n6fGgArAj5Xm4K",
  "key22": "2iWShRN3c8wvgJXtWywJiKi7STvYxe6zkEDM77nyoQTHCBhR98rZ7NDhgc9GKxDQTeJwLRyBC31CcSrvKE8iyijN",
  "key23": "2PhWNtMZfKcqQLvEpT5FuNgiMswPoDtEVT9x9acizfUjYMTUbK9qahanbtyQhh6EukJHp4b7CzhW1J2vPtFEoVyN",
  "key24": "3KEHoaMu1Z69fSZ1e5DuWQQxEMHPR9ExVqfYKM6srbbFko5BW3h4duJwj7Z11JUMWV2HQQ2SnNYsGs9Lmxag8SJ7",
  "key25": "fAzBmNUZazsvPwC3qB5ZoeADsQ6QAHesE3dwKHtK6EjuUMegQZZRk365ukvFhamVwTqZKoWBhhVNn1vUrVX7JiA",
  "key26": "2CuvpsCR7RxGgDXgbFeEQcapkvpx2RjtLYy2NYKwGFfr49nayZDRtehx9a58Rm2TGAxMS686ttfgXF69XEmX8SB6"
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

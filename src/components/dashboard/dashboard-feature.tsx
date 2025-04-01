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
    "LDGWEfxTpheVZiisrSaQfvXwfiUyUcne2nmp4YT9zun1QnWjYZ9EQrU7xzHD4ebW7gE9gVCtGp5XBMjaP8dXrZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2ZPaPbz1EczwUQNPG9CgVneLHrJae9ZJHHGWhzT6c7FyZN6jLcaRfCRgQUPg7e3MkF2Ktk1Pox7zb9HyLrxem2",
  "key1": "27wBXqj3whgGAHuPnkvrik5MBxVoAZNhbKGtWSVHmWQJabNP7vGJhh1G3cJNp9t6CYaQZxwWTr5LRrKtS19fXyoe",
  "key2": "aLp2has3NdGasU23JUeQhAdkZWWYR43L6xTMioZEGpGwhwM6dvUBuqaRswFqqYRDHJbQvZm1qBi83SHEpTJoFko",
  "key3": "zDFNgzAwTZ7ERwDkFfPYtWEw4HXqbcxMZpsgfuerNHCpes8HX36GE1niovrUGp3EmTTD13cRYB8A9A7t6o9347b",
  "key4": "588TzZxoqD5ziap8AN2GeqcBjX64nKocgLirJ1P2s9r3EA5cW8r8SogJ4qzbWum3ds1zuviRsSjK8KZDTBLYxocc",
  "key5": "51Bqw3BVUC8nUXuAnq7Y3aMBG3gR67xEZp3B2uCnCPE6phBP3CxDuPwajH1ez2VT6RTXhqH1eTHgVq98gmtMbYWJ",
  "key6": "2Fi5o2VTyrG4pY6bVKCACgTuBjLXKdxdyBvqojcVX9sTCy6L5Hn4J4suhwx2iPj4sDvK7GJBfjjWJb5sYFKLaNjL",
  "key7": "GUwXrFg9eZX2DRTZyFY5druYgp6mgdiGzsKEp7bUwVeDz57avd1shfSrw3XxntQW6SHK89Rx7DmzrJk1LZTvXi2",
  "key8": "2JTs9SiMu9NNb6hNtLQ17ENkmo4Vnqhhn6SxRDMixEFuBHDgjdG5eGC1eCBzNjTnZTcvvC3KAXyYGCwzH5oc9hCB",
  "key9": "2kK3AGtXoD3m9gM3MnKr6r7k1vxw5Qdxe1s6eHf7mWWWutdcP7z7EXL7aJpP2XCgNGh7XeVDBurw5y6yKv94Q6FW",
  "key10": "5JQuD1iKvNGoX31eNCnutz7ypJL4RR8gmuoqZcqwKRirGrBxwehqcnNT4K87XewqT6ZDBjaNz1zbMvTa1tgQRMCU",
  "key11": "x2mF2AJkqjdtEdgfbXKbNi9LRkqxiFs6pBQsUby3Wfko2hustcVc8UX2TPrNXjUnsVR3XyEu4oEdAJPkpuJDWuV",
  "key12": "v68oGCZT4o8xJvDs86c9bQfSWRMDj1weTyKU4Sfms3G95M6YiRMFPhgYAr5a3ZDxDwjwDo14RA41NkAKEqoBCiH",
  "key13": "36yp1cg3TGbtW63JNz8T4wskTETJ9v9L6dJbuSrPuYJTdkpMryiQ2qWHcd9R1DFEJY8Y5Bi5mrc3LrVw9cri7TUo",
  "key14": "64PBahfa2auFKQYP1pk7E59kQtVdqyBsJrYpzv1zF1hZtHKJXyydDsJyPpantRgviD5ftiHuBoJrki66emZzoFnc",
  "key15": "4SLoRzeT6cepHR3LrskKV91nvFCDimkxHpHYz5ZdnVKAUfDbUgCpDEcgSwsqstfNXmgtmP568mq3Lmz4PzM2XAEY",
  "key16": "3hRpDb5JECqqzudZsVeuFrmqzNWnaucCSrM3DeVEWD1NXv7Z9uVdCDBeLSqX78nY7KA78fG6aibapbXmrARLHNmU",
  "key17": "267DDsWzuPek2d74qPoUGqzDpD9sttB83jLoFZLX5d6rsVKhvVT2sc8Lzw64vrgiL4doXq51WANZKgD9zXrFF5qi",
  "key18": "dsArQZA2Eu6CpcHDUkYQSC7U3uKnvtzDjDgfYJimnoYFrC4dPVdQvnrXgx6vSRYekMpFvpwpBCGYPeTLTAcoFcp",
  "key19": "3fXxh3CehR5ECmK769xBt6RSrjBwjyCbTUDr4Y5q6cLsBpBsGUMcvuocxFVZxs8ActrxzudLRqQzT8NerdAEqoLQ",
  "key20": "akKGdEatQ9vMdKitGotrWC6AfMENwyBJhxeMf25jSHTrAh5gouf8Xs3yh5vyaiJaEebUYzr57gz6vE1Ne5Cm5af",
  "key21": "C5TvN91Esx25bmDCUmot1U8JbTrk3zwRMHw3nfdVsFEYnfDhRyfw4hVjY52oAcKntJT2irkXe7iaRf5K3bEsf9p",
  "key22": "5dr5GWfDDQJFWbgzLLajCNP9YAMHr2APQ6Qp2kLKqxyFs3zogUgjbTq3u8g7N4BHT8ZtGwMaNw8QTZ7wzBY658fz",
  "key23": "s3Vyx5pRCGPedjFuuj8nhhi8JbmajH9Vji36ia1ZiHyF2f6T1MeLzjj1L19paB7NhPj7fd9bsZhiJLuLQ1saetM",
  "key24": "47uQWVS5LhaDe1mYtrYrGCWiS7b4H1Lat5ukpi56rY4CVW8Nv8UvZwd1ifVE68XVAsU3QZBCcmnoqhsd2omGasZe",
  "key25": "3ivePrMQWaPkQPmLDxwVa6221v3GqfBrKMDymucGefwF4Zwevihav3eEgX7qXHTq1Qzakf2si7EQqQ2ayG4ZXrsK",
  "key26": "39Wu2giCAxeCFk3xJAp2cWWdF9Z6rUV4WZAG9E9nGH3CmnU3sV3KwZbVRY2dBtmdrsD1o2KTMohJ8ak7L7jLCMVk",
  "key27": "56jL6qxuoiVYYEWZMz7BzJH444SP16XauH5xTUj5MzCsZZj6JeVeJbUsvd6ExvD9jPw3ai2sJWvuZLktpgJzBJaQ",
  "key28": "3pK9bhVRU897ypJ4YXMqi85NaZEvwHDq3Ek7mgCokbynmpXDkdMUm5CoHDrJPHZfAwAh6LdUR3aC5sPyc2jMWCJz",
  "key29": "c9YuF9qF4ioWYaBsUTR8y2FJcnMtdfQphFt9dftbyU33ekcphm5Sqcjb1Z2eLgPS5ELgGhBjVvKwhWfQ11tEpVY",
  "key30": "3WKbsVWt8JkXJGFWMMR5LNfjyRXULawNUseY76dsu8AQiq1Bb8h8Vc5DT5dxiWTSViJdFVJh6H2jaStjf6kYB6g1",
  "key31": "5Dyp537s7V2bYeXx2hbCER9hZt7nLNHmt21tK9SQQxRRNzT79JCMggo7f417JHXhR4Y6iUxQbnkuzbwe547SybjE"
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

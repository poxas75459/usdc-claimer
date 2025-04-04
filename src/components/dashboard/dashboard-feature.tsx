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
    "22Ejj1CLjgWNBfCnAQFLBeWXZHrykBPGbw9TRDXnJT4uuJccwGMWDoJwebfSA3EuCTm4zqXf6eqLFeuNoR15iV8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3QYuxkv9t7vpVviMepn6RsALbBzqRF8LBsLj34XaRRHyCusCSYejPAhwskwYJzQv3m3zJ7ckBA6a8aMw5E6mA6",
  "key1": "3mYmP9UPmxUwX1UNe1TzDQXzSSCmGdxcYbNnX6DbHnXTvoSMuGqSdmmXvnDmPsYZeJ3VFdFHm2k5YGjAwz7Yd1gT",
  "key2": "35KMQg11PxuNtQ5BwE3rqMmKaZj3K574AyGJd43UaAjjqsMoKBnWeQFUvjTXNkpiqfUPMQf45QDvPCJbr4GqkB9m",
  "key3": "2ycdh3f9tgQDqLnDTJ7L3eMNDCBCY65HdDJtT74wLNvuuJ368EBpDeQboyUrjSz9pFfm6JbjYnfzXiaT8Y9DacdW",
  "key4": "5imTPsx5VCnMCM6bpMWKG7gmDB1jng2V4Ki7NbY9mQDEMEnptLDxfEUCEkBDY3fkXnjBPHDGBz13Zv12tzckLJ7M",
  "key5": "4wdxYYWmKXUUwZMk9BsSNt4FPfXEci999c6YcM6K36ciEZo6XgEDV7VYFbXgtcwVpTcaULNdTqGh3qc5yLvN1dLS",
  "key6": "nXbzaCZ3p3s4Vqn3caEh2r4sYTChvEVfmbza6bskdUh6TSs5cLV7KUCp52vMgMb3U88DTJVtx4RiFRAbAkNWMRz",
  "key7": "5kqivergCEE59W4V4AVt6XKwTQDCnqmnuW9QvRveXWZ36rmjskyR6CdqybE9YrMQGQgf5C6Stsow2pocY3upZHNg",
  "key8": "5u9hH42Ah9qhphCuMPac3LQsQV2dL8SKPZjpzaC5xMurBsKNaHrTpFvqFBdomUeRnKMhebuRWtjDKW2S3YqavzZu",
  "key9": "2pUrwHa76MwLRkatYUFTJAsmTtiMrzZdtnJKJ4rJAJEFC641DQs5AzMc7fFN8Fmyi4CURLV6WoQcmDhkcoibvYit",
  "key10": "34uk7XTamiPitYgH5e94EYhss4hAhm3RhMxRVxb8nFttNQXNLyu25Wj3MkGT1fhetWrGd5DoGb5h3EhyUCDjb4T4",
  "key11": "52rY3XbSb4yPvgQk8kj13kWN4onwYZP7VHAWLm2zPqc1D9SFZgXnmCPkQBbij8ZBvay4MC8Eie7DoS6HBN6vS146",
  "key12": "4fRgAjYBGDLhKuv7L8crgxCqgzKK2b5Dta8wMgM6kNuVbespYyJgdEBtYGZBhHTF8CvBexYyExC2q8DRgV5nCQdM",
  "key13": "3biCVxhS9yLTmRh1uM5j4ZYB4FSDbyWV4k1DM3UZp3maFNz7WVkqP8RLsAJc19yQd5rGtpNVd9MA7xzoRA7xRwpq",
  "key14": "3LUjozXn1tZMG88B3Mc8se6tNpN3yqcrSUvM6wCEXLG944ui5wbcrgJPmTpnovLnFALK3GEq9mbENjg73S3hWZdC",
  "key15": "3LfBU69nvzkvg1hr3xJvEKuZYkELaz8sjguNoNmsqtp3i54SHVAAy391uaa1u6G8EJ5tieBRgncRXotahvQWPqgD",
  "key16": "3CkPKzdWNHc1ixC6QEEwBGxJT86yfGxp7YsXNmxnbjLUVNwtcfRAz2qdicQDrorQhVJMrYcB64GigYAi7A7KMkFr",
  "key17": "3j2tv8iUsm8Y8DCtK8FYRYZhXqu7SnwHZZpuYczEVMZEfnf49uLtZekdfd5ghei4GeEZYpG9X6ma1Ujeo7enUoH",
  "key18": "49L1nuw5PVEoA19w5DaWQGzZx6aukfqBNxHAYr2Bzq9JJqF6NUJJKFANDoQzGWezPLtAXeQM3V6BjEZa1TfFzPHp",
  "key19": "3qWRCTP1XrVfrBBmNyWUxVSW6NVFLfQPaD9wZbbd6h8P4C9Xyf5sd55qWgGSwfuNCS8E3rPJVepokn5QFU29nwib",
  "key20": "2X8nmhTFttwHtRMJ8gLumxJ1Yb9Cd8YDcuRShGswCJWwcR5M8EoQbCDvb7bomPKy1oQkKXuPjDkZCRQmrEJT9zLv",
  "key21": "2QuXYdoGje1i7RzP8Jo7CJMyDeQuNxxJBvwfQEACZTQjvr65CBebr6Poponi731C68DCLfyYmTKW5MjUw8DxSFe",
  "key22": "C2QwGSuyTVDhghY688GaSgbCqoGAqX5qcZu2iPH3fPP2fUNkyAvKzurZnrj7Vq145osfMR17LvNdgxVX3nPLvQf",
  "key23": "2sVoBh7GusKKYq5mStP5XYrkUuAVBVaXCFzGTCc5tUaMonPVyzeUzJpWP9L4sG5AzNw4uS3ckHzhQtt8gxAJ3574",
  "key24": "sBB5a1uUqxqkciXJUkizizEAEJdsqruPiEmhQLuK6G8Kk2tUmmQEWVZUWa2gzL1emDTw5G7kyhfDwHdLhVuNHah",
  "key25": "3nHYyxRr4g3g8TFVspQqCPs9n1e2GvVi5JrYoUF3u1bUhWopm59Ky47uCxV6FK5wkFwZAxMtwc2t61VoH4gnhvr2",
  "key26": "2c5tDcbMFJCVUtg1V9i8fKkj3cYju6twBiKTdk5ZHGHrQDqy79kD7i39rPLvFJNKArT8M6EEa6VTDxTRSz7E2TvL",
  "key27": "2HRQjn4QT1DEnqgFv5MqZUoADt6wtxfQdVnbKdcL3PaBPf3jRNFZCuA6W9Fq4mebh431qc5vDDcq5nQayTUH33uT",
  "key28": "2yxQV5oexbKhmooWkzFQ7ek9eYuBEJbWNZgo53SNbAPdqeJgzFke3jctpiEZi2zV2Br4zvnejYTA2mufDJSYKxje",
  "key29": "2f74mqWRQhaJ41ojf3Nbg7UPSG5oEj3NBB4BZ3bo214CK5xf251jShJSAsQoCu5Xm962nqcK97DqKZWu1sP4NjAf",
  "key30": "5U2zq8aQVUr5ukUbJTDsrxEo2WimXpLV8H6GAvANcJA74fkT3xvNBhEBG2ifGHT2Cyktp84cfHW1uzgUm46sKdYR",
  "key31": "4VswU4eFrV3GTLqSWEsV2nvh9j2QvPcdktRiyycptd4XqyVZJeqJybirUQbhZEu6sT6SLpRF9w12TAEKXizsMTS5",
  "key32": "3Xd2PEi327QpBiCsHuSqhgnmYv7oPBhCrzGsyuk9WDN1FRzoKkSpSFGAWk15qZdc4AYd3GiQCryVxmxNnYEY2Y3U",
  "key33": "2atweVNw459B1CkJPJtaeRcM2eEmEMRPmddCrBvMs4ccBdfphSpcj9LSVkGfasGtjvxSaAkRNUMhuUTmYzLi8yXk"
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

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
    "2rqhkoqXHC5kb4THExV44NutDCALhvmh1EMYnHDboSNFNqQKevgNBeTUyUYjK3J2Lyf9qXCM6nXLHyZ6Eb8CEZ6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x3X18WFJ5ghUqXSKoS2eUGt8U7iL4XLE2xYCpHuP9aHVWWzcVqeYiiRGWRcC1gVwd9Uhn39JcoPqxn59ZGoTBsM",
  "key1": "3qhfqfWQ8AabHA11iTmFXQx64P3X9KVmeUMbss9YSzGZFbsLvfkDw7thZXe1a3p9dEq2cETgwibiKis6biB2WpcK",
  "key2": "tPuj1BqKtZyu1xTes8wAuCQ5oWBmHfGhNyqNjfFuSHFoANyQaCYEE4ktGUmZK4TGk5Ha8MDtGi1EQWq84Zc1AUA",
  "key3": "3yD9YQwuXDQKexYXSAEdogwWdpAagSZmdNQfNWwXxC7zQhsFbp3jPArGCtj15vdNvtYnJHGV7HnZNkRk1nkirrNY",
  "key4": "3r6hPAHeUbbD5jnMWYsAaQWDK4M8bqUGsn6a6VzfPqnQHxwuLosimmoS3r43SJjwJw7dsuh1Evd68U4hsugBUSrQ",
  "key5": "2USP3qyxJjgeed53RiuMT7hotPcSRU986itA7R3bope5vAJYpsibNZH7EqjbeDhQ1HgtHJbmSXEnP15LABpWQkdp",
  "key6": "3eTwk1rP1mKLUHX6rqPED4Y3yLL1sy5SYgNoL9J7JaVcXa21sgsjSPDgBnjGSLbnZsueQSb7oArPiMBHgr9Mpb9a",
  "key7": "58NRZ2q8McZcMvH6b8HpSC8D2PLFdMZrzB7k4eMnHeDNgdT6RZ1PSFNxQeSZ1gegzs7ERxr4yyZVXb4nN5T5RTwi",
  "key8": "3jogPtvegdXs8iJGVv46FbpL1jwJBQeMrcuPnZKju6Q6ypMjPPLpjVoeQjbKhNgaCspKoBYKfvTeaU6sRhDZuSHP",
  "key9": "JeTXXSK6mrapPq5Dwdxu5VQDHmVH9KVEkpB4UD1sBDcGRDLeU97iAVbSDirCiYSosNdvPqUMLRH69HWk49TpFY6",
  "key10": "vDgvWWLcAE2Y1QXyscnhzDjfBKfTfKWPqZSoxddQp1RgNz8ECT4BLtPBjkhGbKWGQoxqJ8fB1o2y9V71oVL9cqF",
  "key11": "41MwEaNRS7JjsDirjuWqbQq9rrqSZHs9E4JeJkRKJAsRTeofZkXsyVw3aj8ZJp5tZJ4AFzU8i8ZZMo8GoA6v9LPk",
  "key12": "2o8Uh6W6gk8iW3mQBGHHPHDM4Av4mAWBZYG59kSXeNKJqYkRL9i5793bXefwk4x3DM1MiKgYLG1CEwcC7YKPAMzR",
  "key13": "3nMryQNr6VYPrs51Q6Z9kxuqRTPCEvssxK1TG3c2UzycwhNLX4pMsVCDrpXpYC3QQ432NDhTSrbFrTWVKAUtpLiW",
  "key14": "4TeXAvYeBB4uYUfQbU9NTvfURUaQ5uqVK4HLTAMaFfkqKHHrCEpiHsoi3wae5UqVZSE68gC1r6PSiZfcxscRdVYZ",
  "key15": "9J2WHARSzn8A9xVveTM4VMd1PqYqMHSrDgEb1Tewd3Lin849htEatbFi6crD8bWuSiB9E4fMUvhNVURbdSk7px4",
  "key16": "2by2gCQNRzKYkUthG3S42rEGezxGKehgV7JTPDxtiTXdPCowZAr9Qz4TgKMo8PkjSEEjeGBGrND3o7JYKVZcZNHZ",
  "key17": "QP1dkEsiJuyb8gqAEPuUucxHqbFWeLLHxdKYTFCEQ8gW6CZpaKhdkCpAFgdAN7SQFGsU56FDHjNxYksWyknBg58",
  "key18": "5wTdaum6mTm3eLutkMLmh3bmfM6AWUJ3vaV8azHXWovp9BEokMXafeST7jpRqZ9QxyD948rvnvyxnVj8qXACwNri",
  "key19": "3g21sgabKuTQCY2y8bXq4rSaHG2pKoeJLGLV7Kj4Pifc7W4QCKDbsVZtHBWerw9XfyapY3QhFdF75pQFr5RH6Jjo",
  "key20": "3p4cjAX1ZXA9dyzpFxX5oguUfHqiqPitwtiGd8ycDkzghe2SqUeQtkS8D61kzPxja9ByaqU2GzQ8b3kcNfcnPgY5",
  "key21": "615gWWP8nT2aBhmNWoCKPgpAYAeKyNoUTCMTJUJZ19RKDx272naSgyydyYLA1jVwbv9szhmF6bz5c1Evp9JgmkH8",
  "key22": "XqchWpZc9g1kguAiXEzmY8aZjoZcmujT5nsBWunBRpNPW3399miUDEeKs6YkReo9CtxT46kLUiucN7vTkeAQPyj",
  "key23": "2eWCQbN27fs8dB7oYYqXYge6i2i4KTfGQqQCu2mvrojDrwuRp6wrvagqueDJyCiJwTc8AgM5JCtxQjHq2ckYNyUy",
  "key24": "3nzgyJVuHAGAScVzNL6okwLf9UJsGRy1so9mD1AKabWE82NWYRWnKQjHEtwfzurCJgjuHxVyGUKBXsU8go1cgYdu",
  "key25": "2of3Zfe9wpxD4FBwdew7uikcpMRVyPGb4N9EHwyS9t63ioVZYQGKqHRKFwXPvoAbMDzGGJBW8eoZUVc9azH6jEhS",
  "key26": "pUg2ydX3x82r7ipg6S3GWjmcncwkZ5gYpDK2y7ndJySkJR1Uqjo1cqRZmcbSJoBSnjxJdsoaeXMFPDKf5dt9H8G",
  "key27": "4Wj4EiNpfYbW7aF5ozBQfqaG4oxzhqog1pTx3JNbUPQRjJmu54BQ14ZNMgtm78UWmSN5oRKPm4mpKsUcjvMAPAKn",
  "key28": "3CBTKfMpMfzTh67Cfg3dRdwpeAwYTw74JygkXniL5gDei5duooV8BeXiYdTT3wZnap5rPKpgAXhUAq4tmeP5KNDk",
  "key29": "3USh4oRg82NJ2Arn3UYyzQEUgPm2SRJmCXVUtcKSkjjEW3AVRaqg4dSBPifvjCC7dGQQQAVWG8H1h4o9UThP6jx",
  "key30": "KFXSikmtAx4evEBQXy5u7m5tUiQgm1tbHqEhLuvpETMyKWkKc8x1ayFRXAaqxHaJmS7nP47jXaF5XffgPWaWrtC",
  "key31": "4Zqmc4XgzmvqDS83tb62uzVGvLXjhYDq6S7EY6guxzSvmVynkALV7TWSEQoQzkAZSn7FrfE7WqiJxk6b2wP7HKKg",
  "key32": "3DG33X3pjMP5TRpQoRsdqUSPkHdgqCNe6UnzybC1BDS8hNc19M3yCQrJLaeRHbFdu7VqGPJpDkve77UX7LTYAzNm",
  "key33": "8ifGjWHW9o7C1TRq59VrZ5q8DQJNsAPXYarVRr2mmL6XKZibrggxC1HXdsa6CdvprQHJNTFz98fZnn6eWP9TkKU",
  "key34": "5Lst8HLtj6xc1pSUxW7iG23HDGBNRXKVPS8nzhdsgMHLPsWtRcBTo7hf1d4ZQejMzdmrRbZYjaQEUKxeY3sRtyYk",
  "key35": "4Me3jm9o7ufdCpEz7CTNdUNgy4ko2UHRQHHCZZ6bzG2F17mbbD93sm1aRRNXxsHyqk7hC8HXcmd52AwQNtzj4efv",
  "key36": "3eesezE1FnhcyYi5vd4GaprPVnhzYYP18ZqjvUKSWeZfNoA2vMcrXi2bNQ8EqaUZepbVQUjdVcMfgoQqU4TxvXR6",
  "key37": "5Nmnz5DhQSvigymBz2CvmYbbDABy3p7UjdurUSno18wF6QbS7CtKnQhD6NQznFpZGWGAuyrciwcbztLp5yVGbNq7",
  "key38": "4bge4JHhQZ5mYrpw7p33LMvnQz4UphEqfvbWfz996RGVm1s9o7bEEGq1fLhT6X6xn9UYGbChoMSpZ3QTLh74D57h",
  "key39": "22VACQ8bemsqoRrkHbw96eMjZCvHbCwf5kZd2t2Bo3FdD6gK8cQJBoqte8Vn9k9XUZGWnHTC6atYfSSviQXj5SsG",
  "key40": "67VTe9Tqd1xx9YJDVBjeZrruiBEZo39wgTvMuNFg1C4nj55tYnLhNYr7owzH1fMQU4TDhAUoH92brhxVfjdzDFuw",
  "key41": "4kELNVjByJ6bteWtCXUJErS7mnme7uqCJsxkjhmPoobo9CzSYbQewfaaa3a3C8vSky89w7RcYNR3s6Fiiqsk27Ye",
  "key42": "4JajTtVTqQ9zYBjAZbnwCSmZNhBfXih8hVgNjm5BnmS4ZQ7DQypidmLVZTWLAo2iQGgw4HmfBSFYpJHn7GF1LugZ",
  "key43": "3U3WUiFGv8mrP4ApTMhFaUFN5brTw6x1ScXF9yJh3y5fs7niKFSAYLpqYAEiDPQcnYDnLXwJNb9WMvdiQfVQkYbR",
  "key44": "4vkRUm5HEXXJiemL6D8gCX53xZeWXR8tz9vL5L7CY4y1XHN91qvSimpfo1kLppEmL1bgFx4cYVmhJz1jnxtj6nQt",
  "key45": "5hUGfv9juVDjBZRzdMmMkvWXfpkwPqc9aQYN1yCWDutDmEakBCq9JK4YVTLUeqJRfA6xe5jYaS7PbP9iPGVT3Rcd",
  "key46": "5hFJbbZmcgqs6Khs4Q3zfAbLJdg6hHjoYnXPEaq9yVDYrPk6svnbCYGyRxunYwLNVfBqZmtoZiJrxEiZm9M7BrnA"
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

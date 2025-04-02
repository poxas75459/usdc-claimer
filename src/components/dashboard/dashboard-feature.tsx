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
    "5FhPq3zSUx667HRJWH3neC7DGm7dewVbsJvavVMmoyHQqeYTnPast3zgha22tqSe9RKGXFiffLphDxLNAvosbgwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpohzffsAPrYKEAH7ZXcxmXjKyz5edKNUYugZseoCu9MqFbgzWz1cTEKBWmjVs2ecSYVbM4XSBvWiYaJzCX6Jmu",
  "key1": "55kUkXTaZnVwvyTGosb26huVoQbGSb18TZFTsL9zh4pUugZwMcQGSzdMczDQxb8waTf9JL83A3wnqacY4wrDGEJy",
  "key2": "kD76WwSBPWtrDCp1j5DWkz1fChYdduYGGmuos7saRTrYZrgTLP9Q6rt612ocaZBi5zRafRxEw1FmBM2xu4WA7Dw",
  "key3": "3qQDWXyNkCcRmjmS5WNsiNdWfNR6Y9NTWBgqJrm8RTHhKQbyo3318dtxEJptetGknNVjvnBhDzm4JDCjSrG4rMXk",
  "key4": "3YLMmS8jbLtuH5GTfrwBfKUkNfiXjCM6wWkQ6HDZk4pgXPHPuQ1mNiR3Qhe2Rmhc4FAAeTf542dev5VDwdppeLm5",
  "key5": "2Hvavae4YPddRzZJ7ATRjcyGKNePdjr1JajvF9JTGeUfrW5CKFhcqtCFBe8221ZJ8R8TFTKU4t7LZ2CnmQyJaYwa",
  "key6": "3MHT2wcyuV9gF9J4yqpXRV3BC2YN2vHF7o1qXF15ceBF1omBVEDwmxxDp8w9DfPqLV4awA4nfWBN8LU2wbyxMEfr",
  "key7": "2eDibs74PPfSW9dc12vsF6L37EwpxXeGrqJS1JSnJ8HadUowNx2sYQeGgexEpTtGkSnwcvJsNJmjdxH7fJU6B7Q7",
  "key8": "2s8fW6LQBRExVndXaNG4SZK4UUEqruFGBZteqmZHnaD3BWiMS9PpXEHb1tCiidaWBecUwYSwNQLCrPUJkCgkBuU5",
  "key9": "2daG9geRA5a7SEkhuzAiix5JvqdQvuy8JcLcip5R6U5EM64bQrWGW3Uiio7B96azAooLyEj7nDnKjjWBzaEjdZ44",
  "key10": "5kSiuZJ8uKfHQfKoH4epmXJEjdiHk1U8NTu6NQz9auGwnYWq5WXxNr8bSojRW6xMHqPvSEyJSXbHLjRGWD4agGdG",
  "key11": "5XPZwv6XELgr4KWbpsj3NKHQJTNtXoA6dB41MnhjMpKTQ2KvZduFhbKSFnWWAFwQNxRHHNXsrJExBkDijskiAx8D",
  "key12": "2hw2bmCaFycdHNdoumczFQeYshhPBVrhFwsYo8WeRcaLib2oCbBzH4co2jaURtj3h2WYxKGPhcHXEgeocRV7Ebdh",
  "key13": "3eDcAtZmChs6QbNaoCWAihzjLv3HjneX2e3wJZrRSUtPTwxKcSUUQgwx1YzMD9C49CojXBqPt1vQhVZzCbe8cSWj",
  "key14": "5WCQkk5eCKy2Z6JeZFgPZFkr3i4KHUo9KSGZN61xUHMuCMooTg1Tsq4BgsHPZbXxmkECVikswYEoPSKutgRKKxq5",
  "key15": "253fKjP6n3Lqv3KMGbciE8iqbwKN6M6DGeh4UiisDp8sXT9W3z2J3JK1e5ydWQ75MjEEPEoYcxCoyXiLmdzXFDUY",
  "key16": "5QmRfMuF8rBADv6sq4jPSUtHF5c9PrxBbacoQL6KKhcLQNUBshpgRPDQ4g6BTxY2AmpCbVixLSokzNUym8MJVeXz",
  "key17": "gZPJGppDv9HWuG2HQCpqEeX9YuDF4NgoH7FueGdZoTvDqZjnXajtfnvXsc8CQCgzr9E5YABNLZjhf4jvcEN7bC6",
  "key18": "b5smrhJCcAZk3WmaoQmmyUehXSLXcyAqvAovAkogjAn2rRbCCijB79KpbRzHhcuQJ93yotqhHrsGDmGLpMKnsK2",
  "key19": "28QQPdDnhaUzhRiSQD1CPmoSV2KW9h2nFZStSskQMbLb9YbFZdsggZqFgm75fb9ZSuypzRJsDrxS9c9gDmgQWom3",
  "key20": "3p3KDwSJg67d71y58BPC8f3t2FvssWS4soHbv1xaoVrbv8PpaZY5Nwva9mSh3j1cj9ajdGpstBPXNAbuVDCfiKoY",
  "key21": "4QNJ3QfPoinb8umhatcjZR6fCgAq75UdvGDxESGko5ZwBWZYsg8GzSuHHmqwfCWUtVATxjS9P4hJH6uMd4Hn7EsV",
  "key22": "o8oaiPfXtSTw8KKz7bPG76iNd8dPG8RYvtQuU5VGJJVSYArmbGVCyF4RGEUVmp9VqhW9nZZd9mDw7QsDJLnnbwd",
  "key23": "485q4omdwtreXUGtndmsGaVLCXVsXdBPs6Mp64PkFofdYvoQgtUDM8XofPkNnEAPG1umQcxeVyYCsrBVEjJ8hEbD",
  "key24": "2RmtYcM8j2KteoEXXUJHFDYGssz9YGTZdVu8ddAMDYpqD95y23zPnXqdA94mwRYGDbVx4esYBe25HjRJfkPVUcA8",
  "key25": "2QFmsqGkXQ1uS8DyKjdahfw59aLtJvM9hGNtvpv1PJiYEViZxrHRuYwRAYup7VhaWqmpkT3wGPnW76uuWYyFKgnt",
  "key26": "3krXuiu9TGY9yJdwjo3LadR9fqiKqhACHS433RDZDBpZ5YLJsu3gaywYYJ2YnJWofKDcKMZmpzvpTbvix2npWJEx",
  "key27": "bRYfBv9eujZPoGDWwjbfhDGNtjWsUqvKvKAcQG2AH7DNq9HzfWPopYG8swZ6XZycEeufKc6ap6RkndQVd49JfD7",
  "key28": "2YF9iFhxN13BzdtbrDx7FCdkPPQBkipqKz6pfoG4ejn8Ufd9cwFvU9HzVvfUc8fxhcYBcrvDTpAKxBxfmnXH4riA",
  "key29": "4sWtEQ5niWasKJWWFgU7XjmX1yjT9k17jaP266pQKZaNRskz6QgNW9RMFdk49bCZU2msRsSEATtr13FLxi92EZse",
  "key30": "4t2yccckPs6qpFisCDGCnpRfhT61r5q24NWdFAzGxZtwUySSBnpTUdxYVJqNhyGqUskzSgAVUMYPs9TWHjfw63aR",
  "key31": "4stG5XkAnZirHbqovEDS5eKvXHoqSQoqiTCQCfaHwKbqxhhCAcDARdSDQrFNg75KZGyoydt2gKxUkdbgCZVs6k9z",
  "key32": "4YxQQ2VeiRmUxMAuTZCSLwoKvu9jT3UphrbJw12zf7tNzoiJk318mjkJc91KW85RsdN7D2YrF2zzJEC5XcyAJnEo",
  "key33": "5dwbZ78dQQfYVPVLYyzfqvZMEWW9SJq2C7qr6rU4nirYYyC4Q1SVrfj8SF5q96sH1oBGiJpBiMGeb22GnLFVDNRZ",
  "key34": "5VTRJ4qnYEHHahdYkXHb1FE1xTHkDRDRfMtyJUug3awpGS6s4LKVEQhkEueaYD2UW2J9wAyUDuVNp1Z5u7CKSzLD",
  "key35": "4Sjt4UyzD4sa5YL4GYGBajvofwoHbFAzZppNYgbsemPU7xEKmxQQv38x5HCGuQqkYEwV287EhPPiZsY4nzPFKUv5",
  "key36": "25xm1dacDMxcBnK6qEVk2jsAQ3ac6HUmkfnEAG7fBPxE3166W51QSnpY52y7sDYmGnp7ToEch7udtBtc3Ytk3x2M",
  "key37": "4d7by3wKZnSAnRdX6FUB8Fy8HxJG624cAucjxQv8fhCBYsnUBrr2i41S8FTuLu2GsKwY44SC5mHyJF8Q9Una9Gow",
  "key38": "5cCCYAWu32MghyjnfNjyQivF8nuBZpFu5jhhJKkR9HBhN9ciSFMhfSchvkJybSz5mT9uMX4ERHsNMTjgr2Kpdc8j",
  "key39": "2KazVx9QSz5cbH1iFFzTuGcbyEaJuSQddehMkvDXJTVWPLsTJ5PtPPqXCEhjY9UTmd5dbgfroxFaudpKNiNuxgx7"
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

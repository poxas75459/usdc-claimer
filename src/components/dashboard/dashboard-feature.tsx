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
    "2HqQ9cMnW1W7v2u6PzH64K2ieabUAfbwFqhBNMdqSaj7Q5xZH1eo2XTQd6R4ZAYbCwY58uQkhKQwVUSTbrELNNzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZDSWsLEo84VfqbwJw21tL4RPwn7ey6wshvQY6ZrViCHcn8MscbQiBqNXjmVjmoqgi5LXPdT9uJZnZDdsEhYD4Yt",
  "key1": "iTEodpFJyBB2xJFvXLaCBbVHy6BLHy41e6tKoxzHg8NmeQRR2gWx8u54j2Y6z8grG6cinQiBuDBLu9odfocSCGq",
  "key2": "3L3C8W82CQoQWohpL7DdFoxs58G4MjTquyAbfE6qkyrhHDcPhXy4ewVmG3jMXyWmo2E6jB6yjaXt8mv3vZni8Jkf",
  "key3": "5Nm7nXJiSLFCMpGmCaAPobMUZ65FsjKrwVaHwfMp98yoSoCcmtbgfMVeFdJJohVep2TvGsSUMjpK77P8aZ7vVVDm",
  "key4": "F3f3UHWFbqvvVM3efihU6995nBrYNYC65VvxfhcCXp3fmtJWJjJycUNdEZRUZQwcodrcor6wSzTbTZwr1eUHdVs",
  "key5": "5BFVphUpG7hpMc1KmmNt9VKKQJsX1QGhcbL4FXHeyHRPada5k4s3V4XpCWKExxjoT7LtsAxUJRx5tQMtHAzM8GBB",
  "key6": "5gZvTU2r96dVEtK73NuatY6v79ogHJsEiyMY4wSsdvmDCUjoakdrnWEb8AMXfpNkpALYo9DPw8jZK9a6iuBeJQ2s",
  "key7": "5hUuMLdKgGi4mjVvT1Yv88YgaL2giNKgHmCQFRRKUmwNGJchQQgyMB8EA2pW7nAD5RuqxMuU6dozpCankWhGkFsd",
  "key8": "63N9oBEXcSTnas3ymNrQr8dyormziPgvyQqNcMZ3ER8SYG9gc2JvzeGa3fwWUvJwQM7rZaLW2GYFqS8QeMkgdje4",
  "key9": "63GtEupik9KcwRvZ8ayNjwDv9Lw47vqaew9sx5Vx6ntRqDjY8cz9R9pinZPMLmXXJYeq1cmaE5jmNJNLtLKsTiPR",
  "key10": "43PjCtCWeTgC6hN688wLmzGnnwkNwDTwedQeMCc61TJhHWkwxSBk8JiVWpSp4oiUZMsKbt3tjZtXzh6UDSuR9VoT",
  "key11": "5eU3qh87rP5uqWbHBEEvBBdmsHNZiVvmHCqDGDz3GwRPPN6eU3FyZdtRzGJBKJHP4LPhc8jMdHE3YahBs8RnrDUd",
  "key12": "vwvp2Fek3P2fKPAQydX33dKywtTxwFqnYpsainZRaffzcwCpvHjjYJrq6m5EPTKKVMeSginHKDgndp1KRum74sh",
  "key13": "3mcmWTEHFbRWBMY36u4e1jk51LCp2pQQoTADEogGjKZUEGHj2vzAVrSt2mJUCyxGYBWKzBWE7d2fpodNHzyEDBRb",
  "key14": "GdmUcMegk3ZHZH4oNgtrSJjzxJcGUh6gjGt5SYiqYhRsJj3XRiXSSebaFpRkkqYk9XKdzkTWHsmqi6S314e4AXb",
  "key15": "2TDD4N7TTLjYCt9uoV2RyhY3Qe4ruJhC5ncZmhDkxycbEJUQeKx17j5j69HGvVvCxKyicLz7FVPh8BRTtByHXH2A",
  "key16": "3gAeG6fndSYPv314h1TTmweVinwfuftZrmn8ozEKPStu2qumMXUPnC4ayNgCxcZd4HnS6zU9Yz4kCo8FAZPadEME",
  "key17": "5Br3TaZmiyfqewNGYFbR8W482JhRYMNxnTwHrGXLf67DcjQofjiefR7c2zivGdQu8G6xb4Sc4j6XJV5RKQagb3Um",
  "key18": "3CWuP6nnb4buwTnCS43UQkWiLANVJVFguXb3SujigcceamiApdFXZ6x2UNFEZ3WpJv4d9LWHio6dHCg7gU44MDsx",
  "key19": "2sNam6z5C8iKyYZUrFXARBfNan2F7hnKPcLwGhqXiG2NMSvPvFi6hzjFbDMrPeYZ6NyzHusJVrvLR4DwKfb5wMcS",
  "key20": "Hi52C9payRnEKazFu8rZFUuijfrdrf5YHCSDqzaVKt5KSECqSBVpf5F4wfCEFJSg3xEEjpp6MPsXpvDbFqEmN9F",
  "key21": "5hWAEnkZdFQ57p5xMiBhgFnWYQTk1rnhNY3SiDGGwdMS4YUoJ8BgFKwSTLjP43JXJK1QXCghkaRP1RmK91S9K3J4",
  "key22": "3TQ17TJGnXJsrLUw3vMaBrsQ6ZQ7HRS8tUgvD19XB1bPqKk26jkjX1EfNtcxBxuipNZhSNSt5qxxiH9kfVeEYcJM",
  "key23": "AdMDg3zwK2ZAYWwdbthwtqSyY9re9B3JcBGNJe5UkRo7Gz7rtiQEiUvdUEEWDDtRww8chEy8qLj8Q3j4HffhecY",
  "key24": "4beVzUErGzf8vensPjfEo4SEZLE3aJogd1UHapiWYnfT5hrNdLDbfag16wGACETnP9x7XnevxWsqYhmErX2adwxu",
  "key25": "2YqQx4xr4wwCtyJRGnZ3PePYEPnPdc9dz5zjKmEJ3nituLXaa6FWNCkGZ5rxzsD4BKftuhrbEXiXme6KDgu8mmJw",
  "key26": "3UAdq45RAZxkRzTiPm6TLJveXx7TxppvpzseYnBf6uUkjBbUmYp62fDeJpEayqtGNBL4uXjGiPEqGyf7kPYo9Abw",
  "key27": "2cSrpUFEG8R9yydgKJgDM5hsg8xB4dLDkccMdso59YQ5JiBVD7WGsNX54t8nakF7GvW1tP4SivpQDgtbNCgsWtpg",
  "key28": "5dUJ7pwhAvuDGTYdHf7AM857wtDsF92zMdkJsisDjtTZBco75RgKaYQqDwUaNrAFQSYLCpzh3cVFyMYkDianipgH",
  "key29": "cJtnHy3Jp9eCXYEK7ZhEgd87ppCwhBWuP1sxHxmb3YNUTDPfJWX6rC4jZTdxk5G2h4wrQHXzGYDFZBbudnFjVKW",
  "key30": "5MkBA67R9qLiCBbh9phwdzTLuYbAGF32f6QFWaRHJbbiuh2bYTKbcqp9PXcjEWRYcsdZ8B6116cn5fcudrbhkVjF",
  "key31": "325v6Ag8ZW56VLAR97DxWtT3hfaZoaZMn5phnMY6fMzSvZqXye3HVMo3y7fLcuYqCAfbXeteUNF4KkWzRmReURyp",
  "key32": "4Mft4bqhdxAp3cRRMdsAwikrme1YLWycVzmQL3PucMF94jzJUQ6oPCMX4e7hrGP78ekC17iz81UtuMPEKDAkFaGK",
  "key33": "5DYmZZd5psxhZiia9zzuoqrR3GJmPNSBQjjfRG2C68mmiJetk8PJPEH7at3pVdADChAzVgJpkpEU3HuzGoorWmZy",
  "key34": "3HZ269WXCv5fTsDyiN7a8nLDAhC4wWagFPHr7nzLijuDBd8VY3HsqqD4NkoiVAxvuHCxDkxkjTJP7cbfV6MDTT91",
  "key35": "4iJqWEVMbUrG7HVgQ8Tr1YJA1i3JPZtixaAR6314aqeu6JKnQXGqTFr5RQshTEDmSNFKTFH8qmYpquZTgNX8F3GR",
  "key36": "tdJkqvmynwNMocBQtUm5bnE4aJcE3kXN3trXaHt2YA64Txt88bpXhKB5gsYnJVz2pDDNJLaUtF6ySrPR9jfnTqZ"
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

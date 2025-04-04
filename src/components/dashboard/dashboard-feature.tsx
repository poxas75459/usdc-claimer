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
    "61e1iNTjPRw7qmc1hrmNjgr4ZHg6m9ZPtSkEZMS5V9gb8M8bC86PDSqrvqYHe6AehCWqg5gq8woDXFK7M3zFcqpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4nhxBGMHopS89QnFPdD3vSX78LmqDfSuYfCFaGjczKX6f5pMjjpcmjvLtfkRfSocNowYFY5DF9CTfUXSg3evhT",
  "key1": "2UE1GpTwdSqCL14aQoSAnckBTuNo1W32VxunwqWnWRaD7NKJC2Luk1FQvJ3PYyc1GJW4g6aoCRtYhRZVkrsSeuQA",
  "key2": "3gVyjxbrKnkgjKWQVubdgCMM7naYWqsZbP4XATCF2nAd1rfJRdq8wFxLEpQnjQpz7vuVFhtW4MVRZgeBgRA9Zxj1",
  "key3": "3raptSJikonWfh1AxZk5nrXJcDjc3Mq4ZhctgMLqW69878F19ASzUo9mutSTWD3n9KEFvVwkBmKPehQsqJT4zNiS",
  "key4": "Qf9T6uR2vPPiW9bnnk3cJotMg28uNT7yDD42k7QcNFi9vfKege6uQSFznQ1qWAUPAhbdgkv8dK3SQRhmVh42ZWp",
  "key5": "3fNogUiB3hSfr1vw7eF6VePMnYZUBueBNiGeSJq4BfsYnv3LjYQcniUknJFy98nsMVsmTxpyTK9Z4b81BGhppWZE",
  "key6": "4xCBTueyBWEXfmU8kSup2JcSgVSzQVdgAVf6iJTK9ZyaUiE4HryZ6xEa4Fw51KZddqYTJmK8wkDxWt9GnyFi5WNg",
  "key7": "5a3pY1h7SLX4VNKVfiaqt5WsWPrGUQeo75b3pGpvj45ZmbDPJiT1b9AsjqQfzR4bybSHtmxsx3VULice4u9PJbv5",
  "key8": "5t5dJWQpWbsbGe9yn7mGGo6wHD15La9eC1PCF7Q6ENqYouB8kpgAfgifPKqKDxBesjvqc5gsuBXjKxCk8rDRzrQA",
  "key9": "4s222wX2vGn7hpxNTcaecQnHHEmH672tmdVB1MY9ahwGWzKPT6HzpTtKg1pYjc4hrvgV3KDUKrXHrr6RymnWe68k",
  "key10": "BnmmiyVVQkmhMAiUt4NdC6ruAiZDdtfPX8J6T4NktyCuBJMVaV5JkWYLaNvGcKCF8ghsXrdzGJ8dGgejJgU7tQw",
  "key11": "ApDuYFhmC7RiqgUkYbQ2dmR4kBC1iSLt6azaLRUimS4jtTn2jcEw1x2aP8HgmanbJty4hAdPymLVNkrWM5mPrCJ",
  "key12": "5ZhFfEHb3Hp7d3sy2vMEgRrvuW4cXXnjWXh57CzziVhv3eCqu5GJLcDowLNAZdTQj2kKTGnQWLqqULY4tFKZCaGC",
  "key13": "2pPZsiJe5h3UDUCiFUktBvJXNfwFvVXHXoJL2MbaMpDuBPoTRy7aR6rV2Y5EmGq4GnQ7gatXdS5XaxqETdtiwcG",
  "key14": "2J548zz4pKkqPZUhfMaPYTNpqFfE2kVCDEoVpQWbwfcHZ7GChrSbWDKNCKFPMDRVFqcYAg6hFAf64q5y6e3133gE",
  "key15": "4hgCUr7zgzjXv8f51opbWyiepZ6qiJyzqmq68PKhNxpPQy3ZAdnEZCySCeNCteS62ZLeMR4oXfyvbbiMRWeTtwV8",
  "key16": "4h8BSC4k11Yxu7DH4nEYSmnSTu9dcNwuV6LEQNVvBYEiiH8J36KR39WfEY3kMPXX6rD1ENLh91FbQ3FzofHyBrBm",
  "key17": "2JdGhA1WZUuxnjrgqgSBn1ausDhci9PTn7SVLq9AyTyyMTYhgnUSPzG9A9ouMhVVjnQTU2GgmrEfF2EF4U9QcAAa",
  "key18": "4N1rqvdKJQ18aiQq6irEuzV6jcDt7YrQFaFM25QB36zimoe5eKc8EqvEYY8FJz4tE4htkmxRavXMbmXJhEmvTHXM",
  "key19": "4XS9j8MKk45G1bBxwa3NE6EZgYaC5xUR1CaPe8g3Ne5LX4RJFSEK8otTqk1dtVGHW38iF4nXHd16swHAF6ZSipnk",
  "key20": "2UTPAUJ9ULGhZ6hVUk6btTZv4rT3jsZK94f1rcAEmfd5JpazDDd11LaAewM3yrM9nwcgQPiBbogCszKSxXhvwsVZ",
  "key21": "qtxNVZFQCMrSD15jTa7cedMoq3FN8o6peQDtXBXLyTGeEETNnCK4L2NwQrrxNv4m7zf6A6Q49W98TCy3am5ySrJ",
  "key22": "3kJhepsTxKtAen7hEtzrdc3j9CE6Du5R1c9eYw3bsZKDFJvUkJVBpZdAfe1jtrKhuCTM9jWK3WrJ8cKEzin6z8QA",
  "key23": "5H8DrccwQnFs68DHRTcWznmQUAf9fSXYkCz9wkyCECVaikdxVCeuzGrkiV7wVinaJA1nYH9umEA4q4MtJv4MusSL",
  "key24": "4pKYZarqFGLJNgfg5rWrWopFS3QUois3hpDT7M3evuwDxT5mnnM5ycWowz6HTpeu14rXQntVGwMLLWHa94MuposA",
  "key25": "3LCLkRDV5gHWYhtH21cDcHDd1ps8ZZKaX2LM4ZMbNXh7rukHXSJi83HeXLvSfD8xwGZGCUSZGgpDunCgiu1LUwPa",
  "key26": "3TuV4EDnT7QM2FR34ABu2eU6FMvKQstKy1fCtgvvNjkyn938SWatuP3JtAiTQSVst68qd2FRQPMGJjYnQSeTLQKQ",
  "key27": "KiUuYmh7u319fuqr1Tmosw65FfAHEAKED9Rw7s1hFjUBVg2bnEMYhbMbMStaFWWGJDFHnWxJRgHbqwvqBTqx3Et",
  "key28": "5cpB277r8ZXhLvRcespaAoRRwFmXQEW7NZnwoNT8HN8tVUX3qjGPGHnLpanbbFCJ7Lt37uRk6mJ2BgFhm2BJ4KXJ",
  "key29": "nAZHEq4sunSjgdu6guP7isUkxVNizJE2ferm5BNsj5iLZYJNdtCbRv8qSNqE911CbF9aB8fAe32q37qGpz5pPh6",
  "key30": "jQWxRqAby62pecgyfoJNRLvsVQtfchwRf8kFziBxz7UUgrRo1HQPBCn4CdStLTU7c8P4pEjGmzRf642iTgdG8yW",
  "key31": "ECdTdH6i2m5udoccdpWaTKEWZb9T2JQYh9oNvnss4aZQCFznSZReez8HmV1DcHEmZaistwwzpcDfv175Pagw6hp",
  "key32": "5AwN1DzYo79TzhrWnFYzqXFD8gjzqvjiFrMLBQdXAfWYnDa4gAu4aGLW3pmjwmBb2br4LnJUu1U9Dom7iaU562Xr",
  "key33": "5zeKf4mzZragBnBcj861UEVbG5EmuZrcfDCyZbemCfo2eca84WbdjekTVkWu22V3n9VgjxG9kRUbov7YgyZ56Ye2",
  "key34": "zSD1wQmp98HYCkgzFejy7Z6nGhf4QMPuRxUX4Lzapag8d5skA486Vu6FXEfzttcFZyXGSgiwUcKqC4zxEKeJmTK",
  "key35": "3yAJ7MkgLTr4njyV7ZSzXXznpAimnxZVbZxwvUAfTKEDdabdzeKLPmg6H8N8qAFKiCxdkwwgjBR8zo4CA8nU37W5",
  "key36": "ASKRM5bdaRFV2abYufuMBwXK9tEcywS22JG5ajg4XEYKx3NhvCFPxdqicCqdYZFa8TZBTTFDW9PTw2bY1rvR399",
  "key37": "56jawfEW5ZHMptu1HhY1HUo4q4as2F3Lonc65Za6yjfaJfHMYUC24TmDfiPD3jJQTxGanpYJL3aj8mgbZ86qY1YF"
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

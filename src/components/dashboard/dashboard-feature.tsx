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
    "5Uv1nDDaz9X24J5oPWybDxwPmK26wWWu3VVKWNUopzLJbYohSiWAKaxmLPDPmZzTQQ9bJt1e1LCk2fMU9ZLBBKEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34WwsoJxKzKAj7L2n7oMX1zHxy1gmqGD8TfVvQHoKrBEBag6MNNGJrWKJvK3CbJH3Bz16SrJcCFtHTgM9uYRqQLn",
  "key1": "24odguwf98XkqQJogC2FD7MxdBf94EhXqLYwxDPHY3mJGy58V1AJRAADiFurCXGi9qiMWyQQxNM5LLotgaCUPq2F",
  "key2": "3x5BJkVfbSDhXGvGUA52RDVq9VWFnniTMxf45zv3oeydJbnsJpvF9Kz3AQc77WKMtTdMYs1vUBcoRSzN6cVhc4Pq",
  "key3": "edE2YPy2sG98Bx9XKgQc361pA33AQym2vHfAPC8jnHc7SNAua8AbnMHosBWR9zKqirfBTkbqQimBGeZuav49adn",
  "key4": "2Rrh5PHRwpMSj1S7xT9VM4AGAdciFGJgXxCwfdu1A2bXh6f9jJArvXcXAjzeq82mrYgcHYPBS68qHAHhLdFvPRTw",
  "key5": "aZvgh9Lk1cwdvnxtuiBLCyUCxXtZmqVomZjDZAshxNiyYW91qiRJE79D1uhiR3sBjdrTHvLp2mXm2S5j5uSmvsr",
  "key6": "nc95fzjGWzACHjPLh3dnWLEHW6nmWUHNW1ZbX8iqrogwrJar2118eKNHnRLcs7RvY1EVbcU2rgpPHg2BkDJi4bm",
  "key7": "3pWSrXhN2iZDpgJAFeP6HkP74jDw2eZsaxoUK6D6vbMKGcgJgcrhfYhQnd3WPXm77joj8GcXf2qqfWeNa7DaS5jW",
  "key8": "4vS836vtcjGRVBpB3DjcHksXAmNTEZQ6SmN6mRWBzchJKYWiMLbSXXaXzf9ve2jvKBQKfQi3aTjRwoYZvTqgQg2k",
  "key9": "3H9f4ToPCVMqTsTeQ2NTs1QzNoG2VzxjrQNEPHCLG1bvPsqXiyPK27vsPbyfyoJSkqZLkpyPXC8LppGtvDfJmzVA",
  "key10": "2jxZLwPAoa9JboXgj61hcGJmeyTwHudVtVtKRhYu4o3HRMPwktef86TEuzY4abNf9F7Tv55VWSX1P4NRSWJhqNKn",
  "key11": "GR8pEgfeXxs8vv27nNqGSRkzvDGieWvmozrKuFSsN63RgKKRQTWpf1ghkKuxWmULLKKK9pK5tD5yfwi92F5LAvE",
  "key12": "pHozBMTadsqWm99DpkugaK7CgqHhuEGngZFHwaPHGM2QFUmoaF8miTDdYXSJM474J76JanpfLSxvX2yqgzVodK5",
  "key13": "EK7NmUt2WryhdtqGL3qsyrv4aLExT7cwMqewkgvfrcbsKX3M7qtBh46b7KL94Kd2teMR3HsSy9NhUsZEjQMYeAF",
  "key14": "4mrcfbAv6vTj5sDqygWJxGbcpBMotvHcBsQiaZHYWq6erJjwYARWAYerJcS1vEgWiFsFdVMfGmuYv2o14Mn9pKDV",
  "key15": "AuEYon31hEgcjDW23dJBvfnZT5QmA3X4DgzXh29PSG2iW3u6FZH5SQGSRrYGt5SpSDW5LJaW8EzLWbW9M4DDc3h",
  "key16": "4apGNAKdxV2aVzgwACKZTKchDoZq9y9qBGWBoz6cfiCsPTYpo6Tn1RWH9Kp7LsgEMm3TWN22GCT5rgfe1mFLoV2r",
  "key17": "Wu3BeMRHV7eghoKifzsY75kP6rpYTaL3yAHerWSvZQtKF7AXEdYiQB7rCkc6drWuWs1NNrQpqzMXMcNwPnWeXCn",
  "key18": "5jTuruU5StsufQBqxCwMp8fcFkEEqk1Mcvt53hT6VuaFMYiFcz5zsiUu6J8wz3v7C8ih6MvCNinDN4gZ2VwhzHfJ",
  "key19": "4erkLX4LQRuqdz7m5ajB2WHneLduCYVzQao8TBe8TawHA931QcpAQ1nDaBSaBJuP9BMFhNaJUUwmuMTYZQxnFor5",
  "key20": "354RzWXPurzo7hiuKXXDLiyp2x1fdc8JFYuMoZo8EBUQoxHDAk3n2RVvrx9JewvYhzG395s4eQVjQZFUd5evtErM",
  "key21": "3dTs7Pr5E7ct72GpcLtv5RiKBDjjJ27U3nBkdCpRzjhseDHPT1i9GY7FQSpkxgYRfhcDHeUt6Z3ntrgQ3MYnzwD9",
  "key22": "K1Mw3BJN6kzbZ4wnb3z4KgdHNnJfEk7AGH2vmYxPXBtkisr5S3Qz5ZMZzfEc2brHMmv31MQj6nzd7ee2ATLrm1b",
  "key23": "45GsBbsymxyYfCfYUgNZsrjwT4dUsGwR5U7fz61hm2G96z4aapk4JRKuXdDEzm7CkFw7TwRQNK1DfNQQ4GchJtJu",
  "key24": "4juzs5A8CPzj3LoRiNURXkTmahHndTFNKbw2kztzRYMo2DfPPHpoNJbx3S71dYaXGjrYCYvBrPPupGJKH8f3aPkm",
  "key25": "5NRwvwLWeaLctno2MwE1Y4n3YfaJ47Mds16cT8AxDhXaWsNtDMn9Fr49GLHzrPTTyHyDbX5HSUZTxmHEvssRpEyZ",
  "key26": "2PevABwX9XiFoRvuLYYKAjMHyk5qRnA3eRbsnf7h2zw4s6Gz5YisQrfbiseZfBDQTrWz7uQ9UT4Wc8aBGEbpq4G4",
  "key27": "mCfs5TPQAzbZ4qQbcbLKqa2kD6sTYJd4YW4iKSScyaTuNSRm3BEBnJEpCfG2r1mn7oJw2egTFo2DCWkdQsZNmSn",
  "key28": "3We8oJXC1mdyumG7E3M42WHv4UWxoXGAELvS1oX3KJhfC1B6r8y64cYckFoQWZfD1MZBzxPVFYp5Jc8eR2zgXGNh",
  "key29": "2W4uQXXsJ91HA1s2g8mTkkFCg8z39XQa9PZLNqRcru8vCWnkfQGKNi9CERoJ3skWCd9Cg3nWkGB7TuhYRisYDK8k",
  "key30": "Wxrwn6wd4quWgQP8idqctsXB3GbTXJkCqY6NrfJXZKc8TCHSvcmiCZhPSrE1oLkxggnKqkfTexGAVZ6qjxzzh5z",
  "key31": "3tTwr8KPvvAuSCK6KAgiZEUpjT1BEeHiYKa5kff4QubfvWVUJWRV1JwCdwJXS8rHCUzNmj7aXfknhjmt9u3PDxLg",
  "key32": "4JypJxYNL4wpumu2RQQabMXQ18KmT7geDLg3JtYyG3wwWvCBzVbjSjW7tqmjmrPet18v5KaCvt78SvmBhbzpRw27",
  "key33": "4kymkfRu8hdKk3tHB2uhKFNn34C38iqjhRe8fzTrwkhSmBo3rEpC962kZjwj3ZNhgubZg2nZjo5ZK31QhiUYK5TY",
  "key34": "2nxp48vGjjjnRMnakWqQtwcBQSSYmwrdBRMEFg6YWWoTyh1KRMsEekR2KWJvuHu7zBVJwdT72vEKLvMSiSsWF36W",
  "key35": "5cdgDKqLcb2PzsAT36xe3T9UvkQvftVpTydE6bnnKSqMBi1AmT3uWVP82MgXy23ZSQKdKSr3oEzQtpLgc56VaJSJ",
  "key36": "2nibEWwKNSXGGGeSZLovyPZrhA4kaEqvr1YdKVARVStjn4JCqnw3TE8HUWfVNkRQgw2hHtN7nNFStXwsQxXGCfw4",
  "key37": "3pVxNG93X1aBEoKLHrvtWPG4FQ9idohpgLrBciSFaMpkEDquusnyVQTBHr4VC9GEVEhWrPMRAYMb27XXhbSa9Rit",
  "key38": "2odpKfdNFRg5Td5G4F8yvkR6EAPjVexi1gHQWpa2WVBP4ZE4KkcirnmcKyjYD3BgLCsTS8iXygSCcHtFXriQcix1",
  "key39": "4vBc1ZGozrJWMDLyRa3uwRBniLeEVHyKHtdBvNZ9kc7scQB1TXWkKLMtYbhiGMCuSnGbqnhMFRN9uPdjG4JCmA4h",
  "key40": "48RFanMzu4Uub4cAoPSuKdQwAXs3AAtK3VAicJpn4Uy9RpVAAfjfaAMRtVccVsbejLfxDmP911SbhokEQ6Z6Kry1",
  "key41": "ojGQvCTAiemQfxzv95Ee8Pk5XQWvHzqyHKdybSnHhztSMMzrHBRsFYiLuc4To1po3KzBxkugTUpQM3KxeTfxays"
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

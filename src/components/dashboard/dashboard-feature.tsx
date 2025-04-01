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
    "L3b97YT3YpSYBH5Md1UskQNyUri9aj4D4JXvfMKt7YKZh9agwaSzZ2jQgo5VYXbrBXYzRihETsJ9kTvLxsGxLwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcaDANidxVaxwPbrav2VsAC8m3wv1scb3LZoW7HRBBryJcpwLBzWr74dPxKVL3GKrk7DqgJ5CpJ7uM1ZE71SBhH",
  "key1": "28BeMcoTbFAhgxp4jsS3oJrnit9Zqj4NR8YCGgQksupdE7XmNGsm4SSj8SGgxFYiBEqyBuC8pjVsrhqV6jCg2F4R",
  "key2": "3jYDrBp3hGBP2nP6AC3E7VoBb49fqLMP1qjJ6dDarmhxcbAjmDajDhsU29hAmRYUi35ecYtu3gC6wHaEX5u5Zhnj",
  "key3": "38PJ8PfyS1snWMUxqeTMN2B12YxdJiRaqNWJPZchf7WLSKmQbvxjLVz5Jeu12k9YBQGWpVn9fuoCxtHuUxbT36NF",
  "key4": "27bB1Q3mLYdQRtWDW2KcaBwae3MnWSSCVzyrZ1MGodeWNNtahhfAxoZ6DiC2tSZYK8qadL5rygfWsHfLyANx3Qbr",
  "key5": "3oUNiyoaD6kwhTyEhe2MosjAiZ6qqaP9FHZruUt4C2EgsJhYihvvc9ZYyyPasYqcs41uTTwnqPcbz6wPkKHR5vTX",
  "key6": "3JXMiTTV66Npoa7BtNCXF8soYimPwFpJBvCNzS5ysTEbe3nAePsqXJihDZbMoAt1V6uKb5oH5y86itoDGG9DfXBs",
  "key7": "38z7GqzeJZDEb4UA7rJhfNYKV7k4t4WxrqAyFFmNJYJUCmrzeLTgknFAe9EpvbVTuXuuq1XNQTn9mku7qyauhs25",
  "key8": "2wPoQKd82ATqpp7hQDUE5kpzvNfk7M8vQ8ytCSG2b2t8chmt6sRfPMhWrueNb7msz7wmjbjewxicKJVPggVhSSxc",
  "key9": "4gJkJ6HBwrwsP4PEZhRLTU7Lm2KgCBYuF4GknibTAuaiBCpysBLPgdkmt2yvB5RmgGTyta4jfzfXKYWfLTKghkxM",
  "key10": "4CW4UNVCdoPf4JjoLKy9HefPeBQmKFCDSNmVcwd2fxFZKKZ4cAEvZ6h4LVihxk3RUsZhLZZ52E8JZSYS9PKb6E4L",
  "key11": "3YGdw2B3Qx3ro4sfPzYLpyTmdr8SkWce2z6VVgHAWFTeH6W1GNKXGPQ7yWW5a4qPp6FX6ijpyY9aktLdTFZmU662",
  "key12": "SG3VjVRNa1wA1UcR8mDFGpctSK78W5Hqs7iTCZyhyryLy5WngmhorexvdQR8UcEein1PeorgFcXFm2Wz53anM3X",
  "key13": "88wTkrPKCiEzoQ6xieWuoSr4dPnxdGCxKUBhCvmLbXEhMZdzKwJQfrr9qF2fwhRybs1XJk3R7Sva2zwAdSZNiWv",
  "key14": "4tmDcqbHFKrwVY4QckeT8zMAuTtDh9YzqAGReHpDCqMvUpEZwv25BXk2rYxeoHneWg2TBcNvBYHYnjofENWyeyRr",
  "key15": "4cDAcvcHPo2sDjmCjYvXDJM4hrFg9YMLadhF6MHeNSoyQxYVZ8racWC6vy1WmXkkmP4kbcLpP7vzH58paQ4gWqXB",
  "key16": "4hiPnGxNGywaKg3RMJ5713g11zxTYZ5qZ7xFTVPZqoZ8g7g2oQ48eRWfnEoZQHLLWJT1U2qHJjW7iB13JNa2MkjF",
  "key17": "5iC3qxn6K53WF7KGXKzsTzLkUR4GcxcXqUvZ22kC44suPh9YfEmpdthtJBRWpx4eX9srhXfyCALc5J8URHhr5sEv",
  "key18": "3dSz7tKPosMAkpP8dnLcSUEUmyLLDLWKrJuo8k91WKLhA9jEDoftrnTihggypaMVejhMLjSB2xaDsHKHwtKwskvw",
  "key19": "5bEgJeB7XjbtDaqzovw5RtchGEu5St87H37VsWQNoS6Txm1KsVjerb6k3TvK9SndMhH7QLeSvidANwgEH6xU9Ftx",
  "key20": "5RFwxcSdcJoWSHuekmmSjRgFxUb1kS1THJSgtQfHFDZ1PTfk7myxH8VhgW8fsNs2MGXtiYxYjJXyBVWgdT9q7mia",
  "key21": "3vitCDeMVjBFdGovUiSd4j8wyNf1ySuK8K8of5hU2TBdNaZcTkpN7913D8AoUHF4qVU5sZhNVzDTYBySgU7FJbz9",
  "key22": "3G6GPFxcNDHwMfFVnbEdnkwn34eHbfyjHnfTsHfLoTRTEPiCcQeBcBWgQzhYKCXXUvwsQPApuw1GVVYYmv1gNmsq",
  "key23": "262My9w8oM3dHPm2Ms4XErymYhZZAAQ7JssKR7yX23Jwspw8WMYobVS9c5DoK9C2267s5MB38VxvqHbZA785qr4w",
  "key24": "3UDE9Yhu3m5F6XPwKqSf1Q674PgDnY8d2Tt2ntqG2B1Q26kkokEkgHrM39TdLe4KMMZofqpXtCR3FuaHQPfSHCaa",
  "key25": "26UBqiN3r9FSHEAUyZnPKSbHE16iG9dznPRu1LbpgKHpFXJE9Z8LU2c39C4wSe8dDzD7hUKJYd8Kbwx5ALS4Vr5n",
  "key26": "5C6eoHh3othudNQZasN4aNN4gsG1U5xwNJ6sDveYPD5eYYv6VrVfteDZryugVwQbBUmiv7zwRpyaXhn9ojBgFuBe",
  "key27": "24JPuqimSHvuFjuNxLXEkW3xG8J72iFvEQPQooRiLWDFH6YkqpeneqCcyVpATKhJu2MXoAThBxvimYpxSQXSUPja",
  "key28": "2gGKq77nTZwgBe4f2TaSqN7rc1PNE99VN5HTjH5TwxZ76rrkvSHyFVehcuFVs7LjRj3jsDi4QSkqfLcQyuryNN5r",
  "key29": "3nzfJHSHL4WBUUhuPj8MqJt2UduCTdMrCR4qKzL4a6ySntEG33idZZEG5AnKrJ8jZJ6RR5ZYgPXqQxP2QUTUzZT9",
  "key30": "22cLnEjotqDR8WVoX3Tc7VxBUvroYgq5kmbf2aU9rt4j6kkFVvuNYSpFYTWVJc1xdfhSAgwA2c2ae1hfit3WT9LZ",
  "key31": "5haD2GQ76r7rHaWbaSQ8BoUpiysNP2cUy4iXJicEu7rJSku5xj3hnfHACK2mnNhBTJ59S7g1oPLaMo5iAMLTAXzV",
  "key32": "5YJYAh1468Es7FxULQtohPHqAQaHxqenQhn1u2xm5UJj4iqAe5tepDDD3rQ8psLsZc5eYVTSyJSs1k8NsRoG5wmm",
  "key33": "PMqZ7rz8y9hLeSJgtKSpkBgqQJJc9Sbb1NL263dV7q7koeDpCvX46peuBett2rEh5mSL4jce7L4vPncVeTcKGxw",
  "key34": "5aBgVdE2w5u7wM8i4uZXPDu9KRGMvrEZ3XtV3p7VHaxDjUbjaZquvfNb7mJzdkGKs8BqLa72B6m2RJssarNhvcPv",
  "key35": "4v99mrmKAdMvUd2Y6QKAXQEJyXD3kTZHTFMkrnHXfEvWjwG8P6nZxJQtYvjVjX2fHkgpyvJdzZiDzynhzbuzgAf7",
  "key36": "bscSuLiZPHbUSPLYhprDg8hgjx7X2XEydRJ9Mghh4znGprFHVHkm94SPLa1eiZya6RAEtw8tZNAT3MFroey5ZFb",
  "key37": "3QpZNdQGcLL5bHWznEWMGKimf89VzPrKvpGE8ncLvqGZj3Gq2hZTHFqWQdnBWPLbTxiPnkTPRP4HX3wSsTKaoRmo",
  "key38": "2F1L1N7T9UYtiY46oJuQp2s8vJVWG5eeduNncXT3XTpHTXsfphYGyxqrW3hVufsioTXKBeBVQsGGa55tCm2RXSnv",
  "key39": "5WMU7nQMxcKQAKQve7EsDSLUsqmPe7JvJLTSm7ZkKQSskzakdgBM3SF8fRo5PPWV2jDZu7ENgxXvqmhZcQX9Bfbv",
  "key40": "5VJNFisActzVESrZGdXbngRKFCVsyY2t9rNzvpZWTHrjNJ1cvCvcuhPNaxj8qXLrfv5diQUEJYQ9frAG1Suh1h2D",
  "key41": "4mAtKe2NGPeGiBxKi8rJTP26bEUtqsXGjHeva1LYGm1weEb9r2N9cm8C195UQetanHEaWieKvWJrpgVVjkzAcqsa",
  "key42": "cobMQSkMCZ8aUw5NTQRpzatecdvreVe1UqfFTKSiWQiZBYUZ1j5xbhmDDarVu6jpztpvwpB4zCYXz69oJ9WjgHv"
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

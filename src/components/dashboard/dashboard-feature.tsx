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
    "BxBbaf2wWVbBcCrhRKdCEfVaooba7cDNwf7Aj1WR1cenKWCJKu3GhUnjRo1UrsHQ9fKZg2mxjyqGrhf6yda5bRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fkjjeqpAaRpchbQocCXJdjivJiseHyz4LGPphKAXpH2ncQbsiCBcihceGgKkjrJn7yX6in9yFHUPHFq4RFzuZpb",
  "key1": "4TevrHbQUFffxaaUYgWEuRhoGiy3obgvb6ka8sxoskDDyPYAcqC9SmsxZJGxGFo7ZAFqEuJKu6ZYUjFqfCusLk9Y",
  "key2": "5NRrwURaDVYd58jHfB8yKEefsnCg1wbzFb1QvSLT4hCw4iXWChqCBvc6vcEbKcKsr3k5gNVZqBcptx82mkKqLmtN",
  "key3": "2H47PvnyNK9zd7cDt2KnT3QxVZdKctgPkRTfgQTE6Mgfy6Ps8VAvnizE1hXrQKASP1pJ3mtoQhPjSsJ8Zk7FgEdn",
  "key4": "5QdV2mXcuDpYjra3biHkSKbajHcENHNePGK7KTvuf8YLF9LTdtGML1UDpQjQz7otWaj4Vf7MgTHQ3VVyLE9f4Kdg",
  "key5": "5wmD57BZbtH3TaFZMPYHS3YfYoAjjRfJ1rKK3j56KxoMorTLptdeEjJFFhHJvA9zAQ3z9BQKtMzkXFzQdSDGFb59",
  "key6": "5prvvTyBe4fU97D8PYXkHMwxYxJnv9LdjU1XYMnbHM1o65bNC4AqyfbRb7hf4cR7GswGktdqNTh2hW5uTesiCyZ9",
  "key7": "3rkpLc3mfjcbgxJsxuTBZLov7Nrj9JY6FzsEAzCncJHjJZRxqchjcQMdSvdta5H4gNPvhEqoyWWoUgcbii4JiKja",
  "key8": "5YzztLXFdzWKw7s6ZCr9crKEKDPadp4H6UE33ZeLnXZ9n6BBtMWpT2VJpXmuqSkfE45wgJrHmRdHn44CPHLuS1ah",
  "key9": "3JQuNB1iVJLH7QqswkKA2QiK8X22X9DBkYpfkdwAe8B5NipewuLZhiAgGHK96nhT2aQVxpzR8mNSH2obHnSyP9uX",
  "key10": "5KXKtrchaZQJFJxtTPowBisNCkyFUQjfQ6pvCwPZZnKQfzj36NG4q2Mgue1LrmxdxJkGcbs7CScWxkUbDJCANE8L",
  "key11": "324eBgWThV3FhV6nAhp2KzZNvRVo8AzfWf6ycFArkj9Xq4yTLJwg2hXRzRpfqtZ1oSQTeZh3qrFbWFpfmtEgAhFt",
  "key12": "Deo1DX7Yf11qpeP4qJv47QEems7Ghmr29cRYmYTUNxWujizBVttpyfMLC2FmG1U84bemNJL7pTde25vRtnaXxyj",
  "key13": "4qfhrSxMtkuZhu9mRuNkBz2DaCXThWf7NcV8JEcfRkoCA3WpL44214wEEX4HX7sQdkV9ByHYx2WGRePTDwTWuDhB",
  "key14": "2Wy1QQQUhyy64DwsKHPjMPZHGHwWgJTmMG6bLZPft6RcbVQAif6QcrHRcghQErW5pB7fyHtw52PNrnUirCJLVXCb",
  "key15": "4qrDvpJYiAPz4AmcratEDAFkYTimHwjGNtgQnU4GYYTNmyimqeDLcdU6kr31LSLEyGddYTTYwxC8sY95GUZBFej5",
  "key16": "5MYJtNk15eELUFJGCeb5iE49nrRGUpm3YvsZD8hH41FbDoDA3Fn5rhyirMNw33oAPUwQH749S5V9bxby5QbJdpZ",
  "key17": "66yUSF33Vo6Ge9c1CZTqKDsbccYgcA1g1DkJDbtvKsyeKvkjtXB2zNPueEZu6A9EFQSnDMJ7g3t5qLZX6bHLkKBu",
  "key18": "3kfHwFABQrY8NMdHA6PA3oGdD8uFZpDgjxLeVdSshzRmpoAgnuKJU1jitoobUosEXTmZyHmqjq7eEtmTViMEZDK4",
  "key19": "2eEbFLVNhPGZEckmYtBQtqNqF6X1awMHG3TsYs8p2iAvLTKMSsWbZK7pF1A2QMEnwbL6BjbsY5TBpmPumzH7Wa9",
  "key20": "38dqAn9BpWAhhvd7oLKpF3VbFoDcTUkX77bSYQwQyUr28ZrYRUKfBYhtaGG7Wj92baewtk5zpE9X1nTUMrsBSPse",
  "key21": "5bgdKuZ5fX2n3Yhei8zaek7Ud6UGZhnVrb3DMNaGCgJSjqCvxdrbcmHbJKmY953bQh287bUJ6eEBp33AeVWG31YS",
  "key22": "J4yToE7iaBqfjR9ydRWDUkQtZZEhzS4oQToSGcsjvPqa4feVYkPizFZ8uX61EkoMniGFicNhY2NRYjXMUHDN24r",
  "key23": "65ZajiSEY3ACNcKofcchyNRRPpCFCw4J4XhCeRPqbJMSF6dGbArMqxaZq5Q3Rwg6EyYffTAZWRrd37bYcQcT94mH",
  "key24": "5BjxzfRe4jGJCPjsrUvD5sax92dAGW4Po8g7yapq66BvgMbs2eQSfcCHYq9VEnkvwh76C9A4Cmf7fDr2zs1etJRK",
  "key25": "4uuTK4FYPKKyvk22BSNnZTsJLb7rTgs76UiKLisqBXR3rR8NqFCwJ3AEmqLDx99JZS1CAuEkhDdbzNphhQMDbwPL",
  "key26": "67HjXNjUpY8uuwoN7M4LCseBH88zesrkSix8tuciBffYgJCMVKsvjZicQDE1tpdzxv3uVTCChf6BpgSup5RZQR9R",
  "key27": "4gWkM2bxXDuYLMMPR1LjmLL8ZiecbuzC7XjeXEMg7UrdcemzsHBLq1MCzvGxki9wgEqv9CBXw1oZp5wYUvQA5wcm",
  "key28": "5ZBS9obgF8EctEmXz1dX5m6kKRjZbpDBdGFEPEnQRKUKGgry8xNmWDVHbo6ZK8ihYxWGAEbHAH4Ph4D3N1rCsELf",
  "key29": "39aAyYH475A2vhAQYLDsmLWZo7dmspYCn8r9AAxTK87kNPFo92PghzZVinVJ7RpEj5Ri46txfQrdKLZ7dKHhhdJb",
  "key30": "2sDm1Wpx2StRqgd956GFK4q8VheDTrjCe1FjmbumYEY6VPn96j4bfirYu2nnApDMFYZn82WrpV2QGUTpzq1qpXBu",
  "key31": "4PQpdFeR6KPQxgcQQsdPB34zwuJTukymDppeeWur9D4FjVGR7obF7iamE8oU524VxcY6ASoaKncvMHmTvotHxjUL",
  "key32": "2X9CGEY1aiSvRKHgEhNsZoo4KGyukJZaKFyTnypuWQVr1St3wwTbUgBVAziRgNMwJg4zU7Jb8jUQBcjsxqbfppN4",
  "key33": "BdnK7G9WRorAeDsN6bWLAqoZJyK2M5TYmwD25DsqP836JN2n6Ekggn6DT6jm1jDeiu4YLubpZymdehKJN8E3bhF",
  "key34": "3KEzuorxxXnwVGNxrvULAQCtHh6LMbrS32e2yX2Ny3Uef1ZiWKq84hghQZGURQ3Czba7GtKoXEY1P1xD1WBSq897",
  "key35": "2JaCzFBWWSAUtaeGoYxayjskApzECEryoQrDC5wEPU1iPvup1A3ZNc9FV6phcjgTLAmU43UnYpHHExdao5oRuBdT",
  "key36": "5AQtEJdBioMVUUoK3FkQ3Mp8z4vwrPNxhc8p4wYEkxj8t8GYbJyo2fSHWiPEtPkEMQrHYCnm84wuPrbq8wyoGGm5",
  "key37": "4wZJgHrdHvVWhBbsiWgufCDgKa2Eey8QrwCSdt9xdHSMZWb6tYahdzFAPLTtCJpfeGqZQPgQfoNJDdiJQhWEgH27",
  "key38": "2nLbxrnK61zACRhAJxsxdNiXCjUrSzBu5FyFZnwsgE1LBLzVL11UZnxKtr86DLvzoEYpUqBer3PHuAovZBr89co2"
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

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
    "3Thw21A9eB8nfJKrVq6CM3cezaoEjMbE7SwJmGyn2MC7KMPgVmU5LuXLReB32Q9QrFqNtBnLGz1SnzYyjGoKrEBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDVPBnqN8A2ZQvf3DBGZcC8QumCWXZBYmL5AzwFGYRz2Md3PYqhbPBpqamxZjHoQdFN2epTVxQK1qzdJPhyevoL",
  "key1": "41xFuvDrEUEiAWJfwCrQnGexBBkSVQdoGTEr2XYdPpYHzGcy783Gg3evohqns4pBhrmCpoUeNsHkttwDSSvV9NdY",
  "key2": "3ePkiovg11E8tKiqLJxxhYpqquDmGwWzLaSpLMdyifZDGK7zHpb1rswee1f5eHx7TcBogK1c7BsfVrv9GGzRQUZq",
  "key3": "2AwoPVnFhZ2w32duU97J6BDhCggCLXeJxSGofGqn32chfuQ2vHZuUJ1jzzwL7BaRywaSQ1GmD2p9iqfi6fu5StZw",
  "key4": "4PJgduTNMTcSnx9ZbhW61q3iQuXrnArMDBbYm184qgzFggJmdVe3AH3VSDoDMkZwLdUzBBuK8c3GMdqfJMoNViG",
  "key5": "3k222oLnML3AobUyEskrMRzHUeFeXrdfF1jpKDKofPcqJuPJh4GVD4zG2qsRPBVNfpKGi9BUfFBw46SYeA7wiWT8",
  "key6": "63brW9CSEZ38qXkJtiKeF4mKmYv3EhKKPHskfB7URxPqHuj1wC1vP2ZcgNjvMzAJXtNktun4AcEQ6NZ6fQsKP8oi",
  "key7": "B552zv3V5aS1ntKACDgZeMKLyX56fsETZHuahEDyK6yopefcsJLGtvzo11jcMV9GY4d4cpqKKisuGKyUAs7jPcB",
  "key8": "5gzCPgoxztoHSH8o7ZAyhahLoW9BQ1hCyXjoja7YKzJU27ixpwaL5tamRyEigAT8njYsMNw1xuYg3CTfbDNbRuF7",
  "key9": "4yJjGYcow9oHpXgtKT2YrkfZS41BVBXV97uHkEhHWxvrKYj7vmV9pgyvhXKNLurxxeKjBu511ce9FDsWy4otVcvS",
  "key10": "44sgXyuvG21ffWM3NKtR8NVDK8RTNhzBJTM6guv4kqTZPxCc9wwWG3FnhDH1u6JsNjhRfMzJH3He1cToMb27cp5S",
  "key11": "62YVQrWjvc6GXkAeS2pmRT2Sqm3DWLoCNL9MVDwg1tVK7KyPwyYGaAsHM9TJS1GDo7PtkqchU9fCMQpQqG3DH9uz",
  "key12": "3LqSWS59q7LoExiHxntLHLoh2mJh8iXMcZXfjSfQPpusDb6SsegrukfViMoARQeMwrGzhk2QjUvznQGqcyMbXdRh",
  "key13": "5aJy3KEve6G1veUbpDXrZ2CQFKNi3Yjb4wKfteHPKCpb5Cik5EGD7dLn55RePfW9moEP2hipts69yhqybx5U9wh8",
  "key14": "bBNbre2eMBsdn9Z8G9duewszkX4BMyLAjsyB3ecXRWoVWqkf4iiGNBAYk7e2VWBE1hJvSbmS7NdAmM9vuVs6u1j",
  "key15": "54WyYmDNmoaC1dcCK8b3V9Y68vf96A61FEnBMG3FHEtLoVpECAFvgxJnrCHACsTRnwMmAaEVfNU9fJvxsHXudDKk",
  "key16": "4kMiqLzJCu8UvW1LH3U5uLdemPQuXTkgFQeb3cwnw8MXR3QTzMpcYwDJdh62MQr1zsafA64aWuMEhMXJeGoBEDxQ",
  "key17": "28inVxALG6DJwVQmMzrZGan9jYV9uUmiybTHMzbsfJc32ryMnYJvL3WnfBycXNF7KC5TZQhWr8JhoxxB5tVYuXw6",
  "key18": "ndaDS1QQHdMFn5L9vsfSNQYoZCbg6zMS9KPW8S5ds5cS9ff7dNQTytjwZxrohkRM7xRSBSHFboPv6n2xEGSZwmo",
  "key19": "khYQtRV9n9paPVyz1C7VjwiDi77FhNX96vTTjWkzBGiuUQRCByyFG3TmFV1PScwetB1r4Bb7oNY5kjGXL1nGfLr",
  "key20": "4qTUCs75SWb7G4rDbWwtoUF6xeEyNeZWxkvY1DxMNfWZn8Zpc4jQ6QiFLdPZzFAgcCkEnzNWFVgsWEP5cKJgg4FX",
  "key21": "396fUESVQNrRjAr6A22qXBV22S5PqnfujhNnhwdbrgipUhAhmgomxn3btBLNthWK7qzFgyB7SWj9EwzVgZUp5pG7",
  "key22": "5kvfyzXrbibvW5Ra6DRhoCTtrzG6yNxGc9ivoMAEuV3SEB9fadSHmgE8EkhpnJVTjhafj6dmUo8LkBv1xnxxXvkJ",
  "key23": "5uPEocSMd3n8sLy4Vaf2a6TQTA2s1ZF1gR94oLYdMp6f3JZh6UmYyHsgn7Q51i6tSpQXGzx75EvaxjdpwAt7MTig",
  "key24": "2LH5xZQfPxfGyafuLXReg7pasmfefq6Ya55pZw5atzF1YX9fnXeGKTaZPnrjqEWWzTDp4QcFZZYNjthW56GPDt5",
  "key25": "5w7DFL323kFpEZ9Fq5DNntrvtRB59uJrTyV7AgNKD7iQacixy6PBRmR1sXvSUuQYdHF5NrAbwP56Un1XFfHXnj7F",
  "key26": "AbiGWuKcwkXAd9sm3FKrWyW9BmiQFH2eC3BsGsVhfajqWJW1DRHYFJSyDVrN1cHsSwz9TooQWGomKZrRfKRKB9H",
  "key27": "5uPiss6gLGm5vwCfL5QTFqx1gWxU4n5q4pdF8G98AFZ8sgKpEw8UxDX2b3Gj2VyMZDxNhKeMHwAbuahqHYxD3jjf",
  "key28": "oWdr7aoAasMGjt51fqZ7MrhFbXe5iZJed6mmHpq5scpmyQRKD6iXUa7c83HkbAW1VLfDzWjjxH3h8kQg53sqtS9",
  "key29": "XcfWtYXP1YB2fUjYuS7g3G7WyUGemRQ9TjBK6mwArD81UjqupFWYzMN6UXvJEnhP2ioiV7nbYSojBEQvSTojn9R",
  "key30": "4K5AWgrX542F2bacTwfpSajmPLrTnk4fg6rJyW7U9nrDdW5iBTSshaFCfD6bdyDr2gvR54S6Fy6M5WvDQgYePdhg",
  "key31": "ZYn3yY3eQUeu6czmSXWEH48Bv5mZ8Crik4KQRjmT1qPMgz4VG1jxnFHXtgAxZSkcZmzYZFyLWgzt3U5xPz7Bq46",
  "key32": "fJwDFnbP3uD8MC4PDg3GdXQMB6yEXHWYDXA4J83K1TcPKu8dEYQXXadQrGPTghbjCnSBZqebZDDjADDkUsDe6Fi",
  "key33": "45xc4DKmuVVY9AV4pJwmMcvkqsbQsuPYN3b3dXjMPvwwnJ3QJnwUtHRXJvxAJtUz2QUyku8BmQER4Bt6io7UiVZw"
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

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
    "qcUfLfUgZQ9dWojnqvTFFzsHmG7JEMLRV5mJXEJptj1zX5JXbhfABXJzpGTvY1WdTqkz3Z2gnkuvAP8MSHVougQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvkLjnabhyJ8htH6Gyk91jVwigz8s7H6s6nZLmr5ao1YLr3fCj3dGwb9Ji6nwdNJK1DMHWEiomKiNJVQJDncdt4",
  "key1": "2CLpk9Gww7XweydnrEGHe8vwRpkpH6PMBPjPPFAbTZ8wUfMBsV6jxHvk9UD4sd58TbbDMRyhrEYPTEwd1gvDPdJ4",
  "key2": "3SscXi4ZH1YkJqv4kQVB49pgGzqzi6oUPCd7H4x7jXTTrmCF554j6UYDRhFzGxmDnGgcSXHcmB73zRxr4aTVGzDX",
  "key3": "4St941MVTvZrCw78NbBLrmyuVhgYMUbLJoXsTz2ZrmBkUC1XmTxMXG8t7Znm3ZcfZwvnrVvkTsYLtFStzcT7nJK8",
  "key4": "3jiobbhhWBoUTznzaDh4tz1AEmsSKYJQQphCWvmuksJCfaQhCKvTREdYtvSBn5GQQMxoTBYFA1phsdw5FDqRmCru",
  "key5": "5P7JRz7Dgp2pSVkPaBJAJGchkrChskdj1P5kEiLkN5L2fqyKMxNb5ZVgUU8QX3JV6kcWzd3Y2k8vxFJvP6rbq31C",
  "key6": "GwzpDRHACJbK5N47cK3guqhaV8FZA4cict693QKLNdJMAgQmGNZ699dETevHBaambcQdeQTFQyjuC6eHpDk35f3",
  "key7": "2rRfnJeY9mCyjrnsH5x8crfstkTJneZGh4bXSkXnQGu2dFK4zqFF8VNQt7KY9pvq2gUkVfMNeKt7Hu7HpGbmmjT9",
  "key8": "4FLWg9SJ6MxC7FduVUKGdppDnfdRJchXqv4QUzsM4SBoE31ebqsPGaRPRvspEmoGiBMuyBtKQRBUEZHMWeBbvVbw",
  "key9": "4qS1tN1dwrGZoF5hwg15atedpnm4Kb9ND2gxiT4N8wtHBPCq128uf9jvDzX5D5LNsXmnm7FQBdFYi1qVAoJ5ZpQf",
  "key10": "2bRPci5NryixsnjU7c4Sg6SQM3MB8N8VfnMg37rNATVcrwwWTK4DazdzYViUpF554M6K5WGb45PDQQjPuRJRdt9H",
  "key11": "ENrrw3Shex6WSwswL4qXDcxj7AVV66HTTojYf1kkTPPNMDdQxx3YJsyTs4EZ86zmP6FY7RBMEc7fwZ4YPre2bFt",
  "key12": "4cEnpECjvYdoU3yAg7KNiTWb8EH7qbTacGdiTpeMU9UykTKTXE8sVFuvMYJo5zdWjU7WAbzxtFqLJ4t9NXAhSCrE",
  "key13": "57r5gGrdkSpdFLGggKScXfoaXxpjAyzeE3XQbXsFFJ9VatFuwCCCCvCpKfKRb42PYY5Rb7Xjz8VWTLWHMf3sPhfX",
  "key14": "yECi6QqXnkTFpA8iYMmXSDguBBaga1kEdSVQa5ynwZzpyc217wsHnD8HujrXfz4SuQXMKuZLqxkKg7xF1gVsAT6",
  "key15": "3YpoTCS4cw7hH3LaH7waBpbQE5o3ojkS1njEeE1UfHpyBQ4ChVzkQLVNLhBZeKoAQZSCRzVGZ3u9p9MJNRqz2jBw",
  "key16": "rWZHtYVVaBq7BYsJMAf7aLNRpHRwx3xhdVsnzuNmwLJ1TZtWsHibRYmXm75vJX7wLXG3BeyeeTFQh8D7uVyyXBm",
  "key17": "5YpUVudHR4SrkYAMyqef9jFsAVdXSjuSV2oo1ugmHDXPsrZeDoGmSYo4u77Zpk449zqbJ498q5bP8cYATg7k5fQ3",
  "key18": "XwrGHSxnE8uodUzpy57YTFEntVCbYjmTpn2bbnrap7pg1oiCGeZt5DsXbXdXm2DsJieRdHH33C7fMqD9ttJiW96",
  "key19": "4zHyz4nyS5vsRPzeiSqB1a7KZbrQem9fZoRXYjYsyBJ9jWknmWVrUffhw7upNwByqYK8TKSfK5QkNA6JWD7DV3Hx",
  "key20": "2VuNfwCswgwppwHU56UWhGWg4yVTNfE8e815rSd7Dmy4qyEH9GaHojfnFqZ9MBHSKKHgUcP6Cac1hpW2oTNNjXNx",
  "key21": "MaJtNDHUHVUFAQ9TFno4nLWANRjJkG2YsVDAmTVnMXXZrEXQjC8DsgS5p9UTp5ymSsixCe7E989rnSEKVfRL9Aa",
  "key22": "XA9wsQUvPHXZEbdReu8nRNs2URkBdXzsXnYBJjodvmKnQ2YNBWcsYLEgnkwTePKMd79xrEgy9mJ5Ci5Re21w8p7",
  "key23": "4YwbpnxbeN5XsPWtRSPYcwEAxSnxxCAS3BbxT2fnxrmHi152XdcrA3KTR8wJUCzu8Q4C2ak4vdJWP3jZJtjUd9uR",
  "key24": "5JQMi22w2NmRRVquZZFg9RMZ4MNjjD5QFWyoZ6gRWRBtGNHdcjzhQXxhgiyRJY2pZoaz2B3Rd8TwxpbX7aQ4UHnA",
  "key25": "5nPWUh3wsT9jnXsCDymygNXyDX7QcJbKjwpMDbeLpQU2sQNRU5tYBdFp9hVBmEa94honLFMbiYEp4bo3EUJ1dXyi",
  "key26": "2GfVnzXB5XB9cBKDWTYUKzkwdZjkpRkMmBWsK24fFd47QnVa3NAK4oJk8paUWeywAzmw1rpzXH9qpzzyYJhahYsV",
  "key27": "BLWDQGCbCPYWHC2DUtc1AT8SkSmiZDBPbLD9XnZTudbVroyRJTrEBt5mjmbZQDKSRZ32qsaBUQiB2XMST2zUS43",
  "key28": "qtdr9PFRrDjvxkCJiQRcMbtnrcgybG2HkpfZMHrSx47xiAvJU3ejDh4hSxyH43BENFpXv92CEqBeARGEcQcWyaB",
  "key29": "522iyTepYC76oFnTYgeSVjqee6tWmRb2BAkfNZeTojAzwvC2EgjAQLB5Qdqc1fzFYEAzvsy6K8ngMZfU8bYMPSix",
  "key30": "HpsbA3snKodC2qDow9udLL2UyWeVpvAARWCXe6AwwzbjcNx7PjSH9YgPbtQhUdHPGLozq4AcDu1Kk9PHTuFCVG4",
  "key31": "uMS3wqXopojVKYmfuvomuz3kL9G5Y6h5ctanMVuU3zvcAd6d5H9PFduSEEpmsFMK5RAxrj7BpGaTkLyYQyFAoRU",
  "key32": "5A31MpLf5pqsdi9bNMAEiqRTvN8RNZFHKAr1Fw5tZJyh5D8jj2wUFuUt9b8qdQVoVMwNbxrwv9UR3cGUV9DoDn2R",
  "key33": "5neLcK6n3nBxHJ1rD7ugrqUMfoNTgG9psMkmekuwfyqDihUTeVyJXsoSKC1mV5BsGmdTJnC7AV9KMSdiyfvfCZTi",
  "key34": "2jbeN1MF3Eyc3bCBWtoajum3kBiZChH77NksnZQUdEawGDH35MQi9HZTSc5L5UwMTwKVF3BMQ93e33g8aQ8kXUrZ",
  "key35": "3CGyeb9uvRENWxfQFZVhnkvdopJGaJjwVp7FSDwKXV91fw8vEpGB1Y5sD8gXyGZtMrYhNUktr4TzCcyNBFYp6T9L",
  "key36": "a8sR7TFxNpoNroWwHC7owt7kAnFaD3SbREDCDXCCMeGWHmpG6zgbLLRKDuBrPxX5jP5wE1KMctGWfDGfaUryrBL",
  "key37": "5ZQVg6MapUpxJLp69SdfQBpcFb5k73F4E33WZw433ifbes7BBHkdYdvCST6KZMP7fcK6z5QT9w1KnU9B1iG8WoqR",
  "key38": "UYUgQFTXaD63s4aHhDj2yEUw4XVsDn9ufHjkAoH4Qi78a9koWvN9W5NTtksh5vwKUfCraxPaf9tmXmnpLuMR8jR",
  "key39": "o6B2Xi1EDpV63u3eqo3weVBaGPp38gHdeWKGFgANkSyThuD2dJ8PFXELwxeBqtWhrZLLs7sWS7ZtqwFRDjpZ1AL",
  "key40": "4uQBVjoQ24C4kar5jG6erfVy38zU8cRzB9E8ebdnBZEfmTNXc8K8L3RHsnjiCk7MyJnsPtu3uNg8qWHMVKU9ZANz",
  "key41": "2DLNHpp4cZccQ27GfcSSnYKTMpsWKqjVv9s28JYXGcQpYq5q5nDTcwVzQidApJykwrN2mGto4ZiussqJDKsXyFFT",
  "key42": "5ubm96cML35Qr9bCuv4fMbLWS1Xf5vqTR3czVYeNkhbJqU3d8896uUGieYpQEYGfpyTsPTgzSYeJT5yS6XG3LLiG"
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

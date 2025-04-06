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
    "5ckn8CJ2bRegH5kF4YWSrwYkvJGGzmuxtz6eEKgevmv2UScE8Krs7H5rBjbdXzXMuXZJBNXrLqxWe7YMdgZRSmUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7t2vP2DaXqbTrTZiWaP5qhmrarp5Rhg2pjJuXBGzhJBCeZ6UYbZXuWg8K127qHUs4k3uLzFrVtzvUxJAGtaZf2",
  "key1": "5WWAD8seX2LMrmBEvadqBdCFxg6MqH2JDzVaLo7p1EcNCwu6G5cU1tiS5eoKY52Xf4bmcfRhyHgVHkhCq5LAhdzF",
  "key2": "3oYkngShYT5jw9ZNCeQYZE9cBAprokkF8cVjEi1rEPuwsDt6c3dSJf7C5SipezC2XH2QTpjnkHXQorhf3fEjQ6HB",
  "key3": "5W6kCgoPLfKKhYSqzVyN9nSwcsfWo2KAAmWgYo4AjT75i3ku3Hs7k8PgXVrCbg4cju1FmzbUB4Nt2NishNjwzrcu",
  "key4": "5bNW2nXrESt4hzwEbNtT28eM2LS8boVh7g7XtooKxkzGEJHw64eurq5S15mkFon4NrpAcBoRMVveTxzWfutctep2",
  "key5": "3REosuA3tP67u77iZ1DZCRVrEadrgurNNnYg9tykfEqxMRgdwLo1S67PygXyctsi8zCANY8ipdZ8pCX5m5QzpBuR",
  "key6": "38ArvfYM64ETC8Z6BvogujQRv23D2Ky5Y1zLomNVdgcHfeJBVpQ4JLM6yagVNr7jTxpGzaPpW8YTS9GZAHUhcMZn",
  "key7": "5nv1YBEGv3bTq1oUerw15uUWut5FMWJJwszr8PkSpAUJXKbMTffVp7j8CTshgh7DVp13dPfYqsf1k2cAGk62ZfjG",
  "key8": "5Cz3Xw1GqxUBB4ARtXTitdnbD6JNx13zi1ZDcNy3Ypamv1DPhQKheecjkWFN8sM7FhVKuEG5Z73xFXztsmZy4mJS",
  "key9": "5dWw4WXvbucY2vYJrvRw48M41WqtZW8E44h2ekDZkWcnGHzVZ3LcaCKiSqbYgdLwh2hj8ycHSQdxeZCkX4aaKFPH",
  "key10": "4aGsoRVuDsA5gXUVSU4S9scpNof7yemNJhjje6fg2UzwF8qMaKNEdS923UDcYNoYFGkLG5yCaEdDZ5C3Ln1LcPUu",
  "key11": "3zCZJ79y9m9GeQp1wgB7Zz2EuaqKcDWfBJjoLGETRFsCfJ2p6rEJKqWR97xSLefipkECt8ciXGCs7uHxYxiA51q8",
  "key12": "2FV2t8RpxagTpZQKWiCrM936tLQtNxiH7BvKd3EsUghfBHw5WM4BYw5EoSpE6KAKLpCFSMXtiZYU4WbKzw9dYpiY",
  "key13": "3hwZ1oJ49uD7T4ZTtNewWJvrctMWvQ68wmjBqLDs92G5F7xbJ36TDDoWpv9wamZ2PxrLRR9o2Uib8XdRBh8y8W2U",
  "key14": "3RthKJraR4VkcFRPpgZYeQPZpUoXY2mwt5CRwuZvZcHh6jUboCoNzeLi8WbiAFzn6mqjho8EaV12m6WfXxeDJfvA",
  "key15": "5MAhtpKtrTzipDNSEHWm9WJiwY1PB6UEPgX3QS1gu7mP8Sro61RJEg1RkKfS5s5oa9C2faiPnzPaFoL1Ae64jy1h",
  "key16": "4GJ36RrcyNoedFg76FQwx6Ewf5pYMLdkmvnzuF9cPecfAFYFas36Rn6gMYPwC4GpBHQgfrB18n19hPCvgseDB8KC",
  "key17": "5faBSjrpZEJdZrdvGYibWMkQusBdxaMgyY7c95iTUB2Lq6GApW2mrkPqZQ5mofwBKdNFD3kvyerQ25JMvaKiE1DY",
  "key18": "65X96icdCKzX1PbDUeMrHvXuHYwkC2FPHNshMa5GjmLqYoYwYPjAVWrmDhrF8ToYTriZra4FGBSXUAihjPV7iB4X",
  "key19": "FTFuqfpo43mEJmuZaZmWkrLSi7RYSndvRR1hZ4KzXcRXvfRmun34YfkxMjw3HLLJgTpVaBcaEmZFRYfBSadAymN",
  "key20": "4Ts1YjXdS1Sp1iLdyrjSZB7CVwR3EoFLqqgH9SeSmciEJsT6dXZBxyugwfrEjwhqScWq26Dg5VRyNPifPfDs9VU5",
  "key21": "299Rh7JkhKSqYCea3MEzxW6phMv1hhPq1BSqh5LoonKkeZXYRj9nYgUxhsL8h77ixzEwoPBiPRioULCNDTDBVDi9",
  "key22": "4JZkxn2dLLyUY4W8M1koe9iszAZWvygApH5u8x1h1AsVDjvjbkFikW5ueYsgQiVuYvmSaKLhHS2fnFtntrhDHWEG",
  "key23": "pDLLZ3C9trN1VzAQMFb5b8ZGGt6nscbfhjNNN22f5mCtKp8j1qsrDh6rK4kvn8TCKorQgkPwZTWh7729YJRezZs",
  "key24": "4SA8y6FTJn2LrgTXSpYChXoQKRexrtvgmrnvYKmu5uT1dq9j5f4AkEVtfcjk4HbZFpDJ76uAWwuXfs9QuaSAY7r1",
  "key25": "5kqLzVevV7RHn4qXTDHj4gv3PEhpa5J5MbapMb9zRPduwRj6jCJoVUPKiAwim6N9E1KjUUdufhGQgL8VV591FeuA",
  "key26": "5qsvb5qMxZEXrgiL4xfVEQXQrbQC8UjnTsQYSiXR2QRmk1BD3wvZHurHQiwZCLZfqoVfBoVhuVZ6NA9dzwTbMY4u",
  "key27": "2eG1aqawLaPrCSzFGbF6wWUg4M1LpCtijdk1MWrGmEBnGAh9C4s9PhUZaG1XvTjUvG3ynRv32o6VxEzGBfpMv4vS",
  "key28": "53RaK9eXpRbcqSfNYFf58owBSt6ndPrPGdRFJop1CkH188CfUq3FZrZ7d3eKqEjaQSzmytbbH8Mvd8eaaBxyt2qi",
  "key29": "487H82eoNmkW2LqGUZ3aSjsbvLdtePr4yghDLgaFVBmf7DbuR4dgffhT8tqzs7UMUELDC7HvrBvfsi9KsU5aeAN4",
  "key30": "2cWbNKHTCX671WVkrJZMKazc43YLhqLaUxSwnX4HRxcdpsxXUkubi9TihZNbG9PTVypWdK8Fe7DLAXYfCga14rLG",
  "key31": "3h22xJ1eQY1gfRbdENfccTci2oBfvB7eZYx91VCwqncqGG9rFcQNNPtteHmrKX5foAknQdfLvKShdMdFuEh8C8D5",
  "key32": "418ZH7AjgH31mTYZuYKDe3eYvXyNdYkewBc1vjEWmLJypytqmi9cBnre1CAugU8La7fqjAmM3Bwzk4L9HYdt3Dso",
  "key33": "3hKoFdt31XpbXL82MipVVBbtS4X9QBkv2tB7NV2K3L6gKJPnCFmgUK9uc9Gtk23kpcK2GB7sCJWK4skbSwW7c52h",
  "key34": "QDnqeMFdrs2ieR4A5CjDNgG63TehBXaxnGvj5urzFRRuijYejhg5mbgKbWxf9AHN294T95D4q3i7RYStmddYjoG",
  "key35": "4Mi9qdm6tFaYxGb2ydLXMGN2cdLeony95Mbuns8iLmkNmu7qXD8RW6Pf2Fx4tG41hypwGTiK8bEp9y7Q3ibZaU2Q",
  "key36": "KqKXVpb5hezwkrMKrvQijP46pQiLkuGxHd5VARrVtQnv4TinB38u3BD1zFn7MTpDm43xjvDBcLADrPbzqK14qT6",
  "key37": "3MpCiGYz2rTcsssMKL1d14h3ubN6k59atiaTNzBrM2LrazeyZnpJPXZKCGx9hhUvwjpuZLAaySx1Eqy9V3Wg9vXS",
  "key38": "H6XiWiXGtE7tCkVHh5Bksqgmpfxo6e3TdKwALNFL2YNURXsXb9ohWgmVdHfBBHKHSAB3YH8FXqDfhfxrnkEWgZB",
  "key39": "5aPrLNvRPg83X658ARCHSYUqiFtvWczFbeJ1kLz5Y9q5e1pFHfpELY9ckuxrf6ENYzGdDnz71u6bx2SgUjZrUzj3",
  "key40": "2tWk7e2g92nNAbbFfm3feb6NLik8MJ428jFYQAKvogJAxTSCDsbadzfka6ZybLbGQy11tUvMf68smjymXavGSCvc",
  "key41": "35E2P2YH6bk2w5Ut93ARaxtqgrmowFMqW4AHN7etTPrpN4r2eyMg8VdY4D4NYB4YSrgNZmM7REmzzGkXsfa5gNAg",
  "key42": "53JFopPgsQQaH9Ns5dQnS61ASs7B5JD9AjjDYyJdpLMPsKgX8tybTUgAhSqfSLqbSgagBesCWrdFdjM9n5aZ8aKe",
  "key43": "2WfDkRDNHUpWxiKZjtB396XMzdbMUaaJZvZd5CvduE8aP1dhJ5UzeGkT3yu7eeox99hqf8uvZweisJenh1UKL6ro",
  "key44": "3ow1J9JBVENSwLC7w6HY2BkuPxBivZceGkBdb4eQED8XznWi4MjDBrhEbvqQGMwLtZ4r7yswV29RCnEFLS5NtoNM"
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

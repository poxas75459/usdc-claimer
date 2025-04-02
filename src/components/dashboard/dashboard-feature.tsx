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
    "3CeSfw5hzNuCevKTuMAJ12nZoam58KcqkeuzBqbGzWS8RCxSnaqqkLWqtrFc4ECitAfCfc2PHGQb7wYUy8VgNPAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAgzf9h72X7Q4sc4KHZYpw99nLsq43fPpGjyQoHUiUrXiBrjdq2vyhAf594qtBSjuND5iw6ZwAAWyDrzBcy2YyX",
  "key1": "3D1qKqKR3jACMBQVVriLniJcY7XtJq8tsom9baUuX3u9ctU2VNvwpKTKLiQmQuCHWsMoQiAfnA8LM4s8tBafgAqb",
  "key2": "2NWK4P3TZw2XXDMLNz9ukmpXEkR7o8fPGYnKxqbVqMvzugQTeTtFDQg4MHjqysC7UQLyhRdysNo6R12dqLESeUye",
  "key3": "5qAq9HZN2rKbuKfPF3J6YJNifiTxDBfwauQdqYcXJXRUmMGSS2tpjvCvUtssmcE8C8XNNdJaprz7XQ2hnzaNuC1D",
  "key4": "3zWiLR4tbKgd2JRmokE3yPh8AJs6eNXgDRydtc8SGNri5xZ9fFfeJujPBVxo7xgixYRvfu7UeWoeBCT7qAaYEpGZ",
  "key5": "4tRf2RznuygvYyxqC9JAj8umd7Q1kgRbyM7EPqXyjPu3reFrcoHVVYfkZwheh3b1jR5HFC7sjwTZK4MEhH8FfLCR",
  "key6": "2danobWgH5EkSa6gckH3PuP2okRjd6qjfMxVqRWMGKEvfGNdBAd5zju82Lfnj9oU5va5PhLnZDNci1UG53FNCZYp",
  "key7": "2vRkrhqfp4MQz2w6QavdiZBaXrRPhfSJF8Pj5F8ea5eVTEzzfoCpCDsk4gyqJKBC1U1HQcyMwPeguKWVQNCSA2Ae",
  "key8": "VnMZmLCmxNzfc863Tapaw4Q9eB3DzkzzruzK6ege5sZKtae6qYVtmoks2YNoskRdVjjV8enfXea9i53U4H5LNdA",
  "key9": "2QSuPnzBeBzTWDL3r1qZzcA5xvSWphoc6W76nbgJjTPAsi1aL872GbVBDr4cRaTvni2NX3PwUhZGANDswK2evLvD",
  "key10": "2ryMB6DpTqnqoTgMWsrxrtRDgaLbCkMzDfgThwpKL62exvhjt65f11kmaeD6sbRo8dHHMVEWXEADcVPovpEDFR8x",
  "key11": "3HgTyxFBjw1ou2xSsTkT91HcGako9FNiGrmhtjSQXY5sVmBCc8Sg75eomAeZ2wbbnbmjgZJWc2QTHtAzXwzviByQ",
  "key12": "4Yp5AdmA2ebA7JkNmVwa8VVPMKgMcHbTYVNe6cCC1Rf82xvAmaC3meEYUoo6JDhb8hUhQ2BSGNhNHSB3DpMGFeat",
  "key13": "3Ux6sMaXZUwWFgfzsfQp7dnCGTbx9Gx2GTwY78Qy2xnScN9ZMAXEf2rpNYncWosairRgh6kAtuJWu7PGPx2f1mQp",
  "key14": "ANFuaGRgDQnAoVXqCStPPu2cnhZwdAucFdeV5EBnNN761KmTMZ1wZMpCii28fJJsneA118oriF5nw2LBUbnHMnU",
  "key15": "33mwf9f5daF8TPUEiAndvwmQhN8obQB4PWrkCEpqWehWByek5PsXM2SNSjpAxFiPhjKAQdQihcfVnPaFmL52L76y",
  "key16": "5J9EeGCzQQUWpRjPzFQe34Av2oFWyRp3Ze6WhqLqocsjFL4WGijybz7mrmVpoR25xqqetiHipbjxiHZu2g4mPzZQ",
  "key17": "5efSJ4AYH9HAAVzwFNkJ87VSTJBKix7N1NAoMybC7pK2jN4wabre43Fd5BqQ63Fi2Mpk47ZpLsbeY3gDGKP26bmg",
  "key18": "2kSEaFiB4jTfpbx7gyhcncqx42x4W2WEfgyYAbxnUaYYsn2iQ2VP6ca9rMevkctrLCJyzLC8u7wyXZqMk5x6dnk",
  "key19": "Sa98J98ytxSNnKZx5XaW3P613Q4quj8KTWyED5rafvuYCiUpEB666zvTPNatuq1JKAKXhG2bcacooyUkqnDCLRJ",
  "key20": "3h3hKJ41wuohxGL6c2H5ikt1WDBw43ogKw9hWW8ebSYh9bn6fLuWSrqYfaLaLkvzKZ5nKgjj5YUmW9VZmP2cNpe6",
  "key21": "3fP8487tQtFjyYDEu2jXivGTFcQuDz3WjLzeTxs7w4TuH1HzArNtc2vBUFM8x3WauNTMgjASUmKzy7Q7xomGcaEb",
  "key22": "2MMxEoNHHj16r6eAczg2CWy4nBTfXrsrZ2WtH85sKw3GvMhtbKjDbsMh41V51KHjfsxTPH78gP7PCc1asfpr2syv",
  "key23": "4vQHZyopdvKmf1fizgsieoKqrYTvN716sDJdciDnbbELeyNErPdTFEQN5wHfAEX6eHFgVHVMvMSoNBJvnXjNnEU2",
  "key24": "47y7fQEap25ZekrDsPNkcZSsdo4JKZXs761SVZQb9AWrBz2XNMkMee2g6LmCJAHQfjbrjW1vjz3NUA24KQMRLntM",
  "key25": "5dG5JgJa3JyACY1ky1r3Sejb1XdyKvf4np7VCWcHeVWpZDB9AyikqweQo26bjxHYqvt2EBTUmN8UsMBaxwsdYKbN",
  "key26": "5b1qYWA5pvCp3tCAcR9RzQssdTZLcXyKJANW2cSrRsiqfUeT5Ki7qEugXateJvZ8wz1HMfFKYCq9i8yiEpTLHMK7",
  "key27": "4rfZPBPbrKQuBLiX9LFEt4NsjNB7Tk4WbEUquKYZyJuVhVq1CAkMyqpGgYkPgqvfTkL5zHvnzVEnre4ozxWCbXB7",
  "key28": "34UFHrmhxD964hsHsaVpf16BPDPKAGkKEVJmvqMtyzGE2zmfwWuNFnvuo7tRc8LACytnNi675B9TjScx1tk4LjiD",
  "key29": "3s6UVRJhKxdteP4nsDW7i2vbrszjK1Mn3bi8gnYiTKWu78ASLxhbLTSd16BrnJbkZDWYWeyTqwDpLauFrrX1FK7f",
  "key30": "42YipFhXtbm3giCQBw4mBFHYHdzvGCLLFhNDuRYTS9JrJmbuLYVidoSWYv1uN1a8kyE4syEiv8KgvaMbKfJutuH9",
  "key31": "3PdL7C5n24BBUt9PuwjfmGvNwwRy818ZAuYgu5M9c7usPp3zcCtgpAN5u7LM2fy4NfZfyqSB9sfABE4uyW4ds229",
  "key32": "z96ZAgyztSZn4Y9YHMMndL8PvXKE7RsUPYC5PrKZ7sJx9VgTWvbMDjLTSjEPgmsrK8Ef18DfPhykKdJMRsRizyh",
  "key33": "ZbeNdUTmLtLCPMDfEvDcF46vhSE7WKvndt9cRYpgWyiufGKbNCjXkr13Q5b28xbENc7cPb46J9LpQpoFSHMtCRN",
  "key34": "3LH8n5DqmosxLMbKTWA2WzmR1XfmZJHvjay5DjtyR6QARXpGHC8hpNgWz6tA2ZtjWfhWwwdTabztr5VeFj6knvfu",
  "key35": "3D95o5dE8hLQEUBcXTrLFCE42nhErxRGbePdVnncwsM5jcPejm1oemZJ7tM7WdJEJGLa4HJ8mBoyYsT9NDcNDqcF",
  "key36": "h3VSRotSW9yqFoT3vGwbr9WY8sGPuRLG7nXtSUUoxbrhWhDB77CjBW2ubtdR2Z51AmUuQhWTheRA7ypKFcTeWh9",
  "key37": "2qy88x82JkYJkjiLyyD8WQXT9iNoPnrNku2z75rGyxBi9SFzhyjRA8ycuVQK6DAuJTMjVLgXs9wQqMNGAKSLqZpy"
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

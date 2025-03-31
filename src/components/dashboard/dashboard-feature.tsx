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
    "4eh8MKHs65mQG4H9TiNig4WgbnfXkpcAFzuE4FS4L9hTmLHvDnm7mqUbctTE9Sv6dcxKjYrag5muPFCHcpYvCxJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGA6e9uWQyUsEa2quoSq78XsDfrGYfB596wNKJaj5JZSJKXF1izozypydmXVcuRqxkQamBuE2qYwsQTznrEsciU",
  "key1": "5L44LftkkASHfAdC5nh8EDeWgVU6Cvz97GJKDeyTQPy55x8dirfifPJH3gY8gsCqi2pRAYekGBUbrhAq4zq5TNhu",
  "key2": "UsYnuUi3sVBfxMY4oq5bEq29S8vC8gMofFvC39urjLkXZ7yVkvKe3z7PtJcNjBpr6n13zAq24dnkF1YHXbypvtm",
  "key3": "4QX8K6fid5n68UVjUfTzxdBgRTv3mbfquciw8hfA5wZrALxP276YXg4X9rsjv6maMgxhVT3yQyJaeLrVBvBiT3vR",
  "key4": "3RNBbnhEkzHsKHmzGcE6CQBLsHPeFLRUtzuAk7wYumaRzbGgGfGdtNith8FVJTkBa223RpFpoXKygHtJmMEDYouj",
  "key5": "5pgvw8LxTs6iGBiwwuNJnquCmSwcaSVCEeF5MKYmkpYAqhZ1ZgvsG2oNEDsdJLExAjmGf75NgMMkCd2gWFrHA5fH",
  "key6": "4E2KLPXFGzzDbhTKJYp4fwDzG16SAtDNigNHBGRMBmdYdAGK1Txeii9ckJyAKrWQ9cUrPqZnyfykU5hc5EpNFtbp",
  "key7": "2T7j89WNT6bSKmYAKk9Bn8e77wWUjJbTUN6rByznzjXGKGesD6h16MmgyAX7nmuAY3amYVbv9U85bs4xMkA1SQUv",
  "key8": "5ArKMZfme27NU19jpGU6beAYcC4eNsccS8p4y6b4JjNbtHWm3S2Fv9iZqXvxmMXJf8D9yHD9EvSzLc2pEWRBfaz",
  "key9": "2299D8At6kwypQd5i3trR4kqx4qqa8W3Vn77AE3w5pVrY9822tE5M5mfAW6KngPGWQvGNd8qeKoJh4HNWvjWPrUZ",
  "key10": "4ewM2Hv59AHJMmjtnErqgtLauseNta7y5UvDkUcDzcGJtVjbJtJHrRNnQ9PoQwXgmBX7KZsXG2JHLSFjn1MwR7hf",
  "key11": "3Lw2PJBCruwKE49Nn6K3JrDz2bn3Y474E6xg2vu88TLQxo9wA47MTzxjLHw4WqXumvWTpkwNnBZqCTcYzGDDj3yF",
  "key12": "5u7EZ9qGcz1MwDAH6B5Kjc29p81W1pmQC9BRCGKz6w369tVGSvV3yL5Y77EJ2kesmteKUXcvbEeFgAA3fG8KjZrQ",
  "key13": "5KvWgKDd8zgk1WNHSY9CNrEjkCUjsEGS8CUsouKEUkTHwNi49WHqKGgbq4682BgTXz4riMwam1wWnR6tLjVfn8RV",
  "key14": "3HdSWk6EMAi2iZ3hUoevdnqLSyZ8aGyUs5Kw6w3wXmwfvPFQRCAeCbx3b5TiwrfBBGHkzrL46SE9WZJyk679EtZi",
  "key15": "3ZwGaCBfSzysQAH6xYuFfrET32Xzw3WgpqHXP9tQa8GXQUuyTrXeBHmnMqbUKtuynpHPVBgNtU6wqJ4xXb1YbqBb",
  "key16": "xRfyVxrUtcxpqH3Xous2rJpBY8FY6GLThHasr37rVvGTeqgiShZoZ478S5AQvhHRZGACRnaYz54SFBDDD5aY8v9",
  "key17": "1u3fzSwTBS2a92F4HGaMWNcqsVMSmDsf6aHtGYnNDR5NYnU6YZizGgSBPsurPcioeMhKF5gFmXuSAP4xShRCWzT",
  "key18": "4gHXZsAe1A2h5p9TCX9sB2Tfz8mKHtfrAPF8Ytg1JRPQJ1k48uLkz56fpUYmGKSgMj3ZeN6noz5dsZ2Wv4cWYfyT",
  "key19": "67d85UiKzNThu6gd9CuWCmKvfzFkiGSAYLgzTu1SEASuiESHqQDrgxNZVxwmyw1AtkbcaHP51QCXfNz3eG5dKV9S",
  "key20": "2MZNQ18m51NHCXCB2sVi9ZeS3BmP7AzyHCmzjttYvNSbHeeoDEvE8nCWQfhJuyY7rYdH86BrSZyfWuGmWnnAEZpK",
  "key21": "2Aaxse1PkmNM7vb8b4ZR8r15AcQQnVsdDZqgj922Ep48pK19DwJn53FAx2SxNZ4zSrBznoWY9aPDeqTzn99f7gkw",
  "key22": "LYojLLJkopksL3z9zTHk8qmMQTqarEJUQRmSfD7Vu7xRc7puQ7GT5qJfwgjdtZFZMMwBNNSkPTZk3M2rYfv9bTU",
  "key23": "2fqpAn4JzojWt6ZApRqDWE3M7uA1CDtRjvRjfLptVhyZKfHhax3ag9RGVDcdHD9SUnKN2WSSndkdiQCAahnFGDDN",
  "key24": "51sGjXdkcgsPVpZDpBxQCRgAVTD4ZQBBkUw2pWXwLpQXU7qAHfX3UCHrWkm2pAPFcceLqyKGPU78JyC7rwRZJ2De",
  "key25": "4xGnXyzPM6HH4j2LqEjhFQHspED2h2h6xpBpDFLDYH8snkDA1BacJJ94utFCkWo6Qo7vHvUHFRGwZ6SB41vqJvBE",
  "key26": "GLMdMMurtpfX4gYTJdr3Wagv5sHKP1n9tybySTjytUf6UBn9yjWV9wVW7mM8JacWYPQDABLWQ53N7nfpwKbssjs",
  "key27": "3s4DBvCGJVMQDW3cRy6ZG398kckQ9z8JgU6mywU7QcLjFX3aQGYTXX3Uvs5At5vEmJNUq3xdGXYBBm3NCjSgWJvF",
  "key28": "3Fw5SY9Rn2dBDxgLVsDaM86tsAWxLAGNfGpYRjjfGTC3bZvZd4TP27SFabSCiRsB2mnzCc1zL4rETz8nXvkYBJqr",
  "key29": "2oQDQvdbNNzY1oTezRkSFMhZ1dzLVoV9K3UiwMb27SHE6i57g4Tp1hwdcNdjbxL3ZSmxuLpMy4En3rPAAKyAnzNu",
  "key30": "3ymhnyc7EASprfpoBPuy2R6KLvxZCSHW8UXFwDifpaB7EhoLuJbu8qfCiGDSktF9YXDiiAqX6bqjkxFneczk2SPF",
  "key31": "4vz5QAzxBHWHxCXUg9jPKRxbp1cWBEmsQWHWX3qFmrpf17Co3Zh8rpvDPxURtfN4j1PGbWfyhA974PbgwQKXHPbw",
  "key32": "61D2LMnSjW5NYdQVJDo9Dpme9j5aBeAuNNA2SHC2rchDWFjQdYYZosuaUf6dMExp5ZCMEonDk3PKLmLPhLr3bhVC",
  "key33": "5s3qTfmmfBz54hUVLCeRa6isSYZQkwAKB8bnRG2avupD5nqLNRu3i1VeTQCVuN4qEoyyLM43sRQy8r84E1vAQTh",
  "key34": "5RN3faNmuXJ682f185igUE5wW4GnjWwu9hWrRJtzwx84cpNzwxJLU5xjn8kDc95jwyXPgyYGwSkLFSSxARoVYAkm",
  "key35": "54X3uEgh4uj9pTz8nzTBisNBE49Tim5ziM9JGRyUdXiYizMpX2ApKQJh3WHyocAdMMj29WEUaaKEq8Uae9MvQQm7",
  "key36": "2Ci5ggFvEmCABnMcFnwhAsbdvheCGmKRFHacUi323UbXSpmvdqqTHtSiBRZSYozDB34nxbzdXR5sHh5CaWbZVtDr",
  "key37": "2qrf3eW9QwdmsBp5ABpNYZBPA5kEVDr1tBSnYQ3p3RFTpichN3GV33m9XZCHa3YuNsrAvrNXV8UoypprmRXbjBxw",
  "key38": "nyLM3JExeSL4xE9Fm1ZWPkotTnxnUEGysaWe4o9AohQBEq69qi95vWm2VazMhbG5NJ8Z1bVTW9ATA8vaYxGVZXg",
  "key39": "3r9ToifJihvxWj9W53eNbk47DkLWkohC1GPhRwvU9cGQLoWCfQcC83BBUyLsMf1U4mE5T6EABzZmXnn3FzM4ZQVH",
  "key40": "3eYWEu3xB7tWkUXZJT6hfYvXdqMWqPJtv6ST3zDsoaebHXo7o9a3859nf63SJ4rKB92o8DA8XvraxQ2ra23iBN9U",
  "key41": "5f8YT8unn1QegwTjzRa51X4yQDFxH7zMteCquKo2pqYUWacgm9mHMg1dphAxBozMFDJRCDkSudxE8RZuCuThsjwE",
  "key42": "3RyurTZ2tPDtpB1yJH9AhDEyWQz1QBBMhGP17pD8ATBhUs3akS8sb9ukHQ9sX9MeGsKPxy5bxVMK48y9PKymDPYk",
  "key43": "S4NLqjYyK8t5yJzGWW293CrKkfXWsHSBDqqPDLjsfnZbBjdPBEQcZCcrH3xP3ckBxfhuiv6pjiM5CA1HdXWdgza"
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

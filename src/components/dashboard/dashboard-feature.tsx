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
    "4hUGyWvLCEbDqZSBK9TfvskGWPG5pTUvfuSttvKcCHQshyN1oW68H3oaieas4q3PpGg51x8D23BSYv7GhhhvBrJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgGUGfzbPnYnZftjWtdaafPruf5M29dEfmDnJvNUkG5xErxc5zYmWweg8NYiabH7CYWtTgSwYiWoP7DRPotRBoD",
  "key1": "33z7xptCQ7PUmFG4sTaUXbirvDUBBdRwggWgovUFxMqUjtdhTxivVmD3vs6mCXUQuMJTMGtS8nNkYyb9PK8oER2M",
  "key2": "5BhM4y9TVWDLFubUeF7auwP7YEj3wyPHcuMUZN4CoUcqbfb6nihvGLEhyj9noNEBF4puGZCmrRWCkkfepeBVFGz7",
  "key3": "uA8kv9PNKRvB99W3WDYstDg37ny4NpwurFYvQ1GVBbCVBssU2U32qXPdAkPfY1sfrGBcBjNDuaRN7HBSanHwUN1",
  "key4": "tYUhoNg2mbgMtRGoWf9ZASNwRLCdp7DAFeZZRaUPwpbBG8UE6R6NFhiZVj1cHniaqKiFhFWBK9AWWQnw2SwgxWx",
  "key5": "naDUvTKJmyQu7JWjoYWU88FpYKxmApTa45uZiiNAWErCRGZPa9SikLFEfvbpnvNGW94XwkA5mffq9PHoeP3cCHQ",
  "key6": "2kEPQXmChpEpVWE2abgkkZ5eX22hvnP33W5sB28CG5p65sRCbn6KAW4M7JqD8KqcjkQycL9PdwzKJYqSrqu1tNYX",
  "key7": "2bb2T24wLe3rW9s9V922V7zX5uGktMoxifvnf3KQspGV4CjW8wK6jfAaY4XWRVXXm7jUDkQygzSKmSFsWQg4QVux",
  "key8": "sJc776ECgq9KMsXauwjPKtrmfUgDwMFt3tjBYNKc1xHPuy48HPdwzxZv14fHPSJQB64DcbPq3ACzRbxD97syjTB",
  "key9": "qQ1PW3oWLrJTSY97uUHpb4eNKNUCiN23BdKPZsZcVZrmZvg225G8b1s9FJxD1JZWFFj3t7hC7XqVSenbsU1fpUP",
  "key10": "5PzgnDYkHPXERmXjt3USLQTG5iUC9nr2JwZy6vwNpAA6vqSBLr9zjYfiq1fcNh1WZFvH67HWyar6YtBEm3mjQVJ8",
  "key11": "jv8wnewWDcauaSYwD5Y7hGB15pxYy4RpkuZk8yfjQ5NEnQQCGrLjS5PeKYohgXmYQGh2B8kKdMs1wyuoYMj8tC6",
  "key12": "4RCe7g2Mj6QDCT2u9W6R8aJaX4DraRwppoCWbH6ivA8cLXabNJiTaP8yMiUo21apFg4fRNCz8Z6Xzgn6TF4WXoNA",
  "key13": "4DCKKqh3H8Zz9BY3cFLxNaEXb2LwsmZ1LGthTTUKXsmLeujHuAqFFPLUBN5iVhX5dU2hmDHANzF4EUWZ5JabW4vC",
  "key14": "5j7bJQF4QsAduyY5vwK8sQcxUvfVT7GWJXLtawywmXPHg5SeYnRkPFM5WGtPHX6zuP5Ryq581pEA5hoqvPUssjSu",
  "key15": "ebVNRGceeMNJbXhocNPPSXMWR9HK3ygqsdJRHzBgn4Q6Fhv1WfrHbe97hNskYneok5jQXzzkmoh1RT6U4zi22XA",
  "key16": "2Rtpo6hxDkbymRbkvCaz62ajo5CGTy1avdFjpJ4SPpNTYCVBbt4xUbkq9gtLUXLiwnzpqgyjmtE7nnxyuKLru5o8",
  "key17": "XzNw7FeQ1TtZiYhKhxpPAR4719npUyFmeB74TjEDEdUbjBtmAPnbfukk3mBDjhB9ZAGREA93as5fkiCB5YGFQpG",
  "key18": "AT3FxanUM6EF5fA11TYWZtuYTt9y5t1y2FunbrYxbaoZnrLK19ym7JW3Lvhk5Raq1AVwmKFub1TTBA5GH9HwD1a",
  "key19": "hUT8dxxVKa9ZSCDLz6h87qPa3nSZqV8CDR5icfaCmimay2MefNUbgK8q3FVHmoGUTp7s4fx65TixZc9NQURTp1Q",
  "key20": "3mZjHY8p7XYHb5zA7zii38uH2NPpkumRGf82BNGGuK8UyRo3XbyqGeab84nUDcmQN7hhU22nSCKfWhqcv5j3eQB",
  "key21": "2gv76GVL2UfWZNjcr3x9bPHPYLW1EKZ6bmTHS7mi9EocEVFDXhgcFWB8DtFJXnAW7vMLyNFV3TkNmcKozcXjJW4h",
  "key22": "4KT2m5Ruw7VjTMn4ucVEmyV9Jyo6hLNUdATvUB4hdmJ5RnoZX8LBjF6vNP9uWPoCghJZ4madwhwv2F4v7VR8X89B",
  "key23": "2d2xSMZpLCBK7y9SP8rQah1qctA34V38tWo8RR3azYQiGxgFDesc24NhDJTpoGwSaA19ZUw79SbGqVw3qX1t8xPy",
  "key24": "5XctRrc2aHgSNmnrNQKt7fQcMXVjQ74aWUdmJeeamqT9Vb9H5q8sgb8maCx6YuGv2XX9pPVUYr3hBHsPE56WjxLa",
  "key25": "4GRF8pfjGwgc8u6AmLkceUiVsmqfZHiQP5rCFG9Sk2fwzYhaktqbDJWaNdY6zumtAh1AwkF4byMbbAZsrsaBBtUi",
  "key26": "4s5WqTkMrgan8fv22q1mzgDf25TBFqkj9KKgDsiUrtoJShKy98VqnaimPUzwDPjtcQasrMrBx3aDjCt9JJCHTn6q",
  "key27": "5pjwCoMyeyN5gQMDLka1AEtfhK3rR1CFBzAW4wdUwGVErGng5MfPFLpjC4kyzysPmbRwNMs9Y5NJ83mvJU7SCEP7",
  "key28": "2bi8KvfNpBbEXSiCQLLFwZqGkSGtBxpoJGgUm7z32CCTVURo6yDygYQHjfvs6SotjNPuzqg858ecYuK6sM2MykZh",
  "key29": "F4HwUBhPoqN3gx7MuuFr5RGLEBqMQnMDqwmsdWv2D6R7pSdFD5qU2E9zDWJpVaknRgAPNzXVyqZtp7yN2nYpX1c",
  "key30": "5YBLxQAVYe3pnRZxHmFhX9EY6DRjkD8cUH4mLvTQiuf4KQXwq3T2nDLLiD88MYQuKWBzchQCddq3tQPSWWjYBkt9",
  "key31": "A9rbcDAFTrhgt88nBsNq5wLoRBRQoiraND11L4krTeCxn62TYovXA714dY6g7nPsHDdV37G8eSmi4hpFD5ZhPWn",
  "key32": "5wwsrfvNAUqAKummQG4cbFbuF8hmizi9NVJpq2yAU9yNpLwEyZHF14EoukmV7i3QbCbm9tU17YQxDtRsdP4n2E3p",
  "key33": "56h2qmdYXbPk2TVUztqcPMMq4kJ18bqAcT4PpiTCfuZV9UB5abprbp7cZG5MCxt9797nrrZNEgXpssrbQPewHmPV",
  "key34": "2swfDCZwAxr4qKWxMGkMroz8fBvSoQW8ydYncdFbiW8dJ1TcxScrwQz2Q9NrYPfC1Nsi3RyBbukiQkz49syrpVA9",
  "key35": "TEaBvcCFLLEBS2xkY5Um11tZSqQBZYyRiVuL5SCMrgWkqySrVrCn5mHH8UHgitaE9FZhL931qGWr9VBWkqYjwrY",
  "key36": "5jVWAkSfwcxzjnasg1rCc3uSoAQQ8YAqUd8Gg8mutFze5c1Awi3VDs918VMCEBAzQMtevWCNwjmMMoUAr4A9QkhQ",
  "key37": "36ZMK7Ax7JHjcEwAR5TAdKhFRVHAvVCoyzXnEowY8fY5u5ciyjVaybBHZeFsLK5GktsZsvvb1iakno7BBygdUx5r",
  "key38": "frhFVdggZkM2CyqPC8U2P5wfSVZ5HjZrKTkgYR2Kuc5yij1vEbfYxBPRGDGsPzf1pBjBUUnwYsyZEjwFeTeetBC",
  "key39": "3RgjAmz9ByhAb14a3krm3mr7QJnzHYmF2LPaig22C7wE4tEMHPF9J5NvUmVh8UyUGHDRBeDr2V71tq8zknRwgMYm",
  "key40": "2VTEPtTfixGTtNLVRU9VEi359VU9YfksysJpQmMuw8Nfh8LfMmU8XZ5fNocgxDFhtPWkS4xfH3PqtRPzkGKCTPrX",
  "key41": "4Mi5tTmRuCystw6knvYfjd31c3mhVehhu1on17g4S49YLDfrZ75ZXVDDF6t17FFr4KWKe2rcHuNELUpSKLjm9AMh"
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

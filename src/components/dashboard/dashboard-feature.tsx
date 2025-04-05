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
    "2mXttGc4FFWzYdAo5kTF5PFJ5gprdGXENXjtzwTtq16eHo3VLjXnhq2BzsT3uZJWkGwcR7EBuPo8bnkwiiwBbQPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bYank4vRjRvNVokY9Usr8Yw86tqNvxvMPyRa235rrFpBpoxZ3WArLXGQBjFGik1a8GauWWzsRwCTj3TR7X8zVp",
  "key1": "2sEU7izVQ7zyFymZgUWGTLRhKJWmzzMLYpehWHmGvmKstYQxaQRzVN2sHRfENSKReSww3Qs9H7cYLw3Gumofe3da",
  "key2": "3XZnmLUuVvVu7TYf96SftZYQf6gUuSZXdXn37uX12NF6igkjof5XEVXTcnSyt2sp7i15efgBubP2ixq5bfu71BQV",
  "key3": "iwops3sCHZZUHzJkJPPzjfq9zif4tZpPxcURRoquMbderCZLgdF3Nb3yujbmejQyHE5es5SVzfgYzPmnTkX32Jy",
  "key4": "2RdfQv33XTdq2HtZ7oojBBiMHQGseN9BF1riFUMBs7mP2svyGR3EfAY2ftYpCduQyJxvRYNJVbBKfKhZC3LFJSX8",
  "key5": "2iD8Z2BjRztw3yGNfUQe1TqUPhVGLKtQFKhq4V8zrV14RB7MnzppuzDqXa4FERpwmYq64sxKKJhXJ1ds6tT7pfTd",
  "key6": "27F54YB43jFm8TYbge15DSr77fbiVEwNnrawL6GJKxhFp1YGwYbBzU9MwgEAmmJkBJ5tWsi71JvM8mNoBJq2G63x",
  "key7": "yGptjaGPhkfoJE5yZstNN3ia7eu7pEEuBfTHCg2mDhQgswzyAKFEst3ymPQLNhKLG2C3DiWHkQiM7kLeCoN5j9u",
  "key8": "5JejGiE4zXNG24jACa8PX4AmrmMkkjejA9aACibUeZPFPKEvPRERFSBpPaeizHhtAswhin3Hu1StiunJWbPiB4dg",
  "key9": "42aCeJrrqMHnasV6MkPqopFjaf4gXJgsvCHwRm2hVRSEzjfT7tAFKpZmVaoRyRR1Pe423AkXXXrBycbFYGvR9WQ7",
  "key10": "3UjtasMx8X96BRSfBbEBw1c54zGXQaiHzkWvSLmy4695GzicXRCrZyXEgzdQ7hnZ5q3PTB4Ej2Ux1vijuw7TY3Pd",
  "key11": "2Vd6SMB4ktRbeqv3AXzBpc4AJccfLZuGr6EFb2ov6Rwo9XWbSu7ECKgqoESmUqTSo1VXLRdFsmVgCQSRsFrm68Yi",
  "key12": "26MFasdVjJNnZhGGbwTAJwrAT5bMHuCAQcbzoX6d7YzU6KM6PrZSZAtzPYME23QyPPnUw7RLW5qefYCsSGVUwjsT",
  "key13": "4jLNrEKQUx88QojZRQ1N56Ggk4UV8iNPzqEe5ECnmdMJdwsoB111qtCn9EHVNvGktKVBES7kMvqh62MHioPrPATK",
  "key14": "4r6TwWGbuVaP612yb57C8ScqPT6s9rWK9JNSSLpLzaCKjbva4S6gLBo3ox8qvnF8V2ietQyZGMQCq1Zm8ejSZcLk",
  "key15": "2a7NTmvsUgjvjpBCToXjnxYbojNGacPPZfDjM3TPktLkTsBFtAVpoTZqngDinCgnY6P66T8EoxidgdTyJKK4krYR",
  "key16": "2AiHo5ctGXnCW1mPvbKuWC7VzpwmjReGPEA47HXWf32LKHxYw3JsnL4Bgm4EanBvZtqq5dVmRXw9eDzMzndW4pqv",
  "key17": "4y8LWXAF335f88DJoa5oskbBubQmsAmbZBJJTpY2TeJbwHWameFCgwr9f89nTbvczMbA2iUCDb5Z1LeLb21U5vWW",
  "key18": "32sXSnJ7qXimLnPorK3QQ6VmGUwbrJLAkTqzYCkiAqnQXdPXhnuTFiNFuQ3Ac9XkWdGUP7VDakmecyvNMJjZpXae",
  "key19": "37rpG9gmuggc5PtMAHuR664cw6u2Yi6YenJuNMAmAVZtE4w7crJFPdkiB5r8YoK8YdnCnmX2LcNdM6nwv4iyJ6ks",
  "key20": "2zVu9atWYHgkpDVLUZ5rVv2Cts3Yi9kLsfhCaccaWjjTrErnzDF7AYj8Ug7d8j3joY2gRRkBQrXrq2s4XLVUxwPy",
  "key21": "4EUr3rmjL5F3G7dEN38HpeQPDsXPXP2CWohX5E74diDoMvKY3dKaWzZw3XtGJ8pVzDrZSp4vpkGwuMFqXUVAPrU3",
  "key22": "5fEkkUUYkCJYJzSRZe5JZobUMYg4yqtTAjhTC8JwEFQAaraYWvJtvbzqzwtcxPK34uUKcgdQ5BwQbh3X4HbaUhHg",
  "key23": "4WzhzuCVqdEv6qwf2DYfzRsiHFbNC4gt3KEnEXSYef9ijrMHjiKmKp3gAdSUssRXLTX8KYKMYdPM4J7kVGqmgttv",
  "key24": "4Ka2YcaL6amNJcPDvftHgPEoCfmS4QZwDiYywQLVPgAQ9uesvnJhi6qoNEfcUgk1YRRpaDrJ84zmNpsL7jDsEJgP",
  "key25": "MzYd7UNj5Hrrb36cPshFF1WTu8MDCKjcxJi4czwCtiJWAmSspbUZcnbgnS2u3zw5SRe9pchta9sszutGgG9nURn",
  "key26": "3B3Mm5n14tLyu3jan55hZE1hZZKca7bBckAGNPpEPjsqi3R9MKkbLP23TRTLSZKHHvaBCyAHuBbyDvg8ew6PgCHh",
  "key27": "2eXDDy6Tu5uzE6mGVsdTUat6vFB9RSroA7Sv2KcozKFjRGuiHFqiRxeCNX6LL6CN3ihAwcW2B7SngMTK72b7PeBq",
  "key28": "48a1ZimnJHevpHqTccgRgMCtzR4L3F4GkYzoMPVdc9abgkVs5qS9GN1nKmMVa9ynDz5hmKEx25J4rsPto1vrs1aS",
  "key29": "4MqN9Kwfckhp3KYoFAnS5N9UygyjUeAXMktV6syWZ4hXpV7o4HdpdcB4UjTdVHy56dPwgn2dk8svpCGBX6udfDJG",
  "key30": "36rJyAVNUf2ZQTpRcfg8j6ZtLoZd1g9ePQVZRDy9vRz2masrrg1ZSVhNzNDLLGmFCmtmjfxskW3agHEMmpidrGPM",
  "key31": "5gmmN1tqPmjzqi2YoofN3Z8JU3GtHvDAB4DFbBZFcX2RdP5VsRHyzmQPqxJB6KcVG8swg75f6eahtChxCXe9Wb8v",
  "key32": "2kJ9HzYBZ5btGmbjr7r34hjKghHW7Md6hmHoAqJbnYd4Jz1LnnF4C1UivErqzZzw7oor7SRoZ7DEcSmgtXgRirwK",
  "key33": "69y9XQWeUgd7eLducDmrnxmqpkd9adM8VS4EM3J8hvHQnKCBJXP4drvXDWi17JGXt45knt6aToECw3uKeyZEUft",
  "key34": "4Fu5K5EK2koxCZZJMs8ECG7M8Dzq8vJeLxUr6NyhGajfDhB27nZdfZDTDQWDCso1aNcWP1dTRJ7SSFeYLe2NpFEd",
  "key35": "5E4TGRP2qVEYKULCUWrppdBU2RsqcJSg6ZTSxvLhAM5BK1Da62hzzZzpYpi3PNubfy6udYsXGhcJFHmC77QPSN1m"
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

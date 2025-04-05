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
    "3NDma82Y7BeNQ6oZbgfXgP5J5fMGJQXRJtFLiiMDrsBzjToRkFcYhvJ495G7GLwGfVfDhEsDVV69xk2v9mRPPeCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPZUTMYo1nFhz5YrNrJiUXM93qMnUkLyytPubWmEj4Sdn2LjYdZHsJcFLPMA3fQD4juP7aLd2hRRYwfsnbFUKCX",
  "key1": "4uN2UgcoAJy3Si1Hx9CfKQmk4jDqdvsvZKFQ4j4QHPg4DkJq1TuMytaVzhQezkgRTFnitZ7ScHcLQhwT9ndLzjTX",
  "key2": "6yTGxWQw18m4H8JroUrzjeTx13hVjNyYmXGE16S4oJk1sGESrnVgcwHMs2GxWpExs7osDmG9GTSUGCVG9hkjwof",
  "key3": "XUqy3MMsvctFG8bjKrQrAA44Zh7LyqMFaPYdxZ3484UvEdE5z19MYWeidHPUTLjePm4PFY5ELsB74wusXkMpvkJ",
  "key4": "2rvtSiLdQq3mDxygqPuQtTDWCQvsyjyqRXbDZvdMp2Dt9v1QHSbu9LytMAUruztj5YR3ddGzTAw7J3aNfjAgPUSE",
  "key5": "4BqffSsHJeFVgcDBGXt32UNDSukAqZoa3zRtkvy3Ln5ffTrWGDkycP8x1J9XYo94df3hNJn9LuLLodoRCYyfMK5i",
  "key6": "53NAHsHsmnjCypHUrXr9WXcVHsvdXFt2Jja1f6Wa6PJ8rBUMH9t6k5k366hKvEupJdGtKPbtQ9P4wSnr5RqEJg3R",
  "key7": "3MUZNVGnXttBWgEFA5s26iHpkyeXZXEoxTvwFsuUVjtAXTYiLgri8y2KDox5cqjrKfyzgAFi8zMLtNcaoeag8oZL",
  "key8": "T9YBMtGoTDr5EJh3YVT9eEgXdM5xVjYaAgRpALDiRuv3ezeJ6Ti5CqzxPQpdSww9cYcKy7ik8pe2rvrKZYr2Awm",
  "key9": "5evEV8bXmnknipVheiDbuUPWyqtzTiENjddCSoDbTBAA3rNX61akpEWEk3a3bRL9cFi3RoN8ECvepQ81FhyzFie5",
  "key10": "3r811joWsgd8KY1GBLhs6HHBpdmhRAG6Rtd6VbuhsWZpWZ8UT8142xq1CyouW1Nso5kGVmer7iQwJbQuNoDhyUWt",
  "key11": "2xH2tugVwLDXNfwc3HhFyzUfiuVW5BSv7Kc8ans7NnxFP6QFZXntr9pCmgLP1ZqsQDvHzK7Jh541k8aB8ZAC82Hq",
  "key12": "3Yh6Lzoiz6gVxML5KHq86xTECVQjoHzaBhPNGvfv3ZHGBpBPxi3pb99rdtx834cm3qteLmEM2EUkrZJcSCVyuZw5",
  "key13": "hCPJLPTAaXW3iY9Jt5i34tyuKQyyrzty174iT8hp8h5sAjRekzV61DXH29U5751JNMRG9J59EB67hd5Ywu8HKBh",
  "key14": "4n6H7qj2DeG6yv8LyAdqEPiEkDSh3jCiAq4DBVwcvSV9x3iqdnit1yrMkciFB4xuFy5ggZo7FpmcSnZdb8L1nMhL",
  "key15": "5ud5UUqiFHzR33jvZd47wVGcurwfau2pzNwaTzimybN6bZeGsDDYh2GcebJgB4hvRh8vZ1qovgcPA9PnM3fQijdK",
  "key16": "3yhn9GfnDGeGLVQ7dFnXvcumw6AJbyTQn7jULKGrTzg79hL8cVhoWCGUMR6DeG5JCHyKxL92dUMUzyCPezrr2LYN",
  "key17": "5bAr8j1HEtsuqDBm5HoCXTdcCqcV6ZCWAQgpNYhmk5xF36tifFXB47KuLWsAP6NYeod3VRmsuSn4humqBuzfzQhA",
  "key18": "5TqjjUaWJSpcnTg1FqKDkc92VY5NBEkwd5KCBGApFkgfVz4NG1jPAhAR9ULLo6xN2LQmBgQsC1i2LVDBHmnm55gC",
  "key19": "37nuutV48rCxdtSS3Ws7WtuMwxN6AUWV6ZGoF9qWxF4VmGEsBW8RnLZ3owqVD69nXkYQF1gmPNrYrj5eo4W3z6P6",
  "key20": "4V7SqVtmqgpfm1kPYB9mFm53SeXCeUayVvNTM6StABG2ZKgeam71KbP9CczLS76ajY1xF68MX1d8jVNUPYWBjzqq",
  "key21": "4iLGuHUaQXE2HFkEF6kmRxF8Xc4g9WGC1v4PmiuCJfkxA9eATeKDdjQneCBXcDMgntDRymUmds2Su3ajJbDdZYzo",
  "key22": "UAJvdue3PafuHmPHA8wo61hWGaVRbNn6TbZrU963zUpzjtsKvo12Z2cJWt5NCr6YfY5yRptPJu31CkE4y4fpEsD",
  "key23": "32JkPZ55kCnoxjHCQFpDgo4XxDJJLsBtYiA4p9io2pTg3BYWmVaegKL7XCKtBS7n2kuAgnTAWG9dFkQh5pC22HVu",
  "key24": "2HXqFZgYj8PuafAfDTFRVN2yJpxEUEWP73bg9Ws9Mj6tuvxPW8BcY6tGayESBKMFnqcbX2ramhuFUMWSCVDFTbis",
  "key25": "6UJA7iVvXguRJcH8qAmNRGF7ZUZm5vpa6XkSLqt5kjpXwmjosM3ZhL45zbz9FZNL5mSQfEWDh7kVmwKJAYSfi8p",
  "key26": "rmRVjnHicAo7FSemaPMzqp7SGMhYJcZiGZ2vLTYbuHpRokFrAmppSfb7qFw1DAjBNDfqh6fmwGtvTg7Cm9ysKCc",
  "key27": "3qj2gL8k3NS23e5r4KXBgn7HtVe4kKsJLGFsRrvQSMFDwThNjwp6wm5duqLhUKwZroQRRgTDZvexUzzf2DSNVhEX",
  "key28": "2zrWVwxNigvbjR4xRL2zwV9dHxewFGgv5k3Av5wyn93rvtQwAguXYS8xyQqM58a8kaXyAPt25GfQ4wy9gbD3xFh",
  "key29": "3WAAxKtpEJD81NRPSqbwChEc7QjMBYhuxFYVEDEnCtaudsnGvpz3CSA72KR2ztrKYbvKXA4eyLbV7bsurYrcv7VX",
  "key30": "2zjWT9FJyTtc5p3VQHmpyZnNANDbo4PadV5DXLmM4aYfLWFsudyv49xqXBsmBDbNZZsWXvUx1m1Hb7pgigAjvsvg",
  "key31": "55tokV5vZEhypaaSAf6t2JyJMjDV6yYUkoKZdeLbBURa8LqHtYm7Y4LzJoZvsHmjV4yJ7P9ctsRqGEXbmD1YyUD3",
  "key32": "4NMDaL79LRxGV8vp1JeAaPSdjWuwCje5DMkpQWBCDFBWndFs5rJia3E1h6kZpKrpQS2zyXSsoVuTPS2Zw3L1Cbs5",
  "key33": "2GkKzUyYEi3gy6yvjy81R6PiFiwrMKDpEj5uqXM5H7gmNborLQnLEJSy1h9LBP7ojKPBBt6QrxUaLSdFUCQH1b5b",
  "key34": "3QB89qbjnJJwrbfAxzWp4mGftDaY9D6QBuHAhjSq72QfxH3HN2fsDmBZM4sBWcp3cCZ2f5JmHe8TgotWiH7uWAt1",
  "key35": "2hTh7uKi9wga42aFMEunWcFCBKJHZ8QiojCbpo2xXBiAqtocX2hq72Eg8xgoA7RKmkzvQQXb9HGxc8Yus4rA7TrT",
  "key36": "237jgzTNS7yVjpXV9ZcGX4wby2dWCRPbg3mj4eZ4Af3GdHYFHZfZYUsSBoyQYZxXoxYEcsnudbBDA54JrMPzj9wa"
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

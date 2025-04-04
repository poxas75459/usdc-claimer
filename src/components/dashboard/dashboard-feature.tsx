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
    "E9HMz7VVT8HR1pHt1WQP1VUrtVToPy37HhBHueq94G3DvGBY68d9DjGy9ShHf55JpFccnERMvQHhYz3ujwsrqBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8HR6vyWem7YfB1GQXhfWG2mbzSKYqgTvbLn3WxXci21DdtEAnnKTjMneKk9E9tqvshLegzYRyrqhdAgmNMhbY5p",
  "key1": "2wLPouwLoqvpBiGG3661C9rM4ZGoMezFMHjst726CeLre36k8uSho6GMar5yVuUaUas2j5Z6pd9VWymzrzpXNsGR",
  "key2": "4Cve45coCG8mXEuJxHxJZbR2yxMNHFnoEZJmp5ML7GJQcpNdxTXq39ZfZNFnYNWpY8sMahfto3bnWtsGWQcwSxem",
  "key3": "1T1sWJokYF9nsbRkXjCfHMskwNtGdsfZpRY1jHAr9wxFXhU8fqfbURngPFfqg9PEs8s5UrSXdiiAr834J3iUFDH",
  "key4": "5vvdDsfXodoA3y6FCNJR592pc8GWcUZoQyAeHZ5M5ro5eW4kJgcNWPpbap6DaQzQ88wc1FV3BmsPJMLuCEFPkJAc",
  "key5": "2SFMy1x7yvCzCoDhGvqBnCUJFND3BYYkat9oSfBcTaGC2zidxmosvS3r9i1DhT3Pn87aSssLMfSAkUefPxvuXeFx",
  "key6": "3j2dXZFMAiiCsDuMe4NMKEMxWMdkAE1FFxPQAWmS2sXZ7rxvSEb28Q17HwNJ1Xx26UWccUDm25XhAiqnY4B3f2Cj",
  "key7": "3rbzCFf1u18rnpztF6XZrYdWQfXPTsf7GBcYFDcCk2XGygYCMTXJRP5bDmny7M16VL28aEprEecwQzVR8aaKGVAu",
  "key8": "5tG6zMasvh6XuvWvGF8UgNLRBYgei4RLVcNxR9T81N4wninb5tWTuveC2XiLs4Qz8fXYLJ8iFMMqze2McTeXYgPJ",
  "key9": "Sws2ZLhZwc3URuDN63yNPPeYax4mGXwDqr7PgEaxaEDVDV6RNBMuDSqUsKfpCA4o5sGQiE7MS3oV5e8y9kumQBv",
  "key10": "3BqkxBS99eEycW85rycmQGBDmpSUogEm2jTqik4xY3ELE7RaHLJuAZv2SGGUxGKV9AWY1CCBoaLmRErhLnSum4W6",
  "key11": "56vreLUi56NJvkfbz5PrKCbeKA3rx6XPNRjrr91p41uRfCtBqQERHvseWJJYGLb5AZnUmiUj9WPdVujk33Y9FxRN",
  "key12": "5o2xgEDGKuwGNyyMaoetg66sHXZ43J7WBXxaAffD5PiJ7ytJGqxBDEXBHzFsct7KsPx4gqfxcVWSTGiiERd9wfb2",
  "key13": "3S9btY552FP2rbgkhpis6p2pezXnSWxFXHFyRXbDUXobqcEn7f2cVi8dKrWJtjZ5htS16FLAGeXZQaKQsbiQqtpv",
  "key14": "47wk6dCxUpeHuogtTwcJGhU4AbbZnrJj6jP2y1XQmk3nfusRV8HSK5k9TVJtNnaskwNd57xZz2avszpq7RrBsmFU",
  "key15": "4vYZnAvkud6so1SkBbgZtaJm7tnPBsvWcXiZa3dYAQXYs5oVH8bhQU6oXvDLahepz4BckPBFgEdy38BiFPhFhgX9",
  "key16": "2P1dtts7rxHorbem4b2ye7PMjZ7U3i55HgdXi5cYLVe4LSEUh7ULJdrY878KRoJLQtNxpf9aTWgrye4ouUYKnNzS",
  "key17": "3R64nYjxbyuASYNeG2zfuk3EywevnGsMfibBii1ZLwamhLf2FhZjiC6XTL4KAGTc3SMrWcZmr9cogieFruugfERm",
  "key18": "5EGE3qHYcGSSNLENRo8gKQpjuJ1JGCHLYXM6FLHieX4n1qNGyX5MhW3iujsiX1YcDgbvWtEmzFwkDMrhD6oPsoC6",
  "key19": "2nkKWMnhhm5HL74fPrFSuoKuA9VFQQswpis2Nw7R1XSsetBmdNEkoYK97qvyERswFz1xrWCGVKz2nqGvKC9bgFiL",
  "key20": "3z9yekjtxgGh7BZiLPsZwEWHjJ8m2qBBuvZDeDUgHXes9sM8AGzv23rafL4cAf1UijnJuopPUZeF5fW9XKQSpisN",
  "key21": "5zJ6CvWERLovhZFc2CSuNm4R7hKMkrHE6i6xn6mwuBpTdj9zaX8TXYJ1WtDoNRMkTkufdjmFKXUBgWtbsgv4ju5u",
  "key22": "2ZHiZjy6bas1GhNbQ8VwgWMDJysU267CZwx7fad48C6YCuqE5W1cFpob2itPE56tHrx7hwfk3yZxZjJxPdPA8Nvq",
  "key23": "5sQnZ3zPZtafrmRSjHk1p2FDyaz9CBUKK25azJxSVWH5LE112ssLx5EB269rcYcrXhhZ3C6KYNNicCx1BX4nmbZb",
  "key24": "49YgTJYL3qCZLo3rCjZ6xqpKhCciKJVaP9LknGGXv4BW6nmN5YkWzCWqDh1GY4Y4GqocqJWJpozLbuk123XF71QG",
  "key25": "5n4SCbcP8gEnwRqiSMkKjxNnGppdYdpjL3QHtFW5DG89xbHx4mxKXcyZXHTdWZqTrs37Fv8icgKX9tokb1PMebYb",
  "key26": "5Wt7uHMaCkNTyoH3nW6Fj8kG9XRWmk9iRSR7tWb4Fcaz4Xkj7oj33rLGSLquAFaMfMezYCMphiE9ChyiYEMyRfgj"
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

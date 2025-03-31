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
    "XKkULNfQFvJ5vY9VAXkdvqn1sh26KJPnVdhmMa5AeBqA2fUjcLbpMbHUKtuC5m5aeKyxE6t1sp2dLRMtK87REJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3pC95t8137jD7az6SK5naGQhs6xLvZcgeZLb8mYGiQLFLtWqN9vnEkrTiJcuRwNjf5Yv5Fh8VEPMxL9mhYZtfF",
  "key1": "4NUL8QhSVsEEAvogiUtb4amLWF1CZVjA4X3ty5nFQYkMyHGsfsUE6JJQLqFinDhf3tXa1LBK49fJsvUCVAkGwuEd",
  "key2": "4wbKVXiUM1HQqGFaCrbpiiiDaZA6kEV1Cbar4iyzZUvTAr1usg4PM9PgWAUELabNuc3C6W4Qqza6E9C5SiD35z2p",
  "key3": "3bTYm2DCyoHntT74fEPZsd7mUFSptRJQN2i9F1TnSUXzu3hf2pLEifn9PRhNc8ocSvDNFnbBPunXFe6rffp827y1",
  "key4": "62cYKUzrqcqGZnPU2z3eBUdcKWsMs6vgsjSqqjyL6WNhn6JTmzNyFCRAwcAhtyTbmgRQ9kExvJB4AhyuRqaLUitn",
  "key5": "3Y44kJQuKBe7yGTaSDx9kFoL46qgS3RVXT32n8bDoXwFpFczrSZK3E6mxGBAC6qj5j9uuBwtwHGhiZgsQbmvNEY7",
  "key6": "22H51VfFj4SDoJ3CkGMtjweQVtvjMTmQcqwQNRZL4p52CKRpm1b2ezfLt5EVTHkuSU8mn945JQoLEcd58rUqPcZC",
  "key7": "2TrrdstcxnGHuU5NBowgKemBcUPgZ2eGuSor29GEYXBrkshDXBRor8V2kX7d8kiZRJc4ycSCTTasZnJiWq9w42vA",
  "key8": "24epz4nvgfC3YvDQJeFNZgjMXHAJxwdAeGqn91sPwAQJVjsCf5LreZW2nBYp5LBQY4NJ4cRU7bVWiX2jgY8cFHzx",
  "key9": "5Bdhs9KxATiZJfnXS7GadYxtNabqjJLjNb35rSkA6HWL6RnV23VDMiC3vhjvLuHrQ9MPnrX6j6P4cmie4uXANXQE",
  "key10": "2MarEMrF85YFywymkRpWForV1MiAkmjo6Xu3JHbHmUYUdkksJ4LwTiD9y5S94PtJBhp7Jm6XYz4rL4nZxp1AXZvm",
  "key11": "28EMuLRy249nDzXoGN3YoGX3NQsKMxX9VkXGw34JrJ6HdbdGFRp5vVBMw7HRCp5X6LUZPBEnvuAyQtoYTtYvtvR2",
  "key12": "gvaPFHRZiaW5z5SPUvTqaVFZptKZBCSWsJMt8wfsq9k2gCqzXbHLo6Y99J1KN8DYcJK2U6pNHDK9AkpJrh6TWcD",
  "key13": "4teNKC9PQaaF6SJfE4axywgZNnDGXPnVuCL8uedcm3RhRt4S5YCBmb4gGzeANu79P1hJYEFsGrhjYm3AcUEQVQja",
  "key14": "46AongwM338XamF3XELRQvzNS9xNFmD2zqG1jdbGPSF8tnmcZJ61DjZUWFhJRVmFupJx4TLaqx7RGeSey44T8EU5",
  "key15": "36aTTr28h547f74f77NcbGGEk5zvpPT5N1rjNrmmw6QfnGqWAjUw2S68NerB1c2tui6zuDbNatWBYS4RYSov6A9X",
  "key16": "45CJSjZvjxPgq8pK564Bg3NaTFmP1KUB7hVDyjH4XZdj6DChthvDMziBCrLQFNFnNtfVRRNo2kuZsfGBdaaVWNHW",
  "key17": "62pzyUbZUh7k4Bc3o5EyTbhcwPev17cmrf1hGcZf1RnRfGd2jM3zom8JG1zoycQFjmbWBmAaxW9YNommNB465BFA",
  "key18": "3Q9PvwP2c9pLB6URwJALKswP6s6TZTi35S3shYjsQCSDHBs2omcRxdSZ4P892SvobRgtXPeZke3Z2rfK7kVCZ251",
  "key19": "CJaytD8W88gshNgCpWFvQcCZDCEZhUDv9rTB5cW5yTPfzRKrAePKRQWwJ8KYEJptrihr9AxTxbCFoqYWhzLh5nC",
  "key20": "dpwkCwKJXyNQpy9boSkZ6jGDX5rH1WetwedQPZHHBHe48uL9k1QiYSZmWE27KDoZTCKnuyEn4kwqneyTqJy5LTk",
  "key21": "JEybgnEXYySgJXkWy31MauY4W7CYhwBaiscuQDSLcGMSZorXL2duQ2weMKEa1Zd74PY6GuRWHoVw4cnkVzyPzV4",
  "key22": "fXajt6UybSuBTLy4cRnQcPHWKTj8moV1E4Y6u357Wb3VbNdenLiNMYSuUtoYCZUWYPYzszAs3GMqrB9biU8yAzq",
  "key23": "135QXWAJQezH1o59HDERGcoyjQPd9eee67RSt8XBFa5aQnLyC6NvAm9P799RYhSBqumaRiUtwm3j32G4o1CaBKp",
  "key24": "wEBPnbpjaXweGDVwKEfgLrGghffWRmGawGGesJLRoN5HkYT3oSQrEYH2GhZYYBPp2eFiGHJ4JbLG3RSzp9s7Poj",
  "key25": "4GR1GW4FRH5RaAmDczVjoeraX8AftTPQcuipMVRBpYLouYVBjKtcNBJE4o1yTPmK1GvDhZfBd8foRPmNqab1Cohv",
  "key26": "4kTKoJfCiL7mmCRniVNBAtD4GhXvQMu9yqPtkhUfXDjxKkuSfFLRuhRSv6JH59LWWtRCKhaiFmDMojE6Q6uJhJBY",
  "key27": "Y5Dt6TUqPomFsmgfu44kd7qJ78EqwT2iGpw49cV6xenLHRzh34MVd7dDJgYiRH8VXjbmW3iUZobtaBihFK5wEdJ",
  "key28": "3McqaRqxy2Y9V2FEC4oaHHPsQuzNjgQCxnvUhd35Ftgb67w1uGmbst83QHwMNuyc9zuL7QC7cBiQnDt6znEEGWmV",
  "key29": "t2vfWbWoBaewER8wcwN3MMiNWkB7aATj9pUawuAkKqnQjBtKt7FFFdF7ongnUj1zdcRy4MCF5jLR47NHnLjkxFn",
  "key30": "br7FPowHVwRdxSEgw7nw87canrUTzpcAPqmF1WgVMqJAbwHKCpUV6CVNnYuUttV8BeqG4mn9U5q7x2mxHoFT4hS",
  "key31": "5gM8oWJQpeEqwwvSPQMgocfj8RzsduDg17jSQZ5H8ahJ8SiLe7DvTkLpNATYADoBCAzGP2zsrrDEZbTs6gZThSgy",
  "key32": "4msRfui8QWB3MJVZPAmnZYk69WGMo9eEsaBcFJjxrguLJVXuFeb9eGSA4PJY5TkXHjtHvSvTP7Q8ptNe9SbDv4z5",
  "key33": "2q6nTdSSsXRf8jjgrxdWS8ULhNQR3hqCqNJaBhNYoy7FSHBwzWpjXV8qpSdMt6KcxMsM4bS5iMCHog8Bxs6RvG78",
  "key34": "5KC7PybPqvRvxpmN3EXYvUBGQvgUGvvJgEEcJ4xfz3aC9DJp93iuHFVJhd9J7pywfUvS7ThdhrrSEJkkg3FzFZs1",
  "key35": "4J7c1VxvVuNHepS2MnWH8NmHtyHpYZanbgvbCXmwqtRuVKmBC6rFTUiJDoKUtaCprhtyWud2Z2Z3sSQnqp4cpg1s",
  "key36": "289cwPSHdDCubgLN1W8yU5rob6XkRfntPXgFtYoX29ggFTAcfBG5UMmZcLFvvjyDzeTjGkw1AwHywqqGTR6M4izN",
  "key37": "4M75n3jQNMsbYzSNuAAWJ7YCaZNHSppkaqMpR4xVTxUNNN5oEB12LY8qVyASknbJxFxz3kXu462vaTg7p1PmscCH",
  "key38": "3r7qPpwojLXRdaBxqM2FYjngSkPSB6JwfX8fWLNwbV9T14PEFWo7bMF3cwE1xzxEVhUwqvzwtWKqnUCfaU3rAQbF",
  "key39": "32vF7buiatU8BWZiFkCSu8EtaBgx7MPM46ZYuimcXaR8kosTWQ9UxgLZRFzBvxkuVbv6ntNmyzxJmhKSHDrb9jT4",
  "key40": "4cVh9Rp4jquhcEU11wRb4yWgEfsx5Gyg4ZCBSbNh59YFVoTN7LygKAEZzswgU3AiXGLWfbAE5eWVTYp1kX7agNkc",
  "key41": "32a8bpZbPshftnHKrdNV82sMP5PypgSaV9tendfWhma4QaJHvtdqrNbcNV1dCN9Knkx2aLT6kMytbCzdSx8Xom4p"
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

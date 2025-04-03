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
    "4YguAJTUFUcnwzkJPn8HdrUKwbp4n3tSwJPdyQk8UVew5QUTPR8DHXgHKKwcTazPn8Co8HZfcTjQ8YWz3gAAjYad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDM6YjxgcmRkVNhwjc1wTJQErTExzX8nxyWELS9o29a4hfCeq9MXNLW3iaShWFUsPopp9NMfxZsy7GLW3LEFaEA",
  "key1": "2beWKNS1UthrNHCuZKV6WsLzG233TkEwgmLxGSZqZgPzW5SjGqe1cbbCLfGqLJqCQY3GrZff3VTWNfxC82s9sNPm",
  "key2": "32AnaJbYNJJDGP4nRwRmW8atiUH54GapcoCGK5Xrg2uYJUsu8R7siWje9Wqi17J3WFY2V3B2yi5ZoLZzAgmsMwFL",
  "key3": "52Q7LFANdRJm9yMceUWQdb7t4Z6mJWczGpJRjrbyJH7w1SxRMD5kHTfLrb8Bag6roAjrGB9sqUFr7dwmwUViMNsB",
  "key4": "4JFqzCz3ybSMiYH5ZLqowffJyMUwcipzcpaHroozC5i6MJYw8QPJqVNDwWv2NGqUs5pwKV4CAAyggWRncYg2AUp4",
  "key5": "3s6HrVNYRtSVLiL4ZEMsnv8EpueBdU2AgjZuz4kAzKyoEXNWHUNVKZc8SRgzzhLuiye6MTJyy39D3gkyucsEQ3Zr",
  "key6": "3zRQ39GDa8EnLwm7KKU2cFDDNX3hHHbYqLtKMadmVp8p3YNcZzNuB5w9y6ph172L2mkJDW1Fk6Q1aR8DGvuLVzdM",
  "key7": "2ymmtqbA75uWwsT5kKVm5Dg1qPKQYbwJP1rfu95PVrpERAMNTi5AZQnpgnKbJmoqHvB5CuLsB5uAKexGj6u1joMA",
  "key8": "3rTx7hBHfcRmTFADRAak33y9MaUYrFr4vcBgsG5cbVfucMZkTne11pV3gWjZLKWCsk4s2nxpaP2hDpDaBUvJBomo",
  "key9": "3T3knjC3NtDamPKex2tstwFuYUi3WnAh4s2zdqDTXgHtSPeRmebFrfchqLvtp7zroZhZHGaXMnRncQEqUuqVVUD3",
  "key10": "3H3MstDC6SzBrt18iNNDWJe474B3Yj8kRva5mmhTg8rENcRvHMrQAEdrYpucLm4ibB3DHFREsPkLPbeojLyNre29",
  "key11": "4p3jXJjARTa3tjodjqzbMMCuxNTPkZYMCQUejkQ8W4GvUXS2gAQS6aV7UBWo2KfUo7tEpdep7yXVd8fh7AgAVbKT",
  "key12": "3VTQphDD4JHKSUkmu9vQW3CAuEtDwaPRN2ba22ZbbAfqJ3WXRJSxJCHpgCd6oH1CgFXdPX8QJTy5FENm5Rhqq3NJ",
  "key13": "59aCKzCq3Pug5v72Fiw9s6RaL6xuFAyJP5pNZP82QSq2EgivTnKZMr1RRz4XAtt3XzzJWSZhzYCY67VU4gYCkpFK",
  "key14": "4Suss6pvS9maPT4NmsmTgiuECP3Nvms6NCpPT5LuMeRDArA3macM2JfPbQWub3NZjDqAqP4jcBv51vh1ps2jfRX8",
  "key15": "4t6oZVJF9NAPz3uaEB9p4ipF8YVYNSaZ72jkgaNtMDW63g44zy3ZWBtGeWrBfFdWDFAtjijwgnXqzhtyrW3GHmAS",
  "key16": "4b4AnHBtCwFtCjizrpaMF9Z9ugHbCPRTjQcvqnh5ecQfEnhELQiGQXk3c2CGy5pkFhzmBNAJH8vnz3gH3SW2HbNy",
  "key17": "32Y84KApjpemVotEMj5W3TEyHFn6TfB22Go35rx7vuGipgLYW6DyE795aYyQ1DqRfvRFdSv3LvobAs4Sf76Q8ZS6",
  "key18": "4pTG3DapDRnL9PZSX5tXf8dQZs1c1PP5a1jYCSp4QYVimpMCNng8ph5s4Nq9vjcknK84niPNxgtkYFikHY4DrGSC",
  "key19": "32uMcRFqTegTc8bXm6MGS34J2EBxxM8FpuB1xrRMMVXjmzyWwfqEiiYnYsyTVEPQjXT8j2wuTSWU7BWouoGYP7An",
  "key20": "W1rH8Atjbp3erkJjKHoFBBeGL6AxEP5KtRxUosdvTYnDer6WWRmsaU5t3sZB1F8xkyMfgEGVrvZY2BZbzqPZcLX",
  "key21": "4eEi9UnSCR9em3apoLZFxC76AcrLXezX8b2wTPxKNd7UMMDvM9W4nSRt9F1wbKpMMQtrd4AmXMduPPJKAVUQkbL8",
  "key22": "57W1zcjgW3LpE1Us5EyWjpVUxVTUW3nCz7qJAoToQJck6B8xVZmHHseMH8HCYQrAGznqWhBF5as9fWxz3pV4YhYG",
  "key23": "46th2rzsTShPM9nLa5T5yqDNeerYHgTLd4cz83mRFYjmQ7FvNw76BL9eCWXzGd3kYUcmDTP1MT1YwRURb26Z7bW6",
  "key24": "2vtbYMFVkx35wE6sRdEkLrPFc6MzvWdBPexyNCiAnxQRGpx8jVCPttzAmoxAiiFGWBM5Xg42ALG551jnUh7y71h3",
  "key25": "UqbvkJFz9RWaZquqVQHhg4ExgRouY8AYYQQxeVwFpWp5AVzMcw5FhVM1NSVMtpj6Neftjqz67AdpP9T4uP4HGJW",
  "key26": "2GDYH9z78ahUgKrk1MexBJjPcuQ6XNvhen6hybF25oRrFy8Xym7RnQqHitE99cWpLcqvp7amsMzcZ1ypTBxi7cHj",
  "key27": "3VTPjPEeAwGJ4fwVr1yoRx6KtktRViFH3wBSquzAXcEPnVvvFYb16DcKTZ8QmDgk3MEVfzVw78WV1PugA4tSd7NN",
  "key28": "4DPhZmo5BJCmM4yLCKHNzS2REU9ay2kvUKmgwVLNSADfp8byuQGXdvTKtFC6sqXiT85J71NJdkw2BBVEdgMCW7T9",
  "key29": "5NuSMpYrJbADVVDWFaWmuTvEP19D3V5MdfrtBMYdRTBEigHtVpr8u7JavBw9mD2v92xL7UREYUVqnZciPWNmB7z7",
  "key30": "5hp3baD4qStdMbqHWN3sui4Za1RXm5U6Vx2qZ5rVSDFSGGeg3Z24f26jtmbABExXQDjV4m9AcrwdgHamDZm4sVyd",
  "key31": "3nVnnCPVvwUntKAVRQc2wxyctTdqLNLjnH8U8fqxJo3QQjFYhQJRcy3VwkiZvP1XzW7E5Y9VZZbppjMbVLvgJJXY",
  "key32": "3PnQrJyzqUQCbaPK4Y1awNHWdNwaKkVwm2NXnhE3VY8bsmkvTaw2Q9CvsgKugwrN3pWbG2F2F7s6YjMnmhQi1yRS",
  "key33": "5hWLT8g1c6oAJPpxAZ6zCu4AGLxkBvznMApPRQwdctizhWvv8xFoRNMQksfATHZiVHcHJWwb7mCu7JYRDiPHLnRd",
  "key34": "4CPwMvnGz2qHHuqLdbbT4BbBc6ts3TH1ShYa9h2Qidky37owb6GfqBZCXFQn46SdcF4SQnbK2K7nZWXQqFc6ByVo",
  "key35": "4zvQm7md9cL236L1EAABFP6EyasK3rZYVaGdfD7X8WbmAtN94HRKc4351dEytpVX5DmPiTZMSkQMt7oVwSDYeHJL",
  "key36": "gxHJrJW7MLBgZFtcTShHSEojVhP5AHseVmaMYRhBFXYbGbaMtKfDf4SGHC46TJDDsazAmqC37zRf7qn4MhrSzDw",
  "key37": "5c56srJ8gSTdrWMVuAKxGNDd5isHV6RW2MAU5zCz1tdu2gF6nSHQRGSEXjdemR6wwEXRUiAtxwe8CJAFCAkReUeU",
  "key38": "3tNQYhZdzTFFaeKr2YE86X8Pibw6GfHP9aWeUaScbtNcu3mEvTWNh9UgtziUkGkKvtcQmy8VrEwECAhBEcSu7jRS",
  "key39": "2YhPcw2LVAhLKZXqwhmrG4Jcdp3cZmE9qP58N3oHoHJokXpusrtyyB3RSfN4gtUWByAWVZPUzKmSqT2kPXnU6Jw3",
  "key40": "1294Rf5AehRVs6mGxmQt3ooFSbcHpHV5AK6bGn37zhVJxvG4VzDfnGqgYYCvr7mU9PcrSjzxs9W1C39HHU5aLiew",
  "key41": "5qy2E7CskrKWU1Y5Uyoba7DWR2PxMpqXii4Dwu3abkrTjJ7GH1VUGzZkphzKw4cRwLqRoiutvkH95juHpM3J5E9s",
  "key42": "5a1Jfian2TfMfjZVFwyaSHPWEPhVDGLSKwEJqdGvhmMAGQuKcYtiy2JAQXmehGbbxZs4TRBUKXpDEgGRHiFBrFPT",
  "key43": "Z5WmC3Hfi8Pww6oujAfdhiLmZCE2Xf1ichvGrVYVNG1WuVcVpBoqjzfTDC5h1X1uvoRXtbS97Dbv9Dfo29U4u8u",
  "key44": "49UbjREyLSUBNgJZt2ayGxLRcdtxMVLakDMjDFYNfWf5ieoigTTQu8oE2GS6ov1rVZo8t3JuxFmZGCXkiXAHs6WY"
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

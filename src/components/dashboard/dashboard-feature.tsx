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
    "5swrYvkDACw2iBkP8e9CGpa7hkbDWYCeLKrpcKVU8FWDGLMkRGNFW2qZZLEVFNrySMLy1JaKo3emkPjc6ze62jt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gi9svJ9j8sThFTVaogQQx64yCKx7VnQMBM2mxKy6bvqW7RSCwDSYsw1fgCB91LpwAJeBXoszDdn4bmV3ApqT5DS",
  "key1": "3fkkn9iSXFRxjBZ32uWQuSL1Wkevni4MxVb3RVy557ocwLFs3gB59TrfP98xUZ73jDQzFX9Cyw1JDAZu4S3vVeW8",
  "key2": "4UGbGXDJgSRzbwjCY3mv3dkwkQmXXcuJMkjJAsmWh4oTq9is3MVKqUwQBUiqxR8qxL243L8c7KafXob6a6JJRzmK",
  "key3": "XLZ1haV3X8dSbkgXoWkKzZMu5gkmaeb6K6bLYvGhg5dXrzkAbi1r5Y4o6tf68a6BprSh8he9Nxs8FDeB74rHfDi",
  "key4": "4uKkzuuY2Jr6tEeomai2huHK9GRq2uM3MYJmJbuoDQcD8iWDZ2fDY61XGTDVCX2aABJmawbywnxSzhMmGVVtqUSu",
  "key5": "42aacT9qr6N8nNQTXSFXLYJEmhNGCWjCQMtkJh2rFwVxtUtCzUAitAsp4sSeZxj9xzBZUKc9fWHLHTubVenEksGm",
  "key6": "5Xukviy87UCTBtH5bdu4nXv4QRKocPC8cWHgp5S28DQCtK4D7YmMXWJCDM3RtTte8AuUgSWdXguaqKUosSV9tRLs",
  "key7": "5o8Cum2QXGRPd3iDEiYrcaFi4MU1CuJJiN7d5GM2osL4MYotZULgLKPnw2R61M95WvNKLRaoSi3oVwqH5aRYGgkU",
  "key8": "5EHTnqWF1dT4UnLeMLpBgesgvvxjwQ1dcFneZUANm531Qf6QnB7JSgAjYpdDMJuPLSUPz1GB1FXz43LLG7YzwAQA",
  "key9": "2w8unqnDBNEqnanN7MwF1GNoN2P6G6Evfem8yMYwQQJJN3kg5Fnk9PodnZqBmSofwRkZKcbxDpP9uwn25bCySGLM",
  "key10": "2rve56xFFjsyf9AhepX2NdgQi4CZ1GrCTpJwvqdo8BSN7drbWGpjUhmGPyrZ2pspvRfMees6arLY2MxJ2xcyJ6hf",
  "key11": "2vMqR17FtKrxrgpavK6qRnvZnBYTNAhJP37RVzT4rZvjvVNxXEnKWvmRpqADEQ4yeBgyfhnL7E2XRkzoH2HMMoEG",
  "key12": "3FfxJP6qBbMf6NnjPsyzavUnXjJRZzR6oCKuq7nsPNw1cwJddaCRKEnT9oNYWdx4iFxiSDcU9TQ2RbmNH2Y2ZhSD",
  "key13": "29rAUpNKK2eHtHV1pVxGq4FckfspzV76Gq2QTkucpKSxbCeQtHjeYJ2itaNA7Kn4hNrXMZQXgQWWe3XEx5jyusFu",
  "key14": "5jcjeEzbhcCdY8ChdDg8c8nWbnMJ8nLPezkvLqxk3DA2Ai5yAeWKYoC7fGAueC9L1aqABVkrGA1nXRhVKHPHwvb2",
  "key15": "3VhT1XwVe1FpX9FR8btsnfzT6eLvkjFVnucuf4vSDrWbghS3abLyVLBgtvXWXwusJVgmkxv6ZWwooiU14YN3pBvy",
  "key16": "4LvYJwSLVjZjq8hi266KSnooaMnXYe8v2pLfAeYad8yhABCMwkcK6Y34gv2z3CUiHD94uK7wZcTvqauTKp9dZXMN",
  "key17": "4FjT5tsToKpLjh3gjL9uMJHwwair3VShiNkxCuwExgS6aFqGDGEHFwCk9AT2aCMeyvctzhZyERD1znvTX7hiVBXU",
  "key18": "5fczyyxg1qapXQwysbbfRdT9CxWSccFyFxzAB2q9MeVeje7ZPMFykAPKLWsPoC8cLXRjVHCQ7qo17djbBPgxBzWy",
  "key19": "2bnetMYoPik27m3ESJJsjBHAgKKyUhVu3JGVeqtyrfgfqXxW4wivyJ18Eu5iRUGkRQvs75FeasMvTwswWvbyPkes",
  "key20": "2Dek2sQPys6YzcXyZMAudA9zS7WJvT9mgwsZUEVbub33HwEPwvUoioZdkbwPEijcsMDnnH3PetRdDscdfozQDd12",
  "key21": "5DpmYPmZ8Ms3C7Hvg2cchiX9M7U84Va6Q1igippdffjXErJ5pQKBVoiBNHr2eDWJyrXAwnBPr2jUsvSzk9CEfr8y",
  "key22": "4jcqk8HDTKZ2SQLubxYdrKB6nqx268XkkBn3DJpvSWBcbCTxMF5rE3E7WtHrGRNpRWyCGqvWqKzqqNUrnP8EnWjZ",
  "key23": "3DvQxQeR3FLm8ww6fv23pbQQtU3sZRS4zxjCsjXDdQy9BoUw5rSDkwYY8hSUJWbzG49rNE4f18egPYfvrPPLna9o",
  "key24": "31vs8jado7sCRceWDhV8tY8pmYMMuW9i1EhnW4HCXpHxtFuxrd9pykfTrqcP9F9N847SmFCRtHge9oHpRx9bzbch",
  "key25": "47eoTFddHXETpk4F8i2EVdQAViECM6fXroi8W5K2DCL4R3wXYbJEjcKgkz2shFqT2tJVB7dbs7ZPFbWDBVNbVaSu",
  "key26": "4WhC4RsGbis3UJuUjY6jDHuyfaEDr5jVQUNNzdrN79hXQqbe11HeG5a8newZ3kUDjnmHdWimeTUYEP7GvXPU99Uh",
  "key27": "3BhnYPcdUGdYgmS7SoxyD746TXpcjPpGJiKpZPgpK63pBwxWw4ydkARCvczaHU47bGP6M984wbzarpZ1AqVFMB3H",
  "key28": "4UZb6WnswanDNgsQSnMxDYND1RWJwRQQT3KMihpG2mDgCaLjhCM1CoMsB8Uqev2HQnePnySvAykKCm2CaoJmbzfz",
  "key29": "3xHWFaWnmkNE5m4EAquuK81GsnQpFUgMaKt271mZPMFGUjRg1RB7d3M79AgbGDBBsUqpyJ2SRdAjVg5jpmtrGKYV",
  "key30": "29c24ybwDNiNNpqCtE8ngyaiBsN4f7pBU5binNQEsz8eayhipCKR7dPpPsWRx34GBqGnfXdLbGEEHDb2cgdBGKRi",
  "key31": "27X3HAKw8tEEEgDrvqqaar2zHHXSSo6oNosinACgvshMedV3Z4DZCSTm2V8PQNLoP5iRcEz7mb1NBnfJEz8mCuRT",
  "key32": "5eNbPFUrJzotJXfVKPrKeamAs5GierrUhh9Z8c1uJRPGd3n7cLsTwQwYWKBuUAcDj1LtesrkvS9kDu1y4YfAVPLt",
  "key33": "5eg8L5pjrXX2FNXpXLGjhGjdJ9S86KMzBS1T7NGUCw3f5KiNAMHNDaRfsoLRRwjBCosXY8GxaGNB4K5MxrYSh4cY",
  "key34": "5kfbHZUiVrdSisD7yuMyerdbpGWY1D8j636szVtoP2RkXJBx5tSYg4AztM3zguvr9XWHJvY8bEUiWTADNt12mC7z",
  "key35": "5K5xSVAd1NN7PUYhGfias4Avn6acwHuX7MUNuunyR1MmSUdQvfw5ngAZwXU3n2CuQi4AnFB2zBsWDjRy1SnNgzjh",
  "key36": "2iBTYKs5FCbYE4upvraWesxhzjMWEmN6atEmbxbBttECdhKgZhNJFLUjEX42Swa4pW6s7SujtbZBX42jzabPZg16",
  "key37": "g7iAafBpzG6WRD6GXS5XEkVsboN3Yc3nVNh21ki7uHEqnwZi5fWMAaCkiykyTGhhFfmbHbai4FmBu4zdxozttiu"
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

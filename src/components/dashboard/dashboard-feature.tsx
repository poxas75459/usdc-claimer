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
    "5YG3RjadkGSAy6iLYRjG5XnHJQeQr4eNLWzd4QrA7Y7z1H3J9bZdaD7fCJwavRh7x9aXBNWQtGVsS1JvfZsbowpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2jenF9SWvxoM6aESbd1fbyP61tq6exYNDBbDJ72FYrAwP3zQ7cR5CHgtswPjmyUoTsag4bYDr8XVAaaZqWX926",
  "key1": "VbTzZ7BoZZZLozQeSPkxZ6sZNKmq9DnFgR7BAVd95FhHQYAkkyhp5wmF6fwvM2n8nuh4p1PgLs7Qnsweok8iokG",
  "key2": "yWHR7aVFe92VzWCQYomUEkGEM94w15iZgJxcDiy265WQ3qsjMb9LMSGMxNBKcLKHaTXFdgYi7A5mvMJvThRDjGL",
  "key3": "5PqNPvn6HRSdXyasNEACZPYPU5sponZCyXw9QTBqqga7Vm1eUkUHCWY31sRXPCH9PvaocdQiBejVk9HjFzRFu5TR",
  "key4": "4v2k5Tj2FreJfwx2RsUERWmSAF5bseM4n9QXUzY5wbr8DtWDZEqN8ewgocskm7rwS3BUe58LBGuhfoqjXQsqKWKn",
  "key5": "3iNwsMu6ixABjU6Q22D1gWEDDk197f75Xuq3MjDcKjnnum2r9A95CHsrRd9AoqmdYfSi1uuZ7B7F1uzF8N8pMwH2",
  "key6": "52qeGb3r23dovu8z8inwKhaPCDM6nb4QiHB1G9MrrvZv7fBzmdyKhLVacmwbb1DGeoFXjcwL69MWnLHe11149RJd",
  "key7": "2MgL2nWccGUF6gJHCo8FmYU1gf7kSyPsk4Zyp9g5BuhEppFFnuDfwgNbhvCdRKHrXsbqa5XDHJyTm1PSv9px7m15",
  "key8": "RXD7oV7KrUqfUGg9vTDtWP4TUa8YWE9gHMgJbAqUZRY3e2Yxrjtyc3KmTVoHiMUur5Cj3xE8wCmJCEHU8XiitbY",
  "key9": "24emqGhrJwCiLwGtZT1xwjZNVAJTDHSAWosvvGhrxfYWVsCktyaE9hj5rf1RmaoorkA35PaFwCp9QtKK7wWih5a3",
  "key10": "4HFNJi55sfCL7oUQbPaYFrTr25FeUT7BaPfb24s4SSgifXHVSbVUy52spbqFaJBZUBWa9BZvnoz8o7xPhA92AqiL",
  "key11": "4ZFzWQNy4F6p5ejtHip3Q5LD7iE7125Gs2JmWosTVmqu4iUWSdCGcrQqhMQPZnaoBydGSXFTfHyJg7inKX38NmVt",
  "key12": "2eB5wXEP1RPAS9JeFWm1CeQmVuo12XXjqFPCzMvfXPE8jVDqU34LRYmT6FuzMw16CtaYhVydXkEErfgvVGKy8CWt",
  "key13": "2waQxhEmRX9mnRaAEXYh9y7dtA5BB79VXJgXftg1yGL4RGrnsP2SdtMvLDcD2tFydj6nGkx5t1vu1nELCoEP4DDK",
  "key14": "33Ya466vRfNUTEFp7JC4AXCVQhHDUy8mpwH9NunsKhYwUH1VW6cNmnpw2CdfUxoqCBt69wd6iCoQ4raEnt69fN1h",
  "key15": "5nDMThNqTwkukGi6eAPds9xeszYqhGrBPwEC5AcajoZeh7gApFu9QmVC9uyTeUgE1AmABjsLhBGN5EQmS2XeDEha",
  "key16": "2tKAKfHgFko1kq1gYz492XsCkBuswYbtct94c4JvLtJGzXdr15Lee3N5BHLERdM2gDheea4G742tgsmeQCUVqCCJ",
  "key17": "2dC79CqLdgJouSCb6U8f4KqEwkVcbRJYLXCDFk3egzmHRtQKrJopUwHxKBgnrgfR1HXz7NFEKVZquqoEb6XjKiEN",
  "key18": "235gVbkpe5TVJQUSFJ3xe1SavxDPgQyRdAB6sUekHXUdT4nJugQiiHUaDr7wMZ4dj9yyCdMMasPy5QcwdGyzKb81",
  "key19": "4jqqzqTB6ZStKS3R8eBQ3Kbk7ksqf9ZfDGPLLCPmTskmXVgkeyTrx4Lf9wArCTaPezn7egFDy8rgJBYk7dwFbdsH",
  "key20": "38UpzgyFqBChZchRbfcABwisvHmWJhHSvPHsr38hdvYbCnoKu5zQnek9xkkz69WpsGqUpj3TnvXNqV2r9Sni4HKb",
  "key21": "5jedjR6dV9divLT9VLNyRbrnaCfrmKkKCp6q3XRLfpmRVwW5rGjF2DcB4nR5ja68h1yjKyEeznyp28bdLNeo3825",
  "key22": "7XE1miaq8dv2mnTja9xL1YQQx7rxS9jq4tQ8us6LwwUYLSwQAWtsHWwtJbAaCmjdF3YrFV8nmehnWZBgCos3rtc",
  "key23": "5Lm5B2EaZD9Cm9RbzJ7WCYUcwbPnJutjq7GN3MjV59JwvhgK3FNgbm4RsVHxZaf6gTt1yuCBTrMdLaFQLfewNQNE",
  "key24": "3tW6anrS8rryqF2ZyYrhxTbugt68g1A6BSDSLaJ5m3SzQsb8mH2YiZgD3q8fDB82PC6sdDUWJase7Lsej8yLENMF",
  "key25": "63P1xEEhH4oia3S63xnD5q6GJDCjRE43u1VYfHWD7V4BbseNX7VwLDwA642DcAR6n6Ks5JPNhxfqVRmDCTb3Dx9f",
  "key26": "TsCyH1hFG7Q6KqjWUw7jZQ8YeuxVApDftUNqPtrcNPSD7Hum3xs8fcsr6TfhPcXqusdTzs4MBHWuVvKnVsJg7mL",
  "key27": "5Uu8BEp2BGGD8Ww87N5NZLWg92MKuyGW4bUMa5x5zn7tbvSRrnQaMm4mayrVwcfpNLYNmHnudarfV7i8zqjSxuh6",
  "key28": "33cJNY5aZRaHsEKiQBTtBHsLSnuutBh5zuY7dKTGr7DyxEM1dtjqu1DYNpXhaoNVdnXp8CUUEvvG7Se8rCwkMCwo",
  "key29": "64AVLj3TgpzfwZBykBTdXFtXzBiKUfaDs3jUTQ5hqXcmf5rfwfz1hoVbEpuawD7X3mft1NKQq5VfpQKBGDQwcHsk",
  "key30": "4npVs8KmpnDa7HJ53Aqh2LtTBZ4GLsBV6Zgu4gdLPdZpytZEL6fJN5GKX1NDz7JBpHzvbri8Lgtk9UJCRTudGiAe",
  "key31": "33G1mFohK2W5sobiyZky48g5M7Fuy4PmGCjHhy35iaNtredmz3TXjrm3xMV9RWVHXx6sY7urzvtvkC6mJmr93rdJ",
  "key32": "3umcqm5aybgcCGA1EedcWNyqfiEU2u7uUJBtyzSkhndvWHk7rwtthndiRZpoWVg1fDd5C2WfXvyPgwJ2j4oC8VT",
  "key33": "5fVb9f9tXu9YobzjNWB5jemZX7o35vwAe4pjGkwp1pFJ8KYumnsBoWzty3cQXAkstfZoKeqHkib9T7ZrUtxbHcmP",
  "key34": "3essQGnwU7L9e5iyd1gZUqZNQxcEd4AKFeMTXPcjPo1QhtHABVQUPqhwgmeD3uz3eQ2fupAfJwmrHDA59dCUCquZ",
  "key35": "3Zc6x5g3m4qLRNReio8VvsFnDpEEht4BLGYTTn5XTM9j7AG4HhbShHsfS7PSCLApMkKAJLiMXK74RHLCBNnueVhu",
  "key36": "4Ln1F3wJ6JFX8AxmyUEJMcPpkGPrvhXFQ7mfGDM6QUR76cXtYFrSp7CxtrAhjtAmogW71on3YNTW9rwVHFpTo9gB",
  "key37": "2PxqKHEN665mT6bFYqYLpzxx1JPjGSKCqa5Fs43X2qc9zz8giGrixA2vp1HPd15kNyqSNpjuYdYHY7167cjN9KZe",
  "key38": "5f2Len7wC44rxpWwoQB2z8A1HVBp67SXDPBUMTXPbvtt4JJ9cLkgvbtxtvRCKsZu3eHDtUyvYbikL6wixh2LS2e3",
  "key39": "62KQmiocWMRvmpxYVFFeu6zFHgaT5xBWYyC5vWSv84dAgkF1Ub6cUT2EtFMugFQG8hJZXfCaob737S5VWEVWdFWb",
  "key40": "5jhZLTX83EJj4SgqgNhubJG4UMVPfuKY1uccu7ZhjWq6geKVysCnaiBtJw5JTqnBom9UXx9kkBXk9bEGBz4fJhin",
  "key41": "wdp2yPhvgSMF6vY4R2JxE1hKAEQmynfLsAYUzPAVNiAK8WugMKL31mi2cHWeJrgmA4wpXwxQzucKNijRTTTvaV1",
  "key42": "3EZ45MVnhcjVmXZXFPVWxu7qCYiuiYUBSmPASZfD6PL1RVxrRVW9zSn62gq4nb9dZcpes4mxgAsfHJV1BfBqmvdm",
  "key43": "5QvFpYLd826Vvjh1hnLSGsFPpcgXu6zZ4PKQ7Tdh2VRLdPPAoBK2qCitQf84bFLPLZ4tgFMbYrDf2SP1BQ4gQiif",
  "key44": "4Bq6kJAJdcWUtQwey48kehnpQBU6NNpaJSjFra5ky9gb6AoyFCZfsDLR8vsNyJHFPsRt6EWQ2j9z9LjQiSP4XWML",
  "key45": "2r6xJsmFjfsytSPFtFFuriGNUMiBRByaRLa6UMgyAvwEZi4SZfWFokdToWf785u12Y1m4e1h8BS3RAkrV9Yk5dEU",
  "key46": "5c4E8yGvTSURcqkDLFM24Ks3ePfshhru1HTKC3Yu5wfHSk1vHqvjc96zRG6G9SDcVVkAhMxmejkVVbahR16YGuXP",
  "key47": "2JCk2kFZCe65Rxv1hCz3TYyF4hCaRNtijAs1k6fhSaJnUNHVPUEGi3aYDhTFmRJCQZ1EtL6fe92BoL5YMXsj2ZT4",
  "key48": "5ms4HcgZfSDR4bNUVc5iRui9SJNhcRigppXSPbkYkvSNx7fEiAUE57Cm9iYqEuzh8LUNTHk92k8fNviMVrLbEuF",
  "key49": "3dpt3cKr1SXPrPYn9SFMZAh6w8u6TBSz2rT52MdSN59aCK2GGV3DgwW2rLmrEc4D7fVVyjTDZxR3TsXJ9pAZtwqB"
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

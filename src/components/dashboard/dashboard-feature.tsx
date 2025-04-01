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
    "2LDBbXoPNzFv7Jgt3L56NQX5dsnMpVR7cySNTLeSS7wThPC3WTfyEFeERHXF19n8WYJen9nGZEAYoHANb4VKGnun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L9inrEZmjVwzTAj341xsvVwq5ApAWL8KtYJPMCrXdBSWMAXuWap2gRipEYtemHsJTK8XGGH33CERvRdySuaC7Td",
  "key1": "226Vs4VPisHgwoHALLaSaF5ut6oPekcu1bPpLEQpEpvbHkJNFDNjjTtThTHyLNUftMtpMbfEa2TzKzDBUrUcJzAf",
  "key2": "PVzx8aqtEReSMyMeXS4jWRZg8crnnZJDy6mgpZ7W3fC7Db5tsiT8oe4BzWLyKb6LpE3QRzNm4GJ4MLDukP9tJ6Y",
  "key3": "TZQav9M1Svy1mSQxL1gh6JvNJYmH54CpGS1vaHRGxTYgzV1MG19TpMzG7qrn2bo9PbdVWbFUYtpCJccg95fqKuo",
  "key4": "wYDD42J148h2XyJPL4VoBSRdaYXMTvgQPajDXug5wUHVdt91D7Juyuf7GbbvVrFPLuodhzWdTDvj4oDrLwnRjmV",
  "key5": "fW6NTA9wzwAHq5hGT1qVCrCZPEDWDLBjbgw5SYECZYr75oRCeSxhhy1EBtxw8pXZ6wKEWRna61e2U4tc1Ehb9Kq",
  "key6": "RUTXaZPcCvgSXiH5ChDsV1qJJAynPV1mRF8PXrUK1w5MgEXZA5xQQ4ZaRrNnXmh3VZFfbHRAzXufCdLkZQmPRua",
  "key7": "3DmiBZffDboSpzD6CN9Z75msobVSRNL5h5NTMnZmU9UyLSzRcgoQzoTWePJaJtHmCgRHfT5c65F47o4QYL2hSKg6",
  "key8": "wMBVoQYVKtrER4SHWAFm9n41UR9E6nXEJH25RAXfpNFuBGsv5rvb3vrBTmjKDPkN25chwtSUX8ZyDKioCCN7EHg",
  "key9": "3ANfLbVedYdB4PMApTS29FLjZEuA9AgGgH5dEasRV4GfRSRchivuSTfBEfEyBobpjSm5bwPgx8Ds9S6xhYM2JKzc",
  "key10": "58yZ2NWPkW7K6n8A7iX5tvFuwBc36VuqodXrUKCsYf1yvXHQYW7K4gUmmoY9dHwpvvKAq424v9Vcuj6XGaWPmGwZ",
  "key11": "wnxvMVbn6ThQJvGfWPQzijCZcJMkDKdyiQVK7tXaF8g1zGQ7cqH2UAFHwAuSgzvEVuof36ddBWUVW9WVHJPYK7o",
  "key12": "NqZe4Wtz4zfZepF3V35iiK67wuibaTCz38QLmHS8h3i4VqteocNgipeQhLfQK2kdT9zYH7UBJoSLxx2fnxgFE1V",
  "key13": "3w3izTFPYkvUMtJrCwJbHF8c6kxbvq6BX9U5yPC8Hb6vyGK58hVzSi7wJ67YK7Mbf8K5JcHAtv886JpwJ8ZiMFFg",
  "key14": "3tBUr66bXgWnoZ1PsDyc6p3tyDEaX4vv44JzkAf6bynjF8UssVKE17BVFn68aoU3N1QABCWVVacTiVVFkyTPPLfA",
  "key15": "3P1KrvV6hwf4cSfVcs8ATW2HNQuyWKcVxavqR9WBGc9YWLhYMcjiEn8xyGpgrqruHcAbyrBTxqfRHdxNbj1MgJrW",
  "key16": "FncRwf1ULVWAWHfqR1icpZHhfwPQBACFCxyGEBhf7SRcc6LyqJ14KvScQZuUCNwdVNFoHMGEQBrDe1XUVZK45Vz",
  "key17": "2SHaSwJCQnh3PFFVPzxvZvuTagHMjyDUcv8dNSVZgBQgxPvq1iGV8ed18EQnevYo6zhteacMSdptWvbY6sZ3oyNi",
  "key18": "2yHu5UAY1G6QsB8he9d6CSxnu9eRBFituYPdT6wgv6GfmB4obggqABqAyui8eicNpxxrJDSCu9aPid8QuyJTq2X1",
  "key19": "b5DnwFA3sfNvK3ddxHTPadXR6SETSENfMxLXt5eVCgeidKqjH2RzcJz4N7esNZVa6pdwKtRZ9nEJCz7BNXz8Y3g",
  "key20": "3oCEGgBG7V31a1M6c1KTRCojdnA3BRYSrRXsXkDXqxHPDs6ZDX4jMmhD5ycfYVSVEgnTLcJJ5xCdwfwqGTE1ZB7g",
  "key21": "tNZtcaMVRtGBf2SSZ67TsFD6yVqzgU3W5Nv368PqGL7GCBcfG66V3f1MW5NtJdKaUfeHMc1UuDsdJfaHNXhs55e",
  "key22": "3CjrCPZaK3RgZWP4xVqNjbCEX5fWVmAN5M4pouhnCSpAQorHpV553tNJLc2yy8ng8PmMNApDbsFkg6BsWNxHKCDv",
  "key23": "5EzLKLh7WZQB9xyBzWLQKzPsCF77V9rjwva1RYeQwZSLEpybGuX3hgQegcBKcjqsQTP8kzBqQi5EnZynenHoTDtM",
  "key24": "3efABUTpuyVjekEHDmVQgjvrL6i5j8kUmTwsjY6NB95H33gpCCgaHzCpUm9DqCUhkn6B9D5bVCCp53JTPsh44MJ6",
  "key25": "mxZUJB52WFFP2DRZWRr5LCAdRSBoNHdn9QziA8DmwQRyvc12NQnx3hKK8YEGqSukMb1zpxxETSxxDc6SEsviVXK",
  "key26": "5JSmxucVx5Bpzka7dPhPsYeaNnTK98wg4eue9kQ7R6A6yqWxDt8zC6AUVBqKXTskUow2CAhXPx2hp8JuddYSjxNJ",
  "key27": "28LC2k68ZZeq7N8jFuHK9gRAz7w5YDYG8Q1nCmXgDLhWXwrBHbfmqTEWHdgC19fHoh4aKpgwueNASALMWVh8yukX",
  "key28": "2ukare6FYYAAm1SFLfTizVjdEAGXRS9vsgCHUG4Fxcr6PeZmVcSSy9H5G9kZ33U6WQjYXqfd4GU8uG4PV1pu98kz",
  "key29": "5prHKL1k2t7gyKaXh9jdNLayg32cKy87dend9JFZAQ8DtvwayqPSViMZWRBAhQdbV5YS41tQs3ppfHf3e145fPiv",
  "key30": "3sjsqXLxPAdRTD37TJPbRtuoomKcJeabKyJPA4meKUor1iJ7HbiHhTjz1mc94zQK3H7fekjeyJJobKPJW4ghVV45",
  "key31": "4goye5rba4b1BWGq5X9egTo3SsSuBRHKTCyCwReLtnwrDtu1JewaVxaogrmoDxjMo83N5qtDyZabaX8JyEwm4T3R",
  "key32": "4NzbMfBiqcsFADrK4uU2J2QeLSzevE6XZPUbT9BowW5M49Bx8pPvDhUqY6KDnx9zmH4Z6DD2ZGagvJHzntzozpVx",
  "key33": "bU9XjHQMiRTRYpRNwSXzMYmGGHqB1KH1hmAADPinHmPEYLyfAqgsBQouthaSh4Z6i6dTsdqqULsBSXUbA5rkpqT",
  "key34": "Fqvc1jnT8PTSEkGoawPmfgKSMPnGejy3iCxpW3TzRmPK2Q9FvM9WmUDvy8XxiZRsRcH55UMK5oMoGH5o7witZBV",
  "key35": "2dxAE8T5wtMh5cx8sQjDwhcnKWcoA4DqyrfewbUZ29x83Tx9DXMtTPzw5HQuHaFRS43X1S4uDc1ofmHh4RKQgWCX",
  "key36": "5P1k5qKbDTDYYzYWyuoJJihp9AAC2FzdyvuhEtL4F5tZCvggyBTEX642wcdoH8Bhs6ChGhV98X6XK9GeUk3avDPs",
  "key37": "5rQRXveLJQe6BY4rZas9dD5qRK82xSue5kjKy9thPEuyLTe25f9aSkA33XypkwywwM5dgsgexiD2b7HiLmNMXtFh",
  "key38": "21YCNYMz9fQgx5zc2FLz4PFt1CFzJ8zCA6CLsNQbVz6v5AsB1yZFCawSfKksEfEfFQkA8GLhqwx3V2HzGpvYQysS",
  "key39": "4Gd6rEgH4bL7So6swuA9y2g4QWkko2Xe44SU57Mo4ryi5vpRkUGmwzDBKrSUGmVfKZP6b48gY1vwwSecWeizfQbS",
  "key40": "51JeX8aY5yFN7rKoEWGdKzmSHHfc3wa21iA62KPBYza75MnSQfaTtKLX38UNky9VFbHiNfrek8YgnYiG985ox6J3",
  "key41": "mySsqF4AexiVBwkV32JQLvWCdJKJCqAbFxUhbQ5v8BQoGx5FkWKziJioTwL25axrgCNrpg77mXNoEWPkeyF441r",
  "key42": "5jhFxFFzDZuo5Kic8ifHhYVRkL1gsvpGq3J5ouYkrnPygfxScnXigmkDFXRji1uMAAhTu3sNY14CxaWdxNRdAVZ2",
  "key43": "2k8ej7zdkvTS4bWMNQ4v8WxTaSGgdC7TpfPowPdhUfNYT4ydoo73UiR5ff6FNukJXKhETbD2aFiPdUA4Xif6g26r",
  "key44": "2yz4xJQ4WwyfmgYMynWqdBVabf3C8fd11pwS6Qfdcv5kG33b6PpgwqDc45HwZ42iXLyYWjfQsutNQKvVyn7bHC9m",
  "key45": "5N2J3CP1YzJGv8bTTyS95didUR44VGvcPTXpcYqZkzUPuNRRYh7ABcFLBnFcCWygRGZRnBt34SYTGj4bYBge7LZq",
  "key46": "5ih3YV71aTnqmMhWx9SP7iUf5EUrikq8REGMumQ24SvEQLzFhVQY4kjwdxwERdKjvtRtD3mHA72N7fc2zVTiomiw",
  "key47": "3Jjps9zmckX2EDjokoMJRCMVu9U6NUsruJNL4CbwRyNGpCVJQ4sdmAw2GxbnPWVB2r1jHoK9f4jJWHqJdFJCZwrE",
  "key48": "US4bekJJqpwiVM4jNKxmWCyev2p4uvXN1V5y4gb3DAtyyVQn4hHTpsRSJEEFXvAwVHKjFinQwPEsyBptfTj9Ft1"
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

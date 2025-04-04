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
    "42yyojjXMGPyP1iLbo9qMAebkoR6WnE4xJcPEwX3WrePtvdPZMbXpiKBJXFnRAiwt4DTXn439BAsyxNmNwNtWqmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HxxvWgtJxJwtnikHEqcatc5dDFUqgZrNK3zZYzyxjAkpQHypzF8x9M5G7KztgrN5sSbN2TBWzNqqX5bADkgSay",
  "key1": "52YJiKdBqvgD2hgsPk7TE49pkrV6X1hFfJiBwsX7L7fFn44WU9MpXCZ1LNynsQXkHo83rREBegi5R4FpySYjhdAG",
  "key2": "3k69FSVe2Ct8ZDDD8sGk9kxNYrdkCR2bnYshSd6ArvoDi3LgwSRkPDZLAoWbRg3qQ86mFZApV8RZDAN5Ko7Eem3k",
  "key3": "5yEdUF34g2di1cxTpa8gaBc4pG9FRRGbH1kou78vW22SLdenAr6ncjGCxVBn2fTNyVqBYgdkbQrTx4FJqwE8zpUh",
  "key4": "62KEixjAqNnJvN73o157jghCgtDx2zqXp1fztsUgT9k67523ipGQMP2qj78VLWEQxoVpor7KDShmFP1XRuHRgych",
  "key5": "6117FSRihb6aQ4ZGgZTVQJJN4NEor2S6n9nDiTFx8UmQUcyxyHPBTDTkWe3Hnur7vRBP4FEqxRQmREAU3DF9B3FB",
  "key6": "55Tqe9fdPYQyM3d8qL8SCmMGudiEGJzREzkdpHEssXuFaZR42KfjYvs32VHJ28ob6vN2g2HjWzacyqg5XKoxUdqD",
  "key7": "8GLQgqhTc4EdXfLaJzjLBk5BzBpgGAxUww4RX2WoDJy6v4BGM9bm5P2qNX11BDVj87mzLE6nT8PPLuGGuvNC9jk",
  "key8": "5miwXReKxoSHeVb11httEZ7dGqbrVku9eMPJZ5ihFvLwHoo7ie2vGRNNzaHojAHtarQwXn8Xnbmsu7KuomUMKLDh",
  "key9": "3oTN2ryoRwZz78vrz3rgJMhzNvRLjPRc5Rfv57KJ49p2MPuE7QvLKEdAdCwYSkhRGqa52evuBiscLEdBf2gf3rdC",
  "key10": "659PFjyjv9w3P77U3GiDYUHmpsocpvey7iWajGpPyEpCuYtpxSw69ANonedFq3BFtUdbZXgTCLCr9QRhabrJBUAy",
  "key11": "2jzWC2i1eDufMFdVG5gLb4TYxZA8nzbCp1GNLW15tHsJwqgsSv3SH6hV67GREek96py4xf7GpuwdQy6jSHgSmRjz",
  "key12": "44dwJmagYh8RhzYsWRG2oLEE5fzXh3D6zwEeMBA4mpz4Zpo1UtoPtqfDUswqgr8Xo2U4ZakMNawwUrSQo8xFzKL4",
  "key13": "5XwWywNZVg3tDpcX61dtx6pJgi6NsjCZVufv2Xzgqz5f5CmAxDsTu2o1qY3pF8YR55xDTWSr1eymw7b96PjuQ98f",
  "key14": "5BU7XPy9wmxC4qxhndmtpw1wJfGyNMEARJg5F3kgWr4AjtMghGfWi8m9QVty1T6QJpJJXLeE4FiYsEUszooPECct",
  "key15": "5HaheMvoE1gZu99GxA3JdQjT7e3YAjq7pbsRSdgBDUuY6v2YsojpvHedvqWKuuhTsS9zSGY2aMgfSZy2j2Rawf8q",
  "key16": "2szJhGe5jQbNb758pAWXHqJFugnmrdYoTTPcBAqX5tj85kugmxswFxVs88GMk7tKhCyKwz9pTCUscPhfEYMYWWe5",
  "key17": "37n54F2Kw8a4CosgVFcvNnQ8n71PpzrkuT4QWfyDbuxSTkA8gjuYjWeTVuRmFxXE2QnpCXoVhLSuq5ptmzoYdD7z",
  "key18": "YWHhh5fVSxSiBaeRzyjrqpisdZZsWHAf78Fc81Lj2WqvEQfsXSdy3ZNvF8GE3Kcr9sPFrw6hq3n8FKxHJEbzjQE",
  "key19": "4J8DXux3v7X3eMhyBkx4ng5NsjThkjmLCasdvACrQPSbHGa5wW5EQtXaL2UuVMaJmQ9PTUPmr9b7biQFxHZ2zxR7",
  "key20": "3d4hexwYC46z6DSqTWxAiLeCEau3mNKSHBrVsaGkP8fkTrAjZ5UkKKKmA7r6wPA99czxiiQ17T9N7g9DLP37v7nH",
  "key21": "rkKfvgeeyiy3Y6WZY6YCvzFr4qSV3qufQNZyq1GDD5ADKNCdWwmDwmmYdGDbckxeZEzfk729TK9LhyuL6TmPhB5",
  "key22": "ELBQYgUzhm5uvvyVGQmWQzVrEAjXAGH8b7uo3qH962XHkJhCPgFNpKuaBVELJc5Xcw166rkz1NoKmH35LpLRCJY",
  "key23": "3DgMUQmHWPMnFriGTgL2yeMzhTMktDsnyCrLRBCyRAds8pEVo58VV3uw8vkgcHdKSxSVMCLvEYVq14HFZHnp4VBd",
  "key24": "6oriDyNq2HVc4c7DQ8hwuDu2jdYByCKDR7shTAvXZGjd6HrKNKmoVRu7iM76XKkJTkqfsqjTaCHSNVRM5ppm27Y",
  "key25": "4U5cmJ3HwMDVjGBEDARLWYDWvE2KWnSYc4iLL73AiNL2CWN3REiCXqFpoCHNDH7Bpqo36ANgWy1Hpo3v5vVK6dQp",
  "key26": "5MAtBnzjiGr8eDQFgBjpdk2ggGKisgbDbD2HpG5HVXnzJdRmWk8hHCvU4iTGYwwsdCQegcB12zkEqYNXEvpo6v4g",
  "key27": "bHnmgLVzFHBv8YC4HUoyENcnrjPRBqHX57xr1FNm14bhXS1dVCQAvGrfh9SzUfvgGApdhGgZjbvKErRn31KupLW",
  "key28": "3jzGBWQ1uR7gkLHd3ivAQnb7Wr4UBvfwRDzGXj5LEKr92enGTdz9x12tDsMZ11zws286jZ2gaQHkHYE61R6FV9Uq",
  "key29": "2fmnojhw8pWZvSp6j4KGGtAJAHE29U4UfBTouTPdwQemxwNRPzbdZzc496gfh5CMHna7ngiiUUxvxW4UmV7E8hp1",
  "key30": "3LfXLKexfH3GSdMLxBeEgqUnFbs4EbrSUuyhTwGrZnR7fuf4L6euJEgicZASNt1t1oJz1jBBCknG3HgWyiXFCUCZ",
  "key31": "5NzuKfyi9EsM9Fjvk6DbcpepMTGafV4wYzv9n1cYHtEEpStmzCDHwj21eR4ERpZXSpqcfYWCWEAiivNX5uiZxrLe",
  "key32": "2u4mqSLvr8uVKQteDuKJeuS97ea5WbzKU2K13WLpzmTv9MLHdt4Bny98WfvYNfwYNhbKHBScUSrdTYwyc8HsPepz",
  "key33": "Sfz7kLNF3P1wwjTrBAVd4MLcsofnLeJFZwNs2DEPrsfwm811Dsyp95EcxThG54Tbnw2ejX4iTgqBaWxvANsZeaH",
  "key34": "eLy6fiVttpcMRcFtW3Mz9XBjtwHqjGx65gYntXxkKiPhg4aaDrWwXw9Se69GfjTQ31yAyn7tRjKYQ16QPBe3rqd",
  "key35": "5KqAE4hWpQMJGayhNPUdWSnorGhrNWAU2uiYPcZoSzMfA1S29RzZ2Tp4ZALfcJKiRAvRLbyh9U7imKizdStp44PM",
  "key36": "JMwsXbfeRq3P36HfpErHFCRCHjFXmtrXfWkytyKg5vzQUTpFRVFsch3FiYWpdxULiDXFQrwwdwMbT5fQpWT97Jc",
  "key37": "3g3eQvDrMJ6HKtG5HthYQ9RG99Ym9LmRjLaYLZjzE9vFKsqPiSkSi4NtzHsb162DuDuzoX14jk9qwqH5H1BCXDuZ",
  "key38": "26iJzfLdDuAf5dZPPcrN7CD2E42xUTfe3iw3vobzY9BKpQXwjJRpfBXk5oGUGheN8QM7JL8CBHQNBGy3VKR6ZYLU",
  "key39": "2M9a6aFn6CGY8bgWCZeuTt4ydvBdcvUFVSVKjZCyhrmrb3ZiXVLA4carRjqAMuzBZakxdHWWTkb99NLNHbobbcET"
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

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
    "2uQ8kHWaJzKEwLEG1jvNaJqKFGaMrkT1YAuuo21q92bcdFDJGPatPVnS5t5N5hRZFSp49gULbAwF1s8w6yw8m3b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqVmvT4FsBG9XrSK7okSpf5S7DWwH3eVa9mzRTCC7zKjrFP9uXXwntohb33yZW8STWsCXEEYg8vaf6bEMveJb3y",
  "key1": "4Hy3PnQgtG8BVqyvWfpUBsTnU5MM1SHFhLGpmWewJMJ5rHDXdkTmnrxmvKQ2ssMoDjCmS7EYuSo4CoTXtiDQabhG",
  "key2": "5ViD27tPiARVG5H2yQFuZc6Qs6HHoM7XSWaJPBGpjsWpiAkbRjKLFVUHyfbaQBJuuxG5GGApLvRcKdB7fssukMeb",
  "key3": "5FZmgvB1otzcdejprtCcd1z9VYKx2YiGkf4dX94Q5Mbp7amkZownJRhrjtH9KWq7xZGhw2AEfNqhJVn188ayAuX2",
  "key4": "543cCuhJyVzsfSDS8yJbcbRvGpDaBdymZRN6kbF36AU6Ck5mHi7DHq6QT4YpfgHoeihchwTJkwmULAVqRNc4pyS8",
  "key5": "3LDW38ZLS15XKW9q6qvdu2AgectHurco9CHdQVrQ1RpwjYhJy2swuipYW7GEo3Wru72bgTrXCKCuhe8uEW8Yviqe",
  "key6": "5qZCoXK6E76RC4UfFn3HAphL1kU6R1BKxWePMXfzg9BUPDAdxjsTCetugTmDWDGNGLNdYu5zZ4tcHV31EkQ7A1yx",
  "key7": "5Ly1sPpprMr5NfiZVNqsU1ePkacpkZsdb6iDbRVcPvQowRQEKhNzQGiCjRdM87CNxGzhzNhD4ADMJ4GxD3HcCW1u",
  "key8": "2SfUwqwtbApazkV7YcNcrChESdyGDGX3CLAtFhhnZBb7FFZHFpMSh3BsLqKmrB9DrYrPWBpFzpgsqQqhdXbsboqQ",
  "key9": "3CLtX38W3bKBmgdtGCHqsZGJFTM4nMd1v9fHYuyz1LoA5zVTmnLQEsBsAkKyDy7d8gUnZw71n8yJCTji6FZ4kBXZ",
  "key10": "2mKoisMANAfB3vJE3gt6d9gty1vJKjCXiFEC9JvdEiXKRwN6gbnLPxsJtajqQaqsfz7FniBEQAuuJ1pQXtTXzEWN",
  "key11": "5a6agVH3vQxRczgpXXRaFEY89V8XcC9SW8K9qwpCURQSEMFKdjq4y9PqkJcaZ9zuQhr6D7saa6y9FbNio1VEgiss",
  "key12": "324sDbxgMjBExcTtWz8RYHYaNiWnRojGHcx8ZaSkVYRUrwH2JZV13eBdAF6vmwij2iWMeDtTWidNmmVRrBxzpbSL",
  "key13": "27NqBDv4pNTVGsYTZnvC2umAVVP3pwciGDCoaspzsGq2cZWjSxjj3nqaAYjWyC3LcisfaUJBHZuvyFk4UA6PEtGv",
  "key14": "56YM1TP2t3tsRjJ7i7p2K7JiZHsMRj7gbn7NMJ3RE65TKwMNYKmeug7vrMH3K6HeUseBUad61m7MdXZdiCWmW1xd",
  "key15": "2EQiiz2Zn8W1giRWnYTeGumoP6dy584BiXEKKHpts6Lsptv9cBM3vwFzs7sk4dNjqr4sFwmrqmcFKZJXiRG1JrsB",
  "key16": "osxR2hfaf8p5Hfssyc5LDzGFM467tVCnsibVv1ppBUKvjpvpmfniCaJNUvopUieEVemmHonVqgLiFHQ4YdBrjBv",
  "key17": "65WyXT43bhnePYty7mG3jAA8ZFYnN2Nf6t2oGePvhfr9WKyJttoE5RoPFwbeywVjD2TFG7fHHDAPkit9TiSV3kmp",
  "key18": "3scnFaLy3thGMgaAiSw4vBHAaBJwdq9gZG1rz2NPw4pxYLZ7DVcXCBKZBh9oDdHNJEgkf2dCiJDfFoJE7e7VaTy",
  "key19": "28AiHxFtaTk1Mw2VgUgNZP2y4R9LHdcY1nH28Vydc2PRoFCRGqhXHpm6Z1HfKAJyKbVQQ3yxvMC1UbiedUMkqZgq",
  "key20": "5manD57j2JkNVbQBgcpQQncQwbXuxzWhoBYZruSnMDGGKAmwTJuEsPjLeG1gkNkaVG9yEx1ihu4JUF48A8kdAvfy",
  "key21": "4pshdeN7eHSXvEryKphXTTAWhE5e7TnZVEyimLEwd7fEKtmPxjvXVELqzeYvNvucadvLLS7CZ3npu9vv68CzhmkN",
  "key22": "55R73JPrR7pK24NQYZyZtTKADamYPW1A22qRe4DSGPfB5CT8wxg7eo5PF4ZsimY89cEFTveUsfMwfbCKuDjstDcg",
  "key23": "yxLYpbp1xFTnexWYsavn4Scszrc6ddD4NYfE1x9872CwisFGrUL4PbPuGAgQhnjqAc3ZPsFSyzqYA2e7xsH3YA6",
  "key24": "x2c8n7cfLym3LDryAYpA8it2q16ynkqYKVFaP9xNoNFX69bQTLyDDbTJ65gjX6vsmsQpWbBaHsnZw9qU8RCGWN9",
  "key25": "2FosgTBQaMq6wL8BSrengWV7Sv6n2bCjeYxqTZR7aCJekYRgWCE5pKzV5zRXTYbMQJ9WTrWKSgDwLxcow1WktF5t",
  "key26": "RX5z7qQV1E5tphWci3eqsmJUpeaLGS1F7czqnBQ8XwDDsU1F4cqkG7SoZHX6DNjcUvQWvoT3ivDYfBxXcNdirzr",
  "key27": "3phzbdDtDArAwhB9rzfF7mNJ86QVJmoBTPEntykmG8ZsNjF4zMHJTvJSuxE3HXF359BaDwBd6YNfgC3AuHVK7gMm",
  "key28": "33r8rjMcahBQ43qArjkYhRUSXvMVwppmoD2fM2NBYnk63Yh1fX8f4wP3g6Kr2C62fKRhLnuD4JCmGQ3HJuiYr5Fa",
  "key29": "5T1HRx778rzDXxsnuD2fAPZavMxfP1SiAtdi7umU8mhEtWhujLnGU7hnYknMpbCEcSzNwTxPTVhMoVjAxd7JHHsD",
  "key30": "5y746Bt8afgtpVdi1T7onZHcZSdUvqVpr5GSTsoybZyM5zhncrGBvKqX864LAqGYpuCRAULpEbemt3PKHkosqnKX",
  "key31": "2RqnKED6P4J2fGMYWRMZUzZt18GMT4bik66D1jJKrJBgSgtY3LtVZ8y5dPbNaRjcfcBk4381kzagEBJ8EMnc8vNz",
  "key32": "P8kbX6iS7aUpyT9zrus5QSCMLnm3YC1TxN7eJUF9Eg5GUJ2Q49uk99SADDWchbnKdeTut13P1ioG8M7gdo2DQ1C",
  "key33": "4DqjR7D4gJnB5sKCGazw5NpW7baarJxdAAtoUVxoLWMcg7A9iK4HXALArCX95tDcrHw2xR17v5jCQEg7dHhT4Ghv",
  "key34": "5SUR34bJHvNSZ3tENFmdhoJy7RHhnw18YanxrjVrGabcBesqrbEHaKXptkj6Mp6LombVdXRhs4msdCogKdQjHEzC",
  "key35": "3C8p2YARBr5JAVon4A6wXqVeJMaiQHfkrm5wZrrzFXjmUCprPPiq6noqTdvjhUc12tN6aa1qWCjiCvULx2tKDhyy",
  "key36": "51wjHit1JcVEwWJegcnTcg4aWBAVUyq6vgxJ7FovnTHnT8rPzm6UyWY2SLdfDXB5nZ6My3TBXZRcNhKf2kDNML93",
  "key37": "5bfiF5kuA1DwsiyKsdx24EvBbLfgP5ivBrUhistvBs7YcCvHcUkieMwYSTB8UEthSydbSbGpnMdJRT5imZSpyTc3",
  "key38": "4G4otCqzWPGivUzQMkV2BsKir3s77CYbm1XjVvrMjUrSgCkRG7znjYwFBsKr5kFyRzEyDkKNHqEpp7rR2H6TeFVk",
  "key39": "5kakesst4n2fLWhWFK8ybAa4LUQGm8CNjv6mWE2dtxs2nYY3d38bVT2X6ErXZA8x47YaTUzNvzCbSPDvEk2y3pey",
  "key40": "2qorvpnVFvZQTBoq3ds2zym6s7imCSiS7U5c1QB8gMpowoe45i9QAaYHSA93WDHbHzgZts21t5xGyjfUJ2n4xw8S",
  "key41": "5XS38THpxkucwE2kRkHxP9aT3xkVmWA15cURLX9ke3SZyYe8pmBJPSX7vhPzbfCuSDRLH7hkq7PHJB5u9fMLr7uk",
  "key42": "5Mqb5cCDeGrooh3bqj7FJVphkYT32kKEak4f7EdCZMDaQnVJcSDpVhKPprQirZCmBRaFo2eZVLQG9TGFPJSb6458",
  "key43": "4pa4fkprV9G5cTbcWpksz32WAvp251FbWFNDsxdzfvZiXq4aZbqn2JiUbGUrZu26Rk2FNhXc5EWVuz8M45yn66DK",
  "key44": "3EB8grGGC4r1QAZ4aLPgYXTubRv91X1U9mizvnnJmY4ne6PBrd7s3cNX7BeJ2x3iPbSgbwn7fYhXCSwSkFyaKW21",
  "key45": "4J9zG2Q4qcfW8GZ7ZBSb2G2AuHiLcrncRmesxFhfg2nSjRgKKgwoa7tmLVr7ypx3pmkt5qDPCmjTF1kSd7Nj3NrF",
  "key46": "BU4xnBStKmbKKKg99ZDieGm1udon9RsUuiPHXvQteCfhoEaY4wVxN2PkCtB2sj8ifyd6wgnw292RFKRYeBJPamU",
  "key47": "3yscJh416U2KiuPzuvsXsDMGH6b3TZa4yB47wJbyaVS2AcVCCE55i6YAcaNgce5GBbCynohFboXRDkJduumUzeCG",
  "key48": "gUrXAfEAR7esTzepUhhC9LdDsmvbsZocNrV8awaJwpyKUH59ERBm92EK2NjqD8rdqxjD5ptfQ3GARSVgPzZ15UA"
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

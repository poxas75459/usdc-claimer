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
    "2Dt9ryVL4kmEo2z9hJLGqZhFZzxg7rwzBvjiCCTdqs5mmCQjSjxN787pWNMZ9NGT5vM3HEP5YPyc1apsPKDX2nSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kAWpTTAAtmbv96Lea6GDifC9ND1sgTZjBBFanvBGSytjuvY1TREcVAEbosJoBVt626821sKiKYjTV7o2RfjrMjN",
  "key1": "4oBigyYUMk6ptzy8sbx9kGtBBqsy7tKGmkmhiw6fgZKV3qt7mPFLZHbnsg2aHkKdybJ8u1XvRgV8ccdWCLGPEpvz",
  "key2": "3j77WtGWZdwpPV3XcSYh8teVsirtY47L2VidUg475JqL5qHrLGvC7RqVd4WV3qkwi3Sm2LHmrAMzriYGtpkCC8Jb",
  "key3": "jAtCGiVKvrYMpWKiQ2mNePAGjQ4mts1WQ9hBgg8REuF5mzR7nhKmtKui2DWgnez1ZgPgPNNb1yuXN2bcPNQw6jG",
  "key4": "5EdM6d6yYhLTN2rEDzdh5Lb8Hkoo9snu4gTQRBQmJHw3T27dFtiEn9MLV4YxzSLyEdP4eHnZg9fGcysuTS5o4BdC",
  "key5": "2mWiVRo2CEc4h2Et449NWEZW2AjZ9Sr8sGp3FzfLpNStHv9UTXtPYxfuNpSWT44wyZeAEUDqibiVcDZ81GCrcFTF",
  "key6": "5T1UEkd2HKk5U2Eh1xwaT29GHVhWHHiLLuvyoVjP8hdH49h2n72amUPhRS34Rjto7xyeoCCSrNLL4LvgTj7eXrhg",
  "key7": "4EhxQceVbS5T82BkRHcm4yqpsEq6TTiwjhhBWrPRxVDN6E1eKpbgZWHP991ynoU6rz4C66GUeQK6mJETmoN9g7G1",
  "key8": "45cbEKMDfbnqfu8b2drWgvpDbWwztXvnKr85jVZKnCs1XdFdnDquZ9ovihwYqxbi67SX5eT6mZ5HBwQNZJJ4tuK7",
  "key9": "axZKtDuKtDY9otNYZLJqabiSwbs46DMK87FfvGxsnbrQiChqgQTdHSRgeP8gzxdcHZQwhjF3Uha8vPyD2113Utq",
  "key10": "3yfqtkoZ6CSCA626YRQGtG9xqUkowutEFQuEHRybU1kF55ayWvXoc47DZKnGjSigES3E2FouDzXAxw2ukmXv98VP",
  "key11": "2yNzCvvfVpxVGrai4r1Njk4R8jRGyGJa3Ho3vCwN8cUWXrT4zYBjkCdxcwzvrGa5W4WkC7NXgaBPu7r6kCfB9iVy",
  "key12": "4zcs8hmMwyXpfxN4JJsHV7ngRkdYTJpwXD9atv62Y62VRX7oynJAjm6uM4mbr4pcXCsV7X4xUTr4xryc6SrTgUWN",
  "key13": "2o8FTukQN9xJa1s4hGHUQrHAZYoJRciMJxECLf1AxGwawgFyXVT3acNQzGsvQDCGLbvsAPaaq8f6Y7Anj5JSNDxT",
  "key14": "4r36r43Nu1uNJcXp8CEwk5ib4cHF544wMWJMFk6FTmeYQgDpqTd9H9BF91Hi1hzZ9WTG4XmGN2Yeh2MVMzdzTUjG",
  "key15": "5yhReceby17yepaYs6f7FLJYn8kbh6NcwXLbiKsimH4sZSVcSSWVCVY3DngcJAdwszyiFHXjK8FjxCgExBcbAUns",
  "key16": "638oRkbyzn7LY46LFFb5KgoXJskUAbUaUYs9Hs5coQYKCL6wSKy8zkDXkbN38rcdHSCWn9rHKCzuFbE71W4JAPqC",
  "key17": "2ctQtjh1DP1G3NNFqaSAaT9jU6M4mMr2z1e7u2C7wta7ZGRpF2oRN8zDhpR6GJa73qkBDkiG3bWRQJq1cP1PGxTz",
  "key18": "5UKn1hNoa9LSZvpSFQj6eL4F6pemb6ZChQs1vdQk3NwkEdPpedxp3MH47H28PvBN2tnpX8Wr4PEYeqpv3pnjhASg",
  "key19": "4QGXXFkoESjd4jssMuAxR8R8auc1DCA9D1MfPdbFHnafGFcr2a7jCGPFv2MhQ6d8icPocMQFSExKNtG3ibW6XmUe",
  "key20": "haffYH79PFsSEai2EM7MEu83VwiuyjQuQwUnHseMrDMKxrRH1YyVbCvsWhCCavowMB7npiKwDjf3GtV3UNDi5jV",
  "key21": "3hXx6ckctLeEC5PNh4nt9wAcbJd4hAx6oijC28xanazco7JHdjU15h42XU7h5uJ8m9PxMVgqm6xsnXiUsSFUCGNm",
  "key22": "DUViNitoqsjmrpuGrCDYcRZXbt6LkqYMU5Af7jrcfZsyojoJeR9FahxCLcrjWedkHZYrxJmNFj6JVFubucYynsC",
  "key23": "4UTu24128CbvjkrAkj88vtmGvEMNedJ8Nci3Kq9qsDSSJdmPWDofnVQggFQKNuTQCdGKgk6hfh2F4cxwtLwLSqN8",
  "key24": "239rTdUZgSWGAg6MqJSUi54ScbwRTyD3Yj4mnwdDxYuBiY96yYedPfmEpy9UkofFPkSua1gjsGWyCEusWH5f14Nd",
  "key25": "48DjWykN9s6qt42wwsUW9LyE4eeqiGQpVov2piduZidtAzUr2UQC2ZNFT75d37dv7Kf7uLX4diDCvAJP9589MQaB",
  "key26": "3DS6V7vJeZgXwdwwNQtpsr2bhkWJXMNSGEnrJwQ9CpSmG98SjtF1N6nWM1WH5T38wfDCME9boqyHbE5ML6qBqm5e",
  "key27": "3yF73xBTj5jqrqgvAYNvtcdoVZ5vVjiipQxxfJuvqkaxkQNYMP6qGZSFmuGk4nz4JeJmS1esh5BhXx68NJVnLLMA",
  "key28": "2CaTnZ3UTiBLWixcdMJqaJkNDu7BB5PQ3udyw79LefhRqrV75ExQeRbwEzTh85LRvDv8cegxDYGTUtaRzFywDdna",
  "key29": "3TuXbAn9EiUHpUBgGvaF5qocdsg5Gy3YDc6dkA7hYRL3vybTxSfxQLa8bqPmg3UsgE7tjYd7jvgvkE77MrjZcSWj",
  "key30": "4AKg4ACbKoxR3vAQEXQ4fL2R3P2qaeZCJfCMpRGQS2EGnrBCng58uhMW8Z3PCXcgdHv8fYLyQbfKayvAujMX74jJ",
  "key31": "36EobCx4EvMwmCgpetVtutL3TeQsZPsRWqeMFJCUXYd7yQrV2MyCpCZRhovvyrx3aBLjHyj2C4puQz8Lpfw39sWs",
  "key32": "xd9gcC4fwLrPjWFSyhXxQHGxuUjtHhZP2aAF4ha7ucSN5oVQMRaY5R9eLWt6tKyPy6jrueJocwsExAjpiGBv69X",
  "key33": "2Sx3xU8t8eKZ8AcyJxiMvdtkcJx7SHLrVai1BM6dPy63LtbFybrucxkL4RrmFGWWkxY7PYkEDxWAkN568UdaiLeW",
  "key34": "kyHPt6WmPyw29aVpwMZVw1YNDQCjQsnSb1cuQ7XqsnnhBRnNqdJh1ZLaUG6bj6eYRg2L1jsYXYMzQDWNtuVEVXu",
  "key35": "Smg4mkczwPr9oWmaDgegm6BK5w7mcQNJsvBsDyNVXtdvGmtJPyvQ5PSHotcQjHhatW1BDQYbHRKqcLwkrBzEx4A",
  "key36": "5zRiWC6fKZjkSbNn2BtfukXvQ7u7oaEgKEVmTkxXp33yQvBu77eF3cWSL8s9uJFnR1GUr9wCAvfnVS5nbPgPLbDe",
  "key37": "jfCZqYxkwLpjUhXfvi6oinQBpZjHofspPcy5t6R1X7F12kwr29o8JUyWLSPhM2RafJsePEuBckdwNQgCGEkpcGe",
  "key38": "2dsC7eHT4mgSATG26RP1i2JP4VonN5pAgZzXuWBVCmDTy2xZEuozjTcAsrLUpS5dyUhtSn8w34xePGKCY3xDoXHg",
  "key39": "51ki6wWFYuwUEh6YZ1nvV1mXeTmeJ2KjD8PHqP5eWA2TyzfrJ93wWvjG2Cn6HzjgQ9xmXc7m87CqzyaZWD8FtBE8",
  "key40": "2VC6pRsMkEf9ev4Y52Vy3CbUNJ8A6gcni2yBmrnDvaCNv24PtdCcvH3nFSF8Sh8MEpLpRDv5khDBLRipiRZhQG8r",
  "key41": "2UQt25cj43d5Jjn8fLpsEx4TDGg6fXAGzqiSC8VR9q3WYHRKJHWyM6pVbwc1ND9zjkzdhfK36BPiY64WfVNWtX68",
  "key42": "2NtBgk9pJcnLyEv3j4Q7KTjCwC7r9DtMtwJ93mwfX5qPJLb3iVccsZD7kx3E6KamuALqnqxQE67BFtowKeZE3GcJ",
  "key43": "zDokpXqANwUWtGNTpa9Rp4ZSKt23DEstQAGbUzqu6YZjohTnANQiUyQi3GcSHh7wWt26vwx3KL6sBpyhqeVEYZ7",
  "key44": "26G3CAC1w47wx1FwzYybikxEKV6qDA4ov7LakuPgybKuvyEzqwqRgWUUCmNXAWpozcXJHnxzk8TVMFPWQ6LpNb7M",
  "key45": "3LMYJeBsLVjEUjkZnovQew2bLjwTbjeJhUuPY2eBhDd7bGkcVVyYRmbZka1wv4xWG5mP1Pe6jnJ6S7ShyeqM9yuz",
  "key46": "hdPQNGdbGdLPkJGkmp1vu1XxhvKDc9o6zH4xFQQ7c6e5dxZ55hEcsZqhQo3YnjQL5gJHvxkn4o3R7LCqXNNqH7X",
  "key47": "5kZkykxVopWr7Y5zAFD3VYp5Dd8DuEGWMD48pJBYPSBss7DEFiCwjhvuXCELiEA4mXs1QxeH9R4FbHNCPrw6mHSi"
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

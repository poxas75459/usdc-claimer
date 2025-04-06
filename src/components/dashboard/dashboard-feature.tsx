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
    "JxuyFG5c5FgZDMHfZmHRyMyKkD5MNb1WNNitZBoKPhxUqE5mSabKFwihwRtmVyVpKgc67HHNqdk8PqWUeMKXJHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaABeefQRFPJ23gPbXqU3kSfMLWU3r4qdJhkoZreWk8CkXnMSZTMKJJ54bQYRVbu7U6XWr8oHewcGQJxyiwzPLa",
  "key1": "2f4Lig4oisYp6QkCng78pBqrdr2oxh85Z7rZpSVxLpYuteNfrWjkxhjNFN2b8b5xcGkKzBmdJqfPNGGDzbcqLHfA",
  "key2": "3BpEyo4qjQsZJVTvNejiM5Y78EPAeXpiz2GjY3p4R6r2KyMT9WK2Fdm9n7iGuNWnJBrKd1ned4ipmGAFC4pZxs5Q",
  "key3": "2m2QscnnQGNcroaNuCfd3wVa9RQcFBbcMdSH63VTrWEDgd9WtZY1qNQvJTRSny3h4SnVECSFUZgzYZdeEcu9wLfA",
  "key4": "3wtm6xuofCDMp1diFtk6hM1mvCx3CtzFrcwUXZqJxxRb8bsDMU5iyx924e2hzMt4g16h8GkqmjNMZC5EJoVYdqX8",
  "key5": "2SaVkz6Lsjx3eJqpM9EhydofeYuV53WZJNfhF1ynzUDEh8VCABvHZpc66DgcWJkxayigS7yg3ZggETu5FmwbjkNA",
  "key6": "3vDhQcTbVsYkUneMtJ28HeDpb4PPp9oHnV4Y1rw3Y9vPmhNFEzWeTp57kN6pige73Unx4b7qBKKocxyzQveMzXXb",
  "key7": "4yX3iLfgDxet6qmhqNE3eLE6y8Wg2HHsJULet1SYzdzRr7DX3QhTTjQnfJzUdQPfVofcmVKGFv6nK19FMVjaN8k6",
  "key8": "qAxjvH6fHNgzmXKq1e6MF8Nb9i8f64mJbynezQ33bexMDTQSPZm456UVuSNZVJuZ87qkrAJGNGG3ufUxX2i7PkJ",
  "key9": "2kZT46YqSRhr9DiFxTenVmAR9GWPW4UPp9v41Tc86k9XeptWMCGS36x3pUqtCUSVBnp9RsCQcq4PW57gWAaiXLJ9",
  "key10": "qiLDCJcDJaTq8esJ4FuwmWa8Fvf59DfTjhsEjAVe1zhoqApVB11iR71YR2DktqxKH6eMRMhXpimGtgpdXbKPLTQ",
  "key11": "4vJEdcCWTbi16rTzkhxtBYWGn7dZ8yEmnjHQfid6XhaZDpK76bPkPfozzL8rJP4LsQwHCZi8QYyLYGWoCB3khz2d",
  "key12": "65wFGrZzVYyPbsmCBihCeDnN8hVDiDrFRbj1nv1rYtgspTm3FLmkbh5B1kjydjaC9ZU1FRyRtBSJQHC2MeVyGvtZ",
  "key13": "wcf4TvJVVeWpc5MDaRDbb6ugwHX8co1YvYrJBJuYm6iBXE2DTnmwZ5zqui4HtsN9zCPkGRhxgHz26ATrkZez7Jm",
  "key14": "35HGxvcNstHU4KXPQJPGGwJhTgum5hWys4zLsUDgn6z56TPzFCEBXNLKzxqwLcjKBd9aUXxtr6jzYnfWL6KWdrHE",
  "key15": "36GghZ1yfnonPeG6XtnKhA18foLLyd3aZy7xPDr5FAEWrzRqYvzo77yQBzUR2Vf78iTP5KgHnRjyagwBHdnF8Se3",
  "key16": "3k1cSW5A4PByKGcmrUTS42qEw6QR8pmeLtm5RBFq9vtv5J6uKQpdNqMeQ5XLwMiLUcC4jDbs2fRsLqeMpCZaJdsL",
  "key17": "5X2Xdnbakn59LyRzjffnm6Z4KSbxqV494Q7K4u58xLCEJK7BjzkY27s3p7hagfRCEdD8SMN2KrNzuzt5T8rsrK4G",
  "key18": "4BMhHZ9C8EJXef5XD427r73TCVD71ndke7LgXQ7M9LM7xrLXMUq4EqLngc6KMSW7QoptVYsvupH5wGbW6w36RhGy",
  "key19": "3JyQoBFg8etWWyGQ4FykGHR51c8njD3PNVKfjAhuV1dAeNmfWA8Z2CrfKUxTgqeGULtfokWXyrx2gMcJG6J2kWzN",
  "key20": "xizPGceor2zLce8xw2n4tbUyzejqnBvhbCmDDhWzPMZ962TDLSwtJpyDhdaNYiUnGcSVvmraKW3jSXwdCudiYPD",
  "key21": "5XLazXsPQaHG2RPycLtiG1HKfzwziqsxXT75YeFmELFzKMgdAj9ggmvbmRjxYxSFUN2c3Cky1RHGv8FCyEtRKpa9",
  "key22": "5oSbvpD6AKa3whS1JWh81h9vFoF11YDjfJavdwJLJgAY2WdBw592weajvBYjLSanYPssNyj7hhBGpuxVVMdUdMhZ",
  "key23": "5rKNzQ4Syqebm6RBS9kRR6wPi15QCGpkv4wa2FxDuLYhAUQEcWCR7LHDhdLHrPtSX7dvbe9JhUrBxmCkWHDGBuBR",
  "key24": "5BWSn53atGZTXBKoH92EwosRUbJJuBnfuvvmCkantdSFxMkbFyNjgPuPFCE9o5yWKPLdSUT4qvYEKytsyLNBx4XR",
  "key25": "nP8NR5d3i6yBULPGHhHgU1F6CbsdaqbmNRCTjCyKakQJ2gP59f48kayVhBDyeh4ZuWQpnYNDYou5y2X5hKKwqZS",
  "key26": "1k9SV5xYP1QsJccJyGvhpR4zhHeV2ooPQx5LBHixi8wRUC181tx7XzY7BQQ4dCgAbSpgdXRbTKUmXB9rR5JTVV3",
  "key27": "4bZiRHCvP8Z61V7XTMJntYKeNMkGG3kAdCjqAtfddEDf8Cyhwpbb1h5F9F9gzbjAx9TwySbCNyXvAjroRcRYTceT",
  "key28": "2a9uUDERarCnx1KJ7gibEPkAVWcenXEhg1ke7ahSU5csrA7QD5yFyST4zBhtuKGuQsQGoPDQVtTjhT6wAFFpY2aN",
  "key29": "ucaD94ZddyPdf2D7S3JLxxG7MCK2pmw9yT86FPg9DxQsY6cpjQnyCHipTzqeDHDMfvMdnmj5gPtEAoypnAZPD9P",
  "key30": "5aKMAvgVGrxXFkx6h2xBihwKL6NcgHicXZurbiM5mei3CeEPXKeXLYVfQkZXGrw7zNv9HX376futfEBXQ9F5Q4KE",
  "key31": "2rUwnTQJTVECnaGS9T6CjcerHeUokzy5xp6m6SMmCSGHSbBu5ARwCx87fMXYSatcqxMMzH1u1DTFrMpeFY8zi4LG",
  "key32": "5Sfug92KKSxaRKT1n1G5Q2aeHy7jZ1nPHgAYJfLNdSQbaaCXUGb31twXWVrMvCL4bWjH2jYTqiN6boVtXvoJZVvK",
  "key33": "368JVp6UPXya1wqPnP6ZgNab1kGfDLhoyAHewHpJwAWVMFgm6cMLciVvLaxbe7wxJbxyiZMrcq3M9QPDV7zFdFic",
  "key34": "5afd9vttv1Q5Fr3gN9wXLCju21brk4jZsWSoi3fNCawwZ9G9KvY5a3pXem77wZH24XzBhbDYcdG5pf4kzV1AxT38",
  "key35": "4g8zjJVGijN4rbqmUyvSRK8opZXXWzbxwFU1d9df1Ru9Dy3FZM3N3NY9hDTdWCiWSf2Geoif1o8ChAS6UeGPBG63",
  "key36": "SW3SMccU4LcRtqpAqFhk1VGm22b8NGJgiiauT6h9vkwZT7yajJ9AS6k2EKGasv7LfVHjoYKPzRYRJohoYpPjVS3",
  "key37": "54xB5zNNcL12FfXGCvrrbTn7NMhy4R3aLhmLCZm4PjjwNmNzvmoGqnyfWa7J8SUfYsu3pgmH6uKw8Tqshxv2ScLD",
  "key38": "NiCcecWGNtnL1FLbbfUJfSUE15f2g85XkHQ8KmUPvzHMoqk1wutKvHHTmYPzLuTqy5zBQZUy5DpwcrpiNLRxHMY",
  "key39": "656Mrc6rpt89NyMzz1JX58q7V8Sgttwvz2ox1KiB1dQswFHzPbYqDqWEfWzZNimXnEdXgDJ4KCafiqdcQDQSPLhB",
  "key40": "5dE9PRo5kS6koRioRN3FqCUwfvHH4HCMHZCaoA1dcLrWtSwcWXtCCbbqSprL22pb2c3221pAYaomqpATJaWqig9T",
  "key41": "eZGBqTMBwfbdzQnuVnWJNrNnWAYiQCBL3kXpsxYwUzekmD6rrAfMwEgLYHBYNsEd8WKFCLoNyreNiL5SU55eJhj",
  "key42": "5DLXMCNxVdSbbxUogbwiiWJ1Sa83QxUbXMjiP4q73r5jTrhnBmUtc3SF427waPEWFZnjmS2udgkh7wJ3LEyZWAK7",
  "key43": "XcobyuAC3oZLAV6bGZhkAkfmqtNzJK2wtMynsKB5D7r6ak153PbFzgUTZtpGJ2XydhRjJcDigxZ55QtUnX77i94",
  "key44": "66VD4T9cc9sjQVfuzPC3g8YnotL7nYstAzqwL28fyFdJYYcsrdwPSb1RHfLPQu6SjZnvFdvMnqgBELcDbp55FYaM"
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

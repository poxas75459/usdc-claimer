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
    "2ha72UdBp7vzjhECxpDFpc3egytkRbhoT8ahadfvgHxcfrUynnw1EWfWZHhhBUcELWanSoqiTVMEyn1hLjQthNGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ynZMfrz3RJff4jPEmWd1CEUkxWx6jYEsxCVjTsti5JjxfDPnEseGz7QXixpLGH8wtcKdZUyzoEkvsS5hcP3ZLDh",
  "key1": "bz53uvfz1ajcFFdLFcJZfVenJFBmHoCH4doFcbDfxWms71N2KJv8VKw68vsdpV7HDgL5rMSy9tj3rav7DJrgowb",
  "key2": "22VLNwkZ8CGaYozSvZKKcHTZ5wSacRXvyfzjJqSEf655zmDcJL3xAiQNrthKbzaXVUexHcGYNDGkKZgjFdDc6uzY",
  "key3": "5RtPoTEDtmDnurDsTBoGNpgqVJcnk9j4DJTXoDujcfGtkdGQANMo9x6ShjWfWMgP4qJyGF2vzkVmrWQuoWCYdaA7",
  "key4": "2j3CgwhwEs12Zsgx3VQH2BXt7aVo2j3EBov45X7gWFU4zSxpyiJTxXQ9U5WdkR6ieARwVfT8VsGp75b9SpJXd89P",
  "key5": "35Z5DojysgWMXX4YUKUjkc9yywtawU7Ka9fRt6aAVoASFA3dzsRYzYVecTZq8kLpmHKFMDFnWmwpKPEHi6HKdsjm",
  "key6": "58DfGxzbVRZCkyGtZTL48STcvdDcNuCroNf8PGXExXJN2RRB768Hm4YzBcKiDywDZx3t9xcbMqgRZ39M93tgtFrc",
  "key7": "4mPTXzeDXz1YyMiTBqjW3ynTMo2bo84ecu3MGcD3Q2KrKNZQ4wjgt2ithBhGDgbY3LE1QvYfvjspVygZUZTY3fQt",
  "key8": "5GgevXc6ZQ1AVEixQr8dLFknthS4kgf9c4kbjzsPPgc1E8mQcyS37o48y1KQFV1tAqRamhwani84UvLasx8mpGS7",
  "key9": "4eeuguhsC7SF4tJke2NstYa3Hz6c22PFCWJmPEhC7sHnqah23zckMwASC1kGWzazANoPZaEV1szcnq4iMdeVjQ6U",
  "key10": "5y8zVkVfywoPvMpWF1Qd3qwRoPWzc5vuFpqUixH9xAMuj5UFZDVLr8ymQRahYCgmYPGCMj8J23jQAkTHhMjv7wo9",
  "key11": "2vxByf6BiFUyYbdwNfT6mo5E5NDgjxtBnF5y1VDegUoD7og3ygorjr1mfdkVNQynYFzTsLgpxeVhHs3ea5qBVNW2",
  "key12": "xypn6Zm7kx8KFGtWYmN3UWMhMcKDGAjPHzGhxAuiFSmUuLiZqQRFRSSnDdoCk6wr7bpBS16munw9nbqvcXgvuHc",
  "key13": "dpyQP34yWKno5n7rkfLeV2FMoDP1MajsaEKUMbgxNTNBiQReMdMEbSDuKvJ7b3HYbhLSYNtf8XEGpoGQE2suD5a",
  "key14": "3DMz8eaVhJ4iLokhz3BdDv8mDTnbXFJzuRkJ5QyRwdTmdP8qV2BE9dEmJ1Y7ZdguXm6Hnhz9rrEAmLc3sYv5Y2w8",
  "key15": "5Q3G2JUydcmE87cHX7vmFQWVkEDVM3u9PHmK1RtZKPueUTL9eJMwTB95SVPkqeGG8hVFHMY8SV44KAegqp6vUz9n",
  "key16": "31smk5wcpr8v85sF1bYoLnGYM1jkbJ5is4h5FL7fh6ScVXtnr64trsTCqoYoU995fHmHoobwJshaMGfoTLkDPxhY",
  "key17": "4XibEWyUz23FRzWnvWhrvtbdME8yKKaBVkDAFX2V3geP3MT7FZpGwrAH3LJkJnNfsk5BMKn89UEAW2jNcWLSTppN",
  "key18": "2LUjfJdSjBNRhfGWNfy9tVdMSDu5CnpmJRpBSEA3bVCt2DV8n3nudGrLZcrJcH2tg3cyVbLXVpWFw4Gy1E9uBJae",
  "key19": "bgmNxD2wrfNbvLoK4ALiCdmLV2FwQDPFAeRGojUAV4i3mUKubEtsa9T2MyPEgX8jP8nrMEfB12gzqczDMno3AfL",
  "key20": "4CCh1S87WAh9VrRzQSKkmWim6neKzXYVexNwXYkeZBtNxcZGEhsfW9CKQeLoXT4XFRtV6kk4e4PgiU61qoNYHEpo",
  "key21": "33g7ESy9PSha5a3RGUmbn8pKiWAtMNbdtYXcz8AzzPYKwRfDWVDpnK6QrRKqWjFj3EnSr12qLrEmVuZax1UYWKPr",
  "key22": "JzwUyWuRhLKvvbsHSzPWeV7FKgD8N8KP3TDcisMB6WpT3HjVvx7yXsbAd77TBZRnPnjcDKAUsLokLPh188xVPSB",
  "key23": "36i2PwPbdHPQbkQBugnS4dMBaMEehyo2T1UiLUQCReG2z6BYrCVnuxCWsi7g1A92UApFXmwKZEt4MmN6rNd6EcfF",
  "key24": "5GARDX3iRSSgpocuSuRRyHg3jdjG3ZncHXPeEB7mk19fyVy6558o2CUpGD9uobwymmTMYEo27xEFo5xWU9DKdzYs",
  "key25": "TZXa1sR8LQxy4JPczWvNL4Md9qhyVWUnGLQkZVzCrNcTnM7mtXM1BuRv8wdSvfjNheDdvUpMoaHUbaeFiLxqLng",
  "key26": "4Sst6d779ohqEqZ5MtNkkS9LmMX5T1KWPKaAJcD9FRPzqcp9DD29RXgJDaVdubwjebRVWRSSdBkyXW894uExatys",
  "key27": "5uoXsauBKK6mWSDLJEu9vEs2HnkHoB8PcFcEEA8gbFEyA8CSFVrJMWUq9Y2n7Rznqvko5XbDjMBNoQpminAAqSFN",
  "key28": "4SsXKfx1ywwsf5FmRUdoZotVLYmZgV9VpjuKE9QAmyDgidVmaRfLWXQhBbV8kYMsLwndEW1E2pTmGqDyYQVBhhD9",
  "key29": "r3Pb2anH4jMwe8B5rcj1nDxGJoNRu71QCrujbFy4fYtdSxv9eHt8yTg1NDprn5riSXBBMEiPrBTPnwLgyhLnm3C",
  "key30": "5MWZEK1P9J8fHjjfb57zyMo7rPmJkr61qDpcaeJvCSZTSjsCga7wD5VvvWtG8kQJmersupBvqh91mxVwrgNdrmtC",
  "key31": "564R5XpBnQH96XDt6EDJdojJ2UpTHNVoS1ctw6jtev4wSGsrRhQSw5UredhkJzdNrwPFnC8Gk5ncAkZLqNMypSir",
  "key32": "zPvkf71yXxg9pJtFegLcMAZ32AAxMgBjFVq1wZg6GKQQKXZYdNMvA7nihco7yxka5FmbjBMFWSYoGe3bAmxRQuE",
  "key33": "3D3DLgyh3An5aRMyQbd557q7NES4mF3AsAEyE638KWMeJQPDvwTLqMPqE5n2Dk7KkXSc2ZwiKpL7YZpF1NoHmwhU",
  "key34": "5MHv4weTyeHFaiYcSRE2QU3qsDJXHGutFvUqiWC5urSxLceJ9PVCb1Zy8goJorE5xL9jLCVezX82aqjJkBq7KxXf",
  "key35": "2qdEpF6L932CFetYGa3jAfa1r8YowqbnkumZ22DqifrZvtDv44WtCxhEwwczxmrTwwnDdKmvUMkUxdyCaxVMEda",
  "key36": "LBBuWSEx8kVfT4B28afKwuYqcybkrgRWpzTjuGBECG781eCuh68YxhzaYhUxwrhnmPTE4TR8ezU14S3KZMpsR9H",
  "key37": "36Kf1nZ3fMNpJPL4SCPdgVC8TnnHoVbEsHtdcnu5WsKpv13Lc35ui2aFXbT3YoA1M1QbeHAfd8F96f7HsHg9rz8q",
  "key38": "67BSReU7g9ZCJa8fbpYBzFSjuNb5KJnPEntCb39JHWHQKyJeJDahAz521e2PusGuGv1XiMhFxat1ZPNM1NBBv4CW",
  "key39": "4nZCCEALjkooxcys4Kw2zxLkGAN45LsEpkGWcqgZGzEt3N3kxEk7b3hHCcGix2XkGGsHELr3qAv6PAQsE7Xg6uit",
  "key40": "2vzF9e9M6agvrqBud2JWUuXRsFCkqx4Ssm3zXdUfipZ5dEJ8qB6SDvB1T35cgqp2U6jdfdKGWcRxmQYa7XQ7oPNo",
  "key41": "1g94oAtdZQGWEkAH7hYkfKgQVbbsHQb8FnCSB5pYsaerrgkTbsQRhLuCJSNvDxtqFjegZY3xJ241DCvte5Q9tbw",
  "key42": "5yVXS1Bn386ysqHBtE3ZjH92s5YjhDMNr6uA6XPAi3XpgALn4ibMU2cKU9ZvdUQ7yauFeLf4z87xbeFRHkAHVugn",
  "key43": "rUrbxCLCuk5gcHuhroDFHYEDmtj9UbRYQzSVMtxU6Pr5BFYrZskrYA5XBpSw7thXfpP9RaZByYvx1KrpTp39Bnt"
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

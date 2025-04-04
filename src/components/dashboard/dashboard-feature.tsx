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
    "267kaxujpLpRo6DfV5BWY3p3MgbtWYAmdNw3JoRNKEthqw3chNoZUZ3PRn7Lc9d6Q6m5ecQS42x5TZqNTKyJ3o5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjkTEsuat9xvJ1D6MTkDRmSQen8EYiL2w41h4DX19HFfyUJyeuzkHJpi454wJDkpgiuYBgaVEY5j169e3QDanxS",
  "key1": "4Z4HnuC76BcHAhRzEvnbZ864kEWNGrUfmuHD3frUG6YaxEeqkeZUQHJBmcdEM4LjjHM2nBxbDM62x8EhAr5CXWE2",
  "key2": "3rRFpz9VWSfyNTUAt9FzYzbN5v9gvBqxxG92zD5JcdsgDhuRd1uPz7yTnovPsCrBwNKw38zwjWB7a65GpPpeKDHc",
  "key3": "2p1Ebkb6n2yMz6PWLURTDB3XiVZ8MSK9oArQSURyLYGL68rVKkDGDnuSUARSoLAC2YiVF5kDfo8oexT3AQzHXwZX",
  "key4": "5ZQTAmsqeYv67H1NSW2wmL7cydeby1wAtqk8tKQHE7DZk4eQUT4giuBDXKNrUwRvQpHv9KpBaEyxCrYJeZ3kFU3j",
  "key5": "2VhPNhLxWhXMepicFTk3VzAHzFBv1JVk98hFPhG2q4yBPYw8GWakAgQZerWiGCriGvCmymwqxytDKm64GTWRi7fm",
  "key6": "5heLofAmGZxo29GMifXh2ngnykC2cV6V5t2RjZjE8NtmrgDESukV2CFwnVxDfhu1DX5UpGfScndaApKvk1D4PxSn",
  "key7": "4MC3228Rng7Wbeqz2M2NRAtUei6Sh2qQj6bFyVC5SdNid9duuG6WpqBLQRnFGyBhzZieA97E4w87p6aAyWMZZN3t",
  "key8": "5riTo9AyohqyiTdHrs8WZNuTKx92K3288AiF8VUm9W5njmUNqVzU9GVp9A2NU2u5Sk8qu3Sg8UzoX3GQaLDX6jcq",
  "key9": "25TLuMLTSH4L5TmKsLJ3mzZLmR6DFjSrR1cRassjT9Jea6xL3yoniEHn9oqfCPWcUCj5zCFT1Zh3MY8vUsjERq1N",
  "key10": "3v5pDCKt7xQDtNVeVFCNRXpXayYvvYr6FEiU951F4ySJiUkpcSE35F8yu6iZpzi8PkHrqkdxjBVKcx4wL1egUQhN",
  "key11": "4VnjnvmZDzRToEgBd1GFWs1vi8XSCTUAN3iwfmLrrSdFFH7AzC51BhWzWxjDBPRdMkfBLorc6vdjUJAkmpvYBiTx",
  "key12": "43a9Hy8afHjBXob7VK98QJ89LcGcJxTwDMbAG2NhvAYXQvtNH11Di8i7fSaHS72NgpJP3yGLiGRzahfLVokCYb1J",
  "key13": "5jXXoCf26M62r7tksD9MAzLXeppBLMJLECj7qijiJd1mijPrGKHR9WmTn9ndQ7fVnqnzvfUzebVn85pkPjkSAXv1",
  "key14": "2pPVxjNttwd1Yoo9rSxznXEBcW4KP7NuRiKZwQrj61sobybT2fgwBvdUFTsMXKR1zgx3fdTSJnMQ2vXE59CyS27L",
  "key15": "4QP1WZBbZQywj5nS6Y9VQtbh8NSQnGyxSi2tQbeWbCAk6MFKct4STik8imTHhgh8RDS6yfZVufnPiq1gYB3wDU1h",
  "key16": "cW1kRDHLhAc1dDKERkD6CdM6hEbrAjEegPhEbTFH5tMcDeP32zMw6hQDawTuUuSdhtWvoBtoRYD5eMhNzTN8krd",
  "key17": "4PPDUmF96xeYELmRNaAZWBBhVJavNc7Ze4C9DzxjQ12VLidL21BuxCQjnqhb4feyF46o9nR9wvsBwqpyR7G62fRo",
  "key18": "4J7in5TzKvpg85aTjWqmaJy9qSXZt7K3kYhknKu9tep6pcgnNFZwFGmqFU5S8xVvQhjX2nJghNtzYVDPxHRtggmW",
  "key19": "2ix8yUQDL3moWhVAnSc33SB3xgLNuMkswURL32HUgDkPgtqK7jUxNudo6jsgrxkkJB6mzS1ZjLeiLU82BDRt9QdL",
  "key20": "4UEA4Q9uWpfNrJHamcK9LMH4CQt7vHm7e6QN6WTpk5PAXVykCRj3JEvpAdNp3QjD14dTpvibftWRxsrnohwgma2Z",
  "key21": "TgjZwdrhQ8zbr3gyu8LyPSjZpdSVFWqLF9XRW12EQYBm8ACc97GTr3peBpYipMFwg7SRTiKbwjZkumTGD7MNfEv",
  "key22": "4huFdQ3fxtyr5JXoyTy4zoriQ4SkceCVYgadVz6Q8DoPMK1wSCxRpdLDLGeZcGpqqUrNsfZLSbyKdzJRp5FCng2E",
  "key23": "5XGu5YmWHuzsBe5LANAG52KiqbYkS5kZP8MTco8zr89VHaMe3BKyvbUBLwA4Ytw17WZAFEwrFXDd2dcie7nizGou",
  "key24": "4B2xJehrXW9SzXT3XLi3NZAphr6NHEw58Db9e1xD3EbEp5tbtDDYMrTMn5QjTmJWPAsUL45A1HrxEhtJYJVbZSzc",
  "key25": "377QadTGG11fE1zRTAefff92jSgXTtjXDCDhTaxTtyRqpjPXt9xsVpzKG8ZYjZ1qkkhdhscCAoCccQqUWjH1C7oL",
  "key26": "3y6dmihKnyrALz7EZGgyrDx2BSCUjJrqd6EPtynz1eRzp1ciGiPWCDZHkDdMVBCwRjsK9mM31AkakSRXVQFuTwFp",
  "key27": "6679BBy6HPdieee7LVJJ55QtxuCXHBKyDt7RbiW2qcWyBfnA3tdH3LgWX9UoFot5NssqXbBVSW9UxdJM1ZaxkCJ5",
  "key28": "2PBhq3KgCAd1t5TW4x3YpSZvN8isCJs5txnkcRwWGyGBjiqy6PSx8b26HJy8h9MYYsCQeQkRZYWpPayACevwYT8W",
  "key29": "2t5Ek4auutoqpC2p4KeE1n6JiftJf1WAgTFZnSQzT8rzqV6BwsSb4DXw5mxNG4R4PDDr9TFjSbEBCGx2g33VWQbr",
  "key30": "4y8DAwDxnpDTbB6b7jg1cfq4LNF6yPNFA3yq2D26qCWBHCH89AW8SuV5q9RGznFkr6WzpYD63rySoK7rGwdyf7ht",
  "key31": "33UGzN9UzWaZAWjQF4M6cAW6FedMPHURpyZ6x5ycc2hjUwkf4Kmr27sJsbf2m6mzQsw5jdSYSRsRquGyAdpw9om8",
  "key32": "3NBofpFwPm64b22Ta48NT9pA9U96a5fn7m8CkwQyJF1RgB9EfzeChYtcjfjrWKKAa3Ai6viPs3mA2LZpCjM482fG",
  "key33": "iypX8n1udVyQk4FZn55HQxaG14QxFjhAMYg14pvk4b2DJY64ty2ggcCJF13YQERBRL9jJA895jRr4c66KD4kJtJ",
  "key34": "3rzn7xG6YUQTUMjAySYNy2Z4sveJF7EV46jHU71tPuUXu8V7Pr4fphnB78ATS8gZsKt2CS1QZvn7Af7k6LnM2t5A",
  "key35": "5Q16RGizzbuSUtKnde1VBKRzsKazo2FJhBEVErsayNTLnqrir61wEacuhYeuGBYbeT8oqj9a6GevnMy4penqwpTh",
  "key36": "51hJjT9WsMVkV2BiDUUa5mhAu5jEAVkqaHPuu8qPkoAPKMzpxbJeTLq8ptbDz8SyCiFf2KVpcumVXuSQmszXSTxy",
  "key37": "8yaQVsu3nfzsEQj2wGP2NQmqDqso8rkuQbQc72QVu2bES2u37XUPPhN2N2eYyK6aLndezzsFuYt4gjj84cZeuRM",
  "key38": "VqGP4X45jgSVe5HiJ6tTZCEnMecTaJ8uQoQGCmAqzYa6L7SG23STmueoTkWu9KuY6Y8jX9sFCRi77ZqRjWa7pc6",
  "key39": "2XpfmzWUBc4L3sLgBLBrLubxuh2zdzj4NQ3FiWhPktVZitoookNq2yxMscX4CzTbFpVSK21vjgc475QLWvPjXV4v",
  "key40": "393tMZ21eNmJE3wxK9vNcLevSoutCcDF1rgrLiAFVSsQ1JMvBfUxTxK9fC7XZ1X7VbCRgoomNSUFSqgpHtj9BhLW",
  "key41": "2VQKU2vTLAdfsCrPeiXKk719zmsYqYS2jwDEZCXfYPfDonM23KgfE2oHYUE2jEuvcPeoadZC8zreBCHNYkLjVndM",
  "key42": "2NBSh63vfe95SnnfPrQSuT9BHScmCEYkEMBdC1duNaZyva4R1BJwxSJmuNoTJBQxXwd6y3mGHw4wd7BinDgTxcU2",
  "key43": "59q1WRkRfddA4TcFihQt3gqGPPcXzKHkfRB1gBrY94WFjSQK2iTbDkAyenM9o4VuwwgXPdfhZXCtTsVKEuLwczsv"
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

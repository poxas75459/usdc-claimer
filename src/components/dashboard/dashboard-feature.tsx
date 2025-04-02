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
    "5Fqzd8QftDp4gR6819g6kNamuJeem8qZSk9Bj831vWWvXzSgSpAaPb7mQvAeNeWgdcERBrBYNb3Y5RpPeHSN7JVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwoXZMEXN3qqVRGuwAZaNULfNFWfhqmV9aDykvD1SqdcYxS9DBFXU4k6cbWk9zF93H6hj4u2ADqBRn4ZmmyCvBb",
  "key1": "4AC4YjNDTzmUR4GB72YA2L5YpgiH1QeMncR3fJHxQgUmiGHnY8wg3a5gM5cNoixGnmeNWSHhChYhxVopx3xf99XK",
  "key2": "39Vfz1VoNGeMp2XgCi9R3c6MJoYbhozomvUtj3n62L9AuGgGAcmGbLLvNMYHSzwBo3kegF8Euu13QeqoWrHTeqNZ",
  "key3": "54McBvWeC2N69E54ofkZcxWv8ztz8MGWT4uWE3ukUghdfepQUjcxR9FuBMkhPUD2MNyyGdHmTxEaXw6W7pUhnwub",
  "key4": "2YgvX1bGXCEaeV1KbWKFJEpjeMyeiPC4TyYKDCmBP92KWokVBCWQSzWFEtiG1pzyfFbksmG36Rn9uCDoco5oUZtf",
  "key5": "2uCYQtAUAkDgmAWELyW5jurXX2G5n79jA3wjmLESN56nMnqgZTEXygz5NN6GuTcVUeyw5EZPxfLsDQk4ESHRJ8co",
  "key6": "5fcqjPM3AzoU9wxesFX1uMw24NFboFaL826CRHc3sAXXRfgK2qyWSDHV52UUpnmxjAPBkrXKG3rMkouyaFaRxWTZ",
  "key7": "4mXAhNKCyYbosFYw3kNGqjZoMhNYXpZx8t6cTuofsBCEJAsct2DjbpnkMJh5P3L9hWzyvTKtkuKJJ3XHZEkGZYab",
  "key8": "3JaDWftiA5JZ3Gseh9vitsKWXW6rNNJvpqN97ee42J7NZw332B7xCcTqZoB4sk5E8YFyR4fRo7fSRn2wvmxpUAmw",
  "key9": "5GvHaCyM5hW7DvYqhvmkqCZZRGsyBGTeAgL3PyTrMBGfomvSLR2mB6HmStSrH1abasaREsZBco8WEiyALBSYR5TU",
  "key10": "4tYcy6HpqabupCgLVXXoWhHbzEjSiEWL7jg1x2hZ3u8KyWWM55n1xEyUGEy9A6BKaNYKKuMHJH5JfyY9bDXE71RS",
  "key11": "4cPWv8weuykJ9kyFPGny54PyxyoUx3ocdRp5grxgjT5d3KNGMAensDPEzR58ocLAYdg4NpNbG2CaQ9FsfCDW1WKb",
  "key12": "4eFeTdxe4QhZPEt6f3UGgCYzHG7hbLC27HiaCBqNdwLLwPLXZyDGxrjFbKffpVXdd2VLggzbxDhRCvWJFnb1ayNQ",
  "key13": "6UwVBjGC65V6YrQ8NVcZxNfJtH4YNzMFuDvaz8nfiyFjmLUU6kxsQJNJAVuifTKDUKVeomGZxXffVizzj7BTgsn",
  "key14": "D6z4jHH8vBbM1Lxejrzv6s5NrjKJKDCPJmvbs6J3Ym2EtWrfjAxKE13X6Rx3SuCH9jb3hnzZWmsQuUHTmCNGpZd",
  "key15": "4fKFCcjzX8Lc9Lu1Y4QZ5jvV1s5bzyS7LdPuxA8sZcGDDSuPDhocC2Z8aj3nRz2hccMGDa9fnPmjmM1cdi8HBxpi",
  "key16": "4zmUiYUkJnRkLXGGVY7r5a3uCL4fuqZNs4k827GSrSWQhttD7YuXR3ymxoTJLyra2wn3HbMTRxbLZg2Y8gzUBys3",
  "key17": "3zYsvuzj4RpDW9BMuT31QedNGgmutxT4PYkPkhE2YjYy8S44XYhyDKyjXnnHTvX6eg8zruRa93peBNdjDRuZb5QR",
  "key18": "3Bwpzd1wgg9i9ZuRHcSFSTFGMEbeVBpubE1UXotosYTvMSgMPU1FnSzsYonFzhjNVdDyWt9dnZKdipZUdErep14m",
  "key19": "43zCoktLbMakDAtpwqdiPoAars6og3HiueSkixFGEJgLacaZiDCoGbvFBJGHDhzFw9qpvErx6e54MRTbrFqk2bqY",
  "key20": "srTbNAZnKW9i4bUrfvikDhCNoJsRsgoG9prqmtrz6Cr1UqZWFQWLX1Xv8Kbv235BnbHpknqhgrjagfuzj5z625o",
  "key21": "2isrGfSBHkgiLYyKBC32YTRnVMbRqDp1UTTWpg2xNAHEUfjURJBctHiFagdTB2nR1CtLEcPYRmS4NCptbf8YwFbT",
  "key22": "5nsmxWXC1m7PWj5p6XuAYcuGNXMvHUZ4VRBAm4nGdF5LvRU9Rvr9BVW2Mwu8NdgfNKJWDnGZvVTNipovXFoNp3MN",
  "key23": "B1H2gyUCtJ3yMSn2Ymda2FzDK3RaxZ1EFBiwCHd16v8ZE1gSnEgoBX4JWANibDK7a1nVRPBFonxfTyodLMNMp3c",
  "key24": "3GmYdsVUAU6UB7JsBpWKwhD1pxtwcXcaqHv7R4b1LAVi65CeqLgXYBburf5FW69bbLXnPw3eKCQJR4XeEiso7fB9",
  "key25": "5MVsNtWujuHE5UuE5o2X5EMVESFV7hviz4WiqLc9imHj1Vc8pNJNv54szXPho9BqvKu6ErGniku1Dtsef94ENj9j",
  "key26": "3Np81kXTFtX1YNutmtJWLnD4S4V6Lps4i59UNPGSWkwcSJfUfzsTsPdFGENYEmkfrCgwwWxHYFZpPsfqscTUMgPE",
  "key27": "3UoXDfXk3mxeq2CMSfBLesdbLoQ36DbDvPv7pE8GYNgUF8hBzMBFykUpJmGvBzVQHxxjXkeXSKioqL3emixQi9RU",
  "key28": "3eewD5c7oFqid7gSAu6hzegBsGmDkzxWXuFupLWpJpNsQBpQUJ8ryQPStvhcUkP79aoVb8pTQyY2qk5Mw7mtfZHJ",
  "key29": "5yHBhch4GqsddvhD9P9EscVNroUYkWWpCL1bVV2j1EGDi9w1v8jEypwHNzKgGYbBZHANh61w1sjjQv6GWCbCftWr",
  "key30": "624jxDcwtKwMXbCU1PewREuLyEw6kSmVwehCTSAv44Vc2g2pirvfpiMJuV2P6w9mB6hVRKZP5QPztEbqCjeFDbyg",
  "key31": "5TNfm8YoTxXmC9sipYhPuh1vQa978Ap6fbUcR6qtYpdFo7syisrn3JNe4xUSJpqzvgmCJoQuD98LVMnmF2wimjng"
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

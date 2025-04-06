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
    "49hnKEW7CzfGV53msmHV7axGrVSsQahubKtHbyhDmTVG83Ug59RJYdQzX9RyiPa86qYMnD4rpUktAS2kKzC4UoMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZzypHWxiL1Dz6fgzR6mTZEy4TZx86eqU9zqmPsf5T2ueakVUSELW3dHT95makjCYHUuv9XQ21w8GCoEFDEXt7yc",
  "key1": "3tr8p27mxFZ2TTGGGFfwbC16kM2HRT3uE6vFbCGiBMTvhRwmyT58LDQC44fYjXqnHYq4BaME5KkBRNWfXqEibe6q",
  "key2": "2bKRsSPauYDcBbDSQjGHfHnBHMsUPDtmqEroicboBhad5MnqJKzCXsVw4qTkvm7Cm4p1e9AVTgQRazV5CkDhtLrL",
  "key3": "5KGhp1ScVuGsuMLC6WrAK49eKwq4piGwc2jnhUaN2aEcEgaafMj2Ngs7a6tm6EW8YKnfmEyDiZARdKDRzoQenKPM",
  "key4": "4oHDr9HvsKk65cBor13jtqcFUnk7zRF519ePU9nJpBz3zmNxhBMsaVTMtdhaJDs761jNuc489vTGSF2ZJdYzQfqD",
  "key5": "3PdybQCqFLsjZz8FvHDmSqNCCgjekwsArZWwAG2JsK2g4z7hHGqgSD8uokmtpTQVH4fEjZ9WjDXjZJ89XPn5yDYi",
  "key6": "AgFyc77TYrPnmeTVVE9oFJSTZj6w2FKuPCVoB7Ew6AWp7g9sriYyea3WdqqFWdmWQvr2yT6VTxM2cK2Z2eSHg6F",
  "key7": "3ydbTh3sZbsbdYmFQsknW9siktQWnsZpsCPDjgSKKKtBdxavasf1E1D892yhosf44YvA1JM49XvNQVCAxxDgjuiU",
  "key8": "24BrY3LWYrXoA4SPKM2nhtVGkhtoPsQCxsiQx7bBffpEQ2pPygxmXFZaxga3MaQqnD6sPvt8AZwcWsrNbcsLcrN5",
  "key9": "bYduwmrKQzvMvgJ5dLvnfwrWvbtop6tdSyjqvpmLKoTVxE13beNwMS3DJEXkuCbyhJwST5ZQLdafSXXdFxi75SC",
  "key10": "4bb56k1zc6yvBydfLJ8iitn18kdsqRhyPAgDcj83nRoBgp9pqNT2cvT6LXUuGJVGj3GzHfcZPJZW3q4j86Xe4HNq",
  "key11": "4H8iowKxNvGD5wGiBc9mn8nufMEfW4YkhL5KkTzMPSX3nf9SWSEbd3h1nxtDEkpdZNW49Zpn1LKxvZX4UH2Kkno7",
  "key12": "4ss8JfKHroydfnYbbpiuZjR8XtkoJ17xU6Ri6uXN8vdv9cETR8TB79PQk42hkHP79A8FC7kaXTEYpi5ZoGJMErKk",
  "key13": "5wLn8rYQrabcPK9tzFeggwSU4azJtvssvy6Dkbg3zFhA5LKjgLfvrBMR2w5DZQjuNVUdKJEEEppVxqj8mCemXUGY",
  "key14": "4hJGpMgm31UbE1jMUhucxijgrxxyoRGJXcQg9iyPaFvMo5cwWfxMAeQ5EfVieP8UomSsZ5gfK6Q8bNQkUTr9iVvd",
  "key15": "3pFVmUt4niXPxTa1g6HN1YvPcM5ouhJCYduvPEWZkpgYWPDqPEW5YjyJam6Qdrs7zcGBGs6NJv8xZgL4rre3bork",
  "key16": "3k2J5CHucDnaQjem1asxMUAmxaC1VDwW1GvYRrC49m89w5bTAS2XivnbhztnXwjgHs1DjUvVfoP9x49YKMPCjw21",
  "key17": "4fZL2KXNQr7td9ZyU4n3K8CaDpHkrKgiCrYSLEpPyDMFbHfHNVAe8yN28TznHAUE19BmbyAkqr7RxvguZ1ew5KWF",
  "key18": "32APu7wHgcjgtnLRtqLRwGGnA2927jCWNS9cjkmR5ZHTA2tTKKaKofP9f7HSFu6pQgbtF2EABt3cJ74urSKvH3oe",
  "key19": "57zitkAJ8h4vnp6PFHLiyaL1dy66UFo8eKNmdLVy6ZLtsLutQ3RxPZQtJ56dmmCtmLKn9evJAjP368j9ZXf9MTPP",
  "key20": "4bpk2oBz45q9MzQQFUKCbeayCDCc3wWykz2cy6JxVG9Zr286HikVB76e51DbHcFTXM8gPV95TEaDfLuJ9XgT7AXK",
  "key21": "2pNjBfjTpazfRaKSaG3ckMRtXZFdfpFDC7geUYoU7S1TTmxMFKE6mNokpSPWbyG34DRUuoU8x2pxPAmtcSz8oVfu",
  "key22": "2SJfrJ5kdnTCgRczNHiPQVpzvVZafa7x8NS8CedguW3TGCLw7Xn126WqYzFAjEUkCUPW2psxyxxNur13f5rvigjR",
  "key23": "3fb5cVVemWqbWWwYzNQDUHZ3XTBtyTuWetWHDaAqSzHMyES5jFf9aZ6paMXTkPiZ8UBUEEwtKkdX21VuxJD1vUWY",
  "key24": "2Aa8fasPipnzqfB3FM8sapvkN5yi3Hx4KiGGCgqsiA4L4je3QohoB8kPinADkotjhLSZqhvLD2K2WiLwxpwmb7EA",
  "key25": "2L3RqcicopHvs1tQsyAi1fyGxRb95mdBnjRMeS8KvwDov4VUd3GKEKnyVdbT9eyE9a25VK3cQ3RVaR9P5exnFoJu",
  "key26": "5Dfnza1rVtZGd68ZPH5CrRMsVaMJwZge3re7ZPaDFJfuFqhbhB5FRE9C8AUnMnWmLth8d2vnMAw8FehZGr7BBT4Y",
  "key27": "565Zkus8fC8tZuFrEsvuuKL3WjSoVHKF34JTbrJSGAhF1JfDVJvj8oxM77xRjnadogyFLnTXLTp2LpiNXjGTxFcm",
  "key28": "2wKQYdKPyaRpGT6xKCBMDQZLcoDyZrPjRUTUnHXcu1MPD5zbPuqXLnNcrFdKUt54guFRHvBBvPRs9YqiDr4ujpLX",
  "key29": "42WTsPvCgc8fw88aPLKUSzbAvTRKnAhQaFASFngZaqz1dgFPh95qtKFbUefatThr6rPJmpyodfVPWnwgpEK99WVz",
  "key30": "5F8UwTD9tDv6tsTjJUTEzARNpz2NPUqi9WPYVYcCwvhc9Q387opeeLB3zcGV3bkputuZVhGiJAfJ7AQnKhqHbFnx",
  "key31": "2bpAL64XyeK3Gspahg3yUEMNLcS3m3jcSA7JtL5EWyte7959ZTd79WhSZ7KjATXPp5zdwBePXsRfhq6Z7h5tz9xV",
  "key32": "4HoVc4qKMTUZQrEi6bThFThoVNQLecPgobaywsZufxbb68QhFw1R5CnEvb4oEQCWGG6KBdgHXEaHjMT3P62UHxa5",
  "key33": "3kcYwv8GpK1QWHpSg5fCkfQ968EhGxmB3qZU16Eftv9f8F1oKqJ691F2vdVLZLityXDriyG5V65uZGHnznAHMptH",
  "key34": "2fWTnonvjvt2cq4wZ2E6nWN74SSg77767cbFdiUJEv5w25SUgAg9r3vQrwDiP3acDTEGNJgsT7VsifmL4qogHBkZ",
  "key35": "5DRgBFuAmbHH6G2tnGMB5FnAmuqUmSQ3sJRKeR12hvhr3jnDHq6S2t3vCAtvCHMoKtLNtFfC6LLeXWr466j9P6kJ",
  "key36": "5wbVVP7CVWuxQptSgkCtUHQvNpxUGap5iApyU5YRAfvafFgsvhig78Bwo5XenMTHh9VA7VqZgteKA5D3Dqu2T7Ak",
  "key37": "6314o2hgH2f8oJc7UiaxKXdpuTSXLEFhHnWDntcLwe8mLMGymVkXDrRnt1Uw2WqcUTUK4FUUSLNiee5VG4vxKJXs",
  "key38": "65k4ktjJo9WYgDWsABhdADu39CPk8foxucrpXfMacPM144Gx3SP3LkeaaYiN5RH5Vuq8tzvUMEJo7fxteqkZwDGs",
  "key39": "4vcEpW9EYJkPbeMkfqhca8hj5ygJJqCqPgrtod3qWJCXbUcqgTM8kD4brLJYihRPFkUip8jvUbxgPvcKcXiTK47T",
  "key40": "4mLdtoyMPtjy2wvaD5qz1zHhCizYCVaqGDHjHQuSe3txLgBVhLaJWjHKFbkuUWVHTZrbuEiK69G4ac1ZZC34qsLs"
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

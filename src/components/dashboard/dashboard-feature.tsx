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
    "MiBHqzeLH4NMUUnsmEgUH5f6nK9KPtDyKG32GqTEsGjcboqbZEMCz9ypdyxkaPUKHtMbx8ztF6Qhkuok2GGMU55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPXwgDagm6yC2UbFprDiLpC9mU6DgxRsjR2msWokGv8Cq6CYBwP54T9w4kERneR7KFoTqgFys6sCqtrjkwx9aBW",
  "key1": "3mQH71B4N6ErTG1CRMKSUbaGhmSNypaHoeJJy7LYBajbmjpT3Juhpbj1GDF6sozHgBCdPdReLmB2mELbN1JaCAq7",
  "key2": "4FGd9xV2nSYHZLwoXw3h3ZfSJv1TC6tk3SyCrNV9YkeckUe88mUm6KC9hu8EcbnjzYVEHyLxvzUNQsKXGRHNoHuN",
  "key3": "2qZm4Lzt8HodZkrkSxFWAZZ8vGzX2vtAfWmFJ5GBTuTfjKmK7QVyPggJNbJ1VArYMEGWG3TowyoWVxz5Gqegg3Qm",
  "key4": "5PgxXHWhk6zospUsGM7e7yyZABdxZfeAX21M1rq4bxWwE2MgG2oS32bRAiMECyfEhjusQQ9mk5YVfX5RLonqvrt9",
  "key5": "581TT96PKHM1yyps5MW4EoWj2Qd58SJNqTDVN4yQf3XDEPJEC4G8H4tUfXKHQ5SUTgEfYM4EZ7N1gPDimD39od44",
  "key6": "3nyKEWehTBBgNFhPRvidvdfUmnGDky3LUPNtuqUr7pG9fpqVgoZsYeC8bprmphK2ck7chxLqNpZVduFyrnGx7gNu",
  "key7": "2HQBJTxgA6cn4dw232DAthT6EBSkd4MJDuLrB6jKheJ9XoQWG3CsxbkDQRgFrRkk2Pe9bcHKu8hZ95FYiQVw5w5Q",
  "key8": "36Dwnbux1mBupBAL4aNtnhLAV9GrSWz2TcDALXdm797Ptb43k2PhP9AuXb9qXNjq7X8jh3GUWGQB7XTWoeV1zA4B",
  "key9": "3271eMg6YkEWdhFp4vaxDY2ZnpontPvf3SpkD1E6fpzVoffvNyb4ZLRYtF1kVAf18EBDY3BbArav5Nah5XsRxw9b",
  "key10": "523Pm3HjYFLbKtfJPyJarHwGVwLbHKe7JhTn1SuwmgrN53vuDbvQeQ9zLjgdmn1qqZiP9GmSgiFNajiWDKw8hNQm",
  "key11": "5t8LXy58DQQ31RDmS2kag5W5ZUwReLXiTWNY4iALhHYE9jMo76Tt7zqnpmFA6mfKeeArSqBvK1R487aLWKKu8mPk",
  "key12": "3G7NnmZYTCDVrTwzLfHgNiCDhZDsyhc9LeB5KDbNKa3n5gooYMSmGmWaHhAM4fFfBVEUfL26pT112xzRPbKHfBU4",
  "key13": "webanUKkNykU1JHdDgk923CaEyfRMKhBUzjfMGcKoXhXkuCbmKLeFTQd5xZLPSkNZGW1Z7HSaUoQcjH5VYux43R",
  "key14": "5G87x3H3qPZkuGwp8E1coF46mtiP3Eb1VA4JGSr8adVu29uaJdgzuBZmHnGBPMRjewADTvLpp2YUcopwL24wEfov",
  "key15": "5vjc8H56agpfLGd3xKoJ5MwD7GEjucKk7DuxPBDpNrbcQ6YeeDh99mjLy9bGJ8wm7C9NJEtnLKno9NJS4Ubk3BE7",
  "key16": "38G5MnmDZ5k1Sd3t5T4RqUHqCaQxxv753pAE3evPDAGkAe5S8yhuGajyptCMK5g8ZwfeLiybzfZCoto7UrVJmGfR",
  "key17": "286MbLMA8EVKhrfc1MLDxLCew53wD78t7dGUsQRpHV36hp5ZH2eLHQ6FXBZuwjZbUjq2abfedPMe9WPGEMwYHBBh",
  "key18": "dvoGsmdT34Todc4MnXs5qtxMwKfkMc4epn4XC1UmXyQMqATJpvGhXwmehdVDqJ6nVMrVfCXaoj1zxGEuRqZjD5V",
  "key19": "2Zzx5p2M967o2Uw3tDbj6L8ewzgBWncWL2ZBeqZXv5jZMpiBdCNrVoTARxjsn3oWU7sxXMEQrKPXWoDARpPDBrXh",
  "key20": "52kUmN1tY3nWJ1juJwKHfYFupPq2Mgh8aNpy2dA2VmSbsdpPFs97uFPfDotDhYZdJzvezGnZgmc5MA6EWe9V29Sy",
  "key21": "5GTuUJLc8W2GGr5Ftv7YEp4NFPCFXsFxg77u7xaLWKAQTD6zF3JRYzBCVzb3aMTf247MPugnSDUymTdHMv3GjTS9",
  "key22": "5n2KeGxE5YwKFgukwuqvEJhVqwjZF33odzNTp3dEmNGwbnFdYYHwE47wX1nUSQ9TQsoA2sQjdbQ1cDkqZG2vZ6Zk",
  "key23": "1278wXEWSvHWxTd9ADWd6MWFFrGWYwzB1BkborFcKRZPtzk9un9KpNkBz7oKvy1bah24cvM1J1TDtsuxj7xwSgmu",
  "key24": "5qDdsa5irDYvx6fZepWTyuGnx6g9PeAVGXRYMVBqbooehcDKfWE6SR8RnzYypJAhCc1TXhNkuUcxGKD2b9JD7d9s",
  "key25": "3cydE5YoB6NHwnM9oNze78DAC3M8EEkQ66gmecMSUYxVdecsVK6wYb4KN4CYZjMCyJ5ULDDhrGTBJ6YvRXn8Ev9k",
  "key26": "3uzRRww5TRX8yKYxYWRDXeyGnPGZRBdtKdn6FGhPi9QSPUyYjTT6LQjXftPD6L6rEnhiVzH83ZoyigC1qD8efZvG",
  "key27": "3Ark3cQvDZdUJ44oJWkVuDaw9iDJdBZRZ6tePL5AQDMGbBwdfyuqXHUY7Jp3YaBzpX7cXorTNBHo186kGRksmNX2",
  "key28": "5i21vbxVEGiX1cw6wzXShDd1vTCvsamqDdbwR422SYLtNCrVwQRFR5ips4iBXsh9V1prL6YmmNub84nAqYetpVYH",
  "key29": "LUZB2fzbiXqE8eJr1AB22twSoByjkH1zXpPqcGRm3MNsdPtivXGYbub2UQRonhqUmE8p54eSoqbnv3w9vrL7vU5",
  "key30": "5QZWJicLCYbDFbMHTfcLqc2u8m7WJxwBAoYiU7aMwLJ5Kx4aBqv7qoR5kxUHfsbEgwaAKJwGsaki94E4PuQYhEVU",
  "key31": "V2e47CH8JRng7cFGZ3oZotetrsuPo1D4MULZR9Mj6xVhvghq9voxhCA1GkJoWvo7t6C3K3mGwWwuR7xY9kuCFoV",
  "key32": "3tpgGV1tqs2GJ8XFGd8siAfDneEYxjQoCgN9tHSDL2zDWTRjbNmXJq3syZN7pkJZ5P2AAH2UUZy8tSVS7rV8xjaT",
  "key33": "3ouVLT2Ly3vMkJSDb4kupYy1Qg8DtQT16MTHFzPfmokJQEJKLecrSPFCdWRqCAmT2fpMR6Qh3mU8AJ7JvYEs5sfw",
  "key34": "3wj9zYvnigeqPZnx9ByzVwC4CRN4NciCDL1nP7jm69Zy2dPCTN9m4YokGxVn28AgaaQpr3posUWekvun5uZsGfL4",
  "key35": "5zFjVWMnFj6xN5u1y7hHY6v21fDjyZSS1iEmMuExmPVCqBQTL4KDf2CZyxWkkHfhMCgczCDK7ntWnHejEcv9SiTC",
  "key36": "5p9htRc2jLNsLta5ytNfkkBdQBViJv31RUSM6hjvZU9s5Lvq13Jt654R4jRNCNpHjvTQCwCnyrry6mTPrkWZc334",
  "key37": "37KeynfcjEQgQgfRshxSfycP1SKL7n2copaqVjX22ReeJGpwDaj1wvQXhtgzMpdGGypCgj4DtkuS3MERT6Tpcs8w",
  "key38": "Q8CEd9NeQ3QSSiaHpUBtdYHGo4tmc7JgKq1fY5QG8FrsQhZ7UJjxJrz9BryDoztZtsfRpUqjUdQyU9RuABBQadK",
  "key39": "43GZ16xPxEQQ6t4MbQUZxrSa2tWtuxUq1ZZj7BvG88NUe4Sbgem56ozdcdu9Jrn3emHzPPWSEu1nWvG4K9W3ct7w"
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

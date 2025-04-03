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
    "2iWcSTg5qDhBwRMoRZ6hsrG9YiuedbS9QXLXwC9acX1TFcwhB1bHYJ6RnafFRYTBja4KmmCvXpaoCxRs8mDf4WRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aLrmkA6Pj6G3ouyycUjwq7yxNrwKWL5PjTww6eQusgjKMupwvVrCUSSeTs8jKme7cgNUYTwXmwdgDkVPoyzM8Cj",
  "key1": "4qsQJCFYVhP5otS6GWCHTV8a3QURhfAkoCugEjsXcetPwM5P4NhEMYkt5e6y4cnj2KUDttMqoJsDeeUUghMT3Bav",
  "key2": "2jwLPudyobmqz36nEZR2qKJz5gNvCdTxertA9bk8gsYdY3yhE76HRr53qcsYcmTMHWDpW1aBeWdD43N478yNgTVB",
  "key3": "2uWSHhtnYPXG78w8jbaJwMagXknKF5oRxz68vPxkuxWzq68ZdFzo8BB2vKWkEnnF2rSFoxodLnBJciNPuKNw5bG3",
  "key4": "2o4PSeRX281TF1XvKM812s7xBE6YeTGpgyvoxcP74RR476qhLK8tVK7igyreeAmECmX2Q4rN1PWgEwuuUwhHuG6w",
  "key5": "cNPVegAfs56nP1GuK56i8GzQ9EjqSTGjBKhyXDrpjcWkxKCcc7T6xrzKHfVtRTAvWRia8VnHB4pKeDQq8Z45rDD",
  "key6": "4QrCD1idW1KrWrzT4D6YKa1517icgQAzGGCAPD6Dnb4qXxTdKZg2uPbUnKD8fFueDMPXbBx5riALFwaatAcAdJzH",
  "key7": "pXvL2khgjMJMW6dsgwYQ4hVjMmj6RCWfhLqJQ7Lp7v9nyczpegQG9UsPHf5yskFRkusuXywkPm6oby2aetHbJsk",
  "key8": "5sw8W7r877KdYQRqu6oxCKRxyzProEZcm7tL3nrCuDvPjdmjjyAG28f1craUFEJLPZASFqZ8dvpNRhxCmCmDPRKS",
  "key9": "4SW7V5v8QBZizCZeDNUuF6U25JpoLz6FtuDrkCSWZVjjLE1AiHSAWzVzA7W3HTmu27GecyFdVDLCPs5abMv58jou",
  "key10": "8RyfXhFgNfgsUqxxF4mNvM9BsVr44F5AhnYA8oMsxBadVnVXMrdHNNRndCkkdiiD5347emWjaG6L7fPfDXAwgzr",
  "key11": "3FRGgbwP8SUjf5ceU7czcPk26ts7AAe1fZ5PuSShMKKPs2WxeD2pRPVoYcrcKkmU1icqv7ZC2Qs9D6kiRLauTxQg",
  "key12": "9mGcb8YtA5QB29zMQKYSWB2WdymHMjodAnLi2T8PDijtUrVy8JUQwbpor4zDE6b1U1kR7LjhhGPJV1h893mc2ia",
  "key13": "4tWNCuYKHAujUv2Q5Un5n4ZcHJXxLhGVhXoS4Q1U7ajxuRhorS8MFiekYtRpg9cKEH9uPSc4HHa1o1CAvZLnVuYU",
  "key14": "2JGSMuLqjqkAFApjcPSHd5WHSLXppUdEAoT3bnZAp5H3hKzKLfTtM7j2VvTArzvy6J44GyXRgFEh5upXNgtVS2P3",
  "key15": "mhcBejUDdtdANMnyg1Jfcp1U9cnGzfQERhYDzUxs6yJSbKE7Taro21iJbDMXrVffAZbbnd4cBuuJMetcrD5ctQd",
  "key16": "38jDaifET279vF9h32zSS2DMzdakrQH8s6KG4CvejN5YDs1vYqfr71H6U8qt5vbW1HULa2LPuPNmn3m6TEFHAgcS",
  "key17": "2ByyaNc38Har8yDYpWWiTcp1eu8bap49wJFHfNWqUq7EJyCLiAxBmBeJoNdruauP4aQtD4hiLP81MMwRVvJdyekd",
  "key18": "5tP5N7Zo9P633LZzVY4GBSeyQKfPs2wcsRCDnWXVNbHEytFgtbbMXfxqF5PXHbE2dCXFF8eC3soLCDhxav5r11a8",
  "key19": "3csSvbmrEQPveve73ty9t6n4LXnCnDcZQmi82r1i6WmaRo2xHnTsvdBynftjh5Mi9cehQnSrdQsuPbfxfa9YkwBo",
  "key20": "hBP4Gw98U91pnCVzD3dvUbuzKBHvaH5b5tuA46h57ZKJo37U3kuS1QuHAtsz5L28ZMYAHK7ncbN42HG7oq8BCQZ",
  "key21": "cTVEWf3s6jaK1hrZEzngUWXg5ePyYTKq2aVKVfz2W8F5TdJQ2hqzA54VkNJT4N7KgXJyYGPGBTtUHHypt7PPBAo",
  "key22": "4kGwDZpYGV88StuKCfK5WYCtBgusAxMck5GCbRYAeHMQ1qahgknXr9tciYksDq7FVAUVegNyoPM9UDEgUKnkeWKQ",
  "key23": "4WZSUhbZmtJqCY7UJzCfm8LMc9oRJHoBCjZtN47FZkV1HyiUN8JUr8P1pmhUXPEPUEwUe5qx9pQnGBe1ivUy5wdi",
  "key24": "aKxtXrfVY3T8ho4uZv8tsGSoGuF1LfuqGjMx22cQ78umkork7MDkUtptnqVssjya9qA51va8AE6GouwXTAJnWx5",
  "key25": "3iU6rAHMVZhXBZziTGimRGndc5vM6bwbZV3jnesYBd58ELBXsDB4nb9YRUFeprMSPqneoKNTztkofxTMA2aRJKgk",
  "key26": "vH3o86EH79ztxyP2GfdGoSLckRKr4kuESzumKgdQYy97stvRratKjFW33CCsvfJoKjurrZDS52KuR5WDDoHbGrq",
  "key27": "5KqLjHXitMH8pnDMM9FKU9Y5R77xTS3V71YNTbw1LQqpg8nrKYy2eTZuHAA7giviaad7JKQvGXK7pts47tVzJpGa",
  "key28": "aNKxVqGrA3Q7SRzykPUe6NTWsJo4yXoiCvtTAyzqNPimNw5kGuhDasrTte9pwgdNXT8yNH7RETnA1xU9ywoNVD8",
  "key29": "3FyV9DgXkQe2wbUqRKQCAjgncYbDbmexjAA55Ugdz4GoHMdGZT3nK74Ppn51QZtXqHSvAgb2zU9mHHmMGCs7JPzP",
  "key30": "Dfn4mWC4Fmfu3aqJYbdbMap2NiAVqdxBddrYAgdnmxsyu6hYue5M93tSrRRotYja8uSesFZhHoMq7xsEPv2BDRV",
  "key31": "yAvHr25QTvFKRtmB6jMUrvcxJkz2Mp93oPMy6NjaMNVesBf49dCbsELbhGQjrRhP8ne8Ub5UsR4zMKPbRyheCmU",
  "key32": "KNrNRSCupTUbsJrV6jD7WKX9ZFPUefzasLBzhfEVaGjviAJh74QEjYULsgUhAqFbignaNPcqMVswSmE9pNd3L78",
  "key33": "4sSuV1gFqeE9o7b9YZrKf2Tf3F9aR4Z5oJmmHrLZcvbQYm2SRSuovHGRjGMar6DyEfrr6BiVvfARA2fsyQNtjQre",
  "key34": "2GMkHQMj3ayXp7JsTAkeWqZhxBDcpWSfom9aGm1zCk6Rp2FwwiR5k9VKF8VGTAvLmoa9TWkkLP5LyuFf2JyzuUcM"
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

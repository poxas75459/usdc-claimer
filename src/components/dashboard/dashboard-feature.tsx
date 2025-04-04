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
    "ZfWgGQYCQLNvjfo6sBJof4BfCGtGhTY7mfT9arxd5pizoUpJuboZDwWgW7VgFySZ5pFU3TSmagYoz9GrVTfrbaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7tdfgzxyhDZa3LBp91T1t9jJsikHUQjBVc3epB4S87q9m2KsXEtL36y1on63xPrSfVN6fdfmF4MSK9N2UjoMKF",
  "key1": "2jdRrce3LkvGY3shEUVZAXymQ9iVxuzD69Q5ERCJ2CsZ8e4UhyXJnD1YbE9tuQ8WyjoSjt97yDopLkjVn1N7STPZ",
  "key2": "5H8XdX8gCtYsFHLBGASnaupH3AKKqiqVZmfnhZArM6F2zWJpPcoBeASLwABUxxsHY3pA1iVym4kb63c3zPGAc3oA",
  "key3": "2nYosJNsrdNMtoe3XUcrTRrHDhJRS7WAP7o7NXZXPezMaUQVminJHTj2NpBVbM1onxCzYeK9wH5V7hBBsJVf6STw",
  "key4": "5CDrARsBRBDDaNh9MCKtGcEAm9vgcahptfwLw5moKhLgg8DZULsENpzDnHMRUBVfV3dYLsvh8zCkmAd7zWxUuJhk",
  "key5": "51PkE3p22aBV4rC5BCJE1hDACk2KnFBCgGtSynWTk3nvdQigwnh8UmoyxptJUCqS1Np8DSkj3QCvfnirNXSzig4G",
  "key6": "4zArAZts8gZyotQd4TnPjeuUdLycyV7PE8eVAV24b9U6XKxZB1fEw7BNXGzJoBNwCR4aMLxjUiggcrB7UVDpVEAg",
  "key7": "54UZ1oNnccc9Zrk7xAJoLcLxk8v4xyaXUEB8RP4ddL6C8v8coPbJPXAfF6Tjd5hAWgBcVBN1ukoT13d5TWiwSYUj",
  "key8": "4ae7LZzXJuKeE31xUqtQTfNJ4xHb1mnxW6kEoEubggDwCMKzUsoRMt5y3NV9VtQKXyMnwDDa7X2P9PBRWf1YSvXT",
  "key9": "3i1iz65DtHDorTYHAeThKgdfvyWYUYcjXArbPJqegQq88giXxNASfTGQfiSkTpUqxSzM61ejrXzoyAf3zucsiC1j",
  "key10": "3gYvZhc9xqdRpY7pRGMA8p9CvYPLNzcRtg4dchUCuBBLcu4Bf8hUwfEPQobbfWXNmjEsn8ZUPdzmQKuZ2PY1kowm",
  "key11": "KffA8FJuuBGdVFHJFrdatfPHibL2eMFtffjVgQVuzgMMpHHgwhmd3jQUdCZevXqWNXAdkRvEqdbSE5QNnuBeFte",
  "key12": "2ZeDq4rq8cVkcucaB3x3wLY6jvaGdEfYSevJHA4dX3zV5C7UGYuTGq5ngCi4prk6aADT6R71NKnTFuVKocCiWNnc",
  "key13": "5FpPkL1oUU2muCGDyvy3EmMUFsvoqQFAbhs2AsPLvoZVZiMDjdeTV1jJcX36Hvm5YX35DvNHAjB28aDK3QxHw6mM",
  "key14": "4UNnbmELNotxpTnyFDxmPTQXQgXUZWnSe9zrkSdx3uezDRDzkbHXRzSWKH1cSmMAPTEntiaXNzBPauSbyeVKedCh",
  "key15": "3xBzeHuPq1JxE4LBH2xZj8Krb5uJKaRY6nrG72nR9e9bkdr4ijUGEvdfL36DWjvkins9Aafduix9epLMSq8ijXm",
  "key16": "v11uGu1hDUhVGEf6pDemBHmxwe898nRLnHPwMjdYo4vRc1hh4GpxXGMuwcFYQacc6fBs7BkccsmswgcmTpzTBrZ",
  "key17": "24G59TEujq6Af9cSWGW1N7eg2ZKRE2fEaM2StmQkWyqFsqeDvhBii2Y7cMAK5W5ma9gCweHHmJTh8KrP6RNoHdyN",
  "key18": "2AZ1pgVVEG1GX8Ja4YeDQ9RmtWYY1wGrHRm4hLqfLKgndTbmWrATzfAJLe3wuvV5UUjfBVRfHtZNkwh6QHvMNmsS",
  "key19": "4idVC6fp2vCxD9ZqAQkMcvvtSb3xh8nzhbGVRNj73Xmcp34wnFq2Gf1rmTXVuW9SZ7yonrs8L59XLoKUJ6rTZ7JT",
  "key20": "3H5w3NXaX1x4xPAT7iLGTaVFYrfs67zxe25DHY721P43FP23JAq3HsmhUaNEkVvV8hn1EDt4aCQ2UG7RJ39JSBZ3",
  "key21": "35LbRgaZnLeCP3ZGikZzaqNLirbYXzAdNfsByxSQi2kmJeaHoPX11zwUqxFCMhC7SQERsqauJ3g8ALmztGPR1nv7",
  "key22": "3a4ZEC5tyP7aQTnWnnoXyYe8e8vX3V3Mf52FvFYKdziduuriU2riPuMfQASSkgwtRgkBUi59To1rR2YJf9UPTatJ",
  "key23": "XyBmnvYCDN6FH4kVJuguKGKwi2SKD71nf2gSBHxM4qZpgE8gzreAUebvB6TkZGFqCMLXMLTYXe2B4Bewo4bTftS",
  "key24": "661m36DvoPRwMMzSDErjjSdyWxGuRb1tPvPJ6VqygCCYeXUaDbwqafoZSzr8L6YXXGKtXbT9tXA63hPRuXeczRcE",
  "key25": "5RktJGLETLypqYVgMxtCaimiwKpVYXs1X7u4HyRXRFPcBP8XFPc11neWkE3aKbQW7JRWskHqo2a6vh4XjuZmyKDs",
  "key26": "22rx9QTXMNVAhNr33rvKbzXPcqDwiEY9RPJnjsfpw8C5vAyuDULzciN216yohSMmuJVXyfHGhuy71mR7YnKHssLd",
  "key27": "u73UeAV6x6WUqJeds4HBWWRisgMEKbujNaFn5JgHVNNg8oJXrZUv8szUEvpbkDH4B2YE4CbhKg3mtt6frSZQVZF",
  "key28": "42eatp7wmpHT2BJTgAez5Wvvqs6SXBDfpAATqxTct2y1bEEtjkv1wU7LTp4XjqXqV6LXczVn8zenBhKVi91NeBXA",
  "key29": "2FTDX1eLZzLsZ8WWESKdyoqVjTXbta8mvgdTSbn5jcLB3fTU8eetMmzdN83zTULXv4Pwmw7SQchZREu3xiJnr1Pe",
  "key30": "YLBVNDtYB3eKdHL8iHpjjJc7XQBNKfztywLPtDNU5ZqAyo1B8TZ4Ty5M39Qvm8VsPuutnUydHUZdHSBgZgEJZhb",
  "key31": "4WUfsbuzPmsXaiH3PnYMy2c387C8BMpT8X9J4z842kD3HAsbcsePiufugH2a1Xxdkt9Tkv9DPtkkSXLWAHrCtPNq",
  "key32": "2aMsDZz367RUqQgWx7H8YeWkyGMGe6aa53YPM5B8RQg8QFbKQyv2J8a2uLkAbrfcvuSqcFXkmJqdUh2hThmTzpMc",
  "key33": "ayn83LQQ6Atfs663oGjHRZsMqZN6h4keySqB2enEQZhrNsfMbE7yhLaBbE6vqPhTX9Wk8pGueTyL9LJFiBAfirE",
  "key34": "3Rh4rnPza4cFcD1iuLtwQxCooN5zoStPNsZPpuPb4nD1qHoNXLm6R1FHBxKbpFiJikrRKA1E7s71CtsCc19rQhGQ",
  "key35": "BY62MU6Pn2zQE4SnnEoEpcGMoHALuajan4EV9KFYUNwzb3bytpqHBbTMh9TP9CKnNrhkwyxh1bUqdjupJzBf2HJ",
  "key36": "37b8H13v43rPVkV87aQbaRCCmPH7cZkEJYeDMgUGZd8xDpdVtzFVqq3KycLjdwoHRpdvmDnVnUW9aDg6gBwTqmBz",
  "key37": "3RaGZr3V2twDYejr5NH3Rh11UDjjw7Lyw4RxH529Kxqyeg9CBPgZSggwNjyvt39UuL9Jk8PXxfRJ9bb6hgEeR1SZ",
  "key38": "zgz7nYW7ev7uEDQwNWXnLAQaH2zWoJkMJkGeb77tVNu3QJU5b2ss2ZDyjTCABuuMepaWJpFpjBTX8eWgrWogeXX",
  "key39": "3J3qqGHSku3XuPeiNc5qHqULH1s49c9rWvgS8WnJEgGCXCaaKjLPjoK1UxHxeD51MP6VS2EHy3KgVbFxdYS4DjGk",
  "key40": "4AvDivPjW68R6JcWJV73BKFvRowaxfve5bmLGCdY1qngPYFx5mQB6ts6qLwydb4zug4Wvd1Z8eP5vVua9xL1ZEqz",
  "key41": "3SohHrSvqcGdeagQoU8fAsRFdYc8w2QzPcz1j3xuzjABLW3YJXvSiXgneE1y2Jc8VfngUXrnB5poQDTCShBa58mx",
  "key42": "2LpjQjYG5EhomH4Xue1dLsGJhdvKf2tFTWhfym8uwwaX3Ewg3eNSwmLeYHqEj86TQnb878muoNGPzAUp7jMAHoc",
  "key43": "3N3m4wuzbrGQE19YtunVeAe16YBXdV8fBN6JFG6vvYPUg2SUiLc4aLDVenbJpfzAZe7rMxphH8xdXrhLKKrZnSn3",
  "key44": "4Kewfk8jEqz5XZYCD8EDW7HxdN7tdo2JK2yPx3BLgZZtsBMu96MJesYQHPiwySdBn79P7CNGdH4tq18Buvy5cGyk",
  "key45": "2fZzCHiX63XDpM2XaK1T5CS7jtWnkxcaH12f7iQUXF668puiuKDyJzrtyLPEtn3VcjbqSwLj69ntBsV5ABqDjDmQ",
  "key46": "2UJUxtVqbebSyuAhQmhvfzzZMPfrLfvmgMipcCaDshRFZiDLo8h8j1Pc66CxLkBwwEJQK5zSN2DPNC9mT3uYTSag",
  "key47": "2jQhXKmtCQnNUK4igSxuepQ159qwS8Wagavo2FcSJKeK5YsK4JxtmAvhTQmhbWmQHtqA8Hw7ywmXbZrr2mDAeEhX"
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

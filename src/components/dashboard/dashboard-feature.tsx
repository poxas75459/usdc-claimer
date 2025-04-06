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
    "5iv8FLUYVrR7KSUWKFpDnFxzajWohoASnd59wkb8vk8KBowvnFysg2VuUh9yj9GDPysAzd8r2JHYTvAgDTdGyhpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJoBwmjkRPfDrZmi6RYvRup5DtvH1iFBgqEzwXt5SJXpmzn8vgJCBm6MoA6bdggXmmfrnzaz45uxq7wuMqUCTJb",
  "key1": "3VoVT7HETTwRfVQKJMMUkgY33ZawgJHHhmxx1EoRCHdyvim3agviTmhjjwLNaQEqCo5ig8526TogkC3ptEkxZCqT",
  "key2": "3k87WRw1EFMyLizbWBRaWwoBL5Qy4XEGhuC4s1hCypMQ7cU8E8ujDoPG8D1yKvRFawKGBqeDhnQE14Taicyejopm",
  "key3": "RKyrjvmLfee4RmrYW5kJRR1dt1XcZ3EzWqKhGwG9jV4JUEdWRSt7CFbiUSV3uwsXviqxgiaBQdM7Ub8EkhJVGXw",
  "key4": "5RXNHUNu6H1ftpXdNvkxeTfEL9TtdZrbC3zdQpWT8YJnNX6vuRCSEFotx1AQh1xETwQb5HFfT33iE463PaBbgU8r",
  "key5": "3hzqLmsyzQxKzNj2nYX4QWmfzVdVAWeYHxLmJ4TDkrn8s7Qke2f57ytpBEBuXZe1P3HXisMDeUtTkPPEzdZCwbta",
  "key6": "3UiLYnaGqwTqQuCmyceWEC9bebHGFuYoVa7YuAWNqbHr4f3GxpX6TwUTG5VREyK7Kb7vR7H3KQ2MG7JPMvkg18Us",
  "key7": "3Tuykht5Lz8KBj6TvwLj39KRZrRzqKYZcXQr73rjyMm7H5JnSuyHdZnWMe68gS7ik88FgaJB7veRaTqKwGuwmeU9",
  "key8": "3jUUZMqtAwka8FwDiqF6fvbDKH7nxm42ZkoDT6WyuhrNJGvbuvjVKC9hjmwMqtWwXmtnbvPbVDVsFK3tzJneALGc",
  "key9": "2tFS9Tnekz6VkgVT4bEAkAWxvrEdBpenU9kwDuaEb2YoE1RDsPzxAQp2ktWPYLTZy52vzqEaDM7eycWyGMm6FfKy",
  "key10": "3qgKKoX5HhjqNZxVjzHxeB7pkMZGcyqiGzFZ4TggY8LcJv83kJCCPk6wampq7aHEPqYGPp6APRZnUBa5qc4Mmos4",
  "key11": "3KPS7NXrfVSPzemE575jbq2ujXNwGJmk6f7EExE4C5ni7qKU8LG1eBLcjDYKipQ6KgdmHo8g7mJNZ41R4S4k9Wsy",
  "key12": "2zoJHrJjfZ4A9ZHdpFLmf9jaLxiXd22m1XuVhz4RugX5gXbKZ8Z4784VqMG49ymbroYSnckyXTHFS2kMy7ir8ybX",
  "key13": "4S3rsdXrDGy994paS3JXF4ndMjkYMhLZsEdeb8riCNaP1113jo33sQSJ7bdb65hrWHfVYSPrfL7CLKhPGmey8iLr",
  "key14": "3JAcZJj3zEkk8UsBV4rwryBVn3ArN3zCn9AfW1YbuZUgMXVKqbsPqmPapbGbdqGBkgtLQgeAuxvSE4JjdgHssV3F",
  "key15": "NGfdiN3jc8g9csEbfzvVUDt4T5c1BUxUpRqqjbZ5H1kPZa53RYgzc7CGZ2SMr4uehuHY8Vgx1KhaWprU7VRq98b",
  "key16": "3ANjms3eh9BowZpq8Gbi57nFuMKTDPpPU2DrPPodSem9AmywvWM1BGNTmmmb3XdTiVReFmriX6bour5drmkCUiAz",
  "key17": "2y6YRpjYo3gjp4RS8QmhV28tEp6BSq7rph1w8QLpBeJyWRjEHuGLwgTCpwnXdCkJMNP56Cz3xcRANS28T4kfhEvW",
  "key18": "4hG6sqq3Jdt7P3jjE1YFpZbmgLQsgSdojF5gJcHSqxkwx1D9fnihzZMtScjSSYQKAe1iMLtAmqMai8as8QSaBDZK",
  "key19": "3jpBr9rsSCjiSp2xzG8ooVegmxFL2NQ56nM9hLuLKJqmckC7STKcFAfE6Wi14pFBaN3FnSDurP1kxacJtJrjEaSh",
  "key20": "2qLTzGKUTRs6sNEgoiprBY9N2xw179aFdycPph3nQgcac5nsreAtskXLzAHyryorrGNGC5cV3wi7a1rqiWQxWMjs",
  "key21": "UtxaoHmsQkdEFuK7J4TZjtDDpDkz7APMEuW2EoyGU2YSkeaK6iumhszvvR3NKtGdRziznzw7nxDwT5JRgfRZaUx",
  "key22": "3Z3FZn44N9VHejb9f4SdJM6mPKC1F7tdFnXz7MSXmumanYFCem9USU2oMW6SdmZhvBbTXp5yEoNtTYMRA8CiMBVx",
  "key23": "2dHLDh25ngivRE2XXyJUmTo43j5xzHALHsuW2abdjoELzJENDimsTiMh6JyGboz8DjGdx4r82YGPd23NTAWPaee9",
  "key24": "2ahxhisFc5nmwXVKPtETFKewseMg56NfJQ1kjTPjkBnKsPukaHqpTFDmaofQDMYLEmCJYiMSDfnPHshSXNpNQudV",
  "key25": "3uLBVcZk1hKqGD44cBUuqnkWBxw3gt3WNnS2RTdkYsuFu8sTwjWQjGQPwRZZMhVTxsxSwCe5BebmidJZNpuXmdq",
  "key26": "66mBiHgXRa3HXhATXat5MdKaaLBGdMbv97zp2p9GTw58uzNTHKN32hrCuQDg76Bp9D5obTyC6SvadGEyHE9AVsU8",
  "key27": "46Sm7pRMfu8ZmnBu2teYMtnwCBovg8rcKaAdNkKirtiewhXuRm3oa86coxc4HNdPqsXpyBUwweid27NcriQWN5Fw",
  "key28": "4uPhA4MPgvqNVmg4yNdDtSHMUFkTV2HeqNpRTTqfLi6YiDcjKs8isug1JYmGemWaehyNknHJAJJq2Rphg5bZfM41",
  "key29": "5QteG2mgVjvG7gXW29Cyq8aEUZJxx1vz484kDchF4i2JVE45ioQ1CNYoCnaM3aQ5exNZZaHFHDGGuBFvhLdsCQWn",
  "key30": "32dEde3HcCbUFsAHJkXZnggofhCaxwssF9qJxyuAuWt2H8JGW7XzVJgKyv3uKYHVYjEHL68T97qdX1g7ua5GkKZq",
  "key31": "4aKg8eNb6LMoPxKorhiiK5wVb4fgF1sHJyudfn4cpj5P1BWzGo4rb8nz1D8jtEU4p3ndmVQJpidiFuqxkN1uHcjf",
  "key32": "U1mNEpzvd3bSxPY3S1XpJXu4WbBa1DoWVhJP21iAbXEw6mSaFULAQsDuHdJeC9dv5pvv6T8a9c7dXNgZRa277hp",
  "key33": "5Kn24vLDMU9GmNthJJYXFtmecRSYiTzpowKK46cVMAKJPzajC5ucx2D8nNUjK3vaxE5dc4PG7Cx8rmGbjvKZ35wG",
  "key34": "5i7BWrU5jxTFaxkPzGqcs4nEXk7sKaqwYSD4VmHMftWJHcq7kdc2DQW6wDFUdQPwnqBi9pUyHnQEkde4HcRZmuFX",
  "key35": "WP22XGjUH9xGSso8QT31ptP5FUBiBQFp6tMS469XV3dx5cpgxrUodrPU2ZYjetg7UCvrQhzZyRH3UjxUVuCEH6f",
  "key36": "2xixMPbXEHmbtiLVZfNyTpMaXTdazVVd9tmQMqY6FQqnLeFmoiombUacJDcfTST1e5GrLWoicw5PMpyLEQrkuY3x",
  "key37": "26aTLzEr3Y3NZJbv7vdref3qhoJbWvTxHsqZ7QtXg47qb5TQbGcZdfMDWQgpASRb7Q6QBbavVGRjjJM8YCbhRaps"
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

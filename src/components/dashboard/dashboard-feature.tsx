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
    "4ZLXaiXSWkbai2Z4Ha3WgtECU7hu3NUWkAX2mgPfukhJthoLXq4vEYNSJVuPfFpxQb6gAeahwyb748cLYD7x4f3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ubqapsmjRKERpK2enq9ZDuGBCWjEAvJPdpogyeSAgcJPXkbkRxy6xjS2HskK5oFHTq8rNWoeNguXk9bYY38V4XD",
  "key1": "2R9NZqKQqUmghbYoi1nF8pQEXz1kJKveNjLWypFxurcktyy7VWBbEo4UUsXKWuMvbSNeyCTptqiyBoCoYR9TTEeb",
  "key2": "5MPTXDUMJzYquxEySovSP32jdeTvsWJpwD7M4UPZ6eAS8wJgdWFmWyKWkbdF4dU7Tg3yGwxcEwoQTgARemzLo9NR",
  "key3": "yhDFgWXibWStNcrJ1Usrzy1LAma72rbP5Y9jrvDCvaPSSWDsKf8PCJidFNC7jYY916o7mvGeFgTbutgRY5cd8jU",
  "key4": "etdNihiGTBDMQbqV38SSGYFzejU5bD6jwtq4cSofHZ7Dugj43upTx67FAwsin8WEdCndup7KbdNhtbPKPNt2CtB",
  "key5": "3M7TYANZVsvaKNMmnRqJmqDt6BW1JcohLTLwE28ky7jcmb4dx3rfAHGR3USpK4f858DNvC8em6PyYWYU1N1E78cB",
  "key6": "2SbkQ4o5gP9LdggmRzB8WaXMWAcXr1i5B78FZQikYFPyFXGJ6JGJrypHVQeeeXXTE14Wi7DHUw1BxnwzMvK6dzFs",
  "key7": "5aDjmKhFfJygSLDuQCS2puPnuwkkCqyPP2nBwWcZ9627B3FophqFmj3n6XAZo5c94VkfUJr5DMcsoeftFXSj3aV7",
  "key8": "5BvKkWm59C5RAae4JqyCEepFeousB5meejx7nNWAqpGhQJFmRoVUYXS2QXB5rp8ahtuEYMYkUsnDUSyCJ1bxUqcR",
  "key9": "2JyXiJipjAMJcUUTMBzFZefjKvHsgPrRFcsLHdj2QPcjWAhPbLJiehSroVL2zaRYUmfpSWVYsoSwFJ4bP7sE2XCb",
  "key10": "5KWHiFtFiVkCdnCstm3aEkeTdnTpzHXXaGyx7b1VjioE9ipCujLHCZZ6urtkVnfNy6SAqujpZTbdQmPXfwMSgxDx",
  "key11": "5cm175HXvD9w9nqW4q49eF6Echi9TWTpyQmaviY86EJNNrkRgC1E42MQmEeUS52PNkRc3EcoU39XdN8PHQq1E1tw",
  "key12": "2pdFTAADHB985kEeR98rsCE3s6W2TJwgu9EhsNwgX3tSBz1UUQa5wcFAZgaPjuRut4z4T2nRkMpZAnH1FK1mJFEF",
  "key13": "5H4iSVJwHGtK347EaJWARN8LA2ey9Dpq2TH4j38kNPYP5NNC3oDD1ChGD39o1kd1d51KubUPXTDx9EVDAiVf2Ux7",
  "key14": "59aUZxgea3Zsh1A28Sid4GYep5MQCkMvSWWxhyg7PwksRhqQpQfEhceU1HzrrPzvRsbEcJa9XjVQKtDAJWTq4gZw",
  "key15": "4k1pzJGtqSM5sFBqsgJ7ePZHEXE9rZKRZK58RMiNuEZQxJx6hUcHmXoDYXg1u1m98zh7ZpKh8AnzgJH8DWdkppmT",
  "key16": "2MFhBdvdtYquK4QcjteVFJmtriqPfZvM6uQVUMC8KoMwBecStUoyrdDvuPne4PVHkjEwM8rBguxjH5bjkY7d9nfh",
  "key17": "7xqrbhXbNB9DQQDTR9iqjnGt83dEp7FvnyPxArS8goQC6UAV2zU39Ns7MbknhbZXb38SVxszqkWzAgnbqvt2s81",
  "key18": "2NTjRixC5DNpU3heizvajAyYZaymWsRFahunVoFZYMiZVH5tE5heD1SryBciE62hpJuVUmFBb6mjujEWGMwoW2Qc",
  "key19": "XtFJTMungwVJyHG36TvQ9uZpQREDWEAhz5p8WcaNAqjUSNqxfoP7FxHN1NHLAHRpxcKVDafqChWtyYQRVHVmGxs",
  "key20": "43SNZujddjnMEZSPAVBk13PhNZZpr4usuu7amHXBcfp2QnVUzK9YJw6WuuQRhD2t6bWuyfX7q3nhAwLCdER9SVha",
  "key21": "39PtKupu3RXQLJwawFVC7z7ZynzhRo1KMep9N49JGTgBx4NbW3uxkobhaertL9NDjhiapxxLMBZkGQcE9MG98J7e",
  "key22": "3H8M1F2SyB9ki2EYNNSzGDqcn545WJcare2phpFtyan6SYcXDG4GofxVi6uZFnACoAvBwS5RGQQqGW6LiauvCxke",
  "key23": "3yzxqhbJxoZwUvrL8JwEyHGpV9uzpzcx6afQs9cKrtWbv1or4YwrpTJse92saafzXanvyhfMp1ufJLLsipV7Ki9s",
  "key24": "5rZBg5SS3pFaHRhPZsGWHrawka3KXmP2iMYpJLHW8bDJbUD2FcjXbTFxtArNsDamLVE2n2odeMQYUCMuxd4jC1hu",
  "key25": "3eLcAyDuDTsgRTy9wZYUdM8Tf25Uk6bwJC66zFWkgiKC9z1KA7fo6pmHGohKeXtmZsG84SbrqYisxHoFqR7SEkwh",
  "key26": "3Wr2hyaX4FXv6LNXu7QhiGf9oF97jca2R77V1AhA2yf24mHAu5UT5a8TYn6tXPBT1AXs6617uQqRCx7HfK427ZCb",
  "key27": "2r7BhxmA32e5PcaonoGYso9xTanzzZuEgL5apszqtgMH3ft298isjWbQidbXdEr9GQPiEkcXHCUjfCBFHGRPzgrz",
  "key28": "2qfe7GSZAfHexJRe3ySjEwWu8B2HCgoWoT5exxtCHp1nV6nWaKQBd36XMfm14icpTX1hSA9Gp2bzc5ZPFhPhNrX5",
  "key29": "5nZTe38wrfmw56SePzGzoeH33QUDiBjSHWKy4EFi8B9rDfRDeEA6JXVG7wpXze7NfG9udbVyxXWpBBTqqg3hQx2n",
  "key30": "3vjDvfUgoYvBLNfLe2pg7Xt5bZRKaZQwHk4UAVbvg9BW1LySwj3ix7ATaf8sm1eXkQ2dnKc2H1HEsn4c1ySbs8Rr",
  "key31": "2k4VXXVAUngmSbLWwmidafx7dMQidbJF7DEuntbRKb2YBvg5VF8hyTLg8vhN6eK2UabwBYnp9vuoJCZsMbr1KV6w",
  "key32": "4y2YqGwZgBhX41TAgBHgLpXrzGgYGaFgTshTzpi7dytzWehZX3Avd7otdRfXiBxNSVqZd4p23t5dHM7gL5mtUp7c",
  "key33": "gW3dG66feAcVaKvsp4nHnrzHUMGFuwBabK7AfZ4GyactnZfMx4m8tedXnJPmfZ3SDwtfGogwF9LParnTY5eCM4C",
  "key34": "3ASv2aJnM5BzCupuXykNqxAKQkRvVg75QzebLx2FeJSxwcHWbx9x4jwNLPdggRAoZy8XMN2AC3JJCJfjGc285hcT",
  "key35": "4sYesvBQqXJirHxU88PNuQ5ERjf1Yyj6ugBTwza3KVTyyS75CGDyoChUixC1fMGKU6ATNHaCWj1XwhvwUkvtyfGM",
  "key36": "49jv3SPPJj736XGG5XC8Fzo1WW4MLccYRfSWeCZunnKvdpsS5Ckh2b2xTT8qHMUhJ2erJPfMnAFw4zxDhXnLHzbm",
  "key37": "44qsg2Y52kqbSG3hvND7MGrcTNP1Q3LsYKZUwirfLKWhdRmDzvQfqGAzrpFMePvWv2A6cwKdPEBV9JtnqogSpaES"
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

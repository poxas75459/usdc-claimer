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
    "65t74wbd5mwbaHirCAzBxPL8xXx5UWrpAS9MiLH8i9LNxD37FTwNP5UuKeiCfD7nmVUjaSPehNPyzP43JrzafxAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCgcFpmMVdqxafa68ccAqKX22HtDE9y8AjjnMfQK9chqbin6b6zJ8c17rhwkehvQzGkESFJ1RNTAucpYL2McgwM",
  "key1": "4PTkb5krPx1ZPeeujXCooBkfkibsZZ1B7DqnaoGm6DE3VDESncuoKobVN8G1jP9aUtVFkCX5KTPyVba7G41kwwmt",
  "key2": "5oZ2rfCABzFr3tDPuETnAR13PiH2PBgVTgdeDexMwhSZWV1DCqG8emSQZih1PZnJu5VYed5mZVNSC9xatqN5SrSn",
  "key3": "2oKLBvUrvjrqK2KETdPaetoSFYoUEk8p3juAREkAQz6BbfLWce2YR2ia8uXsdrThaCuTD9zputTtrr8xY37Ey7eo",
  "key4": "5Z1S4cX6pwSxmnnKNdJs5VrNcGYnWJfvp1kqGqbrTPys6KjT1hntGv9xo24jHdEa17CA9NyJFmf2AofSC1GnMCRK",
  "key5": "3Vjkmynz8B1k7qp67rU6G3ZLNn5NzY8j4XijP6Nrut4B2d8EsdiwXdA4zdE3pnygPgECXRusycE3XabvvJLpHdoa",
  "key6": "5zZdvrwvoN3KKTz3xKHdyMjmJcjmPpDkYHVcNgLBwjJmuRHNsaoucvQcfDnW1vuPKhf3a4JwZ8UDr7muyLmoGuQQ",
  "key7": "5S2r2aKFvdydUPmFELXvDg8baP5QhiiTBBNuULGybbp136pteznucejD446ePq9LB7Yh7oGJ8h4jyANLhFWdkGpj",
  "key8": "5TYXgjDpQyo1nXQFUrHwZHzd5cGeXyqkyo5ZrsmrAe9JaxTe8YfLsHFJ45USANcPWRVs3yw7LGYy3PtmZ4PdZjvW",
  "key9": "tZmkWZ2Hw5CNQ25CbB9J18BG1T7FtWMiQXQn1a2uzC6t9mApzsCYkSsg4BzXneBDGVKx3yWksGTPzUgq9vcSMsu",
  "key10": "iedu2FA7iJKkSubnJBwLHAfqdX95JhyscgmYyvGpR3zAarz32bQhLDApMX4ZS57aDcTL1o2CeZN8UF616HPNGjd",
  "key11": "FjPM96geNHGrRrBPacasS61EdGUXxjypjtrYps88K5EQ8Byhcv4fsCZ3w2jg6DNGgny182vuucf7rAYws1zNjYU",
  "key12": "3gtWG8M3X7XdvKhL1nkLhQjZjMWxHezxKwpVDa42BvKj7nRDmpoQagENdW4KDuKM4tfywGaAFcZk185ME2fukmWP",
  "key13": "3RhqsZhMrawjY5GbH584smbHzqV82AoYZwDkb4adKqxg7eoUJRovJwmsJRGKeP7LUMVQdCkE6xk5AfgM5MSMNqXs",
  "key14": "KnroQiULptZn8swtKYT4tfg9abj1eWjHPRWoCyuFmGe3idYmfdbycaibAjrUxM6qndtFrECwS5D6SCR5yNhhm8F",
  "key15": "4Wtgfv479Xwkv9mFz4wLSooqMx7hSAJtms4pmcAtSw3RLfCDcyXob5gXbw8xJpahkgJasn3NDFHdDVkKKgbT9EiP",
  "key16": "2RiFZ8Vgnyk9ePvmTuBUcXAXAmJgxekXSWxndivawqCzkBiK613F3tbwDatEzWRhmKd7Bg4R8oN7VGY1jquzamNP",
  "key17": "4j7icQLhmSp6Tbf879kHgAeJRimUQCLEEDCCvZbRYg81ZvjCRGxSSbmj1xfihMSimzpfPA3pwmUh8TPKuMmxZRXV",
  "key18": "5oSboLonh8fbag9tvgV8y4GTRdVcHginASBDj2xMFUoWZfi1HR8BmYPFZXYycdKq3o1PCAB7EWBtYLdfppBXsapK",
  "key19": "3acXPb7w1LEoNNuQQBbLhUoqfZUTWYF15hLM9FXnYZumAVMu5LpAMnBUN7jhZkQzJPAhfEdwN9iFRKmc5HVAhmmc",
  "key20": "5qHPiMmGfd2wXt3MFHDsqLaDroKQXxwuc1cWby4HPgRuTBvJehaHXrk78bavDjzjJFWAc2SNptGi2fhUgxMbtNdN",
  "key21": "5LmYkB8TfFFCuVGbLU6FmHabReB9PsXvQXes11kAkRwGZ5eahZ4jwZG1F9NamG9jtkgc3w7B5gd7EHYnAcSSXJa2",
  "key22": "51LWgmp2BqsjRuz41YjB5rGQrWsNaZmvGXmyf478eP8DnaC6s5Np7bFX3cEeyJ5tRzA2dTaiZsQrHQJiBkMySYN7",
  "key23": "3gj3G3WPyGVF3Kk3kUSRmMrKu19rMnogxQDLbErNk5r5QkHUafas6wLsUGZFm3HPz7sXkEDfL5F6MK2YC7QMpFEJ",
  "key24": "5dMqpTYHJ8xXwoLasEzZj9gnqL9Je4V9CVf7KjahA42D8XVYPeKyBsYQGoYvsbSVDPP7R42vrqBDBrcPjBTAuNGb",
  "key25": "5Gywf8Hmo8Jsm8TX8JfFdZ6eaXvMczDZRW6bjZ7grotsYr1YiZv3Twmc2NYbkj1AhqHFQmxGei7jLoRphg2xjE4L",
  "key26": "2ZUq1soyFkMwFb7XD9cnDGU8mLALLbbRLxZYYgBGyJpsEvqwGeTRNHoBqdStuvbxCNLhFUDcKrcsgq6f4YcAreA2",
  "key27": "56fEB3BbB3wMcT6YNeW2bZmzeqL6ASzQ6gy8wDy5x1FW7zfCqPHaGBwSb7jPiYBSwgJzbgq3e78ydcc6GnfPGwxh",
  "key28": "4ngLpxjRM6wRhj1h9fBuU3B8DhZQ2CBfYvQfF4RNuzN9T8rSzgo7txtUWtU4MMWoxi8ECBZ4NZCegJvr5F3uEdKm",
  "key29": "5ujboLExNQ3W94xf2ToRrXufdRJmEbuhZf8vnSdayZPd313o1FkhaxPuDE3CyERjsGZ2L8pf9L1sopVsmAVJoHf4",
  "key30": "5sDWDgT7tVXQoUYLAcsxvkhoYq52w7ir2bbsz6mzUhp73ATsDniyYQtg9GjbYpT8HfTXRKAvC3Re7B9EZexdiBCQ",
  "key31": "ybT5oMosktMKQmuuh3EDbJB68wuLFNmqftbYsST67ofmmYqgmew2dijiVMsh4tUNn1Taij1MhkinmwaLP5PSQJx"
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

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
    "49HXyNwDBHByPVX46ruGE3fEdVpTRQsJYBE7qv8Pi934vhYTP1dzckCsYxXJFuRrYPLxdE76GSEcGLzCqNKgVLQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osmcVpgpmaUi2x6U38nJjWeProquWPo1MTTQ3zBVRurnp9wir9b3P1d9g7h1imXYyeKNKiEetTJjEKJyG7MHRGM",
  "key1": "2HowNSQu6W2Yim4JfNBySFVaFSnBe1kWfjcbYjxY3iwUPhnZhiehfquHvJHmremC5G3iiLmggtKHDxZTfigE81Pk",
  "key2": "XNGJVQw16hVVKEzPkmP2ddz2E7RTuM4pQq5STe49Ay8hHBBWpw5EDJTUSFrej3ZhKAjqz2pB3kh4WPutcH3WnV1",
  "key3": "4BdgW4vzBVhmpBtbmEEc5nHAz7assDrC14ZNCuN8WFY2SFk8tfb988gFRkv3EL45Stifqj9boRdVUsmBHkgGxcLC",
  "key4": "4qoj5hXuNjD9YPD7nSSr4ay4VDX5CKTwRKNKrEvoi32qieiGd5aXyPKrN2ifn9tzL8afDDKgZPrDpjf4ZMq2sHwU",
  "key5": "42b2sUUNzy1cCLEQyscxpFGUzebZtLULfC3DZek6tMw9KGMn3muN7eWqWCZrRB3zgzWkfLT965z7qgG3THHsQ55T",
  "key6": "4hFwTLJV2CAWjeAYQv6iMYW8B2FBKMRFYX6gtWnieSvPCXtmJ2bEFJ7bya7gedRqgxehkcA2YMBdF4d1XHFczwDY",
  "key7": "rASg9h47YcEPLvvb9mTn8hUsibMHfR7e98xu1oYeN3h4PbGQstT4iAz9dryPpy15nDniMhAC14JLxzDB44CopPL",
  "key8": "4FcGP6AiRGcgAfk6ArVyCfeXmvQZE4WFZReVHWzGAMU5PiSRT9siQbAXeCJKAoUWasNtyXjh32wQKB2ZcakbrjcY",
  "key9": "svbps36mcPpMXHXZ1bzV47nCaBTvddUKwBoptLgKaqy8v74P95HTrbRnVeUVRb757s4tdexF67PoJ4AW4emE83y",
  "key10": "2RvgWC6LFTuq6sgEawKVHmY2kmXMP1X6AJCP6zzeLRbqpNFVPwhANrY4P7wVJ79iy8xG4ga8jkZm735MKRVc87Rz",
  "key11": "5cwGeStD2NyzNkxVGwBsMMs4tYTyMndYqphuU8sVaEsAzRDcqZ7Y3TWUMebgvKmetFRSFvjBw4t2xAgfJTtFpr5F",
  "key12": "7fWGgYn5HZpifmMakMaVdSAWWc6dCjAUJxvZGumfX6Sbzc2NQ3N8MkXt2YiUMbzNWyho19iMHcrurYSffPbWLpK",
  "key13": "4ZN9nQfPmVd6YmC8Hg6jyeqSQ6rmJidt7tomMwJT9aZuTkgFT6CBGyi7ihPenuTJJMvd23T29qLN3tU2616Ut58y",
  "key14": "2o9UJi7cjQ5n9MAHsJbqd2trgGtZ8h3wEZpCLy7CYJ9rFMwBa3vR9wikkPhkftPtVNBxCp2nmJKxe5Bq4mQCDq7J",
  "key15": "2XPQ7vDjeKtMSdYGbEaHtpU5TN1zzMKZaakT7vQEbq39GNWNDYpxqfzhTLYgBmc1NNpQbmTKdJyvwchb6w39GHSS",
  "key16": "3wf3PUtTLZSTjeNbsPKfUxFUPNkhzaLKGJ6VKHEtmvMwWbCazMGT8ZFKrC8hMqeHn3wtYEZwCtfwW3zPeF1b1fCV",
  "key17": "4cs9EwbLwQjiNyXkJGvKr7zWZVU2hdDKNAaz3wYqtmXpntNHc695DFAhonkBRUQ913W7CsMCwtMLJzgxCWavGk3p",
  "key18": "65oMPyB6cB4RV3X8Pv7z57FrhEdrjjqhbmYT6DH5fsSLAKj6BMo99jU4ydhsKJZ4hXLo2YpUDsw9urLyUdqP3dJu",
  "key19": "2V4uduujm69RqESxweKbypvPdd9e6JgbzS277VhyrDHmXGj5DfxtovmxizBfZPU5L2Ekzp5SNc6udpsWHsq94tgp",
  "key20": "2XMzWxoV1FCfiqGp9Cp9Z6mRsUpkdJuv3bPL2iJpEgAFAyGGzepK4Ly4Wpsv9RwV6UvzTgrN4vGhyqdLRVcqeGWB",
  "key21": "HTrGmwf93DJ88trzLF3bS92etVzq2hqFkcsyFjiYv8JHgJNhE7gYqPWsrNycVD1WRi3GUzKK15nUKGnHSmhavE9",
  "key22": "2AmBcNonAGeddxyfQaoFretTZUbwGo8cHAV4grjb2dPmfXZLJdJPXF9uCTiMqqS5DkG8jUKBAbzhPyDy61KnvgAR",
  "key23": "57uovjQbRzz5hwJkeXqCAPXgFJrqENLuhsosxZqnX5bNxQu5ofSBScCJmfB9seiCRw4L5aiEDUBwoB4GC26Vc7UY",
  "key24": "5TJZRbwcdj77rtUb3vLPajSBhWi7NdDBrnJQy3spHLUtRtGwmPcX7otcZk63wUz3PKanZzHDrffxCjFmBDpJ1e2s",
  "key25": "44iHFGzeZwuXMgEPHn2VTMLV45jJNHA5XijCEKKrY992jLN5KUVopkGhvekadz5MFRcyRqx4nK6jx1iCeZv4GgDa",
  "key26": "5Z8ydEMAAsbb2qxgxgMoRjCVryj9SUjT5hjWhptKkCiiXgvhfrf7eoB7BJCQ23szFfsQZDLtSzhHviNbsttshCNW",
  "key27": "5R5qQ1vvbdGHjMKzP6JPKWxMrufu1dfShhgwhfGQEEHDeATcganpAkzEde3EbLLmtSLuoxLeeUmYGCGtMrEjvKbB",
  "key28": "34cKagmVBattH8CzFuPXAgWLXXayowA7rNRAgaaswuRCZnoUkfuTE9MxBShihNF87PLJkP7LeeHzqB83K7FYYEuz",
  "key29": "4TY8fo1Wtkpo1dpetPpNYN2LvLhXyEMB5u7nqJiRu1M7mPqh9M89rXF6KqSWhx2ayHvk7BwR7hB18F7rTjCtRNr9",
  "key30": "2MXJcFsHs6rCioVoUhSbb797DNy7vWnnyFCM4FV1aqxVq3tHEQDqordHEREcfGedf4MXP5q5KjnEmsAnF78SvweB",
  "key31": "586J32ibiq557N8BJrFGwGP8xUQF5D6mU5hRdxhk1rmsoRNV3GM7mc8qd3Z9pGK6cTfMvc3BDKVSrMvXSGPNNhvK",
  "key32": "9GuUeKhn7G8TAExLZgdFrMBMoWCacLeqPvbp5ZWhbhmdSiFwMnkHVkDVJcD1kevuZaRQ2gDLU3s2kujRCcXXT3y"
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

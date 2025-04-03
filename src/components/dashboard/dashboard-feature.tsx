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
    "3AdvrFA8aE6oiaxykiEUDLrXR7iFTz5r69YeQbRdwecrtMiXMCRspdYTjAYakychTXvXFqWUkz3U1WgCa4JvGJDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mhgumVig4mKcw3CrN7Du25Sag1pqd1HxaZsVXtzkKeMKHBJRWWX7G9knz5iu9CpHEHkxaYEGDWnKfCvWSWRdkb",
  "key1": "5yKRCFKsWY2VDzFeZALVA5bmwJkWKZ83xGWM14GvSP1tHe7JAQAv9HkdqPrZeDJunAxWM9haFVCoduSLHp9DVaHk",
  "key2": "2VHQVPTzg1bBchhgzK2ZYSaXXq9SiBsXdhfiHUY4iQ59rRE8DKFLmR4CHMR7rpyKGzuoyZSLDTuEKwPsB59WVdmB",
  "key3": "2BnJrKFnRqPbVwJZQ1euWNuf1eXdhvZWFvaB4ct8AS1gKjy6KCDvAcKQSfj7Y759bKFT1bcT6oMj6RUG4x9bXYGd",
  "key4": "4WbSPDe3LTFEq7oeKvqvcSo45t1Fctzonfx6GMuLK3oWjCVurRPXGrhho9u7r7hssXYm6fP4PA3Zq3wxwLTFfvV9",
  "key5": "3b2YXeqc8d1wayfmpjdttxYenVrJpMqnWuiemnuYCSJsAw7RB7rV3HFA8TmMbaQYe5sVGJ3tbrwWWnEcVkVUb2d9",
  "key6": "3kG9FjCAhMbL9QmTaP7TFtg2EEVgHYNyDJsKHXn2Av8DFj3dBzWVftL5YMwuvYDLFkM8nddDKh283rmeJqWGy647",
  "key7": "4DtA8k17Ly8AcRcoTvMH3am2yFyqf72GMCr8vdH8Qj6GAq8EWbzbPFqvzfBfxCrhMjszAdx9or39mujRwVTf8Xre",
  "key8": "5355V5A3T1xwzHA2vqnwVpSgd2j4uCpj7Jz1AiCJWhfQoa262brJRGgKgwLqzYfCEpwCabs9L2EmXTc4cyMRSLMb",
  "key9": "M1UW8NfAbN9excYNwfz7Hc57Kvqjn6NxjCMBhAf6ay7eKD6JPVH8f7Yr1BUfqTV71bogFyKwedwFnWJD8ZwuqaX",
  "key10": "2day4du7yqA6nD37c3xnLZaLEeSJKnpx3S77EE9W6Ro1vzWqedfN9Dwwuo9bfbJWcUsW5yk3CR1wHdeBA4QFNfxA",
  "key11": "4WVJ9yzEttk3SnDgHp4pHeXoh636iXb7pWLp8y3TijEDbCpy5xQBYgEXoDfGzkAN96Bud51ZVTcT9TcqXtHttkRE",
  "key12": "4U5c2b6eski8PnWzEBDHk4HdhAtqapVqbRo2KCHWUgJdUEntDLyxXByAfS4aogrsSf1VysiKPtftHFdpWEP9mhjp",
  "key13": "5qjY4ZpkZzJNDxgZ25r8jiDTZCeFdd5Ruasrn5gveYvx2Q1JcKPDLipcKUG7rGErJ2UtcQ9NA9pDTxs2bguCNecm",
  "key14": "534eyKZrzDfuchjsorfmfVf5aPXBZxcCby85dJjrXjcGEEqJbp2r7yqD6kJ4sBHoe4gHgk1QgvV7JqHhQzUWfpNs",
  "key15": "Kj2NYKmR7dFKMaLKbk5QmcE4TrBwptcEfkY8xsUHJi4F65XL7gKh2wFd7WX9eFj4b5Da2FM1hveUgDi4gBCVij8",
  "key16": "3LTafrzZ8FC6HhVn4MPFa5YyXJPyKZcGEtjDD3HitkpddgyoXiL373eCedSUmEfUvj8vpTbdVXeVw4dFH7bUcTas",
  "key17": "3mFeM2gba7hX4YJL9GVtGLp4vva3CpQryZ7egWNsbc7jk4Cm4R3aCaDZ5GdUosuoh7iC8vh4tYF81VE5r8XAYAz7",
  "key18": "5Dvsmhj8eGmWSCkmm2FgqwFzfHzi8oZywqTQ98sbgwjjtkoM8gxtX5PdHnbzSdyBky9VhTrkwXo7eFrPhxUxB4nj",
  "key19": "4PUWKdx4R4W7ciUxczXhHW2FLZsZNR8EpeVijR8uKyj5zu3486E8Bt2DWprdDaDAB2cSkWn9taepnfhHaT78BMGK",
  "key20": "brQiG6gxgbNybQAxAsgd9K25n255VaJqPSsuVZiNGmjqKkRbKmGMP9gjAiyqzbW1HQ8i41z3yQKGxvCbZkk9aNW",
  "key21": "2eByTjPgm98Ecqpg4CWDCRzkf74oTamQMUUx6JjsPSwd6XAYRxSgCSVqtihpJAjqfmcUwLcEUNGg7pnCkGCoB4rQ",
  "key22": "3B8Wt4BfoaViDdxgCF1M7dELUWQpkDurnBFFyjVWb2WPtLZeY81DQcRVyvxHtCrEPvjMowcrzmESra6gbvRAomZT",
  "key23": "2ehaZ9eu7LLStVAVWDErwhGgPyJByAzG9Q4UK5W9nje5sPr6oE6iAbRY7YNsYDQmfNA8DKmhg8fuCmcmMRC9KJo7",
  "key24": "3BYQCyFMC1Jhxt2pYZdmi5NNk42yb9FbSY6gbw6ZAkjma3xxBJyVochbYrEDdcxk4be35NUMXVExfkX4oncdz7S2",
  "key25": "getY9mocda1FPtmhH8rxuJoT4qQMXPpBZFQnNu9thj4WWyHnF1hfmvHUJufhMskqcqdCp5yToU5rPSvxJmNrHef",
  "key26": "2Vf9r388be9z1xffwjDrZxEYyJWzGf3bLBqCXQqRX4e7AM7J56bp9L1F81FhjWGpgv8Tc9Bn63vKVYdnzCiZnTWa",
  "key27": "2PJZeT1G5NmmmqewjMAgCyErYoQtDDGXWgeuX5bsorRT1ENypnFpGFyWWqmtLt237ynJz5Mobz9J8xy4YBYY3fZM",
  "key28": "3YzrxMx6DYyqwfohtnJyNdK9y6jzuHHcCf4Y4bV9ZHga5oxCPahYSD1iwvHG3uknbXXev4NfgpNggf2QyY37Msvp",
  "key29": "GYQ3Dk3FbrExry3iJaaWFhHBmN2A6vyQH9Yb9oRYfrLyMy9iz9zHDmEbmRu3hncivRNx78wAi8URqWQ2N9K3PWL",
  "key30": "NqNDPfo2EJpD4bt6gnP6eb218sWLUyG8sxXbkHnFzofiMviMYkMWgrqHgAtCcTA4fUfxdU4pKzavJTLGqH6SqgV",
  "key31": "2fBj1AoDiKNrdC8b62cQXj91UmBQNuRfDXUf1mCp1CKh3GoM2uJfVhhodkvLbTNpv5XvCc4DZ76MM4HHeSaCySKq",
  "key32": "2oHBqMgktUjCnsfTo1uruZHpYoBfDNBjY1uFft81Y453kCUg6SrTHodiGUfNLCdxAQGrav6jYr9SUkwuPHsoWZ8g",
  "key33": "2JmbPCQkiJtZY3bgTC4nqWEWyayYwww8YALBfTvtmLXtoLM4Rw5BFT6Gyo6iAF61zJQ2DGCjJHWWJDZ5XN2t5Fen",
  "key34": "2QyxKG6K5fKG258aPxUDhm5kKvuWxvw8VW4LMaADNm6VopXuEFXHqvHtysUwHmk68qWGiTvxiQpBg6819PVP4Lo6",
  "key35": "EiF96Dd5hMzYRHyRkRHPfZQUpmphSDNrmMbaMnppf8qUsSbtiTrGh77SLVB9eJYWCrBKoDhWvVdYbEqn1e5DvSq",
  "key36": "4Qs6bjz4cpTZjhRt1dYXLJHqmyTzASbsabPpZhDmqnGo3i1EcktkgmYLoo3chxEEpc3h7PFos1xQhM3GMGk5HbAW",
  "key37": "3fyLcP5isg793mpzhboYzvL8WN8smd382PzKd2ToUpCu9a5AxrtazHPLZNQmzD4tmE3nzywYgWURMKfGTRmabTE3",
  "key38": "3N1AakPwK5uqXhgfUH6gF1r1fD68Yfe8zy9H3FDUWV27Cz3RLmnsdHRfGwT9YCzpse7dT6Nss2uwJfGtycdrmtTH"
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

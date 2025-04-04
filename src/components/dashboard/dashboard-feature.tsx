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
    "XiasKyGX4ZSeSCznUPT9ovDMwo3A4c4xwvwz6wVLK3by9G2TTrEjmckp6B14f5EjxzuQho6e5a64eiSueZnszsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36gtkaGbiduJV7xVDAjFRvUPAkiaAi3PRBPFyXXQJXVSUDRJbU82P3EVZwibs3BnQeboLUPT9uCV5f1Y4Zum4VAn",
  "key1": "b2dD7UeGUR9vJx7grVzrNWHpiZPiKPVchkUN4yHEJQsKh1gbmK47Aw7QWtcnxJxLJy5ZjvCAU3ogF3UtVnVrvHX",
  "key2": "48Zkq7gzjuq8x7F95LZUzQeECoJa9u3NXRuZZveyGDZw7UJjn6ccHUeQbZPWwWnZsCraihpnePAVM8iXHCVdn6s",
  "key3": "2C5J3SU5fjhj4WgJFvdMGH1eXZjhYwasuBBFYKHJ9oENU3AfJedfyk4F4Zd6ytDeMoobWCCaeJvXnKeSRLVgrCPh",
  "key4": "4F4QzuNJ18dhWk9UegbyMSE4PZ2zfKaV9x93aDxqpztsC1jnifaMpoSMqkYGXtTj9a3kQ2w1KMo2JLE4PhPnK56y",
  "key5": "2FE7D8FGM9fJWyS9XDAn9skiiMVshsFsgGTeouLsFqi4kUU3poX8HEwVajH6ruFnNpVN6GLn9hGmhHwFRd54kCgY",
  "key6": "8ypdxL7mk3ga3NhAi7rcRzuCZwsubsWJzHZsfy3QuwbX5MRhbMSzQJS2KhrMvvGxJst8jqGDqjeGq3bAUHqy5GU",
  "key7": "SyjtL6Gve4udUG7FjvjFyj3wHGjqanMDQ9pLEuvWkzRWXHigFdv8tHJkaouARW3h1pQ4zsHHR8Ucj7JY4sh5uB3",
  "key8": "4w2gJxE5yTkJwcM9UnwyLGP7PawrNAaGYKq63mCinGoFW3CotcTHezrHf61ATByW5ghiFwjbvwdsn9Hh9PWeasJg",
  "key9": "3adFzPBrm1g7gUfHJny2FeWgDcbxUeiR3TK9rutHMaGfec5kABMhVYRgVL3qrLDuKdJeNmRVqMHMZ7XJ5S7MK6eU",
  "key10": "3zgKU5Q6sjkatZuYf2i32CBFWHk99HuA1yvLAepzP37PhqfpGsZionxn8L1czfkGxri6B7f45LcVRJwZXcQzwhwW",
  "key11": "gZDmma4Bjyi4j2bN3nyfviEitepQryqFpL3inRCLuunj4tFbMFDXtWSr7EeXzuAoEc1152Rxjo5WvKYgEfKWuyy",
  "key12": "5BjtYWKNJVzJdGidHjV8skFpDq4HAQ8G3An8dwFFRWu7GaAfaujgS4PaBoQWuvfjoA4Zn5suvXu8hmtBrqghBRhR",
  "key13": "63n3DZsdQPLk2PvTPsFwtjGEAL4XGDpbz92M9L7yGigrSv8KEymBWCS3z7jCoS6VxXuA3aiXyUZAzJtv8Eh6GpmN",
  "key14": "4yTuBjZSYWSucyQQ8v7eq68xxUfm9tkTDshgdm3vmBLMdwPMAKWijvDu3d6tzYipSwaJwr3PV6paYqGbHYrygd6",
  "key15": "3be1igkvyeeWZg2zZn8eeGSqJMNJnRVmiiDNKycX8FY5pEXAUhH2wfsYhyQhDMf92vVRYRYnXWkmn7Q3K3DCZPFZ",
  "key16": "57Dg2GSCUw6btbYrjYbRndPBiwX5mitDLU2AY3R25GguPGTfHfRfpD2Dbw8T1U94gHiCPSMeAFyVBdHEXbn1PLHM",
  "key17": "2qhJn8px1DeiCG2BZvY9BQoTEUyY7P7Cq9UJHghQzvsSrGBeD4gW64qBphUpQaQf3j4wPwS7CiXhoVKiRcJ5TbQ8",
  "key18": "2w8vxv4h1JTZ945BvHhjiQQr5j3NWNgB1BP6FAnduWKdE4JdPmWb4jHj2W1giaErdfqKeJjxyAC2cGJpVpV7iGHn",
  "key19": "3op2R2r7eKxgNiwXCeY2Ee8EhaAHjX2eQVc8W1vPfduMRGyB3m6R3vUrxdi2AWuRhvKzLMG1YhNSxtWTqBLaePfS",
  "key20": "5LfjcQDeYTjXzXiPhPvjWYZMEFYpajtzHdDw5pT3afmAcfR2dCv32ZdSrM8via4isRo1DM8LMyeopcbjh2XFcGEH",
  "key21": "3QojAqyYfwn1qn1m3EG1B6SwqgsYqgin2TVujmZcARsYjTLJfP3s8hxDafsDdhM9eJ7MH5n2iWqnK9DcsdYScJ9",
  "key22": "CteQ4Vyc8RVe6MZFN3RXtNsY8uqij7C1PdZHbWusHBAvviH4dXtJeKVzp2Bt2E551tSrxxxGBbe4eFPPV7S2ksv",
  "key23": "4NHQt9fEs1au9wRZLtnVp4vdFAghmWNMXuEjEfRUAdsrqCMh5bLkREJseadRGL4s5ruFjZrXd14v4uWtAApYCarS",
  "key24": "4oe1s6e4MZBivSpCX4csGcoAGZCxM8LLbK5NDMMm4QcesjuKRLXEfcCPdQppG4yRHf3ivXv3UL5BBntHivXHgsyY",
  "key25": "3g3Vo1U1cyTvi1AHyaZaesfKfquxKPaNUtpigLUoU24pLsanw1obmQNXvWFmADzj5Z9Q6HphbEVRbTKdQq69vQfP",
  "key26": "4DCCoyRtoHFo2JQRv3RpnnPUYbZpAyQFh85wstr4QcmPxmV5JzxwHb4isHpgNDGJXWycqgTTXSKEgubH4BVa9qgi",
  "key27": "vm4P1FCynX51J9wFeEtsyWiYnQbPphgwGx6EU2XTk13a8pBYN5bUwj248ivRcXsezykg2rUDysXSkp8W22ghL1B",
  "key28": "2SFRW7BDHJxLfQCq9DMLGYbHoT84wEo3Hbc6aHfSLKLouBLQL7yATZZuue5YDqusa1qzEbhbjaJmyxu4Y1G7Gs2T",
  "key29": "226uW31KcKd1rs5izawNCh57uXkC4TDr1tUH211U7uBY2nCoACrhTXkzdK9UrqocgVJ6r4TPvTGyGZwuMwsgN4Ji",
  "key30": "5szXBnrA3jne8CrC6jrBzi6cLSG7NZTn6owZsbzNuko4QummTMcA9yGssJHMeNZCVNftXb6kraUyNHJz7zzdUEQw",
  "key31": "52rCKSWopXRPCm8i8LpeDCELeeYuzqZ3ggLbcEPtb4PHVjRf6CEfCKuQ7y9WUi166t8MxZma4yXEciUcgytkpPd9",
  "key32": "5F1oCEQB7uHZ6j3yZPWCNoV3BSwzYaxo4xFVpdtApQiREACXYbcxX4DLzvxV4T3QpnKAyjD4HqebrGxQ6qb6WViR",
  "key33": "CoxeT9MMXvtCHzxehCt5TSYb26xCeQ2ULrvWgzbS3ZsKovqTxUvf3SQALFCAFiQrDAdGC5GaqMbebb7HAjwPetn",
  "key34": "2AmBUUW9aZZnL2KnuHGztFjx8wnMPm9mVjfsCjg9qo5mEWu8CZdSdbMo13rPNS8dSCexMWcLndreAnxQH1nJ2K7P",
  "key35": "3GRBjkKP1EQvpcoTw5jGvSUMhB1fXZjrLi75ASUY3xz78iME4aJsLBxYEs21tWiHGQK29NMm8TH5ppt5jLHocQH",
  "key36": "tzbw413v5LjgecMRj6Ys22Psm1oqs9W349LCfBLFpZZPMmJSYcEohxReYoEwPQ7anZUaWLTQa5k5BJbHCmrw7Hs",
  "key37": "4erMVawSQEeYsCEd79Fkm95faaMNdVT1oNA1hXNNDunt5BN2rJ6HRqB4pUpB2HnhTWzfZkmn1HCuMtTrS6cggd23",
  "key38": "4j7VXvP84y2jr2mNXUWcHYvao6ekEhKLhn6VcosjTKda2kKQ7ZAENth2kL2h8ZudwXyBvWcfZUkeNfBo77Q2jUhG",
  "key39": "2u75fTEd1GtQUM7Qk42pgYRbFyMXReYQ33awSyz76sD6RqiwkU5Vt6AcmkyEi5SdzCc1rWoqger8qcuZkX3QAbjE",
  "key40": "4Cen7jd6Qz8pes6ffKuNpy9tfATqioUrwGSnCA8wSgmNSu3JQEoqeSmP9S9BxWJwGP5Va3sB5oUmjX68zgdrPRzE",
  "key41": "5oMpXkNzRUiqKVnsfSmMiwWf68QNkVTYeh2hNBKCPD5VHnYUQqdLTGAUKQJoNDgqftVHPjaGA3XYVKGnnXarXmL",
  "key42": "4dAMu5e5dxkb8BP1yUumYxwtgAwMcrJw4ix3ixnbr1gmDaQ3JvFqi2SU7D8MjA8NREwDwQedaxDYAfjNRqatjEvj",
  "key43": "3sPVBqRB43wqJBDv6mtNEc5CpTwjKGBc4PiN3r6Hhyt4gne4w62NLWxBu9bTsjbYw45iGoj3UZe4u44Dp1LAuWBb",
  "key44": "4JxzofmkzqLSHW2kkkoRjWYwpLijABq38zwe6KDhCf9UAg9J4rjJibPFkz1r9UaYy2XAYkqqkWKtXezQfM3rQxhk"
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

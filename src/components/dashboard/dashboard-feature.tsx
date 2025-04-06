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
    "3fkkd54pZSAyG8qbzTU2AQvNJsZ31csYxznxNm3veEbZYo37FFnyvRRvbU3cymEgK78WdiyCZozjJiLP1UVRU4nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6Xta7U8kZPFRNQ86Lm3PwpsUDtNpk7N5t1nbf6rT8SNsdHxkL86rg6R12fHCGK5aX8GRyDCSpBXSMd5MjVzmid",
  "key1": "4EwvmNrWkAZQM8cAik3KiYJ2qoUX6yNxcfShQhzi1PjuZQQnUFGMJoF3XEBbeTcZ1Wv6F815VNpCdT2GbdJFwtPp",
  "key2": "eDspepMvGf2fnUMbLnPswr4nQ97oZXaneJYd7GrpEqyGTPqHLke4UAkN1ftVCgs74Z35KEMUdNAKZvQDH8XH3gc",
  "key3": "5CSLfg7PSHt3c8dt8PjXk1td8RPg8nxW31X8Ys4iBAtWz2eb9f6hYp8oN6ieaLMVPHqrL7wmi5G3PZTom5YyKhrP",
  "key4": "5hbVhEovAGAQHH3cb9N1czhoX53KvWN9Ax8eGEutX4XMeEUjQyF9f3Mm76iojiH67CTUiCg3bMnWYBNfSDhq57ri",
  "key5": "9E2MjZsf4XP6B4mWLjzeE8VQtj515ZoMr8qAPP9Md5cr3P4V5aZJ43hJQaHjm6QtUkC2qgzYZMAkvbrTf8hkp1q",
  "key6": "5zdEKKGF3N4GrJUPauLEuqXcoHUaLaCybpDuLqpQEJpfcFxoxYfZX31aQHWskS4XMNmtncVW4RCUhRQBX1Bh1DQi",
  "key7": "4ZqHrvrDsNKvQ4hCmYxdkd9CmkP8U26xjYcPpqFzPrvbWLzwRLPLTQwDjzpLaBHxp6FxMvejT5oQXvpHU2xiXxqq",
  "key8": "3cJ5S2Xz2xFPDw9NuXtvchgfJLc5sr8Nv2y4VcG1mZXnaqfcFSQkzTfVqKPLHsvUzjdu1UhbURUKKB9KfwLk1TNX",
  "key9": "5PqSsVLhoU9SHeLY2mQG4c7tqPB6MMoLhwn3rSaQKEEFUrZ6hcap9V9ML9nAbFjbsmrFMuAZzWgQ1hEbfxP37bX1",
  "key10": "2DRFLEfEKJoN48YW5BVzcnaBokxXreSBfZrmeYiaG1aQNTKzyZnkd5nMCxQsaPHvTQAWiQs7WJbvuXNAV2wrk4PM",
  "key11": "3TBAb7f97N4aw6qUNre5tkJjCS8oDoAXtM5ZXeYeT9yN7ZUehSa3BSQLGCdoUWALFdgCqSChq6e2RgaNcTWQP8z2",
  "key12": "5ptbxiBbxrL7oR2Q9QYvGrRNan4g5xxhnvq9ghijkHS6BHQ41FS8MLLhEn1pWSCQ6LFLMaWhtXbG5DWhuSq8LHvB",
  "key13": "2scAZn6z2RJWZxpa7Y2QpQd6Pa3qFyG6bdyBNoVFKwSCDwZV4zWBLjr5Mo83skrbh6ddhZuwYfMxRPREoyU4PEYr",
  "key14": "31WTK5GaV24KQb9FL85M9yyENBSWY8q7CesChFSZpfLaXFDRbToaW6dy3FXCn5PDGe25DwQERUvrKEs8GpDsXrj2",
  "key15": "3ivwjZhUxfBpea4Nwha73hwzncirSf2An9MQiwibLUoUCi1Xv1Zs7cvZRadPBq5YWpTggMk23tTMZKKu9qLQu1Yj",
  "key16": "4YejbEtE56h8zPfzAQBpf2oG3pB8Fufa9bzUURxqvNa2jEPkvAwvu8AJhr4bK4EXcK4aCdLhNnYGYaKj3qe6cdhR",
  "key17": "2go8SDMP1wKLixtytKH4kV3r9ruRPet4X8Z7oJmbgHYTREj7wPqCK67B5RHmjvyFaHZN8PSjE4HAieufBSb8VEUf",
  "key18": "51oWhivDB5RQecuWBJCwB1pfmJKUwz94xsvgj3J8NYnBQqqmB7ica9yiJueZJ5u8woXBkNzs6GhqUczQ7QN4X36x",
  "key19": "65t6SPfcizuXo8VWExY68kdWH1McoS6kFexxrDpdDCwaXLVipcUpfw1eTJGn9D3fg5pyVohniNpGjsc2YdMVSPGt",
  "key20": "49QoD4NEniQ6k7hS9NoS7WpoNSKCaVDX1YSpLidr1tPtV6BNotYtwbfeLdCkouX4DGy7K8HLNQ8VA8DrFy7StUdj",
  "key21": "2xpqY9MMUTqSRiq83tMQncaRfdReMetFf1y9Ei54wHmdKyiLoTkPG6SxBAJ2QWUV9oCfWzCZUb7GquWSnhMa7ci1",
  "key22": "4bnUNeHwNoLEHwEHypqgRYCZxLkbXNVCz2UHJTPH3wpndAxKxjGHuFeR654ne8LjQGLgc62sSGttYbn3ePCeynSz",
  "key23": "4aYssKr9cugmLPHNaqZAFMjB1rmXGcjCUCxkEEP1HpspZA4BShhsxZf9DPmFfz2jrRPUapSAEsVw9PvQQiFpCkij",
  "key24": "3Mj2GDZ9EX6Ksq3hVhqPMn2AKdgiuwCEHEL4nGJY7tUQsxBeeqDFa6UpTHsxn3dui3BhYeCbVCfgbDKx3Dc36xrx",
  "key25": "3FNHCnxJyHWaDR2ia97Py4pEjN6nBhyAYN2JQfFeLSvXCCzJzoAY5KosnWGR4g8ArncEgKs3BPGMKfUVHerqU99w",
  "key26": "3HRo6zrTbY9CB6tDTWUmPVJJUE8fhbUNMJVqTuzn3PmF5ry8cNdkKRhr8DYYxsn47WcCEyJU9TsNsJv6qv6FMxsS",
  "key27": "3AMjLFSk9r4ZsAJsCh9Ya5XKd8iFhsFpjGbbW6bNkXMMzRpzgWFCz66YtmoruCXxNiMjUDKMFm9UahdUfr1qoNDD",
  "key28": "4GQg1J3UCFmnhMFprhte73AYB7XunmQnvxuVRaKz2FHdGBSiKSjhsCh3Bykn8XRG5gRKQMmwLLUFf43SatmnkRbA",
  "key29": "3sVweWhfStKJRkgnjK5FBUMLkJUwdnDiyCdZgPqPt54PM5F4wVpnpvY5LP82zwJAhAwt3vYM1qTEEswUeo14dBCY",
  "key30": "3HGH4u4nzCG4EfFhXK3Zmf8aeZRjBZJZE9m3JTn6LQ5auyDbNQ52j9eeUJW4pMtB9qnr8765eSLuWST2DzZk4Q3a",
  "key31": "4G5in7yDEPGqv3ugzTa2xcvhcBABq3hvK147fXBp4MRFk6XinWCMup4UyyxfQtybEFPzRXCfV9QLZrndzoiS6mAA",
  "key32": "npWdqSrf93qhg83WDQkbLKBNmADGokJx7c4kJTWoVPuiw8RCFqndh2eGJBj4yXuUZVrqWaCrug75FWJpyn2uZEz",
  "key33": "4CJ786JGQaNj9gYN7Wfr2yGUdLhRmR83YKL5XYern7t3ohMugWnefdM7prRi6UQZVWRF7DWUzFD8JaV2HwcNy6jm",
  "key34": "zYymW9NU7kWfgYazHWCMmZSWiZ9bBTCze71ztAAG5qBQCd1yzbRdiBXEV6pN19w2FWJW4HqKcMYUtEH77f2J29z",
  "key35": "3ThTvCGeAtZoYTkygoJgvBmEHoRjDi63DNgt6ysFpeTYB9HBciiDDcd1qgoViqqitzkpu4PxdMMTG8bFHoVWJJPE",
  "key36": "5d9Z4XHR7xBRJgtbWFBg55rrSWV9E14xrBggeMAkSG8FXE8YNnTRiLen7faidD8pvKPJcFYscMavDC8CMUeWo14Y",
  "key37": "4LjS3wmnrU3n1CebC61sYEg3xnkiyGMUf5ytxj4fhcZpuRFdrMytZWnhzJhsT7EfceDvU8mTbYTrkXd3xp12Byio",
  "key38": "4heRLYxBaR7YYLMvVy33nU557nJ5zxHHgrsVHDcMCiibZp8HFY8XfVF1mMQs9x83PU9KHLHD61nozQDnNWnFefdB",
  "key39": "56tXjupBmMPn4JfEjC4m9byvfkBiH4htGtYfb7LpyaURvVSHhq7cUpoavQer2b7a2S7FCfSerHufifWANJpcr3mj"
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

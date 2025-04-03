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
    "3F5DycKwYDXvVC2hVPhRUVKRdz9Z1KC2NBSvY2o7b52NPwTcMDKCYY9EmK3XgtW5ZkuZ7QfUYjJVDP9f5QXSMR4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agfv2kE8tV47yph7jUyJVxcv14s4yM8bWdawAPDDzgYvRwjGWVnYg2DAtwS1NRtWv8dTBgPPw7RhWMC4KmQqfVv",
  "key1": "4BE9evmWdPdRyvBS1W3EDYZVTMwNf4Kug1RRvuyKPoYgreX4JJ6KgkPnbFa2wFMu3hijgZS3ZuuFx2PPUFKCQx5k",
  "key2": "2bwieDjtfsUKHk7FRrgX1YfawuDDt8RDADVbUWyQ39ndmZ7avk1ES3j1tggbou5anFgiW45y8iM2gwFNCHHZWxjY",
  "key3": "4ZavDcCoAGiYBtjt6oEtuYRtf3qLS7uQYSEizDH1M6yTP4j8kypTMzAnbgEoRXjoZGBbNoZpS8ryTb9YiDFRhBAg",
  "key4": "3rPQqm17vuAq6s9GPbwgeeVwyfnpi463Qh1vy5k2h9jUbKKR5SdZuRygrBHBuAqrR42Arbver6WeGvGEmEE62VwH",
  "key5": "2NnSEKmSLmUEg19bs55CxzYG4Yro6L4pRFyx7s1rfY6PEZWv91xUc2JVMBxnqjx1mB6XKi7xjHDkEAyjdW6obmyz",
  "key6": "2frEVysFziWbcPU6c81JAUKrx8bt5bq4gemfZWwriHAUHm56RGKDdByNS81DDpgG1swaCnEHJfr6qh1r674jUmTG",
  "key7": "RTNWw86Rvy8JTTD6JXzFkQH2ep6PQ338ubL7BV9JvpLCFnTZQTYaWpXen8UjhuCz42Fz4jNVeYbVokHzC1C5SHU",
  "key8": "4ZsN6mryvCwh8yxP8gineoT4LMBLxTfmTnojAjKUmKrMMkEL31SYbLrfSdmaJihGDUyNPiWEYy8GGKJbM9rSnDek",
  "key9": "312byoFtdPmJLAV1KqS7Nnb1M3burdom5f919JDMWkCFLaYTpqsQ3AbjyRHxFDenxevFPtvXJzZHVa7BCWgUaoyZ",
  "key10": "5RhG4eeRAeV7nmqGTQhgE3WmsTwZGvhi6y4WXu16PtbAD34Woi8A6eFptMMFk9H5VQU8bB8eYwhg1CkMw18AqKLi",
  "key11": "DhgQxHES4xC3w2QxqpBXoDWvazpk3phePURxiHam8gewBqmknDfgf4Tie14FgLxekK6fe51qLBd88dzxFeNb4ti",
  "key12": "46pJCH3x8Yn2qETHHAFQM1iAtkdqAf7UyaLJgVRFd8e7vfRWMhwnKkYtKw2uTyyE2DTa52f4JKHuBCdWUUA1gMnY",
  "key13": "3skbNbkVJQzvtMRT72y4aC7Nbj6BpvrvRkVKriMtCa65jf7GDgsWsdfCKSVfTXt8LGajpLBbWF1ctKeuN1o7Zmxk",
  "key14": "4FLbuHGb8xAWAKkF4pKUGhNtkVNwM7E6i2S1JLzgk1CD6cDmpatBXQ34iRBGaY2BbyuUgjFL6XswEjJLg6HWh6A5",
  "key15": "2HogdF1dP6PN3bQsx6EQAVr2W86Gnd97WR6ciUdKGur84DzoUcBu5wCPTo2SGXsdRcYrsEvLqfR9hMewcFwZ9aav",
  "key16": "2xBsN8iozZzw8CqqTtUE7Jv2miwprCPso5nAMFE1Meh9LPZ12gU93hzHDBaHmmnPHrrdAhmbq1Em8hZYknM1cSxL",
  "key17": "qWDL4FqymwYR2vq7z6KN2vRbUoRzWv3cFss7LbLCn11YUf9wMcMwnxGR13EzMbBShAHGTSZ2rTfWW7uEfSeo748",
  "key18": "3Yx8QEDzJfzjwnrPVkyFUo86t9LCjnT1N31ytN4zn8My5BP4ndDqeFwhbcH1cnrN5uPFgfervGe2cJ4HihNWvLSH",
  "key19": "vhQDXpnEHKKXXgDq2ahvnEeoUuATHM1MYfJ993QVd89NPdcrHxBtyYuEG7rib8qLq7hjZnLVRCW2tBggvD8V1Zk",
  "key20": "33cFYLHwkor1HMJxAsMsvp4cgn35NpxtFG77VAKA1HmFCp2RXEunCxvm36pLTBgUrH1i6NzabupDKgAtPoNx1Arm",
  "key21": "35UpaV4RT7x9d7YotveLkJvUMXNLT6ik7cHjCbBoNBHJ4f6LS6ixpG7SRnRtiHdMyurggSYGW78GZEBeYWJKFtfc",
  "key22": "aozYAhFFPPURf42EWRAUB4wiCyVN4dgihdpJNgtJDugPwLZXAX9GEPVPeM94devh7kimQUfUSsL4g5gkBFuRfQR",
  "key23": "BwpBgm4UbFgjsjx83HVwdEmR7XbVJcQ8A4BducASqWZNPTQh8RecZRqAoAZR7aMZVtRvBvTQs5dY9cFNYk84fw3",
  "key24": "5e8Q8n9zKaq7qFuaEHJ2NgsAc7nmqdy12F9yv7cqGQTwGb7z7ZwHchPHfnrRfRdvdpmDZzAovGuySFJoPqvsKqt",
  "key25": "5qjL7oYUt6bJ5Jr8nJhAjQEHhJbRGypE5rPK4dnD5MehLw1hWYaWx2THaHTVZx293Spa7BcnLw4QQDYfyzccEmNE",
  "key26": "3Fg23cVQiFqH91W9nbXSppvSVFXrWRHG5asPyRywBVfz8Hfi38CF1WLw4WjWTjTpha2hnc5NJahztyKTz99wyCdK",
  "key27": "3gJBjJ6FkQUFDksxzjf95sP1UCmKE3o1Qtbjwo6KxfGtSVgfE7EXBqdiy7TgfQG2qHRoNbEeREDfpYkA3RJmCawZ",
  "key28": "2wRWLSHnwS4qmk8dK12CdZfffyY1n61tmk8MgNA2d3D2XnwGNU6PS4UFRe37X7AfqYN6kevHg1mNcYcJAjgYCMGE",
  "key29": "55siuJVu6R7vPGGmwJbF22KuJig1qKU5w5BPCTtwXSdTYDHXjX7v2YH4QMLHNf69D9YKnqv7yR2uwssbiemJV4pW",
  "key30": "3irqyyuVEG6TeFwhHxEptyD4mPPkW1DJHasT8DZpVUcj3AfGVffKwnQUJc9DUewUkoVEge54WGbwmfXj9na4j2xE",
  "key31": "67cBMRj48gQJRaTQy8CtphgDzZMR9vDfFzNqUu2RXH29AFCF4WDdcWrSgSgfFxrDzFmEQGtpbcUbXjDczBwQQ85t",
  "key32": "PfNs4j4cKD8XZYJ5qziugsApA8MP3xYuhtCugFHN4LEFvQMjx1m9QxKpcY5n9Z7RRu4NsKyZ119DrZn4H9sqF5Z",
  "key33": "5M71m5xpHK7ygcKEt6SAJdHbVxEirn3AsbLqCNDUwkN4o9j4MFkd7djKEF9VAjoJkzXhriPdNcLbuHqABtUsg7pK",
  "key34": "4uckSAwu9JyHFeUbNt6VXL9tpUjRmAstdErKNtx7S2F2DYF8bUbmFNk1SwvYwR3Vip9mFhJcipcGDVSpx8F7hcxX",
  "key35": "4Mv7835LKecLEfmtxiJ93QemSfXVq9cwVispUbfL2612HqQWY8vByWeRypMvP9D6M2ynn4RbsY3LqLpNhGNngwm9",
  "key36": "37mCyG9HXGmysdNovt4r9kiWRPSHWH8abadd6oug9UzxV15scNZL5jeJmNpZpcVBtvJbF7MdTW9bveXXXFis4Q1d",
  "key37": "bpvZeaBJwFFcVHAs3TyDjroRUso3dWt2iMntZnr4xgf7oJwbuUdaVfRgEcsoDumDFweWy47stdPw3HPxpjaiea6",
  "key38": "5DDmUQJGwERUVPefLAN5T4nLDZDCELL9F2PFQ2VbYFRkTvprG2jrcHgaQ41eGpzMAAsJCGgViKvzrkBT24F9gc4c",
  "key39": "5Bz6WqqpjoJEaVvunhvBi7cd33x7gKKt5U6yYiGx3LtHSy9w2MtoZZioDpA1BMqjGipf9fLKi7ESnxzsLZtASaae",
  "key40": "56VeaUXAgS3qzcq2pmYsUxmoKUDy4So9fLj6Z19Tp3JcKCanW53WGFMmdCUNZh4BEXQDtWuHtZuG2XPt9RQ912PD",
  "key41": "5iriCVjf53GywRLBv4VCziBJyB9sByk3ZVYF6aCEsLD8NirV9uo8tn6Fe5AHPy8Y1Wn6QrQbwVMRRGMEJFMResXR",
  "key42": "2SepJJM18CCTK5ZSyDhQk1XrgWF6BVhBVC8ojW8t4crTfWUSZib2J5HhodUBfpPXdLKMLL5gtrovSrmMYPfdESLd",
  "key43": "4sQbSD5t4F3otTj8xGKoEAVPZyiyD62G7r1xSDzUgyEwRKavejkGwQgMPAXs5n3B5SkH9hFRVhggu7ibABz7Egsu",
  "key44": "2DFKshzrUEsG4Xp1sUbDMNEJtfUFP1jZgJELhxuzuRB2uztDuAsAuNVg8KNJCMR9XhAfQw97p2BoHWPyQ3eMUpDu"
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

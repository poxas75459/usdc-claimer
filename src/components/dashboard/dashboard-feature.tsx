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
    "2ec1ibeT85sMyqb5C1VmK6vcK7oGhiwLLVqJaaSGHZs2CMxJK3Rd5ixE8s63VqHsLCFiodfFPt9wMrBqgn1Ue5P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cq3K9gx2FeP2nroc7dNXBYcE3Bzz3SXcYPTyX1NSKD5fCpEU5heoaBVqfBSRguT1SkS1Ev9rwzsJc1a8cMFXYt",
  "key1": "4krKGPfJ8Yn7rNqS8egqdKCygVnga6apduPTjbMjsvfgaDCasVPdBaGmB3AUfcFiooSkJmpcBakQvmFHgWYfo2Sf",
  "key2": "4ppycNR1LWNy7A7DXp75dJtmkHmhPHX8foSN8hAUKjppSWYYrkUmtXxyM9Q4rPVL5EndWnk4tY9REHcGcTqvQfx3",
  "key3": "5fzsqzCrrvHy1hCyCStxiKLjtQeZVs8pbKZbiYtsRAJrVBkzLik9TVpySLnqA9RCzs34iteuNoau5t732iS8jGzp",
  "key4": "5JUd9x27U37rkkTN6NFF86F687QDcEynRERpje8xiejXDLXwiqqULTEh9EwQ2qMPjvxXJEg6Kpdj6uQusCddPwZ9",
  "key5": "5CDLcRDdRNYbunJgE4eivjcoZh7QNLAMMXY8b9qhgZmtWmcSdnWbecymuq2QMkL2r6hQ5s7DTCBLY5bhyhqBMqtf",
  "key6": "cNoEE7FuoQq3fTPsd96T7i8Gu7JthBtHCqYBZku8VK9zroQmsYxaT7BF4ZHwabqg5xMyZ8hiDYb3JAEH9QuP1kx",
  "key7": "3Y9wKDAp2WfK1f3URjFYkKrxXzkkHuR4EujWFySerDeyYG91uvbf4JzkgQqwEVGJFFEaaWAo6R2Daqge6aZuDMtL",
  "key8": "rhbEq7cbDdPSMhJZFZoUbHGtYgqBDVEvJ3kMaYvozf73MrQrQSRe93sPeeL8qZvjXEA5JobdneqapYanbcRBYx9",
  "key9": "5kysRY4Lud5jUwTtbK3YT5h369mXDqbQsyxzFdKfraf7XQJdeJo1n6HgZHHaaHgsqnqidYH62QBbCLzqCPaQz6pW",
  "key10": "27WN3C3x47HkyXeKWdmiyopgzVFfTWZb8KZgTkvp5RSnfGyMMFSXBnu3Mtu2Z5zYnP8beFE2o2A2H31adzYvbSso",
  "key11": "3XFrx1TyCctGgMejKJWP8LX3nm2o7dAYVJMpPkM1wtFMAq47yhDupNk85b4rTRNhJHjJdN3cnkz6EUSsjNbhYRjN",
  "key12": "yeseTwvUVDcMYBu5jbmL4DhMhgy6BR2S5TvqnXHeJfvbPNjSRZD99jnXLJVis19mdvnEGsPCgT8ozitixZy4hQg",
  "key13": "R52562qgvGq9bieX3cDXTe3XdbUktZ3XLogPdhPyYT8qA4RVgyG9s2PvK46Zt1g4MJ7y4wjtiRQcWAoYhuAXxkC",
  "key14": "EAiM1FxQZC3kxb7ZhTiyRQBLD3b7DmkthV9UgmGsNkQoud4RWakR9bhYttq1a1HbDxAqkwhbPSF8YUXV96MoaeP",
  "key15": "BerUG3ivFVuin4YpjtkMJNkn1nCWCuwrZ627SrX4wFLNiEndFXyXrZz7t3UmR9Qa6xB8C181YDwbiBaKgGcF5DU",
  "key16": "2eHtg95edBkMeNtjjPo2WahoYpkZsrCe41DtXYvv4jQRsrt51bvRErJsJdPRwt1oaHVymGzGK7NbyKMuVYJxicxT",
  "key17": "qMny36yFf3RTD4NVSb4VvS3efSoSG4ib7f81yGF8GYWZGaQMDfCwTTgbZZUkuXhSVJAdDtkAyUKXKimJWAjKw6y",
  "key18": "mcAFeEic3YhuWVrooGc7sHAxrHt7RF4aWnqpdahMKeDNAeHL2Ku57HzSjtA457LfKks5wDhVqkCEL9SP2VsVAEG",
  "key19": "3kkcgz4aw1twg27g8iBbsGmNY5ByfDE4aAVvVo4ixXYFHaeZh1YyFjF3DFs3hHnGyPXWGvCnm5CzKxvyo4TBKfSR",
  "key20": "5ZPDHCRSSWL7BEGEuDSUoJ2Aoy5oC1brK4bSpRkkwQS6isbj1ioyGWkgcoFHCT62VGP5J2xDPC6J3VFwKUiDKcg4",
  "key21": "2HX8KCuxEKf7jHkMxzQujX9QKzania5KBit6Q4VM87ot8LRtBdxyCZJ68jzVvJbXtTgzBtgabAgQY218JVKDYEnp",
  "key22": "22TKfvAfK9XstmKdtkrd2to9rxD3GQF6bPfGs6QfVCtvrTPq9EFLL3tcNeb9ULeZd3whuyYiKvgKDXxA5zh2GQob",
  "key23": "2BGDu3gDgno1C4r6WvhqXeBmGWTuKLdu5GjiGkLZTnKfnWWrn1cga5vACEB4DWQiWnKvQ71UPTtLEdsXWojTu5NF",
  "key24": "4PN75f4TKEQw1V8pHnZZ9N5pRxbucYMEqacwn7EPzU7gYKQU3MiJN2o9a3M4RT4Waq2kRBzTA9LjjLGCMhQLcYQU",
  "key25": "21PrsAckYxnnmNJ3tduCwPSXQaB4XxCHBbhiajYTfHb5pNBkH1nS6a3ztYdiyrrD6GfbfGH2Fq5di4CJTkaL9yrX",
  "key26": "mVtJ1N6gc2cGqsTEfCjorL3zsCs2wquNXPNKSSPkE3BGrgYAttiahBuwvDr4naijeWkbHDM6BNUDBdCSAKX9j8G",
  "key27": "3dJCxLdHfw284bbLcMY5qa2fQHZpwmxEitRSe9tbGwMB5fApgD2m9EDjJiy3Cu5zdW2Ns3NNq6G1FpQooaMFdQB8",
  "key28": "3LWCymDuMqwTkGf7qsH4BAPp3SqMUMui8Gmg4jpAvu8hWXViLpwH6f62rFuESGP1ZLAiCqey9gCPpNoJsCE8nt9Q",
  "key29": "5iSPfJs1Bbm4pSwu7Ws3HMnXvXhKFKRaXG1VB8jFTzxkJvuM4e27SCpKxuY3r2y6LGiw67z73Zi1QawSakqnuxD",
  "key30": "ZL52qZiJcY5Wu9J39S2bo1DJZVv8rqexnn4By8QgZnAMRZucJ14QusUGU3YWyjBnQQoJHVeSj3VZ7B2PUgfU8aS",
  "key31": "2nPSrDNRBSQNPkYGnbBQ222YVcg7p3K2W6baGxVhHn9tyddHLrWWcAy1X87SzehSFk9JLEQ6LSjgSkAABLjkUWoT",
  "key32": "5n6128v6fD4WXzNUaQHGfetTqe2V2HkKX71LsaUvZmeQA3MW9nS3BaMfjfM6LcPM5qkJNBcSpWwMpMFw9YuzyGG1"
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

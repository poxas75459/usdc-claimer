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
    "ss6HicKRDuzwQPjB8BWn81WqbrVLAkHXLrEmYkNUcHLEQS8jNQSGYQcgmDJx1xWZgCnifi4yHRUZ3ZjSXMAtk3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xY72s9dzSJyBLttm7VtMWbJNct9bwRqkf5bMGy7W2726VPzE1hQBrneiXK2YoyayCsoeuuNYGCxDGvhPW4arwd",
  "key1": "3oPErxrsF7SfdMus7VEFG5L28TykeHwHe7dFvWcu4RkHVHidWtL7RhxowEjwna6BrioeUSKW21BqjNXd4NdCxuC8",
  "key2": "peQf86JehqJR9noDRB7xkhyKY2Mc5YbgHBjct5krTyaLEUwJcWZm4DboepAQJJjypiQaAtTYA2pVdK8ktyK4NC4",
  "key3": "28Mh6V7YeomYvP7rL8mDqXYL3zr1Mtg7j8AZoPx3H3qwpNb5GwnaxbRze74bDYmzx3A1t3Yd1jX6bTJ5KHiXyyng",
  "key4": "aVGeoKkM6ZoEvgv9G4hRyrfPu6QftLcoTaXg97SB8rt7NerUQrasm4yAenhzkJ5TWAQUPBJHkD59K2awoDYroTC",
  "key5": "3Ck9foSF32R2Vos4ep65NS51SUV3dcCQF8UvaGyYvdepmc1moViLnqkuPNSfLhfLhzFfcN3nb65yYaGgyEqCfkMc",
  "key6": "3wk2YpATgnBz3ZbM3oJbkmeJBvszbdcEymtAqvDQnpa47AuTeRSuBpjtPPKKKRgGmY779kjtbYwMqiHBM9pS9zpa",
  "key7": "2V28Cj4FUwuNknz1gEX7LCeJFJKybyyoZZiSWai8SVQuqrWRLJMJAh15s8d7tXYa9VVSYagcbkWuEtqzgjMcK8CS",
  "key8": "52aZGYrcp999X9kLXZdqS7cLqAW7nyYBymcKsNjPQoMHxRCRY36QqVgeV1JJVDS2TMSMxgFNDm1J9GzqtoZ5Hkqy",
  "key9": "2a33XEqDJEdcP9PhkyMfZWkgAkJsYf9WkceYqJfsqyY6qy61a7JZJv8NDCG3pYpzcRC5LnUaEcYkN4V1ixFqWTbo",
  "key10": "651GutFP8j26pwHXf2LhnPyAq2Zfoo3tGEsQ1TFK4RZSXDdxk8Jaj3RaDDjsjsdqNV9RigPZDp7rQgRU8Dofoem8",
  "key11": "5ZwDt1qAH1iR7yJ1gE1Lk6BhptWtEvEG8m3qvJYbpJoYXbvUCv6M9EDA8iM1XgirRA3pfBFnkfJSRfQKx2X9PC8B",
  "key12": "aVT6DLdBREJ7dfbnsWFMSPpX78fhR5ZgCyAQcj2vPLdenTKcKjJxJQfQr9k6MwNR4qRjom8wUfnU21gL3BNf5N6",
  "key13": "5kTjEYrt28S7kn56YhPERS8DRRdm8rzs31DAwzYLGBiiEzHN3sKM7cxs4gLMP7feCe7x1wivknJpLFmzKVxpKG5A",
  "key14": "2xYWKBWiopNK88uFkq1TpGhw3FUCWb35nooCVL3GdTMMtPa44hGXKzDLxbSFSwLY6m8UMcFUaoCnnMQndRq3Wno2",
  "key15": "2VBso2og1H7ZoPQ73PSbVdk2eMTiARsjqxAds2wDdHKecNtGbceuQDW2n7Mti8MSSDTGZNdqtDiaZwewKuQrVfkj",
  "key16": "2u8ZuJJHf4oLVdj5vELEvoXDciLcZjiHGpcF7shRY2ZtCyizWUh7kKUsSMtxDpiHf2FRDc3f59zG9MgMb1omLP83",
  "key17": "3HcZB7qSBQyxVm9G6KMBGNtRm92S265RobG2ooCdLLpDgrcze2XRjwUq7Qava3xP317r5UqT2dDhLFP5cinPzzBB",
  "key18": "1t7YBiizi3sz28XwfTPWYQGRjMTh2GKo11oGNt1NwUjyCwjZcKPdzGxJEZM9MDPWuVkEGMsAJTBC4hmNGskKhzD",
  "key19": "4pGpcCfLtA82EfSEYRRC6pAq9WtRPzLwyDv3WKqz1vh98YctkxNC5huR4LAiq8SKBJ3y9Pu14ZztqZcGyKmTUTiD",
  "key20": "5Vobtzy9q2sdRR7GHd3mgAA8VucMDeRdoM3VzXcPejMTq3z6Rm6ZX1LFoxiz5ChsnYND5NQpev1sac6nkPHyMcr8",
  "key21": "86UJJYEZz8SYYYMqrJcNg6zbGtAdWru8b2PP7ReEpFZsXJYyauuqUfD65SXh9ArhF8anECWaGVjBjqc7fbC6Tzj",
  "key22": "5BBRqSysFycKW31cj9EhvMJJch3jLHaAXvKN4eVH3Kugx8oxgzPnXKJLJ7ZPEJjma3g9te9Qw1V8W5NBB8TNsZnU",
  "key23": "4pCHmZTacRo5iX5XW7MKzz3w1PJWvJY7o2oEoMaedWXpqx7DvqeszGZvsVbU3Eyzkc1EAXmPewZMRBsqYpohe6Wi",
  "key24": "23Ak3uumr9paxqbYLbn3S7HKVXhmqfNX4BCCFPQ4jM9fFpVDVYC25SFyT1HLQLRAvcT9f2KhCuvBMJ6mrrFMGUZz",
  "key25": "3Cu8cy6k8zNs2NFKrafqdfzB92Kxba3YQ3hnUEDgxLKDiu8V7HdUf7MWsMLN3SqBtzwJNy43GHqGA2QUb4PZHjQ7",
  "key26": "3cnMh3wDFq2NMfPJtmjCPhNHNCsoeLm77g4J2fkB7R43jUP5kUX8kvRxy4D8GtAa9Wbh6ndozxegmEXNBbqayUn",
  "key27": "jkt39emY2TZTz2WkpoKk9pLG1JbHjxGWct4NKTr7Xjgw9BxbkC8Lc9eXCeXo1iB8BwF5B88Vpgsfc5wJj9ichgC",
  "key28": "5MLfNufomur84ZEpv2MdycbpBTn8GX3Mhnvzxh6Piz2f4ABJcihtNZ9tgziji4qLnFqukcjShJMMgJePkDdRDsVV",
  "key29": "27EFCrX8c8kxTvtyowvhzrFvZL4RtZkisEV66BJeFoJNa7jpiUNDbHwTzK14bGQ4uB3GA15YzRqUtzKC1ifht9DZ",
  "key30": "4rn3HDSoqBmdfkjCSPrV7mRK7fCN17ABNJcjrCMPvkQqvosZPKMvkjCHk3KD3gEJjeKtiAZ1jn8SVPR6chHgKMXK",
  "key31": "5XWdGfaxozKdXUQdw6AmEDHzipDQRtgUDnyewihUCXaqp7dDZqZ7zE1eTsyzeAPPea9FR5Y3HUGs2ySc9yAEKLd5",
  "key32": "5NUnjg6bh9GkbaddTjyLcjt5RW2opbeDMQ2v9fpvPgWCwbzKL3YLNn2DbyhEGVzt1uYsLWy6SMBDwmAJFcEWacjX",
  "key33": "dAKDYRK4rcYUSGzJaM31ZcPxjyZVLReBguArJ5YLUWgDHCY9kziQ6UyrR6TTHSbcYbnUeHn4y8rfSx8jNGJRgqb",
  "key34": "29zsdVQoNnXsFJBKXDQivp8SZWswVWiyJ4hgwBeXeBLtu6AFygpK73SPHaun8ykpuozfeJ7UJFLbNmsvH4e156Zy",
  "key35": "5CrMAjdxwGN62zYZh1hdy46p1n1daH6pF3LYJi4c819KuBGcXXL4kV7qkgwUZbYYRKz2scmqaJKpwVEBy8UaLmEY",
  "key36": "4deDAgopUKyd99rfr5UYm5ERJRtYFcVRY6mvZAq42X7F3BMSvVo6WpiPvNHpeB6JA8LkpbPnXR9EzEUpPeBj9FiS"
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

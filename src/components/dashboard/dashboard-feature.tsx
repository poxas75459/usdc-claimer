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
    "5z8XvdcLsJHygXTBWhYxKWxoPey83eihkko78KSsPkaesJmzPu3pXidwQbvJzs1rHhbKNfpVyLM3La8HN5t9NcLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9a3uyX2NzVFBxe9gcySqMxEhQnGZtrYgzTfq7Dugr7CUf94KTgK1v2DY1qKXsnkUkL4dMbMoVrdBqNM3XxyuCm",
  "key1": "5u4Uf4Pjq8Ybt42CF3nvd2S9ebXNh6r4FVCQUVH7ZoTbd1jMSJL8LBDh2reyJZrzDZJHuMrgJzWNewvgBeaYhLzL",
  "key2": "3cVPKxFJe7azELrUymjhGeVMSUSF2zHZkGFSXemTFaRo8Ndzm9stucw2TGhd1ydkpcDfczkALejkJSSsa1f5ugGh",
  "key3": "3S2a5v8ssKTom5awwrwSZ5kXPHDJ7W6PEcGuy9XqFx2Ve9Qmc4Jt1SL9oksr76UYH6DTrx2yQSaRrK4iZfpcQiEg",
  "key4": "5o2fi7FBzjGu3XtXjmLt4tHARktf2eWAt5AuXBVTMrJ1xNQiWeRLD2FgtNcMc3xUMzdJv4TbV3XLhco5GRit8ra3",
  "key5": "3qFs1vbf4vMSqFC4vuHbw9Z62HYe5kWGjfHkBMFjTfAQ328JDDnc4ytNhvfEoLFMWnX5p4tmgKaH6N6sYZKxnbHT",
  "key6": "3YvX1oVF5eWvcaYdz7Dp7j2wcTaeyCQ7yPQyckDLwEGYYA4HGsvSBGYFiH1TGJBUCdPsC32WjnwUcPRK4W1kA75G",
  "key7": "3sYEsqHJrsWUXq3P76EVSwLvod5SHq87aoXnPnAvxXvHi9y2Q6iqMKJokUjrky8kUg5mWhYGrzhyaHTyJUqvEMVP",
  "key8": "347wkd7Ecp6CdTcYPF9VKR49hBc6bP17AUGgVnE2UK8kSMHUuWjCXsFwnC5bb3DUs8SEdPH3uuSQbBrfi7ekNisD",
  "key9": "4AfuY2mTnZ3vMm8hA1aTcyiTz2hxFcjPxaF3BvS3fbie5wUtWiLkjHXCnpWiVxXhWSatY8nq5q8SUfDhT88AXVC3",
  "key10": "4oGvvoYywDz3t9bZSQSEhP7NyMWq1zHFUDYRFc1cmH5Ayd4ePyMaJ3FUgUS5NBNoAk8TALTgRdvpr3iERHwyDmEW",
  "key11": "d5Hbk2WqV5LRNGPahsgjc8ENNunBLyQUiNygdSikzhfjaFMu72e1kcj8Skgdt28Jqv68oNyKk6UtNdnxF7FiR84",
  "key12": "3TuUJqRQsj6hezM5Rz35Hhe8EKURp9zo97znbc3GbRqcTW2X5L4jEVHWTjZVA3GZ1HUiSyByoibvpkudcwzFMEmc",
  "key13": "DDkhUeqncSfWwbZkKkgGxb7oFFPZCYUdC41RFV9FaFPdXX9RxNHeeKyfkceB3F2WHnaGJX4ZYq1p2rpeKBQZTm7",
  "key14": "4k4s8uVJWXJDrRC12jydgxnCyggzCvxCYmNcjqehyyBRiaJ7aLDT4dDnGUsQ71nL4yF2RmiEW7j2hixnUqbosX5N",
  "key15": "2m3HQWJMr9KqhEPWqVpsXpLZYsrsKtVASMMt1Z3aAWux14kDjpNZBSz1vmtcLuRUpkrMP1emTHD5qKF9PpDe4i6b",
  "key16": "u2NDfns9P7xoYZmz1U6EArtWpRw2rj7CLuwwvmyv9tiHYY4BjxkKj3J2yngn5nxZamwnGC3yYUbi4Dm1hPzU7bs",
  "key17": "3cAMt7XpkyuRKFg7vB2CGHgiDch1tRj1AGUGw9RWTHiserPM5GCsFbcMSm3Zy2CBNpTCBRrUA39VTKV52t5pGZ2",
  "key18": "48w9w4YnYRLvDdHCAEo2UfH7AQoPjhD8YAbWfo7888CbzBRCwZeQo26uVda3uY7j3X4Z12R8ooEqxLCsYioSQwVg",
  "key19": "3XonvE8fqy74CeHh4pRacV5EJ6ngWgHmGmVACyFiysVAAPB2brg1A514RRh7z5oZe73gnCHEAHS8nNz3DMg1sWRU",
  "key20": "3UZh7uircee41jnoBDFv2tx1yEjKeM2XSD1c5jvqXu8T4FhHGKUpw9rvo5phePygSbqqjUKSAvSDU3a1asQ2ECpm",
  "key21": "4Hsp5LYPdSggfAGHMjqFKsZukDJ2rdSoa3hzqVXfs4EDYZ83qNRwvq8XNuHt3vaQoxjgsPGnmVr1x4nVs5bfiY8j",
  "key22": "5xeLTtw8ZNnierdGSW6V37pEFyGw7Xsc9Hko5XQ6QBZ783H6Re4oQ7C2j7M1NTkudNqdFSafmJwZjJQbgQPafZPv",
  "key23": "2yvSqtB4sW6K5poVS6ZzKJYoMQ8JcX6oVuALMoC6K2JbYAuPUPLtcJezvYR1a8pouGHuyizwkAhr5JCWftGdCiDe",
  "key24": "3aaqfJRSfAwGmeMM7v1nfAGWbZdVhf7aaKSQv7Uix5axPkNt35XTiHy874iwD88hPJpsGcSZdWx6Ueqm8w9caQwj",
  "key25": "4nxHVQb91sSnJP15mg3UrakGaJeEhuVDV8MKvRwmXCrhLygAkcAmvDqdSUewp3gh2zBDymtpDotxFDwnD3Y34wpk",
  "key26": "55J4azUuzCNn4UohxMgQzHfDpFo7N9UPZ4hP3VB1w7KimGqudnNKh1g8vFB9mqGe3mgUi5H3KAGXmMGvEwHvLkjs",
  "key27": "51RwDSvQGf98Sh6rDfCrNvKcykY6JoVwvBhT6mJo43hZxTSYBUwdcCKhuKNStbbTzT97YqKLETL8jH5ydHZyyrF2",
  "key28": "2rzjYWkrc9jvHtRch54p3zBER6HdsBeNV6PHkviZTVQSdKE93tJMwDpnj75F7gyNR89Aeemub7RoudEEDBVwqAgo",
  "key29": "xFke5YCkhnDBN9cgVyTjoER5cs75KHmRDpsFzdeivENZWUmwnYjkqY9SRYG6gUVXrjmQs3V3YcyxDQeJqPt4sJm",
  "key30": "53y7HxckiJYUYfxiRtdUxkjVfts7tdwZSFR88DNixgC72tPA7ZHg5vNdAceNxiiFErh4nYvTnjcdfgnmSWZXWxsa"
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

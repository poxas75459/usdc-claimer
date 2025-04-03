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
    "2P8wtHqyhvvdJ2FncHBugQjC3DwsVzvFxDf88oSHRi8wJod7DMyKrJTH7rqd7mdpHQCgth3x68a2K6UkxgVqenS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrRpiK4fks8M7hLtbpthaGN2WHJYjdWTU7X54qYzEhbUbYfWsYpSV4QqSJ4qHfPFpghiMzZsVssDqqKMUXRnUgd",
  "key1": "3i1Hsxp1xV9DwT6ZCjgn7pzmnBdm67zU4yYXuMvizxr4HiBQVsw2Nsxy24dvTwkDobnHR88wu3BVPY9kYoCMFATH",
  "key2": "3WL8Zx7BreidC6vr6jQ1zpEURkKmSogSnijgwAdXWEq1qhLp9e2VxgTdHuhatqoTwdY1joYHudSoqCXN6dYYWqmj",
  "key3": "2DjeLQZWzoAJiVsRVmMzQWKWCYqpUgevPeJDopyvbsz6p5hFYQXRiv5uz66i2Wo1kySEFzRhg9KdPBLArhiKMKfS",
  "key4": "42WaEaNSUhvkq1pKPzNMfTg2XvCth4jbVZ8iefFD1RABdxJeji3McFpRa5TA9HePAVu6Yn5mYFoqzh4Avu541Wv",
  "key5": "fWRQFs49ZJ7KNtbh2HDdZvnnAb8t2QakNViZUTWn44AjM1UM1fbfgrEcSrwga56ngCXt5RAFG9TYLR5wMXLNzFs",
  "key6": "3TirP7spYNhcLA6EMssgv7EK5p1unPeBTDyGMYtqc9cYYq9UZHVD3cMadBUhPVxpdshGXvsD4dH2adkToXR8pNf2",
  "key7": "4EjRJaYkVC1kT3MrZt2NBPBoj2UCfWwcPZWMeqLX9iQ6euU3XCVfwas2mMV2XPPQk4xfmSjzv4LpQuEqXMkdxq9N",
  "key8": "562DRBxbVP2Rre8Np6dUfqFf7mofizu7uuEBuDwBTuD7nwXYUPBhTWThGCWnySHuj4UbhjQjyseCUAqFxog6eUpT",
  "key9": "ncNrYYPp435hBm2HWLXbABHwnL27suDtCop2Gzp9nacKqyu9mUfbDKJg91S311kD4K1DrxsCXf2xiBJ878MrpRT",
  "key10": "44rAkMBCkyXDcgcsmHa5nYPrrpR2iXfqAksqcKfb9CdC1PQcQdP6A7jZfiyym5f5ZiV2ogqrfSLSXHPU6AoTzf1q",
  "key11": "4EpN3rMXDHVqHELeeTovwigacw6sHyLAQ9oipZ5RknEMUuXRyrJ7KwKmEdvfKadUgMyQWQJpnqVCkPeG4KNy2Kt7",
  "key12": "53UsrQYNwcCdPVwUF7GH5AbK5h6nbHTNXyXmjuDqjmLhQ4vE7Td6Zvgf6WbA7JUQ8diRmCwWr3N9zAyPESXJpGYB",
  "key13": "kq6xF2KRAszcJKw2kLtMjbabmK7EXQjAvpDPqKYnA4xLRUAJQsJHg4AZcLoCpYsGidgPbhTLQFW8oMhPC7VbroA",
  "key14": "2oYvYWNHKL1uyi2NAMtZfVCv5djZDsK4Ax3KEyw5LtvabcEgC9KDTa7Y8oUYSHsnEToYiWQfaeAW78whQSWJqAMD",
  "key15": "LySc3qWzGKZekGat4zBRDVbdNKCrpynnjrZXHVVq1BKFpHFNGLAeaNRMV61FndtoDMCbhvzSiF63vHZ9J2TBAMv",
  "key16": "3wE1usJdWktc5LU7xXJZTMGxNUjCYiPtqjyi1dbxA9DVYATBjdUBZX5vsT63q3oXt9hpuupYgGU7W7MPhm2nzxAh",
  "key17": "5qJQvjz3wXCnagHN8g4h2hPqJuzAuFZKA4ahTAUVedYgSWnCHM3AoKcHvJxqsLBkv27hAXmmDqkBiuvuCScWzFsx",
  "key18": "5HBGFvwqo7aPz12QvzERPAS6eeN5jFU3AQRLJLwk5tPfLJisGX6XfCV6LbA7W2PeTjMsrP52svVBHizH25dkPoHs",
  "key19": "3iTksf6y4ayYPMd34Ck5A4VqRbybcJZUxiBRExowHNC3fVE1Mqmo5NSqNS7RVf8nz5XwK7CsLHAaYiD6PyC2YC7S",
  "key20": "2UAxQ7SqrQrrBPosF49xJj3icByzp944kVpr4H8qAhAeihxQBQw2cZNDrKwiho8DBxYuGjxmbcczPFhrzzjekqN4",
  "key21": "3zPQCBWFMMDGNWgDM3RG4mWNYRxmPxuZ3YFufJFmHdjpA9yt6iTCm3ZDDLyMw2iGa1Z6s1tjLS4U8KqQemhBnttq",
  "key22": "3h7uYAZpHTkVzFK4CQvNKzu7ubGQYP5oDHfuvMafnDHiVvFjPDjtpoDdjzQELEhVwMzm1dRVyZMjTsBGqHgVtdAE",
  "key23": "4k5YE4y85Wxm1nCHUeV8XxKQVUbQ5Jd4h6t6qR8qwV6ExzjyJ17jcL17RnMxvceaHTBEzvyd8BPsbYyQcgUoanBd",
  "key24": "3qaAhgW9TGrFaRJGUAAF8yTWWhc5PxCf5W4LfUP1Tvnk7zo7oXdyuJ16tQyApj54LK5cooUdE78AVsfp5MZiuoMU",
  "key25": "2Z7rVjiyTbTSZ24TexY6jR1t4Q3YSfJGJdUt81Gh3bepBWnnyd59YG6JTE2PZ8DcynHY2aHL6u5A9DBAXYydnQm6",
  "key26": "282U2ic5nFVGx8CbSuH1XKkL6SzwQYiPr4vakmaPYs6eYTGkiaBywfqdzHXYtgr6iVRdaxz34TnWpd1cfbsJBoCk",
  "key27": "BfgCJ6gqU7ejigMxGjsp5WLabD9xmirLouMfJDEUaPkg8spRhnNEEZHGrBHCJt3tUpyjs4mE3oR3PFzCPEJ4so6",
  "key28": "5sDE24EXUpHvLnxC4HxLninTcLxq8vP8fPi96TVAHqkkQka7DBpS6TujrKvQrSZg2bhSfNBJh8YoLdqkfLoHegTS",
  "key29": "2TnjXtqn1Z5aX7r3tadiHibR8JDiqdPBGRyDEQxQz7aHrjhhvCES2bpanVppAsnmusourJ2kpdvAd47jZb92225x",
  "key30": "4wT2dnBvn176xy2AMhFKSVbznUbrVfdPsV3yMjLdwoirmR2PQ8pJ5p6eZaQb3Nb7pdkbBWVmJgmYcsBsF7VxmozK",
  "key31": "3cauwypbaJ7AiZQsnDGGqXgKEj653XU7QLL3ikFNdcaygh13ZddMAoSygHFwbtSccVQhsffiMYEP4d38KCNcb4SJ",
  "key32": "5Zzg6UWF5nmCWKriajBNVpC3HL5HzCAHm9kQdS1rUm8JJfE8m6ze7YKfGsjBEi3EKe2pxv6CpeHptatCpPgmW9Rt",
  "key33": "4vd9xcLQtZwUJ6a8dZEAFeybD9mh7UpiPv2ttj481PqGMiC7wKFuaySbZMvckLnboqtXHgdrxkSA5GejknYdHJHY",
  "key34": "33XP9natPGL5ACixvY7X9UaiNeXvQdXgU5HvieXxYBZixRdJCXixfvvSmQPjdQJiQue5rCNcczXVbPp9WyyDF9FN",
  "key35": "2E25MMuGsbUZ1NFrpHUeFMfv29gSuddLVL7Wi7coeraUCKGUSqxgsz5WhFvne8CP58eDPJhYy37dXxhEkmj6H4tN"
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

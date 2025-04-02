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
    "5dZaMRJqxcke5gdMuCheF9a8XKndjfUW63cbySnLk4zD8dsjYUFfMomAGDbffq3RD1NSTLcgjk1Lg69o7cUkL9Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNyrVBRaKn24w1nrYMQQ67GtgCD4yZvEoriHrTvcFSq3cJebjpUyVekBqPmXnH4XkNTGFnTgRDgx61r3jWTAEdP",
  "key1": "5yuMKSzPLUVow6BfW9cXRM14C7ahZE22G4Jw1gzZYGewnEmv9rkN7xBj4JTUvgPEjWY2GjrsQa6dDfEqqYh7vkHo",
  "key2": "4D3JycQeSVFRd9KA5WDm77uRwHCbyPhJGRUc4wpGkbP845Dc34urt8tgZXNL15rdVVhWNZXP9Kpb8uoZFcYPrnvn",
  "key3": "4VcMDUHCc16qdJDuPVGHBrutbGvyq7XH9jT9gBy7JruaqniXYuz8N5N77XQqPEKWRK4SEPDW2GXisvFBuy1xrTbR",
  "key4": "5naX762FoKAikQvsE45UdBYJyNASmMokSiJbVtULeW8WTq4moCZSvajq71y5Yd7VofSsTJLWF68uqAddUqRqw3oq",
  "key5": "2sUDSVXSAN9SqwdJ5ZSp1uCJzswyuSnZuPKVsLggjswXiQwFwDkUQkbBfor5aYYuzteZVtutQytQ6HnQCRgubYo1",
  "key6": "D4sNjMYD4UPkTW7ro3NQZsNF8ZzLEG1SVRjFBvgfYgNEbL261SA1fgmqMxkR7Rtjc6Mbxsvz9fGWX1P7xDW9kzs",
  "key7": "2VX1tmKLBzVQQ4ebPjGf9HbHqvpkQ2H5CrLHxX7JK8XCT7GrcMoSUtXh9c4Km8SbAZQL197R23T6aMx465rYvLPU",
  "key8": "QyZnGW5Z6KGwz9aQCY46XCaPJPpjNprUM7rByvPwmA8TTjfbaiNyD1mdkptrA7hp2Sq3AfG9jZfAXfZefH9T659",
  "key9": "84PMr7nr8pAqFthA5KbdhKH2cyaeErB8DFJ4xg5Ve4txdp4qn2xXGvzMJKYNPT99yjm74HamcTKLqMz3PQ4XS85",
  "key10": "mVhyvGtNaRLeznBFTLM1EBs9fxhLUj8bXhKaCStDkcvdAku81HKCcM8y8D86zuAaa8ESPjjVdkCWsaxxfuYTMQ4",
  "key11": "Yrpw9eyXPQF9ZcKQZoEqwdR5wJDS37zyTnL1kokKUijW77maa5BBVmACoVzNmvj9MegqWb5651PVHyxLEmMFyxz",
  "key12": "4Zi29JksJMF5aPqiYQNkes9miXBfy1hgpGZjMttsw2zEMAHJejAVWJWYz7gVC4utU5tQ4Foo2c3ukFxLWLyaVp2c",
  "key13": "zhUgLTYwuBhiY1MNPqW3SsYRfR2HY8Mr7usGjsnvnKQYh1etcRBpHvGX616pLfAZadUfmNJRXTqtZcfiSJVPbd4",
  "key14": "1zFiWngpJ1Swnt9t1sBvdtQdvfcc877ACTGYHBJLK4NP7KPogwAmoHqX4spwX4pnhb7sJ7u3A3M5WdiQXAMtriE",
  "key15": "U61KBAZz2myueRy7b6dGbaizSMbCATyQDCEjynmuMcvAUgQd9Zot5tzzjtcG3Jg7FPQ22f6DVieqg5WCznf1Nyy",
  "key16": "4Xp8awhRLmD8LzDPfhZnm8zrL9VvJJcTCSsZtBbaLtnNXNRbks1uPFjBz7AHW5pM6Fs14DNDV4cSXM7UzDUfjoV",
  "key17": "351CjX6fGQ76Lhk7P6R3s1KF1AaFXwwpvFSJybNyjETL3TM6t7GCKiQUZ4db3wasrCEWy8hPJZYwaxMJ7UUQvD9A",
  "key18": "51c6zbdqNCA7WNdZvjNAXajQyQ5eSspiBqUyDzQNJTF2mtyvg9DUE7LAAJ2E3nAaqemLPjQEpBA5LXtotZMu5jW1",
  "key19": "4s6QmLNAsyXtRsfTQzULjjNQhYyfrya4NTwzTBZRaDnw9DTckU9ePuvPBokQ5HeT5msv1HtMVubu8ov2vvNyUSXo",
  "key20": "5pMhYoWMppZKrBESmGEpb6hJQXRYTuQ7kDKDT4cTmhyofeY4LzcBQDuvaRPUguB7i3T8rUrUVtb1wnuTuYN1E5r9",
  "key21": "5kS3P83SzmRmtnE4GvjBneveVy1gC2DNoubtV34tYVNWQtBKSRnNRUBhenFTzG5FpeCwrodXBowqc9hfQyRYoMmr",
  "key22": "64fb3niQTXp9rW5muDpfc8QnHqJkdUKDszA7ism68jzxLtWAhVuDacxY8Y83JGeLUBxHfuAGPygzDyg3PmSXaapD",
  "key23": "4nPMj4f36okiTPTJGsdHSEsC9ZTPyVaVMLNBa8quhAPKzhAdrL61B4CTDmGpqd9ayRxrgjFzstnuUj2RCHCRPTYq",
  "key24": "5kr5ECKi2Qb5EB7r3cVzNVYRBU7iyxQU8JTfiPNZyxSnHpQfBiXWgr5fxBj74XMRqonydJH49MiaP9BHQYfbgTE4",
  "key25": "48XSGCCP1jPKWKZXs3TUa2rHCt7b5V148kfgNCwXKH6eaJ655riZboTmHNXLEbarsKYcizRnRivCzWTuEeruJsx2",
  "key26": "3iZP622R8cXSEAHuGdvSuu3sf8PhjiXNnvgHdd3ZWqUzedTERsec54Z12EhzKmBPYn6Qr8kctc8C4r1a4Cu5pKm3",
  "key27": "HXJHCbcKjW9Xzc6GCnzaay4AhRxKYNBApwusgJGz6pFTFJRXtWQXtXguavUvYejrQjGP5WMhZttikHVSyK7NK8z",
  "key28": "5YsKe5itUyMVTAYc5vjN2PsiSkwMrMzWih5rhANRWurrqAaJeh3V4xiUuz3QDbDVMZmYqs1kbCJd47HCHML23tjq",
  "key29": "4ipzXqiBogEn3nqQTfEuWcUPpMb8DFYe4EbdvT1b4uf73HyY5m7PcryfSm8y1g94thGNwFyxocDrL5BKZNikkhgL",
  "key30": "2ToDKvCLabCFJJpqAAkqCjH5ihhbkby9rgF3ndp8MxxRYyEvhFhrsa1sX6zXhXwWsvuexQGych6FKuecdLvHD7Th",
  "key31": "4qmyVwTB7Yo38a8ua5DGUCjxd7RnWFKDaBLjtMNya3pF2EALFFeZnyktU6hFMrfgrrhK7HRnhzTGztHJcCpprfgg",
  "key32": "4gRpU9mKioRhLd8N5wYVGgELFYZFzXgs3ZkCm7PTyhAisNmkkSDEu5V4zPhT8YNeF5V4U9FmNjuM99VbE65ZUU1v",
  "key33": "4XJjZExaPePZoNTDte5C4VWAUdHLtbKkEcuoCu9Wfde3bgmgueCwfBynHHGYqNgiS12uEpg6nXjeCriHoiwZwads",
  "key34": "46kTaXWyKcm5zQEw56f5Rw16rMWUNw8mvmfn3W3K9MrSRRcHeTsYK5H65WxXqd1PNHo6pdS6J6BTGYJdadi9uZep",
  "key35": "3YsrSteZw34JUFDKZ3XTtxYyScmhqbkdttGMgpUhCtKe4ZdJ4Q7ShqytLLhqdNX3JUqtCJmouL2RG2TuXeVAcJ3m",
  "key36": "2ziLAhbU5rybZYW8biBoU2M1hUfe4rn7CjJJnUU1sd7o3PUufXqRVumFJt3wK5kevYxPvEeyuFY31ReRxxWySnVu",
  "key37": "bZLk1XioyQzJVPLpc6jhXb3Um5Vn4tCuD2sxE86ebpR9pKByFhNT6ND7mwBU5BePT2UFTM8woDWprFZx5oUtRmA",
  "key38": "4TKKBC1HWc6La72mS1RKqXhotbQ3yi55H78Bq6xah6wffXV2Kreu8vM6WL1yCuLCWDkd1CE2mozyVrGyyxcyqA6z"
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

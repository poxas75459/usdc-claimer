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
    "4Mh6gkhjgwiRDxDqMzcC2YLs974wuMqbAX1ER5bfj984PzDk1tRaNPRmcQbWTtYWLro9BcUzqohepbyALNi8H9tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62eSuFLNQcNkxuYPV7N6tf99JfetBm16fjwWHEXEKEkVx7RzkRZU38qxoKHJnUBg12kaouMU3vH23FCJE6QXJ21H",
  "key1": "mfDvvZyjRpNnhWpriVkpoEkrUyqzCofiviN7Eo2tSRdXngMYgcqkFVmGMZbf7nN7N3KvHjVTr9bthTz9SHtHaiP",
  "key2": "YckUSxFodiuesk6fjc6YgAwan2xh39Jzv6K9KmoQ2XiMcDZZ8n4pTi5LFcVS9ABVbTtwXmQYyF8a2xsAsgpPUyx",
  "key3": "54vDPUsXzzBHjNnPU7CUZMXhy6VAwgUYdFezb4Dy9LyX5DbbHRBBVkFF9xDo9NwH4tsJh6X84FkeAZ6fBNipuPzu",
  "key4": "5ZWqzbht1jm2xfxFN37PjbDMXNmqjyvRALmNnuqSoj5SMjYWkx5QBgxCoMyAkuH7uJFRDnPQRByqTZDjLtG6Lwig",
  "key5": "2Cnc6H61Ft2TWZvyWW9Swiy4XmptXThGcadRe8YkUE2VQAiKcV6AbTgxcw6Vvaeq3ZS5bfbUNnHP3yEUapYCf6rE",
  "key6": "kdY75NFsqW4o1ohnV4xQt7aTkLJvmZ6xQivKXARDZHrQsRuScdFe681R1bBw8jtzRw3kzDEce1j3AHvPJAkCYVn",
  "key7": "idf5tq7kejY3R33L3kwB2M8cfmJiHNSd3ALkKiDgmc5gLWamGkGUpXP3n1AqhPDZFCWoTRKaKrynB4fLtd4hjYk",
  "key8": "4G1ivCLbRsMFATvppCsgYAnZBRSMSRih3pZphYWkLwvXVpE1VUqsZcwEFadP4eQWudzPLDHxw9J9NszSKPX7Vz5",
  "key9": "2dmXfyNRXEZyfK9gnyY43k8yywBCSfuRmf83GC1muy2DyodML8CvUfgz3eccQ1qxrnAWJ4Eqvf4NkaH6yMXcPbP3",
  "key10": "3RniQdz3bksH2tS1pWjRe6fXnV8eHMzadrrWEDTtH4MmX72rkc5uf9WLfBV4pbiWcqjGtLVqoF6jyk3pz8yXdDRZ",
  "key11": "2GRSD16acwe6fnDEen1PdDvfLqjAvSE59t731shnQ2jHYTTKY6NJ6bvyyrcdcJJxxazsdA58KLkBJK8Bca53FrPz",
  "key12": "3CdTGCV5jbnNJsJACibVnp2EFDjnK5wgt7xUr7tyx4gQ2pqi91h1xeFP4RpEMrcDZeKbgHdJumQT2zgnJ9MXuWTv",
  "key13": "5kiuyw8bDBFw8vTzwQ2iQHJL8XCLALcu8nyYLJzkKJxcAXgJw4nXEEJtkHGDZvLN61jV1esNCjtVFJwdHcqB6tin",
  "key14": "45fgL5mv4139x1F9mYJSAVZDvu9oFfVigZBpPnqQk64YM61pfaziGwHhJeHeTcCTdJTqSs6u96yBbLKKm7o9sBWm",
  "key15": "4Qehi7cBbq39Z2tm9VcRaCuuwBK6cpxf4YyYQYjK7xHrtrecNkNw85FuAErnjUjStxuPdSL1pjV6U7n45ysJ1ey6",
  "key16": "GsBiGTKFPp33ZomSiovtJNPxGEV2AzmdqQixsnPsdLfCJQHkFGWPcueAeYHxR53X5DyA8zRSuk6f38vi2ghgyyB",
  "key17": "2qK3MrqyyjxgsMpqQn8EyKsATmHmZRRPaXwYYe8xFKGuo2Vpbju4NBrKnzpKdf4zXiS25ZKWmdX5BGTL9pzCjDy8",
  "key18": "2huaPQjLTD4ADyUJmd2cznBwoSrXouQhSiRst1mYciYW61RL5gwpH6CtMwyE3oyMx8ZiF4NYbH5qpA3aHXMLMaGZ",
  "key19": "5M2pGj69uGVGzWMmZKxkwL1g2QdsXXt3u3ufqd5mCXHhvHn4k3FSjCzNbEypRKZ65QXG8B8shBy8TKCJkvRWEB4S",
  "key20": "2R1crdCTShDacvxAmWXkS9d5Qxs6F2w5Zs1qyuFdDDtR9RpFMkTYt5tUBVpo4rjnovCXt89oKHpXwozGzyjRfMiK",
  "key21": "rhwFSW9gy91bz9n2iK41ZFKvYLBL8zFPWWmPqqnMCz6T4gGMrUL8NwLqgua1ujS7W91nuHZu7kcRbz1opYMfQYA",
  "key22": "3MmVkU78FhCQM79n42mbdZtCGELh2zfZgzuEiLCTXbQo8PaeCBirDoEX4dLwQ721NbFhJNFKHszV1Av2USstpf2K",
  "key23": "49wSPT7hkknyC31WtCJr1BMMwe6h5eEoTitAv9kmUMGFPePpoaHbuKLVeg3KopGc7ErGnDSHoGC9oQ8y1hi3kzNM",
  "key24": "4J8uHZcfCZVckMVpPhW2KY5u1pB5TmZj9eQGKqGmvpFmxVEHHRBRPBM1crSCDDD4Kc6LDCXANKKasHocH9kgEM3u",
  "key25": "R7b8aujUhTZrUDJVMwn3YFciKHioYrJ2HuKewbTRJu92mHyug9ifLUK91a1nwv6aBUNktvq2tQkabt86TNMAHKT",
  "key26": "2PyAzhJA3khVJy6jgV2W37K7bqWJQjbDjkhWrGNagUbeiUFbmEiReJmbhV9nx38Xn4Bp2Hs52SQgsD5s4oPVBm1M",
  "key27": "3QBqasTezVDfzxrQCU3LokV9TLqfCf6fXN18fQsnWwToJfajqPMEVpgrBdh8Hv3cntoLRxPCyJREg2HQnGebSuwT",
  "key28": "47A7aPoeXm8bYFfuHhiQNKV5XHaDhZXTgq1AAuQjeRrgELErCTz85LvH7Zo8bDzzyiz2BWkidTVrQK8uNvofhuEU",
  "key29": "2fyVWVLtYKr2HoB8b8qXzphGdetsibhhsKhZc6jPSm5cQgYTM1NpKRGNbHYyaFMDLRSPsYpE9wVp2FRZp4mHveFq",
  "key30": "2oQmbVUD43vWCPvyxFiiJtZG4GVA939ZMJV4KSASkbVTvopj3jSNB75pNNNcnt8oMWaTFs2w64vgrAJx6gcTS3Li",
  "key31": "3M3HyRsVJ56sZzvpChyXhH3fXytmLCw8Nd1zTbvNcxB9iX2X9XFrvdEWDsuDJbdpwzhfptHnS333CbwCFndf6SBp",
  "key32": "49Ucmw4P7GjJu49sTDE5gZMLMFMfup3iuMHsUvF8ieVSbi6SYXpeKxh36iK1tGB9UDjrQmB6rEXqYLqFnPg3WfM4",
  "key33": "3Dv1irLKW7HPT1d4xzmxT3VMUz2zKo8PDGxxbgpKggUarApR5HJDupEkgYTQGpw9ubfiMDYpD5dZqZjkJj6jXivD",
  "key34": "2is371N3aahonpLXExdJGZckbu3j8Cp7MziR5TGnWagwSR6QjqF7YXbRKS2xu5XnaARnb6Ynfu3RNYenpRk27xVp",
  "key35": "5FzvpabagDFavHopN1Zii8E9DpcDExb7dsfEgqBhDTKQv1WTuvkEsuqyiSeRajpqFUjDF5tRxBptPCiVEB86NfdC",
  "key36": "4VbEci6kSNSThJEsKnrML2PKa3665ALZFqbyFvxNgJz8z4X6VzymBdgJ2chptLwbELQ5ibiQF5jpc2VE31XFc8p9",
  "key37": "fcfiEdL8TiiYKtwkmFTVWTaJHgAr4mRJ2FevSqt59DHb2YpETEgeC8ktxw6m1oBKCWt4xjn2kJkTKMmVFEYbEff",
  "key38": "4wzBg2AE2UofxchjPdGu3tqjs5j9eRLso9WQpAx2918f5toZRkJPgtUiT9NXWZiwQWAdP3bwYMnVzsgqsJR32N1f",
  "key39": "426pBqFNpTB5kTCJmpqz8uVjV95VTtsAhvxdDXnsAuE43Zwsjom4vuPfdmTszsP3GW41rpA8bi8gVensuHFCeJYQ",
  "key40": "5HEHmjSXNmGKE2znduHK5xkPxLTBGuAJNKkFWwjsTEPtb4AZ44a6fn8B8SGxKyETn39MxyDJ7vhh5LQUEBCNvLqp"
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

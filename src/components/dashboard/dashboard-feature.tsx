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
    "4wf8zBP7sj9qt691rDg2ceLFhRJYuo5jeTPgCYbguUuRtVnXyfoMTHzoK1DV3KZRbE1WRgcwdzhpEPLWwwAfXa9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nhn6CDfnpmYRe5iXm6e7mhcPv1udumaPud4CD3DCSykA9US9ZhVzq5LbbYC8pUdpv8BKFCficbr3L5CtWzNS6iA",
  "key1": "2mMMHv3fJNd7qQiRwHg46b7RYchU49Xg3jEQe5y1Ej82RrFZhhpUXi8WNwLptsdPHZuzba7rmZd5g7VTHh3RrTEE",
  "key2": "2mJ7wdGTp3sweabdvgW4kJ5J7a7qeAboFNXcP7oEmNgokxxVXBQD3MykubrS76FxG2zdDB3zHmJzAqWRCnUtAfkw",
  "key3": "3nPZ1JCMxDbo99MowNLBxd6RkR6TzngrUjhkkiq4ok2VnMgY6tL41sGa7fwnk8sNDUitzkjLkMsd3L2ymLisxmy",
  "key4": "3fi7m9EF5EvjaZRDgaa584PuS78yyQQWP7wiKpuETas7LaipKxEXjFHxsAh8bmXEF8sZrD5TUgioKLufcNEAnKhm",
  "key5": "4abt3QxgZ8fwcQCKgVvYcebrdCMXaisp4cQjZ4Pg5VnNfWQDpBgUWijggcAtCgB42isJQ4NQPewm5GZMu9bhzNHA",
  "key6": "2QYGGbTWCA8SpU5nc4HNbeXoPpxRg5iSeVbY6SwtVgnN4Zsq9BnLu7J2LHJjzYQtVhGSKG4pJTjKa9S5UCxarjCM",
  "key7": "65hpJArgLazvTB1SR4tbbmCvdV1xtiadC6xpAu2YUtv6TbNWMxsxf2G7cGG5ii4Pcvpwr9rGRKuyqtxu4NUT9tjn",
  "key8": "4YEsjd1jkkj8yUVuPNGGG82uj6BmsfKnaxgmp54Adar5Dsv31futaPK7JgvC1LdcoJsW2AhYrsfYcCCyJUQHi2Es",
  "key9": "463dAfiQshfVx1pKnxZ8pjfqwGddDoGsjuZ4MFj11SG67tQSwwf5dtecd9XX8939Hk2Qmm1wquoyi6RVyjyBoxRz",
  "key10": "5h4aR5BLVXX5e6vYWKJyZfGr4gvbLNf3kgo2C2DNzCrRp1BfJkWehpg3VvcNybsyyZ1a7PVG6L9fjfxGh5qzbVbX",
  "key11": "36uvo8XMfPgMRLgYSbczpkFj3LS2bJF9YSGC4e1DbDss6nR7GEcWLwVqQkc5mUhvKZMioJsziiczSqa6DPxsjNcE",
  "key12": "KdjfhHzpswq6hba3ppcBXaeurZ6DKrAharZ4WpEFfPHKGxRBEbmN6bj4LabLSDh5GV73F3Syxvu2aNMrfsAxiuh",
  "key13": "5JNYGGee3i7zPf55p1A8C5Ay7NgbP6D79cppHkQgPbMdfP3T87sDy1wzSVMw169ywsfJapGMvwsYp94GgSVoCKRM",
  "key14": "5HiwHcvw8Q7BvsNKE2jWtvLNJgtMPpCLmhCrYkhz8BZo8x7YQtvGSXKkkxZAwcD1dZHgna3UL8eBsrPQtfogfApW",
  "key15": "ZLznmx9gPdv7uZ3y5cUMKYUaUmmNyKUiQiBBfGZMBKv9GqQoVWjzQLCbB6jWK3pKGpDEhH9VSjXDgthz6cWSphr",
  "key16": "4eksUU6mdJKexybqcYjbtvJ3XbUauicG9whyE53drFj7TDARFrT1LJqqxdtZni5fwcvcSqK3zFDRKySu36j2KcoD",
  "key17": "66kMhEZx22BLywmB2qLoTYxNtNHti1Ej59dRUAQ6aWkfrA2dqg4tEHmJrjaG21kJAKFWnmM7NCW6geQpXEMYSBfE",
  "key18": "44ekqBSjHWDPG1WUcbiFF8vNNzMwArR34g3grrDKDuqj2EsuVDGygfHMsRLbF9AWpxrt7frgfcSq3Ky1LL49Eks3",
  "key19": "5FpQbHG1c7Gg7Lnegy1uBDDKCxybTCUhpbf4HfHtqbMUz4jA9BFRrGnFEkHjTMCmx95stHZreRcyj9j7HTKySoXj",
  "key20": "2hrVUeDzruF28EZDVUCgjpje8zydYgGp8VrJqM83wY7k1WrTLTbrutZ3U9zcYooeaqZ38ZR8HRf16uAAYYTqm8cM",
  "key21": "5dTQjbQujtGwqfHGoG5D5y5fDZCrp9p9JA486dirPjzvqD99jiWq2N2skesYbEtxDKPkd7jLgvWdb7XzzHsUmKZg",
  "key22": "8Pik2knujouQL85Kq2YTJp6o7u3puPZLEfcFtLSqeC21RhBQmhu7KTQLtw8qX1EP9g6JDw5xTGNLQVqe2ZcNkp5",
  "key23": "5UegpanJLDmYD3MMX2kyb3Rqpx88Bjitic7KigEpdC5N4sjyjsGQUJnYr8gHfRXjWHJfEtvHvfqJyB22K2Lo27fF",
  "key24": "5LtkUqCdZM3XrZkX6rW8s8a9rfZjucEGv6NCoaE9fP55Ke9egPUwmqcJCYZ8SNBq9PmSPRG2Zu8Mdp5pa2kK6PrD",
  "key25": "2kNTpMn9Evm8wD5aZwuxQDwp8d4LPnZyzqTpkPEq5YFRTCt8oLXw1vPPVRgiD25US9QjRFLnsW6nn5V7fXBbAiyw",
  "key26": "4mze8YffKAKSJFWHEBxGawWTmsaVPujPBK5nVCMXPYV2zfjFPnfyyRihwWGFooQ4j5VHwRh2vgaBFrPNLSXmKmEF",
  "key27": "hqFZQz2Wig2kjz3QyNGxLpqEnZ7kUa552AhRFAyNguHN4AGUuHhb7zJwPmH4VwmRDChGr1qEJyMHEXfE4zBz4ZP",
  "key28": "45VvVJMaKZwsrnbyQKMsvTJEo4MM1pYMAdX5KnK2KPFJksfXhbBxkFqgN1ME6U7iWw3R3fLssHDasGdGf4c9tx1L",
  "key29": "4EdYnnAuP1TAnPcAteEVoGeH4mRguTFAGGnYDUi4ei2h5VdSCpgxve1JXRPXXbCZGwnYceJVmmnpUs6oT4SQDgux",
  "key30": "3J2cYqMvUEqQBzVuiUFu9SAuafyWZvqmqs463k3suuzzrn9tnes3ssB7bsmt1WgCgshUQSrQQiyss7eP2c2Gqn9D",
  "key31": "5vcSCvfT6xRf7HxRFQXnhkvpYgZyNpUux8hJmGrwBaipoxr2ijSvZhpkg65dNi2mHVHtjvhQT5x9eiZP4PfmAvEf",
  "key32": "2NkhiLdGUbnZtEBRzRCsegXSGfLZsZGPXr9xK4hLxJPFqY1kJuts1JdhAxRuh2vEYPkWc1yo23mT3EDDevY5A1jv",
  "key33": "2ac9GJba42AjeTHWP6KRaZ5d3mH7P9zvA8TaFtb3ouTjJNfuMUWAG4uAesKGNwdoYGYYhuWSrdeu8Qvp7NrZYvEh",
  "key34": "3xznv7FfLMqp2Pt9rMWCBK2ruocrkxqf76f1AcECaBLoYwxcXdewGWafXx5CRea4FrxwRbwXmr8eVb7hWneKkqrf",
  "key35": "5PGXvD4huVWd8UEPARvqSfxkkGjVRcW9hoxiLRA2djtCZeVF2TuhuVgtkkCRxvtybxW6nnSWvoCzK9MJDMnAz8oN",
  "key36": "3sbUS2V6u1n25N6XFAXxkdbuziHQ8CXGy56aFaYtrJwpd3wjELNLyxR5DerCBxKjfckwDtjT6pyG4S9Wu8du7u3E",
  "key37": "53LWW2eWJkNoLGu3hrunBZ2tAj6me4o3LZPRuvs9WWgsYdyVvYSpcS62s4m9xP8jYMejszargHmqVnrchbjVZ3hv",
  "key38": "31GWNNFG7pCuRunuGW8YFPfNo9Hs66jvmpgwacDSiBbZL9DYAFGCiUzcE7xtRup29pt5rqbjMvfoXyRrLWVfqfDc",
  "key39": "3DDnjyR74QxXDuVheBKHmHDz5aNeMDdEyNVQPeccjM1Ut4JEKh5iuJzWnd1pR8DVxVU6hN6hPRa73h9trR6P67fp",
  "key40": "4jwXCo2dGCnvGk8tB45aicFJXSMvTNZ6T98mj9DJsXZ1oi78315fmVf1P86KiUTEHUyqqJJ4if3X9P3PzxkB1Xkz",
  "key41": "Qf59VdwcQU8w7mWqDSR3XgArFG8fdv2Kr5ZrCQM6QYTzvkKRuSDxZYwrB9i5tANNmLg694rk2Uo9Hxqy1m8DZA2"
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

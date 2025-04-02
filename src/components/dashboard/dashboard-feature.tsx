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
    "pZJayMrD4cc5jCcLdYTuJb38K6xMxEQfCyXovWGJZpumNZ1vRuQLVput97AHJWT1d8qQGpGkLYkvwWK2r84XZ6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQs37XydGNBcMSb5ddoZgY3q7DLukvbtgrPZLcXQHqz5FSCwk5Yv4XEqZbQzC5j9ZmsrDGo3ifVF5hwZXgh28Yk",
  "key1": "32YyCFS3euPKBPREuS9zu2huL63U1ByuJ6MhVPpwzQsoNeFWGkNH4PTPegJm7RNVRwCFJnUs8aKXvRyNqMJzN4Qc",
  "key2": "3QhsuZNgproB4iEyNrcKeihPWW2YLbG9AxskGS7Mp6Fv8Z19T6LMGvZjGe79EAF3ayvSc5s7ZkVahR9aQueWykPu",
  "key3": "5xJgfsKGQ9AUkBLY2ETNkJnjyhnH1w7xyMU23bYwHNEQLhiwpTntfa1MexUrtfmAQzww1qBw3QVazabzgJo5oyoK",
  "key4": "ydoLwBqsMV1U9XK3FdsTrDp6zmP3rdxn4KMFAyGvqiGVtCZ51oVxAHcnP5i8FybZCPeNFYpUpjn8D9WM9x54J6S",
  "key5": "4PppfZtT55rF7yWtgvgSwqXGw1vx5orecVPczbuz4Jn8AhXHjieau1eXo4zBByRMCtoQ3hivDzmriGjtfFCckpBg",
  "key6": "4h1LBy7tZaDMG4xhZadeLk9EqxfaXmpsLwwHzyUdN9Tq1a3gha2FjaD5ce11buvPXpaSyRyXn1dHbXpXiQBstYRG",
  "key7": "52U8gXP1xJQ1boiJ76svtj5E1YeoarN9QYTyjZihTQMv4pAWupBxPZXmfrSpSenfvMG6Mq5Fq3FNti24iVPw44v8",
  "key8": "3tXKALYNyUTKKNp9LnTrfTJEwnKV5FE8kRxff5SbMjPYz4n8q6pvW2T7xxyGrm6BaM6ei7z8mn67UgeanhXhRhyG",
  "key9": "39KxtJjG4Ks4wPyPDDaDkYQpcJxVhwvD4fjtqPS8exWK4FSqbEhJHUckDDzyPXvQexXahruEMPdNtVgZ1ThVErbi",
  "key10": "mdEnjidcEJiZ8HaN9QroqnYT1PDe3Y1KyjutmAG6PsB54n6L4Rvhs3EAeW1UPdRWaroaGhQfzHiSJxjc3bVRbF8",
  "key11": "L1yoaVs6sszYsswZTgyKDgPgjVHYRaRaBRbUir7N3GfFBe6si2CuB9aCfJekW3tb4skoAF9fmwq3u8ea7v5nhJ9",
  "key12": "5FioNpuabKgBT9JyQbVRio5PHKzdBGcRReKHrgbnqeU4cRSDWqw7enNQNZ21J7cc9GPPmsGkKUYXr641PwesTMbd",
  "key13": "2KXPnQxqv3Fo3bYX7uMZCp493fcWqZAAaPh7sjh94qdPb4nrXnVWdhVZfej235fLgAYVBn32Ka8MTvXJCmhdoG86",
  "key14": "5RuyZKYYND88gFGLSN3cnzA9MxUnV9gmADgsmTe8ncFwd3XmaJai4EfgPUh2FvBPsjCgaiByHRH1MmZ9NRrSebo1",
  "key15": "5xyUxfZAHPf8yn72FkAaQsAaK3ZWRVP5C6S69YPt2k9hQQCfG3AGFRew81twCSwxANCKHBzxRXnvaiHYU4LxKXuu",
  "key16": "57vfX4Cd4K7f7mAU4nmdV7FNpt1ib2zovjXyWvmrto1DR3JDCfLc66vKBDJyMoLqFaCnGSg3VJZhGjecxHB992t8",
  "key17": "3UVYUr1Kx4SQNcaZjosk9mHmXghSSZ7TER9aTNXcNGvkUW1UcJtpY2uKoPYdXxqWrAH8wRTbe6kYyAvnJyg3GGFf",
  "key18": "5ETqoqj5ZJ8GAdDdU8ZboJck2YYJQ2GBD1jctzffiKy5C72PHNvB1RTMgMiZ7HLQSZUzMkdjWdiBEzowda2y9CMs",
  "key19": "3T8kGQ61XehvyVjDMes1sGpKpAjhUZNVRQ6LqTR5NHjdyjVuiF7osnN9c1BYBvJ2cjK4kXxcmVBwEsMRhdMrHatU",
  "key20": "4c19pV9oqEUDujr76ZgKKHsHogrn2DVY16c6PhED599YHcfcJshdxobdd1PJGf7oDCq262PtUGLrnVjfynVhMU7i",
  "key21": "3R9bERoyx8P4JpzavN5TDzuEXHpYEMn5v3sAq7ZqhbGnxfQst5VQ7CV5Zt3yUDximbEQU97Gi3Gha59cg6wZ8vjM",
  "key22": "5VJCbpihoVrj2FQJBjcZWk2PZFdrfYdvcQ7RD5KUgJjoxezwEVS4mqcUSBbhYtEcfVJxwEW8uqvS17SbfYpqQVS6",
  "key23": "3jpwYi5n9PHGsQTjofktWKN6T4B8pU7Mie7z92aqNnthHvRPCJiH2vDKUdiLSLGAYLrBfrvKCzCFLUDzw2iLh3ip",
  "key24": "649PZTh1kC7fVpt6f8qGtLoWD1cvKyq1W1JUxCP592EweWkXwB88KQ3xLktiYMuiFobjhDqMWtZJQwS7n6VRB3Kk",
  "key25": "31ioinb7toHsFACeu1biUi1sszf5aVqyF64jBH1t2wex2aEZJnYKrtfhRo23UR5sYTbPrWfqnNYQzk3Q6pgEJVwy",
  "key26": "23yMRHbD8M2NRDMErVASt3AR6ySbR913eZvGYRNhYSUCFubkZkywLUUuY81LKnpK5Cajcs42a668Qq2eprE2UYR7",
  "key27": "5j5oPopbjoS8gHckrAvndDgvt8kB585bHynQzxDbBdeUoyLqN4UhDmxHt7cwpwR6VQ5HbLaY3sCeU3vAsftCmfWV",
  "key28": "5dQXZ2GJMCiRfNgFm6WDpEEiJ7Xe2mHGRQ7fa3pKgjK4oT9Pgk8683GWGWQmahLDVWuEPsK322srvvWJFsJS9w7p",
  "key29": "46rndiDFtSD92VCDHGytepQWQ5fK5jjEXaeyAkp4CPks7eCJKnY9fywBSswD88569qeHSDjer68Jya7jkFDmJrgL",
  "key30": "y39M5o9arZdAcf453rL2qnoQJE3gqSVPR9fejWDgmfAndsf4N2AV6x2WmCeJLy8GeCyzp6RuvnvBFyZPGxCvCgt",
  "key31": "3z8qzcJkURvXVpMSCvswMDmJ7kS4sFJsLeiuSLassX6Y7mf5tfDgdUMA823Vs4F7C9buHQDYsRjH8KSnZ9QzyGZV",
  "key32": "5KAeDEQGU6RrYYL6q4RgihDTYhq3QEa7uYM4A9nVc4Ma97FbcxXhjsv7WZkM2RA2BobNsCJZzmtHciLKDQv3yyd2",
  "key33": "2aPbLY8NeniYAu2YfPeaTcLRb6wkUU6XK7HYnhJby4v9Pisy1bwaxcB9N9JKhjTDXMLzW3k5uNb4UqfyzLdfo8dh",
  "key34": "28c6tc9jEcbsW5k4Y8qZvqKmMF3QK9UgK1WphMoB9H26E5jVN8h1kbvJF7Nmq8HPUxYN8yvWXdtu24VQF6YFGx48",
  "key35": "8NcRUAfEanuyE2QnRzBAhCFvDbRuQmr5pPkGos423XsXfrFDjbh7e761QSVooTjFwiZ8f5iqHiTW9JneyFoMJcm",
  "key36": "2W137mgDrY3SBukuxuMTMsNEWqvQdkjuqLzTXZPBPFG12YGvSqev6SavEUGJTZaVZ8UNVandRY7tJwTh2APqoSwq",
  "key37": "4SWKB8Kz3YAWFMyCLU6XFb2gpe3eMAnAJiFbcW1Psi6PRT1MLfkP8CyCZdGNj3jKAwHGjzoRTAeMdUdvVGA1A7W6",
  "key38": "34BH1WqUutRBUBYK2DgehMFLf4yqpbXXBj9r41acj8pgyWhBRMWYrBqzRMCgGVN9ayKebsX3PsiqsjXmCTMCZtdJ",
  "key39": "6t2TxwT71oj8hD875KsrB6K3WvZfEmQ7xzfrqPcoH4Acr7ayLDpioYtig3jnP6BTVQgvLRK77pM85tGgApDHXAp",
  "key40": "5hPc7RxvAdQcZdruHAd1ptZTzNVkErJmysHztC5e2CkMsF91NYi88aNRyLQamHKeNWX72cefMWRBrqSeu3XZrYei"
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

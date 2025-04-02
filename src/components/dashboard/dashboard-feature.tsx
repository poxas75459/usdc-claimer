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
    "4FqcrpEe4EHGCLNgt4AfwrATaFFmM2JJ8NMY7ZJK3PEwueJuSLH31XAfXFf7sgpNtHwBLuBM6haDqx1jgdzEST9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agmS2Bt3UBR4E2cBXNL7zLjh5HZGNfxg2ou5zGtwrN5Jc4yq1TaBCKhtpfD33iV1nwwU69dRUui8CeYtnbUVLHF",
  "key1": "22m2oLcfzBFN6tKSBgmr2C1gxPyjktQUhxjhBXEzhxVfAQMjEB3QkNsZws51VZruWipsi8eNi8dprxwyigBcT2au",
  "key2": "4KrbQVhEmtVkThHb94BGEFPU2EzRBtt3prFGewwV1EyzdBd2pQiBZySbbhcgdora5AJ6M3MNn3aAuj4gGmS83uCE",
  "key3": "5t6UHFUJX7G74WJDJhayKxvRHJvV8jVdEpQmWck1KYjvHQuTNy2VCwC4mSrs89bHzpQZ2VKH1k83qHbSLmsgcfuf",
  "key4": "2JukUVMXJQwUg6BZLCEJ9koqS9jWaG9MpDr1AvJ3moiXtfKgdoNh6J4W51qyKKPggD879yQ5CY3t5hBtSjGJQJwg",
  "key5": "EPm54G3tn5341o71BBnmFocRgojWm7bGNkLc1yVtWMUtAgZEt2BKkQDWnqdkVrJ2EJ8peoi8K1VrVf1AAdBoyW1",
  "key6": "2C6gz1zkxmNjnnUnnyrc49Hohfd5rtYav9bTHAarvLtF3PEoNHyHSZVV2srJckAXwVX4m3WDkUxHcD1PybrQ7SxV",
  "key7": "4DWPk669Nohbp8EFzxEPq46bUE9FsWhsFe9MdCZZL5WLpPf2e5EyFxMnmCX8Jw7UAWCp9c6Cm288JJREJ7szmqMi",
  "key8": "EB8ey9cHeAVbxCBQ7XXX2s7kwCrcBsqpxQJ33bxALfURjYieWekjAT85HAr6TZbSHM1Ve55dozJfekV1bSypH4u",
  "key9": "4J1otqjLhF4863D1ZKWjmcVeu1U6Tdn4QfBBmtGjsNQrghwzsF2fH4jiqr1vMCWLKA57s1H1doAq9Ki2c3PoF4zd",
  "key10": "7EcvAbJY2i8VahBspdgeNHesfUaPwVmAWtxo45B6gM5Nr2LKg1c1VW9EPffJ5LFaGTTjkrgwNPFrG4CyZ3tbiMp",
  "key11": "4xjKAihz3wbeUiXy5ppv8mvkiKe4Nbf7zzPGX2okiaQfUcTvJ1ReYkznrTps6iSwgc8hJbvTW1DAzoAqRLJQQcQD",
  "key12": "2SocX6EgeqDvFDAfnbQkmzGqJKCroWHVQPx7eLpUK5fkcEpyXGgrSH4U8uPfGf6eQcLoXRq26BXtWgrJ9AZ4auG8",
  "key13": "fHqDx7iDD6qDypsPpMuEdBLokufUoaRhfi62cFR5hDenCUb8bM9nJ5c3kHkToyPFCVz7rT1Vzw7UktLfoxzg46R",
  "key14": "4ndiGEFrCRRVL8NRMernFATaA3KJfmxeCc8z4e9ZAiU991L49ZPsD4hhrgx5EbQKxSrdydRYNwErrz8LktHJsFML",
  "key15": "2AM9gyPrKq16HHbp9c3mEa3cvJJ7yPkiNCwKMnfTzsxsoHsB4DEgVoAeTqR21TVmBZTs5tSNeENYLSMAaMUAZ1Ug",
  "key16": "48MLTrw9futmkLrb8VGfHpQWHKtdKcmCeQzz9xgtFUqVkHx574xonZq3bQnNggJEWZWENe7ykj5mwEYUrikSwZpR",
  "key17": "34S7ZARfFTfenHFZmmNthv4GQH2qJZjzPfz12wmBfNgaRPGRWDs2eCmt7jt7Uqg7BHkh8wftW8CvNU6hXcjFi7KF",
  "key18": "3FMtno8QGa1rC7ohqxA6XXx8v2qNbi41xy17BKAxCxeLKF64E6jYK9wLaWiBdbCFnr9TovgrD74k2Uurs87tk6Na",
  "key19": "2Qizz1n5KvqxVtNo42WQgGMMboxmx3CeY27TaB1Rr9ESJmZ9ScJu2ijfAGZyQUp3MPHZRzLjYjDcPGfBXZ2ku3RT",
  "key20": "Lv8nnNtcbKTtEHkRoAgi1MjPioUnNJBXvTBBaR9SkSuZcbJGPWtfb6MXiEsXVZTRP6KFc8YvkdAGJ816S4rkU6d",
  "key21": "4LJs1Y55EQas8SiR6uwwQUUrsrzbNBHenZHMSDoTovCJEDxq9d1cxq4Lxh8CCwhD2ya5PTCHyJFxtU37AGdLYbRR",
  "key22": "BLPUriE6KN8dc2zwjv6HJibXXTA38cTc9cGUDWBEFTzAyvEi4NTk95ub92ukbYTiXDiwanj1U9gNaoGKPvrkPMm",
  "key23": "2kBJByrtaHTgrsRBLbzCoKSGE4h3C5AdJq71gPao3S1h1YxC9XqjQXKRQtThLZ1yiZrbATL1JKeEWMf34TycsFuc",
  "key24": "jDXDMKgTqw216B39J8M43mTsnsbiFyR9Sw7e23YzYbF3SUuYHYUS7iZ9vYwedUGKzidyFHn6BZR3HkQMSFVjwgw",
  "key25": "5cXTA23edADqdwj6PenPoAw8hekcratbpBrdUr37gZ6hAHpgxXLp2MTCzNVbr3kYxQTsvxcvpgekcFiXvU3GbrnM",
  "key26": "2qm89p7H9Mp3DRe4wA4ZzbUHnBfrXfeYY2DRBK7N3HJC4ADJzoHfCiasWbkDfv7pK8vwdmM7sV8nQB1bKs5jVSCL",
  "key27": "4i1M62TjaDkQXQfhqhcJEeAsJ8a8L3GurrNJss3GhhfioCeRhaorr8mvj8PGLy1y2ADxNCobMFYzNJHcLzprGF88",
  "key28": "2x7EvzgcdZhPfJHa5UQfUAa9Cqkmc1VsW9HxBa3sPYnWdCopGHTLnM3FFNiVTiQLwo6vyNH2mHTHq44nbKLNfPYb",
  "key29": "3E12ossnoK9LtjmYeqQDYHK9BzsC6RYUeioafxaj8L2eFEFA17xjx9Kt8NGFzFSpvuGh25gBjjbtRU22aLP6Fmv2",
  "key30": "3qHnvwWv71Z8BrfEvSNiRoFoRe37dPhfGUF1BRfq2Ltn24C2Y6RuvpBqkpu8hUqgxco1gpJfPhBWopfN8DYDdGhp",
  "key31": "2QmnNNWWxdVG9p5K8UYmy2KGyXxNnwptPt874HTFikztEznmJ3P2NDiStjhPMVwYzdq1vXpzbFSKWoXsdydnryLN",
  "key32": "4cjS9HcqcPM591zX5bA86tWDMcGMNBX2zoNrWzsnJKDLZGAF1LKvEaJJfGWpxqapJ6QGK3iUFNX2HR3Pgmzrm2hP",
  "key33": "3kCGMhMTupoAkXek3pLegJp6J5JqDsTEj2brfdc9HvKAYo1b3TAj9KKyjAYsjaJVR95FT4kyeP8XAsBjXH1MCG36",
  "key34": "35KgMRA3yTKo1mjefRmVdf2hzm2XEHyaXA1sC1NcJHqdxsjY2rzTtyuaxDRhNBkJzEpCaY7fxgX9LkbP33K2w6Pi",
  "key35": "63SrPuW8w8CkJRnSHwVS6NpA4JKx2orKGgh5VxHTXcYfDbB1SjELDeVHzBmyJwwgperQETH7BT3hyriUGfM5Sy3b",
  "key36": "2GPSpDbXF81gFzAhgX8Rtx9GUHRvZvcnDzD5hBrSYkBMwoTNsZdJerqhokFAhizMqw1ZK2wA8dZLSga6Fbc7wAee",
  "key37": "2eLikkrFr5bEL6A7pxM9LDt9ynwNpD2ue8VHyS9V2st7gYL3idsBuzZKtfR5BDhmQvKkKTyY7qREspKsK1ygQ7fj",
  "key38": "42ZwkXgVnjUUskTJ435MEeJ8FMTwg3T7KVpnvvxcJBSYH1HoaB1BvEFJCxUFkSih7FvSYJ1VbGBYM4sMEYkvMG3B",
  "key39": "5K3cXQmzmuLFjcQJMBMJG5d1LLxx7AQEcgvA9KRHRKF8QdDLzqPZeBLM6REJ7v5nCQVmn7KgtkMAaGCsVK8xN2vf"
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

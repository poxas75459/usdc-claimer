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
    "66NLeNenKdAV8gVnwXnpd4bNS1vdhSm8MdafdeytUv4VEfWGhNESZRC4n1m5x6Kbvf8ZQaj1QHycP2KM5gRbvYu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JmJr2hESJ9m4ccPrTtqTdPKQQXF3mhRkTr2qsfRaBB8Ab8jk16ewFqEW6zYz2tPDSYcyFUGS8R1QXzYvsP2FeuY",
  "key1": "3p6gjMbbevazVEmK1yRhDbjYuAp6AFZ6TJAxDwM9XiWqdJjPCuM4ZtA2R7nGS2TJrRUku2gD1E4w4tBwkVU4SV1k",
  "key2": "y1bog4cc9iZZssaib7fieXkxXrfZX7BwVHAwdw6zyG3Szy5F8o5cNRV4Qv8fKh9gSiyCJBNYvQe8hK1r6H6LDz2",
  "key3": "2ggfNqnVn91dUUSkUgeDKqc4BNA2SDV24DEccGKXxnV8NjjWUkgk4nR5mUuZnRSspdgowERCqhtvpfWeCAoto4Uy",
  "key4": "5STYfwRcVE3MWNN6Mo8q2mxwTMZ7dvttgiL1h1yXx8SarFzzrUvi5FShqaczZ5671jkx1iocugC7nrF8W8er3q3y",
  "key5": "4LjP73r9GnZ4oJMWjrjYSJqnHKXop1ZHgBbHVyiX5dy4dWe7KBph94BSU6YyakPgTTpL7g92m1t6oF1aDsQNUgPf",
  "key6": "ia1kWhCchuTVB4R8BD3Jx4Sk5F58vRwozqcDE1ywgYSEVjuAnmnYKvVrD8gTRJSJg8ZW4wm5RAc9iFkLSm3LV3V",
  "key7": "2BMZrEVMKZHbfLAb58Gyf8LYv3v8r6kWJDtUvqfTy7qpZrCubEXdzKHSkeeyShybYa4CUbto8qs9K6tpknWuFuuW",
  "key8": "5tCzV8cWJaVuzHqAWFYW2TGxgioCvqWWnHCixmij5LFDHivmhVBakDy9HNz226kYM6XHwMqNkQ75ae9HFT5S9jDi",
  "key9": "5BE6Cuzg1HHNPYDsc14fFeTkjE8aVsdgCTgZh8fvmQEETLP67zw4q28cbUxzGddjCFkhJ4XzjMbK2AitsNcE9EPC",
  "key10": "4UHA5gAXMoeWRC3yNCPu7cRSMa7maGVHTrf5ScGkNY3yNCv4maHANJJtx2bdA1Pa4qM1pjjTUmtiGrBZQRaeXbuv",
  "key11": "5VuqYW5jzCVntqs58ivy6TNoQQtcxFrvjghKM8Fsf2mfKoLvC5dz1UxHMBWbQeSdwUreSeqFEKMMpjrm8awLEHcC",
  "key12": "41yuhBHGHSbWTh5yPXRFNfCp3AWnqummFuPjrTvGx4fS8JPm4Dtbi4niaJXM6WkdPmopH2aXJDEkr85ARhitdboY",
  "key13": "4JNQJND8g5Z6A8qtsVRYoVyd3MXEyvVs83HD9U8w8YHj2QTyjwq7afb94Mini1o1kBFMEeWCFcR4J2QXEugcXibs",
  "key14": "58gCE44T61tS2QLsdRuk3z42NyZQ9cjr8g94NAhD8fifrwqyJaiJdqzQP2Ga6DnwhgpEPFjfj4dLKR5xh8b3a7UJ",
  "key15": "HBFtMxpWXBis5n5iGSb4n5VvG7agPTVozS3e2JGw2roaVCyyGuTh6YwRCcu65Hqmwfb8cSs6aahNmJP3Um3gw5Y",
  "key16": "4Y39RLiRDCSbeZxT6ZAjBv8jFy87cdnWNqxhmw53Y52Z35Ka11nJSHz9Bcfp7Jmi2R9TfHxmK14v7mSG6gHJc8bj",
  "key17": "4HTQx91qxMrVvrq2mqxpAdrJcksKMkAEsfZA513zj1eh1JuBBVjd5eEbzMs6t2ZZ2XwhEsPRwYm8VKPwEA7wDnEZ",
  "key18": "jne3c2XfW1zeNKgakPo2e37XRnTxaaWyh4D7P1r2J9zqunTeQSLUnLMantCG6SWFC6cBt7gnXMEQTLDueLTBgqY",
  "key19": "4jpuRamjmpXkcznt6yh1sNz5ChJhSgHVNmtofGx2i4K1ggbTqdn9GHdEB3rFxjzbiKeGqUPC1xZ5kijwYopXaG2j",
  "key20": "26WtTTYLvYmkwjAE725qPfAJgVeXQr8gtD5g9nX4dRQWk5gWBYTykbLW11dwKuviBKM4YA8orrThUKCMo3y1Tu9v",
  "key21": "4TxodfcGvgGMNeCVdWkCA8YFHhA4gR3k2mxaVVPBhad2tbxfTeb29EyYSAtWQuNdg6pcSCNaPg2CPgPLdpdLkVeN",
  "key22": "bjA3zEnaSj8QLJfYgYx3SnUo9uNsew7D5obiGYwYJgyuJy16JguCr9uwdFZVxcsgUhf49xkLom68htJ5vbfcbjX",
  "key23": "hV69UYyx715Hr4XhbqsqfjW5XQ58x87keowcRNt9krymiLAsNNjsucFBQz7PtzaYGrXwY5apeVPLLztKZto1d4F",
  "key24": "5Eci7YpR9XcWJVrX44WSaSStCizoUYZRU231VWkYoBcc3VPmUj65trqxFuNgQ9PFNik1Cvioqd3d2HP2y3f5trV2",
  "key25": "57thyt9rhxYoQ431kh3H4E6evmiLGQxsi28xZ4hhhe1gbk6mreQPWBRmSdzCTZqagXuybge6vCPnzCavgrzmk1xf",
  "key26": "9AKKs8g5NaUaFsjUx8haVBztdjvgHHyS3VvKQmjrkjTAPsaSCFUJg5SdLTM4FFCmjtbJvZqZY8ytxr4BJDrPRMZ",
  "key27": "3DP25vVgA3uChrUhFKMC9fuetGe565KZtQ6YBMw6C6po6uRNWJx7wNpAnhcfJJ9RVmLZWrT7wLcrM25yNV7rF2i8",
  "key28": "2pBcMMgPedtonZ7VP3ybX6WghVgGYLbShZoHuVxkHiGy76PfCugW8GfA6hsZWdfkfbdvF7hsWw5AoieYr227t3zC",
  "key29": "27374teSQq4jfHwe7ytrj7oLtBP7uFq3uKiTQfRTC2dvTFxvjbThn8nrJEChryDSjsvrQvFqCFUEEAJqyckYPgjL",
  "key30": "3GD3ChtXxVdjxHfMEwh81akKDoAGKZ59ThKuQ14TecVjPu8npjrCCJHbpwGCBSQgTC21rge9niBHE4J8xvM7P7vL",
  "key31": "4sGuXyKjFEh9Tfz6k8bm6koNimEv8ZDDDWNs8orkWcK7U3cRe22aMAPJ6tPbqxYqbJGswv1zT6iKAEhv52DZQ6Qb",
  "key32": "61auP8tpe5yzFVRq396b9seuCPFZkbeB6TXtn8RDMkySfXoKspbYe2gyKetaUico6AXntQBgYUD6CTCzVV1mUJY5",
  "key33": "e9F9rWe3hy9PCe9MvQjj9FLY5cuW2ooWEcPdRWyBm64izeuBops1W4FPjuCdS7d8wwJeejzq4BBcWRyyPkijQ4Y",
  "key34": "h5ZNKwZwP6V1PvQAJT4TQ22Z9YiZufomDvSP79PTzuFjR1QSME9JG9sRie5zCHeKeVvfFkFiW6EfYUFDT2j5LEa",
  "key35": "2GNFRA3A7mqiQiv6K6hBk4b2adwbLtPZW1HCeX4up4ajCaRtRbRY9xJopazQYDBhJyBRo6wnjBaJ9yydeabGXzT1",
  "key36": "5uxfiTXx5dREK9TstwhFbLNnaa4wVp6TunvJt5CTDZaiaUjbi4KcicwVYwJzuHRhErpHZStoxPbJ9vFEqtFoCcCd"
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

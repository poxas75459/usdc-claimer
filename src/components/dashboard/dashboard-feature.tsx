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
    "4guyKwzB536z9Jj1XaBqBFJLKrrW6WVAXB1bNesJ7rX9bRofUgjf4rJSRBhPMGf75TknreGbMEyjnUYr8jfh9Xss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z5V4fnyePdGuW2ZqBmoREJDmtnj1kHnWzcGZHcJHHrJGfRkMEk5tQuWGtri763suPaGmAwyBqqCLs9zGK8svzvM",
  "key1": "4UY5sVht72dAbXWCEe8aaGUiia5vEvxqsvkguW4AdmgYGYuc5est741wjpG8H41DWKZXpczCxPRyd5vRcgf69sE4",
  "key2": "5iXhb591BBdVW6jKdGb8z6GHBXguiXrqt4BNmL4XS6AQRxZrXBucfghd7ukz4T59YmA4wy6vuFYqrMrb1Dg1LtY9",
  "key3": "5ambZ3kfBDGRc9TTTZFhjRrmtzPWALkDrL7XaZjXn3JwXuWvVZ2iiXJfT3FB16wLBKUJfr26hX77ZWj1c9sU62pd",
  "key4": "3oCT4xJ9hmp5ie8DwqfgwGnwCBTCnDcmw28vAAZND9qMYKyUU8bU6VW8gM44mWiChJmiuAGq3ZzoWQVzPtvUAtct",
  "key5": "381w7i9xovFxHnbZXuAFtPSHi9PC6C1JTtC9hPJJ9C4N6c8iF9W8oK69UeSwjni5he5VaB4UmDEMSZ39Epautuvw",
  "key6": "jE4cTdkXEyK3hFdGzk3NZVwK1fZKoBVAtFRAVa1bkoS2CeQaiiTWodN4bm8W3fjbKkKeTJJoN4D4nc1PCWnHBQY",
  "key7": "2x1A5uTDQARAidWTZvzoedZtC75TLqgnPoCK4WCoH34HaV68wUGaFkbJPJJMj2X4UownSf4w6qV633XTFY86F3F1",
  "key8": "cSYTBbNVAyqK8WRaB9cA3rYE9eNW1hUBFBU5YgQZJxzU9c3r2WjJX1BkkYFugMA1NNtMPLBdBKxkSMJgRDiTaK7",
  "key9": "4WKN61Zo61qLDz4N21zKAgBe3zBbNWE6uZQGNsCbVcPhhoNoo4JdccdVwZFXGMoshEYTRu172wqixTjoxPwXnjia",
  "key10": "4W2Y6ZqgSoSL1vBiyVq7C2HyzAfjzh4w9TuxkzproFPBSQwJLtAzVQw4mNifLiE5RQZkveUVJqtKxArwvCk5PKDB",
  "key11": "2ZZr7E2hBe72LgivU9eFhLtvDzitcHJDwtps6ZrNL2DNPaEGvopx4rrXpJ4LRFs83tE2jqXyQjLpwWwSzv4cnoKS",
  "key12": "3zBZezWVWg2VGsmD3sf7EGoeDf9PG55AbQRkrJR9rF9S912Tu3UjtUXHNnsESpm9fw1NuYyDSKqP9ooHr7vbp4D1",
  "key13": "3qAWyYHbMq65bAv91rMAdsxLct8QJTqr3uWuxYxAyBdT6ZbRuTNpFvcUJBiD8e7NpL5WKVfWHU4bohuX1gNVy66J",
  "key14": "2KCyptNGgzZzeqCEccDvz8fMbyDPBNLBgnMQnuCV3yoizK4LaTom9R8MCXs9HqRX1pPdSe3NwoGa7L5vEgxiXVeL",
  "key15": "5jiyv3XpbhvQWUQB4hNXYEnzgFRanNzPB6y7v9B9fC55SM8spYd1vTZbwG49UVvJQMEj4EsRfdYjBz1G5bgj9naq",
  "key16": "5eN82FLJCEsofp8gJKvSMBqGSKRSxr3akRT84fNUVZ7vpr13SmW3NfbpvrfvPpPjakQ9cBM2nXBcMEJYiwah8YJE",
  "key17": "39nyNNeqTo1GcD75LudogHrzBj4pJMLZVa42DH5vqDcaK3Jvu39HocX7gUxRQ4fTjo58iFXvYjsXhH9qTEuKCJfv",
  "key18": "3Du2v8ga71m8EKUWEYZizfigSvnYRk4bZ58ytCHM9w57D3MV8te3G2QbwxYUBvCM5EQeYvX5JfzJkULL4huqQsZc",
  "key19": "3V58vNQ5WYQZxXBzRG6mLv3LQkVpvw9wPeo9Ve1DsJKNxaD8HysiRjMbEpckcT62JxK7S9d2DPcZ7nYLKx84Kd6R",
  "key20": "so1bmX9NiYX1zw5dcFBedGiFi41ByDRdVmbX5b6xEX1h1eQiKx5EqpAZCLe9f6LZ3xKcwYJRcgs9twdKMis8wKS",
  "key21": "5VKsKZDKwKnwR3heC931JB6aiE9sVPuhvQLBym26g42rrnQXvoaP48UVdva5cvzVqDwCbpMSCEZY7sAV7bQFGTGN",
  "key22": "2GD9JJhg71VVLXFCcRcWRT51Wc6gpJDDPN34TnkcZzLs5uVsyENXNaQBqPRewvvbT2QjHoo5MyGWSYmEGi5TVUt",
  "key23": "fVP2kPaceBxs75NfYdhUvxBagL9yEDd6M25D5XugQyo8YCXYi1zVjkMXJ7G8T4D6UkGtSEtDH3ghFjzrjdhd3ty",
  "key24": "2TzcrreuzNfmZiy2TqfYvUjH7cu9FZP4pUg22RTLJJkbduqFFyCTF1wPim7GxFVtEXzDRsSsSMi28xXVaWfAaSnw",
  "key25": "4o92NPZkF6eQBNMS7zenqqicsLNX7uJyH8mT1UBxWqsN1QqtYeHVTsuKP7S4hsk6uK67KuKS2oqKiabAQE3r82MC",
  "key26": "3PEjCTvHiZ3Lp2anp975AB27dZCDHPVJQsoYYWB8yH72i8MDpAqErH4x9GQ4ACYRzqS7uyWY8o8sjCQZV3w3feJE",
  "key27": "3eSHYx2qTHGFtfQmzzZPi62drbgK4z6r4W7zNc7EmoUGTopD76zQvhwLwgktwP3vpCY5txSnEHyjVYFw9NQnua53",
  "key28": "24S7YiJtL7SmcEnR6azmmTmSYa6aTfygXvyGNWS4F8j96atFSGAJFzwgrVWvY3ecy1R3QRdcaJay1vBmUqyaBMJY"
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

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
    "3nZhVmE5dNytR46HEtS7jZtbeWNyNuPEb3XCEqesYjKDBkMAqH4NCoztHAy9vd1vAbY5rt3wD9TT9tfUwUPrLSv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8poJPiaw2VMEwnvcbmqcL5EaCBn9eyYTUPwPjVavwWw6JLszLByaShPBJrwcPkQRLAUCwYovVxEHr3KLKaGtc3",
  "key1": "3njJLMpZf1E657zE1wLGZAEWDk4aCZ4zzhAJy6ognmXjy3WGKtJPX7TczJkriTjyKL8NcabGF6dKgbPDbCREEqE",
  "key2": "2npRc14wNWBw2LGSLnu4yAKuEqZwEQJA5N1E99BuexFC69jEbQJENaCzp4af8YeMfNmKBthRZpMYtLQdRoEjEqnT",
  "key3": "4SLanaDqdt6WsVzFsqNgfPDDU1Y2YppYuYVVmYjuvG6tfnA825FGvVYHkpTxsq5jcksvGZT1oekxv7QFFLM8P6Ro",
  "key4": "5ih9JNHxAKPTMu67a9KZJZxNoK51Aehd9bJXtU1VJGzZ7eZKqa6qegNaKRkvNB58LDt92m7sRKUAg6zAReMFcV64",
  "key5": "5iPC6CogJLuajkJAd8wzgHbL1P55KZK36f1pnx5yas7d9pPjfUqZnrxgKr8R3ULJjd9BfmCPQQmtgXTrpExdwGSN",
  "key6": "qQ39DckKSPcpTqSUrPfXHPFsoSw5gArPvioUZHturjL3D9kqEUtYnMrdidG6FZoDhLJUh68TUZ7fRWt35YCso4n",
  "key7": "s7d2B2pcStUt7nUVC1dvGCAVBYP4ET6SJvoEjNQuJDSsbZ2bpLze4oXkTB3FdB9dZvnEUiPWxbRuYcLdbkYrWKy",
  "key8": "gW5CCEZ2pL6oiBD3FpEBzXsGcvuwmaGsKHFSWkWdcJY9MPfoNNSAsuGXEVUxzAV6dLcgBWfjqEmmLEDb2ZwwcT2",
  "key9": "3tk86AFdr5FTgnxiQsghFmy8faRp4JqexDi2YjtRBxL55sbmwgxV3Ya5WSKFwrYMeP8NVFvswC4FoZfGwBUEE9LU",
  "key10": "5BotiBZ6gGds39mm9ZTbHPdbL7z76YRTqULrZ2RtB1MDf1E51TKxF4j4rvmvaakT1TWSJ7zbf2PRyNirqkgugr6P",
  "key11": "5yKksC1VJgyrbNEgAE8XaNg5hBWZRtLNJoEFn3hpbwSTwyo56SoU9PnvFJLDhLEpNnMRibwZNxENGP1Cv8KJL297",
  "key12": "3TWLA9s5jTURkL2M6GwSfYQgUxqWyKCfK2mFeLG9xsn6GUFkUNCZjMSdf2rgmKQXmnm3j7bi5QKPMNVkqhw7BK6N",
  "key13": "4caupbZriKrdR5DJMtY47cyuw6KLNW7GZ4Xh6QtFq7uRwG8jqmj2N32pKknRnXZENidRvRGVnwUc1DERNcXdVbT2",
  "key14": "2jiCFgAwQTDRZP2rDMmMQEToMfa5uiVK6yGQZFnrxUvmqoFKxXGdpm1uTzHwcb5MDdVXKuub8fEKRj8mn7H5rQNR",
  "key15": "Grp7YkXcsj3n5bA3PNeEBDEJnE5AkWiS3ApiSoo3SCe9vjdDwDnZoKg3SMH4zjvJcM8rqvnS7QnjRkLZ4eLZ6BJ",
  "key16": "2GJhWLYLmeCWGmno8gAqvxyWr4Dewjn6voXbZoXkxv3dGdQWoAUNJhcpiAJVqwh4Rd28DHRH8S1XZTF3Mq6MvGgb",
  "key17": "37QzFFhmACTtRhmJ4K77hB8ECr1xXATuzRNFjh6CsZoVGigpcmKHnAzQY8HnmMcqAmSL2iytmyjMTPmbZP24v37u",
  "key18": "KQy4zGhzx51hLEuqC5N6yJniCNVKsnozARrWi86ZFft7tPVLnrSeMJ9BBmxKZikj3RHEUV8uR12fR4kBXSSdjaW",
  "key19": "bPbuUmRWETbq3tWknZagXJvzmNqA5tUTgsAe5uKmLVZBoXeJkWFPKnAdEJ2Z9SihyNnpFt7aZLDT3kLt5EEStVc",
  "key20": "4Hpm14wp7oSFzgxUpAKp8j7kwDQLBHYNBe1MoJR4PjaYutHB6yfipW12zUaEiGscRhZ1ySerVSrsB3othZ5uZE1b",
  "key21": "3eQRZPuVn2HqziPRPgaWqEi3nJgd6guC6uw1AbnzFTJaFrQ5v48nQwMF7zfcxsdfxGGdFW3crLruCC9kJJ2VoSym",
  "key22": "4cC8UYH2H32hkjJYFe4cYWqHsRgyZ2WMZcww5XXN7jAzJLSr6fCd5zbTtASeoNXNZ2ku4Aa6doMXzyxqfKCfWYAJ",
  "key23": "3YexqxVBMSt4T49u4FBdqD7vdS5eArehnvLBAk8p3xpAQjJAADDLy5RxjrE93qfQ1BRmdhssnVB3L2igh5WRohef",
  "key24": "5qSkzndZHww9nbk8HC9YHNJhbZuv4wXGzQMsqVuWsVjndqXPHe6s9WSAF9MKHSb2qkgauxqw6viYLfAdmUuYn9jy",
  "key25": "5t3bmr2EuWJkn7WH3jsTGcNqw8W1c9uVuXavnMCfRbQUPB91T6Z6bxArhHSJKbAbGpdoUzrjjjd466FKX4LqPUUC",
  "key26": "3Vw3etCDKvLpwb1izBsKZ7HJ5RLqbJFfBQDzQouFmZkA6rCfWr4i4mn6i6byREKg3VYuKaMPPk6eX16aFM7sdiUf",
  "key27": "2Rm5z7FygTZgw22M1WLCKNfwgTEGBxKqF7b4gU2rbqwQyacRAXLPzWYREWRX3Co4ACm1LJsAgwinGEAbRMae2i9y",
  "key28": "5P7XpEFazQ9iZ5W3ENt42zXUMGzeArFAmi62BqtKvAgtEmbLAJN6KhpRY5Y3q7FCUUvcEmUm5Z2kucquuvPuedTm",
  "key29": "zF4YKCmr7zQNNqS2fien7yGjpgTQyKUMeavwqxepZo3q6uCZNpemLqrqGcd7MRqxQPzhTCj22U9Bf21NLwQvvkU",
  "key30": "m9GnM5eGgW2y9ZMN5oKoNCE5ETKyj6AKiHgrWhmDcSXLLobJ7AxHmyVFxLH2gCsksY97SUmV77vtCjUKRjyeRDk",
  "key31": "2e3bRVLhmtuGU1bNNSUQnajc2tZydW4M7cunNbH7y3ZVFoFJEJFvzreN4duskNkA3baWN3UvSHNYvwHgVz3Q131d",
  "key32": "52shr528nwtZwBcCVJkMf9gv6L4oiXvtNoJqqjybH6E1Q3LSQ3wnx8fYVYTYK8U8heKDz9SqtvKxybnsaR4rCim6",
  "key33": "HHc96JSiu91QCNAdE5fU1T8GxL2G9fihGjvBe1g8pXayuXp6jeU5QqxMZvfRhaqrEXwxNg3E6eBRSD4DAjnHbsq"
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

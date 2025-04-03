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
    "2xbx5bMBcP7QoeLokkuiAFZQURET8tG6tvh2XkzcneKYVsZzPZuWDkt18zg1oKBw4G9XEZAEmpy8tdWuoYNf9cLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izjwC9F5AKBscFvR8BXJoM3y9D7mTwCT95cmHzRhszf5KgtTSeSfTCB3S2YE3iJFrnhb5iSTQYe9kkTYSKnuZLX",
  "key1": "21f9ND7UCqbXVbG5ayp9ujhnadQdinr8V3AhM627wdCpA6uFZXxR2pQ92Hb9UzBPsxx144btbAPNEXJHGD9T3BRe",
  "key2": "4XrLkuCM8KcqYJfnmepentF6EQMrS5pL2ADQvGbqnmGcYKM4FD7fs6QbdgUg9txjmkcNB8ofTfgH3ddF9SYr9YTt",
  "key3": "5aQAiS1kDzWJAqDrrYmaRUGm4UL8buMf6Jr4cUZ6QasV7MNwo1dh69ziwDLAC5kqGDLiN7saKTiz2JUojgeSdWYr",
  "key4": "kLANhoSGaBqyny838VM8ShTLBVZjqsKhizHsSSrNY3qNe8ibnpzGZPRCQVYPX4K7GCLAkEerQjfzeVs7EKo6JJC",
  "key5": "3Fmph5WVAbWb2zu5xtZwfKD2UrhWXogy1Tp5tcMRJLCmayNLTDTqGf4k1FMu7Yg5w1mqf4w8uymoPFK1od4tAvVQ",
  "key6": "3FeWre3fVGGbV7DdSDLco1qLm9c6egpCf5edGpEgd8LHjKUtGbGuPw4yBmskNhJSsV4RELo7hBijifCctLZtZ7Qi",
  "key7": "346cEEuu6VCD5kut5biGLQdo327P3knm9LFZLjWdgKQRUGzDp8aQM95hFw8j24oAJqhV2M6rmJQTQZ9tDJzfAANH",
  "key8": "5aStY8S4FxK9FaY1Rv7PeHN8FmUFRH3fLTdkwNLKhQPQgAbGBjnC9UJu6BjqNGtWu6DFRJrpxpkhab57MfR1DBR4",
  "key9": "3gfi4TRWrEoju45a7wu7hGwgiScfNjNvGiZ9bcou6zmNZJCt8UVahXGiDZ8Bxp4cjRDVCSp9izowsbBPjZWrhBLE",
  "key10": "58kcUmf51UcGPg51CCtsu8nP4qsYXp7wYTmtPujdfVaCMnWr9pr3iWp9yv1CkJcH6uWquDfCQH8Q7bT3RgpwNa27",
  "key11": "qycobbg11tXUij8EBZP6uyE6KMFvTALqKrTi9RrK1dhUMhZAXqD4kNBV47z6K46CZQNyamepfhwo11MBX3k2QyB",
  "key12": "3WwWYSn562dQe64oVjd2oGS38PKr96M1j1y9yp7eKtTFSQ3ZrgXbKHgwx76XH1Gj8nKcvbsd8k6KCheb8AzVM3tQ",
  "key13": "K7wTdSX6y7MCidgY2C1tG7A67ztM5pYWMovtv8gq3ckksmSnM8VgXwToYcUEA9aAzqjaRunzQ5QfyVXy5RVpw1X",
  "key14": "34ecFJX5fMTSvNz21v51Ss5PG4MQ7qeWWXKwhxp5QfETn3RawAVE5ZkNTjWnen3YtYCrG5vqbUheVXsx6DBWbzPS",
  "key15": "649kqF11mXGAAxGfrCd3KYmTvoD2Lk67dLoRFUK4gEpYQKCSF1ZScp8tThTrGXVzaPz9DRnLxeu1jUJVCG1sxfpH",
  "key16": "P4phQ6d9eqmPzjnRrPbqA1ZXkUXNU9uLctoUfwzQh7ZS3VrJspHjjcVULn85wJoTC4i241WhTkpHBwSrjUBW7g6",
  "key17": "5MVxc8RmfqJLgxz4mzToG9QrGu896wA4B8pKkfZadbfKpcLLMy59xpX7DXhuiGkEqdXhLPahFTxc5k7hRU91LfYg",
  "key18": "4UCBKP1yxc8UScfjJWPPvsDqfQ9MBThAaKmzGZm8DYhe4AX2mfQvndFMMDVcV7q6J9wRKCSxjuwNboqFdQUFNj3z",
  "key19": "32X1613bA3CYysBL4QyZvXHkPdnjxiWbFLG266MgVSeiERTJWSdk17UV92Fhrqkf2yqZg9jnVwYbJVU3Fr66PiRh",
  "key20": "fMcy22VzGBqTnEEp5MbWaRPMqVfttgpHTEGdsaemRnMD4tcS9JxrPFYcnKpP6VGStpiU6nswCbcL6k2TkBSMPan",
  "key21": "4eza7pXzLjYoTSjL74pxHYFcndhQZAHWHF16Pc2BoksKHvBqLyPYzt8ba7KNJWTgz793FHgkJWN2n73z7qzxqa8f",
  "key22": "SjS1pABAktJiHoAiRv3k4mw3sFFN2qBMHah7HnCRyMaq84fLqs3SH5uWZGn5WhmFkN1CGYCvCwbAVM8Ni5ADxMm",
  "key23": "iAghYfAY5D2JLAFZ4GyFgTLow7hd9QasXxz82531TaU7tGgd1kE8GvyT23ry6PthaU4Un9vzox1cXEzzMCq7UdR",
  "key24": "2fXrwPeFX4Pr7f37BjPXBRJcTYnpAQDr5MBnsxmD4evKX3zhEhFYPFwk9bwNn7XFtLvjC1N6NAxJ7bQ8teUFegH1",
  "key25": "3pMUvvznqJ4Wsyd7NiM6wJGpagyTPiJ7iQHMjohT7x69c7RrDA5pxNMvfa4JUQPhMKHYHwqqsxXgZGHXd1w63dDA",
  "key26": "65qFS4E4ukv1HJnazec86vQKzkP3Qwnj7AJXY6BpUNTL3NfPwjvrCnhrhGFqu7mpB91tzKoFeZ9qNVitYnvZfcj",
  "key27": "4hJuMwLh4UWxwxt6DB5YQf7WmWHToeb74hX9et2V6w3mW2UuaRaq8LGj5KMXHPsDoPKivs6ojuySJrDVYwrM2sZt",
  "key28": "3xcdsuEH2zjq5be2ComGfGw7DDe6ZMtCN6XBk1ecBBZgdH7B4jNAKm688vduBgPC3LPyyrNBWmfRhWEVkpxU16TZ"
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

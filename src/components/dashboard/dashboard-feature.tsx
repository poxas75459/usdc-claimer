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
    "33mKxehKchDHk96ZS32sxH2LEuYSV6XUo5StPkChTkHzkYAXcheU4j5pRYG97FdesasRYXk3XMshFomdYaiZtw9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNFUSFfZVBSiGsS15fsKqKniCb9XrYzm4TLB8CqJZLoYzfTRZkbz85z721wGCZBv2iR63iVsv5ithRP5HKcpzcR",
  "key1": "5t7YkTEdd8S5qDYFUYnkSsMHqSGstJFKZxBREaRdgbvGMRS3GfmyUuyJEZFHdmJ2GwstotX8rxQTXLnn6VdapmX7",
  "key2": "46jN24UutEtiNEepmfGQherb6zde1r31czMbXtFeADFoNxbJeop4cYEGvRdkbMHxwLMjBnfbMTDAt2Mxt2fYd8E",
  "key3": "4skEuEMgHL6cgHBu3AZai1MtyLQ5AoybnvHvsW7Dwq2M66qG9LyNF9rW353LLc4qoyKrf1AgVWKmXbH7LSfW1uUC",
  "key4": "h31S5WmHJgHSHCGXqDZqSZTSnQtQzFwwewoJbYG3SLEMX6EURRR8sdjvXpK9YQk3sxN1xXiziePveChJRiAxZsK",
  "key5": "4pjxNv4g6TuWXyQB2KpRo5CDgh79eZLqGUxwTfMkUDPnKQMgLfUzsDnrVAagRVQ6nGWdZeA6Dt8PFxpRdCR3Bioc",
  "key6": "2r51GPNuKDuj3hT14GXKYmYP4ZZEf9poVdKvxggafPnyq9f75Ym3Dnib5B8hwER22b7etv1bdvu7rKZfp747jkRt",
  "key7": "3TGdhD1DYYQG4udbACs4BDNP9RZNsHh9wpCWcHTt57jhx4LsNHxZRggN1b4CR5c41YRR9HeqNGVhuusamAu3JDu2",
  "key8": "thwqmYM4qkRuiDu4bB2cTWEpjW1rma9wcrtSop8oucqgQdew6c8WDARePVSxVR7Vw6LZjf3kb4n6FgWv9xwY4MC",
  "key9": "7nV8kZXxGZX4gd7scWfJPAuhBTErgEsMotujKZzCPoFGFUHBTMzBvYfjgWiW4B7DARusKnNyTpCHP2rjKBum9mf",
  "key10": "4e4xLetnJ4dPvukqRv8DE46evkqsb9iH2MR7Q1XSxBsB9SfNGWBsHcd3wqmUyqeW4j1Ap2a2Lbb2HXCdmpVwJ558",
  "key11": "4dtKtosqL8z88Mu4yBUze8cbmiYXuDGwGqpw8xHG9H88aJTusj8Jpzd1up6BNKik7jreJyQ6563DSqYvrt8RdsdY",
  "key12": "2hyc6f4BudUEE3QvV8qFbyFNPMssks75GPG6bmkjnqP7NHa9XW3f497ytYihR2R2mD4VtU9uQ3h2opNm8hpKZPZy",
  "key13": "5c9pQaNjUDXeKETsm7Dkcfp7LpWMuyyfycyqLgj9SCmHWYNG5CfP9PzQbHh38znCZnK7EYomopd9eztLsEXHBwSb",
  "key14": "VYigGcBntvbxwptoN11HVk9tr5WGscXwxGR4WNLDNpjCTE9s4SFV2r76FWnDY6vJQ4qLmbDNcpY1uWw6sUfTHux",
  "key15": "4gsELEGdXjnPtbe7kDBveGosRTCcnvXCR6hT8iksKZ8nDqLoigybG7Mry5JW9eKg4oJ9qR5rAzW6pKx4YoGdd73n",
  "key16": "5b9ioMUs2qQmFqpTCh8VGvcAAYosxYVoYfrdGTex5nREahbwxcGpnMvK2j9fpzLVHcZj3qdo4jFAmmQFZWC6gcoZ",
  "key17": "45pQe2V43VKdn44qpP7AMKkUdxHWLyFsQubbN95PF1NRjikZMxkQaox46ecbeCL1EcxfyjnXn8ideefH9CBnzBS5",
  "key18": "3mFmwhCvVXQ5vSr6EoJCfGTFoG37BozEKfUahPtbcFvSGL1uexUEd3k8VoyXtLRLDCtWGhas1tGQxAUhXmJq9tv",
  "key19": "6pUBjegtPK16Uauz9ovcvNY6DxuZ6M9YyWcFANjgCQwXQyNAwepKzDSHgQXdTNoNUQvTdPWAz9poCbCExyfUnbx",
  "key20": "3C7mtSYo29wZQ8jkiF25AAwf9HCt475DKi14if4vKx2T3Fy15s8VqEZTerLaLtdM1XSmSCnXgBRDBrXmUx8weZHx",
  "key21": "5StLTqvXfsBkPhSmnnbA35FFR6fyKAadY1ZnVPxfXgrXovLWBr98UWurfAkU6dokXni6RtPfU1u9NjDvUARDTRd7",
  "key22": "36yTzsjXKEGN6d3Fz2UuyCQ7v1sYkc9wUpNPtYeeijKuD9i2y99ieDgxr34JbqRriCjYjLhmdYdMKSAp6cjUwqJk",
  "key23": "3yXXoqv6M4CnxGZn71cgUk9MVgjkWoUnvDoLDtMj6fUMew4dwnUsFV3aZAQXwA8xpmK93Kt5YSAZLdwR4ZHJWqPt",
  "key24": "37soTe8mTuCdB6AoBaTUoWqCxKqLgG79GeonVgLNSYYtbswQJeHsdao88R1ExxBFsGzb5P7qUXn3dyfXzVV9MaTo",
  "key25": "631ddn2Bm5nBn1nFwVEMwpX1pVyqmfY2kzvzbjpEywGp3JkC1DMAMRViYdGNibC4jBHyyFfj3ueaXRSj5uEPGBhc",
  "key26": "4re8WrdsMMk17bFhK3vPKzSKBUKGzRqEe5uT6wNMhdgT2vLjpwBdApG3BzKs7DzWUFYDVBCHgyvsGza5rufYSPfQ",
  "key27": "27FCa8Ps7RHNiJZNLpPr2Wj6MT1nESgiMfDonG1ZrxaRPrQQv2JJq9BUZa79VMMyoG3SDJx6e7Ngaz49Erd5mgRi",
  "key28": "2tAUvbjNHHr1TwdoKCHc51Zzw3rFGnxg9tYfrkWqmGJvu6N5BVFYK5Y7mCpuMsUuVdUqwxgGw9ZxDvVvuUj7Ajzq",
  "key29": "dF8SyzG8KoKsHQw5ZLfiHuzYyF3snu5SNSW4f4kdMVc6eGQy8Ayz6qvzRJfqB6xK7RNuH7Y9nade6uUWywfbwwn",
  "key30": "3AyR54iuPpUesfGo64FBRNYkJqH4Qocq6YCrynnvsJVxLFGeV7BCbAwRpt4Jsu1KazqJfxssMyXcpsPe73DgrKrt",
  "key31": "B787HkqCXcoLZjjG1MKobfavd5wsC8LAHWR8cGZj8QhTXL9zJioftEQ7Y6V1PABLvvFsmKZ4AEz9QFKtmqB1dqM",
  "key32": "j2aeYgrU1NcGucr7GFNagYyLfmMpSUE7F4AtE1GWMYBkyPNHnmBrXBpJfoPg5qfcKCnsG6yreZPjobUngWPgBkM",
  "key33": "3ZRFo7u5CBzw5zah1LYaj49mRas6yL3jPk3etWSunRRbsqLAS1PUAynDjSAAUh2PErrV5PCUKz8VUfQYftzYRoLL",
  "key34": "3pxqBD5M8LERN64N2pwkcKqwTPc9Fhnpgbw9qFqgCvvPgPBz4XQTh3cf2AV7QGhG9kqTqJ9EbzYev7QSgpdtnJ9o",
  "key35": "45829pnCSxQeikaQQw1wPT2JzYidqAz8ZgdHXvvmK4vmzPNYRgGsSopFxLPMLr9fMYP5d5QoKo7H8f2FCaXpg4n8",
  "key36": "57hLRCJ64e8VZbdSkdkDMvs7a266BDW7ZEgCgZoMMyWriYgsqMPtQbLD3wCXUNs5ZKfk8Kg8YLWvRK4FMgc6K7hU"
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

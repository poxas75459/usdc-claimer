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
    "MjRL48NN6xH4uHsSogqApXDEC62UXuX9it479PWkX31ofYmabMLP4xemN1AEqKo3rKmW6CemQbLHc2eUwBq8jda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MtzFRTR8t5RekLNBesxXG6LgzTCUiciyooU4aHvdg1bEZDfN4RpUQRze71NX3z4X3S8iy99nZRy31pdcDzJ2Zg1",
  "key1": "5LznL2vji3oxptSk2gKpM1sRaSuLfmyLq9gJLSoGUEe4zHfRndWxGoKjPwsjwmS4MiL7Hx8o9nrBNexmfB2EDjgD",
  "key2": "5NVT4nxnXEFbPatohBQB9nmd9jAmNLY4U3QYyTXoWvVi3HxQqUhsp4YT9PLEXGqoJv2YmB2zHPyi2HiUzz1TRnxa",
  "key3": "3WsDNLaQLhDsRV9jtSCAZvygmS3N3wgKVbxPzxqjDB6kE7jFnGVWt5tT2dHqk92rdknQXwxxD7AdSaE4dEifj7Qz",
  "key4": "GZVc3CWzYJkugucFGxLzDce3GPq3RFrwqwgooXb97q9GxcidzrkS2XocaicX6Qu3qJQfTdi9M3uHviABFJFo3yt",
  "key5": "2aSr8YEpZz62ruAANcP4V54H9SFrzhXieFAqnZQwmAW4TGDjiyN7XNEBLLAzJhR4Gvr2Jnr6WMrC93jMuGjqihLg",
  "key6": "4VjqY69JJBss4Mr4pnHVJ54i7656SC1Fzw5cmRWheYd8B7RuQPJqkZpX4CKdep9ZHbBEB3xxLpemzyT8opNA1qi",
  "key7": "2wbd3oGvtKMn3VMNZpFpRphrYjHiJx2VeTVruyVW5k8md5EgZmpioMfh1Gv5Lvkm7TYtCUwH6hXUeMMtupHm9A9H",
  "key8": "3bi9ABL8EkrKZbqwm49M9UMuzPdZekydEisGSZysAuvD6xtxasKttH2XwNURgxgVyNfKYdkpPWMiDEtySLehKF3i",
  "key9": "2NRCMeudickLXXeVGHxf4VZJrWXtEwf5Yrw11fDGYXyYgsaeEGPnFsEVjnqbQFooE1RCagaXmBbtzgLmfCDmVw5t",
  "key10": "4QTdhWoksDCFANJ7qHEK2gopD7F7fcdS7HXRdieKjqNRdGHea2ZfK9buaxyUMWkmpMuHX9VqJnwgSxWGiUhvXDQS",
  "key11": "3vxZWsGQTw2vvKcjR5S2ZXJ8RFekgY8P9JAQEuUEyAcXvUyfYaT9ED1NBzoLBVURke4fMqiJTPZjTDLBwRWiBzY1",
  "key12": "5d2UDMH6KtypvbuSP1in7fGP7uYbD2rCtPyoCWjH6bp7BE7yPGKCjGkbQyodGbFpYqBNDdL457oddsD2NZvRHEmo",
  "key13": "w2bw6phQ8XwT5hZQi5hjMPYGFsEfFmrAPFVe2rsbNN1mwnwsXXm2mCqaWBUU5bYQnedhPcGMsC14xMWTgFq5WyG",
  "key14": "5zjxrbR3zGM8GDVoK9HstLAxZHRbnqCdFq7UH1P6VgLLLPWtu4hmxs1RdNa5GLGfjnsWtK7ZTUy5APmDgVVz7HM5",
  "key15": "5afUZ2JJZM1C5qU4x7tzndUJG4bYdFyW9sdZwtTGvapBYCruytmSL8b8tmPnoEGaWoGnK11a5sXDtVDsDwtskfvd",
  "key16": "Y71HDJ2rC5NYnNQRZnXfe7UrVmn1jiWgTQuhogNjjrsrwdRwTvjvHK2WJMzkzVzqTdoFzfnNKoBz7P4P2UCy5KC",
  "key17": "3SVQE1YqhhQYYSkYYsfxtUryJss7jr5wiWn8VPWkNi5cCsc8EfKzdRP2ieoCcvZYyPctdY4kbXSixdBodKRywmnM",
  "key18": "65Q1TPwH82mdXi8SjCWVkFPyaFSZbkXXPUytHd31FsRns72LEiSDbQJT6h2NJt1gCNnvFBxbRuDiJJrwYs7jXApd",
  "key19": "4ePWKuqq343ctjP3zJCTA1rvpJTjbPY8QJ4RLQJTbmRXJQTqhcbYvkF8wskVPGS6z7mMjKTHEKihjQPj46yh9h3h",
  "key20": "DDnos9HNnJhm2SEsEku8xad5cEqcJBz3uyVexDU5muK18kcmCPuexQ9K9s3NuSu6h9X8GFPYCtbRXNqPQnVtHw6",
  "key21": "2Z56DLgBcfKNqwQaKJuE78QBpdijn3KYGQHKh3AoKX6eo54QvjJMfc8hAR6h34WgKXBzxhvgQjw4eQuefo32Bd2h",
  "key22": "fyxkz8YAju25Lum93ZXjzkQNN994g4VagrHd4DAJDajjM8K3hatLTWFDuzXLhYjX8bU8xNYxAfuseF8VU6zxrqU",
  "key23": "4csgGdL5AsGemqhVpqNyS8vMZoXpBgyxRzmcKRYfy72hPX35kaaRcyCeQF4yRBhWnnLZtpXKpL4ofEMFzyq8ECpQ",
  "key24": "4TYWKJdjwxSvFpoUJBNw3iKvbRuaffLW48UstnKxQnMjW2hKEiTFnCVxkG27EKde4QrPA9yCzedGDU6VWf6rdUnH",
  "key25": "2pH8McUKxoQPjMvC6spxWRm5hKAooX5k5y9vYGjXveiwhSHRCxaTyxniVD43RswGLuV2GVmnWqagVimtmjTDKh84",
  "key26": "5q19npAHUXjwv8Nho3LEtqNdo4aPE9QBYbPQAQwTRF7EZTzWhoRkvcKZZHtCcCZHDWSpkKnLDQx5nTBnW2rhm2NB",
  "key27": "SgsCNWuYW7ZRfh34kiWw7D7Vptp9o5FZKc9GA7C1LC4VBEzmcMMaWMDew7XLtEKjZwsAU3Rv3dJjPK3eL7CerHu",
  "key28": "5Y2TxcfXqz3K85Fpx47cuwgXhqRDDifaqpY36CShq1uEn6VuUsveYHM6A1DXQop23NJ3jQjQA8jW6sysCAArYreK",
  "key29": "4wv6DvQYQTkfTb4UX8DgS55Ae6jsCziBDTpNSgn1rehXo874dyrC84abVyXFXkUcJJGqFXcnLu8Lw77i4ngNrHzA",
  "key30": "3Td8qCfDrbfqkwrgTDpC9BNtRL4UEPKUapCpFbMFBA9WyHhBCkPMR7fMpwQEAMQA3oUSo4M6DKNKE4DSnCanGuY4",
  "key31": "5QM1pmdt5QkCTpv5EwWecB8DppAVC9SNXYJsTWZB2grag3RqphSBPU67FT2GahCUTQUsdQQrA2Zx2wus2uof98d7",
  "key32": "2Sxh53nYLU92pqNEjExEjuAiJjLuW65m1JchSfvNSMJDuaWp88Px2XWMjPSSWP5oqpo9NsFpLHytuSVUMtxz96qN",
  "key33": "4wzkUZsvm3s9rr68AG8UtPdyMr1KTnkkmzmKcdVL7wzmg8mXzWvpxZaHSY5n5oTQsMHeCLj4ZipYuKrSHbFWajvQ",
  "key34": "PzUm6k7mUvf3gyeoCEJYNrKKVbuEN7dA48oHkiZmJJD6vHZDcxds5Gt61dvAtSHoRLaihPovb5kzkAxR3gMq6MM"
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

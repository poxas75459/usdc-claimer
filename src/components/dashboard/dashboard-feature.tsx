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
    "4cRgigTPVX8kRDnnKaYdr1G79EuU9gvwRuLxuymz2mv5PmGxgpSuUvfGoi8XoTwVZZcj9fWygEMTW8FjA1QNZf51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUw84BhLYJAXAU3jwc8PreChsyYT7reZDgAaC6PkTNga96F7PiSAaCYbFpTa5aQ9CXn53jqLTFDKBcLSnqECnpR",
  "key1": "adFUHC3CxvYsaaqV7cjgBK4Fh4QrjFwMw8YZuW8HVHVBdDBxViqdodcMa8sKCaDygjm1kCr857Q7u5fQFSyAdAG",
  "key2": "5EMf2dSmyK1Eeo1ZDH4eEsvhsyAqLJmFsXW2iaFhDRWYGM6NUVLmAGhjmgJvwHXTZbuyNBEfeWgfHCJYqi7Tu3hj",
  "key3": "3JWDHseWe8qjNHxfhtcZec8xm4LLywyV97H6EKhyCzq4XP8sTKTcL5Zy1kW9UDXgHDTrYEkeGe7Qsn2PEHkQkKZt",
  "key4": "3VUJqhD69Yu1UQppXFM5fRu8FooprM1zaupyS9LkbkSx13krUtAeJE9XynR9MArnJi27TobF9TEgQ1e5RAQKqP6A",
  "key5": "32gqKtV9EKfwWzXw2kmm46YGsEq3saAkCgeQAeu9P8wUJWXS2pnbyaSmdKEQ1YveXdPZEqo5zdGMVMCfpetC3uUj",
  "key6": "5wQYQaCuz7n2WGzS5Kqi9tuGaPtXtAM9d7X5qBX2L4LEkdv2R3whEj25uxUHe4wXkGf9dyWHQhJua4zD3dadtow2",
  "key7": "2zWH7TfLfDiKmnmk7C7xeK9Wb3bEMEKJHjB7TSu9TsvRndjDRiBpFWUdpW2psjwaRSamESqbFS2SF8TPbchpJsNS",
  "key8": "5Z5tWnnh8MTUAaPjb2V772AQwT3Q8wZT5fZsqPmMHypm7sB8nndyF86GbUYfdd2MjJZFAUoVMAhVDh2n8tz6tEJr",
  "key9": "5EkMq2imMoBPgnNv7sQTqjTrLNe7WhE7RPGyBxF3kSriSkFkWwFpoEjVwmx3Hy5dcmBimgfRtxBnAgwiSH5wCNDy",
  "key10": "2jGRCvpz5UTSUkYuY3bbG4bkUXaKFbRyNqYDkjkhYHV3j4Pga7vQ6oyWG3oTS1APGmfcVbvVvXPLK1J8tFSf2W6U",
  "key11": "bucLgCJJavqApBwnQP7EJcTbw3vPMNi4dKdMHta2QQS94MmKx6LP49nT8Ho74FnS3ymufeYevxvRKGuQM3bikD6",
  "key12": "4N2MMd8wPgVe87MZh7spQSinreoeFMPwjP9GzUgMXgrxrAQEt7Ae4bYw3GR6svsA8xbZBSBz5nDHioZe7w5etXqj",
  "key13": "ywD3brrz5DELm6MML5UAscQWbtajQr8QeDq9JpbV7MVmEFuVZmWSeyVD3L264S73XCrYTur6PDD1Xa1T7LH2czV",
  "key14": "3F5tW7tnrBSorK8jLUQfWnLCFSWHiJpStVyAh1VSzaz2uN57K8XzgKH5Pt9dUQeEBUoJ5tS7cP3Bc3icmoR7ADbM",
  "key15": "5hoh2SBFmxyogvaV4wSnTVDnjLeh4CcNeQsxGjgFvH5c5irYSesarEWbMcfZAwbpTnZSYxir5MTHaa1xbzVgEBMC",
  "key16": "3vFCqAwd6B6JwmbJ1iGJqtSQivnryZ3hMNVf8bv62gUgqnnUWxv7vjYykV6aYrZZeqe3JWpXfe7L6pu5yinwvgaR",
  "key17": "5hPA7ndXa6mCp5ybGmnzeRYafELF9xwoVoQstc9eaktHZnFidAZmJ2vctnYTvkDF4idRFG838obMaGNuXbzkgXh3",
  "key18": "ex3bTHTrrYJsnhA84RQpLdNEGutBhLutZ5Dg7iXFQEpeqC6nS7u8Eb8x7xNSbBikiMHbFMdk4HXgCEggGxzA2Tx",
  "key19": "uSRafxZPZRrjra11vGDMYn2XrKcMk8BCXnFDE46DKax8L4PUEZs72sr1gTgzF77awVumH13Wd4LTFBL5fpprvga",
  "key20": "62DhfSgXktbpNL7BbkSVvcYk8c3tHUtzmtCzfQ4ik7WWZjxJB2Rhvno1whwcHC5MhyYjtWbGwDTYy4UfwUGALkWj",
  "key21": "4aPbLa9NjfaLRB6UgKBYuXgXjBNQ5cLpMRpevmbV9z9VGDxbvxuKkbKpMWgsDyrTGmcZnacNxQZMgFcUVVVer7Y9",
  "key22": "4GTmbdpreMWFJCFPdUKr4UPomuAVJh7fkMraKcFPzA75PLjvnfegpkPXVLgE1w9JiBfmqfJA57aU5Bn3SFn1bqpD",
  "key23": "4eKswMUNCLW3FGi4fH6CNWqBN9JJpZvFUCkDsZJYJQjCRZdsNeQUhd83WFMom8Q47JHzwBvAgD2LaSVpSr2JnurR",
  "key24": "f3EetbQq9rDH7NYAVvF7mWD9H8renWDByfVNMeotofxREXZbcr9kDDFznfcWdrAJAA972rMnrXVimp7W9GJY4sS",
  "key25": "3zS6F2ojSH9DGn6qKQwTAMRUkeTRazeLmG2kaj4n2jYs17T3F7jbVEVqbuL6q3KaFsQLgZvLyp3c9sfJiSqWptxE",
  "key26": "vs8tqP6h7rvEwwoB5aGcjy4M3ZgdftmxVPkNtA8YwBfzLJ1r4GHmDj4ms6cyjjV4dwKoPxD1akPt63SYWZ9gKsA",
  "key27": "4B8YMdx8cmJbciBcmzGfTvAPA4vsu6LgwoYSPaFoRm6yNxz9crrtopBKwEqm1DmRKMdbA4mmpWpbQ1zJ37nFqRnE",
  "key28": "5J6AVo1gka4EUVtLQQFvZVrGt8XV5fdxzsMQVzwefkTRESVs9Vk682gonsHqUCSydv5oTEDYpsgYizaNCBaL5wsj",
  "key29": "2ugDgkPccg6DQzdQxokZDSQhpbQZRHs3LbMBXvhWz2rVk8WayaJa2iquvU8t6iEDqngTpKKHs6dkQh8pdqNybVvW",
  "key30": "5pX4n2KNMQCDjNHa5gkZyrF1hUnxJA9r8Z4ttJyzuEEWrqEkL2b5KXyULQY99NJBr3U3hrQdst9bgJGfjC9tUChb",
  "key31": "z8MizvPukZTiJ3ye2nu8yyv6BXgyasMF7XLpMZPnvCAygTZZ81um46NZGsVGVHPfaE5NbJWbzqJS9CpuAupFUCp",
  "key32": "cmugLnPVMBF5HkDACP25hHobViXJcFgFZA9VaffCfMzY4nnowFcf7C5LaYWy2d14yVHq7VGtZ4nuXfA5JocSMjd",
  "key33": "29sNMvCwRqQ9MPYkB8EsUEyBd22TfinhPuvtk8cgcKyFUTtP2HHdJytbtQVT2i5fV7jMjmmkVYaPcuGoVgRKLfYA",
  "key34": "4jY8vMAX16gXSywQLX2XW6Zid46qbMy4pht8a3KdKSDXmLsNDRhZTXRGK1AryudNShTWMsqHTD47MtGorwLAaCtd",
  "key35": "5ZNkyy7ajZfx9edUDYJ6ktVMQfvgJVXwMs4B77zwZbbHsDHriJ7fJnL5WtVdXQqCi6adKDJ1EfxRJr9McqtsoFgr",
  "key36": "3hL8K4nGt14dKAjmbDQTYb9fvCyq4iXn1cXQZLrQ3Ksd9JAQpPQ9zC1TDhSjTZDhEFkggzJruL4MQ6ABWYVARTbk",
  "key37": "5nNL4UKYbxQqNSVXy69DWce6NCC5cR7RKAeiX1jJJUWSbyF5KSu5kUXDcZvQtEcwNkxrFKFxj2BemHmkPtFqWcgz"
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

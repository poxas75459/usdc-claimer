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
    "5rnNPhMFthuQRUBJVAknPauhBbyoA5zSihmJ4ZuLBwg2WPFnRBnsfhzjXigQZoSC7rBQ1jyzE8qzTpDqGJq97ZKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrB8P3CSYca8T6KMvW1BgBpm2YV2vE2zMA2zuoMDjdqpFQ2ezRJAmPcTgLwH6zskZ9vgoRRSGifLzs9xHEfkiKH",
  "key1": "ZvhEWtamGwUcbisVVdtE5kPi5ujaAiwwq2hiksCjhWqxUtY6ExmDhis3ZGvY1LKU8BP3fED5UueY4grs6Wdekgy",
  "key2": "3GeUaQdK9A9pA2z1LcV8hRHQqzDf87kDQrGX9PxwDSzvPdkfEQH6AfhrbfmawrQgLChdEAPs5MKx7eRUTqn7R4M8",
  "key3": "2Mha3nn92UcG6DKZv97b7EuGSuFdAM2cBq9HdzJGM5SYowD95qGeH9Gtb5P3aWCdzAxrM6VhqVWnbjwScgPDu73j",
  "key4": "3izgB8TXRmr8NxGUyKdTJLWXWj4fNz5cWrzJZoyUgV8GtmtsWUdgpDXGc4V5c2wd4QzCN39qgjEYRQZfuYud1bVR",
  "key5": "26j6Dqp32XRzhkKUbe2PU4TeWyovh7g6GenktzfeRKPrkheZVQcZaRxbhbgh1y5UCs8x7SEyAACVYabQ18NYydRD",
  "key6": "3jWtzByZfGiiHRyJptC9ST81wgepn6hcTgsMrbexTUUjcwfDrNwTZLbFcr6K7XwQBYVaxSUsbmHzoFu693GfRnvt",
  "key7": "5wsKPaUaSrtNtJr9vF8jchrUzbo7nJ1Y4REQdWtLtch7qytZkpK27MeqX9RkSQ3DJ9e7pd8y8ufATGMqZVzcaP2w",
  "key8": "3octtv6YpaTKkNWxRj6pLJdjRGHURN71CYVEFndS2DsZvbwENntdJkYw6AtbnZTojRnMvJkTZS6giHAfZfdGwoQM",
  "key9": "16CFhsJaQoTrvf4TYmFK9FBST3AJG7yJWCQpPHhDCTZ6Rc3V9zo72BAkFvkY5oaL2XN17RrwdKbFB1tE2vDfSTP",
  "key10": "4Pk5zhrpG3ZUCtgPgw1srRpyj5UCnUMZq8qAaf7TvAhe2qjTRg6H8APoV4WMJJTmuAsmT7twAWzS5xw3wUnpJP2r",
  "key11": "4t6xdY8WGM9edMAKisQeSzBruSd1K6VCNxpwVxq1AvTaKJDqzUWLTgaEX72sYyJEW4VzfavW66BmbeMt3hjANDG5",
  "key12": "5vCth3vFFVZKVUfJtVDp4Zvhm9UGwYV2L2g9xzE7sWFqFfsfKUYBXhxT8sPwfWHTw9VW37cDLzkMH5W4Ne59GE2a",
  "key13": "2EYirk9rxKriFB65cKqR3Ltj6poceofTHg79Dz3jA7cuAebJr5bsq58uKcyaV88QKymxRgXvXSVhascZv4W8CMoJ",
  "key14": "3rtaM9Z6Bdjz8XE6AFiYNuZEe8wjC5B66q7kF58k2hJqjtV4umMuZvcreQd8ynLDP76EbKd9pUptW3zDSXkVNoW7",
  "key15": "2nebt1CD6LWu9E2Er7pj4FgrJ32CupAynuZnynGoc1jZuMjbBY9C2k2xVV2EF7JaRjbqq2NXb9Hr1BaTomRkCGCN",
  "key16": "5PL2EyrxAcHXMJH9M3r2B2cEZKsmNqRddKf6f5bqXiAFPhws8vgeKjBqR8yobvbzxMqGCchhp3XUwiA5YuHXRLsU",
  "key17": "2y55bRjUQy8HoYH9cjzkARmm2kXDdAV6d8h5H9kcu6teUyfy1BPiTV21t2CVHBEhq7rrFdZ8p8UJHk98n1T6CVBN",
  "key18": "4eMDG5hsSJWbWvekkRVvFx68zKJAReVATyeKmus1ztCTK3k2CmFBgbEcuwB1W3EyYUhNKDXHxhU2mkJ4fTPyBz9n",
  "key19": "2YGc2ktFjZbqw1yZwAkrNCLMphM7djagNQEdpTzXFaLV6KUGsSzmoHHmtAUKvkHH3oAKLvRvCgRhahcU3t442k3Y",
  "key20": "63jYkNCeHGw5GTe2BHunyHaJvPvbpDGAsGULFMXXbgYcjhVzz2MheuMt8AKxcrpY52NBPpztrMpw6oKUBqQzDJme",
  "key21": "2Z5EWy6Ey2UobExfUTjDa5oMURDvduHfmUsGryfqVcTbYSLBiZmgrW1t87Wj1LCoena7VZdBCDWzRLzsMaYLHppe",
  "key22": "2qpjFYmN4b7kBEQov38oxivSypQiUpeVj9F18C1AaiZznrUDaiFeUs1UiyjGseRUByLXNzxtmKmQDYgMmQPX6Kyh",
  "key23": "5ZciWkX1QEjV4TouXZArBiiDEjtPetqoSXGPkBeZc5w5f6EZ9zzPNGuQTFaCNpmk8hzr3s5QbHCix566XyTFCoMT",
  "key24": "33ySmEgViHXfD1wy5V65EoUgvMQMaQAsbQJVooPxg6fp1uRrFpFAsY1HonAK9jFLn7cYLpPcN9LGRQZt26774XLh",
  "key25": "FvUaRXFdPsgEKGtEjnnpSp35dk4NQsGfwcmdsEjkghAZXqhhwdrmFc8VveBHdUDzugTzG6ghQBbLYCjGSSpv3cb",
  "key26": "4H9mVSqy2wkYRWoZ8Vr1EixeSCowmfjphhw4N3p8b5debUTyxx2fYNj7dQmv8qbUSUUeV2ufsqQmM3rqDCmQsisG",
  "key27": "4hK6RFE6fG9bWoCk68oDki8B54tj4zrLTeUTk1ovXUU4nKKSsd8nF5jeXCk7o9VKBP4wZwsWS8fN9F4NgnthS35P",
  "key28": "a8KXYJn56CPaStC1ckpc9sh38pP3zvgGw8F9oepiUJrcVpE1PmrW7hbWS7CgM6VqbKzHUajpoam1c9kJUrcTh68",
  "key29": "67jnnx4SeuHACT2AMzCm67PtQFgLgG9LvwRFhmDY8Xs3Qg5QCtECvu5ws2i8QBrqNxoMRn6pu3sF9sKLZhtpgRN9",
  "key30": "tRjVbEWU6JY5emBzHFXsh5VmXWDUSuSAsYWvSH2QsNaCX7sjm6JYwbSxTrNGWZrqXZGxXGu8zT5iufxdyA4YS3v"
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

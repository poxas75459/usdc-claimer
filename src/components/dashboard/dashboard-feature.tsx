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
    "22LnsaEjKZ6PnxxcWai5G9hMGiAX1TYwnQVnvHVVYA8rvfQjfZeAMJJpRtTVowPacfGkghSSRQvnyrCQJaghctSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCGCsFAsy3RC7RCYFGjAJvynUZK1yD9yFmxqZX1yfXfvjHbLQhYX89mYmD7uxkFjEvSbWK7ZxeZceU4cGc2fTf6",
  "key1": "5PePo8G7hdv3TFbmzp7PZ7iJ3YhtLfi3x1Lin3iEVJtbVU3vyZyGswmyVQUHH5bymcC3E3Q1NZqMvEmducZKr5as",
  "key2": "4BxQdKY3WBvwk51WyssviGA6cwC2B2EMPv1qRFEU15UnTjPA1R67LuKUvLCV4ZwvPyLJSh7usMJ84BYMSnpQwaPP",
  "key3": "2ZNqEz58D5SzVAJ6u2F6dMwn4tBuBTFiCWsu3byBMRZh9M7imjJsN65ZK8CGR4DjCsuMhjdHtYBoyJkWoghro9js",
  "key4": "3LGKEgPv9vhMaBg2Ar6YMcp8Cv55N6L2XmcXPCDM7juTDuxYp1qBhiDATGBnDF8T3ZTeWgtB1zDSxd4zDAgVMUq6",
  "key5": "637wwwkMBM8kYoJkW3D2VNboEdSyJXgLN42hYeVdLzU1PJo7WtBxe5KVeVUjz2TyYjCF4w9g3rhEcSMq3BNCqvut",
  "key6": "3v2i8xaRZ2UJ2sbVGBYLTabG64uEhSR7wCPiGB5ND7mS9MB1aebGZtzdGKoh5S78yJwopJaNASQbkc2t9Sj2Ndh",
  "key7": "5JTntDx41H18yMU5Jn7JwZfoLKsFMmRdAnUmGq8bYkCPspqCmM9eFJ4Q4JgsccQT1DVxZhuYz4YUjpJzfXbWSCuu",
  "key8": "5s1hHpNxxkbvF9vhvEcGB6X6bMvbtyiVN4LyDA2oruWKeQWeRPcfXCiAcHSzbJD5H1HWZ657RqZSXHGkofAFUDVZ",
  "key9": "5vUP6RcJEPkfVZG5ayC9K7FJS9bef6cbf5VGNxiaRWunzEXTFhQ7NLk6YabouUBwykbkFGv4mJGX23mmKDpadGUe",
  "key10": "3QM36atYdLbw8Hjnhjos7ZJ6BZuJisp7N7AYQ3hHP5wz63GDh8Mhr9c45yAHn9dezoyYgv5X3dKbZcRSrKHDXHsu",
  "key11": "midaDSYGG2FywqLAwbhXnQ7n69kJzC8B3Wn7CS8LF5hkpPxQF1VBn4MUAeyosPGFW1gucK8mdnfvA4pEVEbELoL",
  "key12": "35MEoowCVKkivFzaecuHhsjuHtje6a1YDRDcHra6GEm2GpF7UmWCFfs6amSRKB7AyfZjQji4ZdKaa9fjBUTK4iwm",
  "key13": "5TNDQGHZnhiK4gd4Tp9CT2MrPQXERaTTijtspgWQAyqweBGqtvqNd4LLdXX6qgFatSLxx9knTD3Tnj26wbc3x1M1",
  "key14": "5yb2dz1adtgusbxsTfunWqRZ6VNz5JoQvpga6AjEgiCXQ696Dw9nsXQdmF3vpWg3Rn1BXeFmfDXFtNAX8yXxZUja",
  "key15": "4KsumFyGNxgxatGAj17z1pgD8UhV5ZLrD2n8duuRgKEM8SSDsYVRCw3t2fKtk8nyHyRU5Kfcu7oX3XYFW2UHWReX",
  "key16": "5Aq6MUkFesMBoMD4hLbXfbDWraDCcvaYd7BUKSzXm4aJcVwX9Zb92Wq7yMoRfWHNthNpwurPdsDZ3RrYxsAwcsMz",
  "key17": "2237XpzwRpscrqCt7k6yzghpTbMqWsgrCQpyfFnpPwMC5JqJT1YtL372nCzhWx64dCVagXYrHSJ43GceUMfvEYYv",
  "key18": "26yJTDCnYbJLNseL59SBss7rBZTSNfargwVqtnsZptG8mJDu5r85CLe8HpoCvsb8YT1geCya5kL78YSdi3ACr5aW",
  "key19": "4NRhfDFh8tcCrUcvqTELZ2c8weNGnwoQetuGhDy7iMVjtbqpsCNz6hWn8cXf8o2zPYaRu4aN11qhoY7R3gVr5JvB",
  "key20": "RbP2HD4LmnrU1egQCrEKDTVhFP4Egc5dKTFLwaWMcQvcpeZ4urocStSKgubVxNPsecKugm8g7yVjw5yjpACHb8x",
  "key21": "5zrAiveBiGch4yMfcDMxC1QfR3K9UKDNM4JEy9mVgrAovXMVbzHCBqfLMARj8FcPaSGFi4o3UQHY9MnNCf3w7uL6",
  "key22": "4dS8ybaX1uCp7STg1orUa2Z4EjE35sPJDUK91oH2kz7f4JtWxvoUa95UHDvhZq4DxuDVSDXMBCy1U4FHTy4a74bY",
  "key23": "2EhiQjo7maA7ocrPWJpyRQp3zdRzFQCZFW3kowQ3Tw55AQqSiwdj1mzBeoMB2Rve4WSALDBxWPZPBATn33h9Egen",
  "key24": "3KENFJ9DbKv9vdG9hG44P6SgMbooVqL33Te3q4S27qkzrymiizsStrPNrbKL9wh1c2RKGZo6yjKCqB3SPPTrPshX",
  "key25": "5MSQZTDh9DAyQAWYCnB56WwFhR9krYX1xJSk4639XhY4uLjZdYbhjSgQEN1yePYiXEaUq8BcD6xVDHgZMwzEWTa3",
  "key26": "2LPuuZ2ggN514EwejPG2py1aGdtJWhCgeM4D5SY3euNeH9anJCH5yYCiW6VTHvc8Pj5s2g49WrFnrKmuTfvbrZp4",
  "key27": "3fASVWfM9DUiMB594Ncv5gY17RzkT2M9FZd9shc5tMYwCoNRyKjbr5v4J4ECySmcrPK1XYTvuGU37xnJVsQyNtJ",
  "key28": "3PX13vg9mLrSp329VJj5dpNK1jgv7Kb1xpToU28wAuDCDcJ5Fnnx6zmgHBjEssuwCfcbRbsBGTksbmCFykQuRMNY",
  "key29": "5Xdvz2qQfN6UK8uDG93KXDw1aCeCpuW3hreqDNivhEsDerb174BJ555TjX6okfxBbL41Eq5mnjTMH4wgG6N6KHFG",
  "key30": "2EzybZnRMm9AsiXNsRCGe5GMuSpi16HMMqgQ54gjqMZdpYae5bjEvuLMK5GiFcwkhrX8JsEiHHtHMmrGBj4mPDS3",
  "key31": "3AufME65Ra2nQjkZybMUyD1KjjsBvQiq6wBzP18z6467Str2tgfXzfuQ4jAwBMJneuZdJuc2vs3zoaJ3EaGUj5Hb",
  "key32": "2iKUuwUEmQ9yQFuNLfcGhP4kHzjwxJwraZmsVWfaZkSrhdt5PGuo12GGgsAjs8To6xfoSKZpiMdfnCDh5GVHBu9v",
  "key33": "4wVEdoPrULUmTioAiYHxc71xMZYWJk8U5iEhXvc3aCxaAoekMWWXLmcTTLMd9BQ4St9K6YgnakeP9pZ1weBWQWWS",
  "key34": "32JxcT1uFbmJagzQLZPu797PqfRr8ebmrN4AM1WJHNo3cD7a6SsawP4iZepuPGekN2QpGLqskYpxzVsTTm9KUnLx"
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

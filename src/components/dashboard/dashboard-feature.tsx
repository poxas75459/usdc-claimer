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
    "2wZrT6vR5yBUPK48oKspdDvpbLq34fSCw1Ek31p6iXs1KuHXx82fCidt39FTecNkqmDytPqTmjABdkSDBTAZgaXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sT24xed5rCaKhji4gKotVNb1Vat1u7nwQEYaJvYHSAuzeGUxgEbSPwz1wrMoyG2ySvu5kgXszqUPcMRqRrxsumM",
  "key1": "28xQ7BPJ6J6pryjXvEKi4fmn8X854WuM2YWuRBafVp1bWZuaU7rB1Ps8GbCD8AtAuBTHAvX4TECnS1YpfDmhW2oZ",
  "key2": "2nyXaJLNDuCom9akQxyUrpmXNY5GGHqJggA4wkj9d15MgCe5q4A1u4MoXwmXfHQD9rZkgnAW4i4CTgEGJsDY2uVx",
  "key3": "2Uz4z7ercyrL3AnW3YYNNuQGVSKru8D8i9eEkhQoX4Na1NbPrTEdfN5xGjS6bFr5t9YrkanzMfLpjpJjHLk4f1D4",
  "key4": "GQCg8HnEipPkem8FA647vc8W5DVue9hv43ezUzHVVftC36p1ipk4eArgFMC81RnDBPwVZT5z4m2wPBrm1ukdKhM",
  "key5": "pq6Dh6MHNJ3FRotAQqnEU7GFkGcVFwfQfuxcgoj1wcqH9E8KPrt2GGVqP9NQczun1FeaDauzsPSs4BzA72DJhVX",
  "key6": "EQyxWeV3fxcEJi29PERE6XaU2dNTWR3xwSQS2Sq6jYmXgqmbfpzEYfHyQBHvigY86S6JwjCH4kXLK8ApHqk4nmp",
  "key7": "K8YNUeRzUrxpdRbxFQ23ACcDfMjtcR8cMn8ARWxF2SkaDZqCQjh577rAjGMDNC5dbxFprKrZaoP1ZKqv1zjpXpb",
  "key8": "57v3pe3bcZuvk4LF4eXvVhgGRiktre9EshxrPzDo4fv13Ci8Ld1Y4CxNxgZjx1yoZJkm1gM3zikj29eX7HPiYTZk",
  "key9": "28tpZRFfEG25EzmxVAQyhLHW6ombjhLdTZyBuT2mBVhTWMq3SGb9tTWoHTnFuY18ZfY3iDMRzvNASEjWTewX3p8s",
  "key10": "53gMimsMJVWxooPSUdbQwuMU9VoBwDrVEfGCHyNEHcX5eaqeawVSAyeDLbFvjAKZM9aHQydfBNDgGKnABMhN39LE",
  "key11": "3GByePzENqMBGrQFQH3u79qBXfhxNhxHVb76YAZ4MiLbu56DzwqAtDiHPgPbtoa6ab7aYKgdAGx2Uzanrz49wWAw",
  "key12": "61w5jPn5UJxZhbyAiqHfnUD24w2qtwBM12XpWnwQHYhwtCvpfHdY6jh78V7rTNmjTbPLmRkksd2nPDUiTuy53KuM",
  "key13": "5LXhUVtvpN2dCtj3ZZcKBVYgjKzo46rdSuE8CuS3V49icZH75x3MBDvU4PGywZFP32gPJfc5eCgKw6shqftu95Mk",
  "key14": "5FSCfJxN5MRSx33wcS971XfuQw6bd45VcAmik9AcBMUD9Bu7vUm8sk3CKTX87qpmhBuz7i6UGZxfCCktDsFBij4Y",
  "key15": "4RNWcH8DZfZr5kr7PXHk9ABbSBGZnUdPuaaGJyvwyqZVX2vQFMBZwdncUN5MEkTcB9zQ5BQnB7oiGCx3DPXs7pAR",
  "key16": "672iEX8HYSanUik6FbZoN8pCYBsVxjQqy5XjqWkcxCu7s3JhTsHSfU95K1aVLJqxisTi36B62VhqVjcjia13Ldv2",
  "key17": "3FFRzDLLEGJfnqXS46wpycTNHXmhZY4uFWtPKCBksS2sa19EqpDtjdaxHf4m3NhBTYg3YxsgGMsN612fmwg9AXWt",
  "key18": "4tkT2QXQ4rdSXHkGD9XVZNxpvPJC7hGdEBM3SLMttD7qN76R8aGrp36qkZoZKM6NXicN9wqTvK6Q7i2mbwNJTA8U",
  "key19": "3mVCGHkcfVbTYKub1KXrqYqFShg7bdjh9xgHbS7gXmzACMKyyoNhjq5SvWJrejRicVVrt7c81ctyQryi8yVDRe9s",
  "key20": "4ZWFAwHfnwjqcFXT4JbAA4LJTAS7yiZmcVQkphWChfquf5qbsknqxCmhvT5v6kKGBUUjRdHdiPpavdoHni1qGe3o",
  "key21": "5yX5Ju87sPSYPsCeDuVpdkS6USm5gsKdfMvYZHt5gnZPc3JdqWy8j47T2LUPtrQr8eyScixzWUBW8HANjKXTBSZ8",
  "key22": "3jy6xt9rFtWTvrGwoz3q6QHHb7agAyJKo3h49tt6oGDrzkRWpGTfB9tt68Tc7HiM9LR6DqFDfnngsszEgR85BhNL",
  "key23": "t2igL8xB9X2TSRK1mDbkGBR47eo4yco8yDUMKMwGzCwjiM8JPJFK7gPVRAq4zxWdCLKAJ4YoPr8gYfhNFHexhdq",
  "key24": "4sZe1a5k1h1KypRYCNgyifPUemmBxoKvzW6D7muBKwDXwSEHarfyrNSrqFV3YRDeepe1RyqWR2tN8n9FpRAqFjQk",
  "key25": "5ro45MHskEi2PUxcBfEd8Vta5cmwFr2DCQKuctDuaS1QQguRPyzfSEiWxTrzitYNogBJkmbSukTR2vuQTph6aAX1",
  "key26": "DdBNX2QHpShuxrRxexBdF3VC588Wv8ot7LqP2RNZjFc9vcJdvKhxiYeFJKniMjdGVQD6BZyVbukdSnttoM7aVmA",
  "key27": "24qs6yyZ34ETmxnW5tRzUHjRMdpHhscUHip2Kes5tnBH4raJ416PcusiZ4CZ7X5hriYvXbPttjnWrBBZx8MtjXta",
  "key28": "2UCg7mcWt4WgJWFaqqDkmBnH5XZgUXiKxmXx4LwniJAGbB5KYwuGKjY75cv29U8AVeh3gXRtY8xT5cn2tk7cguqL",
  "key29": "5cYTAkok8VdVwrgwFGHXfdmRsdZQgCTdHWvPfynX4XZs6RRxXxNY1kM8HD6qSQdHcdtTJCpeH8RQDdKNSh2BBsci",
  "key30": "3rgRJyMyDACMbej4Kuj6moGLXyZeHv6oE4tSFUe5rujwFn9SHcCDfrxaL5SZ7XRaJTF6x7CUAGfafJZZWByC7Nzo",
  "key31": "5TrtPRr89Kbh4PvXSguUFTvPShGEKQy3D86bbYwSkav4UjEnpYMV87rB4scuifYcjhfd3q4bPwNjYFDw7Lugtodm"
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

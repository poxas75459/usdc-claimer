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
    "2LucdS6WnoNk5Zt1fWGmEtCuHP9H28TSUjM42VUgvzag4CmCnbRTjokG9i4m3oxLguYDfyLhyqZWgFTNhoRpAa41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACBqc5UmjkQjT9xbPLxvLLWoMhE5XMNjckyqtrm5dQFEkdhSjp1FqyBiiBSVo22V8B8P3ss5QA6f1bFSbPBErvu",
  "key1": "3v9SCdJupJTXqVK3CD3F4QcMf4AnnMJe7GyBjw74N6pPLFGjDCQoXkySMy32JSNuvfpygDYjJ5keyr5sgP8M32ae",
  "key2": "3ypGYRx3TjgbdcmnXoEAZLcrRHwcP7MMqoEom7W9ZabVe7XyNDF6G7SGBA2jq5f3HxtJAHR5GsJpSPDYxx6hJQQr",
  "key3": "7s1pe9t2Rg7zomzRWpArFR196cMD5FFhHxoWc99KaN84yiqaXt5YGoFJu6eWzeVg6xxkVm4bhczd4fwtNfJnAvG",
  "key4": "63fmwRQzCsGLuFAKY3niLySnQ3dkkQKKBZhCFY89EJAuCy16fBovnnkAsZM4M7RVqhfTeRwuE4uRTipqcrNCPHXh",
  "key5": "5vf1WEM4ADa7BFwZSot4UQVsWgrfK5XhAKT93yfwMz3fJHsfB3bnmBKQUhz4dccj3YDxXwS7BemJ5C8LygH5etKE",
  "key6": "2dbDX8bPe9nXtBpm7HEfPabXTNmnQMEpbz5fp11nJCwCTZhdjw4cthUn4yquqSSZb3btPKJoVcKv8HFVB4M1oRWY",
  "key7": "43bB3qAzck7kRqret6hE3GX9W6hVc69faY8opjZ3cmUog6xUL2bkuzD7Gvhu4wAY5ZWNiwkXr2wcYciHuwMjpw62",
  "key8": "jooGsc2hsLn9yRwNAPi6QA65roVqSGtAVwSGBdtBYX8M6jouMvi1xp2TUNDttrus6SRWbweAVJgEFNoAs5eyVer",
  "key9": "5SZYacKSLjTR1BLmSf9vHeXs4LeX1nmgmnRwqinTCUpjLYDcXy5Mst9ZWwYG7VnsxEiBHAFp63D3jfp7iToskGzx",
  "key10": "3iB8xznHdrJrVBYzBZF6vVSQZ5xyyPQjckUofFGSpZZTCVmJSrneQqwkvaKC8oY8WNHEZTGwq5BozirSiBe5q3ad",
  "key11": "52KfKhtCm9G7jjaiAe5RACnh5jysT56Q7yzhbx91sPxnzmAyxrxcuYudmFRgJfJuS8ydj7yMbFnVvam2FKxvMYZU",
  "key12": "45tcLXxcP3WXVsXSX9irKQNZBzYpe9kSXri3VDjEneAdcyDgtxUvH7k6q8ZnRtVNh8sUY8dHfNocXqAxrHujFYXp",
  "key13": "3NXNwJQXcq3r9u4PTtggPcHgQKsP9Hk4NHDTHXjc4BviuKzUcUCneD8HDsLrc8HzqSfF1myGw12aG325Nt7bdWtx",
  "key14": "3tFt9jG4DCsCxo4XX2apgHreNBZcUhS3r9uxsuQFBb7HGmkU9B76t9e6h17E3ziZrXRLf1k437UQF3Q618GgV4Yc",
  "key15": "4ozUcUrv8CqabB8EpqYpytKYAt9SyfXMQmsgearsqXooD2h4ZWgWzs6Gqj7AL67uojvz4AJQrcPYKDkAj556KLBS",
  "key16": "4v3p6M59Xco5AP3FVVYXy4kWrYMisvgFMNrehXu7oSbkG6xXzA5FARzdXBWuptjy2zm74A8Vn23WhaWCn5CetHD9",
  "key17": "29socR72P6iedwxfbbTnUKpsBphgDzaHCNsY6DPHJ3vTEbe94vKjuZaEGE9dSPufoRdqD1p2GYXJXpwXmjzPWjA6",
  "key18": "3gcwbcim24ELWqeiysL35KMZCRt71ePdbkMpi91iMLgcNEkd169x9RVgUCX8xZCoXoSTwMEnFrFzrgQktBnS9RMH",
  "key19": "Cs9YnhrJVHFiXZWVjGwyPqJY2CfHNRDbTRq18dxyAthps9CjXhdAhJe3ixJct8hK18zoDuAwfcPFKqBeMUWvVLL",
  "key20": "4QFFhoJCjthJhpj2gcqMBq3xovWRbQeiKw1kB5i7s18PRW9WfPQTtYaNcteU8c5gBKcreLvQfA6ApLS72oLY3iXd",
  "key21": "4umsy48jTpFigNjHdKC7hzBs248EBvMCrJniSCNfzyNtuasbM9skbJE1Wdx6RNStghts9i2vf5P28mVivt7vGLty",
  "key22": "4sBtYkFF4pDKw2CxkekfNXyv3xYDXG5w42EZLRPcPesD4urdFjMq7143cZ3irivwj8sqwSJ5MLKb7NQeDiGrgncE",
  "key23": "5fY37VKorh8jkGTRZt1X18UT1Gv3VkarPqWki3HYgeZ5ZVqjLw8uELfHLCL2SL3MzjnvUQC5soo3LRyKTkKw9JTD",
  "key24": "3BHBasm3mYjjnENJTGp2342JmJ3a4qd6FXZn5FPDxUdPRCKmLofWr1GZpSfU7BmhzwA7ke4hY11TiFPAsawrwB3e",
  "key25": "4Gr9T1qxcTFMQhR8DQH89neMDsdqQztxNrjE9MFLkmgZRYiycJpHvnRaLGREyx4ToxdRimVSH39GWW1PZ6f6Dzyz",
  "key26": "66NSJf4TeMGp7fJRTffZbh5vbansPb8aZDftdrdQ8KzB94sS5UAxYdpL4NneRVnh8WiuTbMuTTyZqEFZvKbER2bP",
  "key27": "57k8TU2xG6KVYMX2VQk58pTcFpfrGrNYq2abhCge9Mxd8v9D2L6juDsMK11YvrFsby85Gc1bRJv4Yh6NJxAJQge8",
  "key28": "fbgQsCXv87BD4JcfLDkiExEcPpzXF73zBsS6ANWU1mL5hha6BZL5D2KVhzoPQfoFVn7DAKXxD3cJh1jU79a86jR",
  "key29": "3MiR4Fw7R65NUAhA9wQdoouoCGXRAksij8H8bK8CbynyWoxn5LXhWtSwHAXF4KcJEDR1DZyAsnfijszLVRHeqmBB",
  "key30": "4dE18iUCaoaPntXcUcAwBJ6cFToTe5WEdLFa3EL4TbSrKtDDqC7oTkGrUHATJ8DbutBEidRB2G2LGX5qR694aNmp",
  "key31": "4Z5MHd9WY57ktp9nxRgJmJVe12i3bHx66ybd7YCn8DcphwdCSEz9KuuUnh9nq8j1VDpWLT81qyeZoUo6Nbh5QpJi",
  "key32": "mYBiSL16STDq7A1EX6WwGkmMYrzsWogux7BXSk251XiCFCrRbNgPCP8K5vdgjc8csLSzy8yYL4xFRFHscvfykHH",
  "key33": "346khMghHDyjwZWsZSGdJGSbDsKuWEXixSds52pDhQ7UHvHPDiE47nnTSWxpfGdDDUgC34xRVd9tTcRmVBfw4FxW",
  "key34": "2VWb3xZeWtDSVTeYC48VUwKAFmXLFwaJddpEx6J1yUCyMiiP1QazmccPt98N6hfmfo1JWTWRb24izQiy2YXc71yZ",
  "key35": "2NmW9ymzaiQp15ZRNSwk1gKMGBbduGo9RzCTJ17d721KgPZ95vuUuahfUHDhZKw685WATAKhRRyhV8gAcN4mYKfc",
  "key36": "3axUNRxkbntquak6eUqFA4VWf7VBWRARyBCsny19bZiAGqAhmMDwWqKV5s3dv9QmuMm9Yqp9YXEynkoHz15rCyYP"
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

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
    "aPLCXwYxNek5qiUhr3o5P4QXWZSAz8GjG86Mjc31pJr4PfHbSV82PCXfWaWHLavJhBD8A13vXmJHiNN1aXtbmfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZDwpgchuXjcDatRxZwZUuXPbjLSgKmz1THRyZeoKqDTPQr2PDidKEGn9uKnor7MTzvrCcfbV1ac2yP24N3yNFw",
  "key1": "25XHav8YRVdRzsv97jjyfSVqJTtg54HKg8vrQN5xbM2SJYhweGDYfZKkfFFXdLRX4YAfDPx2fGNabV4psRjnoHso",
  "key2": "4nHhSJ4jphmrpX8WEYfsAEstNskokjKvgxWJrSPi7YVK8K6ThnvfcjvNqysezsSVQSDwWAQH1tjnkhQkwUnmfuPN",
  "key3": "41ZLEo7eC15iy3nNaKNtN2DujjGK19igv5Pm7oTCrHQVzCjqzcKf34UwfBpbUQWbtsPMXRrLHH5JfgMw6cZfGUuc",
  "key4": "sTxaSVhAXcDmoAz5hMvkuhUwPPRwqYcwv5u7weFsAUZfSBKb9JNLefvNj9a76AsWrCkhm6ocoEmbDNbz9CeRaFM",
  "key5": "64BqZnoZ26LWZVnEqx6hM6dA5xXnsFZhF3oYPU62peaV2gMtRTW1yraaE87v836avroLhZEMZCqU6DSDkebv53Q3",
  "key6": "2EPiREXxKat45Kng2QNKBZcS4a6fnro7Mf1tjxr4ELUFoeSuEFCTCQpJBQFjP4ve978Wq3Tkbip7sUZdgLnWuWWk",
  "key7": "5WV6j7DGVnwszvFkWTz5w1MPCbw5HKzefRpP51z6AuYtja4NvsdNZLRstpAUu6FR6tTzbkM8PrbJKfYHtrU9svsH",
  "key8": "593Fe1CGyHbJSufLh8hwyqmKAMFnBtr95Sm1YJio5N1gQwgPyZ1uJzjPTyoN5KvSKcLdJYZQEwtkJV8Wmr7YqzW2",
  "key9": "2Gx7Q93wL2GVMP9ncdUo6TSXWoVh55JiyQXJu5jn8MkwLAte8WSdKrKn2XAKTr2JCxsxcQUrWcejR9ZuYLF1NhLz",
  "key10": "2RuFG6EonytUAottXHTKQwE9nuADe1AqA82xBAP3RU7wRKYgjARPoJAwHqeziAMwsRxbLQGoyxLMVkD5SQ8Le91T",
  "key11": "2PXPSBrXpRU9V77QcB4jELTotTLvf8HPYmLE24eaU9xPoZmPxniQe6XMPH2PUn5QNsMkqzNHvzYskmvbSSzoi4M8",
  "key12": "ATXapmCShx4Ys1ZWp3c55NmhW83Fk9JesjYDRuPLhfnn36kxJPF5MmpvNE3KXgufPKuovFTLCHmQMHMeumFF99p",
  "key13": "2WHjvkgoJ16TG3kLdbd89d9WhQNoUYoXBmWnXQ13CL761r11zuMSH2cygf2iSnWBbWX7nefCiwdhBu6YGsSD5zTD",
  "key14": "3ShdyxrTLuN9yCc5Y7BaP8JD5XRL1Wr6p6VUFDSJmWFnWQdis68wCMD4pXzgJaiBaaPgXiRFwdHjRSzarof2BG7t",
  "key15": "3darKK6mtrTN3BdJ5RBFF1TQW5KfXwv3NG54LHrmshrZv4SQ2HNagpSX3s9JdLJc4d2jYDHDBN2776NAUv3Ricih",
  "key16": "EvrVVCyAVWofV3g4erVdmYBmHS389RGWo31qzqkGCArmRgyDnTgjCinL3MUxoqu6JcGv8iS2k7zX91P4H3b1z2D",
  "key17": "37J1qc1hJjMdBVBxKSCBXdsLoJQy5FjTPSzEVYtuDvQZ4GZZMQz5Vg6L51LHqDxxUJJfxhF1RQfNz5EwDeVMhnTC",
  "key18": "2QR1RRWTfh4Rkk5tgfbB8H8oa7gRpxnD3ThuopEdgEy2DGasojUXkopdvgjon6LvhTrKP86caCx9BFXGroXtT7Q6",
  "key19": "pTvMhDA6soTuFJXJ4wTrPGB35DEk7HfW3ZeHRtwvikErNnh67PoQ3n63tiDTCaiiNjjLYvtVH9L1mDiTpsE2cH8",
  "key20": "Vj1xBkjRtkCoB8cGNHB94C8qwZfmfsmw7QQuxReamfan5Vaz4CYw3H7iCN62undG5Fh9EKsAe3JMKLhPHY9Bec2",
  "key21": "2XzmBeKB9gobTgN3EzBTas9G2dBRr5Dj8r33VH6RPsdAszG7qBAVBrndmXz5NR62iZXS1HwqgHPRnUQtEczmc8mx",
  "key22": "3TRp19xsZoDwnwpmRR3jtQ7sMh2mDasRHUxBhtDuUMbdqgJeUEbSN3U2Dupd9WR5Yp5JUAgNW7yDniSCPiqMmczp",
  "key23": "4moEuQF3RWztdbLVsizfUNHuxd1w97kYG5zxJiVvRkyt914dW6TJ1iiewq5iHeYodSAdwXKjkk3Sa85YZTDi44qz",
  "key24": "5RSmmrr2n5Hh9owCDhhDw5sDmRX49h1PnW4VxBAXVWKDejsHy6T7tfUzei9pjccskcBBoGtGimtuGCbobFQSgWFC",
  "key25": "338uzt6zQmr2cv8YBLK1pbUn6sY4vJG5iqfFgw477jTCRrrb6yJgsumrzBa2bAZ56YVNRARizWSLGeEiDjMzntbC",
  "key26": "57mwxpkYZo1fwMxwCipNeh12Gpdf6DVqZM79n4zNmPzK2pGGDeoi2CuMnx5fqg4cB2MLZRwjBj6Cc8wgf1oXytrK",
  "key27": "3fxwgzWMGfDQebvBzoTvohXZ5dyVprfLLWhgNwQcia3jTABudBNhLbBkgjVDyvehbgydxQuBHRk9mcixnGJjnwX",
  "key28": "3hxNLyHUMjMMJm7Agper64CeFiiC1RgJ9h3xwqhSzEAy3oLoTYVTMK6PVLA9qFQUGcXvvVk9t8a2yKuvPgh6n6Pr",
  "key29": "3eecqbeLXFpacQPn5FWmvsAuLoLsFEj9YKrVs9bndpdYbx59uCJDBWBybPArUQDGJPzdkwyZFcrqQwhGEbv2VNZ1",
  "key30": "3LiX93LCNk9gDmi7RggbQbzYDrS2AvusEEpuS4rj8bMMfw5RXtqGArfyTk8atUQH8Q2QqpwSe5fDx4PjwGrJGdCv",
  "key31": "2femsKwaW3JeEZovK3W5iZzc6zGsHnofgV7y91gvN7QsTf58e576xZsr75CnhzaRnQ62XtvpRSTf6YetFh8V5ymB",
  "key32": "3KW6HxDDhBpehQWHDcbd8BshkjF1UrrJr7K9YjuWiDaYKdVZieWkdVcMiR2cbHQJPi7cZ7cEyF5w6EgQxpKrK1YU",
  "key33": "3hSNTFPJMdu4t6Bh7Cf8H3cSZHwx2QvpTsj2r3nFTJ3PikDhdLhe29es3S6xaVawFQBnqZRJgHKagEfKuD4xQ7jM",
  "key34": "3ZHBMrmZxUqVo4PG9ujAaUCQKCq344MWbvRY87Ny2bDGK72pP9Ez836Brjruu3Vo5545ED8Y2aWp2Nt1bw517mS4",
  "key35": "5aPrqbenAG2Tf31a1RBtNFyGKgzjfGgyxsc6jNV1bg8VsNm4argVEWFZQkL7fEP9g6nEESf6Ne3VvQnHVox8CDPA",
  "key36": "51mT9NyUEnW2Ug1QBB2pZj574sS6ez5G9kshCAWgD8w4zxGDY7JpZRgshhSw3Tjud9Jz6A3Sj66Hb8Zws8nDmS9r",
  "key37": "3DoBcdK6VQXALLHH9iX5aeYt2bWYhW8jz6EYjDpn7x9WnXXKkAVMYia5HTBBJr5r7wNVfqX8DXGCXbTQqA2cGK9V",
  "key38": "2iQjaFi29REQziSLkvfhmFzdjJHYVwnV6Yhm6YfnYrd8kqk5hVLUmBQvSqEGisLPqCexgYii6NAT8SySwyFPTmms",
  "key39": "2APAoaed4cLQC4oQ383FKXTETPWy13H9T91jjxYLr9iomR3SJbZEUFcLwPmdkt2n3ngxioh5Xn2wcCZn1ihxr2pt",
  "key40": "2HzRAv3fArFwX7c4FSwXjqoVKQ8LdL3qHLU3DXQR5j3oMXdsP1DvM6S8M5FmAMciSijMw5XXCx9x427Jekj4ykZu",
  "key41": "4PYaTaVBLJ8BNgxsBqoiMCWWwgxTvbNXHcPKEWGVh8JshnC65GFc5UjZm3aCsomddHRr5CVhJiehXQDGUqK5hyob",
  "key42": "UUBiwurVzNhxdyCskaquZqGuF44prJi2D3d9pzfgsMdnz3aKmqDeozrzAaaJkmooSGTVGEP5W8Qn1ZqssrTo1Ln",
  "key43": "3hu5GxA66ZZFtJiooqDXikuYZMmbnaWbskTwYf5QdLqa58njHqxEiChxXfVaMV2DwaCpET9AEPuddmMN8Cw9eBj4",
  "key44": "5pMXjxV8ZF2zd8y59AYXBEnLyWjgaPBdjAfjficd8Nnj5WhjTykEpFDjAZPSBjoap8VLSYiAd8JXvsMe35XFh2Zp"
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

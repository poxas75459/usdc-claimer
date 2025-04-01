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
    "4o8PpaDwottcbSSnoChzmWoBBtnCaTu9z7yQUoJTSYbUQqpRcChmjELgBTpCJKTt2Q7DBqZYeHYiHzmRyRZNc2Zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3C8n7iL5G8JrZG83G83bB5ofB3LNWpbBYJ6XXt7V29RY6Qkioib7WAnYu8g3S7i6RjKmaEY4SZw9v9V1us46ir",
  "key1": "x9c5sxscLxCwyGBUxfAeC2W2GkWgSbhmr5zf1cBThH6o4P9NHisBFwXUpkmoNpPbGGzj3UkEXwFYLUmzubYhXNK",
  "key2": "xympUmv3rqHmqibMJXa5HtEqJjkjrxDUpgQPA9tLsMRMsEkTNnAt2ubuDmzNm48eaXPzLUatSa8YSgdUQUY43tF",
  "key3": "2s1gUqrfuLqdRUwgsfQJvLJHugGa7gRigePf84rED9zJWDz1XKVejSGizFMrrKouUqzVoR29HDCRFsfKdiTy9e1k",
  "key4": "5ZC9YyG14aieuyynuF2u41J5sbYcT5PZEd4R89hFQBmHSuRREVZxQKVpKUcKFvTWw1NMgJe5G647owb3o4xeCMjP",
  "key5": "ukQbY2AgVFGTGQ9LzHPQyK7so4djwd9RGSJxiyb6tfnCa9Nqwq5Bm1GZoLPUw1xV367hebLWDQwiRUvzDUQE8ih",
  "key6": "4NwcXGTNLZYdSbm1qqQXAywcJmeNu1ehTxSU4zozKCRuM4Mw68QvPN9qd51Zz8FZQBwHApUutRBy6NyQwENNBqa7",
  "key7": "5HB1UcFt3TpYgJiH6jJzS5LQY7LgsgnkfPb4QTrv3Nj8AHkguhGr5yAKnSboHZByRwe8WKMMtTCi31Y8MUHkgZZo",
  "key8": "29qiLnGMBDUrEszx8rUaXRm5499Cw3ezHwLnEBpaAZSri7JmTt7G9HEzoLTiWBFKX3dPH4WafyS674VFpkv7CQYk",
  "key9": "2LbpBMTfuMksiMQTy2JESpgt1ntpLcSkE1fcJ3UgngubPCGLoLKofrUS7PFF6TvNAuvcLWHbnaxdshZfTUzvwWTq",
  "key10": "o46NFrV1Eof7oMwayB9y3xLuzqdfseFAEB4zaa6B7NGJDJ1jrBmdPRgfAJAJhHgWabzZA1brrDFiJCTvu4wnrXY",
  "key11": "QA2QGVtcfwfuVyhY6KSGCG7yPF6mQSTGkosmya1J4owE8ee3fuY8LJxmEpVTx8XYiy5cFTU6fjkDhQfGEQvD3Bo",
  "key12": "535qz591VuZUYEvRypRdJ2SPGVvqpTHfSVuzHSDkDbuEp7iNo3Prkb4Nayj95ghEscCdx7Tt1iikpzPCmf1FFYbL",
  "key13": "4eXTdqtm9QUiUPm8HEE7zJEin2joDMA5hxBw5oqwWwv6un34A6v5BQKcucqbwcqucWBpCq4T9XcPq8gMYxKtXYRc",
  "key14": "5MUbxuQFeNfCZUSq4jb57c4kuAMUKfDxXmipkavxrN7xL54HJ8oxquWyivcjiiRAv7Na9nGdzdWTTA6VKWqUKrp",
  "key15": "jcsCvkF7t1drREot423cQqT2FKakJ8P1zGAM1C5GAveqDvgQsYBhF2va6tASK6GzQ1Nk3BrhLqpchq96nHmhr8G",
  "key16": "5YnRqxnwdJxkQarTEgUZUy974VVtYgonc5PVncUpQfrBinK99CyAzpTeiLasYNj7GZsNbEnXoFEtjzkMaeWXPFQy",
  "key17": "3zgkwLQKVb2tDErJ6USpZSDPj3ryGptibFQPnyKZoYVtBA5zG1BPW1saBNcSkALr9Do5QUNszcJJoqV88oLXn5e7",
  "key18": "evT2bDwAiZi8khVkny18jH9cZbZjp9cg5iTdLDMKNMpWpff3UxFxLBAHxAGHQFYxVLKuyZjjyvkknTgqGWQqV6H",
  "key19": "agsWoX62mKgmZqRkD1Mi8Poe5GFijkQnqSuPmp9gbRTsQ1ENh73pRFWKLHVrkGYb3AJSBo29aHMF2zKPnf6EM8Y",
  "key20": "2qKUArXkmia2W96iScM8oM2nczrHskF9SnounGQ2ijm77LQPE1DS1VEymT8TdPbQJV5hmpEh3q52uawD8jFNypYQ",
  "key21": "5DKcxkp2ToYGaSb6GnRLqN9iuNuDjaDeJRZbuaiwXrrgFo5FTGcwQmdjY9Wn9uz7dV2tzspjQrxgaUokYkXN76Ci",
  "key22": "2PnYJ4z1z6abnVZiRjjSKNnQmXwdDTTDK18B3orfRH63ySFZggVaq5siEnbwdtrub2ugLKR8F47hmrtJr6SvvdS",
  "key23": "4bHWtzyWakvN6p1AHu3fqQTuEdagXdcC6V2Y3CJGYNAbUaBnmMWwxY7DxCrcT4aBAt33tZqi8fp5TSo1HdiT6xGB",
  "key24": "4R3Kv1ycEvZfE9SXWfngidCMevFofDV3y1sfhdAk1865ti1EwZBbHFU29U3NKQR8LetfcP37Dz7abUqxqfEa2Atd",
  "key25": "3agcpMbMGQ3hJ3TDx1ksYLJR3bcHS7kXBPF8KwHwbqTonFr26c5gv2xxE1Z4VkxwRjLdjkiR9xJXtNk3zAB5b4v",
  "key26": "4rQguVsJBR7He1yBjyy45KXPRkoi1G7fvSUJUoutbmskxSDq77qdGBiauJf5HNeDrNQo7AQ34VuwnmfM4YnRTzt4",
  "key27": "2fMhaW3qEkkn3eUejfj86S7nChivBQa41yarjF1GkR3w1vaSLS5q2hAQ87hjhYb9hrK3i4HTC5PttF9NRFsGFCD1",
  "key28": "pJRfFQ12GqniZE7xtN1QjSQ35UhZCXuxWDzjtGV5qpbzG6LhXLChoYtJs8N9AgYavwSEYix7YiNaa7QG34J525a",
  "key29": "2TKpbyPqyXomwNeF8FzEbQdxKwGfkrTjfD1zuvyRtP5tx2EkDRQMmPYHAQ9h6yJSWXhMfWhzMN2zeisgtpcWgehn",
  "key30": "44RJSWZYkb78cDqSkwF62aQZoGxtDuw6Q48rpfSW8ZH9MHsSsDunhEoXzC4VLj4cfvrMxiTPs4vx5HEUsiXuMALd",
  "key31": "5fx2ctKgPv2HJXCsCzBLY4jbgo4G8pbbiGKCiffQVT7cEwZXrotFtBZWViFbVBRkEmgsPK2rqqvZPNkDPnSLBiCc",
  "key32": "2PYwp6xi6jskSh79fCFsSvuAvfmPnywbjRwSU9EUYt6xybGMFEDf6iLijyLpPpAKembSKDUmbmDRyYgitbuK9Abx",
  "key33": "4dQyhduuz7vKHd2LiRZbeLZjwih47DdHw8SJqauSCPtaPsD2YysNgkt7Wq2GCekizZ86xJyRPX6T2BnrQbi8fgSC",
  "key34": "3YCn9RjmZYQ9ogg6Jr8sCheREfPcu5Y3J5tpqgE2zsB2YerDydgsTRU3kUhVFp2YdFPE84n3VmVEBPCkRF8yKGSU",
  "key35": "3ABqqnzijK8BeeDH92zJoNEvfvmwW93qnSQmmG5pchcg7NM8LkAKSuYxAePRwT5gWxXPMrXHhk4VmV9MtFwZDdiG",
  "key36": "3vTqssDdA45TRWec5kqW9zd6xdSzTzo7qpDPCipoi2yA1mqUwV6x4tRFDFgXZc2JLYeZxH7ciumYGChF1XkwEUJY",
  "key37": "2MrjvLKTvhJYoYNjHGahsQXauzCUQexjaLWTRYvsg3AJjXqGDGbhfKW1y5e4Knb3ukndwcmZjDCUfMY6LQPKQMZQ"
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

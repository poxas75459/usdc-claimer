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
    "3jbHjwAf4ZNTR6zBKhcxQWZAVsrWb8e2sSXugajGjTAw7F1K6fzGwUwvA7Lp7q4hJneQYUZqxASPLiqTLGx646c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p32m5KbdTyrV6NwhzN76ATn7Gz2WUEGEAyGfBpc8R1P6vR44U6ixQifXjUqjkq9rDmb3RAWMdQYL9mq2hGXToNd",
  "key1": "gsCmpbudy5Swiko9i15qNSd7zWYwYnA7Li87aywtLpp23HCTCwUXrAZkH55PbBi3BAJtKCp9exA7H1yWz4WZcqZ",
  "key2": "5DfrRYCjhE9ZRWbG1oNGrBcBqydMEZBfCTxbfFecWqPsSWgK4VtkQDXq61oxnyY9ZQJCEexwRHKBRw68BP3fLNms",
  "key3": "4cnvWxmBHBQ8avXQis8XT93rxyuBhU8Bh1vCW68hKQsjh86yDfG1yRDAU8W6RVabxcTwpY6mWur65AXn3oiFoXzU",
  "key4": "4CpZWd9wD8vwog5SWPuF9RJqWeyVAw2635L5QQDvWXsKm23EVNDahqkv5wbTqaKePXdfduAWAvFT6mgeUwZKrYza",
  "key5": "3JsPgcDXVSrXpnXSdPacwJWG54zf6EvHBZTqsSYXWJ8RjgW87f4WHwm7KTV7PZ7BhiYv5dCEGiAr274pzNNBJKfb",
  "key6": "5nAPQdK7rfPYCvdbwCzQyaomBVBHBWidHTMfBhquzpLFvJmiFhDiwoahjbkHtX8fhpoKfwFAab9PmNfKRyEFaLTu",
  "key7": "XYpRmfDkTMTtyrQG6QyULJJTrVxF8MrxE3XUfmixT6mhnwU9U8bojhfEP47EiKYr4VEm788STAJRTKrdYkDGVSN",
  "key8": "2kFXSZhRCBfgah1qk6qtooibiA8yUtkmmP3mBdDAcHyNPiE2V4BrL6hzy2461YiYLqXPQg48CDtV72JBrKj8bkN8",
  "key9": "4sQ7oUXh72F4Cu6hWtsKT7HqZH8TkejMqPVTDPSahNCitSEgzB3rUpQhfq9bCa3Ke7B4K6KWWDHT7htKkhtR3FD1",
  "key10": "3UfQFFEZ3R4rnca4w9QwZgs4ZMKo3B8ro8pBJH8on1uiU8hRyVXvA3m52umaSrJEAEzNtFhQkvzFjefa6cHQZi25",
  "key11": "PewWUxGvRs8yFkKnJQ3bW2ZJjcthRKwkFC4eyD5U8GX7hGw5mXLzQgUVFioj3YSKJvc2Zt2MsaDJEPvuanPqquc",
  "key12": "4osThP6FVuUFgN9415Ei3mwZkmjyL2gk8p2pB8mznkFpgibJKDUAtaoDKr3Bb352yiNAJ14fcEJPBJe3pyvY6nBS",
  "key13": "5eUhkcPs1gepY5SDkfoUWNuV6BK1CYK1geKv7Beiwi244H82GetFob5J9dXzaggfdRJheXXkErhQXfsid867gADJ",
  "key14": "4grdzJNCqFoaZ49E1zazQFAsrGwtyK5uyGM26DVf6MvzYqb6QoyYYVQx9xAxY9nxKoDrVWfxKMgHGX4qgRQC4qdH",
  "key15": "22dpZLUmjNZsYx893kUiUaiHci1HxwdkobPmo7DSvZ16MnA4x92Lny3oJMwhCjoQj9PXkq15t2qM13vWdmffRV89",
  "key16": "51Wq76b4fwG5gQtEn7oV2JgJuSnzURGZ5BvXbx6owvU7SQfe5akDSTCBJg1vKvsktD2MUAowJ8FXwJSfH7xQCbGa",
  "key17": "y1dZ2BvBoKe8RUjfoN3EZXtsBbQJquNneAGhyCFisif2mnmX6PvGVazapmDTgD7sQaGYGCV91ENEpHtUMSLxbhd",
  "key18": "41fGAD2biLzio5avjBD9tkQGGY7AStw5Q5K8UC5iynXnLuhHoVky2akn5jTuVd4RKpwTPh5Rm7h5LSgD9qRm36kd",
  "key19": "4Tp6jYkD6UPEUZiWBJwy1oESnyD9xWofAx8BRALgANhk31TkmwH64rKyn6Cdb8aCPFCcPmS9Fy8dPnrv1wxMHn6D",
  "key20": "2TukArV3m51Bmgpsw1Tzu3auvHkFVKathK39ZyKcCC7tSD4ZT4CMxh2njrThSZVNne9kWyLtd8Uciq9RC9WCxrvh",
  "key21": "3xHt74WeMDrnL82vtjXUYYjyjhEHfZYvVCG15eeoG1f3xShYMr7NuPGiTCSsoige1PtSdkmn8EeZj54qCJkzXKhX",
  "key22": "khyk9ir7nGdJBsmqJdS22BES6KYe7qcrX1xncRMqRr9qtXrKzXPFYFVwbxEpjSvzG21qQ1tHYoVRiFSjpAsQDqk",
  "key23": "3S35AqHiokBCrHwZqSPc51BM13CeHEhWgbC6dyqGv1rRamKARBRbmb8CA9Py3eP3ENMYWzxgRVgfUXYeKXXySKST",
  "key24": "moua1wd8a9ZQwG7mNDQ8cT7peUxWRhsJEM7bYTv3TfTGGArJy6zZfykaoZ8ujLvEkTjhvCUZLsfjBHRyhwwgcqV",
  "key25": "34wstQeK5ymVw8UEtfYSvFbGa6CvfBS29cphGCkjqxksNXvKLmVdoB6SkCKPe8wTjRrZTkt2HYJ5Tf5ooCQjU2JF"
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

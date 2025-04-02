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
    "2Wkscrkir3dGCbyHHmYssRRKhcxWZqcTXQS1ViDXL7FHPURzmjvwv9XSm2qkfKq6oBnCgH2fMPbuNPRd9gXD1msc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Ez1MKDoE1bHypTkUKH5nRjkjsyTLTpctS8vb6e9KERGEp6zcGMMfxemL34616FvXRKWJGbdXt2ZiZttX3GS8JQ",
  "key1": "2SyXbmQAqeL3JJmMbt7ME63ywyfEdnJtLE32M7EyeWjJzTzPZuihykqtGR2C4G5YrWabTqWLwGegMQTzApB5yT11",
  "key2": "9TyNdoSj8AYXZjGasF44J8r4R152me6JF5eGuKPPWZZ2Y9FjaaufA1XSbAyWHAf6G5xkrAXQuWzuKPAfdkSkbo6",
  "key3": "3ddWB8GnrUfnYmz1K5fCBb2EpAb5CJ7o5Uusoa6x1D8E1CgfAjqAutKbDVj3yw78VkmHrHBigJHLugumnbcfNtXD",
  "key4": "2z7mvahieQHZBAjtA1enj4pSm4odr1CsTB77UHSZLqaAGhwk1UQfFaqFzmhtfYwtzrZJxvrEYRccsfxLZUoSMLEe",
  "key5": "5vzvbq38uGbcpm9myduiE6F1Jg9YXoZ5QdLyym5Zn7ZQT3vCGbvtcBhF1JhznshRpZwd4YS8vYT8XNysvzTh9oGp",
  "key6": "nbeZMfFukb3mpDY2XtAM6u4wDMyVDPtExs6fxcocVobgjFrm2o1QCRbxrehca4FS4cgra3oaoF1BVcDuuBbHRyp",
  "key7": "2DXmn4jyok1CgCKnqv6AxBFp3YjQgJzqe5qvyFq4xApYHfWAFJYvFPLcq6rX22ZHZ18rNrBzBWcroQBmx5eiYWok",
  "key8": "2NN1Wk5q1Lu6eJU9MXpmxEKuvgywA7oBrj9ntcJ2nxdy9p5dnwJsJjzwRFoXKSpioEMPff77e8JhdUk4c1iUyZBn",
  "key9": "4rXjUyRzKtkbLEANQJ5y99qAN8x8PGXoCBdQVL2zWrXvD1CsNbqPrSUveX2TvYdS5FNZzNtKt8cMXw41sZ2RLqFS",
  "key10": "2rcCdpoAj3iUHeiKkQWwgBsiZzEo7VYvskmZJWhjGWkJYx7iCsWG4RtUgHw2CyRJdPUgJcgrFBVr2GFmeRf4Jfbh",
  "key11": "5Mk5beb4u1PGe6C1fmxT8JiT7vNeczsjcepe4mMe28e7jDy2hGwi97UDxqYKrCVLnw7eraxeP9fE4CbAPs8K9tix",
  "key12": "4mqbpViYyqQfdC3aMBXoS5UaBaQ5upzA1DVTuyeBCFYqEpKqoA2juSr6K76DZj4caFgGudTw7FQocy65puWNivN3",
  "key13": "pkyJp4dtzCt2Xzhznpwuve7bCwkYVn8r5mh1scNQVj33JE5BdVb4BoS116oTupoXuPd2zVFgvp5W4vnaKVKCQMm",
  "key14": "2tm5h6PFEH8rceVPrCXghX8WjzEALL4w5oGdZdGXdj5swYkK6uWwLR9cgkhLzgGTxNLGnN3mkidLGPikChJeZCiP",
  "key15": "3xCF4esvzz7T6R9nSvCYbSSXt8mkpJa8nSw6J1gfeQfVPZEqFPsrZTF3qddijWdeUWusKnnZamR6mFPkKkj56mso",
  "key16": "K7GNwLcuFYJhiMJ56b87gN9pc5iDt4gx6SNBGR2WycEaWQXNhXBmurPzAUAJ6ZWdS4FqjeKseC6YYsT8wbpRF7z",
  "key17": "2tMUVr5QA5SMrVU8z4Gd8GUKagCoB64ZjQUCSRJf74P1CZrPfy4Pw9BD7YXCSC6Ptz7H7KJfMTqoHw59eec4CWxG",
  "key18": "XGAstx5A7wy3EWfUFVLfX6jfW7ZVx1bCNy6WZJ8tAsTNn438QT7RoUjmVa2xSZUXYXtY8wLrCNJjAaWF57E3fBA",
  "key19": "3kfGX5zbjjBGDhLEZL2r9ERGtLDnLaZ62WYgyWhrobMgKy62v1dto8Xf9yXm21osBcc2ifRTos5MTZPkLufRtGZL",
  "key20": "3zaBnNSWbm7BR33eLt7Lo4XYasqpPEtNFmM9HqAz4B8XsNCoGDsZ4jsxdFK95pLrkWcxcXM5rv1z4UfPZ32HqHHS",
  "key21": "4xM46rPZGzvBk6cKCfEAHsTPrEpjf3vbjEEWQ7Rgtine3pBhJQ42p1LyDj2GfD3nwzs99HStSfguwcaXYVy2fH2B",
  "key22": "3dRFfB1AgCwgiVZ6YJtKpuUTRbCAUTRCooizeFRTE4cg1FKuAYf4si6WND72XeVKQ49TSfCfipstz93BjdEJWtPb",
  "key23": "4Fpf6WLoiNaAmNNPmSPRymuUnujv8wfXgsfYPT91NTp9XKrW1DLByrUVJwU24DPQqpc1pSTb8ecwF8Greppm2dXQ",
  "key24": "3jqWff5Rh1afZqnHFfpH6rem1Aaq389K4CAvRquQ5juz37ajPS4QmJa9qBMFXe7zEgCE91cywm5XcEXYjRGQiGDU",
  "key25": "42MH9r3YuWHAcERjWfREyy2vArKnZzE9cscHVjCZYo3h6KHGRgdvndxKKcCxbhakWkcxsMSdN4LMsmwodogVPX9d",
  "key26": "4oCG9UP2VjK2H8JZbgYbr8itMJdu1vcwUGCfypmKkB9zSgfRdBu8wpUR4t2iJCBYFgWZ6JuX5DQjh8jJsqLdCzS4",
  "key27": "3ydNPmqh6NoRtVz4ehBDetRqygVjhXDCPQnqE1HfprTxabHdugGnN9fniCD5EsWYDwaHrk5TfNHoCvaZkpb2nBRa",
  "key28": "2LntRry5GFqucnsYkbgH9G9bFYbAeTuhSLpkwzmyTWjuXmTUXF2rb3cSXsdWUTxFUeYkLT4N5fwARHW88Z5fGq7X"
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

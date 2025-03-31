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
    "3PHvMZWK2f6emb32i5m7nSUho9UvUmkoW4aMeni9Utmsw69hhT8ogGvymtGvy2qAHBU3ByqrUHsX4pDwFwF6LxS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnmsQwuUutKjQ3QbhXhr9VpaqpZGDXJyKhwr8EcbJo7GRxKzYJdx9JJCzHKU99qhDRqBr6MxfZEbjkUoL3GeV9n",
  "key1": "53u6gHathMsQf1Y8xCkw5xsZHvSCk5SzYA71T2V9JKgAqCTZ8ufnTPxDVEXVWSnJUAGmkK23fk2N3aZmfpCwX316",
  "key2": "5rP4Cm6z4ED3G3tk82aW2yf6ZqagZLB289FyKbKziMH5vsR1ToLvEZLmmsHHgUsj3ua18X9mNR5itRCXPSpn8W3H",
  "key3": "cf4h6nTuuY6LwigUp9vNYkApSfECPeE1iCwP6pnEGUB8H7vC5xsL3iZeFSRzu1dsJ8Hs9fLkmXXZbJdSzfMsFBR",
  "key4": "TYMsw1r556V4o9Fm1BFg7hC1pi4uxqiWHRkdH3p9XdZGgjCyFTLxk7E7GqpWXRwBbhkXCm4bMspvN4oRxNXFePB",
  "key5": "28LFVjLMKb4oS6WBR8mUBj5yYAkSjwL6xmpTiggb1mqXzfbQeHtWqxFfqkacTv5ovR27K6evXEKunqfn1js1iJmV",
  "key6": "2UPXHCv4kRZTxw9dx25m2MJZEh5NTqxgZGVrYycJc4Q46magyfEJPpmh73JjZStHdz6mYCBG7KDivi8vKHk8k9ki",
  "key7": "ZJXaPHzqmc1bP3RPKemmjq4aoEy16EKXrBgkJhvepzVUQP4d4tVho7JhATjTnyqfRSQfTrN8QwVgVUTZdqviyrg",
  "key8": "63xthuPLcdMhLnDPYypoxF3mU3d8mUQk1vnFjBzxgbafAZwUkBdcPnNmVw6F2RuX3PbvYUoTFzkh96LpqSqaucQV",
  "key9": "46MrGUU7C1tja7n7k2HoxYX44rfzxTAxeNTgq21i18YfPXkJaeF99pjUFt8AqeH8zq4up8AaUXRrt7KcmyhtUAgb",
  "key10": "3z5dTMhnFmyLK9BVort3AkBNyAg6Mh3Pd4ukbuxt2psNo7PaPKcZwuCKuBUYhCc6LotRLh3kzE41kNAwpTJopMci",
  "key11": "2GSNT5JsAsDxiy1tXqhxkJzLRS2gpfxkyE72dbXzVKikffDdK7fnnJcXKrydYbjRSwQkHnKKbTfnrW6Ej6MkNRcs",
  "key12": "3uf2o4eWAk8wUT2D9pBGmfxinhhkfuX51dxcsySnsAsEtR2p7ThA39ekpd5uA4x4mW17qxMpSrPXsxCNJzjidML5",
  "key13": "3G3PHHuRSSFgjxYv5eNoWWNodN8DwJbnsnG49ipX31pA8kghX6jmSCga4jPE1HnmuyYnHaPXZxsq3y2Fd2oxDaRR",
  "key14": "3TRwo6xnYxcqvUNW8uWuqoavAxvNk8QVcP8r9boSK7zTeZ8vpz9b9ayGu4LDvcSxbxoWnBgdW2X3mYy5ZPLxfs6g",
  "key15": "bQNstLGQPuR3EZPcaxKiGfpdWk3fGethHLDXdZZ82uzfeHgQDqN33gABAZhYKuhUefNGa9SoVu9dRpMrRbG5buH",
  "key16": "4K18Sak6KLmKRstQrLDyRUxGojKXgV9uqdwZ4aWV9tcaxa9uQ8xfz23ggxi5j7yVfHC6n7diDRJRSEu35qCNkMGU",
  "key17": "4iS2FBN4CdsFwnfZHp9WGEy3iyivaqaNG5msESAqWraMFQu9sbSZEXp9bBiRiySVosxgzhs5cjAcGHqzNK1WqaWV",
  "key18": "3rHEMTcjzh1rQUMdTka4u3Uc2DtGRZ4EzhZVa28zdNoHD4j9k2kcbYeDYcdTD1ZVnRR1rSRF6PkcQNFKrhWsCwAU",
  "key19": "Wb6TeFH5FxECyELBMS14fDBAUqrRmo1JJv2p8nvXoEgQcZbYCKmsvZUbhsuhMY1eA9piDwhWxqZZ5mhM2haUk6M",
  "key20": "4ymRQnZZZ3kuVwh8awzkVJka4ikTx3kP8JjEZn8moMurcv44upm4W6w4TGNtbwq2FvmEvmSLCzdXrAHsnQpuehTi",
  "key21": "2bRrPXu4Q6zBbJDgKEr1JhPnBQcLFZmfFqTuwULF9M6EjV6AwijXDaLtP53BX3orwcFsEriv3YmWa2TywYAKx99s",
  "key22": "38D48ot4iinMsvBHyVkPzLd8Goc6jJXTmEvsBZqM7azMT3LZbfNfe4KHVTjtA3GmxkzzY4c13dx8QXbqVjR67VYW",
  "key23": "4QkAeZdrtWUKdrXPnNK5yqxP65b3keMUQrZLo941HYrJxXoDPnCufB7DJcGQLrPtVd3kLMfVKB9wsZVQtoDs5tzD",
  "key24": "3FtkACzMLW2ygZE3DfSUbYGtmK7GwN2R2j2o9mz5qsVv7RKpe7XXC13KzkKWbuH7qRsAbkpss81PUKx1RqUCDGmP",
  "key25": "63gHRyYr4sG5WkDbr8hNzzr1SW87ohoEGcVwnRH4soJrFWFFXy3kccJ7vVZUNffGCppJqmpefJES7oGpkWvzWTb2",
  "key26": "2Ukqh2yomwV23CghzWkdTFNCogdJiNZWFH8KUAfzUnC288HrAUy2LRTWpvoRWvyoGdjbbwZyLagMqB2CutV4vJYh",
  "key27": "66fF2adu5M7uhe2EQwVuGyaJzzpVp1CW2BFVCZJDtj1ULD74dVoZ8YEydYdqPLXWHjFk8uazzikNKPDWRx15zjWt",
  "key28": "2cyLpvcmvAwb7uzd8oEo5WuErbxJAWSe95U3kd5mVnKEMkaV7PoQK9NwAm6igKVH7cPwnEkrRgAgEEu8qRv1A64f",
  "key29": "5C4Rotm8ivj9dnKVLXawimAChyehHoYM7fcjV4UrZEEeN8wYEW5FXye7vbWfAXJVknoMChePffwNBoCk9jnCRS9h",
  "key30": "4VsF2EaGfFo4tQ7VVuAaR7CL87xPYE7DqL7fTSzJ3tWuecLo1Gk7MjiHbptezNw7jd3vUENYtQtiUxRearGc31RC",
  "key31": "5waZYRZdXkWetStQ4UEzKT5LeYt1cJQFQQEck9MYGb7KiAkJHZWAzP8XZ45ytVXDvQ4jay4D7um8Rqq1Pc53fXMg",
  "key32": "25cdqPs4yfQfw6mNERThF4jrPsnqnUA7XZcHKBCtxYMfEpPDPMfFQnpTdJHzeNEU2fiFRo9VGagnRS5F5whNNm7q"
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

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
    "qgfmKHGUAPYLpKy7hRUUibhakGp2JRKVay6XTTteCHosCYZRut1W5iNhmMD4vk3yoFk6VtWUveQcVjsSZX6T5Sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37G8bCbRcRgsS9UhzdUXSnziqivrTtnTw4bTBuELgcUZzX5py2xwgLN9pzfXnxScjDUjFxDrnoY1WCTTd7taiJ5H",
  "key1": "4NwQDy93WYifyv7RZkfxx9BZF2V9eFb9DPhFh5tmfqUhzEjjdWTJjQQVSXQUb7eKfixj5mDmWyWRxjonTdkAnYGo",
  "key2": "4L2H6C7Am3U95vYA3QJv6rc2tZ4PxBKskEyqdcr8xK1a7yuFNU3RytXWQsMRG4EKDEhqFyUM35cxP7yZuaLY5zmK",
  "key3": "qpemdydcnw3rS8fyB7xLRqHNoGWt8ESyQfQoAomoFFcvz1jzDtZ37wGfe5jdYSCb59h7qwAhAPPbtgFLg88NCSo",
  "key4": "5Mi86rLLhziDRLf6v6WwCdyKiNubDKJgJPM9fnAhfRgoez1t6xx2KF5BZKpKXevjVuy7VAtomKzMwiuBSZqQuogL",
  "key5": "46rvrxjNhbdJgWbyZTFqXVZUJBku1RyYdjNFMcBMUq4NyffjctQJsKWgm77y4sro1H18JouvwQfa4cdaH7Kp4Qif",
  "key6": "2T7GuY8fEDemyRf2JtfmzvrRszzqYYGcZMJvEgeReGGCrgjsR4JGZ9koxNGXb8evpouq5j99Z4zN9LHFA5oNGHMG",
  "key7": "2MLb6BdUFfSGfwwQnMMGz5yNeKZjcPyZ9UCGhRFCFWE8QzY1KTJ3vLAbuRP8M643uWNu4V7hgrZJU27DyL8riKpH",
  "key8": "4f2LdHmGonFX3HzJEPouyNtW6vwoEAq6FNnA2ivViYh6oEg9pPyJHjhNcMSQhPM2HyoMZbA6VvFjgZZs5YAT9AFW",
  "key9": "36kHdhQgP95vhowz5up4A1oanfYapiEuaTtfRtPik5y3nhP74aVsSLNZKFtpVZDQ3LUqSf4QGGf7uN7iJZy7d1eU",
  "key10": "5TP5wdmMtWibKVNfnoewLZ3gScqXjEiqbtY7hYc8cnydhcKxkQh2aCZVxBwVg3zaseKct7aE3S6UL1tUak6PtbuA",
  "key11": "22FDpBYuDnRYuT9XQxjjmoJ8fF2TPVF2yGkgvbbfu8osddB5eJLis6vQdoe8nVR5Tz1sRDNoT2zD6VsbWam7oRzo",
  "key12": "tj1zuQUYNvJHmCgj1p6yQC2ggMGQsDHKNWMTfNLk6WdmWLfXYHTDLcqzFSmYABo4WTmev4AZuywYzP3Fy6JH9ud",
  "key13": "3jPiXPoFKffmAhnFpz8YXSzkZws3yah1Sz8i3uNrmoP7ntBXrzDWP8xX7X5rQSpRhTo1nAD6zykdLN3iH5ScxXPo",
  "key14": "8iSbnVoDtisHj8prpZdfrTH1GLynQwFKq6En1FKw5W2ScU7h2HrtL4L2Sg7nRvuncmChxLPa28Eqk5yV5yY37GF",
  "key15": "598rZe7oAKbb42gv9qHrEy7PNTP8L6BrL4BhobU3SisJKsKN6ZkJz3DRfCk8oZPnzxwtqz9bwBYPa2RU8DA4khwA",
  "key16": "jdCfAUz7hpqpvfYWnmhde8k2Qcx53LS7RQvF2EhnMAELEu2b4bbVqWKXY7za4w2SbUA4ayFV8VngdHKgzEQMQz3",
  "key17": "Bpapw5y9zDPjnecrTbc4bjwkoifpnpe7ZbpUzviSAhNQSFBTvur2yjh3hcdMihJbG5WwsksuEzssKPaM5qogmC5",
  "key18": "51bcBAqESTY6hhPgnKNTVBLKKQTdWHhPiD9d97nKY5yff9kdN6KhYpSGbqbCpZvUBmbHokzKaXjULN8r2TjQQqax",
  "key19": "1QrgbLzLzFapQUceFTGm4MmtqNm6Z5x1wpz8fVUMXqyXggccrSvYDVvpStidhbJobuev22vrLGjG9qvJHsatZht",
  "key20": "33r5TR2m2poVN4drEypjZcuqrKVSs9fdZMSBsLx2kbe5dHS4YiLg6fSdD7Qmy5XXizpNvgHgxNtnBPPjcpz3QWHC",
  "key21": "43rGk9rhYV2pp9r37LFktoUuBhu5a6PR8GnsboPLHQYKkMVSXjJ9w9jw4Dw5H3adBemLJmrcGZn7y8XXLwDWNNYK",
  "key22": "kmBvjkC3GdNsS3MamBfQU3fBbtfLFjU4t5nBmq1WHN6RxqjDJMrVVHM8hRa6FiDA9ELkciWjUDup2Lv5PBpQxAj",
  "key23": "5fay84x6jKjZghkEtFejqUWSVy1fmYKPnTRSz5inw13mtyCCkCrVX4Vvd9ijGnxkNbGzjpSs7V3vP5cS8eLU8rnK",
  "key24": "4paK2ArnQh9jutb6no99D9NkVoURnT8M2EbGiQKNBSXVnuGwYf9QLpEAxy3oYJ7wtr3HvECN6mifgKMN2JpTvvpH",
  "key25": "2rwioYC6wtgqK7sstTmRRC73WDKJeMFaPjZihdcAUJmxbe6tfKnYJk77KbfCeLWvunpdBzk6mPU3mQDz7GMjCVMP",
  "key26": "3AAo7sQe8YWkv2orz16iyd2XC5JXMii3u8cocxpS8yBqjUtpfYHzmhmvqBi8PL4zMxjCP9RgfZxCgxkyeTYFVMt",
  "key27": "3eMy3rcnX2hij4XkDY2EgLFeDpKovmYEjizTDsX5sFKJGNqA4EBwPhidTLQrVR216mEvNyQcStZN8cvX5YgeAcvH",
  "key28": "p8rfExRbM4PwrCSm8xFEz23cQZ7CHihMn5eWiiqXmkdCZV6NdaWQFZctYELeGefUT4gSYj4AMd1Dp5wbjbbUR7H",
  "key29": "FokuUjWmLTmWqKif2v86nHLJjrQ6BLYgNsHgufA1h4eTSm1ec3mXSoppfosQG9btz8ckTrHT7yYzXmZcaAM6rYU",
  "key30": "YPiWn4VHh5ezShMU7yiKtsFfsaKgGaCSHuDnKXbDxHBSgfthAeWELYkTX9Np6ueyAXPLWKkRSHGijpNo7aQ5WoJ",
  "key31": "ppaxUhaXaatoiPWVrYj2tNLCKt5AfSpidhpRmg7bKVthei3MQLYhmM9eKthS2xAvJSyAkTnye2ZHdh3n1JvkyDS",
  "key32": "3YL5AeWLXk7QTbWdFuzb5hbGaE8weG3T1sMjCKeCEqR9NffrA5XjjCZJLE72rb3VWw4ZKDTr7bBeE12GYJC6LxB5",
  "key33": "5gSaoaEQ8VMd8o5sNja4ymsKkPW4BPhgwp21KWumPPAtSqEMhuit8cGBmjR5asBBCBg4W34Gx3ohSGfX9oSMmwh1",
  "key34": "3mGEcP6GXnkjZDKDYCxN6XfunqthRyoCU7Xkz53gKRDRmqRKNy4YTB2f6VW8pdNE3RRdjBdHRecdHaopY1mTkBUR",
  "key35": "8vVFcDCsCweLi5RShyR5wag1EWfMSFg9ZwByzeQoP9b8omJ3AAuRvxzrrmq4qaYyx82yHVFvJDpjbzLLTXagQ3Y",
  "key36": "3fVo68bcJRSPndsXGqhNfPgSDq9KcYQzNRRCTuR2GSSHP7Babv7M6WTm5UFQmP5398TEkTEF13xsHqYQSy8Gqjqs",
  "key37": "B7GhFxmpZAGbtHDk59vBC4M1M9Ckcs3keopZCsVEKnBmvVJaWdLCv8oF3RUSc6WGxAtCU99hjtgC1VwARjWPz33",
  "key38": "2WtLKbzpJ6C1ShZTu1ecMDKzmwq2E4Yc7ND9nAGQJZBXCBTjkD3Hme4VWvED3FnjU8bjQpHePm7Xc8oDUy95jsWf",
  "key39": "2Y7s3HqmjafufPHw3X6o5HDELq1dgiHojHJvQBBEZqAZYmACnhMJRkbnWreQecjAF6ZrJtDewDqpUhBPDMX5br5L",
  "key40": "4Vtzb83dEXxTgftGj5CPjLw9EpAmCS1HoWHYAJVa37UqGHwBJ6b85pCsu2S9r2Kyq8j8CYP5SHwndYN8ZdzCXkFd",
  "key41": "2xm4eh8Vv6KHo8rKPyVBoQEx7cAMogrtfeQZKiqFEJAFB4F11Et7auty4hRpdGwmPP3VMGA5yzDidiNUV7xj3ZpR",
  "key42": "4YKhjRaDsbmzKV8fuEFMqwFDiHDGmMh69VpxTTZJrdE8PgWuKB2MBpG6pegD7ftXiSWMpj1RTpgKDYcVGuazXn9t",
  "key43": "3b7K3V1WiikcBb3ByFFJ3C2iKEDUT5t5MZ5UBPKXainVddTDo4MfLrdtTcsJevNjRyvwzZnvhW3d3u7wAqemS1DV"
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

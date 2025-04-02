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
    "3rQHvW63k3SdACY6oaQMB1WnW4QBN5UKveaByiaiJVnFZD6n6e8e5tqoWSnZVqtzKgjVjiat9QBjeX5wnT1Tboau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBWYKECPUz29ftQ24DNNNxMCGJc3PeJ2x4Y8ikwSs252d3nhaD9SWD8e6c2LUGMgZtJNULomqY8iR3erZQS6eFj",
  "key1": "k6jE445qvSwTv18EvpHQVAuAWGDPWqZ7zMapoiiFPH23zLJeUFrdfzCwqP7G9xTJTevbY2qbx8sEGSy1YQokrB5",
  "key2": "3e9JKMUNrqzPaDQUyqAcRyc5C28mzdem2X9WRe68PmBzL9hQyfTAbGXuZLQjmrssG3qZJ73YugaeBQv463LMHeq1",
  "key3": "5xLhz19XG1UPjwuQa8ZJdRiJ1G4iPw6qQHiP68sctRKuHoEXt1XvNTG7Au3puiqqi2qC6VT7hZfns9HqGRwTW7jJ",
  "key4": "5KHnt1RvpzsNZC2M9i4q4QwCs9T3dFBEM1VCRnmH1J1jWFbdsn5LsGqGL6yXc5hve6UWDnnVyy5TUiPxw6vwba3u",
  "key5": "kFa2odGtvr7v8qsF4WsErxLdWgYeyWVHc8Z7LJsfTtvNHmNUsAQAxmZBNMRUnLLaY37JvCnZbmhtqeUW75hHy8K",
  "key6": "23zqhdEsggDo68TCaoGPqproSWxnJAwaLMW2631T47oP5ho8kVNiq4L8BQFB8kZFjMFomCPA7KacMHMc4qVP6niq",
  "key7": "65RgEJeuGYRqcbSGsQcfo7GYNgd9BCfNwQNEz877sWcJBd1hk6obzoJXopnMEJokPBaKGhthxYFxaifDrxkrzYxh",
  "key8": "3eGcAn8tHDdwZhwiNTwQPpSYsvXpBvpancdEFJPPysknGcpFiQXQ2RRvHVrVWJLMZ4Xqk3AaX5tL1rHbPwtF4Xzi",
  "key9": "3MFW6oBbXa5WYUTYvEh3zHscPsajkUoZidhzfaFzg2HVR4mJA92oMWzXYxJdUzSAwjU6j9Uu7bG4JVW23q18h1E9",
  "key10": "2HPbPesUx4FZj9Q3nQgjccWSre5QJq6qp94Qb6eHpaSUYva4CyjqMfQtrukjNSe5Hcu27t1qChb1ceXcgMALMSbo",
  "key11": "2MXYC4SmEcm5s3fNyqMBwknxC7qKM3mX7hUPYE6SaEAKyyfnBfzPHQJg2Dynr28sRNW9txFCRYtDm69MoVyru4Dk",
  "key12": "4Su4Rq4wXPKir2UzXVtqv5GgVGtBtDK987NmYxsz1mXTLmDmdDbvokLizpZwE6uoMt8eW192tuvVN6WTvQz5qcPH",
  "key13": "2MDaHNaVgDKrtYnWWEn1GAFaCadXJowvnqnGmJTscYFvwQxvW3UPHiAG7w6KC2jVqKTbHgLA3VjWD8MoY5BKPFDh",
  "key14": "5AFUV2dwuizS2GoksdxUswZY8qNKdL3eLYNy29NB4z4vVvPtxMaRyZraWMQkjL55xbK7Q6pDssLXZiS76nLg8BTk",
  "key15": "2UoRVPXHjhs4TQEB3HC8LQ6AzCxW2FefBb7FNRqW5JM4tCqontNtZkT7fBMEhBqVosAV3zChAjVAyAc9CwfZvc7p",
  "key16": "3cMybGgghc7cmLrTDGH3DJt24zotf8sczpCK1ZgESyAxJGowQSVbL329SCJzaP6bNm5T5XnkQLhmsUgQX6m6hKap",
  "key17": "2DmAKk39qW9UttKzN5HBESD5c3fsYfyzo5BuKp8nHsFTXYJpxcmhRF7ipuN4e16huvzPgXYMMce1fFzYFcdP9wSe",
  "key18": "2XVezF5h2aKtzkUicGxz7cS7sw43mibyvjpzQFGgiKTScDqDdsBesT6xDhHbUaSV5FGuQ9zkxKeAC5S7rX6ZBU5C",
  "key19": "ko8xVUiS6QB14N6PBjTgBcgapHovUjrgLTDQDEaytPwq5xPnmEThDebDu75BF1gkgb5hnXTddpLCN9WH7gRUBcX",
  "key20": "4e6dciRZKNxRq5SXghXvvRAiAPbriUrFk9CbhAjGS5ksrcUdyLaZkDTyLrRADGqYenSFfeowCNkysgi58ZKeiRg",
  "key21": "64XVF5jCWRPmFrouRFxjxEPrqXWs3b7QqT9edmoLMmSrrRw6FGQNvYbGbv3tHgCBqxAqQA2t36Ty25Dsk3edLgT",
  "key22": "3j5BZt7DDrsKT6waMYktp6VGgLuBUjiFJvPea8UrEZCtYv36ryPkbGkhcgxnHM3zs6wXvxAuXNyt5ZXh5n5N5SLr",
  "key23": "5EECU5GqFJ7ANR26wKJ8A9rZwrHgEApbtKkvAhh89Fa7s6kfHZ1zLSx2DFA6ATJh3xShFnxt56ydxJByhBqaMrBA",
  "key24": "2ygxXLca16CJmARoXoeYEkrUf3gVp8Y8J1GFjnz8wGP4rYaUCwBZmjKTtRp3BmBm75AcMhJF1oTM1mc3k1KNwZzT",
  "key25": "5TE5efbiBLuPQDT2LayHXhsuNYrYvK4PWfWgyWEdEPtt9kPHAtR6qRUKvViPeuqnTWwidVw2rXUvHguFeqVSh1tj",
  "key26": "45w7uyXJXgYipApUvkeAwUWTXanZG9fPHEnpSkvzFENb9kCh8nJtEqPVWLw1UnqJVHJsbXe3LWf5A8SJPeNgQkqN",
  "key27": "38QddENvmbRonYUQ7H6ojCjJqwSkir4uxsWehgqLUDhXv6ro7ngL2gJR4YC3ji6uNdZb4QWJZPf45nt1TXq9znoG",
  "key28": "5ATJm4G13kz4s1etNP927i47MWKwmxVdiqqaWCo41YxT1ZBDVbTsaeQ1JNCWfM1ttWLmZvazaLioHQLd1eUtxmvA",
  "key29": "3pDxdfte27VupxGU8t6vR2y2hZYnFCyH7WWve14UsYjduuzg8RzXmT3UgKPSbgepySxDGdDPs83uZssjtsAZchE5",
  "key30": "3jH1RW85ryVPULQf4oztPayZFTuwLQKBUSaQWPizwtX8KShzQzHrvk13fTu9ePv2uBRX5jaS56PoqqFPtPeowRht",
  "key31": "31VZrmj6LfudAUNu4Moi8pPGY6AfqqBmQJjWxrieF5ZW6zq5p9U8EMjWnE5pdN2aCtuJe5itg6CNkDbvFkr98EgY",
  "key32": "3UAYkwBp1wTAUQ9DTRLsYntcBJGxHEXWqR9FVBgkufxGEjNz86cwStJX2bP3esmoifMnrfBidSm8vgpYBxMUixRd",
  "key33": "2nQJrfMX6KkQqXUzBCvQpLk4rR9JcxvmoVD59ArNxMAPb97CvNXTEqzSrrwLwrepkkyUF7Px8xUBC4SpYqeZQfmw"
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

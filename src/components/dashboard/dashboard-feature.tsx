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
    "5T5uZKeYoTfUEN8acvjhxm52d36Tak8XyVxvaKNt5A6sgL8e1N4attYKc1v5W96ESMDgCwLYfxXNDCNAJJGeQGuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vR7iQKNfDqYFiuLNQ7eep1oDyHhvSRJ9Sr9xLGKuqwxoPtK7qT7F9b9vuVB5nj2vMR8ENiqY3tBGHdtKYaKdRM4",
  "key1": "Y8gKGN9QM4H7VKkJC1UtnkbePBtSdaYsQFJkR82dLcfqHXDupveLsP2upkYtLB73nALiUDJx6mcGc2bdebHwo9T",
  "key2": "41tmjCqx8sUFmkWfsR5dKor6wk2UFD9hRt7wUg2JsKYSW8XBhdhXVWmtBYVNo5Phrx8ZVX9kgdyk8q58ZEHjnZM2",
  "key3": "2qTn4yySCiwcniVVE1rfP5RXTv2xZ5QK8WVkqetfppCAExZiGgGCUyJAtCt6f8Q2sMYCas7Jz2kCuRk25dzMA2by",
  "key4": "2Q9qMSnzKCygLZ6TZ1QkuoZvBWdXo2TTEtqG7XB78Lja2t1UX8F32AVooaMV3eH6g4DmYGdd7xsqPTGw9MwxScc3",
  "key5": "3WSQyfZ1mHLnMLzKbYw1A9ngyES7VM2az5QdJdbnPYZBqwqn1QakQKtHomTTrFm1CzQLXWQwijrYttCjz2yHoEC7",
  "key6": "3HPTWKd7axcxdQcjFbFUJw31GfL94FKpYWeMaxQ5VgMSup4NACfcK8JRjvrYWy5EoCC8c8AE4WRCn6f9ivtFm9sW",
  "key7": "4wkJdVXXX18fHGGu3YofXWiWGqBxDauHMW1mMV837su6b2PhrHsBKK9Ukd4jzWMqmhYLRpaTDotvpifPyevwRQgS",
  "key8": "5RzVzhbUR7E7KGbVizgVnhVchKxevRvPU1gwCqoyn9qftq4h7ExMfun9zrDGZyibBWqLXxCFn8iJjR44XQRp73WK",
  "key9": "5CMaGf96WaZ3vetWxhXvFzggBot6dH99eZirRapDojAQWuENrxYCRcWWweCH9HHLVKyhJWRDGRUJ54WghAEXNWoM",
  "key10": "4vgCEnQdypqGbgXcU45YATRRuYJ66EHjtve2QP2WZGJeHJzFxpziVNLmZWakJwRjYDTsoTVqDRjvPgMsbrxNnZe1",
  "key11": "3g39cSFqopWynYWJJs8V33o3zQk8QSZ9JaYA2e8Syhic7XWLSzxoUUBN5nNiyCV9zYFdbjgHTT6SeNLiJGqgAbU9",
  "key12": "3s9XCcSJqpPS6xxjZkWkSHcZ3oufHapvGRvdf6SJZEA72rKCTsdMoj44VuHJFjHCZoccubvfesaZ76bmgpE6SEbt",
  "key13": "sTdjgiBUccKMxGKThrJdvvgdhRgiwqpoFSh6FFDsiwFg48wXJxdo2E47kWsdskD9JTtmG9qqcgXki6PVgpVK6u5",
  "key14": "4CUpW3ijhcS4NAjHauCEjpxW9H4aLDKRE4Jez33cbsE6AZxHDjUjRpajdCwaTozeGTNYCfjkryVyBi6bBMyg46Rk",
  "key15": "3igon6LrRxjCT9dK1tfS1KRzoH7pUSmVVjfa8je8WkwVRP7qB8MDikKTAqDZm2xAXHGq8Fi4YxmjT21D4rX7snwK",
  "key16": "2vC5ek54kEcvqFDnVgthHt58i8TxPRiZUf74nQNrCazPiQ4DWXPrjrJAyxeD13mZcXAmwvY93oYzFqEC4qny3aDD",
  "key17": "2jsWgPLeL2r5DckK33ohh8itMeWqxh66tPhH6a8RVHr4m7hXZyDU9XFZzWJMAH4NkJBe7Rwcbs4Qnt6tjmChedmb",
  "key18": "qfFUMTz9BW25bVzUqARG4ckSQB9i3VeeLn7fjdjwD38vNiDPrvJFd9X4PKyRpQFahLxpphrKxG376NNUwbLzBcV",
  "key19": "2qaQr9B8ends46Khu2NxL2hMbU84M6vCaMpwaxVPcHP4PniP3tZQP5RyhBTcskyBwXK25Lh48ixDtjQMd5H4XXWH",
  "key20": "3eQqK6NXofrMAYNfi1gJX88AzvZwxRMmqmEFVaXYTVsZxsMs7ohiDhS79YqxF2zMHs1xA8mxYU18gPumHzUb1oZ9",
  "key21": "5dF1MErjvKYkPL99rh1hKyiQnEpRgWLBoeAEPfiScqzH7PFRGLZHLNAXTcP9VRW5zFDjG8XMJCX9xLX3HZMbzSBc",
  "key22": "5stRwmWZuYj8VXrSMtwv1XH818wTWsh7GLf3tPoPvkLGMQk3oXdxXPCWvQeoXmNSZQEwihKhEEHm2kZZwRRD4xEa",
  "key23": "2CWwyp9DqPe5P8LDVnmHUf5eQ7i4ktD9MLCQGRTF4mDKLxWM31cvHcCk2tE3KUM4MoYoBnoyNarqAji3hiY2n8tg",
  "key24": "5eDD9onbaoSkq5UU2DpufSQiZ1VoFv2aZHmi5qzHeDuJp8iVYpmDCFMgMQg3WY3xK2fUTuSMxtQVXwJXQN7m1Zus",
  "key25": "38NjcNgmfJ2efHWBK2XJruhVWYQFrFGrjWmCo1S8QsNnVj665ZzaCUoafyNnCrQXqNBuF42ZHnDiwdxL3XfLCzbL",
  "key26": "5ws3mxThRTE1DoBHaHtRGhz5CRGL4QNEZtGooqqC9nfiqgsvbBxs5xTDjWeu2ow9xuojPRAfZxDAP6yZr1jvetWy",
  "key27": "8qZMk8SFYD9x4N85raTpG7MwUKmg8zUBn7k4ZjS8261fUoNBygTx786AfzgacdmBthSfMdTT3LYqcxbyhSihwzx",
  "key28": "2nVEb9beK8SWfZej7qqC4R2CpuCsdmU9gXgdkcrRfGmR38tMdDwn3GyqKz3ixWBedEweQs5iX22YrBndgfYhr8tc",
  "key29": "5y5XXRxS8shNqhN23qp1tqc8BJngoNR9PQCQi9ianhjgwmLUhyRgZZoKeMNngKysZ7R6wDgR7PZduBp7MW4BKqW9",
  "key30": "4gmTw7d5i5oG5vXgyFZuF8eNAV31mQuCCmk7TLhaMcF1aA7ErcbJYHYFzvS3faFhn8pfP7S4f6MMWifYPLow1ZF5"
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

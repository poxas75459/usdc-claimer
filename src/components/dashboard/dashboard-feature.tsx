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
    "5w7z5R9Vis9sVVzCaA7eEyBvhMqe11QDSp73Wq9Js5S5oYPEDH3Wr22YrhxbXGowpYUpn1x7wHDMbPmi7F1dSRtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ExYf1xJTq5Y7e6BaKduB92wMdRU8ERmoptXbuQ4xKgLjctrFHmGwRZDH2YT2TmhtdTd2SXxVRdnEfELzPGGELVs",
  "key1": "3o71Ufz2krb3j6UhhmsrVmvMQB4LEEYWKRgV8s8NqETcRSb6KL68SHKVZj8i8pTge34qFBHqhXQ9fvCaiTpxGi6v",
  "key2": "4i2GsZLPYKVGiCRUdcQ6SfMWrhZBywaTNvs6mBZHzTeQNgHNALt9tAWTiuU7Pfb7XKoJ5aJcS1AJKoRECBvKBevG",
  "key3": "4yP3t3oRLu5NiojAgAzH3GAu9ZqyYknvMzo7MQCqBQ2Xn2btNPs2Ys7hiVwqWevnFXCDdefRWfHEoyyp3xHvma9U",
  "key4": "5nQ57VpKht6RYhduZhx8m4rK71sNopwEkrDo9Wbe8g13a6Pm4pLFGqBR3UvGmGfpHjGb91NgC9SvyRW22v3E7EHT",
  "key5": "4vMbAKVNvgg1km8AWcwy4uCzhHwAY7876YBLjdJe2LvaUBHXB6Jo8sMWL65oZKe34et7ZmYHBWvpAEtBo1Q3LL1P",
  "key6": "2pdAUpf9YTQsRppKbw67stRtRxmyvq3xV2pgyqQCisRy4S9Xg7ziasET5eNiYUrCkRFLjEFFWnSmxqTuKudZKocg",
  "key7": "5k33ukvqeiEJapQ1CEkyg5yFMSJ3zb7YktViR3PrGyYLZCnno41bSE9tGrvpqCbF6p5JnUFGcQivigaWBabTE2Ss",
  "key8": "31HofaTfVp3msgQkzojpJCWyKfMCJyjSJqL7zwLFCAcqYgUuTngw6J3FEkfz25RJZR2GpRdbVzwFTCGYdShdBoeL",
  "key9": "vpjgFwXrEznp9baxiAKroQcg5tRKHsQiLFm9RVPiuvs6c4daNhH7vauNXZG6MM2HVSjmndACJtPNYNf4sSgs7GR",
  "key10": "562ewjQHstxnrVw1pRCh7dbYGY9sWwZjVUMwW6jyfww4E2L71FEqUkti2rLnQPk9YqCW9StdUp1kSDMdTEx72FnH",
  "key11": "2yLXZVgJeZjgTutmkcA4B61yjdQJXJ2RDoaFf7kt87HsLYWdpH3usJ4UubhDfnnKgZAKVs32SKH52dWV4iGWF1eJ",
  "key12": "65BtRZHKWJBmx6c6xzc3Y4ZiG7jBSJiFaiYxLyUBx2r92xeyuP14JtzfWuJKWRDSvkeKJ5toddzVumyxswuKhHdq",
  "key13": "3pPN1UkARxokdWEupNDtNZsudFioCkb3F99nmwcqd5KK4rJtNPc6W9mXrXcq1XAM8swJFskumMHYLDbbvcCn552b",
  "key14": "4kzvq3EMF2SxqFTJwS8CZMqgih61BRoTPwR4zLRJMzDDe2wLRYQfLemNbJm8G7viDdF6j1ZYS9WcgPoVo1Xnt6QX",
  "key15": "2LQNh2vE7M3ahFXba3DjysK8syDpoc7uVsPoq3dc5WCCuc7J6xMV77ohupQbzJkM8yfuouL8oKMUqcSsprG5jFdJ",
  "key16": "5uB5MZtBfZjiJifMLZ5bB3duukYczhCgDmEAzrUTApjhHcedkuZXGuNC3mShhHSQ9yr3s1r2LmWm6uT1eaYZ5Ph6",
  "key17": "65VtkqX8jHjzxcM6gEdyhVmAjPwzmDbLjZa1zD9bT3GUCbWv7MTcEKP2ZErGyAVMHjS4D1XQ5ag8VcvLVUTQH59h",
  "key18": "BJhuNusbX3ryHLdcEiE5BaqBE7uLqUaup6RfEys4hhVDCpDxqMh445775UieXmiZCsCU7Enewvpvqh63db9fm2U",
  "key19": "3BHQ9WYZiyE2FLozih7S263RaRCg1mWSABeZWjZJ1Gd9mnWEg6akcFG1jQSQseZ4brsLhWUKGs4iJsHoK6Sz99aR",
  "key20": "2fvWvqwb2641xRJw9Y769DWpjhZEUNpqreWyyURrWcpkUkuiAvJdy5gMAibUTzqdDCZYyLWc4wm5jk4rqRZXfM6K",
  "key21": "eymgFSfUqpssd8BpTL9f8xJRXwLaETGxkxPx4CGEMUk56FXDrVL6SEK4GDZeCj4P58Uq7NSKnVbpm7bXtvzeH4K",
  "key22": "5RBDT582RKco5vPuJ9Q37WuEk73MEvx82x3RxLq2LYWjy9y95wTDrqZHBAmYLSYgrYKXcbaQY3P9XkSJX745kuDB",
  "key23": "3fNPFrLfmJqw9ej4VtayqmFDNpgy4RkJ8kegCzHpQAhRfUCZZzer23wHeL6ZQupBc3iqDBBCXqocBQWTDDHegwYV",
  "key24": "5gV1GDCJ24UuifV9gGyBQFnUCie6ZtdRnRzkNzPW6whY46UpqH7USkG6vn3yEPPGRDLA4vnD1szbuxk6DyR66bBX",
  "key25": "5Lk88qu9F8uibXa97KvMmLRXWrwnBQuz3Fs3nFEwXzsJti4hm58YN8UPoDvj8TTt2y69zYKmmc6CbhFUFoqedbQk",
  "key26": "4hmFYEVc5hhfBzKCR1bivrjJyzbQkiXubPYWirVpa37DYHvLdNy7TavQwuoyfX7Bq69VbgUtKFHkbWwzhDwUaDZg",
  "key27": "5eFbFeSLHYXLVWrZbUdChzvm9huKEpBLL195hKiKWL5CCa23WT3DYAxcgPwUf5JVtBfEz2ECFVpCH4ABcpp1Z172"
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

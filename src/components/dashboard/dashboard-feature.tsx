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
    "3r8wcYvJcqsZHJmKUv3zy5Cs9KATbqHhheaeLg6WrXdbS3QimNbXmdyKuQCXV9epP3xrQp4wnotQgWVS2joUqSxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWcdCxyCuofRdbP3aNnkkGdCYj5ZugSVUMDJUiGWv6FrKi8YHd5DDjSyYffSTQFF8KAVKHfqnCTQHyb5rMeT6RU",
  "key1": "2nAG6V4CcbKpDHAQTK49FW3C2TVW5uLGovhACeTW8ZQXgpi63iW38q2ouCnz8YovmdBrGBqC8SoMgbtCKFfrFMco",
  "key2": "4qqUfmT1gbW7qgMWqphxd6teFrgzgE9Me2LAswSv7oUF9M63xx5erdpRTtXSNZpHVQWHtSq5z5w4zqevtHm3g1yR",
  "key3": "2pk8gFTR2h5FTk5AKrqkUVY8iUFjT7YZvutXei7DKHkiuewAf8Tu2CCN2CqC8cLuX7cq5SQRcwLsYq4YSqgpTFYg",
  "key4": "o7AeYG4etFPL9Y3H6Z1gK2FjkwvHqzA2tUXePZ4jbsTDCZjGnqiDmuk3b8erp9G7R2guAXF3XQvU4guKjj1gpxT",
  "key5": "546QR3HEiS4upxdbFFyakWzL3RN9Yjjm2qYcrR1k22RzbzVTGudPsCgVHRCFoZpNDppomaWysRZFAt2nXPkGENHH",
  "key6": "3a13gSUhNqS7xg1Zu863R3U74J7KukhT19Z8NxMvm35S3XYzon4yXjRbFomE9smkdLP68yimUp1Qmnt6SMD53e7F",
  "key7": "4xK6aHCCUPp99GbqwJ3EMA6q8WJSzfgm8W1HQEy3epunh2mKcK5MJJLDTSDBrpEHuWWiqKrRFZ9NT6gNK3zWAKrF",
  "key8": "47NeTq8pF5DTF8KZSa8JhcGeRzmVdaxWhdouNv1y7BNJqxqdiQ8CDbavW5MwdrQWaWnHLpJNnvAbUWsYCuaycgAF",
  "key9": "3R9qYMGbTGj8NDjpahcpyEYginNg4kkYjp1EkQBDd17ac4PouiaqguDywxTqMWmEvrxW9RQdFNJxT5hy7e3ETKu",
  "key10": "67BNEFAeX9Bg8VBC9w3zxetpEGtT2ezGnN3rfS3qvHkxdSVzW1An2mYpq1Sgqgm6XNs8kNQkmqjTkABAjqnFfHX7",
  "key11": "3U6vdr7SxcMZNtHHGqktQFqT8AeYFXT7fRKuEv2fM9HVVGu8b2K7oUoGgqNrAjZ1zJLY7JKcsXSSD4Qpr8FpnCKf",
  "key12": "VDZTXSJMCKFHFA8tvagzFxcMfvcVMCYDZdyUV8H99yQ27k7E6uenWwGpi83SH1kHehJTsFUtRqkJXEhgAERTVoD",
  "key13": "2kmvcvnWwjbkn3NbMcS5o8u1MKjaVqgibTrfmgYD6989VjEnfma625BHFjCTJAu5Tk8AWoqEYatK3fUQhSXetdLa",
  "key14": "2x5YC47J6FJyS62awWyWr589Hk7dBgKHPzLFr5MGkwDQ7QDEDP1X1FuAyAMkpaJEcgVMXW6x77Pg8CZxbgqEngWY",
  "key15": "3tEkQSdRMSuNRcCuy235NrNwHpiTkW7FVLoVSU7Vh5uDY3MddnLvvP3Yi33NfVKwNrdJduj3ofMg3cy3jtQL6X2r",
  "key16": "5e8NigkXFdwcxy5t3KKTfoyG7n2nQFBe2DecoiTEd2bP6xgpqTWTfrFAjaPio2BnmHNpvRzDX3LUbC9hKnQ9qn5L",
  "key17": "64mSrhNph8udyGa9LrVfrb6jA1kpgTgpC7iT8dEB8Wq9FmDVNGRnHCPzfMjEicMcenNpQwqagnKjLWN3bx4582Cn",
  "key18": "2eWUATawvnbmdjPMsiVawzajJj4a62UwPTL4D86UiQVKGNczzqY9vzv4uKnX6TrYHxMJNBou5qWUFTy6KWbZCzJE",
  "key19": "4NzmkkuYQ8UiYXqZGfgTRT6bGDpg2PTyk2EstPbqjCs9Nparqc21EPTAnN2RqWD52u2wCbCLhXrkX7DQ7DPLGUxu",
  "key20": "4cyB2Runhf5Am7mpnYVH2f9fq5xmciDbKiKF9bKqaAZtHoCG2ss7aSn2XCySmFfDqZS9s7gnXe2eUnpE49Xg3Ne4",
  "key21": "2zHKSaKbRqedV4Z6BNNHCQYsKQCcgWnZnHXx8t5z216D4LzHfcSdG3DgSEePZkRDYEp7NsbJjJo95YcYM9s2uK52",
  "key22": "2i3P2hFVFm3FXmMUdkJFiSEBBfHhjvBgM1op5CTuiHJ2J9w2eKTz5GhGkbcvWRS6yr9qLxWmJUHz14VG6YBXt9Vp",
  "key23": "KecVEPxkSniFZubP6GuKsckELds43sragGQ2jsE6fq7ULWhfaSSSWJ3xMQYwh4bRwWwFSiV65KUMJujJUAr1tN1",
  "key24": "3p9Nz6w1c9dVDQk846D3JRgQYC6vrtEf2FxUV8VYCNMWGpBk1E8L9369kjPQxfnzqFthsVWzjwY47wDqrZhotT7r",
  "key25": "4bWGnYJnrwAPkPUCbyoD9NSaU4WGdY4WdiNfm5guU25mvLFvAKsnDZcVNon9TSYMuaSWVVWwu2w5o8FfCH52nd32",
  "key26": "4tC4G4eDJLD6W1MuWFBN1jxwebZcwGzWksuK11MdcVzS6Ygk5yXfUjTXgjxGnpX1pKoFZ2QrhU7jGA2rZRC5BSbX"
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

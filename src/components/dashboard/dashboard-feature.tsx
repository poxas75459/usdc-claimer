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
    "3NefEgLqTvr2NoA1TfDFyj2rLPrXjAWMKXPpZJRa9N4dztNZTbXpspzJfSDU4WBfCLWnPVu6A1NoF8Tn5u5sqK7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WEkrSwgCjMm4SY9FKd6BLK9sKGojBFnqkS3x6VxEXAkRHa83rp9SAhGvm1pxpLFtSLt2WwMksy2fyjjjH1FLLP",
  "key1": "RjbcNUkrEFkZ3goSTXZFayijHmVhqod8Ri4m8uCSVYcQi7SYSjhiNsQtCHMq5fKM7Dbz2PkyVM4emms3wSQTfgQ",
  "key2": "4CfmEqygEvPKC5oh5ZY6ne4BgZLDddDvXR7qSJ7QtGNabkLcizwRsN71uZJNjDuzc5wrst9BAtSEpvopYYx43MHF",
  "key3": "58JmxGTQgtU6CN9kZ4hWWEdEmQUgC9zCinNKLj5xEAtkbSMyixJW7Ad7xvBNyxArVMkqAowzdjGMqB5VbsYQQGbg",
  "key4": "3aLDpJEFF3rCijv972v6AqBnczjByW9z3eQwhZVDGxZSh8xaLSQKTs9stEfWx2fBdZ5nCY6WGHrNSsQWF6pTRVd4",
  "key5": "2ysjC4QT3xSEg2V2fLev2jPjfSw8A3vHcQN4HsTzrbPMYAFDboThsVm2i3hytsRrLyVzYsYXndBVfv82tnenaFMk",
  "key6": "4NhanpSWQSBn28mwrXfh6DMZLsQMDxpzDyrW6sALcAhsZhxwGVoQHU1T8CSGBZ4K9Y9KXESUicdoybyz8oKkkDWR",
  "key7": "UwqL8T9H85TnQnKhWY85q3KpgqzoiYjPow2oYZQMkFsjJRA9WuR9JKPdzG5vZChnAMMHhEDguizyZEh3zjaDcpM",
  "key8": "WJLvUPb6zTJkJC3NRhy7ShKFtAaA9vBowGphD49AJWBWkGWixC9Zaf9JPAes6D96HypyiEne1StnzMpk6hDgEmo",
  "key9": "byxJWeUVzXPwgM9zt4AzSepNCnA1sgD1f5RHF3ZPjTmRmXJaMA9x5ecqhYYADrakfsnFsriGew1F9P4nGwXa8Ew",
  "key10": "5WAHeg6czjzSv86oD9Tu8cYf47QLKgLNpJFDBLyokUtU3J2PrLpjAqjqCWaXvQUGZBzeXxPgqJ3o1pYDyWEfBvbS",
  "key11": "4wtsjRrmkVXBpNvPsk5tkqgRkc7db6tXG9kSFF2D78kAWuUmWs3p5LhwMQ7DBgAJE5hcwwrkpnrdGUEShTyfeU7s",
  "key12": "4SsCNmzQwrZ3fe8s4eNcJt9KhSuGqhZL5JPF9y3nGH8PAM6sPFQ1bzxhLfe9nnwG9mLsHu6uW2tft1QcWbjgqykN",
  "key13": "4psQm2LToA9tcSc4LLUWDrFGADdMocTkMjELsLnM1jErjxfRVGSkAMp34KC6kQ1Wr4LZcm3jED68YutUJotdjXmx",
  "key14": "zUL4DvWKu5c9THm6GVMREzPaWSxzFMGt673hFt1D7uTycMi1oFx3LRG2bELicHRzPC5AXafUPCnXWpS1bE3Yp2u",
  "key15": "3vADcG6S9aqpf8XVmqPpsuzf3QJaJnoEnLmDytPpMtW7aEp458xFGkmrXGVNZcGVY55SUV5gemnfMKcP5oTpJu1j",
  "key16": "2aLwYN71fJPHofjo2QTYEdGN8kCy2DoDdRWXNt7KkribKvMVv5BEJwKCF4FhwMuQetfUx3VVZWtau4Bucfrwne9X",
  "key17": "2Y1MobFqAx7woGhqjrP9trM29XRfZKWiDHLDbD35pqYh2MaccEbCS6qEWH6SVhagfxNJyHvfUyouS34ojbB7Gb4F",
  "key18": "4N7tgokdLCotFt9KxE4be5Dt99LXzy2nyyJxyU7pAKpQAWrCfseVTw9jhuDBDEQJKN84k66AePtmELU1NBNmWtKY",
  "key19": "51a2zKcBu1Rr7pF9yisikHoa5ym6cHT4yaVYovxz9RA3hsSqVPQVQjFehr5iRmWBegad7HigSKPBCYhYt1hpXktL",
  "key20": "4FbiMuQ5nJEC7wSrWZZt9yGz2vdsXq3uVEKns5U2ebbpHKDMHyUcZmXdqE3DuGiTQJ8HxfMQR6n3GyBbwS7uNqmY",
  "key21": "9wwd4vW4dSEWpZE4E1FFB5VQZgi37R4ThvCQiMe5QLEe9P9jYTCYPKq2Y6gaSXrZMH5whKv2af8wfXFHHGDsuyv",
  "key22": "5Wk2oj4NMKzRGWx4jzuR8cj6ZFrxhmjw9QaP1cVQ1yKXvp5MKX4hUipjusBhXxqUUVrYADvTiXffyyD9Yw4JM3pM",
  "key23": "4Wi5JUfPmME42bFMMRuN6X8aLVpRzsB6DwGyPVPLUqz4u8Y8CojT55qKsihpcdz9APxJCukEBSkEUqa1zwwpx8S7",
  "key24": "kFvZXUWPSneVfS33zxUkvXWPukneGHA7Dj2novnEBGUneXUwef7VdNRGFR5kozVyGQ16CVH16TNpcuyYjDy9yQs"
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

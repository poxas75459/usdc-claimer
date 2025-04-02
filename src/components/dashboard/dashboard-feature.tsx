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
    "4vAokzBon6rF12gpDtFhg1KTMct98LjKD7zVpQL5DweJ8TXHWSstitg5ut5QgUKhY2Wfqj6MZs2Xk9CRqWp3WbsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNzjyGpvsWJJQMAthSFkLMEcGqJufW1C9qRD13gMEwQRZzXQGrkZoRqS1MMY5rjepq7B1psceH1CHp7f68uzs8h",
  "key1": "4RfHTXMhqUsegaQJxujQb19aNPtryJ6VU9tTxy8urbGXxQcG7opjsZHarzivCYuxgk9fY21EZieK2Awruijz4R1R",
  "key2": "56drSWQwyTD8GWs5zPANRBMtAj3uyYTHF98HdZaNvDWar3GBda3SmVtkp2PSoJ5ap7L1oWB5gX9VoZyUYsd8rZci",
  "key3": "3ojGotSFBWMjM5B7mBMNj4haHnDRRfzTFWG6F82JUbKuasuCBAyhVmbNFPjrarGcvo9RXChYcWJZT1kKvqFeXjhu",
  "key4": "36RJqAwdUzjpyG16c3ERF13xYijdHtSFqrkiijCVF9hebsmEpUUxYk7GNvmb7tywbK4W4LNWEESwLqvS21UTRtSS",
  "key5": "5LJhWE15UiECBdEQFMz5NpM9q1ng99EtaqZVrfPZ3G9s5f6cNKBMPwL1D2KzstiQBnbhFKWiLXNSdJPCSDj3ZM5h",
  "key6": "YzM2yx6riLJasx4r2LiJWUFXzoE2HSQDWg6JSsyf3LhFzNtdN1d1Kf7uhsjYxWeCQJ6reKC3tJChJtWXqBTtLF1",
  "key7": "57UuAKeuws3zNsmEvBRkvgXQ7hZce7RsKwCkKrTsKkRRyiUAZXanFiYnf22avYnmef61AYxsxrxTLrxn3JMZyfQ2",
  "key8": "2LxwST7ue7bj3TJBSp1LkZ1WjfNToMEukHkkppNgdPA7AxPekAsyHp1TXboVy5Wg3PQrW4kGzTW8jzRhhqmexyaa",
  "key9": "5ufSDx3BWjBZuoJHcRgmfMtp1sWRTYyX1RzPCvQSRwbgpw48QKXgck2zzb3jAZcrTpK7AEhd2ihGqGQFEqkWJskx",
  "key10": "63tkthC1gtc6PsBU735qkm7S8DK4CqY4vHon5TrjUSizsCahTWYuQzByF5kAUMEyj5FkAzQDf9dRsAdKNY1dzhLd",
  "key11": "5iNHpGW3YfwbQRRv31tArgKQ1kaTeLRMkC6qRx4vrQp4xMPbkm49a7tYgxNrGPayUFiPDQRqbAWzMjRStzHioFX5",
  "key12": "4tj6hzoLoaTskuaKSrTjvZMFWH5Xe2n3fTw9YstGMAy3KgiXDDKSfxVtJrAWGAfQeAq3tLUigHoVXTA1fpvqqUzw",
  "key13": "5NEjN658wZ9wRkskYpZMQMEZ6yGvacC8VtfGqrKMA9URmJCUZjAy8LuzsmiKrJJH86tYBUEc2hvsX2VXpJyMPpaH",
  "key14": "NnVftTidFNPRUp8F6aELGLzYwLX1zunfz2gNnwAXkiPaLggJJX8sb6RSYuXGz8ZxCn3GF9PaCACbspptdCu7EQe",
  "key15": "5zNNRoY5y3Y7grhmGvxWRwQGR8UPfw1q2DauroCDQyNChEihTzNuyMr79Hy3uMEsSGnE1PVXZJnQBcXfk7mkMc2C",
  "key16": "XXjVkvnRiKVkeoXypoAw8cNSjzdkBL3CBJRCJGvJ55ohEvTjZQ16C2ioaYqSrJQhe7jUoAkBb5pQAyZcS7CA5jD",
  "key17": "2ZB9KJPctfJoKih75zHQBjqckv8vcsKb8P23UHy9dUfAisAQ2jJJShBkUpzZo5YFUKtYcBUHHnYzjX1ETuntz4JE",
  "key18": "59t37jYcR9qkEfUGET5vqja3jZszixkzuoSGcavJGQd4G3beYsDdB7rmre6VzVzBb1qRTPoMY6A3vGMu8QSba8Ri",
  "key19": "5GkE4FEoi6vTJePHSZdy8YULJhu3zU32iB2n6fVeRuWp9ZQyp8QxrrcYHSvxv2p7ZLTKm8GypSroFm8jQTcbGAWi",
  "key20": "2qDAUv8ZB8TEcmFQAr1i4kbrrqTUMhP48NjWWJntxcwKY6VKtDxZL538kpocKRfrp8EnZGttgVec9iGCfCDaosa9",
  "key21": "4yU1nEjR7AMfBYa3uBBymkS76Y4joJGvUQHMy63PDPvQtQuTjZcJ2WfwnANewBmBsFoV8uH4ZqB2k7RaH2qVu8kq",
  "key22": "n1CXobnVDZZYDmUAWNCQZy5GeEHoF8mR66BSLDCafgVtJAMCEGabjYbFvEVwwMKe8oa5b3fWKp4ydWWgauVgALF",
  "key23": "npRtU96XzUUUVcvvBNaehh9r6TUUpJ8Vp7SsLo2RD4kKkhgQjaNr1yQhUvXyLnJedy8S9guzcWzsKn4KYbpAqT6",
  "key24": "2aHD2urzTRZBV2H9KP4PdwNMM9k76S5HELcvqDW7QdTvpeRk92H1tNCi1JwsXLxNjjZ8XN5tTU7PWDR97dUM8do8"
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

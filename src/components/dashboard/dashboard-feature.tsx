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
    "4i6vpZjkfVYseRhB4xa7r4N8kJ3hdP3Ed1qx4ps5WMQFma3YNm9nS2Whe1Vjh4TABtzrwWHqcRx7HwpREy9oVBto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oda4gYvB5RHynypwxSHc7iTTRnE2tw5tj13ypbwT3zWK6gRyZzNzGk2nhbYWUtNRgpFd1aN5u4vNrdCQT4oMjWy",
  "key1": "4wLW6d342uL7uPQPGYx63y64JtFzM6XYVKZTafomqfwaoyAEBmCXF5Gt8uiyyB2ch8g7YDCioQ2z16RjN8fQpEyW",
  "key2": "4B3KKsvJ8GCyJhbSwDsCme34gK3TWBsZJDJQt6RFFT7vTuXcdmqYwbGFw5qnEFvzeYB5MUBcdXpcN5vH5cczYRWi",
  "key3": "61uriD53hpkZGDyuAMePp9vFizQ141VDJ8gYD7uEXa9qUCdqHGXc9Jaj8xRtEw5or7GhcBNATKj8qUyZ3HkTWohs",
  "key4": "3P1Tq24Pdt19hcmFMxern4LJV5TBSyuiUzHsAghnTY7PfUbfQycxGtMZJvNH1upCDfEkLe8azLUu69g3HCFRTu3v",
  "key5": "6B4b5s3DZiutUxiNMbmF3tDCN6DeCAxXbhcrcHqXJJoYMUCRhx7Te8ZDs5dKARxxKD7Xc3XCUtG4teUJcxck325",
  "key6": "igMfuaKe8AKGXGkBoVv7dYG4C3TGbQFMviPApVC9LctYbaPF3iKVTpLi5ZS21WNWPqrw5yMGEAk8zEEuGo8Z3kn",
  "key7": "25ZEpyNKUdScXE1Wnzk35o1aEsN5H4mTdKNzJU84dprbMCA2Lutf7vbK7xSx1TjTvz2ztyXeGk1P5iJz9rwV53qd",
  "key8": "DLnrtfu5hpwBVUstAPfiiA19ciLr5zyE7KrLcC2YCYTUiJgg9zgboDXcPQpSRqvk6QJUb77LiyaGAGLZx33XdWh",
  "key9": "2Fe87f7H24McJaJYDPYQ7YT17zLhdLoJqBRsRw7sDkpXSpSdLbQ1imvR9uriE14FZcMyrvKL6UVLHvC2SqGxnQjC",
  "key10": "Di1X12jxhW5qmCsuXwuskjiZoyeZPnW1TAAeNoUsfS8MeFym13iL9TwSUMgyF4ZcuYqsUV8sLPhQjjK9fytJzjQ",
  "key11": "nU6B4JiVzXdWMNZFb4ohSzSoZ2HwR4rRWR5Dskq5RCRbHJR6NXrjwAhrw62sAXkLDJc8ya34y24rroVLBbf8fhy",
  "key12": "tY5tHtbxJ3LPoAxvVTNUy3JmiFvqsaTL9E76DiZkLhNGXkCdWKcppKmAttR6sVcWRWjBEcpcqPjvhWAGR4fKFAm",
  "key13": "2uniTKpJQR1zc4rF5yeLy5JmdbPGSab59LLKPbKaQGWGjK9YRH1RcLyhSjPBNqWnRdudUZAUEzQm4kFdJ367zui1",
  "key14": "3RMfHFWUsTx94nieVaz1UYFZWMP9toaRbbV1qFzaXJsHGdcypCWpYCht7mxwQotCAbDpLuiLWueUHSNJEM7R7v1n",
  "key15": "yGtG2NZXPtBAfzd1jsx1zSbWe2uXUi2UVBsGbYrok5gHZbcD9iJNhkh46apeGjPmdZgAd8zDv2HJUYa2dZrFy8v",
  "key16": "2pT5uv1yHkfrVst3RLCtkFZ6bvzzwQXnLi89Snz6TiizqWiLiRd5FTgXYis4GLyLPvat8ktbWVon4Ucc8wDB9nME",
  "key17": "2x5RyngMAZfEAhdPW3DC2shdsyykoi3g8gZmMV4vC5ML3ark1pM19pHRKgERQerCMyqwuaraCnSKrqbsG2jTEEb1",
  "key18": "21byB12DzTSy8JFAFxqY1aDiFdW99Kk2xdbMP9RdBWDbXCrYjpvmnX9RkqqQqwUe2JTXPbKnJsUBDyRzDar5uQLS",
  "key19": "2b8WHo8TVswYjycTqmFmaAdWqs9wpjLQJPPkHVhnx37EBoEMykKCyab53Scj8QQdvy8MDqFG6YFxM9ykRwiaW6Pn",
  "key20": "GqkTWyRK5wEm1Kn94NxSrgCCjNtF6ghKWpbVpLbSNjvNqMKQb4TQWtFashED6VpMQxSU35omVQudxkmoDUCutKo",
  "key21": "4CUFdxYfVCoA6vrQrB4Cx9t7RYaZs6zzamUfLnw5dHUi6GC4rtZTVGFFMranwpw5Ymuu2b8MtUezVuv9cEAosDF1",
  "key22": "2zaUErWQLFiE3xto12LqKK66sGdV4fh8ftLWD5BMXThc7mHygpEPUobhsj75yJ95Zkyf14fzthiNW2Bf6qt2WQtg",
  "key23": "4en1kQknbHhUNwD8mAq7xHKs7pEWNJZRVqiXxLiicJTarPeiKKVaMeD8p2xgrn3eUmjnKRsiJ332Ma32ySnSpiGN",
  "key24": "VK6gsqFZrhDtoGWX6GJMc4xj8Kusx7scJ5tC2HqbwY1jW7eBoc346uM3P6tvv2tQBDKtGvymJzXy9QByXHSY4mg"
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

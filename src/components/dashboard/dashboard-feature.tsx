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
    "5WtgZcdAWrTpf2bduNghkseRsbtvt4kYD2f5LLe5T7DAygFsqu3aZeksMY6FGCekM8dfma4ozpf94fiR1koFg3ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P5MpLQmhTR2hPHnEqXKmyBFjMP3TvyodeVBGTLmXZaiwVFoXcmspPX8bvKvENyAmB5qzifJy5jnH2mhYEadi3SY",
  "key1": "kGUXhdgU54XQnv2q4MLjsNdCzV1bgdetUTXae62BLt3iUG2CyBU3rJBgKAV7PefNHTz4pTePe2a6DUNu9K6TsBB",
  "key2": "3QTdd3MyVwu18R2JWTuFXbvW9VhP6Wg7PUwCbRCHpqUv66GvUxrBuzTbsXsFHcRwLcaugikbHw55iDKpyHWhukCs",
  "key3": "3wBxeLZsUwDCyXuFJ6QrLBqDaRZP1b1Kjvqe1RnxUJPb89rf9qWEMytyPMinLNRXL6DQLauiyZHdxDeSrgbBnAQa",
  "key4": "5ow4CrPZsEsjQQeQtqZL3iErKUvC7xkokR78UbEp89hCzrRXbZg51HxrLsEraenWAX2KcmX6ZEeYuAUEKWpgya1K",
  "key5": "4K1YXLRUQjv4yXeJhVvFaeAZZ3kkyVJpMvBWFMJpWHR6Sesf6sto7ryjnMC3b9ij3F1Ni8XRAQciTLoc2WEtSsAA",
  "key6": "3r14J7M4JwddCRKf1e6RvoDpkFvbnRNZEbNbSNLD9Kz9JvTFtKrcaDywY6jYxUZLmoRvrRHhDsBumRzStqDxgHmC",
  "key7": "3XpWQQH9xxWBPznp7CqLZFuyfgkDXie8jqJyKftMHMnM6UtDSkChWdz7d5J8LpUh2hPT3YzLaK1b2a5y52CQkPWx",
  "key8": "5A5c7CsPxG8UPrj6rZ9a3ZZem3bZLrMBKGxHr94CwXKvXfvaCkBRgfuhKKF7aHkPQT1LuuV2c6F3LKQy5ZGpdKTk",
  "key9": "UcG8xo6JdwfuV8nqx5hWmx46mmSw1yJoLw2U9gcAyJvuqG3XkfDEjnBRVxhdgvar6t7BKChgvtbyF6DtkwzMsnP",
  "key10": "5GtZAhLySWcoGd5wpL2ocn1BvxRsQukbvBsKMr8sxGet3sKzPi6MtW3ZzD8Pixf7Z26shpdHsABbrKLiHqWGRU3B",
  "key11": "5741T49qSYDagMXATE5q4jirrHwgEcnEJbVJyTFe6nh5d3xKR537pxFQVbyaSyVCYRPa2LE45SBpPJJcP2htyFKj",
  "key12": "3vSpr2NW3w1RyzdLyh4JCSph6dbMp7ypsTWiTVNf5CVQkzip6Nny2ZfBS8mPnNqpT9QeLazzw8kf83N7uZ8QWcxp",
  "key13": "5J2qK9Aj76FCNrAkZ3msLDBKbrTPpJmhU3zFthar7hsYQQR7nBBU62enQaSWrBeKq3YYLomPuhPWrfwB683AabJN",
  "key14": "4bU8TP1VNMATNchWU5sSmHbyfnw6K4rNHXESgVC8niJwVoabieHSYwhY5Dg1yBiQnY9YjmKXNfU8ZaH4x2ZiUTEs",
  "key15": "5NGJBs7dXSw3GX44Z4TkVvVNrcABSJ12HbwgG8HgzALTYW38NBTBNZP6jrDKWTwpNNMsij2HxdaHPTqjxaFpwvNe",
  "key16": "2uHbXHuArjL2SHvmEzABke1FKVuGNAZrN8LziLs2DqZ85sohfG6PtTcznMEPVA4UsiRgqhn2TZ7STcX65uRrsQoW",
  "key17": "4h8NQKG7AnwYKDu7Wh6Ro4vxcQwV277TaQwztKxtty5ddcZT17ctJ4RKcEmHi2Vn353Dr4yXtVUrCJQbJDQZ9gvX",
  "key18": "4D9paHdEDaAx5ANLN2W1nh3j6N2yCWuBXJPWFmEQBs3xtbQgFNEpbFwzTwhT5bkeNJd5WrzEnHzxC34zcc34tAzk",
  "key19": "21rJZb51CbAEP2Hw4VoWMuDi2Y3ftwt8mQcSaVz9KLw86gm6xAXuM7Qn5PvNEfJTKLYBLESEt1Nh2a3Y4YKpkWdE",
  "key20": "SfB4YgkzgBq31k5rhM6d2SztsReQbS9cjiQ3qvD6x6DizSsJiimRFEUjNetaQHpF5aNFgFkck1wyVN2SnfKCT5z",
  "key21": "2pzhFAUFjqbqn7s3c1ErK2TtntEBCmitkwfu5UTbZ1vHkEpp7vST8nTvsGupAkuQuX5icSt7VwfYGAQrNpdrgaAo",
  "key22": "2MYUrSN4YaYE9p5wdZ2XE8hVbZYbr6rqdv9CxxhjH1stgUw7HS6F14rJ1pnh2tVWFgcKaqioAXxj9AmBR4kMqufC",
  "key23": "4CJaZJT9NYKj12fmqx1Xz5R5Ah9mRtD8ToruA3cWvnLe9WE1QrfGjLo1cXnJ8tU8TNu1LYozdsPhSBjqY751Rhuu",
  "key24": "3Y3gRTWVpgcNsyUFQf2WrhsFPvKvZrDeLZ4XbX7x1qth96RSrmZY1BUeKJeJyrtCtgBgvxtXPsTaNL8YUypsoyEK",
  "key25": "2ZXXgVVuxAtmhCYRoAErtVQf9Gxs7hBEWAViXycEY6opWawa6qesWFsZ6F5rWaB1SC91WJ4btv12k8QqjFQCnGSb",
  "key26": "4JNSqVCv8s5Nhq7tcUZK4LWgN1n3JEBaZ41ytRV1trYeWPQofvFBWjCtDLS3YVaPRS9JvC15HbAV7YAJKE6HdbyY",
  "key27": "4rBsZqXjHsbuqYhxxyejBdMYCdWRLHG1KVcp4ets5mtMn1Cc6Vf5EV4WsvoNDaK4jFgNUSKfaHpC4wnjCQiAgD38",
  "key28": "4ii1dA9t7gj2eKb8NbmXo3XMut5muqejxBWwmDJcwBiJmfVsrVbUDkQ7jHsNXk6dFRNzBibtUmg99Kc1vb6XMj1V",
  "key29": "3tNzWa38EwPu8NeAtSYjLyF33U4YeQVzVX4P5GDrTkc1GQgGwnH4mRDWuGaiUfvwJw8UQpEp9WHfBRc3w4wiaQnG",
  "key30": "36agJ16Mah3QZ1YQibrSfqFg69SBpgFvqKrY55q7uFuePTEkYccunV1TJZ7bdXe2mXqGmZeqgqkQqVrqkv2mYtdN"
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

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
    "o7LjgHTRhe21THhe3WVzd2R9dvpnq4qceEHBKrysRKEzLzuXhqNoYiqt7cMoJyVq3FYRv389HWC1YigQmMZh5xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3niULPt8yZ2nSR1BUvud39RGztB7a4X2hQyPhuRujnKNdfYWJvtMXEzvnEAdrbxLpU9SxkpMsi6XCvofgjViNVCk",
  "key1": "UzaemAMsLXo2Hk2Y1Pfk9KR9yotymbUGrphTZJVozLFmoWWicMFX9dKHeAEGha7L2AdMH9iSp83DvCxNjfJaHad",
  "key2": "3ngWfBevzwjjSYeWraBu1FygsHtWPzm1RJiKPhyHw3hySfTgqchWKZ4ZsCnZcgWKSWZ39skKS9XEkZQHih8K4ESq",
  "key3": "486nXhqawwYqThAXtdjk1mA6RTBVySvkufUgpyEJQqhVjLFewKTBT2r3Aodbsc4KLEfqHaoLExPFdHWvfSPURn7n",
  "key4": "5uJm26bXP2H1eswm7QLEwqDKRLVXJ53eeMG8uE3gLr2e25p5Mt4DCo6s6K4dJGsJ4EGzR79XAp4Wp4JxY752xsxT",
  "key5": "nH5whASgUpsjYrSJWAvGwdr8Wv5WSjaNQ5yR4PU6WXDkwq9MCJxZB8guCSVobDRn9AArKFZicRMGgFwwv9cZi5n",
  "key6": "2m2dPoe9hY7PB3d4BVnCrWGdBuLZAFcNS9bwAbZ2tMtPB6Vg8aYRkV2TvMLL4FkA6Y8ATGGqNcvE9H3Xo9pg6Yfh",
  "key7": "5FDkSBGFaEZnNZiGKDCDJTqS4AsfBSZjB6gGPZybm4ikoRWZrRFZFoX4FzuTcGzGXj5hdtwhesxzgvgCdh81pB1e",
  "key8": "3MdyokqhxLpVB1uc5xn2rsGhw7GwkgsZqf66AdH2Dn9nnXkNjXWy4bM7YDT3JDQHS9BohoFD6eNp3Fb8wWqKeyZD",
  "key9": "23CvWpBefhcSujqwbJU63aHhCpFXJue1436hLcPSXqM5XRv5UJTf78UAUGFsBYYbYjEnV1dKD8hNhTcYcooX1fXt",
  "key10": "dS4iYSTkYzo9W1rUe4Mnv6huokBtyAUWCKs6pLcJxx2nNRgukVmrw9de7stg1sYHjuWA9ZUjcgQ5EupoCUvsQNu",
  "key11": "3qWGaoELGPvUoXi5k1Lg8Z6uxfssWikGzxoANz7EuvBVXpKtE8b98LKUyKvwDRyzrY2AfAQaP6zFLCYQRxEDxY5s",
  "key12": "2ZeJjiGa4nFv1U5NQh5ww7UMqjXtWsYHsxrMXb6wp4cL4L3GjbtcM43AbjgXUL1EaGfPQYBoz7NhqGY6yQGhBogS",
  "key13": "4PRvvEGtNFwBaHUWUJei1FjFm9kU74tE4EQGkmnUy8wV8HMnWhm6a3ALE9qx3brRGagetvGYFMaGCNpf5bQLSzWc",
  "key14": "28xCKemkY6tuRrLYkNfMNegMNWWnoD5Jk7d5jTKkmsdKCadJzfJage2pX5mjNNoUeQeUuPJ5rDb7cESvutCoPFzn",
  "key15": "2rmwa49XBdyJyAMhgGsWctDwa6rCq53cGFdsCZKtHwWozvZLjF5yhPrN4cw9FypU8k4HjZTfHimVWqwzAmga829x",
  "key16": "5ow85SHVMJ1ergqN88EhEi8sjY7iusFjtWLrq52dhs7rr8G5cXy1RJJTDpqquSAsWyK2NnGBhaxf1HLNhdHtJSuS",
  "key17": "57WJttfdauvdLLC4ANSxEgEFGJoFG2WQ8ghJBhpkN61RfQwGMnrFHgRUR1YGDstWZ4882EAdfYjVREWUAE79BNmD",
  "key18": "4KdyiiYEAhKnEmhRmyzoHATz3BxmJV6wYY9tUGCjNonERgqQ9drk4yEcMq3m95Zo2i9pHp7U4FbsYYdJMgC7pSCM",
  "key19": "2hcuHLkGTFte1NXx7CmWVoSTuPhg3WVFnackVEexY7CN3JjSsYWHDJehH6poP336xwb5hVV8zNxFDap8wkNJVkVc",
  "key20": "2kbaEizqWm9yeJDPnqYwieA1yY2sasK3FqZGNopHWJNXGycyixnb36aosB9sbczpuqKqesDVfeTkCYgU5RAU9SDq",
  "key21": "43hDuogEn3PzdxA1yfS7XP7ySp6xzXJ7bAxrdkbiVP6cXRymUdNkzWnDzSVMrGoe8U87dqSuRL5MWMPm4dBuX1uR",
  "key22": "2N5QuGXqNbaQRsBpsAaX7x7SGQTFumnLm8gasLHUvd1PhuP6HHd4NuzvCiStE8upxqiqLo2wnt7JuPgcuyNznoE4",
  "key23": "5eq4T37r11w8D1ekKPkaap5ofTFb6kPS9Ys1NE8PRxESQm5Grqt96Z8oY1iAkTyqu6pKu3TyqS9JfPx42k2xtWez",
  "key24": "5cX2kDSpYV5ecDk7HyX5kBttg1hc3tmnCkwRkwC4jJhg6GX6dS7ttiFiCZsTbMyVJEycVHx3ms5qXe3ErbjtgY4o",
  "key25": "5fY5F6SyG3T7thQkK9oDN26rq1jxMsaKmiR5EBMFMynPDuvBAT37LY48Y8hZq6qPLcqHk2DiVTGpWRntoqEP4iiM",
  "key26": "5q54UbzUK7LkBFDSBRvnEpnoUosE3xwRwfwCL9xzegUTKAMMyXhrbE8oxN34nZGCjYTtwYEJUXWrZieKXErvJvcH"
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

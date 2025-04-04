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
    "3BP1j4twtCX2mgvQTJdCXdK3xQcNDstNyTRd6qDyg49ftDPtRhQcaUWVRx4gqrUg24o15L9VJzH1MkNJVGnGxJrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fx3UH3jfGcUHZdgYuyKbF2MbrpgnmYZ2LUth1chadZtbbB6ynwvwE7jB2YSjhwhYG4PJeFs49uKcxEm2obnTGjE",
  "key1": "3RGd4QVbE7GwYQP9kfyQjUQTxajxvV2bbvqwKmFTTuqC46avqVvM1bhobmgg2JB1WuTmGpagwrHCVY7FqC9AqVbR",
  "key2": "5fNu8GqAsqKGNJ9ADuFNukEJUs4kT4weYwyNeURc3jVgihWBnrAWwbooeBTRHjTFW9Mhpdw2Z2peZb83Mh5r9gL3",
  "key3": "YQRVEPP7nBjMAJwmmVK4WcGf17qNd86Xb7DUNLmmQf8869gEjLzim5E3BkCg3EzNJfcD6iXYKMijmquDD5rPn6L",
  "key4": "3bdDoyD7CCAqRyY6dFo3fnme9Lq4gjLmzHMpnUnh6veyrEA261B7RpyxHyzS5kwb7tNbaeAwcd9XLEHYtym4FC6k",
  "key5": "2JbKny1xAMe8dm4dkfFa3haou2u9cLQRyL7RpsyzoSBd6TB9mG8jSKJJXQSw8LFDvV3aUELaNNRiqeFtAd6xeGMe",
  "key6": "b6ugUdvWNqaD8hYE4RTB5j8jdKbCxsQadWwH7EizWG8cUkB6BTLnE8F2m63RuY9LHhXS7wqg1odvvKB5giatBhG",
  "key7": "4Ed8c1noP8z2p5KfumCGFjYQJNpC98ak9qyhVkakbpYWvkoBAp6creGJfipxiL9GZJUKbbyggUAiycj9p1LTJ6Mf",
  "key8": "2YEnFG1ZynCWwkMPdJ19uqhr3rPxCvZRC1ihF13PT9zNRPuEmu7FZYQszzas1d1Mq9BjyZmSELdFnTFqeYY5CYeM",
  "key9": "5n7C4CmvMrTNyViwS3pumVHct4FcDoBTEKtfLiJBy1pxAo9gdHrMbC7kagj2W33ELR2T4wbbkp8PcCoNRiNZJ8Bf",
  "key10": "3bcGgMcSzQxbD7BFW6yYEBg6PT2JFo7oGxkvPPHdxaii4YWH3Lc37Pr6S19rLEqHMo7yyn4Bt1LvNpNCcYrJksg",
  "key11": "86ZgZKNzShyTa26Wem6SH31SF9ri2uWb9aZQ5WtWY1mLGgAhBsAyq4R8nkhabBTa5ix56HCUafd5jqbGVhiTVZs",
  "key12": "d7ageFXArQjC7irscjkPp8U8EsVmfvo8wjqpwdtJeNdiju3RDTsGzKXHZ6VeVQgYHhfD9SJPsMbf7m1mwsPZnFN",
  "key13": "3jaCs8gjFcnfY6tRpQcf7ibZTM5HKGegNcHCjryDwa9qMPcdwFkwcCARi59MavwDxZBqtMGKfFR9Ft5pywR6Y63s",
  "key14": "4z4bsZfHys94CP7RpPHnDCmh4cBHDkrYVuuqBTR9YScZVgk6fd5peqW7ntJyvqGgTUWcys3ekwq2r6agvpsWMpsF",
  "key15": "4x6aQrDHG9Kkp29UfPX3hnC4vXi1EZySyN5EkchJFms4dfgqVSjyCXdYBHtj6ZLyDNxtj7SAwZKB2Sv4CKYVmKqZ",
  "key16": "2kmL77NrhcLPxj5pkz5VGSHMzrVcmw1Ub6nZo6a9GDQRqN9yZVVkW6C6DjUCrBfwyZnGQySW526h9WKvyhqAzazj",
  "key17": "4LyYwYL99VayKiVdnkDbiVUgvDiJxbWb9dqBB3ejCZHkbCtSdfySyR34BpJX9HbUNL71kVZN8BGEHc5JF9MuZEbe",
  "key18": "5pmmpuGPvqNjD25wLBA72fNRSTwkoUwZGuMdoePSHBviSNwmnkQFUH48dhn1U65r5P4eF7z3kkjGCtiMyyhYrhfJ",
  "key19": "582tvk6QYZoL511pAxqRJtJJXbmjK6z5CQxAnnnpXWJ6QHuN1CcawPn1ZSJNZ1d3pMpUKpzg5rUMbxKqxb9DBTpc",
  "key20": "2S5vNT5cLkMsyGZgEPVWdUxPLASdRZrwtgdQti2CVcYgFdSxgxXvkcFuJGvnde3xVfCqFqVTHG1KnV9vUL2HTpeC",
  "key21": "2zMAVACpsxWYGBAuw8ypFxh2e3rui5AsawM7cBjojAWwF41LCugAoTTheZL94ygU2d5jPmnMEwEJmZeHMf37V68i",
  "key22": "48Ee2RoaiK5ftEyLw7k3hZhWG6fauMaVPgMsLDgTWCtzJCQXzLjzPNcbXbeCgcUqSimtMZkrXFpuhDmezMjX2Kmg",
  "key23": "9varsE7eDDnNQkqHnbczEq56FpUDWav7vizecZahSnJo3pjoE7Wo1hyh4Gkjd8QEoZZyxNj3btyNacNXNMaGEKA",
  "key24": "wCjFzLmzXET6yxm3C8cH7Ls7Fo3SDCPTd9kqQtVdqktMHSA4tGabot4GfTXyE8Zy4YFyerrRkVyPezUGpqhpP3q",
  "key25": "2egWiRSvkwUqXD4Znprte4xNi84BuwK7aXQPFoM8aGPdgmPhYVHYZsLYTnPRfK2yADAJdAjNZe2icLsscLjZVHtr",
  "key26": "4sDGetPuqEQrEVnJWzs7wna9NgztmhSaCyYBm1A2ZcNBAb5tzsrHUhaYw9naCZa9uJyxfRCWNdgfFAFx2J7U2vMa",
  "key27": "62Rp2oFToJTYbVg6WhqKTGgp4X2jYKikf33QCmhBmbipV8WVFAUyvnwgNy4ipFXDCoCfsAD9nWXWGF5MwhyscmKL",
  "key28": "38hdmqcNj2CaV6kGPHk4xeyBQiARN1XD9gP1fdiquU4UHqjQZ8jCnZNWKJckP4FGTPpP2eroDpgmuq4Eco4myEy8",
  "key29": "49EvxFuFyu3QSGAWENjLeo73u3hqh6h1roouViQgren9UGw79u6F4kEPo96vNHfVyJmhHm9FEb3Pn1j4J3rkr3wV",
  "key30": "27iXF3j7j3rNYiqqskrvGJt8bqFY6ryG97jUhqEDf4UxZ4LxuanCXw3gxLiHYFV2DnncvmEAw4UBVNMqzmUpSBfv",
  "key31": "5nbUtHKbF8H6XwC73xLN7LiCHbJoKsH93Vv4KcsEdENUdT8BFnQAKMjqK1WsS9JZi1mzfAH4CE9SKRGLwj8LxXn7",
  "key32": "67ET4tDxTjWVUp3LTm3g3ZM53BXktgLeezrdbYW95qbPLaqrfGpBvPvgVGxa2NXUMYLhspde3Rv6HQ6cQ9jidujv"
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

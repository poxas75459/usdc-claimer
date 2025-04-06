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
    "LzzqRN2NmFcNn7TchxZtrqbwMg4HnCmYXX9p1tXh9QW4srarcmZhe8Pg5hzmqhHPdFWDdeJZPtKLiaxooYbEWLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKGKTox4qWh5PBKAJRxWTz3YV1fcGqKt3oohjMK1CwHadPyqezEKxpii3XUH9gKum56ppwuD1gT5WW1LDonGDU1",
  "key1": "63j2iU7Kz7Hp4yL3ujHyqLBD7UxisZYyAqbLv6YJryS6QanU3xhNeFzGxKdSxwuxvDio3fHHLY3KT6Af8qLgebY4",
  "key2": "2PzwwxjCbKphXq8a6LKfN4jjUTkj4Sm98quCBC3wpK9FTWvPhnt8j7fNsM5c5N3kkkMWrM1Aqp26TaJhsraCqQm",
  "key3": "4wCi35dcQ1Cg65eqnJgNAyFCY7ZeL8KNxEEydh6Sp91ASoxYGs1zRc8HSj2MGm1HNoSGYdRrp9qV5iLMojY24uxY",
  "key4": "zC2GinA4ZJLy3BKX4h43XhzYLVHmYmpUcGnMC2mvt2gzebqrqqNaw7X17Br1NovLnvx37pT2BEqRcH6kQ8VMfth",
  "key5": "3vZFhNdKXFnb8a44QAfC8NZCGeddHwc64WDXcGDZv7vqAvfWpX1qqPSe3bvArmEHQyskQ2gdjhd5QpkAMrkYepR2",
  "key6": "63gp2K3aTkQvBhxsmeyhT3NArdaqo4CEG4q7HJTCNk8udoNdyNNv4C3gUDwmosRVs2gF41UmfguCbVKLpFDYaRqg",
  "key7": "55YSNRsge6HBCcTLwQDWak88f4B5USZ9yW1ZpueseuXwRTkvLEeS56MBwgPxUuFFZn7DpV3KQpVArxigbACMmQ5N",
  "key8": "EDTfkpNP17ES19CeoERDaN5J7KHpqftYX5Ykxc46NwiNHAassJGwW6g1t6oc9Zd2ZrRN3r1b3kAmXZLWm828Zam",
  "key9": "459e1ssCZj1N8AFaBhh7oqirN9EH4VP8ETsJunVpCiGBxyCU7nQmXRMgkshnKZuRNVJ9sj2iefyArMbnB87VTFF8",
  "key10": "3PbekYg2B7N2jQEVjDSYVNGVe4diUVoyR2zSG8gojox5Mc8uxHLtudKVVxhkboHj7TP85b4iCtrmYLyyPLi7V2Ry",
  "key11": "8QJU3gdBbHyokkSXYrJPnCruQnAJqtHidRZmyrVH1GLb9peReSuMcAHDzXQGCXAyqzznbzSzav3bgriDsuJbABZ",
  "key12": "3UESyca3AaYvRjbJQqJ38D8rxFjYwaKcq8dvt2PDp8qudFM6eyXLGCHK717iVmypEnTpgQAf234qBdawK6hQeY9d",
  "key13": "5gYCxkfLmXMwjNvaAVYpJx6KNFX1vaZqf1xv29h8J2t64U84m182nYCJUohgGwq4XrFvfDxZs79BM6BGDpBS33VQ",
  "key14": "2BAT1sQcNTrHLGg58unqjpTZ4FTgsZc9nxiboriB9NsQ6qMeZTNpUfsL7CvtioFUqp21cCbXWcptLudGv3ZBaWCJ",
  "key15": "5542Y8b1xv4EXw7GuhTpXoXz3Gex9sCxoygT5SwsMEDMG6pzbBHsVcW7KwXGzN1gnwRDoQmni6i2uFG9xAVSbD2J",
  "key16": "3ukLPfk6JDEmsWNZDwCd38bc3rYK8ij6nd4DWhMZsg8phaGXDQrB1hP87VKaB9rQCWBkxYkJi396CD8JTyyxNEbC",
  "key17": "HrZ1oDnK32ibQJPBN7VH9mfkDe7xCMTntTxxRpUJFrSwqh7PYZBfZQwzJcTR39LyWNCQTpErjAh1AbCgiuJy1tY",
  "key18": "5df1eGN9DyYWSGsD25Jt7eZaw9AB9tTNSC63qXN24hCxHv4LxPw6FQwyfLYWRPrxYxz2FipRiiejohQ1P2QVvxiH",
  "key19": "5XbCN4WTZWycc3XEd2GFJ5uXm9JTh6FkENMRpxjW4c6hnd2rVKzWB7gUgykTV2FYvZ5VbXc5HsgdEbAfUHdDNwqf",
  "key20": "k64J7vFoxPNMwHPwAyWmst9ZLtQzhDDkj6D1yvXWe6PNT6AwdxtRqkheAAM3pJ7ZaEdzAC7Pz5GDDqkuUv9dmMa",
  "key21": "271BrN7tphxiWT8u9xjCNywZEoricpGCQPcVhS3L6PRsJQgWu7DuSgwUtjwvYrFeXCuiGRD4jjqPjnB56eCHEGQr",
  "key22": "62NnH3jGRPj83nfhkzw34MsuGEN9dz4rYQ9iQKt9CAfgzrZpfXPS2dVPjyBs5idT1oi6ffL8wjH64JVi1qVasG7b",
  "key23": "2Byk8oN58czDLjmAyEYzoEjmrosCVfXzLSwFGTqZTDotLGkDHTC4nPMJf2pvcie6eAUHQTfzUwuTEugkQ2x7eXaX",
  "key24": "2ZWZrXYqEBR2zYf9UjXc3k5541tzBcZRgXkeb97tzu23EfEngeETyMY3YREGxMRX4CPokPK61sMUmvAwgVFyi2K2",
  "key25": "677E3Joa8aa3dHDRi9KsWDPbnicpgE2WaLmiRJ9TN61Vod4prfNvR24mYNHnB9sNUKpsgXHiw2Am8QYKsQtdEgi",
  "key26": "ZmC7EQ1SFLbT8k8B7W6CvvCAe82GFgkD3KUvCVGRNFsjGZRK5hmaFWN5zZfw6CaSkubUmXeNNFNmVuf8PzqzvGb",
  "key27": "3WVo1ogF6TDGhuHKhF2tJbMQbEX7hScqXtVt3ay6Va4D5c8EsgjtPumGutZL761x8LRn58yAPYKJXJ6mfxR2W5eU",
  "key28": "5cwVsQhMMHQm6ACHYD8HCyo7TrEnK1QMtmiomqJ3HKDzwx72xVqGpLBSTEiLpPWhEAKpFnJof3aGvdiN4sSfncC3",
  "key29": "58MRvqz6KxM8sWgtc46TCdEp7i8WmDLJBsJ7sSA6hrKqQLkgR8QaTYZC4JKgtBkLNBCTE5Fb7Nfuiq7pAxPN31R2",
  "key30": "2oLpXzUEVsYBm9wT5BjoaPgshuEQLpTnRyG97xMFg5d4Vq3cnxPoKhzZWTS2Mf9khMqU7SarMNwN7iNYPvvWSHru",
  "key31": "5sAEgVUTwKMo2YqdU1eTwNz1uwJeaFzHHMUBcCG8Re5o4EUrNpkgKs9RkAhZDeRsB8gqRJSR5zFh3CU4LvkN1UyF",
  "key32": "2WC4espSfbaJqw1bxLC65fDWjPnhsi3Gzd5uokatL5xMoE8L2PM5ApNyFqu9WpSNpCQ4LqH8zsuh6C6SZNrLiMAh",
  "key33": "fuU4LW9TM5umx16EiVztfAWVMZXySqghyogME2hwSy5LZvSrk9zEB2SAbxo1vbitaTA8Md62sh3LgZ2nwMCKPkn",
  "key34": "5NfVjDRPSKQCpR6GDTVkZDZnSn2VRGPvohUGBCXrGts9Z4EEuFUDnaJuWKZ7QdY4a1do6tiZQ3xiecatigiGXeSx",
  "key35": "3o7kPuUVU52ZXazYk7TzHvktKPQkCkAVXJpPTuBvHNLadpLxqEboAAfUAgZ41EKCLNaRcbAwy5axsuB5m1eUdUYP",
  "key36": "Mz5PWAjWBeZEPvGit4cN1MiB6BwkxTkFTsUFpJFKfDZi59ABDYDH5zshDdnGVXUsKuLWoJ6dnbLuLWLoQnNzmox",
  "key37": "4sSZLrFgk4brDsAd6M4kNiAqTX77UaP2932JCEG6EaAe5C5LdCP7NnqzdRDpRfBPvc6YVDrYzP68WewTEN1fsXni",
  "key38": "37rn5WwDHXMJPQVKEF7oHkjyKJKsuc8U5QNiXZjv8js4pa7AHq7EAvNrmUmJFEd8wptsdnJGZBTqR5v4gFJFp5yS",
  "key39": "3hywe1VVcudYJU7akX8fsahWA3GpsmwK1W27ycrBZyhwGYoGJAzefF25atzanKqdxg2tLHxQqRufiB9AWtghzFY2",
  "key40": "VGqVmfFQydmYobte7ErhLrezmPT9gozY5AmPs1CBUjAnfT68C4KgfrJQb3E8wF3NeBAs5zJB3YzHU3up9ysW3oN",
  "key41": "3NRaQWVqgQsdDMqfbo8wvGf4PoemsRRQ3whKdkQhrzHx2CKUBCGvGr7m7yQeUGG76bfHagBe3jHpeK6TJzC2RjM7",
  "key42": "2fGUAABaPKfGVnxvyPcZWANSUgZ6L2ubP1arvWtQPvaT5DgAZqBrPWKyakKF9bcqEdhJxJJqehQsYSeBAp6JqT2g",
  "key43": "2rLWgZHkR99Q3gz5vSDBKaNfLBH7ZgWkQL61mjZpuLfaeU1QQ1KT8ceKdQLFFMLKeuYiYdgSXj4U9KKF9jVUst6G"
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

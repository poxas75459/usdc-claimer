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
    "4PsSmRt8ybuo6RFPkV8W7t7kCtnLidHgBGpfEeMvLkCnxCv6dKV5ijXMGcgL2vJr8vfzeFonbVuqBqx1q4SuepoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyriznCFsZ8BZWtAmPVWcDwBYnJ7bB5X7T3iw3EaJTrQaoT5c78MKG2sKxjL5oqtTQ7sW6wqWwKNadxH18mTTUd",
  "key1": "26t6MV9zTDedky1fsczXXQ8jnH4ZUWvvWDqwaKbzwbBPKZyjR9YnaaZQLTEEoqmyi5L6B2UWjXtqQoHDhnLpEKLG",
  "key2": "cvML4gY5YTNH89gmvS6WvAN44HHQhC4mB5GhXgPKT2oLj1omGRpXxgXbXwMdt5Qs9ssmNg8PJURYuBZRqBRnkXt",
  "key3": "5BYnHZNkNB1b88HkmAPus1GYtCmAujBgtxjTjFF3qee268tPoinJVKnBb5Ekd3QW61d3xAHzwcNejo4DcLVMb9mP",
  "key4": "qcUU324q73fN4nqTfVu3nV7am4UmToGNQ1PN8ChJs92Pi6nrGFnkcvSBhh3SMfeRswv7mSqkwnD9LV5j7fLfY5P",
  "key5": "2gchTrPHCRNRwsDWUY4YdkJc5b7dRvYk3DU9857CUBSBm8Mz65MgbCTMsyN2mGxAVB6kUruQN49YFv5ujtCWbJva",
  "key6": "5k8nzECHUrWa3TuUXqxLYZLSqtdzbeMErguiWXp7roSaZqZdt7ZUVz6GNhwqS7SrxMjiS4Wvavoq315TiQuKTCFb",
  "key7": "2RAPc1AcxJY5apC2caAa1XhX3dLgJX2Hbu5fEVyKi9MgFvhUahB5HoyKzeJ6pKUgREkoonQh7hzqM2bqGYnuiEeU",
  "key8": "5QSgpPHcfvzs951X8a54uYZKrqewUoy3nWmioRZ7tK2B8e7EKYFgmgCNJWqZ6aNL8KrvVeXgPZGveUtj4AStnFeL",
  "key9": "3X2WqWdhiCb8YpCX7d8cf4pEsDQNyTCCYvicnrtKjGAGbo34Sse1JiMMJkEFS4Q7X6GR36Xod1Dw3SAYbxUgeaxL",
  "key10": "q72dbz2Vrtamg5YxrNivQmo5LkfzcUqPqKgy3WuTmCToBSJALQAC9Dm75UFkSMeHtqEBvx1gsFsbGWU2CFbqgP7",
  "key11": "4EJ3khwu1VVreYNzptRUxvCNVLTEC6Mso45qPBoL2mcTp29B7dEuYVbyyqwFgbSRGyNbEZqT5cVjRRbaBHZBPmEy",
  "key12": "23BsSVQWN7sZxX2144vmbNKKYHptuDaj5xTzL7pdiuyDNARdDK9prU5u8WuYWZkrq3imh8Qmpz7A24VRbvuahCen",
  "key13": "4aFTjGgSKTf9NetfehXtgAQJVtpcWpLJJmmaHzXFpJiQ38sipbUzBHsLmCz5yn2LyuzEWkhmrGswjJ684p8kFNBp",
  "key14": "3wZeiFcstSMqMa6M3WuawfefkpCaGyFWf8Byd7ZvkUNuWZEAPdFPzYoHZW2TLBCFnRnBNF9GogMVMwZxbdPBMmqi",
  "key15": "3nKDGt24HXhKXw9X5VdNr9v9x4uZRdZQLcbVoY2VhpHGU3aumhaoDRdv7vnu1rxwix9AfsSr1KMsXXVsHnjL9kMw",
  "key16": "5D7WC8e4TjVEM8e4vtE2pgkTfkqeuKMDU7VWebs7TCYBgSfWJ4i1gmDZ9rEM8Q5KXkZsAkB9M6F8a7jMQ3c8BaPa",
  "key17": "3dHxfHoVvw9EUHT9SGpvcjLs1YqUHkxFbK79yEW1HD4EFZZLZACVhESTTDK5yEh75ugRMy5MdYsGHNhPdDn4KwA8",
  "key18": "278iYY3APVaJRqg9kZaYSxW4MUVMT8VnHgjVvebnCrU4ty3EZNzRMfNpV1pmGV4ZWKTwgkndQcz4SvBhfH6rmKXe",
  "key19": "5HCTVx8aB8CMAX281jWfjupb84P525eEkd71qTdL5m3ZmV7wF9BM5T4keRhEa9oqT3udZdLC29rDGJ8v86PQ8KGW",
  "key20": "5KNwfRCEyLfNGLkeVkGvU63eTPDGLs8BApZS6KTpBFp9mYt9CYyB6eH5LZXpiRaQBUdZu8pny1R6RYoPJKQPTbkD",
  "key21": "3YZYtXcX2inVAusgoyrVgMRALp2VhcqbusFXsAt1DK47eA1xQKFJuJ4pLMHsP4DT76TJMJSQJ9SmwZCNZvx5PJii",
  "key22": "4uom94ya2W27HCWWWvBb2rajUtstbBmCzreM96WKYssBnfSVxyboYu8kK1hbruYb2BrXwV5iPGZJS5tsK3uSQPMo",
  "key23": "4ZPLYD3CuDfYPn6pv7oBGdcQY5fYPjpW21aqcNfBCXKcQxQJjLXTx1W2Szj8oa3FXAhutcJvidxbCPmQzTqBZixo",
  "key24": "3ATekHEtW2kBdPakBJ4ZMztWXQ8dE1A2ZWcWgDhkar4XmMiZQkDgLsc9QENKCtYq7NTCz74Mr53qhEYqrNsMQdhK",
  "key25": "52ZxQawGLcL3N82Xa3nArZ5TJCxz17GjVgjTUouBzPAC5d1142sxqk58MfzcSBN1aZC8SCGLxaXCyNAVRMZcxjQm",
  "key26": "38xdbeXMAHJvQq3yzViXg92JZPmKsB39uhHxL1gDhrj1mQVBNHLTSsaMZiNbFXi2bs8TcKqyCXvjMhYgAZgC3BzK",
  "key27": "2NYypN8aR97weixWmzKAJ1dGYHvWJWzz3YJHL6SUqvmbRbeRm46iihNQBMSFhM4iNuXSiQdLHXuhZMH4gFux6PBz",
  "key28": "2dr4Rmwc6f6wrtNhFiYDCWENKBhr7Hcdm5VuumwYGLwARQXXQmW98xzfoNsWZz5TxAT9BJTBSKpTTyHFK2B1uyto",
  "key29": "4x1m7CxfghZwy8uau91U5UjrEWZSKdfPX95JbaiPbMBguGbW6fWX43jbJCJH1px76CdpapkfjbrCGDWm9UGBUU39",
  "key30": "5wnNiveDJavWzyvPuvXRBrkaovkXfv3AHtim5G8fpBAt44KTHwsEe8VgXnLfBkd717L6Lc4y4cxua5Nu7qxktQtK",
  "key31": "4C45VZuqcjiPPKp5NFMVbF3x3qgXKc5efa1G2Szvvv4uzPWomock15rcRtTnqNbiNuF5Wny9wz28Sii3apQzHtub",
  "key32": "5VVt63SuTu6ScxW1YZ4La9x4V6rzkaTXzmNToo42ibw2JViSbU6jdNapMwmRGWBNFz9sH8K7bbDHVvxJiYaZcznw",
  "key33": "4JpvLyngrim3wyHe5J1PRPXrCkKL93FPth9Wtro7GRRq3HrjiToJwuJ43WMPhgNVmXJwSqjgnAtMKWbVXxTdUKGJ",
  "key34": "26xGVaScc2QyF546xpJ7YaVRFVNYzV4PMbzUNvpujZCLhEiwqxLWw4rUf1C15DFTY1rYQA6oWDP5oJ3mFytRhd7w",
  "key35": "2MkQdBJrLFkzaWBzykCoHze24f3vF3JKk8LjMpuHmoiwLGrvKmGGcCUjkVkxyZmztAYkWsKNzmuSHm7Fuwu7H4AU",
  "key36": "4m1Ndhq7Qqi9DmQhWMafNDJjKZ4v7uy7wRMeBEmA6TsdRndN89RVg78X9Q8v6yE37pCk1ZpqgMYmK7oyQ2h6LNgi",
  "key37": "3acgTQwkBtHDxdcn27Aq7LEzxDhGo5rZyxTk6MxAkVSvrmsxBbeKLDrH9zKWijeSXAwvgoMrU1q34bNxbpBLVSy8",
  "key38": "2eBM8mUNdZFdQZf38Bps8aqY1DDMxY9ZFNwQu33WVFdC6v28bK8GzdzYk4pvuvnATmjtgwqjv5X264f5i9XMXJ2E",
  "key39": "5UiMEq9v5D2uN9jSVgv1PriLu2fvQSj1BgyBwzvADQyz6bMmzBWdfSe9rRzavRiUHeiBq8vEcVY91vu8rzPin8w8",
  "key40": "3XBdhnG3h7EAB38QTwDfR82s8QnwQ67Fmygstvkx5B5rg8qHTwAQd34SrneBKGyZNC4mTSgJzacD614bML6qPSin",
  "key41": "5KB41vrAqbYDyqyk7XLBDfbngeREp45YCavHLupjQKhKNBtAFi5B6Sr8ydcZqSqZQt4VFbqaftJFWmESaBLMsXhK",
  "key42": "3jxoQpu4Zeb45cexFCAnDB2EgaGzVeQGDPDknmcYevuCEVXgV2ZEQYy3ZZ861DgPbvkCqpopiiP9s1n1FksqQgo1"
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

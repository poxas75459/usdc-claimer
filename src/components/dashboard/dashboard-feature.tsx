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
    "34Ltuu4Fs96379LrXrdTsTSqiJyPX4rnaHxBAVdkxYUwsf52dcsR2Wd5zJ3p6WGh6VbHWYDh3z5XA9TPAL81K6iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuEE7sS4hhLjmebXf7mkribNwKoFpUWcEBZxHnAyJv4Knq68hu29KA3oDD8XjkZWLJZubVeXzm9Zv8v2vDkgHLV",
  "key1": "3gkfue6zt5Zrp5ZxztLETPrJsDjY1989PHMtMmdEiUebtLLS1TvzUGfSG7k55vEqVF17pj8xwrXeup3orKjN3kB9",
  "key2": "4BDTBRhp2o7jV3WuUnmstFmMfpY28BQwZwaL5mxD4JTitbPRfnAFWUDUvW1cTC2NzzyyCBfDuXM97khDHRBB1jbG",
  "key3": "2eVdXRr6X3isjHSNqubFPJGPUmrJnvDuVWieiyMcZ6pvqAkduZmSqSZD3cNKZBty6GPtv3mT6mh5e3sBorzYCUhd",
  "key4": "5msaXNSbjY6tGSE6CQJL1fthfxHeJTrHGtqeq83dpcnCyK7Fn3iFjuA6SrBHiGuaEJKF98ibChFAWa2T3rFAE4So",
  "key5": "2rKfq33iogJ9dYWZGwm3hFYoDueSdvwzra5m6E15qNr1ahAxMK8fJtJiWRX7825vXJjYgUTtQtdhazDuRPpzM8yZ",
  "key6": "2tnGZFnJxKQQRiXQjV6EUtv8qWgrDWYqGSuZK1NXCQvnavVgYLkoEkTj8qqq3LAH4begJm3bcVKpoz2nBB11XaMC",
  "key7": "4QKkwfkBmH59TH3wrspMnS8rPzntxtjA7sVCtpaqCigT2FkEh1DubYSYLyn6mZcviFUUxhCFScJQXx1MG2sTDVn4",
  "key8": "GNKjUV2Zt4cysbFpLY8jw4GgG3G99PjiBCWQHpiKDrG4Ugtc5Lt6Wv64G7bKCKkvpXXcL8wCBGYdRZdNYLuEko2",
  "key9": "sKc7UhXjjrS2yvKTu1NuLfSFWgpXnFuBSuhP7XMBox15gt4f2ehYdhoaAXxRKfccQVmegsCZ8hrG9XUYihg1ZgH",
  "key10": "3GP5FSSR8VPTMTVVPzGAsSr1y8xUFUBSTQKuYoK1RScXwjKT2bgRoKMox7y5KrxXAJZJoasUZ22NcszmKAWiBNq7",
  "key11": "jRJrPUpbFubN5wmxi9D6QjubES6MBNUxWhV7btvLJStAmKehmY23HbpkyCprE5V2VqKAKG77vSPmYmrw2oYoDBM",
  "key12": "4qSeHc9YEwjKky58NFEi6A19Y35kZ4YYavSYgNXiwAw54BbNVm3ktwFQGZj17PP7KYs85P9RU6swFn8BaczqAxKU",
  "key13": "2hu7JCdFbufHMkjRjJFARPLS1cXUv8sYExoo39Hg2aUeEiPjdQTvRZTyhXXRyWLKdRE2M4BNJqSZkzZUJCNJ9Xmm",
  "key14": "5EBxbCMjaxZG926hShpehRDijwS4DhWd2hNLrKqJrtPfzYcdTFhu6PKJfftXwysxTm19mPJyMmToc7LaHZpwP5uD",
  "key15": "534fwsTNuivpUeehFDdZWU5Y4vsVkJiwWQ4DcxPv3wBy59USidPSzXiNBxaubeytzCaDpiCzKLs68yUfibLVj5uG",
  "key16": "39tetQ4d5w3V7J3qwA1WYYyRK31xEPrqQBK3chpbqTvSyP8wG9AGX4BZKcscRoMpniJzSq6AMXiAvskYhaHqxyJS",
  "key17": "3XJcMoNkQyvmPs5RJ7PooDhfozHKpsKQ5ivC3QcPZ3gJz2s6Sz7iZaBRWD8GTC8a1gqa6wSTTp8Wm61qFwmaxdia",
  "key18": "5gpqy4vgFGnV26K5t4ZetDLNVsLJ6uEa3QbmbRrhYKwQnAw7rwFK9dSE5x4BKrQYXjkWvGSt1ztmbakrgu2xgp6g",
  "key19": "ty84SCvThV5YDRxa1gMbVrLJFyFoWZNrwoJuTnsqiCiQCxhqnWynEoMbQyTS5M93RHEtQMqsnLrKyZ1vBvTQETZ",
  "key20": "bz6LpMH8YCvivcWg9XJpyDwc8xJdJLSGvqA7NCL523oQ77QBHRFjqsJSKcw81qUdfPC9oQ44J3HFc8BFxEvZYpn",
  "key21": "2d1WSzAK12PCHJWfYWpFENgxRF4SCcWKeesSLTuJ5u8G8oS6gAqMZqPCA374cDWHZiMk1QaMQAscXYiB1uyNo4Br",
  "key22": "3kXFhg4reLUUqaVuZmv7KjGgb7GWm3JAPkDeEuvM9NzgazkWDoG33PqWbriq8Efjj4FxxzRGxKoU8seyQWPX89hv",
  "key23": "2WLaKcNBWedVka5MrQ3EbzXhKEfrXKvGqiNbCG78zsFxQXmzYFLBurK5KescuDbYTJrsvnhXQJXpouhJ1S4zj757",
  "key24": "5nDETHiBJQnSFAighHG5wkDwJf2T4WmYzYsgz1zU3CyGyqEaJ4QmEbjU5uCfhEEj5jUP3Toy9GLVpghKZhFXnakR",
  "key25": "35WUwoJsUdifu9h6uT4mSnFdYR9S3KR2YSxQ61P83hMQkaSXR1ZHDMiDVpB1i14wUwRJHJZ4dhYh5VAZVAZVexHn",
  "key26": "59oKp6F9yQsLx91jQXrFNnFPJENVRbCHBExqueBuKu4fdWsT3xAimKD8naBfeVnTMZ5JAa5ZKHGsehyBTKP45qDN",
  "key27": "3CuPvgV4zdFfhB64mnYecxFpEWE9osFduKFPQSbDNj41UP418SMnWBZe2XFHeMFGFrYCBeLJYDHBac43nWGufMps"
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

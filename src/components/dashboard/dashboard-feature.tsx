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
    "4HwvgGf6BxprTkbPkErUaX7XFkyfxP9wWKvER5y5YzdT8ozS2STbzLwpHLjf8nFHwgbgjeipP69EX1uk3Uf98DpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyreaDWb6sw5o5WRrWYK2iiiM2C86QAN3r8N82cMq6BVZBcSVBhVC6zrymLSrzi2kmYHhX8y539NU2KKaGBgkbH",
  "key1": "5xeebYAkrY1f8MCLssnAs1swmGojabY3wmzNPaKKJDympzajcNVLxF6njP49xw8ANPwn7YHDhxcLzJkoCb2B2kiz",
  "key2": "54AyJG356GGUYjL8X2xqJBEiZpiPnZBgp42iA2KRj8AB5CbemzJqYE82mHppcD8jqXmpHFwaJX4QxL4UaU1j4oLk",
  "key3": "3bdXmsWjWByMUSv7gAPxw8qwpc9bzu4gqcYJPUfjV1RBfc2pgE5T8ZwL9R7Up8RUfaEckq1E1iMovRNbjkkW2kMS",
  "key4": "TcJ7quRfPVeYcMfqX4ZutE82wLDkKwpi1mfmfMKGEE45uRJ4e4Tj4mcCySMEJCcMewGprzHmoMXMyPSe898s31N",
  "key5": "31DbMwPxGwQhvygmb2bhVCrcbHZppE6AYPk9Xfr17YCVYWm8b34YRVUXvbdnAythKGRMwsbCETzc25DBv7Qbvjze",
  "key6": "29SUsvwqffsVbQFdD1igyuE2py4KNZSNyz1fHfQtyptQiR6o8Da1HtrVz4detojLVvFXFcw2oS6LbQotw9vTagZq",
  "key7": "2vXJyMNbpnaTyvVjMiYrK1nReGpQxkKwvwvubyoHVESoTYEUsuoGNvbkfzNwrZEwkuzcMtiusmt3k5o4G8PavRt7",
  "key8": "481fvpU25LXnnTvbYD2jvqiXCbUhALQLKzK4JZ2WPjeduDp6t3yj1YPRhw7czGVzaH3WveMbkPXjeNBJXMrmLJq2",
  "key9": "QeyaxttLcPTMG7uLYvmCoS4zuFr2qwaBL9HWjApcRirKqepeTGyS7zRGdpDGRycsC5AqpntpuW4nC4JC8ZVMrP4",
  "key10": "64vMiFXv1HtcApBau1k44Nivqw2UnYht75xeFWajib7tA1Bjt4WJHpSaZivAng9b34BSUfUkksyZYk9uMVUWMXeT",
  "key11": "5V2zT5k5GqREh12eLMPSCKhe6m4wEcDkirkpH4upiSqBw8sr9TwqcYCCDV4iErDEqwBq4x5AXCPLfbC3F26gH4bV",
  "key12": "3i2NafniExhRxH3b2SKNZ529p6Jy4prvnt5ErzABbrW7hg8Szc82vHi9t4pdGWpZdELJ24hmDZYkn6z6YVocAboR",
  "key13": "x7FzVkGVwqFj5JZNJ1ERxDbAcJ3s3tYzHtjZ3y8iNPfuWmTAeKvvU9whRwuJrwy3LmPQP9HUzCkeaGM774iodYW",
  "key14": "55PE5kZRDf1bAKUVu6ndqLTYDsc3caTF22LDiJoDAziXhskfd8QfiqjiujjtEz3dxHveaBpiEivxTLL1AKisqAKy",
  "key15": "5GkdoYPzy3ZCL8xQWstDqWppgzTopKXZ2xLmsfFmnyFgnKEre9UEYgCDdGnSLRmv4J8UwUs5SsJZ7DPM7SfkNdf3",
  "key16": "yfNERuibbSVVurGJbbYjdGBYZ166NuyXU5q8qyCf9jNbtNexctty27LGSq3BkC3K2bps2d7iBCC5mTyhQKKrXt4",
  "key17": "4UhucTyeMTKpibPgBmFnBvRFAHwEFoQdcHJj71FoLZyiT5XZFrkDDGoPKYJFbw4X8HT8mnufqA6S5AUSyUCqd8UC",
  "key18": "3oJtSKj57NFQm2EbnT8FVpzQ4qU2gg69FYLVQdgtk5Yn9DzGKASNLuzJRuAE7CCzFwBkry3ce3KYwJPMbqVCy9i7",
  "key19": "DzMumpq8YRa6HDB6vT4d1xTwt8hj3vCdumHukfERGYWdnxpv1cBbyjNdF9cfgLfwDQa7sFT4dKVdkxAnTwAVk4D",
  "key20": "4Fc8UszM1k7JGydSXs46ACS6Veue73wY9Zf5VyWcqa4P1wNYGDH19yCZgwiYBmS8iyTPELBuAHHaojuomuLwwJJb",
  "key21": "MWPx9ukiv3T4gCKBctXqYQHtx4C4DPRjQgXwL3NaihJ1zpy782qxcxtbmxw2tbYFcfx16btXYAZrHC12h3bqH9P",
  "key22": "3ZabVkDZrZcQDBckWLsRjaR3XJF3S3NWzpMfejaqVWdGRXnDhkKBFo3ko7dt7xnsQFu3C4HycSeQije3r3kEkLWq",
  "key23": "qdVZaAgnH585w521KFkCGEYiVLzYAHZ477v9mEUp7byrTbqDG3Pecv1aZPamUFWcLQ539f3nNZoDUZwUKN1ewet",
  "key24": "MugtUR1b1JL3m1iztsgcKgvNeEi8oZ9pgRkzN5cvqjBcf4EdoqsqzZUnYuwQ4ew8MnnMC6R9erPqtxgEka74bKm",
  "key25": "tmxSD5Q2hoWoTBcfLyt6zXZLCrrSxFDuCD6cm5BRogqR7UPwxYH1Ymgw2Y85V7SAVSXf6wi5uSB9Q4gx4x8yUqe",
  "key26": "31zYVDB4Vz7zzs7caa4cGnEPKJodtuVVpSzvHtcQZUBmEeHqHGu78wx15zfWsUikRYxUcFXVPquhXvK92idmcYXW"
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

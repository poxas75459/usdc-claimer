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
    "3TYpmoUmLHMZGGe96j8hh5FhYTUjTCam6X7wKfyLWVTisUb6npBPWYndhrVbVr64qbcEuqF2MUs9g2zT9hNw2LFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFcVomhx75JPhLhmVYLHQ5SxNfPsBNU9Xp2sPyUQe6LhgwbUPbHcrSQA8qccUo2N3Ui47rBp79g6VT5PBAbN2eD",
  "key1": "3h5SwzRz3KQDioqAgsdfEr6VVf3JoYq6fWj8MAZZS7tk6Z1L2kYsjbjB4mXYWWwmR1ekegLpjwitntAXPq7W6HxC",
  "key2": "3toBEWgtficBRSt86tRGaueWWnzfAL2Q8kwMFxEghBgDeDfrPg4LKT7jmHdhfF8MDN3aeCj7Zf2yHSVrmzTRfBK9",
  "key3": "22QiV1zqDr15dCnateFFYvyFsmwMvxs7mNBtvC5T2o5k6uB9Amk47B4TpGxD6N17jCecv8B1nw2eW1MqZMaGw3U5",
  "key4": "4tUvdHgBfkcrwJN2G9mhwrVp1Yk3yEPU5sQCQBFmz5noQSWkX63F6z2GX9GFLwdM6FM3oyYBhmT4RLagEicjmmL",
  "key5": "33yywYkCHoqiTeppWZGfhkLiQNd6ckqrviT6KTx7ZWyJtGkMH8VnmjskpZs4KeMmoxXy9USzz9SQFphnFb15TFxY",
  "key6": "2gkGwKB5nzwjJBB9CjkYjZB8P2aLuhU9heXE5geZR4CawtQKB87qhxaEG1pnx7s954Vyz44t3zHAp18pkWZkMBh3",
  "key7": "M4ZJ7GkiAhQeJruWtQujMspV2sVqaUfeZ1noWyWcBgFadadouix5pxZYY7pZ4Gy72skYFePDonDVv8joFKSBse8",
  "key8": "TyEmsU8b8derNZicuKyR6zU2Q2LQX4qsBKxCd63Z1PSHKcKw3XAt1Wseg85mDzZ9BDQvrurEKm6YCeSxZhXaAcN",
  "key9": "3jE1uzf6ciu9Z5X1zKFr3xMmGGY1iQSTMAgtRezjDn9UCNvL1apZjdAiZkVccZgWjEmQNwDjiEUFp4YDz5X8Eo13",
  "key10": "5mPwSjhKyaxCue4foto57JKgUHnjJBWEn81rFh71imjuR4wKQX32tBtVuabTgreqMs5WZaqFZw77o4GGPtydxXp1",
  "key11": "3pTJdfAyYfs7rmN4bCwfYNVLSzJtGXA1Hb7CWNtkm9DQqCChGboi3AwGH3mnBVSWMRCYnsbMqowiXBc5JgL1GdV2",
  "key12": "5YMFUYBFtbE2rXGdxT3UijhkLrEVTPNtant1Njv6HYRMXaepTXQ175jDvWa1qXmt6S6CHyaMnbKd6FHirFZTCfrs",
  "key13": "5r4tGSyuBQuSfSjgiLav3UFzEjhKCTfffdcx69JmrjuFFRJbY2WpN454UaQ7hdbtb5dngqQ8dfQEy833zuJYYh9D",
  "key14": "n9FtowqgMvJu7bYcS3uDG24CsgE6GdmExdMsMcia3nN9jribx5giy7szRGeMkgxbcJB2SH81xLuHuTXn2jcwCZ6",
  "key15": "27ag1epNJaqH8J3rxED4XdEd7b5CarpKFeAD9oCvHBcsHnLTXf3p64LwqjYzGHs7tS3GrtMBDbbGt4fFX8pUu88T",
  "key16": "3MKv4hnvHwNLFMtoU1Gv9WuKbbhx4bCXMEGySY4DtFXeBKNEa619bdHkWdKtfJWXVi2sCe2UKvVEFHGdxH6HmsaV",
  "key17": "Dmz5b62yRnTHFzFX1sgKuG22fCkKpcekw2ZDxqXLk9RpTtx4QeBeCGFvJXTEeacz7trKH3vVaJRgtBvUizV3n3q",
  "key18": "4yP14jPFA1xx2B52DMrvoGN2djnwcbMagcyY3G7UDxraiEmSjkrawZ887RSga8DMYzv9eg2vPXxmiqh5dbsShe8p",
  "key19": "53S8tZKEHYKF8qoKw24ngupYCxQuR3ZCdEDC5XT7hn6qtszuquMLEUNyANtzqRr47SbLPKTw1khUi33ioHLw5Bmw",
  "key20": "3KuwoszGZ92xYudZAq4dQC2iqYkMQCcEgAyFQeLQaxGsnHaKLCWRjD76tFQiAjBbFHg7SMTpfKuoo58fr375GjFP",
  "key21": "3x5P8V2DzZb4A1N3uw3aHWe6qKg3PYt5jJJ6GqQ52YSKUzLW3jWCy7qgpTmieLbEqbkXftAVKV3cotTcytUtgMf1",
  "key22": "2ioeAnrhJc7Jf2Z76RWbdUdoC18Rx93xkeJpwNbBLM5rpPtbKDFaHTnxpLNKjz6aaowwhbs5EcQMumWpbcLqJHYH",
  "key23": "4HAYgCr64AHfgrwZVa3oqZwRP1azdBrHKAg7xoGXtYVLUAGVCLq3eoRc5422huF23veZ4D6S97uq3aSL54kVrqn6",
  "key24": "2izV8gvahxViBKsgvgd38B5FdJNvzpZiB29Hz6iBCDPimDqafWd6NpFKtCWPuTp7K9HRKRx9Rxk3HS4ppwYUZLk",
  "key25": "3znXKWgfzxnFUo56MUVShwETvVKUp21zdWucLwzx9LF5sHf5QtzxXe3MUus2nTn3DPTT3M8FGPV77cHMvd5SxMLj",
  "key26": "2vzUX7TzpjZNR7L4U5awzTZoCuba4RCM4zNJfsunmzbdwUMMY6XwY5JHzoC9EiUzgruzEwXpQjmqbGibnEQHBt4G",
  "key27": "3ExxTzykTvDEZb1boiTzewap6cRqmNBiBvHeXhCujsmGoSPYE7KQakWuACXiHfQSxa5iCB5KirDmuz5ZiqpXUdrf",
  "key28": "5qn4HLy7HraawKQHDbX9aHAWBta1XvYuRuKeijJmxkFc5kzNnoGAuomWquifUsj8d3SYoRsdteZSCyduviqPHzXd",
  "key29": "3zdfVmub8jULqcTJ7A3tACK7d7rXisTR6coZrjDAji5KkZpySHguY6AtkwAqXAi9rwV3mjjW8Lxh5b8J77V5smXF",
  "key30": "23CzjFLP9FcR35bf75CXtiKU6CwDbt1XpZx3K1hHnppggE75qNdQ6k8VUKtJdECfoHSoU5cU45uXkrTHXoaNvWBv",
  "key31": "4zVQYKA6a8RTAWaZizAFJWos3y73evp8ShGF9CaHAJnYbaxSxZnY7UnBoNVXSN5eTfy7DrwHpjfD61Ey4rmCPWKy"
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

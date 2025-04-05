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
    "3HKtgM3CHHdbK9KAhm18YcYZFjk1DBte1qBP3uBT3fVxJSQArSb4tba8nM3qsEWHzzET2FAxXTKrXjQAnGMq3i2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMEuuanAcdAPY2HweYUzpp5xGSU6E6XAhvB3rQ8CtQRJ6WnZvs9rbjhbFxCMkEazSm1PCQnnDBsXTCXVUmDnPWs",
  "key1": "4cBbrCYwu6UcyfPP3ntJnAVCFgUAMgZFMBPymbyqMKSiEph2Rr151UPB5P2hkAavXvaZuuC3YzTdnKfyPCbr1riv",
  "key2": "521jan6RZGwFLnsDzivYpy7NNc4XvF3xJfopUTus6UcmjviBPdkbraWhqEubxuU5fFyar86cYdrpNYufnqfXJWkE",
  "key3": "4smobL5jsfNE5bpd2cAEM5GnNVPtJiKdKUdK5GJFc2ARBYBiG9a9t8frmjebZx5rjDDf4XvNHEkAPn541eWQ5TFc",
  "key4": "2Y9MDrnXJ4hwjvoW8NtBhYdByP5uuJ4L7UmdjpGEepALDSiK7JmBoTpPiVaTuRdpZTfW7NzHb6qj2hcws3kWd2m9",
  "key5": "5w3KaZJBvn3eNVJ4HJPHLcjABTDsL6jfwBYARiKwU23soHmGBFvwYeXKjuGh3gkN5iZpaFt5YG2GnfFLGZS11Ygu",
  "key6": "kKUVDNHWd43HYGpxiGDgadSvTfTySPxiJndZ7FKC2DMoQQVqLzQhX8hEsWcEcbkG7mrE34b3TrQPAcfCkTLdzGK",
  "key7": "2W1CpqbnP6b3AeWNLw7CJi5wZsocrMx78exdxd7rczqd4UM7r6k7G5NA2cotBFsKMWE69tP2egtqDgYkLpHZvofv",
  "key8": "5LDBH1htz7X6U5UTajYGjBtrCj5SnC9XDNxbeFWHjFpucGm5PPBK8aRJgJLmmkTYJ1U8sKMVgaCnn716g7Lw692J",
  "key9": "4hHRHEjNawJGm1ccY46RoAuDv4nTqvg8H2h5JuumCbbyxFNYEetsoJx7yckxHF6Tc2MZa4ai65XCKByjqSjWnDEj",
  "key10": "5s6iocXm9f2QRNxBMFqk7nrS62nxArdFmYDHS8Y9s3843ASrFVtYFbTNswNuxTbMK54ysaYAQdvFvEr58ZRm9AV8",
  "key11": "2fbtqarnKpxyruW3Ro4gGvhjsNoWTv8J8i7Z9YDxWvj2oLWod7WyZeZaWRXRjQ2hTjH6Gu6N7giKMNUVFwEqXWtd",
  "key12": "2FvJnML1jeSZLFxd1bYz9jrfrpBbnoSxgd9h4JodYeZDgeKNiW68WKQ8w7Uj7GDA3Qmb4ESV8VkS7sMeto28TQwL",
  "key13": "bYk6K9XtotQ2Nd1abhF3dh51WrpMuvo4csEqicFYFHZHV3J7N1xfcdgNmpstoc6tbVptxSdpzbXtcFysyTa8um6",
  "key14": "3sgJvgTA8KxdqYd1NU7a9ohuzv329yKiqCqaRydryXQjLaV9qQccE9tMjizNjvR4gaP2uRHUBPhejj8da6Bp46Z5",
  "key15": "55xjEaK6MhMNdxgjgNoPhw7WKPjt6DAVzQESX4DPtWFq2zZA6Ae8gAugn4Vuc4c38LWV7fQ9GBfVCGQ25Ln7Zhx4",
  "key16": "4mQE7Wmpq8yTSUj2EUa8QgBKdZkZj7ERHaeW5azCksTQRDNXxRRTUAU2pPm3napnbBAcrQ1KbBkeKFi5gL7JSKSh",
  "key17": "4646TF1zQKzcYEhutK7rqbs4X7zkCqbXbsPLPcX6f5KHT5YkuY9nYNSEw3HCHGLAye8571mUpUKjRDn5aYNXcrFg",
  "key18": "2dmFUxVaDnLA21jQEYjbRNsg7YVCCtu6dCwptv45TgiufYk4pNbFipFZtX9nG6Ejz5r9jhyAhFfvsYS8tSzzwhLP",
  "key19": "26Fei6xgfcK1bhpzf2vsSqmj7ezTaWPDbjH65VwiWQWG6nMDJULGdQn1ZTYbBJorutjWa6f3MyMAieGnABqWufsj",
  "key20": "2sf2myT8m33qEhW2QWH7xsQxrG2sEF8UJftS51xnHtBPHssWdFDiUHFH6mCBhtmbgb9sr3dBR6kTKxgJxbzWiZZq",
  "key21": "64qK1WbiLEzZbnXTSg84j8Rf5DbxerHEddJZWyPpKDCfKh6X1b2fWAHp9jDsiKBxZaafm3kiLMsx6Da6rCvjXZpZ",
  "key22": "5F73kWFeEvr3TxBBorskckxMXaisXbZYVss6r9c6ZiefDs8TSFHi5SXQPW9QrhC5QHQixPfzNRNJhEg3CPvvJWZi",
  "key23": "37db3EQwGe5Yka35y1FtMGovKAu9esnEzVQfoB7EdpUnmx8dtfevpJXBaqgLQG286Ezv5jjFKZnfqYwj5X57vDrT",
  "key24": "5XyrKbu3MqDrS7qVMMdfZXvibHMeCkZ5Bb2y11dfmvEQAe45Ae8oNsT9uDxBHqj2SfhgRCvhz1XTrcgp7ccAetEW",
  "key25": "5bAVBiVaUa6tJyG5sVWEbt35uGa99xKfqCJVSVtWzvTHypn5BhSDRQvM3AiMSSiAnKALwV33eHZmYFULY6isdajZ",
  "key26": "3dfSWE2WvBAuGEiLrivUciy8sYZ9voq1R1AjokYN1SPQauLDaf8JV4HVDPjBgdhm5mKazQFBHkjiTDfxdMrWdE5L",
  "key27": "4DF8aGG56xosqASjZKwpXaXTEbYyu6a6qkq957Mk7RuePweUWaFBoV44asK7MbYcYkJDVdhtGuu7p2Dyag43uFU8",
  "key28": "57ab2HpVRpwmojWg2XdzYYkiC88BJWnxqU56SKm62ijrREd8eeJiB3wrqW99JonNTqdmm12USX28tUSfqKooShs9",
  "key29": "3EgcF9gZskwKiv92R1GrDE3qLqkYJXQBBTat4KcesDp8J7pSAsjypJHK3k7YJMwt71jCzjRevNTu9EGeYx3QQnGu",
  "key30": "4ZZuzVQMsPgVXHVZ64RVWSKdPGU8bwFo43JHgTshmdtxb9yi8t5hdVVSSmdiMmSuuwSpwmiNJiaC7zEb59Psf46f",
  "key31": "3htUsZZyGVHFfKWbgXhF672XPwTkX5q4Yx5LXfvkDW9UW8FD4V4mCpcjXeBz5MwwLjYfDaNemJp97DyeBhx7UQoY",
  "key32": "FEDaZ7nQMCwbzK3L7v7YN8XA2kEJ266743LXsy2VW5ay5cJL7kanHJdpymCJDkVyukYAnZbb22ohgtbGNq8ymNH",
  "key33": "g2CvRnG2edkzF7Yn4QRwNqT7iSJi5Z7JrwNo7dPPSwNTPryfCSuzhoHruoof6BrqZxocsiBG8CichcsSoPnrMQc",
  "key34": "5J2tjQqedDNRX92TVcTQ67jvvq5Nv8p2S4yne6gLKkzvxFznzvfX1sfGmH4pDGYi76THCnbuEuKnBteN58MwrojN"
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

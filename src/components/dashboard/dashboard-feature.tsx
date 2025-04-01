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
    "KHAHpFgWM23EK7ZHEkXHLun6Z6td4hx1brdacYhjbH3UpR7DgrWF8imDqkv241qRGkKUMtHSGKJHa1Kr2G6KBz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ku7JGW7nPMfZfU1yHpT1zvKtSJaMUgqgn4dhbtCfgS6esnrJR93xY26waQXnWveFpEwMbWp7tjZME9c1duPM1rV",
  "key1": "5fFfmiWsFz7nA444bF7YmwGVckMn5DKMhBgyML2TfCuD3j8kyoupErTrk2mmAztARoEwtzSRbKhKY6yPtoWb1vft",
  "key2": "5nHfK79SRsGP9SfQq3cFCvcRt9vveCZq6sgSxh4pZfbg2HkHj7yT9s6wP9K444VEAWk4JffM7VsNxmhBrcsLTnTo",
  "key3": "33o9WPf4YwHcHVtWPHQynDNs9wodJ8yKf72jhjFqozk7udzpKQjQAB7QNdpHEUwB1imNEt1rgXzFQgzPUbEGGa3G",
  "key4": "4TNDebLvFbvQE6xpmGLVctbDsy33uGUxRi4RZvSKjQSUAd8uG1Z2qofjchL36NhCiCQfuoA7aW79EUrVigyup8e9",
  "key5": "2KKqTaGcKDn5wfqF6K9FVKcDqLnNLM7GL3U4TuSirzpX5Un3RVdPgCM8Rm6tB5LUbZkVTAxJDkiWj3MgQBgqWrcb",
  "key6": "5gEzJAGVdTdKwqSrCGea14Ptp3ExmPDM7gXfDwTtymo1Dd7av9Q4t7ungj58ygyN5uGLcFtaTtAdiuQ1FrJjZR7Q",
  "key7": "4hbw9vVmQoiA4f7JLs9mtSKP9cNKun58ZnanmG7m2pUjpBQYKgxQE1s9CREhGjorXFrvgN45qhMxpDHVu6CSwRtU",
  "key8": "2Actxr9a9EDb2AysZwiTm2qn7oNfrUNd9x3QEWReXxNoddbPRmeAVzDr8oFSG1JqmEdUmcrTg4XUPso96ijL9v4g",
  "key9": "yea7527YqjuNsZNpjtQ4ZTv6t4sCeRsNPAG9hb7vKMwjbBDLfh5Xyr2fzTK4ApTgdYBKWMAeqZqf8KGhCpyUQ4B",
  "key10": "3TsdJD3x4b7o2Zv7Y8nc8ChNpmngN7T4AHct3ZtPnVrHYFbkeXDoDrt73x9coN8GbefNq3BjwLKrnHqMq7m4KwjF",
  "key11": "3Ld9fK87j89YJkqab1EfJJWvrYLkDXmrjxXTC4kgDwh3GMM9p13L3Qofr7NJpivm3LMEv3F9sHzRayvcvwpGLgdd",
  "key12": "wouhkmEZEaauhMoWMfEJ2knmwdH8By6ooPcRcDj93KNp4oZaJ7jct95GNMvsDrX858VQ12bgCGMxSpY1JrPTPer",
  "key13": "4owCxHZFzNSMu9qLsxJbRn7ooLqsVWLiUdggiQCnceHBDqH2poP9fk8biS9KGx2kzj8kjCDRx7v1cUubG3Zx3mhN",
  "key14": "QJrx3adTcezKomTZkhXNxQu86KhHjeUCCMRWb8FzKr1XZPf28ujB45L3nMvNGoBmdKWXduBEMEY56N93wEsmmWH",
  "key15": "Wf2Fs5qrknDK9VkTdz6cNruRZs2Uh3r9AGJbDW2M9yuedUHfzhv33U5JbazdMU3kttd8iSQjLDz5F78Q8rHV2Ub",
  "key16": "ZQtG2jqC7LyfEEgzDnj4ESCtEJqe85mgq6EgePM3Dn9dTmNPs6hMD144hn9GCoWeLAfJvB1qRNCGu6HjB7weGhv",
  "key17": "3w4GhNN4qy4y7wtwLQVFoAhguZTuxDUHZ7vx7R4kqseAoHHa76xysPBHJRFy9fLn2EfMuHAgXiSqVo8eYdu9HAiQ",
  "key18": "4zwGbffZg6Wjr6HBeAcsaZj2p5NjGA2gZMTTAAAiF2FNsxhvkyGT9tyYEJfZPCZngoi6mSnZEVtBbPta5fGpRb4y",
  "key19": "5z4oDsYjUe1uRvBJ3C3ZEJNpBTMEViP9QNihzgqhmEUv6N6uZYtfik8wpyw2XLBNJHBBgDqCe4JFrtv5DLfHJU8Q",
  "key20": "3vdkwVCbGsA5gaWfXRbN6edVHj7sS9fMmti9szJpTxhbRnVUtFCQ5FhKkoKsG25NEWicuuewyqsdFE1CvhLjkeXm",
  "key21": "2nViLvbhf46Dhj2hkWryPfuXqot6EP1Fwpbhmd2tcT29AoMF6kShRKt2HumeH9bPdUykejxh9CwcofRUkeGmioMr",
  "key22": "GtUDwouhevF8LMgorpCJ6c4PJaACrYTdv2vpfGDnXqjQDpqoCftT5mpArzo16Xhbn3puKmJcKHsM9Ui4RABYuCe",
  "key23": "5jeyp6GSuYnz2vQu5A8FTzmvaY1hNBoDrvXTxQxo3iTdLSkSjyQhYcGyZ4r9G3ohxUEdvbAzxogZLceATyGnz6BN",
  "key24": "2Tu81vGyLArcKoL4F7598AMPTZ17zwMXtW7uCRvqmRUsqwRBW5uhtXBwUz92cbHTmZAHyZZbAqExqfvxNuuakKk8",
  "key25": "hNCnU5wnKmFunhExCPW5R2cj6rJ1jjupa3xhWusMauqPa8GcKehyCf5W6h3cqVZYGMj6DHvQtR3HmQworimcGxX",
  "key26": "4sqtpLj6RLs6ZxZC6wD7yaovd4TFxZtwJjNB5hvgtfLGZCgsQ4ajxgqfw6eRRQT48s6c3Vnn839hDpxdZPNSo3wb",
  "key27": "WfUsxXfFjYe31vdeGgSCgbKMrNA1WEcFThU8J2Pxg1AX4Afnc8d53wqis6Dd8D6AhiSHfs2DEwwPT2XTCCYYpw1",
  "key28": "dC3PmvJwtn4ksn3AUneH2egc2WW798NofUbyYX41r9ypADsuwQmWco33A1D1xWLcQRVAyMJMWtCD2P4g2fKPJWQ"
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

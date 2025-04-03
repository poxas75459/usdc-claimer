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
    "4QEtDaULDVN8RxCDM2uUYuLBURyvy2ifEkUK4VMpwNY6vpGYqSmbA1Vqv2QEu6gThqxnqHSGBYhZjYHbRavnULoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uE1WwGAojtcJbz6mnUDrBagoTuSnJwrcX4BjWEnhT85tURuwzRCCsSaC4E9YZA6faLibenJ3zfs1EU548CugQwU",
  "key1": "2nuLqg5vTCcFS4iPERdfKWyfWpT8ypX1RjNPKfufg9Cm8Lt8bTvCZjqNgUiJRxJifrteWQphUm9Gf9ZqMTRyoXqU",
  "key2": "5xMfJn6WQatb9m12YPxJFaJ5xNy5htbFYhuBSws3zznKKKCj3BN6H7PcLCxH16hbS5SkMxeH1LNXCWbG673kPTs9",
  "key3": "3R7H9YW2pT9esjJsdHe4RKBkNzUoi3nE5boK5gZRiLsGxT1dvtLdnaZp57PUnpZiFx2VHRV6tpcnFzpWh1heH2ZC",
  "key4": "3UeQhVbfQAKAN62a2opfQpmHMxm4X5GBP63jV7tbgASS6dPsUzs93bEFMQmtADbAHU68qmYxcZtabbK4UXKy57Ff",
  "key5": "5snpVemxCURmXU6VnQc9GEWe6cBYu9bJPS2BUZ2jkwkJdXE5Sba8zdoiPZ4vJZj2kS8g8QHWrdbYQRcgnxbHqLiZ",
  "key6": "4RnayN9odx1mQ6FtLmZ5hF8iETTYEe7xFPJfBXSqWzK45BmkBVK9yGeSH2Ad5b2VW3Huk7eTVLtHcR6yDFhfjqAU",
  "key7": "49fPoxjp7rKFKPv1DtaNQk2Ae8EHbKuvnqfUPQ1sw73xvbYPTDdSY1J7AaEmAd5fkBFJtLk4W17dbji4jjQ3zqev",
  "key8": "3d5N1Gq3QmtgFaX1ds4XZJiZ1T4mD835GDVSoAFJx4YNZmvPAvLU7YqkmM9p1zMhcb3dzJXjoxTFdpfULEH9E8UM",
  "key9": "t8Y5tASk4AMKLBPCctv6r2pxydPtot8qgkhDQQkAZLTbdAGghSvDrL4eFRUfnnseJ3mwg3Azb82ycXktbmkLDQA",
  "key10": "5VfzmffRdhFuwdhkpeq1gXhdWLuoZ3oiF4Z6qrXjZrE1ZDBRCtaSgBgkb22DULy8o4nx9zESD9K28NwGNK7irsEX",
  "key11": "5zvMNterrArERe8gHkE7bx49X7pKgfHy8xjQUkUVm8icC86igLZ53FbiPZKYvsHxjhiZmZRnbfvJB6QJq4P7eYXt",
  "key12": "2gtxVgrPZTJoQf2AdLqqYtDBjdTKxP5GWVHBbvFoVvo3HbJhiVApeEkqEs5yEBKJb32WW3nafUMBxiMNF1GgGmH6",
  "key13": "f4bmJ9sPh2Pi8yjkYN5znRiQi9CCnPTtEYXdedvwBUxFSXZSCo1L3couBytsac7eoAikJjv5TsK2u5uLMjb7eC4",
  "key14": "sd8hiwjZp3b1GpbjsRsNsZ8K9HWmtpfcg4ziX9f2u1876jFmxc5kSyKjN3oXB77QK1pGyz47BJZM8sXEFWhZLGx",
  "key15": "2t9kZbW2rrbbGj1mYTXUrvtrK3WzTJyrt5dpfrAnZrJtqBj2qTh3mTENFA13a84YqcsjPPHg9XCHWmWqWEFZHtP5",
  "key16": "3Pp2My1ugeMTnfADxURqbNDYPVeeebDG5W2dvYySFTtjguWP9rdyaBYT3t361FkSH9jCA2TzVW1bY3RP1frvnrSp",
  "key17": "4nMzVctjhJAACCpRDP5LNnT7q4LborBcUGSuxNnto3vJPL3Jc8zNNksWuX8KwvuQUVW2zS9wpPAiY4sbcdtLcNpC",
  "key18": "2VxNXm7LXPe8faThsajby8axTBQeJDEB2vpoBoC8kz5v8ZKe7LPywXQukQq81mbsjyAVrgXcBzitxF1t1rCchQrf",
  "key19": "3JUD9ntwM87nx3VTHPYRgmn4XNJ8MZc3e2JqjjAitqwN5T3up5vrtWqYu54mRZS8GSSj4nC87GWk58fHJQBQYKfk",
  "key20": "4rqY6ZtuPRBo96DbScwEoaNFdNnMZ2CBYfKsi2eosgwhRBFfSq3ddeXwSHKzsS7bRv9KY6kZeEdSNiWKUo8a7U6P",
  "key21": "52sU3croT2q2fjJXiNTYe4HJFJA5mU6q1jq9rkc61VJrjDhqQnenESLeQqbvd3onk5L3JwaHVntPcr2nYJ3v1TEM",
  "key22": "5g2GD5uJfroJRWypeXAidd8KFYs7rmKjNwq6JJATbngGnsGwi9YmWszD2n7va8G1GeKtwEUZGvM1gMJxEJRY5eqR",
  "key23": "5WFohZ5sLyWytuHC5Ait49hhSQkTDmsHF99ek9evX2vWhxjmUxeb2CARrL7oHsME1ZUE1HzA8o7o4sicxpjVeFPQ",
  "key24": "2SjtKE7d4KMf1SHtXrufAxGzi4C5CAZG6V7iBxVw4PZy21XKTKNSvfL11jJZjHAJbvmvkmYvhYVmxQ2E6Y5PGKRf",
  "key25": "3nTgHQQohodQxoKJ4pp4u1yyMfQnTpqsFf8eDfRyuFqN52Y9tmTE5kieddR9ktDKsT2kzJHeMu4rGamJPmzPRjQu",
  "key26": "e3TXAcaz3D9faasGnemUDcyjipa5nmgRq7cbBNapsoJGbck94ML4W22MEn4qQr3XaPs2sgLt79RBkxKQt99zdqw",
  "key27": "4JXDaEQS7QDiwjQTv1RotaHspmXvFxR6zx27p765qwgbfGUfxVcBJtKCd31LUP7bWUNpUzs3hXEVpmh3B9thcAFt",
  "key28": "fAQAwS1ngGYfCCNmEdmd3zUFfQptc6MdXEaNhYM79hmFKPbKPaawv7NVDq5Eyp69rvPVSSeGq9f6qr5My4tfedo",
  "key29": "nGLw1NmwGpZA1FhQmhbp5Erhcaj5aRdEcqZEPxXxo37xs8aFyqosUdcQrNQsxb6t3ws9MsZbd1xYTa4NGSj5kMf",
  "key30": "2U1VJcHDWrDrNvhU6HpJWZCUTU4uuQbTh38xstno1BM4c7sRvHMKdZDikpfpP4TyHEquNMiQbqivq4RzVFCjRZN2",
  "key31": "5ZJ7wEERjZmNabdQn9uCMnDTASMtgv8BkuHbnBNYZGZ7ApaAgRHFfyKSAYUpJxLwDVL7y7CDrkiZDa3QDuPrdiMz",
  "key32": "4FNyPW2rhXSpxwVTKURFVLWANDuyDP92FUN5TbAZTwhygJ5vqVUQucVJYTbL5sqzZSWfgbn6nXsVsve2pQoCVvcE",
  "key33": "4sRNiXSnYg4y78itANut5PUhjwXUVmpPXZkbyyacQGvECz8Zx7qrd99EwzdbTpMCzPcLBRp4iKaKtHYoJYr2LKdS",
  "key34": "3bbbgEZtPJNKjBBHq1GNjw4uHgW8Hn1PqhdzZaZibucG2Jd8gkCbK2WCVJefb8q4135rFkZ91puFx8rRQbHAQjYi",
  "key35": "a2A2ytkFaWpeNpvMeEonAKD6KpmQSjdWqb9jQ951kLzbnEDgdnk4yhewP9i6emZT9cKF9piSgwrkiiVHi976E86",
  "key36": "33e1Vn5YK5iezPgZoD6iSjMMqJH2cKdYXpr7C4wtytbKzhA2BwXL1yLQQRJscmxLsZimcJdGVN4QVQxofrPKPq9f",
  "key37": "3NtqgEd1DuC1qgwMWvny8jzPv2TUAmrTKB1axxaV7ZefspPejUhcktf5hx9fdTmYcTX11EpuMiFj27KgrhVvMNPJ",
  "key38": "4k1RuWRZ2GxejfCUAu5P1p5M5E8KxD6r25TnDAHFE38BXJ8bi2Emyui8QeMBoCZXsjvRM5pDQ4yyXvTK7S8Carnj",
  "key39": "2JujCd2ytyGNWybJFi3mEjFGnWt968nxYLFMDFpKwAhUsrseXS99C94jUEQJF8LxvrQFkUbq5C5wEmcNbPqgfd8f",
  "key40": "igN7yyBu5TxB7mjucqFTixSEKwh7MrTSowd9khWsjPYGRqqYWdFBMwVZDezxoDYNMeDGBT4irGJo7rh66BPPLXr",
  "key41": "5kdoT9EUEask9ApitspWS9ASApSBDcEJx4xro7crLFqvAoTZW6dzh9PM5nb6p8o6gAcVgGEmV7Y6B3Ca8jRWHhmZ",
  "key42": "3aVa7yMXP4J8upoJ6jrWGFmYxewugVEY9oym8Etjj3rbqYY2aZb7ZhwthnYNSqmrfXb8xK6sxvWh5tqFeyqCtY49",
  "key43": "UPqPKGZv2efF5WDxwLmRsxPEzggYh39ix857dLGfm4QVbX8KfqYUZNj5xHZi8kxbMPFHk5Aib2mBvn8NJw586eH"
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

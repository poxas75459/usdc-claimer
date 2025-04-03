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
    "3JnmoxWw8X9hRg46azd6EFxuyFmtHW6SQDykHEVKj7nVdao7ZGVoEtYtrzwVtqmtetFioam5nUWMzxQseNYfwnKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqgkqXrnG9WDJ7KKMBFmzcZUHhRfFiRukZF6E1dyTdB5doMZtek3hUNuZnvN8Uotr98oWhNqNmsX4oEHp9mtc86",
  "key1": "476ewdzDm16fy4tifF7xSm5aFAAXUYSVKbKBQLn5qbiBCx5mUJ8qPXJLGwS2L5fK2qmf3JgUBXdHx2jyB9n7xzqM",
  "key2": "cyNyByDjJVsnngqAzuUxTCdGVz6gGsa9jc9dzDp19cMNJprhF8FJRXubnHRfJii9LfrcyuiKCaHqcqjWYcNkLLu",
  "key3": "4TFzKKSvDhJkBv1ZoAUhyzgoCC7UtwWykiEc8zsG6dyKqJSqsB7FQJhyf1vq2bPHYY2EURFuyQhJb77tNjEGQ4tC",
  "key4": "3N34VrRB5iYbusVKF6nQBXnP84oD8eZKQtMsC7xPoT2Et7rinpGnRw4dpXj6FsrMejWbZcUpftYo56W4jdGZHD2B",
  "key5": "4VNeWuhmxLg5pnMR6BSMomMhBkniYH23gx2Ht8rSmNhbcziuK1ipxH4CZdriTmfsobjfNC96kRBHRGtC6ac17ESv",
  "key6": "4YKASzwLsZwhDKQuauUpRckkKdQCQjMyenXWEZnSBeJrYNGzATgo16ixG2zggJLXfBMpYkvgqoQPsaaURsmABjv3",
  "key7": "2P4bv7YdTM8eEPhkBqoLSL63Em1UdoohSaWeBUKCgUx1mUJhecBC2rH95YVpFNzoU1c3EFUXhujpDD5Sk7iC3q6n",
  "key8": "39HWdEuHJgi2atYPL7SrrM8vVMvE5EpaXQ9M1JLBopkdqVXQn4D2WmLzE4ubphQkdhau8GaPX8mBNxEKPhNSCN5",
  "key9": "4bnv4r9dWNjUwWhn7NVRknM58EqVVSTZGtmMK2PDFUafV7Qqbrd6k4tvTkiBcSsb7vtmFm2kjGbvcQT5YdgdzNA5",
  "key10": "3aKtqHcL5rSQ5ALkYvLEB43dVt5eUgkkgaZWX7pmw8RtefKR4uZWU1k8dozDwF8LDqXGVej9MMsLvZJjxW8sv6F4",
  "key11": "5PZvju1s9n3VVjhVjHXceA8K9cMj5jP1m5ZkWbb4ZgKrmTHbumgi1Mo6AGXTaw6RZFRRaDLYav2G5qExwMPUtkrG",
  "key12": "5ycCwBzm7kF1A5qLLuBfFcn5F2PRBMpk7YFVFdQ9KkxDEh1UtLCJKsBob2a4Jmj2zhy4uSxm5ieciBN7VYiXgnYw",
  "key13": "4ZG8ViP8uufu7MRH9pt64ZUvr2pgTJ7vjrayCpgXNWwRhCNLaUaVnNxLQZpLUrC42538Nr6FNoGZyCHuT2JVzWS5",
  "key14": "2qK9gNdCskHDnPhc8DoKJJxhFHhSmLTGL4oTrhcSG81r1cX2vXKuJ1hDeijaq5brFQDDz71D3QYKpqfFXeYHofXf",
  "key15": "54y43uWgsoiZe1T9q35WSZHPdRsMETn5buoSW4sf9DBQ8qNki3YK1c3N656oiT4aycyoXTPpnMKe69tTSBv2oNXZ",
  "key16": "9kAsAfpgXjnmfDBH5QWnCvdjZE5TQ9zYGC7wFnew59SQVjZnhmTPy6rL6c5CwF75ijKFE9DR4uptnbnTsU3Umxp",
  "key17": "3KdySYFBGqco2j4wr7m1Js7dAwQm7oNVovdKbHCzmfibzRykJA4Co1coMHn6MzAdjrjrb9WbaQe2tLdHrt1MNgJk",
  "key18": "4LjwpAUHbYgG481eQndsuHd8PzrY6oGznAYHe7zzQdQe32rqiuVFNjmgeopR3yqmsZdLricTXxusXsnzGK86jG1i",
  "key19": "4mG5z4y3vhfRp8iTAEc8ULAKAzHHS15PTdQtnndC9N5SbauodvuCkto5mhZGDBwufk5DUShk82Awizn8upBJMFNt",
  "key20": "616cikcNRRSn29yJjGo8vfAFxHS4f581N6ceZgt3csryo9g1W7ccuCS5iPhrtyiyPt9NPK7Gy2myPrjWUZZPZgXd",
  "key21": "4t6BaGcF1jShwJKLtTKkhwoS8zYKFS2W5kCFcwvQax4RL7GpSkMZ5Nk5wrK9FDhqWhEVKzjwVyWEdVmuMDcGUFDy",
  "key22": "2tftfPr218dsbsAEtKvqvxtLNeSp6Z4mqD7Qao6hFR3EaRGMTKGXhLD6ywSQ7u2ukGj3GhDSW5yJcrWe2DweHfob",
  "key23": "4jLZ8DR9DsoebaFWkw18ncycfLfCahrL1nDUiDRp1H1rA9qUe6ewY31CfXpDoeKGePrJeQRQuroZExc9kBQNf2TN",
  "key24": "3QxaxQmdQz3mFnwmN67NTJuHV68qXoDGih6N7Qb4SU8LJS94yTyjMoiL7JnoxXix7gqiK2Jiy3wQevGzANLBCXF1",
  "key25": "3Hcp3GFLuNiwP9iJ4MUHWYEDXAsiWFJEnQh6nZ4V9PRbgvdLguvg1JtkVmj99CHzwCLD2sUs8HGdSwQpsVjU1mVm",
  "key26": "QXZHKtJFFdvySfE2rrQoFLN1AMiWKdd312GWrBYQnLPdbVBXAee9ckWfDzEQHB2VxDhXeXPsm7AhDkFDGXT13uF",
  "key27": "4XCuLcYwAY8BDpBmiJj5ZafeM43LAPsBopppduBLuar3qG5NNGNCmHaXG1dC2M5rwXdvA8Y1DKwdGgzbvDqmdetq",
  "key28": "4UVQmjTfcnKdy2BfJFVcZ79KeodftzZsRzpEDByHoAvm5Yj4rUQSL6iY1GzrLc7wgBDyHWEXbXW3stiCpdUhivty",
  "key29": "3cDLcSarRyoL84ZWS28hwhPrJRvpbjiz9XkAJG2WuJyufweq83z1ni7up4q4H8wtBaBTeH7i4RarR8xWFhKGF2dK",
  "key30": "4NnXa4TNUsijLugrooqGCGuvAwRsS2BWYBq4DLQPUFzVv97cKsuRxdF4wEzHsiX7PDFtYQKtTUjC8TPfeeJh7VRy",
  "key31": "2LYgNacP5VVh5pfSYcHzH1gEZucgbbMStfKYTAtmZQhC3hXEt6mFCvnPzXFz3wGZDcm43wCqM8Td1JV27WmjNFLC",
  "key32": "4UczX9b7pp7oKrQGcFYDPmze6awBSarxnyPJhjwL2wKx8Sb1GmwkfsGNSQF2ciWStmaiay1B2Bq73xkkPBcEDyTN",
  "key33": "3N3a2QqaV9eon85xweQBgUvv4zDz9Jdjy2ohNDUpdzCowJn56zTiiebTrxY61ctWi2vUz75hAnWVuD2ecBwm9feT",
  "key34": "2GYxTMM2kwmxTesvW1Unjots7UKyxnu8Nu5rAScEveZ7qA328gWBnYWt7ZAJULaBkNYBUF1W6dDBwbYXoEPDmcb8",
  "key35": "7s3gvaVgMUDBVAVDozv9AHQsvtvSXN1JiY5eFEvvkXrAFZAWzoNj3JMMsRnTewLs95JLRdT47peRKJvse3CgJNo",
  "key36": "38EnvMqztJpZvX4B1Tv2PM3UAeFrPd7qu1wTqBFz5DfUXHf76rQyCXeZHFPuvvtbBEtHpCZdYgTXqQiecxFQ9gde",
  "key37": "3ER1Zjnj48P9fwFzkR1s6T5gPmcePD3Fm4XimTRQcFyjiq8LV6VJNcxbH9c4VYnkWDzPMXBPWFS4Th56P9VrDWTe",
  "key38": "5GDKZBXYecwj1KTiaosqbVF4EsDChNqFZFgjjso4Wd91mEZoWtvXnnTEjF1zexi5XCqrHoQzm5a6KjMJHaTYSPZK",
  "key39": "wsf7jFzZaba8LVg85stNrbzpHydMSjdnM1q24tjaF2MHpWKej83XVGsokdtmkKgptGehq9JvehmMGaCSV86TjqA",
  "key40": "4oeZ65RarPGgYj8PGVbuGDx6Fvuhx7xCibcKZCaYJyKYW25UXSgvviayKxGeW2Crve4UGURLxF44xGWS2AD6ez8",
  "key41": "3rKdQ1VirgURbczuTCespoLEw4VcVuzUVL9RASZ6FxjyZnAyHaQW1FFEUzS4AAU4o7LpKtJn69LajRno3UDLu9KC",
  "key42": "2hxGkY3GVBkNiRxvs4xy42Eo9GqN8xJpT6zNZd94qbYZanNSeGD8mPeCTZSAzxyDokAMYEWtcvZcNzLPrHT4wnoh",
  "key43": "676dRmtkTirdCayMUmCWxD25nwfsbCwAAyis7VHYw4UZCJbpdPd8Bxm4Qu9TnQXjz5PMt1B7v9jRs77isSRY3HKW",
  "key44": "2Ct6TJYtmZcyM7kj1pPC5U1SJq2osySCiPABT8smPEULjLjPt1ETKMjLrGtNCS2ocLAzBZBBJSydx4shGbZkUX1c"
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

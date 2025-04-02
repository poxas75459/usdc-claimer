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
    "h3NifcrfppeEXGVAWcVvb2qXXFMGYjEjfyEuocfYD5gM5kHTi9T4bomQZhx7nXsV5umSfM1hKA5xJ4Qm3asZVs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57EHEbdEUqxz6xFjR8XzUhKMtdHkbpUsXGmQ6R4EWRUTQqiheA3UoVAy9xhBhAiGapFKVkeAmSHYPph5pPq82f8F",
  "key1": "4adavuc43LRgBWTARLQLedGuMVe8iVJGrqFL7F2GHif3xt3ShohNvBwxAsfT3ZDJJdkbDj78CZzFP1oPtSzbpRBq",
  "key2": "578NTUUn7a6vcbTaFARJJjsy4vhT2HKWxZGVn4GbJ7MnN3QUYEHYNXHzWDUCtRrzvW3eC1S3w1HjrqKFkjUDFkAy",
  "key3": "5eoFjCbkgYqi9skpbWXkLNwjv5XGCpo2FgzN4M9FnxigiCjd7pPJf1pA9vPWKbNfY18jsFKUjNwP1o3e8dXhm4pc",
  "key4": "3h1EKf5edx32tW9RhTyGhtC5GqXRwNuKnH1xgpgtFUVo9c1o2UYj5GumQEZSoYJyd7vHZ1ME6wC4N2WC9DV8UQr9",
  "key5": "3N2nMJ1C5AzZVfNQdAU25VWSZUqo8T5SBg2AipB2Tq2Ay4MXqWQiDJTodvFmYUUbu99vh5wxj1jsoTf4H8toTFx2",
  "key6": "5FvbEjTHrn8DyhzGAxH7deizTK72ffYSHrUmby72ZJU8CxKsKV9S7yPzfwSCToYJyXszU6bDzbHD7wTmFHKcSvX5",
  "key7": "31VfKePJi2LUi4A5EbEAF36MTp4kZQymGbC7MkugjGcLEC3zzewMu1TGY814f3tq7eW8CcEuUvZDcKmVH8VPKpy5",
  "key8": "eK1ZGdCnxjQyJcXZw53kyXwXYhpH5S8Qtj5CpLXW7pF8udjNJQr5t2EXC2reSVWnLpQUbT75hQWtruqnbLuvQUi",
  "key9": "2L7z7GhqbJfR8KYm3JTDyQGYGFLZQ9TamvR9QCRZpQFeH6Bip8yDhCZYNUi91b1FmahKEQK5kzsnHnMGwvfNTXX6",
  "key10": "VSFQLj7M6AVEZw33Fye9aSZTgZW91qXcwKhTyaJeyUuoYdknjnLbpFWJ4M1GgFa5xNNEeadnK6as6uzyVeYqjZV",
  "key11": "3JWnQ4iYEHTiFGPtW3G44uZkTuyY7uy2g4vEz7GuCpo3JoyDdWjmdswbms9SPgyHBCnazU8b7yXc6JAE4es2yNCJ",
  "key12": "ob9T5ckqeiy5cwtz4EQonZNNwPpUaHBAPtituBGbA9LWS9bYW9VedHqm8AqLfWAjLUgiPY729GJ1dUpfgBzGR5r",
  "key13": "1datZamuymExkCtkuLwj4SH1ZG6JEUUkTf1VZqgkTVwSJD8GmbsngLBGCUmWeMnPVYA7XN52PGasaTXYQ62JDwZ",
  "key14": "4iwcvvPfJ5h1EK1seA7yNpqNgCSE8ohF5n7J41qa62vb8jCrAUKQkrZzBvcs3atZ5TfJRxsfHNvw69kieUcA5dze",
  "key15": "3eBiHjHTPJHmKjQ95vaEb8vWdtuaQ5VMri2yfwnPLsGjyzPm4wPP8aztu4rhRuPPCJ95vPRTeWaF9M1vez1VEQHB",
  "key16": "5fEQbJ28VCNF4fJVZnDh4qa7cpxJcp3ttc3VFPJ6rDWvA1s7TBmrX5YWdGfxXF8nHRcNaf7MrRhgeAZHHNj6Meb7",
  "key17": "BABoPtMXxJHoe7S49A2q2MVjZfcUL416874EFAumSjdHEUrV2JPXed7ZNDYkSW8byQAP9pAXcJaC8eYX7Jtb1ED",
  "key18": "5j4QS4rsWUyHoGiQ48gpa1RsbUfTv7QartwiaMYWjV5SaBqhffgG9h5H6hdMzuAFNSFmG6vdE1GvQ2CpMjKwfd6H",
  "key19": "2AmGqQ2G4oqTshqJ9SgLMXckjYozXLu25NDiUVACCdaB69AwqxVWC1kSqxYrpPmMZxK2o2MXt2kG3wY6dxtcqG1k",
  "key20": "fdn4u2ZicdvHZygnmoPXebah5Rr1H3BsWXd1XYniRLiJgFEmKzMfxmibWrvbUQVqQnNqpSbRMRktfZZWivTAtna",
  "key21": "6AeSebZaLjKB3mBj9pPgZ64qS2wz7euDsmChxAagjZFFJepuFoD1cMQs8dRKWLHYX19e1PKEPt7JZzGMyD8W19P",
  "key22": "2h53fUdHdMnRh5QgnZFdK1wJqhhiu8xbVKazawtyo1apH3xmqGVDMQANw4ebqKNLaR8VXbEvvQ2T42ZBk4VF2DVk",
  "key23": "5qKGmozbdonMAFKsACcULADrXDcHwhkVVCByJ1Tx6SZRmwMFDCGLniAeDHPzcXn6EGMVXqR7ebufSxcTFDhzkSCX",
  "key24": "S1gR151jhQqyMEExrx9KeRhYjGQxqucTEVgyEd6egVDBi14sohfG8Jt7TZrVr22neywXu71CUQLrkDsLxnnJurA",
  "key25": "3oVMPAfa1pNL9cSFJ3wk7MqLge7GJ3AUJyhdf16oYevp724791RPmU23vtB96CtE3skySBHJ2mwmoUzvU8izzKEK",
  "key26": "3but7vMKH9RMc6fU1gGu7D6xSzaY2FibYDEEeikoEVJ1MyQXYnASPtizdvJYbrQNp8jFKkUPfm8TouQuSmrLs5eT",
  "key27": "2dCSxR6MawZcSFFJocPLGmo8ejAgKVLfrSsNsdbV8uy5L8cUno4KkN9qrym5rEXpYeBD5HcgpUPPNfbboYs8Rdrv",
  "key28": "32pcjxAnQV4xh1ogMY2mMwEudLRx5vzXQJ3bUpNooJko4ND1346LgXytmiZAWkN3onedmU7ze7nmYujKCYAT9reW",
  "key29": "4hDTm2qf9TG1pgQexAovG6AzuFht9ccVKEreeCbDeNo9iBP6nAc8NxZa2wQFRyFw7N4aTsDJgDbevg2PkLKPNFtr",
  "key30": "HwXsPQiGPREtjBqUsoUHHjhEKYuHKHr8BUxZGtgrAcFgqBiLJdeCEYJUvJVosu6WCRKWoiMiVcvbpPdrinmzzLu",
  "key31": "4GNaKA98AfNo86Bi9rgyFACuxnrcniVEakrVhwCjMgyhDJ6ZAG8urMf7KS8yvWcGTXYEY4uQwvSSY1k2VnHJqRJK",
  "key32": "3Bh3bXcuM7X3UfqPUBN5jmMCRYoRUstC8a5UoQcBgL6sVddyjC4LzD8zZpt7jvMDXL8wM7rpJcmwuukCSPBvXQBK",
  "key33": "2o651HRvcBC41WhMyC8SLoFoURa48XsrcYNyKbLpfSTLdCPdiWnQZnzch9WtzuM9BDovFYsxHBEpXtnzbhkzN5Zq",
  "key34": "4XebHZwQbRv1PKLmijibFdbM7iYYDTmfA71eg2Tz9BNmtYwhAnJxJQ9mRP8dWo7aLPTPwX3YAzkW57i77oz5UQJ1",
  "key35": "4LxZWfahvA7RKoZuGpfXDqSxn5DUAuuz89snXP8bCxGmcerzX8mTijF494CA5pFqLd8H8MRk8TQaZTxath6Tuz6Y",
  "key36": "21KKZ2riA3C6mhPmjGMebngTAs2GN89EJR5qLXyu9phV7DhUc6xVYyCF9TzJzpAEqSoStGrDvRwqvnNz1UfRAnhr",
  "key37": "36o9vWk1DZNzHtYM3GmLpHEoRY2rVQsVdad8NZj1vfDDtEqMzhReZBvTiZTjukYW4XytG68zfsvsMKk18Bb2isdQ",
  "key38": "64HVTn4tMsP7mtaBxrx5Tx2KeXUjHCFgGGEuS7p89cmEVqhxo1Rz4hFNzoz2Yc5KJ4veNop6R582NUSiz5jqq7XW",
  "key39": "4M7PBrE34hZa5gq5PtQEecPy7783iyGKWERFUeDs8G22xR8oEy6iA5WhX7G7fSjj1sfagNDhArLMUz8xd1m5Rkjv",
  "key40": "2DQZB1veYfFeWUzuqhtFypNYANuQuzVS33TXjv3zfT6quCb7jD1LWh7dhEhQfirEh93aThxM5Ur6bySo2BnEgezo",
  "key41": "5KF3soYy2PjF58xi4gtjMcSjjY8Fz2uU5j64DMY9qSNoegxfn8j5PnPPutqgDKYp3h7FjR85uMTffeFtQmCAvgmA"
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

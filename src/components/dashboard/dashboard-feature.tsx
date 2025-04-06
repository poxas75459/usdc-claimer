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
    "ufkL9678aSkxEzWG56CB9B59sQ9dMcoEqx88k1RShgQjbno58iYtrbnPGsdSSi6mr33TddHEYwnVbCHAdsTphHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ib8rTm75Bo7yKqFhvfZMiydiMR4z6AoRCSvNvscLwqzTW8ZPfL7GQGEaTjFYhZfRkd9LY8KGpHvNz6jbyUX7m4t",
  "key1": "3eyczw8Xy6hsKoCcNp1u6xBRgNp6N6HasZJu3JrRWuUZscxYbnL2yTf2S1DS49rxufQprqFEioQKXdKQ5tfiD5mB",
  "key2": "4UvVNViteTN4FUmJQSvf7wENx7UCPrcJGQf5DDsKhAYqpU7dBadeV442QedkQ3huTYd3R1oGBrePhu2A78CFZXd9",
  "key3": "67PyFPZGnYPH7M47EMZsSrnw3Mgce829iGbaPz69eFn4yVutjXVQy4TghDaWJdMaehD5xKuRpsbsaP5Dp8iqXmkq",
  "key4": "5LZ1E168mxrcfr3fLrDEufdEkJ5WdDjP3AbsRNV9USmSXR8U8Z2Z2qKxFp8Lo1R9RgE1vbnPADqSTZA3tXWDsoc2",
  "key5": "5mSqjAmVyEpKSwnGCUm7fUabicjfrT89yuXC2nDP3gSBxHgBn8UiHuBLLPZVUq68qJDbePMbUD3E2dEhZLJwSPSB",
  "key6": "5Us1CMuXH4s7PKsJ9zATCvTHSusugjoA6U2KbJiDNoCte24mtNyuLjhAjRoVC1VS76TowYL9hLcmCAzxcZxHA1JY",
  "key7": "SX8NnzczZg3jYu8eUZ5fPLGaR8tHPGs1CjjuYn3pyF3sqwb2cHfJTfeqQ28CQaEVPXHNddsqMxDmUH9d75DJpoy",
  "key8": "3jre1x5WhCbThKi1xu9ygd38CC7mmc2JSeZNwC4jm43JfEstnYygvUJNBmtVLjfqRNrx94BqkGvcxwc6FWD35tuf",
  "key9": "3scC66hNRhk5iAULWEHSXQWvEg1mkLzWwZAtEoHLjbxjkzKYTEMhsuKmU2uMjhbqC8jWYVb2DgQ62f1fNX5rmT2q",
  "key10": "2354gS9dXUofprz9YhWAuxrykGmZzkh6YmtvKTxZ8T4HkX4GnLK87EwdGDvxaspCmncEM1ugjbXcZJHVPV5ZtRWQ",
  "key11": "2zKfTpgPTdZ3iKcEkjyCg4Kz1HgJucGrVPZg9SU1Eqd7RAQJyRKFwcDh8zrLRwTheyGd9V9kpJjXLfazt6JYTzcB",
  "key12": "4AzViJrpS54xLcJKcSx1Mz3HCwxpg1mdfy34jdTCnRm6qHwYFsQJ7QLeoTzx6bUAAdLaefv8XC3BvMaVmftwkKvv",
  "key13": "5Jjmx9FKjSgoJkyyyjzAjpimpp6LKYErLaahjTtCSAiaWAYVZUVuRSYyNa5B3wqddxY6zydx7x3HvAWamfFp8p7t",
  "key14": "3RTCtZULJepAtGT7SYrFjvH6w3N483ha1TdfL9gwvHy97GWNCLreXwYCiqyKRHspscjk38KfUeKgzVahYF57g5NT",
  "key15": "2igunr9yTMVAkTHxjWKCMCWbgC2YyfndbYaN3Nh4xCHQ4mHfZDCKXKvz4zJm4ibErzzCndYsxi9FENL6NrN524Zg",
  "key16": "3K6irKn5CiGDRo275nXaMAJacHcrDxokdBaWfVdoH3NU4sxLXCD6LCZyfeYrb8RgLdGaZth4HKfh3JMKWoXQ719k",
  "key17": "5wiwcuTEnADddQn8tvYpyGb88MKKWWUN7jUqzMiy2sA6idA8fh1RrHHewZmd6qxcZCJRcwRqFgCuLF1sFd1dzjsv",
  "key18": "5omuGuQoK9hhvzBwspS8Q2r31J42nojcKiY8chYU4xKAGjfPDxmMzEBUedVBEKyHyoi3u4gV9RfmZAiGfjN2MRox",
  "key19": "2ATQjrJt9x7ZdUjiuVMNzXHTbN91mNpFZ3vD5TapLL2tkwMbgzfLcx6QPXuxXojDKAZXNoqYbx1ELc2WKb93prp8",
  "key20": "4DFs5biKJMRwwHYBdTrSgYPkjLboBhm7rH6yy42yTiLjge4Dq8RvQMzdTXLouqm9UkLgxvPDLkiVS7pEor5RgdQq",
  "key21": "2NVSmmQWniQF7NWANRVJYJeEYQToeg8UqNkbiTryFEZivCEVJrAT6vfZZj4nNaAmTYpGaL8BZELBac5mVNKwGVyb",
  "key22": "2nScaUpHbGDcqePrwgTrfj1Ax9EHAy4Gd1ftMmCVP4M7ZUf8rRFoxTZG3nftFthTYjgQpk9By26UHxPmHwTnogfS",
  "key23": "3oPAFi5hWwAieB4CpwJTnpGrFWuZaCX3RBpes1imLEjTmsmbmsfm2pg9B9LMddvgPWPwpoAntGhJyQ1XLE1BJqaA",
  "key24": "4FBkgL585B5A1NyiPNP2KvJyuDcTKBfBVwCDWwRLKp5q86HocxHB3vU99PJjyBV8tCEFvArKdtAXxvvKnCBp55UC",
  "key25": "378YLamXCCyk14Sonnf4S79WRPxec2jMTTA4B2KiK8xZygFxW8T3hxpL7kTUmU155AbzFRiBMC4KdfkwwREoS8UD",
  "key26": "3QScokd2x44cP7eQbWKrCCw6t8zCdPhGXeLFcjd5hywP4oSUkvkwfrNr4i828u37VMwieKepfTpLvnw6p419Bhie",
  "key27": "5kMKNcN3ar3PzxWkpB7FWHpzCg3pFcZ1CCSGkVohRKNyhk1fwhqhHFqejCRs1h7pM8LGV8xGTsPsvYYj4EfUXZNp",
  "key28": "2Qn2UzeJvBJsVuEkq3poRNecFftWehP1Uc8H9PFF8JcCVRynnUXW7wf8eMv5K1j4VzCtU1R1hC3FDpm1cvW5hVGA",
  "key29": "2mnR3UXDSh9cZCe2jYFN9Bh6PPJhSGaVY9E7haj4HUcDGerzJRyuzkGGn28XY1Wy3atRcd9UZPdRYpJCa3kSQVC2"
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

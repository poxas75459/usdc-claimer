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
    "c31nTP6owru7ec3RLd6vTx7Vo7FGL4drqQGmV4THDziZhTDZ4weS6DiHauaUgzAARsubqhutca5PwFA86T5wv43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iToNdub5QD2EhThdbbM1mHRRx7w5d4MZq9edmHU2Mj8g7i1XFQbLixB5MMVgnV11GTdQafN1Ea7kznUNsY4NtjV",
  "key1": "2Bhbu8JBRgNeevBcdJ9LaaC8YYucGGsUgy8VYUWDiJyQHzz24ULkLbox61Gu5WdYjau4QuTi9ro2SCUjsMdszmaN",
  "key2": "417xUJbXWY29apY91MwF8Xqb4BYmUBvJwC4pZoiAY7WgjXgs9xVMCMiieGV3SwEz3vgeiWnXZdA2UsrGNdyMQLvN",
  "key3": "5LJiEGqw2Hpm1hPMPPM5LoX8JehKFzD4TM1qkMopRayKtVuKx1oXebkHHP5hNgZcjLz7c8mXbfbhm7WyB6vgqica",
  "key4": "48H75PcSHRj2Qfav3JpVfB1ug49j1hZqKjX6MRqv7BGAuxP8YNaPcsAbEfN82fMtB1wr1scfzDZjzNCkHkLyA1bW",
  "key5": "zVLzRLFGx2tG3FSg2Snq5XDzGEMAdcHpuVpdr5oydyteEaHLkEJaxn6GSmnp9biBUPhVcfRsGu5sQs9GDyr5Kpa",
  "key6": "TKmweFA2fpj5TWyKUyR9bDSgHFNGHQVgdBuzhVcH3YNFeBK4PgU13e4chmSvfaka9MvRjdW5WQr1GC6tKHg6DPi",
  "key7": "4pRedD1wY2cRSbvtSAuGbMjXCLfqo1CV5vaLgkctj1GoC3Zcx2a3jDGjFexSK6LdSGBVHi4iFi3KSewr7votmSRs",
  "key8": "2uXtjEpg7Zeb7p2jzjbvQsGUerM3jYESDmPyjJs9tdCguRRFjaLtBSgQZMATrVGEeGBzyKMdVCnBQsk1zfpFjd8s",
  "key9": "4TcZEBNwvLYUhU4z9no2snnz5T7DuoA1bgyaDo5zPAwq1WAguAZ5pNRNNxtcHGtiBxqpXJZMKW8yaBju9FyhUmjJ",
  "key10": "2vXxigB4hbY5zN3N62whXKFD1YjzJZ4fGR71xKNwie3gph8NTTLXVQT7aC5VmdAmnyMHw5UidubwAZApiN6iSHui",
  "key11": "4KZ54sUgjNj7CxDeiNjApNjh81VgfZdrfwuYfCHNtFfZ5X3hpp1EyTpjMnxyN34swxu838dBysZUarnL2MWPyBuA",
  "key12": "4ToTdtZdqaYWkcrxQ8AV2RwMya2JxeBbDyatUp88TYYe1DU17RWQLqQtjeityqv4KJcm6qzhZdL6fyMhStrVMAdv",
  "key13": "52Rk8N8hZ7UbdxRjhxzTJXhnkv3Dpt3hz9CidB7XUxCA7kKmFwX5YhVcgQnT6cUk616iMseBjHJF82EfF73FaWi1",
  "key14": "4terKNqdjWojfV6n2TKsfEKgayZRczEahtVjanBYv8uLxuuxe9rCvumhwBQ1PD33LEr8Hti2qyRKqhkmkojj7bbm",
  "key15": "2Y3wzE5zS9j9o2TfMXVehqHrpEQHBQX2NqXtQSRt7FSLMhQuMFtFTvirdU8DjDqzdiCWKASXJxgoLJJicBsnq7ce",
  "key16": "5PWCLuVy8Db5cS3oorWnHxWCVBMEfNqJixgToMsESRuoDSL26b94NwopVd4CQFufr7SiNGW5uW9tpiDpfSUQwu4y",
  "key17": "3vCE5zkj2Rziy7GQvhu8GpM4GpyJH4bbFezUXKC7zHkdF2vA5Vu8VSB2Nagg9MyEKS1e1gQ6D8tQUrT1zfWwztn6",
  "key18": "57FGCuLpscks5TL7FczX7qTtNUBTDdqXB3uksGj7N2cuqVm46yUfq5cDzbG1ecrrj1d13JKRW3oLkjPGTddvk1Nz",
  "key19": "kTmvBBwsyJXRnqn7cX7QvUE55hfhzovNYxY5G6YmcxYYjuzxd2qJ78TUvz57EyyeAe4FxcHM9djzitMwF7uoetJ",
  "key20": "v54YhzHpVEaXCRNuNgtYXET6DKsxA4sgzjBQdneLvcKHTBjHhCEpP9ZNLaYyxH1WU53wvxbXS6512u2S1zbfAAP",
  "key21": "47Dhynpeceh58MhKcLnDRHyZZxU53EGT5xwP3D3gTSt6df19UBXJGVAPfpAM9bTwZynpRz4eqhaw1dTx2tKJc9J1",
  "key22": "2D7vA9VBxW2aULyVKrEdaK2KEAooGiU6MyChfnQ7d7jWjBEbmnkWthrptn3hCpAhbVB1EAUuXQYTcAf54BxMBSU7",
  "key23": "5wvetgmXDxFRkzenhXJL8wNAhYgijUspM6mSyZNksJcERJGeRgZfM8bMWKgfh5n2P6apZdGnyiCCY6cRYCUmkVQs",
  "key24": "3kdgw4TGcNPBgYb77KshFhjQwc3nbyBqQfF7BjvNxWaGdHZN71jFokrtJrADj2B5ENHiMPKziCop8zVvJ4rPACS5",
  "key25": "4ShpbioxoNRiZj7r7Nj7kETN3tHX9zKMr4X3RohZx2KGGEyWmt1WfetExVz8oXR3bWe3XqbqPxc5gptPSVUWoazu",
  "key26": "4F6vM3pVSV3y7dB6BFcpFqbNjuc4CnMoUn6yPzrbXY2MwJE4xbxNtn3KgcP8Qjvw49TTQVoaWipG2wPJXgtvo6rz",
  "key27": "3q94MmTYVbHEaBqa2Pks5mg2W2Bdu6WBy7zuRimrSd2mUC3TkDxRC5Qm52H8D7BUDmJ8EUmke6cJ42C3YUcxt58v",
  "key28": "mh7DvdgBNBvmUSwDv4tLkHhSNraidoyuoWy3eToaDor9aFyWrpjX1SmanGSZycYLBnXFD7PiuLwps1AGpkQQz5K",
  "key29": "3S8qhnYm6xjnxVf7Sqgu2QRv2XDc9snWLss7Bocp4oMcYEhweTxnHGxw5GND62yhTHE9x7xE2bC5xfzZ4CUHqdeB",
  "key30": "9BqDx35RE2QH4mT8fN7qKSs47uB8hTabUhZscLU8i9aDFot3VG9VCSZYX9mT1BPgXKNj9u7CYDnSbipwWSAHhoF",
  "key31": "7VcobKZMZeDGpoKphz8Hj6BUR5FufFfyYf4ksa4ktCvfa7FXkPLfmA7tdRu9TacgFovR9gF8ZzCgf69kvhU1dGz",
  "key32": "5V9j14jLcsRA1NdvvCten1sVSoNjz6RyL4yRhGJwCHvYkeDRviJN2SwhiBMvTBRDxsX6xKc9pWYtVcvPybqiX13p",
  "key33": "44V9bXdxjNgrU9UkBHU5tppp5T83KXvioxwVYMjf2hUKr8ePrRbdiw298z5koJX8dy1xv4w36TQrt835dqCeTZ7R",
  "key34": "22ywZ8muJ9yhFhWC6mzx8xMHm3XvEqjj8VGPoftGgo8pEMDmawzgoKaun8UkqaDNUgY5ykgHm9E6xGrBPdL8tcrc",
  "key35": "3UDqtgTwxhDt3jpUxSAHWSUUaqdeQLtcaMem4CqioJU72LZZScxAtRwKTQm7XXogqxxwcxh2T26RAvHZe4okSqwE",
  "key36": "46XmRUGtzPukadrUgaXbqpxNAoPw8A16vQXaPdiMgJCHgr9GbQTKS8F3VoSNw2oUp3bqqBPESU1AV9ZgPQnC5ZbP",
  "key37": "4rLkg9V4hxfv2dkMEuHKHrYFYub7iGSeJRQWRztTuw4oZ12HoctvjUR1CbTn9ZdvMYwCkHW2VjhKe3yPyXvS7tJk",
  "key38": "34WejfLo575j7eVZWz14J3UT3Px2T4fruTTf9x7iFRejY34Beseqc66fddtvzhb4FTQBwFLQAUurpZ896bTbiZsz",
  "key39": "pKaMM5KeWYyT3fuHon1Sb1kheVmXc84jmKGzDnnhAtzXvqgyKvazJXZmkjXL9d3TNJDKEYFXpFBJFAEio22b5Ln"
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

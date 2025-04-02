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
    "5DUhDmWbKbiRyPt76yoP3rVLJWXsZy62r85TNiao4xo2eRYD66s2nq3H9yVMijvmXjiMvFsFAiGzpn5phvAVRuAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNjX3gzvYeuZvstT38mnvRho3A1cUaM8HdAitMG9eh7PqAqbwXj89CoCo2EVaLdsVq5upncgUpNRrfx2i2NcQiU",
  "key1": "cP7NMtzCWeHXJD3EUzYXk8BAPs9S6Hq7Bxnnp4HfnxxeWAHEQqk181vTeDY93GRpCWGqDVP4XeSJidrm9Ajvtxu",
  "key2": "2977WE4GZCP3PwGYdYf2RyHSTBYXoY3tA26hDAGFhNtoMTavvEjFZnRKkhS2S2QGyXVBjHQWXpHtekBeN4Apvc15",
  "key3": "2i67Qr1ixWGQwWJAoTJXBMG2y1xAYezDSVencVDqBhx46pe3v3SjK8VbWBYSnsGBtmRy4qkxFs7KFpLAReCQcnXZ",
  "key4": "2Ypk9T7EzAyYPeKTnvLGaebF3uDdFezQmV3tUXneF4bhCJNwqJa4ddXft4qhRCGemMMeimQtEAB16rFfYtWEihND",
  "key5": "VaTJ3zBxR4nXp6xmuBjn1ncJp22DhUh1SA1dAe5L5mVVvzAPd4NVgwvKqSbC2okBJQRbnWNFdosNDKkA4rBxnDj",
  "key6": "4Soti9HyYbzjzV3DcFbTA8N32RjGKFpKfq6vrhhjQs6QTfLMVQPJJ5onzZtgXD8rFQUkN5PqVA8T4rmC2BMi4LH1",
  "key7": "2njzNv1HXzvz9VVu5qENcayFopjH2xewf7rjh7tZHfEywfYWZpKwyjdwUDXsPtQ5hs3oTg2SoZEFAi6nVAx2K9Lo",
  "key8": "63RGZi9HtgBq6u7Br6PMJi6mEtZPeAhCKVvNxgGCCeRQYVcFyeYMJUbG1Uv1554Bs1aRm3ShyUZJ3gNMCq8Yj64z",
  "key9": "4GwEpU1mYPZ6cBASq7sznGnVCksMguAq1VSoSMa5JJWGhCdKo9Txjd6KTfmbDSLyPvQjvDDPNhPPvSfhRH2WjMsB",
  "key10": "fN2ioFasvKfpXeuTyfQDjmAbSUNKvFYNLLNfU924Di3Di36NeF5XNtGa2CNPfHjAzVgymEKPgkAT9BEV5nwbdh3",
  "key11": "Qjna6muRq2RcbtgruqfLvHT2g5zvcHWqu4sf5QHnatknWzeKmJR7qCrMTYmL6qkhAakkh9F9iVA6MdEXtCkTTgt",
  "key12": "4aDagkMsg3jozgUradtKtGeAo8RERVqLmaGkcrvsBUPh57PCe6A3oc2syhuryszAvVGRZn3LQ5zhxxSt1TS86Z3q",
  "key13": "3kkpmwUbvdBnGL3wNuP1TnnDnDkB9DcwzRDtKBBTHhkbGy9MRF6BN4e2YNntorHU6k8MnHq5TqWiCA9pNvagSRz6",
  "key14": "3MjaMMeUGQk5mxcysTowCtg14vo8om5cXSGyAQi5S3NDnavEADCFrzLUjkYT7nwWNvniKEsABM5dbRgVnu1RWA8d",
  "key15": "21ung3hVj8SyYzoUpk2qBY3jWStdVGtrht3uoVMMUZ98RxT1MwSMCcyZEM8C6qbTfrHX1N85Rz5gAKRCmjCfCyaq",
  "key16": "3EF1beWu9AUq4zL51bSvRHk1wio71q9Ftdh2hX45QC4oTHqbXRBpisDUx3wUVky2DZrizCUfvP8egaPP62H33ssw",
  "key17": "eUVcY5D1PyS13ugNuqqtfWanWSHgDJiosVjEQwaDe7cDDBkHRwsTqM6jRboxz3XbKTuQPr6YNim1oXUgWnoejYD",
  "key18": "5pAVFnoSFDkebVe3LFfpgNK3fJtNp6fGNAm4xN6oa51WU69QiSMsrE2HN6ZUPhtcuHoKcyTa6ptrG8D8EHmuvTN2",
  "key19": "3ciXbDQPDQ3JowSN3Mjuta6zZsNPRsvB2ehoqENAVYYBfZoKDMdFJc3vANTgMR3rFi55gZgK9zYV1wmiizTv3MDP",
  "key20": "3xu3zi1jqT1721Rgt3xEe4EmZFzehcBqjzpy9zJiXDmH7hApyLYZ7BnjXSrgcCZLKU7W9V3vnVHErMNY7e9EURqs",
  "key21": "5EFiU257K2FfAk5JBQF3y9NqKHwvyVqDoFoMkGHaD4Mrd6rKGzS6qgFhKs2L6Uh9uXtjbCoGkLFUUfGNtMa7oEVj",
  "key22": "5sJRhfLnxHewMCfDi5wqEBiCaxe8NuGRuzBPiWqZvpdwZYi8Wonx1ZTbuakC45iNzcmb2gokrT7jR34ybbwQi78K",
  "key23": "2f28NZ3C6ioMvzxzggjhAPJNuBtNSU1WSGsLYs8duLAtR4rqYHFtfhTV3XuPjq7TMqiX15n1gUqjo7KXphnHJQWX",
  "key24": "37WmcqJSfQFftv9hvTPh5ZA4gXTpBDwLwqub4UtXf87TQVVyhjGZjL2QSB5Zak7tPzrXFQ3aDNWZ4Q9NjBj3cZ1w",
  "key25": "66PCCrb9LQSN4XXDgNL1rRipDkNXrRAbK2djZDkw2qKHp8FnCKWPhFTZb2KMuRw5HF6k3Scj89FGRkSmtVo9hjUc",
  "key26": "3XXjSbjEPRWnYFb6UDdUPeMKDN7heKKLgugoU2g2z19xUNXa1E8mLaXesQ89ozFi3X33MwvX5UnTqqfZZrodXTKr",
  "key27": "36A72tot8x8zw8qmEoKEposUBTET46v77rhXpitS53QYk4QjTii7Y4BU2Ry9Gecc7YUZkFynM9XFQjdwZDxdYadB",
  "key28": "3M9d55KnLr8NmRAA9c1Xqh5TTJaRrKZMSaKy24RfzFqonTE4mhWk9mWihuUPDezVsd5TWQ1Xw8kFSYfANQ1yJjKE",
  "key29": "zVNVQ1hCkjpfcdVh8kt8CiMDKp9G6RUHVagKUK52iveqHgWTRPoUr63YJUPFhsPfb4PjBa97wFzi3zZVDTzhpXn",
  "key30": "3kctSMJnkEfzbfSkfApQBdeZsrgsu4wxJCBEhxH3mUn6EAPFi6X7JFF4x68GBGaDZDdsXoZZZdgJBm7xDq72ox1i",
  "key31": "2fjqsdMZBqQKFDaCQT1Y7c2GqVk81Hs9WZCp6mn6BcTMPES85562546Jz89gmSJmJSWjjYSFaBVg4NeM2VAurtr2",
  "key32": "2Qscbw5NcSezoBpbUKjttTB2pxKQPatxZ8pfn3kSEg483StTmP5sYJM54Sf7jUV81qq92yTiBWNDcx39zkpTJWjR",
  "key33": "5ZyZkMKFK2XPdPT4cFCVH9cuFatgdrpdGMaNfWNoYFmHVheQqj4yTiqiLdBFbiWeU3EbtXTmBFt3z5nZ1UidFX62",
  "key34": "61H7LuKYC9GdR1gnZ1KVAWX67wtMeAS7bf5PuamEJLmCK6ZdW6kQg6uA8eeuAaZMk3XhZZfmt4Q7XRwfX7m2cXRE",
  "key35": "5CS5gAkDLTfbHtg483eSZpQBqr9b8WXoNdRjQZE38byPBy8nCLxKxeMJZrSnunsWvEaqjCdii8VMMG5oyrzqxVkC",
  "key36": "vgwPLRYSKZJRbqL2oAGDtPJhnRmmCMQmArSGPhds7JjBsUxk3EZeqXc7zjc27P23AcDDWQUNYL79zjd1FDRmk2f",
  "key37": "4cvfVMZUNDL8JZXYqG5DEsJVxHLxLSnWZU59gtYm2dZsqt4c6jCPGWnFsrhjUHZNoW3gwq2daDAy8Nt2FzPvs3Ks",
  "key38": "2KWRHFgCC1d7G1ATnNiqqPq2mLKSteXUS1AEiDDazPyqa3Lf9dzhvha4As8BCnoZoR1vGb71FDG2rYpzDtqieBsd"
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

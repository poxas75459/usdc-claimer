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
    "4vgPxs5xeYG3xNYTdxfWtc6dJtxb9S8xQRZwfao5sMv9LyQMyfawchyPyZ4xNgNuvS23yeQzzjQsfvdowrYu32C7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ckf6MFjAUC8x8Rgo2gfk1jMgNpU5dd5P7r8wZ22afTWRYhBxHjZekH38o8W3AbixsZBS4Z5dvUBu3m66eK9e2y4",
  "key1": "43PVUM5nUEmNK8m42gCxjee1yEXqthjgxBBt8DqpDVVPNiSMvjdotExnFJDSuG1jNL3byUMGnYsgL9nojbUN32We",
  "key2": "4k1kAAU6ik2DwSW42csmjmdhSbR4juGMMWVgjYVedhYF9CVnAVR2f4FRsAaC33gWpacvxFogvERgG7RN2G4gNY9B",
  "key3": "63Dy3cRgW92BctNTKDPnB9T9q5te2eKY51AmVZuLvw4SvVcniRbtNRBq75nVXbRUcQZ8Nj4t3pbjCyEAE1cbLxd5",
  "key4": "26YpFj9h6if4Gv9dATuupNeaSVMnkH9VfUPhnk3uufQaiD6o97XmcvCgnogTxYb7ZLjg4WMof1wyVtsjJsGs1aoZ",
  "key5": "a1NR19PHQr7iC1WLVRPMTX3aDdEPi1M82F4XKq8guTzn3AXYV9VarBgz6Ck7M8mVZ4QdvyUPceoSckUkugkRzs2",
  "key6": "4umciV4Cqi9Tp3RzGDPazx8G91a486hdbnWpbfyAMoAQTJLg9wwvdkZpM4QLnCkxUTK9Ag4NTsDMmDKS275ix3pG",
  "key7": "ByaXwkxYns7VD1UoTQr2saYq4bu1BQ1WidzuWqxzjjzRveMm7Z2mMpssypj9VAfFEUBLamavVrZdMFQLUWBEcWd",
  "key8": "4UoiopFUkNGMAfdCQvQAAiLsg9xmmddNrgcQjj8Sgpqqqi1an9JRetFmmtNxGVR9GDaNTdps5qYBoVTdH4AAa7Tx",
  "key9": "5dASeKEnar8jYLQDgCXPCwgcZguWrScnnZN7FhGamEsvFZ6fJnefvBeuzRR9PRNdD3CwmFwMPjwFZJ5rpfzQHUaw",
  "key10": "3bZNQMp7hrD9T93W77zDkRD4uwyfaihuAwRch99ys5UXgVmbvnJwVFXbmSfKUQufrWCsAmP7MU7zHyRoVWLpD33J",
  "key11": "2jcbcjktaXoXG4hw7zfMb5ivgaN3rDkx3jcTjmJ4hWiZ4aUJ4D4oRkRhj3kxs3GuPLnn7qmBJ1R19DSY5N7vtjs",
  "key12": "5w6RMiQycqKEptJTLyiCFZPQw9p39AHmt3W9hokHpKNCPvYSnPvU3MFamX2B2Q9duAShfySqeA4f9TRzSxLZr4NB",
  "key13": "2odBjq728YKEZAWnRpxKqEDjyWz9zCgDYy4MrQXxNoRuzo3TYuSFrPJPxit8zMiD3wJdcJaqQnRGGj6T2AatrLsU",
  "key14": "2FtmHVd6Gi4mg8BGpns1veTiwt1LipXEuZD4JKpaayS54z96UosRJoEexfZAefQ7C3Fnw13gj5jojKe2oggYKEC7",
  "key15": "4cZS3vpMQEudxrpYmgQMdZ9omPMmMdMfxcQUYnPyM7XknHFQEyBRsJK33LSbjSc2ozAhwfrk2sD2sxfCghUyb2bT",
  "key16": "5U5UHA7qn5smBQxojfWsKjrBMQbkX8hkDCCCaVVhPEYWGsS7k2mzaTUzi4EuqENqbeqAgJCdP3WHYiEbrqcdfYzs",
  "key17": "4LcBU1tR3qQF5nDPsMCKLVXNBhyPKC8m2dMFNomL4vBEM1pUx5Nv6YLGxKAj6SsRpZ4MeCW19DDu5YGMwDFbS71d",
  "key18": "W5CovtHEYyKJ9BTgtqfdP7g94ySoWHGrp5ZrQLirjoa8X5iVk8gApMCqTCnfFTBhRtpx7wTWVcDSVT4ktVVyNem",
  "key19": "2FPEJ5LKmVoTrAGTxxvcN6NQxTLwLMwPRTK9VQ9tTQPkyrEWPw6DyWbPDA8Nak76sg7RvyeykPwNjXMSCcshFQtw",
  "key20": "3uZKC3uQaXDeopRpgLdK76nrBTsvAYKt3N4x9HgxCf69cpXL1kFaERQe6Tz8FPE34Z2rK1pTjbmRM8PHQremYtH3",
  "key21": "3pgSc5pKswGuqhtYgrTG3zcdmCw5nbLFSNojFfqaGmKhGwFF3kjHN81JkJ4rRqDFXPS4szuN4hScUWJgeXekqAq5",
  "key22": "qicYUVegYV8xDHUUNNYsLGwwdPEthn6aY39fnA5qNue72ZKhth1y5V6Yx5F9tRHDji2HZ5knABZQtQCHAX8YJen",
  "key23": "4yoohZJcyMAbQNVckQL5ts69aLmqebsSUsc4MMLxtGRCfkGeP6UgtfX1AePpjrLes1C7dCfHAJWHSLhFNXaSFYsZ",
  "key24": "2aEMvRSVRszpCL6mrV7GpbuiwesAzYZvso4nYjPRh3sJaECTPugYzRwMy32Rv7dN4utGgPWcHDAFp6QensHWSaVt",
  "key25": "2NnvyGKdvpi5Kg9YsjtBcHjTbbM5HbAr49cx9MRMMSF537p3qHPS41cycoMbKi3BEyikfXxQUMSi5MtUMqBgjY5X",
  "key26": "3LPiie5T9LP6zwXtZCx6UteWTEqwUXFSNnF3teYviSR4WxxJ3Tsa5VskQzVfe3HVT7Rk8c9pyuvGx7TPvdGxdwBw",
  "key27": "4naJ7V4cExJFxWMEhYSWpJuyu1v4t1PqwweC1DTFkA7x5XqBhw1KRqvBqfEjHJGDncnuBQp7n5hhAqMzdZwU5UHP",
  "key28": "3NVQEMxn9ZhApkyC5xNMz14QBaMojvkHSKWAHf8GzAZL5dREv8py7ca45tW8skrB1TG2Nmkg3WBh3SZUmE2H7qZh",
  "key29": "4Rmme1QWajHRwFeUon5cuAUgam2KiEXBWmZoaH8wXSHEzxN1AdKaGZs95XrwMCjVJskxKvGFC83vRNTWuwweUFqk",
  "key30": "4AcLCJLvVpVHU32w2QwqQu4kpA3Rua6PvH3wiUYUiA6uUJraS4cg2zJgaBqyHHpnLNUWudUinAk3xTJFp3iBdRnP",
  "key31": "2ArU3Rvdie9NZXTDAKSTxP4C38fFRgDimN4j8Wod8j8m34jCzhmCZVg1BHwGsQRwFPBAbY1CRRwURSaKUUWwynUj",
  "key32": "3EULFwUBPZFRkysLg7v3kKEijj6W5WstGjrePfqup7VGhkzNCYHnenoCAyCDEa1h47xFUB8Cc2ESam1ZCTFN8kgM",
  "key33": "5RwVe1kcvBZpUymD6x3QftCZnTJ1ddwge2GJwrApeeMjWDVfnocAJZ1VdJ6pwTrSt8wafsLsEWZwUsPaaNGEkiTj",
  "key34": "CNYgKmVXoKnrqtqMJDS2d3qqm4KeytbQMxegZtK2EWqH3ZWSwU42UQgE7mHZsWibMJLTnZUFhNw2b8yKoP1GArw",
  "key35": "2EarmjHWrWRtTKfZiUGR9kqHJDCTfXWNEodRwZnoq2okHVXjicz9kstcpxafHyvfEYQbKC2jLWUVwT6qDbHUuHjJ"
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

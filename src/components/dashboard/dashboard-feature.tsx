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
    "66jDr8XDPWUMH8xAvtHNRFPKdTEj5UBvkkbeZLLY1jFQt7Cj9K824yhcZKGoTzdFSuWHSa3tUau9weMw3ux43bWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vt2ypg7qgTnoUrNJbCWPGxdP4aPkUVBfL34jcsryYhCTDMGRTrXSSLsnRRnjDcebZ28L5sqA7NRVYvNc1KKHZb",
  "key1": "5fEYDCqSoiTYULr4hFJyeaZUt9nnzSrQ4kKTDGiWg1yZs8XUT3Nx84NUJCzTLXa1drXtQGgrhBmVQkn2PavpJz6b",
  "key2": "2Etg1RVvLXEMj1HzUH6MaDqC9bR3wMSvuby1o1j1sTe586Xmc6DdfSVqAhRr2ng2ErZScERZfDvSsVWSAjeDuKsX",
  "key3": "oQRkykePSq86FsAPYXXvz9AiUXamtR7cUdpxufSHh4AuJQc2Nne2E15NGsHw6d7kgeRf85eiZfMjuCufFTwPe9K",
  "key4": "4rHsMooWHSyVE1hAjNZ6o94H59GZrzwYVXMTaA42v4Jbe86BaRjJN8m3SuUL7ikQKCTucbaUGbMw7hDv3DKwvjVW",
  "key5": "EvzjSdmZqctZ3HvApm6HxBhNqyTSorw5CaYmzzQrVRpqJbZQrfTEHC2S7yUDP4Ati6m1Ev7phgXuobQEW72uKCB",
  "key6": "2MF4ZmS5RrknuRjBEMboa49DwBBh6nRuECgmq97AiuA89fEc4nxz3xo44jGpVFs8Tn3bAkTePVeSWH4ra3x3Do8p",
  "key7": "5DQpjcBtrazjokJo95a1JK96NinzfwfsWm8JXft4zBTPPvSwk21swpf9pgEEwyTmmBwHTAiRgTWbGWZJgMKjCeCD",
  "key8": "KbgUdyx335pKFhj6RwXP5tT8RdJBvECcTBnhjDskM8iLbBAc8QguuWp9vECYGkXwVYFdtugXJdfLkx72kpYiS7D",
  "key9": "5BkDhiAKbo5jyitM9hRg6tMJimp94NhXb37FPYNPa8TxJ65XwGDH9HKQms7NVu7kw85hSLmFxZTm1Z4uhG8j2gVr",
  "key10": "28dAeoay3aGMutkHVcfwDXMeWX7SjB4jtCVq1CHzpEpKd2wugVS1CZibtiBYbcU3qT3LJYrw3NcmECnQFkDKdnhT",
  "key11": "273jtByD9umkCD6x151cH4A9URkhb5XMaeZZD6Gwbsma3Peb9ortRtixb6hEhbyin34L2WDqEvesDzm6Vb1HFzLx",
  "key12": "AuZyCwhnaqqm3A89wtgeH5ubR1geeyyEsM6pDeXLyXEc7PyvnrRkgLcBgTmD5fQAZFgZkcyrQiJKJyxSGQqWonf",
  "key13": "2WAiuRWfKB1dBr4EQfZpcWydNNbEVe7LYYp4aWYU5gsgdiHvVRiG3a3irfUFPUBPjRLRccMzxCNF4CfJytVHxYJy",
  "key14": "5bv2A467Acxp7aADngRYLXrTGWvzyfoF1hkLoYEBTuCuhwpzNjR4k22h6NspML8UHgSEgDpSBuKLJWDL5xc9mBPT",
  "key15": "5Y63K466FmHT4pPUWuA3p9C3LLTykUC1kTiw55WD6urdmEMAQfgjQj9Q6QhJ9eEEyFSbU5zQHnwWaRrP8EzbvDCW",
  "key16": "3oB6tW4WbmKukw8CvDzGWN9rXWdhqZSFY23ZbfsqJYfEh8XhsZMhF8is6t5Mi5c9FQj17hoECrBjWXYfRXmM8GV6",
  "key17": "3BHBZngpSLt6pbuEAWCfncBJHospYz5VZGU3YeGaMCnqoUtitE4wPd5EFSXenCQqkxGHgeShFVvcF5a4aKetn9Fg",
  "key18": "4E6fSMb6eR9xqxjnssq1qgegcqJkyW4mEiamsdkxUVAoHXsVNzBWWTgqYBxQoFkmTwpMi39QAVhZ8UcjjwSi5N3y",
  "key19": "MS8GbAJFhz74268oZ2wbpHjAJPDxFgmN5Q2Dz3KYcGNn98Hyez9oXYWB3DKphHx5o3dQ1Xq6TNCnpvGNuCNWXGM",
  "key20": "fH76kbnqxG2i5bJctCqEQM3hzW2FtmMo6SocbhtDsYrzc4VygxEAMBynUa1mqdfLeABAgTK4Y93PYe5PwdqNpWC",
  "key21": "WmADtRUHGNNpS8CDtyHZYQgpX12AeHKrizwxJ9DyFXY6Bjj5JobanroVhrfKWomhPcdwbP5JhaWYPdnZthTCYvg",
  "key22": "5ckcBY7Dpgy6WTwW7kFDzSDbgMCAb4hLxHzq6D2StULEgE3dt2zX4uNA5CEK61UR124s2Nnqig5FWQNeVWqtgnN7",
  "key23": "318wsPGkQ7JEN4sYe7WuaN1AeLrJ6J63dvueE2QJLZwkywD5cfqrXwU81dDsp2ZnBNCyox281nEMf1HaUWH5bEZZ",
  "key24": "Kha1jSZSJFqWNSySjHidfcVeauYP5JcCUjdGhog7L4msXFwxMZuQPEaLKpVUEhuvdizt77oekGtZ8QZpPJLCqBT",
  "key25": "5DTip6MfjTDasyewyfxU8pBA995QmPyWJKWsv85fis3yv2uBEyNn6LVBQkLVkhhxWv9may4ujuhbL4X1iKupT2po",
  "key26": "3vMDYGrZ3JU4epChfbibsNHtqpf9KEEjTdmZsBitS7unGJ7dmV3gBhKvATAfwvanJrN5cpfV3PLTF2LtkwtTPBfW",
  "key27": "eGee45YrTS5zLNWCi64HjMygyDND5J93SSViFLxsAdYmkpDReUX8T2jmPQPvWFySMrYXCG2zLgKAArtJgqw4NUW",
  "key28": "5SMDqNdb6NoQovAcL23r2oHjbirZYYLpDG19WpRSXo7dXyGHUcgCew3wtHjMD2j3TXXVyCv8Wg286n2bR5cr2Z2U",
  "key29": "5Ax8KQzYgqAssaz2RniwcfuTGuKGvzsCBmUYwsz6rrhq9khyY461zXXTomjbYWVvNsiauQjt9asW7r8jKaAagEgu",
  "key30": "5JdJSNfn8R4tHLe5Bht14yB9SfAoMqvWTbU8VPrZso3TCB5kpwXf2W6JaAgMe1YDYT3SpuMRYwEMUVjVWq76uJ1U",
  "key31": "4ChR4VGd7T6AGsogeCq12P3J4PFJ5nPCkWweKtGCjdypT2mgLMMF6XMYL6byEYjjobAzjQDx5QiY3rULugdUbZ5w",
  "key32": "5FNW35t33PC1MpcK8wmKxENnNLCbn6oPTpmKKmoneYL5CUtbZnnJvpVPpKEpqAZKWwotq1kTKUdVmXGmd7ri3yzK",
  "key33": "2ozQVGrpxhv4cgC9fa8RLnu5BDdosnptm6rCdQQvEaRGvrZGP6nCf9eJE1rVe3EHrYTMCSEdy1n5KMPUwQss1bHR",
  "key34": "3Lt5wm7KgnymrumWMZWkH2qjwXpqQ5gMd1k1Tcio76ZyxpAGbrmPprpZM1ncHhjndXny6DudFJdAJiPEmh7MJyaL",
  "key35": "58cKDYnFS8hPPW7kqqxDz2xBVD7WAbLQ8JGZouTNyEcuAzLXGBykB7EKUNMMcqg61bsjSgs7mgX3xnbSQexBoEf8",
  "key36": "5kCV8aTmsQUbVwdtH91VyWPj2bPVixspUdFaaZdzDGuyDutYJshwjQV8z5Tye7cDJG2skK89dY7cZYmrzYwM7Pb6",
  "key37": "3CbajnPUDUo14S3M7ZDanMDzBgHB4krEnCh15pCTV3mebdE4fTL2sxZXg7MihcdCSdHAH3fT8TvwRt8o7YZKkaY5",
  "key38": "u94aJYjavgmqwRMozMvgAdNd3WyyhxKZVuXPsWirZPKWhfr9RCF7Qw1Kkcb5NLpuzpifdnaEKt5V8B63VRKFV62",
  "key39": "4BTyE7N8t8Qrqjbu3oxwkgBXvJt2HvCiM9D7EYEVJLQu1BKP4dJpV5hPwT2toLQuz1qBacEtRbmEdvJe2LdBKtaG",
  "key40": "3qEcvo64qg475EYwinAcByPVLLwfrPtYTBCBqNiTiSAuyTcjdt46FroVrKwstUUaRsFjjb8C46S4F1Di81BGbtXK",
  "key41": "6awzjN856Q6cHBqBgbbkX3fqHYSd8fsbR4Y8s6XNdKfhbmkGzWHxZPqoR1FuJPPYdEE6fFGpiD4Myk7rDfqBFTu",
  "key42": "kPX3TNgvC83FmEWwZ1tfbTu6b9nvnLoWHUmfTCvsqZYite3kjATCKNKhHgtowBVU4tMvehruz9wQAhny7rEd25E",
  "key43": "8A2U2TUZbs6XM7zLgqNM1ECYY4XpMJpQiPmd6dV56t3FH4q8Mxx4ugjomSSDjnQ6stnhrMnHmQS6DFXFeDJhj15",
  "key44": "39FPjoEnkpd7bQUgjEzBxspW7FaADBEWKYDJacL7qtDv1JtUwStMMN5Rd5eWQvu3T5CGC49dq6MEaxFvZoFmHBbH",
  "key45": "4XoynEbKtKgjUo2RbNQm5nVC5BUWLHeaFU23X2Vge96iJPpbXCePHLhNw4BjRAJYVnarRuPaREVs5aRrPzXTbiMS"
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

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
    "3NtPiEQjWat7Dv7mYc6N56sCrShMqUw8TwMiZDFGqPZiL3HU1Ec1AWoMq9npFhZLeDyA6fjWMRDAeo55ctJX73JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3rvQYDPLU9aerdAWsWDhcMf9jb4CzahQYwWmDBP4N5RbiyV8zBucKTas9sY9mwZdwcU3MPB1rzPCAkQdTg4gdX",
  "key1": "wzPnvfs77gHKbZ1smWRAZRww9Z76QCB1NVrXK5qJLKbXwPRq6Vt3Ga91eDyP8MLLDYEdRoaaM4AX1fRk89Zmy9y",
  "key2": "ePYaZ8fd7e1Cn7r4nupdw23Wu7fcFRtGGLDvNU9EvDAAx1c6ULp6sfsJc3cVTPadL1We29aqUDVCVyg6Gm2sJbp",
  "key3": "66CUxsQ1f2H4fZYzLiL5WueZkHvg1uDJsNw9SKYudcCKGdcAeAkmo34pueCjDoCkJpbkRzDhvXBXHSC3bmaJyLqL",
  "key4": "4gHuYsPEBJnGTMKAofcLp4xzv6gCA8V9VGXtLh31oZvTWodcb3AGbWvS68VJxGjMa3XvqgPFtuLdNf6VxTncWFq4",
  "key5": "4SCFW7si3FDtQ2bxyAERbomfFMGD17rmuUxTaKeyo7ywz3XxYEDb85MscXf3S8jmDdxNbUKzLhLUpvJfkjUWANz5",
  "key6": "2gz9rvKaynWUEt2qii8JxGqETn2jijg11FTNQhjnEPBdYhMPiQoVtgy5oQSBPJfBLWcUuYgtDs6ByhaipcSaM4P6",
  "key7": "2ZUquyobE2KiXkUoFzcNT7ZpAstSdbpevPaNpus4f3UjsgQBxmba1h1fXMhLKfEL8dJcL7sAdAY289Z6oxfiCwW",
  "key8": "46xibaCKTh5F3PXauVB6zYvJ1itus1SLHVk7wVdduGjir3uoWzjk6Z1Rf63LttTQHwffrJTA7fGc98uU1jJE8suf",
  "key9": "2JZFYC2UqgSEBCTwnsb8mwt6aNGKmJ6TKRKjwTSpv5HR1MAZokTCoPQFU6unmMx9F3TdBuyKYwEM9PUzrVzbWg42",
  "key10": "55yAaZ8E1pjFVDAbXog8WJWPgq5cvnUzFTL7p9JYi3L88sDTm7HoJPawu7Q3hyN4kjFXRUygquCpBk6PWPuzSGds",
  "key11": "2io7Ykch1QKGwd6YnWN9bwgQox2LsoyjCv6pQ79wZncvUBP4kxWcDfdaS2qmwNKFQAL22vsF7LCCuAnqbW7yt4Ad",
  "key12": "CnxK8fc13JVu2UizGs1U3vbEMkqELyTU2w9VM5JdWWBn29kX1PSJQaYbHRYtNunHKjX5pHSTvmWMye6jyDZtDRM",
  "key13": "2gAKvDYsfPhefo72CF7k2QNWyw6QTfC9jgA7NUMiwY1rPWBAQUNbFSLeT6E4NjSFxKtnigdDL1pucitqmKxXsfnS",
  "key14": "5azG9d2HRq3fnMp9NFyRk1UXqEbD2riD1s23qdQ5h3fsSimbkvoaT6J4w1DrqpFiVMz12HMWb5oNExHewV5jJK5j",
  "key15": "N3qyBJ5NGyojEhU3NagZMRWjupKbqgWLh6vU5wHESUAb89TagSjBtrxX3j7wCCNNRfoUMbEFYCdzphkivy4JtD8",
  "key16": "2cMU7dZovQXA5LekFKNnmegQ33KpB3bvYxd1spjELSkV6VVtvnYo3o3zPzKL2tomQaqFL42dyfYJ7jREr8SDyF8m",
  "key17": "4bK98GDvfpVW4QKTwcg3dAHkr3V5gsD31aCNKhqvWSbvTBgs831fTQc9gwYBjzczsRGgGLecGQGtpzwfqSXCCQ63",
  "key18": "63zqvVDChpRYHfJYXYaZcJesPN6oqvzTJsiRCYAmyiMod6JHNLfmPijmhTfE2aeHLXZXrdVtacdpP9GyQSrv2xe3",
  "key19": "3SrsuFHDsHY6GwARqBfrEdGk6KuPgRRVjGckKWGcD9p9GKJeoK3KXn6KwgYJum15YZtHCXun4ascrsgpuLouEeZf",
  "key20": "3FgZfozgU5zXRVzzvFo3B1zirEiK7dK8mKmLey83hM6kErULr19fiD3i8f6CSTqt6dT4VBNm8h9DJXhzxH2zEuCR",
  "key21": "4qN2MrqWrfCCJnRixaz1PKTajEJhWh53wZVgoADd297SUXbDABerYLeBSnJPXN3ss9n4yY3xBTv83uymuBPdrog6",
  "key22": "4NJ6T8ddB59sMxkuxYeTjVogptxrimVMt11Rixvy5QQbYqqZAa22c9EcQkPWnfRvadS4vQHyybnfeikH7q71Dheg",
  "key23": "3Viy2UNN6pShfpMpjaJyEhT2PqNpovdaTryYzhR2BYy4G5GKeuKYfcvkVGw8T9vwCvPVV28comjUFuwFsSc7gkkW",
  "key24": "M4cbWEPZ5kMEGYrRaUmwhsc2YKfLWcpFmCh4cKKbFDMnmPSZgXq5PqPrHJK9W6E8r4s4YVgNptKUUEC5YgfdFaZ",
  "key25": "2mv633PTSnK9LchZ4oH1N5PgHoaUvGg2ywGfSixtafMZaccPTMMYokdT1gByyR97KGD92qEQMNgTsVxEcAmpixu4",
  "key26": "PoSC75pukUZ4ceGcaa4d36ZVSrihspvQ1gkFW6aGD5eAHn6oTP7X7QbJtPco8gofijojeHphM6iDuGUi5G6scyG",
  "key27": "AdmweshD5Y9sx2zJxeUUEgHpepZKPZHGD49Hx5vHKY1cnwL9jkRWw6jDSWQ1XkZa2hgK9JUyd7wYVKmgHoyA4L9",
  "key28": "2oFREGsH2gUZYe2sRFPwxSmaMH1CeAEmWRh3eV8nvy6NEnxYaEvdiVBioxioYUPKGERZm5kS8dGvZkz7GvyyPVC1",
  "key29": "2yRg93xPYiATMdy2JEENXiH4kpXHae8VXxC6mfRSrcECDcXtJrHoQMUXfrB7ZV6jH13niW2Uk545fAC6maddt2d7",
  "key30": "5d3nkijqr5d7rxLWviSsiAmA15i9sS3PprB2HQEDbMqbcjsyLP3Ktpn4WmSqmFWUVBE72TDzRJnWC3Gqeqm2HGZa",
  "key31": "3v4so7gk5qF3GTGUyvbLB2RXAicEbaxw5fiXnzXeRSMubWEBLNRkKxzgsAJ7rhvctzkKdstKgWhfZoJyJhq3sptM",
  "key32": "58pJNwBiyrDwhiRYcQB4JB6yMRN5vhkCsd9Ex3jdPGpL5DYqxKjeZvX1qe1B4Aj9aTZkAQyP2R5GSHDvtXdBznX8",
  "key33": "pCUfAT86UBJCXavKqasUZuguUfToGN6gLbQfaLwM2GN5Z73VGirV7FQYk31DtXRLbmDYeHS5RKiQ7x7TrKKWE3d",
  "key34": "4Zmn8a5rNnYgqoPF3N8PMyMUgp4VzUGctuxJynMgYH6NESLdEQwmKGKyLfJfbzkcBmXbvGPjrbddQKXWBrXRpyah"
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

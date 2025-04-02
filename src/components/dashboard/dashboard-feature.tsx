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
    "3X1Bo6CKKeSvESnXahox1j6mAAD4eSS3hMuHAw2JtRfUQbikKXJngyX5XUcLnX4w2Ez5GjAY84vNscETJStq148a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52eBZJacVWqbPaWSxi3Fxz1eEPMX6GCGv5BJ4NnZL7vChWFBw8ZphTBRDQrM2Hanh9DxBTN8PqRjsq1hgeGC9rTK",
  "key1": "5kRCKyM7S3vNPQ6vsW9uzRw7UbmvUrnQJMFAegNpz3z89uzhXzBMeddfruaHTZWkX7JKdFfK3GwQLAWtgtmvknmx",
  "key2": "gDCLRWSGtFfJwbNJAXd6L2UEtN2MKbRDpqY2f4F46aDzNjr4KLd3RX3kY8QcBX74ahvcvEnUenThox7bWGHYMS3",
  "key3": "3fTQJz1xywsVQAaJvpGic3qEs48gwwRjP8dTK9RV3tMSg6dNEHFT2wv1t3pvqjiYsFfstm8s3A6rpDrd8aixMmcv",
  "key4": "3fK9ysgaJpPN5YENAcwThxvBF2CJFDNmj88CCejdHrUR3A8xzuJNExZiutWjggpxjC6sQumuxcMy2uwW2gCSfBcC",
  "key5": "2ADGFNCdHVotKxxPFhrGTufQxWrN98foKRr2RmQYt2zmhPZR9cfNNGBAVF4BcHfc8T4ePGW7atV8A1KGzS59TQCi",
  "key6": "5j3SbDuf1WuHrcAfwRB7UHxWc1CXroNaEhE49tdPyELGk1gDQQ5Pb2zTPPurWyWYda1ar4kJQesJqGoevAni25n3",
  "key7": "Nh4fVHmEfL1B2wVRjqE6pHCntjNacmr1U8kfZQs1DMcSjQLdFmnVb7nrchNFXSxcLYMD3NGR1aYwJk8R1QNy7vz",
  "key8": "54zd5t4ije4e3DHMQxW1a1SSTKLsk35TWbjdvGe5XeWfyvt456DvbFWnH8CKP5UuL85eTnpkBhaoZmzGJuTAUX7U",
  "key9": "5K8yFnFKJ7fSntoaWkmQ9jNih5pWvEGUrmmCcfPTXKhkcdsct1DuDebzh8AEG4gUdP5vmKzaCjEb8Ga3Rk4BuD9Q",
  "key10": "2VN5YHJ4rcauPmTJTWHALwLvL1NqyAg9ezcHZXPyYeHejf9vBGEcn6zYfxeHSWzB6QgcksJMiubBzsTHEC7KutUB",
  "key11": "3tozTkaH9QGhSZhQL8j8oEBaqqampu13bS6kN1JnUVucEicQxwG6g7GTGbkwSKNfjrYFY7HGfi57nTCrxzFbZuQc",
  "key12": "24K5x4tc6LteJpeXDATpsyq6P68DAFrRNRBViWpP2Tmv6J8M3rdFhCvybWrUHvdXats7aLhFGMETXPz95JHx6eRr",
  "key13": "4efhcUbiEtNVJkMHGB6Lt4SUMxqGc9y1zvPKgXAmV4fB7XBj1xfrHjDQmiadzVzDmdANAjKdwQnnuWXTDkXey1eq",
  "key14": "2DSkpZuDktXcE6dW7sLydr5CyDG1tQKffVDne8vxGxSQBSUaWM4FKsFwQgBHXwcjYxgxnjtQYcNzjKdmRMz37h1c",
  "key15": "2hCxr1R5BLrwL6JvWSJUnXEtt4CW7mukcbbBBBWmCqDdvKxMgBH4imQMUdWrYamgeb6S9bHiQ57TJQe4P7U7VvT8",
  "key16": "5yvas7baumNqJZEksTupSaxjRNjRprdToUF12XKwDhE8HYrSZZfiKk5QdDf8HU5eK98nxSpKtQ2DKe8eZRaNanCK",
  "key17": "55F1Lk7sg3v15atHD1emYRM9nfqbuxa1fK4SLoe9f1zKfXhm7HA5RB3WasDpkt3VaNwZGKmRb2Jwav5q7XF9ETha",
  "key18": "2u7AgLZURfSRJK8231BFHtpAyQ7nKkXfhuY27kWCWgPkratHN16XTHNLyLgdExqNaFRsd5xGGdZSxxFYe9LP4yeG",
  "key19": "5VTsJ2hdK23j8yAvuL68R6Kdq6isAp3ARLdXb1Mh1fRQWKi4VAjpE761p5MkGsU7oH4k3YDwpQEYcSmRJmDc2GBM",
  "key20": "3FJizJAW3XTKSMkd6JqaAv11ce9dBD8nbFsiWLGP4USVKaDhoQ3njWK7jLA1F3F43WCwryH7CzgsKDfKck7ToADP",
  "key21": "3MaTyA5qp3zvF4k5pHmHN85yry2L5zwUKSpqYP9xj5d6iG6EdjQdq4kGBdzbcHKuKsFCSLrJHrGzU18Ykm3FGGhP",
  "key22": "58rxnmeQdzKLFu2mhbBdx8xkJa66SeKztDrGW8bLFAktHPkkqiraxcSrFFCgjpyxAto2dY6w6vRXM3qCf5krQivn",
  "key23": "1WPq3ucDbDdb2jxwqFcXVxbH5CACpofy1Q3cB8gcdHKHwJbA4hCxBoiXLCiKRcVuHYzo3cdf1doTeyhy1DeDhoo",
  "key24": "2UYmwYNLgwQP6hu26rBNeEgHpa5tU841ucNgj5ocowqsEnCM9xJqWhjvVW2b3AeuvbDtUVpFvVP37BoEHaUrvXFQ",
  "key25": "5Su5X4okX9cCjn81vJey8x56iNsTi5peJiPdgijj2bnuEdB2woRza7xnPnvvHvYPDXRvwouYwTJMeQDuwbY6DPby",
  "key26": "qtkD9MJnJWsc9Wa1j6x2Jyh48Yf2jXpJibuyqq72eYKb3q91ZzePNBWJ8z732bJc1RJ7ga8tXLHL2RBPdKJ1LE6",
  "key27": "4H1YKvAyatvcA9VAFzy3mk7Uh97jJohjctnyHTVqREPK582KicECM7HSSdhR27eHX5cfxcPfmTbkGh9DVqZQh5Xi",
  "key28": "5V25jU9ardEMneaJgD5b85ttri2A19fZ5uhxq2ey49s9cAWYpqWMXkn9vExH1ZNqgfQ1KjRFidBEfd7WmK9saswa",
  "key29": "5arpooJ8rDAfe9j2RYAqWWzsmmQ4aNkvfAAFn5kXmdtvQeLcvSEiL7D8B9TpBs3KyBDyLuVBMbxUP6sgYJDTkBWd",
  "key30": "2DTZ6ZbavdcgG3c7KnjL6XWKfVeS7uSremdiaCQ76F8Nw5pjAfeFTs9sYKCPfXN42R7H78WnmuuskBDYCFkwinkR",
  "key31": "5UQXGn2WuV16rckTA9AEG5zfXJvHjxRCjpaGX7S59VZt7wT8QhXEgmhXEB2KedPTSHw5R1aBZWEyZzoTqkREMQ8s",
  "key32": "3NXrQaBVLJBNQ6ehzGgd95VB3oSq7LnGnZVvay9jEggHJwsbVvkfhHcB7NT4JhJiMNN9vJwj5kkRWAGXbKx3LBj7",
  "key33": "4agLekFDS8omhJZ3QfTPhZ9SSMd8c1zQZ8ALCeuuApwvrT3Km3PWyE94T4NEPm51BQTmCy7ABKb5M6Pepzo7m8wz",
  "key34": "5fbZMKSA88SKXoTZJRfLyBWMoeCzoCX5vnD2vGpk7e5961PyAM6JbHkCJXHnuQuSeVFkUwHrmhMEU8w5s7difYgw",
  "key35": "3whfLZ9FTdHvm8GktnTsz8twBeZ2sSrPEwAf8RKYfbznYKRgZ3FLPaC4vZDonPYCgrr6X86jgceSLfzCCFQC2pXW",
  "key36": "2F4A3c9kWCuXnzK6W7WobEMNra5YR97eGw6fdgjanpvFo9hzwVGYA1TuKXv8FFpzCoNAkGzddvKow9QSB84m5KCv",
  "key37": "588cJ4GmXHVCv8nLANzx7W4GsAvyhX8td39ydkmRE5FNgg3BzzNM1ZfKdW7nZt6YLgmsTR13a4kqvpjjcEa5UtPM",
  "key38": "2xCKYs72dnrrg1e5xh4aY9urNME4z2rpsRT27aG45XSzmHtZp5koWHmbAR1T6kxqpUDBhVav8fEBbgZG82TDxvb5",
  "key39": "2sbTwhvvjQBhRGvWdmwQbbj2yVBZCartSbMR1Ldx8WD6vUzfDmXmX7wnUxrbQwPGi8HcbFFjFD5V6AeFQy97oaAp"
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

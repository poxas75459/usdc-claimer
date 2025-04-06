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
    "2ueqGHMBuWUET4VwnyAM1MEkoyPLRDHhEVZeyW6g74wLmh1aWCxC1zegnFDLptFJuyHAMRzhbcTa5diwLs2xQwQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1kA7oPN5FcLnH6NWRxvs8gi5FBggWVJajb2hyZPnJhsiWktqb6PocHesSbbgJFM45BeY2NvHghfZmQtmKhoWJD",
  "key1": "2Co8aYzAzdt2uBj2ocSQG1PeKwTjgPm2JAnPqJAAe8L37gPSwRtpGXXW41ZHkhZdaa7Vm7emTXgEUu5ZM95mCZKp",
  "key2": "3sA335cHTmNXcy7MFdBxoSza7g4EBBuWyXUcEW8L8CrJTgKYJm6cCQoj38ZmEZWWujbVK8gsx5CbNBZeNBSZQwKg",
  "key3": "5vh8wWiPLHEhHyk5oDnqauf1TycGtXE4Ymtb6jDpo2xjiTVW7DcucwoZkgJD7Cb9KQ2t2iewwS8eayG32HK8fBeE",
  "key4": "GzmenFj9xuwi8uWfnVjBwgWbyk72QGeu7Q3QPToU7ZXBWRasDBAqk2qmhBZ2j2r1qaM5wVY26bWorDykKSDPaXk",
  "key5": "5vbFavEq452maEQudcNe3oZk2zf8GL5iy7vBFvdmG3ysVhwyZtDCVwvi6cZfAM8beDojrbhWp8mJyLgh4E67XM4T",
  "key6": "2AKrMYbed7jtZ5q1G5PWiEPUg8gGbhKDMPMrYCPvsnNMnQ6CsdTi8XtujoFpY6ykXgVEAas38foogASkqsX3VZ7x",
  "key7": "4fZhsjDv7VVSqTtN2stfxY2nfmKPAmbhd4K7rz5rsa2R1Mz5saKvf1nmcK5aw76FasT8t16ZFFLHeUEXEFZVqTw2",
  "key8": "57EoUuDgrnkf8ikdQj8kiXaY9WeTpjy8QC9RJSZ1jzPn41pCPtPQ14CGem2ngzr1kjudYFMtr1oxJtPfppY1LP6Z",
  "key9": "C2TVB9jLXEtqsteQBduKcCpAn9dQP3FchyPf5nnzPUoGnQwi54rZESFzudrhCJUCgDpzS1CTafj5o6EZ93di851",
  "key10": "5wASaUDRKQHAyMaU6hHoop7CUbDhsjt4gKATC85ZzoxavpvxB8nbbxp1HWiS6Rz19HJkDt5HpVBTriXyLj8hSvNC",
  "key11": "2bKgCtToepMGCricJmtsFeducLtk7wraD8GRGSxaCwtvuuXZZmZ9gGeD1tfmHJxRkNHHrZC572FT6Xi4bRsEng8c",
  "key12": "2en2rccuhBMJtRucM3ZfhUe157kEfz9B9imATAUzUexauhs6ngJD652hSx7wWDX6c6DDcRy1jkVxWNP122DeBMES",
  "key13": "5AXTjiau27w3GeeF1k7tA6X3HZrtbSWK4nEfWXz5ynTFYaCq4Lh4FEzEqEhYLjYcQztuVhwypDfPKf5JDKh7dExt",
  "key14": "3zXCs4ize4qLKb3z4hAohpFsTHaKu1pefmWC69iQDgU4hnbqGbijSTEhAyhumLWpzsXm27c5MQ8RS3P1C9Le5RND",
  "key15": "4cQGrzctMLZ4SVYDb6TQsmcZ5ZsHRKYuoFYeMDT2K2RR6Hu51btfAa8hDCjUMhY58qATVjq9pWjEMsoadfYaNZHg",
  "key16": "5ZxJmHwdWdv2jCMGuec2m7j1CKZRSQVdZfzP1knedwArtaVBBbF9eEBQp1UjiFT8eShzvjbRxPf24bC1DRpANr9e",
  "key17": "Bb4XpR4LQsdxb5xq6eY6K9vgTHEXAkuitRYX3wuFQ38xWYmA5fPKU4CR45UnbbmVHQV8Ktfh1hqFjoW5M1EXTEp",
  "key18": "3C4ECk3fdT4MTmgmC1sPxRx65Ar2fku3KQNsNLTAdaJsG5eGaKH4JgAEfY6eQVu4c1zLtqqGjEXPrBa3PgoyUrHN",
  "key19": "5HuvqV3d5pMJQgQb8LwEcpPQ6decAvmRzP8TH5TyEAUtrfoVE4GHi4CtAGETrej2kwuFaeu4B8Nii4DXMb8c2Qkz",
  "key20": "4ARgXan2YPRikbBn1W1H7EdkimitcAQ43g3YfifB2RwGhsyCAwAcfRANB4vuo1h7HRwLVpc3ziGUPMumrckGR1Hz",
  "key21": "3Gb1Tb38C3MLVTqXzV9ZD7obrFeKRnk4xYF5Cz12nRSqGTWyPi9gtmsQYU1K6Z4ojX8HHWLhCRgPsMx1AF3ytrrh",
  "key22": "3BN6Ns59XsdjyvM3bdTcMruKWUjPpnxBaPWyNrPaCkrf77wuDc2JcAAWqNWGt4pHQPGaHc9yK1BcQpQKxndY2rBg",
  "key23": "3cN57kaKDQaDGSCw3yQ1R4EjNL7D82U3ys8VnjoPmcH3HzjcBPDZgkDTZisdnT3gG9hLiwXBsBKaY9LwJd7jMo9S",
  "key24": "m77P54BF1BNrFs73mBm98WVWkCXw7fMr2LQ3845jBWSLjZXYozyP9kB3Z8bBnL8omQHb858niCvisiiJRA5zZow",
  "key25": "4vxfJzELqV3guFVyhnsajwRynM7hSceGaiMeknn56Qvh7sjs41xxf6CAtCWSUuPZ3oVngWCLa3pAPWremsqXN2DL",
  "key26": "478CVy1hQTMbFFXGfh2giFPKGBhoDhfKnWJQpxYNoLSne2LgsTmoZDq9PiCxet3iZJgdfVEumByMKLhiqaoMmcoR",
  "key27": "uGUkbDVvbGdqp6RLrMsBFuNZLVFfJeMkQF3vnBDE66wjoMTCEDprVXT52QY9KzKafLc5BNEgPonDEMqKrY7C7WW",
  "key28": "2vWogqguvA2CEaGVjQzQ3q6KQSia7JGzLExtMZiJeT8TuWU4MkxkYVDotZnirxppoCydZPzsLnBSJjZzsh9Unne7",
  "key29": "5LgKMz2RdvZZoV9iatHdvrkQkU8P3exkLMik8Fk7uL6eTDahjpEfiix3cno7rPg8gNvE6md7URF4rpXH3KYQRMiE",
  "key30": "2zfPzXgzLxAWyrB4nsfmiGsHneUybL6pjHcFoRkiaKsxN4GkCHM8vA97cNoEeABRPRM4h2brFKwp9KUxS2oQWvJV",
  "key31": "7K92soKAB4QK9PGhYf2zKSZGWLRsu2jBF4z3XGHzJshU21vJ57vWt6U9mcbHVmCWDBP7SCzwtDDn6C52VJVbiRt",
  "key32": "4RwCeEPNkJJrJC3vqQKS6uoJQWfBbgxrEEpSz6V83JugnsyUUqw9HmA5HnUM7cxu82AfQNKX3ufSAPMouQkStAD",
  "key33": "2EiaRV98n5uXi8EM9tANFJhtEo7WF1UKMDVqZWBD4HNrosWkPohV7LTyGytxfV8rouBtVC3v43Z97QvpiCfgUhYP",
  "key34": "44xFDeEtyFibtSUZoCxjGDrkFfnVAQevJXwqtPf3SJSDLZiA8U4My4cGyPgctdHcX9aqszwgXgcwkZK7Cg4uBqzN",
  "key35": "47mQ8EFyTHdeTgctAXfx6AhRd15tukv3prYAfNEzpFGnnsDMdiz7Dy2nZJBZL7q9UBQV7FFEP6mAc3kDCCALcwWe",
  "key36": "5C9Ba94zs7sdpe7MMeSW6QPDxxLrA3mzjkvZNGigUdwHAnWdMtLDExmk8tLrF6B2DnWnM22scN6UeTabfwJTMamx"
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

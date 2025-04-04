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
    "3eNTunUNFBASXkUp6b1cotP6vhznuFZ6Nanfj56x4FoyZzzNrUSW66CGmVN8D51qoiaSmDnotjHzWMiHmdebxnWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zd1wHWNMr6FbbyfTjKFb2s3HqLKGJvaNq6oy4zF6Xvyx8f94hGB5VmCw6C3sWXUC6iqLYFUjmQkJvm44DY9wYyE",
  "key1": "PBxzLP7zSEkPwLQTzQFtS61qcbYeN7ocpyFBSzWk6acKvVqP8Tr4zAqr7AFp4CMCdA5E7Wr8aELnpVw895tm6nC",
  "key2": "5qXRP9ofFg6fucA3rJmk3Nw6MsCUuPeyDkux23S5r7j86WKommy2h4rwzHuW9ikPHoErBykpdbvBsZCDoUvYD8AL",
  "key3": "YyCJybFAgeh4tB8TQrLuUjZ6pzUvwk7GtoT5Qd4PQm5Zo1Tge58CpfXpMK3oa6dLG1xYZ3h91ihsKnM5AvzkWJj",
  "key4": "4uUdZfB7LgsNeChw6wo8KChXw2yoVzsPx6FYzBbbqJbdTkNbxoakEFMxMd2zQ5rcmWqowVCeuLS4RyYAwBf4uQ7V",
  "key5": "53K5XHMPiVDFRzjoBkM3tZj5GtnY2FcPXweZbQ2YkurGTdFeFf5DMkKP43f6Sb2ddoAreQBxzZZNaVnszGPtT33E",
  "key6": "3fmR13EHT6Pitpjj2AZGPBN473qiuuS1NAbD6RKiQ3jXABBPaMC7s5QdknJtP72kazqsi7kyTdMbFYJargvfoYnd",
  "key7": "3Hb8jVqqyGPcphSEWxWz1iZWp3aULsxsu1rn7XnderDbrQLfKKo9Gc27ptvwGXcnSB9MGozGHYLVtg6KCKbu12Xh",
  "key8": "5Y8k4xSQnMdv9eZzXeWqgAvzXJfnRxrBfjB5Q2mpN3Eg5utdigFz6UTS7yc5hwHGfgUVmnH1WZb5jZLvhXNfhNVR",
  "key9": "1275U5h18gTdijYCxbpgNPBB8hb7bY5vFiTCWJxmjaq7ciVHK2nuCnoKxeMNWPgr5Ld3wJczWKBR3P74xJQzjmhD",
  "key10": "4uqp1VzN6YFHFfgniHFUxcsi9Zep4rDzhrngwNuQuNmntkKAZWRijJv7Yrc8MxysQtDq9CGQhe7cVcUJzAujNtgn",
  "key11": "2fMygMM6KJjz26PNukKRuz4g64nyCpNQxpio3SX7EtHyv72cWfwzVgY7F5c2LpxELFPGL6xwFyjbB3MLvijV2tiT",
  "key12": "3oRtyrBTVjBb5zGf1S7R5o4BSs2rmLkimjCaYypPyeK8cAYhwsuUdBAMQweJuD5LggChnqVDzFadTrYJtuteDHTG",
  "key13": "3jBF9UB6SHg4aRTWRySLP6KCK24aQ2iWj65K1HkXjHXq4z9FaNipYsXEEphZW3vKko1iVsk1GFbFiSLCUFr8NqLS",
  "key14": "5weJJmAvkAjXYa7TsqLVRjusNEF5LXHKP6oZS7JhpeTDnxRyKNNZSEU4QVFVKBtArH7bR8JFAA4AyezTsAFHnHp9",
  "key15": "5qAiwDxpgMyqwNcc2JoY4fUgtLZENTVJC3gm1AhAkUduzEzbAZjJDT6hfk8u8SsPao87DW6wuZit1aHvZvSDMwMR",
  "key16": "587gTcJt9iqTvEDpvhoZmQqbhCLkzk4vdAdAoL8oTdzNwhXgmUR8yuYHDJ5xgG5DQJjfGNMimGjx472wSix2MZ2s",
  "key17": "33LKzoUxVfcdZWhuescdi8rqzDXJ2K9xFm5AYMmUthWgheSB2PeJxfLG5T6od5HFiBdbSv7QJj3HXHHCboQ7pHU9",
  "key18": "3c5QQo8nX9WfKy3UiMhghxZjvuq7ZPpSrmGu2Txr2g3aS6HZFoWxLmoMh3BtYQeGmx3t7WeQQ54nFP6YwhXMbmX6",
  "key19": "3tfeW9gKoau1W4zb544B6ZmK8YHAM4WCfVxoUHvw3NAByF6srfXXxhJUjWn9nvEyt3R8tbureN7TVQP6iQ2EdGWM",
  "key20": "65Kf5zyDPbZTUHmLqhm2UPLJsXgxZC1C8NcMjfEn75TmCakT418vWhpHcvzbXZedvPwqeVgAymLXDcL6qq1UXQMB",
  "key21": "4cfW6MSV6YnePXGKVBBFKZKa8RfF1ajrhZGkjy4fufbYvGpM3ErUgjtXzGT8oqhzFQHkm86dKo3E8Zfs5scoZKtx",
  "key22": "2hfaECC3k5V17U71H2thgYN6nDnP11x6hbb2WPvZdgAwuRuf524rBspF2fdjamKqcNJxLmQZvhF2yratT7U94VwD",
  "key23": "42D5qD9Mo9kbDHvKgrjbb6DxLH8qPGpTPcddUZcWvzwKTSKYz2fbQkgHpfDJE8fK4Q2XXBndMuLaV2DNmnN4NBZJ",
  "key24": "5QHZuttqjNsMRiBTBQn7HVgZGGn6ypKxWM1mJAH5ge5LYJq2cGxT7FewBHCHqrNK8mt2CaFY7bdHewUKVjLssLMZ",
  "key25": "3y64p4BRAuRHNioKPsC1fvSjea45TKm5vuk7BDstRhB2dpi6S5RtKkpF4gyrF5qTpa2nqD8VZ2mTa35hVsgaa659",
  "key26": "3BibZoxXrfiz5eP3W1EvE3DXkXRB5Vqs92habay7ScujB1CvX6fwqk2FYDsiAtYUSzLoTemfSnWie6K5NP4bQYUR",
  "key27": "3Re3LSnjFvFjtfA3VveW4rydw7smRT7ka2qw5FcFMprogz8eduUwqV6FBwc4kcCvwGVJPpGEZUuyQK5tUYgKVW6y",
  "key28": "bFxFqgxjbPt5oUvnYqmVh7ikhVzu1RWUZJnVs5qWpuGC59WoNcxMd7jxS8eU6dCeT12vMFLN45L4DZnD7SvU6oy",
  "key29": "3dSoDxpzfDbDLwc46hF27hXUMvu7WbBhUGfiTz9RLeWToYgrFXZVbGgNTWfpqrWcJsAufnxywmdQEsCQqsFwsKYT",
  "key30": "2tk51RkmzSsCXrU2fGKtiwM7AxdCh6P2hAJAC2Pzf7o4EpXy6vpmCjc2co8R6u7X3Divn38D66CCfXA4V4gJXx3U",
  "key31": "2uQj3GUNcwfY6jz4XgvSDmPj41pA7wG5qXvBAtDDKwDP4Drgreqcwktp4HEaNYfDah1gDzphAE6jr3p3NK811Jvp",
  "key32": "4kBYEZR4iajVCJdx92TByETEu7Enwpnzb1dheYTXpLX6n7RD8mqsMCs3gCjriJEiXHomgsv3BFozL7iX1ij9RC6r",
  "key33": "52JMnnxrqaimTmKwt5kebVyNSj9vzmyQd8jN31TMwmX3nz3qWod97rJtm4bN8rhG5DgCQYcu3XcsxjNdBpehZSNU",
  "key34": "kFTmZ1n6Yx3K87sVF5V3yqedctqnCaMtd7yxcnqvfL6JQ4J6ArC2bMx3kkfpycKKDMzohdmz8PWQf81HVtzETNo",
  "key35": "4Mo8gdBj1ehH1seN7fNF1CLeh1Wiopn3EYwyBYY372uY19z6cKSkuvp2uEMC9RZsroqTx7sXeomTs1BoKD75Gfe9",
  "key36": "97sKjuAMLYKCQin8T1YLdbCzg3QLq1xG1pDZxDpE7rF9APaBsmk1g3qfVBaLQbWDqk95XzyYNB5H3PD3BZD1h7a",
  "key37": "5pUw1bF6LJKccgAeQFkBQQaXXqfUxCcgFsMjosdUNj8i33JGKSoidYncWu9Gry2ckw69ntikhPKhz1kSjwkUYtK5",
  "key38": "5xzBbbsiZbJqQAhM73KB5nxxso8Y2y7rgRUkpAZ3YHEKHsa8KY7YuP4jbfVDF9q2mTGWPjRnfYzNGNT7mV2CaSDX",
  "key39": "2jzZS51PqQRKECgWeKT8QzWDFYaquaMN189PcKqsFyGUifP5Z3hWn7fbg57Yog1H4jp79hV2a59HJFRuRT7pkFba",
  "key40": "31XWdDrkkuYhe6B9LqF9KKefiEW1JA27mrKty8qPS26jdUaCzDRoFHXEUr4y4iBW8PaDm4PmD1mcYnP7k6mB2EJp",
  "key41": "2pw7mWFi2Pq1zrjgW2yFQzsobSC6911xuUEV1EF9PFH4b7mtLjXZK258fGquEPSAEH5jDBLTgyLeSGvs6pzVtiXm",
  "key42": "N4G4qLWs79FMF3SMkVFgStsfndqWYBzfSQXaLD2erLPRCT45VVa4aj7sVpMtwQTsqEG9hDXihacYuYsWLWmsaB3",
  "key43": "2bPw6Z878Rb7yPbiUTVFkNaxiaLUbc1N7YkYPFewCvkp1thDuLPjeCnP1KUF2VRjqHjZmRv6jz4HpkNCRNFXGDgm",
  "key44": "36Q7LcikJKx56Di8Bc9rQogU4ipmhZVC1LbZficWpiJ8a3YdmRHXJ3XXJHcUHVj8GH6F7HAchARiPJczBvskRxQp",
  "key45": "56JTxg2bHUZ3PtfUYP6DmiUjukTtTLaRFKwXh8DAGURcvPAA6TXhfaon4UhkxwgsKJg4P3wcneahethzpC6vVfPE",
  "key46": "3NfLdLMLZRCcwBFYmswmSrRszB5Zn8NHGh2jrHVBzALPeQGHDzW2aAJVopKUD47VybkbQXiujCSzYvfzNuKwtoBy",
  "key47": "39e4Lrsa2g8KuSg4VrhKGBrUtwY3Ny8vbKJ8AX7xmvVM7F1ZSHvcAcj2qdqzibGn482nCMH7TcxUhrgf3f3qsLKa",
  "key48": "bmapUWMsGwVkS6cNAdsHzoHkSVnzYWtjv7SgbjgTyMoWtpLSzQ6RCgtXNTQLQFhQWQ4sYpKPMxu6Eygrk8dLNZy",
  "key49": "GLKjZNegHrYuQ7GhLPQZjmFgj8vmtnkRgqhhQZfLCQ2GHMrrMzmXvgH7eY5c91wcbcCWCx3DLjs7TSMgA1R7XWv"
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

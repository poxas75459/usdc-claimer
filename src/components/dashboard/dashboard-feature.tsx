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
    "2V2eeAfca3Bw4kc8dxxYeJCP81M31BG5WAW38rCrNLFfsivU8s3ehT48BjWZd6YBWD46zsMzWUCTrCMVy4MdyxMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uK7fVeT8i8RCcUtySxnJ8Rz5o3GeK7cK4ydJWXAqhSZA9qDnwcTdjctbwQEhnDLpu81VR2fK1CKvjxEtRzj9kZA",
  "key1": "QU3h1sCpjkWcf2KpAoYWS4tn2zPJexA9Hpw5nyYF2xQxrs3jLk17d3rrk8ZigLBaKyKWJQfs4fU32DaAMbAVFS5",
  "key2": "8Bc863zWyncsVUkYNzy2A7NmkL3exkmdptp7s9fybrVpAKxVwfBEXbnfq7JatPekfbXNe91Z1cC8MBc7DvPtreW",
  "key3": "5SxguVrQoKXxxJXMdqE4g7UpzMd2BVcARAhs5YbJ4URFt6wSwYV22EgJPrPFZV2ziNewDB9BQhcApDp46fVYjLFs",
  "key4": "31EVD1UBxkoZqmemyvhtMkXFf8XQG2RMB84ZSrdXtkBWMjdAB1DvwwULoMwzBudxbq9kYV8G1Vi3FYS2gfgzt6Rc",
  "key5": "2Kt9naUpzqCDhbDHkBWGx4cMZqbh7bFMuMFdWcNP32iQZR8L8pMKrBy3k3DRNzgu7EbXXC4HmF1oshjsu91VYhp8",
  "key6": "4gvkyWYwsz1j2W2kKsDLfTn8kDHL2k74qZqCLKrqKvWgL7rJnrdxPSmu4wr58v1WvJPF1eusLE19RCb6v1p7kGWS",
  "key7": "4PUHcR4eWgZUDUHcg9PMEPTYNTTDv1xfzsgdYaTUs2c5pTrhWEYjLzxAd6bojpJ4j2HparUHp7oZyawvrKCwm8BA",
  "key8": "4rB8Pqwv9JQF3JQLzmTdq3LCBZPXbTm12a5AfGeMZxmoh2SVArUfFC2HsHz75SVNb6CG45t9K3eDcmwqYNk3WjCa",
  "key9": "53JEbdwZUhYoQpfHdNndkYaoE7HZumVKcLg51MLQk6nBmN6yeaPJuSZCDGyLAkPdqpWkE5Np4o53NxL6n2qaBWTE",
  "key10": "59scxyGNkB7ANQ4sfa298Xrhr2LU3jwS3c3TKMFEDmrKFswmditErLs7UP7YSE631ZWRhk1ZHoWbpQ2zZzXxqoEb",
  "key11": "3AK1iDQTwv9u5HKecCTzkXds2DwtwNNLK4AiJbowBSe1QkjREmfdqZxXSrKL4yHTcGTZeQt6jA2vgeKJFHjn5kgn",
  "key12": "5H9A6TD6Fm3Rx54tseAHaGL9uEKKUEGwXv1iJdCWd8DMCshejKjvRucTF4SNPKgktMPhBWyZ3u8TTGGCZSuG6u2X",
  "key13": "5HamuxMbtTaoaLg8AtwWfd8GG9WZP2FEBDY1pbWCt2rD8CDjm6xG3BbZpBphaNvnkC54667WyMquVePKxn7HfeTF",
  "key14": "zYtBYTW8gfXhMwCoK1EVdd9HfCCwqYfhi4wRAsoH7dPQu3w7pcZPtZD3XMFTupbPuHPX53vVrjK3HypNnDC6LWb",
  "key15": "3WwuxV51L5zqS9EcpAkMZSSwbcxbo38fGiFK87ttPhUr45RgsDomPdMmQKeinU4WpX9QbdR5EEzrioU74AwtXBxa",
  "key16": "4ZCBbuBzhLgNX1t2Dp7iiNvc7Uv2HGmp1xN7V2uRcCLApXK5qT8MpPRLSa8HGD62QEBNwSoAhnaFsd8aHQgaKYvY",
  "key17": "4Vua19SACJLcho6oSFbNZ5MaXwqMeZSdfVEWka5mBhyZV6QTMKxVroQCS4hpzaGVnY6WF4JGAtqNYG4QpfXz9Fyg",
  "key18": "3gsW4zcd6u3kZqEGyePxHQbNRPs4JjZP8vsfgUcvNvX3AJdrmAfgjxz3WQU9o4zLx1S1zxTFxZeUdNeLNiHNwnBR",
  "key19": "3E4mwXbyMmFszjeKXyX4rSqoHLUwaQri4Dtir4ZrxETAMbVDiPr146dQGy62qavboS1bpbYZJ9ZMPX7q7N3jVwTc",
  "key20": "4QtkYxGJYAXX7h7KkewujBfLivRtARQtroh9k5MwSXviTVVxtkcPt81DYA45QNN3RQGoHSwYZi2oDNn2J5p9rk4B",
  "key21": "3YKgG9DsbKZuq5JH1212vRxWN8dQcvihMoed6Vsr7hRX5GFwaB3734KbvG1ijxuL3eDpwgUXwtk8xPvzBaurJcKn",
  "key22": "sDMCMvzXkRCPbEiCevpRaB73DkqopV9RG3Dga9yz3UmuZU6GDHVDt16gPevy16tReS47qjqKatRwdFw8YZYrQhq",
  "key23": "66jF2yZfHUPeWWFPsfsJtz19NcUmuMzRdKQnqof9CEkPgWxAeyqzoSX1EEr7jTb6XhqSGtW25cQx2mdpSqfwYg5X",
  "key24": "2VkQkiaz2tdGXFgQKQkofBiU3jxTkXNcXeVRPE3RVqtBK3t9s71owHSkppsHQvVr4B6LfRxoWcau2GGZGC2CX8jC",
  "key25": "4sJRmzBPmDCKwt48Eiu9BXibYJnMxFzW1CCQXqsnMKYhVTBXD4s39xhFiq2iTAL3caNp1JKHT22p5miPBvG3qArx",
  "key26": "2CbWT6jB72GyivxejnQsYrs7XEyeZKHpQ7Z4ySTWf7YDDeTk65GVdwFbhTKf2LvzLZ2rhYVLsDeJUfMKTEYN5h4D",
  "key27": "B9HTtVg3CJhcppAvspLNTaoTJfh1CX5FsYk768yN1Bjt6cP5A7R5K61szr1eDf9kwGvxFwytHdufM6Sfh7WzLrR",
  "key28": "XV1EzsavzZJFyeSHStmrLeSzeasq9gt1GV8yiDg1pr2tK1uoncRKUqq1LgcMRGjVRZEecuJiRnQsGB59YxvfQ5z",
  "key29": "3XyWgABczXAF8trgfpZReSUtNCGyvLZQMDYB1EYgHT5bK4bAowTheZpD5qdKTYybvnvMSJfNTVhy4eNtiaMmcfmU",
  "key30": "3KJrCYtvQyeAYaRkbdEaeq1HfFkCksSgpxGMY5LuC4YWZtGYV5kCERy5zWSP6g5UTHB5dFbVe7R1TuoN6bsmTXjb",
  "key31": "4pX66UX5QsPdZTym7pBbHPmMrK57YKeNA45QfJLc5JRKXqsd7NipqQmCgKJuW9iDLBn1XwUaqSX3XrZEVEnyyXGq",
  "key32": "55p2RNFhM3o3MtyzHZbSLXVbijNtAxUNQFJ4eKDdSBxMF89ALsUKu4gWR5JEkTxkCzu5GtSZFe1eqSHnzymhacUf",
  "key33": "41Zt98vGPZrf4FUtHU5wFRh85fLgfxiDxvUmWkrTtDdnT1b7YoAkf7L16ro7PNRxXN66MgSwjcs5dHrz2csrYvk4",
  "key34": "5U7TNxLAzCMkSHmoYggtF6nTJbQAyRFZvcDDPRCNfvSoco5Lf83mqaW8f3SJzXYBBJZecs5s73dFp4BJZcbYZfuV",
  "key35": "5ZzjxB3CQXDHLgwyPMFMdkbdWVG7h8xewaJgeqABc65vHHarBTMGmAZ9fr53T13YTpPwHVsiEHcphCwoappQsMKv",
  "key36": "47LVRtuTBvQU1i92eBS7Feb2EfLSuGHKSdFQhX7frymjAALMzh5Jgvm28j4J8u2s7Ep8qx4UjniE3SqFwEamKENx",
  "key37": "3cmo8XywEfhsim4UjHvuPDu5FLQGcSAfU9w7pHVoHMxRJvV1NnghpZHZcEodUuDwkwun8cwpHGpMPy5L3RhPACtg",
  "key38": "41HrmoNf3UcMrEDKqCLQWdq9oamcC5n8Y7ZYubyTsEf2vqfoQdXiimMHmTE1QQNzjSvY5bsmVDy228iSQZLCnrGc",
  "key39": "8HPsSpXskz7g2NniViaVaAJxDtEDghsWPhtD67iBVzQd7GpzKpsVkXJVHrZn1Noj918DKc6AqsqqQMjAaEEdqWu"
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

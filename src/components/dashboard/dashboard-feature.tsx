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
    "5xMpgEQNnyw23MgrUZvRirtJkbgGQqurS97q2CqAyBmP3kQyeMxPVjrVnYU3tT4tcNyMNXzzKRSC2ujPvFJG8a2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36djr7gJyg3w4bji9H2CdP3jk5rAuCftng3jqtV9EAxfTtpx3t9SNX2rTYp6N4cWj4wJvj88Q5yFzBMBnTLL3WZ7",
  "key1": "3QEAqS7VTBpLWmTZ7Dt1nyPfPP7HBJSSTKjNckUT2SY4v9v885gmd5rjFtaEekhgaKgwDiVkTpWSZB2UGQnN8Z4B",
  "key2": "4jbHx6rZnUx592hJasZNrXx9U1xqn12kS4p47BX5Z2sQeCJZa3Kz7UNvi5Z2Au8bjFJbAxrFPCux6QxRWKiF4pi5",
  "key3": "WdRhsdBgmDshFnHoZiNTupPXqgBoytkGgdaJdLsLNac3ovVfkC7haF5xNAWcqL36ogA99hp2V7DRXtDvHdW2zaZ",
  "key4": "4xDxLEhFshc7Bp2aEjEP9oMDHdzNK25m2nfmHExTVQ8B6GN81DR4ytpuRfwRp4CsJMUzMnV5Z6gTep4wbxo1jWGL",
  "key5": "3yGvxHfeFZ4U6GtC3a9ia4TV9v8XPwEyLYnLGkM2kn93rNJ479K8TwLUQFhhodVHX4V3y5uawBhhAcim9HQ4hWf8",
  "key6": "5ocRgF9NyfuXbmqqTyBtkhbEFo2ccZpB3nkdRcn2r8s31Zib2tvYLqHHhCzixEmoT4TB9EiHB4RqM1xSCW7E5QL6",
  "key7": "2pubL43qyU3oy6LXDiZABTV8eGEzCFa78RLCxgmWridnDicrTuUq9wBBLEfwouLmfRJsskSEJegzXeHeuq9BhnwZ",
  "key8": "5yfQ4XDHre66WpWKZs2mGjkBQVJKus8kFqCUorBFcUiG7z8oeVKy4mncscVjJCH245mQ7tpSeo4UzVjd47hj8sTy",
  "key9": "41xZQamSGM5hVDZvemSR88h64rddnL9YdVAJWTwrv39Wt3rq7sDBfRZZX3uFj42rxebJCn5EEKfbbR4BtRzJQrWc",
  "key10": "5UsQ2xZEQFeyUsFjpp5ma7CwGxHhsRN1RnBedBBMAvL7kYD5ZCoxjed27oNwjgucZykLCxASmqeST19jTa83z2s7",
  "key11": "TQ2b4YT6eg8X5mfr696YCspHkmLkjhXMArosffpUzwRX1Dtkxv1XXf4VBLKNuG9Q1AJLexWm5ywBq4tFqCUHJ7f",
  "key12": "b3kTcgAsEyPbEExvfgNtzngsUjfN1JMPv8nVTKGk7A43HzA1qGL815rpKiPoBf46JJMBH6hKc7DM4pCSTpAex5o",
  "key13": "59A1Jq4DF5NkePCtM1W3kUEv7RdQQaoUTeddV5HhNrccbDt5TCWhNrFsE96v6wEQkjtTJzm1bjedkxvFX1LekF1z",
  "key14": "2245qvXu1yTXBhKpEhkdMGoGrCtJxSUwXJpEyPvVFgkB8BVQHTzfEYGqSsmpzvNU98mEXSoBT5Fh4kLDcwAeD68D",
  "key15": "2majU9MPfvWCxhi5fckaw4qqNJurh66tAavsJA2ZkBQsHK7btMzMXnWCA8g7aE2Jhd6WW2rYDVgtYWBNsSsFEtzN",
  "key16": "QhGQWVjgWTEpoSrq1YXZUv7eNUKgLZh24nPR2aKS2WjGihZbvgHTp7yjztc594sayGdr3BWnvCkAhpMEfAAhyFb",
  "key17": "EyY17WgmzF96SnZJLtHmsjTBegS3pDT1d9p9kvKWC2xcgsmrb5yRcLwc3V71feydqLdg9AHR6aKE2onT8b49riY",
  "key18": "5trmyrSNfR1gL2jMEUWz9EXvrX3wwi5X9HQmqbLmZ6HSM6Z3twZcgnG4wy3kb4AmMkBSKvDvRzbik71LwHC9mvHs",
  "key19": "pmqRkjbNDRJXjyc6s8Hp9SAzjTHxxgHXqsGsQ4z6xGsVvHLzjkjE11rmWvcYWThUMNKLCakNQNkDqPNfb3xcU3Q",
  "key20": "4GzsQAt77hrhpWKNMRwM2Pj8Gf9SbSFdaL5gpqJ7t18uX6KYSexPirovvnt8tRJM9hgHkT1GsmbYcVcDpptLUefK",
  "key21": "3YErjxw3xPWLNZpCJhaijRyL8CVhhGMYfMU7toSqDTjmXdTeXVjE7KyrDpXTmiYsm8twAMHtskNnoQ6oUACNVMyE",
  "key22": "4wbwjcaumJbKfHoCX9PLbQdWurBQ2yNxka1LjCQR2cTsbZCstQpRGbEp86MPfZ1RukC4Dmr5wCSEYkhT2WMSiFE8",
  "key23": "3BXTUs3Ru7zHzbeCubA1MRbBD3qbS8Fqx6J7GaChUkPaPVeaDnEqo2ePy5NyEranUSSWMRqUw2CXqbTGTkwvrXNn",
  "key24": "61i8kBEC8xrsG66yV7pjGupuyDs7MSVfY5YVRo2YH2JVZ6AK7EbcKaTnoJytsT7HbLscbornHPdJqPLvvhLpEVjY",
  "key25": "3SGDdX5FZXqJLGfFcC6vjUkymxitG6RhSw9yE721kgnpQZ7JNoBQaEp53hiJuzQwNCE5uXSfw36fe7vPj56GomJc",
  "key26": "66UJcdsZDWzTMV112H1eaZHK4GBpe62CGZm2SV4KWw3ooz374CtYXC9r29zbr9oaJvhET3wij5KBRuSRoSGAtdA5",
  "key27": "4XsHrkC68U3NXSGWYybv5rBpQvkT4KYH2ovEfr1LKMJ35fHN14QmQ69aYB4GpjHTz85oq6BUTzoooJErUNvofJiR",
  "key28": "S9TqVtiYc33BFwhVVx5i8Jdq5AeSKpSVS2uuuDnoimtEpYNWmkCrgLZrPkKmhq8V517qhFGeJoZN6wHiFWx9mQ8",
  "key29": "4pPk2LmrGMJfeHWFp5Uh3YT4GnV8CqwDzpjWrUdcgmeon3REJHJViNjmk2b76zu8i23f9uPSEPbeCME6j6AWVMA5",
  "key30": "2MoQBobaNf61m6CFirjPRLAcL3JoFeUJm3LsSqyCc2qm759kzN2N6U3wka4JvQ1w5xgdfzMEr4YNFAwXJfWfFetx",
  "key31": "4LhLtLF4Hj2ksZDshXuVNKeiP4umL8Z3vfnhF69wzytC8W1cWUrsi7WrqyFRDVGrkfzXE6KbVPDLfz6DswCr39UD",
  "key32": "21mwPCnZcTsMQuhDdUZTBvfaCEDFCbbZ3hre1gAkB8Dmf4ZbQEDrm3Uv4HEK9SQaQn39GF5nXyL5EjkFQ8B9ZEkU",
  "key33": "27EmswBnGitUmnjh8g28eUD3kj9opoUDGqfPRv6gGS3onPsW9AvpwaukKN9s6eLLrAdLGyySGR7uzjqULkdgfCdB",
  "key34": "29FvbvZoHycDcFq62zf5nxB5Pq72wf5QeS8DsxerbnAvY2zJthyQ6ugvNKqQjBk7Uc6jmkFA36GvHaD1WyXdmajn",
  "key35": "3Pr6KTTCqruD5zofmnH7kVWzriN7zFnNxh93kT9ffgb556jTT9djFeR4X5PGS4hdWNSPxXurpGisQqX8cnFLhtyP",
  "key36": "Wmr7rhz3dfbvCSSpXGLadKbeD36SbBryxMym3CiFXonM9PbWBkwfiZkMgcRdt4AQz9MTiM9mSSmcbXmXrEMu8Ma",
  "key37": "2hhNybAMkqeqcSbCjUHPRA1ocq3h2Q3SHDuu3xDd3rdXXmLcnuW7HduRt75rAuSKJ3BheDHZAEr6gFVgRUCues8S"
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

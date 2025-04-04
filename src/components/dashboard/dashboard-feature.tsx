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
    "5L8kqzD58zSM9UGneRc8aQh72Q8QV8EHsin3Eun5efUpyKV5kN3mJdRaxMNXqN8kJZApj1i2sCkEXGnP4nVN392F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GMcVY8yuCwS4ALUd4sGpEanDPGAQEoNQoL4q38Uy8iEcTC9ciVFjPmG9Ln9ydQHGnuHioodDUZv759hDMKRU8oy",
  "key1": "3fot9BJRHRTegyhsK1grM5uqGvx8nBN57LFsApvziJN23ZpLua2k1k4PEUqfvjNUj2yPuhQQiKB3H6db1wMQwWXW",
  "key2": "3ytnuzNRHTvrmnrDaLBEP6PB6jf3oxPk3eJYnkbFGyr8EQncpayqRg4hCKvYrWsCwsHqif32SJQpvHsDzUnsKggc",
  "key3": "5MPQsCkozwPqXXJdKG949EzXA8m4c6aVYxm6xLzeRJMqP5zAkfL3MaKfpsqiQaxcD3maDLxRk5rvcdrhkT4VLUYi",
  "key4": "3nepMi8DJVZe9VXKh2mzHSRcZ3RRB3Qy26q8u9ExxGp4AkbNkvFXpFdG49wwseypz5tTdcMrpQSDFBK9QMKzaS3p",
  "key5": "42dffcymM7JeTJ7aYWXQp8dx6iiwNk9mWE9X1EQEXs3MgycD9gQys2uYXb9xLojb1ezzz2waHzJLM9gb47VZph9d",
  "key6": "3K9z8xqKte2Bsvp1QDb7nxBATuPLmeYKU2bdB19ZEAPCfZCYij15wkYbYtvV2gBQ7wpwbZS9km6RwdZbh5xJ9BrT",
  "key7": "5bPN4hZbjowPRTiYgh82SZuWdp9rC3xWt6mEy9ZVndoLMdZDXZxqooXkrkVwaVhBd4v1r5Hgu588UFTjEVXELENJ",
  "key8": "2rr5dbvXzCdQdaS7PsZqFHHCr4zpEHjnceQWofSpXmU666oQ7FHZdNoviwGEv2VivdexFmiVxqZuB8X4vSg3kU3r",
  "key9": "3Z1CPBPm5YeeQWt3sjFfjk68DAPMNyV1geqKantefa8jv9azZBN3J2ZJy93wAf7B8VPAdHqotv5WE3oZ1UsEK3DK",
  "key10": "58Wdh8Y9GJTWKaAN3PXXLgz77xjT3QetLcGMuq62t9CAWcKss3Mpj6F2uiUuyECkhJ9zW1Bo9kVyrzd9d85efbsz",
  "key11": "dfknHzypcaiS7JMVHHAg5JX41dwwHABMZnqWEB4VcNYfD9BTgnn1tE47LBnXfnmiUiSDgBkJ7M8xj7LaTjS2RLh",
  "key12": "3keSjaexGgBebL5NpFjNEJerfmHM28jDHw6xNd9hz7F3GidkZkxLr6u72Dii9CeBnGZaAy27tX6T6vGgHXmhKGZd",
  "key13": "4QduxgBrGn42CW73drAGyFDvRPWq2cTsp1yZnFtW3ssVPJCL9y18fDYoXvd6JiM6R81oCdDsoWhDaAoiNdUprXsq",
  "key14": "NuaEeJGEJvA5jENYSaQ8WtJf6vcUqUZrvC5Mw44xaAcZW2ZjsooAfVhnCZCHZVUrsRXEecyWguFAJzNEErdBx3D",
  "key15": "59kTCsGrBvPQq4Pw1zG9ceCtwaCNj4vgoyFi5kNgtW5kbM8gRzwPhsJAPauwWdgeX4G1oS2Asa3EHqsKdKc2RAtK",
  "key16": "3jD2L9rWyYXWGGc9w5vHjYMhXsYJKerjZPGpmS5ffAxXitJ6EaGk3DJGTE8DdwGZcSbnGeGqoV9qDz8Xqe3MYhtc",
  "key17": "4hzcpWKNbPF4cLD8cXXgeP78aCcScHXyn87jMR3aBCnhNeyDWi1VKCzAbQpe8zwcMKYCGHa34MNDjkMtmkKbGBpC",
  "key18": "42sS8pv8KnnV24oxGPmq5KDS3DeqdUQS61tDJEZdA5fPu3244JA1oCb9wJQdpCSHBwUQExiKaWQMLxzhDFYXMxdX",
  "key19": "4Y691h96VY6WR1yqtZioMbsXQtuMcVnBTGmv4wLBHhmoFnLc75YsSAWbd5Y1Z79PMMG3eoRhpMUQiLYxALA5BTf3",
  "key20": "2ks9kvKwcUVpZXJ21tb8ummMv6Fa3mtg1Gxk1rQMrhEwPv3UZFNaxRHHngduwJ5d2GY5VcRKdL8sT1kgvUqWXc7b",
  "key21": "fCzPDr8GqQScoSmrwuhY8f3Azrmtgf2HWzaLW6kDV93Wdef3c64vLf21FoUqpWJZ5dmyjRtwHDz1kUo9pddaxvF",
  "key22": "2mjABNJsqb1xpqbNYZeo1ugCzae7SS9aTDTiR6QAxPEdsM7pMWQpuCVwDXNaLJBy5HX4HCYz31HRPpTbMPYYXqrh",
  "key23": "5AgUpXFgxovif6bu3U13ySsy9XQ6HaqsfnMUqyHzemWcwRmbYe8D37AKPnTXzVpdvnrZag1K72XodDz5pW8cQKGe",
  "key24": "4AeDwsmoeqkeK2d21Hqg6qgYqnKkEbGJeE9bgzqdkuxH3jbzX8JwXTUec4yrj5fexdkM9bzcicBhzSiEYVELBnof",
  "key25": "61XZgL6KcoEAWwzwcavU619Fjc2txCELC34TVsDQNJR9muT1YWb4uePrPh1X4aRQx33MwC49uYhPuktnPPxB7NET",
  "key26": "5ErXVsDRRN1WK9NYFqq8MAYHyiQuTf78cNcXNfvCgnbXHTBJbYCLamLk81QVuaXYGDpFqf2KEHM9AzkZUZZa4zSK",
  "key27": "MWERb7hWL8cXbsTCoudZ6WfhnN7KqRMmCGj1qCWnfaGoMpSjJfA8gD8Bs3KwHqav31gT2wcoQFxtXro68ADy66b",
  "key28": "z3YXCyUCQvmkXvVhecjk3rkny4pxTRREkwx7DWDTL3XfiPSBTeEA4fEM9GgqfDoyYHLXk7SNgQYqNPVpEMF1pRL",
  "key29": "42S2XaW9cYbBPqcV1KdemW5tc1d9xhA7363PEn1kqfTdZvpoMEi1WLSp2FvnFQRbf7UE6EbmzKdnzWoM8RPJQoi8",
  "key30": "4PvLU6s24b1Z3fMBSeF7Uree41Bjs7yVEFY9VQNF5GNy2SonoXT87aFzNnwzMRMimnrVRBtpt1V3KCDo4Frw2iTC",
  "key31": "2H9zmobUUmXvevgJRqvNe18hAteq61xkPH2YfUTH5CANoYn8sm281LTHzrJX7VY72waoREXbwSFhs55yqEvKpEb9",
  "key32": "4SJL7VePGUMP55sQJNvCpTn8tXaZ5WCY5uFxqhYxKoXJpi7UwqWTGfkQEphUsCQzRQHB3E5HmeGRjFDMEEB7kcMw",
  "key33": "SxBEqmdEoGjJw9kLCgZVHHE7VrCEqtjVt4Bkaz5FYLNBUehdUjvR6xkrFcBDkSSCnytprvEyHaNoL5Z41G9JUZy",
  "key34": "3xVqfgUHbGBC3kzdm4o8t6gSQLj9vgDWjMMQ98AQTxUtJNCMYS27WEd3YkQhPkuZQ5iQCf1tWE2Y27eG1zftoxWT",
  "key35": "5Byu75ADAmTuCi85eTJJVCwafwmt9ASynLQRKxgGfDRfGhsLdPNHgs5hgtbmzn4FS9JebMwZzsV41M817KBzBj7d",
  "key36": "4iB1xeNJn8nFvY2XLk42M2MRi1LTfKsSwTR92XkdUVHQvn5YhRfHRY6g898BredTXiGWyj8pyZdSstGHRMpRQWDf",
  "key37": "4pK2povcKHhpA429fxRoUfqHMCX2njdTtN5NNvpykgr41JZvYrpcQtpAHuARYxdZVFA2omksE9oNZxa6msAkFtN6",
  "key38": "2JNjSitXTZG7amxFwqAzruY7beg9JATpuEvZM8jEE6k7AdBZQYYPFtuY62EgSPy5NCRY84xoJkUUe84FFmMvBxFp",
  "key39": "24rnEJZfJMAEAssH5a55AbYv58pDQXkqPyXamyWLvsccpBh6rPpxS9W2zrSEti777HLuHmJseLGC332Cgzs45ncw"
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

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
    "1hjBE1WceghXwVVdeySES5pkRR3vAXsifnMwop1ASo2y43no8jTpW8nW5sqycknRJ3RAhXi8ZNHYAjwPXF4kEYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6QNAdUbMnwjcBbgsWh3MLw4tDzng8UBEvjQP9wYinRFSkt7wRXmhj1vFp4TsQZQeSJcASU7r4ajqLB1aHrWW1BG",
  "key1": "3YmCpTxmkii8N9unzpmQ5waNhtu5wfDKCZhou21vQQaN5DVaTsHUc6J9DeWomu8fAvk8dZUirYPLoeGXx1jbXqXQ",
  "key2": "2da7ChxjN2TWcFkU2uTX8GVXry2NmaXsrCr9LTQZckEJFTRthEFZah6pKD8ZNLMyCZtibEDuSeSGMPbZ3c3jzjLb",
  "key3": "2kXYPykxFuzAr1Aj7ci7Z8zV1FhQNXoVxX6UHWyVGYT14gp1cbpGUisnGPvmBzUss1jzUZtsL93Ynjq1EPszWbfY",
  "key4": "2TUM3ZB4Na2mZCBH4aV5xgGsq6caNdHhmMurftThmyN3D96DkSTDwA97HuVUXrF7Nyyqsxqy7bz948AUiKkrHe1s",
  "key5": "4MLWMSXEUUGqpJyKsW181qUbBRWtPDKEDQzMKhYXJfGGimJS8bGJevDyUNEtoMEpS7hDnYqB6RHkEXTBqn2zUPwu",
  "key6": "5rjNUfer7wwVT1dGhQz37kMtUKnR5pu77Jj17jkLsQRBEruna1jW9jgjH6V7RDdGccNThJqUbjxeB7FpWRsaTFpX",
  "key7": "4cEcKp7SFQnVMLGVWUFReDZwWkwD1eVi5Kct6Vf98UbrAEDJ5QPTa3GEVgA6bcTjbpxrpjCHyiswn8BJFa1QbNLa",
  "key8": "3Z2HtajkWoWunUqtfmmUy9ZiJPPavMepCpQtMjx3KsVg2i6WEmGXQHYKRKKhMFWVEemb4JDsPuNTUnwe4wKfdgrY",
  "key9": "kAn1iCsz2Smah8Zn4kHhmzMuScmKpLRQCn2zGDhYZQYxMPQhu4ufR4Y2UpekvmmVVyjjNvaDyfidGRsPS1rVnGs",
  "key10": "5RJ3NnS4UyigJXFq5wpF4G4GyY1uC8MtdfEU5fC1hHvMYEA5HeU9N6WrQ1cEyRPyxNHvko7N1gFL9Bf3rnf7eLLm",
  "key11": "47TDVdDAMpPYsG2dYzqMBjSYPuRK68fQSxfBWrVj2GGKQWCBUqD4XrKxpL8d2usNMewdkQM2PVooJ7sYGcdamkHv",
  "key12": "54gXP9SAtM7w4Bn3QfhkEg9o8grTnhdZaC5ezorQqAh1zKE3aW2Q5JQrUXeQne6MpDLMvW5vjoDurxZxZPGbWKE4",
  "key13": "AVykduYcN4s7FWcxshwngYVczqaixp5fKJTmD4wvxUAoPs6mCMoXyLDfchwLzv3L7ASznkifWs8nML7a9V7xE4y",
  "key14": "3ysfxD18axtwv4tCuDQFTKfafdWsnmvTDXBXvEuCXX5JpFZGsaX8t1QsN6Hq44W9DZ3TSV7JymifUwf8Zc29c1ME",
  "key15": "5VL2hjeSPctyiXPS3qYZdSJg1LyNiLxNzmGsHR8wZTUkx5u5pD7sZMD4b8tSSsWPm8tiYtUHBexcNsonpd2rZiuS",
  "key16": "59asHwpuabnwSNEYwwoz8VQ4twbui88yBzrp2oofub7XqWSrx27uVDpVrvYGAjUAJHSDGsbnitjq89QTk5kA5ENh",
  "key17": "2EMegSKA1WJtWevZrKejkB9i7v12mbRwH9mwzDE2fqufbDP3PEcgqWaLD9xh4gdXT3w6vnem5JgpWJ9TJ5bqkeht",
  "key18": "3zFeeA3DFzFT8NXjVx16L2Qc8mbgg9sXSNaow6XbtbULYxomFd5ytYcezYJTfyHQz6319HdDD2ogmEfto38vEHb7",
  "key19": "33g56f8VouPJtSvfSLoErSfZGNvtJy3m5TuokbMwjRAdEFinYi64bPe8DrpYYAtGf7RVrx9ZrB1brKVs9T7eEKqR",
  "key20": "43ynuw7hgA8qtD8bZ75ewZjzroyRRiwArDzf6TjG7ys68myMVAS1t8fR1U53Q7xRD6xgEWAiRxFrxZAj8AQbC4aa",
  "key21": "2LPFuXkwigJTfnY9CrzUB2VnQzqwvHuAMfFyPDM9wfYu3wUQz4ndsYBty7TEo24HBBm1f28jJTK1rLPDeCwzRPMF",
  "key22": "3ELuRu37pqH1fzcMRBhKce5QunZzng2zj2TGtPjRkg7GCWVd9mR7RNfNzZwKtfkVgu3PARQVXsLRAT2ofNhkgJcU",
  "key23": "2Zip3c1UqeScGFRbrcz4kf29xn4F9GmWEP9dkdq2uht3YDL3eyP6TjxxbmLrMMafR3DGuprm5Ycq3aconkdZg7Yk",
  "key24": "2oPLgP3yzLXSiCAYA6JSQeqyLSujSbEo4TbyR8KYXe1BBjt8iYC4Eq2ZJAL16KjJH4ac8vvEgC6nMcfTF4fpbCq",
  "key25": "5fNxjP3e7NWg5Z3EuDvSev6Sp24C1C8oTJ9JLMmowP1Yq4WVicFsc216ifKny9soXELop7VkQZgiuikyuUfAUTdr",
  "key26": "2o2z5PWenQmYWEo6LfYL93f7vc9c8JuTpgVcoNJYMHQjun5ppwpCyjTWc6S7m7kiEVMtmmGgH2F2NcCYW4Cwi6Mm",
  "key27": "2Sh7r5aRXC4GNWrbXtWNyNzCJ4wHkhcMrscQ1iNpYeqLHkjmT8xQLHwaC7bmYpFDD9uu9G33M84EUMNo2pmRErqU",
  "key28": "2uxwHeS8gAMei3QdMQYj1h9JUAVnXegubCZcqW7ouYWj4KSFBECsDf1sX3MXfJ2dn8ur9sGtGSgWjyvd2idNRZvX",
  "key29": "5hRYc4sntAjZHvtmYHwkcTciXcT9uYUdPSjXbYBV36oXWHqFjUTArNmkbnPUU5LBWo3Uxfc4eEzrFyJU3YGdMDim",
  "key30": "52N4GsAW4Q9W18fsE51qxrzNBujXnViq7haQWDTN5CEp6f6aNTHjxsXeUoZV6syVuaLojidHprNiqqS3is1pyqc2",
  "key31": "61cYvVTpR3p7JZJnsbUMe9gU2w2q21UhBzZiE3ouy9KzfUhsPS5QUQfFoTXHSUhLmzta4ack2jCAwo4bK6rc69rd",
  "key32": "4asV4qjsMTCcTuMcMe1NkNkCtcVNzzSjkaH3ttjHpjUDaFttHyKrYR48mXfqttav6ornedijC6fpGvVZSJCQUKqN",
  "key33": "2fhzVbuEAGUPkiF31j4WMPEB79qyscwmF3oCsK6iRizS2TzhTwUNAKgHZ9h4FLpzHTaCgr6FAC8L2bPebynamRPF",
  "key34": "5JRHQffzKsRenWUSYfgKTPFH2LD7HRsMiZidtqQgxz9urLj12D7q9M3pJhiGHmyBBprqZC55YE8aDgEpyBy5Roq",
  "key35": "36K2bWMraFrvGQRCE2XwqkC55qduQeHvvHNyurTxiD4UUAZ8m6N9LW3TBfPdkya3Vjc4dfdawPcFZ2Q2zM1Aswq1",
  "key36": "3oF1mfq9cNsXWwUgteqDkck7Pek5oxipQfcyjy3wVKxCV6uswGNZ2vLenG4TsQxAtgJukFFfKqc7bMB4sKj9m8Cx",
  "key37": "626TzKDYw4XMeuwB3Mgmr9W4G3gCMvxcv5ChrFxoNhKQ4JmtgGsQTzvUGYdPfVYmCE43eBs4sdrmDNeznpV73RuY",
  "key38": "5v7PW22Ksqo7NBxVeSYwPpxRSceKdfrZRf6waU6gJvotDYZuzsxuxTvtHk8vCqYrouc4Gv9z3oTffw9ojm2SFcLN",
  "key39": "4nS4jxcP1nQmPaC5E3UNUkk2EUkKiXak1jmz3YvWEwNdicfKjqDGCGn97khhhTWesonZkfHYtyPgYFh5sb6QA4GS",
  "key40": "5MdwHPFZdR9GHiBDJ8KMZALgJq2x6wtWjEZ86xhL3CuNRTADq76rHQPWexajmb1m4xs7M3rLa4qmzYPtfJAmpMXF",
  "key41": "2myK5xCFxnzF89Qh2NR2sR77pajbkSoStfWvNnpk9Rue8xhuaiPcj9ATcCSvRLyG1ZnH4f6KdHHaiucfQpEaNM4N",
  "key42": "Vd47D2Xc4W6hNHXLYWYSF1s8QSKTBrDfa7fN6T1dH2Txoe7cj6Esp76xEX4p9C8ZaFsY7w9wtgTW2aFrZRgkndu",
  "key43": "5LWiiNHgDgH27iHkPmBZ7Js3E1LCRdCvCALzf54FES6Udo5M6dt8AT5HkmuvPV4ZKuLWX8kgLWwxzJoY8Cjat4nL",
  "key44": "tUWoJKQZsE336fWX8QwcYZvbQTPmw2VSDJpwDuNbJ26wWJkDVHAryTyefLanmpYpz7VumMpb9x2XRLbewDU5rsX",
  "key45": "4eKVnxS2e3nwoNjJgK8PAb76HUZihpeLJBRGseEGTWckzEMJwzg4hZv71q5aphtMoucnUeAunvdzWaESYhipAriA",
  "key46": "LXqCw6ifRp3bzZHBoQxNsVExHsk3f3CPFm2dv2mfJeNwySbYjta5y8wXzAFDT3Qs8rKGsY4TYjEMXs99AsVJCsy",
  "key47": "5AZtw2d32DSU8qT9WR3TkwECb9MfMhG8TU2fQapSrnnM8Vk7pLFrTauFUZk5MNLRVvvMBaujrQqTR73AkzakxQ5B",
  "key48": "64yvdoxGDF4z2YRgfAvztLZsL76Mk3wpGzXBxb4YqBe4zJaTzHz6oDjPjGinEZ27ph7mmg9DmKGrLKjsuan2JVkd"
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

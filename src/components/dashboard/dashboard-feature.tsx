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
    "2BAGt2ZucH6TuzAAnbpnbnhCh25WTojTvXKa5Xvd2AnkaVNkfDyUqqgNkRNg2vEXq9g4xCqY7cYnyuUmRqjqCv9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dd3UHgmTgDLDwHRCeRej1gBeBRhU9kGCb5GseJds87cD46F7wqSKcWvDtEwdr1rGUhX1YtTVg5niq8ueo5XvTwr",
  "key1": "38WCiBMd1cX1G9tdEuiW6hAgDf3SLyDh6KfH9mptRmYGY4aaGLXTPvdmT7ZHXWsAuxYuudexTg2hScbnP1fRs4DN",
  "key2": "4SL5KCWZWu7mAsZCqSnurB7t2QZjfGDZ5yq3oQeCJuTvmtgqoUvZ5E3wVga4oM6cVpY9aAdW8he5eDsUkVZVEND9",
  "key3": "2GXYJKyvioxtYwjkyxMumgsCCUdx87HacMy4HA32eV3yTAbFdCEQh4YAnDHbiEHZT3merjoVZMK42kxCohK6ghUY",
  "key4": "61xstifsQhZpcAzwtRNLTKh1MChEkV7BJigUDpFrmamr2139VPC3RwsXQ7GwqRCEeeHMXQERtgPXsB4rNdbSenWy",
  "key5": "4q9RM1Sn1dXEoJ13X1frsPBTK5jiizuUCsnAbiTeVBQeuEf8f88tbfE1WkKYE9n9Hz93NBRa1LubaJyryKLRaKzx",
  "key6": "47us8MwcNwGUTW3H8uYbRJQCk51s7fLFGGngkiEHQQJVDPkQSe59w17VVqbNyHAVVLNfbR4kVCEN6DbpQM4wwbgi",
  "key7": "2tC73YbvgjqJq66y5b8rxXkVby6GGsZvUsuDitE4fbvC2tkwUsDyNgYBs49H4TSmWkZiEDYxdjznQzX6Fyh6fvni",
  "key8": "2nxKYbHZ3XuXcevVpxfFMTBruNSHwmJexUKUbzdHuqtamC7aoP4RAk7JoqbwuWznJ4VWttDDfkX6j28dZXnAPNHh",
  "key9": "4d5dr2akY9522gofK1qMqDN3ZkvfiF51WsTM6VEZ69JmWqXmWSRrW2r3SkPLqRJJc7FtQXBJQBh3muhUB4b8dAyU",
  "key10": "2uFb4dZDxn3Mqtyi9S18VmFNyw6HvnW2yYxVxJAwQrDcHJz7PYzP8FHQe3Y1kWzZkFVi2MCWYFyfW9YHzZYiRBm9",
  "key11": "xBsnHWD8ENJgHro1j8g5KJ9JhCzvhMDd6sb32oF1JJNfCQK8Sm4tAAvo5uSRkEHEVZm1QJ1Z5Jy5xr753VgW3N9",
  "key12": "4BGH9MrTQ9NtED4XXs73na2wqiujt4ase4EZdNXVezLD9EeH3LRBUJp3HCd3XuqnBmizraMqWtpouwWMwxMbqydY",
  "key13": "4NJvGsx9FC7F2f7Fw3wXxyFcZjqz2qTetZKPqgTkQsEmCHZDwwGZmRBhEu5txjHKaYGnKhsX3FcyKxhG359iDNgZ",
  "key14": "5Wzqr1ZDucsRKnewQUbNMTJEFY12CLthmECVHffU5FRGwunh8yUTmMi36KTpVSw8bXSfL5zyMdYUNxT8Bm5fcLF9",
  "key15": "3Et6ZgZMTxxn9gTjHEH7yt68bQCnkoafjX3aSAXQUeZbg8vCdsPWYPdfKvZtm7SPvNGRw3QuyY5bNDJARa95ZmV5",
  "key16": "43ngBSRZE5Q7YoWFtfXjFfpcdLdgPnSAcmUnA8azNbGiyYU8xyH4SLN4zNtqAGkV9MekfAwjgBYZe9gJ4zuxnFhF",
  "key17": "vDFqhqo2SqJUjV3YJmHtmEswtKhKKmi5quogk6KPjQ5KkkcbcQrKmVt1xJpba5bVK7ZehPXSZzph4hodv15wyxW",
  "key18": "4vCGqgwk9ojvpdPTHWxEdkrBoPbgi5kpq3FWnKgPwRJCijBFb9dpkfHazfQKuRDrrQHsqZcTXEmwuFGM5mqZoWyX",
  "key19": "uy51e6MF5sgvjTsbBppBCwG6EHDngAKvJL1gGchAsVKBX69Quztvxw7DbkJ8fARiy4suhRMJD9dRBfv4dr3Bphd",
  "key20": "2R6VSUsvQeQQteydMg1GSRLHPcMQckYBPpJmQkJ2gUv1kiDZ2J9EX4xZzHdZhTccBGxbcnWutsF4LhHhLM3FmRMf",
  "key21": "4V2QwyLdmPaEEXam8qsHSGcSXrebhQofVccKvJdJQKauVYebgc7QDD85EX3eeRnyyaTWTvQCz2XJufsoww7gxvae",
  "key22": "vvmKpLGPrCyXfzgUMXxpKFTqFsGtw4DcxkhYV3kzYhVUzURECdbVzWy8gKaadLzEErgiaShfaEgGmadRqYUxjda",
  "key23": "21a4VMksALo6uMajDwFjsp92KV4AcEZydUvjoP4KAH55Czy7XCW7iYTsBhkVjA94WBpnEYqnVyVsLNuh2HU8Aivn",
  "key24": "5Dr5wrBUfsLkzMtLv8HD8j8kMgL89kn66PApTF3RB7D5XqW1XuhrVPHci5xXjvzZEakmsxSsjFymWQBUyuX3nRVu",
  "key25": "nkx9Xp922pjU2eC5b3gNoj94BmZ5QhxD4Gc2ZNmGZUPzKoGsYfosEKruaF9RDc7YUQwj8jEx6e8wWKyYZzv8boq",
  "key26": "3HxPkGzRKEkDs5XmWdD2bJ5ac5qbC6MiR7hQAVo49YAy6baG6yUaEB8K9M5hfV8rViCoUBFLmnxsmCzHyUbKinB8",
  "key27": "2jFxWz9y6cg9sPSV8ssb5roec8QDeaVL1fSGP9JAVDi9B8bZrA9PzyUN3ztgKWegsFoCEhzpp5fny7oKVLZNqY87",
  "key28": "3b3ov7b19mYsPQFydsYYcpbLX2Qs1uHdvQXNGzyQoNBZqNLKipFQ2WdDMfL7bmM1N9MdVyWSkijFkE35dRjvR6Rm",
  "key29": "gYtDUW9MWtbLr3zRuqQniBs7B8mv9uyHf2Eq3RpJEizCybmBMwwa3JLQDCko4Vt56Ets8x5ZpiRbRb1EUuuZaqY",
  "key30": "3QQU71UhRS9XPWnafVaqmYZ3avoE88hnhRcCZuwFVp1B2itRFQAbUs8fWbmtvVvopxtFoSGbj3VpQHMiZWgXMUS8",
  "key31": "4C4JmHgKHsz2wsGY48jLm1qakRzFRNbxDescbSZqhaJ7LHMwAWcpuhWQjXNu2FJbyH8yUjFGP7gqzM1HM9wsp8NA",
  "key32": "4J5r2fgchqFWScKKmgMgjuVXhV8Fac4rWKQQUoSCPX92hngh3DAyJN4Lac3PNetKPE5UVt7VYJgmmzPB9j7ufNZk",
  "key33": "5WedQovBrtAdQk14WdubWyDA7qevuRiQKCyaatu23UhD5GJBYfBuApmo8afgvdK4gh9E4rA7HJ3eMV2vmmQYhd4i",
  "key34": "5e3wV44TJVeujAMtJNsS5UZV8CHCLX7kULzh4d39fBQ7fHEuv6SWM1djPtKg8L3S277qU5a3Jd2LjyDt4HQjSRKz",
  "key35": "43BHCySzqAD2SgUVyGEppYTUdi7Z6bLdhqojithgTeRRWwapfCAw83Dpseu17Guctw2PgLT5bT94L3zn2bcPzu6i",
  "key36": "2WN3cP5WyDeSSVPy41USKMmyB5zeseyDrVX9Y3SmC2fgMBdmZX3nB1ELrnWd4Bi5wMrwPQoGdQ15s9pXer5WtoBC",
  "key37": "3X7kkoLW4XyPckp14Ucn4KJbNeE8SQ7QunEXubU32Jervri3HBDmXKNrimm1v3dusuV4B7wiiFxR6SKwDWYkbGKR"
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

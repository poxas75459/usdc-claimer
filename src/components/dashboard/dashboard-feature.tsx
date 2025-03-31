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
    "2NmTztPP8pjswmmkZBGxhn9fU7YSyU2vASwy9UTW5R3qtoEb4HK1ciyD5o6i5V9XFr6AWRmbuwTmke75R4ZAhJWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GcJQP5enU9PhzgbCj1aj7xPLXJr4DdNwURBa9dnjNrcJ3CAB5Lri1xG5HwsAGf9TZ3V6hN2cec7Ak6ZYkd695La",
  "key1": "3psnt6MZAD2tweXTvrrvjcm3sqC8rfkPc5KLmao4P23zskRsF1nRDZenNnM5Ro8i6YDQG8fAGGjceRn5YJfuAcgv",
  "key2": "3u6K9Gr2tTWXAV57H3c3TtjAvMuB7W2ikjAyuJ8wYYMGEY4SL7aMepDZTtaphfJ6pC2AqYorNfPtHYE3PpjEbuNN",
  "key3": "5cU8jALCBf1z3kHg8X8fD8KkCWWnY5j6jnJj2HahNgx7GQq7SRYEyqcv8F47a6yGTVKQJGR98BSdbeCx2YNnBiGb",
  "key4": "4PL9Ff2gqCT3jxJSCsKPc972RFBbMJNPwjHs285FWaF714LadNMnrkBTKq6DUHt1ocVe55vx3gsjheJnZABUQ6Sk",
  "key5": "5aYeyvLGVEtdiYnUXFTKEfKVpNfouUATtchWPprcDF8d7t7X36QGaike533AHrekw4P5BCr4QPgX3QUoQy9zstJd",
  "key6": "5WwDZQJuF2YNBnhqLCyyHVJeqsMR5CqANjyabAeb2Ypogpj8BayywYUXMGQZpFn9K6Zm157u5Q6zTFFzL2kVcqEu",
  "key7": "J5Tb6nq44AE5ghWoSf9FFyU3FfJxhqsXiBp7CBtHjSugxTGgGbiYk2NKLEerf3G6i5rG6pAtnKuYYBAz7rxBuUh",
  "key8": "48GmDjjc4yuBh2xRBrphcNXzFHQ4cPXuaJxzpQuFZXpnhNHwBZP68vXfHrA8SSENxGmvTuAFiKv5TvLCUejXQcbc",
  "key9": "4hU2MgQP7jBgkiz1paE7YF2VjGL55ieX4hL9BpMBmhGw7EgKYVRThcYepdhUNiDnwABPDEGjVorw5PuujeSr3Lmj",
  "key10": "5vDwarD5BKRiEXEcub8gcdWa7mb9wkedrX6teKqjbbdh6Dqe1Fhx1wY8W2KqF5PhkhayfMgapZ5fQ5Uo3iLeA4bz",
  "key11": "ku9xBc87BbdMDHhQ7iks3B2Fpr8CVTHy7MAsNGeGeqBVqoQA52RpBj7K2UvmGzHeucnEAMf6NzzprwrayxwNtyR",
  "key12": "EYiVeoCAp1pWsaycgNRjAsEXt5MjSxFK7x5828YcxgVUuG225F9NgzGshRHN7wPPxPfQ3K2ew7BBnBzzy3euu7r",
  "key13": "2odChhKSwzXBaicqarWvKEH9wJ6vXjEdtBcdzT47bHnyRXLftpgWHQNvPVk1kmxF2E5dCoSPK2feTubn1rS95NMM",
  "key14": "oKiGAgrHfzAfcgNmF8r5eK91D5rj5W4BjBowPWf5QPxkBE5Q91yYbcHq3H3iCWa5PhyBzyM4tFCNNv8V28SESj8",
  "key15": "5J8Uv3EH2RB5fUFq19rWgvmpaD2j7eSmQXmHDvPXET81C4zdgjer3uCJ5WZisPFkwUTqD5Dw63t1nqAZPPw6Bo7W",
  "key16": "NsrJeCidpDwU48ppoTGKuxoxzfUuEHYNQT3S92c5WBg84SYv7EmiTjT2D1y6cTxsWCSi9medXbRKKNGh2vgguve",
  "key17": "2gojdmsgioUsRS1GLCh9mjzB59BFFqL4iooJn3DAe928Hs4d8aikKbPuR6aGh6Tt5VGCa5hhYUKq79pQjbnpGnoi",
  "key18": "2DbKLUPUiBZ1zUWjNeYe4Rbz2ogriVmq59yrURcJG9nsvL4RLS7JwkCCfp3gNmGwHEf89jXgBk84T6iHCBygw8Qd",
  "key19": "Kh6MwfmjNmgp1NfNDywbVR3Q4envXzGEjtYqZ3W8N4kjswmYS5XjKaEqBsY6REXz8aN9SPzLN7RdgbMF4M7E84L",
  "key20": "3knMRUhNnq18FaLMGWqLAdqRyE1BGMabNnijnP57siiRHjxsmpffg9458AWm8LbxqnF1yHJsa1XGpbkCmoE1rhwU",
  "key21": "5Kcru6P1dgiCzg4gUGjPLB8RQa7SFwUEczghsP7W3DT8fGVSK2iPY1AYmTZT6XGM3CjmUGd2Zsv7AoCF68g1NvZn",
  "key22": "2Q9j5vGH8MCgMZY9yVsffrmVNuyUzKp2qTtUjeub5EG2PpTcdtPvA2qdocKSWENpCffPVXanQj1t5M5rFTPEam6n",
  "key23": "4Tf5RA78FEvpLjWN1ghuUmmjqYj2s8jsgmneRHzo26rR3vBeo3tGvhg5WD31FJaeCokSss5MZyDuP8WiyfUsWx4F",
  "key24": "3WdBYYuhoPM5aDfLgA65R4RFBJALjzn3cC9ur2ZvSck11ZTzSYnN3PxSJEXMunf8yymNcidnpv4RUFMhCQDsWxVJ",
  "key25": "5aGTbJjJnubcHjZXa4jjS4BukahGkwsrHyHmN7tKAQNHaUdHwcmAQ7dkfzATaRArvU6CFuCpbjb34veshWJAkmuM",
  "key26": "2TqXuL9XLuYv6Ziij6Tj4HyofTTi5ZuHmuu7XZfi3TtRdPuGzrE8Jkg6nhFniMATs9wmowv8BpxHCyyvSdr36R2z",
  "key27": "5ABPEy6ikMrRF2tULgRAhj365LkmVb3qoxdWkdVD3pmnsNLDFcqaemRLM5MMAFcwrDdDdhVhhQbHvXRkh8KpeLzY",
  "key28": "cD6DyUiEi68MmSNb4Rxj1FtyZTWypEm2EtCAb84QXDfGXh4aqDGfLckasF9hpM7H2yS6oN5VTuK1HKfy6b3rksz",
  "key29": "4StAJoeV1X3EmmaJnLJ9npNa8u7cdNynhV9pA7qxnWREPe7u2WQQWG1cvCrQNwkPsRL8rY8Mn1q6CsVRoEMfkDDn",
  "key30": "3cmBQNHQW2AV3NX8yn6vkWioCYYp5qsMJ9CC3n4xb6uekC3Xwtiyqn1Abzd2je42KX7fWbsPbSY5wUUPS55FBR1j",
  "key31": "WZjH9Wj7XySJGVyDCgrwzNUq8754s2fiZUUFB5pDL5vnYZC9hizesSmsuvXvU94B4PywTF9LDNEXbkVDwutJcak",
  "key32": "59RJtzfWzDmFAXMdpcwMfc86Rv2tkH1NwgQYGEq4SrdDm1Q52XqziQWqJNTDfEk8FiF1RQFpdZTfkocGngbR1bAR",
  "key33": "3dnAzXm7yRkDC8fHWphaM9yFNNVqNoes7vQjsRJatcAzhrJxfZr46pV3xzNhGmBTsQM8SM6FkcXzhxW8xWZp9AZK",
  "key34": "3hU25q3qpDay94mwX7LKGTWSFCRUHwG5hTkKXePF2QdsQc9GciX8SMK8gezQuvMKXrAtpv45TGmL7hRKCkdRtLz1",
  "key35": "3R4zDcktS2qm8VkHwtxh5hQrGLuKQqT8eiN6WGkAz7LMTsMDExbcuGR8tSKKK5q37MoZFfvBUu42NQuJq2puhW3g",
  "key36": "3sF9BEdbhbo8sxbxnpuUP6896ef32z9t8i2XqomZzYgV4zMLJtjhzaXNVcL4iQUq4RVPqSwSn12HZ3uhHF2uiYAQ",
  "key37": "3BFGZZWACqRSGfDm5A4wREX4MjyHTmovTHELseT6P1jmXAf3zAhGCFH2AYNJ1g2M4Xf9pY1HwhTGVRgKnCCBYkhc",
  "key38": "5zdpWeH6C7PgFmQCch6sFgX4W3U5FEzcqHBYvhmZRn2miQAHw9K5VzRNuXsBMJEEakcRaMBRwUdY1rfsJomLmV78",
  "key39": "5myMkjYrRXT65KobriMUk1rU8eyi9V7TYJ38hbpmwBBP5vs3gKyZn5tjv5PoaXcpCyHQcj2FijsLfmnBcc6gyN9e",
  "key40": "p54J4Q6c3WaJdgXAGbrZdJbCeii7ivw5QYMeMFGGQ2yADJUmSnpJXcLXLJRDpkrhJ79rpXbcuKVaKAmVFm6B5NF",
  "key41": "4ZN8H3dqTD1BUr4mvgE78jeEgTMACJ2etiJxtgCqvYJz1G9wNCUQE8Ma3VXgML1fWdfiKJNNLmSCV1JFjCj3W87q"
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

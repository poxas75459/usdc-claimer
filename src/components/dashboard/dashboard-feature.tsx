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
    "5DxmRgEYo5M4MUDMA67WJqNsvGJTystRaSevu6pQHRBzdvGkKhW2EeSg2FavGF1kE9eiakGvKfCykAxoXrsR18fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4719Y6c4foUc88fKFPbjPDmV9huB9GQSw1GyejznxrKs9SoUcbMj2s69JngGDMkKEKjPR3o5xkUXe18KC3MhJY6X",
  "key1": "3VRfJZJ3sJCLuGSRuMTRqxP4q9q8WjgutjhyG13MvzsavsRcS3zBSTrR313HLw9GPhQRmof2LDJiXF7YH1yUcVWo",
  "key2": "SnPE4fBRbkaivLVSsXKTBz2bmoeX4MwSgoygV7mwfeaUDAHA2VoFNPLuDYdkjy2zAiGZ4PxGLFSfmQ6dkC9FLvn",
  "key3": "4XL63rpV1Ai9BK6Y5NT8CwuDNa6ry1y6TQP8fm7FdjjXwLzpH4FvW89rnMpwkoF5mSqfRzLRzoyFAxXoJUm3doMN",
  "key4": "fh2pxv8qGCzn4qa5duxwwCyHGw5fwtW8n7MQEYBv3twr21wCUj8kkmJSzhHfwwj4hLWnbtR1YGtasRuobG8KQ79",
  "key5": "65mQAwrptxttVaVUDjigezd7yXt52SvsLm6oykKYAZtxkTfjUpnZ7C64NtzknssA7ZayRr5zfK5rEM3PBRk9KYH6",
  "key6": "66d8JhhhDKLQqfNLMRj1rufuesWi1jDVCMo9mCdSCT7N8z2nmq5HgwcvTZ6Ushy9HGqrruZ5eMXmJ7GQi5vYkS17",
  "key7": "4RGvYu1U5ZRDuj2iJXq64pHUZngkMFBCECVsNhuPgkwyadar1pHpavKpkHTZ8bnDMgixPgs9khRg3vPv59Ab7DtZ",
  "key8": "45DDN9j92WCjQPUVFr7NDaVBs7vWrQY8GTkTjnQ5mtpNfkXGeSacj4TqFDhCdJnNSXVCwfmTSjKB9zpTRcMJ51wg",
  "key9": "2kXv24CDMnETtUNMQyunWj4gnptnYd3rd2GCJ1Pj8YHpConvdLmxuYg4kXKp3TeFrHbkz7grQNeVriuAbXDSCRKW",
  "key10": "HsAW6amDD1nhB2K6qUX3h1rBBwR8rAeHvUKbvAZv3jkqHiVfohQcBARcsNgWMxPKWxef1LPZ8NW9QAtv1MTgSP1",
  "key11": "4B6r4Loh4MXjmi4WuqmroZEbyRmMTjRhUfuenWaMpx7y8ErpbXrT3wTZKzccJGBU2Gmb7N4kCooBb9K6iaaTwKcv",
  "key12": "2K4J8U1d8nXBM2bSQ9w2rVSsEaz4sCDzx2HMes8JscLyqn1XPLRadeRkMZpxER7443sNswfJAPzxYUhBCUE4oum3",
  "key13": "4ZLwHszVKYEy2yew84WbcuyU96Qt11iEzfaLw9qrL6E26E77N6CXU6ZAHjqb731pTGhMPauEBDRyEQZGTqxibvCt",
  "key14": "2vJQGoe3jo91fJoQBwe8LPvhca4p5RKE9Y9iXRRDxmvmFVoWkLPM4iden59AC6ZZXr9ZREjGKAZ8waHLCvoCEkmU",
  "key15": "254oWUdRdKF9NvvAyAgbJ4PgLwiEHShmP6S2xATkZsmw4eheHdqkK3NV5PznhbEsYDm5A6nzMET36pcVSmjndVCS",
  "key16": "4mSWX4oZi6aUePv7g8vDXUCJWxHLf9uo6DYDU3qxnVBfKeYESWNRteotDKaK2YqFKhc3ngkh36bxdoxMQEfpoPLE",
  "key17": "5SWt5X9moYongQv4PmrZYsTnmjL4cGWBeAWJEzrZQ9wFaADHYuXEfKhTfpQjmy5XDZjZzmeNr1PwjkYd5A4ctw3Q",
  "key18": "5oWVf5NTBohUkEexFvQmAZGzpxs2AYC2mj9hqgmXZtpAgo9aMtd5BJ5AGSfnNtvEMchxSjNK8PGsRaWHWMjK1tg2",
  "key19": "3EP3HaqC96YAmmZ3Q1aTiztiw8dLTMNvbE1h4ZACUnPycMNW3xJLWT3RrP6veLx9YNQ8oxPJ13At9L2eoY7YQzhx",
  "key20": "jRLMqPPTn4rN9A2PXNMPBspnnD14XXtw3hh7fQ3iTdwa2KEHv5RZJcPdkMtTy1XiRYuDLdsW8RvdqdMTL1QNu5s",
  "key21": "3xFVU7YMcpfeqFB7m7RZgMRsv1kv7YnkbxwwwLrGNkbBhYheq7B9rAUocNhx2phQb4pVFDUwm81paAQCyEWcZQk3",
  "key22": "5Dn3bxuHKFdxWramq79YLZB4PsactZLx2F1ADJF7zdrZ17T6jHSWjQFsdke46yezimbQwExuwQKB7CoAhnW56mBu",
  "key23": "3Lzd35ThDfUwq3fYSmgyMCVyWf4cMb4JJ4cPQDCE95vn8MFNyyAdph5W1WC1bAEe8WrNmtynWn9JgGEmkJ629T6N",
  "key24": "2hbDJy9JrRXM4X9rPq1nLWUHUYdVFV99bjGTJUW4adXRuRhELoDR79czNAKxPMUT8WedjXFs4mmFNbSX5NzCyyaN",
  "key25": "sV3AhGMX7kfN5yA2pmxxWRMwu3hZtJAMm3kCcojSxY8B3N1rYP97TWri9wgSWTNjuZXzUNj7Q3LR51NsvwEUySC",
  "key26": "3TWWurUPR2yVz7m5pbm16aBpv2M9s2Gp6TF64kAoMNFMbv7dGkPdeapVBPiKb1qncyWMau41u64vbcZw1o2h8KA4",
  "key27": "4zgZXj6ZZKurs83cdKsbKPbJpEggDanw56q8YzwMPcxEqDNfbyzAy6A8QipngJrjhmvDsku941wpAzBgqaAE1Zkq",
  "key28": "2CW1VqN7T8jSZU2thd8t9CeVgu34NDiXGCozqTYTNgBuZtsqQDereGmoTRZYfPMhrwzZV4oZ1M9GjqxqhsKUZXDM",
  "key29": "vJY3pocFhSuNmGdEA5FEQcdr4dCsKG2ohTvDrtdYqQvuv9HQQYUFmqmgeWS5HZUd9h2xHGMsxjC4sXR6j63ZLhq",
  "key30": "2ZYP5nYD1RmMFzQKSYww5B9zQsUEaLV6o35StBA1Hwkw8bLmEKGvZ1T5EB3c5ZRSSubNU4zvJD7KCqTR4gBT5QYy",
  "key31": "qeKkHQXF1YJjF4rNV5TttJhg1Xs7hrKbNuJ9mvucLj5MLhJyv1kwKe4m98CbuF5qjm9Md7EjiuGyC1GqzYCA6H5",
  "key32": "2Hs7suTDrGsy4QLvq4N8Zz5mTYdbSa1DLHTsGuWebcGmVcjJTEDdg66b1VkUhUKUqSoCa6qfmodLcGnyRN2o8cHh",
  "key33": "5dPDxLMq4cVBYjsAgPe3571E6K1DBPL6p4subM4fyJLMNZdz6C9hiuZHXkBGHPLd31KjtsHcx9HgDYtmGt3zkq6D",
  "key34": "bEJQjwBipBL9WyoLAtZFoSoHeH7dyKew2tLYbLeMr7GX3Q1xfsBrxqbEkFqKE6GizhKYggMNwzXMSfU3iv8USDN",
  "key35": "puy1r5eSewjJXeWqXGc9u6iRxJ8fgxjcfnCpiy8Maha4fUXCKV7fWB1aCydVoEgZQzQwoKah8WiZEp9sVwSdq9j",
  "key36": "p9dv3RPtah1q4LCzpFDmRKP3R59B5qe61rskSLE79549F1bdCLcpnEkVpuYYMECXGTxioqkQ3ZL8rcm7CU5sCvK",
  "key37": "3mXLce6KX7sCQmJf2vvqui6JTzwvikpsgLdvLPyie78fe8UVJPXJ8fJFcA87N4SgkEfHmKg2E5SoWGvCdqVTTbKw",
  "key38": "26RTceZYZq9YBiEUc6W6YMFZfL2w7mU3VU32sj6fsFyFKvbMHovZo6RCFjeKRmiWn133L6MAQwztZscQM2jHcpaK",
  "key39": "y6UTi6RY8bECe3gyuxhvV3A7hzqkQebqmLQBpViZfZoAyCx1andGEdDMyvN6ozfAH5H9bHyJjwKAv1CJf5kP3x4",
  "key40": "2AD4AagVcBmwJenVA37pL2UGVmcFBqfhKLc8dESTioTHcDMjcsU4TcC38HKcJuxN2WTMpEq25MzjGiaU7P7H4HPk",
  "key41": "4NBN68otNyamYyJvgWoKMbKL2NWS3Fy6y1Ujn5wyPJirMCm21iT6UPNvsWA9BTxqxkwSaqdfH4qWdsEeNe5Cre4D",
  "key42": "4pZh4UbUoatAQgG6Y4S3JKBEkHYQrE3Cy36BR5p2mqTD2ZpFLNtw562iFz9hwV4JR5v2BwNUnWHqWc9vHkvtKSiX",
  "key43": "g11Fk71YWPJSwv3yomxQWsh1YhfEZMHXct1jQnRydjtBvKVpgFCT5P5rggcWVsk9iMFgyDde4RgymufDGpfhmCu",
  "key44": "omZZ29vPfhpzAeBjBR4LdERWZY5nLdBx7LFQnWZERuvu9R2e192pSKNeSkVFsCpyNYAz431FpD5ZVXQvdh63yNg"
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

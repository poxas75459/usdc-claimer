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
    "3kE95Jvb9qwfPxWakZG2bGYPY2s4SC1rRCyBP5s9495AWFoHj8yG1MpAnsYEHwxAQs9AHn6iwCeFmcoynpa6bwxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xpobx3z1T7t6BVmQZnpnfS964Nm95XG7jasaTdf1j2KgeutkgxAvufMMYTEd8x7d7pbBom9fhHvFhAJGd2zE5XP",
  "key1": "5kKkJe3zJKr7EBNYMnCAyb2ZmLU8dAvs4xbpWxExVCanre9r3nteJvyVuXiFTj6BPgRQwEqMp2swushjJutC3sY",
  "key2": "2cfH7jSWe8sjkUFiCbvVfmNTs9MsrAahWicDHXkQciHpQNBDy3bsT6QXQfsCZMbSHDko2uQdHvfELtD3rUjtYPqo",
  "key3": "Wf74uwD2aejJPCptZe7bgvWXRBLsXgGomAgNwhVXFn9GzZHbAukcWEVZrciMEpijhLyhTu5hrWGYCxWKhTmxbuH",
  "key4": "4Tm5TC8kWZaG2FDsDLakucBAsf78ttBqdDQiBiJqvtDkXpfJfKncnvWbFW3JLgeHuvgHmodKq1bGAD4hVixQDmyF",
  "key5": "2kRpHeeEnh27TJRXa4bi6FFxg7hHer4Y3Eh2cPEhQU7xseBy1rnCNNUZSMdszmzRy8fa6CXypqAhiDfNuuxFtqq3",
  "key6": "4oiXwvRamFCGmQzJCbypUwafbDtBgCTKAPNzhpEEBF4eskKQQNykHk3VZL9RUebu34FE61xLjiSDn2dcceTtRs8N",
  "key7": "MeRTe3scknNSSF1GhB1ZX9QiGHzp6Coh79DuT2X37ZEWwRSPSBNZTBp1DoN58Xssebf5yNWYZ7cAGFrVYBCmbQd",
  "key8": "5p3BcKrK7MyGAZqEWrkZoAC2cBaXz4kiFfrMpBqHNgq2B7APXMySw9MG7RDivcNSbuWZAy8BQEMj7MKB9aau3dPv",
  "key9": "3J8hC4hAGzE2pLT2Y6ZBKP89MddFQNUMesuz8yzhUHNu1XZMGqsetbG24EeEWd88tD21wsXRfvPftB9Z6Dkx4jmN",
  "key10": "3rhgc1Zo3Xd1pTciWitvpKofqsErfv6rZ43K46xmqMAiRUd9U9zW19YhyaAvSmekBcFvWUmbTkomfEmCbofVmbY9",
  "key11": "2MjT4tawb75SdW5vG1UPGt4PxPLWJGG8U8x39A9CU8ebBXTKiFi5qu8kAyg25ALESfWbETJv7bSNboiBLL3QwmYM",
  "key12": "3GEqYZbrV2W6kjoXTokogvAxLkurPX3vKXcYe2hPuN5ZY7kKxnqy3saryFF3ZgtMjdt4rVa4ZfBVfcctRMBcM8wv",
  "key13": "5AzNNCYYeucYyBALs1gj3gV89YGtKbkHftKqMyUprbPrhRwsE7QuhTQWGMPbb7H5HR9qGa7jAYTKXGy6i8WvhtKS",
  "key14": "N7AWLVxQ827ofuJEoxsbb3JkRgKDe1cQtSHUid39EcZSRYmR87rC9rXymGS4DbUoLYBxTXr1qpNGxFgpKCsHfDo",
  "key15": "5dRA9qr9xAyfeM1u7ZsTFBNjEYrpK7ppdQqJE7xErQNJ22YHKPkyXz4JnSqLqoHXnenG3RFD7z82Ugknmq1hTRbN",
  "key16": "532AMTJHDhXDUshz84CTfjj2Yc4E95KN1oD3fcKRpQo5wyjvvYQdAPEEcDzdb2jC2Z9JXiQm56uUZ2VyCFm4iY66",
  "key17": "2dydBnmEhbE39vw9LnaawBz3dFiJ7m91kER3UakKQYL6tre7naW9r8go7PjHNEXuKcpbgZXT35pyo1gEBBNvJZFQ",
  "key18": "3woYEUqoDbB7Dqkxo4LuC4bBoDoTVAUJfZuBvZpEu14vkKc8WCqKiTqYbCdLKSdEVxU9unBPnCwetmJY1y4fpw2n",
  "key19": "eaGtRZdjFByzg6HcVrdmkydQVTz9YGDBuCLJGUW7vVVXoNxG68Wf97zrztyDExBrfqt22dXTzPHWBLeMYPxWp2q",
  "key20": "4giG486mUBSFQmL8qFnA1qthtJTZ4bT9fPEHwjVMsyPLv1nzQ9zj7NVVp89fNw6DUk2H5G6529c9qiNQtykF21PW",
  "key21": "4eQz4ZYx5VS3mxjm1rEErB5Yd1CqpADUkWtctJgrXtVsHP3aQ2PQpvKV257hNFWwHxzhTbARQYpPdvhhi5syCD1k",
  "key22": "5CkNQnYfmfXSoEUYwnxgZJ9D8U2HV7VCxCngjWLNSXVCrLjpyEpbKdqALsbNknQFf3Ydii982fRR4r6nq8gQ18YS",
  "key23": "RrRNLMVVeS58Ct7Qzoz8R3f3fWS1M5SfBsCGcbBSAxDWSj8VxsmNMeBdtburNxhP2Ld9SJjByUgy3fKqx8fuwDv",
  "key24": "2mkniURkrtNvSBkXF52myScMUQxoZiTRHFpfGokRSrzXZgUcmCtePZ6g6CPyX7XygCTeoMKAor8c9bLCTGFYcpag",
  "key25": "544HQr7cyRNnmV3oqguR9KULTdjAUMtEUs46rt31sw6ipY6fLtJmUCiRLoWuqrJmYBJH9MD8GiC2eGnvWddHm8dB",
  "key26": "3YQJs6KtbCoboZh7JRJSzG6djDGtA9fgHoddYSyGghNTDz9uwZzbeoKMTod6MEVdMX2G8NjfXLJwogQRDKscTK4P",
  "key27": "4C7fwKYmEgeYJx4SwBg2tRMSmrdWHoBs6hW58qNxopFWsgQ4WxxBN1HmBTZMaTbdraEiva7xoDE4Wq91Mg27ksSb",
  "key28": "2iCn2XBdGBdDEf8z18iEhNbrniXre7ceVqXS3aWzuijucyWjbZAsnehT9JJfaFC2MBqpsapL3aRBRrsX2Nwc9txV",
  "key29": "T2ViuAdqFiwBSs75dceuMtdtbYe4dn3gVDvF4keeLmjgXxLg95F6vAAb91rQvxekvZ1gzwbydRjyKyov3zmQgVk",
  "key30": "3R1fJHAHd9FYxSrDDR3oqEp4kyYqZq6ozHt9bZfy97rN9m9LkmY59ysGJRymydqbv7BoKyf8Sry4wQCSmbJsQu5j",
  "key31": "2rkp9bFW5i72X7VcgaNGC3XaXKwFdttu6NY9Shaf8NpusEdFfgoEcWGBCNHWUznP1NqpCtJFYZSyXLiWKiMYotTu",
  "key32": "2YCDh1vLFX8C6NWpR65shVLndNBcAaefZFmJUaJRWoNrJqhW3qQxufaPcPFrUxQ5BTYtSAUfP4j9khqdrxVUy9JR",
  "key33": "4Uv3Tf4ixcfZQWCybtAdEP62uNBxb7vaMPHbJSsD5CEkhY8ju3qgdzq8cMY4MK64d1v9fUzDczjFf8MqbvXPzek",
  "key34": "5w4xGxT5XhpCvwznvk7tmRsfZdNFBPodDia4mk2subprfFzmrjs6BtjKcSV84ugE37C7nayJrSdvKYY3wm93F71d",
  "key35": "2DDpYBzUHL51WSBJ9suG4QXc39X1kE5s5H2MFrp5ogLmM64CoApxZxCKTYbwWtsJWpvLGWE53W5K4sZMkJPUa7k2",
  "key36": "49uFa2cr2uFZf7zLYgpPcnXJiBuwbcPzocsmVrDMyjGkHp3u3vyUFfqrMN2HvGD5ZLUv1M9hX2422YBbebvmUGQe",
  "key37": "4HcGPYHMBApM1CXGv1c23dugqqUYViDP9RjsXPoUgWHvvLHKSuhfBjMfkNChMNSMj4F7io7BF9Gnkrbr3JjPn6RD",
  "key38": "5F6nbw8kDs8Y1xfq5dQg5gUZgffCvGuBFggemS4b7yp8GCsRXZJDm3RiCK7BWVrwb3Bi6dqYr5PTyuSzVZ7EnKgU",
  "key39": "4hJyLdEP53EpaPtc7W3fMwNmdxx1TU8SqzBDNPsEZr2tkLCyfSmbeePH2XX5d6BT7spW22VnhgYQuaAzfgjbSpnJ",
  "key40": "3Y5CCnyJVMcoHdMrfzTTha8DrX26xZ2q7WCx8DjKAQfq5PnBWXoSK7JYqG5LrP8grGgjWGCRdUS6BPMy4T68ZyuR",
  "key41": "4vCJ5c1eyP3o6MThkL8tWbp8fAUaXfuD3WzsyfhivSHYG5i1cbP2in8hhwUoXLn7DU3AScaR6Ujw1F5yrtcwk8jJ",
  "key42": "Nb14mitKuE6eGAvcnKoHMWQ3qV1cHs8CEhmMhtiLBPi9vyDSQWdFhAonfhVmRp4h3iDGSyrkcLcSzHGCUkhk54F",
  "key43": "3BzkPviR1AByneRMRaYRbBfZNCuZBoeYX5vKmWVFvvUBZBAwNS16LrRozbitLKDKF9WBhDjW2SyVYXoP7T9kyva8",
  "key44": "2v4gw8rd3Dvjq5jvLCAmVxx6iGGHYQcQ1SEbMzGVFMUVUdpKPffSHyQFZdnuu2XiQvt72at4ussiSPyK4mYmCUHw"
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

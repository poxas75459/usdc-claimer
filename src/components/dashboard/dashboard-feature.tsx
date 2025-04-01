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
    "4zcrLdmVSzPfxdxcGeUavZuaJkpSt8yHE4CtmLKGttgY9NBe5QfCm1XnazbKgGd5CAWBLu9Jjkma7kgJtetDd8KP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxD7u5AC1aSSZZ1w4uCJU4BzX9uv3TXWUaYjZuExwqN8ii2AkStD9giGGgtQYACuREGZd8CB3P6H7Lb82VJ4YBD",
  "key1": "GZvB6B9gFsmGUpw8rHw8AQ9Vb7ZmiaHD7AidY2ppuYYhXwT9KfXCSbHKCzPMq1hEvj86MR2yXFEBBLReRF4UEvj",
  "key2": "34xysvFmxZFT8xSLQMWqJUg925KUcY32xPc1Kp8vN7giEaESdEq2qZBiBGir976yjGsCWryLa6vvv5Hzw5iadiJM",
  "key3": "4qpKqK24KXF3b1GcDEf652q14BWVFmCmzjvpkbNEUk7SDTFdpWFKKE7PMwZUhDVVp9JeEAhadCFmK865KZtMFRBY",
  "key4": "3yfDnc5dXmmPVYHDyQ4TWb7vU6PiqYfpPbDSacdgj3XshJTHrLcxkb8WRTALydKMqNCNt9tbCsUCdcuRUCfSPkXT",
  "key5": "8rPeyyzoP2bUCw3DUn6CRHEpjrymFCs3ShNQnafb7fZfSH3SADc33UZqCspAMZ85objC5Ww5Gig8AhzXcz3mWGi",
  "key6": "wHT3oQ26gJJavoyUpaXKsEXWR8Kk5rssYxH46asoLuzxSkrbpvkoXWu8mc9FJshVN8CU4psPywmbddGRon4gH9G",
  "key7": "5yYWGHBdgXe691Y2Ae8qU4cEu3DmLrk9fyZDDvYzSAV7HuyBZa7NRh4ws2znDsj7XzddjwfUiBhB8L2auFYogP88",
  "key8": "3apQwJ1dGm9r6ZSehm8seUDuQNxRsqv9oXnQC4LEe9rd7jaS5frfMk1qLiVgZF5rMq1TZdXLgBRRPQbwNokUsxEN",
  "key9": "2ovrsaX7BGM26nTN9qKVN14yDuXr7Bx4WkyKSxQ8vKqhQToZt9893VciE9JrC6N5QmDpjo1qSeijYUNR6aSqDFwH",
  "key10": "3EbzrAKz5Pg6UpaZfN2RTbL3wbwiNGFXdSTxdZAJgZzcgngp34wm1gNoYmX4ejPak5As9xfhZuRPKfBRNuQYvNgt",
  "key11": "5Nh8LGJAQw1XQEfvAYvNSWzaHCe4MWoVDnAcNkDGcQg9GBQUMGMqJM447YfQzGd5B3H9sdhbBaUSgX374WBNKxW1",
  "key12": "4VeWh3rRyMYUdfZNcmTbwaMvWN2zXe6fZA436FMBYreCe5MLdYLbySKJKzPuKBSbeH49sQJ1ScKSBmXh1WgCxa9K",
  "key13": "2Cea4czkZmG28zF417bPq97CbcMC5Po2BsoFsBzKxkXZBUZmXurzieEn1iDueKMfjftiGUMPJ5XbDZms4oGojybo",
  "key14": "V5fLKW4WHDpaACTQ5sKYP8DavqepKN8CYRJfqwfEutaHynLDgFb7s6GNhJ3sBrZiz69bLRwPUzp6JubXN4RSyGV",
  "key15": "2NKFyj81E1MusDKaXk3NgnBqLw7Mzxbm5hvrAReETDdGmb2iAiRtf1grRCX73Qw5YqgAmRqg5nJWW6LsrSr4deyu",
  "key16": "EnAfHZHB9SEZNmH9ysMeCUaojJ7aL6mwS5gCBe4NJts3VzB7CrPrwc5BnEpQoUJ9XNtja1AJ6Gu1u4rPZvDyMwA",
  "key17": "2ZvHTyNupNqbdFuqj73kka38u6DPMJXmj8YsmkYWmhc1AbZG4XAbqAF337R2R6mNF52q76HRiRg83fE9Br6jzx49",
  "key18": "5yioZHkWjp3Whqm4CkkiQTvJk62dZp92Sz9TKGscVY5HrU9v2QBWf1HmdygtNGWPdmjfQRuwyibG4RaziM7qrwdK",
  "key19": "55Eh1pKdbttLPdBbYzPWgRmozDSMc9hgkdtEgoWJBt66Tt4cTwqtMcBRRfQSHoKXaMjKcpZosz9fJdBbYHqHMnSa",
  "key20": "5UqJLc1zv32MLc3C2y7osVZgT3tsX6LrGktK2SjFVHjchL26ohSqRs9DhZiNUakCa5nzx7JBxDRkTpyGQ3mGZ2xG",
  "key21": "3ucmJL7yJhE4NT3Qwao2qUeAcEWqgDiXX6rQS2qLCWgs1gVpQwECjnyut1GpqL75WjdTQZeYUtpq72JfZXGpohYF",
  "key22": "c8QxMXNvGbipB8ZCc18bBtCjzGVnZBCGAXPAXZonpFVDSmje8Lf2ME91awmnET2bZHScB6qkG4dnJvgqu8jF22n",
  "key23": "2V5XcphF25f4ihXZDe6PiEjFjHU245qLHKcRTFhTJEGvZuToNvjLqY8iXqXpKSjWRCKhMBh4MFBqEXCMk1phdUGF",
  "key24": "3Qft6svECYniz1WL3g7VPtH4V5v4S7w8PvQvSNE2joipo6dnkcV4GcYxmG2AahYqjW7zz2tRZicgZnYFb79qtTNr",
  "key25": "58RpAxsxP28PKoqfiZd2WRVZ2gQM85enrCmuSprk8Zf4FGxArFMLpG5Kc2CQiK52d79YcQvrqswJjUf5SUwPEJ8B",
  "key26": "4inDPytsZHAiGwzBfdgu9dmLzVJH18G3nTBn9WKRVSKk5SgJTYAgUhb1SoRhFx1jw8TmqENS3gBHZdPn9GUguoxH",
  "key27": "2saCobLTcSLsi21i4V4XQqsjRNVUHQMD2MRKjyvoCUKWRRwRz3ToJmi6UbWnSqnNPm9Hd2FH9EqzSxsjai9GTjUy",
  "key28": "5wP5diz7LnDBXqvssTahFAt2Cg6bCzexWdSd1WFeC3S5vwbizqaYctmwPDLBvN1x36qJz87QsroSDUz2UHs6SXJA",
  "key29": "2FwwkwT8J5QsAexzKdMCa6JA7cpE7VBxS4sFPDdrrrhJA1hkM5AuTTkp4ErVHJTjXYmXDyXeM6nidozzre7fv4Ec",
  "key30": "w6NuJEzzHVKXEgML8SDiKi5sSfTCsXBibyiik9gc4Q9yQDGXY2B5WZ3CPKiK9VuRGvSJML9XrfvkfRra5F2G1H5",
  "key31": "3PRKcz1g5xcWq7q2nvoihg6ncQwhsJ8t3DpDYS4FNjAY6sm8tBSN996yutSGe2jMHJayNhNUWjLSkY5aC4PNb5S9",
  "key32": "GfuP6oSppK8PXkpNtysP7YsfpuDzY138Pgo6tTWKb2CdmKBM1Q1asUm5ES8s7augtV1ykPBPuQgHsvn8aZgACDe",
  "key33": "4Tc44igVigto1sxZawbcixmqrxoVyxE3uLET1WQRW8wC3qnDXuDnC2jY6HqtDYMUpEtTr6qkKkgiCpDQXVRbNHme",
  "key34": "3dqTLv9WznMn1ZuypMkTnznogZJ5pyhwR68r9epCLiPp6wozhk9bRcdG9yevvNuCaXkxqZFBUThAiryPBPJbUwwK",
  "key35": "2YrqtV9UGDNXa15CHMxK7qZnGkUZwKh5cRrFudiYqEY8fZeJE7vStyzTkv4L7daUcRWiQUuEk4bsxZpuFKtTN2Cw",
  "key36": "5YzH9r1HoYesosGUfCuTFTuqKGewpV6jCxe8ym79VF12MvogHGKd5DGWsBwKWLeULFGsqGfQUxyzPn8kXN8WmoZ8",
  "key37": "4MrWNqGibzcGdoaEW6t1xKngbTfYr48hnTFucqBvRtBukUqXdFGWNtu8NsJUfEhHeCk89ARQGczffsGqt4zvde7w",
  "key38": "2u8QPXYcnbcaUozZZtHSu3JgPquKg1Nos3n67xtVqKoaookQp4oukcdaM7YaZ9dzUCf79azAaCmGYAx4BQayvJxx",
  "key39": "4URR273SfFPc3HeHtn8KELg3f1NUHgmbANn9Y22YPZRWbqnhrhAqp3JmfE848drVoTEqABbFV5D2rLLmAUhKA4wt",
  "key40": "mseDG12txX7FgNqVJyE3G6N97DNQLsaLYU6Jpsjtmb5vMbf5EU4kHsh34qu73X4xwSYBoZysZvr5R9w2MegHjt9",
  "key41": "3L2AYffxWdMJv1bMzVyZYgZQEeSo2HUXywXtYpF6ezFJxKkBiNB1to4kKbS7px5BMgxkCYeK6G3AeU34oZmACwea",
  "key42": "3sPHhpJnwr3RkUPgxP3XsKtTRiESSc9Ry3smJpQX9yLzWhxe2rrYUcBfmYmPn2VmhG2WRCiKN25hYW9QwpFnCsrp"
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

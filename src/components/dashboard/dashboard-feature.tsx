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
    "4y9Xro7iUYAZjdxdTvxtTri3CYTRPAUF6AnMXLZBryd6XewtSHTdzkhFFZM6UTvU5ioAJD6NHV11pLyLWwWPFbKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zq7o5RV5ePmwgN4YEwrVjF7ZZ3YaCiNjdYWNL4Xuxpt4LaPCpajrycCXvy9cz34aZ27it3txJURFcVYn5DBEYkG",
  "key1": "5Tqo6mAgDR7eA8FQ1KsqFGBF7VJwssmdeTSo9Pt2bv8VG7MpApVJTub19i43sYJZJKviDox4Cjr4BeoT4az7Y8sS",
  "key2": "uUzustN1T7zyqLF4AE3aXdA7Z353Hgcs4sPXntnS8tcE1wiYbGU6sBUJNwVMDK5JsZcsQ7bsAJ8j3s4mm4N5QmN",
  "key3": "5MZK4pZNN5tCXERjRrJKr9w4tdYHsdutPw3LZFTJNjhF938QYvKPyy5VJB4kioYKDasWMsU9JtJSVz2VQs2bZnK1",
  "key4": "32f7sa9a53zUB5U6eFCpVMrubrEuUqvu4YQGuLx49iTSERqisGkm3tMkwatLPTETamqFzRVyxdq81EYzVRxFDn8",
  "key5": "2q55gdHW9TruVHXGzqFjxPA6U9J9zGmjAN8Djk777wD5iw94HkmQCwUCFs4jHyvf2g5hWfCXXkkHdbRzUGfKUeMP",
  "key6": "3GH5Pe5Q3Tz9eZejBQx9YbmBBzsrXAA4QtwbwNrm4SQ4kFKnRM9g5ghr6Q2wi8Htt6SgM4YDTaTUFe1fLEToaSh",
  "key7": "rQfCm1h6hwBtuZL5SqDCDxhi1Gq4eGbBdNAQpyjq1ya22AfpKNRF2M9HDsTB68Qx7u1ym9dBLdjibqiwh3w4zXu",
  "key8": "dUa5X5kcdwkrSv7EMh1cj861KqYc6DQxr9VASXrvTJZnQFUN9yzKF6CH7pySfLJdq2cpUCe1vUUxtNasmXEUML7",
  "key9": "vt7JLyiLizY9MgM8ztPjfU1437bya64YL1NM4xkzfD7efLeE4kEm8xnGiB5uLxsuNWLZerQ28DRY1WQyFPEpMLT",
  "key10": "3sVyq5n2ZfmHRAieaPZsbn7LYjDRDve3d1ES2vsSDmEo5aeFntTL8NfXFhzLWNqhbgehtsiwodQS7U4fHQrdaX8F",
  "key11": "4R86VkCoHvqoo65juyycCTPtEjf2zwnmV7voX4ignrNdZqS7EDZtsrvLGWQXVUDsZee81idLZ1HDCag6YQXSLg9V",
  "key12": "26q87QJeRNWuA3xukMJv5CvupNkxRup5BDVzTQ4kZTng4Kv9QGccDYdWkpySGuhrX5cRp2JvbuwxK4GzErHTB8bq",
  "key13": "2E4SmxinWo1Axk6RddqS3Rc3VpEnxFiN2W4FxjWVvDAq4UvdAiQbdUzUAnn4vWEL8jsVDqPnQYE6jf6E9iDnyt9V",
  "key14": "34xUT7pRT6rnxTFsjaxgRzVME2gKYXiZb5YtbKuSE6ox1cFY5FzYeMZ2mMN3Ucu1EKbx8NZJ5DcvTEz2rpCDyBxF",
  "key15": "4cghSviSNdE46turBGCKZrEkY4VsHjuaJ2TtW8FgxhwpjYsoEkyWyzUJmtjXSNX69WtP9icZUh2Th9XuiBDAkQg",
  "key16": "7kc2uh4T96uqteCFec3LVQj43Wm2cNpzxW8QNLs5RY5wQbDsgQS2W7AdJRVMSoEGF7qgHhHuLcqSNFyJDTGRZ96",
  "key17": "2QJ9K89pNqZoVLQgsYty47ixyCSw7ShzYdjgVnFDVHzByn27MRLQAgWMYGHZp1NztG79yagJ4gMhxFtNvXMBxD8q",
  "key18": "2MFqWyodXzaoduHWKWR1p7317WsZ681AifH39ZRs4BB3sfPMe3Nd7YqwXJ6EkQ8DbqUrCuBv1LSZeHmcbwePuksn",
  "key19": "5H2zMwNmvNzSj2k2EfKHeqTzUSsLWyDi3VAoVVQUqucQajGP3sn4Fd84NQM4jWpSLsEeXPFPSLgeVRkcti9KsxQH",
  "key20": "2xXdw2RFgUfvVqahDpqMV8BJ2RgQHfw1BDfrtzsDiDQRjYUf19eZt7hFJCiURXsFQFyJvg3UfezdtCSTnLoAXwxT",
  "key21": "53VK2fBUcGcoukv519QbinUxPrpdHDT78WktCPnmm4UFQY8HV7j59DoWaGmjeG4p2cytV6U267wQR5WmjvkCP7kZ",
  "key22": "sPh2GiCfAQjkVZk9JDwF65ncvbDHKSBYQGSWVGo65v2aXAMjwZgsgNZugbJNAiEtyzMs5TBZ2kQMpkqp4TjdXX3",
  "key23": "23zCXDNs9UjfHHA1BwUeAGwiwTTWcLTZroGEBvXQa9tXY62jLUidTR59Ld2WQE8hhj151DiwpvzpZs4arT2HdDkR",
  "key24": "5xurg76cjLNHWtsRf9egoasSQkZwR1nAuqnMrzTV1S7XFTL8Rit8XpyQHD8THAMWmRd5QcjMtJnXZ4SxmhAPBvuK",
  "key25": "2sHVag2jo2pAwHvBasatAjteBPUFKd8ukqfrKtUMTGRsQ9cLZU4s5ipew1xBe4Ta9jXiiNWQu7zSKZbqRLjxuAbi",
  "key26": "5R4R6QqtiqDem1R8USKyvP5er1D59jHBKvCdNjHHrXAq15v1PBPnKzvTTJFbxPCGfUh91YsKM4yAsUVDnQ837nBk",
  "key27": "VFrAer6A4GNrGNsXHMqkPkqsx1XfBGQ3C8Qc5S6BJYFyftGebmVhsda5oZbrKXGcvhe6PgZMXG7dm5Jd9nPRzac",
  "key28": "wzk5AL8Ryprc5wLqCcceBx7HhsrT18Drf1HT1BqjYsgW1VukrV1XEKgvZDJeM7eoVU6gLqxFHqQnYVXVMb5q6xC",
  "key29": "2Hevk4GXgnSwm1nCHRNtgUf1TmWKUNGdKpBYMGKxbvB75UutrtXUqrb4zY9aNCUeoSDcp8QxaTNQAX9zasDuSwzQ",
  "key30": "5CArpwkjPTzxvDrDdKktRMW7KtCR9s2tmF7XF4qQHvajirawFSCX9Yaw8bQbnqRa68u2VvP9kPzvLmdXmR8iswSG",
  "key31": "5hzRzpQF996WKRScGYLhMvRPqQVggu6D3rv8xn3pCgCpVuFxDWGVg1KoQerQgxoZTSH8FEgfpJdgmuPakjmErkZY",
  "key32": "4LFRY9HzeUagM3Layx7zSx4Zk3XaVadiHJpDzAgn8bRupyeAJPh8pFk3rqQY8XjnrX6sUWvjv8UJL57Bkp2dXmFF",
  "key33": "pE8YQvZsxRkcHvCGW2LDLjYSEQfSLVbVqeXVop8fWv83qeigz4N991HmJdHrRSRNYTwky5vjqjYZEjvp4fpSSQy",
  "key34": "3vGeWU22rLEDLovVHdLiCvuo9kStGwcgPfuzUtE7a7yAbH6NRcAqiqC7hn6zQHJM5oMMK5yL8KjA7iGSPtaJJfMT",
  "key35": "63tjZZAaKdBjtwo1rpnZHp4jWeAfPdxB8R42uyywuEMu7et3M16N4fxt6Y2nQ6cMGAHwrsQh6k9XLVT1QTWWfrzK",
  "key36": "3QX8MzWioSR4YG1FoUw16MbiPS2cmYHqoPanfeZKgh9ZQY2VtDdetRVqHtdjfZ9ZHXdGMmSNBiV4Zzew25jPtojr",
  "key37": "2BWi5jyMEjSm5oQKz2x9n3sQ2b6XdfbLsYMxHJurg9g4jsnvK7evi4cB5zyFgZQd9529W1t4ccWR5i2Ak1nnsyYM",
  "key38": "4DoZsjsZ4aDSLg5npRyFNNwoorCM4WhsaG1Z1atexSdhCkqpJj5rQmAZHdfroztX6vaGtkyNX49cMjUSH8YWE1dc",
  "key39": "59be82bxXpwiMkGemK1V97hW6HsW7U8kKPmjhpUMEVJbhxHUgtUDGsTaUGqkXbgJTAVPLm461XymX7f6NpMVnid5",
  "key40": "3jJmJCyeERQ1tEd53ERpKDMaFZzy8PJ6E12zRBwAHCYqARzFuLmumMf3EBhDksAsuTfRY9CQpFKNG9JJuKZB48hn",
  "key41": "3fBc5aGkn67M8wcwUvXcaPLRMEHosq9T1hbnMZ6esijfxqzxKLPUygWYqb7jAq5JoMEzXKNj2ZiDNC8jEAYKYwqW",
  "key42": "5QFDG3KoKQT6HGkKd9NhcS28WPBhfa6ZJbn2ApePrWThBj6k7mEVj1Sm2CATFt6zn4KrFs7TPo57jgQj3fvgTQip",
  "key43": "3dYeFBvKvQ9zo4BR7GADPQcCdpPp1k4wQfCTqfVNT9QVTHypqtgb1uk9BHgifyAAwaiAbiVQy9HskXGaFHuS4PAB",
  "key44": "2Nzbi5GQgFRYXjZbptDYPH5wnMmtpSSWm4gdK9zsEA1J1o3mGXTKTPEpufCsZUZeCFhazxLcYqZ7ZEoCvL5FM5Yi",
  "key45": "npeHNRETtYBapvhsdyNCFqGCmkw71Pq6J1hSDPVTdXLYHD7WExLsMcG8RZfJMPEe9Q6ZsdAL3hXkBi7Ky6UGr8e",
  "key46": "3Gq1ZK9fmggdcod4XRq67Ptk8trCwFpe7sxyf2ZQWZiqfTfo2NRC6j735WceafbXHS82driVXA8HowvTF9JdkEz5",
  "key47": "2d2d5f6KoKQoiwCdsaqtYPEDRNBvEhkaW1SpWWf43S7vXKwRymUQxqHdXJdc9gJq2Fb5H8dstfWC2VEkqWT8FaV",
  "key48": "48DWuGqDv1Vi33uy9bPd8scNE9vfr1brtq6C4Kikq5UrTdKnDwm2Qh2bEQuLyj7hQanJgzcbuW7PAbwh6js9VTjD",
  "key49": "4d9gnM4xBbZtgjii9oVWw4jhy2Ev52KVMPVk7CeynULePGJtWtMUEx9bxJzKcxZXsDEBunAsGzbCyh1USBZHPT6q"
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

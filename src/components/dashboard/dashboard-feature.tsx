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
    "4uEahqU1ZEfY8dq1AjtCp3F3XU5exZQykSQZ5z2ueVG3ZZGCF9CiNWYhEJG6BQz2ZtfHhrvnC1E7ZhXkUrBswQkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dc4XFHVWGmikptR9ffEGfCd2n4TAd9fsiiHQxQXthsGfK4jBPX24Eb7FWoGqSFnrCMZusN6YYvxqtrEZ2e5bAsz",
  "key1": "4qSf5yi8VSPyFVxXyGy2TvapMpbRwgUhMTZU84qNAUqL4CWzFsVbJ9J2cKbPbHomSWTDUsWzzG5pd5QCaoV6UWDj",
  "key2": "2iT8ZndyKk7HvAuNyh5wvSEtYuYnkRimpH4hFUzKjhrTCoRCDj7CWAH1kyHURAtM3S3Y4cjE8gD3zKQNCtfocy1C",
  "key3": "565dV13mwYM6bVazwy9PWkzdrUmLsXXQpUnwsnBMgUpUmhpneK2ThfQxPLKAHJD7afv4DxNqrB4M4YoynBBcVKG4",
  "key4": "3WWLssRty8aSG5t9JLphLSJuyWzcqNhSV3126WqWh5bC5C9ZzU2GEp9RTA7PmNi8UZrZYnGJwMFJqnoTFbinWY2x",
  "key5": "eaMgUfKYphtWJqnBtJk3YjHkYbkXG7GMXaxV8mqBvPH8nFFK9s9WoUedXRHMQxTLT6S2Fnew8p4afaLx4GUxwuM",
  "key6": "3onmsktVy6kpi2dNYe5cGhdkAUgcyB5fnsDrYoUSAFXtUePeAqiv6zuuyWVhuiCd2b3jCQGKugSgCHf685W4R9Bv",
  "key7": "5tsxLEY3hwpK7vgZrSXWGWmnZV9uZBVRTLTUSqqxwxBJ2yeMdz2ZEJzyFzECkzWo51KEv6qYZfsU4uyf8gVKGuVY",
  "key8": "3B2iheVGsRLWsKUdN5vq1hZ5ZGz7kzZHHN43gCXq2LWHgSrGNhJQ5DqynsJeU6xcQY6XMvX8AYKV6FGFaVcWs7pu",
  "key9": "3z1KpBVGiwPG1Ze6Jhtn8ZEb3n7Mg47UJbM9U1Kskpp3Yfrwm1RK6xNKXBq5DHJJHUz4fcHZdDSQ7GwWasJ8kSha",
  "key10": "3YLrEcNgRrVHmoFGMcZSdHdDU1zdu97CQ5i6VkLRwDsBb91qXNtZSpVtwQKepb5iFnMCpqv9LYoC235wKLaWT2Nd",
  "key11": "27WbchkpjtwXwFdwvHRp6xARnF4gDrKJjEzLJBEuWWQbcHrdgbeWDDNp2uNTXaerHVpXXmK2PLXpcUe69Gk48AuY",
  "key12": "4NMoawwr3GXxJkfZX2eX52WbrWG6SgBNdQ6xm4HCvQW1Z8dM39crQuBp7txRFWsRyyNGURUp45uDUsNhVLbgHYjH",
  "key13": "3vDtb7i7khFZMgkury9koBuVKdU9aTFxm6296DdQmyndSgGkLUY84tJzTX59u4tdewe5LBDHGTUs3Ygyndtizcj7",
  "key14": "3DMMZdCb2c3eutq48P5iAiguAYYBjqmRUsYitw519HWrc5CApfUY7eyuuvf5aVB33LeLLAZ13wuY7V9tzS8e4vCA",
  "key15": "48b2GrsJkCuQaa7bbN9BnuSRjf8oQ7UCgwmQZjSdHNDfZU4xZR9docDCWwAzc4ChQ3NntexujWXLDS1rKKv6QVWK",
  "key16": "5nFWgr2T8XR8dipFzWbACKjUFE2RcdUzXaWfTDpNYNP1T44TaycK8db7j528oLHuyYHGHxETVBxFVRQGzPyBEJwW",
  "key17": "5T5spg4FRpyese1Ystnf8gJ77HAgYGRHJMuwgrHUhqSvGxDU7zsH5dnsXFkhJDHfxduttdMncz9r3ifUHDgwifA9",
  "key18": "4cz7kuz1Kijjwigfh3UWhzeG2EqosnHSQcfZwcsEyvpX1hAPD9aQSHK2dKdHax72gasDzx4A1fyUqMa8SH9CjkBX",
  "key19": "3bv2oqL7Jk5n9xCRAoY5tPdfXAu5sN3WyQixeHVtr3uWi4VjxezqXRb5S5SM54SsNkCdwiwCpiHVZe4DnjHXqNdT",
  "key20": "3MckW2XUfGsE3CmTeqMQx8dpghp2YuVDBHNdZ1bvhq4cjqbMyqwFPeF4WD5rRt2tsVY3CM4No9aYF6hr4iZNPgtj",
  "key21": "k589okK2CVzyhEHQxsv9THt8LNUWhHg5Y8dS1U2kg6kafoUxpo4TdbRqg3UpQNu3cTeee8Y88Y4cWnvhM24xcCr",
  "key22": "5tm7CkWeU5duCaYsLtQhuFyvEXGVSPWyjy5i1VVzZEoRvpWEhHcnve66HQf6Ef4hwVhzDrqRGQzScz1RkhK9aqsm",
  "key23": "4s2N1iy1pxgWZoE32VXC1htb8BsosfxgXKitj7kTvUpRihq8a5A1J5vArkq8bGcVc9i4TPxvWs3mK21jwyihozZw",
  "key24": "5CZax1mSBe1SyeLq8grT8jnEG5mGHgR74xdGedojoN9V6DbF7TNXAWPthHwjiR8mH9KL8g3URXmdg92FzqdFf1Vu",
  "key25": "3iDXWaxk6La8qiQTNC8UkgLD4BXgPGAwcVY5cxwtnbcXKDg2BiHJE8GW3xamBoHMtoidcXWLoKgyVzsWpsufxgBR",
  "key26": "2s65PzHV2Kska25GV2HqGzNPUEFMfRCVtJfbKA27VVFqkKQ6W31xQo4fFqMPBskRQ8oTCUJJhNf4udFkUJJ7cv9G",
  "key27": "4vwN4sPdp8yPbfUkvL7frbt6aExfstZ5gV6UEbGtDAnRN2tw6zyEorsRj6QossxiRAru76bWzDC987D46Ew6fuRf",
  "key28": "3RzohzKZpbRxJ5eQnex1T7GmNvaNMw1S94j7GUVsBBTbr1PxyLFY84EUqNJeyG5ZmgwLT52sL8YgRgZVXDEaEPP",
  "key29": "sR2HK4jY9bm5Y7TXRBAckxA58JsHmawR7fGxtAdvGCWWSQfaaRyDAuQ9D2zHA2hcqSK4boXwrMZvPaMsAEc7SfS",
  "key30": "ucap58eSAqKUUmJKq2KoiS6SkKVaNayj78sRyg2LFq5KpA2PPhYCbXfMimhmXmLN4X18PCpKpd7FNUH32dJbUZ7",
  "key31": "59QRNF9i1Ve4WNC7xxJAdnpn6z7VtfzM2jzeKvXPoBWVPTVCAQRa7gbUnKfpTUuUKPQbDsTdyqUyXS8W9kUymwDb",
  "key32": "4Ag9C3baJLqrDLcsrAwBW7jAuiqHUQGQF6xsasS2wPrYvt6k2MDoE3Z6YukPtgctWozfkq1NXAX19BzDay2BB4eU",
  "key33": "5191ZP9RDpktR1Uzj3hXGiby1CJf3xwrUN1Uw83k59PYSR13ggXETpKotUCQZMKpSV8gfHiB6RgCAQCPJETqyKJj",
  "key34": "2iRzXtagFvdEswgRNuq1Shcee9pGXvst7uPaVvCmmBYjQxXjfeehs5HKruPHAUcMUXp7BQXmpzbpmKfoyUAhRcnA",
  "key35": "3qrkNk83tHeqVhgDnW5djEcSz87DPbsFkoBtTJCoehUQH74zbmczP7xD5ZeVfsJ3gNK9d68y8BbfdiE7tpNQKyvL",
  "key36": "2GJeDmmzimAD53aWJu42JHYoEpSzYtQWoxfzH2x84T8AtMpUj8RL8HkjFfa4Etff6up9sqkxSQ1WgB5aX6bMx7Bv",
  "key37": "3S53fdKU1zHqB5hRHejKvNdM6KHWwfViZLaXuAv4UvDj6uxeB9NuzrN7rmoNKSHAoQNQiJScAnf1jZ2cmKhZgrXD",
  "key38": "4iaivmSLWLy47CxpsEZbx8RGmr4rwDrDAh6QxcwzEEc1X78nk93wx4Ac2WYvC2dHbQqSjzF2UEMJUNXVF8RNv7wW",
  "key39": "354GKLkit4E2A4WVyMmpgcashdcJf4ioSKZ45zTnVgFrBxPh7Fdet2AnSHLi2xDkvFknWKSNi5UkTwyidK1sqEZR",
  "key40": "2Lj29auZwtd3t7RRTh94JCFpqzk1ipLyzzf2FThAZDTADeNzxPwpvEq8jtcZAeywyNhjDoFKE5qamTAKqT1pLdpd",
  "key41": "5Y7wqsL8iiQDXqrBxJwGWmrifrATGZALJgrtwzwZNhKwy6eLgxxmKBy7UWvobWrXpZdbbR8ofTA3FyVz6Y4zTzrV",
  "key42": "4no85o4R7FkGfLNbYu5FfFiqQLYqbre9fC95nQnkK5Pu13uJHxDoyv9ssXrCKKzuSgQ2NmJBHMAr16fTKUgCTjow",
  "key43": "5zsfic4qwdJDo7VmrYpAfGRrCFBB1WcsCG3vLFpCW2fZdYTVzk9yPKQgb5Zq55fb1ztoyvUe3ktunjpaBxcViY66",
  "key44": "5e3pTGKLdBamWB4cLWiz6KztzMpVthjj2fgAoF9Z2QUtH6EDxT9ULShypXFHgXCV79QEibpsPwfBrPNCjPatEEkD",
  "key45": "3neLxmxeCdSB96qsHP7Qyi9m3hmW2KSqfcBEgek57CngikcBwsLwrfqa4B8QQyDT3Amczdye9w6YT72SBDzkiQHs",
  "key46": "62QZvG2bt54gUxpAvDDox9UJpwCvjjtqR3zcUmsugN34wfhGvjmXqPSajkaF1SmeFfzdJmV9WZm64MkcdTi87SQ8",
  "key47": "s1s3BkAoiDYF7rA539opRU2M15PaYKLqHRXC3E2rzk2G2is6qVCWDxpJ8GMovbCWRBjMzpNxyHCHuEGaafKd3TH",
  "key48": "3muoqrHrDbi3sdt5exFMsGV69igbxSAQVYzP6mFkhdN75MfKHrNu2uqwJJAfbeB3yCtm8ieNX8SMk1EuoYofA2gC"
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

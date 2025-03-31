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
    "xopxLfdNEsvRwNtd57ChK2EvZt3XF5vP8LRPmN96RCoCpJk1SwVDBobYBwtUxTCew3JNLrAo7tRnsxYGtPtybGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sT2xcBn4qdv2TP8LP4jhZtu6w7U98UhyNDviroLvqWFX2Rj3HcaHZFL2o3HSdoKiiWqME98Xa2wgSUodYujQWGE",
  "key1": "4XA22RNhXaYuuKANAsVe322QGmQeaa4LfEH2GiZBNZbj7vnjUDxDMwAgnthvB9QvfKJdDib77xHkqcJtRH1SK1UT",
  "key2": "BG5Zm8z8qew6mSn6MBunCcrnzZgVr7jrwsEfn85wEPCiVTUAgcDkd6Au4Rbgjbuo11hAo7tvBVraTeeia3DsSgJ",
  "key3": "i2McTbvyChNEhDscWF6fTf7u4cqtXEca6zuVotpkYMPtPJLh5PSYDRyvm4qsVEtw8NoY2eGEQbLR163CKLoT5M5",
  "key4": "2Neovds2BzfFjaeDp2uisgdDvPQuMuQMq3Rmr6qsD7FwsTUzkXhgdfAduRm9PxUNhrAtCCSrcAXmvKFcXnTup1Zn",
  "key5": "5U8eb8iccKfLEuW25D9XwvwqCQUqCDaz6Cu6ikikksQnkX1QdV4m6Xbred7xyYbRXrQYXMHdgRVAuCePfwpvgi84",
  "key6": "3576MX5VhzhU1aBYiy1VbNA5fT6DnxJ9bQ4macuKpUuNMLHMGtJSy5ucYiig9jBfbGfmR7PasnN3kiEb71MM1YMX",
  "key7": "2fvg219Rj9YxN4xKkpA9WyBfNBmb9NLK8ubPYaiDJKkD6MAFLESu8iSd4PrDLzXtSRhzfTASrzy34DTPAgEy9sp6",
  "key8": "2hnfmpg7qaakL2YbzFSGXvPHuQHo6AE4fcPSxW1ykAXv5CgA8BopBSFuLcR1E2qf4q1sxjpvPKz2c4z4swZUFKZ9",
  "key9": "nejXGwfzNRwXfS6SBBVsPy5SP2CAmZuiXX5EaAaSXjFw3xNaMf9NwLfQFSqF3CNHPdpZrmN9V2X7ueCeUQRGEZo",
  "key10": "4EjRmtBkqG3ePNzLza4pmfdHCvXKbCBZ5yCcLAAtRdXDKKDeH7gXwnjmii4FxpmHgFHKhP6QobXqtWhWQtiaTzQV",
  "key11": "2B54Wmcyq6j7iQ5GdnCCT9WsqqeGFpfpR9gu8RLciSo88pTh3XAoFpWvBqVuAKK4YHATRGWp6zSXnn1CkBUsCYsU",
  "key12": "3iD24TjstteBCQES9H5k5k5Uv7uRqNiBRtLehAttkMrV8dWvBrrnKCCYBXa66wAin9XRVWXxfctNoyyTS2c2yTGL",
  "key13": "25nf5AvGKDhAkbqpZgA3kCM7ZNPnoJo7Ua6MZ8ybioV3qmjkGzvBzZUZZqkMBictjx24a32v6nXRBU8RFZzy4Szz",
  "key14": "3hCLtnA4LQyYQCwWFLZ6Ms9X27ab2wpYKJ4vCzvEp2v1tHN4qZVgTWf8DVFuVw9Bt58LKQRrme5YL2MB46NjwVub",
  "key15": "3udLJQJ6MPLATmQR7Q7znRyMfun3eNArTW9o7fZ4vg1MXUb76Ez6bGxFH2mT1f9KnLkmwrKk2dbmWJL3rQLyXUmk",
  "key16": "tmW94e6qpzQx7CCkdcG3f4cFLaQ5u8U7MeTNRCbUZsno18g5yUsrmY6FoXPvPP2hQkTckxjT6nwn3vRwfuEisaG",
  "key17": "4cb88QsvxSmP6qvwHpMBf9sxw4enH48p5wh4EEb6qDBitS7UTe1FsneWKtDDcuQBfSqrtvGBsCBTbWv6BR7WxoPT",
  "key18": "3JVyEE5sS5UZq9to8ydgTZtCPfqCWGJ6GPrsV6KMpG2TvDE5igZ6u4QVpSU4YGTo6hYiumfJp4bZ4jD7Vr9m3DE8",
  "key19": "5SFHSJTS5SW5znBqMcFUg8JRYq4DWRfBishExvV7yH11Bmpn8FNTr8Lv8xbpXf8bEMvG1dXv2yRhdFVM2T7wurop",
  "key20": "4s8E2i2QX1Q4tMLD41Kqhgz53XdMSjUheRE4oKHS3kNyKGbUzKSUhMUXESw282o27zJL45zLus6ZTorwvVk57Z2a",
  "key21": "sbzzSoYwtCegjscn9284wDYRa6WG1X3vJ5pWmZ6JPprvfpVXNzQwyjjC6w9452wSv2LAJUztUXE9aBMsPqTqj3E",
  "key22": "kV45GTyoENKaoSjnX52Wf5PGMzpSGyVacxLTQSBiFRNHXS5PxwsDqYLBHR7BfyrfzvCgjE4aPAaNTAh8DNrg4u4",
  "key23": "43MPoWPwduTDeL9KoFrDQNjmToLQCMkRY5BdCLmyiZM43AjrmPR7hKXyrjk6kSXNafe6QhVZUHFMVsqVcdB7sefg",
  "key24": "29xBH1qWnrcbaXdNn4QUeUnm3kvqDtegqmbr8wezMEAjmKPHgkurN6tYQYmY9PAuYHuitDnmKodRA1ABWchXd4Bd",
  "key25": "4ni7gQjnM8JXozpVaXGBaMcjnGLP8QjbCBipzfL44eL3mepw3A8PPD3qNYE7ziv3yDEA5ASRyAaxj3aUi5xxyxcG",
  "key26": "27VishL6ZESZurxLupA8Gr7xPaoMvEjKMzy3CxQFMiqGzHFZjCcsUGF4GCV6H9RGcXkGLNeyr8RiTqmnAqfUh51X",
  "key27": "jGkXD2q3pQsTj8KrtVGkmPcihZ36M6Jh4aG8CwXcUZwZ5DrE4WujxdMPTDgWem5wUR5L7QBLeoGeZ4yttpWNRkk",
  "key28": "2qGk5KJ23qxjw4n5dYLW7xE62oZib5arsYMPD36LDd9VGWpULVm7xZi9bBBT86ue3ZFmypU5K2t8JUqyZVqJrihD",
  "key29": "4HQrn7GNs9DmTczjsnxsTTe9NLayjptRsBzmzt3wzf8auBBYxMC149q2jw5KP4LdFGkdqZK6wsQNCCMmJ7Hm9u29",
  "key30": "2MHP4VHjNNDQeso7N21PiT9Hxde5MKgBZgJvbpn6VqoZfY18fPNKL6SRTHameAZgudgzegZqmKjKgALYetMdvvPx",
  "key31": "3FqUQrxpde3SXQBndnvuJCUB3EGtt9x151YsTZvn3APKm8ShW5ABnHXAEw7aKtcPC67WoBfDusam5wmZUc64jKW5",
  "key32": "5XMqTRyU6cm14J2SVkKTovkPzgrPmt3VP4FnTBXEJtAvKiSSWoUPy7eJEQb9nyVofiVngTHQwVzfRpVXWKzTDJcu",
  "key33": "3jZAL45xMGx2TdHwE2naqXP3TxcNHSAV7YTDxnVodXv7Lnb8vTTHMikikVU8QS3oQabn57Yu8cpxuen4n5hrwGvK",
  "key34": "5cX7qmQMUjthQGjWvsKB732UooWn37WV6SkZJRRAdPW8oq1gbn16Rn8h9uxAqDqT3SHUaEWZYrm9vWPeWoL5jCdZ",
  "key35": "5oqtPJz4eMj6esMNYQ8cJLy6L1gpP9J6YSEEhBJDNUEDK1YeCj3Fi3hpVrNFjVgzT6LwFvioCeTui5UAPTLhyJS2",
  "key36": "k8dEvVGK7njXKcs8nKcCQh8LC7msXLtZinJH8eaGMmnJtvvUX3CPXqoi2fiGFMY9713V9CHsovTVhUm8AigWFyw",
  "key37": "VYnQWgdeGDsqQxWKcaiddSmfwNXrJV65tZ5c538WuBxqzvFz1zRxHecAepspoxGqoJPDGKgRtvaBMosRqgpMaQb",
  "key38": "b2cLpBibqkMJwE9wJQb6iHzXsU1NACMPdEuYBWTRaVvQHNSRXMjUKCyMFWxkZiv3fBS9cDdvWc3eR7uWBWF8ap3",
  "key39": "Mp2hv72xQ28p2VUBAYHd2kWT1TVL5pqGyE6Ht8cuvsdTB4sW3iZdZcBYSYR948vbMZ21eNZb3JHbxyNocqVmRPC",
  "key40": "4tkv1HW2AXuBY9LpTUpMyjPmqPzjmTV2BjvxRzddrRNUtK3ANdQcpfBqAR7KcGHKP1yiCza18xhooEjXNp6wWSu1",
  "key41": "4Nyrr9nqXt6N5h7r2QcWSuwzV4X4znkzfjT2vYCuv9kBKegT7prgiyUFuh4Lma9kJwSczszBbxua6bUeXgCXHjgY",
  "key42": "2Mqhz53JFDEsErUoGf6KPuAhBvjvJXfkbGbqReD9de6qFEhNH98xqzsxLsVRanzYtY7HPb2ji5zZjwvSxd6DYvXw",
  "key43": "5RMfQycgrggsifiMkJgVcCo32tfvSerAHBKjEyH1X9VKZ3yDfKAeUEK9ycqve86oPmwaVnrgSyPxHJ9kMP7wx59C",
  "key44": "4Hjarp9SGmVvbPRiwSNgfBXwstDSwhLgo5wWNGCLYhtzJfxsrnjvGV6DDhzVXYrxN75aavZp5AF9dhhd6UuqZ1aF",
  "key45": "41rYMBrgPgqdJMrJ9oRB5y75nQoUohZnTNakoZz5zmkaq8eap1PkjEF84SkUPitGZJUgmD2MVHiKnmTwaizbwDri",
  "key46": "43fkwjJ6vA8NU4oNqkU4kFDMW3nzdDEr54o91vveqnv4MF2dPUFJoUvGjEmnV5UuMBCW2iWccAEmBhqRmVS1JY7S",
  "key47": "32vLFukZaknRYfz2JPm5HrqwKrnemC6zBHYUdRJ6u7Kz7icFtPAooQ3mwFkmoGqH47N87X3ErDrCL8Ej8SSDTXtU",
  "key48": "U6giDi8SF5GkgsFwcrUJ9MUdzrJYRDYwWp2pEp96iBsNQpXdtpvnRTFLMRSCSkdpnrNdK2w8k1Wf9gArLzpjEj7"
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

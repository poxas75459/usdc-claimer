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
    "5eBuHdKLwTbZTj4FV7Kk4kxh32n7zN1EiLXUjayMV366wX5MP3sFuXH4GoCViwq5oGxzWUFDubq6MUXDmi1UAm6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ag5qgyFg3Hj3JZXofhumpwY6fh8fuNwrtNbQ87iy3pbWcY53zjVRQyGFip4uQZcbxAMSmQ69XpxD6HivMh8WTnP",
  "key1": "2NrxPzpvQ1jvDXjY1wAcJVoeY33EsicHFBAWjfkmxgJ3Tbq1PcQGBBVECR8zTTwSSN4RPyPrff8MrnsvJ1BqYXag",
  "key2": "4r3BtMsGGNAm49yrE6581VVK95QBSbSgTk4oq1gDsHQuA3AH9xzBJsnVhBKZLxybgtVhf3Jp9b9rtYSs6JqT8P5B",
  "key3": "52cL6yjb9S5D9EuLgKZBpRyUiv5oXnUZgSeyDNSGD4fehcwbT5fmLPQSC4R8gm9zQy5qcU6rzNvUq25xXdHjVA6G",
  "key4": "3kYUFLSGQK8u2ct3SZTCJ8gZd49awbYbwwEWm1ugRWm86TCXuRFGuiRU3fKAVPML9NMZ9En3R6W5ArsbesFXZ5My",
  "key5": "enTwiXksPnVHbbFkNzvW94bF8rHpMiE5k686twB5Z6z8TGmuPm2yuzTdNEdDDx5cafkYs8p4E7dNV8UMpC5XBfv",
  "key6": "Vm7pqJgqagqK3WBLGNxA7hnrooubvJ5BE87neuhebzYRVGw5RtjDt4e4tzoX5Q2Vor62VjNegvp8QrZZQarjsFi",
  "key7": "3KvuVb7GJMTSrBHmmaCTP8CGLebbzKqQHJeSnoPVynhSTgK3oTCkZzcHo1kucwZaCGRSno1XWcXAL9xEa6xphXE6",
  "key8": "45XCjRP3m3Q7mo6r7XmAmBgEFMCFfvT3hnfB4RNppY9DbZ6vNQsZrWCaP1mrsJBN3AC7Bmgjxzg7jwmQMMRtuNwA",
  "key9": "43qax1PEUYPtqWxB9jbR4NzRcjuVKCbnBSCg4765RXodXUGiUMZDGBVbqGQQDKZzGhJu51PPR5gLrQiyVitE3XZm",
  "key10": "67diyDF2GPCtSoj6bP9S74WRVszFWiUqNBU1ahkKoWFVnhkPnGqPM4rrkM5vv6bucXruUv4WE7CvKSHZ1uZZmFpx",
  "key11": "3Zi63ojREx1SvXPhLpJWq24n1n9EhtpX7kMxGYUGpCPYgkDJ2kx5a92cmSCACwfqB1dAoDGutfLNR3vNfqzQ444q",
  "key12": "RK5XHG8EHpgyKeH1KbTD9kuBgB1SRMkVgH1HRX9j11yNzipgc6i27t35Q9Ko8RTgpDeyUKbdfrsPYx78B7G61Lq",
  "key13": "4y9jvgMhSsZ3CuMkFyggA4MW1rLdQC8j8uB9tJqoLbShCxf518q78q7DJpmd6y1bpLqK5vCFNrEYQttpy7nd3TkU",
  "key14": "2J4JmMrm5QpUEpvKjirGDuVTocidJ3BUHaqATZ79oG79TCrcdkHS8wuVGaKftj5JrE5TgW6pfGCHhZGJSepxa2gw",
  "key15": "LdGTAEZiY6P4rZCRnZavvZkRYDYwHb7ZBtcLfGjmzZqgwWUpVRU9N8X1WFW4vmVkRbPWZu8aj2oRwQGNwCQDxuL",
  "key16": "31DasxNkMtVYfAodGQtqiEic7HmjS6LaeaViYYtiJxowJxa1FviHGsGN7Cv5A54DtWiYtkhu7j3ZBYvryVT551pR",
  "key17": "5eyRMd5nRatjGpPEg56wgXWMXUWFDKHT8L5RN8HZj8taPY89YNbyCv1YSBPppqmxnkhSN8DV1crw8WDD6zEuaJwd",
  "key18": "5Df1AxSp5hUo5vvmDdgEXdfyxdV9Tefzeyg37mHdWaKwa9W5nvpUELogYbG9nLJ5KDSnj6YdNS59VMdxwFUELQAt",
  "key19": "ELaSfW3FpiMqdJtWtzrRGWp8ZnXU9r6s8dS1MqnosEMcu7R2pfziWg26XkC68mhsDfRTBpbn7npaLSxMGMEMfg2",
  "key20": "2W8RKaw4DeNMLQafegSr5dETZ2PzjoMCrcQM3efU6x2smFYyrq7FRGAuDJaCc3mPX9abhZvN22NouWJttyAb3B4g",
  "key21": "28y6fHF2gegYE2i1pR18YQrGNRBBV3eLXfQAtrN9XUMja16uQ8Xb959gWLtED3zsqzvZRSoC2q6itRrMVGKPFx8U",
  "key22": "GtsZnSb3k1t1zA2QuQsutpgZ4yDoBicQx62Le7jeQiRJASaRiXZnEzwPE7sJJ36aLH75mmDR7QaawqtxGqe3ujB",
  "key23": "5kNF12Vd4uQ9J1FtW3xWp24CNUowMKZB21j7jLgD2RxhppDnKYQhSEJJaaiSLKU7dY8dxZvjXFhG8iqkRkHav3ZX",
  "key24": "2jbXtM7YD65Sht4L87EGL16nn9xN9yMJbuSKVwyuutLJ3utpGE7NGqJEE36QKnKhy1Gr3199ZMpiS5aZ6wjAUsJZ",
  "key25": "2YhaiMj88s3rodHVNHxMgMFy2yTrtRkyXYY6wbSaMKRsXpqwVQo5eTpfadaacDkwDZP1CAdwbR8C5XUyB39Ngkuc",
  "key26": "7CEREFvHLk8cTq4Rv94CDpzgWJKZovRSgU1C7jC87mG6E74xXDmpoYLpwo2XSMFaTiHsn9S3NePoUvMMVf2G9GG"
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

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
    "2MTLtpTg5QmqCbvBTV4TMQoTNE1CYfZsPwgnbDbeWvSd1K5apvL2seVQS4iKYNhytVk5Uhf7wKXyiWvu4GTpUFVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UsRutTEbM2zEDDtqXy6GgJKjSVZh6Fmm9tLScwo4mHhzcNVJUaSpPzmV2XmsfLCAn3nZtzzPqF36WCKosqtJSzB",
  "key1": "5k7Wzk6ypWcDkNtGPQ7sVDzzFSYk3ZhpakXk7xNFpN6MsdGRuDHUVYn5A8xH43GyyRtAyP4MfSMEcLQYGEqte1t",
  "key2": "2rsU5uiDrncQraxxrrPFbPZTRw1XB54riDAV8H7raXFcfrNiHgrhqhv6ghsN9mS4fDeHu7NRyoM33LuBtSn6LL3t",
  "key3": "2wBbRi4KsvhM2YDSFyqzhGWaRRqTupNuHCvRjXYkNz9An2ak2V9rEQCTPPvKt9UMZBpwcELsXUZZk99PEbCWmfoE",
  "key4": "2kLPGyT8JZgNmi3SYZ43NWN7SnsRADE8krMtP2YryToQYJYYGM8siZ62hPX2ScE2U8TR3P4YdCmczLr18cX3pXxd",
  "key5": "1siauJ1FJdfkPuL6NSHNHZ2DF5xp3szwG2XCVLanSaJqXNhhgLhtZyzSBd8zovZDD8N8crHnAMvPZ7HeKWMZfmW",
  "key6": "5UnXuoJnKJYmYWcYA2c618PHNpf5LPBD8VFueUjUU2AFeKW9dDsGh65EEFkwEP2jYBpfYyZjw4tjxCC6hXEtzgfA",
  "key7": "4DSZBcx32wzqj1nAEF2KQd19ZtCYtk18z8QpLd7T746nM6Z5hSKxPWJ5uo3EV2E5HM7jJJXQx2CxCHpRfHzW5BBi",
  "key8": "3VMLxhAFQ6Q7H6vZCxkfBtC4xpY9dAq1Wtye1nJtrKQjTn2nx2AaRPtZnbhP1gawPiQfqbnoFBRNZm7mHpU582aS",
  "key9": "5eCNoLPxERHUHjpfBuAap86yafFFQsaWJiwrkYRqjhs59UPocdw8HSyA4L4WHwfWKb5nY4RdjRdnTu2UTXu8QPxN",
  "key10": "29Ks6zQTus8SR4ofa3LwEwKnDTh2wKAmS7wAh3LVYLPQeJzBAQEPaCDnAcYAMothgJFoGS4qsgyaMZWgtjRPBBcC",
  "key11": "4mLQu18RFpNEJk46oSX8iWynZuacSFPCBDWGdPyxqMSvF6tqkbzpwskJdLBHSgzdRfVt9Z8J4MrPU88j6gb8tQFE",
  "key12": "4vQ1yvnFvBBXzPYB7uDBxa9G2dhc3mmBpG38jXHk8afTLN1LsWX8ZUAy3MFQ4YjDfcVwk1N8hd93CtzQxRt6DmET",
  "key13": "2BdMu38A8KgNxxKLsWEVKvXV3vShwqmQt7Wmne2s1Sbw6WkPsmPZ1x6CKWr3Tzz1A1YdZEXt4beS3yKVu6pis7U6",
  "key14": "2yGgm8mHu4Rx9r9RgC973Hb5q15Dq7TmSHn5mC6wgWCiCWrNaZmXVUu5oTCPHWHquLigZBKcDqDMNHSgwgEKG5SB",
  "key15": "4wKe2RcKG7rxgv5qgJkvju54mVBgmfnGT2bCvMWuJb4Qno8BhJL62c15QXjDYmbDK19gPCZknuFjBrY9cnnEBqpH",
  "key16": "35Pzis99mXBZs65MFe8HsXzZmhpUSTXrZBFSY4H6NctHz8mhnQSjMhWesSaFXAKv61zZPLt9hj9M5Mth14gpSgQ8",
  "key17": "3L6qcD4pfWpnNwgZAjrAFmGsQmSXnf8ey6qqiGj1menqhuKgLgogmzrbMy7AyP77y6beyeHFnybuRfetTGX9YvRx",
  "key18": "36Wf8UEfDpztneWJSNpvc1JYsY5VCm1kqsG5mnDBecEmrBYFUG6guYWaY5b7bW4QTtjWKFiB5iUbqfT7wuE8Zdmg",
  "key19": "4MbHscyAmZGtEFx9ecq7Yzo1o9vT39r3XKYaTdnbmTjUVKz3gNe3ogmt5wmU5ux7dXmNVETBzJGhwcKad7N8Rr2T",
  "key20": "2p85JZ45HLoApp1ehETMHAzds2RyTpjfg9NSrAUpqbjw45QACYNGuLkKkRQMoVkTXEW4eBL7a9zXgCBrDYHLBRHp",
  "key21": "4PKKkGMK2ckNrujkUyimNdpvzWTG4WKF3cXNYZAZf4wTRsrJtJrLipgJ58pA8JYjzWKDgRH4W8JJGv4pMXX5U6qm",
  "key22": "2C7bwWPDtrMD2p8UUer9Wavx2JzLtjV4Msgjn5anLuTncZS3rDyLJd1RBzkK8Lerrfhiu9aYr6TK2bhF6FBC7KHV",
  "key23": "45krnWnuxje6aZ7dZx6dzLCjWwdZK7aF36oyGybYXTugPjUTwREoJpnn8qbDskJpSiusb15gyLPWiKVgYzDfarMw",
  "key24": "3fv1FVGzy4k8inUbF2prdRSjd4noBdGAiXn1yi8YNRdHJh2qrvpjGwZJTdYGNof3mNuYpmJgwpmek1uj2kbT7tvP",
  "key25": "5cF9LctfsKVAZ7Dw4YT1Ua9gcKG5KsQ6568BazRgPvMaEwsNn5zYrSgn4QeZxftuMzXRvBr8e57NtwHUayzq847r",
  "key26": "qmJhBj9snLBKywbzTwNLNScF2W4bQfT81kxcX1kwnbYqsZj2wWaqrbYuvDxSbhFN1snzZHuAJnj7wfLWbG2GUSF",
  "key27": "5R1wRGBf34FMMdPmvSgbZqxDPEv6dTwdAedHiXBZAejP39sXZPCasHfeWhnDrfACdttJRpKo2KUtC8EzH433EpE1",
  "key28": "5jbwMekd85c2PJXS856Yopq2FD11pvCa4pfSfC6rq7Y4wN1V5dn5YVFj36uCmbLHripa9LmFswnE7wf1L87CjycK",
  "key29": "Rj6v2AfU8PR6SgvXgAWH21UHnZdJTGNSXVFk2JWCFmmysRAvn1Wd7JvPbue4XN1yX9eTTS5bTKzgUhBRQ2Spjyp",
  "key30": "UdbagmhBVYk2iQGzWbAmQfm87d3cVyKFgx8pUBsxWtiQzAtAoJj3VGWu7YgzNkCC8BYhuz53LnBATCAaJUaWq4s",
  "key31": "4FnS5ASK6KJbt5hRJPmG6iW15qzqpgTXkTvLgt3pBBkwAqgWycXCFxZ13eCbMVRWfVbMyMCrPpCQdkTMQCBLnSYT",
  "key32": "5BmSYWBQH5JYgZ4M2FXm21h1P1qq2asKutVRPZQwFmkqZguNuQSVELnELbAQ3Y8DdPhG9xFFWxLvPxr6vpfcUUXZ",
  "key33": "5pVbRL9MDN8vtQHUGR9yVzHEBs9kqh9Wtvmt79cee7uNMsNXMiifZEE17SEmCXzhP3qqHBaZ4Dkm3yH3bqFrF3wU"
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

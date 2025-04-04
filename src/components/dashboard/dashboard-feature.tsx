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
    "2NzaTvfBsBHw1utiWuw7ViTJ4jKEgc5eptoTgXjutd4VDGXLk1HtiGeMVGNGieNtqnb7ijoqAhKYgvodZwULKwN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkWRbYr5rjrzzwasordV8zi3Wm2Myt8z4DWRBsw9i7SmgFGAe5PeKGXwxvis5yUhbZrgAKRrpgr5mwB7zYwxVo9",
  "key1": "3YXPMgbzAafKwTPKkK1AeM9bHzp82W4R3GmKUqnxYGmDAJxHf3JPrp2jMVpvVCWetaRZWkBXq3c6vf1zvxjD9q79",
  "key2": "2dcfRdKqV3s4BXQ9WRVEVV7ydkG3Mk6ne6kxt3FPx9v1HQNo2DBFCgS4RMJdP4UbpG8pWAnquA82UqNVWdChSoTz",
  "key3": "29bHcCqttverraD8ZdRqVy22uanPT2nGpuzFELV9diKiY1E48APXErw7D7rAabjzwmRArxpq4kaBXBbAswYXJ7Gm",
  "key4": "3b2fkkB2k8DB167ZWJM5wx2gMqPHshsZNDH29iHfrrnLUoW9KJ4JseUCKN1v8jj27Wr2XAz6AVUDTZSnDhbWdwnY",
  "key5": "4Gvdz4mvLbR4c4NxUGrb5hJagfFXsJ1X6jWE59kdxUPbuFmfRektJUt8gvgR87KE63W9DDwYb4ZnYu38o2dXQexV",
  "key6": "2ZSe8UWefwpettGYUE1fpvKoiYkUDV7FhrPJW6nrbw4v9TGaQzixdYBhQVmPRi7oc3AfSbxNnoqE2J5hWdGH8ZrV",
  "key7": "sar1x3mzuww2ti1KV7vw65JenEC7WmeLRqRxAydWqHEJUB46eYkv7BKs983v8qkLRVwpoGWsYTFVspETphX2Cjh",
  "key8": "4U9uZvDz3171cL6mwQsoXwG7r8FrgQZHtgHrRMow5a9rCCP8t44AoDRfmPGyDBcLcj9hbLjHjyt7VZKwSQPEszk1",
  "key9": "5GsCduh36MqiLJK9ujgVLXSYR4m2V6Dvkxh59FDjDa1uTt42DbQsHysYMApSw1DxDaLycCThLeMd5t9nybWM8UJA",
  "key10": "4kGKRZZepNPhYDWJFUKyPvmk66cUaZCSm9ZsjRzq91j4Qbia3M498H1FBVtPLWa5RaeLmyppmKQLEd3s7u4HmGeR",
  "key11": "eHWFVhfNNgwmEi8AdKsgcbywHneqYA5a9VWUYr6WHmiyJZDe68qYvr5oxKUUYojjyUaNsmQ5Sm7EjK5xZcKSehN",
  "key12": "4bywKKc1NNCeWL81SM1jr8dNmmMpGmRJpfM1ACnEMmKb1kQ5oocmHcj6qfKsf1VpVvv4phNj1aE2jLhmrmxHVG45",
  "key13": "2TMqTfDuWi5hBND3JALrUdmACFRm9XTdp7dP7suD2nrkyYcahFE9WNT3eWg5CQJS7ntZw5dP5vscTyRxFx7BwRp9",
  "key14": "4ZFixGonQXKL8mBuWWjufNiZQe13RaLdHN2mwq3tBgK5nSfpy328zW4D82gx4srTb7dUjTL1tp3NcHureq1aQZBL",
  "key15": "3ekKkHjTASftj8MCfUgy3vHgJ8v9R5VGkmAxxrqXKDmRrMdKQMs1QUBVc7FmCkXmeGJ7CbPJWJySYhAH9wAHoNAg",
  "key16": "5zdCs8R5SQ22LvdidMwNAWQ2Wh2u37rpiKjzFCaRLR7CEifgrN15NoeAi5YvZ62WqsbcSZaq5EAaw4fesA3VMEcS",
  "key17": "2Vi6BvRwRyhkUJqCin895cKkQyi5kUgPeHa97u5Z7HgrEiweBJcBmsxmqSD61eUBuqy8BKKz1f9EfnQax8itY2r3",
  "key18": "d3LXsbL7eQw4qMsnSxprBmoMFzUoScL4M4coTBz8VQxK424LZ4yZ8zyeDpGpiXnG5BRV6ghbmTpixck8wdJwunv",
  "key19": "4auWyRrWwKexA8QzkphZSbmtmyA1by8zvDRQRHmy2rqsQUvVddRSYaLTRwSd2T159BYPxXATDWsFjE8JCQs9AfNz",
  "key20": "3nrkjdkWoTQAon11yV7F6oLd9GSFFWJ5hWWrKMMQBkbRQytkAjLX9rJbZZZ15Z7oeihC2XeoEcfAeaYaPbwS2HH4",
  "key21": "5JXZNwzvRaHRPpqVAvJjQarPyCevDKhHentToXBzJkks77CHFNFDaneEEDeDzGaX2hKS1aFo2krhheRreVZftcX3",
  "key22": "5JwU5SmeRnMU8bWp2e7neBY9vbpyonXk5YofDcoPYXv3LTm1KF4LyMHYgtipDKZcduYZURLNpTFu7PC1F3GUy9pr",
  "key23": "5h8WqMEy83ehCAKCQij6vGuv7Zi1KKEbf4bpDhdWxwvJZEntDXSNsnQjzWD8BJKbVMzJyv73Fn6uEstq5ij94WPQ",
  "key24": "52siPie4iEf6PLjfhpR9VrAWGu6DyVpHMPUwb6Xn9BM66SPKm5QxbjhTu8CmsCBmp1UTW559U2ncAUWqMa8PxAKu",
  "key25": "r3WePXCEDe155JarnMTQ95P8121B9v8ZWWuCo622JD3o7ZsqccN9tKS43FUhQXLzeHN7xmvLpXGUJjHC3U4ybKA",
  "key26": "4BC2H2k47q4GgfRJWxtGuAh5SgcVSbNXVo9wecDkkEJEaMtmiWNoTmqCnvWJ3nawFPNqAbTBGuondRNWAG1bkwoW",
  "key27": "5nXD1gvB49dXpzjpdPaeAsYJCq5UrfFBdWwGafpmfqKSS1SMF8V8XzSAuXAPt8AA8QsszR5KNmArvmbLcLhFrm2x",
  "key28": "4FtWqs2XvxadPLahuP5A6wbk8yKuKc7Ecj1eUF2k5R8vwKzYjw9NW1JVmB7T6rxS26bkHBxF8Wpc1WqQfDdx5rGk",
  "key29": "3NenbNg2cTcgqgB88AjNhi615XN6G5kE6YbfNgQ93i76bw1pR4THWdK3cBUxo3ZuswbZjWaQWYkmiPJhWQ2qCsHE",
  "key30": "2nPvvT4Vn5fiRnrycitBkAc32G3PQaYMy7qDMiYJr9UUU7ZfPKycZJ5sVwjL3DzP3Ua1ghiBx5TPkX2oDqsS24S2",
  "key31": "2HY2EM9MetFsd3XMPGxejP23mfb8PAj4Nvebn1YwgXE7vD98xuCyYD8eyWxtXFiPyZAHvrEhUBYBQ4WAmmJEfhPN",
  "key32": "619nSrpWwaTSoRKw1nw3xGNL8ZPPzEwuXtuDiPj7sjnNavwpvsXxxWbtfA39oGRE4Sss7Ee1JfHkNhVu7b3YJueY",
  "key33": "5Jp4yuP5ZQsDunS3jEskcRvwVJzSNDdNKsXMYMbxmC73uTitVYdaiWoicZigED5J4oWa6Tmcjkpuuhes5d7pSiei",
  "key34": "K7qnqDH8Jb8W6rCZAb8pzPFKuG3iK5J7F4ct1rdZXLfoH5LwgNWbKEhqzJ3Mqxzn5N8xpEAfkeTt51T6kFeZjTD"
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

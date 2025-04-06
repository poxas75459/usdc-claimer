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
    "2rxFkwodzAjMGVpUx8XN8JwnLoRdRWiT6NZ7cZnH7qE646NxCy2H7LaD3aqSc7VznUVwrk5YZkwJkEcGpyeVC5kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQVYi8LmQPbXyHgm5cEd6gZEFUENjfq9Us7kuTVdo2XtD1q3FyzfdUfmsXKRtQoS4xrsjRG7UATgjAVWUCLybic",
  "key1": "BGjXPUv28dv8C2EFTSz3zM2PM6WMo8PPuEC6UudAsaqSo9648J96TFMfKfrg9y7NZa92ECwiHr9yxChUHpRroig",
  "key2": "2cKwuBX11Mu4baB8s3AQZkJyhusceQik218xyYG5EEJsf2tsZ7KorTX77oagw2ZoZovwhLjuLY9MWLwvgJuJgRHF",
  "key3": "3vaLCvZzm2cZmaJZ6HUJgG2fVkyNBdmf9tz2yLwhDXkU4mJznsAyfVDQPHivCWRfZZqosHKG1zjzECSdNrxDsoAt",
  "key4": "2Z8kA2rB21UAoLdXefMC1Xma5Rbgv6h9nEtrciiM5NSDa6PQ2iP8z7y2zHC1bwZBKw6nw2zquaywPRMkXEQvubYM",
  "key5": "5xmBe1ipTDMpmNZCqRDSZBcEM1AX9wZtN9BNXfoCircMJrQ9yKAx6imv3xE5L7Prjrp9kympgdDF76GdwCEz7ny",
  "key6": "2AzjudUEu6zsAeoTeh5pPGR9BZmt5fdV8CfFgmgwNNMw1Sy3KCgJc7ccdYtUZVbgRxgaKfRkqUtaM4pGWWg9JZoH",
  "key7": "5FpscbCSHq7Nembdx8UEntSSeW7wHHnELJ4hqN4XtQkihhY4rto7ZQ6eZT5wThtFDzNtYUghj6cN2cVw2dBjpPW5",
  "key8": "3uSM7WCF6g6qfXt4uKmCvLerbhseCbtHaqKs5jXL66XBnPmcihu1SYNF3gExZRC5pHqzusnVnLgi6JHLAd9zLwRh",
  "key9": "3jANK9iVuepNA4x5USKztTUs4zqrvn7V1e1qnfDZdwVzhjUTgiGeRkAY7kX441whjEWBBT6rdz4yiFrEeLqZYUER",
  "key10": "5Gsetjd9A842Wy7bkSfftgcqtz7obXhcfJXYadAhT3fiRdarhipQorTwi8qNg6HBRtvZHVBMnTFGWuSJszr99wWs",
  "key11": "4tTRSmsTntzrwzLmBMZYV1uAcgr2CTJTwEbpr5YpUcJHKbijnbkPXyJxu74yySUB8am6JMNnHVAjA2sSaxaVeV1L",
  "key12": "4d4kLGMnhvPtJJDkpguEEnrTqw6jSCNXEgr3nHEzr3gqjAyzUfKB2CxEzzG4eBMMGXQvSuqySN6PQZXmMZZLnLZx",
  "key13": "5y6T8YFEfmp9rdZCLPT6Z6yit4Yid9Qd3LyrnfUeqQaS4jzRWhJasnDivRMPLZesf6yBk2Zm12qZ5Cg6hMvSYGgH",
  "key14": "3NJheHaccy8D5heJsiUQeWyiytfDoF97mSVyZYeD8iYTCNf6r1edsmKbRVq7ZxpEguvzk8ibe14KKTeAFrcnaEYQ",
  "key15": "46n3jpAUo2hQqgfkhyKnvYrJZQFXtkK3XvfFAko6RJz4mP6hNSopuS9d9BpNHQjYUfz662nxhg6q5jvckCQvJnFM",
  "key16": "5wHL893PAdhbFt3bsKm33of8ix7KagCUkEjdH2eTxcj4tWdTC436eWsXHxMmU3WdArtaCqeQad6kq6emjvEnusvM",
  "key17": "2exTC4dNo4tPiuX6p3Z8v6ni1GCvsYxcBFr7WTn2ax73qmT17szLKQTt5n8UzFZmFRvZkmyxFobJgCNjokuqUpnx",
  "key18": "2TkwmTD4zJr1gbrpcptZQRbyuugFnN55Z83o7z2N8PXGaFX7YFXUU1iBsZhgQHpHvWeGeTWnqPzqkkiHCCmk7B2N",
  "key19": "qWJtHWGx4jrDQHjWi2mvQJpsPLtNUCktbUR7X8iTdncs5j4TRvVWabWaRNcKtQKYqwg3tLDGqreCa58DPDT9hWa",
  "key20": "34Z6ukqnpicmDvGLgQPjgoW3F2NkYNKmpdHvPSxNx9deW3w8XZSuh9jby7gYK1kMBJgP8fQG8FWgQpRoSa58dqm1",
  "key21": "QrxKk8rt8VoU5dEhupZsvMEuDfC7WNq9e3JhAgoi3rmiM9fwRuQLdDMgS73kpU5CvEpT3ahVzkhnYgrfVC8GX1c",
  "key22": "4HHGG4kXnMz27BpTqxLjfvL25QFWdAnN8wz6hcVfbytrWWVj8wCUUyoZi8V4VL9RUXq9Qb8ZC452EXjngKdiCkZb",
  "key23": "2rrSkYgz9D7Ek2H5yYKPpkanGzxcseiLEMMT5H6CCEiurKduJmp5GxGo8ZK5bWtwGii4jAW1e1WTCuD2WyXYFdcp",
  "key24": "2NtKTKPpxRBnWpRZKaEgHtxZxhpZ5oQqEiL7DryCyNH4MARAhcXdxs97q6haE6zWfca9MC8AAwjeVj1PtLjUkvdF",
  "key25": "2Yymg9Z6DHQon2RpvjXRnKoFq6riL76tyNiSeRLB824SNTEmBoNK8qCD9xeWi2ugwxMCqgDo5hQH7ue7AsP99cKT",
  "key26": "2r1HJN372ANBKXM9zZokYBRRoU7KE5AGY7J2aDG4esfre1TLJPS8JepzwoatBpp5o6rRZK2xw1bcvhZGT8reGuoP",
  "key27": "25m6wxSuwFpufuTTpN2vHvHAoGUsDGvdEbYseepEE9StVnjEMkC4EQ81c87jVMzPtF8Yrg64h2LuCLsdK7QDo2nb",
  "key28": "5nYeXdoozuUqVeofHRpYxxeo72B72HpUEZduR4DmHqiPxpLA44T3fjbdvfZ5kNVKpuqxKxbEe62XV3xoPQVzUHDK",
  "key29": "5Jm2UQ6Htb86XumnzRxmfWLhD9CAt2BCCNLzuaT3D4hNAf5KskoqcrDCgjiYDdNJPeFhMAp6yCpxyDk9uDm2Kbry",
  "key30": "5Eo4UJUEdobedMJ78wCm5QFeisj472ncbzACFeTeCF2st8jk44PthPKwtkEuubwfg7j7aUvendrinQafHqytSwjx",
  "key31": "5TSFACB4aH9K7hZoxRAGZzfVeaLwjsmHXRVjtwmYw7PXsB7YsPjvtdAndJrHUQv11aVwefzhUsX1Dw4zf9rQm2ez",
  "key32": "5CkyDQMTpmTgt8kpf26e6LHD4MFVFUuJsPQiM8NQc6x61tVDmcFv6eBs2K5FosQomV3L6nAdnmXNXHFJtYE8kgXa",
  "key33": "4eqAhMRKYYbgvkmoueJ4qTL4HdYsik4P1iN4HK8hFz4cxpUdXsoA9dUJUxJtAUmYLd65SYQ4S9HNZYaQo4pYQ3TM",
  "key34": "5C6rUEzC9CNCkVjRv2pj3knAwtfSk15U9tPbvbo9hCt2TogjxeLmaDCz5yxjA6PXJ2qh4TqmJtRRdyZh7QSZ5A1L",
  "key35": "3iXzhMd9WuqjvnLEPZ8xB4WMrXMRoDEJfD2dp7XPif3kurQNXyjeBHrWzpifAY3PK3JDkPprdE8nWZ1oJrJfyGht",
  "key36": "3pTeqqaA1CBsG49Ku3uTxvny46V11CYQtQpb2KyBmTtkrvY6RgaNdcVQTyJsG3ftsXcci3Dhe18XcpgK8hoWEzKf",
  "key37": "2fat5Z8ZNmp1vv4MiY4XyGJTppNXChHfuTcGt1N7CDRxLXABPdHQnrQWiFTKaPK11RbhD7wi9K9hHG5Q5f567eqa",
  "key38": "5MYN1vVWR6QTR3wqZt7GnHz8Mvz1qujet54UP82FduLVHVY8V6ScNVe53Rdr7EvtkPL7dw7Noq8T4nVFVAdKcVG"
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

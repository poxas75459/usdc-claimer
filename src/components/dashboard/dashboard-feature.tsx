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
    "5JqXx4hitpsuvhEQ1FpCZr7NqXycKsTNwN8BMJUkcBQFba5zhXVSghpsdAoUXJ7g8ytny2GJAmb9GQYNKsrvCVy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkaffjqhDTQdmhbHzXXLwWqEgV4x1WcZZbbeRAyy43SmryrAVJGbFYGJBtHbSB3P7TD7J4yUbmKX7Ro4n6QBauc",
  "key1": "65Zvjq34m4PT3Fddi2QTjpJAWELoqHagsXLtmu2jfDBvkSzps3HDD6wc9x9ZnYRtqh1oHLmNFNqJ2JqwdyiKK7by",
  "key2": "52sVhbo36C2omn8cnFWXtVaoqMpYqrbPpqeZ5oekLN1ahb5MzHAUdxeevHNKVPokkRNkNHxjKfBgM7BZgpQ3aVhS",
  "key3": "2zQymXDtW2yDDxZ7vJG4FPkwVU3hgJexR8Co3hpvYNF6aguFHy1WsLkaRJcX3qHvtGcyB8k5K1QTTbB9ksDHLYh5",
  "key4": "3zgahVKKZAyANPTrdeJJbL1UqjaVUhQHCrUGvGZ36AHf1bPEJY2CNdw9XodqzmqTBnuSkfCPpNFQ5x761EU54zf8",
  "key5": "4CBr32YS6eTATKNBjff754TBSZjSNrDr1t2fYjShsE3XCasDNJvzCuqtwxtrRD9rKVTcyDXQo6Rb2pctRrEurVjo",
  "key6": "37bFkQPbB26CoWbfuLgunuGaEX3fAe7iymi4tKxsVhu9cCkqLti7vkFAPLwuEseqwJVDeLF2njsY7H8bwPmvb5nG",
  "key7": "5ZPoLExcXkERC3PPX15LQC5kmeSPFBiUN296V7fZUaUihakxoegjCYF38rnhDDTUJXN2nm1E5z4ym8KnJftgo8ui",
  "key8": "4jCeMESWFTCFZLhvDEbtkHtBPYRxVDDsrn4ZiUx8bD4LRJHrgFCzUF64ufFBErEUi43GMY57nNaq1MCk4FUexyxZ",
  "key9": "3k27ChAe6gC27ULzSueEPDJC9C9Zd5ZQhKUEm8uWh5cU3MwHQPezAinXh1Ehc6evMWY1UnsB8rFjrDJFNGeSpeRN",
  "key10": "5c6R1UJMdWCRNrYMGv74rGjSwhNC4922hmdMiFhCRWNjz4AKdGFV4Exif2innHFdGgD3ETuerA6k2T678mcCCN94",
  "key11": "33j72qVE21ZHxTFbQWsP4A1LCH9ZK1cVvbQFztg9KMnvUfttfUHZxphVixuHgSyPGr1PMSMKZaR3mUv1re52P5V9",
  "key12": "4V5veHHAnFP2nA4xmYagBg4iN5EhypTFNYftXwvKWYbGVtLryPntNjaV7KRufZ5LWE9Fu9FdFGqtDo74z8zJJeZh",
  "key13": "2qQfcapVT6G2iF6JDjtVmfss8z7T9dk6Wgd2BV5vz1TpysDReXREoK5RrfVtT3QaQX6DKY3THTEKHZcqiD5hTgYB",
  "key14": "5k6JMZx8cgJdbKRaeYocnH3piWebfjGERX1Whs7aPD6M6NvTTQf1F6MFd8SN1ukX3ix4QsGychAEyVQFuV11wG1z",
  "key15": "5KxTMv5RDB3pSAjXwdY9nAtxuk4MJoARhadtGtnuV4Gt98qRJd4uidUHCfHD5NwU8TspGJQjRxubtYr3V8zEYzoo",
  "key16": "3Yuu9YCpeimi5fp9NXKUR24SW7XBj95e6XiNwrFb9jWnwdEFFH8XEwMzjGJMxgp6xUpTYDmWvKk1WFaWhkEmXRW6",
  "key17": "3fGUae7rEupBHCGokgLcPJq16tJTfd7JdfgPfgkpNqu9GgiXceCq8gbXGrBDr7JRdHMBt5TaTN7wU3EKX36uGnh2",
  "key18": "2Ua3MG63hsUMdcFt9QLKZxqzqRWBWCrJWBJ2tnCYyw33TjjL9yQc98KcWJtwUWEYaxeA9SVGrcqzYWS2EZzr32i5",
  "key19": "4cPD9mPs3hRtd2HWgCuPxucD2c1L4udeup9RDRvk7bRcYR7CKLamDrxNzbZfsba6LQXY2ARZLAHn8aAsd7YdSF45",
  "key20": "3iSnmvftKeoE9Ud536ZBayBdgz5AzGRXziFe1zeAqG3nQcAzwrQo3xDYoVuEvC5Dm5w4gqwkFpdiaTYnocjSTgpU",
  "key21": "32JWRpeiG6hEJ5AUfsiAnosvWd8ChZaLXXjJt6G4W67QtbDqQc4Grg6dTfRd8Tg4vQec9yfJkybSiEaAA7a6tPwn",
  "key22": "5kTR3jmBW7tciknZGtFrzs6A1Mbs6v9cJiNZLNXaiocrD7EvYqFGdYH7ZMX5BRpybxju1eALBaj3PQ16NB6fZJrK",
  "key23": "2SdKVwoB3SxGoNwQZaNZgd3k3Kotjme5B4MuFSfspWaYrbZjg1SjooAzyvwZYybH3sB1KGTSovAH4ieCfNfst4hg",
  "key24": "2Atc89cCSCNjdzKZSjvpmgYLJJWuF8V2aAYzCSW1cnKUdovHJnRAxT1YbJ6LYQHCGF9xbKMEwag6eh1CUGR9TKff",
  "key25": "46fc5rTt2zxXfEmENsVCf4jCVjf6RCmfLkDWsHtAMXj384G1wkhNrJd3uHR7Z5UZzgziFFjPCzMuY9qwfJDCwJ2p",
  "key26": "J5BRWfWTcaB3n58ypRor6y94sQjWxKH5aooNJiAhYppMR2NgCeYBm13HxQDCe2LpBkNzGhqT4fUbLmxSmD9FHzB",
  "key27": "4DKX7NXTDio9XaTAu5qjBriW4WEXKnnAHEufoYMkwKE9gBsp5HGtkfNmeT1Wbf3Qfn2dJvjqUSk7RTYft7LrNfPs",
  "key28": "5TXTTHDHjTjwaaUHMaCSAfTZtKNUiT2PiNX3AkX5RAD2URuJnVYthVvjCy4cBZ9Rm3v7A994kNnZ9tRSSDgmhS7S",
  "key29": "5ew74A6TDaBEdK7eJUXmJRPHNHifykAhnsZGmyub6VFzoxxzvzFqMwokhhcFguhvDDjFJCQk1eKPRHqin38WqDmC",
  "key30": "2aiUYzhr3fLwBVJUD7XGDzTvY5hQHuEC3YgzmMBZ5RVivb9tqfzmaaWoHaN292Vyx5mjofW3HD7FYRMvcZcbn1Po",
  "key31": "2yhyjAmtLZ7u49DNvTNn5hpfRb5Zj8UhVzN9KbLNkBHhRa5qy5jPjZg7WzjT63jAMgfNiq94fr4bLCcrouY8W1VG",
  "key32": "nVS9WbZr8d1U3gUE7fg4E6kJeZWNKrjYtfi2SH9s6f3bVgzpv4abf8WGj91HF1x5UTU3Y6efdi3UNmGyFCX23ZM",
  "key33": "4xKCqAk93ngp411jRvESkEC8QMu5CmYzswiZKH42dNWe91s9uT7LhFDJj3AnttLWjv9La8LsBthghnZWDtXLDCkX",
  "key34": "3oXehpeVEqenhupW2AUo5zf42nQAjuyeDmVDBPeuMA8BQfgs2h9BCJcNLYMeezvcm9K6tx96DpCc323Aa8Wtr6CU",
  "key35": "3FsbaacdJ5PQWXdufzJD8E8jKsxC18ky77Qo9LmbX8hDHjqLeWstRvsQPSWGFej7t7Z4c4F3NN3Wru8mykg51gBP",
  "key36": "YJw9sjxL7JUPvfmqyHsmyUwkyArxFWdioKMhyGbm4ceGmbtcmtqXin6vk2CGzwSKP1YjdG3B79tmpCCycvEdgei",
  "key37": "2yym2JsncnCr53VkS53R64dEL9Xv296FWLZsWxdDRajjwA3nVw36PUHVZUTKdy9KFgeLM7jkuBDFGWmHgkR6yHjo",
  "key38": "31jrLawggujDQy6tyN6wQH2q2fVmT1fwBdiuKPcQPd4CznjSCEAtzXVbuUWWXdRs8Jxa34jcQBUEnKbPpgP8wfDW",
  "key39": "Fcoqm4NT6hnQYTk8V3JdSz1qyfvU4p1wamBaskiCj3J9B9Y8t1EP8mTuTiZpo6Wh59JMBJdagyXnjtFiDkZs9rF",
  "key40": "uUSPagfQp8QZrKWLwzqvVaNcdjcP9CDoYRFR5NYmtNNJa7j2iGEqgyPT35VLU2CSCUXZ5TryBo2dHTGK71ywjMx",
  "key41": "3V234kvYRpe5hVeckYepQRVMHc4vXKUvVmdwdvk4coanvNQEVVFjtRHgM9rgxJpSVLt6mJLq55iHpAMWhjVWLuNV"
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

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
    "2auzZByrmXEv8NqSpXP4ATtAB7KzWTs7tm9XSstC3iPGAhhaFqPwKAW38rVTFFprHsrtp1dwX3BC7jQHkpEKkhqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ww1fux6wPiU5RC7rqUWFCh2rhWC15ecT7neVsoUYSiBvHGjzWmsrEs67HWJ9idtSyi544aUCsG5c8xummRg97mN",
  "key1": "3qmNAh6NDsuTWWJzz3mtJAWb4oWfrDgFtHzg19pyfzwHTA9qpGhk6b2NrDaxLzWJsz9LLU4US9FYdSYdB1SNLXJ1",
  "key2": "21VXDKRFxwbYQtjbz6iCgmUGM4TQceQuMQapnQm1ZhpZnD4btNxZvtZu7N6CfGhfJwsxFAc6CMpKugfD8Zra7iGZ",
  "key3": "4Z1w7Fu1VHwjvXGtctJeT46CiT4wNCWg6B6v6H8AodpKmkF96vC2cdzoLQbmNn3fWmo3c9XNZy4x3UHEhi3ckRG5",
  "key4": "R8MniAvD7aqkzmKFKqF3n4k1AC9CD2M3rnQZ8RDM8HTzd7yXpNYyytzTu8CfUGJzXZadC8oEnyxpw1tTTcuHpPV",
  "key5": "422cSWtF3DtJaTpPf5kDoyyad4MSe1nspSnk4i5QRSQsNqKMLTVQS914QtxgbCpxwcHqnzYxGd3XMn4utDs6R4X2",
  "key6": "3ZxTnuhQuFi4CE6KFXjbmNuHnxQvjwCekZcouz9umDb8mzJp1aQuy2WzjhcmuLKxZBD3okAhvmmoKHuj7pizGh5h",
  "key7": "27BssdcLp7jw1yXBqhXuZRu5jZU6tgxihhnJD59mfndMWDqaVqDHBM8R3QbfQBi7spDfDNhQgvCyDE8Z9Y2GYcAK",
  "key8": "3dA4WLwmc9gqTrqqHrwmHmvtvfvg3v1VSvDFrVdjy7Uv31rqoF3gFXVTgAKbaBXp9UsTD7x3awyunkDd2PCdEbcM",
  "key9": "2h8NiyEArAndH2FGhX27Hd5r3kqj2o2RbuJQwHJTVqFJbTMpgNBoQ9gzBc1ESsEnJmNEQ8HG9HrT3F8DVkQwTVBx",
  "key10": "5Y3gkWk79Zvf8qZ4s83TT9fCj4ohVuv6diK1GkVuUpVynj7tepb4wKL5CXVEyQs2JWUL6AtvjnPmF8fdoH7vWjGW",
  "key11": "4MTFzP6tdNp7DNfvgko8BcTsPHCoLwJTYYhCK78hyAzpB3b31nPcRkRPyFujwQq6Lb1Kmwy4RPYTRNinqk8Qaier",
  "key12": "35JEdFKxhkUsJJctnWrgPdtJztknQfA8zaaE7oUDM7qhgDQMWEDEh6f4ogyVQeFNTHSh7rr55z5E245xZCohGZwZ",
  "key13": "4kfu538stdcbe9RfbahSJHbPycuZUTq4Hdp2ajZENekiz4DnGCFZkKKU1TxmkbYDc2EgwM6SmJqpP1146cFic4rD",
  "key14": "zzrBqtU4ANEpNRUaan7kxBH2VsRX49LgeEEk7ihvtVTorUokiojMjvmJj25LdsW6y2GGTwwkohr7GHsWxDd3eKE",
  "key15": "3ztPDfDZ9qZ8oFp57FB5EAKR8m2nc3Pi2MKg5qYbZonWNP3X7Wx4NMrH5sq93UctkZPHzBhGzjKGzwUN8EpgK37z",
  "key16": "5P96199qqubWTzAZvaSEtR6EmrsNnUrFgdrF3iHtbm8nReoYrN2dVy49dgEq8mpjF2XMZyiut4b97evFXoKmx96K",
  "key17": "G6bf9UzKeMDwo68Aq5huZAVrN6rLizbCgtCtU7oVPR5ZbfCq3LSHT9FhXUcCrd6sPHKWuPwfKVTSiUG74AUDw9q",
  "key18": "639g2pFRPP2WPB69nzqC5hBUeEcXgPdN9oz5Sp5vMdxYYEkrwGPLoRbSvNvcyuTH9xfg1DknuyFz1XVyRY89AxMQ",
  "key19": "2aCmVVgskYamhZT9mfN1GsgeLuZAN66K9brhR5mTcYoYWk7vFfWvbZoWyth6WHZJSsw1vnMJNe1X291A67YUoiUC",
  "key20": "3NqiA7rdPQKu7RWcSgyi26DFvwUnS2kKiYD8Y9F3ZfqoV4qHqr5Ro9dVXmpGzRseorQJL2R7RkLi27gc3X54KvJc",
  "key21": "3WarCgJzMEVDjPzLBtbroKGXhKCaWePPo84YdRfYj6UcoFcw9ndQVGYDwT47wuw3EnppvDJdf28DrheGRwRBHQZB",
  "key22": "2JWddLe5dQM34xQvTeeTeM7qpKR2whZ86U5H9o1wxV7YjHf68tAHFREW3Z2hJqemBRGBBwqje15zb7XKzTKgqR4E",
  "key23": "3GGjBRLaQJAXpFyvsDFMrBTjF6YHiZZDa9Qv6YBdn9Uftk1KQyDo31ESW3rEEPt95exFLJhqeoy7BPYYpSzdU1WW",
  "key24": "28XWXdLvEiuQePcY3RTqyFg7TqLkHrH4455NVUBpoYCX4HpzQiVUzFuyx2q98hr4AENi2T9UhLgZTrrUAzX99wuE",
  "key25": "4T5M3qnSnXrwXPdNGj35cRa8TpwgLV6rM9M3HYkKEocoxwkGQ1s4WX4tUJUVnDyPSwAVfc9BALeorrUyDT1DrEbZ",
  "key26": "3AUXpm775T4XKMi8iXzPcjbKuBR9ckiTLdxnKX5PuvWkQt3hVEDrZ6d1gdK95Wdpw3qUqrbp9VDUrpXxh2yTwnpg",
  "key27": "2jdtnPeyEbUPE64z7zpnpoaPjx2zKazQgdAYr2VfAaVUxVR1t553jTXqaDyYaZdC8gXhkeCzeM9VmMP2tSvkYywK",
  "key28": "45XpjLu3pTggqQXdYUizca6umHPUxHJoWpTnoJtFs4QyXjWZyyM1oVLpBofkX3gSh2PS2EXcZCwCYnmdZZhQWYsn",
  "key29": "2iikL8ewA5pPdNJdGcyttwQdKpCL5PKCxKDx5KVZPxLJjydniiccJrv13KhxiYviEEHSTGpE26hcSNTiDuwURUHC",
  "key30": "4oNJeKpTNNSUHXojJJJwFTouXyMf3eN868FvJe7mcFCnwJbieY9QZyhWL6syR2QxvvUnxtHy2Hjj8W83nUhsx3b4",
  "key31": "3SLY5TwmNwJ52bpow7efBr6nd5dE2RXBUbGiUnv94RhukmMgqg8W8cKhv7ZXmRP26qBm1ta4gnEEFMDXK1qUopaK"
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

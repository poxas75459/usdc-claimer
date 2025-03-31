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
    "4WRTdncftnmWJTR9w68kiCY6euauKjsJJVPgkVk6tqH16rtWtiHzbyFvuk4mcTUKxNb9559hkvpHikEypQRrTcaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyuGd5n2rVLmLLV9dgUkbDGtNEhjZ9s3sdsuA7bqwVC9FjXMJCcmqdjSrwmS7uvuAJ6bu4qQUmhqac1tXnqGxG2",
  "key1": "TeHcRPj2cWjhRLRXBXR5DEsMqBNr4uxYxErpnsns9fcpwiEBDqRLafKNhHY9Z23ipX9zU5fndumgsTqmXfwMZUr",
  "key2": "2fXXLrJ6ZtX5eaa8z7tuZvQCHHQ5WeAK2TXyaN6bECDkM8wFQT1tj69c61QUgnRn3wM5SrKPCKX5ZpQv4LGGfzx2",
  "key3": "5ZmEoyrHDh63xLswzoT5iJG1p6ahEdCaua5r7EqSfFwCEBTg32CCZMDSmDt2UizL7zRoYi8PDYGHgkSoT2jpCp2D",
  "key4": "3Ab7jJPDJMtQRLDCkhbDh2f8FVH93hfpU4bquuGS3AgLEhB1aBFiad4vjFHhArYUtbHQcvrNy6iePSFyWCKTxLSN",
  "key5": "4Wp7jLmo37eb4BE7xzsxJDYWvtuEUesY6eBhtJybK3aqzSeh5eZQCfhfcRnizjSSsL6QcX9u6NBniwaJTZqG7LkK",
  "key6": "3w4hBDt7HZtMU8TgezQaLn3DeN1ic6jruLrMWByNtqhBJhH4jCJ2YysCEBKqf7NqKarr3pbtWYK1oWmBvos9nDdu",
  "key7": "VJVGH6jLi3w7QA49Qh3HGDvTdf1GMGFpbkBNBv38rrBq1Fo2DxEdXa6QUizAwLt9kUDVx9afPRz39gMXyokYbmR",
  "key8": "61B1bZBMT67hhR7RL2qTDgTKomr11fVsteL9kGK6gS2t1WngMZUAFmF9SAdLXhKdpxQ5BUDczFDBVuabSpx6bqs8",
  "key9": "3mfzYoY3HgFis2stjkqm5fVzKVKcbNx3uSq2X9JNrBYgjGcxhbxgtFYNmUCC9WiuH4nSQGjRzdFLLCR29ye9uyik",
  "key10": "3SEZxz2dWEy6UJ4bEn1BZA2BPGCM4MUUTJEWSdbhSvVyYmCMxF7McXf7AE3czV7SScRkeJYGdEX7mJQKsVzXkZ4t",
  "key11": "4A1237PsMRHdETpzd6WkPo1yJCprqHabLaSP5i6WsmihaJ2ieR3AnWAJ9yBaCAB37GkK1AJrhPru98Thbcr39KPd",
  "key12": "3d71gqvZWdNkNFxaYu6sQAoaMKQA6hvLmft1TKX49Yq7kcQhxcxrAz8myUa4FvtWxZ5xps4oBRdkjMqpAwx8xitp",
  "key13": "2mCv5Wx91MjsnnG6a6qdtFYvGazbaVghVY16eVfzapb1Uy9T4vhgdA6SVBW2KpCPgtNgd8NQnmo8JuxJmS72i5Qc",
  "key14": "6394uVvs2PoWy9MbshHorw6pMv1if3m6dtqrnTiDnZ6SWn2pnLH9i13xHTHsPCKERXXV1HUZCDfXHWnxcg1ezWhV",
  "key15": "2vttsxv51eQKpZSJjftjYFesrkbnme7mSwuiXf7EAEV2yzbPKjkThnEMTBDps1XkZV1a1z9cEwnktDFdMJz4YMvW",
  "key16": "3MgNir3tzhWrnAc3jhT4croTY1pLV1LNWHLh4ZuAS4k4KMXz1MoVo1nVs7RJ9Mxk42ehrb1KGW7RinSpdMYFXpZU",
  "key17": "4J2sHLy8wDStoUJZErzsX6LPg1viKq8Xbj1uKo8Jr9DVfapioQBCnwAi8LK37TS1vojxU8iBLaf3a7bxszKJSAny",
  "key18": "5FAeDm3kDPRKSktMzaL7KhV1VGqr5N2dQUY8AuWYKBREu38EqhBYwSsSQyD3NgbbZHZS69axittNnxPFpHEUc4FB",
  "key19": "GrPPYfB1Ruqw4dBRx9hKekGh6DYN6P2GNP2ttxPK6wUCQyKvCsKkkJ1PrG2nmx4s6eVZjDeqGu5VKTfu7ycFRs4",
  "key20": "4c6KsmQUCguB81CSej6PHdmKybTEjRA1CCdW2K4uFgXxdRqR4aLiFKDJALiKMo3qsdQ1xPwumQLcFQjDssNckzQn",
  "key21": "39c4MZjnuACQWdQ3V1jgrar38zF9Vdj4CkgqmyngEQ4C7WHFenc8HnUrwqhH2y5cmPNXWC8eRjxYUsBEAsgh9NAx",
  "key22": "2BxuNWKwd2eFHuESijsyw7fgnBwJuDHKGGkm6nQdwS5WhsNsUwHj1n7FLtGVXteZ7shi3f5MYDisaCmvvmRBWJjk",
  "key23": "59qh3deGf9gveSeQe73KXYPiXSK8847Q5JX4Ed4rYXB1Y98BJHXZD1Kbyv6GTcSMKi3RX1hRJaNZZAS6DdKNdZ8x",
  "key24": "5UC7svgza7ZJSbicLYCPSTBbb1wY24SMqhvB51jMtD4pn56qEZ9cTejeFvJtR4DZRJu3PhwtpfqJA5MDAdn8YUVb",
  "key25": "3bpamxMd47QYXBMDr5rk37g2QhFL953qhAKdekwbjeb8fhZLhaWG5QtEBFDgPUL3E7sxf8pihdnMTo5A9R6uUXmX",
  "key26": "5HLXgmMidc5cFmqVb7tPvFQ29sTDzcg7fXo4BGk6Q9of8LwvHSSnogKtfrH3UmQ4DtMYgJLy1Xhd9xDuXvf79ofE",
  "key27": "5EpS1R8PojVE8qvSx9c7iBn3EybFkTWX6xooCFhNQmY9VJAytjjZN7T7ZRXNtgAdHF5DuQmxYgrjG9r82LQRTwPt",
  "key28": "4n6t3z6s1RkHRqFXBKuiLpoHxQhWkK3D4dn3YoJtSKd64xtCBUhLxpiBoc3z89mfnVDkfJLdAVYttTi7wLAxrBSM",
  "key29": "4rF9WPbUMay5yPtCknc9Pfr4mkaoGpMdYG4Lko15xYDNjZpdNzwwhD2HmXYJ9jpp1FYwTAQ1dvFZL4xVtredn3Vo",
  "key30": "5m9w1QUD1WK7R8sgCZCUQCA3guwTizxvwojjbAKSAGVc1m9QHBHN1D7NqCsmCQSRShCDVgYmQryPY8ur4ZR3xfWZ",
  "key31": "5EntECtdgrzRBdkrEfK9bQ3ZGNb9j9avpCqNtMg3RUZBzRvBiDH3Pd5UZb79NWP3fpSNpLAQJMvtAeYYurpZPfDy"
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

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
    "2dHrZcyAsPS1yfR4NC7x4vuFNPq91DQ1AE7gktqT96eszBTFXNJcZJvRGonEqQy7xXVkrrBP75N1sL2E7qBRTcqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbje2xhUaSAJk6Xx8Rh6EU6ryWDJzqtfH2PLefgSGLaGanCd1kZAzcykkSLeuFPkreLuFsC9Dpw4k6xodRw1Z2P",
  "key1": "4Q7HL9yKgX6CNRb8DLJZ4txY9qX7pcE3PFavmWtQQaoGYbvpow6hrvrEjrxHTs57PP1GwXHFkwuppTcT5okDrB3v",
  "key2": "2wRD3wdKU8crvJopFG8tTixc5u4geY4h8cqCHRLHAAs4zt8g9w1NQQnssLVAdGJBwEyhG32xYYqZAPvQTRt8bZGf",
  "key3": "5f4azregRGccL6yJgR7oimFSk1BDmdUWtj4Bizia1jam1Z3tZr52jtcQVd3TsUj6rJw1he4RopZ8m2wisUGivhKj",
  "key4": "38UDcP2NbFysWC1EAgcwRDdE2zoXGLcgwbyC4fnwA1hjeAFvZW7GqEh6HZdrjPLMbvjhF6TE8G78Xwzt39rCQgtD",
  "key5": "35Qg2irzLqgXiGdBrS3f5eRHSMzD2HseoG91x6wdyyzJ7MBFpi3Xt6uEE29xKdtXyEsp8ER5Kwpu9jhq8RS9Pet9",
  "key6": "3MbxKnhx9UQAntbcYEeGQ9Ey2jwyakSCgUHkLrA2LgRK7msS436d8GYa3XDj1PGMSwVH4GzgrehowHAkxiEvy3pF",
  "key7": "5un9ni154QNyqsXctaDYW7f97tjHm2AVjj9WFjnwEZvLnuJscUpcPdj2rYLCXNgsZ8PgpHBXcTT28PtJ99reMGcw",
  "key8": "611bWjyxupoCVb7PTp2PnjjEwDgA7BejfXtvKwHS2bmVFE3J6P9Zb6PikbTMKHf6zZBG6wx3qmBy9zdLFqnz2HCp",
  "key9": "34rUmSyV1WQ1Nc9rMizwXCBsKN9WWnuxVMJQUg7JPxb4LMBvCjRuhpugvinzHe3kbox3gxyg3RGPZLFsstRUpuGD",
  "key10": "5PQs5qehpTU9Y8jmh6PykwqJat2x1LYGsRFLKmWzbU3cUy74ps4E6BzERYj18mYGGUofMVZcAW8f8Xg9WXssCGGq",
  "key11": "3wvqkmoUPX8nfQndPN3ifWcQ7tNPjwmWKsCcvMNvbgbYoUTtH5N2VWd8unrp2ZGh4Vru2yXvoggzGq358fR5UU1R",
  "key12": "29jTfb3eEevyr2TsmjBrqzTZmfKh2bWTBErgMEUgbXDfYkicdr3cXiAP39jFgfoCNZ2C7rT3dLxjPnesoAymmqXa",
  "key13": "5kqFYk1D9R2TqNsn5hfp54Cmej8wnCNY7oMtaiDYBWeCUFPYF6TsAfepapX5GunkfbwA7hYuDmtQyb4PvSVDH81k",
  "key14": "4TjhhGC2JRiQurgSR5bzNeVcWWL3KYTdJ29n6ABfZGcUXD6QRapJX3KXsiASAmuJkEgf3TCL9VGVghSjKzKgW3HX",
  "key15": "3zDF14BPtpQU3aXj9Uf6wJ8KRh4AM4APrNTjM6pMBGqf8ttyXMKteSYTAhMpFUXkon5YbEdjbwesWednbcLbkEsQ",
  "key16": "24PQVg2S745jvSRSQzeLNaPRZSBEfG4sYiTQsCJcnHczsaKVi8QBfjrudMdeEmVWSvPXN25b7FUtUWEPLfqujPgq",
  "key17": "2Xm7hFdKFSQX3mD7dMKwM3zgAv4HCQ3EDonU7E6v4S6m3k5LcipUjE4wCmBw6Ex2DgpoM3S1YhRChPnpenhodXn9",
  "key18": "5Xq9M6BDg6WMN26gN711LXhFNdmgSRgBMGFxbTnx1Hm9mX9pqtKiF8MMRyiZSqkPEgpYrp2yNWiX9ijNwRryKGE1",
  "key19": "5KToiWbgFqAdgC7zUkCiafuLjJeCpYgEoVke59ZETh6JVgLBH7MpCDScqw67NNEkyDfwqAn146E17NJXHWDGN3Qu",
  "key20": "4DbBjZGmpkuPxtwxEZ1RL2pySJGXgfRAA5WLmomm9YXj9zkKadSLChmZtVsHXbsC4X7K5cjMwnD6HzAfuKo1muf8",
  "key21": "5Qj7onrqhqx42RP6Zhn4ejwiqP7sCT5Hyh4AQtwwpsgn3NrNyfxPgFBbd7tnHYeMsudsL3Skw5sep5qGS16sRHJy",
  "key22": "4JQ7sdARVjbSVoKpKvnf7r6dvxgnAgxSz4Ns8cnFBP7K9eYLGLr1UNC8UdR7Wn2Vah4ee5MDdxWmQTDnMgh4gGRa",
  "key23": "4t7fzeFcGmJhnvfwUEvsiXuURzoaGz2HPN5FX8JXwuf4x8T5UrmXBEVq8b7ADCcBoyWXXuF757cXsBG9yGq9hEVu",
  "key24": "629TQgCJL7SxeiEr44XjpG5hXyCA3ofXZNCgHxmikSxeNX31Bsq1NzQHLFkb5znjz6omiPzEn3HRacTaqNsGkq6x",
  "key25": "2UF2x59icFjHjmXvVNgTfguCY7bvpZXU5q7QpX2CYo4T3zJTLQnrBSs39oW66NJn7zR9KusM7gvhHnQeGkTb7w9R",
  "key26": "5Td1hcfWybpFm6H8vQT39PiU4V8NJn46cYGeSVFUH2oDFm1KDbpDXgL8KHAhMnUsBhbCKtn6ZQECZjt3yiB6wsSK",
  "key27": "XYzKKoFfbYeeY5FgqEpPQZC7NSmYnn3GUaqAuRfFkyKSizsG9iBDAefZ7gEnrf8qFXgmRAHb86QBeuqBh8UCmbi",
  "key28": "2NjKpWJoc1vTZanmVAtkECshwoXQmXfqH86PdtbbiG394Q7tpi2eQuPPEYpEYKybc6Jkfnz4oAgMZ3Muii76rk58",
  "key29": "34ZcvmwjxkNcjZ1K73GHT8V43R8X66LVAuogVZYqPUD1PuJCoZUdfzwKiEgjNu57nixFfsWVRJ19uZ5S1fafoDz2"
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

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
    "4UpyEQob6pbTpFSRf2ED4Kr3WbgGdKcvbfVpYTe7N1BXEQdiQtR1z97EuTYCR5eNvuoUrCw3AgidSMwcfDhpAa9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLRJ1zhL5SSp5ZcC6cbqZSn92UhQvBPBnEMRFxpb9FN4csRTvsM7KWtZ4PK2RvUfEs4SEcT6etRezJ6XeqD1G33",
  "key1": "2K14aQx1ofN76wkDiMyUqyQ122GpCeEdbCZuU7cWUB8o7aUHHq3LTthJAiw2MbsNQWKythAHceLhLoTF4zatMmKE",
  "key2": "2LNnqeCVVabZUQPpymydyJeRNAZWPSrN2z3LRAAi4KNUQWaQFAqztnwFyndgdBwSJNSJ7Zqrcv1utDnkW7jtQRTs",
  "key3": "626S1BfYfbXP21JWKvF2idu6J1hmfuhhejXtvbTWenSTZwdrqzSzFxrtxtuYNmzjpuKrWLfeCejs8iVQatrkRzB7",
  "key4": "FbiVqsmmo8MuUXBTKU6wMDhN6wbkX6TUrhkeGBgTsUnttbgbmyLSXnuobsputhCKyPxoACeNg4FM2o41VVGWiAB",
  "key5": "2FMKcEFThiKybgbR6LBGuUXZhr3FFTt2g6YhyLfbEF7wy56Yf29Z4YBGiKa7m9ztVeimmFTYLYQQepf7oBqiqUzt",
  "key6": "giWMyXCrmviWwu6kPJztQ93ZwFSZqXQFsPqM8YRpMKgqwnb9jFSGjcNAF9iRXNwZWfU5xMPMGiXQJG4AQTx3418",
  "key7": "3HnjGR8d7APSXZz2rnfGD91AuToHMQFvNqQdVTzjdL4ik5XLybvwBJSF3tX18cEgNYmdJJnWJpP1e1LT9PD1KS7D",
  "key8": "4BCfa8mwHCEjNTuQWDt19FD4rB3XZF8YYgdcJ5s52bZX7BKkxabtHAQBTfcUn3QfR3mJ2opxsxomdU7FyPMYMeTq",
  "key9": "4NSQHqWcASPzUfphHPv4KjDGmmNCJu9pnZhBzc8n59y7tMJb2xm9nhSyJUTKqeFCtG3wGbodoNMLY24KwNQCg2dS",
  "key10": "4RyMuaNwgxHDeZas9dAtAf7hBQbH4fwskcDNDJng5kjBYWYK6YbvjzhDaT4KV4iWy4dLdC1EkKeCCUmMrN23S7w",
  "key11": "4fNkcMhhmqvZr7pFCCsUd9qNPRxyi4getJHm77ysYtuxxEWkiwC76hnZxgQzvhmsovU1bbxWhUnS58J4akZ2YyrV",
  "key12": "2PhkzhqDioVfjDr8brDQRnF9M6dc1fx4x2f5xBCcVk78FfGoFnY7rQmvkfuvnPK8SdDiftFRuc3GzLFQh9iu9N3H",
  "key13": "22kSndFifGkcdu5bsRkaWB4yabJzxSZzvjg1yTCDGXGEpwGQePFd71WSVLb5dsfBGk8FBkoivKn8zgcVxLk62E3o",
  "key14": "UB3eSS2eKH5MHCktNt1dBb1ZBHazDXxPdQ2etqcikxPSPGGQAY7tHUmZk14YcdmmR7TQshR1waTVcHWk4W2dSPb",
  "key15": "pmJNwZiHiPkRuMsw1agdNg4VUUqCsoyh6UwSRv2NS8RWynacMCDbR55oJx5BdVktjot2BCG1eo8bYqBkrXKWdFw",
  "key16": "TcsPLLsgbYzBeTxHtpWK86z9KeDfrdDb6ukSqDUUzF9wtv6miQeLhacVK4vxzGHRAbZ9X1uPCLJExH3tfYxQV3e",
  "key17": "Ez2AgB9rAMtFkZ8PLGFs7K6BycHVphDJdYNncekA77QcesiXEQ2W2pYR9ZLzqMkmLgxRnxAGyzgXLsPnY3QJkq8",
  "key18": "4wqPAiNf6b66ufkYVK9rp7r4YBFXzAHLotHpxTBmXCmDz7WfAkWABkpbz1ikUun6qB4EWCj1RuBc9kLGCrS3n8Ts",
  "key19": "2ZEKHXYvVqQMg2HrC3anfHq94yzUwGsXiKqEv9VSSEywULQvz4PgTYjwX5j9EpGdm9z9vt16Vi22TPsQ18CvAy1Q",
  "key20": "2EuZou3duBt1sEAuSRerfsyYBEtUesMFUAAeaybmPv1CxRiP5P57eruu9ojjt4ZoBnM7etHcPV4QDRY9CWmBsAtB",
  "key21": "hCX9QEV9fiEnSozZVuG7xzAptMNgwSqWoTnF1LAjxG4Bq1jkdfb2sQThYxNTxfGFAsTmx9sMMdrQ7SPjR51XJwx",
  "key22": "2w95VBWA2GjgZGwqYLbANkr1yMvrkztEuNPyfrPhzHEyriwPL1NPpfwPREm8LobPaQcZK7VnV2SzkYk7uLwcJWBz",
  "key23": "9xqFYBbv4s8FJHXkf3hC7XBSgkJzK5FZAUv2ejtbMTSt2aEzM7UYKM4TeYaM8Dy33c3nGJm4p21BxvB2x359Jmx",
  "key24": "3GVjpFxtpNww1xqT4zCrR4qVo8VubU3v4pAaoiyXpnGThatPC4gAJ3vJqHpEVdBu6NLGxS4MuE3YgE8REuHdSXGT",
  "key25": "5m3cqBT8euDqHzp1iZfhE2csvSMZzraKcfFqrcV5A1Ddrv5nvU3GpU2xjTFnixhtY7L9A7DExmEnJt8feytfa5b9",
  "key26": "q2x7jM5xkoMFA2uHBMK55wos1L1k8nqeLBGy9jj4b5MKFC849NG6dXcdaHWgGBw29YC8NqXZM4WDCnZcFPXjajJ",
  "key27": "2YAznfmHBZ7m6aGP3XcbGTxdFrSwJHPfx4vymWEBcVyN9TbjwSNoHpq7zfmCEeaTsUD2CUVLERQysyE2enQyyTW4",
  "key28": "R9mfa4UJNmoJAFTk5vxZoX1VVaGEsJYuqmmPawyPwHja7oMvn59NCh6Co9GjmJcPrgcrCed6iVRxLorvFMw7sPX",
  "key29": "578DJGSv2Fr9jLCQZaQXVDMeSAnkExe7n8jG8KunUZRVjMKsb716j5G5uHCyGhcBnPgQVQzLdUqitduvfMkf3bvH",
  "key30": "5T2UbZodKj9VsDYp7L24DgupaNehjtm3KWugTWvFYcDFAiPwxgi6kVTv7qgXWkxMX6KdomsGEKH9aFP66UoS4vy1",
  "key31": "zAGad4HQjEoKWcSYqhuWXr47jcmpUokRaRibK75ThrA6LuDqeMT2gqovZ3RZRLcbNYnZXrXYeAQ9YKhy5fGVBum",
  "key32": "4SD5Q96TujXZZDvLKdq5nAbH2PGALQiitwkPubhLFXquyLzoXBgzgc4mCCn3ZBK8BTQC6JD53yAernHZZpNuAnW3",
  "key33": "4n8tH3gMEMyyFaKfbRuB2kweZTmZGfqYsmiD5P9B3UG9u5mXyqhqRWtL6UJ2XEwZD1ybGkuPQfHqJ5orpnMSPJrz",
  "key34": "2QaWtokUkd9itRE5NbAa7zYEto3nX82xtBtkVU8DmqD6GKPgE8CqyvrJtKwZgDih7k8VjFQ1C6YoMfzjWrhG2Pzm",
  "key35": "5Zh4Zdbmy6gFJy7RLyxifih7LjByRtqmw8XFkfHBng3Vnqzavv5R7HaeK2BSDizvWbjXgTsM1EEoEn9KANs5DJjg",
  "key36": "2M6RCETTvEPNZ4Pdt99WqHPX1269tAHTNhYxp1j26HdgVAqwCgKbZEvcGjcBeTUjN8JTNJ4imUbh2JiSeC6DarM6",
  "key37": "3uN8w7WsYLQqVqgEBRRJp34fWiRwYPxQwSC3CMhw19ZUYdJytnDV6vdbcGaLg8ouopN6SEZZ3XtfmZx9eY3Ug9bn",
  "key38": "5c3qYfdnM1GGrmonx1Ln4z4vqqkzfRRt9KNMs2NkgedGyQe44XxeMtsdtT2RoKinE27NANKWZGA6MvsAR6anst7Z"
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

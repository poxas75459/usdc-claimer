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
    "5nphXrwkVH4Y2YEE3AS885XpxX3mDhjCfdrUcmESp8fwT8qD2TmLSr6htp7mw2wDa9pfa4zbP3st9FTHyG949qTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9b2pZSm9uMF1RqPAwsTQ6oBYUZ2Q7TvApHoAfA94qZdP5reWbiEwvT4m3KET9rrCcff6BTrB7Nh2NVkNzqu9Sg",
  "key1": "5E5BfvN8Bxk4713T9UP3ZAMQveRbpqsSZYzXpgV9xSivvV7w3pFH5WH5g422hguiaN4QmqTzPEeMtwHLgGWTATSi",
  "key2": "4PXQpmz8CkRJiayZinp8nTY319gLb7WTrvrBR65hnPFniWB3xq354pymAKGh2431ZQpgwU1PKxnSxn75oxxjTPxZ",
  "key3": "5mPeMUK1t7gYtke2B937NnUY5iZPkXHaphQUzCy8nnbsKz3GQvgCn8ANrHHwqGZBK2zzUG8soChBky5umPKoFEir",
  "key4": "557jA27woG3CmYgRbWK3Mdo1kZC3F8sAhiqC1dTsuc3WeffR7ZuZ1y1H99cb91AsT2xv66EAhjCdpBn2HwfJiTK",
  "key5": "ZsApz3QMbVbyrmBQV8ZVY4kbVDYd4pYvbSSLkywtUupLZs2HuLxfV2Mv3H2i9mWXAwcCdcKfCnhwJ9QSfnuL853",
  "key6": "28MmUYdbFRAESA4keUXAFBXHq68R1G7v5QHqx8M6dCZ5M8rTpvrCkMe416JFHDEoKCj9CMW8vohz6B9DBiVEBnex",
  "key7": "2chYxSLtLPgxvY5Yc1W7xrAVQRJs2y9ufxvphG3s3CJ6SXpWwAGH2dNjw4JRU5h7RyMTgTFvkgodtFsxZyeGiXjg",
  "key8": "3irFLUkNNcTvxrnTTyxXMFKZ6e5YJ3RXkS951qus1ZVbLofyA2JVvS6UDmJtpeTjB3jiPzkhgZo8RTMna6o15BYQ",
  "key9": "w1zzK7Z3QhAoWvfes3tDSQkPmd3mQeZkBZtRWJo11xgtnrocu5e936sRew5nkeSfxWPjkkMqFXG7BeqJLVJRScg",
  "key10": "5m52aATDY5zm2yFy3fiJ3ekNY93iWf72BZrbZmNHQKr65EGj7pQkXRu7gawWh385bif11UfjqgJCdB8E93A4NHXt",
  "key11": "3FVWHduNYBTuuuzerBZDb1g4upGHuiVEttoUrzgT6KSzjBoeBBuRy65hLmD1uaUHL8BqHRua7odURfPqPZKGrqPx",
  "key12": "4HmgTJgWfWfUAnTbwmtwJyYcLo36eU7BduJ6fTaTUMKeSjTSu2swT4UixP1XLk6yWL1UJtPjH9vQRmhckDCaADJ4",
  "key13": "27kHHiryKuv4bn3AwCuEyCJ13LV7rAjFjNJQAoVJQxA1VjGZPAVbLEKjX9B5iCKrP4Y4zwUafGg3qCyrtvFgrgtJ",
  "key14": "3jNAR2t95maG7VYPVM91s9jqarrGzaqwKQ8PpkbHAPC1JBWEjcJGqBaEuoS63RQy8YEdY4EsjH3Bk43h5fQvuZzM",
  "key15": "3HEMRMbfp7j9ELdAz3jiBFu7psH637sWzxLqQKPWq4jFJdQGWaVLrE5NrYmfc5C6tH1UCpNyY6DGirdfamnbPdqq",
  "key16": "2XfxzSF8yYredYuaC1hR9c6XL7ZS2hrbt9CW9pe8Xug1ECjV1SDqQbCjWeUNp8UvAPnDmS5QZZH3UhqNncQnDxnw",
  "key17": "2gQEfQU4QY2XYxfBKWFyvFH7hex2kJbAzNpH4TRfVpAyXzwpKosdquL4BNqqLe6CjY57XNz8Ar7WbWsDp9ETJV8L",
  "key18": "5RYsgm9xoWDaxyPXPrVHFyQ3tQhLRLKtEYtvPtUujohKSKkmPDAa41f6yuCpCwQx2K34MQsEVSYxE9jruSp6rcLN",
  "key19": "2efEawvLT17RUhFcdcC9EgcYb7sqXLVxtFTRtX9e9ZMoPg7uW7X7SYFaZ85E4vuxgYoLwzkDHZ457NqEqL819L2x",
  "key20": "36tmPtt8QT5Ex3A6SHJ4pC73NDnz4Dw45u2w27uGXmaLDEGVkkSyHcZPyJA2ZE6jtCAGURmtByN6hrFbnfwzVEDe",
  "key21": "67KmR62XYzff1A5SaLBvWWfPda6HbHfn2gfabaLaHq1dJcFmgwvwTBb43rcmnNCArK7YQdWvu1eMJvhtb7U17tfT",
  "key22": "3XynPb6QNUtmPtP7EDGd9jZ1jpGtbNmgtoW7kc7QAEFGWeXds9YMsTZcjKkXWx96PmVbFBRPNZZd5t6xZvD763r3",
  "key23": "5TKJmrhQDXnHVUpJMRiMuDM4aykvaX1nFqqRRVHEVrrcB8qyRXbDWywWQ73guoMBSW3sC43TXiTNtnSNdQp9m6Qj",
  "key24": "3pQjo84tcJPYPpZDkNG5aoFMUDBmE45ew9zpnWhVXjSEdhvSr2d3KpcFPyxvptvwjPFiah9qQjb1hW5yVoESJuDn",
  "key25": "3JZW3Tgb4abhx6vH5qarkRS8xL4ntGRVn95t147e4gvz2jMREU6zcB2LjTCna5QZJWKz4joefCK2ndjiLfLrnNE6",
  "key26": "3J8ybTTKdirSvzJHkFQgmCm5XK27wEqW8n4XFthd3JKwmAYf53aEx5wwJGdDG1UDeBEHWEoGwNTagWeuvp92kQr4",
  "key27": "3N56hX5ftd6u91z6mcbKFJqYBoAyGHubb2ZnQiwncpy7wWaZGWv7ezRMQxHiB2Ys6ALfdZrnqfXVBzJnAmVwibuh",
  "key28": "3U93zAvj2U4gA1dcum7wYEy6rLDZYQEHgaX4HHdHjeyxXXtbMsm62L3MLujMzg6gkmWAPuRgUizmHoKDgVZgEYvd",
  "key29": "4wrJDL1rrhmxuQwGM3ig1m8E8mCNqdT5JC2eVffNGmcBZsq8QPQJ1FXYZJ91HSGZ14FNiUneEK15ALVaVy6PwTJG",
  "key30": "617VaN3B96zNJ9xBAmqnpgxBsHZNEdLLPx5KoPQgm53ZhrRfiNDSN3fcgkzBcHuhRxxciX8VSj2NX2p9rGgDbUZ5",
  "key31": "2QTk84YBtnPLuTmRg1PunSXx69h71FLyYYpmnxfpCz9e1qu4QmpAQpYMBgmMHrwp9qvyNDEtMpJmN3J4S18rDZSu",
  "key32": "4Ywk2FnNU7WsziPJ3nhLGLLA18xysH5Go3FkT3Q9vNNSBaJD6ZZv8G4AbwTJJKRy5rYrTasGhkbcC7kL45SD7Yeg",
  "key33": "442qhkdyFpfRZjVHogQQ1UBJgPpfXUoDfqfBqsWVbJqj4ZcJV8DDMzd3vWqV2n2o8L7j4MxigTQNi1Az9jHK8xo7",
  "key34": "5M8qvARpzjjpptM5YrThGxT5i2VsGJ5yYS4qoxdyE8KtKV8jaLFsdEhSvp12bze9pudNdnyuNyWRFioKC8CGNhMT",
  "key35": "61ZCrRGxnEnMwJLxvyyyqnSufrRgLsHCyX8UE3RSU94hmT5QewYvFJwM2WTtHeYLgv8B2W4jEWihb3dgqQJUgT5B",
  "key36": "21pgQtPcjrV28F2AdtvcNGk8aJALfKv3VQD1Eyh9CEywwgEyB1QkpZ1Za81P4LjRHYRdscLPSHi38ys3MfYBD4iz",
  "key37": "2qyY1yFrWf4T6kGsP9rUAinqu9tg94EUsCiGCbGg5CmPstxiXoQUTU9KHVuKFMB4FK19W3xrjZtxRHqN4MSGe5iW",
  "key38": "BuSRbuWaxXo99hFgSKfDueDBaVHJUCLWyDFnsDrH7ey8x2he7HYKc93vrR5CsuPsaPSHx7UisXzmFS6ZGw98nsL",
  "key39": "eQMHs8CUJ7obMYqR97sCTXUwDhUHYgihbTXUsTJmL9oEZ46YEJTvoKBG8i2PQbJMhdDfvT7kMG1Tv21CNEhbCef",
  "key40": "HPERhUw3ENsqibUM7hoKCqhRpCYir5g2G4DjeFUML4TM8Cr3uc3SnfTd7xXXwDBaUnKPj1tMg4iWGA6Pojf4TLK",
  "key41": "42CwTJDPuVbjDi6C2vYhGKrdKqkzquGDyzpwms9FY6bqXn33vAW9pyxw7BKz53zdDpD1x7BmuhfGL6xD2LXYQfZt"
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

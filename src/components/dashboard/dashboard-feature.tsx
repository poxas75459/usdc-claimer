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
    "3Lgg68Cnj9bXqzCJKm8Qz6AVgriY34yy6gXLaFTVRnzkd5DZuuRnMH51VepjWy59wZTrewSjLuvJyfYDfX3caFta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuEQ4AaTopneML7Gm6SEAE1pAqvcQZepKNE9Yf9bTgT7QH4ktytitBmE6y2wSPSdu9Vf1zoowVxpBCZp5NARwXF",
  "key1": "4a96rE4sLRv8AcdtDPQ3Tojt2iXZLpgBNAuaU7G7SzwcXjM7kFFCmvqxX9LMQ5yMJMw5k8p2d2zmcophhS3wR9H1",
  "key2": "3vqWhaNKNDQR9zUvJEdbLgdQkTmgqowSgRNbzmojNALaozSSncmXHknsgCfBCERvmwpueRwaqbH7qAxZKXg2Hfi4",
  "key3": "3eBNcxkWSwwnY5mDuVpMjeyNoQQZU5vbcYD55diUWW5vGidA5AUUdX5WxTJUpjPbYG1bCsMbUJYPrkV695s7GRZ2",
  "key4": "45udQrDnSfMGFqPMxRJasNXbXD2HEnwLfzFGzYiKA5pd8pA99kZgz8Bte5CFBWZPmjEr8RmnfagikADNUAAoQFip",
  "key5": "LGNEPHKhJjB5GzVZQF8V8fjbDRsAab4ZYUZepdYGWBmUMsk9jwNXfDvPWYqbwM45MBPTxtGJoZWjGv42iyv2EuR",
  "key6": "3GoSUVRsjWicFZixKteAXZUj8QXu2skC9k2ExEzFFtqu2wheR3NoLRhdUVRLM9WpSETNRtS9qdq7vH8QUshgxL69",
  "key7": "647sDwqjmUbdyGtBhdfT6y3CjbHSmDzdFritpBybY9EXJ1iQgzg811vusVoaV3f3hqrJXmn5No83WFhUuBeiBS25",
  "key8": "4hVftqHH6pQZHX6MsgZKqWoE1EwCDLGHi75jPU7Jzr9aG8mxXqG13T5nE9wpHdi35YzLkh3fzd7aN4g2nrz5bjjj",
  "key9": "2iiMViR84tS5YFqr7fjJpptt1AAbUYY4714JFuE54oknKRd2hwd5H4YLrgs8fCBD5yZ2FTHmguEpkKV5RHDfNvM",
  "key10": "ypAgPvJUiN479knu2XRip5WCoeVRd4TZY7CtDctiben35zyFDcx7pk9UELXU9htXDBQ9RbuoqHjoMkvunWcpqmo",
  "key11": "8YxRLSaZGE41mC1CetoQ7zHxwjZh5GrGzy1jk6kHY4o1VoWCE52tU39VNJjkrcbsad9r5iajEHPmcMpScvtQ9LX",
  "key12": "SEntjju7FYpmcALoqBWt6T1j1FqmqP7pFzFuBKrRKjqR1aJLGx2Gj1wSHBwxpwGhipwfYUnrrWcmAbTk2QoMvRH",
  "key13": "5LfDQMddirVJ4PmfeRMZmA4JRrqoJ2EirpQq1JhUwCGpDdkDKStsTFr1GhHS7rQD7dJMnrenLMaJgkDXAwUCgTdM",
  "key14": "3syxtB3jmWUyxxSiqS63TJAmKwTbPWKwbqUZrC8Wt6U3WE7xjoNXF7kn56mch88iAqVVyyK95RB9ZSQvFBVk65Rk",
  "key15": "5jnZQwLCP2Kav8vpay6w9rvLdWNVU8SJrais5euR79YtUhfuSFT6qtppei9q1NujX38EMLtwVGwpgrRUWXDubszV",
  "key16": "2AcCyCPWrBWcKjkZFFKG7kBesRm7sG5pmx9MBcc3BT46wHRPQHmxmkzi89sYiMZBf5RXqKtbyxirWd4Q8dFWX29L",
  "key17": "kVbsfmxu8BtLJR1wyBY4mCUCdRFLVRXBC2zADwHiudPvWLQ3GaiddDCSWV2idJRRXPsWHrEa4RcAZRy1b24eiBd",
  "key18": "2hWsnvdRfRKHJGPFPDgyPJ8aboe8s4h9LYAukBZMSv3ZaGgKuPVsKtYh8k3ELCskKn951stA7Z2APf4mQciXu43L",
  "key19": "3untUj5BFFsjMGrMcdDdEAfVZENp3MSkcwuDsdDAZKgm5uurLDT5Vt9eUb4bEFn3ZqnqD76spUvTriW4jg45o7o2",
  "key20": "5BwfXLdWeMU5s9PYGpD5eNU75WozZqbTSGoyVTPjXB4g1okA3bqkcekQjgcGJcmLiKCMzJA9hyUSvawBex1tUL84",
  "key21": "3fsZB8ifPNZUNJs5D9aMKHqrz2VvZPzAJs8CR8RZeFC2V1v1QMvtamMNZ5BGCn3746qRhFDMsu5nZqQ1c99oxydC",
  "key22": "21u9Admi1xsrZQHn6suAnGqZeBs4J3ufeQL9K21PxG47AQ4beFoRh7uJvtzkQzpMvAVF5wCBwBJ3bGGnZi95fHbm",
  "key23": "49jyv9qUsQsGgNPF4ogwoBroJyjpjpXMRSsgX42wqgT6NAVKbjwJRpybSjC67Rpfkg2asWoon4hTymrYyZnmDkL",
  "key24": "5qvZEzCuDR6Q2WKa8H2z9K5aXQwQ2fGTA8psf2ptgiBSP27566kn1imC1yAf1MFya6fXJ7mnyJjjqiTSjqe8LWTR",
  "key25": "2Q4cEwB6QeYduNJi561nMEKh6jEZP5cfQQX1q4kC93QsXj2mwQsp5ytnNPX99AxygKfV6nSg3z317q2oQmYEEM2F",
  "key26": "2mkApx4eSzAmVac9X35WL43C6n6sh7YvxsmSKj8a1ikWu9eG78RVpS8H2ucFHGTmNf7YvKTBCuRL8aXc73j9az3F",
  "key27": "4GxQyf6f5eqDrA2but6fg8NpPdw7u5V4Z2sxAeXWcXK1dgeGkeEf1q81oiQKLJV7PmMPdCETbxwgiUnPXj5xgraN",
  "key28": "4ZjsXm8kCXNfdw8gwZdh9qWaAymtr57mmDXxejBohP7YTArYCZYAqBdsmmG53tPes7HYVEBdFwEmDSjqrP6VMPW7",
  "key29": "bJgJUYkBjeCYeEm1BRKynn2BzAwqanKxbAuPCKDCXue4HvjCQ1a7fQcqPHNtAs5SbkDyu8ADkpKvRmeHj1b5fQn",
  "key30": "KbpPZpTGWaC4Sjmo4TdFpBUNUTBv6LPRHdGwLkNbWUcZB8sqHrF2z3bHBihuY8rsy97rQyibWjFLrFjbke4e2ts",
  "key31": "4UbiUNPy6bpmZ2hMoaHh8USBcgZT3mSBsCWwfgV1ryGsu8x5fbfGiU3LQ96Apv3UV826DgeKPwnpwTjfqvETMR9v",
  "key32": "2Vaoz6eNngwqEqmomYihcDEZu4prH4XuLyWTkYzfnRDwTD6nUt7oFDB4QAtEujpLNq9UitGG64N2bhvYNkQRnKgN",
  "key33": "aEgxfRire9VrxhN9CKRVQHUMxtyqm8TNC1BPuLmhGbJ64KAFcPmrF2pFWyngCFzdpQh4Kc3TXnspuAGNSY6ewcL",
  "key34": "344nK6Lp3iz1S2UNjKUZuXST9bvqcUKsc95QyxwoPskc1idtDW87H23qYYh4BcnFvnR8BqYLRZnM9cW44EWG77zV",
  "key35": "36Y7Qbg3Sh5pkMhXhHxTVEnwezJBRVAT6EUWaa4MtjKhETWaNfTGyR37b5AeFb4n68jkBLMg8yCtk9qmPkKXU73y",
  "key36": "zaGN2oZejxETcgn4giHqQhTpcF73jEGLGd9oHRd9EHSBjtDasK251THUWAGRYsPLRdb4WCx8ThzPvVvoJtxP9tK",
  "key37": "33RaRBhLAFohUuoHsZPtXjpRHg375PUsKfTTrLWf1j24eB1CTdUEu6C13zxwtz7b1G1uN9TgSRdugJJc8sjAP4e3",
  "key38": "4Qx9kYd7BCbqvrXMUaxXUMxb2DdACNUfk4UUXhijunzV7T8f5BmPvBLKXZ4tMXqXtFvHpTDHtu6fp6Upe2sYeU14",
  "key39": "3pqMKMWaYEU5nn9DjeJCt8boNLbotQgEPrx8g6mathYz9DVdvXFsmL7NxkRox914sNFrxT6QDniBE1wswtVXoPt3",
  "key40": "4kMff39t6vtiMkmXs99BXnZjDMW1kSinLd2UncmhEQXYwbaTXjityyXm6HgaNzYEqiMahAwaCHDsU4ajcVrM8BWL",
  "key41": "2uGwMHvq8WzcGnVTBMVjAVTtqRLy8SrTW5Wbd5sATzx3LnXQgcBZBvKjyhWRtNHgjr4n5eei8h8oDK8BpTFjzfpj"
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

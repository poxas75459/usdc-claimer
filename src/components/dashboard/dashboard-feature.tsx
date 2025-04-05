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
    "4ob8xNWX2yfij8r1prbH3PPdCzbveU1rVZ2kRLs7hqodSWifjGKzjC2Luz6yJHYSFM9XQ5WiH4C7qHchfPphvUQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkyWDGcwAoUzxqLh5ciHTE61a6PtU55zK31CEcVRRZrYtMYCr4bnemtdLmKbzsZgsiVWFHGykN6RkHdc6k7edcM",
  "key1": "4H39sdF7TczrikAwkZC1S5SP4Xb3izGT2B8kR9X7a4cmCk9hJp6VnYdKEsNUHwibCxuP89ynJBRh3gSrSEBGTRBL",
  "key2": "5d7BSBU3a6XP3BxX9rnc2NsY6LL1rmAJNma7VziEvTzdYmnB4tuxbWwddBcHduyMWcWJy9pg8dSNgwrCpVENYrtz",
  "key3": "5sPGkpb1yzBhNxfBXo8AUjLwia8Dr5aC8qT3ut2pSH4f6W5VjMd2MAg2w84Hr3HMMKSVVg2aWdm3GvfGahZdFwjY",
  "key4": "4aDK7Vrx5LSaQqU2a6KLjxd98MMDcQRisparFDFoLWWrQBeZZsrB2uisAaKgggP4rzd38DbtEQVXPEUYuXpcCxh1",
  "key5": "82dDGXq5wQiUjCoCEfy2xThJtXFhJbefE9Ea6FKuMZysAKGP2gYPFuL7hWL4YBejRPgBhCDm8TnjMFm3VbVnDyj",
  "key6": "5YWkK9pTQ28H66R1LaBWqRFUBdnMeDYd8wbDD7afHW2x7pmMZjJFF95ntkQEuPjoHkc2V15g22dATiPrPj7LoCrX",
  "key7": "3Lm9LGoDMYDvBbdrGUUhJm3bxYyDTNyPnJAXrhAzmSXds16f7995s6pDT4vRHFrx9F9yf6kebQ6dmfAvLQAtoDcg",
  "key8": "5k4CP9XrC73D4djRTJkyM96hqoW88VUM74FCFfAWTkPmEdHTdVmQKEeYR7kcPog3Av9yPyzcPYWSy18hBtcD4wLf",
  "key9": "3F3QWAhCvwsNPRF9Rgqyt3j6vUg6t9CMNMeYdpkAoZEtwGCj7TSUbDYEvq3LsJB51oftA5PKoBzd1kAWkaKcDm6V",
  "key10": "4TUjVSNuzVxUw34pw8eR73DKqbSxWyfqFRqSJP7ua7ZwkN3sGJcMAj4cgD7ghxSU8DeLGhuCJWkwt49zvh1tkLKY",
  "key11": "yjgSSWeC3gx9WBmhNtLSHCy2MKywRkwE5XYDNx8y1ygA7WiVYHj4iVWUroQgQwsAv9CMEqxoXyMmbwHm6uTXaj4",
  "key12": "5UqCsiFmcyuGJ5dv1sQPhD4w1zdqGvhp2qyEWTtDtDcWvjMvJfwvf2jxvjTYoLWUe87SzQLjjP65R5YexjXRBPfh",
  "key13": "4benYP4V5JmZLzXsAPsN6TeZzCgWEVxFVUkgzGrEStbXcLF4Qo6FiPvFJEvsu6jTaHgaGDTaSkzrdifxjekMeQLX",
  "key14": "541GUjnkRGNppLe2oNYPPWVDTrWdVSous8TNmhBve1vnmpcbA4bNFvf7nn16Z2GhZxhG8kLUX114bC4JgW26LW3V",
  "key15": "bYiS3dRgjt7R3i4fKvRxMbnuz9stFSq7DykX81iDiHuDWJuW8b3QtRv2oH39QJQNpi1EH5nKvR4TxJKmWP1qbdD",
  "key16": "2eTaiw1QNrLUMw2waCe7MDyFrWZevD5stDuknZYuf1JMpsDFUNStdG5X5zMD6JcQgLkaVgF2PUc9qEdzRB8ovM1o",
  "key17": "4suTquNdowwokgupBBfdUC1eRmLufHkEHfiQR71wx9VMqF2VAuxeYaBBVb7JCCKXy3PQ5fZb7AqNb16A9cbjeLjY",
  "key18": "2MUDvk2fPUvfTeAVp46wYyDgCAUvgC5Px8HZB5cvLGyqz9YRpstGADWK9HjBqVUKo2zEGAJw3d1znBiQMcuig6hy",
  "key19": "4LtLxf79EjBaPG4sLiLdtytihe9UAueNt9mLPxqW3VaoijDuFpSrchnq7qWcpAdgKAXtGAgExmW7bzPcUnNRAica",
  "key20": "46jjDXvXBsCyVLQ6b5tSdnQKdracy417HpbbUaHQNn3qUhCQXChXYTTQrP2g2UgjUHFDjvp48f6ht7oqq2dLqezZ",
  "key21": "645mun7oUFH39gXN5tyV9CS6QrxRsdMSwqxfA1HQFb1tfCpcfNN5e1exXSMd6DXMkvxqbroudZHN859tfXNN1Dwy",
  "key22": "4B9LgsqaFEu8WdvD5EtAquevU3rF13XFhYRcWfCWkdYyirHyVrU52aJ5wv5b4yjdnUkgZhbEJoHvp7BBQsrCzyfX",
  "key23": "4Wqt5GoeRBVV85G5MYKa4fdtA7Z79B8LnCmgfuSrsF38JCEEHEjh5ELBGYLG6ByxLKKFqiu6t5CzKaZvcDr4arVZ",
  "key24": "3P9gRi1fFweEUua7MFgaHSssBD37iwxGZs6iQ6xW9EcQPfGS53KNCBoEo6Q9MGuitFngXY5PzxsNiiPx9mAZ6uY2"
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

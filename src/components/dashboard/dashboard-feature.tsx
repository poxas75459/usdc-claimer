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
    "49d627A3vPv9b3x1Bdh3N1hCCpPoSP3r4v77dyap4mrgiHLRF8nN8Uq8B1VihFDFCNNsxV5YVsLgp6gzque88s8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bC2dUi5wVYfqWRXSGQYbhcPRd3hxkDzmUgGV1iQs7zZueGuRWMTK9vPqVxueizyDoVvP8PM2K6rxHHLqw7cFfDr",
  "key1": "2rfFTWRc5kQGeCcNaG2iFEP5gkynd3XhPsDd5tNqtyqHnVLrYfXmjAwPn1rsLycWgBHDYTvsUr6ecZFJxnyyA7rG",
  "key2": "bJssESkLztUDAHNiZ2WyDSQKXv1KjgpsQSKT84kRmEofRSVTuDL4bdx6wL4C5wdyMhxKa8ACLn6BrdQ1onwPBW9",
  "key3": "4gdT9CjKihHH1RbZFU1y9uHBDdygqv4StjCvY5SuPFp6ZWAMwxEpGe4Kb54rUDAJcH7D7RejbRifQmSu6FyRY4y4",
  "key4": "4yHwGmQGw83tTKVwtEZgXwyGZopzsZWSY15KMgxbAJPERkC9XMGaSYYaGkxPr9kLmyhkHdzc2g5ZxvrT6wTCrsKc",
  "key5": "6hp5WGHeuS3swACwrKUYAGW6jP72iPnpBfKNaGqJ6YYDXMU69tortAVenMLFP9n9Rk4VMuNxZvGGtfAJNESkg68",
  "key6": "26CGXURJNJbwsS96KU51ChkMH2Kf6imzVcPWd1thMvdsV9qnN2VCDgQZ84LioicRe4xT8yMXz9bsmCyeC1DgNHNf",
  "key7": "2yGbUJszLxv8q1NSHiH239dq1Q8kTkyDskYiPfGzTyaWjwafvuw1z99qhk7Q5RQUStGRbXZ7n2onkrFzpDEGDjpw",
  "key8": "3tbANb9BEvUx19UzSVmrGftmKBbdyBFTmoMgk6JYhakjFMbHKMwzugBzHn6zLCDXgb7f4x2eUPLryhvD3zoRCAVH",
  "key9": "2DsXcDFyt8DqmFTro54mEDmyGzUP31mssDcjvAPujLs8632eCxxtaMNm1KzeuxNLTMky3jo7a8HnUpBsqGwps7wv",
  "key10": "2NxsNBgZE3xbPRGrjfaH4pbZbSGVbP4QL7U9EKtyV7yZrAn3YGP2aNAJBXtvCputCD142q61K19cXN5UX3aTDjVZ",
  "key11": "2zMLFqTnGbnqEkjyiRNcdayxzCwqSmkJUSdoz2SQZtEq2cePC5hbvV5aviw4TQwg9mZTCCobuwHAaj5g4QBGzZxK",
  "key12": "3MF3xNFezMmh2CAJfBki1XFU1PBNeYBKh17fp3Kp4Hq9xxaC45c9BCtVRxwcNjfTN6hwg6WZzfrFLM3ocykk4GV1",
  "key13": "CH2aFrnnEoEXnfp8DV6beiopkJVkRYRPFffMwGeBsZJbDci4aKaY54b9BTkp3nK9YN1FuNvLv47LXtFiupsPKho",
  "key14": "XAsJnAS4nMW5RrP3dHHC59Wrkzkc7tZHL4wDHUjoPwYHxw5FPG4E5XXmWjo28BUYijSns8mbNZ83dSNJnTusG5S",
  "key15": "4ik7SovcLnCayebqkG3Lq6H2wPQP51XQZwvg6vv7j1hjwcVjis45MHkUB5dDjChFT1sKmGdsYhad4QppgjLSNvkn",
  "key16": "2PfWh6Cz8aNjf6jijgdY3yyMG7327zUqbd94oscyMr7PDmvgVgwjhtTdBisF8R7XmgNTCcxevCKzse2z3fw4JdTN",
  "key17": "3VrNdneEUD755Um7rJociJvWb7ofHL8HC6k38XgjcD7xxRDBrD2twyDDE2AZrm6VvwkAQcmoLEuWRTcgsetHVxFg",
  "key18": "4dXQCdAepiqby5xmNRPgVy1FKQEmdxUqACxiTLZxEY2F43wpyfLTz8VsZnqArbAvQTwLggqch9qXU4njVFp54Jbh",
  "key19": "4XBHbuSpcc47xdYqF38qfPCdvUzeoq4BmaSQ2s4kM6ciVMg3qAw8eMaYdc56ZYBYAVRUyZnz8RdPW6KtqKkh5MCq",
  "key20": "2HC2htu3Jh3nzr6dgXYFM9EAZp1ryABbi5n96u4ehAfWQpTxbFPADqcRANXw47BKTRKyvB62fWewySTR6SRxkgVm",
  "key21": "2dcnKnWzxtfUzQYkuWtEcPfCDUVuBnFg8XtedRwgkBhxPYbncnycGPuPM3GEN2HxYcN7X3irQojzXLY3UuNnXjXw",
  "key22": "2qBCnuSWQQ5mWuBPrXw7dM2xpA2pT5YkL3wwNWXbYq2NcESVGZeiB6C6ZDbGvN1uoSe5FzJS2zn1NqgcNo2g2361",
  "key23": "2p57oq3P7XtHEiaJFEsmrVPCwG8gNyLdVXMRwomJBkxhBy4Bz9ALc6qzA5LcVDYoKr12C7h8xy8miw9QEnatKyWR",
  "key24": "3pWwijBABMWuYmfM7vjJoewbEiHjrxt315YsXeaXQAUNn81PLrCFXnxaXckcff8EQdH4rjfHyRchUcVaf3QbkD46",
  "key25": "4oypNt6YTiw9M5TV1ij6VxTFtb7bponRmtaVkyv14obkJP9UC9uP2MNn1sj8c3wbnv4mXp7CkkS1g6h1XtjV9Hfc"
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

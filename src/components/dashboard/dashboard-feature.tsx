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
    "5g91H8wDxea4jNv5dW9txCS2NmnV12HVi3pzr4MVBqX8tNsrrnWR4oxX7aRdPkbNDbXLiiG1xNLXyryfZ4DjNMoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eaGSNqZzx7bGKZdaeyYXNNhZhLE3W2VH3n5zeFFj3AQ13UEPQRziW25yPW3BDbQ74cw9tAb11jdUeGiU6xyyDim",
  "key1": "vLJUQ8ecfg7RSnGmqh2iuwjT1shAtpdbAANvevDMJzTaN2gVGMnr2CDmRs8edEVDVkXXWDV4MERQvzmAhVtsySi",
  "key2": "5XpMFx4EKbWcyo2wAxSyy9u8bXBHjiWqnV8j2qkyopJWDHMejLFY1DzAxrhqrS3AWfuHiuBMbwLtHfSVvFA4v5H",
  "key3": "3sHfVcYuKoYXmTNDbTABQnVVk8Q5NCk5x8mMaPDEph8TKem13bD7vfiUCrnrxG6vUpokHtgQE4jQjPqL4gHXBes5",
  "key4": "S1oUs1NN3q7cgjVE5BhpkVT9apZFcA2RpSzYbmcU2MYoKhEhHvZHrctgBV3QiQTtYGtdwZkgbAGVfZC7NsUSish",
  "key5": "waLrTUKgDxF3bJRSh6HuhSi4Dc4gC7Qzjjt2bBvCGasdgnBziXWXcYRrFHF6R4YfD7Wv7d8e1rXs4rZDWW5z3PT",
  "key6": "2D9UzuZdpHfZbHDiZ2G4TW6UgN5AgNGZZ5aLKZvbybr4Pmkp3mpn2gLBRftGrLp4LpTmSiiDrq92Rj9XUw3EABVf",
  "key7": "5L5aLpVuMbRihyGY9Y8iYdFLevNnv9fvBuNroJuhPqgikL5iXgkAgjb3yppVA9jY46yDcD6S3kbx8qqH8X8AxMzj",
  "key8": "3mqAGzSpDGv6r1Z6crKSzrgea7G2NvJaa6HMUuKVGjRRwSkE3r5TjhskKjmSwotwAsnFtGD9HnTXSQj33t8k2cru",
  "key9": "5ftA6YBRgJb9tidyV5KgoZ8QLMgsHj2ucsiaHm3F5bKnSTtnkYjj1ChQa2kJBarfL1wkktSDoVmKnvdDTXsoFxub",
  "key10": "48bm1CPsURRVx49eLmgvh7d8GykBF3WZsWfAExAwcsxrVUjASZ5XUngUN9XBtRG1F3L2CgWawkfGMyQdzoqDrman",
  "key11": "2idmKiA7r8pKFBJ3oCci3nbKUUmo18roRWXKBMQCReqFdkqQBYpTzAhYp2cqcqsYmJ8wGj1P11BpCPMgwEPTvQZc",
  "key12": "5SFkePzdRkZNyY6S6PuajTo1o85so3yeiY7tNo1ZkpEX6obQJu6zKd1HjVkngY5KNLKYaLkgsmQz5nSRjqa6Ganh",
  "key13": "5r6Vaqd95WhmwV3SEQr5ZrH2MpxFnFXoziow44R8EVW6hXxkHZi7b6U67J6zzaxsLdyGUhQ3rXQPGj4LF2tGPnSA",
  "key14": "5F6utkFX3ExyS3Ctm9KZhLMcpWbtgwBke7h4P65Uz3iQBp2MbHtFZwWJcWGLBZstsTJwuMVu8S7hHM5DMTa8oRZD",
  "key15": "4PakTnUV6ffbSxzztQRU3zwjs8ncFMswvWiT3FN2hS3yV1ahmr1t6RCrDvbz9jmbe1qQWfzVyXAcEg4iYGfbm7B3",
  "key16": "TZBFJr2bNc4PgKivc7CX6ihwYDTDjw9ch9TQgqZThhhnk5whBy12KSL19u6MAYoyGZWJAL68SJMguS631qnEHsh",
  "key17": "oxb8Gs54Wo1SQiV4J1HmYZqn9yVRuUedz4mEKeNPALvDuBLJqS8ymLEAmMp4E35UwJH9dXxd47rRvSK7JXxv7Ee",
  "key18": "3Upex6SUQLBV8ZXJJ1am1FkfiNcZDgzeuAibhZiXy1oRHayqqaCN47Qw6CG41Lp9CDQAT3axNYK2gRq1MyNAKvFe",
  "key19": "4kZjKU563rwKEgVVFeadsHSmn7XR24Mfdzyy9wr5q3AcXLdhDMJaGYUitAG1wWMGAKzLgYEmxp3GoRyvXsKJZH9W",
  "key20": "4eyvkiSrzAqkdfectXwYWsGjrdtgU3dHCzqyRaRLT79CMfRERecNm5KbXGKhouiCf8eWENt6B6KFKwxYNELEE8yz",
  "key21": "58xwWZht9EpWZCzQ3W2gQgArXEVMY2gCt4Hi6XBNXent5Qo86K3KTrrczNZaSZMUXLuXzNVaXdKrFLvpQJW4WXQq",
  "key22": "49FU2peHGNxNMDSRmJ7GV923Bo5SgF5GoqrbhDUtVuG7W8BAj8Q2qDGNMZq8jwms2hYznXHPu5dWuhnN1HeqTqzr",
  "key23": "61CNfDcDSimdbKevWkgGoEASqnr5ZqMsZqdcmcVV7KMwrrgca5eFLuBV6s6yHmHFwybn6QK3awvBq9hTPhHFw7vB",
  "key24": "KQRoHFv6taUXGkDhroe2GKDZw3CTLkRqjAxZdV1DwfhT7SxgSC7oDHLEGs6qVL2iHopT19NUgPRRgksN6hW9jfD",
  "key25": "3JcHxdqMZAvtH1QC4pfAoce8qvSYSai9X5CGPGfpXuzQpdncyNAtZ46qW4HysAkjzVsE1YRp5A693AJfkYkfAiih",
  "key26": "2sR5Ftp2tyCRPLQp85wUVMpdgYrmsAAShsh2z7k99VqFkPstZ2J41eoXZZ6ND2YTRW3ZJw9DnnG4XYVBtShhiTpZ",
  "key27": "4osUauM2Vt8sCWiLR7yMfLG6Y48tpfdeRmDw9YP861tga62Vja1ACPDpkLQR9KkWBBBWLfFHeYmkKi6KzMG4rMwF",
  "key28": "zxUTeifP3pZDqnDv54MFKQC7XBxv6cMQtf2Gpt4kA7x8gniNcFEnXmz7uFf2JnNEkkdtQaPJNcnjphkJmcupA2a",
  "key29": "4JVRrvnxRk2okyoJhMm21okhecsGHQ4y1FnS4txJht2RzMCTtfc8gbY2qXeg8DURkF87gfQh5RvnCBnUQxoqVYcX",
  "key30": "3EvQi5Nqef2TG4rinjGCn5qDFQJUEsz7jxkmQsEDpqBgny5n96UN28SbMxvW9ykMRrkfptYZytEk6LZA31UW4xHY"
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

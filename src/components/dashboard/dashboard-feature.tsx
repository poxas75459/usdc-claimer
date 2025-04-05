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
    "2czzFJzVgTAN2ui8wmp2jHmimrGGhc1RtonP8QMyHD5rTM54zAauwhF7MKx1RZEbMT9fy7kSKRdLMEor6hW9ReTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MM8zAAbF9KE8PVjP7wkh41eN8QGPCbV5Xw3zMMYNfw94DGHwtLXVgcEhmXBinDWQZdBpWkH61WHZWSKq7Gw6QqJ",
  "key1": "67iaM8WHjh3tH6f1eU3CJ69THcfEXKHK5jsi3cSpQ643TcDRCyeo9QjA6yGarNE7XmqUZFowzSkABawMqt2cjPvD",
  "key2": "37vhCFaJLvdCYj5h4s8WAX5ZHXV9TRFS2DW7XfSHDSXQLMMJFBujL38DX5TVS9HSKJWufP9ykxAXvWMkEhUARmKr",
  "key3": "33CWKrQuFPb917Sguy9vkQtPywCN51iS6DkJ8Nnd85ckjhhAPUNjQ5QZXmjndakSyqYo82U6uqQmM7uHmwPzePyR",
  "key4": "2iU7kad4TJ9dA3KFTiAA35qoVuXXBQqMFuVfF5YXddozPa4QqEiF9yMHL8Y6iRGFSNRRzhQ5iAipAUUjB79zGsLu",
  "key5": "3dQoa2Af6qh75chrUGa22hzMPKBpYKQ1pbZWd1XLBbKQEhBTnKagz9sagcSxcCgnJ52QMcHrGcBRn3YqbTXy9nQd",
  "key6": "3Z8LfS963rHvocwxumq4RVdRLKRyTv5zyvP5DSs4FppLa7xFKjN3Mqrrs9h8xmU2LRncJQBeotadmZfJU5pSQ7LJ",
  "key7": "3pBvfsV9nxUUgGVM338gWCgNqWwF351G3m7jBpYXpsaUVf2AAxpf8F8TowoepsEaRfrkDP16XTEvdGwU8VgiSNHr",
  "key8": "58QA627EzjKuWmH6NmuWs93D9Ah34JfLXxrbMZt3eQCTByFrVF3Jb6kcM5kLwvqqu4ABQ1qfCzy7ph8tizDH7d1C",
  "key9": "5wX33oXnSgoAj383cd9k8YwFHzFNC2XxZ65eG7HLSRyFFrP3aGaFBgmXVbC8efFiBGkponTphq46thnHojC6QMaC",
  "key10": "588qq4nGWEoBYwmJQqbDxLK6AUxPJrUxgTtsmTubu9ZCGYQC5sfzX9TG7TgG5ehPLQ1MUjekg1326FU3WeNH4MT3",
  "key11": "5id2CpQoxUakV18CNQpt6kdrErvE78YoGevA5VhRBk1CpUtjdJMxSBqTGZfx3idv1zp9ALWtA4KMhRswtvXJuALv",
  "key12": "44sHGbB5asnii6iU1C5hthNYDGQeh3DknkQ4hyBkr7YYN9HF5ZeTREDqirXhka8av2UmNM76dWUZ4TRpG5DxZfAd",
  "key13": "47kSJtZN9eCUhNECxr6oJxRLKxQWaXETSoxwkchwXTrJaXEu59tLu5UJJPxD3S1WKuzyBfGuQH8SP4h8yfdDLzT1",
  "key14": "2kiAwmkvmBkhkquBN9FcVPeMm5rEhhSmszvLUsGZo9KYFden9eR9AfUKBZRmE6zZVLQcaEDrz9TfDap3FetjCaqi",
  "key15": "2SmiqrSaDLHiH58PpAfjHCViVFwmRBRSUU2wj2sfyAhr2HbMyzhpN88YzHPAtqjw4rtFhzWhUBLWaFyucd26TTE3",
  "key16": "2Wo36p6tJcfwzx7baHLu2hr17Fi3dpc9H8GqUqV7SswaYUvDqdjjhrnj5qzq1Cw1GB6f5GqFzoMxdJm6YytkaZ2m",
  "key17": "WB2PaWwn973KAWtrgQ5jvxeNd9FT57ycc3iMhErhipEWwqrv7nknr4PJF1FmsUvGtsJ2oVJWEW3Ste5ehzcsrX9",
  "key18": "5khhz4stb69SUFiVRTuS7qEPSXYzucxavdN7wJcg7Tgn1A8pmKeLBFH49B7KsofHoSSWKarHj8L2Xsyg9fMYoN3y",
  "key19": "5opCp39U5v7WFd1M1zNQvaG65UWEcMQSPaVurqHJ8cL8Dhd8sHJSxbdvsciqPjtE4imVqggze1dEdcbtXmrR6N1F",
  "key20": "7pfGHr5bRnf41JTCER9phzb8r2gcgN46eoPFPiUcPo3w8BjCb58UK5K6MpVFVoGNQyV1rCp3rxVVkruVgCzhkK8",
  "key21": "Bv6WuMsmCuDG1ndXZxdkUf1ZZBcQEFSwJmMKTJUcgyfbSwyiPvqi42ANRRyNDoViVf3X1LkSEfuvgbnr5hG316d",
  "key22": "3Gd2PpKtDTviuweTjXDptWUmiZt6ZNfk9Z5RhH2JogKJgQZWccKEbs5ii9jUoKT98dTBWwRxDSDiV22TCViRCYSP",
  "key23": "21UaMyJHVukahfmBJwP3myUsqZjiwHqe26Syku6ADHwo1A7CSrDvAhL42tKmBzUnRvF1varCgZ3CAU7wFDbDRLpu",
  "key24": "MR3UfzgPodrFfUpt36oenXUSojm4Azo7ybCjvUDmFGEmqKZzY9DUM7BWWrw4YWFaaYWhfQWtx7Lo8xFsuY4aqHp",
  "key25": "2ndibJ9ZPjht55BHSKq74rp8mfNxeCjchZwsJbpDBSRx9TVnTVcM9FLk22iy25a81evGqvzT6kQRwxNfWDjxM1WV",
  "key26": "3HuZB4Vq3NQ5mv3dJjXgXhGWHCmD3C1XUxm1eJ3b6YVSb9Az43VekDypbfKbv7wkBpzqdg2skJwAvrFSuMrQTdQo",
  "key27": "34cZuwUKFWtatGmVvR2QmhuaNi32sgB1FbYsHE6JBkCMF8btHz5PwU52TfQi5ZEeWmFpGHN3yGJVUhTqPYcgbvxX"
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

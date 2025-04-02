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
    "bEULdiExps83zt6v8ntSdWCyqSGHZ5pcLWQFLYSZ7tQrZvDYiWbFA3SXQgBQbf7DxcVgDe1D4Rdcf1vVx3uqrgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bhoRyFgx5964ppq6o1ncduSToAmbM8om3pzGDir4qRocMPUxTni3iWKzstBsLsGwPNqZFK8cUYe8R3GbBe5kw7",
  "key1": "5HGgvvDdizHu1sG22egmjE7mMf2HhPPwbKPRPdfKRLFypfT5ZtTvTUv39fiCmJvsv2AhWh4FxXwDPbGkL8Wzjgtw",
  "key2": "avvsDBfW2S2LdW3pStESKeFVczhMx6sHa33RYeAyNkooDDuuvYo99VActy8WUT7CM8M4NEAm7byjE6Tc434cHnZ",
  "key3": "4NB14gzPavVXWDMiL1gXhYS7jxXqsRQUywaWLrZGRnLo3SAe6ztu2iPm8PSEYaD7gU3LB7ddaecfeDWLoyBYjJyu",
  "key4": "4iLjyZNqfkpZ3g9QqFFbmwhLRs9wZFNNBgdYLXBGTqQGCiptyhyLerayHRnKMNHraxh8XM3VADX5brBs1HKKF1gD",
  "key5": "k2x361YtxQgnSsLedyV5Yvo4RQg6LAKKWUqgHnGMfcDine1r216pqceBF3FGvScPrFJ4B4rnEQs4YGrW5qktZf9",
  "key6": "4hWVaML7RsRLyxFmy3hkNfWdoZCeiGzVzYXqTo4SdLPrGHDJYjyoqfZGFNaw24GoJ7rLvKa7v595qmFwta7zdnsy",
  "key7": "33zfpXG1zzXpS8oExFJxgaW4MSNXzSV7godqUxUVJCmyj4CBU4tnF2AMwVxWaU9aLtuRHJsswRwyp7w13TGyXWvW",
  "key8": "2aHsR7t8rgDX4iuwAhN8afra83amKF5ufiwcPgmd74m5mDaapA7KNe58TkSkwc5uxJuM6z6mpSjpWVAcp8RbKoCg",
  "key9": "5waxjtVdHGhJyo2tYkWmseQdPTKZVh2NSgsFYwSYQ7kcY7wnKJTGVdjceZbyyeYyYbXWdSfVpzSyT6yg1eNQE1R3",
  "key10": "53QpkK6shm67o5es7JpVHTXuYK1jzuxVMmsz5yoqqJYW7dLKg7hp5NJsBwsR8UaC8kjyGW5uDatnponsQeovyF9Y",
  "key11": "595ytAFJ4hQpdXQBHUZQ6Ld6WnJo92XZvUwu5h74DatMs3LXrNft5y7F8YBVSqP3nf8x3qFWRQjrwZ16xDW9zWq1",
  "key12": "5XBxVoQRK9MnZb9ZbqysWejmdRaYco2m9Uur8sTLuYNRKtDV7Dp8biDKrwUDf1Py1iu3CTtEuUTttVNLzKXjYJ3s",
  "key13": "4rx9k94E37YQdz1TcQCnCTtVhVzQBjfW85SEh3FyoFCLwdDdZgSZirpJ943XeNPr1mnHDaBgPJfrxwMtovvHbNMa",
  "key14": "3TuVfh3MM2TvAaA2c6ETEkcguhobDQozFwYFgvAtBz8rk4swe7uQnDBqphRWYG9fGeFEopnQrzo3m1oAUQXapU4s",
  "key15": "4YF2W6i7AikHe9rdJdS6qWriUCbSDqfSpYZKqKCVmazmq2JWihSEoQ1NLh3pjhhQTst2jy3bm16TwKyJNfaHBXUj",
  "key16": "2uMik3Dt8AUYRyTDD7YeRo6BBYHNck4wYqTRvHgENNpfaYTW89jskoMxYK8BMUJfhmkAbLbNfC7FsbwML1Tfby7c",
  "key17": "4f4vC7GVZfaAF3pV6iv9co93DsTMReWyMvuJSRzZKvHjgiZERz6kfD2aqbqccium94H6ZVdijxCN6A7tJBrLZaBE",
  "key18": "5dMY4L3ug2tecDiqJwZATjUrm6jTFESs52oFXtk9TsNsjHEphxQ6mCDMRFfi9mBUr6iv2QWPL5Z3L9zirEG68g7b",
  "key19": "4ejxSGeMxw4Sjv7F7fxiViZE4Bm8jd3FdYhavLeTRtBop6gHJmezeD5P7NskUCQ7JUAGyQBCt3jBRknJLPJosYPi",
  "key20": "3XrbjQ3JXvw1JnyCMgZsDbzU3zgRGAR3KPNJmVnL3Cudfq2q5UXaHQgw3KsYA3jga6LAgX21kijKdKmHhxmJChDw",
  "key21": "535NmNrxJsGFm8WdVXDXjaz9XJb2NLLkcBwUCpBLVMuLQRTnZtgZdGrUMs1whKcjK57ytE1PakULLV6vD35gSrPt",
  "key22": "5MJPMUZXVg9Pe8Cukrww7VZ5RjUeE4AJUSGj58YLaPg8KX37zxj5M5Fh489rdgczwaJxSh1qeiZ41YaApeShWere",
  "key23": "4ancJSWYkttxWMhQWx9jRdaXBDsPWWUKL6YVecJ9CCVKzGkmCeqGp6G53nPNNXiJgZKX7ow9jU829DhBaTTA3dKY",
  "key24": "2DdbPwT15EMiYHDiHaF24iZb8yDzsyMSAJckJR6MvfFWPRumJsT4ZtdPCdmFcqYAfeZkRmMLakoVD9N5h4yPQM4o",
  "key25": "2qyU2tK3GpyPyTnbVi5a3CmH8QeiEE9YNMqMfDPWsAYVG3eQrsKcCaGpE2wS1fN234ik31xUaB7ymGD9jk7xCjgQ",
  "key26": "4t6npG4AuEbYQ2A7cfn2KRHzYz2evyxxAhvVLehCmu436PVVRZ3m5refaC8DdZgeHXxWCzHaQeE3ZLb3EShbnHC7",
  "key27": "3Sp9zY23AQNCfiwnQq4BcjtHd3jyn7ejNinUJYaAmXVszFEnEYEheJYa9iCGm9wg57TCvtGsoxZkevo4PLAjBmTB",
  "key28": "4yczDULn4DLTr3RmkP6aG9PETJwVZBLMLd68fkCYQbFBNkRo9Us7dtQZerysmnBV4Rb4gcZ4XfVZ8A83BXZ4RxvS",
  "key29": "gheCG2GiMEQWHPHfFy2pV9RyRPByfXkzaRKm4WAe2QqpxzoqQQwuLB7PME7v1pHt8F7KaSQEaEnchT9LajjBDr7",
  "key30": "2aoux6GmQcWAjM6tBMm43scPExehAdLfmukhNEi9ZkvZJQgueDCYy29sVcX1GmdPW7PF1vKi7hYYxWN2dZoyq2gv",
  "key31": "5HkQ24tzQoe3rQ44vqrUDEcfNbPQnPyXCmr4MYYzUZLtS1sjNkVym8t6HuUDkHiW6mmU3Bdottwqk9WYk4Mee1JU",
  "key32": "59YScCwUaD4yMn8s1qdTyR3yerQRbNAdZqqiCA8AJpAxfS9YRXn7EsT1xnivWmrzJZEr3mtXfVYgGysBztwhiQBs",
  "key33": "5RrZd2XcgdVZXR8ckG8k1szk9qDNzEmq9Hry3rJ2vMGGWuFHjoTEVwH3cBdQ9617kJoMkLBYsXaMUJcLeajcc79D",
  "key34": "5258w6trtHhxB8sCxZkgXFQFxGGxpA9QkoPFScgMuKPwTbeQcewDWnxfNyhpJ8Fo9aoJFRHm2x5h4zAQ2Rj9WcHj"
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

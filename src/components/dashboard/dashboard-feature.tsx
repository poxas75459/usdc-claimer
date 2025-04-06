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
    "Ecik5sHhVrSxErUEh17CutKTxetKorGwrZFujW5MKutMrkidskrwsPWKPtu4djzLwHZ7yTKBmsM27A4gEBjcUBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nk1xz5UKmWrbBD4tTG3fPwjMmbLboFqgyWBB84R7x4Nc3Nh8jYPb63tnr2aDGF4mMEcmewAo6sKRpLJPxJdXAzV",
  "key1": "2fwSAbsFaQm7pAbTRNnUPFQTu84iwbFKedRqrBtqiEhY5TwLvKLsfeJxogHS1qayxyycrZ3uXrHvr4S56Byss196",
  "key2": "594XDibGiHkAbNsFMnRhGpaxwikVsmpxRAgLSkXzVzqAD3s67RxyPCeWTxwijiCen7RfUTCfLsSSSHvHVtG1btHa",
  "key3": "Dv72FpoGeJsp3HDRV7Txyfe5itUvBZibRWNjfZHw7NAeKSEeCnKZGLDaHGbWXQcdhyQDjZDzp8zXFvNx6Zbegrm",
  "key4": "5RkfKsPbcqCEjYnrtqktW4jcXeEQe6vxWZXTnTeBmos8KRTHGebiNEJj9aTRVY9R9i46EVr94QVnwPRGcSGD9QqZ",
  "key5": "2EKQCWmCYeHix5uMeNwNNX6dd4UdvmY3uqx5vpkfvJFStv1uNoXScm2AttTgTE6a9A9jK2an43ntTbWjGxNZkEgC",
  "key6": "3BhwE286BcD84DuqrjddaAfF7aUZhoSgsfeSAf4HZtSEWLfo9xcBJgw4tAKaL2spJigJJfD5eLTRFhmkEyg6dYy7",
  "key7": "3doJRskjeYRpKaUCBLbJ1GnNckXpoevfBUHd2emrFyvtC6WFrQmYmTRxL9UiU4TgEfChZGpfnVWcoNPRpoDXJMM9",
  "key8": "66fVZqNvmDBH7rMubr4Rd7xiyyLWStXkdqujj2tLrZhYWBeqnfsJSRBWYSbJqvthwiHe2n6JMf58iK7vEkodW9H5",
  "key9": "56Gqt5JyzuEbNUk8pe5tEgoVZCpywSaJATkegytfWDL1f7xH7zYqbwguLBMMVXFvxcCRcCS423jpva6gT1q551FP",
  "key10": "4EDfas6QXGe9tCCmMr7rB2f1ZxLmm98UpBT3de7Gan5tP6xb1iZZo7wgRUp4uHUvEijeuW9yje281CbPqGriMziR",
  "key11": "5eDX6cBVG2KPmsZPds8geZikKQayYQpvaHeSkz4CSHKTrs4A96SBQhihMcksGmyu5xbXdSTY4amgB2NydEfJ7GJm",
  "key12": "4iiv84vLX8j5gqDu3au43K8mv41LMbfqefBvbz9EjresPHavxmjsU2y5PJUvUwFFbNPd6je4ADeq2kHHVgVw8tnb",
  "key13": "55QJLqgBVXgVbJRequxJKycq1AaMuCeCdVtZPDfxbXG81bb6CftqBDcp1Tt7YKjynuXtLgXR2x17gUVjxrrj2sCv",
  "key14": "49M1vKR8shuQLqUREVvgQV3qPbG6MdmSLkH71jho1egAswPvoXGWGzkhzCenVCw52TfDfXqVEEad5UrY5Vocxjxm",
  "key15": "3dzqSvxdGoe68t7AqrSrt9HfKxgRpGNfXTghKCotk5R7XekksSM4qxF5RXhZFseBpscqpEstFLm91rZ2ceyw1wAV",
  "key16": "4utx6Dyq21TYTY1GJqYj37v8xHPXs1sunaDo7D89o2jyfw2VmA5j8vwJGEvhNi2xUKcmGvkX1To94JUTRfFUBr7n",
  "key17": "4Fii3SxFcf4JwRCFNvkCFVhJsVGncRjYJ3yFs43UCvR97G4M3KFLCRERzKbauJeGmfCgMUhDVeki6fSAzAFBN8kG",
  "key18": "2TjBu7V4cbt1HXAxWa1CMr6UaRVXC9AzhwccuwAATKUVjTWW47DYCAKTaY4qw95jZzK4TSte6nzWUaf8PBsZh8eR",
  "key19": "4HmHijjYLLyG6KmNMeRnXnh3xKdnEJBFMq9AqhK5iMVzXxR5Goou5iFyQvwuKAuDv4CB9yjcJEq3rygZBTT5PKZ4",
  "key20": "3mtmYpQxxY4pKKZHYV37dxcLx5ary6KCroyVZ4kau7nr9SypMcHmc5YcBeujkHiQj3XAbGu817fstXajqzUBhdM4",
  "key21": "3YnvXydtMVrsrN43tAkXnejM8HeJ7dm9wiNXkNx4SKTKYcFTTkriGkESLJdkTtiqCVQPJpWwaqpv2bgjyLfdDfoZ",
  "key22": "yGu1qbhbcQT6wohpSD8c4dWutAtrrBGuaiu9c3ZXty2bheF9typugXq1H9ibW3skadkQ8a1XQefqMrPmA6pcZJE",
  "key23": "7AhW83oLaWFmfbAyGGyakvc4sPn5VBGNCywE4h3ggJdX4uSMFKCoqhzgKAJEeKMLw4ShXeeA4zo7NoQFxw1t2bC",
  "key24": "kTn7w75gdnhQYvVTX5fTnNFdwVXgZuVusHs9MoQk51wmLVwizwzAg9sdhEVQxgKYLrQBYakxV2cNSC1hoGsJfft",
  "key25": "3Ymsg5hAEeLDgoacFMMF1xabsSVeg4b7iiFTS7McYaMdU4TEBaqyEwEdifGQEa9jpKgFeXFt9i4L5kHw5fUaaL6H",
  "key26": "89tCDrkKwj4JYmmtic9kD8EgjiCm6zhhiLVnW1PVfaaxQxjNMBBkXxp3Xta7GpveuZKbZMCZC36p3VkzVUP7Cij",
  "key27": "3FP2yudp5Ygzw94vMBeCaFn9HDV5mmzUDvEwocdD3n1JgUyA93aBDLXA9o5Lhx3uXb6CKNJ6os62HUkfaqMgrdVb",
  "key28": "5wXcNApeDWQA7oCX4jn6yRp1xgXwxzkgV4GwcnAdMQWedQ9KqL8kpeSyzpERCxbHe49dx5JnmycnkLVhxzK51PqG",
  "key29": "4aNGNyE22kQfpty5aq5XFQaeHnh2DEQ5apBBLRuQuEexL7TYMPgJWU7EACqhHmuyMYHPMY3AdZEFFSVfakSfwSQE",
  "key30": "5fSEGvFmpvboSgotwZ3fqZVdG9q3KzdCWuQg5hgRRQuRudy6aZLY2v4kYCogZrYiNw1fehSRYUtQkGydk2k2m4Bm",
  "key31": "5p5huue6ZdzfKgngWMem6ZVd5q3GX4SJkVS7pTEexdBCpStWuTg7YVimEh5cxzCuUcY8z5cskzDcFQj35L3MR1q4",
  "key32": "4o1bdqfccijvVYQSfzpfmwB8pGiqcGfJ7xdY3u4oB2Cvt8HUMhjy4dNyS34KY6BjdoUh5Ww2XVxNAnabxF5AjiP8",
  "key33": "2BBb9HseXmtzBEMHn3DZPGko3g2wjpYUXeUs7KqV9vyZgf9V1CZYQozDDK1xvCWB6trbUm4sH3tZuQJneMDnm2PT"
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

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
    "4BUKaPGwc8797uw7PWcuQicrBaSFESuWZrc565kHLvZMwdFTKzzhSGch7Fida2wxJoNKx6KM9Khd7iuESQMpNCTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrNZhrtJ8KWSMq9YUw5Zx3xMi6mmGkH9dhwZfVEj33Sqb5LPQtVkKwp79zStqDGkYUT9HgtkB2DjebqgzxSmZMc",
  "key1": "56mbJFTSba6RY4xovE78xjTe1mNzH7Hoy2QToWJe2ADSQotE2WantnwsZpA9s8RDfYg3kQ2yGVni12g6jpDStnAz",
  "key2": "2ecT55gerif4713sDkkmWjvgLnACR6yYWPC6Zb8fvmDARKJThFQXB2hski1YZhknpAYsXPR5ePwbSjHadKeraJdL",
  "key3": "f6TCkTLe9JekEhAcKFDZ8CvAM7sVctLgUCQXR62m5GnKkYfLvn6mxCzQUXDit4bMrcEQKwENFNmLwMe3PdkYXFs",
  "key4": "5qad4EwHUFHJKM4W3sPbRVqhGHe48BUinCXYTfbSGqFEeYQa4UyhXQcibEiY2AtNn4VKMM5gRia7U2anVA3L2eFN",
  "key5": "3uoTaY4Rxo9gyTsBpF6WumnMU9fUFee31yXX9V3MdML2fkez1zLvZutgPto27L8yedyF1WrShvLZhZTfHGPSVVk1",
  "key6": "3qn5cvEcqhxoSkp6theTNXEMSqd7xH9tRyksNDCTY9F6RK1JVGL2j1cz4hYkQ9Tb1g9KXHoEhkVExtzWeYjd1xmm",
  "key7": "28YRx4aLUStcYZaxdp48jL9gatZuR38rAvKeRVW17sNwFiQXYUj2baJeSb5NVSTGVd1vTXzDFALzWstCcWhmLvBM",
  "key8": "4R9w1KTyw5WLf2wpBoCyxMsuJv5F6Bk9TaHRPRDDHYjoxeQavXbLkVhdzQeVtCLVLeh7FZMbZo8j63hGYRaGgjbX",
  "key9": "JgsStYPskLRXTyAbk9LrcG9P7F2Jmef847GbuiND8PYovqEVC9kb7sRxWLHcpUbRQNqrHP1xCTNxg2URJftAe6i",
  "key10": "2Bc7p9qWHwiXUC75WnGQwrSshxZy2oLrQ1AeCsKkma1FV3gSwqSp3Mrup2CP8bwrQENsKShjXGGLuZN41P6QKJGG",
  "key11": "5WzrC8ww3fRayXaDsQGb7rJNczSEn9gdmviZuHhwhLWJBBG2BmBbjxk76VsLmuB13r4kjEWyLufbzYUUffFUWDaL",
  "key12": "p1sCsE8pDmxA83V1q9XHyKp8iVERmNKZ4LhNioBANupMfGd7nUWHTWXE2RWMTJdgzbw3mTXbPx4Pw32Lmy7LdTh",
  "key13": "2R7W2wpoQBF4F3S3g7E4xxti1iTZ9DEJUS6bY7yMMpJWhW296yMhVkTKSNRJLAdpKdDyo9BV1PX7mztuWuSsaCiD",
  "key14": "NN5jaUojg4Evf2k9ZYkGNaMnZ69LNmbBJa2VD9bssGtrFsJaE2GkzhYomciwuL25jnD2o7pEfVBY8zKELyLktXt",
  "key15": "37wtR1hbi4udCk4fsPnwgC2SksX19sUC1E2TxpLtYgZM3xJt5yzPQS7AWMPc3un4Ra7Y2TX57EySPaMHyGsHHZd1",
  "key16": "SMQgbXTXydhURSCyMCYjtyh6adv1CXWcaKu7zN3ruYWHUianxM47YiKYfkZsxLp8R1a2hwA6pNuv3ei6Gj63YSr",
  "key17": "3VxfrsNjRWuSBSeYkayN8pomu9Pz17bVDomWE2eP79pUWYXEoYArwA8cmnheUCeckgzJLiFR4G5S2rT6Q17gHv98",
  "key18": "Tew1tXnd12bPLUfxFdCiqzeWnN1fkxSzEF9xpBvCfpehihgFXb7s5PRbLQEUou1ny6MoNE6fmMWZvSuxCmciHNp",
  "key19": "RoHt3MyANs932Gu5C6m374cLdahZA4whfS2rpuPYdeQ7xB9o57Q9eVhZSC1m3A4DXN6avozEEJm3ciMprGBpkzt",
  "key20": "5N5QLnx5JL8Z8oLcZYB1AhL7dJvoSiedJZJy3b2nJrbhRqHqpr7tB1DAeDMtGJ3M4PDA5rq8U3khY14uzsdXkjwD",
  "key21": "FNvKNcgoHUbP1yVqFtMTCXjWUJheLBhEj5qxrenRcavhGVst7Ap6xPwBM8Gdkzd1USzwp4ipsdRqLxRfhHQk1RE",
  "key22": "4uAHQjZ8bQ654j5yFigJRRpQ9sNmF9SqpQEbRURPsFkdBS2yZCKZGkn3T8fjyJk2SAreamDnTLdKYT57Bk2CGYwo",
  "key23": "2bspbowC2NzDHuPmNvMczLxdAfDaeSJwPp3Dq9cryjyZaVqMRdYiUtAUeY22TQEDchJTt65CjNuby7Uin23x7BYQ",
  "key24": "2LeEopQQ4MynmynGMRQLQ757jadyMfYV7qVf3WZb4dT4ejzdWkCZtWTeoowRDocpq7u7wRxwPUaBgLYVnFYjjtRu",
  "key25": "46CVCbZV5aKAbpaoUfttc7aKvWAcadHy1BEfX95VTJUP7GYMRzh1DRpN49sTF8TFguW5mzn9u7ZRpFmWRH29hJz",
  "key26": "Myb3zzQnmh1Hu5T9mFLnyuAtSzANgG7kctyG3VkzC5A1bGKbCqsWiSKAQaDA9Y5Tq56X9MRxnnphrPCbEn7L3zz",
  "key27": "yGFRsz7VxWoLTDs4a2TKTSydh4bPW5Yxt2nA2Cdxh3B9WeV24TJYqfVe6jfF61U2uqw5HkeRxxcXUzrw2pqxS3Z"
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
